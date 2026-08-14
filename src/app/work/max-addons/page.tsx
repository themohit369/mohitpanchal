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
                <strong>Product + Brand Designer</strong>
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
                src="/images/work/case-studies/max-addons-product-design.webp"
                alt="Max Addons for Bricks product branding and website design"
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
              Max Addons for Bricks is a Bricks Builder addon designed to extend
              the website-building experience with additional elements and
              tools. I worked across product positioning, brand identity, and
              the marketing website to create a clear visual system that made
              the product easier to understand and more consistent across its
              digital touchpoints.
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
            <span>Brand Challenge • UX Solution • Design System</span>
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
                  As a newer product in the Bricks Builder ecosystem, Max Addons
                  needed to communicate credibility quickly while explaining a
                  growing set of features to designers, developers, and
                  agencies. The challenge was to build a recognizable identity
                  without making the product feel visually complicated or
                  difficult to evaluate.
                </p>
              </article>

              <article className="case-story-block">
                <span className="meta-text">Solution</span>

                <h2>
                  Create a cohesive brand backed by a conversion-focused
                  website.
                </h2>

                <p>
                  I created a visual identity and carried it into the marketing
                  website through a clearer information hierarchy, reusable UI
                  components, and consistent interaction patterns. The goal was
                  to help visitors understand what Max Addons offers, discover
                  relevant features faster, and move through the site with less
                  friction.
                </p>
              </article>

              <article className="case-story-block">
                <span className="meta-text">Design</span>

                <h2>
                  Designing a scalable experience for both the product and the
                  brand.
                </h2>

                <p>
                  The identity, interface components, and responsive page
                  layouts were designed as one connected system. That made it
                  easier to keep the brand consistent as new pages and product
                  features were added, while giving the marketing experience
                  enough flexibility to evolve with the product.
                </p>
              </article>
            </div>

            <div className="case-story-image media-frame">
              <Image
                src="/images/work/case-studies/max-addons-brand-ui-story.webp"
                alt="Max Addons for Bricks brand identity and UI design system"
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
                src="/images/work/case-studies/max-addons-final-website-ui.webp"
                alt="Max Addons for Bricks marketing website and responsive UI design"
                fill
                className="object-cover"
              />
            </div>

            <div className="case-outcome-copy">
              <h2>
                A stronger identity supported by a modern digital experience.
              </h2>

              <p>
                The final experience brought the brand, product messaging, and
                website UI into one consistent system. It created a clearer way
                to present features, strengthened the visual identity, and gave
                the product a reusable design foundation for future marketing
                pages and content.
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
