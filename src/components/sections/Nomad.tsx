"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CITIES = [
  "Dublin", "Split", "Rome", "London",
  "Madrid", "Miami", "Paris", "Rio", "Bangkok",
];

// Main grid: 2-col asymmetric (left tall, right 2 stacked)
const GRID_PHOTOS = [
  { src: "/photos/travel-london-tower-bridge-full.jpeg", alt: "London Tower Bridge", span: "tall" },
  { src: "/photos/event-eth-latam.jpeg", alt: "ETH LATAM", span: "short" },
  { src: "/photos/travel-ireland-mountains.jpeg", alt: "Ireland mountains", span: "short" },
];

// Strip: smaller horizontal photos
const STRIP_PHOTOS = [
  { src: "/photos/travel-dublin-red-arch-night.jpeg", alt: "Dublin" },
  { src: "/photos/travel-croatia-promenade-night.jpeg", alt: "Croatia" },
  { src: "/photos/travel-rome-colosseum.jpeg", alt: "Rome" },
  { src: "/photos/travel-madrid-street-night.jpeg", alt: "Madrid" },
  { src: "/photos/travel-miami-beach-vintage-car.jpeg", alt: "Miami" },
  { src: "/photos/travel-paris-eiffel-leather.jpeg", alt: "Paris" },
  { src: "/photos/travel-rio-museu-amanha-silhouette.jpeg", alt: "Rio" },
  { src: "/photos/travel-miami-wynwood-lights.jpeg", alt: "Wynwood" },
];

const STATS = [
  { value: "9+", label: "Countries" },
  { value: "4", label: "Continents" },
  { value: "2+", label: "Years nomadic" },
];

export function Nomad() {
  return (
    <section className="relative border-t border-neutral-900/80 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />

      {/* ── TOP: Text left + Photo grid right ── */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0 px-8 md:px-20 pt-20 pb-12 items-start">

        {/* Left: text + stats + city pills */}
        <motion.div
          className="flex flex-col gap-8 lg:pr-16 lg:pt-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="font-mono text-xs text-neutral-700 tracking-widest uppercase mb-2">
              — the lifestyle
            </p>
            <h2
              className="font-mono gradient-text font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Remote.
              <br />
              Nomad.
            </h2>
            <p className="font-mono text-sm text-neutral-500 leading-relaxed max-w-sm">
              Digital nomad based in SE Asia. Previously
              Dublin, Italy, Croatia, and the UK. I build
              from wherever the signal is strong.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              >
                <div className="font-mono text-2xl font-bold gradient-text">{s.value}</div>
                <div className="font-mono text-xs text-neutral-600 mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* City pills */}
          <div className="flex flex-wrap gap-2">
            {CITIES.map((city, i) => (
              <motion.span
                key={city}
                className="glow-card font-mono text-xs text-neutral-600 px-3 py-1.5 rounded-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
              >
                {city}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right: asymmetric photo grid (OpenZeppelin-inspired) */}
        <motion.div
          className="hidden lg:grid gap-3"
          style={{ gridTemplateColumns: "1.1fr 0.9fr", gridTemplateRows: "auto" }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Left column: 1 tall photo */}
          <div className="relative overflow-hidden rounded-sm group" style={{ height: "420px" }}>
            <Image
              src={GRID_PHOTOS[0].src}
              alt={GRID_PHOTOS[0].alt}
              fill
              sizes="30vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Right column: 2 stacked */}
          <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-sm group" style={{ height: "200px" }}>
              <Image
                src={GRID_PHOTOS[1].src}
                alt={GRID_PHOTOS[1].alt}
                fill
                sizes="25vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="relative overflow-hidden rounded-sm group flex-1" style={{ height: "210px" }}>
              <Image
                src={GRID_PHOTOS[2].src}
                alt={GRID_PHOTOS[2].alt}
                fill
                sizes="25vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── BOTTOM: Full-width horizontal photo strip ── */}
      <motion.div
        className="relative z-10 flex gap-2 overflow-x-auto scrollbar-none pb-0"
        style={{ scrollbarWidth: "none" }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {STRIP_PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.src}
            className="relative shrink-0 overflow-hidden group"
            style={{ width: "clamp(160px, 18vw, 240px)", height: "clamp(110px, 13vw, 170px)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="240px"
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-2 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-mono text-[10px] text-white">{photo.alt}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
