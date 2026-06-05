'use client'

import React from 'react'
import { Lightbulb } from 'lucide-react'

interface AnalogyBoxProps {
  title: string
  children: React.ReactNode
}

export function AnalogyBox({ title, children }: AnalogyBoxProps) {
  return (
    <div className="w-full rounded-lg border-l-4 border-l-teal-500 bg-teal-50/60 px-4 py-4 sm:px-6 sm:py-5">
      <div className="flex items-start gap-3">
        <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
        <div className="min-w-0">
          <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
            💡 Analogy
          </p>
          <p className="mb-2 text-sm font-semibold text-slate-800 sm:text-base">
            {title}
          </p>
          <div className="text-sm italic text-slate-600 sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
