"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export function useSessionTimer() {
  const [sessionDuration, setSessionDuration] = useState(25 * 60); // 0 = endless
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsed((prev) => {
          if (sessionDuration > 0 && prev >= sessionDuration) {
            setIsRunning(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, sessionDuration]);

  const start = useCallback(() => setIsRunning(true), []);
  const stop = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setElapsed(0);
    setIsRunning(false);
  }, []);

  const selectDuration = useCallback((d: number) => {
    setSessionDuration(d);
    setElapsed(0);
    // Keep running if already running (restart with new duration)
    // Stop if not running (just reset)
    setIsRunning((prev) => prev);
  }, []);

  const remaining = sessionDuration > 0 ? Math.max(0, sessionDuration - elapsed) : elapsed;

  return {
    sessionDuration,
    elapsed,
    remaining,
    isRunning,
    start,
    stop,
    reset,
    selectDuration,
    isEndless: sessionDuration === 0,
  };
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}
