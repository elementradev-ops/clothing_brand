"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const navScrolled = isHome ? scrolled : true;

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = ["Home", "Collections", "Products", "Quality"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          navScrolled || isOpen
            ? "bg-ivory/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gold/10 py-3" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className={`font-serif text-2xl font-bold tracking-[0.2em] uppercase transition-colors duration-500 z-50 ${navScrolled || isOpen ? "text-charcoal" : "text-ivory"}`}>
            BRAND
          </Link>
          
          <div className={`hidden md:flex gap-10 text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-500 ${navScrolled ? "text-charcoal/80" : "text-ivory/90"}`}>
            {navLinks.map((item) => {
              const href = item === "Home" ? "/" : item === "Quality" ? "/#quality" : `/${item.toLowerCase()}`;
              return (
                <Link key={item} href={href} className="relative group overflow-hidden pb-1">
                  <span className="group-hover:text-gold transition-colors duration-300">{item}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </Link>
              );
            })}
          </div>

          <button className={`hidden md:block px-8 py-3 text-xs font-semibold tracking-[0.15em] uppercase border transition-all duration-500 relative overflow-hidden group ${
            navScrolled 
              ? "border-charcoal/20 text-charcoal hover:border-gold" 
              : "border-ivory/30 text-ivory hover:border-gold"
          }`}>
            <span className="relative z-10 group-hover:text-ivory transition-colors duration-500">Request Catalogue</span>
            <div className="absolute inset-0 bg-gold transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
          </button>

          {/* Hamburger Icon for Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative z-50 transition-colors duration-500 ${navScrolled || isOpen ? "text-charcoal" : "text-ivory"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ivory/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((item, i) => {
                const href = item === "Home" ? "/" : item === "Quality" ? "/#quality" : `/${item.toLowerCase()}`;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link 
                      href={href} 
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-3xl md:text-4xl text-charcoal hover:text-gold transition-colors tracking-wide"
                    >
                      {item}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: navLinks.length * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <button 
                  onClick={() => setIsOpen(false)}
                  className="px-10 py-4 bg-gold text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-gold/90 transition-colors"
                >
                  Request Catalogue
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
