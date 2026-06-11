export interface Strength {
  label: string;
  pct: number;
}

export interface WhatIDoItem {
  icon: string;
  title: string;
  desc: string;
}

export interface StatItem {
  value: string;
  label: string;
  color: string;
  dynamic?: "experience";
}

export const aboutCopy = {
  seoTitle: "About Me",
  heroTitle: "Crafting Scalable Web Solutions",
  heroHighlight: "That Drive Real Business Impact",
  paragraph1:
    "Senior Frontend Engineer with 8+ years of experience delivering enterprise-grade React/JS applications for Fortune 1 clients including Walmart Global Tech and American Express.",
  paragraph2:
    "Proficient in TypeScript, Redux, GraphQL, Node.js and modern frontend tooling. Passionate about building scalable, maintainable and great user experiences.",
};

export const aboutStats: StatItem[] = [
  { value: "", label: "Years of Experience", color: "var(--green)", dynamic: "experience" },
  { value: "Fortune 1", label: "Client Experience", color: "var(--blue)" },
  { value: "Millions", label: "Users impacted", color: "var(--green)" },
  { value: "3+", label: "Developers Mentored", color: "var(--green)" },
];

export const strengths: Strength[] = [
  { label: "Problem Solving", pct: 95 },
  { label: "System Design", pct: 90 },
  { label: "Performance Optimization", pct: 92 },
  { label: "Clean Code & Best Practices", pct: 95 },
  { label: "Agile Collaboration", pct: 90 },
  { label: "Leadership & Mentoring", pct: 90 },
];

export const whatIDo: WhatIDoItem[] = [
  {
    icon: "⚙️",
    title: "Frontend Engineering",
    desc: "React apps, component libraries & UI development",
  },
  {
    icon: "🔮",
    title: "System Design",
    desc: "Scalable architecture, microservices & API integration",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    desc: "Core web vitals, lazy loading & code splitting",
  },
  {
    icon: "👥",
    title: "Team Leadership",
    desc: "Mentoring, code reviews & standards & best practices",
  },
  {
    icon: "🤖",
    title: "AI Assisted Development",
    desc: "Cursor AI, Copilot & Claude AI for productivity",
  },
];
