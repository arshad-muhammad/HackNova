"use client";

import { motion } from "motion/react";
import CountUp from "./CountUp";

type Stat = {
  label: string;
  value?: number;
  suffix?: string;
  prefix?: string;
  staticValue?: string;
  desc: string;
};

const stats: Stat[] = [
  { label: "Builders", value: 200, suffix: "+", desc: "Engineers and designers nationwide." },
  { label: "Mentors", value: 20, suffix: "+", desc: "From leading AI research and industry." },
  { label: "Prize Pool", value: 30, prefix: "₹", suffix: "K", desc: "Plus sponsored prizes & goodies." },
  { label: "Arena", staticValue: "VTU", desc: "Belagavi · 24-hour offline." },
];

export default function Stats() {
  return (
    <section className="relative z-20 py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
              className={`px-5 sm:px-7 py-7 sm:py-8 ${
                i < stats.length - 1 ? "lg:border-r border-white/10" : ""
              } ${i % 2 === 0 ? "border-r border-white/10 lg:border-r" : ""} ${
                i < 2 ? "border-b lg:border-b-0 border-white/10" : ""
              }`}
            >
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/45 mb-3">
                {s.label}
              </div>
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-[-0.02em] mb-2">
                {s.staticValue ? (
                  s.staticValue
                ) : (
                  <CountUp to={s.value!} prefix={s.prefix} suffix={s.suffix} />
                )}
              </div>
              <div className="text-[12px] sm:text-[13px] text-white/55 leading-relaxed font-light">
                {s.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
