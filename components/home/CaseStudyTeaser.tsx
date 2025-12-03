'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { FadeIn } from '@/components/effects/FadeIn'
import { PROJECTS } from '@/data/projects'

// Select featured projects for homepage
const FEATURED_PROJECTS = PROJECTS.slice(0, 3)

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [imageError, setImageError] = useState(false)
  
  const gradients = [
    'from-accent-cyan/20 to-accent-magenta/20',
    'from-accent-magenta/20 to-accent-lime/20',
    'from-accent-lime/20 to-accent-cyan/20',
  ]

  return (
    <FadeIn delay={index * 0.1}>
      <Link href={`/work/${project.slug}`} className="block group h-full">
        <motion.article
          whileHover={{ y: -4 }}
          className="relative h-full overflow-hidden rounded-2xl bg-surface/30 border border-text-muted/10 hover:border-accent-cyan/30 transition-all duration-300"
        >
          {/* Gradient background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradients[index % 3]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            {!imageError ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setImageError(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % 3]}`} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent" />
            
            {/* Type badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="cyan" className="backdrop-blur-md bg-bg-primary/70">
                {project.type}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6 md:p-8">
            {/* Title */}
            <h3 className="font-heading text-xl md:text-2xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors line-clamp-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-text-muted leading-relaxed line-clamp-2">
              {project.short}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
              {project.stack.length > 3 && (
                <Badge variant="default">+{project.stack.length - 3}</Badge>
              )}
            </div>

            {/* Key outcome highlight */}
            <div className="mt-6 pt-6 border-t border-text-muted/10">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-text-muted uppercase tracking-wider">
                    Key Outcome
                  </span>
                  <p className="font-heading text-sm font-semibold text-accent-cyan truncate">
                    {project.outcomes[0]}
                  </p>
                </div>
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
  )
}

export function CaseStudyTeaser() {
  return (
    <SectionShell background="secondary" padding="lg">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
        <SectionHeader
          title="Featured Work"
          subtitle="Real projects with measurable impact — AI-driven development at scale"
          className="mb-0"
        />
        <FadeIn delay={0.2}>
          <Button href="/work" variant="ghost">
            View All {PROJECTS.length} Projects →
          </Button>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      {/* Quick stats */}
      <FadeIn delay={0.4}>
        <div className="mt-12 pt-8 border-t border-text-muted/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-heading text-2xl md:text-3xl font-bold text-accent-cyan">
                {PROJECTS.length}+
              </div>
              <div className="mt-1 text-sm text-text-muted">Projects Delivered</div>
            </div>
            <div>
              <div className="font-heading text-2xl md:text-3xl font-bold text-accent-magenta">
                50%
              </div>
              <div className="mt-1 text-sm text-text-muted">Faster Delivery</div>
            </div>
            <div>
              <div className="font-heading text-2xl md:text-3xl font-bold text-accent-lime">
                30h+
              </div>
              <div className="mt-1 text-sm text-text-muted">Monthly Time Saved</div>
            </div>
            <div>
              <div className="font-heading text-2xl md:text-3xl font-bold text-accent-cyan">
                100%
              </div>
              <div className="mt-1 text-sm text-text-muted">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionShell>
  )
}
