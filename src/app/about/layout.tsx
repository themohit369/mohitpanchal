import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Product & UI/UX Designer",

  description:
    "Meet Mohit Panchal, a product and UI/UX designer working across SaaS products, design systems, brand identity, and front-end prototyping with teams worldwide.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Mohit Panchal — Product & UI/UX Designer",
    description:
      "Product and UI/UX designer working across SaaS products, design systems, brand identity, and front-end prototyping.",
    url: "/about",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Mohit Panchal — Product & UI/UX Designer",
    description:
      "Product and UI/UX designer working across digital products, design systems, and front-end prototyping.",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
