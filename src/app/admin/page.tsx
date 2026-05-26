import { auth } from "@/lib/auth";
import { getAllOrders, updateOrderStatus } from "@/actions/orders";
import type { AdminOrder } from "@/actions/orders";
import { redirect } from "next/navigation";
import { formatPrice, formatDate } from "@/lib/utils";

const STATUSES = ["PENDING","CONFIRMED","PREPARING","READY","OUT_FOR_DELIVERY","DELIVERED","CANCELLED"];

export default async function AdminPage() {
  const session = await auth();
  if ((session?.user as { role?: string })?.role !== "ADMIN") redirect("/");

  const orders = await getAllOrders();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin — Orders</h1>

      <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 font-medium">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Customer</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Items</th>
              <th className="px-4 py-3 text-left">Total</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {orders.map((order: AdminOrder) => (
              <tr key={order.id} className="hover:bg-amber-50/30">
                <td className="px-4 py-3 font-mono text-xs text-gray-400">
                  #{order.id.slice(-8).toUpperCase()}
                </td>
                <td className="px-4 py-3 text-gray-600">{formatDate(order.createdAt)}</td>
                <td className="px-4 py-3 text-gray-700">
                  {order.user?.name ?? order.guestName ?? "Guest"}
                </td>
                <td className="px-4 py-3 text-gray-600">{order.type}</td>
                <td className="px-4 py-3 text-gray-600">
                  {order.orderItems.map((i: AdminOrder["orderItems"][number]) => `${i.menuItem.name} ×${i.quantity}`).join(", ")}
                </td>
                <td className="px-4 py-3 font-semibold">{formatPrice(order.total)}</td>
                <td className="px-4 py-3">
                  <form
                    action={async (formData: FormData) => {
                      "use server";
                      const status = formData.get("status") as string;
                      await updateOrderStatus(order.id, status);
                    }}
                  >
                    <select
                      name="status"
                      defaultValue={order.status}
                      className="border border-gray-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      {STATUSES.map((s) => (
                        <option key={s} value={s}>{s.replace(/_/g, " ")}</option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="ml-2 text-xs bg-amber-600 text-white px-2 py-1 rounded hover:bg-amber-700"
                    >
                      Update
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {orders.length === 0 && (
          <div className="text-center py-12 text-gray-400">No orders yet</div>
        )}
      </div>
    </div>
  );
}
