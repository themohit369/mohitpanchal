"use client";

import "../case-study.css";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import NextProject from "../NextProject";

const ease = [0.16, 1, 0.3, 1] as const;

export default function PowerPackElementsPage() {
  return (
    <main className="case-page">
      <section className="case-hero">
        <div className="site-container">
          {/* TITLE */}

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="case-title"
          >
            PowerPack
            <br />
            Elements
          </motion.h1>

          {/* HERO GRID */}

          <div className="site-grid case-hero-grid">
            {/* LEFT */}

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.8,
                ease,
              }}
              className="case-sidebar"
            >
              <div className="case-meta-item">
                <span>Year</span>
                <strong>2025</strong>
              </div>

              <div className="case-meta-item">
                <span>Role</span>
                <strong>UI/UX Designer</strong>
              </div>

              <div className="case-meta-item">
                <span>Timeline</span>
                <strong>8 Weeks</strong>
              </div>

              <div className="case-meta-item">
                <span>Platform</span>
                <strong>Figma + Elementor</strong>
              </div>

              <div className="case-meta-item">
                <span>Company</span>
                <strong>Freelance</strong>
              </div>
            </motion.aside>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease,
              }}
              className="case-hero-image media-frame"
            >
              <Image
                src="/images/work/project-1.png"
                alt="PowerPack Elements"
                fill
                priority
                sizes="(max-width:768px)100vw,70vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* SUMMARY */}

          <div id="overview" className="case-summary">
            <p>
              PowerPack Elements is a premium Elementor addon built for
              designers and agencies. My focus was improving usability, visual
              consistency, interaction quality and creating a more scalable
              product experience across the plugin.
            </p>
          </div>
        </div>
      </section>
      {/* ==========================================================
    THE STORY
========================================================== */}

      <section className="case-story">
        <div className="site-container">
          <div className="section-meta">
            <span>The Story</span>
            <span>Challenge • Solution • Design</span>
            <span>01</span>
          </div>

          <div className="case-story-grid">
            <div className="case-story-copy">
              <article className="case-story-block">
                <span className="meta-text">Challenge</span>

                <h2>Making a powerful Elementor plugin feel simple to use.</h2>

                <p>
                  PowerPack Elements offers a large collection of widgets and
                  customization options. As the product expanded, maintaining
                  clarity and consistency across the experience became the
                  primary design challenge.
                </p>
              </article>

              <article className="case-story-block">
                <span className="meta-text">Solution</span>

                <h2>
                  Build one visual language instead of isolated interfaces.
                </h2>

                <p>
                  I focused on simplifying interactions, improving hierarchy,
                  standardising components and designing reusable interface
                  patterns that could scale across the entire product.
                </p>
              </article>

              <article className="case-story-block">
                <span className="meta-text">Design</span>

                <h2>Product thinking with implementation in mind.</h2>

                <p>
                  Every screen was designed with development constraints,
                  scalability and long-term consistency in mind rather than
                  visual polish alone.
                </p>
              </article>
            </div>

            <div className="case-story-image media-frame">
              <Image
                src="/images/work/project-1.png"
                alt="PowerPack"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
    OUTCOME
========================================================== */}

      <section className="case-outcome-simple">
        <div className="site-container">
          <div className="section-meta">
            <span>Outcome</span>
            <span>02</span>
            <span>Reflection</span>
          </div>

          <div className="case-outcome-grid">
            <div className="case-outcome-image media-frame">
              <Image
                src="/images/work/project-1.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="case-outcome-copy">
              <h2>
                Better structure. Better usability. Better product experience.
              </h2>

              <p>
                This project strengthened my understanding of designing scalable
                products where consistency, usability and implementation are
                just as important as visual design.
              </p>

              <ul>
                <li>Design System Thinking</li>

                <li>Scalable UI Patterns</li>

                <li>Developer Friendly Design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <NextProject />

      <Footer />
    </main>
  );
}
