"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Spray Foam Insulation", href: "/services/spray-foam-insulation" },
    { name: "Attic Insulation", href: "/services/attic-insulation" },
    { name: "Commercial Insulation", href: "/services/commercial-insulation" },
    { name: "Insulation Removal", href: "/services/insulation-removal" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  areas: [
    { name: "Seminole, TX", href: "/service-areas/seminole" },
    { name: "Lubbock, TX", href: "/service-areas/lubbock" },
    { name: "Midland, TX", href: "/service-areas/midland" },
    { name: "Odessa, TX", href: "/service-areas/odessa" },
    { name: "Big Spring, TX", href: "/service-areas/big-spring" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[200px]" />
        <div className="absolute inset-0 grid-overlay opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/desert-spray-foam-logo.webp"
                alt="Desert Spray Foaming"
                width={200}
                height={70}
                className="h-16 w-auto"
              />
            </Link>

            <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
              Your premier choice for superior spray foam insulation in Seminole, TX, and surrounding areas — delivering comfort and quality every time.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="tel:432-209-9154" className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <span className="font-bold">432-209-9154</span>
              </a>

              <a href="mailto:klass@desertsprayfoaming.com" className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5 text-white/70" />
                </div>
                <span className="font-medium">klass@desertsprayfoaming.com</span>
              </a>

              <div className="flex items-center gap-3 text-white/70">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white/70" />
                </div>
                <span>150 FM 1429, Seminole, TX 79360</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61556003634087"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-blue-500/30 transition-colors"
              >
                <Facebook className="w-6 h-6 text-white" />
              </motion.a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {footerLinks.areas.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Desert Spray Foaming LLC. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center hover:bg-orange-500/30 transition-colors group"
          >
            <ArrowUp className="w-5 h-5 text-orange-400 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
