"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./navbar.css";

import ThemeToggle from "@/components/ui/ThemeToggle";

const MotionLink = motion(Link);

const navItems = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/#work" },
  { name: "Services", href: "/#services" },
  { name: "Writing", href: "/#writing" },
  { name: "Contact", href: "/#contact" },
  { name: "Shop", href: "https://your-poster-website.com", external: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isHidden, setIsHidden] = useState(false);

  const lastScrollY = useRef(0);

  const navRef = useRef<HTMLElement>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  const hiddenRef = useRef(false);
  const scrolledRef = useRef(false);

  const ease = [0.16, 1, 0.3, 1] as const;

  const reveal = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease,
      },
    },
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;

      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // ---------- Scrolled state ----------
      const shouldBeScrolled = currentY > 24;

      if (scrolledRef.current !== shouldBeScrolled) {
        scrolledRef.current = shouldBeScrolled;
        setIsScrolled(shouldBeScrolled);
      }

      // ---------- Always visible near top ----------
      if (currentY <= 80) {
        if (hiddenRef.current) {
          hiddenRef.current = false;
          setIsHidden(false);
        }

        lastScrollY.current = currentY;
        return;
      }

      // ---------- Hide ----------
      if (delta > 12 && currentY > 120) {
        if (!hiddenRef.current) {
          hiddenRef.current = true;
          setIsHidden(true);
        }
      }

      // ---------- Show ----------
      if (delta < -12) {
        if (hiddenRef.current) {
          hiddenRef.current = false;
          setIsHidden(false);
        }
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <header
      ref={navRef}
      className={`editorial-nav ${
        isHidden ? "is-hidden" : ""
      } ${isScrolled ? "is-scrolled" : ""}`}
    >
      <motion.div
        className="editorial-nav-inner"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.08,
            },
          },
        }}
      >
        <MotionLink
          href="/"
          className="editorial-nav-brand"
          variants={reveal}
          onClick={() => setMenuOpen(false)}
        >
          Mohit Panchal
          <sup>®</sup>
        </MotionLink>

        <motion.div className="editorial-nav-links" variants={reveal}>
          <p className="editorial-nav-label">Quick Links</p>

          <nav aria-label="Main navigation">
            {navItems.map((item, index) => (
              <span key={item.name}>
                <Link href={item.href}>{item.name}</Link>
                {index < navItems.length - 1 ? ", " : ""}
              </span>
            ))}
          </nav>
        </motion.div>

        <motion.div className="editorial-nav-info" variants={reveal}>
          <p>Based in India</p>

          <ThemeToggle />
        </motion.div>

        <button
          type="button"
          className="editorial-nav-menu-button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </motion.div>

      <div
        id="mobile-navigation"
        className={`editorial-mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <span className="editorial-mobile-number">
                ({String(index + 1).padStart(2, "0")})
              </span>

              <span className="editorial-mobile-link-name">{item.name}</span>

              <span className="editorial-mobile-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
