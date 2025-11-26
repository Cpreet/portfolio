// ===== CUSTOMIZATION: Site Configuration =====
// Update these values to personalize your portfolio

export const SITE_CONFIG = {
  name: 'Charanpreet Singh Chawla',
  title: 'AI-Driven Web Developer & Product Builder',
  description: 'I build high-impact web products 3x faster using AI tooling. React, Next.js, and product strategy for startups and agencies.',
  url: 'https://charanpreet.dev', // Update with your actual domain
  email: 'hello@charanpreet.dev', // Update with your actual email
  // Social links - update with your actual profiles
  social: {
    twitter: 'https://twitter.com/charanpreet',
    github: 'https://github.com/charanpreet',
    linkedin: 'https://linkedin.com/in/charanpreet',
  },
}

// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

// Capabilities for the home page
export const CAPABILITIES = [
  {
    title: 'AI Web Applications',
    description: 'Full-stack React and Next.js applications built with AI assistance for rapid iteration and high-quality code.',
    icon: 'code',
    accent: 'cyan',
  },
  {
    title: 'Product Strategy',
    description: 'From concept to launch — product thinking combined with technical execution to ship features that matter.',
    icon: 'lightbulb',
    accent: 'magenta',
  },
  {
    title: 'Performance Optimization',
    description: 'Core Web Vitals expertise. Making slow apps fast through profiling, caching, and architectural improvements.',
    icon: 'zap',
    accent: 'lime',
  },
  {
    title: 'Developer Tooling',
    description: 'Custom scripts, automation pipelines, and internal tools that multiply team productivity.',
    icon: 'tool',
    accent: 'cyan',
  },
  {
    title: 'UI/UX Implementation',
    description: 'Pixel-perfect implementation of designs with attention to micro-interactions and accessibility.',
    icon: 'palette',
    accent: 'magenta',
  },
  {
    title: 'API Integration',
    description: 'Seamless integration with third-party services, AI APIs, and complex backend systems.',
    icon: 'plug',
    accent: 'lime',
  },
] as const

// What I Do summary for home page
export const WHAT_I_DO = [
  {
    title: 'AI Web Apps',
    description: 'Modern React/Next.js applications built 3x faster with AI-augmented workflows.',
    icon: 'app',
  },
  {
    title: 'Product Strategy',
    description: 'End-to-end product thinking from ideation to launch and iteration.',
    icon: 'strategy',
  },
  {
    title: 'Dev Tooling',
    description: 'Custom automation and tooling that multiplies development velocity.',
    icon: 'tools',
  },
] as const

// AI Workflow steps
export const AI_WORKFLOW_STEPS = [
  {
    step: 1,
    title: 'Discovery & Scoping',
    description: 'Rapid requirements gathering using AI to analyze existing systems and generate technical specifications.',
    duration: '2-3 days',
  },
  {
    step: 2,
    title: 'Architecture Design',
    description: 'AI-assisted system design with instant documentation, API schemas, and component breakdowns.',
    duration: '2-3 days',
  },
  {
    step: 3,
    title: 'Parallel Development',
    description: 'Multiple feature streams built simultaneously with AI pair programming for code generation and review.',
    duration: '2-3 weeks',
  },
  {
    step: 4,
    title: 'Testing & Refinement',
    description: 'Automated test generation, AI-powered debugging, and rapid iteration cycles.',
    duration: '1 week',
  },
  {
    step: 5,
    title: 'Ship & Iterate',
    description: 'Continuous deployment with AI-monitored performance and instant optimization suggestions.',
    duration: 'Ongoing',
  },
] as const

// Principles for about page
export const PRINCIPLES = [
  {
    title: 'Speed',
    description: 'Ship fast, learn fast. AI tooling lets me compress weeks of work into days without cutting corners.',
    icon: 'rocket',
  },
  {
    title: 'Iteration',
    description: 'The best products emerge through rapid cycles of building, measuring, and learning.',
    icon: 'refresh',
  },
  {
    title: 'Experimentation',
    description: 'New tools, new frameworks, new approaches. Staying curious is how I stay sharp.',
    icon: 'flask',
  },
  {
    title: 'Reliability',
    description: 'Speed means nothing without quality. Clean code, tested systems, documented processes.',
    icon: 'shield',
  },
] as const

// AI Toolstack for about page
export const AI_TOOLSTACK = [
  {
    name: 'Cursor',
    category: 'IDE',
    description: 'AI-native code editor for intelligent completions and codebase-aware assistance.',
  },
  {
    name: 'Claude',
    category: 'AI Assistant',
    description: 'Deep reasoning and complex problem-solving for architecture and code review.',
  },
  {
    name: 'GPT-4',
    category: 'AI Assistant',
    description: 'Versatile AI for documentation, brainstorming, and creative solutions.',
  },
  {
    name: 'GitHub Copilot',
    category: 'Code Assistant',
    description: 'Inline code suggestions trained on billions of lines of code.',
  },
  {
    name: 'Custom Scripts',
    category: 'Automation',
    description: 'Bespoke tooling for repetitive tasks, deployments, and workflow optimization.',
  },
  {
    name: 'v0 by Vercel',
    category: 'UI Generation',
    description: 'Rapid UI prototyping and component generation from descriptions.',
  },
] as const

// FAQ items for services page
export const FAQ_ITEMS = [
  {
    question: 'How does AI make development faster?',
    answer: 'AI handles boilerplate, suggests patterns, catches bugs early, and accelerates code review. This lets me focus on architecture, business logic, and user experience — the parts that actually matter.',
  },
  {
    question: 'What tech stack do you work with?',
    answer: 'Primarily React, Next.js, TypeScript, and Tailwind CSS on the frontend. Node.js, Python, and various databases on the backend. I adapt to existing stacks when needed.',
  },
  {
    question: 'Do you work with existing codebases?',
    answer: 'Absolutely. AI tooling excels at understanding and navigating large codebases. I can onboard quickly and start contributing value within days, not weeks.',
  },
  {
    question: 'What\'s your availability like?',
    answer: 'I typically take on 1-2 projects at a time to ensure focus and quality. For urgent projects, I can often start within a week.',
  },
  {
    question: 'How do you handle communication?',
    answer: 'Async-first with Slack or Discord for quick questions, weekly video syncs for alignment, and detailed written updates. I\'m timezone flexible.',
  },
  {
    question: 'What happens after the project launches?',
    answer: 'I offer ongoing support packages for maintenance, iterations, and new features. Most clients continue working with me after initial launch.',
  },
] as const

// Brand colors (matching Tailwind config)
export const COLORS = {
  bg: {
    primary: '#0a0a0f',
    secondary: '#12121a',
  },
  surface: {
    default: '#18181b',
    hover: '#1f1f24',
    active: '#27272a',
  },
  accent: {
    cyan: '#00f0ff',
    magenta: '#ff00aa',
    lime: '#b4ff39',
  },
  text: {
    primary: '#e4e4e7',
    secondary: '#a1a1aa',
    muted: '#71717a',
  },
} as const

