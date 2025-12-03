import type { Metadata } from 'next'
import { Header, Footer, SectionShell } from '@/components/layout'
import { ProjectCard } from '@/components/work/ProjectCard'
import { WorkCTA } from '@/components/work/WorkCTA'
import { PROJECTS } from '@/data/projects'
import { FadeIn } from '@/components/effects/FadeIn'
import { GradientText } from '@/components/ui/GradientText'

export const metadata: Metadata = {
  title: 'Work — AI-Driven Projects & Case Studies | Charanpreet',
  description:
    'Explore real-world projects built with AI-augmented development. Case studies showcasing Next.js, React, Node.js solutions with measurable impact.',
}

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <SectionShell padding="lg">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse mr-2" />
                {PROJECTS.length} Projects Delivered
              </span>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
                Real Projects,{' '}
                <GradientText>Real Impact</GradientText>
              </h1>
              
              <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
                From AI-powered CMS platforms to enterprise commerce systems — each project 
                represents a unique challenge solved with modern technology and measurable outcomes.
              </p>
            </FadeIn>
          </div>
        </SectionShell>

        {/* Projects Grid */}
        <SectionShell background="secondary" padding="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </SectionShell>

        {/* Stats Band */}
        <SectionShell padding="md">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-accent-cyan">7+</div>
                <div className="mt-2 text-sm text-text-muted">Projects Shipped</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-accent-magenta">40%</div>
                <div className="mt-2 text-sm text-text-muted">Faster Growth</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-accent-lime">30h+</div>
                <div className="mt-2 text-sm text-text-muted">Monthly Savings</div>
              </div>
              <div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-accent-cyan">100%</div>
                <div className="mt-2 text-sm text-text-muted">Client Satisfaction</div>
              </div>
            </div>
          </FadeIn>
        </SectionShell>

        {/* CTA */}
        <WorkCTA />
      </main>
      <Footer />
    </>
  )
}
