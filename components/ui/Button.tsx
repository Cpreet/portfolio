'use client'

import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/cn'

// ===== CUSTOMIZATION: Button variants =====
const variants = {
  primary: 'bg-accent-cyan text-bg-primary hover:bg-accent-cyan/90 glow-cyan',
  secondary: 'bg-surface border border-text-muted/20 text-text-primary hover:bg-surface-hover hover:border-accent-cyan/50',
  ghost: 'bg-transparent text-text-primary hover:bg-surface hover:text-accent-cyan',
  outline: 'bg-transparent border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  children: React.ReactNode
  href?: string
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className, href, ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-lg',
      'transition-all duration-300 ease-out-expo',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
      'disabled:opacity-50 disabled:pointer-events-none',
      variants[variant],
      sizes[size],
      className
    )

    // If href is provided, render as anchor
    if (href) {
      return (
        <motion.a
          href={href}
          className={baseStyles}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={baseStyles}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export { Button, type ButtonProps }

