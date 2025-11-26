import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header, Footer, SectionShell } from '@/components/layout'
import { CaseStudyHero } from '@/components/work'
import { Button } from '@/components/ui/Button'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/effects/FadeIn'
import { CASE_STUDIES, getCaseStudy, getAllCaseStudySlugs } from '@/lib/caseStudies'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${study.title} — Case Study`,
    description: study.summary,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)

  if (!study) {
    notFound()
  }

  // Find next project for navigation
  const currentIndex = CASE_STUDIES.findIndex((s) => s.slug === slug)
  const nextStudy = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <CaseStudyHero study={study} />

        {/* The Challenge */}
        <SectionShell padding="lg">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                The Challenge
              </h2>
              <p className="mt-6 text-lg text-text-muted leading-relaxed">
                {study.problem}
              </p>

              {/* Constraints */}
              <div className="mt-8 p-6 rounded-xl bg-surface/30 border border-text-muted/10">
                <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
                  Key Constraints
                </h3>
                <ul className="space-y-3">
                  {study.constraints.map((constraint, index) => (
                    <li key={index} className="flex items-start gap-3 text-text-muted">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-magenta/10 flex items-center justify-center text-accent-magenta text-xs font-medium">
                        {index + 1}
                      </span>
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </SectionShell>

        {/* The Approach */}
        <SectionShell background="secondary" padding="lg">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                The Approach
              </h2>
            </FadeIn>

            <StaggerContainer className="mt-8 space-y-4">
              {study.approach.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-surface/30 border border-text-muted/10">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan font-heading font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="text-text-secondary pt-1">{step}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionShell>

        {/* AI-Powered Advantages */}
        <SectionShell padding="lg">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary text-center">
                AI-Powered Advantages
              </h2>
              <p className="mt-4 text-text-muted text-center max-w-2xl mx-auto">
                How AI tooling accelerated this project and enabled outcomes that wouldn&apos;t otherwise be possible.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.aiAssists.map((assist, index) => (
                <StaggerItem key={index}>
                  <div className="h-full p-6 rounded-xl bg-gradient-to-br from-accent-cyan/5 to-transparent border border-accent-cyan/20">
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary">
                      {assist.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                      {assist.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionShell>

        {/* Impact */}
        <SectionShell background="secondary" padding="lg">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary text-center">
                Impact
              </h2>
            </FadeIn>

            <StaggerContainer className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {study.results.map((result, index) => (
                <StaggerItem key={index}>
                  <div className="text-center p-6 rounded-xl bg-surface/30 border border-text-muted/10">
                    <div className="font-heading text-3xl md:text-4xl font-bold text-accent-cyan">
                      {result.value}
                    </div>
                    <div className="mt-2 text-sm text-text-primary font-medium">
                      {result.metric}
                    </div>
                    {result.context && (
                      <div className="mt-1 text-xs text-text-muted">
                        {result.context}
                      </div>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionShell>

        {/* Testimonial */}
        {study.testimonial && (
          <SectionShell padding="lg">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center">
                <svg className="w-12 h-12 mx-auto text-accent-cyan/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="mt-6 font-heading text-xl md:text-2xl text-text-primary leading-relaxed">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <div className="font-medium text-text-primary">
                    {study.testimonial.author}
                  </div>
                  <div className="text-sm text-text-muted">
                    {study.testimonial.role}
                  </div>
                </div>
              </div>
            </FadeIn>
          </SectionShell>
        )}

        {/* Next Project */}
        <SectionShell background="secondary" padding="md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-sm text-text-muted">Next Project</span>
              <h3 className="mt-1 font-heading text-xl font-bold text-text-primary">
                {nextStudy.title}
              </h3>
            </div>
            <Button href={`/work/${nextStudy.slug}`} variant="secondary">
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
              Back to All Work
            </Link>
          </div>
        </SectionShell>
      </main>
      <Footer />
    </>
  )
}

