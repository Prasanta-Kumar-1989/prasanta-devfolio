export interface Experience {
  date: string;
  title: string;
  company: string;
  bullets: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    date: 'Apr 2025 – Jan 2026',
    title: 'Senior Software Engineer',
    company: 'RedSelf Infotech | Client: Walmart Global Tech',
    bullets: [
      'Lead end-to-end development of ADCP using React, Redux, TypeScript, GraphQL & Tailwind CSS.',
      'Architected reusable component library and deployed CI/CD pipelines.',
      'Mentored 3 junior developers and established coding standards.',
      'Delivered 40% faster development cycles with 99.9% system reliability.',
    ],
    tags: ['React', 'TypeScript', 'GraphQL', 'AD Grid', 'Tailwind CSS', 'Node.js', 'MongoDB'],
  },
  {
    date: 'Aug 2024 – Feb 2025',
    title: 'Senior Associate Technology',
    company: 'Prime Focus Technologies | Client: American Express',
    bullets: [
      'Built accessible React components for AmEx digital banking platform.',
      'Achieved WCAG 2.1 compliance and 98% test coverage.',
      'Collaborated with design teams to implement enterprise design system.',
      'Delivered performant, cross-browser compatible features.',
    ],
    tags: ['React', 'TypeScript', 'JavaScript', 'Jest', 'Cypress'],
  },
  {
    date: 'Oct 2018 – Aug 2024',
    title: 'Lead Frontend Developer',
    company: 'Prime Focus Technologies | Client: Various Enterprise Clients',
    bullets: [
      'Led frontend architecture for CLEAR LOB system replacement using AngularJS.',
      'Drove migration from legacy systems to modern web applications.',
      'Managed a team of 4 developers and conducted regular code reviews.',
      'Improved application performance by 60% through optimization techniques.',
    ],
    tags: ['AngularJS', 'JavaScript', 'HTML', 'CSS', 'REST APIs'],
  },
  {
    date: 'Apr 2018 – Oct 2018',
    title: 'Web / UI Developer',
    company: 'Born Group | Client: PT Astra Indonesia',
    bullets: [
      'Developed customer-facing features for vehicle reservations and service booking.',
      'Delivered responsive, mobile-first UI components.',
      'Integrated with REST APIs for real-time booking functionality.',
      'Maintained 98% uptime with consistent performance monitoring.',
    ],
    tags: ['JavaScript', 'HTML', 'CSS', 'REST APIs'],
  },
  {
    date: 'Nov 2017 – Apr 2018',
    title: 'Frontend Developer',
    company: 'Various Clients',
    bullets: [
      'Built responsive web interfaces for multiple clients.',
      'Gained foundational experience in React and modern JavaScript.',
      'Worked closely with designers to implement pixel-perfect UIs.',
      'Contributed to agile development processes and sprint planning.',
    ],
    tags: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
];
