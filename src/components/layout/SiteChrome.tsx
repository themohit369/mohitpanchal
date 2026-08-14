"use client";

import { useCallback, useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import GridOverlay from "@/components/layout/GridOverlay";

export default function SiteChrome() {
  const [gridVisible, setGridVisible] = useState(false);

  const toggleGrid = useCallback(() => {
    setGridVisible((current) => !current);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.isContentEditable;

      if (isTyping) return;

      if (event.key.toLowerCase() === "g") {
        event.preventDefault();
        toggleGrid();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleGrid]);

  return (
    <>
      <Navbar gridVisible={gridVisible} onToggleGrid={toggleGrid} />
      <GridOverlay visible={gridVisible} />
    </>
  );
}
