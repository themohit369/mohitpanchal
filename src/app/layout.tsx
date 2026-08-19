import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import SiteChrome from "@/components/layout/SiteChrome";
import SmoothScroll from "@/components/providers/SmoothScroll";

import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const SITE_URL = "https://mohitpanchal.vercel.app";

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
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Mohit Panchal — Product Designer & UI/UX Designer",
    template: "%s | Mohit Panchal",
  },

  description:
    "Mohit Panchal is a Product Designer and UI/UX Designer creating SaaS products, design systems, websites, and digital experiences for teams worldwide.",

  authors: [{ name: "Mohit Panchal", url: SITE_URL }],
  creator: "Mohit Panchal",
  publisher: "Mohit Panchal",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mohit Panchal",
    title: "Mohit Panchal — Product Designer & UI/UX Designer",
    description:
      "Product Designer and UI/UX Designer creating SaaS products, design systems, websites, and digital experiences for teams worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohit Panchal — Product Designer and UI/UX Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohit Panchal — Product Designer & UI/UX Designer",
    description:
      "Product Designer and UI/UX Designer creating digital products and experiences for teams worldwide.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Mohit Panchal",
  url: SITE_URL,
  image: `${SITE_URL}/images/about/about-image.png`,
  jobTitle: "Product Designer & UI/UX Designer",
  description:
    "Product Designer and UI/UX Designer based in India, working with startups, SaaS teams, and digital products worldwide.",
  knowsAbout: [
    "Product Design",
    "UI Design",
    "User Experience Design",
    "Design Systems",
    "SaaS Product Design",
    "Web Design",
    "Brand Identity",
    "Graphic Design",
    "Front-end Design",
    "Front-end Prototyping",
    "React",
    "Next.js",
    "AI-assisted Design Workflows",
  ],
  sameAs: [
    "https://www.linkedin.com/in/mohitpanchal",
    "https://dribbble.com/mohitpanchal",
    "https://gravatar.com/mohituix",
    "https://profiles.wordpress.org/mohitpanchal/",
    "https://github.com/mohitpanc",
    "https://x.com/mohituix",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Mohit Panchal",
  alternateName: "Mohit Panchal Portfolio",
  inLanguage: "en",
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bdoGrotesk.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function () {
        try {
          var savedTheme = localStorage.getItem("theme");

          var theme =
            savedTheme === "light" || savedTheme === "dark"
              ? savedTheme
              : window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";

          document.documentElement.setAttribute("data-theme", theme);

          document.documentElement.style.backgroundColor =
            theme === "dark" ? "#0b0b0b" : "#ffffff";

          document.documentElement.style.colorScheme = theme;
        } catch (e) {
          var theme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

          document.documentElement.setAttribute("data-theme", theme);

          document.documentElement.style.backgroundColor =
            theme === "dark" ? "#0b0b0b" : "#ffffff";

          document.documentElement.style.colorScheme = theme;
        }
      })();
    `,
          }}
        />
      </head>

      <body>
        <Script
          id="contra-sdk"
          src="https://contra.com/static/embed/sdk.js"
          strategy="afterInteractive"
          charSet="utf-8"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SmoothScroll />
        <SiteChrome />
        {children}
        <GoogleAnalytics gaId="G-GQXNW3SC4F" />
        <SpeedInsights />
        <Analytics />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
              };

              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;

              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);

            })(window, document, "clarity", "script", "xqmsnrq5nv");
          `}
        </Script>
      </body>
    </html>
  );
}
