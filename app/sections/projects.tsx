"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../data";
import type { Project } from "../types";
import { GitHubIcon } from "../lib/icons";
import { skillIconMap } from "../lib/skill-icons";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-xl border border-border shadow-sm overflow-hidden flex flex-col sm:flex-row sm:min-h-[220px]"
    >
      {/* Image — left side */}
      <div className="sm:w-[42%] sm:shrink-0 h-52 sm:h-auto bg-surface border-b sm:border-b-0 sm:border-r border-border relative overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="420px"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-text-secondary/40">
            <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 20.25h18A2.25 2.25 0 0023.25 18V6a2.25 2.25 0 00-2.25-2.25H3A2.25 2.25 0 00.75 6v12A2.25 2.25 0 003 20.25z" />
            </svg>
            <span className="text-xs font-medium">Project Image</span>
          </div>
        )}
      </div>

      {/* Content — right side */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-primary leading-snug">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => {
            const icon = skillIconMap[tech];
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 bg-surface text-text-secondary rounded-md border border-border"
              >
                {icon && (
                  "src" in icon ? (
                    <img src={icon.src} width={13} height={13} className="shrink-0" alt="" aria-hidden />
                  ) : (
                    <svg
                      width={13}
                      height={13}
                      viewBox={icon.viewBox ?? "0 0 24 24"}
                      fill={`#${icon.hex}`}
                      className="shrink-0"
                      aria-hidden
                    >
                      <path d={icon.path} />
                    </svg>
                  )
                )}
                {tech}
              </span>
            );
          })}
        </div>

        {project.github && (
          <div className="mt-5 pt-4 border-t border-border flex justify-end">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <GitHubIcon size={16} />
              See Project
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center">
            Projects
          </h2>
          <div className="mt-2 mx-auto w-16 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="mt-12 space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
