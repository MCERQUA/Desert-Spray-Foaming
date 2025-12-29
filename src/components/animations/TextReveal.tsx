"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  type?: "chars" | "words" | "lines";
  stagger?: number;
  duration?: number;
  start?: string;
  delay?: number;
  animation?: "fadeUp" | "slideIn" | "clipReveal" | "blur";
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextReveal({
  text,
  className = "",
  type = "words",
  stagger = 0.05,
  duration = 0.8,
  start = "top 80%",
  delay = 0,
  animation = "fadeUp",
  tag: Tag = "span",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".reveal-element");

    const animations: Record<string, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
      fadeUp: {
        from: { opacity: 0, y: 50, rotateX: -45 },
        to: { opacity: 1, y: 0, rotateX: 0 },
      },
      slideIn: {
        from: { opacity: 0, x: -30 },
        to: { opacity: 1, x: 0 },
      },
      clipReveal: {
        from: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
        to: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
      },
      blur: {
        from: { opacity: 0, filter: "blur(10px)", y: 20 },
        to: { opacity: 1, filter: "blur(0px)", y: 0 },
      },
    };

    const { from, to } = animations[animation];

    const ctx = gsap.context(() => {
      gsap.fromTo(elements, from, {
        ...to,
        duration,
        stagger,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: container,
          start,
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [animation, delay, duration, stagger, start]);

  const splitText = () => {
    if (type === "chars") {
      return text.split("").map((char, i) => (
        <span
          key={i}
          className="reveal-element inline-block"
          style={{ perspective: "1000px" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    }

    if (type === "words") {
      return text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <span
            className="reveal-element inline-block"
            style={{ perspective: "1000px" }}
          >
            {word}
          </span>
        </span>
      ));
    }

    // lines - just animate the whole thing
    return (
      <span className="reveal-element inline-block" style={{ perspective: "1000px" }}>
        {text}
      </span>
    );
  };

  return (
    <Tag ref={containerRef as any} className={className}>
      {splitText()}
    </Tag>
  );
}
