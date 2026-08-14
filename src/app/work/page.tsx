"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import "@/components/sections/work.css";
import "./work-page.css";

import Footer from "@/components/layout/Footer";

const ease = [0.16, 1, 0.3, 1] as const;

const heroLines = ["Selected", "Work"];

/* =====================================================
   CASE STUDIES
===================================================== */

const caseStudies = [
  {
    number: "01",
    year: "2025",
    title: "PowerPack Elements",
    category: "Product Design + UI/UX Design",
    image: "/images/work/case-studies/powerpack-elements-product-design.webp",
    alt: "PowerPack Elements product design and UI/UX case study",
    href: "/work/powerpack-elements",
  },
  {
    number: "02",
    year: "2025",
    title: "Max Addons for Bricks",
    category: "Product Design + UI/UX Design",
    image: "/images/work/case-studies/max-addons-product-design.webp",
    alt: "Max Addons for Bricks product design and UI/UX case study",
    href: "/work/max-addons",
  },
];

/* =====================================================
   IDENTITY
===================================================== */

const identityWork = [
  {
    title: "Max Addons",
    category: "Logo Design + Brand Identity",
    image: "/images/work/logos/max-addons-logo.webp",
    alt: "Max Addons logo and brand identity design by Mohit Panchal",
    href: "/work/max-addons",
  },
  {
    title: "The Drip Line",
    category: "Logo Design + Brand Identity",
    image: "/images/work/logos/the-drip-line-logo.webp",
    alt: "The Drip Line logo and brand identity design by Mohit Panchal",
    href: "#",
  },
  {
    title: "PowerPack Elements",
    category: "Logo Design + Visual Identity",
    image: "/images/work/logos/powerpack-logo.webp",
    alt: "PowerPack Elements logo and visual identity design by Mohit Panchal",
    href: "/work/powerpack-elements",
  },
  {
    title: "WPFomify",
    category: "Logo Design + Visual Identity",
    image: "/images/work/logos/wpfomify-logo.webp",
    alt: "WPFomify logo and visual identity design by Mohit Panchal",
    href: "#",
  },
  {
    title: "SmartDocs",
    category: "Logo Design + Visual Identity",
    image: "/images/work/logos/smart-docs-logo.webp",
    alt: "SmartDocs logo and visual identity design by Mohit Panchal",
    href: "#",
  },
  {
    title: "OxyExtended",
    category: "Logo Design + Visual Identity",
    image: "/images/work/logos/oxyextended-logo.webp",
    alt: "OxyExtended logo and visual identity design by Mohit Panchal",
    href: "#",
  },
];

/* =====================================================
   WEBSITE / TEMPLATE WORK
===================================================== */

const webWork = [
  {
    title: "PowerPack Anniversary",
    category: "Campaign Website",
    image: "/images/work/templates/powerpack-anniversary-website.webp",
    alt: "PowerPack Anniversary campaign website and UI design",
    href: "/work/powerpack-anniversary",
  },
  {
    title: "Black Friday",
    category: "Campaign Design + UI",
    image: "/images/work/templates/black-friday-campaign-ui.webp",
    alt: "Black Friday campaign website and UI design",
    href: "/work/black-friday",
  },
  {
    title: "Design Agency",
    category: "Website Design",
    image: "/images/work/templates/design-agency-website.webp",
    alt: "Design agency website design project",
    href: "/work/design-agency",
  },
  {
    title: "Digital Marketing",
    category: "Website Design",
    image: "/images/work/templates/digital-marketing-website.webp",
    alt: "Digital marketing website design project",
    href: "/work/digital-marketing",
  },
  {
    title: "Builder",
    category: "Website Design",
    image: "/images/work/templates/builder-real-estate-website.webp",
    alt: "Builder website design and user interface project",
    href: "/work/builder",
  },
  {
    title: "Furniture",
    category: "E-commerce Website",
    image: "/images/work/templates/furniture-ecommerce-website.webp",
    alt: "Furniture e-commerce website design project",
    href: "/work/furniture",
  },
  {
    title: "Fitness",
    category: "Website Design",
    image: "/images/work/templates/fitness-website.webp",
    alt: "Fitness website design project",
    href: "/work/fitness",
  },
  {
    title: "Home Space",
    category: "Website Design",
    image: "/images/work/templates/home-space-website.webp",
    alt: "Home Space website design project",
    href: "/work/home-space",
  },
  {
    title: "Jewellery",
    category: "E-commerce Website",
    image: "/images/work/templates/jewellery-ecommerce-website.webp",
    alt: "Jewellery e-commerce website design project",
    href: "/work/jewellery",
  },
  {
    title: "Food & Restaurant",
    category: "Website Design",
    image: "/images/work/templates/food-restaurant-website.webp",
    alt: "Food and restaurant website design project",
    href: "/work/food-restaurant",
  },
];

/* =====================================================
   EXPLORATIONS
===================================================== */

const explorations = [
  {
    title: "Web Exploration 01",
    category: "Visual + Web Design",
    image: "/images/work/explorations/web-exploration-01.webp",
    alt: "Visual and web design exploration 01",
  },
  {
    title: "Web Exploration 02",
    category: "Visual + Web Design",
    image: "/images/work/explorations/web-exploration-02.webp",
    alt: "Visual and web design exploration 02",
  },
];

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
