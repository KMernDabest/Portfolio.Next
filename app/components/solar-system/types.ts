import { ReactNode } from "react";

/**
 * Planet data structure for the solar system visualization
 */
export interface PlanetData {
  id: string;
  name: string;
  description: string;
  color: string; // Hex color for planet glow and icon
  icon: ReactNode;
  orbitRadius: number; // Radius of the orbit ring in pixels
  speed: number; // Duration of one full rotation in seconds
  direction: "clockwise" | "counter-clockwise";
  size: number; // Diameter of the planet in pixels
  initialAngle?: number; // Starting position on orbit (0-360 degrees)
}

/**
 * Props for individual planet component
 */
export interface PlanetProps {
  planet: PlanetData;
  isActive: boolean;
  isSystemPaused: boolean;
  onHover: (name: string | null) => void;
  onClick: (planet: PlanetData) => void;
}

/**
 * Props for orbit ring component
 */
export interface OrbitProps {
  radius: number;
  opacity?: number;
}
