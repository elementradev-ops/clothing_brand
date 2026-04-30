"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Years of Heritage" },
  { value: "5000+", label: "Clients Globally" },
  { value: "200+", label: "Exclusive Collections" },
  { value: "100%", label: "Quality Assured" },
];

export default function BrandStory() {
  return (
    <section id="about" className="py-24 md:py-32 bg-ivory text-charcoal">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="text-gold uppercase tracking-widest text-sm mb-4">Our Heritage</h4>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              A Legacy of Uncompromising Quality
            </h2>
            <div className="space-y-6 text-charcoal/70 font-light text-lg">
              <p>
                For over two decades, Brand has been synonymous with the finest textiles. We blend traditional craftsmanship with modern innovation to create fabrics that define luxury.
              </p>
              <p>
                From the selection of raw materials to the final weave, our meticulous attention to detail ensures that every yard of fabric meets the highest standards of the global fashion industry. Trusted by elite designers and premium retailers worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="font-serif text-4xl text-charcoal mb-2">{stat.value}</div>
                  <div className="text-sm uppercase tracking-wider text-charcoal/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] lg:h-[600px] w-full mt-10 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gold/10 -translate-x-4 translate-y-4"></div>
            <img 
              src="/images/craftsmanship.png" 
              alt="Artisan Weaving" 
              className="absolute inset-0 w-full h-full object-cover shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
