export interface BlogTip {
  title: string;
  desc: string;
}

export interface Blog {
  icon: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  tag: string;
  category: string;
  url?: string;
  tips?: BlogTip[];
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
    tips: [
      {
        title: "Wrap components with React.memo",
        desc: "Prevents re-renders when a component's props haven't changed. Best used on pure components that render often with the same props.",
      },
      {
        title: "Memoize expensive calculations with useMemo",
        desc: "Cache the result of heavy computations so they only re-run when dependencies change, not on every render.",
      },
      {
        title: "Stabilize callbacks with useCallback",
        desc: "Prevents child components from re-rendering when a parent passes a function prop that gets recreated each render.",
      },
      {
        title: "Lazy-load routes and heavy components",
        desc: "Split your bundle so users only download code they actually need. Pair with Suspense for a smooth loading experience.",
      },
      {
        title: "Virtualize long lists",
        desc: "Rendering thousands of DOM nodes tanks scrolling performance. Libraries like react-window only mount what's visible in the viewport.",
      },
      {
        title: "Avoid anonymous functions and objects in JSX",
        desc: "Inline functions and object literals create new references every render, breaking memoization on child components silently.",
      },
      {
        title: "Use keys correctly in lists",
        desc: "Stable, unique keys let React reuse DOM nodes during reconciliation. Using array index as a key causes unnecessary re-mounts when the list order changes.",
      },
      {
        title: "Debounce or throttle frequent event handlers",
        desc: "Search inputs, scroll listeners, and resize handlers can fire hundreds of times per second. Debouncing limits how often state updates — and re-renders — actually happen.",
      },
      {
        title: "Split context to avoid broad re-renders",
        desc: "A single large context re-renders every consumer whenever any value in it changes. Split by concern so only the components that care about a given slice update.",
      },
      {
        title: "Profile before optimizing",
        desc: "React DevTools Profiler shows exactly which components re-render and how long they take. Always measure first — premature optimization adds complexity without guaranteed gain.",
      },
    ],
  },
  {
    icon: "TS",
    title: "Advanced TypeScript Patterns I Use in Production",
    desc: "Useful TypeScript patterns for enterprise applications.",
    date: "May 12, 2025",
    readTime: "8 min read",
    tag: "TypeScript",
    category: "TypeScript",
    tips: [
      {
        title: "Discriminated Unions",
        desc: "Model complex state with a shared literal field so TypeScript narrows types automatically inside switch statements — no brittle string checks needed.",
      },
      {
        title: "Template Literal Types",
        desc: "Build precise string types that enforce naming conventions at compile time, catching invalid event names or CSS class strings before runtime.",
      },
      {
        title: "Conditional Types",
        desc: "Write types that branch based on their input — think of them as if/else for the type system, enabling powerful generic utilities.",
      },
      {
        title: "Mapped Types",
        desc: "Transform existing types systematically — making every property optional, readonly, or nullable — without duplicating property definitions.",
      },
      {
        title: "The infer Keyword",
        desc: "Extract types from within generics, letting you pull the return type of a function or the element type of an array automatically.",
      },
      {
        title: "Branded / Nominal Types",
        desc: "Prevent accidentally mixing structurally identical types like UserId and OrderId by tagging them with a unique phantom property.",
      },
      {
        title: "The satisfies Operator",
        desc: "Validate a value against a type without widening it, so you keep literal inference while still catching shape mismatches at compile time.",
      },
      {
        title: "Type Guards & Assertion Functions",
        desc: "Narrow union types safely at runtime using is and asserts, keeping TypeScript confident about what a value is after a check.",
      },
    ],
  },
  {
    icon: "🤖",
    title: "How AI Tools Supercharge My Development Workflow",
    desc: "Establishing coding standards and best practices. Using Cursor AI, Copilot and Claude AI effectively.",
    date: "Apr 28, 2025",
    readTime: "7 min read",
    tag: "AI Tools",
    category: "AI Tools",
    tips: [
      {
        title: "Use Cursor for inline refactoring",
        desc: "Select any messy block and ask Cursor to clean it up in place — no context switching, no copy-pasting into a chat window.",
      },
      {
        title: "Let Copilot handle boilerplate",
        desc: "Repetitive patterns like CRUD routes, form handlers, and test scaffolding are where Copilot pays for itself fastest.",
      },
      {
        title: "Use Claude for deep debugging",
        desc: "When a bug resists quick fixes, paste the full context into Claude and ask it to reason through root causes step by step.",
      },
      {
        title: "AI-assisted code review",
        desc: "Before submitting a PR, run your diff through an AI to catch logic gaps and edge cases you've gone blind to after staring at the code.",
      },
      {
        title: "Generate tests from your implementation",
        desc: "Describe the function's intent and ask the AI to produce unit and edge-case tests. Editing generated tests is always faster than writing cold.",
      },
      {
        title: "Draft documentation with AI",
        desc: "Feed your function signatures to the AI and let it produce JSDoc comments and README sections, then refine the output to match your voice.",
      },
      {
        title: "Treat AI output as a first draft",
        desc: "AI accelerates but doesn't replace judgment. Review every suggestion as critically as you would code from a junior developer.",
      },
    ],
  },
  {
    icon: "GQL",
    title: "GraphQL vs REST: When to Use Which in Enterprise Apps",
    desc: "Deep dive into choosing the right API strategy for large-scale applications.",
    date: "Apr 10, 2025",
    readTime: "9 min read",
    tag: "GraphQL",
    category: "GraphQL",
    tips: [
      {
        title: "Default to REST for simple CRUD",
        desc: "If your API maps cleanly to resources with standard operations, REST is simpler to build, cache, and maintain long-term.",
      },
      {
        title: "Choose GraphQL for complex data shapes",
        desc: "When clients need deeply nested or highly variable data, GraphQL eliminates over-fetching and under-fetching in one schema.",
      },
      {
        title: "REST has better HTTP caching out of the box",
        desc: "GET endpoints map directly to CDN and browser cache. GraphQL POST requests need extra tooling like persisted queries to achieve the same.",
      },
      {
        title: "GraphQL shines with multiple front-end clients",
        desc: "A mobile app and a dashboard often need different fields from the same data. One GraphQL schema serves both without separate versioned endpoints.",
      },
      {
        title: "REST is easier to secure at the perimeter",
        desc: "Rate limiting, auth middleware, and monitoring tools are built around HTTP verbs and URL paths — a model GraphQL doesn't fit neatly into.",
      },
      {
        title: "GraphQL reduces network round trips",
        desc: "A single query can fetch user, orders, and recommendations together. Equivalent REST calls would require three separate requests.",
      },
      {
        title: "Field-level deprecation beats URL versioning",
        desc: "In GraphQL you can deprecate individual fields without breaking clients. REST versioning typically means running /v1 and /v2 in parallel indefinitely.",
      },
      {
        title: "Tooling maturity still favors REST",
        desc: "OpenAPI, Postman, and most API gateways have deeper REST support. GraphQL tooling has improved but varies significantly by stack.",
      },
      {
        title: "Hybrid approaches work in practice",
        desc: "Many enterprise teams use REST for public-facing APIs and GraphQL internally for their BFF layer or between services — no need to pick just one.",
      },
    ],
  },
  {
    icon: "⚡",
    title: "Core Web Vitals: A Practical Optimization Guide",
    desc: "Step-by-step techniques to improve LCP, FID and CLS scores.",
    date: "Mar 22, 2025",
    readTime: "10 min read",
    tag: "Performance",
    category: "Performance",
    tips: [
      {
        title: "Identify and optimize your LCP element",
        desc: "Find the hero image or heading that triggers LCP in DevTools and make it your top priority — it must paint within 2.5 seconds.",
      },
      {
        title: "Preload critical resources",
        desc: 'Use rel="preload" for hero images, key fonts, and above-the-fold CSS to eliminate render-blocking delays the browser would otherwise discover late.',
      },
      {
        title: "Serve images in next-gen formats",
        desc: "WebP and AVIF deliver the same perceived quality at 30–50% smaller file sizes, directly cutting LCP time with minimal implementation effort.",
      },
      {
        title: "Eliminate render-blocking scripts",
        desc: "Defer or async non-critical JavaScript so the browser can paint the page before executing analytics, tag managers, and third-party widgets.",
      },
      {
        title: "Set explicit dimensions on images and videos",
        desc: "Without width and height attributes the browser can't reserve layout space, causing visible shifts that directly increase your CLS score.",
      },
      {
        title: "Avoid injecting content above existing elements",
        desc: "Ads, cookie banners, and lazy-loaded components that push content down are the single biggest source of CLS in production sites.",
      },
      {
        title: "Improve INP by breaking up long tasks",
        desc: "Use scheduler.yield() or setTimeout(0) to yield back to the browser mid-task, keeping the main thread responsive to user input.",
      },
      {
        title: "Audit third-party script impact",
        desc: "Tag managers, chat widgets, and analytics can each add hundreds of milliseconds. Defer anything non-essential and remove what you no longer use.",
      },
      {
        title: "Serve static assets from a CDN",
        desc: "Fonts, images, and scripts delivered from an edge node close to the user is one of the highest-leverage LCP improvements available.",
      },
      {
        title: "Measure with field data, not just Lighthouse",
        desc: "Chrome UX Report and Search Console show real-user metrics. Lab tools can't capture real-world variance from slow devices and flaky connections.",
      },
    ],
  },
];

export const blogFilters = ["All", "TypeScript", "GraphQL", "AI Tools", "Performance"];

export const blogsCopy = {
  seoTitle: "Blogs",
  pageTitle: "Sharing knowledge and experiences",
};
