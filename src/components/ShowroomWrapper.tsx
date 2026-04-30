"use client";

import dynamic from "next/dynamic";

const ShowroomExperience = dynamic(
  () => import("@/components/ShowroomExperience"),
  { ssr: false }
);

export default function ShowroomWrapper() {
  return <ShowroomExperience />;
}
