"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

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

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="not-found-page">
      <div className="site-container">
        <div className="section-line" />

        {/* =========================================
            MARQUEE
        ========================================= */}

        <section className="editorial-marquee">
          <div className="editorial-marquee-track">
            {[0, 1].map((group) => (
              <div className="editorial-marquee-group" key={group}>
                {marqueeItems.map((item, index) => (
                  <span key={`${group}-${index}`}>
                    <span className="editorial-marquee-text">{item}</span>

                    {index !== marqueeItems.length - 1 && (
                      <span className="editorial-marquee-dot">•</span>
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <div className="section-line" />

        {/* =========================================
            CONTENT
        ========================================= */}

        <section className="not-found-section">
          <div className="site-grid">
            <motion.div
              className="not-found-left"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 32,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease,
              }}
            >
              <h1 className="not-found-heading">
                <span className="heading-mask">
                  <span className="heading-reveal">404</span>
                </span>
              </h1>
            </motion.div>

            <motion.div
              className="not-found-right"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 36,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease,
              }}
            >
              <p className="body-text">
                The page you're looking for couldn't be found.
              </p>

              <div className="not-found-actions">
                <Link href="/" className="action-link">
                  <span>Back Home</span>
                  <span className="action-link-arrow">↖</span>
                </Link>

                <Link href="/#work" className="action-link action-link-muted">
                  <span>View Selected Work</span>

                  <span className="action-link-arrow">↓</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="section-line" />
      </div>
    </main>
  );
}
