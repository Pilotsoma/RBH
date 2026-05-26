"use client";

import { useState } from "react";
import Image from "next/image";
import MenuCard from "@/components/MenuCard";
import { SEED_MENU, MENU_CATEGORIES, type MenuCategory } from "@/lib/menu-data";
import { Search } from "lucide-react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "All">("All");
  const [search, setSearch] = useState("");

  const filtered = SEED_MENU.filter((item) => {
    const matchesCat = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      search.trim() === "" ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const categories: (MenuCategory | "All")[] = ["All", ...MENU_CATEGORIES];

  return (
    <div>
      {/* Banner */}
      <div className="relative h-52 sm:h-64">
        <Image
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1600&q=80"
          alt="Our menu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-amber-900/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-amber-300 text-xs font-semibold tracking-widest uppercase mb-2">
            Katy, TX
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Our Menu
          </h1>
          <p className="text-amber-200/80 mt-2 text-sm">Authentic Hyderabadi flavors made fresh daily</p>
        </div>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="relative mb-6 max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-amber-100 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white text-sm shadow-sm"
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-amber-800 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-amber-400 hover:text-amber-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg">No items found for &ldquo;{search}&rdquo;</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <MenuCard
                key={item.name}
                id={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
                category={item.category}
                image={item.image}
                spicy={item.spicy}
                vegetarian={item.vegetarian}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
