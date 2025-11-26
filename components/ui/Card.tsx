'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/cn'

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: 'cyan' | 'magenta' | 'lime' | 'none'
}

export function Card({
  children,
  className,
  hover = true,
  glow = 'none',
  ...props
}: CardProps) {
  const glowStyles = {
    cyan: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]',
    magenta: 'hover:shadow-[0_0_30px_rgba(255,0,170,0.15)]',
    lime: 'hover:shadow-[0_0_30px_rgba(180,255,57,0.15)]',
    none: '',
  }

  return (
    <motion.div
      className={cn(
        'bg-surface/50 backdrop-blur-sm rounded-xl border border-text-muted/10',
        'transition-all duration-300',
        hover && 'hover:-translate-y-1 hover:border-accent-cyan/30',
        glowStyles[glow],
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Card subcomponents for structured content
export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('p-6 pb-0', className)}>
      {children}
    </div>
  )
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('p-6 pt-0', className)}>
      {children}
    </div>
  )
}

