"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShowroomScene from "./showroom/ShowroomScene";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* Chapter labels that appear at specific scroll positions */
const chapters = [
  { start: 0.0, end: 0.12, text: "Welcome to BRAND", sub: "A World of Luxury Textiles" },
  { start: 0.18, end: 0.32, text: "Step Inside", sub: "Where Every Detail Speaks Quality" },
  { start: 0.45, end: 0.6, text: "Discover the Showroom", sub: "Curated Collections. Timeless Craftsmanship." },
  { start: 0.7, end: 0.85, text: "Your Journey Begins", sub: "Experience Fabric Like Never Before" },
];

export default function ShowroomExperience() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [chapterIdx, setChapterIdx] = useState(-1);
  const [chapterOpacity, setChapterOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(true); // default true to avoid flash
  const [ready, setReady] = useState(false);

  /* Detect mobile for fallback */
  useEffect(() => {
    const mobile = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);
    setReady(true);
  }, []);

  /* GSAP ScrollTrigger */
  useEffect(() => {
    if (!ready || isMobile || !scrollContainerRef.current) return;

    // Small delay to ensure DOM is painted
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const trigger = ScrollTrigger.create({
      trigger: scrollContainerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      onUpdate: (self) => {
        progressRef.current = self.progress;

        /* Fade-out overlay at the end */
        if (self.progress > 0.92) {
          setOverlayOpacity(Math.min((self.progress - 0.92) / 0.08, 1));
        } else {
          setOverlayOpacity(0);
        }

        /* Chapter labels */
        let found = -1;
        for (let i = 0; i < chapters.length; i++) {
          const c = chapters[i];
          if (self.progress >= c.start && self.progress <= c.end) {
            const mid = (c.start + c.end) / 2;
            const halfDur = (c.end - c.start) / 2;
            const dist = Math.abs(self.progress - mid) / halfDur;
            setChapterOpacity(1 - dist * dist);
            found = i;
            break;
          }
        }
        setChapterIdx(found);
        if (found === -1) setChapterOpacity(0);
      },
    });

    return () => {
      clearTimeout(timer);
      trigger.kill();
    };
  }, [ready, isMobile]);

  /* Not ready yet - show nothing to avoid flash */
  if (!ready) return null;

  /* Mobile – Cinematic image-based scroll experience */
  if (isMobile) {
    const mobileSlides = [
      { img: "/images/hero.png", title: "Welcome to BRAND", sub: "A World of Luxury Textiles", align: "center" as const },
      { img: "/images/silk.png", title: "Step Inside", sub: "Where Every Detail Speaks Quality", align: "center" as const },
      { img: "/images/craftsmanship.png", title: "The Showroom", sub: "Curated Collections. Timeless Craftsmanship.", align: "center" as const },
      { img: "/images/product_silk.png", title: "Your Journey Begins", sub: "Experience Fabric Like Never Before", align: "center" as const },
    ];

    return (
      <div className="relative bg-charcoal">
        {mobileSlides.map((slide, i) => (
          <div key={i} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background image with parallax-like zoom */}
            <img
              src={slide.img}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover scale-110"
              style={{ filter: "brightness(0.45) saturate(0.9)" }}
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-6 max-w-lg">
              {i === 0 && (
                <div className="flex items-center gap-4 mb-8 justify-center">
                  <span className="w-10 h-px bg-gold/60" />
                  <span className="text-gold text-[10px] font-semibold tracking-[0.25em] uppercase">Virtual Showroom</span>
                  <span className="w-10 h-px bg-gold/60" />
                </div>
              )}

              <h2 className="font-serif text-4xl sm:text-5xl text-ivory mb-4 tracking-tight leading-[1.1]">
                {slide.title}
              </h2>
              <p className="text-ivory/60 font-light text-sm leading-relaxed">
                {slide.sub}
              </p>

              {/* Gold divider */}
              <div className="mt-8 mx-auto w-12 h-px bg-gold/40" />
            </div>

            {/* Scroll hint on first slide */}
            {i === 0 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <span className="text-ivory/40 text-[9px] uppercase tracking-[0.2em] mb-2">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-gold/50 to-transparent animate-pulse" />
              </div>
            )}

            {/* Slide number indicator */}
            <div className="absolute bottom-8 right-6 z-20 text-ivory/20 font-serif text-sm">
              {String(i + 1).padStart(2, "0")} / {String(mobileSlides.length).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Scroll container – drives the 3D camera */}
      <div ref={scrollContainerRef} style={{ height: "500vh", position: "relative" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Three.js Canvas */}
          <Canvas
            dpr={1}
            camera={{ fov: 55, near: 0.1, far: 60, position: [0, 4, 28] }}
            gl={{ antialias: false, alpha: false, powerPreference: "default", stencil: false, depth: true }}
            style={{ width: "100%", height: "100%" }}
            onCreated={({ gl }) => {
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.toneMappingExposure = 1.2;
            }}
          >
            <ShowroomScene progress={progressRef} />
          </Canvas>

          {/* Chapter Labels Overlay */}
          {chapterIdx >= 0 && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
              style={{ opacity: chapterOpacity, transition: "opacity 0.1s" }}
            >
              <h2 className="font-serif text-5xl md:text-7xl text-ivory text-center tracking-tight drop-shadow-[0_2px_30px_rgba(0,0,0,0.5)]">
                {chapters[chapterIdx].text}
              </h2>
              <p className="text-ivory/70 text-sm md:text-base font-light mt-4 tracking-widest uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                {chapters[chapterIdx].sub}
              </p>
            </div>
          )}

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none" style={{ opacity: 1 - overlayOpacity }}>
            <span className="text-ivory/60 text-[10px] uppercase tracking-[0.2em] mb-2">Scroll to explore</span>
            <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
          </div>

          {/* Fade-out overlay to transition into static site */}
          <div
            className="absolute inset-0 bg-ivory pointer-events-none z-20"
            style={{ opacity: overlayOpacity }}
          />
        </div>
      </div>
    </>
  );
}
