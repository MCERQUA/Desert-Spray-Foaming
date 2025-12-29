"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, MapPin, Check, Building2, Home, Sparkles, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { icon: Sparkles, title: "Spray Foam Insulation", href: "/services/spray-foam-insulation" },
  { icon: Home, title: "Attic Insulation", href: "/services/attic-insulation" },
  { icon: Building2, title: "Commercial Insulation", href: "/services/commercial-insulation" },
  { icon: Trash2, title: "Insulation Removal", href: "/services/insulation-removal" },
];

const benefits = [
  "30-50% reduction in energy bills",
  "Superior moisture and vapor barrier",
  "20+ years of lasting performance",
  "Improved indoor air quality",
  "Noise reduction",
  "Increased property value",
];

export default function LubbockPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/attic-spray-foam-insulation-lubbock-tx.jpg"
            alt="Spray foam insulation in Lubbock TX"
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
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                Service Area
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-white">SPRAY FOAM INSULATION IN</span>
              <br />
              <span className="text-gradient-animated">LUBBOCK, TX</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl"
            >
              Your trusted insulation contractor serving Lubbock and Lubbock County. Experience <span className="text-orange-400 font-bold">comfort, savings, and quality</span> with Desert Spray Foaming.
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
                CALL FOR FREE QUOTE
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
        </div>
      </section>

      {/* About Lubbock Section */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-950 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="text-white">SERVING</span>{" "}
                <span className="text-gradient">LUBBOCK, TEXAS</span>
              </h2>

              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Lubbock, Texas, a city steeped in rich history and vibrant community spirit, stands as a beacon of opportunity and warmth in the heart of the Lone Star State. Established in the late 19th century, Lubbock has blossomed from its humble beginnings as a small farming town into a bustling hub of commerce, education, and culture.
              </p>

              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Nestled on the high plains of West Texas, Lubbock boasts a unique blend of small-town charm and big-city amenities, making it an ideal place to call home. With extreme temperature swings throughout the year, proper insulation is essential for Lubbock homeowners and businesses.
              </p>

              <div className="glass-orange rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">Why Lubbock Needs Quality Insulation</h3>
                <p className="text-white/70 text-sm">
                  Lubbock's climate features hot summers with temperatures over 100°F and cold winters that can drop below freezing. Spray foam insulation creates an effective barrier against these extremes, keeping your home comfortable year-round.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/open-cell-spray-foam-wall-insulation-lubbock-county-tx.jpg"
                alt="Spray foam insulation in Lubbock County"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-zinc-950 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-16"
          >
            <span className="text-white">OUR SERVICES IN</span>{" "}
            <span className="text-gradient">LUBBOCK</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link href={service.href}>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="glass rounded-2xl p-6 border border-white/10 hover:border-orange-500/30 transition-all text-center h-full"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center mb-4 mx-auto">
                        <Icon className="w-7 h-7 text-orange-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{service.title}</h3>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
                src="/images/residential-spray-foam-insulation-terry-county-tx.jpg"
                alt="Residential spray foam insulation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="text-white">WHY CHOOSE</span>{" "}
                <span className="text-gradient">DESERT SPRAY FOAMING?</span>
              </h2>

              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-white/80 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            READY TO GET STARTED IN LUBBOCK?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Contact Desert Spray Foaming today for a free consultation and quote. We're proud to serve Lubbock and the surrounding areas.
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
