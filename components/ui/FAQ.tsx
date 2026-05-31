"use client";

import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { FAQS } from "@/lib/faqs";

// Map shared SEO-friendly schema into the visible accordion shape
const faqs = FAQS.map((f) => ({ q: f.question, a: f.answer }));

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 md:py-36 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          {...fade}
          className="flex items-baseline justify-between border-t border-white/10 pt-5 mb-14 md:mb-20 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45"
        >
          <span>Questions - 05</span>
          <span className="hidden sm:block">{faqs.length} entries</span>
        </motion.div>

        <motion.h2
          {...fade}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-display font-black text-white tracking-[-0.035em] leading-[0.92] uppercase text-[44px] sm:text-[68px] md:text-[92px] lg:text-[108px] mb-12 md:mb-16"
        >
          Frequently
          <br />
          <span className="text-white/35">asked.</span>
        </motion.h2>

        <ul className="border-t border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={f.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] as const }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full grid grid-cols-12 gap-3 sm:gap-6 items-baseline py-6 text-left transition-colors hover:bg-white/[0.015] -mx-2 px-2"
                  aria-expanded={isOpen}
                >
                  <span className="col-span-2 sm:col-span-1 font-mono text-[10px] tracking-[0.3em] uppercase text-white/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-9 sm:col-span-10 font-display text-base sm:text-lg font-black text-white tracking-[-0.01em] uppercase">
                    {f.q}
                  </span>
                  <span className="col-span-1 flex justify-end text-white/45">
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      className="inline-flex"
                    >
                      <Plus className="w-4 h-4" />
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-3 sm:gap-6 pb-6">
                        <div className="col-span-2 sm:col-span-1" />
                        <p className="col-span-10 text-[14px] sm:text-[15px] text-white/65 leading-[1.7] font-light max-w-2xl">
                          {f.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>

        <motion.div {...fade} className="mt-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-white/45">
          <span>
            Still curious?{" "}
            <a
              href="mailto:spherehive@kvgce.ac.in"
              className="text-white/85 border-b border-white/20 hover:border-white pb-0.5 transition-colors"
            >
              spherehive@kvgce.ac.in
            </a>
          </span>
          <a
            href="https://chat.whatsapp.com/IhdbBT7OKAd1LHpYy9XBkc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/85 hover:text-white transition-colors"
          >
            <span className="border-b border-white/20 hover:border-white pb-0.5">
              Join the WhatsApp community
            </span>
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 fill-current"
              aria-hidden
            >
              <path d="M17.6 6.32A7.85 7.85 0 0012.05 4a7.94 7.94 0 00-6.78 11.95l-1.05 3.84 3.94-1.03a7.92 7.92 0 003.79.96h.01A7.94 7.94 0 0017.6 6.32zM12.06 18.4h-.01a6.6 6.6 0 01-3.36-.92l-.24-.14-2.34.61.62-2.28-.16-.24a6.6 6.6 0 1111.83-4.04 6.6 6.6 0 01-6.34 7.01zm3.62-4.94c-.2-.1-1.18-.58-1.36-.65-.18-.07-.31-.1-.45.1-.13.2-.51.65-.62.78-.11.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.52-.99-1.17-1.1-1.36-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.34.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34l-.39-.01a.74.74 0 00-.54.25c-.18.2-.7.69-.7 1.67s.72 1.94.82 2.07c.1.13 1.41 2.16 3.42 3.03.48.21.85.33 1.14.43.48.15.91.13 1.26.08.38-.06 1.18-.48 1.35-.95.17-.47.17-.86.12-.95-.05-.08-.18-.13-.38-.23z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
