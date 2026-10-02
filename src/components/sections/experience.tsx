"use client";

import { experience } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-[1px] bg-zinc-700" />
          <span className="text-zinc-500 uppercase tracking-widest text-sm">Career</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-16">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-[1px] bg-white/5" />

          <div className="space-y-16">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 w-3 h-3 -translate-x-1/2 rounded-full bg-zinc-800 border-2 border-zinc-600" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="w-4 h-4 text-zinc-500" />
                      <span className="text-zinc-400 font-light">{exp.company}</span>
                      <span className="text-zinc-600">·</span>
                      <span className="text-zinc-500 text-sm">{exp.location}</span>
                    </div>
                  </div>
                  <span className="text-zinc-500 text-sm shrink-0 font-medium bg-white/5 px-3 py-1 rounded-full">
                    {exp.date}
                  </span>
                </div>

                <ul className="space-y-3 mt-4">
                  {exp.responsibilities.map((resp, ridx) => (
                    <li key={ridx} className="text-zinc-400 text-sm leading-relaxed font-light flex gap-3">
                      <span className="text-zinc-600 mt-1.5 shrink-0">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
