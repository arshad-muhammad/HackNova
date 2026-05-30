"use client";

import { motion } from 'motion/react';

const stats = [
  { label: 'The Fleet', value: '200+', desc: 'Elite engineers and visionaries from around the globe.' },
  { label: 'The Sages', value: '20+', desc: 'Industry mentors from leading AI research labs.' },
  { label: 'The Prize', value: '₹30K', desc: 'Prize pool, sponsored prizes, certificates, and goodies.' },
  { label: 'Venue', value: 'Offline', desc: 'VTU Belagavi, Karnataka.' },
];

export default function Stats() {
  return (
    <section className="py-12 relative z-20 -mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel flex-1 min-w-[200px] max-w-[220px] p-5 rounded-xl text-left relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative z-10">
                <div className="text-[10px] uppercase text-samurai-red font-extrabold tracking-[0.1em] mb-2">
                  {stat.label}
                </div>
                <div className="text-2xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] text-ink-dim leading-[1.4]">
                  {stat.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
