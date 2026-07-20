"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "../ui/action-link.css";

import "./about.css";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const headingLines = [
  "I believe great products happen",
  "when clarity, systems, & human",
  "intuition work together.",
];

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? ["0%", "0%", "0%"] : ["-6%", "0%", "6%"],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [1.06, 1.035, 1.06],
  );

  return (
    <section id="about" className="about-section">
      <div className="site-container">
        {/* =====================================================
            META
        ===================================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.6,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="section-meta"
        >
          <span>About</span>

          <span>Independent Designer</span>

          <span>Based in India</span>
        </motion.div>

        {/* =====================================================
            HEADING
        ===================================================== */}

        {/* =====================================================
    HEADING
===================================================== */}

        <motion.div
          className="about-heading-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <h2 className="about-heading">
            {headingLines.map((line, index) => (
              <span
                key={line}
                className="about-heading-line about-heading-mask"
              >
                <motion.span
                  className="about-heading-reveal"
                  variants={{
                    hidden: reduceMotion
                      ? {
                          y: "0%",
                          opacity: 1,
                        }
                      : {
                          y: "105%",
                          opacity: 1,
                        },

                    visible: {
                      y: "0%",
                      opacity: 1,

                      transition: {
                        duration: 1.05,
                        delay: index * 0.1,
                        ease,
                      },
                    },
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>
        </motion.div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="about-content site-grid">
          {/* =====================================================
              IMAGE
          ===================================================== */}

          <motion.div
            ref={imageRef}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 56,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 1.1,
              ease,
            }}
            className="about-image-column"
          >
            <div className="media-frame about-image">
              <motion.div
                className="about-image-parallax"
                style={{
                  y: imageY,
                  scale: imageScale,
                }}
              >
                <Image
                  src="/images/about/about-image.png"
                  alt="Portrait of Mohit Panchal"
                  fill
                  sizes="
                    (max-width: 480px) 100vw,
                    (max-width: 768px) 75vw,
                    (max-width: 1024px) 34vw,
                    25vw
                  "
                  className="about-image-inner"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* =====================================================
              COPY
          ===================================================== */}

          <div className="about-copy-column">
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 32,
                    }
              }
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
              className="about-copy"
            >
              <p className="body-text">
                Over the past 8+ years, I&apos;ve helped startups, SaaS
                companies, and product teams design digital experiences that
                feel effortless, intentional, and meaningful. My approach
                combines product thinking, interface craft, and front-end
                awareness to create experiences that not only look good but also
                perform in the real world.
              </p>
            </motion.div>

            {/* =====================================================
                ACTIONS
            ===================================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease,
              }}
              className="about-actions"
            >
              <Link href="/about" className="action-link">
                <span>More about me</span>
                <span className="action-link-arrow">↗</span>
              </Link>

              <a href="/resume.pdf" className="action-link action-link-muted">
                <span>Resume</span>
                <span className="action-link-arrow">↗</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
