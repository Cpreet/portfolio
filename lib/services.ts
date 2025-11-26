// ===== CUSTOMIZATION: Service Packages =====
// Update these with your actual service offerings and pricing

export interface ServicePackage {
  id: string
  name: string
  tagline: string
  description: string
  price: string
  priceNote: string
  duration: string
  features: string[]
  outcomes: string[]
  popular?: boolean
}

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'mvp',
    name: 'MVP in 4 Weeks',
    tagline: 'From concept to launch, fast',
    description:
      'Get a production-ready MVP shipped in 4 weeks. Perfect for validating ideas, raising funding, or getting early users.',
    price: '$12,000',
    priceNote: 'Fixed scope',
    duration: '4 weeks',
    features: [
      'Full-stack web application',
      'Up to 5 core features',
      'Authentication & user management',
      'Responsive design (mobile-first)',
      'Basic analytics integration',
      'Deployment to production',
      '2 weeks of bug fixes included',
    ],
    outcomes: [
      'Launch-ready product',
      'Investor demo material',
      'Foundation for iteration',
    ],
    popular: true,
  },
  {
    id: 'redesign',
    name: 'AI-Accelerated Redesign',
    tagline: 'Transform your existing product',
    description:
      'Modernize your application with improved UX, performance, and architecture. AI-assisted analysis identifies the highest-impact improvements.',
    price: '$8,000+',
    priceNote: 'Scope-dependent',
    duration: '2-6 weeks',
    features: [
      'UX/UI audit and recommendations',
      'Performance optimization',
      'Component library / design system',
      'Accessibility improvements',
      'Code refactoring for maintainability',
      'Documentation',
    ],
    outcomes: [
      'Faster load times',
      'Better user retention',
      'Easier maintenance',
    ],
  },
  {
    id: 'tooling',
    name: 'Dev Tools & Automation',
    tagline: 'Multiply your team\'s velocity',
    description:
      'Custom internal tools, automation pipelines, and developer experience improvements that pay dividends on every future project.',
    price: '$4,000+',
    priceNote: 'Per tool/pipeline',
    duration: '1-3 weeks',
    features: [
      'Custom CLI tools',
      'CI/CD pipeline optimization',
      'Code generation scripts',
      'API integrations',
      'Monitoring & alerting setup',
      'Documentation & training',
    ],
    outcomes: [
      'Reduced manual work',
      'Fewer deployment issues',
      'Faster development cycles',
    ],
  },
]

// Process steps for the AI-assisted pipeline diagram
export const PROCESS_STEPS = [
  {
    id: 'discovery',
    title: 'Discovery',
    description: 'AI-powered requirements analysis and technical scoping',
    icon: 'search',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Architecture planning with AI-generated specifications',
    icon: 'layout',
  },
  {
    id: 'build',
    title: 'Build',
    description: 'Parallel development with AI pair programming',
    icon: 'code',
  },
  {
    id: 'ship',
    title: 'Ship',
    description: 'Automated testing, CI/CD, and production deployment',
    icon: 'rocket',
  },
]

