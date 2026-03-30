"use client";

// Deterministic pseudo-random to avoid SSR/CSR hydration mismatch
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

// Exclude wide center zone so particles never overlap the breathing circle,
// even after float animation drift (±40px ≈ ±3% on a 1280px screen).
// Exclusion: x 25-75%, y 20-80%
function generatePosition(seed: number, axis: "x" | "y"): number {
  const raw = seededRandom(seed) * 100;
  const lo = axis === "x" ? 25 : 20;
  const hi = axis === "x" ? 75 : 80;
  if (raw > lo && raw < hi) {
    const mid = (lo + hi) / 2;
    return raw < mid ? raw - (hi - lo) : raw + (hi - lo);
  }
  return Math.max(0, Math.min(100, raw));
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animation: string;
  delay: string;
}

const ANIMATIONS = ["animate-float-1", "animate-float-2", "animate-float-3"];

const particles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: generatePosition(i * 7 + 3, "x"),
  y: generatePosition(i * 11 + 1003, "y"),
  size: seededRandom(i * 13 + 5) * 2 + 0.5,
  opacity: seededRandom(i * 17 + 11) * 0.25 + 0.05,
  animation: ANIMATIONS[i % 3],
  delay: `${seededRandom(i * 23 + 7) * -20}s`,
}));

export default function BackgroundParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`particle absolute rounded-full bg-accent-light ${p.animation}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
