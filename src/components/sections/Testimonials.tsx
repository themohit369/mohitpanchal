"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { ease } from "@/lib/motion";
import "./testimonials.css";
import "../ui/action-link.css";

/* =====================================================
   MOTION
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
    y: 44,
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

const headerReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.08,
      ease,
    },
  },
};

const quoteReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.14,
      ease,
    },
  },
};

const footerReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
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
        <motion.div
          className="section-meta"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease }}
        >
          <span>Testimonials</span>
          <span>(01 — 04)</span>
          <span>Selected Feedback</span>
        </motion.div>

        <motion.div
          className="testimonials-heading-wrap"
          variants={reduceMotion ? undefined : headingContainer}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
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

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.name}-${index}`}
              className={`testimonial-item testimonial-item-${index + 1}`}
              variants={reduceMotion ? undefined : testimonialReveal}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.16 }}
            >
              <motion.div
                className="testimonial-item-line"
                initial={reduceMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 1.05, ease }}
              />

              <motion.div
                className="testimonial-header"
                variants={reduceMotion ? undefined : headerReveal}
              >
                <div className="testimonial-author-profile">
                  <Image
                    src={testimonial.image}
                    alt=""
                    width={56}
                    height={56}
                    className="testimonial-avatar"
                  />

                  <p className="testimonial-name">{testimonial.name}</p>
                </div>

                <span className="testimonial-mark" aria-hidden="true">
                  “
                </span>
              </motion.div>

              <motion.blockquote
                className="testimonial-quote"
                variants={reduceMotion ? undefined : quoteReveal}
              >
                {testimonial.quote}
              </motion.blockquote>

              <motion.div
                className="testimonial-footer"
                variants={reduceMotion ? undefined : footerReveal}
              >
                <p>{testimonial.role}</p>
                <p>{testimonial.company}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
