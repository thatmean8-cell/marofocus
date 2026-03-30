import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0c0e14",
        surface: "#12141c",
        muted: "#1a1d28",
        accent: "#6c5ce7",
        "accent-light": "#a29bfe",
        subtle: "#636e88",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
        "orbit-slow": "orbit 20s linear infinite",
        "orbit-medium": "orbit 15s linear infinite reverse",
        "orbit-fast": "orbit 10s linear infinite",
        "float-1": "float1 25s ease-in-out infinite",
        "float-2": "float2 30s ease-in-out infinite",
        "float-3": "float3 35s ease-in-out infinite",
        "gradient-shift": "gradientShift 15s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "logo-pulse": "logoPulse 3s ease-in-out infinite",
        "breathe-ring": "breatheRing 6s ease-in-out infinite",
        "modal-in": "modalIn 0.3s ease-out",
        "premium-in": "premiumIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        "breathe-mini": "breatheMini 3s ease-in-out infinite",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.15)", opacity: "1" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)" },
        },
        float1: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(30px, -40px)" },
          "50%": { transform: "translate(-20px, 20px)" },
          "75%": { transform: "translate(40px, 10px)" },
        },
        float2: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "33%": { transform: "translate(-40px, 30px)" },
          "66%": { transform: "translate(20px, -30px)" },
        },
        float3: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-20px, -30px)" },
          "50%": { transform: "translate(30px, 40px)" },
          "75%": { transform: "translate(-40px, 20px)" },
        },
        gradientShift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 30px) scale(0.95)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        logoPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        breatheRing: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
        },
        modalIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        premiumIn: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        breatheMini: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
