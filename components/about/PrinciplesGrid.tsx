'use client'

import { motion } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { StaggerContainer, StaggerItem } from '@/components/effects/FadeIn'
import { PRINCIPLES } from '@/lib/constants'
import { cn } from '@/lib/cn'

const icons = {
  rocket: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  refresh: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  flask: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
}

const accentColors = ['cyan', 'magenta', 'lime', 'cyan'] as const

export function PrinciplesGrid() {
  return (
    <SectionShell background="secondary" padding="lg">
      <SectionHeader
        title="How I Work"
        subtitle="The principles that guide every project"
        align="center"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PRINCIPLES.map((principle, index) => {
          const accent = accentColors[index]
          return (
            <StaggerItem key={principle.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className={cn(
                  'h-full p-8 rounded-2xl bg-surface/30 border border-text-muted/10',
                  'hover:border-accent-cyan/30 transition-all duration-300'
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'w-14 h-14 rounded-xl flex items-center justify-center',
                    accent === 'cyan' && 'bg-accent-cyan/10 text-accent-cyan',
                    accent === 'magenta' && 'bg-accent-magenta/10 text-accent-magenta',
                    accent === 'lime' && 'bg-accent-lime/10 text-accent-lime'
                  )}
                >
                  {icons[principle.icon as keyof typeof icons]}
                </div>

                {/* Content */}
                <h3 className="mt-6 font-heading text-2xl font-bold text-text-primary">
                  {principle.title}
                </h3>
                <p className="mt-3 text-text-muted leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </SectionShell>
  )
}

