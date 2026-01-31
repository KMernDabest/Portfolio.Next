"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

/**
 * Generates star data deterministically using a seeded approach
 * This ensures consistent star positions across renders
 */
function generateStars(count: number): Star[] {
  return Array.from({ length: count }).map((_, i) => {
    // Use deterministic values based on index for consistent rendering
    const seed1 = ((i * 1234567) % 100);
    const seed2 = ((i * 7654321) % 100);
    const seed3 = (((i + 1) * 2468) % 100) / 100;
    const seed4 = (((i + 1) * 8642) % 100) / 100;
    const seed5 = (((i + 1) * 1357) % 100) / 100;
    const seed6 = (((i + 1) * 9753) % 100) / 100;

    return {
      id: i,
      x: seed1,
      y: seed2,
      size: seed3 * 2 + 0.5,
      opacity: seed4 * 0.6 + 0.2,
      duration: seed5 * 4 + 2,
      delay: seed6 * 3,
    };
  });
}

/**
 * Animated star background component
 * Creates a field of twinkling stars for the space atmosphere
 * Stars are generated once on mount to prevent hydration issues
 */
export default function StarBackground({ starCount = 150 }: { starCount?: number }) {
  // Generate stars only once using lazy initialization
  const [stars] = useState<Star[]>(() => generateStars(starCount));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          initial={{ opacity: star.opacity * 0.3 }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
