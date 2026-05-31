import Link from "next/link";
import LostGame from "@/components/ui/LostGame";

export default function NotFound() {
  return (
    <div className="relative min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-baseline justify-between border-t border-white/10 pt-5 mb-12 font-mono text-[10px] tracking-[0.3em] uppercase text-white/45">
          <span>Lost · 404</span>
          <span className="hidden sm:block">Coordinates not found</span>
        </div>

        <h1 className="font-display font-black text-white tracking-[-0.035em] leading-[0.92] uppercase text-[44px] sm:text-[68px] md:text-[92px] lg:text-[108px] mb-6">
          Lost in
          <br />
          <span className="text-white/35">the cosmos.</span>
        </h1>

        <p className="text-white/60 text-base sm:text-lg leading-[1.65] max-w-xl mb-10">
          Whatever was at this address has drifted out of range. While you wait
          for a signal, here&apos;s a tiny game we wrote in monospace.
        </p>

        <LostGame />

        <div className="mt-12 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 font-mono text-[11px] tracking-[0.22em] uppercase text-white/45">
          <Link
            href="/"
            className="text-white/85 border-b border-white/20 hover:border-white pb-0.5 transition-colors"
          >
            ← Return to base
          </Link>
          <span>HackNova · Sphere Hive</span>
        </div>
      </div>
    </div>
  );
}
