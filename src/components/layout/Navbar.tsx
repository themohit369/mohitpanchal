"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { lenisInstance } from "@/components/providers/SmoothScroll";
import ThemeToggle from "@/components/ui/ThemeToggle";
import "./navbar.css";

const navItems = [
  { number: "01", name: "About", href: "/about" },
  { number: "02", name: "Work", href: "/#work" },
  { number: "03", name: "Services", href: "/#services" },
  { number: "04", name: "Writing", href: "/#writing" },
  { number: "05", name: "Contact", href: "/#contact" },
  {
    number: "06",
    name: "Shop",
    href: "https://your-poster-website.com",
    external: true,
  },
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_USERNAME",
  },
  {
    name: "Behance",
    href: "https://behance.net/YOUR_USERNAME",
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/YOUR_USERNAME",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
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

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    const page = document.getElementById("page-content");

    if (!page) return;

    if (menuOpen) {
      page.classList.add("page-menu-open");
    } else {
      page.classList.remove("page-menu-open");
    }

    return () => page.classList.remove("page-menu-open");
  }, [menuOpen]);
  return (
    <>
      <header
        className={`editorial-nav ${hidden ? "is-hidden" : ""} ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="editorial-nav-inner">
          <Link href="/" className="editorial-brand">
            Mò墨熙<sup>®</sup>
          </Link>

          <div className="editorial-desktop-nav">
            <span>Quick Links</span>

            <nav>
              {navItems.map((item, i) => (
                <span key={item.name}>
                  <Link href={item.href}>{item.name}</Link>
                  {i !== navItems.length - 1 && ", "}
                </span>
              ))}
            </nav>
          </div>

          <div className="editorial-right">
            <button
              type="button"
              className="editorial-menu-button"
              onClick={() => setMenuOpen((v) => !v)}
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
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-inner">
              <nav>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 16 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="mobile-link"
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      <span>{item.number}</span>

                      <strong>{item.name}</strong>

                      <em>↗</em>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mobile-footer">
                <motion.div
                  className="mobile-socials"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.58,
                    duration: 0.4,
                  }}
                >
                  {socials.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  ))}

                  <a href="mailto:mohitp846@gmail.com">Email</a>
                </motion.div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
