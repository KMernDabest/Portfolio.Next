"use client";

import { motion } from "framer-motion";
import type { PlanetData } from "./types";

interface InfoPanelProps {
  planet: PlanetData;
  onClose: () => void;
}

// Tool-specific descriptions
const toolDescriptions: Record<string, string> = {
  react: "A JavaScript library for building user interfaces with a component-based architecture. Perfect for creating interactive, dynamic web applications with reusable UI components.",
  postgresql: "A powerful open-source relational database system known for reliability, data integrity, and extensibility. Ideal for complex queries and large-scale applications.",
  typescript: "A strongly typed superset of JavaScript that adds static type definitions. Helps catch errors early and improves code maintainability in large codebases.",
  figma: "A collaborative interface design tool used for UI/UX design, prototyping, and design systems. Enables seamless collaboration between designers and developers.",
  git: "A distributed version control system for tracking changes in source code. Essential for collaboration, branching strategies, and maintaining code history.",
  javascript: "The core programming language of the web. Used for creating dynamic, interactive experiences on both client and server side with Node.js.",
  flutter: "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase using Dart.",
  mongodb: "A document-oriented NoSQL database designed for scalability and flexibility. Great for handling unstructured data and rapid development cycles.",
};

/**
 * Information panel that appears when a planet is selected
 * Displays technology details with a glassmorphism design
 */
export default function InfoPanel({ planet, onClose }: InfoPanelProps) {
  const { name, description, color, icon, id } = planet;
  
  const toolInfo = toolDescriptions[id] || `A powerful tool in modern development workflows.`;

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
          {toolInfo}
        </p>

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
          Close
        </button>
      </div>
    </motion.div>
  );
}
