"use client";

import { motion } from "framer-motion";

export function Particles() {
  const points = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {points.map((point) => (
        <motion.span
          key={point}
          className="absolute h-2 w-2 rounded-full bg-champagne/45"
          initial={{
            x: `${(point * 7) % 95}%`,
            y: `${(point * 11) % 100}%`,
            opacity: 0.15
          }}
          animate={{
            y: [null, `${((point * 13 + 20) % 100).toString()}%`],
            opacity: [0.15, 0.45, 0.15],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 7 + point * 0.45, repeat: Infinity, repeatType: "mirror" }}
        />
      ))}
    </div>
  );
}
