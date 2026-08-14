"use client";

import "./hero.css";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import "../ui/action-link.css";

const heroEase = [0.16, 1, 0.3, 1] as const;

const titleLines = [
  {
    text: "Product Designer +",
    className: "",
  },
  {
    text: "UI/UX Designer.",
    className: "",
  },
  {
    text: "I design digital",
    className: "hero-title-line-indent-2",
  },
  {
    text: "products.",
    className: "hero-title-line-last",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  /* =====================================================
     SCROLL PROGRESS
  ===================================================== */

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* =====================================================
     TITLE PARALLAX
  ===================================================== */

  const titleY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 12, 36]);

  /* =====================================================
     IMAGE PARALLAX
  ===================================================== */

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0, 18, 46, 84],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [1, 1.02, 1.05],
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.62, 0.82, 1],
    [1, 1, 0.9, 0.45],
  );

  /* =====================================================
     BOTTOM CONTENT PARALLAX
  ===================================================== */

  const bottomY = useTransform(scrollYProgress, [0, 0.65, 1], [0, 6, 20]);

  const bottomOpacity = useTransform(
    scrollYProgress,
    [0, 0.68, 0.88, 1],
    [1, 1, 0.75, 0.25],
  );

  return (
    <section ref={heroRef} className="hero-section">
      <div className="site-container hero-container">
        {/* =====================================================
            MAIN TITLE
        ===================================================== */}

        <motion.h1
          className="hero-title"
          style={
            reduceMotion
              ? undefined
              : {
                  y: titleY,
                }
          }
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.08,
              },
            },
          }}
          initial={reduceMotion ? false : "hidden"}
          animate="show"
        >
          {titleLines.map((line) => (
            <span
              key={line.text}
              className={`hero-title-line hero-title-mask ${line.className}`}
            >
              <motion.span
                className="hero-title-reveal"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 24,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.8,
                  ease: heroEase,
                }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* =====================================================
            BOTTOM CONTENT
        ===================================================== */}

        <motion.div
          className="hero-bottom site-grid"
          style={
            reduceMotion
              ? undefined
              : {
                  y: bottomY,
                  opacity: bottomOpacity,
                }
          }
        >
          {/* DESCRIPTION */}

          <motion.div
            className="hero-description"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 22,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.48,
              ease: heroEase,
            }}
          >
            <p className="body-text">
              I enjoy turning complex product ideas into digital experiences
              that feel simple and useful. I work across UI/UX, design systems,
              and front-end prototyping, collaborating with startups and product
              teams worldwide.
            </p>
          </motion.div>

          {/* ACTIONS */}

          <motion.div
            className="hero-actions"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 22,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.58,
              ease: heroEase,
            }}
          >
            <a href="#contact" className="action-link">
              <span>Let&apos;s work together</span>
              <span className="action-link-arrow">↗</span>
            </a>

            <a href="#work" className="action-link action-link-muted">
              <span>View case studies</span>
              <span className="action-link-arrow">↓</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          PORTRAIT
      ===================================================== */}

      <motion.div
        className="hero-image"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                scale: 1.035,
                y: 24,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.25,
          delay: 0.14,
          ease: heroEase,
        }}
      >
        <motion.div
          className="hero-image-motion"
          style={
            reduceMotion
              ? undefined
              : {
                  y: imageY,
                  scale: imageScale,
                  opacity: imageOpacity,
                }
          }
        >
          <Image
            src="/images/hero/mohit-hero.png"
            alt="Mohit Panchal, Mohit Panchal Designer, product and UI/UX designer"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 52vw"
            className="hero-image-inner"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
