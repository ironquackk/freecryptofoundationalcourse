'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  ClipboardList,
  Target,
  XCircle,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'

/* ─────────────────────────────────────────────────────────── */
/*  SVG: 12-Component Trading Plan Overview (Circular)        */
/* ─────────────────────────────────────────────────────────── */
function TradingPlanOverviewSvg() {
  const components = [
    { label: 'Mission & Goals', short: '1', color: '#10b981' },
    { label: 'Market Selection', short: '2', color: '#059669' },
    { label: 'Timeframe Selection', short: '3', color: '#047857' },
    { label: 'Trading Strategies', short: '4', color: '#065f46' },
    { label: 'Entry Rules', short: '5', color: '#10b981' },
    { label: 'Exit Rules', short: '6', color: '#059669' },
    { label: 'Risk Mgmt Rules', short: '7', color: '#047857' },
    { label: 'Position Sizing', short: '8', color: '#065f46' },
    { label: 'Daily Routine', short: '9', color: '#10b981' },
    { label: 'Journaling', short: '10', color: '#059669' },
    { label: 'Psychology Rules', short: '11', color: '#047857' },
    { label: 'Benchmarks', short: '12', color: '#065f46' },
  ]

  // Arrange in a circle
  const cx = 250
  const cy = 250
  const r = 190

  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 500 500"
        className="mx-auto w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="12-Component Trading Plan overview showing all components arranged in a circle"
      >
        {/* Central hub */}
        <circle cx={cx} cy={cy} r="55" fill="#059669" opacity="0.15" stroke="#10b981" strokeWidth="2" />
        <text x={cx} y={cy - 8} textAnchor="middle" fill="#059669" fontSize="11" fontWeight="bold">TRADING</text>
        <text x={cx} y={cy + 8} textAnchor="middle" fill="#059669" fontSize="11" fontWeight="bold">PLAN</text>

        {/* Connecting lines */}
        {components.map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180)
          const x2 = cx + r * Math.cos(angle)
          const y2 = cy + r * Math.sin(angle)
          return (
            <line
              key={`line-${i}`}
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke="#d1d5db"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          )
        })}

        {/* Component nodes */}
        {components.map((comp, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180)
          const x = cx + r * Math.cos(angle)
          const y = cy + r * Math.sin(angle)

          // Label positioning
          const labelR = r + 40
          const lx = cx + labelR * Math.cos(angle)
          const ly = cy + labelR * Math.sin(angle)
          const anchor = Math.abs(Math.cos(angle)) < 0.1 ? 'middle' : Math.cos(angle) > 0 ? 'start' : 'end'

          return (
            <g key={comp.short}>
              <circle cx={x} cy={y} r="22" fill="white" stroke={comp.color} strokeWidth="2" />
              <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="middle" fill={comp.color} fontSize="11" fontWeight="bold">{comp.short}</text>
              <text x={lx} y={ly + 1} textAnchor={anchor} dominantBaseline="middle" fill="#334155" fontSize="9" fontWeight="600">{comp.label}</text>
            </g>
          )
        })}

        {/* Legend */}
        <rect x="10" y="465" width="10" height="10" rx="2" fill="#10b981" />
        <text x="24" y="474" fill="#475569" fontSize="8">Components 1-4: Foundation</text>
        <rect x="160" y="465" width="10" height="10" rx="2" fill="#059669" />
        <text x="174" y="474" fill="#475569" fontSize="8">Components 5-8: Execution</text>
        <rect x="320" y="465" width="10" height="10" rx="2" fill="#047857" />
        <text x="334" y="474" fill="#475569" fontSize="8">Components 9-12: Operations</text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        The 12 components of a complete trading plan — every piece connects to the center
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day9MorningBlock() {
  return (
    <section id="d9-morning" aria-labelledby="d9-morning-heading">
      <SectionDivider
        icon={<Sun />}
        title="MORNING BLOCK — 8:00-9:30: THE TRADING PLAN FRAMEWORK — MODULE 1"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 1: What Is a Trading Plan                      */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-what-is-plan"
          title="What Is a Trading Plan (And Why You Need One)"
          icon={<ClipboardList className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A <strong className="text-slate-900">trading plan</strong> is a comprehensive written document that defines <em>exactly</em> how you will approach the market — from what you trade, to when you enter, to how you manage risk, to how you review your performance. It is not a strategy. A strategy is one piece of the plan. The plan is the entire system.
            </p>

            {/* Comparison: Strategy vs Plan */}
            <ComparisonTable
              headers={['Aspect', 'Trading Strategy', 'Trading Plan']}
              highlightColumn={2}
              rows={[
                ['Scope', 'How to find & execute trades', 'Your entire trading business'],
                ['Includes risk management?', 'Sometimes', 'Always — non-negotiable'],
                ['Includes daily routine?', 'No', 'Yes'],
                ['Includes psychology rules?', 'No', 'Yes'],
                ['Includes journaling process?', 'No', 'Yes'],
                ['Written document?', 'Usually mental', 'Always written & reviewed'],
                ['Survives a losing streak?', 'Often abandoned', 'Designed for it'],
                ['Professional standard?', 'Optional', 'Mandatory'],
              ]}
            />

            {/* Why 95% fail without a plan */}
            <div className="rounded-xl border-2 border-red-300 bg-red-50/60 p-4 sm:p-5">
              <h4 className="mb-3 text-base font-bold text-red-900 sm:text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Why 95% of Traders Without a Plan Fail
              </h4>
              <ul className="space-y-3">
                {[
                  { reason: 'Emotional decisions replace logical ones', detail: 'Without rules, fear and greed drive every decision. You buy when you feel like it, sell when you panic.' },
                  { reason: 'No consistent edge — just random trades', detail: 'A strategy gives you an edge. Without a plan, you\'re just gambling with extra steps.' },
                  { reason: 'Losses compound because there\'s no circuit breaker', detail: 'A plan defines your max daily loss, max weekly drawdown, and forced breaks. Without these, one bad day can destroy weeks of progress.' },
                  { reason: 'No learning loop — same mistakes repeat', detail: 'Journaling and review are part of the plan. Without them, you keep making the same errors because you never analyze them.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 flex-shrink-0 text-red-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-900 sm:text-base">{item.reason}</p>
                      <p className="text-sm text-slate-600">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <AnalogyBox title="A Trading Plan Is Like a Business Plan">
              Every serious business has a written plan: target market, competitive advantage, operating procedures, financial projections, and contingency plans. Your trading IS a business. Would you invest in a company that had no written plan? Then why would you trade your own money without one?
            </AnalogyBox>

            <KeyTakeaway>
              A trading strategy tells you <em>what</em> to trade. A trading plan tells you <em>everything</em> — what, when, how much, why, and what to do when things go wrong. Without a plan, you&apos;re not a trader — you&apos;re a gambler.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 2: The 12-Component Trading Plan                */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-12-components"
          title="The 12-Component Trading Plan"
          icon={<Target className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A professional trading plan has <strong className="text-slate-900">12 essential components</strong>. Missing even one creates a blind spot that will eventually cost you money. Think of it like a chain — every link must hold.
            </p>

            {/* SVG Overview */}
            <TradingPlanOverviewSvg />

            {/* Component list with descriptions */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Component Overview</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { num: 1, name: 'Mission & Goals', desc: 'Why you trade and what you want to achieve', group: 'Foundation' },
                  { num: 2, name: 'Market Selection', desc: 'Which markets/pairs you trade and why', group: 'Foundation' },
                  { num: 3, name: 'Timeframe Selection', desc: 'Which timeframes you use for analysis and entry', group: 'Foundation' },
                  { num: 4, name: 'Trading Strategies', desc: 'Your specific, tested strategies', group: 'Foundation' },
                  { num: 5, name: 'Entry Rules', desc: 'Exact conditions that trigger a trade entry', group: 'Execution' },
                  { num: 6, name: 'Exit Rules', desc: 'Take-profit, stop-loss, and trailing stop rules', group: 'Execution' },
                  { num: 7, name: 'Risk Management', desc: 'How you protect capital on every trade', group: 'Execution' },
                  { num: 8, name: 'Position Sizing', desc: 'How much capital you risk per trade', group: 'Execution' },
                  { num: 9, name: 'Daily Routine', desc: 'Your pre-market, intraday, and end-of-day process', group: 'Operations' },
                  { num: 10, name: 'Journaling & Review', desc: 'How you track and analyze every trade', group: 'Operations' },
                  { num: 11, name: 'Psychology Rules', desc: 'Rules to prevent emotional trading', group: 'Operations' },
                  { num: 12, name: 'Performance Benchmarks', desc: 'How you measure success and when to scale', group: 'Operations' },
                ].map((comp) => (
                  <div
                    key={comp.num}
                    className={`rounded-lg border p-3 ${
                      comp.group === 'Foundation'
                        ? 'border-emerald-200 bg-emerald-50/50'
                        : comp.group === 'Execution'
                        ? 'border-emerald-300 bg-emerald-50/30'
                        : 'border-emerald-400/50 bg-emerald-50/20'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                        {comp.num}
                      </div>
                      <h5 className="text-sm font-bold text-slate-900">{comp.name}</h5>
                    </div>
                    <p className="text-sm text-slate-600 ml-8">{comp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Three groups explanation */}
            <div className="rounded-xl border border-emerald-300 bg-gradient-to-r from-emerald-50 to-green-50 p-4 sm:p-5">
              <h4 className="mb-3 text-base font-bold text-emerald-900 sm:text-lg">The Three Groups</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-emerald-400 bg-white/80 p-3 text-center">
                  <div className="text-lg font-bold text-emerald-700">1-4</div>
                  <div className="text-sm font-bold text-slate-900">Foundation</div>
                  <p className="text-xs text-slate-600 mt-1">What you trade and why</p>
                </div>
                <div className="rounded-lg border border-emerald-500 bg-white/80 p-3 text-center">
                  <div className="text-lg font-bold text-emerald-800">5-8</div>
                  <div className="text-sm font-bold text-slate-900">Execution</div>
                  <p className="text-xs text-slate-600 mt-1">How you enter and manage</p>
                </div>
                <div className="rounded-lg border border-emerald-600 bg-white/80 p-3 text-center">
                  <div className="text-lg font-bold text-emerald-900">9-12</div>
                  <div className="text-sm font-bold text-slate-900">Operations</div>
                  <p className="text-xs text-slate-600 mt-1">How you run the business</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-slate-900 sm:text-base">Today&apos;s Mission</p>
                <p className="text-sm text-slate-600">
                  By the end of Day 9, you will have a <strong>complete, written trading plan</strong> covering all 12 components. Not a rough draft — a finished document you can trade with tomorrow.
                </p>
              </div>
            </div>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
