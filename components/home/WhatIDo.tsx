'use client'

import { motion } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { StaggerContainer, StaggerItem } from '@/components/effects/FadeIn'
import { WHAT_I_DO } from '@/lib/constants'

const icons = {
  app: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  ),
  strategy: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
  tools: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
}

export function WhatIDo() {
  return (
    <SectionShell background="secondary" padding="lg">
      <SectionHeader
        title="What I Build"
        subtitle="Full-stack capabilities to take your product from concept to launch"
        align="center"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {WHAT_I_DO.map((item, index) => (
          <StaggerItem key={item.title}>
            <motion.div
              whileHover={{ y: -4 }}
              className="group p-8 rounded-2xl bg-surface/30 border border-text-muted/10 hover:border-accent-cyan/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                {icons[item.icon as keyof typeof icons]}
              </div>

              {/* Content */}
              <h3 className="mt-6 font-heading text-xl font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionShell>
  )
}

