"use client";

import { motion } from "motion/react";

const facts: [string, string][] = [
  ["Date", "August 8 — 9, 2026"],
  ["Duration", "24 Hours, non-stop"],
  ["Venue", "VRIF, VTU Belagavi, Karnataka"],
  ["Open To", "Students, nationwide"],
];

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top meta rule */}
        <motion.div
          {...fade}
          className="flex items-baseline justify-between border-t border-white/10 pt-5 mb-14 md:mb-20 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45"
        >
          <span>Mission — 01</span>
          <span className="hidden sm:block">Aug 08 — 09 · 2026</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          {...fade}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-display font-black text-white tracking-[-0.035em] leading-[0.92] uppercase text-[44px] sm:text-[68px] md:text-[92px] lg:text-[108px] mb-12 md:mb-16"
        >
          Write your
          <br />
          <span className="text-white/35">legacy in code.</span>
        </motion.h2>

        {/* Story + facts split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div {...fade} className="lg:col-span-7">
            <p className="text-[17px] md:text-lg text-white/85 leading-[1.65] mb-5 max-w-2xl">
              HackNova is not a competition. It&apos;s a 24-hour proving ground
              where the most curious builders in the country gather to push the
              edges of artificial intelligence.
            </p>
            <p className="text-[15px] md:text-base text-white/55 leading-[1.7] max-w-2xl">
              No model architectures to brute-force. No leaderboard tricks.
              Teams compete on a single AI challenge — judged on how well they
              think about data, edge cases, and quality.
            </p>

            <div className="mt-10 inline-flex items-baseline gap-3 font-display font-black uppercase tracking-[-0.02em]">
              <span className="text-white text-4xl sm:text-5xl">₹30K</span>
              <span className="font-mono text-[11px] tracking-[0.25em] text-white/45 uppercase">
                Prize Pool · Sponsored Prizes · Goodies
              </span>
            </div>
          </motion.div>

          <motion.dl {...fade} className="lg:col-span-5 border-t border-white/10">
            {facts.map(([k, v]) => (
              <div
                key={k}
                className="border-b border-white/10 py-4 grid grid-cols-12 gap-4 items-baseline"
              >
                <dt className="col-span-4 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45">
                  {k}
                </dt>
                <dd className="col-span-8 text-[15px] text-white/90 font-light tracking-tight">
                  {v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
