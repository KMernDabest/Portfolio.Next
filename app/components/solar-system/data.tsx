import type { PlanetData } from "./types";
import {
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  NodeJsIcon,
  FlutterIcon,
  PostgreSQLIcon,
  DockerIcon,
  GitIcon,
  TailwindIcon,
} from "./icons/TechIcons";

/**
 * Technology stack data configuration
 * Each planet represents a technology with unique orbit parameters
 * 4 orbit layers with one planet each, all orbiting counter-clockwise
 */
export const TECH_PLANETS: PlanetData[] = [
  // Orbit 1 - Innermost (radius: 120)
  {
    id: "react",
    name: "React",
    description: "UI Library",
    color: "#61DAFB",
    icon: <ReactIcon className="w-full h-full" />,
    orbitRadius: 120,
    speed: 20,
    direction: "counter-clockwise",
    size: 64,
    initialAngle: 0,
  },
  // Orbit 2 (radius: 220)
  {
    id: "typescript",
    name: "TypeScript",
    description: "Typed JavaScript",
    color: "#3178C6",
    icon: <TypeScriptIcon className="w-full h-full" />,
    orbitRadius: 220,
    speed: 30,
    direction: "counter-clockwise",
    size: 64,
    initialAngle: 90,
  },
  // Orbit 3 (radius: 320)
  {
    id: "git",
    name: "Git",
    description: "Version Control",
    color: "#F05032",
    icon: <GitIcon className="w-full h-full" />,
    orbitRadius: 320,
    speed: 45,
    direction: "counter-clockwise",
    size: 64,
    initialAngle: 180,
  },
  // Orbit 4 - Outermost (radius: 420)
  {
    id: "flutter",
    name: "Flutter",
    description: "Cross-platform UI",
    color: "#02569B",
    icon: <FlutterIcon className="w-full h-full" />,
    orbitRadius: 420,
    speed: 60,
    direction: "counter-clockwise",
    size: 64,
    initialAngle: 270,
  },
];
