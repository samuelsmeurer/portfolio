"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Globe } from "@/components/ui/Globe";

const STATS = [
  { value: 700, prefix: "$", suffix: "K/mo", label: "volume opened" },
  { value: 145, prefix: "+", suffix: "%", label: "user growth" },
  { value: 110, prefix: "$", suffix: "K+", label: "revenue recovered" },
  { value: 30, prefix: "", suffix: "M", label: "impressions" },
];

function CountUp({
  value,
  prefix = "",
  suffix = "",
  active,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 50;
    const step = value / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur += step;
      if (cur >= value) { setCount(value); clearInterval(id); }
      else setCount(Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(id);
  }, [active, value]);
  return <span>{prefix}{count}{suffix}</span>;
}

export function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 px-8 md:px-20 pt-20 pb-16">
        {/* Left: text */}
        <div className="flex flex-col justify-center gap-8 lg:pr-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs text-neutral-500 border border-neutral-800 px-3 py-1.5 rounded-sm glow-card">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open to roles · Remote first · UTC+7
            </span>
          </motion.div>

          {/* Name */}
          <div className="overflow-hidden">
            <motion.h1
              className="gradient-text font-mono font-bold leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.8rem)" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              SAMUEL
              <br />
              SCHRAMM
              <br />
              MEURER
            </motion.h1>
          </div>

          {/* Role */}
          <motion.div
            className="font-mono text-sm text-neutral-500 flex flex-wrap gap-x-3 gap-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span>growth engineer</span>
            <span className="text-neutral-800">·</span>
            <span>web3</span>
            <span className="text-neutral-800">·</span>
            <span>crypto</span>
            <span className="text-neutral-800">·</span>
            <span>fintech</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="font-mono text-base md:text-lg text-neutral-300 leading-snug max-w-sm border-l-2 border-blue-500/40 pl-4"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            &ldquo;I open markets and build
            <br />
            the systems to scale them.&rdquo;
          </motion.p>

          {/* Stats pills */}
          <motion.div
            ref={statsRef}
            className="grid grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glow-card px-4 py-3 rounded-sm hover:border-blue-500/20 transition-all duration-300 cursor-default group"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.07, duration: 0.4 }}
              >
                <div className="font-mono text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} active={statsInView} />
                </div>
                <div className="font-mono text-xs text-neutral-600 mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-wrap gap-5 font-mono text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            {[
              { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/samuelschramm" },
              { label: "s.schramm@eldorado.io", href: "mailto:s.schramm@eldorado.io" },
              { label: "El Dorado ↗", href: "https://eldorado.io" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-neutral-600 hover:text-neutral-200 transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Globe */}
        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-full max-w-[540px]">
            {/* Glow behind globe */}
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: "rgba(37,99,235,0.07)" }}
            />
            <Globe className="w-full" />
          </div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent mx-8 md:mx-20" />

      {/* Scroll hint */}
      <motion.div
        className="relative z-10 flex justify-center py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="font-mono text-[10px] text-neutral-800 tracking-widest uppercase">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-neutral-700 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
