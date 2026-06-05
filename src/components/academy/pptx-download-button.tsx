'use client'

import { useState } from 'react'
import { Download, Presentation, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

interface DayDownloadStatus {
  day: number
  title: string
  subtitle: string
  available: boolean
}

const days: DayDownloadStatus[] = [
  { day: 1, title: 'Crypto Foundations', subtitle: 'Understanding the World You\'re About to Trade In', available: true },
  { day: 2, title: 'Technical Analysis', subtitle: 'Support/Resistance, Trends & Moving Averages', available: true },
  { day: 3, title: 'Price Action & Indicators', subtitle: 'RSI, MACD, Volume & Bollinger Bands', available: true },
  { day: 4, title: 'Risk Management', subtitle: 'Position Sizing, Stop Losses & Capital Protection', available: true },
  { day: 5, title: 'Spot Trading', subtitle: 'Your First Real Trades on the Market', available: true },
  { day: 6, title: 'Futures & Leverage', subtitle: 'Understanding the Dangerous Tool You Must Respect', available: true },
  { day: 7, title: 'DeFi & Advanced', subtitle: 'Decentralized Finance & Protocol Analysis', available: true },
  { day: 8, title: 'Trading Psychology', subtitle: 'Mastering Your Mind — The Hidden 80%', available: true },
  { day: 9, title: 'Building a Strategy', subtitle: 'Creating Your Personal Trading System', available: true },
  { day: 10, title: 'Final Challenge', subtitle: 'Putting It All Together — Your Trading Plan', available: true },
]

export function PptxDownloadButton() {
  const [downloadingDay, setDownloadingDay] = useState<number | null>(null)
  const [downloadResult, setDownloadResult] = useState<{ day: number; success: boolean } | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = async (day: number) => {
    setDownloadingDay(day)
    setDownloadResult(null)

    try {
      const response = await fetch(`/api/generate-pptx?day=${day}`)

      if (!response.ok) {
        throw new Error('Download failed')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `Crypto_Academy_Day_${day}.pptx`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)

      setDownloadResult({ day, success: true })
    } catch {
      setDownloadResult({ day, success: false })
    } finally {
      setDownloadingDay(null)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200"
        >
          <Presentation className="h-4 w-4" />
          <span className="hidden sm:inline">Download Slides</span>
          <span className="sm:hidden">PPTX</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto bg-slate-900 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-amber-400 flex items-center gap-2">
            <Presentation className="h-5 w-5" />
            Download Presentation Slides
          </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-slate-400 -mt-2">
          Select a day to download as a PowerPoint presentation file.
        </p>

        <div className="space-y-2 mt-2">
          {days.map((d) => (
            <motion.div
              key={d.day}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: d.day * 0.03 }}
              className={`rounded-lg border p-3 transition-all duration-200 ${
                d.available
                  ? 'border-slate-700 bg-slate-800/60 hover:border-amber-500/40 hover:bg-slate-800'
                  : 'border-slate-800 bg-slate-800/30 opacity-50'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-amber-400">{d.day}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">
                      {d.title}
                    </p>
                    <p className="text-xs text-slate-400 truncate">
                      {d.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  {downloadingDay === d.day ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 text-amber-400 animate-spin" />
                      <span className="text-xs text-amber-400">Generating...</span>
                    </div>
                  ) : downloadResult?.day === d.day && downloadResult.success ? (
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-green-500">Done</span>
                    </div>
                  ) : downloadResult?.day === d.day && !downloadResult.success ? (
                    <div className="flex items-center gap-1">
                      <XCircle className="h-4 w-4 text-red-500" />
                      <span className="text-xs text-red-500">Failed</span>
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 gap-1.5 text-amber-400 hover:text-amber-300 hover:bg-amber-500/10"
                      onClick={() => handleDownload(d.day)}
                      disabled={!d.available || downloadingDay !== null}
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span className="text-xs">PPTX</span>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-slate-700">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-slate-800 text-slate-400 border-slate-700">
              10 Days Available
            </Badge>
            <Button
              size="sm"
              className="gap-2 bg-amber-600 hover:bg-amber-500 text-white"
              onClick={() => {
                // Download all available days sequentially
                const availableDays = days.filter(d => d.available)
                availableDays.forEach((d, i) => {
                  setTimeout(() => handleDownload(d.day), i * 2000)
                })
              }}
              disabled={downloadingDay !== null}
            >
              <Download className="h-3.5 w-3.5" />
              Download All
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
