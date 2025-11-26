// ===== CUSTOMIZATION: Case Studies =====
// Replace these fictional case studies with your real projects

export interface CaseStudy {
  slug: string
  title: string
  client: string
  clientDescription: string
  heroImage: string
  tags: string[]
  duration: string
  year: string
  summary: string
  problem: string
  constraints: string[]
  approach: string[]
  aiAssists: {
    title: string
    description: string
  }[]
  results: {
    metric: string
    value: string
    context?: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'fintech-dashboard',
    title: 'FinFlow Dashboard',
    client: 'FinFlow',
    clientDescription: 'Series A fintech startup building real-time financial analytics for SMBs',
    heroImage: '/images/case-studies/finflow-hero.jpg',
    tags: ['React', 'Next.js', 'AI/ML', 'Real-time', 'TypeScript'],
    duration: '6 weeks',
    year: '2024',
    summary:
      'Built a real-time financial analytics platform processing 1M+ transactions daily with AI-powered insights and anomaly detection.',
    problem:
      'FinFlow needed to replace their outdated dashboard with a modern, real-time analytics platform. The existing system was slow, difficult to maintain, and couldn\'t scale with their growing user base. They needed to process millions of transactions while providing instant insights to users.',
    constraints: [
      'Aggressive 6-week timeline to meet funding milestone',
      'Must integrate with 15+ banking APIs',
      'Real-time updates with <100ms latency',
      'SOC 2 compliance requirements',
    ],
    approach: [
      'Used AI to rapidly analyze the existing codebase and generate migration plan',
      'Built a modular component library for consistent UI across features',
      'Implemented WebSocket-based real-time data streaming',
      'Created AI-powered transaction categorization engine',
      'Set up comprehensive testing with AI-generated test cases',
    ],
    aiAssists: [
      {
        title: 'Codebase Analysis',
        description: 'AI analyzed 50K+ lines of legacy code in hours, not weeks, identifying critical paths and dependencies.',
      },
      {
        title: 'API Integration',
        description: 'Generated type-safe API clients for all 15 banking integrations from documentation.',
      },
      {
        title: 'Test Generation',
        description: 'Automated creation of 200+ test cases covering edge cases humans might miss.',
      },
      {
        title: 'Documentation',
        description: 'AI-generated comprehensive technical documentation for the entire system.',
      },
    ],
    results: [
      { metric: 'Processing Speed', value: '3x faster', context: 'vs. previous system' },
      { metric: 'Time to Market', value: '6 weeks', context: 'from kickoff to launch' },
      { metric: 'User Satisfaction', value: '+47%', context: 'NPS improvement' },
      { metric: 'System Uptime', value: '99.9%', context: 'since launch' },
    ],
    testimonial: {
      quote: 'Charanpreet delivered in 6 weeks what we thought would take 6 months. The AI-powered approach meant we got a better product, faster.',
      author: 'Sarah Chen',
      role: 'CTO, FinFlow',
    },
  },
  {
    slug: 'saas-platform',
    title: 'WorkOS Rebrand',
    client: 'WorkOS',
    clientDescription: 'Enterprise SaaS platform for workforce management',
    heroImage: '/images/case-studies/workos-hero.jpg',
    tags: ['TypeScript', 'Design System', 'Performance', 'Next.js'],
    duration: '4 weeks',
    year: '2024',
    summary:
      'Complete frontend rewrite and design system implementation, reducing bundle size by 60% and improving Core Web Vitals scores.',
    problem:
      'WorkOS had accumulated significant technical debt over 3 years of rapid growth. Their frontend was slow, inconsistent, and difficult for new developers to work with. They needed a complete refresh without disrupting their 10K+ active users.',
    constraints: [
      'Zero downtime during migration',
      'Must maintain all existing functionality',
      'Limited engineering resources (team of 3)',
      'Budget for 4 weeks of work',
    ],
    approach: [
      'AI-assisted audit of existing components and patterns',
      'Built design system with 40+ reusable components',
      'Implemented incremental migration strategy',
      'Performance optimization at every layer',
      'Automated visual regression testing',
    ],
    aiAssists: [
      {
        title: 'Component Audit',
        description: 'Identified 200+ duplicate components that could be consolidated into 40 reusable ones.',
      },
      {
        title: 'Code Migration',
        description: 'AI-powered refactoring converted legacy patterns to modern React, maintaining behavior.',
      },
      {
        title: 'Performance Analysis',
        description: 'Automated identification of render bottlenecks and bundle size culprits.',
      },
    ],
    results: [
      { metric: 'Bundle Size', value: '-60%', context: 'from 2.4MB to 960KB' },
      { metric: 'LCP Score', value: '1.2s', context: 'down from 3.8s' },
      { metric: 'Dev Velocity', value: '+40%', context: 'feature development speed' },
      { metric: 'Components', value: '40', context: 'reusable design system components' },
    ],
    testimonial: {
      quote: 'The new design system has transformed how our team works. Features that took a week now take a day.',
      author: 'Marcus Johnson',
      role: 'Engineering Manager, WorkOS',
    },
  },
  {
    slug: 'ai-writing-tool',
    title: 'Prose AI',
    client: 'Prose',
    clientDescription: 'AI-powered writing assistant for content teams',
    heroImage: '/images/case-studies/prose-hero.jpg',
    tags: ['AI/ML', 'React', 'Node.js', 'OpenAI', 'Real-time'],
    duration: '8 weeks',
    year: '2024',
    summary:
      'Built an AI writing assistant from scratch, featuring real-time collaboration, custom model fine-tuning, and enterprise-grade security.',
    problem:
      'Prose had a vision for an AI writing tool that would feel like magic — instant suggestions, seamless collaboration, and outputs that matched each brand\'s voice. They needed to go from concept to MVP to impress investors.',
    constraints: [
      'Pre-seed budget constraints',
      'Must differentiate from ChatGPT',
      'Real-time collaboration required',
      'Custom model training capability',
    ],
    approach: [
      'Rapid prototyping with AI-generated UI components',
      'Built custom streaming interface for AI responses',
      'Implemented CRDT-based real-time collaboration',
      'Created fine-tuning pipeline for brand voice',
      'Designed scalable microservices architecture',
    ],
    aiAssists: [
      {
        title: 'UI Prototyping',
        description: 'Generated 50+ UI variations in days, accelerating design decisions.',
      },
      {
        title: 'Prompt Engineering',
        description: 'AI-assisted development of optimal prompts for different writing tasks.',
      },
      {
        title: 'Architecture Design',
        description: 'Generated system diagrams and API specifications from requirements.',
      },
    ],
    results: [
      { metric: 'Time to MVP', value: '8 weeks', context: 'concept to launch' },
      { metric: 'Seed Funding', value: '$2.5M', context: 'raised post-launch' },
      { metric: 'User Retention', value: '68%', context: 'monthly active retention' },
      { metric: 'AI Accuracy', value: '94%', context: 'brand voice matching' },
    ],
    testimonial: {
      quote: 'Charanpreet didn\'t just build what we asked for — he helped us figure out what we actually needed. The AI expertise was invaluable.',
      author: 'Alex Rivera',
      role: 'Founder, Prose',
    },
  },
  {
    slug: 'ecommerce-platform',
    title: 'Luxe Marketplace',
    client: 'Luxe',
    clientDescription: 'Premium marketplace for authenticated luxury goods',
    heroImage: '/images/case-studies/luxe-hero.jpg',
    tags: ['Next.js', 'E-commerce', 'Stripe', 'Performance'],
    duration: '5 weeks',
    year: '2023',
    summary:
      'Built a high-performance marketplace handling $2M+ in monthly transactions with 99.99% uptime and sub-second page loads.',
    problem:
      'Luxe\'s existing Shopify setup couldn\'t handle their growth or provide the premium experience their brand demanded. They needed a custom solution that felt luxurious while handling high transaction volumes.',
    constraints: [
      'Must migrate 10K+ product listings',
      'Black Friday launch deadline',
      'Premium UX expectations',
      'Complex authentication flow for luxury items',
    ],
    approach: [
      'AI-assisted data migration from Shopify',
      'Built custom CMS for product management',
      'Implemented edge caching for global performance',
      'Created premium animations and micro-interactions',
      'Integrated multi-vendor authentication system',
    ],
    aiAssists: [
      {
        title: 'Data Migration',
        description: 'Automated migration of 10K products with AI-enhanced descriptions and SEO.',
      },
      {
        title: 'Image Optimization',
        description: 'AI-powered image processing for consistent product photography.',
      },
      {
        title: 'SEO Generation',
        description: 'Generated optimized meta descriptions and alt text for all products.',
      },
    ],
    results: [
      { metric: 'Page Load', value: '0.8s', context: 'average globally' },
      { metric: 'Conversion Rate', value: '+34%', context: 'vs. previous platform' },
      { metric: 'Revenue', value: '$2M+', context: 'monthly transactions' },
      { metric: 'Uptime', value: '99.99%', context: 'including Black Friday' },
    ],
  },
  {
    slug: 'developer-tools',
    title: 'DevKit CLI',
    client: 'Internal Project',
    clientDescription: 'Open-source developer tooling suite',
    heroImage: '/images/case-studies/devkit-hero.jpg',
    tags: ['CLI', 'Node.js', 'Open Source', 'DX'],
    duration: '3 weeks',
    year: '2024',
    summary:
      'Created a suite of CLI tools that automate repetitive development tasks, now used by 5K+ developers monthly.',
    problem:
      'Repetitive tasks like project scaffolding, code generation, and deployment were eating up hours every week. I built DevKit to automate these workflows and shared it with the community.',
    constraints: [
      'Must work across Node.js versions',
      'Zero dependencies where possible',
      'Intuitive for first-time users',
      'Extensible plugin architecture',
    ],
    approach: [
      'AI-assisted API design for intuitive commands',
      'Built plugin system for extensibility',
      'Created interactive prompts for complex workflows',
      'Implemented smart defaults with override options',
      'Added AI-powered code generation features',
    ],
    aiAssists: [
      {
        title: 'Template Generation',
        description: 'AI generates project scaffolds tailored to specific requirements.',
      },
      {
        title: 'Command Design',
        description: 'AI helped design intuitive command structures and help text.',
      },
      {
        title: 'Documentation',
        description: 'Automated generation of comprehensive usage documentation.',
      },
    ],
    results: [
      { metric: 'Monthly Users', value: '5K+', context: 'active developers' },
      { metric: 'GitHub Stars', value: '2.3K', context: 'and growing' },
      { metric: 'Time Saved', value: '4hrs/week', context: 'average per user' },
      { metric: 'Plugins', value: '25+', context: 'community-built' },
    ],
  },
  {
    slug: 'healthcare-portal',
    title: 'MedConnect Portal',
    client: 'MedConnect',
    clientDescription: 'Healthcare technology company connecting patients with providers',
    heroImage: '/images/case-studies/medconnect-hero.jpg',
    tags: ['React', 'Healthcare', 'HIPAA', 'Accessibility'],
    duration: '10 weeks',
    year: '2023',
    summary:
      'Built a HIPAA-compliant patient portal with best-in-class accessibility, serving 50K+ patients across 200 healthcare providers.',
    problem:
      'MedConnect needed a patient portal that was not only secure and compliant but also accessible to elderly and disabled patients. The existing solution had failing accessibility audits and security concerns.',
    constraints: [
      'HIPAA compliance mandatory',
      'WCAG 2.1 AAA accessibility target',
      'Integration with 5 different EHR systems',
      'Multi-language support required',
    ],
    approach: [
      'Security-first architecture design with AI threat modeling',
      'Built comprehensive accessibility testing pipeline',
      'Created unified API layer for EHR integrations',
      'Implemented progressive enhancement for older devices',
      'AI-assisted translation and localization',
    ],
    aiAssists: [
      {
        title: 'Security Analysis',
        description: 'AI-powered threat modeling identified vulnerabilities before they became issues.',
      },
      {
        title: 'Accessibility Testing',
        description: 'Automated accessibility audits with AI-suggested improvements.',
      },
      {
        title: 'Translation',
        description: 'AI-assisted translation with medical terminology accuracy.',
      },
    ],
    results: [
      { metric: 'Accessibility Score', value: '100', context: 'Lighthouse accessibility' },
      { metric: 'Security Audits', value: 'Passed', context: 'all HIPAA requirements' },
      { metric: 'Patient Satisfaction', value: '4.8/5', context: 'average rating' },
      { metric: 'Providers', value: '200+', context: 'using the platform' },
    ],
    testimonial: {
      quote: 'For the first time, all our patients can actually use our portal. The accessibility work was exceptional.',
      author: 'Dr. Emily Watson',
      role: 'Chief Medical Officer, MedConnect',
    },
  },
]

// Helper to get a case study by slug
export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug)
}

// Get all case study slugs for static generation
export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((study) => study.slug)
}

