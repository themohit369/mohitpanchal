"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;
import "./testimonials.css";
import "../ui/action-link.css";

/* =====================================================
   DATA
===================================================== */

const testimonials = [
  {
    quote:
      "Mohit has a great work ethic - always reliable and never missed a deadline!",
    name: "Keri Lynn Engel",
    role: "Program Manager",
    company: "Exploding Topics",
  },
  {
    quote:
      "I enjoyed working with Mohit on the WPBeginner team. He consistently delivered clear, well-designed graphics that complemented the articles I and the team were writing. He stayed on schedule, was easy to work with, and always came across as approachable and responsive.",
    name: "Adrian Try",
    role: "WordPress Content Writer",
    company: "Awesome Motive, Inc.",
  },
  {
    quote:
      "Working with Mohit was always a great experience. He has a strong eye for design, communicates clearly, and brings a thoughtful, user-focused approach to his work. He's collaborative, reliable, and genuinely easy to work with.",
    name: "Mohammad Shohag",
    role: "UI/UX Designer",
    company: "SeedProd · Awesome Motive Inc.",
  },
  {
    quote:
      "I had a fantastic experience working with Mohit on our design projects. He consistently delivers creative, user-focused UI/UX solutions and always communicates clearly and professionally. Mohit's collaborative approach and attention to detail make him a pleasure to work with.",
    name: "Kishan Jasani",
    role: "Senior Web Engineer",
    company: "WordPress VIP Projects",
  },
];

/* =====================================================
   MOTION VARIANTS
===================================================== */

const headingContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.1,
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

const testimonialReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 52,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      ease,
    },
  },
};

const quoteReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      delay: 0.12,
      ease,
    },
  },
};

const authorReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      delay: 0.22,
      ease,
    },
  },
};

/* =====================================================
   COMPONENT
===================================================== */

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="testimonials" className="testimonials-section">
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
          <span>Testimonials</span>

          <span>(01 — 04)</span>

          <span>Selected Feedback</span>
        </motion.div>

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          className="testimonials-heading-wrap"
          variants={reduceMotion ? undefined : headingContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          <h2 className="testimonials-heading">
            <span className="testimonials-heading-mask">
              <motion.span
                className="testimonials-heading-reveal"
                variants={reduceMotion ? undefined : headingLine}
              >
                What it&apos;s like
              </motion.span>
            </span>

            <span className="testimonials-heading-mask">
              <motion.span
                className="testimonials-heading-reveal"
                variants={reduceMotion ? undefined : headingLine}
              >
                working together.
              </motion.span>
            </span>
          </h2>
        </motion.div>

        {/* =====================================================
            TESTIMONIALS GRID
        ===================================================== */}

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              className={`testimonial-item testimonial-item-${index + 1}`}
              variants={reduceMotion ? undefined : testimonialReveal}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.16,
              }}
            >
              {/* TOP DIVIDER */}

              <motion.div
                className="testimonial-item-line"
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
                  amount: 0.35,
                }}
                transition={{
                  duration: 1.05,
                  ease,
                }}
              />

              {/* TOP */}

              <div className="testimonial-top">
                <motion.span
                  className="testimonial-index"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 8,
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

                <motion.span
                  className="testimonial-mark"
                  aria-hidden="true"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.9,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.5,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: 0.1,
                    ease,
                  }}
                >
                  “
                </motion.span>
              </div>

              {/* QUOTE */}

              <motion.blockquote
                className="testimonial-quote"
                variants={reduceMotion ? undefined : quoteReveal}
              >
                {testimonial.quote}
              </motion.blockquote>

              {/* AUTHOR */}

              <motion.div
                className="testimonial-author"
                variants={reduceMotion ? undefined : authorReveal}
              >
                <p className="testimonial-name">{testimonial.name}</p>

                <div className="testimonial-author-meta">
                  <p>{testimonial.role}</p>

                  <p>{testimonial.company}</p>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
