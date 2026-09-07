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

import {
  caseStudies,
  identityWork,
  selectedWebWork,
  webWork,
} from "@/data/projects";

/* =====================================================
   HELPERS
===================================================== */

function formatRange(start: number, total: number) {
  if (total === 0) return "(00 — 00)";

  const end = start + total - 1;

  return `(${String(start).padStart(2, "0")} — ${String(end).padStart(
    2,
    "0",
  )})`;
}

const homeCaseStudies = caseStudies.filter((project) => project.showOnHome);
const homeIdentityWork = identityWork.filter((project) => project.showOnHome);
const homeSelectedWebWork = selectedWebWork.filter(
  (project) => project.showOnHome,
);
const homeWebWork = webWork.filter((project) => project.showOnHome);

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
    reduceMotion ? ["0%", "0%", "4%"] : ["-4%", "0%", "4%"],
  );

  return (
    <motion.article
      ref={projectRef}
      className="work-project"
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

  const hasLivePage = Boolean(project.href && project.href !== "#");

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
      className="work-identity-item"
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
        delay: Math.min(index * 0.06, 0.35),
        ease,
      }}
    >
      {hasLivePage ? (
        <Link
          href={project.href!}
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
          href={project.href!}
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
   GENERIC GALLERY CARD
===================================================== */

type GalleryCardProps = {
  project: (typeof selectedWebWork)[number];
  index: number;
};

function GalleryCard({ project, index }: GalleryCardProps) {
  const reduceMotion = useReducedMotion();

  const cardContent = (
    <>
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
    </>
  );

  const hasLivePage = Boolean(project.href && project.href !== "#");

  return (
    <motion.article
      className="work-gallery-item"
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
        delay: Math.min((index % 4) * 0.07, 0.21),
        ease,
      }}
    >
      {hasLivePage ? (
        <Link
          href={project.href!}
          className="work-gallery-link"
          aria-label={`View ${project.title} design work`}
        >
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.article>
  );
}

/* =====================================================
   SECTION META
===================================================== */

type SectionMetaProps = {
  label: string;
  count: string;
  description: string;
};

function SectionMeta({ label, count, description }: SectionMetaProps) {
  const reduceMotion = useReducedMotion();

  return (
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
      <span>{label}</span>
      <span>{count}</span>
      <span>{description}</span>
    </motion.div>
  );
}

/* =====================================================
   WORK
===================================================== */

export default function Work() {
  const reduceMotion = useReducedMotion();

  const totalSelectedWork =
    homeCaseStudies.length +
    homeIdentityWork.length +
    homeSelectedWebWork.length +
    homeWebWork.length;

  const identityStart = homeCaseStudies.length + 1;

  const selectedWebStart = homeCaseStudies.length + homeIdentityWork.length + 1;

  const templatesStart =
    homeCaseStudies.length +
    homeIdentityWork.length +
    homeSelectedWebWork.length +
    1;

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
          <span>{formatRange(1, totalSelectedWork)}</span>
          <span>Product, UI/UX + Brand Design</span>
        </motion.div>
      </div>

      {/* =====================================================
          FEATURED CASE STUDIES
      ===================================================== */}

      <div
        id="work-projects"
        className="site-container work-projects-container"
      >
        <div className="work-divider" />

        <SectionMeta
          label="Featured Case Studies"
          count={formatRange(1, homeCaseStudies.length)}
          description="Product Design · UX/UI"
        />

        <div className="work-project-grid">
          {homeCaseStudies.map((project, index) => (
            <CaseStudyCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          BRAND IDENTITY & GRAPHIC DESIGN
      ===================================================== */}

      <div className="site-container work-identity-container">
        <div className="work-divider" />

        <SectionMeta
          label="Brand Identity & Graphic Design"
          count={formatRange(identityStart, homeIdentityWork.length)}
          description="Logo Design · Visual Identity · Icon Systems"
        />

        <div className="work-identity-grid">
          {homeIdentityWork.map((project, index) => (
            <IdentityCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* =====================================================
          SELECTED PRODUCT & WEBSITE WORK
      ===================================================== */}

      <div className="site-container work-selected-web-container">
        <div className="work-divider" />

        <SectionMeta
          label="Selected Product & Website Work"
          count={formatRange(selectedWebStart, homeSelectedWebWork.length)}
          description="Product Websites · UI · Web Design"
        />

        <div className="work-gallery-grid work-selected-web-grid">
          {homeSelectedWebWork.map((project, index) => (
            <GalleryCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* =====================================================
          WEBSITE TEMPLATES
      ===================================================== */}

      <div className="site-container work-gallery-container">
        <div className="work-divider" />

        <SectionMeta
          label="Website Templates"
          count={formatRange(templatesStart, homeWebWork.length)}
          description="Website Design · E-commerce · Campaign UI"
        />

        <div className="work-gallery-grid work-template-grid">
          {homeWebWork.map((project, index) => (
            <GalleryCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* =====================================================
            VIEW ALL
        ===================================================== */}

        <div className="work-view-all">
          <p>
            A selection of websites, templates, visual systems and digital
            experiences created across the years.
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
