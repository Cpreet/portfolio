'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { cn } from '@/lib/cn'

// ===== Sample spec versions to demonstrate revision tracking =====
const SPEC_VERSIONS = [
  {
    version: 'v1.0',
    date: 'Day 1',
    status: 'superseded',
    changes: 'Initial requirements capture',
    sections: ['Project Overview', 'User Stories', 'Technical Stack'],
  },
  {
    version: 'v1.1',
    date: 'Day 2',
    status: 'superseded',
    changes: 'Added authentication requirements, refined data models',
    sections: ['Auth Flow', 'Database Schema', 'API Endpoints'],
  },
  {
    version: 'v2.0',
    date: 'Day 3',
    status: 'superseded',
    changes: 'Major revision: Added admin dashboard scope',
    sections: ['Admin Panel', 'Role Permissions', 'Audit Logging'],
  },
  {
    version: 'v2.1',
    date: 'Day 4',
    status: 'current',
    changes: 'Final refinements, client approved',
    sections: ['Deployment Plan', 'Testing Strategy', 'Launch Checklist'],
  },
]

export function SpecGeneration() {
  const [selectedVersion, setSelectedVersion] = useState('v2.1')
  const currentSpec = SPEC_VERSIONS.find((s) => s.version === selectedVersion)

  return (
    <SectionShell padding="lg">
      <SectionHeader
        title="Spec-Driven from Day One"
        subtitle="AI generates comprehensive specifications that evolve with your requirements — no surprises, ever"
        align="center"
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-surface/30 border border-text-muted/10">
              <h3 className="font-heading text-lg font-semibold text-text-primary flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </span>
                Requirements Discussion
              </h3>
              <p className="mt-3 text-sm text-text-muted">
                We start with a structured conversation about your goals, users, and constraints. 
                AI captures and organizes everything into actionable requirements.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface/30 border border-text-muted/10">
              <h3 className="font-heading text-lg font-semibold text-text-primary flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent-magenta/20 flex items-center justify-center text-accent-magenta">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                AI Creates Full Specs
              </h3>
              <p className="mt-3 text-sm text-text-muted">
                Functional specs, technical architecture, data models, API designs, and UI wireframes 
                — all generated and maintained automatically.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface/30 border border-text-muted/10">
              <h3 className="font-heading text-lg font-semibold text-text-primary flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-accent-lime/20 flex items-center justify-center text-accent-lime">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </span>
                Living Documentation
              </h3>
              <p className="mt-3 text-sm text-text-muted">
                Specs update automatically as scope evolves. Every change is tracked, versioned, 
                and visible — so you always know exactly what&apos;s being built.
              </p>
            </div>
          </motion.div>

          {/* Right: Revision Tracker UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-surface/30 border border-text-muted/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="font-heading font-semibold text-text-primary">
                Spec Revision Tracker
              </h4>
              <span className="px-2 py-1 rounded text-xs bg-accent-lime/20 text-accent-lime">
                Live Preview
              </span>
            </div>

            {/* Version timeline */}
            <div className="space-y-3 mb-6">
              {SPEC_VERSIONS.map((spec) => (
                <button
                  key={spec.version}
                  onClick={() => setSelectedVersion(spec.version)}
                  className={cn(
                    'w-full p-3 rounded-lg text-left transition-all border',
                    selectedVersion === spec.version
                      ? 'bg-accent-cyan/10 border-accent-cyan'
                      : 'bg-bg-secondary/50 border-transparent hover:border-text-muted/20'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          'font-mono text-sm font-bold',
                          spec.status === 'current'
                            ? 'text-accent-lime'
                            : 'text-text-muted'
                        )}
                      >
                        {spec.version}
                      </span>
                      <span className="text-xs text-text-muted">{spec.date}</span>
                    </div>
                    {spec.status === 'current' && (
                      <span className="px-2 py-0.5 rounded text-xs bg-accent-lime/20 text-accent-lime">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-text-muted truncate">
                    {spec.changes}
                  </p>
                </button>
              ))}
            </div>

            {/* Selected version details */}
            <AnimatePresence mode="wait">
              {currentSpec && (
                <motion.div
                  key={currentSpec.version}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg bg-bg-secondary/50"
                >
                  <h5 className="text-sm font-medium text-text-primary mb-3">
                    Sections in {currentSpec.version}:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {currentSpec.sections.map((section) => (
                      <span
                        key={section}
                        className="px-2 py-1 rounded text-xs bg-surface text-text-secondary"
                      >
                        {section}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-text-muted">
                    <strong>Changes:</strong> {currentSpec.changes}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Benefits */}
            <div className="mt-6 pt-6 border-t border-text-muted/10">
              <p className="text-xs text-text-muted">
                ✓ Full version history &nbsp; ✓ Change diffs &nbsp; ✓ Approval workflow
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  )
}

