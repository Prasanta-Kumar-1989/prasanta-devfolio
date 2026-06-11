export interface Experience {
  date: string;
  title: string;
  company: string;
  project?: string;
  bullets: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    date: "Apr 2025 – Jan 2026",
    title: "Senior Software Engineer",
    company: "Redolent Infotech | Client: Walmart Global Tech",
    project: "ADCP (Application Data Control Panel)",
    bullets: [
      "Led end-to-end frontend development of ADCP using ReactJS, Redux, TypeScript, GraphQL, AG Grid, and Tailwind CSS, automating App Data service management for Walmart's platform.",
      "Architected a reusable, modular component library that boosted team maintainability and accelerated sprint delivery velocity; conducted regular code reviews and mentored 3+ junior developers.",
      "Deployed and managed CI/CD pipelines automating build/test/deploy workflows; collaborated with product owners and backend teams across Agile sprints.",
      "Developed Node.js and ExpressJS RESTful API services to support ADCP backend workflows; integrated MongoDB for application data persistence and wrote comprehensive unit tests using Jest to ensure service reliability.",
    ],
    tags: ["React", "Redux", "TypeScript", "GraphQL", "AG Grid", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Jest", "CI/CD"],
  },
  {
    date: "Aug 2024 – Feb 2025",
    title: "Senior Associate Technology",
    company: "Synechron Technologies | Client: American Express",
    bullets: [
      "Built enterprise-scale web applications using ReactJS, Redux, TypeScript, Tailwind CSS, and HTML5/CSS3 for a global financial services leader with 24/7 availability requirements.",
      "Designed a reusable component library that reduced feature development time by an estimated 30%; supported CI/CD pipelines for reliable release cycles in a high-stakes production environment.",
      "Ensured WCAG accessibility compliance across all devices; partnered with product managers, UX designers, and backend engineers to deliver frontend solutions on schedule.",
    ],
    tags: ["React", "Redux", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "WCAG", "CI/CD"],
  },
  {
    date: "Oct 2018 – Aug 2024",
    title: "Lead Frontend Developer",
    company: "Infobahn Softworld | Client: Walmart Global Tech",
    project: "Smart Communication",
    bullets: [
      "Developed and maintained customer-facing web applications using ReactJS, Redux, TypeScript, JavaScript (ES6+), GraphQL, HTML5, CSS3, and Handlebars.js supporting millions of daily Walmart grocery transactions.",
      "Reduced component duplication by 40% through shared component architecture; built responsive Email, SMS, and Push Notification templates ensuring cross-device accessibility across Walmart's communication channels.",
      "Served as Frontend Lead: mentored junior engineers, drove coding standards, and led technical design reviews.",
      "Built Node.js and ExpressJS API services to power notification pipeline workflows (Email, SMS, Push); used MongoDB for template and event data storage, and enforced unit testing coverage using Jest across backend modules.",
    ],
    tags: ["React", "Redux", "TypeScript", "GraphQL", "Handlebars.js", "Node.js", "Express", "MongoDB", "Jest"],
  },
  {
    date: "Apr 2018 – Oct 2018",
    title: "Web / UI Developer",
    company: "US Tech Solutions | Client: Prime Focus Technologies",
    project: "CLEAR",
    bullets: [
      "Built a custom responsive web application using AngularJS to replace a legacy line-of-business system, delivering a significantly more intuitive user interface.",
      "Developed dynamic components using AngularJS, HTML, CSS, JavaScript, jQuery, JSON, AJAX, SASS, and Git for version control.",
    ],
    tags: ["AngularJS", "JavaScript", "HTML", "CSS", "jQuery", "SASS", "Git"],
  },
  {
    date: "Nov 2017 – Apr 2018",
    title: "UI Developer",
    company: "Datamatics Global Services | Client: Born Group",
    project: "PT Astra (Indonesia)",
    bullets: [
      "Contributed to PT Astra, a large-scale automotive and property platform in Indonesia, developing customer-facing web features for vehicle reservations, test drive scheduling, and vehicle service booking.",
      "Ensured cross-browser compatibility and responsive design across all modules using HTML, CSS, and JavaScript.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];
