export interface SkillCategory {
  name: string;
  color: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'FRONTEND',
    color: 'green',
    items: ['ReactJS', 'TypeScript', 'Redux', 'ExpressJS', 'CSS', 'HTML5', 'SCSS/SASS', 'Bootstrap', 'jQuery', 'Animations.js'],
  },
  {
    name: 'BACKEND',
    color: 'blue',
    items: ['Node.js', 'Express.js', 'REST API', 'GraphQL', 'Apollo Client', 'Async Programming', 'Microservices'],
  },
  {
    name: 'APIs & DATA',
    color: 'purple',
    items: ['RESTful APIs', 'GraphQL', 'Apollo Client', 'Async Programming', 'Microservices'],
  },
  {
    name: 'TESTING & TOOLS',
    color: 'green',
    items: ['Jest', 'TDD', 'Postman', 'Agile/Scrum', 'Web Accessibility (WCAG)', 'A/B Testing'],
  },
  {
    name: 'DEVOPS & CI/CD',
    color: 'orange',
    items: ['GitHub', 'Jenkins', 'CI/CD Pipelines', 'Full Requests', 'Build Monitoring', 'Release Coordination'],
  },
  {
    name: 'ARCHITECTURE',
    color: 'blue',
    items: ['Microservices Architecture', 'REST API Design', 'SPA', 'Reusable Component Libraries', 'Performance Optimization'],
  },
  {
    name: 'AI TOOLS',
    color: 'purple',
    items: ['Cursor AI', 'AI Code Generation & Refactoring', 'GitHub Copilot', 'Claude AI (Code Analysis & Problem Solving)'],
  },
];
