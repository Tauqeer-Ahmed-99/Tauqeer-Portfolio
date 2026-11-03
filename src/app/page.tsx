import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { siteMetadata } from "@/lib/data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteMetadata.name,
    jobTitle: siteMetadata.title,
    url: siteMetadata.website,
    sameAs: [siteMetadata.github, siteMetadata.linkedin],
    description: siteMetadata.description,
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <footer className="site-footer section-shell">
        <div className="footer-signoff">
          <span className="brand-mark" aria-hidden="true">
            tk<span>.</span>
          </span>
          <span>Thoughtfully built, from the ground up.</span>
        </div>
        <p>© {new Date().getFullYear()} Tauqeer Khan</p>
        <a href="#hero">
          Back to top <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
