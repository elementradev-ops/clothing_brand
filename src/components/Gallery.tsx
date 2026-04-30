"use client";

import { motion } from "framer-motion";

const galleryItems = [
  { src: "/images/hero.png", label: "Italian Linen", span: "col-span-1 md:col-span-2 row-span-1 md:row-span-2" },
  { src: "/images/silk.png", label: "Heritage Silk", span: "col-span-1 row-span-1" },
  { src: "/images/showroom.png", label: "The Atelier", span: "col-span-1 row-span-1" },
  { src: "/images/product_brocade.png", label: "Royal Weave Collection", span: "col-span-1 md:col-span-2 row-span-1" },
  { src: "/images/cotton.png", label: "Signature Cotton", span: "col-span-1 row-span-1 md:row-span-2" },
  { src: "/images/craftsmanship.png", label: "Artisanal Looms", span: "col-span-1 md:col-span-2 row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-charcoal text-ivory">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.2em] text-xs font-semibold mb-6"
            >
              The Archives
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight"
            >
              A Visual Diary of <br className="hidden md:block" /> Master Craftsmanship
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <button className="text-xs font-semibold tracking-[0.15em] uppercase border-b border-gold text-gold hover:text-ivory hover:border-ivory transition-colors pb-1">
              View Full Gallery
            </button>
          </motion.div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden group cursor-none ${item.span}`}
            >
              {/* Image container for zoom */}
              <div className="absolute inset-0 transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                <img 
                  src={item.src} 
                  alt={item.label} 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 transition-all duration-700 group-hover:mix-blend-normal group-hover:opacity-100"
                />
              </div>
              
              {/* Luxury dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700 z-10" />
              
              {/* Framing borders */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-colors duration-700 z-20 pointer-events-none" />

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 p-8 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <span className="inline-block px-3 py-1 bg-gold/10 backdrop-blur-md border border-gold/30 text-gold text-[10px] uppercase tracking-[0.2em] mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  Featured
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl text-ivory opacity-90">
                  {item.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
