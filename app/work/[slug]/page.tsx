import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header, Footer, SectionShell } from '@/components/layout'
import { ProjectHero } from '@/components/work/ProjectHero'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/effects/FadeIn'
import { PROJECTS, getProject, getAllProjectSlugs } from '@/data/projects'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} — Case Study | Charanpreet`,
    description: project.short,
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  // Find next project for navigation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug)
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <ProjectHero project={project} />

        {/* Section 1: The Problem */}
        <SectionShell padding="lg" id="problem">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-accent-magenta/10 flex items-center justify-center text-accent-magenta font-heading font-bold">
                  1
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                  The Problem
                </h2>
              </div>
              
              <div className="pl-[52px]">
                <p className="text-lg text-text-muted leading-relaxed">
                  {project.problem || `${project.short} This project required a modern, scalable approach to deliver real business value within tight timelines.`}
                </p>

                {/* Problem visualization */}
                <div className="mt-8 p-6 rounded-xl bg-surface/30 border border-accent-magenta/20">
                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
                    Key Challenges
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-text-muted">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-magenta/10 flex items-center justify-center text-accent-magenta text-xs">
                        ✕
                      </span>
                      Complex technical requirements with limited timeline
                    </li>
                    <li className="flex items-start gap-3 text-text-muted">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-magenta/10 flex items-center justify-center text-accent-magenta text-xs">
                        ✕
                      </span>
                      Need for scalable architecture that could grow with the business
                    </li>
                    <li className="flex items-start gap-3 text-text-muted">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-magenta/10 flex items-center justify-center text-accent-magenta text-xs">
                        ✕
                      </span>
                      Integration with existing systems and third-party services
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </SectionShell>

        {/* Section 2: What I Built */}
        <SectionShell background="secondary" padding="lg" id="solution">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan font-heading font-bold">
                  2
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                  What I Built
                </h2>
              </div>
            </FadeIn>

            <div className="pl-[52px]">
              <FadeIn delay={0.1}>
                <p className="text-lg text-text-muted leading-relaxed">
                  {project.solution || `Developed a comprehensive ${project.type.toLowerCase()} solution using ${project.stack.slice(0, 3).join(', ')} and other modern technologies to address the core challenges and deliver measurable outcomes.`}
                </p>
              </FadeIn>

              {/* Architecture Diagram Placeholder */}
              <FadeIn delay={0.2}>
                <div className="mt-8 p-8 rounded-xl bg-surface/50 border border-text-muted/10">
                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-6 text-center">
                    Technical Architecture
                  </h3>
                  
                  {/* Architecture visualization */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Frontend */}
                    <div className="p-4 rounded-lg bg-bg-primary border border-accent-cyan/20">
                      <div className="text-accent-cyan text-xs uppercase tracking-wider mb-2">Frontend</div>
                      <div className="space-y-2">
                        {project.stack.filter(t => ['React', 'Next.js', 'Tailwind', 'Vue'].some(f => t.includes(f))).slice(0, 3).map(tech => (
                          <div key={tech} className="px-2 py-1 text-xs bg-surface rounded text-text-secondary">
                            {tech}
                          </div>
                        ))}
                        {project.stack.filter(t => ['React', 'Next.js', 'Tailwind', 'Vue'].some(f => t.includes(f))).length === 0 && (
                          <div className="px-2 py-1 text-xs bg-surface rounded text-text-secondary">
                            {project.stack[0]}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Backend */}
                    <div className="p-4 rounded-lg bg-bg-primary border border-accent-magenta/20">
                      <div className="text-accent-magenta text-xs uppercase tracking-wider mb-2">Backend</div>
                      <div className="space-y-2">
                        {project.stack.filter(t => ['Node', 'Express', 'PocketBase', 'Firebase', 'Serverless', 'GraphQL'].some(f => t.includes(f))).slice(0, 3).map(tech => (
                          <div key={tech} className="px-2 py-1 text-xs bg-surface rounded text-text-secondary">
                            {tech}
                          </div>
                        ))}
                        {project.stack.filter(t => ['Node', 'Express', 'PocketBase', 'Firebase', 'Serverless', 'GraphQL'].some(f => t.includes(f))).length === 0 && (
                          <div className="px-2 py-1 text-xs bg-surface rounded text-text-muted italic">
                            Client-side focused
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Data / Infra */}
                    <div className="p-4 rounded-lg bg-bg-primary border border-accent-lime/20">
                      <div className="text-accent-lime text-xs uppercase tracking-wider mb-2">Data & Infra</div>
                      <div className="space-y-2">
                        {project.stack.filter(t => ['MongoDB', 'SQLite', 'Vercel', 'GitHub', 'Stripe', 'Notion', 'Webhooks'].some(f => t.includes(f))).slice(0, 3).map(tech => (
                          <div key={tech} className="px-2 py-1 text-xs bg-surface rounded text-text-secondary">
                            {tech}
                          </div>
                        ))}
                        {project.stack.filter(t => ['MongoDB', 'SQLite', 'Vercel', 'GitHub', 'Stripe', 'Notion', 'Webhooks'].some(f => t.includes(f))).length === 0 && (
                          <div className="px-2 py-1 text-xs bg-surface rounded text-text-secondary">
                            Cloud Infrastructure
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Connection lines (decorative) */}
                  <div className="hidden md:flex justify-center mt-4 gap-4">
                    <div className="h-px w-20 bg-gradient-to-r from-accent-cyan to-accent-magenta" />
                    <div className="h-px w-20 bg-gradient-to-r from-accent-magenta to-accent-lime" />
                  </div>
                </div>
              </FadeIn>

              {/* Tech Stack Detail */}
              <FadeIn delay={0.3}>
                <div className="mt-8">
                  <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
                    Complete Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="cyan">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </SectionShell>

        {/* Section 3: Outcomes & Metrics */}
        <SectionShell padding="lg" id="outcomes">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-full bg-accent-lime/10 flex items-center justify-center text-accent-lime font-heading font-bold">
                  3
                </span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                  Outcomes & Impact
                </h2>
              </div>
            </FadeIn>

            <div className="pl-[52px]">
              {/* Outcomes Grid */}
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.outcomes.map((outcome, index) => (
                  <StaggerItem key={index}>
                    <div className="h-full p-6 rounded-xl bg-gradient-to-br from-accent-lime/5 to-transparent border border-accent-lime/20 text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-accent-lime/10 flex items-center justify-center text-accent-lime mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-heading font-semibold text-text-primary">
                        {outcome}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Call to Action */}
              <FadeIn delay={0.4}>
                <div className="mt-12 p-8 rounded-xl bg-gradient-to-r from-accent-cyan/10 via-accent-magenta/10 to-accent-lime/10 border border-text-muted/10 text-center">
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-3">
                    Need something similar?
                  </h3>
                  <p className="text-text-muted mb-6 max-w-lg mx-auto">
                    I can help you build a {project.type.toLowerCase()} solution tailored to your specific needs.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    {project.link ? (
                      <Button href={project.link} variant="primary">
                        View Live Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Button>
                    ) : (
                      <Button href="/contact" variant="primary">
                        Request Demo Access
                      </Button>
                    )}
                    <Button href="/contact" variant="secondary">
                      Start a Conversation
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </SectionShell>

        {/* Next Project */}
        <SectionShell background="secondary" padding="md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-sm text-text-muted">Next Project</span>
              <h3 className="mt-1 font-heading text-xl font-bold text-text-primary">
                {nextProject.title}
              </h3>
            </div>
            <Button href={`/work/${nextProject.slug}`} variant="secondary">
              View Case Study →
            </Button>
          </div>
        </SectionShell>

        {/* Back to Work */}
        <SectionShell padding="md">
          <div className="text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to All Projects
            </Link>
          </div>
        </SectionShell>
      </main>
      <Footer />
    </>
  )
}
