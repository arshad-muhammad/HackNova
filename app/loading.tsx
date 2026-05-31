"use client";

import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-space-black overflow-hidden">
      {/* Soft nebula */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[30%] left-[20%] w-[350px] h-[350px] blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-[30%] right-[20%] w-[350px] h-[350px] blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(192,132,252,0.10) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-7">
        {/* Concentric rotating rings */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 rounded-full border border-space-purple/30"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-20 h-20 rounded-full border-t border-r border-transparent border-t-space-purple border-r-space-purple-glow"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-12 h-12 rounded-full border-b border-l border-transparent border-b-cyan-glow border-l-cyan-glow opacity-60"
            animate={{ rotate: -360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-space-purple shadow-[0_0_18px_rgba(139,92,246,0.9)]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-[10px] sm:text-xs text-white/70 tracking-[0.4em] uppercase caret-blink"
          >
            Initiating Cosmic Link
          </motion.div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-space-purple/40 to-transparent" />
        </div>
      </div>
    </div>
  );
}
