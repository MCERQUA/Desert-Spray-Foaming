"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Gauge, Award, Users } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Heart,
    title: "Transparency",
    description: "From initial consultations to project completion, we keep you informed and involved, ensuring full transparency and peace of mind.",
  },
  {
    icon: Gauge,
    title: "Efficiency",
    description: "Our streamlined processes and experienced team allow us to complete projects promptly without compromising on quality.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Quality is at the heart of everything we do. From the products we use to the craftsmanship we deliver, we never compromise.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageStackRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const badgeScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal with dramatic effect
      const titleChars = titleRef.current?.querySelectorAll(".title-char");
      if (titleChars) {
        gsap.fromTo(
          titleChars,
          {
            opacity: 0,
            y: 60,
            rotateX: -45,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.02,
            ease: "power4.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Image stack parallax animation
      const images = imageStackRef.current?.querySelectorAll(".about-image");
      if (images) {
        images.forEach((img, i) => {
          gsap.fromTo(
            img,
            {
              opacity: 0,
              y: 80,
              x: i % 2 === 0 ? -50 : 50,
              scale: 0.9,
              rotate: i % 2 === 0 ? -10 : 10,
            },
            {
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              rotate: i % 2 === 0 ? -3 : 3,
              duration: 1.2,
              ease: "power4.out",
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      // Values cards staggered reveal
      const valueCards = valuesRef.current?.querySelectorAll(".value-card");
      if (valueCards) {
        gsap.fromTo(
          valueCards,
          {
            opacity: 0,
            x: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Experience badge pop animation
      const badge = document.querySelector(".experience-badge");
      if (badge) {
        gsap.fromTo(
          badge,
          {
            opacity: 0,
            scale: 0,
            rotate: -20,
          },
          {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: badge,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters for animation
  const splitTextToChars = (text: string, className = "") => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className={`title-char inline-block ${className}`}
        style={{ perspective: "1000px" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-dark via-zinc-950 to-purple-dark" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]"
        />
        <div className="absolute inset-0 grid-overlay opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image Stack */}
          <div ref={imageStackRef} className="relative">
            <div className="relative h-[600px]">
              {/* Main Image */}
              <motion.div
                style={{ y: imageY, rotate: imageRotate }}
                className="about-image absolute top-0 left-0 w-80 h-96 rounded-3xl overflow-hidden glass glow-orange"
              >
                <Image
                  src="/images/desert-spray-foaming-family-owned-business-texas.jpg"
                  alt="Desert Spray Foaming family owned business"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 to-transparent" />
              </motion.div>

              {/* Secondary Image */}
              <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
                className="about-image absolute bottom-0 right-0 w-72 h-80 rounded-3xl overflow-hidden glass"
              >
                <Image
                  src="/images/open-cell-spray-foam-wall-insulation-lubbock-county-tx.jpg"
                  alt="Professional insulation work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 to-transparent" />
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                style={{ scale: badgeScale }}
                className="experience-badge absolute top-1/2 right-1/4 -translate-y-1/2"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="glass-orange rounded-3xl p-6 text-center"
                >
                  <div className="text-5xl font-black text-primary-light mb-1">6+</div>
                  <div className="text-sm font-bold text-white/80">Years of</div>
                  <div className="text-sm font-bold text-white/80">Experience</div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-orange mb-8"
            >
              <Users className="w-4 h-4 text-primary-light" />
              <span className="text-sm font-bold text-primary-light uppercase tracking-wider">
                About Us
              </span>
            </motion.div>

            <div ref={titleRef}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight overflow-hidden">
                <span className="text-white block overflow-hidden pb-2">
                  {splitTextToChars("YOUR PARTNER IN")}
                </span>
                <span className="text-gradient block overflow-hidden">
                  {splitTextToChars("COMFORT & EFFICIENCY")}
                </span>
              </h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-white/70 leading-relaxed mb-6"
            >
              With over <span className="text-primary-light font-bold">6 years of experience</span> in the insulation industry and a passion for his work, Klass started Desert Spray Foaming in 2023. Our mission is to provide value, a comfortable indoor environment, customer satisfaction, affordable pricing, and a quality product.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/70 leading-relaxed mb-10"
            >
              At Desert Spray Foaming, we're not just about insulation — we're about <span className="text-primary-light font-bold">creating lasting relationships</span> and spaces you'll love.
            </motion.p>

            {/* Values */}
            <div ref={valuesRef} className="space-y-6">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="value-card flex gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-dark/20 border border-primary/30 flex items-center justify-center transition-transform"
                    >
                      <Icon className="w-6 h-6 text-primary-light" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{value.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
