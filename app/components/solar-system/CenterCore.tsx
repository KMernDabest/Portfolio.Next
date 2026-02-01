"use client";

import { motion } from "framer-motion";
import { PlayIcon, PauseIcon } from "./icons/TechIcons";

interface CenterCoreProps {
  isPaused: boolean;
  onToggle: () => void;
}

/**
 * Central core/sun component
 * Acts as the play/pause control for the entire solar system
 * Features a pulsing glow effect and half-circle icon design
 */
export default function CenterCore({ isPaused, onToggle }: CenterCoreProps) {
  return (
    <div 
      className="absolute z-30 flex items-center justify-center"
      style={{
        width: 80,
        height: 80,
        marginLeft: -40,
        marginTop: -40,
      }}
    >
      {/* Outer glow rings */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-slate-500/20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-slate-400/30"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      {/* Main core button */}
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-20 h-20 rounded-full cursor-pointer overflow-hidden group"
        style={{
          background: "#e8e8e8",
          boxShadow: `
            0 0 40px rgba(255, 255, 255, 0.3),
            0 0 80px rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {/* Half-circle design overlay */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "#1a1a2e",
            clipPath: "inset(0 50% 0 0)",
          }}
        />
        
        {/* Icon container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 text-white/90 drop-shadow-lg"
            initial={false}
            animate={{ rotate: isPaused ? 0 : 360 }}
            transition={{ duration: 0.3 }}
          >
            {isPaused ? (
              <PlayIcon className="w-full h-full ml-1" />
            ) : (
              <PauseIcon className="w-full h-full" />
            )}
          </motion.div>
        </div>

        {/* Subtle hover glow */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        />
      </motion.button>
    </div>
  );
}
