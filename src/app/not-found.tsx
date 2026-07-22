"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import "./not-found.css";
import "@/components/ui/action-link.css";

const ease = [0.16, 1, 0.3, 1] as const;

const marqueeItems = [
  "404",
  "Page Not Found",
  "404",
  "Page Not Found",
  "404",
  "Page Not Found",
];

const COLS = 36;
const ROWS = 14;

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  const [showPixels, setShowPixels] = useState(true);

  useEffect(() => {
    if (reduceMotion) return;

    const timer = setTimeout(() => {
      setShowPixels(false);
    }, 1450);

    return () => clearTimeout(timer);
  }, [reduceMotion]);

  const pixels = useMemo(
    () => Array.from({ length: COLS * ROWS }, (_, index) => index),
    [],
  );

  return (
    <main className="not-found-page">
      <div className="site-container">
        <div className="section-line" />

        {/* ======================================
            MARQUEE
        ====================================== */}

        <section className="editorial-marquee nf-marquee">
          <div className="editorial-marquee-track">
            {[0, 1].map((group) => (
              <div key={group} className="editorial-marquee-group">
                {marqueeItems.map((item, index) => (
                  <div key={`${group}-${index}`} className="nf-marquee-item">
                    <span className="editorial-marquee-text">{item}</span>

                    {index !== marqueeItems.length - 1 && (
                      <span className="editorial-marquee-dot">•</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <div className="section-line" />

        <section className="not-found-content">
          <motion.div
            className="not-found-inner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <motion.p
              className="not-found-copy body-text"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              The page you're looking for doesn't exist or has been moved.
            </motion.p>

            <motion.div
              className="not-found-actions"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href="/" className="action-link">
                <span>Back Home</span>
                <span className="action-link-arrow">↗</span>
              </Link>

              <Link href="/#work" className="action-link">
                <span>Selected Work</span>
                <span className="action-link-arrow">↗</span>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <div className="section-line" />
      </div>
    </main>
  );
}
