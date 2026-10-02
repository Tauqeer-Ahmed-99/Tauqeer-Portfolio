import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "@/lib/data";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans" 
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#09090b" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
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
    creator: "@tauqeerkhan", // Assuming twitter handle or replace as necessary
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen text-foreground font-sans antialiased bg-zinc-950 selection:bg-white/10 selection:text-white relative overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
