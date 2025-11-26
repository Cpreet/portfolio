'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { cn } from '@/lib/cn'

const WORKFLOW_STEPS = [
  {
    step: 1,
    title: 'Understand + Evaluate',
    subtitle: 'Discovery Phase',
    description: 'AI-powered analysis of your business goals, technical requirements, and market context. We determine if an app is the right solution and what type will deliver the most value.',
    features: [
      'Business goal extraction',
      'Feasibility assessment',
      'Opportunity scoring',
      'Solution type recommendation',
    ],
    duration: '2-3 days',
    icon: 'search',
  },
  {
    step: 2,
    title: 'Spec + Prototype',
    subtitle: 'Planning Phase',
    description: 'AI generates comprehensive functional and technical specifications. You review, refine, and approve before a single line of production code is written.',
    features: [
      'Auto-generated specs',
      'Interactive prototypes',
      'Revision tracking',
      'Stakeholder alignment',
    ],
    duration: '3-5 days',
    icon: 'document',
  },
  {
    step: 3,
    title: 'Build in Modules',
    subtitle: 'Development Phase',
    description: 'Development happens in approved, billable increments. Each module is a standalone deliverable you can review, test, and approve before paying.',
    features: [
      'Modular architecture',
      'Weekly deliverables',
      'Pay-as-you-go billing',
      'Continuous deployment',
    ],
    duration: '1-8 weeks',
    icon: 'code',
  },
  {
    step: 4,
    title: 'Review + Improve',
    subtitle: 'Iteration Phase',
    description: 'Access your private review console with AI-assisted feedback tools. Approve changes, request revisions, and see your product evolve in real-time.',
    features: [
      'Client review dashboard',
      'AI-powered feedback',
      'One-click approvals',
      'Rapid iteration cycles',
    ],
    duration: 'Ongoing',
    icon: 'refresh',
  },
]

const icons = {
  search: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  document: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  code: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  refresh: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
}

export function WorkflowTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <SectionShell padding="lg" background="secondary">
      <SectionHeader
        title="The Four-Step Process"
        subtitle="A proven workflow that balances speed with quality, and flexibility with structure"
        align="center"
      />

      <div ref={containerRef} className="relative mt-16">
        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          {/* Progress line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-surface">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-lime"
              style={{
                width: useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%']),
              }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {WORKFLOW_STEPS.map((step, index) => (
              <TimelineCard key={step.step} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet vertical timeline */}
        <div className="lg:hidden space-y-8">
          {WORKFLOW_STEPS.map((step, index) => (
            <TimelineCardVertical key={step.step} step={step} index={index} />
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

function TimelineCard({ step, index }: { step: typeof WORKFLOW_STEPS[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="relative"
    >
      {/* Step indicator */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-12 h-12 rounded-full bg-surface border-2 border-accent-cyan flex items-center justify-center text-accent-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)]">
          {icons[step.icon as keyof typeof icons]}
        </div>
        <div className="mt-4 font-heading text-sm font-bold text-accent-cyan">
          Step {step.step}
        </div>
      </div>

      {/* Card */}
      <div className="p-6 rounded-xl bg-surface/50 border border-text-muted/10 hover:border-accent-cyan/30 transition-colors h-full">
        <span className="text-xs text-accent-magenta font-medium uppercase tracking-wider">
          {step.subtitle}
        </span>
        <h3 className="mt-2 font-heading text-xl font-bold text-text-primary">
          {step.title}
        </h3>
        <p className="mt-3 text-sm text-text-muted leading-relaxed">
          {step.description}
        </p>

        {/* Features */}
        <ul className="mt-4 space-y-2">
          {step.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Duration */}
        <div className="mt-4 pt-4 border-t border-text-muted/10">
          <span className="text-xs text-text-muted">Typical duration:</span>
          <span className="ml-2 text-sm font-medium text-accent-lime">{step.duration}</span>
        </div>
      </div>
    </motion.div>
  )
}

function TimelineCardVertical({ step, index }: { step: typeof WORKFLOW_STEPS[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative flex gap-6"
    >
      {/* Step indicator */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-surface border-2 border-accent-cyan flex items-center justify-center text-accent-cyan">
          <span className="font-heading font-bold text-sm">{step.step}</span>
        </div>
        {index < WORKFLOW_STEPS.length - 1 && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-accent-cyan to-transparent mt-2" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-8">
        <span className="text-xs text-accent-magenta font-medium uppercase tracking-wider">
          {step.subtitle}
        </span>
        <h3 className="mt-1 font-heading text-xl font-bold text-text-primary">
          {step.title}
        </h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          {step.description}
        </p>

        {/* Features */}
        <div className="mt-4 flex flex-wrap gap-2">
          {step.features.map((feature) => (
            <span
              key={feature}
              className="px-2 py-1 text-xs bg-surface rounded-full text-text-secondary"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Duration */}
        <div className="mt-3">
          <span className="text-xs text-accent-lime">{step.duration}</span>
        </div>
      </div>
    </motion.div>
  )
}

