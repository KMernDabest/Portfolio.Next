"use client";

import { motion } from "framer-motion";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center">
            Experience
          </h2>
          <div className="mt-2 mx-auto w-16 h-1 bg-accent rounded-full" />
        </motion.div>

        <div className="mt-12 space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-6 border-l-2 border-border"
            >
              <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-white" />
              <div className="bg-surface rounded-xl border border-border p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h4 className="text-base font-bold text-primary">{exp.role}</h4>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full w-fit">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm text-text-secondary mt-1">
                  {exp.company}
                  {exp.location && ` · ${exp.location}`}
                </p>
                <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                  {exp.description}
                </p>
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
