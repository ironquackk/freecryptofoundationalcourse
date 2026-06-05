'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { cn } from '@/lib/utils'

interface TopicCardProps {
  id: string
  title: string
  icon?: React.ReactNode
  children: React.ReactNode
  variant?: 'default' | 'highlight' | 'warning' | 'success'
}

const variantStyles: Record<NonNullable<TopicCardProps['variant']>, { border: string; bg: string; accent: string }> = {
  default: {
    border: 'border-slate-200',
    bg: 'bg-white',
    accent: '',
  },
  highlight: {
    border: 'border-amber-200 border-l-4 border-l-amber-500',
    bg: 'bg-amber-50/50',
    accent: '',
  },
  warning: {
    border: 'border-red-200 border-l-4 border-l-red-500',
    bg: 'bg-red-50/50',
    accent: '',
  },
  success: {
    border: 'border-green-200 border-l-4 border-l-green-500',
    bg: 'bg-green-50/50',
    accent: '',
  },
}

export function TopicCard({
  id,
  title,
  icon,
  children,
  variant = 'default',
}: TopicCardProps) {
  const styles = variantStyles[variant]

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
      className={cn(
        'rounded-xl border shadow-sm',
        styles.border,
        styles.bg
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-100">
        {icon && (
          <span className="flex-shrink-0 text-amber-600 [&>svg]:h-5 [&>svg]:w-5">
            {icon}
          </span>
        )}
        <h3 className="text-base font-bold text-slate-900 sm:text-lg">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="px-4 py-4 sm:px-6 sm:py-5">
        {children}
      </div>
    </motion.div>
  )
}
