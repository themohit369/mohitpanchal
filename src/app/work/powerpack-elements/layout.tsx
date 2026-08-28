import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "PowerPack Elements — Product Design & UI/UX Case Study | Mohit Panchal",

  description:
    "A product design and UI/UX case study for PowerPack Elements, exploring usability, interface consistency, reusable UI patterns, design systems, and scalable Elementor product design.",

  alternates: {
    canonical: "/work/powerpack-elements",
  },

  openGraph: {
    title:
      "PowerPack Elements — Product Design & UI/UX Case Study | Mohit Panchal",
    description:
      "A product design case study covering UI/UX, reusable interface patterns, design systems, and scalable Elementor product design.",
    url: "/work/powerpack-elements",
    type: "article",
    images: [
      {
        url: "/images/work/case-studies/powerpack-elements-product-design.webp",
        alt: "PowerPack Elements product design and UI/UX case study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "PowerPack Elements — Product Design & UI/UX Case Study | Mohit Panchal",
    description:
      "A product design case study covering UI/UX, reusable interface patterns, design systems, and scalable Elementor product design.",
    images: [
      "/images/work/case-studies/powerpack-elements-product-design.webp",
    ],
  },
};

export default function PowerPackElementsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
