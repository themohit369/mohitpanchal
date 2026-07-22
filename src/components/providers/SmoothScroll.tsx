"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export let lenisInstance: Lenis | null = null;

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    lenisInstance = new Lenis({
      duration: 1.15,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
      anchors: {
        offset: -80,
        duration: 1.2,
      },
    });

    let frameId: number;

    const raf = (time: number) => {
      lenisInstance?.raf(time);

      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}
