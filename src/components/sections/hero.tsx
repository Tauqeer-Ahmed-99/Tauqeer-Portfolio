"use client";

import { siteMetadata, navLinks } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown } from "lucide-react";
import { useState } from "react";

// Inline SVG brand icons (lucide-react removed brand icons)
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <a href="#hero" className="text-xl font-bold text-white tracking-tight">
            TK<span className="text-zinc-500">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-xl border-b border-white/5"
            >
              <div className="flex flex-col px-6 py-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-zinc-300 hover:text-white transition-colors py-2 border-b border-white/5 last:border-0"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col md:flex-row items-center pt-24 md:pt-0 relative">
        {/* Left Sidebar (Socials) — Desktop only */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-6 w-20 fixed left-6 top-1/2 -translate-y-1/2 z-40">
          <div className="w-[1px] h-16 bg-zinc-800" />
          <a href={siteMetadata.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white hover:-translate-y-1 transition-all">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={siteMetadata.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white hover:-translate-y-1 transition-all">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          {siteMetadata.instagram && (
            <a href={siteMetadata.instagram} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white hover:-translate-y-1 transition-all">
              <InstagramIcon className="w-5 h-5" />
            </a>
          )}
          <div className="w-[1px] h-16 bg-zinc-800" />
        </div>

        {/* Scroll indicator — Desktop only */}
        <div className="hidden lg:flex items-center gap-2 fixed right-6 bottom-8 z-40 -rotate-90 origin-bottom-right">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap">Scroll Down</span>
          <div className="w-8 h-[1px] bg-zinc-700" />
        </div>

        {/* Main hero text */}
        <div className="flex-1 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-zinc-700" />
              <span className="text-zinc-400 uppercase tracking-widest text-sm">Hello</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
              I&apos;m {siteMetadata.name}
            </h1>

            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
              {siteMetadata.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="bg-white text-zinc-950 px-8 py-4 rounded-full font-medium tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.08)] text-sm"
              >
                Learn more
              </a>
              <a
                href={siteMetadata.github}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 text-zinc-300 px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/5 hover:border-white/20 transition-all duration-300 text-sm flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="/resume.pdf"
                download
                className="border border-white/10 text-zinc-300 px-8 py-4 rounded-full font-medium tracking-wide hover:bg-white/5 hover:border-white/20 transition-all duration-300 text-sm flex items-center gap-2"
              >
                <ArrowDown className="w-4 h-4" />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Mobile social links */}
          <div className="flex lg:hidden gap-6 mt-12 text-zinc-500">
            <a href={siteMetadata.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href={siteMetadata.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
