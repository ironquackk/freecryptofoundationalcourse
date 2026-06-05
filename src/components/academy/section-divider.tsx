'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface SectionDividerProps {
  title: string
  icon?: React.ReactNode
}

export function SectionDivider({ title, icon }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' as const }}
      className="relative w-full"
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

      {/* Main background */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {icon && (
            <span className="flex-shrink-0 text-amber-400 [&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-6 sm:[&>svg]:w-6">
              {icon}
            </span>
          )}
          <h2 className="text-center text-lg font-bold uppercase tracking-wide text-white sm:text-xl md:text-2xl lg:text-3xl"
            style={{ textShadow: '0 0 20px rgba(251, 191, 36, 0.3)' }}
          >
            {title}
          </h2>
        </div>
      </div>

      {/* Bottom subtle line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
    </motion.div>
  )
}
