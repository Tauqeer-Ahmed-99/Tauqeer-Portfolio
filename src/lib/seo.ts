import type { Metadata } from "next";
import { projects, siteMetadata } from "@/lib/data";

export const canonicalUrl = new URL("/", siteMetadata.website).href;
export const pageTitle = `${siteMetadata.name} | ${siteMetadata.title}`;
export const socialImageAlt = `${siteMetadata.name}, ${siteMetadata.title}. React, TypeScript, Next.js, mobile apps, and IoT.`;
export const isPreviewDeployment = process.env.VERCEL_ENV === "preview";
const socialImageUrl = new URL(
  "/opengraph-image",
  isPreviewDeployment && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : canonicalUrl,
).href;

export function absoluteUrl(path: string) {
  return new URL(path, canonicalUrl).href;
}

export const seoMetadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: { default: pageTitle, template: `%s | ${siteMetadata.name}` },
  description: siteMetadata.description,
  applicationName: `${siteMetadata.name}'s portfolio`,
  alternates: { canonical: canonicalUrl },
  authors: [{ name: siteMetadata.name, url: canonicalUrl }],
  creator: siteMetadata.name,
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: canonicalUrl,
    title: pageTitle,
    description: siteMetadata.description,
    siteName: `${siteMetadata.name}'s portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteMetadata.description,
    images: [{ url: socialImageUrl, alt: socialImageAlt }],
  },
  robots: {
    index: !isPreviewDeployment,
    follow: true,
    googleBot: {
      index: !isPreviewDeployment,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personId = absoluteUrl("/#person");
const websiteId = absoluteUrl("/#website");

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: siteMetadata.name,
      jobTitle: siteMetadata.title,
      description: siteMetadata.summary,
      url: canonicalUrl,
      image: absoluteUrl("/images/profile.jpeg"),
      sameAs: [siteMetadata.github, siteMetadata.linkedin],
      worksFor: { "@type": "Organization", name: "Ingram Micro" },
      homeLocation: { "@type": "Place", name: siteMetadata.location },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "BITS Pilani" },
        {
          "@type": "CollegeOrUniversity",
          name: "Lokmanya Tilak College of Engineering",
        },
      ],
      knowsAbout: [
        "React",
        "TypeScript",
        "Next.js",
        "Frontend architecture",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "React Native",
        "IoT",
        "Raspberry Pi",
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: canonicalUrl,
      name: `${siteMetadata.name}'s portfolio`,
      inLanguage: "en-IN",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": absoluteUrl("/#profile"),
      url: canonicalUrl,
      name: pageTitle,
      description: siteMetadata.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/profile.jpeg"),
      },
      hasPart: projects
        .filter((project) => project.selected)
        .map((project) => ({
          "@type": "CreativeWork",
          name: project.title,
          description: project.description[0],
          url: project.link,
          creator: { "@id": personId },
          keywords: project.technologies.join(", "),
        })),
    },
  ],
};

export function serializeStructuredData(value: unknown) {
  // Escape HTML delimiters so profile text cannot close the script element.
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
