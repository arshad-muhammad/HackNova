"use client";

import { motion } from "motion/react";

const steps = [
  {
    n: "01",
    title: "Analyze embeddings",
    desc: "Explore the dataset for patterns, anomalies, and edge cases.",
  },
  {
    n: "02",
    title: "Identify samples",
    desc: "Select the most impactful data points the model struggles with.",
  },
  {
    n: "03",
    title: "Label strategically",
    desc: "Provide high-quality annotations for the chosen samples.",
  },
  {
    n: "04",
    title: "Retrain & improve",
    desc: "Feed the improved data back into the model and measure the lift.",
  },
];

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function Challenge() {
  return (
    <section id="challenge" className="py-28 md:py-36 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Meta rule */}
        <motion.div
          {...fade}
          className="flex items-baseline justify-between border-t border-white/10 pt-5 mb-14 md:mb-20 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45"
        >
          <span>Challenge - 02</span>
          <span className="hidden sm:block">Powered by 3LC.ai</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          {...fade}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-display font-black text-white tracking-[-0.035em] leading-[0.92] uppercase text-[44px] sm:text-[68px] md:text-[92px] lg:text-[108px] mb-12 md:mb-16"
        >
          Improve the data,
          <br />
          <span className="text-white/35">not the model.</span>
        </motion.h2>

        {/* Brief */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 md:mb-24">
          <motion.div {...fade} className="lg:col-span-7">
            <p className="text-[17px] md:text-lg text-white/85 leading-[1.65] mb-5 max-w-2xl">
              Build an image classification model using data-centric AI with
              3LC. Train on a small labeled set, then improve performance by
              strategically labeling additional data using embeddings and model
              feedback.
            </p>
            <p className="text-[15px] md:text-base text-white/55 leading-[1.7] max-w-2xl">
              Instead of changing model architectures, competitors must improve
              accuracy by improving the dataset itself.
            </p>
          </motion.div>

          <motion.div {...fade} className="lg:col-span-5">
            <div className="border-t border-white/10">
              <div className="border-b border-white/10 py-4 grid grid-cols-12 gap-4 items-baseline">
                <dt className="col-span-5 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45">
                  Traditional AI
                </dt>
                <dd className="col-span-7 text-[14px] text-white/55 font-light leading-relaxed">
                  Improve the model and the algorithm.
                </dd>
              </div>
              <div className="border-b border-white/10 py-4 grid grid-cols-12 gap-4 items-baseline">
                <dt className="col-span-5 font-mono text-[10px] tracking-[0.3em] uppercase text-white">
                  Data-Centric AI
                </dt>
                <dd className="col-span-7 text-[14px] text-white/85 font-light leading-relaxed">
                  Improve the data the model learns from.
                </dd>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="border-t border-white/10">
          <div className="flex items-baseline justify-between py-5 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45">
            <span>Method</span>
            <span>04 Steps</span>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                className={`group p-7 sm:p-8 transition-colors hover:bg-white/[0.02] ${
                  i < steps.length - 1 ? "border-b lg:border-b-0 lg:border-r border-white/10" : ""
                } ${i % 2 === 1 ? "md:border-l lg:border-l-0 border-white/10" : ""}`}
              >
                <div className="font-mono text-[10px] tracking-[0.3em] text-white/35 mb-6">
                  / {s.n}
                </div>
                <div className="font-display text-lg font-black text-white tracking-[-0.01em] uppercase mb-2">
                  {s.title}
                </div>
                <p className="text-[13px] text-white/55 leading-relaxed font-light">
                  {s.desc}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
