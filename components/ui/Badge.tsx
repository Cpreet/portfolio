import { cn } from '@/lib/cn'

// ===== CUSTOMIZATION: Badge variants =====
const variants = {
  default: 'bg-surface text-text-secondary border-text-muted/20',
  cyan: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30',
  magenta: 'bg-accent-magenta/10 text-accent-magenta border-accent-magenta/30',
  lime: 'bg-accent-lime/10 text-accent-lime border-accent-lime/30',
}

interface BadgeProps {
  children: React.ReactNode
  variant?: keyof typeof variants
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border',
        'transition-colors duration-200',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

