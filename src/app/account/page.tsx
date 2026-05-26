import { auth } from "@/lib/auth";
import { getUserOrders } from "@/actions/orders";
import type { UserOrder } from "@/actions/orders";
import { redirect } from "next/navigation";
import { formatPrice, formatDate } from "@/lib/utils";
import Link from "next/link";
import { Package } from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-700",
  CONFIRMED: "bg-blue-100 text-blue-700",
  PREPARING: "bg-orange-100 text-orange-700",
  READY: "bg-green-100 text-green-700",
  OUT_FOR_DELIVERY: "bg-purple-100 text-purple-700",
  DELIVERED: "bg-gray-100 text-gray-600",
  CANCELLED: "bg-red-100 text-red-700",
};

export default async function AccountPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const orders = await getUserOrders();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
        <p className="text-gray-500 mt-1">Welcome back, {session.user?.name}</p>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <Package className="w-14 h-14 mx-auto mb-4 opacity-30" />
          <p className="text-lg mb-3">No orders yet</p>
          <Link href="/menu" className="text-amber-700 font-semibold hover:underline">
            Place your first order
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order: UserOrder) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-gray-400">#{order.id.slice(-8).toUpperCase()}</p>
                  <p className="text-sm text-gray-500">{formatDate(order.createdAt)}</p>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${STATUS_COLORS[order.status] ?? "bg-gray-100 text-gray-600"}`}>
                  {order.status.replace(/_/g, " ")}
                </span>
              </div>

              <div className="space-y-1 mb-4">
                {order.orderItems.map((item: UserOrder["orderItems"][number]) => (
                  <p key={item.id} className="text-sm text-gray-700">
                    {item.menuItem.name} × {item.quantity}
                  </p>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-sm text-gray-500">{order.type} · {order.orderItems.length} item(s)</span>
                <span className="font-bold text-gray-900">{formatPrice(order.total)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
