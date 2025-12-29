"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Phone, ArrowRight, Trash2, Wind, Shield, Sparkles, AlertTriangle, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    icon: Wind,
    title: "Improved Indoor Air Quality",
    description: "Remove old, contaminated insulation that may harbor allergens, dust, and pollutants to breathe easier in your space.",
  },
  {
    icon: Sparkles,
    title: "Preparation for Upgrades",
    description: "Clear the way for new, high-performance insulation that will maximize energy efficiency and comfort.",
  },
  {
    icon: Shield,
    title: "Safe Removal Process",
    description: "Our trained professionals use proper equipment and techniques to safely remove old insulation without risking your health.",
  },
];

const reasons = [
  {
    title: "Mold or Mildew Growth",
    desc: "Old insulation exposed to moisture can develop mold, spreading spores throughout your home.",
  },
  {
    title: "Pest Infestations",
    desc: "Rodents and insects often nest in attic insulation, leaving behind droppings and contamination.",
  },
  {
    title: "Water Damage",
    desc: "Roof leaks or flooding can saturate insulation, reducing its effectiveness and promoting decay.",
  },
  {
    title: "Settling or Degradation",
    desc: "Over time, insulation compresses and loses R-value, no longer providing adequate protection.",
  },
  {
    title: "Renovation Projects",
    desc: "Major renovations often require removing old insulation to access wiring, plumbing, or framing.",
  },
  {
    title: "Upgrading to Spray Foam",
    desc: "Removing old batt or blown-in insulation is often necessary before installing spray foam.",
  },
];

const faqs = [
  {
    question: "Why is professional insulation removal necessary?",
    answer: "Professional removal ensures the job is done safely and completely. Old insulation may contain hazardous materials, mold, or pest contamination that require proper handling. DIY removal can spread contaminants throughout your home and pose health risks.",
  },
  {
    question: "How long does insulation removal take?",
    answer: "Most residential insulation removal projects can be completed in 1-2 days, depending on the size of the space and the type of insulation. We'll provide a timeline estimate during your consultation.",
  },
  {
    question: "What happens to the old insulation?",
    answer: "We properly dispose of all removed insulation materials according to local regulations. If the insulation is contaminated with mold or pests, we follow special disposal protocols to ensure safe handling.",
  },
  {
    question: "Can I stay in my home during insulation removal?",
    answer: "We recommend vacating the work area during removal to avoid exposure to dust and debris. For attic removal, you can typically stay in your home, but we'll advise based on your specific situation.",
  },
];

export default function InsulationRemovalPage() {
  const benefitsRef = useRef<HTMLElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/insulation-removal-service-gaines-county-tx.jpg"
            alt="Insulation removal service in Gaines County TX"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px]"
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
              <Trash2 className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                Safeguard Your Space
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-gradient-animated">INSULATION</span>
              <br />
              <span className="text-white">REMOVAL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl"
            >
              Safeguard your property and prepare for a successful upgrade. Trust us for <span className="text-orange-400 font-bold">professional insulation removal</span> that protects your investment and well-being.
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
                { value: "Safe", label: "Professional Removal" },
                { value: "1-2", label: "Days Typical" },
                { value: "100%", label: "Complete Cleanup" },
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

      {/* Warning Section */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-950 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white">
                  WHY PROPER REMOVAL <span className="text-gradient">MATTERS</span>
                </h2>
              </div>

              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Proper insulation removal is critical to safeguarding your property and health. Neglecting this step can lead to <span className="text-orange-400 font-bold">mold growth, pest infestations, and structural damage</span>.
              </p>

              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Trusting amateurs or cutting corners risks costly repairs and compromises the integrity of your home or commercial property. At Desert Spray Foaming, we prioritize meticulous and safe insulation removal to protect your investment and well-being.
              </p>

              <div className="glass-orange rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">Don't Risk Your Health</h3>
                <p className="text-white/70 text-sm">
                  Old insulation can contain hazardous materials, mold spores, and pest droppings. Professional removal ensures these contaminants are properly contained and disposed of, protecting your family's health.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">
                Signs You Need Insulation Removal:
              </h3>
              <div className="grid gap-4">
                {reasons.map((reason, idx) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass rounded-xl p-4 border border-white/10"
                  >
                    <h4 className="text-white font-bold mb-1">{reason.title}</h4>
                    <p className="text-white/60 text-sm">{reason.desc}</p>
                  </motion.div>
                ))}
              </div>
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
              <span className="text-white">BENEFITS OF</span>{" "}
              <span className="text-gradient">PROFESSIONAL REMOVAL</span>
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
                    title: "Assessment",
                    desc: "We'll conduct a thorough assessment of your property to determine the extent of insulation removal needed and identify any contamination issues."
                  },
                  {
                    step: "02",
                    title: "Safe Removal",
                    desc: "Using safe and efficient techniques, we'll carefully extract the existing insulation while containing any contaminants to prevent spread."
                  },
                  {
                    step: "03",
                    title: "Cleanup & Preparation",
                    desc: "We'll thoroughly clean and prepare your space for the installation of new insulation materials, leaving it ready for an upgrade."
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/open-cell-spray-foam-wall-insulation-lubbock-county-tx.jpg"
                alt="Professional insulation work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Ready for New Insulation Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-orange rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Ready for Upgrade</div>
                    <div className="text-white/60 text-sm">Prepared for new spray foam insulation</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            SAY GOODBYE TO OLD INSULATION
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Protect your property and prepare for a successful upgrade. Get your free insulation removal consultation today.
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
