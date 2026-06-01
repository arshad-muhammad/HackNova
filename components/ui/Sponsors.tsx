"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import TiltCard from "./TiltCard";

const sponsors = [
  { name: "3LC.ai", tier: "Title Sponsor", logo: "/sponsors/3lc_ai_logo.jpg", url: "https://3lc.ai" },
  { name: "Unstop", tier: "Powered By", logo: "/sponsors/unstop-logo.png", url: "https://unstop.com" },
  { name: "Gen.xyz", tier: "Domain Sponsor", logo: "/sponsors/xyz-logo-color.png", url: "https://gen.xyz" },
];

const marqueeWords = [
  "DATA-CENTRIC AI",
  "BUILT IN TIRUPATI",
  "24 HOURS NON-STOP",
  "POWERED BY VISIONARIES",
  "MENTORED BY EXPERTS",
  "POWERED BY 3LC.AI",
  "FREE .XYZ DOMAIN",
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="py-28 md:py-32 relative border-y border-white/5 overflow-hidden"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-space-charcoal/40" />
      <div
        className="absolute top-[20%] left-[-15%] w-[520px] h-[320px] blur-[100px] opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-[15%] right-[-10%] w-[460px] h-[280px] blur-[100px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(103,232,249,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-5 mx-auto"
          >
            Supported By
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[44px] sm:text-[60px] md:text-[80px] font-black leading-[0.92] uppercase tracking-[-0.03em] mb-3"
          >
            <span className="text-white">OUR </span>
            <span className="text-gradient-purple">SPONSORS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-ink-dim max-w-2xl mx-auto font-light"
          >
            Standing alongside the brands powering the next generation of AI builders.
          </motion.p>
        </div>

        {/* Logo cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block"
            >
              <TiltCard className="group glass-card border-gradient hover-lift rounded-2xl overflow-hidden h-60">
                <div className="relative h-full p-8 flex flex-col items-center justify-between">
                  <div className="flex-grow flex items-center justify-center w-full">
                    {sponsor.logo ? (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-20 w-auto object-contain max-w-[80%] opacity-85 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                      />
                    ) : (
                      <div className="font-display font-black text-white/40 tracking-wider text-2xl uppercase group-hover:text-white transition-colors">
                        {sponsor.name}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <span className="chip">
                      <span className="chip-dot" />
                      {sponsor.tier}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-space-purple-glow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
                  </div>
                </div>
              </TiltCard>
            </motion.a>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="relative overflow-hidden mask-fade-x py-6 border-y border-white/5 mb-12">
          <div
            className="flex gap-12 whitespace-nowrap"
            style={{ animation: "marquee 32s linear infinite" }}
          >
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span
                key={i}
                className="font-display font-black text-2xl md:text-3xl tracking-[-0.02em] text-white/15 hover:text-white/60 transition-colors flex items-center gap-12"
              >
                {word}
                <span className="w-1.5 h-1.5 rounded-full bg-space-purple/60" />
              </span>
            ))}
          </div>
        </div>

        {/* Become-a-sponsor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card border-gradient rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
        >
          <div>
            <div className="text-space-purple-glow font-mono text-[10px] uppercase tracking-[0.25em] font-bold mb-2">
              Sponsor Slot Open
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight mb-1">
              Want your logo on this stage?
            </h3>
            <p className="text-[13px] text-ink-dim font-light max-w-md">
              Partner with HackNova 2026 and reach 200+ top engineering minds nationwide.
            </p>
          </div>
          <a
            href="mailto:partnerships@hacknova.in?subject=HackNova%202026%20Sponsorship"
            className="btn-secondary px-6 py-3 text-[12px] font-bold uppercase tracking-[0.18em] shrink-0"
          >
            <Mail className="w-3.5 h-3.5" />
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
