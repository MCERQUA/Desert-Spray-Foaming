"use client";

import { motion } from "framer-motion";
import { Heart, Gauge, Award, Users, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Transparency",
    description: "From initial consultations to project completion, we keep you informed and involved, ensuring full transparency and peace of mind.",
  },
  {
    icon: Gauge,
    title: "Efficiency",
    description: "Our streamlined processes and experienced team allow us to complete projects promptly without compromising on quality, saving you time and hassle.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Quality is at the heart of everything we do. From the products we use to the craftsmanship we deliver, we never compromise on quality.",
  },
];

const stats = [
  { value: "2023", label: "Founded" },
  { value: "6+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Goal" },
  { value: "24/7", label: "Support" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/desert-spray-foaming-family-owned-business-texas.jpg"
            alt="Desert Spray Foaming family"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px]"
          />
          <div className="absolute inset-0 grid-overlay opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-orange mb-8"
            >
              <Users className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                About Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-white">YOUR PARTNER IN</span>
              <br />
              <span className="text-gradient-animated">COMFORT & EFFICIENCY</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 leading-relaxed"
            >
              Family-owned and operated, delivering quality insulation solutions to West Texas since 2023.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-orange-500 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white">{stat.value}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-950 relative">
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/images/spray-foam-insulation-metal-building-seminole-tx.jpg"
                  alt="Our work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-8 glass-orange rounded-3xl p-6 text-center"
              >
                <div className="text-5xl font-black text-orange-400">6+</div>
                <div className="text-sm font-bold text-white/80">Years Experience</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="text-white">OUR</span>{" "}
                <span className="text-gradient">STORY</span>
              </h2>

              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  With over <span className="text-orange-400 font-bold">6 years of experience</span> in the insulation industry and a passion for his work, Klass started Desert Spray Foaming in 2023.
                </p>
                <p>
                  Our mission is to provide value, a comfortable indoor environment, customer satisfaction, affordable pricing, and a quality product. Whether commercial or residential, big or small, we've got you covered.
                </p>
                <p>
                  At Desert Spray Foaming, we're not just about insulation — we're about <span className="text-orange-400 font-bold">creating lasting relationships</span> and spaces you'll love.
                </p>
                <p>
                  We offer a comprehensive range of services, including open-cell and closed-cell spray foam options, attic insulation, and insulation removal. We're here to make your spaces cozier, your experiences more satisfying, and your wallets happier.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-zinc-950 relative">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[200px]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            <span className="text-white">OUR CORE</span>{" "}
            <span className="text-gradient">VALUES</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="glass rounded-3xl p-8 border border-white/10 hover:border-orange-500/30 transition-all text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-10 h-10 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/shipping-container-insulation-exterior-west-texas.jpg"
            alt="Our work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            READY TO WORK WITH US?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss your insulation needs and create a comfortable, energy-efficient space together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:432-209-9154"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-black text-lg shadow-2xl shadow-orange-500/40 group"
            >
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              CALL NOW
            </motion.a>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-5 glass rounded-full text-white font-bold text-lg group"
              >
                CONTACT US
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
