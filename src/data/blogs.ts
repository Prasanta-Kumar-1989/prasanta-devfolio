export interface Blog {
  icon: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  tag: string;
  category: string;
  url?: string;
}

export const blogs: Blog[] = [
  {
    icon: "⚛",
    title: "10 React Performance Tips That Really Make a Difference",
    desc: "Practical tips to optimize your React applications for better performance.",
    date: "May 28, 2025",
    readTime: "8 min read",
    tag: "React",
    category: "Performance",
  },
  {
    icon: "TS",
    title: "Advanced TypeScript Patterns I Use in Production",
    desc: "Useful TypeScript patterns for enterprise applications.",
    date: "May 12, 2025",
    readTime: "8 min read",
    tag: "TypeScript",
    category: "TypeScript",
  },
  {
    icon: "🤖",
    title: "How AI Tools Supercharge My Development Workflow",
    desc: "Establishing coding standards and best practices. Using Cursor AI, Copilot and Claude AI effectively.",
    date: "Apr 28, 2025",
    readTime: "7 min read",
    tag: "AI Tools",
    category: "AI Tools",
  },
  {
    icon: "GQL",
    title: "GraphQL vs REST: When to Use Which in Enterprise Apps",
    desc: "Deep dive into choosing the right API strategy for large-scale applications.",
    date: "Apr 10, 2025",
    readTime: "9 min read",
    tag: "GraphQL",
    category: "GraphQL",
  },
  {
    icon: "⚡",
    title: "Core Web Vitals: A Practical Optimization Guide",
    desc: "Step-by-step techniques to improve LCP, FID and CLS scores.",
    date: "Mar 22, 2025",
    readTime: "10 min read",
    tag: "Performance",
    category: "Performance",
  },
];

export const blogFilters = ["All", "TypeScript", "GraphQL", "AI Tools", "Performance"];

export const blogsCopy = {
  seoTitle: "Blogs",
  pageTitle: "Sharing knowledge and experiences",
};
