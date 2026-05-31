"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type Item = {
  time: string;
  title: string;
  desc: string;
  day: 1 | 2;
};

const schedule: Item[] = [
  { time: "09:00 AM", title: "Opening Ceremony", desc: "Welcome address and rules briefing.", day: 1 },
  { time: "10:00 AM", title: "Hacking Begins", desc: "Teams assemble and start building.", day: 1 },
  { time: "02:00 PM", title: "Mentor Sessions", desc: "1-on-1 guidance from industry experts.", day: 1 },
  { time: "08:00 PM", title: "Checkpoint 1", desc: "Progress review and midnight snacks.", day: 1 },
  { time: "08:00 AM", title: "Hacking Ends", desc: "Final code submission.", day: 2 },
  { time: "10:00 AM", title: "Judging & Awards", desc: "Presentations and closing ceremony.", day: 2 },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Find first index of day 2 to mark a divider
  const firstDay2 = schedule.findIndex((s) => s.day === 2);

  return (
    <section id="schedule" className="py-28 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[40%] right-[-10%] w-[450px] h-[300px] blur-[100px] opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-5 mx-auto"
          >
            The Schedule
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[44px] sm:text-[60px] md:text-[80px] font-black leading-[0.92] uppercase tracking-[-0.03em]"
          >
            <span className="text-white">EVENT </span>
            <span className="text-gradient-purple">TIMELINE</span>
          </motion.h2>
        </div>

        <div ref={containerRef} className="relative">
          {/* Spine: faint base + scroll-driven gradient overlay */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-white/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[28px] md:left-1/2 top-0 w-px md:-translate-x-1/2 bg-gradient-to-b from-space-purple via-space-purple-glow to-cyan-glow shadow-[0_0_12px_rgba(139,92,246,0.7)]"
          />

          <div className="space-y-12">
            {schedule.map((item, index) => {
              const showDay = index === 0 || index === firstDay2;
              return (
                <div key={index}>
                  {showDay && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative mb-8"
                    >
                      <div className="ml-16 md:ml-0 md:flex md:justify-center">
                        <span className="inline-flex items-center gap-2 chip">
                          <span className="chip-dot" />
                          {item.day === 1 ? "DAY 01 · AUGUST 8" : "DAY 02 · AUGUST 9"}
                        </span>
                      </div>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.6, delay: 0.05 * (index % 3) }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Node */}
                    <div className="absolute left-[28px] md:left-1/2 -translate-x-[11.5px] md:-translate-x-1/2 mt-1.5 md:mt-0 w-6 h-6 flex items-center justify-center z-10">
                      <span
                        className="absolute w-6 h-6 rounded-full bg-space-purple/20 animate-ping"
                        style={{ animationDuration: "3s" }}
                      />
                      <span className="absolute w-3.5 h-3.5 rounded-full bg-space-black border border-space-purple" />
                      <span className="absolute w-1.5 h-1.5 rounded-full bg-space-purple shadow-[0_0_8px_rgba(139,92,246,0.9)]" />
                    </div>

                    {/* Card */}
                    <div
                      className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                        index % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"
                      }`}
                    >
                      <div className="group glass-card glass-card-hover border-gradient rounded-2xl p-6 hover-lift transition-all duration-300 relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="text-space-purple-glow font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-2">
                            {item.time}
                          </div>
                          <h3 className="text-lg font-display font-black text-white mb-2 tracking-wide group-hover:text-space-purple-glow transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-[12px] text-ink-dim leading-[1.65] font-light">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
