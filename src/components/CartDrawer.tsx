"use client";

import { useCart } from "@/lib/cart-store";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";

export default function CartDrawer() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, total } = useCart();
  const subtotal = total();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={toggleCart}
      />

      {/* Drawer */}
      <aside className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-amber-700" />
            <h2 className="font-bold text-gray-900 text-lg">Your Order</h2>
          </div>
          <button onClick={toggleCart} className="p-1 hover:text-red-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-gray-400">
              <ShoppingBag className="w-12 h-12 mb-3 opacity-30" />
              <p>Your cart is empty</p>
              <button onClick={toggleCart} className="mt-3 text-amber-700 text-sm font-medium">
                Browse Menu
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                  <p className="text-amber-700 text-sm">{formatPrice(item.price)}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-amber-400"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:border-amber-400"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-sm font-semibold w-14 text-right">
                  {formatPrice(item.price * item.quantity)}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-300 hover:text-red-500 ml-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 space-y-3">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Tax (8.25%)</span>
              <span>{formatPrice(subtotal * 0.0825)}</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900">
              <span>Estimated Total</span>
              <span>{formatPrice(subtotal * 1.0825)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={toggleCart}
              className="block w-full bg-amber-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-amber-700 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
