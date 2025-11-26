'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import type { CaseStudy } from '@/lib/caseStudies'

interface CaseStudyHeroProps {
  study: CaseStudy
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 via-bg-primary to-bg-primary" />

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          {/* Client */}
          <span className="text-accent-cyan text-sm font-medium uppercase tracking-wider">
            {study.client}
          </span>

          {/* Title */}
          <h1 className="mt-4 font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary">
            {study.title}
          </h1>

          {/* Summary */}
          <p className="mt-6 text-xl text-text-muted leading-relaxed">
            {study.summary}
          </p>

          {/* Meta info */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider">
                Duration
              </span>
              <p className="mt-1 font-medium text-text-primary">{study.duration}</p>
            </div>
            <div className="w-px h-10 bg-text-muted/20" />
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider">
                Year
              </span>
              <p className="mt-1 font-medium text-text-primary">{study.year}</p>
            </div>
            <div className="w-px h-10 bg-text-muted/20" />
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="cyan">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hero image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-accent-cyan/20 via-accent-magenta/10 to-bg-secondary border border-text-muted/10"
        >
          <div className="w-full h-full flex items-center justify-center text-text-muted">
            {/* Placeholder - replace with actual project screenshot */}
            <svg className="w-16 h-16 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

