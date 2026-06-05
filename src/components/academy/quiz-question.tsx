'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface QuizQuestionProps {
  number: number
  question: string
  children?: React.ReactNode
}

export function QuizQuestion({ number, question, children }: QuizQuestionProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Question header */}
      <div
        className="flex items-start gap-3 px-4 py-4 sm:px-6 sm:py-5 cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setExpanded(!expanded)
          }
        }}
        aria-expanded={expanded}
      >
        <Badge
          variant="secondary"
          className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white"
        >
          {number}
        </Badge>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-slate-900 sm:text-base">
            {question}
          </p>
        </div>
        {children && (
          <ChevronDown
            className={cn(
              'mt-0.5 h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200',
              expanded && 'rotate-180'
            )}
          />
        )}
      </div>

      {/* Expandable content */}
      {children && expanded && (
        <div className="border-t border-slate-100 px-4 py-4 sm:px-6 sm:py-5">
          <div className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
