/**
 * Centralized experience data — single source of truth for work history.
 * Consumed by: Experience component (home + about variants).
 */

export type Experience = {
  company: string;
  role: string;
  period: string;
};

export const experiences: Experience[] = [
  {
    company: "Independent",
    role: "UI/UX Designer",
    period: "Nov 2023 — Present",
  },
  {
    company: "Awesome Motive Inc.",
    role: "UI/UX Designer",
    period: "May 2021 — Nov 2023",
  },
  {
    company: "IdeaBox Creations",
    role: "UI/UX Designer",
    period: "Nov 2018 — Apr 2021",
  },
  {
    company: "Webyot Technologies",
    role: "Graphic Web Designer",
    period: "Jun 2016 — Oct 2018",
  },
];