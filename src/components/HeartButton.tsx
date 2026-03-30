"use client";

import { useState } from "react";

interface HeartButtonProps {
  isLiked: boolean;
  onToggle: () => void;
  size?: number;
}

export default function HeartButton({ isLiked, onToggle, size = 16 }: HeartButtonProps) {
  const [animating, setAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAnimating(true);
    onToggle();
    setTimeout(() => setAnimating(false), 300);
  };

  return (
    <button
      onClick={handleClick}
      className="shrink-0 transition-transform duration-300 ease-out"
      style={{
        transform: animating ? "scale(1.3)" : "scale(1)",
      }}
      aria-label={isLiked ? "Unlike" : "Like"}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={isLiked ? "#ef4444" : "none"}
        stroke={isLiked ? "#ef4444" : "#636e88"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}
