'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import type { CaseStudy } from '@/lib/caseStudies'

interface CaseStudyCardProps {
  study: CaseStudy
  index: number
}

export function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/work/${study.slug}`} className="block group">
        <article className="relative h-full overflow-hidden rounded-2xl bg-surface/30 border border-text-muted/10 hover:border-accent-cyan/30 transition-all duration-300">
          {/* Image placeholder - gradient background */}
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 via-accent-magenta/10 to-bg-secondary" />
            
            {/* Year badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-bg-primary/80 backdrop-blur-sm text-xs text-text-muted">
                {study.year}
              </span>
            </div>

            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-accent-cyan/10 flex items-center justify-center"
            >
              <span className="px-4 py-2 rounded-full bg-bg-primary/90 text-accent-cyan text-sm font-medium">
                View Case Study →
              </span>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Client */}
            <span className="text-xs text-text-muted uppercase tracking-wider">
              {study.client}
            </span>

            {/* Title */}
            <h3 className="mt-2 font-heading text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
              {study.title}
            </h3>

            {/* Summary */}
            <p className="mt-3 text-sm text-text-muted line-clamp-2">
              {study.summary}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {study.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
              {study.tags.length > 3 && (
                <Badge variant="default">+{study.tags.length - 3}</Badge>
              )}
            </div>

            {/* Key metric */}
            {study.results[0] && (
              <div className="mt-4 pt-4 border-t border-text-muted/10 flex items-center justify-between">
                <span className="text-xs text-text-muted">
                  {study.results[0].metric}
                </span>
                <span className="font-heading font-bold text-accent-cyan">
                  {study.results[0].value}
                </span>
              </div>
            )}
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

