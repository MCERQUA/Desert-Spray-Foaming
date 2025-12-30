"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, ArrowRight, MapPin, Clock, Mail } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - word by word dramatic reveal
      const titleWords = titleRef.current?.querySelectorAll(".cta-title-word");
      if (titleWords) {
        gsap.fromTo(
          titleWords,
          {
            opacity: 0,
            y: 100,
            rotateX: -90,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Contact cards staggered cascade animation
      const cards = cardsRef.current?.querySelectorAll(".contact-card");
      if (cards) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            x: 150,
            y: 50,
            rotateY: 30,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotateY: 0,
            scale: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // CTA buttons pop in
      gsap.fromTo(
        ".cta-button",
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: ".cta-button-container",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split title into words for animation
  const splitTitleWords = (text: string, className = "") => {
    return text.split(" ").map((word, i) => (
      <span
        key={i}
        className={`cta-title-word inline-block mr-[0.3em] ${className}`}
        style={{ perspective: "1000px" }}
      >
        {word}
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <Image
          src="/images/shipping-container-2lb-closed-cell-foam-insulation-texas.jpg"
          alt="Spray foam insulation work"
          fill
          className="object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-dark via-purple-dark/90 to-purple-dark/70" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"
        />
      </motion.div>

      {/* Horizontal scrolling text in background */}
      <motion.div
        style={{ x: useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]) }}
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none z-0 opacity-[0.03]"
      >
        <span className="text-[20vw] font-black text-white uppercase tracking-tighter">
          CONTACT US • SAVE MONEY • CALL NOW • CONTACT US • SAVE MONEY •
        </span>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-orange mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-bold text-primary-light uppercase tracking-wider">
                Get Started Today
              </span>
            </motion.div>

            <div ref={titleRef}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight overflow-hidden">
                <span className="text-white block overflow-hidden pb-2">
                  {splitTitleWords("READY TO")}
                </span>
                <span className="text-gradient-animated block overflow-hidden">
                  {splitTitleWords("SAVE MONEY?")}
                </span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl text-white/70 leading-relaxed mb-10"
            >
              Experience comfort, satisfaction, and affordability. From crafting comfortable indoor havens to ensuring your complete satisfaction, we're dedicated to providing exceptional service at <span className="text-primary-light font-bold">prices that won't break the bank</span>.
            </motion.p>

            {/* CTA Buttons */}
            <div className="cta-button-container flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:432-209-9154"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-primary to-primary-dark rounded-full text-white font-black text-lg shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all group"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                CALL NOW
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button inline-flex items-center justify-center gap-3 px-8 py-5 glass rounded-full text-white font-bold text-lg border border-white/20 hover:border-primary/50 transition-all group"
              >
                FREE QUOTE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </div>
          </div>

          {/* Right Column - Contact Info Cards */}
          <div ref={cardsRef} className="space-y-6" style={{ perspective: "1000px" }}>
            {/* Phone Card */}
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="contact-card glass-orange rounded-3xl p-6 flex items-center gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/50">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-primary-light uppercase tracking-wider mb-1">
                  Call Us
                </div>
                <a href="tel:432-209-9154" className="text-2xl font-black text-white hover:text-primary-light transition-colors">
                  432-209-9154
                </a>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="contact-card glass rounded-3xl p-6 flex items-center gap-6 border border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white/60 uppercase tracking-wider mb-1">
                  Email Us
                </div>
                <a href="mailto:klass@desertsprayfoaming.com" className="text-lg font-bold text-white hover:text-primary-light transition-colors">
                  klass@desertsprayfoaming.com
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="contact-card glass rounded-3xl p-6 flex items-center gap-6 border border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white/60 uppercase tracking-wider mb-1">
                  Visit Us
                </div>
                <div className="text-lg font-bold text-white">
                  150 FM 1429, Seminole, TX 79360
                </div>
              </div>
            </motion.div>

            {/* Hours Card */}
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              className="contact-card glass rounded-3xl p-6 flex items-center gap-6 border border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white/60 uppercase tracking-wider mb-1">
                  Business Hours
                </div>
                <div className="text-lg font-bold text-white">
                  Mon-Fri: 7AM - 6PM
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
