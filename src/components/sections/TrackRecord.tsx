"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GrowthChart } from "@/components/ui/GrowthChart";

const METRICS = [
  { value: 700, prefix: "$", suffix: "K/mo", label: "Volume opened", sub: "Bolivia peak · 10 months", color: "text-blue-400" },
  { value: 3, prefix: "", suffix: "×", label: "Brazil scale", sub: "$900K → $2.7M · 4 months", color: "text-blue-400" },
  { value: 145, prefix: "+", suffix: "%", label: "User growth", sub: "Brazil · 3 months", color: "text-green-400" },
  { value: 76, prefix: "−", suffix: "%", label: "Ops eliminated", sub: "Python + OpenAI agent", color: "text-green-400" },
];

function CountUp({
  value,
  prefix,
  suffix,
  active,
  color,
}: {
  value: number;
  prefix: string;
  suffix: string;
  active: boolean;
  color: string;
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const steps = 48;
    const step = value / steps;
    let cur = 0;
    const id = setInterval(() => {
      cur += step;
      if (cur >= value) { setCount(value); clearInterval(id); }
      else setCount(Math.floor(cur));
    }, 1800 / steps);
    return () => clearInterval(id);
  }, [active, value]);
  return (
    <span className={`font-mono font-bold ${color}`} style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function TrackRecord() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative px-8 md:px-20 py-28 border-t border-neutral-900/80">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-neutral-700 mb-1 tracking-widest uppercase">
            — the numbers
          </p>
          <h2 className="font-mono text-2xl gradient-text">Track Record</h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Left: metric cards */}
          <div className="grid grid-cols-2 gap-3">
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                className="glow-card p-5 rounded-sm hover:border-blue-500/20 transition-all duration-300 group"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} active={inView} color={m.color} />
                <div className="font-mono text-xs text-neutral-500 mt-2 group-hover:text-neutral-400 transition-colors">
                  {m.label}
                </div>
                <div className="font-mono text-[10px] text-neutral-800 mt-1">{m.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Right: charts */}
          <div className="flex flex-col gap-6">
            {/* Bolivia chart */}
            <motion.div
              className="glow-card p-6 rounded-sm"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-neutral-700 mb-1">Bolivia · 10 months</p>
                  <p className="font-mono text-sm text-neutral-300">Monthly Volume (K USD)</p>
                </div>
                <span className="font-mono text-xs text-blue-400 glow-card px-2 py-1 rounded-sm">
                  $10K → $700K
                </span>
              </div>
              <GrowthChart type="bolivia" height={180} />
            </motion.div>

            {/* Brazil chart */}
            <motion.div
              className="glow-card p-6 rounded-sm"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-neutral-700 mb-1">Brazil · 4 months</p>
                  <p className="font-mono text-sm text-neutral-300">Monthly Volume (K USD)</p>
                </div>
                <span className="font-mono text-xs text-green-400 glow-card px-2 py-1 rounded-sm">
                  3× scale
                </span>
              </div>
              <GrowthChart type="brazil" height={140} />
            </motion.div>

            {/* Extra metrics row */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "$110K+", label: "Revenue recovered", sub: "Funnel experiments" },
                { value: "$200K+", label: "KOL managed", sub: "150+ partnerships · 30M impr." },
              ].map((m, i) => (
                <motion.div
                  key={m.label}
                  className="glow-card p-4 rounded-sm"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                >
                  <div className="font-mono text-xl font-bold text-neutral-200">{m.value}</div>
                  <div className="font-mono text-xs text-neutral-600 mt-1">{m.label}</div>
                  <div className="font-mono text-[10px] text-neutral-800 mt-0.5">{m.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
