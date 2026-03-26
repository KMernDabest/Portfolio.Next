import type { Project, Experience, Skill, NavLink, SocialLink } from "../types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/KMernDabest",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/seyhak-rith-wk",
    icon: "linkedin",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", icon: "html", color: "#e34f26", category: "frontend" },
  { name: "CSS", icon: "css", color: "#1572b6", category: "frontend" },
  { name: "JavaScript", icon: "javascript", color: "#f7df1e", category: "frontend" },
  { name: "TypeScript", icon: "typescript", color: "#3178c6", category: "frontend" },
  { name: "React", icon: "react", color: "#61dafb", category: "frontend" },
  { name: "Next.js", icon: "nextjs", color: "#000000", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06b6d4", category: "frontend" },
  // Backend
  { name: "Dart", icon: "dart", color: "#0175c2", category: "frontend" },
  { name: "Flutter", icon: "flutter", color: "#02569b", category: "frontend" },
  // Backend
  { name: "Node.js", icon: "nodejs", color: "#339933", category: "backend" },
  { name: "Express", icon: "express", color: "#000000", category: "backend" },
  { name: "Python", icon: "python", color: "#3776ab", category: "backend" },
  { name: "Java", icon: "java", color: "#ed8b00", category: "backend" },
  // Database
  { name: "MongoDB", icon: "mongodb", color: "#47a248", category: "database" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169e1", category: "database" },
  { name: "MySQL", icon: "mysql", color: "#4479a1", category: "database" },
  // Tools
  { name: "Unity", icon: "unity", color: "#000000", category: "tools" },
  { name: "C#", icon: "csharp", color: "#9B4F96", category: "tools" },
  { name: "Git", icon: "git", color: "#f05032", category: "tools" },
  { name: "Docker", icon: "docker", color: "#2496ed", category: "tools" },
  { name: "Firebase", icon: "firebase", color: "#ffca28", category: "tools" },
  { name: "Cloudflare", icon: "cloudflare", color: "#f38020", category: "tools" },
  { name: "Vercel", icon: "vercel", color: "#000000", category: "tools" },
  { name: "Postman", icon: "postman", color: "#ff6c37", category: "tools" },
  { name: "Figma", icon: "figma", color: "#f24e1e", category: "tools" },
];

export const projects: Project[] = [
  {
    id: "modula-pos",
    title: "Modula POS",
    summary: "A POS system with pay-as-you-go functionality and unique design.",
    description:
      "A modern point-of-sale system featuring a pay-as-you-go pricing model and a uniquely crafted UI. Built to streamline retail operations with an intuitive and visually distinct interface.",
    features: [
      "Pay-as-you-go pricing model",
      "Intuitive sales and checkout flow",
      "Inventory and product management",
      "Unique, modern UI design",
    ],
    techStack: ["Flutter", "TypeScript", "Express", "PostgreSQL"],
    image: "/photos/modulapos.png",
    github: "https://github.com/Zorng/ModulaFrontend.git",
    featured: true,
  },
  {
    id: "melodia",
    title: "Melodia",
    summary: "A Spotify dashboard clone with full music playback functionality.",
    description:
      "A full-featured Spotify dashboard clone built with the MERN stack, replicating core Spotify functionalities including music playback, playlists, and a responsive player UI.",
    features: [
      "Music playback with player controls",
      "Playlist creation and management",
      "Spotify-like dashboard UI",
      "Full MERN stack implementation",
    ],
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    image: "/photos/spotify-clone.png",
    github: "https://github.com/KMernDabest/Melodia-Spotify-clone-.git",
    featured: true,
  },
  {
    id: "frostguard",
    title: "FrostGuard",
    summary: "A 3D strategic tower defense game built with Unity and C#.",
    description:
      "A 3D tower defense game where players strategically place and upgrade towers to defend against waves of enemies. Built in Unity with C#, featuring immersive environments and engaging gameplay mechanics.",
    features: [
      "3D strategic tower placement and upgrades",
      "Wave-based enemy system",
      "Immersive 3D environments",
      "Built with Unity and C#",
    ],
    techStack: ["Unity", "C#"],
    image: "/photos/Frostguard.png",
    github: "https://github.com/Ra-Fat/Frost-Guard.git",
    featured: true,
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    summary: "This personal portfolio website built with Next.js and Framer Motion.",
    description:
      "Designed and developed this portfolio site to showcase my projects and skills, featuring smooth animations and a clean, modern design.",
    features: [
      "Smooth scroll animations",
      "Responsive design",
      "Optimized performance",
      "Clean, modern UI",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/photos/portfolio.png",
    github: "https://github.com/KMernDabest/Portfolio.Next.git",
    featured: false,
  },
];

export const experiences: Experience[] = [
  {
    id: "cadt",
    type: "education",
    role: "Bachelor of Information and Communication Engineering",
    company: "Cambodia Academy of Digital Technology",
    location: "Phnom Penh, Cambodia",
    duration: "2023 - Present",
    startDate: "2023-10",
    endDate: "Present",
    description:
      "Studying Information and Communication Engineering at CADT with a strong focus on modern software development, cloud technologies, and data science.",
    highlights: [
      "Relevant coursework: Web Development, Mobile Development, Cloud Computing, Fundamentals of Data Science",
      "Completed Capstone project",
    ],
  },
];

export const aboutText = {
  intro:
    "I'm Rith Seyhak, an aspiring software engineer based in Phnom Penh, Cambodia. I'm passionate about building clean, efficient, and user-friendly web/mobile applications.",
  detail:
    "Currently pursuing a degree in Computer Science at the Cambodia Academy of Digital Technology, I spend my time learning new technologies and working on side projects. I enjoy turning ideas into reality through code and am always looking for opportunities to grow as a developer.",
  interests: [
    "Full-Stack Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Problem Solving",
  ],
};
