"use client";

import { categories, Category } from "@/data/tracks";

interface CategoryTabsProps {
  activeCategory: Category;
  onSelect: (c: Category) => void;
}

export default function CategoryTabs({ activeCategory, onSelect }: CategoryTabsProps) {
  return (
    <div className="max-w-[90vw] overflow-x-auto scrollbar-hide">
      <div className="flex gap-1 p-1 rounded-full bg-surface/50 backdrop-blur-sm border border-white/[0.03] w-max mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`px-4 py-1.5 rounded-full text-xs tracking-wide whitespace-nowrap transition-all duration-[800ms] ease-in-out ${
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
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
