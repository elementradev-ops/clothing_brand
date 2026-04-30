"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Signature() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section ref={containerRef} className="relative h-screen md:h-[120vh] w-full flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-charcoal/50 z-10 mix-blend-multiply" />
        <img 
          src="/images/product_silk.png" 
          alt="Silk Texture" 
          className="w-full h-[140%] object-cover opacity-60"
        />
      </motion.div>

      {/* Floating particles simulation overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 z-20 bg-radial-gradient from-transparent via-charcoal/40 to-charcoal pointer-events-none" />

      <motion.div 
        style={{ opacity }}
        className="relative z-30 text-center px-6 max-w-5xl"
      >
        <h4 className="text-gold uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-6 md:mb-8">
          The Art of Textiles
        </h4>
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-ivory leading-[1.1] mb-8 md:mb-10 mix-blend-screen">
          Every Thread <br /> Tells A Story
        </h2>
        <p className="text-ivory/60 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
          A seamless blend of ancestral heritage and modern innovation. 
          We craft not just fabrics, but foundations for sartorial masterpieces.
        </p>
      </motion.div>
    </section>
  );
}
