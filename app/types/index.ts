/**
 * Portfolio Types
 * Centralized type definitions for the portfolio
 */

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  techStack: string[];
  image?: string;
  github?: string;
  liveDemo?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  type: "work" | "education";
  role: string;
  company: string;
  location?: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights?: string[];
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}
