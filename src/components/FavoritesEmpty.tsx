"use client";

export default function FavoritesEmpty() {
  return (
    <div className="flex flex-col items-center gap-3 animate-fade-in">
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/[0.03] border border-white/[0.06]">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(244, 63, 94, 0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-sm text-white/50">No favorites yet</p>
        <p className="text-xs text-white/25 mt-1">
          Tap the heart icon on any track to save it here
        </p>
      </div>
    </div>
  );
}
