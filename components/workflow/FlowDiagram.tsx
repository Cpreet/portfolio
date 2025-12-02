'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { cn } from '@/lib/cn'

const FLOW_STEPS = [
  { id: 'discovery', label: 'Discovery', color: 'cyan' },
  { id: 'spec', label: 'Spec', color: 'cyan' },
  { id: 'prototype', label: 'Prototype', color: 'magenta' },
  { id: 'sprint', label: 'Sprint', color: 'magenta' },
  { id: 'review', label: 'Client Review', color: 'lime' },
  { id: 'deploy', label: 'Deploy', color: 'lime' },
  { id: 'iterate', label: 'Iterate', color: 'cyan' },
]

export function FlowDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const progress = useTransform(scrollYProgress, [0.2, 0.8], [0, 100])

  return (
    <SectionShell padding="lg" background="secondary">
      <SectionHeader
        title="The Complete Lifecycle"
        subtitle="An animated view of how your project flows from discovery to deployment and beyond"
        align="center"
      />

      <div ref={containerRef} className="max-w-5xl mx-auto">
        {/* Desktop flow */}
        <div className="hidden md:block relative py-12">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-surface -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-lime"
              style={{ width: progress.get() + '%' }}
            />
          </div>

          {/* Steps */}
          <div className="relative flex justify-between">
            {FLOW_STEPS.map((step, index) => {
              const colorStyles = {
                cyan: 'border-accent-cyan text-accent-cyan bg-accent-cyan/10',
                magenta: 'border-accent-magenta text-accent-magenta bg-accent-magenta/10',
                lime: 'border-accent-lime text-accent-lime bg-accent-lime/10',
              }

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  {/* Node */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={cn(
                      'w-12 h-12 rounded-full border-2 flex items-center justify-center',
                      'bg-bg-primary transition-all cursor-pointer',
                      colorStyles[step.color as keyof typeof colorStyles]
                    )}
                  >
                    <span className="font-heading font-bold text-sm">{index + 1}</span>
                  </motion.div>

                  {/* Label */}
                  <span className="mt-3 text-sm font-medium text-text-primary whitespace-nowrap">
                    {step.label}
                  </span>

                  {/* Arrow for iteration loop */}
                  {step.id === 'iterate' && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                      <svg
                        className="w-full h-8 text-accent-cyan/30"
                        viewBox="0 0 400 32"
                        fill="none"
                      >
                        <path
                          d="M380 16 C 380 30, 20 30, 20 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          fill="none"
                        />
                        <path d="M25 12 L 20 16 L 25 20" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 text-xs text-text-muted whitespace-nowrap">
                        Continuous improvement loop
                      </span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile flow - vertical */}
        <div className="md:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-magenta to-accent-lime" />

          <div className="space-y-6">
            {FLOW_STEPS.map((step, index) => {
              const colorStyles = {
                cyan: 'border-accent-cyan text-accent-cyan',
                magenta: 'border-accent-magenta text-accent-magenta',
                lime: 'border-accent-lime text-accent-lime',
              }

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={cn(
                      'relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center',
                      'bg-bg-primary',
                      colorStyles[step.color as keyof typeof colorStyles]
                    )}
                  >
                    <span className="font-heading font-bold text-sm">{index + 1}</span>
                  </div>
                  <span className="font-medium text-text-primary">{step.label}</span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-xl bg-surface/30 border border-text-muted/10 text-center"
        >
          <p className="text-lg text-text-primary">
            <span className="text-accent-cyan">Every step is AI-assisted</span> to reduce ambiguity,
            catch issues early, and keep the project moving forward efficiently.
          </p>
        </motion.div>
      </div>
    </SectionShell>
  )
}

