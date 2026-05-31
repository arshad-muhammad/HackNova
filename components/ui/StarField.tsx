"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient cosmic backdrop:
 * - Layered drifting stars on a canvas (cheap, no deps).
 * - Two slow aurora orbs that breathe.
 * - Respects prefers-reduced-motion.
 */
export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = {
      x: number; y: number; z: number;
      r: number; tw: number; phase: number; hue: number;
    };
    let stars: Star[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(220, Math.floor((width * height) / 9000));
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.85 + 0.15, // depth 0.15 - 1
        r: Math.random() * 1.2 + 0.2,
        tw: Math.random() * 2 + 1.5,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.12 ? 270 : Math.random() < 0.2 ? 195 : 0, // mostly white, rare violet/cyan
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const tw = (Math.sin(t / 1000 / s.tw + s.phase) + 1) / 2; // 0..1
        const alpha = 0.25 + tw * 0.75 * s.z;
        const color =
          s.hue === 270
            ? `hsla(270, 90%, 75%, ${alpha})`
            : s.hue === 195
            ? `hsla(195, 90%, 75%, ${alpha})`
            : `hsla(0, 0%, 100%, ${alpha})`;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * (0.6 + s.z * 0.6), 0, Math.PI * 2);
        ctx.fill();

        // Slow parallax drift
        if (!reduce) {
          s.x += 0.015 * s.z;
          s.y += 0.005 * s.z;
          if (s.x > width + 2) s.x = -2;
          if (s.y > height + 2) s.y = -2;
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030207] via-[#06041a] to-[#030207]" />
      {/* Stars */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Aurora orbs */}
      <div
        className="absolute top-[-15%] left-[-10%] w-[55vmax] h-[55vmax] rounded-full blur-[120px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.32) 0%, rgba(139,92,246,0) 60%)",
          animation: "aurora 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[55vmax] h-[55vmax] rounded-full blur-[140px] opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(103,232,249,0.18) 0%, rgba(103,232,249,0) 60%)",
          animation: "aurora 26s ease-in-out infinite reverse",
        }}
      />
      {/* Grid wash */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />
      {/* Film grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
    </div>
  );
}
