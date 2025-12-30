"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, MapPin, Building2, Home, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceAreas = [
  {
    name: "Lubbock, TX",
    href: "/service-areas/lubbock-tx",
    county: "Lubbock County",
    description: "Serving Lubbock and surrounding communities with professional spray foam insulation services.",
    cities: ["Lubbock", "Wolfforth", "Slaton", "Idalou", "Shallowater"],
  },
  {
    name: "Terry County, TX",
    href: "/service-areas/terry-county-tx",
    county: "Terry County",
    description: "Quality insulation services for Brownfield and all of Terry County.",
    cities: ["Brownfield", "Meadow", "Wellman", "Tokio", "Union"],
  },
  {
    name: "Yoakum County, TX",
    href: "/service-areas/yoakum-county-tx",
    county: "Yoakum County",
    description: "Expert insulation contractors serving Plains, Denver City, and Yoakum County.",
    cities: ["Plains", "Denver City", "Bronco", "Sligo"],
  },
  {
    name: "Gaines County, TX",
    href: "/service-areas/gaines-county-tx",
    county: "Gaines County",
    description: "Your local insulation experts in Seminole, Seagraves, and throughout Gaines County.",
    cities: ["Seminole", "Seagraves", "Loop", "Cedar Lake"],
    isHeadquarters: true,
  },
];

const additionalAreas = [
  "Midland, TX",
  "Odessa, TX",
  "Big Spring, TX",
  "Lamesa, TX",
  "Andrews, TX",
  "Hobbs, NM",
  "Levelland, TX",
  "Snyder, TX",
];

const stats = [
  { icon: MapPin, value: "100+", label: "Mile Service Radius" },
  { icon: Home, value: "500+", label: "Homes Insulated" },
  { icon: Building2, value: "50+", label: "Commercial Projects" },
  { icon: Users, value: "1000+", label: "Happy Customers" },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/spray-foam-insulation-metal-building-seminole-tx.jpg"
            alt="Spray foam insulation service areas in West Texas"
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
                West Texas Coverage
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-white">OUR</span>{" "}
              <span className="text-gradient-animated">SERVICE AREAS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl"
            >
              Proudly serving <span className="text-orange-400 font-bold">Seminole, TX</span> and surrounding West Texas communities with professional spray foam insulation services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zinc-950 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Service Areas */}
      <section className="py-32 bg-gradient-to-b from-zinc-950 to-black relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-white">PRIMARY</span>{" "}
              <span className="text-gradient">SERVICE AREAS</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We provide comprehensive insulation services throughout West Texas. Click on any area to learn more about our services in your location.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceAreas.map((area, idx) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={area.href}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className={`glass rounded-3xl p-8 border transition-all h-full ${
                      area.isHeadquarters
                        ? "border-orange-500/50 bg-orange-500/5"
                        : "border-white/10 hover:border-orange-500/30"
                    }`}
                  >
                    {area.isHeadquarters && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 mb-4">
                        <span className="text-xs font-bold text-orange-400 uppercase">Headquarters</span>
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-1">{area.name}</h3>
                        <p className="text-orange-400 text-sm font-medium">{area.county}</p>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-orange-400" />
                      </div>
                    </div>

                    <p className="text-white/70 mb-6">{area.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {area.cities.map((city) => (
                        <span
                          key={city}
                          className="px-3 py-1 text-xs font-medium text-white/60 bg-white/5 rounded-full"
                        >
                          {city}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-orange-400 font-bold group">
                      <span>View Area Details</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-white">WE ALSO SERVE</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              In addition to our primary service areas, we provide insulation services to these nearby communities.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {additionalAreas.map((area, idx) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-6 py-3 glass rounded-full border border-white/10 hover:border-orange-500/30 transition-colors"
              >
                <span className="text-white font-medium">{area}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/50 mt-8"
          >
            Don't see your area? Call us at <a href="tel:432-209-9154" className="text-orange-400 font-bold hover:underline">432-209-9154</a> - we may still be able to serve you!
          </motion.p>
        </div>
      </section>

      {/* Why Location Matters */}
      <section className="py-32 bg-gradient-to-b from-black to-zinc-950 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="text-white">WHY WEST TEXAS NEEDS</span>{" "}
                <span className="text-gradient">QUALITY INSULATION</span>
              </h2>

              <p className="text-lg text-white/70 leading-relaxed mb-6">
                West Texas is known for its extreme weather conditions. Summer temperatures regularly exceed 100°F, while winter nights can plunge below freezing. This dramatic temperature swing puts enormous strain on your HVAC system and can lead to sky-high energy bills.
              </p>

              <p className="text-lg text-white/70 leading-relaxed mb-8">
                Spray foam insulation is the ideal solution for our unique climate. It creates an airtight seal that blocks heat transfer, keeping your home cool in summer and warm in winter. Our local expertise means we understand exactly what West Texas properties need.
              </p>

              <div className="glass-orange rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-3">Local Climate Challenges We Address</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Extreme summer heat (100°F+)</li>
                  <li>• Cold winter nights (below freezing)</li>
                  <li>• High winds and dust infiltration</li>
                  <li>• Significant day-to-night temperature swings</li>
                  <li>• Humidity and moisture control issues</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              <Image
                src="/images/closed-cell-spray-foam-insulation-west-texas.jpg"
                alt="Spray foam insulation for West Texas climate"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
            SERVING YOUR AREA?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Contact Desert Spray Foaming today for a free consultation. We're proud to serve West Texas with professional insulation services.
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
