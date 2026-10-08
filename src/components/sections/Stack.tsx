"use client";

import { motion } from "framer-motion";

const CATEGORIES = [
  {
    name: "Analytics & Data",
    icon: "◈",
    tools: ["GA4", "BigQuery", "Mixpanel", "Amplitude", "Looker"],
    accent: "text-blue-400",
  },
  {
    name: "Attribution",
    icon: "◉",
    tools: ["Meta CAPI", "TikTok CAPI", "GTM server-side", "AppsFlyer", "Adjust"],
    accent: "text-blue-400",
  },
  {
    name: "Growth Systems",
    icon: "⟁",
    tools: ["Funnel design", "A/B testing", "Referral", "Retention loops", "CRO"],
    accent: "text-green-400",
  },
  {
    name: "Automation & AI",
    icon: "⌬",
    tools: ["Python", "OpenAI API", "n8n", "Zapier", "Make"],
    accent: "text-green-400",
  },
  {
    name: "Paid Acquisition",
    icon: "◰",
    tools: ["Meta Ads", "TikTok Ads", "Google Ads", "DSPs", "Creative testing"],
    accent: "text-neutral-300",
  },
  {
    name: "KOL & Partnerships",
    icon: "◎",
    tools: ["Influencer ops", "Contract mgmt", "ROI tracking", "30M+ reach"],
    accent: "text-neutral-300",
  },
  {
    name: "Web3 & Blockchain",
    icon: "⬡",
    tools: ["Solana", "EVM", "On-chain analytics", "Stablecoins", "DeFi"],
    accent: "text-blue-400",
  },
  {
    name: "B2B & Events",
    icon: "◱",
    tools: ["Lead gen", "ICP definition", "AI outreach", "SDR workflows"],
    accent: "text-neutral-300",
  },
];

export function Stack() {
  return (
    <section className="relative px-8 md:px-20 py-24 border-t border-neutral-900/80">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-neutral-700 mb-1 tracking-widest uppercase">
            — the tools
          </p>
          <h2 className="font-mono text-2xl gradient-text">Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="glow-card p-5 rounded-sm group hover:border-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`font-mono text-base ${cat.accent} opacity-60`}>{cat.icon}</span>
                <span className="font-mono text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">
                  {cat.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[10px] text-neutral-700 border border-neutral-800 px-2 py-0.5 rounded-sm group-hover:text-neutral-600 group-hover:border-neutral-700 transition-colors duration-150"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
