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
    logo: "/logos/certs/cursor-ai.jpeg",
  },
  {
    name: "Claude AI",
    issuer: "Anthropic",
    date: "Apr 2026",
    accent: "var(--orange)",
    logo: "/logos/certs/claude-ai.jpeg",
  },
  {
    name: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    date: "Feb 2026",
    accent: "var(--blue)",
    logo: "/logos/certs/generative-ai-ibm.jpeg",
  },
  {
    name: "React.js Developer Certification",
    issuer: "LearnTube.ai",
    date: "Feb 2026",
    accent: "var(--green)",
    logo: "/logos/certs/react-js-learntube.jpeg",
  },
  {
    name: "Fundamentals of Docker & Kubernetes",
    issuer: "Scaler Academy",
    date: "Jun 2025",
    accent: "var(--blue)",
    logo: "/logos/certs/docker-kubernetes.jpeg",
  },
  {
    name: "Typescript",
    issuer: "Synechron Technologies Pvt Ltd",
    date: "Feb 2025",
    accent: "var(--purple)",
    logo: "/logos/certs/typescript-synechron.jpeg",
  },
  {
    name: "React with Redux",
    issuer: "Synechron Technologies Pvt Ltd",
    date: "Jan 2025",
    accent: "var(--blue)",
    logo: "/logos/certs/react-redux-synechron.png",
  },
  {
    name: "javascript - Marathon Interview Questions Series 2024",
    issuer: "Udemy",
    date: "Jan 2025",
    accent: "var(--yellow)",
    logo: "/logos/certs/javascript-marathon.jpeg",
  },
  {
    name: "70+ JavaScript Challenges: Data Structures and Algorithms",
    issuer: "Udemy",
    date: "Jan 2025",
    accent: "var(--green)",
    logo: "/logos/certs/javascript-challenges.jpeg",
  },
  {
    name: "GitLab CI/CD: Pipelines, CI/CD and DevOps for Beginners",
    issuer: "Udemy",
    date: "Jan 2025",
    accent: "var(--purple)",
    logo: "/logos/certs/gitlab-cicd.jpeg",
  },
  {
    name: "Development Software Engineering React JS Advanced React For Enterprise: React for senior engineers",
    issuer: "Udemy",
    date: "Jan 2025",
    accent: "var(--orange)",
    logo: "/logos/certs/react-advanced-enterprise.jpeg",
  },
];
