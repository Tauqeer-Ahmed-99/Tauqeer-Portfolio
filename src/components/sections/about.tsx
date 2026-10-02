"use client";

import { siteMetadata } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Profile Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 relative shrink-0"
          >
            {/* PLACEHOLDER: Add your profile photo as /public/images/profile.jpg */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/60 to-zinc-950/80" />
            <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
              <Image 
                src="/images/profile.jpeg" 
                alt="Tauqeer Ahmed Khan" 
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover" 
                priority
              />
            </div>
          </motion.div>

          {/* Text Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-zinc-700" />
              <span className="text-zinc-500 uppercase tracking-widest text-sm">About Me</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
              Building performant web applications at scale.
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-6">
              {siteMetadata.summary}
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed font-light mb-10">
              I also build full-stack and infrastructure projects involving Docker, Redis, BullMQ, WebRTC, IoT, and Raspberry Pi. Currently exploring Go, Rust, and IoT systems.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-white/5">
              <div>
                <p className="text-3xl font-bold text-white">5+</p>
                <p className="text-zinc-500 text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-zinc-500 text-sm mt-1">Countries Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">15+</p>
                <p className="text-zinc-500 text-sm mt-1">Teams Collaborated</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
