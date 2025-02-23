"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Crown, Star, Sparkles, Scissors } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black to-amber-950">
      {/* Animated Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pattern-grid-lg opacity-10"
      />

      {/* Main Content */}
      <div className="relative container mx-auto px-4">
        <div className="min-h-screen grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[700px] w-full">
              {/* Main Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden border-8 border-amber-500/20"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/dress_32.jpg"
                    alt="Nigerian Royal Fashion"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </motion.div>

              {/* Floating Images */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden border-8 border-amber-500/20"
              >
                <Image
                  src="/images/dress_31.jpg"
                  alt="Traditional Attire"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 10, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-amber-500/20 backdrop-blur-xl"
              />
              <motion.div
                animate={{
                  rotate: [0, -10, 0],
                  x: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full bg-rose-500/20 backdrop-blur-xl"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="relative z-10 lg:pl-12">
            {/* Floating Icons */}
            <div className="flex gap-6 mb-12">
              {[Crown, Star, Sparkles, Scissors].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-rose-500/20 backdrop-blur-sm flex items-center justify-center border border-amber-500/30"
                >
                  <Icon className="w-8 h-8 text-amber-500" />
                </motion.div>
              ))}
            </div>

            {/* Text Content */}
            <motion.div {...fadeInUp} className="space-y-8">
              <h1 className="text-7xl font-display font-bold leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="block text-amber-500"
                >
                  Elegance in
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block text-white"
                >
                  Every Stitch
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-xl text-amber-100/80 max-w-xl"
              >
                Discover the artistry of Nigerian fashion, where traditional
                craftsmanship meets contemporary design. Each piece tells a
                story of heritage and innovation.
              </motion.p>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap gap-6"
              >
                <Link href="#portfolio">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-12 py-8 text-xl rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105"
                  >
                    View Collection
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-500/30 text-amber-500 hover:bg-amber-500/10 px-12 py-8 text-xl rounded-full transition-all duration-300 hover:scale-105"
                >
                  Book Appointment
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="grid grid-cols-3 gap-8 pt-12 border-t border-amber-500/20"
              >
                {[
                  { number: "2K+", label: "Designs Created" },
                  { number: "15+", label: "Years of Excellence" },
                  { number: "100%", label: "Client Satisfaction" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-amber-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-amber-100/60">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
