"use client";

import { motion } from "framer-motion";
import { Crown, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Define types for our portfolio items
interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

// Create gallery items array
const galleryItems: GalleryItem[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Dress ${i + 1}`,
  image: `/images/dress_${i + 1}.jpg`,
}));

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const buffer = 50;
    const bottomReached = scrollHeight - (scrollTop + clientHeight) < buffer;
    setIsAtBottom(bottomReached);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-gradient-to-b from-background to-muted/30 py-16"
    >
      <div className="container mx-auto h-full">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex justify-center gap-4 mb-6">
            {[Crown, Star, Sparkles].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transform hover:scale-110 transition-transform"
              >
                <Icon className="w-6 h-6 text-primary" />
              </motion.div>
            ))}
          </div>
          <h2 className="text-5xl font-bold gradient-text mb-6">
            Royal Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of handcrafted Nigerian fashion
            pieces.
          </p>
        </motion.div>

        {/* Gallery container - fixed height */}
        <div className="relative h-[600px] md:h-[800px]">
          <div
            className="absolute inset-0 overflow-y-auto custom-scrollbar"
            onScroll={handleScroll}
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
            >
              {galleryItems.map((galleryItem) => (
                <motion.div
                  key={galleryItem.id}
                  variants={item}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted"
                  onClick={() => setSelectedImage(galleryItem)}
                >
                  <div className="relative w-full h-full">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <Image
                        src={galleryItem.image}
                        alt={galleryItem.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        quality={85}
                      />
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold">
                      {galleryItem.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          {!isAtBottom && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce pointer-events-none">
              <div className="h-12 w-6 border-2 border-primary rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-primary rounded-full animate-scroll" />
              </div>
            </div>
          )}
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full aspect-[3/4] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-4xl w-full aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                  quality={90}
                  priority
                />
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
