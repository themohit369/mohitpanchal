"use client";

import "./grid-overlay.css";

type GridOverlayProps = {
  visible: boolean;
};

export default function GridOverlay({ visible }: GridOverlayProps) {
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
