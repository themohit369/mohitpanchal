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
    company: "Independent",
    role: "UI/UX Designer",
    period: "Nov 2023 — Present",
  },
  {
    company: "Awesome Motive Inc.",
    role: "UI/UX Designer",
    period: "May 2021 — Nov 2023",
  },
  {
    company: "IdeaBox Creations",
    role: "UI/UX Designer",
    period: "Nov 2018 — Apr 2021",
  },
  {
    company: "Webyot Technologies",
    role: "Graphic Web Designer",
    period: "Jun 2016 — Oct 2018",
  },
];

/* =====================================================
   TYPES
===================================================== */

type ExperienceProps = {
  variant?: "home" | "about";
};

/* =====================================================
   MOTION
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
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

/* =====================================================
   COMPONENT
===================================================== */

export default function Experience({ variant = "home" }: ExperienceProps) {
  const isAbout = variant === "about";
  const reduceMotion = useReducedMotion();

  const content = isAbout
    ? {
        meta: "Career timeline",
        heading: "A decade of learning by designing and building.",
        summary:
          "My experience spans product design, UI/UX, web experiences and design systems, with every role shaping how I think about clarity, structure and useful digital products.",
      }
    : {
        meta: "Selected Experience",
        heading: "10+ years of designing digital experiences.",
        summary:
          "Working across product design, UI/UX, design systems and front-end thinking to turn complex problems into simple, useful digital products.",
      };

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
            INTRO
        ===================================================== */}

        <motion.div
          className="experience-header"
          variants={reduceMotion ? undefined : introContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {/* HEADING */}

          <div className="experience-header-heading">
            {isAbout ? (
              <motion.h2
                className="experience-heading"
                variants={reduceMotion ? undefined : fadeUp}
              >
                {content.heading}
              </motion.h2>
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
          </div>

          {/* SUMMARY */}

          <motion.div
            className="experience-header-copy"
            variants={reduceMotion ? undefined : fadeUp}
          >
            <p className="body-text experience-summary">{content.summary}</p>

            <div className="experience-resume">
              <a
                href="/mohit-panchal-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="action-link"
              >
                <span>View resume</span>
                <span className="action-link-arrow">↗</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* =====================================================
            EXPERIENCE LIST
        ===================================================== */}

        <div className="experience-list">
          {experiences.map((experience) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              className="experience-item"
              variants={reduceMotion ? undefined : rowVariants}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
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
                  amount: 0.5,
                }}
                transition={{
                  duration: 1,
                  ease,
                }}
              />

              {/* COMPANY + ROLE */}

              <div className="experience-company">
                <h3 className="experience-company-name">
                  {experience.company}
                </h3>

                <p className="experience-role">{experience.role}</p>
              </div>

              {/* PERIOD */}

              <div className="experience-period-wrap">
                <span className="experience-period">{experience.period}</span>
              </div>
            </motion.article>
          ))}

          <div className="experience-list-end-line" />
        </div>
      </div>
    </section>
  );
}
