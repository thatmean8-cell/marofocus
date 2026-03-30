"use client";

import { sessionDurations } from "@/data/tracks";
import { formatTime } from "@/lib/useSessionTimer";

interface SessionTimerProps {
  sessionDuration: number;
  remaining: number;
  isEndless: boolean;
  elapsed: number;
  isRunning: boolean;
  onSelectDuration: (d: number) => void;
  accentColor: string;
}

export default function SessionTimer({
  sessionDuration,
  remaining,
  isEndless,
  elapsed,
  isRunning,
  onSelectDuration,
  accentColor,
}: SessionTimerProps) {
  const displayTime = isEndless
    ? isRunning || elapsed > 0
      ? formatTime(elapsed)
      : "∞"
    : formatTime(remaining);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="font-mono text-[32px] md:text-[40px] text-white/80 tabular-nums"
        style={{ letterSpacing: "-0.02em" }}
      >
        {displayTime}
      </div>

      {/* Duration buttons — ensure touchable with relative z-index */}
      <div className="relative z-20 flex gap-1">
        {sessionDurations.map((d) => {
          const isActive = sessionDuration === d.value;
          return (
            <button
              key={d.label}
              onClick={() => onSelectDuration(d.value)}
              className={`px-3 py-1.5 rounded-full text-xs border transition-all duration-300 ${
                isActive
                  ? "text-white"
                  : "text-subtle hover:text-white/60 border-transparent"
              }`}
              style={
                isActive
                  ? {
                      background: `${accentColor}20`,
                      borderColor: `${accentColor}30`,
                      color: `${accentColor}dd`,
                    }
                  : undefined
              }
            >
              {d.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
