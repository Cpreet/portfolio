'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface SectionShellProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  background?: 'transparent' | 'secondary' | 'gradient'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

const paddingStyles = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
  xl: 'py-24 md:py-40',
}

const backgroundStyles = {
  transparent: '',
  secondary: 'bg-bg-secondary/50',
  gradient: 'bg-gradient-to-b from-bg-primary via-bg-secondary/30 to-bg-primary',
}

export function SectionShell({
  children,
  className,
  containerClassName,
  id,
  background = 'transparent',
  padding = 'md',
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(paddingStyles[padding], backgroundStyles[background], className)}
    >
      <div className={cn('section-container', containerClassName)}>
        {children}
      </div>
    </section>
  )
}

// Section header component for consistent styling
interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

