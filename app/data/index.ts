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
  { name: "Git", icon: "git", color: "#f05032", category: "tools" },
  { name: "Docker", icon: "docker", color: "#2496ed", category: "tools" },

  { name: "Figma", icon: "figma", color: "#f24e1e", category: "tools" },
];

export const projects: Project[] = [
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
    github: "https://github.com/KMernDabest/portfolio",
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
    "I'm Rith Seyhak, an aspiring software engineer based in Phnom Penh, Cambodia. I'm passionate about building clean, efficient, and user-friendly web applications.",
  detail:
    "Currently pursuing a degree in Computer Science at the Royal University of Phnom Penh, I spend my time learning new technologies, working on side projects, and contributing to the local tech community. I enjoy turning ideas into reality through code and am always looking for opportunities to grow as a developer.",
  interests: [
    "Full-Stack Web Development",
    "UI/UX Design",
    "Open Source",
    "Problem Solving",
  ],
};
