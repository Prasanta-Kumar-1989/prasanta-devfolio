export interface NavItem {
  label: string;
  path: string;
  topLabel: string;
}

export const navigation: NavItem[] = [
  { label: "Intro", path: "/", topLabel: "INTRO" },
  { label: "About Me", path: "/about", topLabel: "ABOUT ME" },
  { label: "Projects", path: "/projects", topLabel: "PROJECTS" },
  { label: "Skills", path: "/skills", topLabel: "SKILLS" },
  { label: "Experience", path: "/experience", topLabel: "EXPERIENCE" },
  {
    label: "Recommendations",
    path: "/recommendations",
    topLabel: "RECOMMEND",
  },
  {
    label: "Certifications",
    path: "/certifications",
    topLabel: "CERTS",
  },
  { label: "Blogs", path: "/blogs", topLabel: "BLOGS" },
  {
    label: "Leadership & Mentoring",
    path: "/leadership",
    topLabel: "LEADERSHIP",
  },
  { label: "Case Studies", path: "/case-studies", topLabel: "CASES" },
  { label: "Let's Connect", path: "/contact", topLabel: "CONNECT" },
];
