'use client'

import { motion } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { PROCESS_STEPS } from '@/lib/services'
import { cn } from '@/lib/cn'

const icons = {
  search: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  layout: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  code: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  rocket: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
}

export function ProcessDiagram() {
  return (
    <SectionShell background="secondary" padding="lg">
      <SectionHeader
        title="The AI-Assisted Pipeline"
        subtitle="A proven process that leverages AI at every stage"
        align="center"
      />

      {/* Desktop: Horizontal flow */}
      <div className="hidden md:block relative">
        {/* Connection line */}
        <div className="absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-lime" />

        <div className="grid grid-cols-4 gap-4">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <div
                className={cn(
                  'relative z-10 w-12 h-12 rounded-full flex items-center justify-center',
                  'bg-surface border-2 border-accent-cyan text-accent-cyan',
                  'shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                )}
              >
                {icons[step.icon as keyof typeof icons]}
              </div>

              {/* Step number */}
              <div className="mt-4 w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center font-heading font-bold text-accent-cyan text-sm">
                {index + 1}
              </div>

              {/* Content */}
              <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: Vertical flow */}
      <div className="md:hidden relative">
        {/* Vertical connection line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-magenta to-accent-lime" />

        <div className="space-y-8">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start gap-6 pl-4"
            >
              {/* Step circle */}
              <div
                className={cn(
                  'relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center',
                  'bg-surface border-2 border-accent-cyan text-accent-cyan'
                )}
              >
                <span className="font-heading font-bold text-sm">{index + 1}</span>
              </div>

              {/* Content */}
              <div className="pt-1">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

