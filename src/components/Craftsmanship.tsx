"use client";

import { motion } from "framer-motion";

export default function Craftsmanship() {
  return (
    <section id="quality" className="relative py-24 md:py-32 bg-charcoal text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.img 
          initial={{ y: -50 }}
          whileInView={{ y: 50 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "linear" }}
          src="/images/craftsmanship.png" 
          alt="Loom background" 
          className="w-full h-[120%] object-cover opacity-30 mix-blend-luminosity"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
        <motion.h4 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gold uppercase tracking-widest text-xs md:text-sm mb-4 md:mb-6"
        >
          The Art of Weaving
        </motion.h4>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl lg:text-7xl mb-8 md:mb-10 leading-tight"
        >
          Precision in Every Thread
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-ivory/70 font-light text-lg md:text-xl leading-relaxed mb-12"
        >
          We source only the finest raw materials globally, combining them with master craftsmanship. 
          Our quality control process spans from initial fiber selection to the final finishing touches, 
          ensuring a textile experience that is unmatched in durability, texture, and visual appeal.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="px-8 py-4 border border-gold text-gold uppercase tracking-widest text-sm hover:bg-gold hover:text-charcoal transition-all"
        >
          Learn About Our Process
        </motion.button>
      </div>
    </section>
  );
}
