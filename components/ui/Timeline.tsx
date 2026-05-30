"use client";

import { motion } from 'motion/react';

const schedule = [
  { time: '09:00 AM', title: 'Opening Ceremony', desc: 'Welcome address and rules briefing.' },
  { time: '10:00 AM', title: 'Hacking Begins', desc: 'Teams assemble and start building.' },
  { time: '02:00 PM', title: 'Mentor Sessions', desc: '1-on-1 guidance from industry experts.' },
  { time: '08:00 PM', title: 'Checkpoint 1', desc: 'Progress review and midnight snacks.' },
  { time: '08:00 AM', title: 'Hacking Ends', desc: 'Final code submission.' },
  { time: '10:00 AM', title: 'Judging & Awards', desc: 'Presentations and closing ceremony.' },
];

export default function Timeline() {
  return (
    <section id="schedule" className="py-24 relative overflow-hidden">
      {/* Soft background glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[50%] right-[-10%] w-[450px] h-[300px] bg-gradient-to-l from-transparent via-space-purple/5 to-transparent blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-6 h-[1px] bg-space-purple/50" />
            <span className="text-space-purple font-mono tracking-[0.25em] uppercase text-[11px] font-bold">The Schedule</span>
            <span className="w-6 h-[1px] bg-space-purple/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[44px] sm:text-[60px] md:text-[76px] font-black leading-[0.9] uppercase tracking-[-0.03em] text-white"
          >
            EVENT TIMELINE
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Gradient Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node / Pulsing Marker */}
                <div className="absolute left-[28px] md:left-1/2 -translate-x-[11.5px] md:-translate-x-1/2 mt-1.5 md:mt-0 w-6 h-6 flex items-center justify-center z-10">
                  <span className="absolute w-5 h-5 rounded-full bg-space-purple/20 animate-ping" style={{ animationDuration: '3s' }} />
                  <span className="absolute w-3.5 h-3.5 rounded-full bg-space-black border border-space-purple" />
                  <span className="absolute w-1.5 h-1.5 rounded-full bg-space-purple" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-space-purple/35 transition-all duration-300 group relative overflow-hidden">
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none scale-75" />
                    
                    <div className="relative z-10">
                      <div className="text-space-purple font-mono text-[10px] uppercase font-bold tracking-[0.15em] mb-2">{item.time}</div>
                      <h3 className="text-lg font-display font-black text-white mb-2 tracking-wide group-hover:text-space-purple transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[12px] text-ink-dim leading-[1.6] font-light">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
