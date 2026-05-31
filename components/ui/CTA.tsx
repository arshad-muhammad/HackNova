"use client";

import { motion } from "motion/react";
import { ChevronRight, Rocket } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Countdown from "./Countdown";

export default function CTA() {
  return (
    <section className="py-28 md:py-32 relative overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-space-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto glass-card border-gradient rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          {/* Inner decorative columns */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          </div>

          {/* Top eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mx-auto mb-6"
          >
            <Rocket className="w-3 h-3" />
            Final Boarding Call
          </motion.span>

          <h2 className="font-display text-[48px] md:text-[80px] font-black leading-[0.92] uppercase tracking-[-0.03em] mb-5">
            <span className="text-white">ANSWER THE </span>
            <br className="hidden sm:block" />
            <span className="text-gradient-purple">CALL TO BUILD</span>
          </h2>

          <p className="text-base leading-[1.7] text-ink-dim max-w-[520px] mx-auto mb-9 font-light">
            The challenge awaits. Gather your team, sharpen your skills, and prepare to
            build the future. Registration closes soon.
          </p>

          {/* Countdown */}
          <div className="flex justify-center mb-9">
            <Countdown />
          </div>

          <MagneticButton
            href="https://unstop.com/p/hackaithon-2026-joy-university-1675805"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group inline-flex text-center px-10 py-4 text-[12px] font-bold uppercase tracking-[0.2em]"
            strength={0.25}
          >
            Claim Your Spot
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>

          <div className="mt-6 font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
            <Countdown compact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
