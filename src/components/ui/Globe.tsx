"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useCallback } from "react";

const MARKERS = [
  { location: [-16.5, -64.5] as [number, number], size: 0.08 },   // Bolivia
  { location: [-15.78, -47.93] as [number, number], size: 0.07 },  // Brasília
  { location: [-23.55, -46.63] as [number, number], size: 0.06 },  // São Paulo
  { location: [-34.6, -58.37] as [number, number], size: 0.05 },   // Buenos Aires
  { location: [1.35, 103.82] as [number, number], size: 0.05 },    // Singapore
  { location: [53.32, -6.23] as [number, number], size: 0.04 },    // Dublin
  { location: [25.2, 55.27] as [number, number], size: 0.05 },     // Dubai
  { location: [-12.04, -77.03] as [number, number], size: 0.04 },  // Lima
  { location: [4.71, -74.07] as [number, number], size: 0.04 },    // Bogotá
];

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const phiRef = useRef(4.8);
  const rotationOffsetRef = useRef(0);
  const widthRef = useRef(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = useCallback((clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      rotationOffsetRef.current = delta / 180;
    }
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      phi: 4.8,
      theta: 0.2,
      dark: 1,
      diffuse: 1.4,
      mapSamples: 20000,
      mapBrightness: 5,
      baseColor: [0.1, 0.1, 0.12],
      markerColor: [0.3, 0.6, 1],
      glowColor: [0.08, 0.15, 0.4],
      markers: MARKERS,
    });

    let animFrame: number;

    const animate = () => {
      if (!pointerInteracting.current) {
        phiRef.current += 0.0025;
      }
      globe.update({
        phi: phiRef.current + rotationOffsetRef.current,
        width: widthRef.current * 2,
        height: widthRef.current * 2,
      });
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);

    return () => {
      globe.destroy();
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={className} style={{ position: "relative", aspectRatio: "1/1" }}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, transparent 40%, rgba(37,99,235,0.06) 70%, transparent 100%)",
        }}
      />
      <canvas
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(e.clientX - rotationOffsetRef.current * 180)
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0.9,
        }}
      />
    </div>
  );
}
