"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import MobileShowroom from "./MobileShowroom";

const DesktopShowroom = dynamic(
  () => import("@/components/ShowroomExperience"),
  { ssr: false, loading: () => <div className="h-screen w-full bg-charcoal" /> }
);

export default function ShowroomWrapper() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // Still loading — show placeholder
  if (isMobile === null) {
    return <div className="h-screen w-full bg-charcoal" />;
  }

  return isMobile ? <MobileShowroom /> : <DesktopShowroom />;
}
