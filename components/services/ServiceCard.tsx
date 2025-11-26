'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import type { ServicePackage } from '@/lib/services'
import { cn } from '@/lib/cn'

interface ServiceCardProps {
  service: ServicePackage
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        'relative h-full flex flex-col p-6 md:p-8 rounded-2xl',
        'bg-surface/30 border transition-all duration-300',
        service.popular
          ? 'border-accent-cyan/50 shadow-[0_0_30px_rgba(0,240,255,0.1)]'
          : 'border-text-muted/10 hover:border-accent-cyan/30'
      )}
    >
      {/* Popular badge */}
      {service.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="cyan">Most Popular</Badge>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="font-heading text-2xl font-bold text-text-primary">
          {service.name}
        </h3>
        <p className="mt-1 text-accent-cyan text-sm">{service.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-4xl font-bold text-text-primary">
            {service.price}
          </span>
        </div>
        <p className="mt-1 text-sm text-text-muted">
          {service.priceNote} · {service.duration}
        </p>
      </div>

      {/* Description */}
      <p className="text-text-muted leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features */}
      <div className="flex-1 mb-6">
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
          What&apos;s Included
        </h4>
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-text-muted"
            >
              <svg
                className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5"
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
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Outcomes */}
      <div className="mb-6 p-4 rounded-lg bg-bg-secondary/50">
        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">
          Outcomes
        </h4>
        <ul className="space-y-1">
          {service.outcomes.map((outcome) => (
            <li key={outcome} className="text-sm text-accent-lime">
              → {outcome}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Button
        href="/contact"
        variant={service.popular ? 'primary' : 'secondary'}
        className="w-full"
      >
        Get Started
      </Button>
    </motion.div>
  )
}

