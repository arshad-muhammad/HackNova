"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

/**
 * Cinematic hero - the astronaut footage is the centerpiece.
 * Composition is intentionally quiet: tiny brand line up top,
 * a single bold title block in the lower third (film-poster style),
 * one tagline, one info row, two buttons. Nothing else competes.
 */
export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Gentle, long parallax - matches the floating motion of the footage.
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* ============== VIDEO LAYER ============== */}
      <motion.div
        style={reduce ? undefined : { y: videoY, scale: videoScale }}
        className="absolute inset-0 z-0 bg-space-black"
      >
        {/*
          Full-bleed at every viewport. The clip is 16:9 so on a tall phone
          something must crop — we anchor to top-center on small screens so
          the astronaut sits in the upper half (above the title block) and
          shift the focal point lower as the viewport widens.
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[center_top] sm:object-[center_25%] md:object-[center_30%] opacity-75 mix-blend-screen pointer-events-none"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Heavy darken - protects text legibility, fades into the section */}
        <div className="absolute inset-0 bg-gradient-to-b from-space-black/85 via-space-black/35 to-space-black" />
      </motion.div>

      {/* ============== CONTENT ============== */}
      <motion.div
        style={reduce ? undefined : { opacity: fadeOut, y: contentY }}
        className="relative z-10 min-h-screen flex flex-col"
      >
        {/* Top wordmark - tiny, restrained */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-32 sm:pt-36 flex justify-center"
        >
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-white/45">
            Sphere Hive · Presents
          </span>
        </motion.div>

        {/* Spacer that lets the astronaut breathe */}
        <div className="flex-grow" />

        {/* Title block, lower-third - film poster cadence */}
        <div className="px-6 pb-24 sm:pb-28 md:pb-32 flex flex-col items-center text-center">
          {/* Screen-reader-only descriptive heading. The visible wordmark
              below is decorative; this is the keyword-rich semantic H1. */}
          <h1 className="sr-only">
            HackNova 2026 - National AI Hackathon at IIT Tirupati · 24 hours · Aug 8 - 9, 2026
          </h1>
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 1.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-white tracking-[-0.04em] leading-[0.9] text-[64px] sm:text-[92px] md:text-[124px] lg:text-[148px]"
            style={{
              textShadow:
                "0 2px 30px rgba(0,0,0,0.55), 0 0 60px rgba(0,0,0,0.35)",
            }}
          >
            HACKNOVA
          </motion.div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 mb-5 h-px w-32 sm:w-40 origin-center bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-sm sm:text-base md:text-[17px] tracking-[0.32em] uppercase text-white/70 max-w-2xl"
          >
            A National AI Hackathon
          </motion.p>

          {/* Info row - single line of facts, no chips, no badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.3 }}
            className="mt-7 flex items-center gap-3 sm:gap-5 font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/55"
          >
            <span>24 Hours</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Aug 08–09 · 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>IIT Tirupati</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 1.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-3"
          >
            <a
              href="https://unstop.com/p/hacknova-sphere-hive-kvg-college-of-engineering-sullia-1693176"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group h-12 px-7 min-w-[180px] text-[12px] font-bold uppercase tracking-[0.18em]"
            >
              <span>Register Now</span>
              <ChevronRight className="w-4 h-4 -mr-1 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-secondary h-12 px-7 min-w-[180px] text-[12px] font-bold uppercase tracking-[0.18em]"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Minimal scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/35"
        aria-hidden
      >
        <span className="font-mono text-[9px] tracking-[0.45em] uppercase">
          Scroll
        </span>
        <span className="relative w-px h-10 overflow-hidden bg-white/10">
          <motion.span
            className="absolute inset-x-0 top-0 h-3 bg-white/70"
            animate={{ y: [-12, 40] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>
      </motion.div>
    </section>
  );
}
