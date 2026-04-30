"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-charcoal relative overflow-hidden flex items-center justify-center min-h-[60vh] md:min-h-[80vh]">
      {/* Animated soft spotlight background */}
      <div className="absolute inset-0 spotlight-glow opacity-60 pointer-events-none mix-blend-screen" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-gold)_0.5px,transparent_0.5px)] bg-[size:30px_30px] opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block mb-8 relative">
            <span className="w-16 h-px bg-gold absolute top-1/2 -left-20 hidden sm:block" />
            <h4 className="text-gold uppercase tracking-[0.3em] text-xs font-semibold">
              The Next Step
            </h4>
            <span className="w-16 h-px bg-gold absolute top-1/2 -right-20 hidden sm:block" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-ivory mb-8 tracking-tight leading-[1.1]">
            Luxury Begins With <br /> Exceptional Fabric.
          </h2>
          
          <p className="text-ivory/60 text-lg md:text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Reserve a private viewing of our latest collections or request a curated swatch book tailored to your design house.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/collections" className="group relative px-12 py-5 bg-gold text-white overflow-hidden w-full sm:w-auto">
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <span className="relative z-10 text-xs font-semibold tracking-[0.2em] uppercase">Request Catalogue</span>
            </Link>
            
            <Link href="#" className="group relative px-12 py-5 border border-ivory/20 text-ivory overflow-hidden transition-all duration-500 hover:border-gold w-full sm:w-auto">
              <div className="absolute inset-0 bg-gold/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-xs font-semibold tracking-[0.2em] uppercase group-hover:text-gold transition-colors duration-500">Contact Sales</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
