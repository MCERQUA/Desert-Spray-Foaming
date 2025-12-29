"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, Sparkles, Building2, Home, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Sparkles,
    title: "Spray Foam Insulation",
    shortDesc: "Seal. Insulate. Save Money.",
    description: "Experience cutting-edge benefits of our spray foam solutions for both commercial and residential properties. Our advanced technology creates a seamless, energy-efficient barrier.",
    features: [
      "30-50% energy cost reduction",
      "20+ years product lifespan",
      "Superior moisture barrier",
      "Open & closed cell options"
    ],
    image: "/images/closed-cell-foam-insulation-contractor-west-texas.jpg",
    href: "/services/spray-foam-insulation",
    gradient: "from-orange-500/30 via-red-500/20 to-pink-500/20",
  },
  {
    icon: Home,
    title: "Attic Insulation",
    shortDesc: "Protect Your Comfort & Wallet",
    description: "Don't let heat or cold escape! Our team of skilled professionals will assess your attic space and recommend the best insulation solution for your needs.",
    features: [
      "Consistent temperatures",
      "Noise reduction",
      "Improved air quality",
      "Lower energy bills"
    ],
    image: "/images/attic-spray-foam-insulation-lubbock-tx.jpg",
    href: "/services/attic-insulation",
    gradient: "from-blue-500/30 via-cyan-500/20 to-teal-500/20",
  },
  {
    icon: Building2,
    title: "Commercial Insulation",
    shortDesc: "Boost Your Bottom Line",
    description: "Don't let inefficient insulation drain your profits. We'll help you create a workspace that's comfortable, efficient, and cost-effective.",
    features: [
      "Improved comfort",
      "Major energy savings",
      "Enhanced productivity",
      "Custom solutions"
    ],
    image: "/images/commercial-spray-foam-insulation-metal-building-midland-tx.jpg",
    href: "/services/commercial-insulation",
    gradient: "from-purple-500/30 via-fuchsia-500/20 to-pink-500/20",
  },
  {
    icon: Trash2,
    title: "Insulation Removal",
    shortDesc: "Safeguard Your Space",
    description: "Trust us for professional insulation removal services. Protect your property and prepare for a successful upgrade with our expert removal process.",
    features: [
      "Improved air quality",
      "Prepare for upgrades",
      "Safe removal process",
      "Complete cleanup"
    ],
    image: "/images/insulation-removal-service-gaines-county-tx.jpg",
    href: "/services/insulation-removal",
    gradient: "from-emerald-500/30 via-green-500/20 to-teal-500/20",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - word by word reveal
      const titleWords = titleRef.current?.querySelectorAll(".title-word");
      if (titleWords) {
        gsap.fromTo(
          titleWords,
          {
            opacity: 0,
            y: 80,
            rotateX: -60,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
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

      // Cards staggered reveal with dramatic effects
      const cards = cardsRef.current?.querySelectorAll(".service-card");
      if (cards) {
        cards.forEach((card, index) => {
          const isEven = index % 2 === 0;

          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: isEven ? -100 : 100,
              y: 50,
              rotateY: isEven ? -15 : 15,
              scale: 0.9,
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              rotateY: 0,
              scale: 1,
              duration: 1.2,
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

      // Animate features on hover (using CSS instead for better performance)
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split title into words
  const splitTitleWords = (words: string[]) => {
    return words.map((word, i) => (
      <span
        key={i}
        className="title-word inline-block mr-[0.3em]"
        style={{ perspective: "1000px" }}
      >
        {word}
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      {/* Horizontal scrolling text in background */}
      <motion.div
        ref={marqueeRef}
        style={{ x: marqueeX }}
        className="absolute top-1/3 whitespace-nowrap pointer-events-none z-0 opacity-[0.03]"
      >
        <span className="text-[20vw] font-black text-white uppercase tracking-tighter">
          INSULATION • SERVICES • SPRAY FOAM • COMFORT • INSULATION • SERVICES •
        </span>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]"
        />
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>

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
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-bold text-orange-400 uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight overflow-hidden">
            <span className="text-white block overflow-hidden pb-2">
              {splitTitleWords(["INSULATION"])}
            </span>
            <span className="text-gradient block overflow-hidden">
              {splitTitleWords(["TAILORED", "TO", "YOUR", "NEEDS"])}
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto"
          >
            Whether you're a commercial enterprise or homeowner,{" "}
            <span className="text-orange-400 font-semibold">no project is too big or small</span>
          </motion.p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="service-card group relative rounded-3xl overflow-hidden"
                style={{ perspective: "1000px" }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-10 min-h-[480px] flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6 shadow-2xl`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-orange-400 font-bold text-lg mb-4">
                    {service.shortDesc}
                  </p>
                  <p className="text-white/70 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 transition-all duration-300 group-hover:translate-x-2"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-orange-400" />
                        </div>
                        <span className="text-sm font-medium text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link href={service.href}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl text-white font-bold shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50 transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
