"use client";

import { projects, otherProjects } from "@/lib/data";
import Image from "next/image";
import { skillIconMap } from "@/components/sections/skills";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-zinc-700" />
          <span className="text-zinc-500 uppercase tracking-widest text-sm">Portfolio</span>
        </div>

        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[16/10] bg-white/[0.03] rounded-2xl mb-6 overflow-hidden relative border border-white/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)] group-hover:border-white/10">
                {project.image ? (
                  project.image.endsWith(".svg") ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain p-12 opacity-40 group-hover:opacity-80 transition-opacity duration-500"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                    />
                  )
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-bold text-white/[0.03]">{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mb-2">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech, idx) => {
                      const iconPath = skillIconMap[tech];
                      return (
                        <span key={idx} className="flex items-center gap-1.5 text-xs text-zinc-400 bg-white/[0.03] border border-white/5 px-2 py-1 rounded-md">
                          {iconPath && (
                            <span className="w-3 h-3 relative shrink-0 inline-flex">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={iconPath} alt={tech} className="w-full h-full object-contain opacity-80" />
                            </span>
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:bg-white group-hover:text-zinc-950 transition-all duration-300 shrink-0"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <h3 className="text-2xl font-bold text-white tracking-tight mb-8">Other Projects</h3>
          <div className="flex flex-col border-t border-white/5">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-white/5 group hover:bg-white/[0.02] px-4 -mx-4 rounded-xl transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <h4 className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">{project.title}</h4>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-700" />
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    {project.technologies.split(", ").map((tech, idx) => {
                      const cleanTech = tech.trim();
                      const iconPath = skillIconMap[cleanTech];
                      return (
                        <span key={idx} className="flex items-center gap-1.5 text-xs text-zinc-400 bg-white/[0.03] border border-white/5 px-2 py-1 rounded-md">
                          {iconPath && (
                            <span className="w-3 h-3 relative shrink-0 inline-flex">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={iconPath} alt={cleanTech} className="w-full h-full object-contain opacity-80" />
                            </span>
                          )}
                          {cleanTech}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium"
                    >
                      GitHub <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
