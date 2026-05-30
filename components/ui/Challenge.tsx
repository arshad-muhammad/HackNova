"use client";

import { motion } from 'motion/react';
import { Database, TrendingUp, Search, RefreshCw } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Analyze Embeddings',
    description: 'Explore the dataset to find patterns, anomalies, and edge cases.',
    icon: <Search className="w-8 h-8" />
  },
  {
    id: '02',
    title: 'Identify Samples',
    description: 'Select the most impactful data points that the model struggles with.',
    icon: <Database className="w-8 h-8" />
  },
  {
    id: '03',
    title: 'Label Strategically',
    description: 'Provide high-quality annotations for the selected samples.',
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    id: '04',
    title: 'Retrain & Improve',
    description: 'Feed the new data back into the model to boost accuracy.',
    icon: <RefreshCw className="w-8 h-8" />
  }
];

export default function Challenge() {
  return (
    <section className="py-24 relative overflow-hidden" id="challenge">
      {/* Soft ambient background glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[-15%] w-[500px] h-[350px] bg-gradient-to-r from-transparent via-space-purple/5 to-transparent blur-[90px]" />
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
            <span className="text-space-purple font-mono tracking-[0.25em] uppercase text-[11px] font-bold">The Cosmic Mission</span>
            <span className="w-6 h-[1px] bg-space-purple/50" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[44px] sm:text-[60px] md:text-[76px] font-black leading-[0.9] uppercase tracking-[-0.03em] mb-6 text-white"
          >
            THE CHALLENGE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-ink-dim max-w-2xl mx-auto font-light leading-relaxed"
          >
            All participants will compete on the same AI challenge using data-centric methodology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-white leading-[1.1] tracking-tight">
              Build an image classification model using Data-Centric AI with 3LC.
            </h3>
            <p className="text-sm sm:text-base leading-[1.6] text-ink-dim mb-8 font-light max-w-2xl">
              Participants will train a model on a small labeled dataset and improve performance by strategically labeling additional data using embeddings and model feedback.
            </p>
            <div className="glass-panel border-l-2 border-space-purple bg-space-purple/[0.02] rounded-r-2xl p-6 max-w-2xl w-full">
              <p className="text-sm sm:text-base font-light text-white/90 italic leading-relaxed">
                "Instead of changing the model architecture, competitors must improve accuracy by improving the dataset itself."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-space-purple/20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-space-purple/10 blur-[50px] rounded-full pointer-events-none" />
            <h4 className="text-space-purple font-mono text-[10px] uppercase font-bold tracking-[0.2em] mb-4">Key Concept</h4>
            <h3 className="font-display text-xl sm:text-2xl font-black mb-6 text-white tracking-wide">What is Data-Centric AI?</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-[2px] h-auto bg-white/20 rounded-full shrink-0" />
                <div>
                  <div className="text-white text-sm font-bold tracking-wide mb-1">Traditional AI</div>
                  <div className="text-xs text-ink-dim leading-relaxed font-light">Focuses on improving models and algorithms.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[2px] h-auto bg-space-purple rounded-full shrink-0" />
                <div>
                  <div className="text-space-purple-glow text-sm font-bold tracking-wide mb-1">Data-Centric AI</div>
                  <div className="text-xs text-ink-dim leading-relaxed font-light">Focuses on improving the quality of data used to train models.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel rounded-2xl p-8 bg-white/[0.01] hover:bg-white/[0.03] hover:border-space-purple/35 transition-all duration-300 border border-white/5 overflow-hidden group relative flex flex-col justify-between min-h-[220px]"
            >
              {/* Radial glow on hover */}
              <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none scale-75" />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="text-space-purple transform group-hover:scale-110 transition-transform duration-300 origin-left shrink-0">
                    {step.icon}
                  </div>
                  <div className="font-mono text-xs text-space-purple/40 group-hover:text-space-purple/70 transition-colors">
                    / {step.id}
                  </div>
                </div>
                
                <h3 className="font-display text-lg font-black mb-3 tracking-wide text-white group-hover:text-space-purple transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-[12px] text-ink-dim leading-[1.6] font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
