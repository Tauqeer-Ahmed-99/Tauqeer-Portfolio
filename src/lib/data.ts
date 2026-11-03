export const siteMetadata = {
  name: "Tauqeer Khan",
  title: "Senior Software Engineer",
  description:
    "Tauqeer Khan, Senior Software Engineer at Ingram Micro. React, TypeScript, Next.js, mobile apps, and Raspberry Pi projects. Based in Kalyan, India.",
  summary:
    "Senior Software Engineer with 5+ years of experience building production web applications used across 50+ countries. Strong focus on React.js, TypeScript, Next.js, Node.js, PostgreSQL, and frontend architecture. Experienced in building shared UI components, improving application performance, reviewing code, mentoring engineers, and working with business stakeholders.",
  email: "tauqueerrkhan@gmail.com",
  phone: "+91 88799 98633",
  location: "Kalyan, Maharashtra, India",
  github: "https://github.com/Tauqeer-Ahmed-99",
  linkedin: "https://www.linkedin.com/in/tauqeerahmed99",
  website: "https://tauqeer-portfolio-green.vercel.app",
  instagram: "",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  frontend: [
    "React.js",
    "TypeScript",
    "Next.js",
    "JavaScript (ES6+)",
    "React Query",
    "Tailwind CSS",
    "MUI",
    "Fabric/Fluent UI",
    "HTML",
    "CSS",
  ],
  backend: [
    "Node.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Drizzle ORM",
    "SQLAlchemy",
    "PostgreSQL",
    "MySQL",
    "REST APIs",
    "JWT",
  ],
  mobile: ["React Native", "Flutter", "Expo", "Flutter Provider"],
  devOps: [
    "Docker",
    "Docker Compose",
    "Git",
    "GitHub",
    "Bitbucket",
    "CI/CD",
    "Redis",
    "BullMQ",
    "Traefik",
    "Cloudflare Tunnel",
  ],
  iotAndSystems: [
    "IoT",
    "Raspberry Pi",
    "Python",
    "Go (exploring)",
    "Rust (exploring)",
    "WebRTC",
    "Mediasoup",
  ],
  other: [
    "Firebase",
    "WorkOS",
    "Azure Communication Services",
    "Google Maps APIs",
  ],
};

export const experience = [
  {
    company: "Ingram Micro",
    role: "Senior Software Engineer",
    location: "Mumbai, Maharashtra, India",
    date: "Apr 2026 - Present",
    responsibilities: [
      "Drive frontend development of the Claiming Microfrontend within X4A, an in-house claims-processing platform built with React.js and TypeScript — used to reclaim ~$12 billion annually.",
      "Lead the Claiming MFE frontend team — coordinating implementation, reviewing technical approaches, and resolving codebase-level issues.",
      "Define and maintain the frontend structure and build shared UI components used across 15+ teams.",
      "Lead code reviews and mentor 2 engineers on React.js and TypeScript practices, reducing PR turnaround time by ~20%.",
      "Improved frontend performance through code splitting and lazy loading.",
    ],
  },
  {
    company: "Ingram Micro",
    role: "Associate Software Developer",
    location: "Mumbai, Maharashtra, India",
    date: "Dec 2021 - Mar 2026",
    responsibilities: [
      "Developed and maintained the IM360 CRM web application used across 50+ countries using React.js, TypeScript, and Fabric/Fluent UI — supports ~7% of Ingram Micro's yearly revenue.",
      "Improved application performance by 30% through efficient state management and frontend implementation.",
      "Diagnosed and resolved production incidents with 90% faster turnaround.",
      'Developed "Hive", a Flutter-based mobile app for office desk reservations, improving employee efficiency by 60%.',
      'Led development of "IM Learning", a workforce development platform.',
      "Interviewed 35+ candidates for engineering roles and trained 30+ developers in React.js.",
    ],
  },
];

