'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import Day1Hero from '@/components/academy/day1-hero'
import Day2Hero from '@/components/academy/day2-hero'
import Day3Hero from '@/components/academy/day3-hero'
import Day4Hero from '@/components/academy/day4-hero'
import Day5Hero from '@/components/academy/day5-hero'
import Day6Hero from '@/components/academy/day6-hero'
import Day7Hero from '@/components/academy/day7-hero'
import Day8Hero from '@/components/academy/day8-hero'
import Day9Hero from '@/components/academy/day9-hero'
import Day10Hero from '@/components/academy/day10-hero'
import { Sidebar } from '@/components/academy/sidebar'
import { MorningBlock } from '@/components/academy/day1/morning-block'
import { LateMorningBlock } from '@/components/academy/day1/late-morning-block'
import { AfternoonBlock } from '@/components/academy/day1/afternoon-block'
import { LateAfternoonBlock } from '@/components/academy/day1/late-afternoon-block'
import { FinalBlock } from '@/components/academy/day1/final-block'
import { Day2MorningBlock } from '@/components/academy/day2/morning-block'
import { Day2LateMorningBlock } from '@/components/academy/day2/late-morning-block'
import { Day2MiddayBlock } from '@/components/academy/day2/midday-block'
import { Day2AfternoonBlock } from '@/components/academy/day2/afternoon-block'
import { Day2LateAfternoonBlock } from '@/components/academy/day2/late-afternoon-block'
import { Day2FinalBlock } from '@/components/academy/day2/final-block'
import { Day3MorningBlock } from '@/components/academy/day3/morning-block'
import { Day3MiddayBlock } from '@/components/academy/day3/midday-block'
import { Day3AfternoonBlock } from '@/components/academy/day3/afternoon-block'
import { Day3LateAfternoonBlock } from '@/components/academy/day3/late-afternoon-block'
import { Day3LateMorningBlock } from '@/components/academy/day3/late-morning-block'
import { Day3FinalBlock } from '@/components/academy/day3/final-block'
import { Day4MorningBlock } from '@/components/academy/day4/morning-block'
import { Day4LateMorningBlock } from '@/components/academy/day4/late-morning-block'
import { Day4AfternoonBlock } from '@/components/academy/day4/afternoon-block'
import { Day4LateAfternoonBlock } from '@/components/academy/day4/late-afternoon-block'
import { Day4FinalBlock } from '@/components/academy/day4/final-block'
import { Day5MorningBlock } from '@/components/academy/day5/morning-block'
import { Day5LateMorningBlock } from '@/components/academy/day5/late-morning-block'
import { Day5AfternoonBlock } from '@/components/academy/day5/afternoon-block'
import { Day5LateAfternoonBlock } from '@/components/academy/day5/late-afternoon-block'
import { Day5FinalBlock } from '@/components/academy/day5/final-block'
import { Day6MorningBlock } from '@/components/academy/day6/morning-block'
import { Day6LateMorningBlock } from '@/components/academy/day6/late-morning-block'
import { Day6AfternoonBlock } from '@/components/academy/day6/afternoon-block'
import { Day6LateAfternoonBlock } from '@/components/academy/day6/late-afternoon-block'
import { Day6FinalBlock } from '@/components/academy/day6/final-block'
import { Day7MorningBlock } from '@/components/academy/day7/morning-block'
import { Day7LateMorningBlock } from '@/components/academy/day7/late-morning-block'
import { Day7AfternoonBlock } from '@/components/academy/day7/afternoon-block'
import { Day7LateAfternoonBlock } from '@/components/academy/day7/late-afternoon-block'
import { Day7FinalBlock } from '@/components/academy/day7/final-block'
import { Day8MorningBlock } from '@/components/academy/day8/morning-block'
import { Day8LateMorningBlock } from '@/components/academy/day8/late-morning-block'
import { Day8AfternoonBlock } from '@/components/academy/day8/afternoon-block'
import { Day8LateAfternoonBlock } from '@/components/academy/day8/late-afternoon-block'
import { Day8FinalBlock } from '@/components/academy/day8/final-block'
import { Day9MorningBlock } from '@/components/academy/day9/morning-block'
import { Day9LateMorningBlock } from '@/components/academy/day9/late-morning-block'
import { Day9AfternoonBlock } from '@/components/academy/day9/afternoon-block'
import { Day9LateAfternoonBlock } from '@/components/academy/day9/late-afternoon-block'
import { Day9FinalBlock } from '@/components/academy/day9/final-block'
import { Day10MorningBlock } from '@/components/academy/day10/morning-block'
import { Day10LateMorningBlock } from '@/components/academy/day10/late-morning-block'
import { Day10AfternoonBlock } from '@/components/academy/day10/afternoon-block'
import { Day10LateAfternoonBlock } from '@/components/academy/day10/late-afternoon-block'
import { Day10FinalBlock } from '@/components/academy/day10/final-block'
import { PdfDownloadButton } from '@/components/academy/pdf-download-button'

