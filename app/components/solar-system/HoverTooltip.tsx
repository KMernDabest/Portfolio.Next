"use client";

import { motion } from "framer-motion";

interface HoverTooltipProps {
  name: string;
}

/**
 * Floating tooltip that appears on planet hover
 * Shows the technology name with a glassmorphism style
 */
export default function HoverTooltip({ name }: HoverTooltipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute z-40 pointer-events-none"
      style={{ top: "62%" }}
    >
      <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white shadow-lg">
        {name}
      </span>
    </motion.div>
  );
}
