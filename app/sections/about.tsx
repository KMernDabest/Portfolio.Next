"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutText } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center">
            About Me
          </h2>
          <div className="mt-2 mx-auto w-16 h-1 bg-accent rounded-full" />

          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            {/* Text content — left side */}
            <div className="space-y-5 order-2 md:order-1">
              <p className="text-text-secondary leading-relaxed text-lg">
                {aboutText.intro}
              </p>
              <p className="text-text-secondary leading-relaxed">
                {aboutText.detail}
              </p>

              <div className="bg-white rounded-xl border border-border p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  Interests
                </h3>
                <ul className="space-y-2.5">
                  {aboutText.interests.map((interest) => (
                    <li
                      key={interest}
                      className="flex items-center gap-3 text-text-secondary text-sm"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Photo card — right side */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative w-[260px] h-[330px] sm:w-[300px] sm:h-[380px] rounded-2xl border border-border overflow-hidden shadow-lg">
                <Image
                  src="/photos/pic1.png"
                  alt="Photo"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