export function AcademyApp() {
  const searchParams = useSearchParams()
  const printMode = searchParams.get('print') === '1'
  const urlDay = parseInt(searchParams.get('day') || '0', 10)
  const [activeDay, setActiveDay] = useState(urlDay >= 1 && urlDay <= 10 ? urlDay : 1)
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window === 'undefined') return true
    try {
      const cached = localStorage.getItem('crypto-academy-sidebar-open')
      return cached !== null ? cached === 'true' : true
    } catch { return true }
  })

  // Listen for sidebar toggle events from the Sidebar component
  useEffect(() => {
    const handleSidebarToggle = () => {
      try {
        const cached = localStorage.getItem('crypto-academy-sidebar-open')
        if (cached !== null) setSidebarOpen(cached === 'true')
      } catch { /* noop */ }
    }

    window.addEventListener('sidebar-toggle', handleSidebarToggle)
    return () => window.removeEventListener('sidebar-toggle', handleSidebarToggle)
  }, [])

  const handleDayChange = (day: number) => {
    setActiveDay(day)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSectionClick = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const getDayLabel = (day: number) => {
    switch (day) {
      case 1:
        return 'Day 1: Crypto Foundations'
      case 2:
        return 'Day 2: Technical Analysis & SMC'
      case 3:
        return 'Day 3: Price Action & Technical Indicators'
      case 4:
        return 'Day 4: Risk Management'
      case 5:
        return 'Day 5: Spot Trading'
      case 6:
        return 'Day 6: On-Chain & Sentiment Analysis'
      case 7:
        return 'Day 7: Advanced Signal Generation & Backtesting'
      case 8:
        return 'Day 8: Trading Psychology & Journaling'
      case 9:
        return 'Day 9: Building a Complete Trading Plan'
      case 10:
        return 'Day 10: Final Integration & 90-Day Roadmap'
      default:
        return `Day ${day}`
    }
  }

  const dayLabel = getDayLabel(activeDay)

  const renderHero = () => {
    switch (activeDay) {
      case 2:
        return <Day2Hero />
      case 3:
        return <Day3Hero />
      case 4:
        return <Day4Hero />
      case 5:
        return <Day5Hero />
      case 6:
        return <Day6Hero />
      case 7:
        return <Day7Hero />
      case 8:
        return <Day8Hero />
      case 9:
        return <Day9Hero />
      case 10:
        return <Day10Hero />
      default:
        return <Day1Hero />
    }
  }

  const renderContent = () => {
    switch (activeDay) {
      case 1:
        return (
          <main id="day-1-content" className="flex-1">
            <MorningBlock />
            <LateMorningBlock />
            <AfternoonBlock />
            <LateAfternoonBlock />
            <FinalBlock />
          </main>
        )
      case 2:
        return (
          <main id="day-2-content" className="flex-1">
            <Day2MorningBlock />
            <Day2LateMorningBlock />
            <Day2MiddayBlock />
            <Day2AfternoonBlock />
            <Day2LateAfternoonBlock />
            <Day2FinalBlock />
          </main>
        )
      case 3:
        return (
          <main id="day-3-content" className="flex-1">
            <Day3MorningBlock />
            <Day3LateMorningBlock />
            <Day3MiddayBlock />
            <Day3AfternoonBlock />
            <Day3LateAfternoonBlock />
            <Day3FinalBlock />
          </main>
        )
      case 4:
        return (
          <main id="day-4-content" className="flex-1">
            <Day4MorningBlock />
            <Day4LateMorningBlock />
            <Day4AfternoonBlock />
            <Day4LateAfternoonBlock />
            <Day4FinalBlock />
          </main>
        )
      case 5:
        return (
          <main id="day-5-content" className="flex-1">
            <Day5MorningBlock />
            <Day5LateMorningBlock />
            <Day5AfternoonBlock />
            <Day5LateAfternoonBlock />
            <Day5FinalBlock />
          </main>
        )
      case 6:
        return (
          <main id="day-6-content" className="flex-1">
            <Day6MorningBlock />
            <Day6LateMorningBlock />
            <Day6AfternoonBlock />
            <Day6LateAfternoonBlock />
            <Day6FinalBlock />
          </main>
        )
      case 7:
        return (
          <main id="day-7-content" className="flex-1">
            <Day7MorningBlock />
            <Day7LateMorningBlock />
            <Day7AfternoonBlock />
            <Day7LateAfternoonBlock />
            <Day7FinalBlock />
          </main>
        )
      case 8:
        return (
          <main id="day-8-content" className="flex-1">
            <Day8MorningBlock />
            <Day8LateMorningBlock />
            <Day8AfternoonBlock />
            <Day8LateAfternoonBlock />
            <Day8FinalBlock />
          </main>
        )
      case 9:
        return (
          <main id="day-9-content" className="flex-1">
            <Day9MorningBlock />
            <Day9LateMorningBlock />
            <Day9AfternoonBlock />
            <Day9LateAfternoonBlock />
            <Day9FinalBlock />
          </main>
        )
      case 10:
        return (
          <main id="day-10-content" className="flex-1">
            <Day10MorningBlock />
            <Day10LateMorningBlock />
            <Day10AfternoonBlock />
            <Day10LateAfternoonBlock />
            <Day10FinalBlock />
          </main>
        )
      default:
        return (
          <main id="day-1-content" className="flex-1">
            <MorningBlock />
            <LateMorningBlock />
            <AfternoonBlock />
            <LateAfternoonBlock />
            <FinalBlock />
          </main>
        )
    }
  }

  // Signal to Playwright that content is ready for PDF capture
  useEffect(() => {
    if (printMode) {
      const timer = setTimeout(() => {
        const mainEl = document.querySelector('main')
        if (mainEl) {
          mainEl.setAttribute('data-pdf-ready', 'true')
        }
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [printMode, activeDay])

  // Print mode: no sidebar, no navigation
  if (printMode) {
    return (
      <div className="min-h-screen bg-white pdf-generating">
        {renderHero()}
        {renderContent()}
      </div>
    )
  }

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Left Sidebar */}
      <Sidebar
        activeDay={activeDay}
        onDayChange={handleDayChange}
        onSectionClick={handleSectionClick}
      />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${sidebarOpen ? 'lg:ml-72' : 'lg:ml-0'}`}>
        {/* Top Bar with Day Title + PDF Button */}
        <header className="sticky top-0 z-30 bg-slate-900 border-b border-slate-700/50 px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Left: hamburger space + Day label */}
            <div className="flex items-center gap-3">
              {/* Spacer for mobile hamburger */}
              <div className="w-10 lg:hidden" />
              <img
                src="/logo.svg"
                alt="CFA Logo"
                className="h-7 w-7 rounded hidden sm:block"
              />
              <div>
                <h1 className="text-sm font-bold text-white sm:text-base">
                  {dayLabel}
                </h1>
                <p className="text-[10px] text-slate-400">
                  Crypto Foundations Academy
                </p>
              </div>
            </div>

            {/* Right: PDF Download */}
            <PdfDownloadButton activeDay={activeDay} dayLabel={dayLabel} />
          </div>
        </header>

        {/* Hero + Content */}
        <div className="flex-1 flex flex-col">
          {renderHero()}
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="mt-auto border-t border-slate-200 bg-slate-900 py-6 text-center text-slate-400">
          <div className="mx-auto max-w-4xl px-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <img src="/logo.svg" alt="CFA" className="h-6 w-6 rounded" />
              <p className="text-sm font-semibold text-white">
                Crypto Foundations Academy
              </p>
            </div>
            <p className="text-xs">
              10-Day Crypto Trading Bootcamp — {dayLabel}
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Educational content only. Not financial advice. Always DYOR.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
