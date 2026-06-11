export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  accent: string;
  challenge: string;
  solution: string;
  metrics: CaseStudyMetric[];
}

export const caseStudiesCopy = {
  seoTitle: "Case Studies",
  pageTitle: "In-depth stories of",
  pageTitleEmphasis: "impactful projects",
};

export const caseStudies: CaseStudy[] = [
  {
    id: "adcp",
    client: "Walmart Global Tech",
    title: "ADCP (Application Data Control Panel)",
    accent: "var(--green)",
    challenge: "Automating app data management and improving visibility and efficiency.",
    solution:
      "Built a real-time dashboard with role-based access control, GraphQL API and reusable component library.",
    metrics: [
      { value: "40%", label: "Faster Dev" },
      { value: "30%", label: "Maintainability" },
      { value: "99.9%", label: "Reliability" },
    ],
  },
  {
    id: "scp",
    client: "Walmart Global Tech",
    title: "Smart Communication Platform",
    accent: "var(--blue)",
    challenge: "Building a reliable communication platform serving millions of users.",
    solution:
      "Architected scalable notification system handling Email, SMS & Push notifications with high availability.",
    metrics: [
      { value: "Millions", label: "Users Served" },
      { value: "3", label: "Channels Unified" },
      { value: "99.8%", label: "Uptime" },
    ],
  },
];
