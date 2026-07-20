"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import "./about-faq.css";
import "../ui/action-link.css";

const ease = [0.16, 1, 0.3, 1] as const;

const faqs = [
  {
    number: "01",
    question: "What type of design services do you offer?",
    answer:
      "I primarily work on digital product design, UI/UX design, websites, SaaS platforms and design systems. Depending on the project, I can also support product strategy, interaction design, prototyping and front-end thinking to help ideas move smoothly from concept to implementation.",
  },
  {
    number: "02",
    question: "What does your design process look like?",
    answer:
      "Every project is different, but I usually begin by understanding the product, its users and the actual problem we are trying to solve. From there, I move through structure, flows, visual direction, interface design and prototyping. I prefer a collaborative process with regular feedback rather than disappearing for weeks and presenting a finished design at the end.",
  },
  {
    number: "03",
    question: "How much do you charge for a website or product design?",
    answer:
      "Pricing depends on the scope, complexity and level of involvement required. A focused landing page, a multi-page website and a complex SaaS product are very different engagements. Once I understand the project, I can recommend the right scope and provide a clear project estimate.",
  },
  {
    number: "04",
    question: "What tools do you work with?",
    answer:
      "Figma is at the centre of most of my product and interface design work. Depending on the project, I also work with tools for prototyping, visual design, motion and AI-assisted exploration. I choose tools based on what helps solve the problem rather than forcing every project into the same workflow.",
  },
  {
    number: "05",
    question: "Can you create illustrations, icons or visual assets?",
    answer:
      "I do not position myself as a dedicated illustrator or icon designer. However, I can help define a cohesive visual direction, work with high-quality asset libraries and use AI-assisted workflows to explore custom visual concepts when they make sense for the project.",
  },
  {
    number: "06",
    question: "Do you also do development, or just design?",
    answer:
      "My main focus is product and UI/UX design, but I have a practical understanding of front-end development and how interfaces are actually built. I can work closely with developers, prepare implementation-ready designs and contribute to front-end execution where appropriate. For complex full-stack development, I prefer collaborating with specialised developers.",
  },
];

export default function AboutFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="about-faq">
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
          className="section-meta about-faq-meta"
        >
          <span>Frequently asked</span>
          <span>Questions</span>
          <span>(06)</span>
        </motion.div>

        {/* HEADER */}

        <div className="about-faq-header site-grid">
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
            className="about-faq-heading"
          >
            Frequently Asked
            <span>Questions</span>
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
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="about-faq-intro"
          >
            A few answers about how I work, what I design and how projects
            usually come together.
          </motion.p>
        </div>

        {/* FAQ LIST */}

        <motion.div
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="about-faq-list"
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                className={`about-faq-item ${isOpen ? "is-open" : ""}`}
                key={faq.number}
              >
                <button
                  type="button"
                  className="about-faq-trigger"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="about-faq-number">{faq.number}</span>

                  <span className="about-faq-question">{faq.question}</span>

                  <span className="about-faq-icon" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.55,
                          ease,
                        },
                        opacity: {
                          duration: 0.35,
                          ease,
                        },
                      }}
                      className="about-faq-answer-wrap"
                    >
                      <div className="about-faq-answer-grid site-grid">
                        <div className="about-faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
