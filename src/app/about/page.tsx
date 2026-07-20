"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Experience from "@/components/sections/Experience";
import ThingsIUseSection from "@/components/content/ThingsIUseSection";
import IdentityCodeSection from "@/components/content/IdentityCodeSection";
import Footer from "@/components/layout/Footer";
import AboutFAQ from "@/components/about/AboutFAQ";

import "./styles.css";

const ease = [0.16, 1, 0.3, 1] as const;

const titleLines = ["Designer,", "builder & curious", "human."];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-page-hero">
        <div className="site-container">
          {/* TITLE */}

          <div className="about-page-title-wrap">
            <h1 className="about-page-title">
              {titleLines.map((line, index) => (
                <span key={line} className="about-title-line">
                  <motion.span
                    initial={{
                      y: "110%",
                      rotate: 2,
                    }}
                    animate={{
                      y: "0%",
                      rotate: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.08 + index * 0.1,
                      ease,
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          {/* HERO BOTTOM */}

          <div className="about-page-hero-bottom site-grid">
            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease,
              }}
              className="about-page-hero-image"
            >
              <div className="media-frame about-page-image">
                <motion.div
                  initial={{
                    scale: 1.08,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.4,
                    delay: 0.3,
                    ease,
                  }}
                  className="about-page-image-inner"
                >
                  <Image
                    src="/images/about/about-image.png"
                    alt="Portrait of Mohit Panchal"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* INTRO */}

            <motion.div
              initial={{
                opacity: 0,
                y: 32,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease,
              }}
              className="about-page-intro"
            >
              <p className="body-text">
                I&apos;m Mohit, a product and UI/UX designer focused on creating
                digital products that feel clear, useful and thoughtfully
                crafted.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY
      ===================================================== */}

      <section className="about-story">
        <div className="site-container">
          {/* META */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="section-meta"
          >
            <span>My story</span>

            <span>Design + Product</span>

            <span>10+ years</span>
          </motion.div>

          {/* STORY GRID */}

          <div className="about-story-grid">
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="about-story-label"
            >
              <span>How I think about design</span>
            </motion.div>

            <div className="about-story-content">
              {/* STORY HEADING */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 48,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.9,
                  ease,
                }}
              >
                I care about the space between how something looks and how it
                actually works.
              </motion.h2>

              {/* STORY COPY */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 36,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease,
                }}
                className="about-story-copy"
              >
                <p>
                  Over the past 10+ years, I&apos;ve worked across digital
                  products, SaaS platforms and web experiences. My work sits
                  between product thinking, interface design and a practical
                  understanding of how ideas are built.
                </p>

                <p>
                  I enjoy simplifying complex systems, finding structure in
                  messy problems and turning ideas into experiences that feel
                  natural to use.
                </p>

                <p>
                  Outside client and product work, I explore writing, visual
                  design, psychology and the systems that shape how people think
                  and behave.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Experience variant="about" />
      <ThingsIUseSection />
      <IdentityCodeSection />
      <AboutFAQ />
      <Footer />
    </main>
  );
}
