"use client";

import { motion } from "framer-motion";
import type { PlanetData } from "./types";

interface InfoPanelProps {
  planet: PlanetData;
  onClose: () => void;
}

/**
 * Information panel that appears when a planet is selected
 * Displays technology details with a glassmorphism design
 */
export default function InfoPanel({ planet, onClose }: InfoPanelProps) {
  const { name, description, color, icon } = planet;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.9 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm mx-4"
    >
      <div
        className="relative p-6 rounded-2xl border backdrop-blur-xl"
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.85)",
          borderColor: `${color}40`,
          boxShadow: `0 0 40px ${color}20, 0 25px 50px -12px rgba(0, 0, 0, 0.5)`,
        }}
      >
        {/* Header with icon and title */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className="p-3 rounded-xl flex items-center justify-center"
            style={{ 
              backgroundColor: `${color}20`,
              boxShadow: `0 0 15px ${color}30`,
            }}
          >
            <div 
              className="w-7 h-7"
              style={{ color }}
            >
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p 
              className="text-xs uppercase tracking-wider font-medium"
              style={{ color: `${color}cc` }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Description text */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          An integral part of my development ecosystem. I leverage{" "}
          <span className="font-semibold" style={{ color }}>
            {name}
          </span>{" "}
          to build scalable, high-performance applications with modern best practices.
        </p>

        {/* Skill indicators */}
        <div className="flex gap-2 mb-4">
          {["Proficient", "Production", "3+ Years"].map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full border"
              style={{
                borderColor: `${color}40`,
                color: `${color}cc`,
                backgroundColor: `${color}10`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:brightness-110"
          style={{
            backgroundColor: `${color}20`,
            color: color,
            border: `1px solid ${color}30`,
          }}
        >
          Close Interaction
        </button>

        {/* Decorative corner accent */}
        <div
          className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl opacity-20"
          style={{
            background: `radial-gradient(circle at top right, ${color}, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
}
