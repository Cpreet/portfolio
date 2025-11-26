'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { FAQ_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/cn'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <SectionShell padding="lg">
      <SectionHeader
        title="Common Questions"
        subtitle="Everything you need to know before we start"
        align="center"
      />

      <div className="max-w-3xl mx-auto">
        {FAQ_ITEMS.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            index={index}
          />
        ))}
      </div>
    </SectionShell>
  )
}

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        'border-b border-text-muted/10',
        'first:border-t'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'font-heading text-lg font-medium transition-colors',
            isOpen ? 'text-accent-cyan' : 'text-text-primary group-hover:text-accent-cyan'
          )}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full',
            'border transition-colors',
            isOpen
              ? 'border-accent-cyan text-accent-cyan'
              : 'border-text-muted/30 text-text-muted group-hover:border-accent-cyan/50 group-hover:text-accent-cyan'
          )}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-text-muted leading-relaxed pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

