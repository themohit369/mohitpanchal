"use client";

import { useEffect, useState } from "react";

import "./grid-overlay.css";

export default function GridOverlay() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("grid") === "true") {
      setVisible(true);
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (isTyping) return;

      if (event.key.toLowerCase() === "g") {
        setVisible((current) => !current);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="grid-overlay" aria-hidden="true">
      <div className="grid-overlay-container">
        {Array.from({ length: 12 }).map((_, index) => (
          <div className="grid-overlay-column" key={index} />
        ))}
      </div>
    </div>
  );
}
