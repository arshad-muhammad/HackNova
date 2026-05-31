"use client";

import { useEffect, useRef, useState } from "react";

const COLS = 56;
const ROWS = 18;
const TICK_MS = 80;

type Vec = { x: number; y: number };
type Bullet = Vec & { dx: number; dy: number; life: number };
type Rock = Vec & { dx: number; dy: number };

const wrap = (v: number, max: number) => ((v % max) + max) % max;

/**
 * A tiny ASCII space dodger.
 * - ←/→ rotate, ↑ thrust, space to fire, P to pause.
 * - 56×18 character grid. Pure JS, no canvas, no deps.
 */
export default function LostGame() {
  const [grid, setGrid] = useState<string[]>(() => emptyGrid());
  const [score, setScore] = useState(0);
  const [hi, setHi] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dead, setDead] = useState(false);
  const [running, setRunning] = useState(false);
  const focusRef = useRef<HTMLDivElement | null>(null);

  // Mutable game state — kept in a ref so we don't trigger re-renders per tick
  const state = useRef(initialState());

  function initialState() {
    return {
      ship: { x: COLS / 2, y: ROWS / 2 },
      angle: 0, // radians, 0 = right
      vx: 0,
      vy: 0,
      bullets: [] as Bullet[],
      rocks: spawnRocks(5),
      keys: new Set<string>(),
      cooldown: 0,
      tick: 0,
    };
  }

  // ---- Input ----
  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (!running) return;
      const k = e.key.toLowerCase();
      if (
        ["arrowup", "arrowdown", "arrowleft", "arrowright", " ", "p"].includes(
          k
        )
      ) {
        e.preventDefault();
      }
      if (k === "p") setPaused((p) => !p);
      state.current.keys.add(k);
    };
    const onUp = (e: KeyboardEvent) => {
      state.current.keys.delete(e.key.toLowerCase());
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, [running]);

  // Pause when tab loses focus
  useEffect(() => {
    const onBlur = () => setPaused(true);
    window.addEventListener("blur", onBlur);
    return () => window.removeEventListener("blur", onBlur);
  }, []);

  // ---- Loop ----
  useEffect(() => {
    if (!running || paused || dead) return;
    let id = window.setInterval(step, TICK_MS);
    return () => window.clearInterval(id);
  });

  function step() {
    const s = state.current;
    s.tick++;

    // Steering
    if (s.keys.has("arrowleft")) s.angle -= 0.22;
    if (s.keys.has("arrowright")) s.angle += 0.22;
    if (s.keys.has("arrowup")) {
      s.vx += Math.cos(s.angle) * 0.06;
      s.vy += Math.sin(s.angle) * 0.06;
    }

    // Damp velocity
    s.vx *= 0.985;
    s.vy *= 0.985;

    // Move ship
    s.ship.x = wrap(s.ship.x + s.vx, COLS);
    s.ship.y = wrap(s.ship.y + s.vy, ROWS);

    // Fire
    if (s.keys.has(" ") && s.cooldown <= 0) {
      s.bullets.push({
        x: s.ship.x,
        y: s.ship.y,
        dx: Math.cos(s.angle) * 0.9,
        dy: Math.sin(s.angle) * 0.9,
        life: 30,
      });
      s.cooldown = 4;
    }
    if (s.cooldown > 0) s.cooldown--;

    // Move bullets
    s.bullets = s.bullets
      .map((b) => ({ ...b, x: wrap(b.x + b.dx, COLS), y: wrap(b.y + b.dy, ROWS), life: b.life - 1 }))
      .filter((b) => b.life > 0);

    // Move rocks
    for (const r of s.rocks) {
      r.x = wrap(r.x + r.dx, COLS);
      r.y = wrap(r.y + r.dy, ROWS);
    }

    // Rock-bullet collisions
    let scored = 0;
    for (let i = s.rocks.length - 1; i >= 0; i--) {
      const r = s.rocks[i];
      const hitIdx = s.bullets.findIndex(
        (b) => Math.abs(b.x - r.x) < 1.2 && Math.abs(b.y - r.y) < 1.2
      );
      if (hitIdx >= 0) {
        s.rocks.splice(i, 1);
        s.bullets.splice(hitIdx, 1);
        scored += 10;
      }
    }
    if (scored) setScore((sc) => sc + scored);

    // Respawn when cleared
    if (s.rocks.length === 0) {
      s.rocks = spawnRocks(5 + Math.floor(s.tick / 600));
    }

    // Ship collision
    for (const r of s.rocks) {
      if (Math.abs(r.x - s.ship.x) < 1.1 && Math.abs(r.y - s.ship.y) < 1.1) {
        setDead(true);
        setHi((h) => Math.max(h, score));
        return;
      }
    }

    // Render
    setGrid(render(s));
  }

  function reset() {
    state.current = initialState();
    setScore(0);
    setDead(false);
    setPaused(false);
    setGrid(render(state.current));
    focusRef.current?.focus();
  }

  function start() {
    state.current = initialState();
    setScore(0);
    setDead(false);
    setPaused(false);
    setRunning(true);
    setGrid(render(state.current));
    setTimeout(() => focusRef.current?.focus(), 0);
  }

  return (
    <div
      ref={focusRef}
      tabIndex={0}
      onClick={() => focusRef.current?.focus()}
      className="border border-white/15 rounded-md p-4 sm:p-5 bg-black/40 outline-none focus:border-white/30 transition-colors"
    >
      {/* Top status row */}
      <div className="flex items-baseline justify-between mb-3 font-mono text-[10px] tracking-[0.25em] uppercase text-white/55">
        <span>
          score{" "}
          <span className="text-white tabular-nums">
            {String(score).padStart(4, "0")}
          </span>
        </span>
        <span>
          best{" "}
          <span className="text-white tabular-nums">
            {String(Math.max(hi, score)).padStart(4, "0")}
          </span>
        </span>
        <span className="hidden sm:inline">
          ←/→ rotate · ↑ thrust · ␣ fire · P pause
        </span>
      </div>

      {/* Field */}
      <pre
        className={`font-mono text-[11px] sm:text-[13px] leading-[1.05] text-white/85 select-none whitespace-pre overflow-hidden ${
          paused || dead || !running ? "opacity-60" : ""
        }`}
      >
        {grid.join("\n")}
      </pre>

      {/* Bottom action row */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-white/55">
        <span>
          {!running
            ? "press start"
            : dead
            ? "you got hit"
            : paused
            ? "paused"
            : "in flight"}
        </span>
        <div className="flex items-center gap-2">
          {!running ? (
            <button
              onClick={start}
              className="px-3 py-1.5 border border-white/20 hover:border-white text-white/85 hover:text-white rounded transition-colors"
            >
              Start
            </button>
          ) : dead ? (
            <button
              onClick={reset}
              className="px-3 py-1.5 border border-white/20 hover:border-white text-white/85 hover:text-white rounded transition-colors"
            >
              Restart
            </button>
          ) : (
            <button
              onClick={() => setPaused((p) => !p)}
              className="px-3 py-1.5 border border-white/15 hover:border-white/30 text-white/65 hover:text-white rounded transition-colors"
            >
              {paused ? "Resume" : "Pause"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ---- Helpers ----

function emptyGrid() {
  return Array.from({ length: ROWS }, () => ".".repeat(COLS));
}

function spawnRocks(n: number): Rock[] {
  const rocks: Rock[] = [];
  for (let i = 0; i < n; i++) {
    const onSide = Math.random() < 0.5;
    rocks.push({
      x: onSide ? 0 : Math.random() * COLS,
      y: onSide ? Math.random() * ROWS : 0,
      dx: (Math.random() - 0.5) * 0.6,
      dy: (Math.random() - 0.5) * 0.4,
    });
  }
  return rocks;
}

function shipChar(angle: number) {
  // 8 sectors → arrows
  const sectors = ["▶", "◢", "▼", "◣", "◀", "◤", "▲", "◥"];
  const s = (((angle / (Math.PI * 2)) * 8) | 0) % 8;
  return sectors[(s + 8) % 8];
}

function render(s: ReturnType<typeof initialState>) {
  const buf: string[][] = Array.from({ length: ROWS }, () =>
    Array(COLS).fill(" ")
  );

  // sparse star field
  for (let i = 0; i < 18; i++) {
    const sx = (i * 137 + s.tick * 0.3) % COLS;
    const sy = (i * 53) % ROWS;
    buf[Math.floor(sy)][Math.floor(sx)] = ".";
  }

  // rocks
  for (const r of s.rocks) {
    buf[Math.floor(r.y)][Math.floor(r.x)] = "✺";
  }

  // bullets
  for (const b of s.bullets) {
    buf[Math.floor(b.y)][Math.floor(b.x)] = "·";
  }

  // ship
  buf[Math.floor(s.ship.y)][Math.floor(s.ship.x)] = shipChar(s.angle);

  return buf.map((row) => row.join(""));
}
