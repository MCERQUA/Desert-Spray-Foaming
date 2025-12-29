"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface ParallaxTextProps {
  text: string;
  baseVelocity?: number;
  className?: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function ParallaxText({
  text,
  baseVelocity = -100,
  className = "",
}: ParallaxTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, baseVelocity]);

  // Repeat text multiple times for seamless loop
  const repeatedText = Array(4).fill(text).join(" • ");

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        style={{ x }}
        className="inline-block"
      >
        <span className="text-8xl md:text-9xl lg:text-[12rem] font-black text-white/5 uppercase tracking-tight">
          {repeatedText}
        </span>
      </motion.div>
    </div>
  );
}
