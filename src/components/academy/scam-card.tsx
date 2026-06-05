'use client'

import React from 'react'
import { AlertTriangle, ShieldCheck } from 'lucide-react'

interface ScamCardProps {
  title: string
  description: string
  prevention: string
  icon?: React.ReactNode
}

export function ScamCard({ title, description, prevention, icon }: ScamCardProps) {
  return (
    <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100/40 p-4 shadow-sm sm:p-5">
      {/* Title */}
      <div className="mb-3 flex items-center gap-2">
        <span className="flex-shrink-0 text-red-500">
          {icon ?? <AlertTriangle className="h-5 w-5" />}
        </span>
        <h4 className="text-base font-bold text-red-900 sm:text-lg">
          {title}
        </h4>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        {description}
      </p>

      {/* Prevention */}
      <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-3 sm:px-4 sm:py-3">
        <div className="flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600 sm:h-5 sm:w-5" />
          <div>
            <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-green-700">
              Prevention
            </p>
            <p className="text-sm font-medium text-green-800 sm:text-base">
              {prevention}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
