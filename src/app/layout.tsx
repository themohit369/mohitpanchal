import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import SiteChrome from "@/components/layout/SiteChrome";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import PageLoader from "@/components/layout/PageLoader";

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
  metadataBase: new URL("https://mohitpanchal.vercel.app/"),

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
      {
        url: "/favicon.ico",
      },
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
    <html lang="en" className={bdoGrotesk.variable} suppressHydrationWarning>
      <head>
        {/* =====================================================
            INITIAL THEME
            Runs before first paint to prevent theme flash
        ===================================================== */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var theme = localStorage.getItem("theme") || "dark";

                  if (theme !== "light" && theme !== "dark") {
                    theme = "dark";
                  }

                  document.documentElement.setAttribute(
                    "data-theme",
                    theme
                  );

                  document.documentElement.style.backgroundColor =
                    theme === "dark"
                      ? "#0b0b0b"
                      : "#ffffff";

                  document.documentElement.style.colorScheme =
                    theme;
                } catch (e) {
                  document.documentElement.setAttribute(
                    "data-theme",
                    "dark"
                  );

                  document.documentElement.style.backgroundColor =
                    "#0b0b0b";

                  document.documentElement.style.colorScheme =
                    "dark";
                }
              })();
            `,
          }}
        />
      </head>

      <body>
        <PageLoader />
        <SmoothScroll />
        <SiteChrome />

        {/* =====================================================
            STRUCTURED DATA
        ===================================================== */}

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

        {/* =====================================================
            ANALYTICS
        ===================================================== */}

        <GoogleAnalytics gaId="G-GQXNW3SC4F" />

        <SpeedInsights />

        <Analytics />

        {/* =====================================================
            MICROSOFT CLARITY
        ===================================================== */}

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
