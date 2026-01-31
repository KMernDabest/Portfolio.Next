"use client";

import { useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
  animationDuration: number;
}

/**
 * Deterministic star generator using index-based pseudo-random values
 * This avoids React 19's strict mode issues with Math.random() during render
 */
function generateStars(count: number): Star[] {
  return Array.from({ length: count }).map((_, i) => {
    // Use deterministic calculations based on index
    const seed1 = ((i * 1234567) % 100);
    const seed2 = ((i * 7654321) % 100);
    const seed3 = ((i * 2468135) % 100);
    const seed4 = ((i * 9753186) % 100);
    const seed5 = ((i * 3692581) % 100);
    const seed6 = ((i * 1593572) % 100);
    
    return {
      id: i,
      x: seed1,
      y: seed2,
      size: 1 + (seed3 % 2),
      opacity: 0.3 + (seed4 / 100) * 0.7,
      animationDelay: (seed5 / 100) * 5,
      animationDuration: 2 + (seed6 / 100) * 3,
    };
  });
}

export default function GlobalStarBackground() {
  const [stars] = useState<Star[]>(() => generateStars(150));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
}
