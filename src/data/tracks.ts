export type Category = "focus" | "sleep" | "study" | "meditate";

export interface Track {
  id: string;
  title: string;
  description: string;
  artist: string;
  category: Category;
  duration: number; // seconds
  color: string;
}

export const tracks: Track[] = [
  // Focus
  { id: "f1", title: "Deep State", description: "Deep frequency layer for sustained attention", artist: "Maro Focus", category: "focus", duration: 312, color: "#5b8af5" },
  { id: "f2", title: "Neural Drift", description: "Low-fi texture designed for deep work", artist: "Maro Focus", category: "focus", duration: 285, color: "#5b8af5" },
  { id: "f3", title: "Brain Fog Clear", description: "Crisp tones that cut through mental haze", artist: "Maro Focus", category: "focus", duration: 340, color: "#5b8af5" },
  { id: "f4", title: "Flow Channel", description: "Binaural beats tuned to alpha-wave flow", artist: "Maro Focus", category: "focus", duration: 298, color: "#5b8af5" },
  { id: "f5", title: "Tunnel Vision", description: "Narrow-band drone to block distractions", artist: "Maro Focus", category: "focus", duration: 265, color: "#5b8af5" },
  { id: "f6", title: "Hyperfocus", description: "Rhythmic pulse to lock in concentration", artist: "Maro Focus", category: "focus", duration: 310, color: "#5b8af5" },
  // Sleep
  { id: "s1", title: "Midnight Rain", description: "Gentle rain on a quiet rooftop", artist: "Maro Focus", category: "sleep", duration: 420, color: "#8b5cf6" },
  { id: "s2", title: "Dream Cascade", description: "Layered pads dissolving into silence", artist: "Maro Focus", category: "sleep", duration: 380, color: "#8b5cf6" },
  { id: "s3", title: "Moon Shelter", description: "Warm cocoon of low-frequency hum", artist: "Maro Focus", category: "sleep", duration: 400, color: "#8b5cf6" },
  { id: "s4", title: "Ocean Floor", description: "Deep ocean ambient with soft currents", artist: "Maro Focus", category: "sleep", duration: 450, color: "#8b5cf6" },
  { id: "s5", title: "Lunar Hum", description: "Warm pad drifting through the night", artist: "Maro Focus", category: "sleep", duration: 390, color: "#8b5cf6" },
  // Study
  { id: "st1", title: "Quiet Library", description: "Ambient silence of a late-night reading room", artist: "Maro Focus", category: "study", duration: 600, color: "#34d399" },
  { id: "st2", title: "Page Turner", description: "Soft paper rustle with distant clock ticks", artist: "Maro Focus", category: "study", duration: 540, color: "#34d399" },
  { id: "st3", title: "Pencil Flow", description: "Rhythmic writing sounds for steady focus", artist: "Maro Focus", category: "study", duration: 480, color: "#34d399" },
  { id: "st4", title: "Brown Noise", description: "Smooth low-frequency masking noise", artist: "Maro Focus", category: "study", duration: 600, color: "#34d399" },
  { id: "st5", title: "Cafe Murmur", description: "Ambient cafe chatter at perfect volume", artist: "Maro Focus", category: "study", duration: 520, color: "#34d399" },
  // Meditate
  { id: "m1", title: "Still Water", description: "Crystal-clear lake at dawn, no wind", artist: "Maro Focus", category: "meditate", duration: 300, color: "#e8a87c" },
  { id: "m2", title: "Breath Cycle", description: "Tones synced to 4-7-8 breathing rhythm", artist: "Maro Focus", category: "meditate", duration: 360, color: "#e8a87c" },
  { id: "m3", title: "Inner Light", description: "Warm resonance radiating from the center", artist: "Maro Focus", category: "meditate", duration: 240, color: "#e8a87c" },
  { id: "m4", title: "Tibetan Bowl", description: "Resonating singing bowl overtones", artist: "Maro Focus", category: "meditate", duration: 320, color: "#e8a87c" },
  { id: "m5", title: "Forest Bath", description: "Birds, breeze, and rustling leaves", artist: "Maro Focus", category: "meditate", duration: 350, color: "#e8a87c" },
];

export const sessionDurations = [
  { label: "25m", value: 25 * 60 },
  { label: "50m", value: 50 * 60 },
  { label: "90m", value: 90 * 60 },
  { label: "Endless", value: 0 },
] as const;

export const categories: { id: Category; label: string; color: string }[] = [
  { id: "focus", label: "Focus", color: "#5b8af5" },
  { id: "sleep", label: "Sleep", color: "#8b5cf6" },
  { id: "study", label: "Study", color: "#34d399" },
  { id: "meditate", label: "Meditate", color: "#e8a87c" },
];
