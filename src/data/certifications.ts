export interface Certification {
  name: string;
  issuer: string;
  date: string;
  accent: string;
  logo: string;
}

export const certificationsCopy = {
  seoTitle: "Certifications",
  pageTitle: "Continuous learning and growth",
};

export const certifications: Certification[] = [
  {
    name: "Cursor AI",
    issuer: "Great Learning",
    date: "Apr 2026",
    accent: "var(--blue)",
    logo: "/logos/certs/great-learning.svg",
  },
  {
    name: "Claude AI",
    issuer: "Anthropic",
    date: "Apr 2026",
    accent: "var(--orange)",
    logo: "/logos/certs/anthropic.svg",
  },
  {
    name: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    date: "Feb 2026",
    accent: "var(--blue)",
    logo: "/logos/certs/ibm.svg",
  },
  {
    name: "React.js Developer Certification",
    issuer: "LearnTube.ai",
    date: "Feb 2026",
    accent: "var(--green)",
    logo: "/logos/certs/react.svg",
  },
  {
    name: "Fundamentals of Docker & Kubernetes",
    issuer: "Scaler Academy",
    date: "Jun 2025",
    accent: "var(--blue)",
    logo: "/logos/certs/docker.svg",
  },
  {
    name: "Typescript",
    issuer: "Synechron Technologies Pvt Ltd",
    date: "Feb 2025",
    accent: "var(--purple)",
    logo: "/logos/certs/typescript.svg",
  },
  {
    name: "React with Redux",
    issuer: "Synechron Technologies Pvt Ltd",
    date: "Jan 2025",
    accent: "var(--blue)",
    logo: "/logos/certs/redux.svg",
  },
  {
    name: "javascript - Marathon Interview Questions Series 2024",
    issuer: "Udemy",
    date: "Jan 2025",
    accent: "var(--yellow)",
    logo: "/logos/certs/udemy.svg",
  },
  {
    name: "70+ JavaScript Challenges: Data Structures and Algorithms",
    issuer: "Udemy",
    date: "Jan 2025",
    accent: "var(--green)",
    logo: "/logos/certs/udemy.svg",
  },
  {
    name: "GitLab CI/CD: Pipelines, CI/CD and DevOps for Beginners",
    issuer: "Udemy",
    date: "Jan 2025",
    accent: "var(--purple)",
    logo: "/logos/certs/udemy.svg",
  },
  {
    name: "Development Software Engineering React JS Advanced React For Enterprise: React for senior engineers",
    issuer: "Udemy",
    date: "Jan 2025",
    accent: "var(--orange)",
    logo: "/logos/certs/udemy.svg",
  },
];
