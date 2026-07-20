"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import GridOverlay from "@/components/layout/GridOverlay";

export default function SiteChrome() {
  const pathname = usePathname();

  const isPosterShop =
    pathname === "/posters" || pathname.startsWith("/posters/");

  if (isPosterShop) {
    return null;
  }

  return (
    <>
      <Navbar />
      <GridOverlay />
    </>
  );
}
