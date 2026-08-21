"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import "@/components/sections/work.css";
import "./work-page.css";

import Footer from "@/components/layout/Footer";
import { ease } from "@/lib/motion";
import {
  caseStudies,
  identityWork,
  webWork,
  explorations,
} from "@/data/projects";

const heroLines = ["Selected", "Work"];

/* =====================================================
   PAGE
===================================================== */

export default function WorkPage() {
  const reduceMotion = useReducedMotion();

  const cardMotion = (index: number) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 56,
        },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.15,
    },

    transition: {
      duration: reduceMotion ? 0 : 1.1,
      delay: reduceMotion ? 0 : Math.min(index * 0.08, 0.24),
      ease,
    },
  });

  return (
    <main className="work-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="work-page-hero">
        <div className="site-container">
          <motion.div
            className="work-page-heading-wrap"
            initial="hidden"
            animate="visible"
          >
            <h1 className="work-page-heading">
              {heroLines.map((line, index) => (
                <span key={line} className="work-page-heading-line">
                  <motion.span
                    className="work-page-heading-reveal"
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
                          duration: reduceMotion ? 0 : 1.05,
                          delay: reduceMotion ? 0 : index * 0.1,
                          ease,
                        },
                      },
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PRODUCT / CASE STUDIES
      ===================================================== */}

      <section className="site-container work-projects-container work-page-projects">
        <motion.div
          className="work-divider"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease,
          }}
          style={{
            transformOrigin: "left center",
          }}
        />

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
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="section-meta work-section-meta"
        >
          <span>Product Design & UI/UX</span>
          <span>(01 — 02)</span>
          <span>Product Design Case Studies</span>
        </motion.div>

        <div className="work-project-grid">
          {caseStudies.map((project, index) => (
            <motion.article
              key={project.title}
              className={`work-project work-project-${index + 1}`}
              {...cardMotion(index)}
            >
              <Link
                href={project.href}
                aria-label={`View ${project.title} product design and UI/UX case study`}
                className="media-frame work-project-image"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  priority={index === 0}
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 58vw"
                      : "(max-width: 768px) 100vw, 34vw"
                  }
                  className="work-project-image-inner"
                />
              </Link>

              <Link
                href={project.href}
                className="work-project-info"
                aria-label={`Read the ${project.title} case study`}
              >
                <span className="work-project-year">{project.year}</span>

                <div className="work-project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>

                <span className="work-project-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =====================================================
          IDENTITY
      ===================================================== */}

      <section className="site-container work-identity-container">
        <motion.div
          className="work-divider"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease,
          }}
          style={{
            transformOrigin: "left center",
          }}
        />

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
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="section-meta work-section-meta"
        >
          <span>Brand Identity & Graphic Design</span>
          <span>(03 — 08)</span>
          <span>Logo Design + Visual Identity</span>
        </motion.div>

        <div className="work-identity-grid">
          {identityWork.map((project, index) => {
            const hasLivePage = project.href !== "#";

            const imageContent = (
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="work-identity-image-inner"
              />
            );

            const infoContent = (
              <>
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </>
            );

            return (
              <motion.article
                key={project.title}
                className={`work-identity-item work-identity-item-${index + 1}`}
                {...cardMotion(index)}
              >
                {hasLivePage ? (
                  <Link
                    href={project.href}
                    aria-label={`View ${project.title} design work`}
                    className="media-frame work-identity-image"
                  >
                    {imageContent}
                  </Link>
                ) : (
                  <div className="media-frame work-identity-image">
                    {imageContent}
                  </div>
                )}

                {hasLivePage ? (
                  <Link
                    href={project.href}
                    className="work-gallery-info"
                    aria-label={`View ${project.title} design work`}
                  >
                    {infoContent}
                  </Link>
                ) : (
                  <div className="work-gallery-info">{infoContent}</div>
                )}
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          WEBSITE DESIGN
      ===================================================== */}

      <section className="site-container work-gallery-container work-page-gallery">
        <motion.div
          className="work-divider"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease,
          }}
          style={{
            transformOrigin: "left center",
          }}
        />

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
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="section-meta work-section-meta"
        >
          <span>Web Design & UI Projects</span>
          <span>(09 — 18)</span>
          <span>Website Design + Digital UI</span>
        </motion.div>

        <div className="work-gallery-grid">
          {webWork.map((project, index) => (
            <motion.article
              key={project.title}
              className={`work-gallery-item work-gallery-item-${index + 1}`}
              {...cardMotion(index)}
            >
              <div className="media-frame work-gallery-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="work-gallery-image-inner"
                />
              </div>

              <div className="work-gallery-info">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =====================================================
          EXPLORATIONS
      ===================================================== */}

      <section className="site-container work-gallery-container work-page-explorations">
        <motion.div
          className="work-divider"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease,
          }}
          style={{
            transformOrigin: "left center",
          }}
        />

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
            duration: reduceMotion ? 0 : 0.7,
            ease,
          }}
          className="section-meta work-section-meta"
        >
          <span>Visual & Graphic Design Explorations</span>
          <span>(19 — 20)</span>
          <span>Visual + Web Design</span>
        </motion.div>

        <div className="work-gallery-grid">
          {explorations.map((project, index) => (
            <motion.article
              key={project.title}
              className={`work-gallery-item work-gallery-item-${index + 1}`}
              {...cardMotion(index)}
            >
              <div className="media-frame work-gallery-image">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="work-gallery-image-inner"
                />
              </div>

              <div className="work-gallery-info">
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="work-divider work-page-bottom-divider"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            ease,
          }}
          style={{
            transformOrigin: "left center",
          }}
        />
      </section>

      <Footer />
    </main>
  );
}
