"use server";

import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { revalidatePath } from "next/cache";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export async function createCheckoutSession(
  items: CartItem[],
  orderType: "DELIVERY" | "PICKUP",
  address?: string,
  specialNotes?: string
) {
  const session = await auth();

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.0825; // Texas sales tax
  const deliveryFee = orderType === "DELIVERY" ? 3.99 : 0;
  const total = subtotal + tax + deliveryFee;

  // Cart uses item name as id — resolve to real DB ids
  const menuItems = await db.menuItem.findMany({
    where: { name: { in: items.map((i) => i.name) } },
    select: { id: true, name: true },
  });
  const nameToId = Object.fromEntries(menuItems.map((m) => [m.name, m.id]));

  const order = await db.order.create({
    data: {
      userId: session?.user?.id ?? null,
      status: "PENDING",
      type: orderType,
      subtotal,
      tax,
      deliveryFee,
      total,
      address: address ?? null,
      specialNotes: specialNotes ?? null,
      orderItems: {
        create: items.map((item) => ({
          menuItemId: nameToId[item.name] ?? item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
  });

  const stripeSession = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      ...items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Tax (8.25%)" },
          unit_amount: Math.round(tax * 100),
        },
        quantity: 1,
      },
      ...(deliveryFee > 0
        ? [
            {
              price_data: {
                currency: "usd",
                product_data: { name: "Delivery Fee" },
                unit_amount: Math.round(deliveryFee * 100),
              },
              quantity: 1,
            },
          ]
        : []),
    ],
    metadata: { orderId: order.id },
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/order-confirmation/${order.id}?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
  });

  await db.order.update({
    where: { id: order.id },
    data: { stripeSessionId: stripeSession.id },
  });

  return { url: stripeSession.url };
}

export async function getUserOrders() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return db.order.findMany({
    where: { userId: session.user.id },
    include: {
      orderItems: { include: { menuItem: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getOrderById(orderId: string) {
  return db.order.findUnique({
    where: { id: orderId },
    include: {
      orderItems: { include: { menuItem: true } },
    },
  });
}

export async function getAllOrders() {
  const session = await auth();
  if ((session?.user as { role?: string })?.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  return db.order.findMany({
    include: { orderItems: { include: { menuItem: true } }, user: true },
    orderBy: { createdAt: "desc" },
  });
}

export async function updateOrderStatus(orderId: string, status: string) {
  const session = await auth();
  if ((session?.user as { role?: string })?.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
  await db.order.update({ where: { id: orderId }, data: { status: status as never } });
  revalidatePath("/admin");
}

export type UserOrder = Awaited<ReturnType<typeof getUserOrders>>[number];
export type AdminOrder = Awaited<ReturnType<typeof getAllOrders>>[number];
export type OrderWithItems = Awaited<ReturnType<typeof getOrderById>>;
