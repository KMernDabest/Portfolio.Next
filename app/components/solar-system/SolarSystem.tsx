"use client";

import { useState, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import Orbit from "./Orbit";
import Planet from "./Planet";
import CenterCore from "./CenterCore";
import InfoPanel from "./InfoPanel";
import HoverTooltip from "./HoverTooltip";

// Data & Types
import { TECH_PLANETS } from "./data";
import type { PlanetData } from "./types";

/**
 * SolarSystem Component
 * 
 * An interactive solar system visualization showcasing a technology stack.
 * Features:
 * - Animated orbiting planets representing different technologies
 * - Play/pause control via central core
 * - Click-to-focus on individual planets
 * - Hover tooltips with technology names
 * - Detailed info panel on planet selection
 * - Responsive scaling for all screen sizes
 * 
 * @example
 * <SolarSystem />
 */
export default function SolarSystem() {
  // State management
  const [isPaused, setIsPaused] = useState(false);
  const [activePlanet, setActivePlanet] = useState<PlanetData | null>(null);
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null);

  // Memoized unique orbit radii for rendering orbit rings
  const orbitRadii = useMemo(() => {
    return [...new Set(TECH_PLANETS.map((p) => p.orbitRadius))].sort((a, b) => a - b);
  }, []);

  // Handlers with useCallback for performance
  const handlePlanetClick = useCallback((planet: PlanetData) => {
    if (activePlanet?.id === planet.id) {
      // Clicking same planet deselects it
      setActivePlanet(null);
      setIsPaused(false);
    } else {
      setActivePlanet(planet);
      setIsPaused(true);
    }
  }, [activePlanet]);

  const handleCenterClick = useCallback(() => {
    setIsPaused((prev) => !prev);
    setActivePlanet(null);
  }, []);

  const handleClosePanel = useCallback(() => {
    setActivePlanet(null);
    setIsPaused(false);
  }, []);

  const handleHover = useCallback((name: string | null) => {
    setHoveredPlanet(name);
  }, []);

  return (
    <div
      className="relative w-full h-full overflow-visible"
    >
      {/* Solar System Container - centered */}
      <div 
        className="absolute inset-0"
      >
        {/* Scaling wrapper positioned at center */}
        <div 
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "scale(var(--solar-scale, 0.35))",
          }}
        >
          <style jsx>{`
            @media (min-width: 640px) {
              div { --solar-scale: 0.4; }
            }
            @media (min-width: 768px) {
              div { --solar-scale: 0.5; }
            }
            @media (min-width: 1024px) {
              div { --solar-scale: 0.55; }
            }
            @media (min-width: 1280px) {
              div { --solar-scale: 0.6; }
            }
          `}</style>

          {/* Orbit Rings */}
          {orbitRadii.map((radius, index) => (
            <Orbit 
              key={radius} 
              radius={radius} 
              opacity={0.08 + index * 0.01}
            />
          ))}

          {/* Planets */}
          {TECH_PLANETS.map((planet) => (
            <Planet
              key={planet.id}
              planet={planet}
              isActive={activePlanet?.id === planet.id}
              isSystemPaused={isPaused}
              onHover={handleHover}
              onClick={handlePlanetClick}
            />
          ))}

          {/* Center Core Control */}
          <CenterCore isPaused={isPaused} onToggle={handleCenterClick} />

          {/* Hover Tooltip */}
          <AnimatePresence>
            {hoveredPlanet && !activePlanet && (
              <HoverTooltip name={hoveredPlanet} />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Info Panel (Outside scaling wrapper for consistent size) */}
      <AnimatePresence>
        {activePlanet && (
          <InfoPanel planet={activePlanet} onClose={handleClosePanel} />
        )}
      </AnimatePresence>
    </div>
  );
}
