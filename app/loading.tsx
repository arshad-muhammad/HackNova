"use client";

import { motion } from 'motion/react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-space-black overflow-hidden">
      {/* Background soft nebula glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] bg-gradient-to-r from-transparent via-space-purple/10 to-transparent blur-[80px]" />
        <div className="absolute bottom-[30%] right-[20%] w-[350px] h-[350px] bg-gradient-to-r from-transparent via-space-nebula/5 to-transparent blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Pulsing high-fidelity geometric loader */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Outer glowing pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-space-purple/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Middle rotating orbit ellipse */}
          <motion.div
            className="absolute w-16 h-16 rounded-full border-t border-r border-transparent border-t-space-purple border-r-space-purple"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* Inner solid glowing core */}
          <motion.div
            className="w-3 h-3 rounded-full bg-space-purple box-glow animate-pulse"
          />
        </div>

        {/* Loading text with smooth fade-in-out animation */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="font-mono text-[10px] sm:text-xs text-white/70 tracking-[0.4em] uppercase"
          >
            Initiating Cosmic Link
          </motion.div>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-space-purple/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}
