"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Understanding Open-Cell vs Closed-Cell Spray Foam",
    excerpt: "Learn the key differences between open-cell and closed-cell spray foam insulation, and discover which option is best for your project.",
    image: "/images/closed-cell-foam-insulation-contractor-west-texas.jpg",
    date: "December 15, 2024",
    readTime: "5 min read",
    slug: "open-cell-vs-closed-cell",
    category: "Education",
  },
  {
    title: "How Spray Foam Insulation Saves You Money",
    excerpt: "Discover how investing in quality spray foam insulation can reduce your energy bills by 30-50% and pay for itself over time.",
    image: "/images/attic-spray-foam-insulation-lubbock-tx.jpg",
    date: "December 10, 2024",
    readTime: "4 min read",
    slug: "spray-foam-saves-money",
    category: "Tips",
  },
  {
    title: "The Importance of Attic Insulation in West Texas",
    excerpt: "With extreme temperature swings in West Texas, proper attic insulation is crucial for maintaining comfort and efficiency year-round.",
    image: "/images/attic-insulation-contractor-andrews-county-tx.jpg",
    date: "December 5, 2024",
    readTime: "6 min read",
    slug: "attic-insulation-west-texas",
    category: "Local",
  },
  {
    title: "Commercial Insulation: Boost Your Business Efficiency",
    excerpt: "Learn how proper commercial insulation can improve employee comfort, reduce energy costs, and increase your bottom line.",
    image: "/images/commercial-spray-foam-insulation-metal-building-midland-tx.jpg",
    date: "November 28, 2024",
    readTime: "5 min read",
    slug: "commercial-insulation-efficiency",
    category: "Commercial",
  },
  {
    title: "Signs Your Home Needs New Insulation",
    excerpt: "Is your insulation underperforming? Look out for these telltale signs that it might be time for an upgrade.",
    image: "/images/insulation-removal-service-gaines-county-tx.jpg",
    date: "November 20, 2024",
    readTime: "4 min read",
    slug: "signs-need-new-insulation",
    category: "Tips",
  },
  {
    title: "Shipping Container Insulation: What You Need to Know",
    excerpt: "Converting a shipping container? Here's everything you need to know about insulating these unique structures for comfort.",
    image: "/images/shipping-container-2lb-closed-cell-foam-insulation-texas.jpg",
    date: "November 15, 2024",
    readTime: "7 min read",
    slug: "shipping-container-insulation",
    category: "Specialty",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-32">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px]"
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
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-bold text-orange-400 uppercase tracking-wider">
                Our Blog
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-white">INSULATION</span>{" "}
              <span className="text-gradient">INSIGHTS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70"
            >
              Tips, guides, and industry news to help you make informed decisions about your insulation needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-950 relative">
        <div className="absolute inset-0 grid-overlay opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold bg-orange-500 text-white rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-white/60 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-orange-400 font-bold text-sm group-hover:gap-4 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-zinc-950 relative">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/60 mb-8">
              Get the latest insulation tips and industry news delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-bold shadow-lg shadow-orange-500/30"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
