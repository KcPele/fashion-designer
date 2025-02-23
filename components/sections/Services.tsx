'use client';

import { motion } from 'framer-motion';
import {
  Crown,
  Palette,
  ShirtIcon,
  Leaf,
  Scissors,
  HeartHandshake,
  Star,
  Sparkles,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Crown,
    title: 'Royal Ceremonial Wear',
    description: 'Bespoke traditional attire for ceremonies and celebrations',
    features: ['All sizes XS-4XL', 'Custom embroidery', 'Premium fabrics'],
    price: 'From ₦85,000',
    accent: 'from-amber-500 to-rose-500',
  },
  {
    icon: Palette,
    title: 'Adire & Ankara Studio',
    description: 'Contemporary designs with traditional fabric techniques',
    features: ['Hand-dyed textiles', 'Modern patterns', 'Sustainable process'],
    price: 'From ₦45,000',
    accent: 'from-blue-500 to-purple-500',
  },
  {
    icon: ShirtIcon,
    title: 'Modern Native Fusion',
    description: 'Blend of traditional and contemporary styles',
    features: ['Gender-neutral options', 'Corporate wear', 'Cultural elements'],
    price: 'From ₦55,000',
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Leaf,
    title: 'Sustainable Collection',
    description: 'Eco-friendly traditional wear using local materials',
    features: ['Organic fabrics', 'Ethical production', 'Zero waste design'],
    price: 'From ₦65,000',
    accent: 'from-indigo-500 to-cyan-500',
  },
  {
    icon: Scissors,
    title: 'Custom Alterations',
    description: 'Expert modifications for perfect fit and style',
    features: ['Size inclusive', 'Style updates', 'Restoration'],
    price: 'From ₦15,000',
    accent: 'from-pink-500 to-rose-500',
  },
  {
    icon: HeartHandshake,
    title: 'Cultural Style Advisory',
    description: 'Professional guidance on traditional fashion',
    features: ['Personal styling', 'Event planning', 'Wardrobe curation'],
    price: 'From ₦25,000',
    accent: 'from-violet-500 to-purple-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen bg-gradient-to-b from-black to-amber-950 py-24">
      {/* Animated Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pattern-grid-lg opacity-10"
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Floating Icons */}
          <div className="flex justify-center gap-6 mb-12">
            {[Crown, Star, Sparkles, Scissors].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.6 }
                }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-rose-500/20 backdrop-blur-sm flex items-center justify-center border border-amber-500/30"
              >
                <Icon className="w-8 h-8 text-amber-500" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl font-display font-bold gradient-text mb-6">
              Our Royal Services
            </h2>
            <p className="text-xl text-amber-100/80 max-w-2xl mx-auto">
              Experience the perfect blend of traditional craftsmanship and modern sophistication
              with our premium services
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="relative overflow-hidden bg-black/40 backdrop-blur-sm border-amber-500/20 hover:border-amber-500/40 transition-all duration-500">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-5`} />
                
                {/* Content */}
                <div className="relative p-8 space-y-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.accent} bg-opacity-10 flex items-center justify-center`}
                  >
                    <service.icon className="w-8 h-8 text-amber-500" />
                  </motion.div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-amber-100/70">{service.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-amber-100/60"
                      >
                        <Star className="w-4 h-4 text-amber-500 mr-2" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-4 border-t border-amber-500/20">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-2xl font-bold text-amber-500"
                    >
                      {service.price}
                    </motion.div>
                  </div>

                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}