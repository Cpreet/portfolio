'use client'

import { motion } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/cn'

// ===== CUSTOMIZATION: Sample milestone features =====
const MILESTONE_FEATURES = [
  {
    id: 'auth',
    name: 'User Authentication',
    status: 'completed',
    estimate: '$1,200',
    description: 'Sign up, login, password reset, OAuth providers',
    deliverables: ['Auth API', 'Login UI', 'Session management'],
  },
  {
    id: 'dashboard',
    name: 'Main Dashboard',
    status: 'completed',
    estimate: '$2,400',
    description: 'Core dashboard with widgets and data visualization',
    deliverables: ['Dashboard layout', 'Widget system', 'Charts'],
  },
  {
    id: 'crud',
    name: 'Data Management',
    status: 'in_progress',
    estimate: '$1,800',
    description: 'CRUD operations for core entities',
    deliverables: ['Data tables', 'Forms', 'Validation'],
  },
  {
    id: 'api',
    name: 'API Integrations',
    status: 'pending',
    estimate: '$2,000',
    description: 'Third-party service connections',
    deliverables: ['API clients', 'Webhooks', 'Error handling'],
  },
  {
    id: 'admin',
    name: 'Admin Panel',
    status: 'pending',
    estimate: '$1,600',
    description: 'Administrative controls and user management',
    deliverables: ['User admin', 'Settings', 'Audit logs'],
  },
]

const statusColors = {
  completed: { bg: 'bg-accent-lime/20', text: 'text-accent-lime', label: 'Completed' },
  in_progress: { bg: 'bg-accent-cyan/20', text: 'text-accent-cyan', label: 'In Progress' },
  pending: { bg: 'bg-text-muted/20', text: 'text-text-muted', label: 'Pending' },
}

export function PayAsYouGo() {
  const completedTotal = MILESTONE_FEATURES
    .filter((f) => f.status === 'completed')
    .reduce((sum, f) => sum + parseInt(f.estimate.replace(/[^0-9]/g, '')), 0)

  return (
    <SectionShell padding="lg" background="secondary">
      <SectionHeader
        title="Pay for What You Approve"
        subtitle="Transparent weekly/milestone billing with no big upfront payments — stop anytime and keep everything built"
        align="center"
      />

      <div className="max-w-5xl mx-auto">
        {/* Key benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: '💰',
              title: 'No Big Upfront',
              description: 'Pay in small, manageable increments tied to actual deliverables',
            },
            {
              icon: '✋',
              title: 'Stop Anytime',
              description: 'Cancel without penalty — you keep everything built so far',
            },
            {
              icon: '✅',
              title: 'Approve First',
              description: 'Review and approve each milestone before payment is due',
            },
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-surface/50 border border-text-muted/10 text-center"
            >
              <span className="text-3xl">{benefit.icon}</span>
              <h3 className="mt-4 font-heading font-semibold text-text-primary">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Modular feature list UI */}
        <div className="p-6 rounded-2xl bg-surface/30 border border-text-muted/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                Milestone Feature Cards
              </h3>
              <p className="text-sm text-text-muted">
                Each feature is a purchasable, deliverable unit
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-text-muted">Completed Value</p>
              <p className="font-heading text-xl font-bold text-accent-lime">
                ${completedTotal.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Feature cards */}
          <div className="space-y-4">
            {MILESTONE_FEATURES.map((feature, index) => {
              const status = statusColors[feature.status as keyof typeof statusColors]
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    'p-4 rounded-xl border transition-all',
                    feature.status === 'completed'
                      ? 'bg-accent-lime/5 border-accent-lime/30'
                      : feature.status === 'in_progress'
                      ? 'bg-accent-cyan/5 border-accent-cyan/30'
                      : 'bg-surface/50 border-text-muted/10'
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h4 className="font-heading font-semibold text-text-primary">
                          {feature.name}
                        </h4>
                        <span
                          className={cn(
                            'px-2 py-0.5 rounded text-xs font-medium',
                            status.bg,
                            status.text
                          )}
                        >
                          {status.label}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-text-muted">
                        {feature.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {feature.deliverables.map((d) => (
                          <span
                            key={d}
                            className="px-2 py-1 rounded text-xs bg-bg-secondary text-text-secondary"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-heading text-lg font-bold text-text-primary">
                        {feature.estimate}
                      </p>
                      {feature.status === 'completed' && (
                        <p className="text-xs text-accent-lime mt-1">✓ Paid</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Summary */}
          <div className="mt-6 pt-6 border-t border-text-muted/10 flex items-center justify-between">
            <div className="text-sm text-text-muted">
              <strong className="text-text-primary">5 milestones</strong> · 2 completed · 1 in progress · 2 pending
            </div>
            <div className="text-right">
              <p className="text-xs text-text-muted">Project Total Estimate</p>
              <p className="font-heading text-lg font-bold text-text-primary">$9,000</p>
            </div>
          </div>
        </div>

        {/* Guarantee callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-xl bg-gradient-to-r from-accent-cyan/10 to-accent-magenta/10 border border-accent-cyan/20 text-center"
        >
          <p className="text-lg font-medium text-text-primary">
            &ldquo;You own your code from day one. Stop anytime, keep everything.&rdquo;
          </p>
          <p className="mt-2 text-sm text-text-muted">
            No lock-in, no hostage code. Full repository access throughout the project.
          </p>
        </motion.div>
      </div>
    </SectionShell>
  )
}

