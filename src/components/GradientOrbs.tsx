"use client";

import { Category } from "@/data/tracks";

// Per-category orb color palettes
const ORB_COLORS: Record<Category, [string, string, string]> = {
  focus: ["#5b8af5", "#4a6cf7", "#3b5ce0"],
  sleep: ["#8b5cf6", "#7c4fe0", "#6a3fcf"],
  study: ["#34d399", "#2cb885", "#1f9e72"],
  meditate: ["#e8a87c", "#d4956a", "#c0825a"],
  favorites: ["#f43f5e", "#e11d48", "#be123c"],
};

interface GradientOrbsProps {
  accentColor?: string;
  category?: Category;
}

export default function GradientOrbs({ category = "focus" }: GradientOrbsProps) {
  const [c1, c2, c3] = ORB_COLORS[category];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Orb 1 — top-left, 800px */}
      <div
        className="gradient-orb absolute w-[800px] h-[800px] rounded-full animate-gradient-shift"
        style={{
          background: `radial-gradient(circle, ${c1}40 0%, ${c1}18 40%, transparent 70%)`,
          top: "-15%",
          left: "-10%",
          transition: "background 0.8s ease",
        }}
      />
      {/* Orb 2 — bottom-right, 700px */}
      <div
        className="gradient-orb absolute w-[700px] h-[700px] rounded-full animate-gradient-shift"
        style={{
          background: `radial-gradient(circle, ${c2}38 0%, ${c2}14 40%, transparent 70%)`,
          bottom: "-20%",
          right: "-10%",
          animationDelay: "-5s",
          transition: "background 0.8s ease",
        }}
      />
      {/* Orb 3 — center, 500px */}
      <div
        className="gradient-orb absolute w-[500px] h-[500px] rounded-full animate-gradient-shift"
        style={{
          background: `radial-gradient(circle, ${c3}30 0%, ${c3}10 40%, transparent 65%)`,
          top: "50%",
          left: "50%",
          marginTop: -250,
          marginLeft: -250,
          animationDelay: "-10s",
          transition: "background 0.8s ease",
        }}
      />
    </div>
  );
}
