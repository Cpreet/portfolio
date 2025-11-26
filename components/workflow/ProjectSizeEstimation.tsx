'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

// ===== CUSTOMIZATION: Project size tiers =====
const PROJECT_SIZES = [
  {
    id: 'small',
    name: 'Quick Build MVP',
    duration: '1-3 weeks',
    timeline: 'Fast validation',
    team: 'Solo developer',
    complexity: 'Low-Medium',
    investment: '$4,000 - $8,000',
    description: 'Perfect for validating ideas quickly. Core functionality, clean UI, ready to ship.',
    features: [
      'Up to 3 core features',
      'Basic authentication',
      'Responsive design',
      'Production deployment',
    ],
    bestFor: 'Startups testing hypotheses, MVPs for fundraising, internal tools',
    accent: 'cyan',
  },
  {
    id: 'medium',
    name: 'Scalable Product',
    duration: '1-2 months',
    timeline: 'Full product build',
    team: 'Lead + specialist',
    complexity: 'Medium-High',
    investment: '$12,000 - $30,000',
    description: 'A complete, production-ready product with room to grow. Built for scale from day one.',
    features: [
      '5-10 features',
      'Advanced authentication',
      'Admin dashboard',
      'API integrations',
      'Analytics built-in',
    ],
    bestFor: 'Funded startups, established businesses launching new products',
    accent: 'magenta',
    popular: true,
  },
  {
    id: 'large',
    name: 'Enterprise Platform',
    duration: '2-4+ months',
    timeline: 'Phased rollout',
    team: 'Full project team',
    complexity: 'High',
    investment: '$40,000+',
    description: 'Multi-system platforms with complex integrations, multiple user roles, and enterprise requirements.',
    features: [
      '10+ features',
      'Multi-tenant architecture',
      'Complex workflows',
      'Third-party integrations',
      'Compliance ready',
      'Dedicated support',
    ],
    bestFor: 'Enterprises, platforms with multiple user types, mission-critical systems',
    accent: 'lime',
  },
]

export function ProjectSizeEstimation() {
  const [selectedSize, setSelectedSize] = useState<string>('medium')

  return (
    <SectionShell padding="lg" background="secondary">
      <SectionHeader
        title="Project Size Estimation"
        subtitle="Transparent scoping with clear timelines, team composition, and investment ranges"
        align="center"
      />

      <div className="max-w-6xl mx-auto">
        {/* Size selector tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-surface border border-text-muted/10">
            {PROJECT_SIZES.map((size) => (
              <button
                key={size.id}
                onClick={() => setSelectedSize(size.id)}
                className={cn(
                  'px-6 py-3 rounded-lg font-medium text-sm transition-all',
                  selectedSize === size.id
                    ? 'bg-accent-cyan text-bg-primary'
                    : 'text-text-muted hover:text-text-primary'
                )}
              >
                {size.name}
              </button>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECT_SIZES.map((size, index) => {
            const isSelected = selectedSize === size.id
            const accentColor = {
              cyan: 'border-accent-cyan/50 shadow-[0_0_30px_rgba(0,240,255,0.1)]',
              magenta: 'border-accent-magenta/50 shadow-[0_0_30px_rgba(255,0,170,0.1)]',
              lime: 'border-accent-lime/50 shadow-[0_0_30px_rgba(180,255,57,0.1)]',
            }

            return (
              <motion.div
                key={size.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedSize(size.id)}
                className={cn(
                  'relative cursor-pointer p-6 rounded-2xl border transition-all duration-300',
                  isSelected
                    ? `bg-surface/50 ${accentColor[size.accent as keyof typeof accentColor]}`
                    : 'bg-surface/30 border-text-muted/10 hover:border-text-muted/30'
                )}
              >
                {/* Popular badge */}
                {size.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-accent-magenta text-bg-primary text-xs font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="font-heading text-xl font-bold text-text-primary">
                    {size.name}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{size.description}</p>
                </div>

                {/* Investment */}
                <div className="text-center mb-6 pb-6 border-b border-text-muted/10">
                  <p className="text-sm text-text-muted">Investment Range</p>
                  <p className={cn(
                    'mt-1 font-heading text-2xl font-bold',
                    size.accent === 'cyan' && 'text-accent-cyan',
                    size.accent === 'magenta' && 'text-accent-magenta',
                    size.accent === 'lime' && 'text-accent-lime',
                  )}>
                    {size.investment}
                  </p>
                </div>

                {/* Specs grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-bg-secondary/50">
                    <p className="text-xs text-text-muted">Timeline</p>
                    <p className="mt-1 font-medium text-text-primary text-sm">{size.duration}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-bg-secondary/50">
                    <p className="text-xs text-text-muted">Team</p>
                    <p className="mt-1 font-medium text-text-primary text-sm">{size.team}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-bg-secondary/50 col-span-2">
                    <p className="text-xs text-text-muted">Complexity</p>
                    <p className="mt-1 font-medium text-text-primary text-sm">{size.complexity}</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {size.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                      <svg className="w-4 h-4 text-accent-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Best for */}
                <div className="p-3 rounded-lg bg-bg-secondary/50">
                  <p className="text-xs text-text-muted">Best for:</p>
                  <p className="mt-1 text-sm text-text-secondary">{size.bestFor}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button href="/contact" size="lg">
            Get Custom Estimate
          </Button>
          <p className="mt-4 text-sm text-text-muted">
            Every project is unique. Let&apos;s discuss your specific requirements for an accurate scope.
          </p>
        </div>
      </div>
    </SectionShell>
  )
}

