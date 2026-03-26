"use client";

import { motion } from "framer-motion";
import { skills } from "../data";
import { skillIconMap } from "../lib/skill-icons";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white px-4 sm:px-6">
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
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-8">
          {skills.map((skill, i) => {
            const icon = skillIconMap[skill.name];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex flex-col items-center gap-3 w-[88px] hover:-translate-y-1 transition-transform"
              >
                {icon ? (
                  <svg
                    width={60}
                    height={60}
                    viewBox={icon.viewBox ?? "0 0 24 24"}
                    fill={`#${icon.hex}`}
                    aria-hidden
                  >
                    <path d={icon.path} />
                  </svg>
                ) : (
                  <span className="w-[60px] h-[60px] rounded-xl flex items-center justify-center bg-border text-text-secondary text-sm font-bold">
                    {skill.name.slice(0, 2)}
                  </span>
                )}
                <span className="text-sm font-medium text-text text-center leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
