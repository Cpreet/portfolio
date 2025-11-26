'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

// ===== CUSTOMIZATION: Business goals for scope calculator =====
const BUSINESS_GOALS = [
  { id: 'automate', label: 'Automate manual processes', icon: '⚙️' },
  { id: 'customers', label: 'Serve customers better', icon: '👥' },
  { id: 'revenue', label: 'Generate new revenue', icon: '💰' },
  { id: 'data', label: 'Gain business insights', icon: '📊' },
  { id: 'scale', label: 'Scale operations', icon: '📈' },
  { id: 'compete', label: 'Stay competitive', icon: '🏆' },
]

// ===== CUSTOMIZATION: Solution recommendations =====
const SOLUTION_TYPES = {
  'Web App': { score: 85, description: 'Custom web application with user authentication and data management' },
  'Dashboard': { score: 78, description: 'Analytics and reporting interface for business intelligence' },
  'Client Portal': { score: 72, description: 'Self-service platform for customer interactions' },
  'E-Commerce': { score: 65, description: 'Online sales platform with payment processing' },
  'Automation System': { score: 60, description: 'Backend workflows and integrations' },
}

export function ScopeIntelligence() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    )
  }

  const handleAnalyze = () => {
    if (selectedGoals.length > 0) {
      setShowResults(true)
    }
  }

  const resetCalculator = () => {
    setSelectedGoals([])
    setShowResults(false)
  }

  // Calculate opportunity score based on selections
  const opportunityScore = Math.min(95, 60 + selectedGoals.length * 8)

  return (
    <SectionShell padding="lg">
      <SectionHeader
        title="Smart Scope, Smart Decisions"
        subtitle="AI-powered analysis determines if an app is right for your business — and what kind will deliver the most value"
        align="center"
      />

      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Step 1: Business Goals */}
              <div className="p-8 rounded-2xl bg-surface/30 border border-text-muted/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-accent-cyan/20 flex items-center justify-center text-accent-cyan font-heading font-bold text-sm">
                    1
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-text-primary">
                    What are your primary business goals?
                  </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {BUSINESS_GOALS.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => toggleGoal(goal.id)}
                      className={cn(
                        'p-4 rounded-xl text-left transition-all border',
                        selectedGoals.includes(goal.id)
                          ? 'bg-accent-cyan/10 border-accent-cyan text-text-primary'
                          : 'bg-surface/50 border-text-muted/10 text-text-secondary hover:border-accent-cyan/30'
                      )}
                    >
                      <span className="text-2xl">{goal.icon}</span>
                      <p className="mt-2 text-sm font-medium">{goal.label}</p>
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={handleAnalyze}
                    disabled={selectedGoals.length === 0}
                    size="lg"
                  >
                    Analyze Opportunity →
                  </Button>
                </div>

                {selectedGoals.length === 0 && (
                  <p className="mt-4 text-center text-sm text-text-muted">
                    Select at least one goal to see AI-powered recommendations
                  </p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Step 2: Recommended Strategy */}
              <div className="p-8 rounded-2xl bg-surface/30 border border-text-muted/10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-lime/20 flex items-center justify-center text-accent-lime font-heading font-bold text-sm">
                      2
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-text-primary">
                      Recommended App Strategy
                    </h3>
                  </div>
                  <button
                    onClick={resetCalculator}
                    className="text-sm text-text-muted hover:text-accent-cyan transition-colors"
                  >
                    ← Start Over
                  </button>
                </div>

                {/* Opportunity Score */}
                <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-accent-cyan/10 to-accent-magenta/10 border border-accent-cyan/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-muted">Opportunity Score</p>
                      <p className="mt-1 font-heading text-4xl font-bold text-accent-cyan">
                        {opportunityScore}
                        <span className="text-lg text-text-muted">/100</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-text-muted">AI Confidence</p>
                      <p className="mt-1 text-accent-lime font-medium">High</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-text-secondary">
                    Based on your goals, a custom software solution has strong potential to deliver significant business value.
                  </p>
                </div>

                {/* Solution Recommendations */}
                <h4 className="font-heading text-lg font-semibold text-text-primary mb-4">
                  Recommended Solution Types
                </h4>
                <div className="space-y-3">
                  {Object.entries(SOLUTION_TYPES).map(([type, data], index) => (
                    <motion.div
                      key={type}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-surface/50 border border-text-muted/10"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-text-primary">{type}</span>
                        <span className="text-sm font-heading font-bold text-accent-cyan">
                          {data.score}% match
                        </span>
                      </div>
                      <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${data.score}%` }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                          className="h-full bg-gradient-to-r from-accent-cyan to-accent-magenta"
                        />
                      </div>
                      <p className="mt-2 text-xs text-text-muted">{data.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <Button href="/contact" size="lg">
                    Get Detailed Scope Assessment
                  </Button>
                  <p className="mt-3 text-xs text-text-muted">
                    Free 30-minute consultation to explore your specific requirements
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionShell>
  )
}

