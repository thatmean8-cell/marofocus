"use client";

import { categories, Category } from "@/data/tracks";

interface CategoryTabsProps {
  activeCategory: Category;
  onSelect: (c: Category) => void;
  favoritesCount?: number;
}

export default function CategoryTabs({ activeCategory, onSelect, favoritesCount = 0 }: CategoryTabsProps) {
  return (
    <div className="w-full max-w-[92vw] sm:max-w-[90vw] overflow-x-auto scrollbar-hide">
      <div className="flex gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-full bg-surface/50 backdrop-blur-sm border border-white/[0.03] w-max mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`px-2.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs tracking-wide whitespace-nowrap transition-all duration-[800ms] ease-in-out flex items-center gap-1 sm:gap-1.5 ${
              activeCategory === cat.id
                ? "text-white"
                : "text-subtle hover:text-white/50"
            }`}
            style={
              activeCategory === cat.id
                ? { background: `${cat.color}20`, boxShadow: `0 0 20px ${cat.color}10` }
                : undefined
            }
          >
            {cat.icon === "heart" && (
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill={activeCategory === cat.id ? cat.color : "none"}
                stroke={activeCategory === cat.id ? cat.color : "currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-[800ms] shrink-0"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            )}
            {cat.icon !== "heart" && cat.label}
            {cat.id === "favorites" && favoritesCount > 0 && (
              <span
                className="text-[10px] font-medium opacity-60 transition-opacity duration-300"
              >
                {favoritesCount}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
