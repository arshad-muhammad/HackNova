"use client";

import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Who can participate?",
    a: "HackNova is open to all developers, designers, and visionaries. Whether you're a seasoned coder or a rising talent, you're welcome.",
  },
  {
    q: "Is it team-based or solo?",
    a: "Teams of 2 to 4 members. You can register as an existing team or assemble one before submission closes.",
  },
  {
    q: "Does it cost anything to register?",
    a: "Registration is completely free. Bring your skills, your laptop, and your creativity.",
  },
  {
    q: "Who owns the work I build?",
    a: "You do. The code you ship during the hackathon stays entirely yours, except where sponsor-specific bounty rules apply (and those are communicated up front).",
  },
  {
    q: "Will there be food and drinks?",
    a: "Yes — full meals, snacks, and caffeine throughout the 24 hours so you can focus on shipping.",
  },
  {
    q: "Do I need prior AI / ML experience?",
    a: "No prior expertise required. Mentors and warm-up materials are provided so any motivated builder can compete on day one.",
  },
];

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
          <span>Questions — 05</span>
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

        <motion.div {...fade} className="mt-10 font-mono text-[11px] tracking-[0.22em] uppercase text-white/45">
          Still curious?{" "}
          <a
            href="mailto:hello@hacknova.in"
            className="text-white/85 border-b border-white/20 hover:border-white pb-0.5 transition-colors"
          >
            hello@hacknova.in
          </a>
        </motion.div>
      </div>
    </section>
  );
}
