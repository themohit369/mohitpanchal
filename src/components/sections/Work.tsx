"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./work.css";
import "../ui/action-link.css";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import Marquee from "@/components/ui/Marquee";
import { ease } from "@/lib/motion";
import { caseStudies, identityWork, webWork } from "@/data/projects";

/* =====================================================
   CASE STUDY CARD
===================================================== */

type CaseStudyCardProps = {
  project: (typeof caseStudies)[number];
  index: number;
};

function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  const projectRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduceMotion ? ["0%", "0%", "0%"] : ["-4%", "0%", "4%"],
  );

  return (
    <motion.article
      ref={projectRef}
      className={`work-project work-project-${index + 1}`}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 72,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 1,
        delay: index * 0.08,
        ease,
      }}
    >
      <Link
        href={project.href}
        aria-label={`View ${project.title} product design case study`}
        className="media-frame work-project-image"
      >
        <motion.div
          className="work-project-image-motion"
          style={{
            y: imageY,
          }}
        >
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes={
              index === 0
                ? "(max-width: 768px) 100vw, 62vw"
                : "(max-width: 768px) 100vw, 38vw"
            }
            className="work-project-image-inner"
          />
        </motion.div>
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
  );
}

/* =====================================================
   IDENTITY CARD
===================================================== */

type IdentityCardProps = {
  project: (typeof identityWork)[number];
  index: number;
};

function IdentityCard({ project, index }: IdentityCardProps) {
  const reduceMotion = useReducedMotion();
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
      className={`work-identity-item work-identity-item-${index + 1}`}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 56,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease,
      }}
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
        <div className="media-frame work-identity-image">{imageContent}</div>
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
}

/* =====================================================
   WEB WORK CARD
===================================================== */

type WebWorkCardProps = {
  project: (typeof webWork)[number];
  index: number;
};

function WebWorkCard({ project, index }: WebWorkCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`work-gallery-item work-gallery-item-${index + 1}`}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 48,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.85,
        delay: (index % 2) * 0.08,
        ease,
      }}
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
  );
}

/* =====================================================
   WORK
===================================================== */

export default function Work() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="work-section">
      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <Marquee className="work-marquee">Selected Work</Marquee>
      {/* =====================================================
          MAIN META
      ===================================================== */}

      <div className="site-container">
        <motion.div
          className="section-meta"
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
            duration: 0.7,
            ease,
          }}
        >
          <span>Selected Work</span>
          <span>(01 — 13)</span>
          <span>Product, UI/UX + Brand Design</span>
        </motion.div>
      </div>

      {/* =====================================================
          CASE STUDIES
      ===================================================== */}

      <div
        id="work-projects"
        className="site-container work-projects-container"
      >
        <div className="work-project-grid">
          {caseStudies.map((project, index) => (
            <CaseStudyCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          IDENTITY & VISUAL WORK
      ===================================================== */}

      <div className="site-container work-identity-container">
        <div className="work-divider" />

        <motion.div
          className="section-meta work-section-meta"
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
            duration: 0.7,
            ease,
          }}
        >
          <span>Brand Identity & Graphic Design</span>
          <span>(03 — 08)</span>
          <span>Logo Design + Brand Identity</span>
        </motion.div>

        <div className="work-identity-grid">
          {identityWork.map((project, index) => (
            <IdentityCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* =====================================================
          SELECTED WEB WORK
      ===================================================== */}

      <div className="site-container work-gallery-container">
        <div className="work-divider" />

        <motion.div
          className="section-meta work-section-meta"
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
            duration: 0.7,
            ease,
          }}
        >
          <span>Selected Web Work</span>
          <span>(09 — 13)</span>
          <span>Website Design + UI</span>
        </motion.div>

        <div className="work-gallery-grid">
          {webWork.slice(0, 5).map((project, index) => (
            <WebWorkCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* =====================================================
            VIEW ALL
        ===================================================== */}

        <div className="work-view-all">
          <p>
            More websites, templates, visual design and selected work from
            across the years.
          </p>

          <Link href="/work" className="action-link">
            <span>View All Projects</span>
            <span className="action-link-arrow">↗</span>
          </Link>
        </div>

        <div className="work-divider" />
      </div>
    </section>
  );
}
