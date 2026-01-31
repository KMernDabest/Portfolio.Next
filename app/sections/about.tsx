"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  { id: 1, src: "/about/coding.jpg", alt: "Coding session" },
  { id: 2, src: "/about/conference.jpg", alt: "Tech conference" },
  { id: 3, src: "/about/team.jpg", alt: "Team collaboration" },
  { id: 4, src: "/about/workspace.jpg", alt: "Modern workspace" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />

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
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
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

          {/* Right Column - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Draggable Gallery */}
            <div
              ref={galleryRef}
              className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex-shrink-0 w-64 h-80 snap-center"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-800">
                    {/* Placeholder gradient for demo */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, 
                          hsl(${180 + index * 30}, 70%, 20%) 0%, 
                          hsl(${200 + index * 30}, 70%, 10%) 100%)`,
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl">
                        {["💻", "🎤", "👥", "🏢"][index]}
                      </span>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-sm text-slate-300">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll hint */}
            <div className="flex justify-center mt-4 gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-white/20"
                />
              ))}
            </div>
            <p className="text-center text-xs text-slate-500 mt-2">
              ← Swipe to explore →
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
