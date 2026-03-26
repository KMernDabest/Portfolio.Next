"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutText } from "../data";

const photos = [
  { src: "/photos/pic1.png" },
  { src: "/photos/pic2.jpg" },
  { src: "/photos/pic3.jpg" },
];

// Rotation and offset for each card in the stack (index 0 = back, last = front)
const stackStyles = [
  { rotate: -8, x: -30, y: 8, scale: 0.92 },
  { rotate: 5, x: 20, y: -6, scale: 0.96 },
  { rotate: 0, x: 0, y: 0, scale: 1 },
];

const AUTO_CYCLE_MS = 3000;

export default function About() {
  const [order, setOrder] = useState([0, 1, 2]);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const cycleForward = useCallback(() => {
    setOrder((prev) => {
      const next = [...prev];
      const front = next.pop()!;
      next.unshift(front);
      return next;
    });
  }, []);

  function restartTimer() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(cycleForward, AUTO_CYCLE_MS);
  }

  // Bring a specific photo index to the front and reset the timer
  function bringToFront(photoIndex: number) {
    setOrder((prev) => {
      const stackPos = prev.indexOf(photoIndex);
      if (stackPos === prev.length - 1) return prev;
      const next = [...prev];
      next.splice(stackPos, 1);
      next.push(photoIndex);
      return next;
    });
    restartTimer();
  }

  // Auto-cycle
  useEffect(() => {
    intervalRef.current = setInterval(cycleForward, AUTO_CYCLE_MS);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [cycleForward]);

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

            {/* Photo card stack — right side */}
            <div className="flex flex-col items-center gap-5 order-1 md:order-2">
              <div className="relative w-[260px] h-[330px] sm:w-[300px] sm:h-[380px]">
                {order.map((photoIndex, stackIndex) => {
                  const isFront = stackIndex === order.length - 1;
                  const s = stackStyles[stackIndex];
                  return (
                    <motion.div
                      key={photoIndex}
                      className="absolute inset-0"
                      animate={{ x: s.x, rotate: s.rotate, scale: s.scale, opacity: isFront ? 1 : 0.75 }}
                      transition={{ type: "spring", stiffness: 180, damping: 28, mass: 1.2 }}
                      style={{ zIndex: stackIndex }}
                      onClick={!isFront ? () => bringToFront(photoIndex) : undefined}
                    >
                      <div
                        className={`relative w-full h-full rounded-2xl border border-border overflow-hidden select-none ${
                          isFront ? "shadow-lg" : "cursor-pointer"
                        }`}
                      >
                        <Image
                          src={photos[photoIndex].src}
                          alt={`Photo ${photoIndex + 1}`}
                          fill
                          className="object-cover"
                          sizes="300px"
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => bringToFront(i)}
                    type="button"
                    aria-label={`Show photo ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      order[order.length - 1] === i ? "bg-accent" : "bg-border hover:bg-accent/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
