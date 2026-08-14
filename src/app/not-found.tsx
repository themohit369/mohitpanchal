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

  const duration = reduceMotion ? 0 : 0.8;
  const introDelay = reduceMotion ? 0 : 0.25;
  const copyDelay = reduceMotion ? 0 : 0.45;
  const actionsDelay = reduceMotion ? 0 : 0.6;

  return (
    <main className="not-found-page">
      <div className="site-container">
        <div className="section-line" />

        <section
          className="editorial-marquee nf-marquee"
          aria-label="404 Page Not Found"
        >
          <div className="editorial-marquee-track" aria-hidden="true">
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
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration, delay: introDelay, ease }}
          >
            <motion.p
              className="not-found-copy body-text"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: copyDelay, ease }}
            >
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </motion.p>

            <motion.div
              className="not-found-actions"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: actionsDelay, ease }}
            >
              <Link href="/" className="action-link">
                <span>Back Home</span>
                <span className="action-link-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>

              <Link href="/#work" className="action-link">
                <span>Selected Work</span>
                <span className="action-link-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <div className="section-line" />
      </div>
    </main>
  );
}
