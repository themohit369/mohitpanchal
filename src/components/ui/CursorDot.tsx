"use client";

import "./cursor-dot.css";
import { useEffect, useRef } from "react";

export default function CursorDot() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    let currentScale = 1;
    let targetScale = 1;

    let raf = 0;

    const followSpeed = 0.18;
    const scaleSpeed = 0.16;

    let hovering = false;
    let pressed = false;

    const show = () => {
      cursor.classList.remove("is-hidden");
    };

    const hide = () => {
      cursor.classList.add("is-hidden");
    };

    const updateState = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) {
        hovering = false;
        cursor.classList.remove("is-hover");
        return;
      }

      if (
        target.closest(
          'input,textarea,select,[contenteditable="true"],[data-cursor="hide"]',
        )
      ) {
        hide();
        hovering = false;
        cursor.classList.remove("is-hover");
        return;
      }

      show();

      const hoverTarget = target.closest(
        'a,button,[role="button"],[data-cursor="hover"]',
      );

      hovering = Boolean(hoverTarget);

      cursor.classList.toggle("is-hover", hovering);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      show();
      updateState(e.target);
    };

    const onDown = () => {
      pressed = true;
      cursor.classList.add("is-pressed");
    };

    const onUp = () => {
      pressed = false;
      cursor.classList.remove("is-pressed");
    };

    const onLeave = () => hide();

    const onEnter = () => show();

    const onVisibility = () => {
      if (document.hidden) hide();
      else show();
    };

    const animate = () => {
      currentX += (mouseX - currentX) * followSpeed;
      currentY += (mouseY - currentY) * followSpeed;

      if (pressed) targetScale = 0.82;
      else if (hovering) targetScale = 1.75;
      else targetScale = 1;

      currentScale += (targetScale - currentScale) * scaleSpeed;

      cursor.style.transform = `
        translate3d(${currentX}px, ${currentY}px,0)
        translate(-50%,-50%)
        scale(${currentScale})
      `;

      raf = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("visibilitychange", onVisibility);

    animate();

    return () => {
      cancelAnimationFrame(raf);

      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div ref={cursorRef} className="cursor-dot">
      <span className="cursor-guides" />
    </div>
  );
}
