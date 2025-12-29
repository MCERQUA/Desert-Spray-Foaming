"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Phone, ArrowRight, Check, Zap, Shield, Droplets, ThermometerSun, Clock, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Spray foam creates an airtight seal that significantly reduces heating and cooling costs. Save 30-50% on energy bills.",
  },
  {
    icon: Shield,
    title: "Durability & Longevity",
    description: "Maintains its shape and efficiency for 20+ years without sagging or settling. A smart long-term investment.",
  },
  {
    icon: Droplets,
    title: "Moisture Barrier",
    description: "The closed-cell structure creates an effective vapor barrier that prevents moisture infiltration and mold growth.",
  },
];

const faqs = [
  {
    question: "What are the differences between open-cell and closed-cell spray foam?",
    answer: "Open-cell foam has an R-value of 3.8 to 4.5 per inch and is more flexible and cost-effective. It works well for interior walls and noise reduction. Closed-cell foam provides R-6 to R-7 per inch and creates a stronger moisture barrier with superior insulation.",
  },
  {
    question: "How long does spray foam insulation last?",
    answer: "Spray foam insulation maintains its effectiveness for 20-30 years when properly installed. The material does not settle or compress over time.",
  },
  {
    question: "Can spray foam improve energy efficiency?",
    answer: "Our clients typically see 30-50% reductions in energy bills after installation. Spray foam creates an airtight seal that prevents temperature-controlled air from escaping.",
  },
  {
    question: "What are the health considerations?",
    answer: "Properly installed spray foam is safe for occupants. We recommend vacating the property for 24-48 hours during installation while the foam cures. Once cured, the foam becomes inert and poses no health risks.",
  },
];

export default function SprayFoamInsulationPage() {
  const benefitsRef = useRef<HTMLElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/closed-cell-foam-insulation-contractor-west-texas.jpg"
            alt="Spray foam insulation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px]"
          />
          <div className="absolute inset-0 grid-overlay opacity-30" />
        </div>

        <div className="container mx-auto px-4 pt-32 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-orange mb-8"
            >
              <span className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                Our #1 Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-gradient-animated">SPRAY FOAM</span>
              <br />
              <span className="text-white">INSULATION</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl"
            >
              Experience the cutting-edge benefits of our spray foam solutions. Our advanced technology creates a <span className="text-orange-400 font-bold">seamless and energy-efficient barrier</span>, maximizing comfort and lowering costs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="tel:432-209-9154"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-black text-lg shadow-2xl shadow-orange-500/40 group"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                GET FREE QUOTE
              </motion.a>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 glass rounded-full text-white font-bold text-lg group"
                >
                  SCHEDULE CONSULTATION
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-6"
            >
              {[
                { value: "30-50%", label: "Energy Savings" },
                { value: "20+", label: "Years Lifespan" },
                { value: "R-6 to R-7", label: "Per Inch (Closed)" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-orange-400">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-32 bg-gradient-to-b from-black to-zinc-950 relative">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              <span className="text-white">WHY CHOOSE</span>{" "}
              <span className="text-gradient">SPRAY FOAM?</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="glass rounded-3xl p-8 border border-white/10 hover:border-orange-500/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-zinc-950 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black mb-8"
              >
                <span className="text-white">OUR</span>{" "}
                <span className="text-gradient">INSTALLATION PROCESS</span>
              </motion.h2>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Assessment", desc: "Thorough site inspection to determine specific requirements and calculate precise material needs." },
                  { step: "02", title: "Preparation", desc: "Surface preparation, removing debris or old insulation. Set up containment areas to protect your property." },
                  { step: "03", title: "Application", desc: "Certified technicians apply spray foam with careful control of temperature and mixing ratios for optimal results." },
                  { step: "04", title: "Inspection", desc: "Detailed quality checks using thermal imaging to verify proper foam density and coverage." },
                ].map((item, idx) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center font-black text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/residential-spray-foam-insulation-terry-county-tx.jpg"
                alt="Spray foam installation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-gradient-to-b from-zinc-950 to-black relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            <span className="text-white">FREQUENTLY ASKED</span>{" "}
            <span className="text-gradient">QUESTIONS</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-white/60 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[150px]"
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            READY TO SEAL & SAVE?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Get a free consultation and quote for your spray foam insulation project today.
          </motion.p>

          <motion.a
            href="tel:432-209-9154"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center gap-3 px-10 py-6 bg-white rounded-full text-orange-600 font-black text-xl shadow-2xl group"
          >
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            CALL 432-209-9154
          </motion.a>
        </div>
      </section>
    </>
  );
}
