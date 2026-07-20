import type { Variants, Transition } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1] as const;

export const durations = {
  fast: 0.35,
  medium: 0.6,
  slow: 0.9,
  reveal: 1.05,
};

export const transitions = {
  fast: {
    duration: durations.fast,
    ease,
  } satisfies Transition,

  medium: {
    duration: durations.medium,
    ease,
  } satisfies Transition,

  slow: {
    duration: durations.slow,
    ease,
  } satisfies Transition,

  reveal: {
    duration: durations.reveal,
    ease,
  } satisfies Transition,
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.slow,
  },
};

export const fade: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: transitions.medium,
  },
};

export const revealY: Variants = {
  hidden: {
    y: "110%",
  },

  visible: {
    y: "0%",
    transition: transitions.reveal,
  },
};

export const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};
