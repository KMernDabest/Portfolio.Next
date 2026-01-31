"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills, skillCategories } from "@/app/data/skills";

// Skill icons (simplified SVG versions)
const SkillIcon = ({ name, color }: { name: string; color: string }) => {
  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center text-lg font-bold"
      style={{ backgroundColor: `${color}20`, color }}
    >
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl" />
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
            My Expertise
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit of languages, frameworks, and tools I use to
            bring ideas to life.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              <span>{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative group"
            >
              <div
                className={`relative p-4 rounded-2xl border transition-all duration-300 ${
                  hoveredSkill === skill.name
                    ? "bg-slate-800/80 border-white/20 scale-105"
                    : "bg-slate-900/50 border-white/10"
                }`}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{
                    boxShadow: `0 0 30px ${skill.color}30`,
                  }}
                />

                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mb-3"
                  >
                    <SkillIcon name={skill.name} color={skill.color} />
                  </motion.div>

                  {/* Name */}
                  <span className="text-sm font-medium text-white truncate w-full">
                    {skill.name}
                  </span>

                  {/* Category badge */}
                  <span className="mt-1 text-xs text-slate-500 capitalize">
                    {skill.category}
                  </span>
                </div>

                {/* Tooltip */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-800 border border-white/10 rounded-lg shadow-xl z-10 whitespace-nowrap"
                  >
                    <span className="text-sm text-white">{skill.name}</span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-r border-b border-white/10 rotate-45" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { label: "Frontend", count: skills.filter((s) => s.category === "frontend").length, icon: "🎨" },
            { label: "Backend", count: skills.filter((s) => s.category === "backend").length, icon: "⚙️" },
            { label: "Database", count: skills.filter((s) => s.category === "database").length, icon: "🗃️" },
            { label: "Tools", count: skills.filter((s) => s.category === "tools").length, icon: "🛠️" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 text-center"
            >
              <span className="text-3xl mb-3 block">{stat.icon}</span>
              <div className="text-2xl font-bold text-white">{stat.count}+</div>
              <div className="text-sm text-slate-400">{stat.label} Technologies</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
