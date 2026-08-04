"use client";

import { useEffect, useState, type CSSProperties } from "react";

import "./page-loader.css";

type LoaderStage = "progress" | "hello" | "smile" | "exit";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<LoaderStage>("progress");
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.classList.add("is-loading");
    body.classList.add("is-loading");

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    window.addEventListener("wheel", preventScroll, {
      passive: false,
    });

    window.addEventListener("touchmove", preventScroll, {
      passive: false,
    });

    let current = 0;

    const interval = window.setInterval(() => {
      current += Math.floor(Math.random() * 5) + 1;

      if (current >= 99) {
        current = 99;
        setProgress(99);

        window.clearInterval(interval);

        // 99% → hello!
        window.setTimeout(() => {
          setStage("hello");
        }, 350);

        // hello! → :)
        window.setTimeout(() => {
          setStage("smile");
        }, 1100);

        // smile hold → curtain exit
        window.setTimeout(() => {
          setStage("exit");

          html.classList.remove("is-loading");
          body.classList.remove("is-loading");
        }, 1800);

        // remove loader
        window.setTimeout(() => {
          setShowLoader(false);
        }, 2900);

        return;
      }

      setProgress(current);
    }, 55);

    return () => {
      window.clearInterval(interval);

      html.classList.remove("is-loading");
      body.classList.remove("is-loading");

      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  if (!showLoader) return null;

  const loaderStyle = {
    "--loader-progress": progress / 100,
    "--loader-opacity": 0.15 + (progress / 100) * 0.85,
  } as CSSProperties;

  return (
    <div
      className={`page-loader ${stage === "exit" ? "page-loader-exit" : ""}`}
      aria-hidden="true"
    >
      <div
        className={`page-loader-progress ${
          stage !== "progress" ? "page-loader-final" : ""
        }`}
        style={loaderStyle}
      >
        {stage === "progress" ? (
          <>
            <span className="page-loader-number">
              {String(progress).padStart(2, "0")}
            </span>

            <span className="page-loader-percent">%</span>
          </>
        ) : (
          <span key={stage} className="page-loader-final-text">
            {stage === "hello" ? "hello!" : ":)"}
          </span>
        )}
      </div>
    </div>
  );
}
