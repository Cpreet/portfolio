export interface Project {
  slug: string
  title: string
  link?: string
  type: string
  stack: string[]
  outcomes: string[]
  short: string
  image: string
  demoType?: 'live' | 'request'
  // Extended case study content
  problem?: string
  solution?: string
  architecture?: string
}

export const PROJECTS: Project[] = [
  {
    slug: "therapytips",
    title: "TherapyTips.org — AI-Powered Mental Health CMS",
    link: "https://therapytips.org",
    type: "AI / CMS",
    stack: ["Next.js", "SQLite", "PocketBase", "Tailwind", "Vercel"],
    outcomes: [
      "40% faster indexing growth",
      "Automated SEO workflows",
      "Thousands of pages scalable"
    ],
    short: "AI-driven publishing engine for mental health content.",
    image: "/assets/projects/therapytips.png",
    demoType: "live",
    problem: "Mental health content creators needed a way to publish authoritative, SEO-optimized content at scale without sacrificing quality or requiring a large editorial team. Traditional CMS solutions couldn't handle the specialized workflow requirements for medical-adjacent content.",
    solution: "Built an AI-augmented content management system that automates research aggregation, generates structured outlines, and assists with SEO optimization while keeping human experts in the editorial loop for accuracy and compliance.",
    architecture: "Next.js frontend with PocketBase backend, SQLite for content storage, automated SEO pipeline with AI-assisted metadata generation, deployed on Vercel with edge caching."
  },
  {
    slug: "ondc-commerce",
    title: "ONDC-Compliant E-Commerce Superapp Suite",
    type: "Enterprise Commerce",
    stack: ["MongoDB", "Express", "React", "Node", "GraphQL", "Webhooks"],
    outcomes: [
      "Real-time logistics tracking",
      "Seller onboarding automation",
      "ONDC compliance"
    ],
    short: "Buyer & seller commerce system with logistics integration.",
    image: "/assets/projects/ondc.png",
    demoType: "request",
    problem: "India's Open Network for Digital Commerce (ONDC) initiative required existing e-commerce players to integrate with a decentralized protocol. The client needed a full-stack solution supporting both buyer and seller apps with real-time logistics.",
    solution: "Developed a comprehensive superapp suite with separate buyer and seller applications, unified order management, webhook-based logistics integration, and full ONDC protocol compliance for interoperability.",
    architecture: "MERN stack with GraphQL API layer, MongoDB for flexible document storage, webhook integrations for logistics partners, real-time updates via Socket.io, microservices for order processing."
  },
  {
    slug: "suchaye",
    title: "Suchaye — Jewelry & Candles Store",
    link: "https://www.smartbiz.in/SuchayebyVibhuti",
    type: "E-commerce",
    stack: ["React", "Tailwind", "Stripe"],
    outcomes: [
      "Online checkout & catalog",
      "Brand experience uplift",
      "Optimized mobile funnel"
    ],
    short: "Online expansion for handcrafted products.",
    image: "/assets/projects/suchaye.png",
    demoType: "live",
    problem: "A local artisan brand selling handcrafted jewelry and candles needed to expand beyond physical markets. They required an elegant online presence that preserved their handmade aesthetic while providing modern e-commerce functionality.",
    solution: "Created a visually stunning storefront with high-quality product photography integration, streamlined checkout flow via Stripe, and mobile-first design that increased conversion rates significantly.",
    architecture: "React SPA with Tailwind CSS for styling, Stripe integration for payments, optimized image delivery, responsive design system."
  },
  {
    slug: "boardgamers",
    title: "Chandigarh Boardgamers — Event Platform",
    type: "Community / Events",
    stack: ["Next.js", "Firebase Auth", "Notion API"],
    outcomes: [
      "Automated RSVP",
      "Local community growth",
      "Simple event admin panel"
    ],
    short: "Meetups & community platform for social gaming.",
    image: "/assets/projects/boardgamers.png",
    demoType: "request",
    problem: "A growing board gaming community needed a centralized platform to manage events, handle RSVPs, and communicate with members. Existing solutions like Meetup.com had high fees and poor customization options.",
    solution: "Built a custom community platform with Notion as the content backend (making updates easy for non-technical admins), Firebase for authentication and real-time updates, and automated RSVP management.",
    architecture: "Next.js with ISR for event pages, Firebase Auth for member login, Notion API for content management, automated email notifications for event updates."
  },
  {
    slug: "devtools-automation",
    title: "Internal Dev Tools & Engineering Automation",
    type: "Developer Productivity",
    stack: ["Node.js", "GitHub Actions", "CLI Tools"],
    outcomes: [
      "30+ hours engineering time saved monthly",
      "Stable CI/CD",
      "Faster releases"
    ],
    short: "Automation workflows for engineering teams.",
    image: "/assets/projects/devtools.png",
    demoType: "request",
    problem: "Engineering teams were spending excessive time on repetitive tasks: environment setup, deployment procedures, code quality checks, and cross-team coordination. This overhead was slowing down feature development.",
    solution: "Developed a suite of internal tools including custom CLI utilities, GitHub Actions workflows for automated testing and deployment, and scripts for common development tasks that reduced manual overhead significantly.",
    architecture: "Node.js CLI tools, GitHub Actions for CI/CD, shell scripts for automation, integration with Slack for notifications, Docker for consistent environments."
  },
  {
    slug: "recruitment-systems",
    title: "Recruitment & Hackathon Platforms",
    type: "EdTech",
    stack: ["React", "Express", "Serverless APIs"],
    outcomes: [
      "Higher assessment throughput",
      "In-house cost-saving tools",
      "Custom proctoring logic"
    ],
    short: "Technical recruitment systems for universities.",
    image: "/assets/projects/recruitment.png",
    demoType: "request",
    problem: "Universities and companies needed specialized platforms for conducting technical assessments and hackathons. Off-the-shelf solutions were expensive, lacked customization, and had inadequate proctoring for high-stakes evaluations.",
    solution: "Built custom recruitment and hackathon platforms with built-in code editors, real-time collaboration features, custom proctoring logic, and analytics dashboards for evaluators.",
    architecture: "React frontend with Monaco editor integration, Express backend with serverless functions for scaling, custom proctoring system, real-time sync for hackathon collaboration."
  },
  {
    slug: "plausible-gazette",
    title: "The Plausible Gazette — AI Publishing Workflow",
    type: "AI / Tooling",
    stack: ["Next.js", "PocketBase", "Tailwind"],
    outcomes: [
      "Forecasting-aligned CMS",
      "Automated editorial pipeline",
      "Experimental foresight tooling"
    ],
    short: "A futuristic publishing and forecasting tool.",
    image: "/assets/projects/plausible.png",
    demoType: "request",
    problem: "Traditional news publishing lacks mechanisms for tracking prediction accuracy and updating beliefs based on outcomes. There was a need for a publishing platform that integrates forecasting methodology into the editorial process.",
    solution: "Created an experimental publishing platform that combines traditional content management with prediction markets concepts, allowing writers to make verifiable forecasts and track their accuracy over time.",
    architecture: "Next.js with App Router, PocketBase for backend and auth, custom forecasting resolution system, Tailwind for styling, deployed on Vercel."
  }
]

// Helper functions
export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((project) => project.slug)
}

