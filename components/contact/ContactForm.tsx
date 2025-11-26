'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

// Form step configuration
const STEPS = [
  {
    id: 'basics',
    title: 'Let\'s start with the basics',
    fields: ['name', 'email'],
  },
  {
    id: 'project',
    title: 'Tell me about your project',
    fields: ['projectType', 'budget'],
  },
  {
    id: 'details',
    title: 'A few more details',
    fields: ['timeline', 'description'],
  },
] as const

// Project type options
const PROJECT_TYPES = [
  { value: 'mvp', label: 'MVP Development', description: 'New product from scratch' },
  { value: 'redesign', label: 'Redesign/Rebuild', description: 'Improve existing product' },
  { value: 'feature', label: 'Feature Development', description: 'Add to existing product' },
  { value: 'consulting', label: 'Consulting/Advisory', description: 'Technical guidance' },
  { value: 'other', label: 'Something Else', description: 'Let\'s discuss' },
]

// Budget ranges
const BUDGET_RANGES = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: 'over-50k', label: '$50,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
]

// Timeline options
const TIMELINES = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-month', label: 'Within 1 month' },
  { value: '1-3-months', label: '1-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: 'flexible', label: 'Flexible' },
]

interface FormData {
  name: string
  email: string
  projectType: string
  budget: string
  timeline: string
  description: string
}

export function ContactForm() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
  })

  const step = STEPS[currentStep]
  const isLastStep = currentStep === STEPS.length - 1
  const progress = ((currentStep + 1) / STEPS.length) * 100

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return formData.name.trim() && formData.email.trim() && formData.email.includes('@')
      case 1:
        return formData.projectType && formData.budget
      case 2:
        return formData.timeline && formData.description.trim()
      default:
        return false
    }
  }

  const handleNext = () => {
    if (canProceed() && !isLastStep) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = async () => {
    if (!canProceed()) return

    setIsSubmitting(true)

    // Simulate form submission
    // ===== CUSTOMIZATION: Replace with actual form handling =====
    // Options: Formspree, Netlify Forms, custom API route, etc.
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-accent-lime/20 flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-accent-lime"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-text-primary">
          Message Sent!
        </h3>
        <p className="mt-4 text-text-muted max-w-md mx-auto">
          Thanks for reaching out, {formData.name.split(' ')[0]}. I&apos;ll review your
          project details and get back to you within 24-48 hours.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-text-muted mb-2">
          <span>Step {currentStep + 1} of {STEPS.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1 bg-surface rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-cyan to-accent-magenta"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Step content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="font-heading text-2xl font-bold text-text-primary mb-8">
            {step.title}
          </h2>

          {currentStep === 0 && (
            <div className="space-y-6">
              <FormField
                label="What's your name?"
                value={formData.name}
                onChange={(v) => updateField('name', v)}
                placeholder="Jane Smith"
                autoFocus
              />
              <FormField
                label="What's your email?"
                type="email"
                value={formData.email}
                onChange={(v) => updateField('email', v)}
                placeholder="jane@company.com"
              />
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-4">
                  What type of project is this?
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {PROJECT_TYPES.map((type) => (
                    <SelectOption
                      key={type.value}
                      selected={formData.projectType === type.value}
                      onClick={() => updateField('projectType', type.value)}
                    >
                      <span className="font-medium">{type.label}</span>
                      <span className="text-text-muted text-sm ml-2">
                        — {type.description}
                      </span>
                    </SelectOption>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-4">
                  What&apos;s your budget range?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {BUDGET_RANGES.map((range) => (
                    <SelectOption
                      key={range.value}
                      selected={formData.budget === range.value}
                      onClick={() => updateField('budget', range.value)}
                    >
                      {range.label}
                    </SelectOption>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-4">
                  When do you need this completed?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {TIMELINES.map((timeline) => (
                    <SelectOption
                      key={timeline.value}
                      selected={formData.timeline === timeline.value}
                      onClick={() => updateField('timeline', timeline.value)}
                    >
                      {timeline.label}
                    </SelectOption>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Tell me about your project
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  placeholder="What are you building? What problem does it solve? Any specific requirements or constraints?"
                  rows={5}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg bg-surface border border-text-muted/20',
                    'text-text-primary placeholder:text-text-muted',
                    'focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent',
                    'resize-none transition-all'
                  )}
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-8 pt-6 border-t border-text-muted/10">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 0}
          className={cn(currentStep === 0 && 'invisible')}
        >
          ← Back
        </Button>

        {isLastStep ? (
          <Button onClick={handleSubmit} disabled={!canProceed() || isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="animate-spin">⟳</span> Sending...
              </>
            ) : (
              'Send Inquiry →'
            )}
          </Button>
        ) : (
          <Button onClick={handleNext} disabled={!canProceed()}>
            Continue →
          </Button>
        )}
      </div>
    </div>
  )
}

// Form field component
function FormField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  autoFocus,
}: {
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  autoFocus?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-text-secondary mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={cn(
          'w-full px-4 py-3 rounded-lg bg-surface border border-text-muted/20',
          'text-text-primary placeholder:text-text-muted',
          'focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent',
          'transition-all'
        )}
      />
    </div>
  )
}

// Select option component
function SelectOption({
  children,
  selected,
  onClick,
}: {
  children: React.ReactNode
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'px-4 py-3 rounded-lg text-left transition-all',
        'border',
        selected
          ? 'bg-accent-cyan/10 border-accent-cyan text-text-primary'
          : 'bg-surface border-text-muted/20 text-text-secondary hover:border-accent-cyan/50 hover:bg-surface-hover'
      )}
    >
      {children}
    </button>
  )
}

