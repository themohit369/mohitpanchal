import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Design & UI/UX Portfolio",

  description:
    "Explore selected product design, UI/UX, brand identity, graphic design, and web design work by Mohit Panchal, including SaaS case studies and digital product experiences.",

  alternates: {
    canonical: "/work",
  },

  openGraph: {
    title: "Product Design & UI/UX Portfolio — Mohit Panchal",
    description:
      "Selected product design, UI/UX, brand identity, graphic design, and web design work by Mohit Panchal.",
    url: "/work",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Product Design & UI/UX Portfolio — Mohit Panchal",
    description:
      "Selected product, UI/UX, brand identity, and web design work by Mohit Panchal.",
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
