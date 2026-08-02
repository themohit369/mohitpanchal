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

const ease = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    year: "2025",
    title: "PowerPack Elements",
    category: "WordPress Plugin Website",
    image: "/images/work/project-1.png",
    href: "/work/powerpack-elements",
  },
  {
    year: "2024",
    title: "The Drip Line",
    category: "Logo Design",
    image: "/images/work/project-3.png",
    href: "/work/the-drip-line",
  },
  {
    year: "2025",
    title: "Max Addons for Bricks",
    category: "WordPress Plugin Website",
    image: "/images/work/project-2.png",
    href: "/work/max-addons",
  },
];

type ProjectCardProps = {
  project: (typeof projects)[number];
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
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
      className={`work-project work-project-${index + 1}`}
    >
      <Link href={project.href} className="media-frame work-project-image">
        <motion.div
          className="work-project-image-motion"
          style={{
            y: imageY,
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={
              index === 1
                ? "(max-width: 768px) 100vw, 38vw"
                : "(max-width: 768px) 100vw, 62vw"
            }
            className="work-project-image-inner"
          />
        </motion.div>
      </Link>

      <motion.div
        className="work-project-info"
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 18,
              }
        }
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
          delay: 0.12,
          ease,
        }}
      >
        <span className="work-project-year">{project.year}</span>

        <div className="work-project-copy">
          <h3>{project.title}</h3>

          <p>{project.category}</p>
        </div>

        <span className="work-project-arrow">↗</span>
      </motion.div>
    </motion.article>
  );
}

export default function Work() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="work-section">
      {/* =====================================================
          META
      ===================================================== */}

      <div className="site-container">
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
            duration: 0.7,
            ease,
          }}
          className="section-meta"
        >
          <span>Featured Projects</span>

          <span>(01 — 03)</span>

          <span>Product Design + UX/UI</span>
        </motion.div>
      </div>

      {/* =====================================================
          MARQUEE
      ===================================================== */}

      <Marquee className="work-marquee">Selected Work</Marquee>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <div className="site-container">
        <div className="work-intro site-grid">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 36,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.85,
              ease,
            }}
            className="work-intro-content"
          >
            <p className="body-text">
              I design digital products and experiences, shaping complex ideas
              into clear, useful and scalable systems built with purpose and
              clarity.
            </p>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <div
        id="work-projects"
        className="site-container work-projects-container"
      >
        <div className="work-project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${project.year}`}
              project={project}
              index={index}
            />
          ))}
        </div>
        {/* CTA */}

        <div className="work-view-all">
          <p>
            Explore the complete collection of case studies, product work and
            brand projects.
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
