"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

import "./services.css";
import "../ui/action-link.css";

/* =====================================================
   DATA
===================================================== */

const services = [
  "UI/UX Design",
  "Design Systems",
  "Product Design",
  "UX Strategy",
];

/* =====================================================
   MOTION VARIANTS
===================================================== */

const introContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const headingLine: Variants = {
  hidden: {
    y: "108%",
  },

  visible: {
    y: "0%",

    transition: {
      duration: 1.05,
      ease,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.85,
      ease,
    },
  },
};

const rowReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.85,
      ease,
    },
  },
};

/* =====================================================
   COMPONENT
===================================================== */

export default function WhatIDo() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="services-section">
      <div className="site-container">
        {/* =====================================================
            META
        ===================================================== */}

        <motion.div
          className="section-meta"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
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
        >
          <span>What I Do</span>

          <span>Services</span>

          <span>Selected Capabilities</span>
        </motion.div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="services-layout site-grid">
          {/* =====================================================
              INTRO
          ===================================================== */}

          <motion.div
            className="services-intro"
            variants={reduceMotion ? undefined : introContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {/* HEADING */}

            <h2 className="services-heading">
              <span className="services-heading-mask">
                <motion.span
                  className="services-heading-reveal services-heading-indent"
                  variants={reduceMotion ? undefined : headingLine}
                >
                  Design that
                </motion.span>
              </span>

              <span className="services-heading-mask">
                <motion.span
                  className="services-heading-reveal"
                  variants={reduceMotion ? undefined : headingLine}
                >
                  creates impact.
                </motion.span>
              </span>
            </h2>

            {/* DESCRIPTION */}

            <motion.p
              className="body-text services-description"
              variants={reduceMotion ? undefined : fadeUp}
            >
              From user research to pixel-perfect interfaces, I turn complex
              problems into digital products that are clear, scalable, and
              intuitive to use.
            </motion.p>
          </motion.div>

          {/* =====================================================
              SERVICES LIST
          ===================================================== */}

          <div className="services-list">
            {services.map((service, index) => (
              <motion.div
                className="service-row"
                key={service}
                variants={reduceMotion ? undefined : rowReveal}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
              >
                {/* DIVIDER */}

                <motion.div
                  className="service-row-line"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          scaleX: 0,
                        }
                  }
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 1,
                    ease,
                  }}
                />

                <div className="service-content">
                  {/* NUMBER */}

                  <motion.span
                    className="service-number"
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 10,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: 0.08,
                      ease,
                    }}
                  >
                    ({String(index + 1).padStart(2, "0")})
                  </motion.span>

                  <div className="service-main">
                    {/* TITLE */}

                    <h3 className="service-title">{service}</h3>

                    {/* ARROW */}

                    <span className="service-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
