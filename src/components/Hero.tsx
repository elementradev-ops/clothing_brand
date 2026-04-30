"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/30 to-charcoal/80 z-10" />
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
          src="/images/hero.png"
          alt="Luxury Textile Showroom" 
          className="w-full h-full object-cover origin-center opacity-80 mix-blend-luminosity"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="w-12 h-px bg-gold/50" />
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Maison de Tissus</span>
          <span className="w-12 h-px bg-gold/50" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.1] mb-8 tracking-tight"
        >
          Crafted For Elegance. <br className="hidden md:block" /> Woven For Legacy.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-ivory/70 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed"
        >
          Uncompromising quality meets heritage craftsmanship. Discover a curated world of premium textiles defining the future of luxury fashion.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link href="/collections" className="group relative px-10 py-4 bg-gold text-white overflow-hidden">
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="relative z-10 text-xs font-semibold tracking-[0.15em] uppercase">Explore Collection</span>
          </Link>
          <Link href="/#contact" className="group relative px-10 py-4 border border-ivory/30 text-ivory overflow-hidden transition-colors hover:border-gold">
            <span className="relative z-10 text-xs font-semibold tracking-[0.15em] uppercase group-hover:text-gold transition-colors duration-500">Private Viewing</span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-gold/0 via-gold/50 to-gold/0 z-20 origin-bottom"
      />
    </section>
  );
}
