"use client";

import { useState, useCallback } from "react";

interface BreathingCircleProps {
  isPlaying: boolean;
  onToggle: () => void;
  accentColor?: string;
}

const PARTICLES = [
  { size: 2, opacityIdle: 0.06, opacityPlay: 0.18, speed: 28 },
  { size: 3, opacityIdle: 0.08, opacityPlay: 0.25, speed: 34 },
  { size: 2, opacityIdle: 0.05, opacityPlay: 0.15, speed: 22 },
  { size: 2.5, opacityIdle: 0.1, opacityPlay: 0.22, speed: 38 },
  { size: 3, opacityIdle: 0.07, opacityPlay: 0.3, speed: 26 },
];

export default function BreathingCircle({
  isPlaying,
  onToggle,
  accentColor = "#5b8af5",
}: BreathingCircleProps) {
  const [pressed, setPressed] = useState(false);
  const [flash, setFlash] = useState(false);

  const handleClick = useCallback(() => {
    setPressed(true);
    setFlash(true);
    onToggle();
    setTimeout(() => setPressed(false), 300);
    setTimeout(() => setFlash(false), 200);
  }, [onToggle]);

  const FIRST_ORBIT = 150;
  const SPACING = 18;

  return (
    <div className="relative flex items-center justify-center">
      {/* Orbital particles */}
      <div className="absolute w-[420px] h-[420px] pointer-events-none">
        {PARTICLES.map((p, i) => {
          const radius = FIRST_ORBIT + i * SPACING;
          const reverse = i % 2 !== 0;
          return (
            <div
              key={i}
              className="absolute"
              style={
                {
                  top: "50%",
                  left: "50%",
                  width: 0,
                  height: 0,
                  "--orbit-radius": `${radius}px`,
                  animation: `orbit ${p.speed}s linear infinite ${reverse ? "reverse" : ""}`,
                  animationDelay: `${-i * 5.5}s`,
                } as React.CSSProperties
              }
            >
              <div
                className="rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  marginLeft: -p.size / 2,
                  marginTop: -p.size / 2,
                  background: accentColor,
                  opacity: isPlaying ? p.opacityPlay : p.opacityIdle,
                  boxShadow: isPlaying ? `0 0 4px ${accentColor}40` : "none",
                  transition: "opacity 1.2s ease, box-shadow 1.2s ease",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Outer ring */}
      <div
        className={`absolute w-[148px] h-[148px] sm:w-[208px] sm:h-[208px] md:w-[240px] md:h-[240px] rounded-full pointer-events-none ${
          isPlaying ? "animate-breathe-ring" : ""
        }`}
        style={{
          border: `0.5px solid ${accentColor}20`,
          transition: "border-color 0.7s ease",
          animationDelay: "-1.5s",
        }}
      />

      {/* Inner ring */}
      <div
        className={`absolute w-[140px] h-[140px] sm:w-[198px] sm:h-[198px] md:w-[232px] md:h-[232px] rounded-full pointer-events-none ${
          isPlaying ? "animate-breathe-ring" : ""
        }`}
        style={{
          border: `0.5px solid ${accentColor}10`,
          transition: "border-color 0.7s ease",
          animationDelay: "-3s",
        }}
      />

      {/* Main breathing circle — stronger glow when playing */}
      <button
        onClick={handleClick}
        className={`relative w-[134px] h-[134px] sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full cursor-pointer transition-all duration-700 ${
          isPlaying ? "animate-breathe" : ""
        }`}
        style={{
          background: isPlaying
            ? `radial-gradient(circle at 50% 50%, ${accentColor}33 0%, ${accentColor}1a 30%, ${accentColor}0a 55%, transparent 100%)`
            : `radial-gradient(circle at 50% 50%, ${accentColor}15 0%, ${accentColor}08 45%, transparent 100%)`,
          border: "none",
          outline: "none",
          boxShadow: isPlaying
            ? `0 0 100px 30px ${accentColor}1f, 0 0 180px 60px ${accentColor}0d, inset 0 0 60px ${accentColor}14`
            : `0 0 50px ${accentColor}14, 0 0 100px ${accentColor}08`,
          transform: pressed ? "scale(0.95)" : "scale(1)",
          WebkitAppearance: "none",
        }}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {/* Click flash */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-200"
          style={{
            background: `radial-gradient(circle, ${accentColor}40, transparent 70%)`,
            opacity: flash ? 0.3 : 0,
          }}
        />

        {/* Play/Pause icon — accent color, high opacity */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isPlaying ? (
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
              <rect x="6" y="4" width="4" height="16" rx="1" fill={accentColor} opacity={0.9} />
              <rect x="14" y="4" width="4" height="16" rx="1" fill={accentColor} opacity={0.9} />
            </svg>
          ) : (
            <svg width="42" height="42" viewBox="0 0 24 24" fill="none" className="ml-1">
              <path d="M8 5v14l11-7L8 5z" fill={accentColor} opacity={0.9} />
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
