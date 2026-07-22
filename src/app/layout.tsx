import type { Metadata } from "next";
import localFont from "next/font/local";

import SiteChrome from "@/components/layout/SiteChrome";
import SmoothScroll from "@/components/providers/SmoothScroll";

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
  title: {
    default: "Mohit Panchal | UX/UI Designer",
    template: "%s | Mohit Panchal",
  },
  description:
    "Portfolio of Mohit Panchal, a UX/UI and Product Designer creating thoughtful digital products and experiences.",
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
        {children}
      </body>
    </html>
  );
}
