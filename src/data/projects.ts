export interface Project {
  id: string;
  client: string;
  name: string;
  desc: string;
  tags: string[];
  categories: string[];
  role: string;
  duration: string;
  team: string;
  type: string;
  metrics: { v: string; l: string }[];
  tech: {
    frontend: string;
    backend: string;
    database: string;
    testing: string;
  };
  features: string[];
  challenge: string;
  solution: string;
  impact: string;
}

export const projects: Project[] = [
  {
    id: "adcp",
    client: "Walmart Global Tech",
    name: "ADCP (Application Data Control Panel)",
    desc: "Lead end-to-end development of ADCP using React, Redux, TypeScript, GraphQL, AD Grid & Tailwind CSS to automate app data services for dashboard.",
    tags: [
      "React",
      "TypeScript",
      "GraphQL",
      "AD Grid",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    categories: ["Walmart Global Tech", "React", "Full Stack"],
    role: "Senior Software Engineer",
    duration: "April 2025 – Jan 2026",
    team: "9 Members",
    type: "Full Stack Enterprise App",
    metrics: [
      { v: "40%", l: "Faster Development" },
      { v: "30%", l: "Increase in Maintainability" },
      { v: "99.9%", l: "System Reliability" },
      { v: "3+", l: "Developers Mentored" },
    ],
    tech: {
      frontend: "React, TypeScript, AD Grid, Tailwind CSS",
      backend: "Node.js, Express.js",
      database: "MongoDB",
      testing: "Jest, Playwright, RTL, Postman",
    },
    features: [
      "Auto data monitoring and management for app data services",
      "Automated workflows for data operations",
      "Role-based access control and auditing",
      "High performance and scalable architecture",
    ],
    challenge:
      "The existing app data management process was manual and error-prone, leading to delays and reduced visibility for the team.",
    solution:
      "Developed a real-time dashboard with GraphQL API, role-based access control, and a reusable component library that reduced development time by 40%.",
    impact:
      "The platform achieved 99.9% reliability, 40% faster development cycles, and improved maintainability by 30%.",
  },
  {
    id: "scp",
    client: "Walmart Global Tech",
    name: "Smart Communication Platform",
    desc: "Built communication platform handling Email, SMS & Push notifications for millions of daily transactions across Walmart ecosystem.",
    tags: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
    categories: ["Walmart Global Tech", "React", "Full Stack"],
    role: "Senior Software Engineer",
    duration: "Oct 2018 – Aug 2024",
    team: "32 Members",
    type: "Platform Engineering",
    metrics: [
      { v: "Millions", l: "Users Served" },
      { v: "3", l: "Channels Unified" },
      { v: "99.8%", l: "Uptime" },
      { v: "50ms", l: "Avg Latency" },
    ],
    tech: {
      frontend: "React, TypeScript",
      backend: "Node.js, Express.js",
      database: "MongoDB",
      testing: "Jest, RTL, Postman",
    },
    features: [
      "Multi-channel messaging (Email, SMS, Push)",
      "High-throughput event-driven architecture",
      "Real-time delivery tracking and analytics",
      "Scalable microservices design",
    ],
    challenge:
      "Building a reliable communication platform capable of serving millions of users across multiple channels simultaneously.",
    solution:
      "Architected a scalable notification system with event-driven microservices handling Email, SMS & Push with high availability.",
    impact:
      "Serving millions of daily users with 99.8% uptime across 3 unified channels.",
  },
  {
    id: "clear",
    client: "Prime Focus Technologies",
    name: "CLEAR",
    desc: "Built a custom responsive web application using AngularJS to replace a legacy Line-of-Business system.",
    tags: ["AngularJS", "HTML", "CSS"],
    categories: ["Other Clients"],
    role: "Lead Frontend Developer",
    duration: "Oct 2018 – Aug 2024",
    team: "4 Members",
    type: "Web Application",
    metrics: [
      { v: "100%", l: "Legacy Replaced" },
      { v: "60%", l: "Faster Load" },
      { v: "40%", l: "User Adoption" },
      { v: "2x", l: "Performance Gain" },
    ],
    tech: {
      frontend: "AngularJS, HTML, CSS",
      backend: "REST APIs",
      database: "SQL",
      testing: "Karma, Jasmine",
    },
    features: [
      "Full legacy system replacement",
      "Responsive design for all devices",
      "Custom data grid and reporting",
      "Role-based access management",
    ],
    challenge:
      "Replacing a legacy Line-of-Business system with a modern, responsive web application.",
    solution:
      "Built a custom responsive web app using AngularJS with a rich UI and tight integration with existing business APIs.",
    impact:
      "Successfully replaced the legacy system with 60% faster load times and significantly improved user adoption.",
  },
  {
    id: "astra",
    client: "Born Group",
    name: "PT Astra (Indonesia)",
    desc: "Developed customer-facing web features for vehicle reservations, test drive scheduling and service booking.",
    tags: ["JavaScript", "HTML", "CSS"],
    categories: ["Other Clients"],
    role: "Frontend Developer",
    duration: "Nov 2017 – Apr 2018",
    team: "13 Members",
    type: "Web Features",
    metrics: [
      { v: "3", l: "Features Shipped" },
      { v: "30%", l: "Booking Increase" },
      { v: "98%", l: "Uptime" },
      { v: "4.8★", l: "User Rating" },
    ],
    tech: {
      frontend: "JavaScript, HTML, CSS",
      backend: "REST APIs",
      database: "MySQL",
      testing: "Manual QA",
    },
    features: [
      "Vehicle reservation system",
      "Test drive scheduling",
      "Service booking portal",
      "Mobile-responsive design",
    ],
    challenge:
      "Developing customer-facing web features for a large automotive company in Indonesia.",
    solution:
      "Delivered vehicle reservation, test drive scheduling and service booking features with a clean, responsive UI.",
    impact:
      "Improved booking conversions by 30% with a 4.8-star user rating and 98% uptime.",
  },
  {
    id: "amex",
    client: "American Express",
    name: "AmEx Digital Banking Features",
    desc: "Built responsive and accessible web features for American Express digital banking platforms.",
    tags: ["React", "JavaScript", "HTML", "CSS"],
    categories: ["American Enterprises", "React"],
    role: "Senior Frontend Developer",
    duration: "Aug 2024 – Feb 2025",
    team: "10 Members",
    type: "Enterprise Web App",
    metrics: [
      { v: "A+", l: "Accessibility" },
      { v: "98%", l: "Test Coverage" },
      { v: "WCAG 2.1", l: "Compliant" },
      { v: "Millions", l: "Users Served" },
    ],
    tech: {
      frontend: "React, JavaScript, TypeScript",
      backend: "Java REST APIs",
      database: "Oracle",
      testing: "Jest, Cypress",
    },
    features: [
      "WCAG 2.1 accessibility compliance",
      "Enterprise design system integration",
      "Performance-optimized components",
      "Cross-browser compatibility",
    ],
    challenge:
      "Delivering accessible, high-performance banking features for millions of American Express customers.",
    solution:
      "Built WCAG 2.1 compliant React components with thorough testing coverage and performance optimization.",
    impact:
      "Achieved 98% test coverage and A+ accessibility rating serving millions of users.",
  },
];

export const projectFilters = [
  "All",
  "Walmart Global Tech",
  "American Enterprises",
  "Other Clients",
  "React",
  "Full Stack",
];
