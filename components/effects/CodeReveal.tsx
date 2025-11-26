'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'

interface CodeRevealProps {
  beforeCode: string
  afterCode: string
  language?: string
  className?: string
}

// ===== X-FACTOR: AI Refactor Code Reveal =====
// Shows before/after code transformation on hover
export function CodeReveal({
  beforeCode,
  afterCode,
  language = 'typescript',
  className,
}: CodeRevealProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        'relative rounded-xl overflow-hidden bg-bg-secondary border border-text-muted/10',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-text-muted/10 bg-surface/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs text-text-muted font-mono ml-2">
            {language}
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            'text-xs font-medium px-2 py-1 rounded',
            isHovered
              ? 'bg-accent-cyan/20 text-accent-cyan'
              : 'bg-text-muted/20 text-text-muted'
          )}
        >
          {isHovered ? '✨ AI Optimized' : 'Original'}
        </motion.div>
      </div>

      {/* Code Content */}
      <div className="relative p-4 font-mono text-sm">
        <AnimatePresence mode="wait">
          <motion.pre
            key={isHovered ? 'after' : 'before'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-text-secondary overflow-x-auto"
          >
            <code>
              {isHovered ? (
                <HighlightedCode code={afterCode} isOptimized />
              ) : (
                <HighlightedCode code={beforeCode} isOptimized={false} />
              )}
            </code>
          </motion.pre>
        </AnimatePresence>

        {/* Hover hint */}
        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: isHovered ? 0 : 0.6 }}
          className="absolute bottom-2 right-2 text-xs text-text-muted"
        >
          Hover to see AI optimization →
        </motion.div>
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.05) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}

// Simple syntax highlighting component
function HighlightedCode({
  code,
  isOptimized,
}: {
  code: string
  isOptimized: boolean
}) {
  // Basic syntax highlighting
  const highlighted = code
    // Keywords
    .replace(
      /\b(const|let|var|function|return|async|await|if|else|for|while|import|export|from|class|extends|new|this|typeof|interface|type)\b/g,
      `<span class="${isOptimized ? 'text-accent-cyan' : 'text-accent-magenta'}">$1</span>`
    )
    // Strings
    .replace(
      /(["'`])([^"'`]*)(["'`])/g,
      '<span class="text-accent-lime">$1$2$3</span>'
    )
    // Numbers
    .replace(/\b(\d+)\b/g, '<span class="text-accent-magenta">$1</span>')
    // Comments
    .replace(
      /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
      '<span class="text-text-muted italic">$1</span>'
    )

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />
}

// Example usage data
export const CODE_EXAMPLES = {
  dataFetching: {
    before: `// Traditional data fetching
async function fetchUsers() {
  const response = await fetch('/api/users');
  const data = await response.json();
  
  // Manual error handling
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  
  // Manual caching logic
  localStorage.setItem('users', JSON.stringify(data));
  
  return data;
}`,
    after: `// AI-optimized with React Query patterns
const useUsers = () => useQuery({
  queryKey: ['users'],
  queryFn: () => api.get('/users'),
  staleTime: 5 * 60 * 1000,
  retry: 3,
  // Auto caching, deduplication, and
  // background updates built-in
});`,
  },
  componentRefactor: {
    before: `// Complex conditional rendering
function UserCard({ user, isAdmin, canEdit }) {
  return (
    <div className="card">
      {user.avatar && (
        <img src={user.avatar} alt="" />
      )}
      <h3>{user.name}</h3>
      {isAdmin && <span>Admin</span>}
      {canEdit && (
        <button onClick={() => edit(user.id)}>
          Edit
        </button>
      )}
    </div>
  );
}`,
    after: `// AI-refactored with composition
function UserCard({ user, actions }) {
  return (
    <Card>
      <Avatar src={user.avatar} />
      <Card.Title>{user.name}</Card.Title>
      <Card.Actions>
        {actions}
      </Card.Actions>
    </Card>
  );
}

// Cleaner, more reusable, testable`,
  },
}

