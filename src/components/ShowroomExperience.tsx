"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShowroomScene from "./showroom/ShowroomScene";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const timer = setTimeout(() => ScrollTrigger.refresh(), 100);

    const trigger = ScrollTrigger.create({
      trigger: scrollContainerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      onUpdate: (self) => {
        progressRef.current = self.progress;

        if (self.progress > 0.92) {
          setOverlayOpacity(Math.min((self.progress - 0.92) / 0.08, 1));
        } else {
          setOverlayOpacity(0);
        }

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
  }, []);

  return (
    <div ref={scrollContainerRef} style={{ height: "500vh", position: "relative" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <Canvas
          dpr={1}
          camera={{ fov: 55, near: 0.1, far: 60, position: [0, 4, 28] }}
          gl={{ antialias: false, alpha: false, stencil: false, depth: true }}
          style={{ width: "100%", height: "100%" }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.2;
          }}
        >
          <ShowroomScene progress={progressRef} />
        </Canvas>

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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-none" style={{ opacity: 1 - overlayOpacity }}>
          <span className="text-ivory/60 text-[10px] uppercase tracking-[0.2em] mb-2">Scroll to explore</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
        </div>

        <div
          className="absolute inset-0 bg-ivory pointer-events-none z-20"
          style={{ opacity: overlayOpacity }}
        />
      </div>
    </div>
  );
}
