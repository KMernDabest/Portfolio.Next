import type { Skill } from "@/app/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", color: "#61DAFB", category: "frontend" },
  { name: "Next.js", icon: "nextjs", color: "#ffffff", category: "frontend" },
  { name: "TypeScript", icon: "typescript", color: "#3178C6", category: "frontend" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E", category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#06B6D4", category: "frontend" },
  { name: "Flutter", icon: "flutter", color: "#02569B", category: "frontend" },
  { name: "HTML5", icon: "html", color: "#E34F26", category: "frontend" },
  { name: "CSS3", icon: "css", color: "#1572B6", category: "frontend" },

  // Backend
  { name: "Node.js", icon: "nodejs", color: "#339933", category: "backend" },
  { name: "Python", icon: "python", color: "#3776AB", category: "backend" },
  { name: "Express", icon: "express", color: "#ffffff", category: "backend" },
  { name: "FastAPI", icon: "fastapi", color: "#009688", category: "backend" },
  { name: "GraphQL", icon: "graphql", color: "#E10098", category: "backend" },
  { name: "REST API", icon: "api", color: "#FF6B6B", category: "backend" },

  // Database
  { name: "PostgreSQL", icon: "postgresql", color: "#4169E1", category: "database" },
  { name: "MongoDB", icon: "mongodb", color: "#47A248", category: "database" },
  { name: "Redis", icon: "redis", color: "#DC382D", category: "database" },
  { name: "MySQL", icon: "mysql", color: "#4479A1", category: "database" },

  // Tools
  { name: "Git", icon: "git", color: "#F05032", category: "tools" },
  { name: "Docker", icon: "docker", color: "#2496ED", category: "tools" },
  { name: "AWS", icon: "aws", color: "#FF9900", category: "tools" },
  { name: "Kubernetes", icon: "kubernetes", color: "#326CE5", category: "tools" },
  { name: "GitHub Actions", icon: "github", color: "#ffffff", category: "tools" },
  { name: "VS Code", icon: "vscode", color: "#007ACC", category: "tools" },
];

export const skillCategories = [
  { id: "frontend", label: "Frontend", icon: "🎨" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "database", label: "Database", icon: "🗃️" },
  { id: "tools", label: "Tools", icon: "🛠️" },
] as const;
