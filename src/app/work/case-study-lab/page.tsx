"use client";

import "./case-study-lab.css";

import Image from "next/image";
import Footer from "@/components/layout/Footer";
import NextProject from "../NextProject";

export default function CaseStudyLab() {
  return (
    <main className="case-page">
      {/* ==========================================================
          HERO
      ========================================================== */}

      <section className="lab-hero">
        <div className="site-container">
          <p className="lab-eyebrow">Product Case Study</p>

          <h1 className="lab-title">
            Max Addons
            <br />
            for Bricks
          </h1>

          <p className="lab-intro">
            Designing the identity and digital experience for a premium Bricks
            Builder addon focused on clarity, scalability and trust.
          </p>

          <div className="lab-meta">
            <div className="lab-meta-item">
              <span>Role</span>
              <strong>Product Designer</strong>
            </div>

            <div className="lab-meta-item">
              <span>Timeline</span>
              <strong>6 Weeks</strong>
            </div>

            <div className="lab-meta-item">
              <span>Year</span>
              <strong>2025</strong>
            </div>

            <div className="lab-meta-item">
              <span>Platform</span>
              <strong>Bricks Builder</strong>
            </div>
          </div>

          <div className="lab-hero-image media-frame">
            <Image
              src="/images/work/project-2.webp"
              alt="Max Addons Hero"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ==========================================================
          PROJECT SNAPSHOT
      ========================================================== */}

      <section className="lab-overview">
        <div className="site-container">
          <div className="section-meta">
            <span>Overview</span>
            <span>Context</span>
            <span>01</span>
          </div>

          <div className="lab-overview-grid">
            <div className="lab-overview-left">
              <h2>
                Creating a product experience that feels mature from the very
                first interaction.
              </h2>
            </div>

            <div className="lab-overview-right">
              <p>
                Max Addons entered a competitive ecosystem where users already
                had established alternatives. Rather than competing through
                feature quantity alone, the goal was to create a product
                experience that immediately communicated professionalism,
                reliability and long-term value.
              </p>

              <p>
                My responsibility included product strategy, UX, interface
                design, brand identity and the marketing website that introduced
                the product to new users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          THE CHALLENGE
      ========================================================== */}

      <section className="lab-story">
        <div className="site-container">
          <div className="section-meta">
            <span>Process</span>
            <span>Challenge</span>
            <span>02</span>
          </div>

          <div className="lab-story-grid">
            <div className="lab-story-copy">
              <article>
                <span className="meta-text">The Challenge</span>

                <h2>
                  Helping users discover a growing feature library without
                  creating complexity.
                </h2>

                <p>
                  As more features were introduced, the experience risked
                  becoming visually heavy and difficult to navigate. Users
                  needed a clear path that explained the product naturally
                  instead of forcing them to process long feature lists.
                </p>
              </article>

              <article>
                <span className="meta-text">Product Thinking</span>

                <h2>Build confidence before asking users to explore.</h2>

                <p>
                  Every interaction was designed to reduce hesitation through
                  hierarchy, whitespace, consistent components and predictable
                  navigation patterns that scale with the product.
                </p>
              </article>
            </div>

            <div className="lab-story-image media-frame">
              <Image
                src="/images/work/max-addons-case-study-story.webp"
                alt="Design Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SHOWCASE
      ========================================================== */}

      <section className="lab-showcase">
        <div className="site-container">
          <div className="section-meta">
            <span>Solution</span>
            <span>Core Experience</span>
            <span>03</span>
          </div>

          <div className="lab-showcase-image media-frame">
            <Image
              src="/images/work/max-addons-case-study-outcome.webp"
              alt="Core Experience"
              fill
              className="object-cover"
            />
          </div>

          <div className="lab-showcase-caption">
            <p>
              The homepage introduced the product through a clear visual
              hierarchy that balanced product messaging, feature discovery and
              conversion without overwhelming first-time visitors.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================================
          KEY DECISIONS
      ========================================================== */}

      <section className="lab-decisions">
        <div className="site-container">
          <div className="section-meta">
            <span>Decisions</span>
            <span>UX Thinking</span>
            <span>04</span>
          </div>

          <div className="lab-decisions-grid">
            <div className="lab-decision">
              <span>01</span>

              <h3>Prioritized clarity over visual complexity.</h3>

              <p>
                Rather than introducing decorative layouts, every section
                focused on helping users understand the product with minimum
                cognitive effort.
              </p>
            </div>

            <div className="lab-decision">
              <span>02</span>

              <h3>Designed reusable UI patterns instead of isolated pages.</h3>

              <p>
                Components were built as a scalable system so future landing
                pages and product sections could be created consistently.
              </p>
            </div>

            <div className="lab-decision">
              <span>03</span>

              <h3>Strengthened the brand through consistency.</h3>

              <p>
                Typography, spacing, iconography and color usage followed a
                unified visual language across every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          OUTCOME
      ========================================================== */}

      <section className="lab-outcome">
        <div className="site-container">
          <div className="section-meta">
            <span>Outcome</span>
            <span>Impact</span>
            <span>05</span>
          </div>

          <div className="lab-outcome-grid">
            <div className="lab-outcome-copy">
              <h2>
                A scalable product experience backed by a strong visual
                identity.
              </h2>

              <p>
                The final result combined branding, UX and marketing into one
                cohesive experience. Instead of simply showcasing features, the
                website built confidence through clarity, hierarchy and
                consistency.
              </p>
            </div>

            <div className="lab-outcome-list">
              <div>
                <span>Deliverables</span>
                <strong>Brand Identity</strong>
              </div>

              <div>
                <span>Website</span>

                <strong>Marketing Experience</strong>
              </div>

              <div>
                <span>Design</span>

                <strong>Design System</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          REFLECTION
      ========================================================== */}

      <section className="lab-reflection">
        <div className="site-container">
          <div className="section-meta">
            <span>Reflection</span>
            <span>Learning</span>
            <span>06</span>
          </div>

          <div className="lab-reflection-grid">
            <h2>
              Every project is an opportunity to design a better process, not
              just a better interface.
            </h2>

            <p>
              Looking back, the biggest takeaway wasn't the final UI. It was
              learning how product strategy, information architecture and visual
              consistency work together to create trust. Those lessons continue
              to influence how I approach every new product today.
            </p>
          </div>
        </div>
      </section>

      <NextProject />

      <Footer />
    </main>
  );
}
