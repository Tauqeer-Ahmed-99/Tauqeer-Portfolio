import {
  AssetsIcon,
  AuthIcon,
  AutoPiHubIcon,
  ControlNestIcon,
  CryptoWallIcon,
  CSSIcon,
  DrizzleIcon,
  ExpoIcon,
  FirebaseIcon,
  FirestoreIcon,
  FlutterIcon,
  GitHubSquareIcon,
  HTMLIcon,
  IngramMicroLogo,
  InstagramIcon,
  JavascriptIcon,
  LinkedInIcon,
  MahaToursIcon,
  MongoDBIcon,
  MUIIcon,
  MySQLIcon,
  NextIcon,
  NodeJSIcon,
  PostgreSQL,
  PythonIcon,
  ReactIcon,
  SassIcon,
  ServerIcon,
  StyledComponentsIcon,
  TailwindIcon,
  TasksIcon,
  TypescriptIcon,
  WebIcon,
} from "./assets";

const navItems: { label: string; name: string; path: string }[] = [
  {
    label: "Home",
    name: "home",
    path: "#home",
  },
  {
    label: "About",
    name: "about",
    path: "#about",
  },
  {
    label: "Projects",
    name: "projects",
    path: "#projects",
  },
  {
    label: "Contact",
    name: "contact",
    path: "#contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: WebIcon,
  },
  {
    title: "React Native Developer",
    icon: ExpoIcon,
  },
  {
    title: "Flutter Developer",
    icon: FlutterIcon,
  },
  {
    title: "Backend Developer",
    icon: ServerIcon,
  },
];

const experiences = [
  {
    title: "Software Developer",
    companyName: "Ingram Micro",
    icon: IngramMicroLogo,
    iconBg: "#383E56",
    date: "December 2021 - Now",
    year: 2021,
    month: 12,
    points: [
      "Developed and maintained a global web application using React.js (TypeScript) with MUI and Fabric/Fluent UI interfaces, successfully deployed across 50+ countries.",
      "Actively collaborated with business owners to gather requirements, translate them into actionable development tasks, and implement both business logic and user interface elements tailored to diverse user needs.",
      "Efficiently handled production incidents by communicating directly with business users, diagnosing issues, and delivering timely resolutions to ensure minimal disruption to business operations.",
      "Built a cross-platform mobile application using Flutter for iOS and Android, with Node.js backend and React frontend, to manage office entry, exit, and workstation booking, aiding in safe workspace utilization during COVID.",
      "Conducted 20-25 candidate interviews, successfully hiring and onboarding 5 top-performing team members who have become valuable contributors to the company’s success.",
    ],
  },
];

const technologies = [
  {
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    name: "CSS",
    icon: CSSIcon,
  },
  {
    name: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    name: "TypeScript",
    icon: TypescriptIcon,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Next",
    icon: NextIcon,
  },
  {
    name: "React Native",
    icon: ReactIcon,
  },
  {
    name: "Flutter",
    icon: FlutterIcon,
  },
  {
    name: "Expo",
    icon: ExpoIcon,
  },
  {
    name: "NodeJS",
    icon: NodeJSIcon,
  },
  {
    name: "Python",
    icon: PythonIcon,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
  },
  {
    name: "MySQL",
    icon: MySQLIcon,
  },
  {
    name: "Drizzle ORM",
    icon: DrizzleIcon,
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    name: "Firestore",
    icon: FirestoreIcon,
  },
  {
    name: "MongoDB",
    icon: MongoDBIcon,
  },
  {
    name: "Material UI",
    icon: MUIIcon,
  },
  {
    name: "Tailwind",
    icon: TailwindIcon,
  },
  {
    name: "Sass",
    icon: SassIcon,
  },
  {
    name: "Style Comps",
    icon: StyledComponentsIcon,
  },
];

const projects = [
  {
    name: "AutoPi Hub",
    description:
      "The AutoPi Hub Home Automation System provides a simple, secure, and flexible way to automate home devices using Raspberry Pi or similar device and a mobile app (Control Nest).",
    tags: ["Python", "FastAPI", "SQLAlchemy"],
    image: AutoPiHubIcon,
    source_code_link: "https://github.com/Tauqeer-Ahmed-99/AutoPi-Hub",
  },
  {
    name: "Control Nest",
    description:
      "Control Nest is the mobile app companion to AutoPi Hub, designed to provide an intuitive interface for managing and automating your home devices. It allows users to control devices, create rooms, and automate tasks from their mobile devices.",
    tags: ["React Native", "React Query", "Expo"],
    image: ControlNestIcon,
    source_code_link: "https://github.com/Tauqeer-Ahmed-99/Control-Nest",
  },
  {
    name: "Maha Tours & Travels",
    description:
      "Maha Tours & Travels is a Freelancing App Developed for the specific need of a tours and travel orgamization to manage their invoices and payments.",
    tags: ["React", "React Context", "Material Joy UI", "Firebase"],
    image: MahaToursIcon,
    source_code_link: "https://maha-tours-and-travels.vercel.app/",
  },
  {
    name: "Tasks Management",
    description:
      "Personalized tasks dashboard.Shows the statuses of tasks created (Not Started/In Progress/Done). Users can View, Edit and Delete the Tasks.",
    tags: ["Flutter", "Back4App", "Flutter Provider SDK"],
    image: TasksIcon,
    source_code_link:
      "https://github.com/Tauqeer-Ahmed-99/Tasks-Management-Flutter-BITS-Pilani",
  },
  {
    name: "Assets Management",
    description:
      "Assets Management app is developed to manage the debits and credits with the people in our day to day life.",
    tags: ["Flutter", "Firebase", "Flutter Provider SDK"],
    image: AssetsIcon,
    source_code_link:
      "https://github.com/Tauqeer-Ahmed-99/Flutter-Assets-Management-App",
  },
  {
    name: "Cryptowall",
    description:
      "Cryptowall is a python based backend learning project. Implemented a very simple blockchain and its management. Backend was built with Python and Flask while Frontend was built with React and React Context.",
    tags: ["React", "Firebase Auth", "Python", "Flask"],
    image: CryptoWallIcon,
    source_code_link: "https://github.com/Tauqeer-Ahmed-99/blockchain-frontend",
  },
  {
    name: "Auth NodeJS MySQL",
    description:
      "Auth NodJS MySQL is a project to implement the Authentication and Authorization for learning the NodeJS, MySQL and JWT and their intricacies.",
    tags: ["NodeJS (TS)", "MySQL"],
    image: AuthIcon,
    source_code_link: "https://github.com/Tauqeer-Ahmed-99/Auth-NodeJS-MySQL",
  },
];

const socialNetworks = [
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/tauqeerahmed99/",
  },
  {
    name: "Github",
    icon: GitHubSquareIcon,
    link: "https://github.com/Tauqeer-Ahmed-99/",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    link: "https://www.instagram.com/_tauqeer_ahmed/",
  },
];

export {
  navItems,
  services,
  experiences,
  technologies,
  projects,
  socialNetworks,
};
