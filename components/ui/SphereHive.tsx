"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type EventItem = {
  name: string;
  kind: string;
  date: string;
  blurb: string;
};

const events: EventItem[] = [
  {
    name: "HACKWISE 1.0",
    kind: "National Hackathon",
    date: "Apr 2025",
    blurb:
      "Our first flagship — students from across India came to compete and build.",
  },
  {
    name: "HACKWISE X",
    kind: "Internal Hackathon",
    date: "Mar 2026",
    blurb:
      "An internal edition, exclusively for KVGCE students to build, compete, and grow.",
  },
  {
    name: "HACKWISE 2.0",
    kind: "National Hackathon",
    date: "Apr 2026",
    blurb:
      "The second edition of our flagship — bigger in scale, reach, and participation.",
  },
  {
    name: "HACK[AI]THON 2026",
    kind: "AI Hackathon",
    date: "May 2026",
    blurb: "A national AI hackathon — the event where we met.",
  },
];

const fade = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function SphereHive() {
  return (
    <section id="sphere-hive" className="py-28 md:py-36 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top meta rule */}
        <motion.div
          {...fade}
          className="flex items-baseline justify-between border-t border-white/10 pt-5 mb-14 md:mb-20 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45"
        >
          <span>Sphere Hive — 06</span>
          <span className="hidden sm:block">KVGCE · Sullia</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          {...fade}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="font-display font-black text-white tracking-[-0.035em] leading-[0.92] uppercase text-[44px] sm:text-[68px] md:text-[92px] lg:text-[108px] mb-16 md:mb-20"
        >
          Built by
          <br />
          <span className="text-white/35">Sphere Hive.</span>
        </motion.h2>

        {/* Photo */}
        <motion.figure
          {...fade}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-5"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-[#0a0712]">
            <img
              src="/team-group.jpeg"
              alt="The Sphere Hive team"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <figcaption className="mt-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-white/40">
            <span className="w-8 h-px bg-white/25" />
            The team — KVG College of Engineering, Sullia
          </figcaption>
        </motion.figure>

        {/* Story + events */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-20 md:mt-28">
          {/* Copy */}
          <motion.div {...fade} className="lg:col-span-5">
            <p className="text-[17px] md:text-lg text-white/85 leading-[1.65] mb-6">
              Sphere Hive is the technology and innovation club of KVG College
              of Engineering, Sullia. We started it from the ground up in
              November 2024.
            </p>
            <p className="text-[15px] md:text-base text-white/55 leading-[1.7]">
              In under two years we&apos;ve run national hackathons, competed at
              IIT-level events, partnered with industry, and built an active
              student community across India.
            </p>

            <a
              href="https://www.instagram.com/spherehive"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-white/55 hover:text-white transition-colors"
            >
              <span className="border-b border-white/20 group-hover:border-white pb-0.5">
                @spherehive
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Events list */}
          <motion.div {...fade} className="lg:col-span-7">
            <div className="flex items-baseline justify-between mb-5 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45">
              <span>Selected Events</span>
              <span>2025 — 2026</span>
            </div>

            <ul className="border-t border-white/10">
              {events.map((ev, i) => (
                <motion.li
                  key={ev.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="group border-b border-white/10 py-6 grid grid-cols-12 gap-3 sm:gap-6 items-baseline transition-colors hover:bg-white/[0.015]"
                >
                  <div className="col-span-12 sm:col-span-9">
                    <div className="font-display text-lg sm:text-xl font-black tracking-[-0.01em] text-white uppercase">
                      {ev.name}
                    </div>
                    <p className="mt-1.5 text-[13px] sm:text-sm text-white/55 leading-relaxed">
                      <span className="text-white/75">{ev.kind}</span>
                      <span className="mx-2 text-white/25">·</span>
                      {ev.blurb}
                    </p>
                  </div>
                  <div className="col-span-12 sm:col-span-3 sm:text-right font-mono text-[11px] tracking-[0.22em] uppercase text-white/55">
                    {ev.date}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
