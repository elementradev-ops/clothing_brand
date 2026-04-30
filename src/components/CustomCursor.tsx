"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const outline = cursorOutlineRef.current;

    if (!dot || !outline) return;

    const onMouseMove = (e: MouseEvent) => {
      // Dot follows exactly
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      // Outline lags slightly
      gsap.to(outline, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const onMouseEnterInteractive = () => {
      gsap.to(dot, { scale: 0, duration: 0.2 });
      gsap.to(outline, { scale: 1.5, backgroundColor: "rgba(201, 162, 39, 0.1)", borderColor: "#C9A227", duration: 0.3 });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(outline, { scale: 1, backgroundColor: "transparent", borderColor: "rgba(26,26,26,0.3)", duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Attach to interactive elements
    const addListeners = () => {
      const interactives = document.querySelectorAll("a, button, input, select, [role='button']");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };

    addListeners();

    // Re-attach listeners when DOM changes (simple implementation)
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div 
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div 
        ref={cursorOutlineRef}
        className="fixed top-0 left-0 w-10 h-10 border border-charcoal/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-colors duration-300"
      />
    </>
  );
}
