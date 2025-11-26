'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/effects/FadeIn'

// Featured case studies - will be imported from lib/caseStudies.ts
const FEATURED_STUDIES = [
  {
    slug: 'fintech-dashboard',
    title: 'FinFlow Dashboard',
    client: 'Series A Fintech Startup',
    description: 'Real-time financial analytics platform with AI-powered insights, processing 1M+ transactions daily.',
    tags: ['React', 'Next.js', 'AI/ML', 'Real-time'],
    metrics: { label: 'Processing Speed', value: '3x faster' },
    gradient: 'from-accent-cyan/20 to-accent-magenta/20',
  },
  {
    slug: 'saas-platform',
    title: 'WorkOS Rebrand',
    client: 'Enterprise SaaS Platform',
    description: 'Complete frontend rewrite and design system implementation, reducing bundle size by 60%.',
    tags: ['TypeScript', 'Design System', 'Performance'],
    metrics: { label: 'Load Time', value: '-60%' },
    gradient: 'from-accent-magenta/20 to-accent-lime/20',
  },
]

export function CaseStudyTeaser() {
  return (
    <SectionShell background="secondary" padding="lg">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
        <SectionHeader
          title="Featured Work"
          subtitle="AI-driven projects that shipped and made an impact"
          className="mb-0"
        />
        <FadeIn delay={0.2}>
          <Button href="/work" variant="ghost">
            View All Work →
          </Button>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {FEATURED_STUDIES.map((study, index) => (
          <FadeIn key={study.slug} delay={index * 0.1}>
            <Link href={`/work/${study.slug}`} className="block group">
              <motion.article
                whileHover={{ y: -4 }}
                className="relative h-full overflow-hidden rounded-2xl bg-surface/30 border border-text-muted/10 hover:border-accent-cyan/30 transition-all duration-300"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative p-6 md:p-8">
                  {/* Client badge */}
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    {study.client}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-text-muted leading-relaxed">
                    {study.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Metric highlight */}
                  <div className="mt-6 pt-6 border-t border-text-muted/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-text-muted">
                        {study.metrics.label}
                      </span>
                      <span className="font-heading text-xl font-bold text-accent-cyan">
                        {study.metrics.value}
                      </span>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <svg
                      className="w-6 h-6 text-accent-cyan"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.article>
            </Link>
          </FadeIn>
        ))}
      </div>
    </SectionShell>
  )
}

