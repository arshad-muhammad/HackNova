import { motion } from 'motion/react';
import { Target, Zap, Shield, Trophy, Globe, Gift } from 'lucide-react';

const features = [

];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Soft ambient background glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[350px] bg-gradient-to-l from-transparent via-space-purple/5 to-transparent blur-[90px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-space-purple/50" />
              <span className="text-space-purple font-mono tracking-[0.25em] uppercase text-[11px] font-bold">The Mission</span>
              <span className="w-6 h-[1px] bg-space-purple/50 lg:hidden" />
            </div>

            <h2 className="font-display text-[44px] sm:text-[60px] md:text-[76px] font-black leading-[0.9] uppercase tracking-[-0.03em] mb-8 text-white">
              WRITE YOUR <br />
              <span className="text-space-purple">LEGACY IN THE STARS</span>
            </h2>

            <p className="text-base leading-[1.6] text-ink-dim max-w-xl mb-8 font-light">
              HackNova is not just a competition; it is a proving ground. We gather the most brilliant and creative minds to expand the frontiers of Artificial Intelligence.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10 max-w-xl w-full">
              <div className="glass-panel p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-space-purple/35 transition-all duration-300 rounded-xl">
                <div className="text-space-purple font-mono text-[10px] uppercase font-bold tracking-[0.15em] mb-1.5">Date</div>
                <div className="text-white font-display text-sm font-black tracking-wide">August 8-9, 2026</div>
              </div>
              <div className="glass-panel p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-space-purple/35 transition-all duration-300 rounded-xl">
                <div className="text-space-purple font-mono text-[10px] uppercase font-bold tracking-[0.15em] mb-1.5">Duration</div>
                <div className="text-white font-display text-sm font-black tracking-wide">24 Hours</div>
              </div>
              <div className="glass-panel p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-space-purple/35 transition-all duration-300 rounded-xl col-span-2">
                <div className="text-space-purple font-mono text-[10px] uppercase font-bold tracking-[0.15em] mb-1.5">Venue</div>
                <div className="text-white font-display text-sm font-black tracking-wide">VTU Belagavi, Karnataka</div>
              </div>
              <div className="glass-panel p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-space-purple/35 transition-all duration-300 rounded-xl col-span-2">
                <div className="text-space-purple font-mono text-[10px] uppercase font-bold tracking-[0.15em] mb-1.5">Participation</div>
                <div className="text-white font-display text-sm font-black tracking-wide">Open to students from various colleges</div>
              </div>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-display text-xl font-bold tracking-wide mb-1">{feature.title}</h3>
                    <p className="text-[11px] text-ink-dim leading-[1.4]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Content - Prize Pool */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex flex-col gap-4 h-full justify-center w-full"
          >
            {/* Main Prize */}
            <div className="relative rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-space-purple/30 p-10 text-center overflow-hidden group transition-all duration-300">
              {/* Radial glow on hover */}
              <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none scale-75" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="text-space-purple font-mono text-xs uppercase tracking-[0.25em] mb-4 font-bold">Total Prize Pool</div>
                <div className="font-display text-6xl md:text-8xl font-black text-white tracking-tighter mb-4">
                  ₹30<span className="text-space-purple">K</span>
                </div>
                <div className="text-sm text-ink-dim max-w-[250px] leading-relaxed font-light">
                  Distributed among top performers, innovators, and category winners.
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Domain Prize */}
              <div className="relative rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-space-purple/20 p-6 transition-all duration-300 overflow-hidden group">
                {/* Radial glow on hover */}
                <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none scale-75" />
                <div className="relative z-10">
                  <div className="text-white font-display font-black text-lg mb-2 group-hover:text-space-purple transition-colors">.XYZ Domain</div>
                  <div className="text-xs text-ink-dim leading-relaxed font-light">Free 1-year domain registration for every single participant.</div>
                </div>
              </div>

              {/* Goodies */}
              <div className="relative rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-space-purple/20 p-6 transition-all duration-300 overflow-hidden group">
                {/* Radial glow on hover */}
                <div className="absolute inset-0 bg-radial-glow opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none scale-75" />
                <div className="relative z-10">
                  <div className="text-white font-display font-black text-lg mb-2 group-hover:text-space-purple transition-colors">Exclusive Swag</div>
                  <div className="text-xs text-ink-dim leading-relaxed font-light">Premium T-shirts, stickers, and physical goodies for hackers.</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
