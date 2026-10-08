"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/samuelschramm", symbol: "↗" },
  { label: "s.schramm@eldorado.io", href: "mailto:s.schramm@eldorado.io", symbol: "✉" },
  { label: "El Dorado", href: "https://eldorado.io", symbol: "↗" },
];

const LOCATIONS = ["Dubai", "Singapore", "Europe", "Remote global"];

export function Contact() {
  return (
    <section className="relative border-t border-neutral-900/80">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* Left: content */}
        <motion.div
          className="flex flex-col justify-center px-8 md:px-20 py-24 gap-10"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="font-mono text-xs text-neutral-700 mb-3 tracking-widest uppercase">
              — get in touch
            </p>
            <h2
              className="font-mono gradient-text leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              Open to roles.
              <br />
              <span className="text-neutral-600">Remote-first.</span>
            </h2>
            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-sm text-neutral-500">
                Web3 · Crypto · Fintech · Emerging markets
              </p>
            </div>
          </div>

          {/* Location pills */}
          <div className="flex flex-wrap gap-2">
            {LOCATIONS.map((loc) => (
              <span
                key={loc}
                className="glow-card font-mono text-xs text-neutral-500 px-3 py-1.5 rounded-sm"
              >
                {loc}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col gap-0">
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="font-mono text-sm text-neutral-500 hover:text-white border-b border-neutral-900 hover:border-neutral-700 py-4 flex items-center justify-between group transition-all duration-200"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <span>{link.label}</span>
                <span className="text-neutral-800 group-hover:text-neutral-400 transition-colors">
                  {link.symbol}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="font-mono text-xs text-neutral-800 leading-relaxed">
            Currently at El Dorado · Paradigm-backed · Series A<br />
            Stablecoin cross-border payments · LATAM
          </div>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          className="relative min-h-[500px] lg:min-h-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/photos/travel-london-tower-bridge-portrait.jpeg"
            alt="Samuel Schramm Meurer"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            priority={false}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #050505 0%, transparent 20%, transparent 80%, #050505 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #050505 0%, transparent 30%)",
            }}
          />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-neutral-900/80 px-8 md:px-20 py-6 flex items-center justify-between">
        <span className="font-mono text-xs text-neutral-800">Samuel Schramm Meurer</span>
        <span className="font-mono text-xs text-neutral-800">Growth Engineer · UTC+7 · SE Asia</span>
      </div>
    </section>
  );
}
