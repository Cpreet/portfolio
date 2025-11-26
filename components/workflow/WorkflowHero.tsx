'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'

export function WorkflowHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 via-bg-primary to-bg-primary" />
      
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-accent-cyan/20 text-sm text-text-secondary backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
            AI-Powered Process
          </span>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
            A Workflow Built for{' '}
            <GradientText>Speed</GradientText>,{' '}
            <GradientText>Transparency</GradientText>, and{' '}
            <GradientText>Better Decisions</GradientText>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-text-muted max-w-3xl mx-auto">
            Every phase is assisted by AI to eliminate ambiguity, reduce risk, and 
            accelerate results. From initial scope to final deployment, you maintain 
            full visibility and control.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Start with a Free Scope Assessment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              See Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

