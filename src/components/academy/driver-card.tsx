'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface DriverCardProps {
  number: number
  title: string
  children: React.ReactNode
}

export function DriverCard({ number, title, children }: DriverCardProps) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:gap-5 sm:p-5">
      {/* Number circle */}
      <div className="flex-shrink-0">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:text-xl">
          {number}
        </div>
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h4 className="mb-2 text-base font-bold text-slate-900 sm:text-lg">
          {title}
        </h4>
        <div className="text-sm leading-relaxed text-slate-600 sm:text-base">
          {children}
        </div>
      </div>
    </div>
  )
}
