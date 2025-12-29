"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus("success");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px]"
          />
          <div className="absolute inset-0 grid-overlay opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-orange mb-8"
            >
              <Mail className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                Get In Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-white">CONTACT</span>{" "}
              <span className="text-gradient">US</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70"
            >
              Ready to get started? Reach out for a free consultation and quote.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-950 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black mb-8">
                <span className="text-white">LET'S</span>{" "}
                <span className="text-gradient">TALK</span>
              </h2>

              <p className="text-white/70 leading-relaxed mb-10">
                Whether you have questions about our services, want to schedule a consultation, or need a free quote, we're here to help. Contact us today and let's discuss how we can make your space more comfortable and energy-efficient.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                <motion.a
                  href="tel:432-209-9154"
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-6 glass-orange rounded-2xl p-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/50">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-orange-400 uppercase tracking-wider mb-1">
                      Call Us
                    </div>
                    <div className="text-2xl font-black text-white">432-209-9154</div>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:klass@desertsprayfoaming.com"
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-6 glass rounded-2xl p-6 border border-white/10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white/60 uppercase tracking-wider mb-1">
                      Email Us
                    </div>
                    <div className="text-lg font-bold text-white">klass@desertsprayfoaming.com</div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-6 glass rounded-2xl p-6 border border-white/10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white/60 uppercase tracking-wider mb-1">
                      Visit Us
                    </div>
                    <div className="text-lg font-bold text-white">150 FM 1429, Seminole, TX 79360</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-6 glass rounded-2xl p-6 border border-white/10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white/60 uppercase tracking-wider mb-1">
                      Business Hours
                    </div>
                    <div className="text-lg font-bold text-white">Mon-Fri: 7AM - 6PM</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-3xl p-8 md:p-10 border border-white/10">
                <h3 className="text-2xl font-black text-white mb-2">Request a Free Quote</h3>
                <p className="text-white/60 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                {formStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-white/60">We'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-white/80 mb-2">First Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-white/80 mb-2">Last Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white/80 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white/80 mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                        placeholder="(432) 555-0123"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white/80 mb-2">Service Needed</label>
                      <select
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="spray-foam">Spray Foam Insulation</option>
                        <option value="attic">Attic Insulation</option>
                        <option value="commercial">Commercial Insulation</option>
                        <option value="removal">Insulation Removal</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white/80 mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-black text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all disabled:opacity-70"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="relative h-[400px] rounded-3xl overflow-hidden glass">
            <Image
              src="/images/shipping-container-insulation-exterior-west-texas.jpg"
              alt="Service area"
              fill
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Serving West Texas</h3>
                <p className="text-white/60">Seminole, Lubbock, Midland, Odessa & surrounding areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
