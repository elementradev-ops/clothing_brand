"use client";

import { motion } from "framer-motion";

const slides = [
  { img: "/images/hero.png", title: "Welcome to BRAND", sub: "A World of Luxury Textiles" },
  { img: "/images/silk.png", title: "Step Inside", sub: "Where Every Detail Speaks Quality" },
  { img: "/images/craftsmanship.png", title: "The Showroom", sub: "Curated Collections. Timeless Craftsmanship." },
  { img: "/images/product_silk.png", title: "Your Journey Begins", sub: "Experience Fabric Like Never Before" },
];

export default function MobileShowroom() {
  return (
    <div className="relative bg-charcoal">
      {slides.map((slide, i) => (
        <div key={i} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Background image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover scale-110"
            style={{ filter: "brightness(0.4) saturate(0.85)" }}
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal/80 z-10" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 text-center px-8 max-w-md"
          >
            {i === 0 && (
              <div className="flex items-center gap-4 mb-8 justify-center">
                <span className="w-10 h-px bg-gold/60" />
                <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase">Virtual Showroom</span>
                <span className="w-10 h-px bg-gold/60" />
              </div>
            )}

            <h2 className="font-serif text-4xl text-ivory mb-4 tracking-tight leading-[1.1]">
              {slide.title}
            </h2>
            <p className="text-ivory/50 font-light text-sm leading-relaxed">
              {slide.sub}
            </p>

            <div className="mt-8 mx-auto w-12 h-px bg-gold/30" />
          </motion.div>

          {/* Scroll hint on first slide */}
          {i === 0 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
              <span className="text-ivory/30 text-[9px] uppercase tracking-[0.2em] mb-2">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
            </div>
          )}

          {/* Slide counter */}
          <div className="absolute bottom-8 right-6 z-20 text-ivory/15 font-serif text-sm">
            {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>
        </div>
      ))}
    </div>
  );
}
