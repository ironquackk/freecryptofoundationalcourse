'use client'

import React from 'react'
import { Lightbulb } from 'lucide-react'

interface KeyTakeawayProps {
  children: React.ReactNode
}

export function KeyTakeaway({ children }: KeyTakeawayProps) {
  return (
    <div className="w-full rounded-lg border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-50 to-amber-100/50 px-4 py-4 sm:px-6 sm:py-5">
      <div className="flex items-start gap-3">
        <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
        <div className="min-w-0">
          <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            Key Takeaway
          </p>
          <div className="text-sm font-semibold text-slate-800 sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
