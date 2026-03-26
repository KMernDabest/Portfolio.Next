"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { aboutText } from "../data";

const photos = [
  { label: "Photo 1" },
  { label: "Photo 2" },
  { label: "Photo 3" },
];

const SWIPE_THRESHOLD = 80;

// Rotation and offset for each card in the stack (index 0 = back, last = front)
const stackStyles = [
  { rotate: -8, x: -30, y: 8, scale: 0.92 },
  { rotate: 5, x: 20, y: -6, scale: 0.96 },
  { rotate: 0, x: 0, y: 0, scale: 1 },
];

export default function About() {
  const [order, setOrder] = useState([0, 1, 2]);

  function cycleForward() {
    setOrder((prev) => {
      const next = [...prev];
      const front = next.pop()!;
      next.unshift(front);
      return next;
    });
  }

  function cycleBackward() {
    setOrder((prev) => {
      const next = [...prev];
      const back = next.shift()!;
      next.push(back);
      return next;
    });
  }

  return (
    <section id="about" className="py-24 bg-surface px-6">
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
              <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[400px]">
                {order.map((photoIndex, stackIndex) => (
                  <SwipableCard
                    key={photoIndex}
                    label={photos[photoIndex].label}
                    style={stackStyles[stackIndex]}
                    isFront={stackIndex === order.length - 1}
                    onSwipeLeft={cycleForward}
                    onSwipeRight={cycleBackward}
                  />
                ))}
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {photos.map((_, i) => (
                  <span
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      order[order.length - 1] === i
                        ? "bg-accent"
                        : "bg-border"
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

function SwipableCard({
  label,
  style,
  isFront,
  onSwipeLeft,
  onSwipeRight,
}: {
  label: string;
  style: { rotate: number; x: number; y: number; scale: number };
  isFront: boolean;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-15, style.rotate, 15]);
  const opacity = useTransform(
    x,
    [-200, -100, 0, 100, 200],
    [0.5, 1, 1, 1, 0.5]
  );

  function handleDragEnd() {
    const current = x.get();
    if (current < -SWIPE_THRESHOLD) {
      animate(x, -400, { duration: 0.3 }).then(() => {
        x.set(0);
        onSwipeLeft();
      });
    } else if (current > SWIPE_THRESHOLD) {
      animate(x, 400, { duration: 0.3 }).then(() => {
        x.set(0);
        onSwipeRight();
      });
    } else {
      animate(x, 0, { type: "spring", stiffness: 400, damping: 25 });
    }
  }

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        zIndex: isFront ? 10 : 0,
        x: isFront ? x : style.x,
        rotate: isFront ? rotate : style.rotate,
        opacity: isFront ? opacity : 0.7,
        scale: style.scale,
      }}
      animate={
        !isFront
          ? { x: style.x, rotate: style.rotate, scale: style.scale }
          : { scale: style.scale }
      }
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={isFront ? handleDragEnd : undefined}
    >
      <div
        className={`w-full h-full rounded-2xl border border-border bg-white shadow-md flex flex-col items-center justify-center gap-3 select-none ${
          isFront ? "cursor-grab active:cursor-grabbing shadow-lg" : ""
        }`}
      >
        {/* Placeholder — replace with <Image> when you have real photos */}
        <svg
          width={48}
          height={48}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.2}
          className="text-text-secondary/40"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <span className="text-sm text-text-secondary/60 font-medium">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
