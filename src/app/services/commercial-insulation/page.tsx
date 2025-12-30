"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Phone, ArrowRight, Building2, Users, TrendingUp, Zap, DollarSign, ThermometerSun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    icon: ThermometerSun,
    title: "Improved Comfort",
    description: "Create a consistent, comfortable environment for employees and customers alike, regardless of the extreme West Texas weather outside.",
  },
  {
    icon: DollarSign,
    title: "Energy Savings",
    description: "Significantly reduce your heating and cooling costs. Most businesses see 30-50% reduction in energy expenses after proper insulation.",
  },
  {
    icon: TrendingUp,
    title: "Enhanced Productivity",
    description: "A comfortable work environment leads to happier, more productive employees. Invest in your team's comfort and watch productivity soar.",
  },
];

const applications = [
  "Metal Buildings & Warehouses",
  "Office Buildings",
  "Retail Spaces",
  "Agricultural Buildings",
  "Manufacturing Facilities",
  "Storage Units",
];

const faqs = [
  {
    question: "How does commercial insulation differ from residential?",
    answer: "Commercial projects often involve larger spaces, different building materials (like metal buildings), and may have specific code requirements. We tailor our approach to each commercial project, considering factors like building use, occupancy, and local regulations.",
  },
  {
    question: "Will the installation disrupt my business operations?",
    answer: "We understand that downtime costs money. We work with you to schedule installation during off-hours or in phases to minimize disruption to your operations. Many projects can be completed over a weekend.",
  },
  {
    question: "What's the ROI on commercial insulation?",
    answer: "Most businesses see a return on investment within 2-5 years through energy savings alone. Combined with improved employee comfort and productivity, the long-term value is significant.",
  },
  {
    question: "Do you work on metal buildings?",
    answer: "Absolutely! Metal buildings are one of our specialties. Spray foam insulation is ideal for metal structures because it adheres directly to the metal, creates a seamless barrier, and prevents condensation issues common in metal buildings.",
  },
];

export default function CommercialInsulationPage() {
  const benefitsRef = useRef<HTMLElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/commercial-spray-foam-insulation-metal-building-midland-tx.jpg"
            alt="Commercial spray foam insulation in Midland TX"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-dark via-purple-dark/90 to-purple-dark/60" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px]"
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
              <Building2 className="w-4 h-4 text-primary-light" />
              <span className="text-sm font-bold text-primary-light uppercase tracking-wider">
                Boost Your Bottom Line
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-gradient-animated">COMMERCIAL</span>
              <br />
              <span className="text-white">INSULATION</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl"
            >
              Don't let inefficient insulation drain your profits. We'll help you create a workspace that's <span className="text-primary-light font-bold">comfortable, efficient, and cost-effective</span>.
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
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-primary to-primary-dark rounded-full text-white font-black text-lg shadow-2xl shadow-primary/40 group"
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
                { value: "30-50%", label: "Cost Reduction" },
                { value: "2-5 yr", label: "Typical ROI" },
                { value: "20+", label: "Years Protection" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-primary-light">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 bg-gradient-to-b from-purple-dark to-purple relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="text-white">IS INEFFICIENT INSULATION</span>{" "}
                <span className="text-gradient">DRAINING YOUR PROFITS?</span>
              </h2>

              <p className="text-lg text-white/70 leading-relaxed mb-6">
                As a business owner or manager, you know that success hinges on efficiency, productivity, and profitability. However, many commercial spaces fall short when it comes to <span className="text-primary-light font-bold">energy efficiency and comfort</span>.
              </p>

              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Inadequate insulation leads to fluctuating temperatures, sky-high energy costs, and decreased team member productivity. That's why you need Desert Spray Foaming on your side.
              </p>

              <div className="space-y-4">
                {[
                  "Sky-high energy bills eating into profits",
                  "Uncomfortable temperatures driving away customers",
                  "Employees distracted by hot or cold conditions",
                  "HVAC systems working overtime",
                  "Condensation issues in metal buildings",
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
                src="/images/metal-building-insulation-contractor-odessa-tx.jpg"
                alt="Metal building insulation contractor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-32 bg-purple relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            <span className="text-white">COMMERCIAL</span>{" "}
            <span className="text-gradient">APPLICATIONS</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {applications.map((app, idx) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all text-center"
              >
                <Building2 className="w-8 h-8 text-primary-light mx-auto mb-3" />
                <span className="text-white font-bold">{app}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-32 bg-gradient-to-b from-purple to-purple-dark relative">
        <div className="absolute inset-0 grid-overlay opacity-20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              <span className="text-white">WHY INSULATE YOUR</span>{" "}
              <span className="text-gradient">COMMERCIAL SPACE?</span>
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
                  className="glass rounded-3xl p-8 border border-white/10 hover:border-primary/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-dark/20 border border-primary/30 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary-light" />
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
      <section className="py-32 bg-purple-dark relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/spray-foam-insulation-metal-building-seminole-tx.jpg"
                alt="Commercial insulation process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/60 to-transparent" />
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
                    title: "Schedule a Consultation",
                    desc: "Get in touch with our team to discuss your commercial insulation needs. We'll assess your building and understand your specific requirements."
                  },
                  {
                    step: "02",
                    title: "Expert Assessment",
                    desc: "Our experienced professionals will assess your commercial space and recommend the best solution for your business, with a detailed quote."
                  },
                  {
                    step: "03",
                    title: "Enjoy the Benefits",
                    desc: "Once installation is complete, enjoy the benefits of a well-insulated commercial space—lower energy bills, improved comfort, and happier employees."
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
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center font-black text-white text-lg shadow-lg shadow-primary/30">
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
      <section className="py-32 bg-gradient-to-b from-purple-dark to-purple relative">
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
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary" />
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
            BOOST YOUR BOTTOM LINE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Say goodbye to energy waste and hello to a thriving business. Get your free commercial insulation consultation today.
          </motion.p>

          <motion.a
            href="tel:432-209-9154"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center gap-3 px-10 py-6 bg-white rounded-full text-primary-dark font-black text-xl shadow-2xl group"
          >
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            CALL 432-209-9154
          </motion.a>
        </div>
      </section>
    </>
  );
}
