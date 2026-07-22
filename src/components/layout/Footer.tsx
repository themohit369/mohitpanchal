"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import Marquee from "@/components/ui/Marquee";

import "./footer.css";

/* =====================================================
   CONSTANTS
===================================================== */

const EMAIL = "mohitp846@gmail.com";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "Dribbble",
    href: "#",
  },
  {
    label: "Behance",
    href: "#",
  },
  {
    label: "Instagram",
    href: "#",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

/* =====================================================
   MOTION VARIANTS
===================================================== */

const emailReveal: Variants = {
  hidden: {
    y: "110%",
  },

  visible: {
    y: "0%",

    transition: {
      duration: 1.1,
      ease,
    },
  },
};

const socialContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const socialRow: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const endInfo: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      delay: 0.2,
      ease,
    },
  },
};

/* =====================================================
   COMPONENT
===================================================== */

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Work Enquiry",
  )}`;

  return (
    <footer id="contact" className="portfolio-footer">
      {/* =====================================================
          TOP DIVIDER
      ===================================================== */}

      <div className="site-container">
        <motion.div
          className="footer-marquee-divider"
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
            amount: 0.6,
          }}
          transition={{
            duration: 1.1,
            ease,
          }}
        />
      </div>

      {/* =====================================================
          CONTACT MARQUEE
      ===================================================== */}

      <Marquee
        ariaLabel="Contact me about a project"
        className="footer-marquee"
      >
        Have a project in mind? Let&apos;s talk
      </Marquee>

      {/* =====================================================
          FOOTER CONTENT
      ===================================================== */}

      <div className="site-container">
        {/* =====================================================
            EMAIL CTA
        ===================================================== */}

        <div className="portfolio-footer-main">
          <motion.p
            className="portfolio-footer-label"
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
            Send me a message
          </motion.p>

          <div className="portfolio-footer-email-mask">
            <motion.a
              href={mailtoLink}
              className="portfolio-footer-email"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                    }
              }
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1,
                delay: 0.08,
                ease,
              }}
            >
              {EMAIL}
            </motion.a>
          </div>
        </div>

        {/* =====================================================
            FOOTER BOTTOM
        ===================================================== */}

        <div className="portfolio-footer-bottom">
          {/* =====================================================
              SOCIAL LINKS
          ===================================================== */}

          <motion.nav
            className="portfolio-footer-socials"
            aria-label="Social links"
            variants={reduceMotion ? undefined : socialContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="portfolio-footer-link"
                variants={reduceMotion ? undefined : socialRow}
              >
                <span>{social.label}</span>

                <span className="portfolio-footer-social-index">
                  ({String(index + 1).padStart(2, "0")})
                </span>

                <motion.span
                  className="portfolio-footer-link-line"
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
                    duration: 0.9,
                    delay: index * 0.06,
                    ease,
                  }}
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* =====================================================
              END INFO
          ===================================================== */}

          <motion.div
            className="portfolio-footer-end"
            variants={reduceMotion ? undefined : endInfo}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.5,
            }}
          >
            <p className="portfolio-footer-location">
              Based in India
              <br />
              Working worldwide
            </p>

            <button
              type="button"
              className="portfolio-footer-top"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              ⌃
            </button>

            <p className="portfolio-footer-copyright">
              © 2026 Mohit Panchal.
              <br />
              All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
