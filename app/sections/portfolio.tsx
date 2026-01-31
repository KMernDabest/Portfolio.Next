"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/app/data/projects";
import type { Project } from "@/app/types";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative py-24 md:py-32"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-wider font-medium">
            My Work
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing my skills in
            full-stack development, system design, and modern technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isInView,
  onClick,
}: {
  project: Project;
  index: number;
  isInView: boolean;
  onClick: () => void;
}) {
  // Generate gradient based on index
  const gradients = [
    "from-cyan-600/20 to-blue-600/20",
    "from-purple-600/20 to-pink-600/20",
    "from-green-600/20 to-emerald-600/20",
    "from-orange-600/20 to-red-600/20",
    "from-indigo-600/20 to-violet-600/20",
    "from-teal-600/20 to-cyan-600/20",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-medium text-white">
            Featured
          </div>
        )}

        {/* Image placeholder */}
        <div
          className={`h-40 rounded-xl mb-6 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center overflow-hidden`}
        >
          <span className="text-5xl opacity-50">
            {["🛒", "🤖", "📋", "📊", "💪", "⚙️"][index % 6]}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-slate-400 line-clamp-2">
          {project.summary}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-slate-400 border border-white/10">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* View Project Link */}
        <div className="mt-6 flex items-center text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors">
          <span>View Details</span>
          <svg
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl border border-white/10 shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header image */}
        <div className="h-48 bg-gradient-to-br from-cyan-600/30 to-purple-600/30 flex items-center justify-center">
          <span className="text-7xl opacity-50">
            {project.title.includes("Commerce")
              ? "🛒"
              : project.title.includes("AI")
              ? "🤖"
              : project.title.includes("Task")
              ? "📋"
              : project.title.includes("Crypto")
              ? "📊"
              : project.title.includes("Fitness")
              ? "💪"
              : "⚙️"}
          </span>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="mt-3 text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div className="mt-6">
            <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-3">
              Key Features
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <svg
                    className="w-4 h-4 text-cyan-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-3">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm rounded-full bg-white/5 text-slate-300 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap gap-4">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </motion.a>
            )}
            {project.liveDemo && (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
