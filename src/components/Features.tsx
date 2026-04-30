"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Leaf, Box, Truck, PenTool, Award } from "lucide-react";

const features = [
  { icon: Award, title: "Unrivaled Quality", desc: "Rigorous testing and artisanal inspection for absolutely flawless textiles." },
  { icon: Leaf, title: "Ethical Origins", desc: "Sustainable practices and fair trade woven into every fiber." },
  { icon: Box, title: "Global Scale", desc: "Seamless scalable production tailored for elite fashion houses." },
  { icon: Truck, title: "White-Glove Logistics", desc: "Reliable, expedited distribution across global fashion capitals." },
  { icon: PenTool, title: "Bespoke Curation", desc: "Custom weaving and precision color matching for your vision." },
  { icon: CheckCircle2, title: "The Signature Finish", desc: "Exquisite textures reserved exclusively for high-end garments." },
];

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-ivory relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gold uppercase tracking-[0.2em] text-[10px] md:text-xs font-semibold mb-4 md:mb-6"
          >
            The Brand Standard
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal mb-6 md:mb-8 tracking-tight"
          >
            Excellence Without Compromise
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="h-px w-24 bg-gold/50 mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white p-10 lg:p-14 border border-beige/40 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(201,162,39,0.05)] hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col items-center text-center"
              >
                {/* Subtle hover glow ring */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none border border-gold/10" />

                <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-gold/20 scale-100 group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute inset-2 rounded-full border border-gold/40 scale-100 group-hover:scale-90 transition-transform duration-700 ease-out" />
                  <Icon className="w-8 h-8 text-charcoal/80 group-hover:text-gold transition-colors duration-500 relative z-10 stroke-[1.5]" />
                </div>
                
                <h3 className="font-serif text-2xl text-charcoal mb-4">{item.title}</h3>
                <p className="text-charcoal/60 font-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
