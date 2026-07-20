"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import "./things-i-use-section.css";
import "../ui/action-link.css";

const ease = [0.16, 1, 0.3, 1] as const;

const things = [
  {
    number: "01",
    name: "MacBook Pro",
    detail: "Apple M1 Max",
    image: "/images/things-i-use/macbook-pro.jpg",
    className: "thing-card-large",
  },
  {
    number: "02",
    name: "iPad",
    detail: "Thinking, sketching & exploring",
    image: "/images/things-i-use/ipad.jpg",
    className: "thing-card-medium",
  },
  {
    number: "03",
    name: "MX Master 3",
    detail: "My everyday mouse",
    image: "/images/things-i-use/mx-master-3.jpg",
    className: "thing-card-small",
  },
  {
    number: "04",
    name: "iPhone 15 Pro",
    detail: "Everyday carry",
    image: "/images/things-i-use/iphone-15-pro.jpg",
    className: "thing-card-tall",
  },
  {
    number: "05",
    name: "Apple Pencil",
    detail: "For sketching ideas before pixels",
    image: "/images/things-i-use/apple-pencil.jpg",
    className: "thing-card-pencil",
  },
];

export default function ThingsIUseSection() {
  return (
    <section className="things-section">
      <div className="site-container">
        {/* META */}

        <motion.div
          className="section-meta"
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.8,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
        >
          <span>Things I use</span>
          <span>Everyday tools</span>
          <span>05 objects</span>
        </motion.div>

        {/* HEADING */}

        <div className="things-heading">
          <motion.span
            className="things-label"
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.8,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
          >
            My everyday objects
          </motion.span>

          <motion.h2
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
              amount: 0.35,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
          >
            Tools become part
            <br />
            of how you think.
          </motion.h2>

          <motion.p
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
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease,
            }}
          >
            A small collection of physical tools that stay close while I design,
            think, sketch and build.
          </motion.p>
        </div>

        {/* SHOWCASE */}

        <div className="things-showcase">
          {things.map((thing, index) => (
            <motion.article
              key={thing.number}
              className={`thing-card ${thing.className}`}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.85,
                delay: Math.min(index * 0.05, 0.15),
                ease,
              }}
            >
              <div className="thing-image-wrap">
                <Image
                  src={thing.image}
                  alt={`${thing.name} ${thing.detail}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="thing-image"
                />
              </div>

              <div className="thing-info">
                <div>
                  <h3>{thing.name}</h3>
                  <p>{thing.detail}</p>
                </div>

                <span>({thing.number})</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM NOTE */}

        <motion.div
          className="things-bottom"
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
            amount: 0.7,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
        >
          <span className="things-bottom-label">A note on tools</span>

          <p>
            I don&apos;t believe better tools automatically make better work.
            These are simply the objects that have become part of my everyday
            process.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
