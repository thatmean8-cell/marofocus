"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Track } from "@/data/tracks";

export function useAudioPlayer(playlist: Track[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const currentTrack = playlist[currentIndex] || null;

  // Since we have no real audio files, simulate progress
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying && currentTrack) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.duration) {
            next();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, currentIndex]);

  useEffect(() => {
    if (currentTrack) {
      setDuration(currentTrack.duration);
      setCurrentTime(0);
    }
  }, [currentIndex, currentTrack]);

  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);
  const toggle = useCallback(() => setIsPlaying((p) => !p), []);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % playlist.length);
    setCurrentTime(0);
  }, [playlist.length]);

  const prev = useCallback(() => {
    if (currentTime > 3) {
      setCurrentTime(0);
    } else {
      setCurrentIndex((i) => (i - 1 + playlist.length) % playlist.length);
      setCurrentTime(0);
    }
  }, [currentTime, playlist.length]);

  const seek = useCallback((time: number) => {
    setCurrentTime(time);
  }, []);

  const setVolumeValue = useCallback((v: number) => {
    setVolume(v);
  }, []);

  const selectTrack = useCallback((index: number) => {
    setCurrentIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  }, []);

  return {
    currentTrack,
    currentIndex,
    isPlaying,
    currentTime,
    duration,
    volume,
    play,
    pause,
    toggle,
    next,
    prev,
    seek,
    setVolume: setVolumeValue,
    selectTrack,
  };
}
