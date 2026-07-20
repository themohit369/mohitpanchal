"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import "./writing-section.css";
import "../ui/action-link.css";

const ease = [0.16, 1, 0.3, 1] as const;

const articles = [
  {
    number: "01",
    date: "Mar 20, 2025",
    title: "UI vs UX vs PX: Why Duolingo is Replacing UX with PX",
    href: "https://medium.com/@mohitpanc",
  },
  {
    number: "02",
    date: "Mar 20, 2025",
    title:
      "The Intersection of Vastu and UI/UX Design: A New Perspective on Digital Harmony",
    href: "https://medium.com/@mohitpanc",
  },
  {
    number: "03",
    date: "Dec 8, 2019",
    title:
      "10 UI/UX Designers You Should Follow on Dribbble for Your Next Project",
    href: "https://medium.com/@mohitpanc",
  },
];

export default function WritingSection() {
  return (
    <section className="writing-section">
      <div className="site-container">
        <div className="section-meta">
          <span>Writing</span>
          <span>Design • Systems • Psychology</span>
          <span>03 articles</span>
        </div>

        <div className="writing-heading">
          <h2>
            Writing helps me think
            <br />
            before I design.
          </h2>
        </div>

        <div className="writing-list">
          {articles.map((article, index) => (
            <motion.article
              key={article.number}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease,
              }}
              className="writing-item"
            >
              <Link
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="writing-item-link"
              >
                <div className="writing-number">({article.number})</div>

                <div className="writing-content">
                  <span className="writing-date">{article.date}</span>

                  <h3>{article.title}</h3>
                </div>

                <div className="writing-arrow">↗</div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="writing-bottom">
          <a
            href="https://medium.com/@mohitpanc"
            target="_blank"
            rel="noopener noreferrer"
            className="writing-profile-link"
          >
            <span>Read all articles on Medium</span>
            <span className="writing-profile-arrow">↗</span>
          </a>
        </div>

        <div className="writing-divider" />
      </div>
    </section>
  );
}
