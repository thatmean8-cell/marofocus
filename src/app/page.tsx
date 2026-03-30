"use client";

import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { tracks, categories, Category } from "@/data/tracks";
import { useAudioPlayer } from "@/lib/useAudioPlayer";
import { useSessionTimer } from "@/lib/useSessionTimer";
import BackgroundParticles from "@/components/BackgroundParticles";
import GradientOrbs from "@/components/GradientOrbs";
import BreathingCircle from "@/components/BreathingCircle";
import BrainState from "@/components/BrainState";
import SessionTimer from "@/components/SessionTimer";
import CategoryTabs from "@/components/CategoryTabs";
import BottomBar from "@/components/BottomBar";
import PremiumModal from "@/components/PremiumModal";
import NoiseOverlay from "@/components/NoiseOverlay";

export default function Home() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<Category>("focus");
  const [showPremium, setShowPremium] = useState(false);
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());

  const filteredTracks = useMemo(
    () => tracks.filter((t) => t.category === activeCategory),
    [activeCategory]
  );

  const accentColor =
    categories.find((c) => c.id === activeCategory)?.color ?? "#5b8af5";

  const player = useAudioPlayer(filteredTracks);
  const session = useSessionTimer();

  const handleToggle = () => {
    player.toggle();
    if (!player.isPlaying && !session.isRunning) {
      session.start();
    } else if (player.isPlaying && session.isRunning) {
      session.stop();
    }
  };

  const handleCategoryChange = (c: Category) => {
    setActiveCategory(c);
    player.selectTrack(0);
  };

  const toggleLike = useCallback((trackId: string) => {
    setLikedTracks((prev) => {
      const next = new Set(prev);
      if (next.has(trackId)) {
        next.delete(trackId);
      } else {
        next.add(trackId);
      }
      return next;
    });
  }, []);

  const currentTrackLiked = player.currentTrack
    ? likedTracks.has(player.currentTrack.id)
    : false;

  return (
    <main className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center select-none">
      <NoiseOverlay />
      <BackgroundParticles />
      <GradientOrbs category={activeCategory} />

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full transition-colors duration-[800ms] ease-in-out animate-logo-pulse"
            style={{ background: accentColor, boxShadow: `0 0 8px ${accentColor}80` }}
          />
          <span className="text-xs text-subtle tracking-widest uppercase">
            Maro Focus
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/login")}
            className="text-[13px] transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            Sign in
          </button>
          <button
            onClick={() => setShowPremium(true)}
            className="px-3.5 py-1.5 rounded-full text-[11px] font-medium text-white/90 tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #5b8af5, #8b5cf6)",
              boxShadow: "0 0 20px rgba(91, 138, 245, 0.2), 0 0 40px rgba(139, 92, 246, 0.1)",
            }}
          >
            Pro
          </button>
        </div>
      </header>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
        <BrainState
          isPlaying={player.isPlaying}
          trackTitle={player.currentTrack?.title ?? "Select a track"}
          trackDescription={player.currentTrack?.description ?? "Tap the circle to begin"}
          accentColor={accentColor}
        />

        <BreathingCircle
          isPlaying={player.isPlaying}
          onToggle={handleToggle}
          accentColor={accentColor}
        />

        <SessionTimer
          sessionDuration={session.sessionDuration}
          remaining={session.remaining}
          isEndless={session.isEndless}
          elapsed={session.elapsed}
          isRunning={session.isRunning}
          onSelectDuration={session.selectDuration}
          accentColor={accentColor}
        />

        <CategoryTabs
          activeCategory={activeCategory}
          onSelect={handleCategoryChange}
        />
      </div>

      <BottomBar
        track={player.currentTrack}
        isPlaying={player.isPlaying}
        currentTime={player.currentTime}
        duration={player.duration}
        volume={player.volume}
        onToggle={handleToggle}
        onPrev={player.prev}
        onNext={player.next}
        onSeek={player.seek}
        onVolumeChange={player.setVolume}
        isLiked={currentTrackLiked}
        onToggleLike={() => player.currentTrack && toggleLike(player.currentTrack.id)}
      />

      <PremiumModal isOpen={showPremium} onClose={() => setShowPremium(false)} accentColor={accentColor} />
    </main>
  );
}
