"use client";

import { motion } from "motion/react";

/**
 * Route-transition fallback (App Router).
 * Shown while a navigation is streaming in. Duration is not fixed —
 * Next.js unmounts it as soon as the new route is ready. The visual
 * matches the first-paint splash so the two feel like one system.
 */
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[200] bg-space-black text-white overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay pointer-events-none" />

      {/* Top meta */}
      <div className="absolute top-6 left-6 right-6 flex items-baseline justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/55">
        <span>HackNova · 2026</span>
        <span className="hidden sm:block">Aug 08 — 09</span>
      </div>

      {/* Bottom-left status */}
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
        <div className="min-w-0 max-w-[420px] w-full">
          <div className="flex items-baseline gap-3">
            <span className="font-display font-black tabular-nums text-white tracking-[-0.04em] text-6xl sm:text-7xl md:text-8xl leading-none">
              ···
            </span>
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-white/45">
              / loading
            </span>
          </div>

          {/* Indeterminate sliding rule */}
          <div className="mt-5 h-px w-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full w-1/3 bg-white/85"
            />
          </div>

          <div className="mt-3 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45">
            One moment
          </div>
        </div>

        <div className="hidden sm:block font-mono text-[10px] tracking-[0.3em] uppercase text-white/35 text-right">
          Sphere Hive
        </div>
      </div>
    </div>
  );
}
