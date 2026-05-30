"use client";

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-space-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-panel border border-white/10 rounded-xl p-12 md:p-20 relative overflow-hidden"
        >
          {/* Abstract background lines inside CTA */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          </div>

          <h2 className="text-[60px] md:text-[88px] font-black leading-[0.9] uppercase tracking-[-0.04em] mb-6">
            ANSWER THE <br />
            <span className="text-space-purple">CALL TO BUILD</span>
          </h2>

          <p className="text-base leading-[1.6] text-ink-dim max-w-[500px] mx-auto mb-10">
            The challenge awaits. Gather your team, sharpen your skills, and prepare to build the future. Registration closes soon.
          </p>

          <a href="https://unstop.com/p/hackaithon-2026-joy-university-1675805" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-center px-10 py-4 text-[13px] font-bold uppercase tracking-[0.1em] transition-transform hover:scale-105">
            Claim Your Spot
          </a>
        </motion.div>
      </div>
    </section>
  );
}
