import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Toaster } from "sonner";

import { siteMetadata } from "@/lib/data";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteMetadata.name,
    jobTitle: siteMetadata.title,
    url: siteMetadata.website,
    sameAs: [
      siteMetadata.github,
      siteMetadata.linkedin,
    ],
    description: siteMetadata.description,
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#18181b",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fafafa",
          },
        }}
      />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-zinc-500 text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Tauqeer Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
