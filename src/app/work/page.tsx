"use client";

import "./work-page.css";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";

const ease = [0.16, 1, 0.3, 1] as const;

const projects = [
  {
    number: "01",
    title: "PowerPack Elements",
    category: "Product Design",
    year: "2023",
    description:
      "Premium Elementor addon focused on building scalable product experiences for designers and agencies.",
    image: "/images/work/project-1.jpg",
    href: "/work/powerpack-elements",
  },
  {
    number: "02",
    title: "Max Addons for Bricks",
    category: "Brand Identity + Website",
    year: "2025",
    description:
      "Brand identity and marketing website for a premium Bricks Builder addon.",
    image: "/images/work/project-2.jpg",
    href: "/work/max-addons",
  },
  {
    number: "03",
    title: "The Drip Line",
    category: "Brand Identity",
    year: "2024",
    description:
      "Identity design for a contemporary apparel brand built around simplicity and confidence.",
    image: "/images/work/project-3.jpg",
    href: "/work/the-drip-line",
  },
  {
    number: "04",
    title: "Gayatri Engineering",
    category: "Brand Identity + Website",
    year: "2026",
    description:
      "Brand identity and website for an engineering and heavy fabrication company.",
    image: "/images/work/project-4.jpg",
    href: "/work/gayatri-engineering",
  },
];

export default function WorkPage() {
  return (
    <main className="work-page">
      <section className="work-page-hero">
        <div className="site-container">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="work-page-title"
          >
            Selected
            <br />
            Projects
          </motion.h1>

          <p className="work-page-intro">
            A collection of product design, branding and digital experiences
            crafted for startups, agencies and growing businesses.
          </p>
        </div>
      </section>

      <section className="work-page-list">
        <div className="site-container">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease,
              }}
              className="work-page-card"
            >
              <Link href={project.href} className="work-page-card-link">
                <div className="work-page-image media-frame">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                <div className="work-page-content">
                  <div className="work-page-top">
                    <span>({project.number})</span>
                    <span>{project.year}</span>
                  </div>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className="work-page-bottom">
                    <span>{project.category}</span>

                    <span>View Case Study ↗</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
