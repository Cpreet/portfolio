'use client'

import { motion } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { StaggerContainer, StaggerItem } from '@/components/effects/FadeIn'
import { AI_TOOLSTACK } from '@/lib/constants'
import { cn } from '@/lib/cn'

// Category colors for visual distinction
const categoryColors: Record<string, string> = {
  IDE: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30',
  'AI Assistant': 'bg-accent-magenta/10 text-accent-magenta border-accent-magenta/30',
  'Code Assistant': 'bg-accent-lime/10 text-accent-lime border-accent-lime/30',
  Automation: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30',
  'UI Generation': 'bg-accent-magenta/10 text-accent-magenta border-accent-magenta/30',
}

export function ToolstackGrid() {
  return (
    <SectionShell padding="lg">
      <SectionHeader
        title="My AI Toolstack"
        subtitle="The tools powering AI-augmented development"
        align="center"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AI_TOOLSTACK.map((tool) => (
          <StaggerItem key={tool.name}>
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className={cn(
                'h-full p-6 rounded-xl bg-surface/30 border border-text-muted/10',
                'hover:border-accent-cyan/30 transition-all duration-300',
                'hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]'
              )}
            >
              {/* Tool header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {tool.name}
                  </h3>
                  <span
                    className={cn(
                      'inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium border',
                      categoryColors[tool.category] || 'bg-surface text-text-muted border-text-muted/20'
                    )}
                  >
                    {tool.category}
                  </span>
                </div>

                {/* Tool icon placeholder */}
                <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-text-muted">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-text-muted leading-relaxed">
                {tool.description}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Additional note */}
      <div className="mt-12 text-center">
        <p className="text-text-muted text-sm">
          Plus custom scripts and workflows built specifically for each project.
        </p>
      </div>
    </SectionShell>
  )
}

