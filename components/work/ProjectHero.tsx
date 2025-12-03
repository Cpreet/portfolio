'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import type { Project } from '@/data/projects'
import { GenerateImageButton } from './GenerateImageButton'

interface ProjectHeroProps {
  project: Project
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState(project.image)

  const handleImageGenerated = (newImagePath: string) => {
    setImageSrc(newImagePath)
    setImageError(false)
  }

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 via-bg-primary to-bg-primary" />
      
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent-cyan/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          {/* Project type */}
          <Badge variant="cyan" className="mb-4">
            {project.type}
          </Badge>

          {/* Title */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
            {project.title}
          </h1>

          {/* Short description */}
          <p className="mt-6 text-xl text-text-muted leading-relaxed max-w-3xl">
            {project.short}
          </p>

          {/* Meta info */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            {/* Tech stack */}
            <div>
              <span className="text-xs text-text-muted uppercase tracking-wider">
                Tech Stack
              </span>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {project.link ? (
              <Button href={project.link} size="lg">
                View Live Demo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Button>
            ) : (
              <Button href="/contact" size="lg">
                Request Access
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Button>
            )}
            <Button href="/contact" variant="secondary" size="lg">
              Discuss Similar Project
            </Button>
          </div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 relative"
        >
          <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-accent-cyan/10 via-accent-magenta/5 to-bg-secondary border border-text-muted/10 shadow-2xl shadow-black/20">
            {!imageError ? (
              <Image
                src={imageSrc}
                alt={project.title}
                fill
                className="object-cover"
                onError={() => setImageError(true)}
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-text-muted p-8">
                <svg className="w-16 h-16 opacity-30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm text-center mb-4">Project visualization coming soon</p>
                <GenerateImageButton 
                  project={project} 
                  onImageGenerated={handleImageGenerated}
                />
              </div>
            )}
          </div>
          
          {/* Decorative gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}

