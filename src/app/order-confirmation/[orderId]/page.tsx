import { getOrderById } from "@/actions/orders";
import type { OrderWithItems } from "@/actions/orders";
import { formatPrice, formatDate } from "@/lib/utils";
import Link from "next/link";
import { CheckCircle2, Clock } from "lucide-react";

export default async function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  const order = await getOrderById(orderId);

  if (!order) {
    return (
      <div className="max-w-lg mx-auto py-20 text-center">
        <p className="text-gray-500">Order not found.</p>
        <Link href="/" className="text-amber-700 mt-4 inline-block">Go home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed!</h1>
        <p className="text-gray-500">
          Thank you for your order. We&apos;ll have it ready soon!
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
        {/* Order Info */}
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="font-mono text-sm text-gray-900">{order.id}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Date</p>
            <p className="text-sm text-gray-900">{formatDate(order.createdAt)}</p>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 bg-amber-50 rounded-xl p-4">
          <Clock className="w-5 h-5 text-amber-600" />
          <div>
            <p className="font-semibold text-amber-800">Status: {order.status.replace(/_/g, " ")}</p>
            <p className="text-sm text-amber-600">
              {order.type === "DELIVERY" ? "Delivery to: " + order.address : "Pickup — 4747 FM 1463 #100, Katy, TX"}
            </p>
          </div>
        </div>

        {/* Items */}
        <div>
          <h2 className="font-semibold text-gray-900 mb-3">Items</h2>
          <div className="space-y-2">
            {order.orderItems.map((item: NonNullable<OrderWithItems>["orderItems"][number]) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="text-gray-700">
                  {item.menuItem.name} × {item.quantity}
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div className="border-t border-gray-100 pt-4 space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Subtotal</span><span>{formatPrice(order.subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Tax</span><span>{formatPrice(order.tax)}</span>
          </div>
          {order.deliveryFee > 0 && (
            <div className="flex justify-between text-sm text-gray-500">
              <span>Delivery Fee</span><span>{formatPrice(order.deliveryFee)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-gray-900">
            <span>Total Paid</span><span>{formatPrice(order.total)}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center space-x-4">
        <Link href="/menu" className="text-amber-700 font-medium hover:underline">Order Again</Link>
        <Link href="/account" className="text-gray-500 hover:underline">View All Orders</Link>
      </div>
    </div>
  );
}
