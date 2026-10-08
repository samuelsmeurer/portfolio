"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const OM_STEPS = [
  { label: "Market Research", sub: "On-chain data · competitive landscape · ICP definition" },
  { label: "Beachhead Plan", sub: "Tactical & operational plan → first-mover positioning" },
  { label: "Channel", sub: "B2C + B2B · KOLs · Lead Gen · ICP · SDRs" },
  { label: "Measure KPIs", sub: "TOFU activation · attribution · GTM execution" },
];

const SCALE_STEPS = [
  { label: "TOFU Optimization", sub: "Per channel — KOLs · Ads · Events · Leads" },
  { label: "Attribution infra", sub: "Server-side CAPI · MMP · GTM" },
  { label: "Automation & AI", sub: "Python agents · Ops elimination" },
  { label: "MOFU & BOFU", sub: "GA4 Events · BigQuery · Conversion" },
  { label: "Growth Loops", sub: "Referral design · Push flows · Campaigns" },
  { label: "AB Testing → Metrics", sub: "CAC · DAU · Retention · LTV · ARPU" },
];

export function Pillars() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Panel opacity (full panel)
  const leftOp = useTransform(scrollYProgress, [0, 0.40, 0.52, 1], [1, 1, 0.08, 0.08]);
  const rightOp = useTransform(scrollYProgress, [0, 0.48, 0.55, 1], [0.08, 0.08, 1, 1]);

  // Glow behind title
  const leftGlow = useTransform(scrollYProgress, [0, 0.42, 0.52], [1, 1, 0]);
  const rightGlow = useTransform(scrollYProgress, [0.48, 0.55, 1], [0, 1, 1]);

  // Divider
  const dividerH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const progressW = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Transition label
  const transitionOp = useTransform(scrollYProgress, [0.44, 0.48, 0.52, 0.56], [0, 1, 1, 0]);

  // OM steps — 4 steps, start dim (0.1), activate to 1 on scroll
  const om0 = useTransform(scrollYProgress, [0.02, 0.11], [0.1, 1]);
  const om1 = useTransform(scrollYProgress, [0.13, 0.22], [0.1, 1]);
  const om2 = useTransform(scrollYProgress, [0.24, 0.33], [0.1, 1]);
  const om3 = useTransform(scrollYProgress, [0.35, 0.42], [0.1, 1]);
  const omCase = useTransform(scrollYProgress, [0.44, 0.50], [0, 1]);

  // Scale steps
  const sc0 = useTransform(scrollYProgress, [0.53, 0.60], [0.1, 1]);
  const sc1 = useTransform(scrollYProgress, [0.61, 0.68], [0.1, 1]);
  const sc2 = useTransform(scrollYProgress, [0.69, 0.76], [0.1, 1]);
  const sc3 = useTransform(scrollYProgress, [0.77, 0.84], [0.1, 1]);
  const sc4 = useTransform(scrollYProgress, [0.85, 0.91], [0.1, 1]);
  const sc5 = useTransform(scrollYProgress, [0.91, 0.95], [0.1, 1]);
  const scCase = useTransform(scrollYProgress, [0.93, 1.0], [0, 1]);

  const scStepValues = [sc0, sc1, sc2, sc3, sc4, sc5];

  return (
    <section ref={containerRef} className="relative" style={{ height: "380vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

        {/* ── Header ── */}
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-16 py-4 border-b border-neutral-900">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-neutral-700 tracking-widest uppercase">— the system</span>
            <span className="font-mono text-sm text-neutral-400">How I work</span>
          </div>
          <motion.span className="font-mono text-xs text-blue-500/60" style={{ opacity: transitionOp }}>
            → now build the machine
          </motion.span>
        </div>

        {/* ── Full-height panels ── */}
        <div className="absolute inset-0 top-[45px] grid grid-cols-2">

          {/* ═══ LEFT: Open Markets ═══ */}
          <motion.div className="relative flex flex-col border-r border-neutral-900 overflow-hidden" style={{ opacity: leftOp }}>

            {/* Glow */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-64 pointer-events-none"
              style={{
                opacity: leftGlow,
                background: "radial-gradient(ellipse 100% 80% at 30% 0%, rgba(59,130,246,0.14) 0%, transparent 100%)",
              }}
            />

            {/* Watermark */}
            <div
              className="absolute right-0 bottom-0 font-mono font-bold leading-none pointer-events-none select-none"
              style={{
                fontSize: "clamp(9rem, 19vw, 24rem)",
                color: "rgba(255,255,255,0.04)",
                lineHeight: 0.82,
              }}
            >
              01
            </div>

            {/* Content fills full height */}
            <div className="relative z-10 flex flex-col h-full px-8 md:px-14 pt-7 pb-6">
              {/* TITLE */}
              <div className="shrink-0 mb-2">
                <div className="font-mono text-xs text-neutral-700 mb-1">01 /</div>
                <h3
                  className="font-mono font-bold gradient-text leading-none"
                  style={{ fontSize: "clamp(2.8rem, 5.2vw, 5.5rem)" }}
                >
                  Open
                  <br />
                  Markets
                </h3>
                <p className="font-mono text-xs text-neutral-600 mt-2">
                  Find the gap before it&apos;s obvious.
                </p>
              </div>

              {/* STEPS — process loop, clean document flow */}
              <div className="flex-1 min-h-0 flex flex-col justify-between py-4">

                {/* 01 Market Research */}
                <motion.div style={{ opacity: om0 }}>
                  <div className="flex items-start gap-4 border-l-2 border-neutral-800 pl-4">
                    <div className="flex-1">
                      <div className="font-mono text-[9px] text-blue-500/40 tracking-[0.14em] mb-1">01</div>
                      <div className="font-mono text-base font-semibold text-neutral-200 leading-tight">Market Research</div>
                      <div className="font-mono text-[10px] text-neutral-600 mt-1 leading-relaxed">On-chain data · competitive landscape · ICP definition</div>
                    </div>
                  </div>
                </motion.div>

                {/* bridge — hypothesis */}
                <motion.div className="flex items-center gap-3" style={{ opacity: om1 }}>
                  <div className="flex flex-col items-center shrink-0 w-5">
                    <div className="w-px flex-1 bg-neutral-800/60 min-h-[8px]" />
                    <div className="w-1 h-1 rounded-full bg-neutral-700 my-0.5" />
                    <div className="w-px flex-1 bg-neutral-800/60 min-h-[8px]" />
                  </div>
                  <span
                    className="font-mono font-bold text-neutral-500 leading-none tracking-tight"
                    style={{ fontSize: "clamp(1.35rem, 2.3vw, 2rem)" }}
                  >
                    hypothesis
                  </span>
                </motion.div>

                {/* 02 Beachhead Plan */}
                <motion.div style={{ opacity: om1 }}>
                  <div className="flex items-start gap-4 border-l-2 border-neutral-800 pl-4">
                    <div className="flex-1">
                      <div className="font-mono text-[9px] text-blue-500/40 tracking-[0.14em] mb-1">02</div>
                      <div className="font-mono text-base font-semibold text-neutral-200 leading-tight">Beachhead Plan</div>
                      <div className="font-mono text-[10px] text-neutral-600 mt-1 leading-relaxed">Tactical &amp; operational plan → first-mover positioning</div>
                    </div>
                  </div>
                </motion.div>

                {/* bridge — acquisition */}
                <motion.div className="flex items-center gap-3" style={{ opacity: om2 }}>
                  <div className="flex flex-col items-center shrink-0 w-5">
                    <div className="w-px flex-1 bg-neutral-800/60 min-h-[8px]" />
                    <div className="w-1 h-1 rounded-full bg-neutral-700 my-0.5" />
                    <div className="w-px flex-1 bg-neutral-800/60 min-h-[8px]" />
                  </div>
                  <span
                    className="font-mono font-bold text-neutral-500 leading-none tracking-tight"
                    style={{ fontSize: "clamp(1.15rem, 1.9vw, 1.7rem)" }}
                  >
                    acquisition
                  </span>
                </motion.div>

                {/* 03 Channel */}
                <motion.div style={{ opacity: om2 }}>
                  <div className="flex items-start gap-4 border-l-2 border-neutral-800 pl-4">
                    <div className="flex-1">
                      <div className="font-mono text-[9px] text-blue-500/40 tracking-[0.14em] mb-1">03</div>
                      <div className="font-mono text-base font-semibold text-neutral-200 leading-tight">Channel</div>
                      <div className="font-mono text-[10px] text-neutral-600 mt-1 leading-relaxed">B2C + B2B · KOLs · Lead Gen · ICP · SDRs</div>
                    </div>
                  </div>
                </motion.div>

                {/* connector — simple dot */}
                <motion.div className="flex items-center gap-3" style={{ opacity: om3 }}>
                  <div className="flex flex-col items-center shrink-0 w-5">
                    <div className="w-px h-3 bg-neutral-800/60" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700/60 my-0.5" />
                    <div className="w-px h-3 bg-neutral-800/60" />
                  </div>
                </motion.div>

                {/* 04 Measure KPIs */}
                <motion.div style={{ opacity: om3 }}>
                  <div className="flex items-start gap-4 border-l-2 border-neutral-800 pl-4">
                    <div className="flex-1">
                      <div className="font-mono text-[9px] text-blue-500/40 tracking-[0.14em] mb-1">04</div>
                      <div className="font-mono text-base font-semibold text-neutral-200 leading-tight">Measure KPIs</div>
                      <div className="font-mono text-[10px] text-neutral-600 mt-1 leading-relaxed">TOFU activation · attribution · GTM execution</div>
                    </div>
                  </div>
                </motion.div>

                {/* loop indicator */}
                <motion.div className="flex items-center gap-3" style={{ opacity: om3 }}>
                  <div className="flex items-center gap-2 border border-blue-500/15 bg-blue-950/10 px-3 py-1.5 rounded-sm">
                    <span className="font-mono text-[10px] text-blue-400/60">↺</span>
                    <span className="font-mono text-[10px] text-neutral-500 tracking-wide">validate?!</span>
                  </div>
                  <div className="flex-1 h-px bg-neutral-800/40" />
                  <span className="font-mono text-[10px] text-neutral-700">→ research</span>
                </motion.div>

              </div>

              {/* CASE CARD */}
              <motion.div
                className="shrink-0 border border-blue-500/20 bg-blue-950/10 px-5 py-4 rounded-sm"
                style={{ opacity: omCase }}
              >
                <p className="font-mono text-[10px] text-neutral-700 mb-1.5 tracking-widest uppercase">
                  Bolivia · El Dorado · 2025
                </p>
                <p
                  className="font-mono font-bold text-blue-400 leading-none"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
                >
                  $10K → $700K/mo
                </p>
                <p className="font-mono text-xs text-neutral-600 mt-1.5">
                  10 months &nbsp;·&nbsp; became #1 market
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Animated divider */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px z-20 overflow-hidden">
            <div className="absolute inset-0 bg-neutral-900" />
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{
                height: dividerH,
                background: "linear-gradient(to bottom, rgba(59,130,246,0.7), rgba(99,102,241,0.5), rgba(34,197,94,0.7))",
              }}
            />
          </div>

          {/* ═══ RIGHT: Scale ═══ */}
          <motion.div className="relative flex flex-col overflow-hidden" style={{ opacity: rightOp }}>

            {/* Glow */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-64 pointer-events-none"
              style={{
                opacity: rightGlow,
                background: "radial-gradient(ellipse 100% 80% at 70% 0%, rgba(34,197,94,0.11) 0%, transparent 100%)",
              }}
            />

            {/* Watermark */}
            <div
              className="absolute left-0 bottom-0 font-mono font-bold leading-none pointer-events-none select-none"
              style={{
                fontSize: "clamp(9rem, 19vw, 24rem)",
                color: "rgba(255,255,255,0.04)",
                lineHeight: 0.82,
              }}
            >
              02
            </div>

            {/* Content fills full height */}
            <div className="relative z-10 flex flex-col h-full px-8 md:px-14 pt-7 pb-6">
              {/* TITLE */}
              <div className="shrink-0 mb-2">
                <div className="font-mono text-xs text-neutral-700 mb-1">02 /</div>
                <h3
                  className="font-mono font-bold gradient-text leading-none"
                  style={{ fontSize: "clamp(2.8rem, 5.2vw, 5.5rem)" }}
                >
                  Scale
                </h3>
                <p className="font-mono text-xs text-neutral-600 mt-2">
                  Build the machine that compounds.
                </p>
              </div>

              {/* STEPS */}
              <div className="flex-1 min-h-0 flex flex-col justify-evenly py-4">
                {SCALE_STEPS.map((step, i) => (
                  <motion.div key={step.label} style={{ opacity: scStepValues[i] }}>
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-full border border-green-500/40 flex items-center justify-center mt-0.5">
                        <span className="font-mono text-[9px] text-green-500/80">{i + 1}</span>
                      </div>
                      <div>
                        <div className="font-mono text-sm text-neutral-300 leading-tight">{step.label}</div>
                        <div className="font-mono text-[10px] text-neutral-700 mt-0.5">{step.sub}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CASE CARD */}
              <motion.div
                className="shrink-0 border border-green-500/20 bg-green-950/10 px-5 py-4 rounded-sm"
                style={{ opacity: scCase }}
              >
                <p className="font-mono text-[10px] text-neutral-700 mb-1.5 tracking-widest uppercase">
                  El Dorado · 2025
                </p>
                <p
                  className="font-mono font-bold text-green-400 leading-none"
                  style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)" }}
                >
                  −76% ops · $110K+ recovered
                </p>
                <p className="font-mono text-xs text-neutral-600 mt-1.5">
                  +10% CVR &nbsp;·&nbsp; CAPI &nbsp;·&nbsp; Referral
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom progress ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-900 z-30 overflow-hidden">
          <motion.div
            className="h-full"
            style={{
              width: progressW,
              background: "linear-gradient(to right, rgba(59,130,246,0.8), rgba(34,197,94,0.8))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
