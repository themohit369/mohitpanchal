"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { lenisInstance } from "@/components/providers/SmoothScroll";
import ThemeToggle from "@/components/ui/ThemeToggle";

import "./navbar.css";

const navItems = [
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohitpanchal/",
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/mohitpanchal",
  },
  {
    name: "Behance",
    href: "https://www.behance.net/mohituix/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/themohit369/",
  },
];

function getIndiaTime() {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date());
}

type NavbarProps = {
  gridVisible: boolean;
  onToggleGrid: () => void;
};

export default function Navbar({ gridVisible, onToggleGrid }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [localTime, setLocalTime] = useState("");

  const lastY = useRef(0);

  useEffect(() => {
    if (menuOpen) {
      lenisInstance?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenisInstance?.start();
      document.body.style.overflow = "";
    }

    return () => {
      lenisInstance?.start();
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) return;

    const onScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 24);

      if (y < 80) {
        setHidden(false);
      } else if (y > lastY.current + 10) {
        setHidden(true);
      } else if (y < lastY.current - 10) {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    const page = document.getElementById("page-content");

    if (!page) return;

    if (menuOpen) {
      page.classList.add("page-menu-open");
    } else {
      page.classList.remove("page-menu-open");
    }

    return () => {
      page.classList.remove("page-menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    const updateTime = () => {
      setLocalTime(getIndiaTime());
    };

    updateTime();

    const interval = window.setInterval(updateTime, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <>
      <header
        className={`editorial-nav ${hidden ? "is-hidden" : ""} ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="editorial-nav-inner">
          <Link href="/" className="editorial-brand">
            <img
              src="/mohit-dark.svg"
              alt="Mohit Panchal"
              className="logo-dark"
              width={48}
              height={48}
            />

            <img
              src="/mohit-light.svg"
              alt=""
              className="logo-light"
              width={48}
              height={48}
            />
          </Link>

          <div className="editorial-desktop-nav">
            <span>Quick Links</span>

            <nav>
              {navItems.map((item, i) => (
                <span key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                  {i !== navItems.length - 1 && " · "}
                </span>
              ))}
            </nav>
          </div>

          <div className="editorial-right">
            <button
              type="button"
              className={`editorial-grid-toggle ${
                gridVisible ? "is-active" : ""
              }`}
              onClick={onToggleGrid}
              aria-pressed={gridVisible}
              aria-keyshortcuts="G"
              aria-label={gridVisible ? "Hide layout grid" : "Show layout grid"}
              title="Toggle layout grid (G)"
            >
              <span>Grid</span>
              <span className="editorial-grid-toggle-dot" aria-hidden="true" />
              <span className="editorial-grid-toggle-state" aria-hidden="true">
                {gridVisible ? "On" : "Off"}
              </span>
            </button>

            <button
              type="button"
              className="editorial-menu-button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mobile-menu-inner">
              {/* PRIMARY NAV */}

              <nav className="mobile-primary-nav">
                {navItems.map((item, index) => (
                  <motion.div
                    className="mobile-nav-item"
                    key={item.name}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 12,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.055,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="mobile-link"
                    >
                      <span className="mobile-link-dot" />

                      <strong>{item.name}</strong>

                      <span className="mobile-link-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="mobile-nav-item"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 12,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: navItems.length * 0.055,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a
                    href="/mohit-panchal-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mobile-link-dot" />

                    <strong>Resume</strong>

                    <span className="mobile-link-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </motion.div>
              </nav>

              {/* SOCIAL */}

              <motion.div
                className="mobile-social-section"
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.28,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="mobile-social-heading">Social</span>

                <nav className="mobile-socials" aria-label="Social links">
                  {socials.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-social-link"
                    >
                      <span>{social.name}</span>

                      <span className="mobile-social-index">
                        ({String(index + 1).padStart(2, "0")})
                      </span>

                      <span className="mobile-social-line" />
                    </a>
                  ))}
                </nav>
              </motion.div>

              {/* LOCATION */}

              <motion.div
                className="mobile-menu-location"
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.38,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p>
                  India
                  {localTime && (
                    <>
                      <span className="mobile-time-separator"> · </span>
                      <span className="mobile-time">{localTime}</span>
                    </>
                  )}
                </p>

                <p>Working worldwide</p>
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
