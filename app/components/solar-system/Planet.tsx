"use client";

import type { PlanetProps } from "./types";

/**
 * Individual Planet component
 * Orbits around the center and displays a tech icon
 * Uses CSS animations for smooth infinite rotation without glitches
 */
export default function Planet({
  planet,
  isActive,
  isSystemPaused,
  onHover,
  onClick,
}: PlanetProps) {
  const { orbitRadius, speed, direction, size, color, icon, name, initialAngle = 0 } = planet;
  
  const shouldPause = isSystemPaused || isActive;
  const animationDirection = direction === "clockwise" ? "normal" : "reverse";

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: orbitRadius * 2,
        height: orbitRadius * 2,
        marginLeft: -orbitRadius,
        marginTop: -orbitRadius,
      }}
    >
      {/* Rotating wrapper - uses CSS animation for smooth infinite rotation */}
      <div
        className="relative w-full h-full"
        style={{
          animation: `spin ${speed}s linear infinite ${animationDirection}`,
          animationPlayState: shouldPause ? "paused" : "running",
          transform: `rotate(${initialAngle}deg)`,
        }}
      >
        {/* Planet positioned at top of orbit ring */}
        <button
          onClick={() => onClick(planet)}
          onMouseEnter={() => onHover(name)}
          onMouseLeave={() => onHover(null)}
          className={`
            absolute pointer-events-auto cursor-pointer
            rounded-full flex items-center justify-center
            transition-all duration-300 ease-out
            ${isActive 
              ? "z-50 ring-4 ring-white/30 scale-125" 
              : "z-10 hover:scale-110"
            }
          `}
          style={{
            width: size,
            height: size,
            top: -size / 2,
            left: "50%",
            marginLeft: -size / 2,
            backgroundColor: `${color}30`,
            border: `2px solid ${color}`,
            boxShadow: `0 0 20px ${color}50`,
          }}
        >
          {/* Counter-rotate icon to keep it upright */}
          <div
            className="flex items-center justify-center"
            style={{
              animation: `spin ${speed}s linear infinite ${direction === "clockwise" ? "reverse" : "normal"}`,
              animationPlayState: shouldPause ? "paused" : "running",
              color: color,
              width: size * 0.5,
              height: size * 0.5,
            }}
          >
            {icon}
          </div>
        </button>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
