"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-40 bg-ivory text-center relative overflow-hidden">
      {/* Very faint background elements for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-beige/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="text-gold text-6xl md:text-8xl font-serif absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 opacity-20 select-none">
            &ldquo;
          </div>
          
          <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl text-charcoal leading-[1.4] mb-12 md:mb-16 relative z-10 tracking-tight">
            "Their silk collection transformed our latest couture line. The drape, the sheen, and the consistency across bulk orders are simply unparalleled in the global fashion industry."
          </h3>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-charcoal/5 mb-6 overflow-hidden border border-charcoal/10 shadow-lg">
              <img src="/images/showroom.png" alt="Profile" className="w-full h-full object-cover grayscale opacity-80" />
            </div>
            <h5 className="uppercase tracking-[0.2em] text-xs font-bold text-charcoal mb-2">Elena Rostova</h5>
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase">Creative Director, Haute Maison Paris</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
