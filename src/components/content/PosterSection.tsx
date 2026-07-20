"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import "./poster-section.css";
import "../ui/action-link.css";

const ease = [0.16, 1, 0.3, 1] as const;

const POSTER_WEBSITE = "https://your-poster-website.com";

const posters = [
  {
    id: "01",
    title: "Poster Title",
    image: "/images/posters/poster-1.jpg",
  },
  {
    id: "02",
    title: "Poster Title",
    image: "/images/posters/poster-2.jpg",
  },
  {
    id: "03",
    title: "Poster Title",
    image: "/images/posters/poster-3.jpg",
  },
  {
    id: "04",
    title: "Poster Title",
    image: "/images/posters/poster-4.jpg",
  },
];

export default function PosterSection() {
  return (
    <section className="poster-section">
      <div className="site-container">
        {/* META */}

        <div className="section-meta">
          <span>Posters</span>
          <span>Selected Visual Work</span>
          <span>2026</span>
        </div>

        {/* HEADING */}

        <div className="poster-heading">
          <div>
            <h2>
              Ideas, thoughts and feelings
              <br />
              turned into posters.
            </h2>
          </div>

          <p>
            A personal collection of posters exploring identity, psychology,
            ambition and visual storytelling.
          </p>
        </div>

        {/* GRID */}

        <div className="poster-grid">
          {posters.map((poster, index) => (
            <motion.article
              key={poster.id}
              className="poster-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease,
              }}
            >
              <a
                href={POSTER_WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                className="poster-card-link"
              >
                <div className="poster-image-wrap">
                  <Image
                    src={poster.image}
                    alt={poster.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="poster-image"
                  />
                </div>

                <div className="poster-card-meta">
                  <span>{poster.title}</span>

                  <span>({poster.id})</span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* CTA */}

        <div className="poster-bottom">
          <p>
            Explore the complete collection on the dedicated poster website.
          </p>

          <a
            href={POSTER_WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className="poster-view-link"
          >
            <span>Explore Collection</span>

            <span className="poster-view-arrow">↗</span>
          </a>
        </div>

        <div className="poster-divider" />
      </div>
    </section>
  );
}
