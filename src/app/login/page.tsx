"use client";

import { useRouter } from "next/navigation";
import BackgroundParticles from "@/components/BackgroundParticles";
import GradientOrbs from "@/components/GradientOrbs";
import NoiseOverlay from "@/components/NoiseOverlay";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="h-screen w-screen flex items-center justify-center bg-base relative overflow-hidden">
      <NoiseOverlay />
      <BackgroundParticles />
      <GradientOrbs category="focus" />

      {/* Back */}
      <button
        onClick={() => router.push("/")}
        className="fixed top-5 left-6 z-40 text-[14px] transition-colors"
        style={{ color: "rgba(255,255,255,0.5)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
      >
        &larr; Back
      </button>

      <div className="relative z-10 w-full max-w-[400px] px-6" style={{ marginTop: "-5vh" }}>
        {/* Mini breathing circle + logo */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div
            className="w-12 h-12 rounded-full animate-breathe-mini"
            style={{
              background: "radial-gradient(circle, rgba(91,138,245,0.4), rgba(91,138,245,0.1))",
              border: "1px solid rgba(91,138,245,0.3)",
              boxShadow: "0 0 20px rgba(91,138,245,0.2)",
            }}
          />
          <span className="text-xs text-subtle tracking-widest uppercase">Maro Focus</span>
        </div>

        {/* Title */}
        <h1 className="font-sans text-[24px] font-semibold text-white text-center mb-1.5" style={{ fontStyle: "normal" }}>
          Focus starts here
        </h1>
        <p className="text-[14px] text-center mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
          Sign in to save favorites and go Pro
        </p>

        {/* Social buttons */}
        <div className="flex flex-col gap-3 mb-6">
          {/* Google */}
          <button
            onClick={() => console.log("Google sign in")}
            className="w-full h-12 rounded-xl bg-white text-black text-[14px] font-medium flex items-center justify-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          {/* Apple */}
          <button
            onClick={() => console.log("Apple sign in")}
            className="w-full h-12 rounded-xl bg-black text-white text-[14px] font-medium flex items-center justify-center gap-2.5 transition-opacity hover:opacity-90"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Continue with Apple
          </button>
        </div>

        {/* Terms */}
        <p className="text-center mt-6 text-[11px] leading-relaxed" style={{ color: "rgba(255,255,255,0.25)" }}>
          By continuing, you agree to our Terms and Privacy Policy
        </p>
      </div>
    </main>
  );
}
