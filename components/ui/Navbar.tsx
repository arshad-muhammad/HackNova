"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navItems = ["Home", "About", "Challenge", "Schedule", "Sponsors", "FAQ"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [hidden, setHidden] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  // Auto-hide nav on scroll down, reveal on scroll up
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 140) setHidden(true);
    else setHidden(false);
  });

  // Active section tracking
  useEffect(() => {
    if (window.location.pathname !== "/") return;

    const sections = navItems.map((item) => {
      const id = item === "Schedule" ? "schedule" : item.toLowerCase();
      return { id, item, el: document.getElementById(id) };
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = sections.find((s) => s.id === entry.target.id);
            if (matched) setActiveTab(matched.item);
          }
        });
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((sec) => sec.el && observer.observe(sec.el));
    return () => observer.disconnect();
  }, []);

  // Sliding indicator follows hover or active
  useEffect(() => {
    const idx =
      hoverIndex !== null ? hoverIndex : navItems.indexOf(activeTab);
    const el = tabRefs.current[idx];
    if (el) {
      const parent = el.parentElement!.getBoundingClientRect();
      const rect = el.getBoundingClientRect();
      setIndicator({ left: rect.left - parent.left, width: rect.width });
    }
  }, [activeTab, hoverIndex]);

  const goTo = (item: string) => {
    setActiveTab(item);
    const id = item === "Schedule" ? "schedule" : item.toLowerCase();
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#" + id;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50"
    >
      <div className="glass-pill rounded-full px-5 py-2.5 flex items-center justify-between border-gradient">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white font-display font-black text-[13px] tracking-[2px] group"
        >
          <span className="relative inline-flex">
            <span className="absolute inset-0 rounded-full bg-space-purple/40 blur-md group-hover:blur-lg transition-all" />
            <img
              src="/logo.png"
              alt="HackNova"
              className="relative h-7 w-7 object-contain"
            />
          </span>
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            HACKNOVA
          </span>
        </Link>

        {/* Desktop nav with sliding pill */}
        <div
          className="hidden md:flex items-center gap-1 relative"
          onMouseLeave={() => setHoverIndex(null)}
        >
          {/* Sliding indicator */}
          {indicator && (
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-8 rounded-full bg-white/[0.06] border border-white/10"
              animate={{ left: indicator.left, width: indicator.width }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
            />
          )}

          {navItems.map((item, i) => (
            <button
              key={item}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              onMouseEnter={() => setHoverIndex(i)}
              onClick={() => goTo(item)}
              className={`relative px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors ${
                activeTab === item ? "text-white" : "text-ink-dim hover:text-white"
              }`}
            >
              {item}
              {activeTab === item && (
                <motion.span
                  layoutId="active-dot"
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-space-purple shadow-[0_0_8px_rgba(139,92,246,0.9)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/register"
            className="hidden md:inline-flex btn-primary px-5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] !rounded-full"
          >
            Register
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          <button
            className="md:hidden text-gray-300 hover:text-white p-1.5 rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 w-full mt-3 glass-panel rounded-2xl p-3 flex flex-col gap-1 md:hidden border-gradient"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  goTo(item);
                  setIsOpen(false);
                }}
                className={`p-3 rounded-xl text-left font-medium text-sm tracking-wider transition-colors ${
                  activeTab === item
                    ? "bg-space-purple/15 text-white border border-space-purple/30"
                    : "text-ink-dim hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {item}
              </button>
            ))}
            <Link
              href="/register"
              className="block text-center w-full mt-2 p-3 btn-primary !rounded-xl text-white font-bold tracking-wider text-sm"
              onClick={() => setIsOpen(false)}
            >
              REGISTER NOW
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
