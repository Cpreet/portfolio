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

export const CASE_STUDIES: CaseStudy[] = []

// Helper to get a case study by slug
export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug)
}

// Get all case study slugs for static generation
export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((study) => study.slug)
}

