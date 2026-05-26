"use client";

import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const subtotal = total();
  const [orderType, setOrderType] = useState<"DELIVERY" | "PICKUP">("PICKUP");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const tax = subtotal * 0.0825;
  const deliveryFee = orderType === "DELIVERY" ? 3.99 : 0;
  const orderTotal = subtotal + tax + deliveryFee;

  async function handleCheckout() {
    if (items.length === 0) return;
    if (orderType === "DELIVERY" && !address.trim()) {
      alert("Please enter a delivery address");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, orderType, address, specialNotes: notes }),
      });
      const data = await res.json();
      if (data.url) {
        clearCart();
        window.location.href = data.url;
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
        <a href="/menu" className="text-amber-700 font-semibold hover:underline">Browse our menu</a>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Order Details */}
        <div className="space-y-6">
          {/* Order Type */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900 mb-4">Order Type</h2>
            <div className="grid grid-cols-2 gap-3">
              {(["PICKUP", "DELIVERY"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setOrderType(type)}
                  className={`py-3 rounded-xl border-2 font-medium transition-all ${
                    orderType === type
                      ? "border-amber-600 bg-amber-50 text-amber-700"
                      : "border-gray-200 text-gray-600 hover:border-amber-300"
                  }`}
                >
                  {type === "PICKUP" ? "🏠 Pickup" : "🚗 Delivery"}
                </button>
              ))}
            </div>
          </div>

          {/* Delivery Address */}
          {orderType === "DELIVERY" && (
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h2 className="font-semibold text-gray-900 mb-4">Delivery Address</h2>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                placeholder="Enter your full delivery address..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
              />
            </div>
          )}

          {/* Special Notes */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h2 className="font-semibold text-gray-900 mb-4">Special Instructions</h2>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Allergies, spice level, substitutions..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            />
          </div>
        </div>

        {/* Right: Order Summary */}
        <div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
            <h2 className="font-semibold text-gray-900 mb-4">Order Summary</h2>

            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-700">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Tax (8.25%)</span>
                <span>{formatPrice(tax)}</span>
              </div>
              {deliveryFee > 0 && (
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery Fee</span>
                  <span>{formatPrice(deliveryFee)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-gray-900 text-lg pt-2 border-t border-gray-100">
                <span>Total</span>
                <span>{formatPrice(orderTotal)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="mt-6 w-full bg-amber-600 text-white py-3.5 rounded-xl font-semibold hover:bg-amber-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Redirecting to payment...
                </>
              ) : (
                `Pay ${formatPrice(orderTotal)}`
              )}
            </button>

            <p className="text-xs text-gray-400 text-center mt-3">
              Powered by Stripe · Secure payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
