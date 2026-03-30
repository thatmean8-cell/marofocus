"use client";

interface BrainStateProps {
  isPlaying: boolean;
  trackTitle: string;
  trackDescription: string;
  accentColor: string;
}

export default function BrainState({
  isPlaying,
  trackTitle,
  trackDescription,
  accentColor,
}: BrainStateProps) {
  return (
    <div className="text-center animate-fade-in">
      <div className="flex items-center justify-center gap-2 mb-3">
        {isPlaying && (
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#34d399", boxShadow: "0 0 8px #34d39980" }}
          />
        )}
        <p className="font-sans text-[11px] tracking-[2.5px] uppercase text-subtle">
          {isPlaying ? "Focusing..." : "Ready to focus"}
        </p>
      </div>
      <h2 className="font-sans text-[22px] font-semibold text-white/90 tracking-wide mb-1">
        {trackTitle}
      </h2>
      <p
        className="font-sans text-[14px] font-light tracking-wide transition-colors duration-700"
        style={{ color: `${accentColor}` }}
      >
        {trackDescription}
      </p>
    </div>
  );
}
