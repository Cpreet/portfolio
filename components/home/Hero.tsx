'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { NeuralBackground } from '@/components/effects/NeuralBackground'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural Background - X-Factor Element */}
      <div className="absolute inset-0">
        <NeuralBackground className="opacity-60" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-transparent to-bg-primary" />
      </div>

      {/* Content */}
      <div className="relative section-container py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 border border-accent-cyan/20 text-sm text-text-secondary backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              Available for new projects
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight"
          >
            <GradientText animate>AI-Augmented</GradientText>
            <br />
            Development.
            <br />
            <span className="text-text-primary">Shipped.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto"
          >
            I build high-impact, modern web products by combining senior-level
            engineering with AI tooling to ship faster, smarter, and more
            experimentally.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-8 text-center"
          >
            <Stat value="3x" label="Faster Delivery" />
            <Stat value="4wk" label="MVP Timeline" />
            <Stat value="50+" label="Projects Shipped" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button href="/contact" size="lg">
              Start a Project
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              See Work
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-heading text-2xl md:text-3xl font-bold text-accent-cyan">
        {value}
      </div>
      <div className="text-sm text-text-muted">{label}</div>
    </div>
  )
}

