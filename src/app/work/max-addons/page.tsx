"use client";

import "../case-study.css";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import NextProject from "../NextProject";

const ease = [0.16, 1, 0.3, 1] as const;

export default function MaxAddonsPage() {
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
            Max Addons
            <br />
            for Bricks
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
                <strong>Product & Brand Designer</strong>
              </div>

              <div className="case-meta-item">
                <span>Timeline</span>
                <strong>6 Weeks</strong>
              </div>

              <div className="case-meta-item">
                <span>Platform</span>
                <strong>Figma + Bricks Builder</strong>
              </div>

              <div className="case-meta-item">
                <span>Company</span>
                <strong>Max Addons</strong>
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
                src="/images/work/project-2.webp"
                alt="MaxAddons for Bricks"
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
              Max Addons for Bricks is a premium Bricks Builder addon. I
              designed the brand identity and marketing website, creating a
              modern, scalable experience that clearly communicates the product
              and its value.
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

                <h2>
                  Building a new product identity while creating trust from day
                  one.
                </h2>

                <p>
                  Max Addons entered the Bricks Builder ecosystem as a new
                  product, making it essential to establish a distinctive visual
                  identity while presenting a growing collection of features in
                  a way that felt clear, approachable and trustworthy for
                  designers, developers and agencies.
                </p>
              </article>

              <article className="case-story-block">
                <span className="meta-text">Solution</span>

                <h2>
                  Create a cohesive brand backed by a conversion-focused
                  website.
                </h2>

                <p>
                  I designed a complete visual identity and translated it into a
                  modern marketing website that balanced aesthetics with
                  usability. Clear information hierarchy, reusable UI components
                  and consistent visual patterns helped communicate the
                  product's value while making feature discovery simple and
                  intuitive.
                </p>
              </article>

              <article className="case-story-block">
                <span className="meta-text">Design</span>

                <h2>
                  Designing a scalable experience for both the product and the
                  brand.
                </h2>

                <p>
                  Every decision was made with scalability in mind, from the
                  logo and visual language to reusable interface components and
                  responsive page layouts. The result was a cohesive system that
                  could evolve alongside the product while maintaining a
                  consistent experience across every touchpoint.
                </p>
              </article>
            </div>

            <div className="case-story-image media-frame">
              <Image
                src="/images/work/max-addons-case-study-story.webp"
                alt="Max Addons Brand Identity"
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
                src="/images/work/max-addons-case-study-outcome.webp"
                alt="Max Addons Website"
                fill
                className="object-cover"
              />
            </div>

            <div className="case-outcome-copy">
              <h2>
                A stronger identity supported by a modern digital experience.
              </h2>

              <p>
                The final outcome combined branding, user experience and
                marketing into one cohesive experience. The project established
                a recognizable identity, improved feature communication and
                delivered a scalable website that reflects the quality and
                ambition of the product.
              </p>

              <ul>
                <li>Brand Identity</li>
                <li>Marketing Website</li>
                <li>Design System</li>
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
