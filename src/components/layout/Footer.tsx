"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Marquee from "@/components/ui/Marquee";
import "./footer.css";

const EMAIL = "mohitp846@gmail.com";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohitpanchal/",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/mohitpanchal",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/mohituix/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/themohit369/",
  },

  {
    label: "GitHub",
    href: "https://github.com/themohit369",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
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

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const socialContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const socialRow: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

function getIndiaTime() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date());
}

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(getIndiaTime());
    };

    updateTime();

    const interval = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const mailtoLink = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Work Enquiry",
  )}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer id="contact" className="portfolio-footer">
      <Marquee
        href="mailto:mohitp846@gmail.com?subject=Work%20Enquiry"
        ariaLabel="Contact Mohit about a project"
        className="footer-marquee"
      >
        Have a project in mind? Let&apos;s talk
      </Marquee>
      <div className="site-container">
        {/* =====================================================
            LOCATION + CONTACT
        ===================================================== */}

        <motion.div
          className="footer-info"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.8,
            ease,
          }}
        >
          <div className="footer-info-block">
            <span className="footer-info-label">Location</span>

            <p>
              Udaipur, Rajasthan
              <br />
              India · 313001
            </p>
          </div>

          <div className="footer-info-block">
            <span className="footer-info-label">Contact</span>

            <a href="tel:+919799160923">+91 97991 60923</a>

            <a href="mailto:mohitp846@gmail.com">mohitp846@gmail.com</a>
          </div>
        </motion.div>

        {/* =====================================================
            EXISTING FOOTER
        ===================================================== */}

        <motion.div
          className="footer-top-line"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            duration: 1.1,
            ease,
          }}
        />

        <motion.div
          className="footer-contact"
          variants={reduceMotion ? undefined : stagger}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="footer-heading"
            variants={reduceMotion ? undefined : reveal}
          >
            Let&apos;s work together.
          </motion.h2>

          <motion.div
            className="footer-email-row"
            variants={reduceMotion ? undefined : reveal}
          >
            <a href={mailtoLink} className="footer-email">
              <span className="footer-email-text">Drop me a line</span>

              <span className="footer-email-arrow" aria-hidden="true">
                ↗
              </span>
            </a>

            <button
              type="button"
              className="footer-back-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span className="footer-back-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 19V5" />
                  <path d="M6.5 10.5L12 5L17.5 10.5" />
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.div>

        <div className="pb-14">
          <div
            className="contra-hire-me-button"
            data-analyticsuserid="fc8cd262-e37e-4703-83bf-ceed58c9f6dd"
            data-theme="light"
            data-username="mohitpanchal"
          />
          <Script
            async
            src="https://contra.com/static/embed/sdk.js"
            charSet="utf-8"
          />
        </div>

        <motion.div
          className="footer-bottom-line"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{
            duration: 1.1,
            ease,
          }}
        />

        <div className="footer-bottom">
          <motion.nav
            className="footer-socials"
            aria-label="Social links"
            variants={reduceMotion ? undefined : socialContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                variants={reduceMotion ? undefined : socialRow}
              >
                <span>{social.label}</span>

                <span className="footer-social-index">
                  ({String(index + 1).padStart(2, "0")})
                </span>

                <span className="footer-social-line" />
              </motion.a>
            ))}
          </motion.nav>

          <motion.div
            className="footer-meta"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease,
            }}
          >
            <div className="footer-location">
              <p>
                India
                {localTime && (
                  <>
                    <span className="footer-time-separator"> · </span>

                    <span className="footer-time">{localTime}</span>
                  </>
                )}
              </p>

              <p>Working worldwide</p>
            </div>

            <p className="footer-copyright">
              © 2026 Mohit Panchal.
              <br />
              Designed in India with Love ♥
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
