"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart-store";
import { formatPrice } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "react-hot-toast";

// Fallback images per category (used only if no per-item image provided)
const CATEGORY_FALLBACKS: Record<string, string> = {
  Biryani:    "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80",
  Curries:    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
  Appetizers: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
  Seafood:    "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
  Breads:     "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=600&q=80",
  Rice:       "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&q=80",
  Drinks:     "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
  Desserts:   "https://images.unsplash.com/photo-1611293388250-580b08c4a145?auto=format&fit=crop&w=600&q=80",
};

interface Props {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

export default function MenuCard({ id, name, description, price, category, image, spicy, vegetarian }: Props) {
  const { addItem, openCart } = useCart();

  function handleAdd() {
    addItem({ id, name, price });
    toast.success(`${name} added!`, { duration: 1800 });
    openCart();
  }

  const imgSrc = image ?? CATEGORY_FALLBACKS[category] ?? CATEGORY_FALLBACKS["Curries"];

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-amber-100/60 shadow-sm hover:shadow-lg transition-all duration-400 hover:-translate-y-0.5 flex flex-col">
      {/* Image */}
      <div className="relative h-44 overflow-hidden shrink-0">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized={imgSrc.includes("royalbiryanihouse.com")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-1.5">
          {vegetarian && (
            <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Veg</span>
          )}
          {spicy && (
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">🌶 Spicy</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="font-bold text-amber-900 text-base mb-1 leading-snug"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">{description}</p>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-amber-50">
          <span className="text-xl font-bold text-amber-700" style={{ fontFamily: "var(--font-serif)" }}>
            {formatPrice(price)}
          </span>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 bg-amber-700 hover:bg-amber-600 active:scale-95 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
