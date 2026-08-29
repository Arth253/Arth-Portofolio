export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C", "Javascript", "MATLAB"],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"]
  },
  {
    category: "Backend",
    items: ["Spring Boot","Node.js", "Express", "REST APIs", "PHP"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    category: "Tools",
    items: ["Git", "AWS", "GitHub", "VS Code", "Vite"]
  },
];