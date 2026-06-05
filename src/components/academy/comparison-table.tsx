'use client'

import React, { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'

interface ComparisonTableProps {
  headers: string[]
  rows: ReactNode[][]
  highlightColumn?: number
}

export function ComparisonTable({
  headers,
  rows,
  highlightColumn,
}: ComparisonTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-200">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="bg-slate-800 hover:bg-slate-800 border-slate-700">
            {headers.map((header, i) => (
              <TableHead
                key={i}
                className={cn(
                  'text-white font-semibold px-4 py-3',
                  i === highlightColumn && 'bg-amber-700/40'
                )}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIdx) => (
            <TableRow
              key={rowIdx}
              className={cn(
                'border-slate-200',
                rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50',
                'hover:bg-slate-100'
              )}
            >
              {row.map((cell, cellIdx) => (
                <TableCell
                  key={cellIdx}
                  className={cn(
                    'px-4 py-3 text-sm',
                    cellIdx === highlightColumn && 'bg-amber-50 font-medium'
                  )}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
