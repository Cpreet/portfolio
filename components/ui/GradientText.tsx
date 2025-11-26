'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

export function GradientText({
  children,
  className,
  animate = false,
  as: Component = 'span',
}: GradientTextProps) {
  const baseStyles = cn(
    'bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan via-accent-magenta to-accent-cyan',
    animate && 'bg-[length:200%_auto] animate-shimmer',
    className
  )

  if (animate) {
    return (
      <motion.span
        className={baseStyles}
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      >
        {children}
      </motion.span>
    )
  }

  return <Component className={baseStyles}>{children}</Component>
}

