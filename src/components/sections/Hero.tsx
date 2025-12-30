"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, ArrowRight, Shield, Zap, ThermometerSun } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "6+", label: "Years Experience", icon: Shield },
  { value: "30-50%", label: "Energy Savings", icon: Zap },
  { value: "20+", label: "Years Lifespan", icon: ThermometerSun },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dramatic title reveal animation
      const titleChars = titleRef.current?.querySelectorAll(".char");
      if (titleChars) {
        gsap.fromTo(
          titleChars,
          {
            opacity: 0,
            y: 100,
            rotateX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.03,
            ease: "power4.out",
            delay: 0.3,
          }
        );
      }

      // Parallax layers on scroll
      gsap.to(".parallax-layer-1", {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-layer-2", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Stats cards staggered entrance
      gsap.fromTo(
        ".stat-card",
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "elastic.out(1, 0.5)",
          delay: 1,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters for animation
  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ perspective: "1000px" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Multi-layered Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div ref={parallaxRef} className="absolute inset-0 scale-110">
          <Image
            src="/images/spray-foam-insulation-metal-building-seminole-tx.jpg"
            alt="Spray foam insulation in Seminole TX"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-dark/95 via-purple-dark/85 to-purple/70" />
        </div>

        {/* Animated gradient orbs - parallax layer 1 */}
        <motion.div
          className="parallax-layer-1 absolute top-1/4 -left-48 w-[500px] h-[500px] bg-gradient-to-r from-primary/30 to-red-500/20 rounded-full blur-[128px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="parallax-layer-2 absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-gradient-to-r from-primary-dark/20 to-yellow-500/20 rounded-full blur-[128px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-overlay opacity-50" />
      </motion.div>

      {/* Horizontal Scrolling Text Background */}
      <motion.div
        ref={marqueeRef}
        style={{ x: marqueeX }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none z-[1]"
      >
        <span className="text-[15vw] font-black text-white/[0.03] uppercase tracking-tighter">
          SPRAY FOAM • INSULATION • WEST TEXAS • ENERGY SAVINGS • SPRAY FOAM • INSULATION •
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 pt-32 pb-20 relative z-10"
        style={{ opacity, scale, y: textY }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div ref={titleRef}>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-orange mb-8"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-bold text-primary-light uppercase tracking-wider">
                  Serving West Texas Since 2023
                </span>
              </motion.div>

              {/* Heading with character animation */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1]">
                <span className="text-gradient-animated block overflow-hidden">
                  {splitText("SEAL. INSULATE.")}
                </span>
                <span className="text-white block overflow-hidden mt-2">
                  {splitText("SAVE MONEY.")}
                </span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10"
              >
                Your premier choice for{" "}
                <span className="text-primary-light font-bold">superior spray foam insulation</span>{" "}
                in Seminole, TX and surrounding areas — delivering comfort and quality every time.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="tel:432-209-9154"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-primary to-primary-dark rounded-full text-white font-black text-lg shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all group"
                >
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  CALL 432-209-9154
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 glass-orange rounded-full text-white font-bold text-lg group"
                >
                  FREE QUOTE
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="mt-12 flex items-center gap-6 text-white/60 text-sm"
              >
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-light" />
                  <span>Certified Technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary-light" />
                  <span>Premium Materials</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="relative hidden lg:block">
              <div className="relative h-[500px]">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  const positions = [
                    "top-0 right-0",
                    "top-1/3 right-24",
                    "bottom-0 right-12",
                  ];
                  const rotations = [-3, 2, -2];

                  return (
                    <div
                      key={stat.label}
                      className={`stat-card absolute ${positions[idx]} w-64`}
                      style={{ transform: `rotate(${rotations[idx]}deg)` }}
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4 + idx, repeat: Infinity, ease: "easeInOut" }}
                        className="glass-orange rounded-3xl p-6 glow-orange"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary-dark/30 flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary-light" />
                          </div>
                        </div>
                        <div className="text-4xl font-black text-white mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/60 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}

                {/* Background decorative image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                  className="absolute top-1/4 left-0 w-48 h-48 rounded-3xl overflow-hidden glass"
                >
                  <Image
                    src="/images/attic-spray-foam-insulation-lubbock-tx.jpg"
                    alt="Attic insulation"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary-light rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
