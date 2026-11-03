import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { profileStructuredData, serializeStructuredData } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeStructuredData(profileStructuredData),
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
        <p>© {new Date().getFullYear()} Tauqeer Khan</p>
        <a href="#hero">
          Back to top <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
