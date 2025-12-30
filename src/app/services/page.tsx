"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Home, Building2, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Sparkles,
    title: "Spray Foam Insulation",
    description: "Experience cutting-edge benefits of our spray foam solutions. Our advanced technology creates a seamless, energy-efficient barrier for both commercial and residential properties.",
    image: "/images/closed-cell-foam-insulation-contractor-west-texas.jpg",
    href: "/services/spray-foam-insulation",
    features: ["Open & closed cell options", "30-50% energy savings", "20+ year lifespan"],
  },
  {
    icon: Home,
    title: "Attic Insulation",
    description: "Don't let heat or cold escape! Our team of skilled professionals will assess your attic space and recommend the best insulation solution for your needs.",
    image: "/images/attic-spray-foam-insulation-lubbock-tx.jpg",
    href: "/services/attic-insulation",
    features: ["Consistent temperatures", "Noise reduction", "Improved air quality"],
  },
  {
    icon: Building2,
    title: "Commercial Insulation",
    description: "Don't let inefficient insulation drain your profits. We'll help you create a workspace that's comfortable, efficient, and cost-effective.",
    image: "/images/commercial-spray-foam-insulation-metal-building-midland-tx.jpg",
    href: "/services/commercial-insulation",
    features: ["Energy savings", "Enhanced productivity", "Custom solutions"],
  },
  {
    icon: Trash2,
    title: "Insulation Removal",
    description: "Trust us for professional insulation removal services. Protect your property and prepare for a successful upgrade with our expert removal process.",
    image: "/images/insulation-removal-service-gaines-county-tx.jpg",
    href: "/services/insulation-removal",
    features: ["Safe removal", "Complete cleanup", "Prepare for upgrades"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/metal-building-insulation-contractor-odessa-tx.jpg"
            alt="Insulation services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-dark via-purple-dark/90 to-purple-dark/70" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-orange mb-8">
              <Sparkles className="w-4 h-4 text-primary-light" />
              <span className="text-sm font-bold text-primary-light uppercase tracking-wider">
                Our Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">INSULATION</span>
              <br />
              <span className="text-gradient">SOLUTIONS</span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed">
              Comprehensive insulation services tailored to your needs. From residential attics to commercial buildings, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-gradient-to-b from-purple-dark to-purple relative">
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <Link href={service.href}>
                    <div className="relative rounded-3xl overflow-hidden h-[500px]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-dark via-purple-dark/60 to-transparent" />

                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="w-14 h-14 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-primary-light" />
                        </div>

                        <h2 className="text-3xl font-black text-white mb-3">
                          {service.title}
                        </h2>

                        <p className="text-white/70 mb-4 line-clamp-2">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1 text-xs font-bold bg-white/10 rounded-full text-white/80"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-primary-light font-bold group-hover:gap-4 transition-all">
                          Learn More
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
