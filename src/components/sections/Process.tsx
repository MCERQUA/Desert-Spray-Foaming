"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ClipboardCheck, Wrench, Sparkles, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Consultation",
    description: "We begin with a thorough consultation to understand your needs and assess your space. Our experts will evaluate your property and identify the best insulation solution.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Customized Solution",
    description: "Based on our assessment, we propose an insulation solution tailored to your specific needs. You'll receive a detailed free quote with transparent pricing.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Professional Installation",
    description: "Our experienced team installs your insulation using premium materials and proven techniques, ensuring optimal performance and long-lasting results.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - character by character dramatic reveal
      const titleChars = titleRef.current?.querySelectorAll(".process-title-char");
      if (titleChars) {
        gsap.fromTo(
          titleChars,
          {
            opacity: 0,
            y: 80,
            rotateX: -90,
            scale: 0.5,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1,
            stagger: 0.03,
            ease: "power4.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Process cards cascade animation
      const cards = cardsRef.current?.querySelectorAll(".process-card");
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              scale: 0.8,
              rotateY: -20,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateY: 0,
              duration: 1,
              delay: index * 0.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      // Step number badges pop animation
      const badges = document.querySelectorAll(".process-badge");
      badges.forEach((badge, index) => {
        gsap.fromTo(
          badge,
          {
            opacity: 0,
            scale: 0,
            rotate: -180,
          },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 0.8,
            delay: 0.5 + index * 0.2,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: badge,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters for animation
  const splitTextToChars = (text: string, className = "") => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className={`process-title-char inline-block ${className}`}
        style={{ perspective: "1000px" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-dark to-purple" />

      {/* Horizontal scrolling text in background */}
      <motion.div
        style={{ x: marqueeX }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none z-0 opacity-[0.02]"
      >
        <span className="text-[25vw] font-black text-white uppercase tracking-tighter">
          PROCESS • CONSULTATION • INSTALLATION • QUALITY •
        </span>
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[200px]"
      />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-orange mb-8"
          >
            <span className="text-sm font-bold text-primary-light uppercase tracking-wider">
              How It Works
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 overflow-hidden">
            <span className="text-white block overflow-hidden pb-2">
              {splitTextToChars("OUR")}
            </span>
            <span className="text-gradient block overflow-hidden">
              {splitTextToChars("3-STEP PROCESS")}
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Simple, transparent, and focused on delivering exceptional results
          </motion.p>
        </div>

        {/* Process Steps */}
        <div ref={cardsRef} className="relative">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="process-card relative group"
                  style={{ perspective: "1000px" }}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="process-badge w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center font-black text-white shadow-lg shadow-primary/50"
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="pt-12 pb-8 px-8 glass rounded-3xl border border-white/10 group-hover:border-primary/30 transition-all h-full"
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-dark/20 border border-primary/30 flex items-center justify-center mb-6 mx-auto transition-transform"
                    >
                      <Icon className="w-8 h-8 text-primary-light" />
                    </motion.div>

                    <h3 className="text-2xl font-black text-white text-center mb-4">
                      {step.title}
                    </h3>

                    <p className="text-white/60 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Arrow (Between cards on desktop) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-24 -right-6 z-10">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + idx * 0.2, duration: 0.5 }}
                      >
                        <ArrowRight className="w-8 h-8 text-primary-light" />
                      </motion.div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
