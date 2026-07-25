"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import "./experience.css";
import "../ui/action-link.css";

const ease = [0.16, 1, 0.3, 1] as const;

/* =====================================================
   DATA
===================================================== */

const experiences = [
  {
    period: "2023 — Present",
    company: "Freelance / Independent",
    role: "UX/UI Designer · Freelance · Remote",
  },
  {
    period: "2021 — 2023",
    company: "Awesome Motive Inc.",
    role: "UI/UX Designer · Remote",
  },
  {
    period: "2018 — 2021",
    company: "IdeaBox Creations",
    role: "UI/UX Designer · Remote",
  },
  {
    period: "2016 — 2018",
    company: "Webyot Technologies",
    role: "Graphic Web Designer · Full-time",
  },
];

/* =====================================================
   TYPES
===================================================== */

type ExperienceProps = {
  variant?: "home" | "about";
};

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

const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 44,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease,
    },
  },
};

/* =====================================================
   COMPONENT
===================================================== */

export default function Experience({ variant = "home" }: ExperienceProps) {
  const isAbout = variant === "about";
  const content = isAbout
    ? {
        meta: "Career timeline",
        label: "",
        heading: "A decade of learning by designing and building.",
        summary:
          "My experience spans product design, UI/UX, web experiences and design systems, with every role shaping how I think about clarity, structure and useful digital products.",
      }
    : {
        meta: "Selected Experience",
        label: "",
        heading: "10+ years of designing digital experiences.",
        summary:
          "Working across product design, UI/UX, design systems and front-end thinking to turn complex problems into simple, useful digital products.",
      };

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className={`experience-section ${
        isAbout ? "experience-section-about" : ""
      }`}
    >
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
          <span>Experience</span>

          <span>(2016 — Present)</span>

          <span>{content.meta}</span>
        </motion.div>

        {/* =====================================================
            LAYOUT
        ===================================================== */}

        <div className="experience-layout site-grid">
          {/* =====================================================
              INTRO
          ===================================================== */}

          <div className="experience-intro">
            <motion.div
              className="experience-intro-sticky"
              variants={reduceMotion ? undefined : introContainer}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >
              {/* =================================================
                  ABOUT VARIANT
              ================================================= */}

              {isAbout ? (
                <>
                  <motion.div
                    className="experience-about-heading-wrap"
                    variants={reduceMotion ? undefined : fadeUp}
                  >
                    <h2 className="experience-heading">{content.heading}</h2>
                  </motion.div>
                </>
              ) : (
                <h2 className="experience-heading">
                  <span className="experience-heading-mask">
                    <motion.span
                      className="experience-heading-reveal"
                      variants={reduceMotion ? undefined : headingLine}
                    >
                      10+ years of
                    </motion.span>
                  </span>

                  <span className="experience-heading-mask">
                    <motion.span
                      className="experience-heading-reveal"
                      variants={reduceMotion ? undefined : headingLine}
                    >
                      designing digital
                    </motion.span>
                  </span>

                  <span className="experience-heading-mask">
                    <motion.span
                      className="experience-heading-reveal"
                      variants={reduceMotion ? undefined : headingLine}
                    >
                      experiences.
                    </motion.span>
                  </span>
                </h2>
              )}

              <motion.p
                className="body-text experience-summary"
                variants={reduceMotion ? undefined : fadeUp}
              >
                {content.summary}
              </motion.p>

              <motion.div
                className="experience-resume"
                variants={reduceMotion ? undefined : fadeUp}
              >
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="action-link"
                >
                  <span>View resume</span>
                  <span className="action-link-arrow">↗</span>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* =====================================================
              EXPERIENCE LIST
          ===================================================== */}

          <div className="experience-list">
            {experiences.map((experience, index) => (
              <motion.article
                key={`${experience.company}-${experience.period}`}
                className="experience-item"
                variants={reduceMotion ? undefined : rowVariants}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
              >
                {/* DIVIDER */}

                <motion.div
                  className="experience-item-line"
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
                    delay: 0.08,
                    ease,
                  }}
                />

                {/* TOP META */}

                <div className="experience-item-top">
                  <span className="experience-index">
                    ({String(index + 1).padStart(2, "0")})
                  </span>

                  <span className="experience-period">{experience.period}</span>
                </div>

                {/* COMPANY */}

                <h3 className="experience-company-name">
                  {experience.company}
                </h3>

                {/* ROLE */}

                <p className="experience-role">{experience.role}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
