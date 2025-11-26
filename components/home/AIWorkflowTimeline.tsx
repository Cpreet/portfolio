'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { AI_WORKFLOW_STEPS } from '@/lib/constants'
import { cn } from '@/lib/cn'

// ===== X-FACTOR: Scroll-driven AI Workflow Timeline =====
export function AIWorkflowTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <SectionShell padding="lg" className="overflow-hidden">
      <SectionHeader
        title="How AI Changes the Way I Build"
        subtitle="A streamlined process that compresses months into weeks"
        align="center"
      />

      <div ref={containerRef} className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-text-muted/20 to-transparent" />

        {/* Progress indicator */}
        <motion.div
          className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-gradient-to-b from-accent-cyan to-accent-magenta"
          style={{
            height: useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']),
          }}
        />

        {/* Steps */}
        <div className="relative space-y-12 md:space-y-24">
          {AI_WORKFLOW_STEPS.map((step, index) => (
            <TimelineStep
              key={step.step}
              step={step}
              index={index}
              isEven={index % 2 === 0}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

interface TimelineStepProps {
  step: (typeof AI_WORKFLOW_STEPS)[number]
  index: number
  isEven: boolean
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress']
}

function TimelineStep({ step, index, isEven }: TimelineStepProps) {
  const stepRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ['start end', 'center center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [isEven ? -20 : 20, 0]
  )

  return (
    <motion.div
      ref={stepRef}
      style={{ opacity, scale, x }}
      className={cn(
        'relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16',
        'pl-12 md:pl-0'
      )}
    >
      {/* Step number indicator */}
      <div
        className={cn(
          'absolute left-0 md:left-1/2 md:-translate-x-1/2',
          'w-8 h-8 rounded-full bg-surface border-2 border-accent-cyan',
          'flex items-center justify-center font-heading font-bold text-accent-cyan text-sm'
        )}
      >
        {step.step}
      </div>

      {/* Content - alternating sides on desktop */}
      <div
        className={cn(
          'md:text-right',
          !isEven && 'md:col-start-2 md:text-left'
        )}
      >
        <div
          className={cn(
            'inline-block p-6 rounded-xl bg-surface/30 border border-text-muted/10',
            'hover:border-accent-cyan/30 transition-colors'
          )}
        >
          {/* Duration badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-medium">
            {step.duration}
          </span>

          {/* Title */}
          <h3 className="mt-4 font-heading text-xl font-semibold text-text-primary">
            {step.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-text-muted leading-relaxed">
            {step.description}
          </p>
        </div>
      </div>

      {/* Empty column for alternating layout */}
      {isEven && <div className="hidden md:block" />}
    </motion.div>
  )
}

