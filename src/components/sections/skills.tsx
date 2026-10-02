"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export const skillIconMap: Record<string, string> = {
  "React.js": "/svg/react.svg",
  "React": "/svg/react.svg",
  "TypeScript": "/svg/typescript.svg",
  "Next.js": "/svg/nextjs.svg",
  "JavaScript (ES6+)": "/svg/javascript.svg",
  "Tailwind CSS": "/svg/tailwind.svg",
  "Tailwind": "/svg/tailwind.svg",
  "MUI": "/svg/mui.svg",
  "HTML": "/svg/html.svg",
  "CSS": "/svg/css.svg",
  "Node.js": "/svg/nodejs.svg",
  "Python": "/svg/python.svg",
  "FastAPI": "/svg/fastapi.svg",
  "SQLAlchemy": "/svg/sqlalchemy.svg",
  "Drizzle ORM": "/svg/drizzle.svg",
  "PostgreSQL": "/svg/postgresql.svg",
  "MySQL": "/svg/mysql.svg",
  "React Native": "/svg/react.svg",
  "React Query": "/svg/react-query.svg",
  "Flutter": "/svg/flutter.svg",
  "Flutter Provider": "/svg/flutter.svg",
  "Provider SDK": "/svg/flutter.svg",
  "Expo": "/svg/expo.svg",
  "Firebase": "/svg/firebase.svg",
  "Firestore": "/svg/firebase.svg",
  "FirestoreDB": "/svg/firebase.svg",
  "Firestore RTDB": "/svg/firebase.svg",
  "MongoDB": "/svg/mongodb.svg",
  "Docker": "/svg/docker.svg",
  "Docker Compose": "/svg/docker.svg",
  "Git": "/svg/git.svg",
  "GitHub": "/svg/github.svg",
  "Bitbucket": "/svg/bitbucket.svg",
  "Redis": "/svg/redis.svg",
  "Traefik": "/svg/traefik.svg",
  "Cloudflare Tunnel": "/svg/cloudflare.svg",
  "Raspberry Pi": "/svg/raspberrypi.svg",
  "Go (exploring)": "/svg/go.svg",
  "Rust (exploring)": "/svg/rust.svg",
  "Azure Communication Services": "/svg/azure.svg",
  "Google Maps APIs": "/svg/google-maps.svg",
  "Google Maps": "/svg/google-maps.svg",
  "JWT": "/svg/jwt.svg",
  "Fluent UI": "/svg/traefik.svg",
  "Mediasoup": "/images/mediasoup.webp",
  "Fabric/Fluent UI": "/svg/fluent.svg",
  "REST APIs": "/svg/api.svg",
  "BullMQ": "/images/bullmq.png",
  "CI/CD": "/svg/cicd.svg",
  "WebRTC": "/svg/webrtc.svg",
  "IoT": "/svg/iot.svg",
  "WorkOS": "/svg/workos.svg"
};

const groups = [
  { label: "Frontend", items: skills.frontend },
  { label: "Backend", items: skills.backend },
  { label: "Mobile", items: skills.mobile },
  { label: "DevOps & Infrastructure", items: skills.devOps },
  { label: "IoT & Systems", items: skills.iotAndSystems },
  { label: "Other", items: skills.other },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-white/5 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-24">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-zinc-700" />
          <span className="text-zinc-500 uppercase tracking-widest text-sm">Expertise</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Technical Skills</h2>
        <p className="text-zinc-400 font-light max-w-2xl mb-16">
          Technologies and tools I use to build robust and scalable digital products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gIdx * 0.1 }}
              className="bg-white/[0.02] rounded-2xl border border-white/5 p-6 hover:border-white/10 transition-all duration-300"
            >
              <h3 className="text-white font-medium text-lg mb-5 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-zinc-600" />
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, idx) => {
                  const iconPath = skillIconMap[skill];
                  return (
                    <span
                      key={idx}
                      className="flex items-center gap-2 text-sm text-zinc-400 bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-lg hover:bg-white/[0.06] hover:border-white/10 hover:text-zinc-200 transition-all duration-200 cursor-default"
                    >
                      {iconPath && (
                        <span className="w-4 h-4 relative shrink-0 inline-flex">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={iconPath}
                            alt={skill}
                            className="w-full h-full object-contain"
                          />
                        </span>
                      )}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
