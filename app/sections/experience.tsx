"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { experiences } from "../data";
import { Experience } from "../types";

const sectionLabels: Record<string, string> = {
  education: "Education",
  volunteer: "Volunteer",
  work: "Work",
};

const groupOrder = ["education", "work", "volunteer"];

function groupExperiences(exps: Experience[]) {
  const groups: Record<string, Experience[]> = {};
  for (const exp of exps) {
    if (!groups[exp.type]) groups[exp.type] = [];
    groups[exp.type].push(exp);
  }
  return groupOrder.filter((g) => groups[g]).map((g) => ({ type: g, items: groups[g] }));
}

export default function Experience() {
  const groups = groupExperiences(experiences);
  const [activeCert, setActiveCert] = useState<string | null>(null);

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

        <div className="mt-12 space-y-10">
          {groups.map(({ type, items }) => (
            <div key={type}>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-sm font-semibold uppercase tracking-widest text-accent mb-4"
              >
                {sectionLabels[type] ?? type}
              </motion.h3>
              <div className="space-y-6">
                {items.map((exp, i) => (
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
                        <h4 className="text-base font-bold text-primary flex items-center gap-2">
                          {exp.logo && (
                            <Image
                              src={exp.logo}
                              alt=""
                              width={20}
                              height={20}
                              className="object-contain rounded-sm"
                            />
                          )}
                          {exp.role}
                        </h4>
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
                      {exp.certificate && (
                        <button
                          type="button"
                          onClick={() => setActiveCert(exp.certificate!)}
                          className="inline-flex items-center gap-1.5 mt-4 text-xs font-medium text-accent border border-accent/30 bg-accent/5 hover:bg-accent/10 px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          View Certificate
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setActiveCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <Image
                src={activeCert}
                alt="Certificate"
                width={900}
                height={640}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
