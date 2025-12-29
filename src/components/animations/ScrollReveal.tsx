"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale" | "rotateIn";
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 1,
  stagger = 0,
  className = "",
  start = "top 85%",
  end = "top 20%",
  scrub = false,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animations: Record<string, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
      fadeUp: {
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
      },
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      slideLeft: {
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0 },
      },
      slideRight: {
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },
      },
      scale: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 },
      },
      rotateIn: {
        from: { opacity: 0, rotateX: 90, transformOrigin: "top center" },
        to: { opacity: 1, rotateX: 0 },
      },
    };

    const { from, to } = animations[animation];

    const ctx = gsap.context(() => {
      gsap.fromTo(element, from, {
        ...to,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
          toggleActions: scrub ? undefined : "play none none none",
        },
        stagger,
      });
    });

    return () => ctx.revert();
  }, [animation, delay, duration, stagger, start, end, scrub]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
