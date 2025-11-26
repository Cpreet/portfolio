'use client'

import { motion } from 'framer-motion'
import { SectionShell } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'

const GUARANTEES = [
  {
    icon: '📋',
    title: 'Specs First. No Surprises.',
    description: 'Every feature is documented and approved before development begins. You know exactly what you\'re getting.',
  },
  {
    icon: '🚪',
    title: 'Cancel Anytime.',
    description: 'No long-term contracts. Stop the project whenever you want and keep everything built so far.',
  },
  {
    icon: '💻',
    title: 'You Own Your Code from Day One.',
    description: 'Full repository access throughout the project. Your code is never held hostage.',
  },
  {
    icon: '🔄',
    title: 'Unlimited Revisions on Approved Scope.',
    description: 'Within each milestone, we iterate until you\'re satisfied. No nickel-and-diming on tweaks.',
  },
  {
    icon: '🔒',
    title: 'Transparent Pricing.',
    description: 'No hidden fees. Every cost is documented upfront in the spec. Budget surprises don\'t happen here.',
  },
  {
    icon: '⚡',
    title: 'Ship Weekly.',
    description: 'See real progress every week with deployed previews. No months of silence followed by surprise reveals.',
  },
]

export function TrustMarkers() {
  return (
    <SectionShell padding="lg">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
            Risk-Free Development
          </h2>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Built-in guarantees that protect your investment and ensure a successful partnership
          </p>
        </motion.div>

        {/* Guarantees grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GUARANTEES.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-surface/30 border border-text-muted/10 hover:border-accent-cyan/30 transition-colors"
            >
              <span className="text-3xl">{guarantee.icon}</span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary">
                {guarantee.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                {guarantee.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-accent-cyan/10 via-accent-magenta/10 to-accent-lime/10 border border-accent-cyan/20 text-center"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
            Ready to Start?
          </h3>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Get a free scope assessment to see if your project is a good fit for our AI-powered workflow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Start with a Free Scope Assessment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              See Case Studies with this Workflow
            </Button>
          </div>
          <p className="mt-6 text-sm text-text-muted">
            No commitment required · 30-minute consultation · Custom proposal within 48 hours
          </p>
        </motion.div>
      </div>
    </SectionShell>
  )
}

