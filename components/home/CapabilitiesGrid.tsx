'use client'

import { motion } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { StaggerContainer, StaggerItem } from '@/components/effects/FadeIn'
import { CAPABILITIES } from '@/lib/constants'
import { cn } from '@/lib/cn'

const accentColors = {
  cyan: {
    bg: 'bg-accent-cyan/10',
    border: 'border-accent-cyan/30',
    text: 'text-accent-cyan',
    glow: 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
  },
  magenta: {
    bg: 'bg-accent-magenta/10',
    border: 'border-accent-magenta/30',
    text: 'text-accent-magenta',
    glow: 'group-hover:shadow-[0_0_30px_rgba(255,0,170,0.15)]',
  },
  lime: {
    bg: 'bg-accent-lime/10',
    border: 'border-accent-lime/30',
    text: 'text-accent-lime',
    glow: 'group-hover:shadow-[0_0_30px_rgba(180,255,57,0.15)]',
  },
}

const icons = {
  code: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  zap: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  tool: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  palette: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  ),
  plug: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
}

export function CapabilitiesGrid() {
  return (
    <SectionShell padding="lg">
      <SectionHeader
        title="Capabilities"
        subtitle="Full-stack expertise, AI-accelerated"
        align="center"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CAPABILITIES.map((capability) => {
          const colors = accentColors[capability.accent as keyof typeof accentColors]
          
          return (
            <StaggerItem key={capability.title}>
              <motion.div
                whileHover={{ y: -4 }}
                className={cn(
                  'group h-full p-6 rounded-xl bg-surface/30 border border-text-muted/10',
                  'hover:border-opacity-100 transition-all duration-300',
                  colors.glow
                )}
                style={{ borderColor: 'inherit' }}
              >
                {/* Icon */}
                <div
                  className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center',
                    colors.bg,
                    colors.text
                  )}
                >
                  {icons[capability.icon as keyof typeof icons]}
                </div>

                {/* Content */}
                <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </SectionShell>
  )
}

