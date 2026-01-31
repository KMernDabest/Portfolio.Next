"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "@/app/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const workExperiences = experiences.filter((exp) => exp.type === "work");
  const educationExperiences = experiences.filter((exp) => exp.type === "education");

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 md:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm uppercase tracking-wider font-medium">
            My Journey
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Experience & Education
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 text-xl font-semibold text-white mb-8"
            >
              <span className="p-2 bg-cyan-500/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              Work Experience
            </motion.h3>

            <div className="space-y-6">
              {workExperiences.map((exp, index) => (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  index={index}
                  isInView={isInView}
                  color="cyan"
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 text-xl font-semibold text-white mb-8"
            >
              <span className="p-2 bg-purple-500/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </span>
              Education
            </motion.h3>

            <div className="space-y-6">
              {educationExperiences.map((exp, index) => (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  index={index}
                  isInView={isInView}
                  color="purple"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
  index,
  isInView,
  color,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isInView: boolean;
  color: "cyan" | "purple";
}) {
  const colorClasses = {
    cyan: {
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/5",
      text: "text-cyan-400",
      badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    purple: {
      border: "border-purple-500/30",
      bg: "bg-purple-500/5",
      text: "text-purple-400",
      badge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
  };

  const classes = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className={`relative p-6 rounded-2xl border ${classes.border} ${classes.bg} backdrop-blur-sm hover:border-opacity-60 transition-colors group`}
    >
      {/* Timeline dot */}
      <div
        className={`absolute -left-3 top-8 w-6 h-6 rounded-full ${classes.bg} border-2 ${classes.border} hidden lg:flex items-center justify-center`}
      >
        <div className={`w-2 h-2 rounded-full ${classes.text.replace("text", "bg")}`} />
      </div>

      {/* Duration badge */}
      <div
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${classes.badge} mb-4`}
      >
        {experience.startDate === experience.endDate
          ? experience.endDate
          : `${experience.startDate.split("-")[0]} - ${
              experience.endDate === "Present" ? "Present" : experience.endDate.split("-")[0]
            }`}
      </div>

      {/* Role */}
      <h4 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
        {experience.role}
      </h4>

      {/* Company & Location */}
      <p className="mt-1 text-sm text-slate-400">
        {experience.company}
        {experience.location && ` • ${experience.location}`}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm text-slate-400 leading-relaxed">
        {experience.description}
      </p>

      {/* Highlights */}
      {experience.highlights && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.highlights.slice(0, 3).map((highlight) => (
            <span
              key={highlight}
              className="px-2 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/10"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
