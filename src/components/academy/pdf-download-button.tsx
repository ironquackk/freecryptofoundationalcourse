'use client'

import React, { useState, useCallback, useRef } from 'react'
import { Download, FileText, Loader2, CheckCircle2, AlertCircle, Printer, Sparkles } from 'lucide-react'

interface PdfDownloadButtonProps {
  activeDay: number
  dayLabel: string
}

type DownloadState = 'idle' | 'preparing' | 'generating' | 'success' | 'error'

export function PdfDownloadButton({ activeDay, dayLabel }: PdfDownloadButtonProps) {
  const [state, setState] = useState<DownloadState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [progress, setProgress] = useState(0)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handlePrintMode = useCallback(() => {
    setShowDropdown(false)

    // Add pdf-generating class for print-optimized layout
    document.documentElement.classList.add('pdf-generating')

    // Small delay to let CSS apply
    setTimeout(() => {
      window.print()

      // Remove the class after print dialog closes
      setTimeout(() => {
        document.documentElement.classList.remove('pdf-generating')
      }, 1000)
    }, 500)
  }, [])

  const handleQuickMode = useCallback(async () => {
    setShowDropdown(false)
    setState('preparing')
    setProgress(10)
    setErrorMessage('')

    try {
      // Dynamically import html2pdf.js (client-side only)
      const html2pdf = (await import('html2pdf.js')).default

      setState('generating')
      setProgress(30)

      // Add pdf-generating class to clean up the layout
      document.documentElement.classList.add('pdf-generating')

      // Find the content container
      const contentEl = document.querySelector(`[id="day-${activeDay}-content"]`) as HTMLElement

      if (!contentEl) {
        throw new Error('Could not find content to export')
      }

      setProgress(40)

      // Create a comprehensive wrapper for the PDF
      const wrapper = document.createElement('div')
      wrapper.style.cssText = 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif; padding: 0; margin: 0; background: white;'

      // Add a professional header for the PDF
      const header = document.createElement('div')
      header.style.cssText = 'background: linear-gradient(135deg, #1c1917 0%, #292524 100%); color: white; padding: 32px 28px; margin-bottom: 20px; border-radius: 0 0 12px 12px;'
      header.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 48px; height: 48px; background: #f59e0b; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 20px; font-weight: 900; color: #1c1917;">${activeDay}</span>
          </div>
          <div>
            <h1 style="font-size: 22px; font-weight: 800; margin: 0; color: #fbbf24;">Day ${activeDay}</h1>
            <p style="font-size: 14px; margin: 2px 0 0 0; color: #e7e5e4;">${dayLabel}</p>
          </div>
        </div>
        <p style="font-size: 10px; margin: 0; color: #94a3b8; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;">
          Crypto Foundations Academy — 10-Day Crypto Trading Bootcamp — Complete Curriculum
        </p>
      `
      wrapper.appendChild(header)

      // Clone the content
      const contentClone = contentEl.cloneNode(true) as HTMLElement
      contentClone.style.cssText = 'padding: 0 8px;'
      wrapper.appendChild(contentClone)

      // Add a footer note
      const footer = document.createElement('div')
      footer.style.cssText = 'margin-top: 32px; padding: 16px; border-top: 2px solid #f59e0b; text-align: center; color: #64748b; font-size: 9px;'
      footer.innerHTML = `
        <p style="margin: 0 0 4px 0; font-weight: 600; color: #475569;">Crypto Foundations Academy</p>
        <p style="margin: 0;">Educational content only. Not financial advice. Always DYOR.</p>
      `
      wrapper.appendChild(footer)

      setProgress(50)

      // Configure html2pdf for high quality
      const options = {
        margin: [10, 8, 14, 8], // top, right, bottom, left (mm)
        filename: `crypto-academy-day-${activeDay}.pdf`,
        image: {
          type: 'jpeg',
          quality: 0.98,
        },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          letterRendering: true,
          width: 1200,
          windowWidth: 1200,
          // Ensure SVGs are rendered properly
          onclone: (clonedDoc: Document) => {
            // Force all SVGs to be visible and properly sized
            const svgs = clonedDoc.querySelectorAll('svg')
            svgs.forEach((svg) => {
              svg.style.overflow = 'visible'
              const viewBox = svg.getAttribute('viewBox')
              if (viewBox) {
                // Keep viewBox but ensure width is set
                if (!svg.getAttribute('width') || svg.getAttribute('width') === '100%') {
                  svg.setAttribute('width', '800')
                }
              }
            })

            // Remove Framer Motion inline styles that hide content
            const motionEls = clonedDoc.querySelectorAll('[style*="opacity"]')
            motionEls.forEach((el) => {
              const htmlEl = el as HTMLElement
              const opacity = htmlEl.style.opacity
              if (opacity && parseFloat(opacity) < 1) {
                htmlEl.style.opacity = '1'
              }
              if (htmlEl.style.transform && htmlEl.style.transform !== 'none') {
                htmlEl.style.transform = 'none'
              }
            })

            // Expand all overflow containers
            const overflowEls = clonedDoc.querySelectorAll('.overflow-x-auto, .overflow-y-auto, .overflow-hidden')
            overflowEls.forEach((el) => {
              ;(el as HTMLElement).style.overflow = 'visible'
              ;(el as HTMLElement).style.maxHeight = 'none'
            })

            return clonedDoc
          },
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait' as const,
        },
        pagebreak: {
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break-before',
          after: '.page-break-after',
          avoid: [
            '.rounded-xl',
            '[id^="d"]',
            'table',
            'svg',
            '.border-l-4',
            '.comparison-table',
            '.key-takeaway',
          ],
        },
      }

      setProgress(60)

      // Generate the PDF
      await html2pdf().set(options as any).from(wrapper).save()

      setProgress(100)

      // Clean up
      document.documentElement.classList.remove('pdf-generating')

      setState('success')
      setTimeout(() => {
        setState('idle')
        setProgress(0)
      }, 3000)
    } catch (error: any) {
      console.error('PDF generation error:', error)
      document.documentElement.classList.remove('pdf-generating')
      setErrorMessage(error.message || 'Failed to generate PDF')
      setState('error')
      setTimeout(() => {
        setState('idle')
        setProgress(0)
      }, 5000)
    }
  }, [activeDay, dayLabel])

  const getButtonContent = () => {
    switch (state) {
      case 'preparing':
        return (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Preparing...</span>
            {progress > 0 && <span className="text-[10px] opacity-70">{progress}%</span>}
          </>
        )
      case 'generating':
        return (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Generating... {progress}%</span>
          </>
        )
      case 'success':
        return (
          <>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400">Done!</span>
          </>
        )
      case 'error':
        return (
          <>
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-red-400">Error</span>
          </>
        )
      default:
        return (
          <>
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">PDF</span>
          </>
        )
    }
  }

  return (
    <div className="relative pdf-download-btn" ref={dropdownRef}>
      {/* Main button */}
      <button
        onClick={() => {
          if (state === 'idle') {
            setShowDropdown(!showDropdown)
          }
        }}
        disabled={state === 'preparing' || state === 'generating'}
        className={`
          flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
          transition-all duration-200 border
          ${state === 'idle'
            ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20 hover:border-amber-500/50'
            : state === 'success'
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
            : state === 'error'
            ? 'bg-red-500/10 border-red-500/30 text-red-400'
            : 'bg-amber-500/10 border-amber-500/30 text-amber-400 cursor-wait'
          }
        `}
        title="Download Day's Curriculum as PDF"
      >
        {getButtonContent()}
      </button>

      {/* Dropdown menu */}
      {showDropdown && state === 'idle' && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowDropdown(false)}
          />

          {/* Menu */}
          <div className="absolute right-0 top-full mt-2 w-80 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-700 bg-slate-900/50">
              <p className="text-sm font-semibold text-white flex items-center gap-2">
                <Download className="w-4 h-4 text-amber-400" />
                Export as PDF
              </p>
              <p className="text-xs text-slate-400 mt-0.5">Day {activeDay}: {dayLabel}</p>
            </div>

            {/* Quick Download option */}
            <button
              onClick={handleQuickMode}
              className="w-full text-left px-4 py-3.5 hover:bg-slate-700/50 transition-colors flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-4.5 h-4.5 text-amber-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Quick Download
                  <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold uppercase">
                    One Click
                  </span>
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Instant download with high-DPI output. All charts, diagrams and SVGs preserved.
                </p>
              </div>
            </button>

            {/* Print option */}
            <button
              onClick={handlePrintMode}
              className="w-full text-left px-4 py-3.5 hover:bg-slate-700/50 transition-colors flex items-start gap-3 border-t border-slate-700/50"
            >
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Printer className="w-4.5 h-4.5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  Print / Save as PDF
                  <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase">
                    Best Quality
                  </span>
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Use browser print dialog. Select &quot;Save as PDF&quot; for vector-quality output with selectable text.
                </p>
              </div>
            </button>

            {/* Info footer */}
            <div className="px-4 py-2.5 bg-slate-900/30 border-t border-slate-700/50">
              <p className="text-[10px] text-slate-500 text-center">
                Both options capture the complete, unabridged curriculum for offline learning.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Error message */}
      {state === 'error' && errorMessage && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-red-900/90 border border-red-700 rounded-lg px-3 py-2.5 text-xs text-red-200 z-50">
          <p className="font-semibold mb-1">PDF Generation Error</p>
          <p>{errorMessage}</p>
          <p className="mt-1.5 text-red-300">Try the &quot;Print / Save as PDF&quot; option instead.</p>
        </div>
      )}
    </div>
  )
}
