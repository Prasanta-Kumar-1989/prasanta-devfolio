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

export const strengthCards: WhatIDoItem[] = [
  {
    icon: "🧩",
    title: "Problem Solving",
    desc: "Breaking down complex challenges into practical solutions",
  },
  {
    icon: "🏗️",
    title: "System Design",
    desc: "Designing scalable, maintainable frontend architecture",
  },
  {
    icon: "🚀",
    title: "Performance Optimization",
    desc: "Delivering fast, efficient experiences at scale",
  },
  {
    icon: "✨",
    title: "Clean Code & Best Practices",
    desc: "Readable code, patterns, testing & consistent standards",
  },
  {
    icon: "🤝",
    title: "Agile Collaboration",
    desc: "Sprint planning, cross-team communication & delivery",
  },
  {
    icon: "🎯",
    title: "Leadership & Mentoring",
    desc: "Guiding teams, sharing knowledge & raising the bar",
  },
];
