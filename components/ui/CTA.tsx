"use client";

import { motion } from "motion/react";
import { ChevronRight, Rocket } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Countdown from "./Countdown";

export default function CTA() {
  return (
    <section className="py-20 sm:py-28 md:py-32 relative overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,90vw)] h-[min(700px,90vw)] bg-space-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto glass-card border-gradient rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden"
        >
          {/* Decorative inner columns - desktop only, they look noisy on phones */}
          <div className="hidden md:block absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          </div>

          {/* Top eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mx-auto mb-5 sm:mb-6"
          >
            <Rocket className="w-3 h-3" />
            Final Boarding Call
          </motion.span>

          <h2 className="font-display text-[34px] sm:text-[56px] md:text-[80px] font-black leading-[0.95] uppercase tracking-[-0.03em] mb-4 sm:mb-5">
            <span className="text-white">ANSWER THE </span>
            <br className="hidden sm:block" />
            <span className="text-gradient-purple">CALL TO BUILD</span>
          </h2>

          <p className="text-[14px] sm:text-base leading-[1.65] text-ink-dim max-w-[520px] mx-auto mb-7 sm:mb-9 font-light">
            The challenge awaits. Gather your team, sharpen your skills, and
            prepare to build the future. Registration closes soon.
          </p>

          {/* Countdown */}
          <div className="flex justify-center mb-7 sm:mb-9">
            <Countdown />
          </div>

          <MagneticButton
            href="https://unstop.com/p/hacknova-sphere-hive-kvg-college-of-engineering-sullia-1693176"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group inline-flex w-full sm:w-auto text-center px-6 sm:px-10 h-12 sm:h-auto sm:py-4 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] justify-center"
            strength={0.25}
          >
            Claim Your Spot
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>

          {/* Compact countdown - hidden on phones to avoid overflow */}
          <div className="mt-6 hidden sm:block">
            <Countdown compact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
