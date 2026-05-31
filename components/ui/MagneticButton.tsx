"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  strength?: number;
};

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  target,
  rel,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null as unknown as HTMLAnchorElement & HTMLButtonElement);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 280, damping: 22, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Tag: any = href ? motion.a : motion.button;
  const props = href ? { href, target, rel } : { onClick, type: "button" as const };

  return (
    <Tag
      ref={ref as any}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
