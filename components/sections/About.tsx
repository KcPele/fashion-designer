"use client";

import { motion } from "framer-motion";
import { Scissors, Star, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding pattern-bg">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-4xl transform rotate-3"></div>
            <div className="relative aspect-square rounded-4xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3"
                alt="Master Nigerian tailor at work"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex space-x-4">
              {[Scissors, Star, Heart, Sparkles].map((Icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transform hover:scale-110 transition-transform"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              ))}
            </div>
            <h2 className="text-5xl font-bold gradient-text">
              Master Nigerian Craftsmanship
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With over 15 years of excellence in crafting exquisite Nigerian
              native wear, we bring authenticity and elegance to every piece.
              Our expertise spans traditional Agbada, Aso-oke, and modern
              Senator styles.
            </p>
            <ul className="space-y-6">
              {[
                "Specialists in traditional Nigerian styles",
                "Premium fabric selection including Guinea brocade and Aso-oke",
                "Expert measurements and fittings",
                "Authentic craftsmanship and attention to detail",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
