export interface Certification {
  name: string;
  issuer: string;
  date: string;
  accent: string;
}

export const certificationsCopy = {
  seoTitle: "Certifications",
  pageTitle: "Continuous learning and growth",
};

export const certifications: Certification[] = [
  { name: "React Developer Certificate", issuer: "LearnSite.ai", date: "Feb 2026", accent: "var(--green)" },
  { name: "Cursor AI Fundamentals", issuer: "Cursor AI", date: "Mar 2026", accent: "var(--blue)" },
  { name: "Advanced React Enterprise", issuer: "Udemy", date: "Jan 2025", accent: "var(--orange)" },
  { name: "GitLab CI/CD & DevOps for Beginners", issuer: "GitLab", date: "Jan 2025", accent: "var(--purple)" },
  { name: "70+ JS Challenges, DSA", issuer: "Udemy", date: "Jan 2025", accent: "var(--yellow)" },
  { name: "JavaScript Marathon Series", issuer: "Various", date: "Jan 2025", accent: "var(--green)" },
  { name: "React with Redux", issuer: "Synchem (Coursera)", date: "Jan 2025", accent: "var(--blue)" },
  { name: "TypeScript", issuer: "Synchem (Coursera)", date: "Feb 2025", accent: "var(--purple)" },
];
