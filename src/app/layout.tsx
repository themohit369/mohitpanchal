import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import SiteChrome from "@/components/layout/SiteChrome";
import SmoothScroll from "@/components/providers/SmoothScroll";

import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

import { SITE_URL, personJsonLd, websiteJsonLd } from "@/lib/site";

const visualSans = localFont({
  src: "../../public/fonts/WFVisualSansVF.woff",
  variable: "--font-visual",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Mohit Panchal — UI/UX Designer & Product Designer in Kota, Udaipur, Rajasthan, India",
    template: "%s | Mohit Panchal",
  },

  other: {
    "p:domain_verify": "8e81d7931d4857897a45195b925f8273",
  },

  description:
    "Mohit Panchal is a UI/UX Designer and Product Designer in Kota, Udaipur, Rajasthan, India, creating SaaS products, websites, digital experiences, and user interfaces for teams worldwide.",
  keywords: [
    // Existing / core keywords
    "Mohit Panchal",
    "UI/UX Designer",
    "UI Designer",
    "UX Designer",
    "Product Designer",
    "Web Designer",
    "Website Designer",
    "SaaS Designer",
    "Digital Product Designer",
    "Freelance UI/UX Designer",

    // New location keywords
    "UI/UX Designer in Kota",
    "Best UI/UX Designer in Kota",
    "UI/UX Designer in Udaipur",
    "Best UI/UX Designer in Udaipur",
    "UI/UX Designer in Rajasthan",
    "UI/UX Designer in India",
    "UI Designer in Kota",
    "UX Designer in Kota",
    "Product Designer in Rajasthan",
    "Product Designer in India",
    "Web Designer in Kota",
    "Web Designer in Rajasthan",
  ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={visualSans.variable} suppressHydrationWarning>
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
