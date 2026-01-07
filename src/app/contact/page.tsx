"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setFormStatus("error");
      setErrorMessage("Something went wrong. Please try again or call us directly.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-dark via-purple to-purple-dark" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]"
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
              <Mail className="w-4 h-4 text-primary-light" />
              <span className="text-sm font-bold text-primary-light uppercase tracking-wider">
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
      <section className="py-20 bg-gradient-to-b from-purple-dark to-purple relative">
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/50">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary-light uppercase tracking-wider mb-1">
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
                ) : formStatus === "error" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-6">
                      <AlertCircle className="w-10 h-10 text-red-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Oops!</h4>
                    <p className="text-white/60 mb-6">{errorMessage}</p>
                    <button
                      onClick={() => setFormStatus("idle")}
                      className="px-6 py-3 bg-white/10 rounded-xl text-white font-bold hover:bg-white/20 transition-all"
                    >
                      Try Again
                    </button>
                  </motion.div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    action="/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-bold text-white/80 mb-2">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-bold text-white/80 mb-2">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-white/80 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-white/80 mb-2">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        placeholder="(432) 555-0123"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-white/80 mb-2">Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="Spray Foam Insulation">Spray Foam Insulation</option>
                        <option value="Attic Insulation">Attic Insulation</option>
                        <option value="Commercial Insulation">Commercial Insulation</option>
                        <option value="Insulation Removal">Insulation Removal</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-white/80 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-white font-black text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all disabled:opacity-70"
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
      <section className="py-20 bg-purple">
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
                <MapPin className="w-12 h-12 text-primary-light mx-auto mb-4" />
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
