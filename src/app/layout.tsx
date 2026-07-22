import type { Metadata } from "next";
import localFont from "next/font/local";

import SiteChrome from "@/components/layout/SiteChrome";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const bdoGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/BDOGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BDOGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/BDOGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bdo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohitpanchal.vercel.app/"), // Change after your domain is live

  title: {
    default: "Mohit Panchal | Product Designer",
    template: "%s | Mohit Panchal",
  },

  description:
    "Portfolio of Mohit Panchal, a Product Designer and UX/UI Designer crafting intuitive digital products, design systems, and user experiences.",

  keywords: [
    "Mohit Panchal",
    "Product Designer",
    "UX Designer",
    "UI Designer",
    "Design Systems",
    "Portfolio",
    "Figma",
    "Interaction Design",
    "User Experience",
    "India",
  ],

  authors: [{ name: "Mohit Panchal" }],
  creator: "Mohit Panchal",
  publisher: "Mohit Panchal",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohitpanchal.vercel.app/",
    siteName: "Mohit Panchal",
    title: "Mohit Panchal | Product Designer",
    description:
      "Portfolio of Mohit Panchal showcasing product design, UX, UI, design systems and case studies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohit Panchal Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohit Panchal | Product Designer",
    description:
      "Portfolio of Mohit Panchal showcasing product design, UX, UI and design systems.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-light.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bdoGrotesk.variable}>
      <body>
        <SmoothScroll />
        <SiteChrome />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohit Panchal",
              jobTitle: "Product Designer",
              url: "https://mohitpanchal.vercel.app",
              image: "https://mohitpanchal.vercel.app/og-image.jpg",
              description:
                "Product Designer specializing in UX, UI and Design Systems.",
              sameAs: [
                "https://www.linkedin.com/in/mohitpanchal/",
                "https://dribbble.com/mohitpanchal",
                "https://www.behance.net/mohituix/",
              ],
            }),
          }}
        />
        {children}
        <GoogleAnalytics gaId="G-GQXNW3SC4F" />
      </body>
    </html>
  );
}
