"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterAnimationProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  start?: string;
}

export default function CounterAnimation({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
  start = "top 80%",
}: CounterAnimationProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: element,
        start,
        onEnter: () => {
          if (hasAnimated.current) return;
          hasAnimated.current = true;

          gsap.to(
            { val: 0 },
            {
              val: value,
              duration,
              ease: "power2.out",
              onUpdate: function () {
                setDisplayValue(Math.round(this.targets()[0].val));
              },
            }
          );
        },
      });
    });

    return () => ctx.revert();
  }, [value, duration, start]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
