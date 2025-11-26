'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { FadeIn } from '@/components/effects/FadeIn'

export function CTABand() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 via-accent-magenta/10 to-accent-cyan/10" />
      
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(ellipse at 0% 50%, rgba(0, 240, 255, 0.2) 0%, transparent 50%)',
            'radial-gradient(ellipse at 100% 50%, rgba(255, 0, 170, 0.2) 0%, transparent 50%)',
            'radial-gradient(ellipse at 0% 50%, rgba(0, 240, 255, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative section-container">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
              Ready to <GradientText>Build</GradientText>?
            </h2>
            
            <p className="mt-6 text-lg md:text-xl text-text-muted">
              Let&apos;s discuss your project and explore how AI-augmented development
              can accelerate your timeline and amplify your results.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
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
              <Button href="/services" variant="secondary" size="lg">
                View Services
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-text-muted/10">
              <p className="text-sm text-text-muted">
                Typically respond within 24 hours • No commitment required
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

