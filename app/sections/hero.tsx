"use client";

import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, ArrowDownIcon } from "../lib/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl text-center"
      >
        <motion.p variants={item} className="text-accent font-medium mb-4 text-sm tracking-wide uppercase">
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary leading-tight"
        >
          Rith Seyhak
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-lg sm:text-xl text-text-secondary max-w-xl mx-auto"
        >
          An aspiring software engineer based in Phnom Penh, Cambodia.
          I build clean, modern web applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://github.com/KMernDabest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <GitHubIcon size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/seyhak-rith-wk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
          >
            <LinkedInIcon size={20} />
            LinkedIn
          </a>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="mt-16"
        >
          <a href="#about" aria-label="Scroll to about section" className="inline-flex justify-center animate-bounce text-text-secondary hover:text-accent transition-colors">
            <ArrowDownIcon size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
