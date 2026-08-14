"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import "./identity-code-section.css";

const ease = [0.16, 1, 0.3, 1] as const;

export default function IdentityCodeSection() {
  return (
    <section className="identity-section">
      <div className="site-container">
        {/* =====================================================
            META
        ===================================================== */}

        <motion.div
          className="section-meta identity-meta"
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
        >
          <span>Writing project</span>
          <span>Book in progress</span>
          <span>2026</span>
        </motion.div>

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="identity-grid">
          {/* CONTENT */}

          <div className="identity-content">
            <motion.h2
              className="identity-title"
              initial={{
                opacity: 0,
                y: 28,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 0.85,
                ease,
              }}
            >
              The Identity Code
            </motion.h2>

            <motion.p
              className="identity-statement"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.8,
                delay: 0.05,
                ease,
              }}
            >
              You don&apos;t manifest what you want.
              <br />
              You manifest who you are.
            </motion.p>

            <motion.p
              className="identity-description"
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease,
              }}
            >
              An exploration of identity, belief, memory, attention and the
              hidden systems that quietly shape our behaviour, decisions and
              repeated reality.
            </motion.p>

            {/* STATUS */}

            <motion.div
              className="identity-status"
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.7,
              }}
              transition={{
                duration: 0.7,
                delay: 0.14,
                ease,
              }}
            >
              <span className="identity-status-dot" />
              <span>Currently writing · Coming soon</span>
            </motion.div>

            {/* PREVIEW */}

            <motion.a
              href="/images/book/the-identity-code-preview-edition.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="identity-preview-link"
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.7,
              }}
              transition={{
                duration: 0.7,
                delay: 0.18,
                ease,
              }}
            >
              <span>Read preview edition</span>
              <span className="identity-preview-arrow" aria-hidden="true">
                ↗
              </span>
            </motion.a>
          </div>

          {/* =====================================================
              BOOK
          ===================================================== */}

          <motion.div
            className="identity-book"
            initial={{
              opacity: 0,
              y: 36,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.95,
              delay: 0.08,
              ease,
            }}
          >
            <div className="identity-book-cover">
              <Image
                src="/images/book/cover.webp"
                alt="The Identity Code book cover by Mohit Panchal"
                fill
                priority={false}
                sizes="(max-width: 768px) 86vw, (max-width: 1024px) 34vw, 410px"
                className="identity-book-image"
              />
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div className="identity-footer-line" />
      </div>
    </section>
  );
}
