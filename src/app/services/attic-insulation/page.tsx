"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Phone, ArrowRight, ThermometerSun, Volume2, Wind, DollarSign, Home, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    icon: ThermometerSun,
    title: "Consistent Temperatures",
    description: "Say goodbye to drafts and temperature fluctuations. Our attic insulation creates a consistent and comfortable indoor climate year-round.",
  },
  {
    icon: Volume2,
    title: "Noise Reduction",
    description: "Enjoy a peaceful indoor atmosphere. Proper attic insulation significantly reduces outside noise for a quieter living space.",
  },
  {
    icon: Wind,
    title: "Improved Air Quality",
    description: "Keep allergens and pollutants at bay with proper insulation, ensuring a healthier living space for you and your family.",
  },
];

const faqs = [
  {
    question: "How do I know if my attic needs new insulation?",
    answer: "Signs include uneven temperatures throughout your home, high energy bills, drafts, ice dams in winter, and visible damage or settling of existing insulation. If your home is over 15 years old and has never had the insulation upgraded, it's likely time for an assessment.",
  },
  {
    question: "What type of insulation is best for attics in West Texas?",
    answer: "Spray foam insulation is ideal for West Texas attics due to its superior air sealing properties and ability to handle extreme temperature swings. It creates a complete barrier against the intense summer heat and keeps warmth in during cold winters.",
  },
  {
    question: "How much can I save on energy bills with proper attic insulation?",
    answer: "Most homeowners see 30-50% reduction in heating and cooling costs after proper attic insulation. In Seminole's climate with hot summers and cold winters, the savings can be even more significant.",
  },
  {
    question: "How long does attic insulation installation take?",
    answer: "Most residential attic insulation projects can be completed in one day. Larger homes or those requiring removal of old insulation may take 1-2 days. We'll provide a timeline during your free consultation.",
  },
];

export default function AtticInsulationPage() {
  const benefitsRef = useRef<HTMLElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/attic-spray-foam-insulation-lubbock-tx.jpg"
            alt="Attic insulation in Lubbock TX"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[150px]"
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
              <Home className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                Protect Your Comfort
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-gradient-animated">ATTIC</span>
              <br />
              <span className="text-white">INSULATION</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl"
            >
              Don't let heat or cold escape! Our team of skilled professionals will assess your attic space and recommend the <span className="text-orange-400 font-bold">best insulation solution</span> for your needs.
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
                { value: "30-50%", label: "Lower Energy Bills" },
                { value: "1 Day", label: "Typical Install" },
                { value: "20+", label: "Years Protection" },
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

      {/* Problem Section */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-950 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="text-white">IS YOUR ATTIC</span>{" "}
                <span className="text-gradient">COSTING YOU MONEY?</span>
              </h2>

              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Is your attic space currently underutilized or not properly insulated? You may be unknowingly <span className="text-orange-400 font-bold">increasing your energy bills</span> and decreasing the comfort levels in your home.
              </p>

              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Without proper insulation, you risk temperature fluctuations, discomfort, and reduced indoor air quality. Inefficient insulation can also lead to mold growth, wood rot, and structural damage over time.
              </p>

              <div className="space-y-4">
                {[
                  "High energy bills in summer and winter",
                  "Uneven temperatures throughout your home",
                  "Drafts and cold spots",
                  "Ice dams forming on your roof",
                  "HVAC system running constantly",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-red-400 text-sm">!</span>
                    </div>
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/attic-insulation-contractor-andrews-county-tx.jpg"
                alt="Attic insulation contractor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-32 bg-zinc-950 relative">
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
              <span className="text-white">BENEFITS OF PROPER</span>{" "}
              <span className="text-gradient">ATTIC INSULATION</span>
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
      <section className="py-32 bg-gradient-to-b from-zinc-950 to-black relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/spray-foam-ceiling-insulation-big-spring-tx.jpg"
                alt="Attic insulation process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black mb-8"
              >
                <span className="text-white">OUR</span>{" "}
                <span className="text-gradient">3-STEP PROCESS</span>
              </motion.h2>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Consultation",
                    desc: "We begin with a thorough consultation to understand your needs and assess your attic space. We'll identify any existing issues and recommend the best solution."
                  },
                  {
                    step: "02",
                    title: "Customized Solution",
                    desc: "Based on our assessment, we propose the ideal insulation solution for your specific needs. You'll receive a detailed free quote with transparent pricing."
                  },
                  {
                    step: "03",
                    title: "Professional Installation",
                    desc: "Our experienced team insulates your attic, ensuring optimal performance and long-lasting results. We leave your space clean and ready to enjoy."
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-orange-500/30">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-black relative">
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
            PROTECT YOUR COMFORT & WALLET
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Take the first step toward a more comfortable and cost-effective living space. Get your free attic insulation consultation today.
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
