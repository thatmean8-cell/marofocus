"use client";

import { useState, useEffect } from "react";

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  accentColor?: string;
}

const FEATURES = [
  "Unlimited focus sessions",
  "All sound categories",
  "Offline downloads",
  "Custom session timers",
  "Favorites playlist",
  "No ads, no interruptions",
];

export default function PremiumModal({
  isOpen,
  onClose,
  accentColor = "#5b8af5",
}: PremiumModalProps) {
  const [plan, setPlan] = useState<"yearly" | "monthly">("yearly");

  // Reset to yearly every time modal opens
  useEffect(() => {
    if (isOpen) setPlan("yearly");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 animate-fade-in"
        style={{
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[380px] animate-premium-in"
        style={{
          background: "#0f1119",
          borderRadius: 28,
          border: "1px solid rgba(255,255,255,0.03)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-7 sm:p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white/20 hover:text-white/50 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Mini breathing circle icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-10 h-10 rounded-full animate-breathe-mini"
              style={{
                background: "radial-gradient(circle, rgba(91,138,245,0.4), rgba(91,138,245,0.1))",
                border: "1px solid rgba(91,138,245,0.3)",
                boxShadow: "0 0 20px rgba(91,138,245,0.2)",
              }}
            />
          </div>

          {/* Title */}
          <h3 className="font-sans text-[24px] font-semibold text-white text-center mb-1.5" style={{ fontStyle: "normal" }}>
            Unlock Your Focus
          </h3>
          <p className="text-[14px] text-center mb-7" style={{ color: "rgba(255,255,255,0.45)" }}>
            Unlimited focus. Zero distractions.
          </p>

          {/* Plan toggle cards */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {/* Monthly */}
            {/* Monthly */}
            <button
              onClick={() => setPlan("monthly")}
              className="relative overflow-hidden rounded-2xl p-4 text-left transition-all duration-300"
              style={{
                background: plan === "monthly" ? `${accentColor}14` : "rgba(255,255,255,0.02)",
                border: `1.5px solid ${plan === "monthly" ? `${accentColor}50` : "rgba(255,255,255,0.06)"}`,
              }}
            >
              <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                Monthly
              </p>
              <p className="text-white text-lg font-medium">$4.99</p>
              <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>/month</p>
            </button>

            {/* Yearly */}
            <button
              onClick={() => setPlan("yearly")}
              className="relative overflow-hidden rounded-2xl p-4 text-left transition-all duration-300"
              style={{
                background: plan === "yearly" ? `${accentColor}14` : "rgba(255,255,255,0.02)",
                border: `1.5px solid ${plan === "yearly" ? `${accentColor}50` : "rgba(255,255,255,0.06)"}`,
              }}
            >
              {/* Save badge */}
              <div
                className="absolute rounded-full text-[9px] font-semibold"
                style={{ background: "rgba(91,138,245,0.2)", color: "#5b8af5", top: 10, right: 10, padding: "3px 8px" }}
              >
                Save 33%
              </div>
              <p className="text-[11px] uppercase tracking-wider mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                Yearly
              </p>
              <p className="text-white text-lg font-medium">$39.99</p>
              <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                $3.33/month
              </p>
            </button>
          </div>

          {/* Features */}
          <div className="mb-6">
            {FEATURES.map((feature, i) => (
              <div
                key={feature}
                className="flex items-center gap-2.5 py-2.5 text-[13px]"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  borderBottom: i < FEATURES.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d="M20 6L9 17l-5-5" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {feature}
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            className="w-full py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-px"
            style={{
              borderRadius: 14,
              border: "none",
              background: "linear-gradient(135deg, #4a7af5, #6c5ce7)",
            }}
          >
            {plan === "yearly"
              ? "Start 7-Day Free Trial — $39.99/yr"
              : "Start 7-Day Free Trial — $4.99/mo"}
          </button>
          <p className="text-center mt-3 text-[12px]" style={{ color: "rgba(255,255,255,0.2)" }}>
            Cancel anytime. No commitment.
          </p>
        </div>
      </div>
    </div>
  );
}
