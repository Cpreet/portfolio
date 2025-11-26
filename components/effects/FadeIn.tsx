'use client'

import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/cn'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
  amount?: number | 'some' | 'all'
}

const directionOffsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 30 },
  down: { x: 0, y: -30 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
  none: { x: 0, y: 0 },
}

export function FadeIn({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3,
}: FadeInProps) {
  const offset = directionOffsets[direction]

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

// Staggered container for animating children in sequence
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={containerVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item
interface StaggerItemProps {
  children: React.ReactNode
  className?: string
  direction?: Direction
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
}: StaggerItemProps) {
  const offset = directionOffsets[direction]

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <motion.div variants={itemVariants} className={cn(className)}>
      {children}
    </motion.div>
  )
}

