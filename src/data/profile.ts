export const profile = {
  firstName: "PRASANTA",
  lastName: "KUMAR SITHA",
  initials: "PKS",
  title: "Senior MERN Stack Engineer",
  greeting: "Hello, I'm",
  summary:
    "Building enterprise-grade React applications for Fortune 1 companies. Passionate about scalable, maintainable and performant apps.",
  seoSiteName: "Prasanta Kumar Sitha",
  email: "pksitha1989@gmail.com",
  phone: "+91-9739072791 / +91-9439240432",
  phoneTel: "+919739072791",
  location: "Bangalore, Karnataka, India",
  linkedinUrl: "https://www.linkedin.com/in/prasantakumarsitha/",
  githubUrl: "https://github.com/Prasanta-Kumar-1989",
  linkedinHandle: "linkedin.com/in/prasantakumarsitha",
  githubHandle: "github.com/Prasanta-Kumar-1989",
  photoUrl: "/profile.png",
  photoAlt: "Prasanta Kumar Sitha — Senior MERN Stack Engineer",
};

export const heroSkills = [
  "React",
  "TypeScript",
  "GraphQL",
  "Node.js",
  "Redux",
  "Tailwind CSS",
  "JavaScript",
];

export interface LinkedInMetric {
  label: string;
  target: number;
  suffix?: string;
  useComma?: boolean;
}

export const linkedInMetrics: LinkedInMetric[] = [
  { label: "Connections", target: 1493, useComma: true },
  { label: "Followers", target: 500, suffix: "+" },
  { label: "Recommendations", target: 3 },
];

export function formatLinkedInMetric(metric: LinkedInMetric) {
  const formatted = metric.useComma
    ? metric.target.toLocaleString("en-US")
    : String(metric.target);
  return `${formatted}${metric.suffix ?? ""}`;
}

export interface TrustedCompany {
  name: string;
  logo: string;
}

export const trustedCompanies: TrustedCompany[] = [
  { name: "Walmart", logo: "/logos/walmart.png" },
  { name: "American Express", logo: "/logos/amex.png" },
  { name: "Prime Focus Technologies", logo: "/logos/prime-focus-pft.png" },
  { name: "BORN", logo: "/logos/born-group.png" },
];

export const resumeUrl = "/resume/Prasanta_1989_Node_React.pdf";
export const resumeDownloadName = "Prasanta_1989_Node_React.pdf";
