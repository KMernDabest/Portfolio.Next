"use client";

import { motion } from "framer-motion";
import { skills } from "../data";
import { skillIconMap } from "../lib/skill-icons";

const categoryLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools & Others",
};

const categoryOrder = ["frontend", "backend", "database", "tools"] as const;

function SkillIcon({ name }: { name: string }) {
  const icon = skillIconMap[name];
  if (!icon) return null;

  return (
    <svg
      width={20}
      height={20}
      viewBox={icon.viewBox ?? "0 0 24 24"}
      fill={`#${icon.hex}`}
      className="shrink-0"
      aria-hidden
    >
      <path d={icon.path} />
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center">
            Skills
          </h2>
          <div className="mt-2 mx-auto w-16 h-1 bg-accent rounded-full" />

          <div className="mt-12 space-y-10">
            {categoryOrder.map((cat) => {
              const catSkills = skills.filter((s) => s.category === cat);
              return (
                <div key={cat}>
                  <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
                    {categoryLabels[cat]}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {catSkills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-center gap-2.5 px-4 py-2.5 bg-surface border border-border rounded-lg hover:shadow-md hover:border-accent/30 transition-all"
                      >
                        <SkillIcon name={skill.name} />
                        <span className="text-sm font-medium text-text">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
