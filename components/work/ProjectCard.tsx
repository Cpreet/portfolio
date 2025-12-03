'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link 
        href={`/work/${project.slug}`} 
        className="block group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <article className="relative h-full overflow-hidden rounded-2xl bg-surface/30 border border-text-muted/10 hover:border-accent-cyan/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,240,255,0.15)]">
          {/* Image */}
          <div className="relative h-52 overflow-hidden">
            {!imageError ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 via-accent-magenta/10 to-bg-secondary" />
            )}
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-60" />

            {/* Project type badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="cyan" className="backdrop-blur-md bg-bg-primary/70">
                {project.type}
              </Badge>
            </div>

            {/* Hover overlay with outcomes */}
            <motion.div
              initial={false}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10 
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/95 to-bg-primary/80 flex flex-col justify-end p-6"
            >
              <span className="text-xs text-accent-cyan uppercase tracking-wider mb-3">
                Key Outcomes
              </span>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                    {outcome}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Title */}
            <h3 className="font-heading text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-300 line-clamp-2">
              {project.title}
            </h3>

            {/* Short description */}
            <p className="mt-3 text-sm text-text-muted line-clamp-2">
              {project.short}
            </p>

            {/* Tech stack */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs bg-surface rounded-md text-text-muted border border-text-muted/10"
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 4 && (
                <span className="px-2 py-0.5 text-xs bg-surface rounded-md text-accent-cyan border border-accent-cyan/20">
                  +{project.stack.length - 4}
                </span>
              )}
            </div>

            {/* CTA */}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-medium text-accent-cyan group-hover:text-accent-magenta transition-colors duration-300">
                View Case Study
              </span>
              <motion.span
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-accent-cyan"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

