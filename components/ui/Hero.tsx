"use client";

import { motion } from 'motion/react';
import { Play, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-space-black">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-75 mix-blend-screen pointer-events-none"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlays for readability and aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/85 via-space-black/35 to-space-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl flex flex-col items-center py-12">
          
          {/* Micro-label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-[11px] sm:text-xs text-space-purple tracking-[0.3em] uppercase mb-5"
          >
            Sphere Hive Presents
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[56px] sm:text-[76px] md:text-[104px] font-black leading-[0.9] tracking-[-0.02em] mb-8 text-white"
          >
            HACKNOVA
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl leading-[1.6] text-ink-dim max-w-[650px] mb-8 font-light"
          >
            A National Level 24-hour innovation event. The cosmic bridge opens at VTU Belagavi, where creators gather to navigate the future.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10 px-4 sm:px-0"
          >
            <a
              href="https://unstop.com/p/hackaithon-2026-joy-university-1675805"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto px-10 py-4 text-[13px] font-bold uppercase tracking-[0.1em]"
            >
              Register Now
              <ChevronRight className="w-4 h-4 text-white" />
            </a>

            <button
              onClick={() => document.getElementById('challenge')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary w-full sm:w-auto px-10 py-4 text-[13px] font-bold uppercase tracking-[0.1em]"
            >
              Explore Challenge
            </button>
          </motion.div>

          {/* Date & Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-mono text-xs sm:text-sm tracking-[0.3em] text-white/60"
          >
            AUG 08-09 <span className="text-space-purple mx-2.5">/</span> 2026 <span className="text-white/30 mx-3.5">|</span> VTU BELAGAVI
          </motion.div>

        </div>
      </div>
    </section>
  );
}
