'use client'

import React, { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface ChecklistItemProps {
  children: React.ReactNode
  checked?: boolean
}

export function ChecklistItem({ children, checked: controlledChecked }: ChecklistItemProps) {
  const [internalChecked, setInternalChecked] = useState(controlledChecked ?? false)
  const isChecked = controlledChecked ?? internalChecked

  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-slate-50">
      <Checkbox
        checked={isChecked}
        onCheckedChange={(val) => setInternalChecked(val === true)}
        className="mt-0.5"
      />
      <span
        className={cn(
          'text-sm leading-relaxed transition-colors sm:text-base',
          isChecked
            ? 'text-slate-400 line-through'
            : 'text-slate-700'
        )}
      >
        {children}
      </span>
    </label>
  )
}
