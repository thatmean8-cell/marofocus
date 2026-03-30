"use client";

import { useState, useCallback } from "react";
import { Track } from "@/data/tracks";
import { formatTime } from "@/lib/useSessionTimer";
import HeartButton from "./HeartButton";

interface BottomBarProps {
  track: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  onToggle: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSeek: (t: number) => void;
  onVolumeChange: (v: number) => void;
  isLiked: boolean;
  onToggleLike: () => void;
}

export default function BottomBar({
  track,
  isPlaying,
  currentTime,
  duration,
  volume,
  onToggle,
  onPrev,
  onNext,
  onSeek,
  onVolumeChange,
  isLiked,
  onToggleLike,
}: BottomBarProps) {
  const [prevVolume, setPrevVolume] = useState(0.7);

  const toggleMute = useCallback(() => {
    if (volume > 0) {
      setPrevVolume(volume);
      onVolumeChange(0);
    } else {
      onVolumeChange(prevVolume || 0.7);
    }
  }, [volume, prevVolume, onVolumeChange]);

  if (!track) return null;

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Separator line */}
      <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
      {/* Progress bar — 3px, accent color */}
      <div
        className="w-full h-[3px] bg-muted/50 relative group cursor-pointer"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const pct = (e.clientX - rect.left) / rect.width;
          onSeek(pct * duration);
        }}
      >
        <div
          className="h-full rounded-r-full"
          style={{
            width: `${progress}%`,
            background: track.color,
            boxShadow: `0 0 8px ${track.color}60`,
            transition: "width 1s linear",
          }}
        />
        <div className="absolute inset-x-0 -top-2 h-6" />
      </div>

      {/* Controls — h-14 (56px) */}
      <div
        className="border-t border-white/[0.03] px-3 sm:px-4 md:px-8 h-14"
        style={{
          background: "rgba(12,14,20,0.8)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-screen-lg mx-auto h-full flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
          {/* Left: album art + title (mobile: no artist) */}
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <div
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg shrink-0"
              style={{
                background: `linear-gradient(135deg, ${track.color}, ${track.color}88)`,
              }}
            />
            <div className="min-w-0">
              <p className="text-[13px] text-white/80 truncate">{track.title}</p>
              <p className="text-xs text-subtle truncate hidden sm:block">{track.artist}</p>
            </div>
          </div>

          {/* Center: prev + play/pause + next */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onPrev}
              className="text-subtle opacity-60 hover:opacity-100 transition-opacity duration-200"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
              </svg>
            </button>

            <button
              onClick={onToggle}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 hover:brightness-125"
              style={{
                background: `${track.color}30`,
                border: `1px solid ${track.color}40`,
              }}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill={track.color} opacity={0.9}>
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill={track.color} opacity={0.9} className="ml-0.5">
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              )}
            </button>

            <button
              onClick={onNext}
              className="text-subtle opacity-60 hover:opacity-100 transition-opacity duration-200"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>

          {/* Right: heart + time + volume */}
          <div className="flex-1 flex items-center justify-end gap-3">
            <HeartButton isLiked={isLiked} onToggle={onToggleLike} size={15} />

            {/* Time — hidden on mobile */}
            <span className="text-xs text-subtle font-mono tabular-nums hidden sm:block">
              {formatTime(Math.floor(currentTime))} / {formatTime(duration)}
            </span>

            {/* Mobile: mute toggle icon only */}
            <button
              onClick={toggleMute}
              className="sm:hidden text-subtle shrink-0"
              aria-label={volume > 0 ? "Mute" : "Unmute"}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
                {volume > 0 ? (
                  <path d="M15.54 8.46a5 5 0 010 7.07" />
                ) : (
                  <>
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </>
                )}
              </svg>
            </button>

            {/* Desktop: icon + slider */}
            <div className="hidden sm:flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-subtle shrink-0">
                <path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {volume > 0 && (
                  <path d="M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                className="volume-slider w-16 md:w-20"
                style={{ ["--track-color" as string]: track.color }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
