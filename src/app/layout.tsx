import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteMetadata } from "@/lib/data";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#101219" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.website),
  title: {
    default: `${siteMetadata.name} | ${siteMetadata.title}`,
    template: `%s | ${siteMetadata.name}`,
  },
  description: siteMetadata.description,
  keywords: [
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Tauqeer Khan",
    "Senior Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: siteMetadata.name, url: siteMetadata.website }],
  creator: siteMetadata.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMetadata.website,
    title: `${siteMetadata.name} | ${siteMetadata.title}`,
    description: siteMetadata.description,
    siteName: siteMetadata.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteMetadata.name} | ${siteMetadata.title}`,
    description: siteMetadata.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
