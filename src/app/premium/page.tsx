"use client";

import Link from "next/link";

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-base relative overflow-auto">
      {/* Background */}
      <div
        className="gradient-orb fixed w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, #6c5ce715 0%, transparent 70%)",
          top: "10%",
          left: "30%",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-16">
        {/* Back */}
        <Link href="/" className="text-subtle text-xs hover:text-white/60 transition-colors mb-12 block">
          &larr; Back
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-accent-light">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h1 className="text-2xl text-white font-light mb-2">Unlock Your Focus</h1>
          <p className="text-subtle text-sm">Everything you need to stay in the zone.</p>
        </div>

        {/* Plan */}
        <div className="bg-surface border border-white/[0.06] rounded-2xl p-8 mb-8">
          <div className="flex items-baseline justify-between mb-6">
            <div>
              <h3 className="text-white font-medium">Pro Monthly</h3>
              <p className="text-subtle text-xs mt-0.5">7-day free trial</p>
            </div>
            <div className="text-right">
              <span className="text-2xl text-white font-light">$4.99</span>
              <span className="text-subtle text-sm">/mo</span>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {[
              "Unlimited focus sessions",
              "All sound categories & tracks",
              "Offline mode",
              "Custom session timers",
              "Brain state analytics",
              "Priority new content",
            ].map((f) => (
              <div key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-accent-light shrink-0">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </div>
            ))}
          </div>

          <button className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent/90 text-white text-sm font-medium transition-colors">
            Start Free Trial
          </button>
          <p className="text-subtle text-[11px] text-center mt-3">
            Cancel anytime during trial. You won&apos;t be charged.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {[
            { q: "Can I cancel anytime?", a: "Yes, cancel with one tap. No questions asked." },
            { q: "What happens after the trial?", a: "You'll be charged $4.99/month. The free tier stays available." },
            { q: "Is there a yearly plan?", a: "Coming soon — $39.99/year (save 33%)." },
          ].map((item) => (
            <details key={item.q} className="group">
              <summary className="text-sm text-white/70 cursor-pointer list-none flex items-center justify-between py-2">
                {item.q}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-subtle group-open:rotate-180 transition-transform">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="text-subtle text-sm pb-2">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
