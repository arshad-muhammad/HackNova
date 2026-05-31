"use client";

import { useEffect, useRef } from "react";

/**
 * Ambient cosmic backdrop:
 * - Layered drifting stars on a canvas (cheap, no deps).
 * - Two slow aurora orbs that breathe.
 * - Cursor "constellation": faint lines connect stars near the cursor.
 *   Subtle by design — fades to nothing if the cursor is idle or off-screen.
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

    // Mouse state
    const mouse = { x: -9999, y: -9999, active: 0 }; // active 0..1
    const RADIUS = 130;
    const RADIUS_SQ = RADIUS * RADIUS;

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
        z: Math.random() * 0.85 + 0.15,
        r: Math.random() * 1.2 + 0.2,
        tw: Math.random() * 2 + 1.5,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.12 ? 270 : Math.random() < 0.2 ? 195 : 0,
      }));
    };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = 1;
    };
    const onLeave = () => {
      mouse.active = 0;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);

      // Decay activity smoothly so the constellation fades when the cursor stops
      mouse.active *= 0.985;

      // Stars
      const near: Star[] = [];
      for (const s of stars) {
        const tw = (Math.sin(t / 1000 / s.tw + s.phase) + 1) / 2;

        // Distance to cursor (only relevant if cursor is engaged)
        let boost = 0;
        if (mouse.active > 0.05) {
          const dx = s.x - mouse.x;
          const dy = s.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < RADIUS_SQ) {
            const k = 1 - d2 / RADIUS_SQ;
            boost = k * mouse.active;
            near.push(s);
          }
        }

        const alpha = Math.min(
          1,
          0.25 + tw * 0.75 * s.z + boost * 0.5
        );
        const color =
          s.hue === 270
            ? `hsla(270, 90%, 78%, ${alpha})`
            : s.hue === 195
            ? `hsla(195, 90%, 78%, ${alpha})`
            : `hsla(0, 0%, 100%, ${alpha})`;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * (0.6 + s.z * 0.6) + boost * 0.8, 0, Math.PI * 2);
        ctx.fill();

        // Slow parallax drift
        if (!reduce) {
          s.x += 0.015 * s.z;
          s.y += 0.005 * s.z;
          if (s.x > width + 2) s.x = -2;
          if (s.y > height + 2) s.y = -2;
        }
      }

      // Constellation lines — only between stars that are both near the cursor
      if (mouse.active > 0.05 && near.length > 1) {
        ctx.lineWidth = 0.6;
        for (let i = 0; i < near.length; i++) {
          const a = near[i];
          // Faint line from the cursor to the closest few stars too
          const dxc = a.x - mouse.x;
          const dyc = a.y - mouse.y;
          const dc = Math.sqrt(dxc * dxc + dyc * dyc);
          if (dc < RADIUS) {
            const aAlpha = (1 - dc / RADIUS) * mouse.active * 0.18;
            ctx.strokeStyle = `hsla(270, 90%, 80%, ${aAlpha})`;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(a.x, a.y);
            ctx.stroke();
          }

          for (let j = i + 1; j < near.length; j++) {
            const b = near[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < RADIUS_SQ) {
              const k = 1 - Math.sqrt(d2) / RADIUS;
              const lineAlpha = k * mouse.active * 0.22;
              ctx.strokeStyle = `hsla(270, 90%, 78%, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030207] via-[#06041a] to-[#030207]" />
      <canvas ref={canvasRef} className="absolute inset-0" />

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
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
    </div>
  );
}
