import type { Metadata } from 'next'
import { Header, Footer, SectionShell, SectionHeader } from '@/components/layout'
import { CaseStudyCard } from '@/components/work'
import { CTABand } from '@/components/home/CTABand'
import { CASE_STUDIES } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'Work — AI-Driven Case Studies & Projects',
  description:
    'Explore case studies of AI-assisted web development projects. Real metrics, real impact for startups and product teams.',
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <SectionShell padding="lg">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              title="Work"
              subtitle="AI-driven projects that shipped and made an impact. Each case study shows the real process, challenges, and results."
              align="center"
            />
          </div>
        </SectionShell>

        {/* Case Studies Grid */}
        <SectionShell background="secondary" padding="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CASE_STUDIES.map((study, index) => (
              <CaseStudyCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </SectionShell>

        {/* CTA */}
        <CTABand />
      </main>
      <Footer />
    </>
  )
}

