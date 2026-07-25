"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import GridOverlay from "@/components/layout/GridOverlay";

export default function SiteChrome() {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <GridOverlay />
    </>
  );
}
