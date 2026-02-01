"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const images = [
  { id: 1, src: "/about/coding.jpg", alt: "Coding session" },
  { id: 2, src: "/about/conference.jpg", alt: "Tech conference" },
  { id: 3, src: "/about/team.jpg", alt: "Team collaboration" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(1); // Middle card is active by default

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-900/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-wider font-medium">
            About Me
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Get to Know Me
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              Hello! I&apos;m <span className="text-white font-semibold">Rith Seyhak</span>, 
              a passionate Software Engineer with a deep love for creating elegant 
              solutions to complex problems. With over 5 years of experience in 
              full-stack development, I&apos;ve had the privilege of working on diverse 
              projects ranging from startups to enterprise applications.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              My journey in tech began with curiosity about how things work, which 
              evolved into a career dedicated to building software that makes a 
              difference. I specialize in <span className="text-cyan-400">React</span>, 
              <span className="text-cyan-400"> Next.js</span>, 
              <span className="text-cyan-400"> Node.js</span>, and cloud technologies, 
              always staying current with the latest advancements in the field.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
              contributing to open-source projects, or mentoring aspiring developers. 
              I believe in continuous learning and sharing knowledge with the community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Completed" },
                { value: "30+", label: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-4"
            >
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Stacked Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-start justify-center pt-4"
          >
            {/* Stacked Cards Container */}
            <div className="relative w-80 h-96 md:w-96 md:h-[420px]">
              {images.map((image, index) => {
                // Calculate position based on index relative to active
                const position = index - activeIndex;
                
                // Card configurations for stacked effect - increased x offset for more spread
                const configs = [
                  { rotate: -18, x: -100, scale: 0.85, zIndex: 1 }, // Left card
                  { rotate: 0, x: 0, scale: 1, zIndex: 3 },         // Center card (active)
                  { rotate: 18, x: 100, scale: 0.85, zIndex: 1 },   // Right card
                ];
                
                // Get config based on position
                let config;
                if (position === -1 || (activeIndex === 0 && index === images.length - 1)) {
                  config = configs[0]; // Left
                } else if (position === 0) {
                  config = configs[1]; // Center
                } else if (position === 1 || (activeIndex === images.length - 1 && index === 0)) {
                  config = configs[2]; // Right
                } else {
                  config = { rotate: 0, x: 0, scale: 0.8, zIndex: 0 }; // Hidden
                }

                return (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      scale: config.scale,
                      rotate: config.rotate,
                      x: config.x,
                      zIndex: config.zIndex,
                    } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}
                    onClick={() => setActiveIndex(index)}
                    className="absolute inset-0 cursor-pointer"
                    style={{ zIndex: config.zIndex }}
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 bg-slate-800 shadow-2xl">
                      {/* Placeholder image with color */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundColor: `hsl(${200 + index * 40}, 60%, 25%)`,
                        }}
                      />
                      {/* Placeholder for actual image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">
                          {["💻", "🎤", "👥"][index]}
                        </span>
                      </div>
                      {/* Subtle overlay for depth */}
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation dots */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "bg-cyan-400 w-6" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
