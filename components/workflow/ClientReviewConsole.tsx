'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionShell, SectionHeader } from '@/components/layout/SectionShell'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

// ===== Sample review items for dashboard mockup =====
const REVIEW_ITEMS = [
  {
    id: '1',
    title: 'Dashboard Layout v2.1',
    status: 'approved',
    timestamp: '2 hours ago',
    preview: 'Updated widget grid with drag-and-drop support',
    comments: 2,
  },
  {
    id: '2',
    title: 'User Profile Page',
    status: 'reviewing',
    timestamp: '4 hours ago',
    preview: 'Profile edit form with avatar upload',
    comments: 3,
  },
  {
    id: '3',
    title: 'Settings API Integration',
    status: 'revised',
    timestamp: '1 day ago',
    preview: 'Connected preferences to backend storage',
    comments: 5,
  },
]

const FEEDBACK_THREAD = [
  {
    id: '1',
    author: 'Client',
    content: 'The button color doesn\'t match our brand guidelines. Can we use #FF6B00 instead?',
    timestamp: '10:30 AM',
    type: 'comment',
  },
  {
    id: '2',
    author: 'AI Assistant',
    content: 'Suggested revision: Change primary button background from #00f0ff to #FF6B00. This will affect 23 button instances across the application. Would you like me to draft this change?',
    timestamp: '10:31 AM',
    type: 'ai_suggestion',
  },
  {
    id: '3',
    author: 'Developer',
    content: 'Good catch! I\'ve updated the theme configuration. The change is now live in the preview. Please review.',
    timestamp: '10:45 AM',
    type: 'response',
  },
  {
    id: '4',
    author: 'Client',
    content: 'Perfect, that looks great! Approved.',
    timestamp: '11:00 AM',
    type: 'approval',
  },
]

const statusStyles = {
  approved: { bg: 'bg-accent-lime/20', text: 'text-accent-lime', icon: '✓' },
  reviewing: { bg: 'bg-accent-cyan/20', text: 'text-accent-cyan', icon: '👁' },
  revised: { bg: 'bg-accent-magenta/20', text: 'text-accent-magenta', icon: '↻' },
}

export function ClientReviewConsole() {
  const [selectedItem, setSelectedItem] = useState(REVIEW_ITEMS[1])
  const [showThread, setShowThread] = useState(false)

  return (
    <SectionShell padding="lg">
      <SectionHeader
        title="Review in Real-Time with AI Assistance"
        subtitle="Your private dashboard for reviewing deployments, providing feedback, and approving changes"
        align="center"
      />

      <div className="max-w-6xl mx-auto">
        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-text-muted/20 overflow-hidden bg-bg-secondary"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-text-muted/10">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 mx-4">
              <div className="max-w-md mx-auto px-4 py-1.5 rounded-lg bg-bg-secondary text-xs text-text-muted text-center">
                review.charanpreet.me/project/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
            {/* Sidebar - Review items */}
            <div className="border-r border-text-muted/10 p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-heading font-semibold text-text-primary text-sm">
                  Pending Reviews
                </h4>
                <span className="px-2 py-0.5 rounded text-xs bg-accent-cyan/20 text-accent-cyan">
                  {REVIEW_ITEMS.filter((i) => i.status === 'reviewing').length} new
                </span>
              </div>

              <div className="space-y-2">
                {REVIEW_ITEMS.map((item) => {
                  const status = statusStyles[item.status as keyof typeof statusStyles]
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className={cn(
                        'w-full p-3 rounded-lg text-left transition-all border',
                        selectedItem.id === item.id
                          ? 'bg-accent-cyan/10 border-accent-cyan'
                          : 'bg-surface/50 border-transparent hover:border-text-muted/20'
                      )}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-text-primary truncate">
                          {item.title}
                        </span>
                        <span className={cn('px-1.5 py-0.5 rounded text-xs', status.bg, status.text)}>
                          {status.icon}
                        </span>
                      </div>
                      <p className="text-xs text-text-muted truncate">{item.preview}</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-text-muted">
                        <span>{item.timestamp}</span>
                        <span>·</span>
                        <span>{item.comments} comments</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Main content - Preview panel */}
            <div className="lg:col-span-2 p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm text-text-muted">{selectedItem.preview}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowThread(!showThread)}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-sm transition-colors',
                      showThread
                        ? 'bg-accent-cyan/20 text-accent-cyan'
                        : 'bg-surface text-text-secondary hover:text-text-primary'
                    )}
                  >
                    💬 Comments
                  </button>
                </div>
              </div>

              {/* Preview area */}
              <AnimatePresence mode="wait">
                {!showThread ? (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="aspect-video rounded-xl bg-gradient-to-br from-accent-cyan/10 via-accent-magenta/5 to-bg-primary border border-text-muted/10 flex items-center justify-center"
                  >
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto text-text-muted/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="mt-4 text-sm text-text-muted">Live preview renders here</p>
                      <p className="mt-1 text-xs text-text-muted/60">Click anywhere to add inline feedback</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="comments"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-[300px] overflow-y-auto rounded-xl bg-surface/50 border border-text-muted/10 p-4"
                  >
                    <div className="space-y-4">
                      {FEEDBACK_THREAD.map((msg) => (
                        <div
                          key={msg.id}
                          className={cn(
                            'p-3 rounded-lg',
                            msg.type === 'ai_suggestion'
                              ? 'bg-accent-cyan/10 border border-accent-cyan/30'
                              : msg.type === 'approval'
                              ? 'bg-accent-lime/10 border border-accent-lime/30'
                              : 'bg-bg-secondary'
                          )}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className={cn(
                              'text-xs font-medium',
                              msg.type === 'ai_suggestion' ? 'text-accent-cyan' : 'text-text-secondary'
                            )}>
                              {msg.author}
                            </span>
                            <span className="text-xs text-text-muted">{msg.timestamp}</span>
                            {msg.type === 'ai_suggestion' && (
                              <span className="px-1.5 py-0.5 rounded text-xs bg-accent-cyan/20 text-accent-cyan">
                                AI Suggestion
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-text-primary">{msg.content}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action buttons */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-lg bg-accent-lime text-bg-primary text-sm font-medium hover:bg-accent-lime/90 transition-colors">
                    ✓ Approve
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-surface text-text-secondary text-sm font-medium hover:text-text-primary transition-colors">
                    Request Changes
                  </button>
                </div>
                <span className="text-xs text-text-muted">
                  Deployed 2 hours ago · Build #47
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features list */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Live Deployments',
              description: 'Every change is deployed to a preview URL you can test immediately',
              icon: '🚀',
            },
            {
              title: 'AI-Powered Feedback',
              description: 'Our AI suggests specific fixes and rewrites based on your comments',
              icon: '🤖',
            },
            {
              title: 'One-Click Actions',
              description: 'Approve, reject, or request changes with a single click',
              icon: '👆',
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-surface/30 border border-text-muted/10"
            >
              <span className="text-2xl">{feature.icon}</span>
              <h4 className="mt-3 font-heading font-semibold text-text-primary">
                {feature.title}
              </h4>
              <p className="mt-2 text-sm text-text-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}

