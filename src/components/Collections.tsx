"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const collections = [
  { id: 1, name: "Premium Cotton", image: "/images/cotton.png", tag: "Everyday Luxury" },
  { id: 2, name: "Heritage Silk", image: "/images/silk.png", tag: "Bridal & Occasion" },
  { id: 3, name: "Organic Linen", image: "/images/linen.png", tag: "Breathable Comfort" },
  { id: 4, name: "Designer Blends", image: "/images/hero.png", tag: "Exclusive Range" },
];

export default function Collections() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-beige/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h4 className="text-gold uppercase tracking-widest text-sm mb-4">Our Fabrics</h4>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
            Featured Collections
          </h2>
          <p className="text-charcoal/70 font-light text-lg">
            Explore our curated selection of premium fabrics, designed to inspire and elevate your next creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {collections.map((item, index) => (
            <Link href="/products" key={item.id} className="block">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden h-[400px] md:h-[500px] cursor-pointer"
              >
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-700 z-10" />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/50 m-4 transition-colors duration-700 z-20 pointer-events-none" />

                <div className="absolute bottom-0 left-0 p-8 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="text-gold uppercase tracking-widest text-xs mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-3xl text-ivory">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
