"use client";

import { motion } from 'motion/react';

const sponsors = [
  { name: '3LC.ai', tier: 'Title Sponsor', logo: '/sponsors/3lc_ai_logo.jpg' },
  { name: 'Gen.xyz', tier: 'Domain Sponsor', logo: '/sponsors/xyz-logo-color.png' },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 relative bg-space-charcoal border-y border-white/5">
      {/* Background soft ambient glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-20%] w-[500px] h-[300px] bg-gradient-to-r from-transparent via-space-purple/5 to-transparent blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[1px] bg-space-purple/50" />
            <span className="text-space-purple font-mono tracking-[0.25em] uppercase text-[11px] font-bold">Supported By</span>
            <span className="w-6 h-[1px] bg-space-purple/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[44px] sm:text-[60px] md:text-[76px] font-black leading-[0.9] uppercase tracking-[-0.03em] text-white"
          >
            OUR SPONSORS
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sponsors.map((sponsor, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-space-purple/30 transition-all duration-300 p-8 h-56 relative overflow-hidden group"
              >
                {/* Micro-glow on hover */}
                <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none scale-75" />

                <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
                  <div className="flex-grow flex items-center justify-center w-full">
                    {sponsor.logo ? (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-h-20 w-auto object-contain max-w-[80%] opacity-80 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                      />
                    ) : (
                      <div className="font-display font-black text-white/40 tracking-wider text-2xl uppercase group-hover:text-white transition-colors">
                        {sponsor.name}
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] sm:text-[11px] font-mono tracking-widest text-space-purple uppercase font-semibold">
                      {sponsor.tier}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
