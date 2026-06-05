'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface Step {
  number: number
  title: string
  description: string
}

interface StepListProps {
  steps: Step[]
}

export function StepList({ steps }: StepListProps) {
  return (
    <div className="relative flex flex-col">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1
        return (
          <div key={step.number} className="relative flex gap-4 sm:gap-5">
            {/* Timeline line + dot */}
            <div className="relative flex flex-col items-center">
              {/* Dot/circle */}
              <div className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 border-amber-500 bg-white text-sm font-bold text-amber-600 sm:h-10 sm:w-10 sm:text-base">
                {step.number}
              </div>

              {/* Connecting line */}
              {!isLast && (
                <div className="absolute top-9 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-amber-300 sm:top-10" />
              )}
            </div>

            {/* Content */}
            <div className={cn('min-w-0 flex-1 pb-8', isLast && 'pb-0')}>
              <h4 className="mb-1 text-sm font-bold text-slate-900 sm:text-base">
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
