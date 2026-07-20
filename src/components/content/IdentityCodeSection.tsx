"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import "./identity-code-section.css";
import "../ui/action-link.css";

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
            MAIN CONTENT
        ===================================================== */}

        <div className="identity-grid">
          {/* CONTENT */}

          <div className="identity-content">
            <motion.span
              className="identity-label"
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
              A book I&apos;m writing
            </motion.span>

            <motion.h2
              className="identity-title"
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
                amount: 0.35,
              }}
              transition={{
                duration: 0.9,
                ease,
              }}
            >
              The Identity Code
            </motion.h2>

            <motion.p
              className="identity-statement"
              initial={{
                opacity: 0,
                y: 24,
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
                delay: 0.06,
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
                y: 24,
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
                delay: 0.12,
                ease,
              }}
            >
              An exploration of identity, belief, memory, attention and the
              hidden systems that quietly shape our behaviour, decisions and
              repeated reality.
            </motion.p>

            <motion.div
              className="identity-status"
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
                amount: 0.7,
              }}
              transition={{
                duration: 0.7,
                delay: 0.16,
                ease,
              }}
            >
              <span className="identity-status-dot" />
              <span>Currently writing</span>
            </motion.div>
          </div>

          {/* BOOK COVER */}

          <motion.div
            className="identity-book"
            initial={{
              opacity: 0,
              y: 56,
              rotate: 1.5,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease,
            }}
          >
            <motion.div
              className="identity-book-cover"
              whileHover={{
                rotateY: -1,
                rotateZ: 0.25,
                y: -6,
              }}
              transition={{
                duration: 0.6,
                ease,
              }}
            >
              <Image
                src="/images/identity-code/identity-code-cover.jpg"
                alt="The Identity Code book cover"
                fill
                sizes="(max-width: 768px) 82vw, 420px"
                className="identity-book-image"
              />
            </motion.div>
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
