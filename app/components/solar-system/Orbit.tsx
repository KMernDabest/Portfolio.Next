"use client";

import { motion } from "framer-motion";
import type { OrbitProps } from "./types";

/**
 * Orbit ring component - displays a circular orbit path
 * Uses GPU-friendly transforms for smooth rendering
 */
export default function Orbit({ radius, opacity = 0.15 }: OrbitProps) {
  return (
    <motion.div
      className="absolute rounded-full border pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        marginLeft: -radius,
        marginTop: -radius,
        borderColor: `rgba(255, 255, 255, ${opacity})`,
        borderWidth: "1px",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
}