export const projects = [
  {
    title: "NMT Deploy",
    category: "web",
    selected: true,
    subtitle: "Self-hosted deployment platform",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "BullMQ",
      "Docker",
    ],
    link: "https://deploy.nmtsolutions.in/",
    github: "",
    image: "/images/nmt-deploy.png",
    description: [
      "Deploy GitHub repositories to Docker on your own server. Includes framework detection, encrypted environment variables, deployment history, and live build logs.",
      "Designed a monorepo architecture with Next.js, tRPC, and a Node.js worker for orchestration.",
    ],
  },
  {
    title: "Control Nest V2",
    subtitle: "Home automation",
    category: "connected",
    selected: true,
    technologies: [
      "React Native",
      "Expo",
      "Next.js",
      "FastAPI",
      "Raspberry Pi",
      "PostgreSQL",
    ],
    link: "https://controlnest-v2.nmt-solutions.in/",
    github: "https://github.com/Tauqeer-Ahmed-99/Control-Nest-v2",
    download:
      "https://github.com/Tauqeer-Ahmed-99/Control-Nest-v2/releases/latest",
    image: "/images/control-nest-v2.png",
    description: [
      "Control lights, fans, and relay-connected devices with a mobile app and Raspberry Pi. Supports multiple houses, room management, device schedules, and shared access.",
      "Built the Expo app, Next.js API, and FastAPI controller. The Pi handles local discovery, GPIO control, remote access through Cloudflare Tunnel, and signed updates with recovery.",
    ],
  },
  {
    title: "Vaultify",
    subtitle: "Personal and shared ledgers",
    category: "mobile",
    selected: true,
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
    link: "https://github.com/Tauqeer-Ahmed-99/Vaultify/releases/latest",
    github: "https://github.com/Tauqeer-Ahmed-99/Vaultify",
    download: "https://github.com/Tauqeer-Ahmed-99/Vaultify/releases/latest",
    image: "/images/vaultify.png",
    description: [
      "An Android app for tracking money paid, received, and owed. Keep personal ledgers or share accounts with a group, with payment notes, transaction history, and balances in rupees.",
      "Includes group invitations, member permissions, Firebase sync, push notifications, and over-the-air app updates. Payment entries record transactions made elsewhere.",
    ],
  },
  {
    title: "NMT Store",
    category: "web",
    selected: true,
    subtitle: "E-commerce",
    technologies: [
      "Next.js",
      "React Query",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Azure Communication Service",
      "WorkOS",
    ],
    link: "https://nmtstore-nmt-store-web.vercel.app/",
    github: "",
    image: "/images/nmt-store.png",
    description: [
      "Full-stack e-commerce platform with product listing, detailed pages, customer reviews, and cart workflows.",
      "Integrated Microsoft Azure Communication Services for messaging and WorkOS for authentication.",
    ],
  },
  {
    title: "Meet Flow",
    category: "web",
    selected: true,
    subtitle: "Video conferencing",
    technologies: [
      "Node.js",
      "TypeScript",
      "Mediasoup",
      "React",
      "Drizzle ORM",
      "PostgreSQL",
    ],
    link: "https://meet-flow-ms.vercel.app/",
    github: "",
    image: "/images/meet-flow.png",
    description: [
      "A WebRTC video conferencing app built with React and Mediasoup. Work in progress.",
    ],
  },
  {
    title: "AutoPi Hub",
    category: "connected",
    selected: true,
    subtitle: "Original home automation backend",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "Raspberry Pi"],
    link: "https://github.com/Tauqeer-Ahmed-99/AutoPi-Hub",
    github: "https://github.com/Tauqeer-Ahmed-99/AutoPi-Hub",
    image: "/images/autopi-hub.jpg",
    description: [
      "The original Raspberry Pi home automation backend. A FastAPI service for controlling connected devices, later developed into Control Nest V2.",
    ],
  },
  {
    title: "Control Nest",
    category: "mobile",
    selected: false,
    subtitle: "Smart Home Control",
    technologies: ["React Native", "React Query", "Expo"],
    link: "https://github.com/Tauqeer-Ahmed-99/Control-Nest/releases/tag/v1.0.1",
    github: "https://github.com/Tauqeer-Ahmed-99/Control-Nest",
    image: "/svg/control-nest.svg",
    description: [
      "React Native application for remote smart home control with real-time automation.",
    ],
  },
  {
    title: "Cryptowall",
    category: "web",
    selected: false,
    subtitle: "Crypto Dashboard",
    technologies: ["React", "Python", "Tailwind CSS"],
    link: "https://github.com/Tauqeer-Ahmed-99/Cryptowall",
    github: "https://github.com/Tauqeer-Ahmed-99/Cryptowall",
    image: "/svg/cryptowall.svg",
    description: [
      "Cryptocurrency tracking dashboard and platform built with React and Python.",
    ],
  },
];

export const otherProjects = [
  {
    title: "Tasks Management App",
    technologies: "Flutter, Back4App, Provider SDK",
    github:
      "https://github.com/Tauqeer-Ahmed-99/Tasks-Management-Flutter-BITS-Pilani",
  },
  {
    title: "Assets Management App",
    technologies: "Flutter, Firebase, Provider SDK",
    github: "https://github.com/Tauqeer-Ahmed-99/Flutter-Assets-Management-App",
  },
  {
    title: "Auth NodeJS MySQL",
    technologies: "Node.js, TypeScript, MySQL, JWT",
    github: "https://github.com/Tauqeer-Ahmed-99/Auth-NodeJS-MySQL",
  },
  {
    title: "Maha Tours / Travel Companion",
    technologies: "React Native, Google Maps",
    github: "https://github.com/Tauqeer-Ahmed-99/Maha-Tours",
  },
  {
    title: "Apps Toolchain Tracker",
    technologies: "Next.js, PostgreSQL",
    github: "https://github.com/Tauqeer-Ahmed-99",
  },
  {
    title: "My Portfolio",
    technologies: "Next.js, React, Tailwind",
    github: "https://github.com/Tauqeer-Ahmed-99/Tauqeer-Portfolio",
  },
  {
    title: "My Networks",
    technologies: "React, Firestore",
    github: "https://github.com/Tauqeer-Ahmed-99",
  },
  {
    title: "Train Ticket Booking",
    technologies: "React, Node.js, MUI",
    github: "https://github.com/Tauqeer-Ahmed-99",
  },
  {
    title: "Music Player",
    technologies: "React, Tailwind, FirestoreDB",
    github: "https://github.com/Tauqeer-Ahmed-99",
  },
  {
    title: "Ping Me Chat",
    technologies: "Flutter, Firestore RTDB",
    github: "https://github.com/Tauqeer-Ahmed-99",
  },
];

export const education = [
  {
    degree:
      "Master of Technology (M.Tech), Software Systems, Specialization in IoT",
    institution: "BITS Pilani - Work Integrated Learning Programmes",
    date: "Jan 2023 - Jan 2025",
    details: "CGPA: 7.87",
  },
  {
    degree: "Bachelor's Degree, Mechanical Engineering",
    institution: "Lokmanya Tilak College of Engineering",
    date: "2017 - 2020",
    details: "CGPA: 7.60",
  },
  {
    degree: "Diploma, Mechanical Engineering",
    institution: "M.H. Saboo Siddik College of Engineering",
    date: "Aug 2014 - Jun 2017",
    details: "",
  },
];
