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
                <strong>Product + UI/UX Designer</strong>
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
                <strong>IdeaBox Creations</strong>
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
                src="/images/work/project-1.webp"
                alt="PowerPack Elements Elementor product design interface"
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
              PowerPack Elements is an Elementor addon by IdeaBox Creations,
              built around a large library of widgets and customization
              controls. I worked on the product and UI/UX experience to make
              interactions clearer, improve interface consistency, and create
              reusable patterns that could scale as the plugin grew.
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
            <span>Product Challenge • UX Solution • UI System</span>
            <span>01</span>
          </div>

          <div className="case-story-grid">
            <div className="case-story-copy">
              <article className="case-story-block">
                <span className="meta-text">Challenge</span>

                <h2>Making a powerful Elementor plugin feel simple to use.</h2>

                <p>
                  As PowerPack expanded across more widgets, settings, and
                  customization options, the experience needed to stay easy to
                  understand. The core challenge was reducing interface
                  inconsistency without limiting the flexibility that Elementor
                  users expect.
                </p>
              </article>

              <article className="case-story-block">
                <span className="meta-text">Solution</span>

                <h2>
                  Build one visual language instead of isolated interfaces.
                </h2>

                <p>
                  I approached repeated controls, states, and interaction
                  patterns as one connected system instead of designing each
                  interface in isolation. That meant simplifying hierarchy,
                  standardising reusable components, and making common actions
                  more predictable across the product.
                </p>
              </article>

              <article className="case-story-block">
                <span className="meta-text">Design</span>

                <h2>Product thinking with implementation in mind.</h2>

                <p>
                  The UI was designed with Elementor behaviour, development
                  constraints, responsive states, and long-term maintainability
                  in mind. Visual polish mattered, but the bigger goal was a
                  product system that designers and developers could work with
                  consistently.
                </p>
              </article>
            </div>

            <div className="case-story-image media-frame">
              <Image
                src="/images/work/ppe-case-study-story.webp"
                alt="PowerPack Elements UI/UX design system and Elementor interface"
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
                src="/images/work/ppe-case-study-outcome.webp"
                alt="PowerPack Elements final product interface and reusable UI patterns"
                fill
                className="object-cover"
              />
            </div>

            <div className="case-outcome-copy">
              <h2>
                Better structure. Better usability. Better product experience.
              </h2>

              <p>
                The project helped establish a more consistent way to think
                about hierarchy, reusable UI patterns, and implementation across
                a growing Elementor product. It also reinforced how closely
                product design, design systems, and front-end constraints need
                to work together.
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
