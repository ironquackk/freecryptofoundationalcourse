'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  Clock,
  BookOpen,
  Brain,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Eye,
  Heart,
  Shield,
  PenTool,
  Target,
  Calendar,
  Activity,
  Scale,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ChecklistItem } from '@/components/academy/checklist-item'

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Daily Routine Timeline                                */
/* ─────────────────────────────────────────────────────────── */
function DailyRoutineTimeline() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 600 320"
        className="mx-auto w-full max-w-xl"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Daily trading routine timeline from 7:00 AM to 6:00 PM"
      >
        {/* Title */}
        <text x="300" y="20" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" letterSpacing="1">DAILY TRADING ROUTINE TIMELINE</text>

        {/* Timeline base line */}
        <line x1="50" y1="60" x2="570" y2="60" stroke="#d1d5db" strokeWidth="3" strokeLinecap="round" />

        {/* Time markers */}
        {[
          { x: 50, time: '7:00', label: 'Pre-Market', items: 7, color: '#10b981' },
          { x: 175, time: '7:30', label: 'First Check', items: 5, color: '#059669' },
          { x: 300, time: '12:00', label: 'Midday', items: 4, color: '#047857' },
          { x: 425, time: '18:00', label: 'End-of-Day', items: 9, color: '#065f46' },
          { x: 550, time: 'Sun', label: 'Weekly Rev.', items: 6, color: '#064e3b' },
        ].map((marker) => (
          <g key={marker.time}>
            {/* Dot on timeline */}
            <circle cx={marker.x} cy="60" r="8" fill={marker.color} stroke="white" strokeWidth="2" />
            <text x={marker.x} y="48" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="bold">{marker.time}</text>
            {/* Connector */}
            <line x1={marker.x} y1="68" x2={marker.x} y2="90" stroke={marker.color} strokeWidth="1.5" />
            {/* Card */}
            <rect x={marker.x - 48} y="90" width="96" height="70" rx="6" fill="white" stroke={marker.color} strokeWidth="1.5" />
            <text x={marker.x} y="108" textAnchor="middle" fill={marker.color} fontSize="9" fontWeight="bold">{marker.label}</text>
            <text x={marker.x} y="125" textAnchor="middle" fill="#475569" fontSize="8">{marker.items} items</text>
            {/* Progress dots */}
            {Array.from({ length: Math.min(marker.items, 5) }).map((_, i) => (
              <circle key={i} cx={marker.x - 16 + i * 8} cy="145" r="3" fill={marker.color} opacity={0.6 + i * 0.08} />
            ))}
            {marker.items > 5 && (
              <text x={marker.x + 12} y="148" textAnchor="start" fill={marker.color} fontSize="7">+{marker.items - 5}</text>
            )}
          </g>
        ))}

        {/* Flow arrows */}
        <text x="110" y="65" textAnchor="middle" fill="#94a3b8" fontSize="16">→</text>
        <text x="237" y="65" textAnchor="middle" fill="#94a3b8" fontSize="16">→</text>
        <text x="362" y="65" textAnchor="middle" fill="#94a3b8" fontSize="16">→</text>
        <text x="487" y="65" textAnchor="middle" fill="#94a3b8" fontSize="16">→</text>

        {/* Bottom summary */}
        <rect x="50" y="180" width="520" height="40" rx="6" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" />
        <text x="310" y="198" textAnchor="middle" fill="#065f46" fontSize="9" fontWeight="bold">Total: 31 daily checkpoints + 6 weekly review items = 37 structured tasks</text>
        <text x="310" y="212" textAnchor="middle" fill="#065f46" fontSize="8">Following this routine eliminates 80% of emotional trading decisions</text>

        {/* Key insight */}
        <rect x="50" y="235" width="520" height="75" rx="6" fill="white" stroke="#d1d5db" strokeWidth="1" />
        <text x="310" y="255" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="bold">THE RULE: No chart analysis outside your scheduled routine times.</text>
        <text x="310" y="272" textAnchor="middle" fill="#64748b" fontSize="8">If you check charts compulsively, you WILL find &ldquo;reasons&rdquo; to trade.</text>
        <text x="310" y="287" textAnchor="middle" fill="#64748b" fontSize="8">The routine protects you from your own impulses. Stick to the schedule.</text>
        <text x="310" y="302" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">Exceptions: Only for pre-set alerts that trigger — not casual browsing.</text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Your daily trading routine — structure eliminates emotion
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day9AfternoonBlock() {
  return (
    <section id="d9-afternoon" aria-labelledby="d9-afternoon-heading">
      <SectionDivider
        icon={<Sun />}
        title="AFTERNOON BLOCK — 1:00-2:30: COMPONENTS 9-12 — MODULE 4"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 11: Component 9 — Daily Routine                  */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-daily-routine"
          title="Component 9 — Daily Routine"
          icon={<Clock className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A <strong className="text-slate-900">daily routine</strong> is your structured schedule for interacting with the market. It eliminates impulsive decisions and ensures you&apos;re only trading during your designated analysis windows.
            </p>

            {/* Daily Routine Timeline SVG */}
            <DailyRoutineTimeline />

            {/* Complete Routine Template */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Complete Daily Trading Routine Template</h4>

              {/* Pre-Market */}
              <div className="rounded-lg border border-emerald-300 bg-emerald-50/40 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">1</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Pre-Market (7:00 AM) — 7 Items</h5>
                </div>
                <ul className="space-y-2 ml-9">
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Check overnight price action on BTC and ETH</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Review any news or events that occurred</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Check Fear &amp; Greed Index and funding rates</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Review open positions and adjust stops if needed</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Identify potential setups for today</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Set price alerts on MEXC for key levels</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Write daily intention in journal (&ldquo;Today I will...&rdquo;)</span></li>
                </ul>
              </div>

              {/* First Chart Check */}
              <div className="rounded-lg border border-emerald-400 bg-emerald-50/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">2</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">First Chart Check (7:30 AM) — 5 Items</h5>
                </div>
                <ul className="space-y-2 ml-9">
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Run the 7-Point Framework on BTC and ETH</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Check for any strategy signals on your watchlist</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Execute any planned entries using limit orders</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Set stop-losses and take-profits immediately</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Log all actions in your trading journal</span></li>
                </ul>
              </div>

              {/* Midday Check */}
              <div className="rounded-lg border border-emerald-500 bg-emerald-50/20 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-800 text-xs font-bold text-white">3</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Midday Check (12:00 PM) — 4 Items</h5>
                </div>
                <ul className="space-y-2 ml-9">
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Quick check on open positions (5 min max)</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Adjust trailing stops if price has moved significantly</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Check for new setups on 4H candles that just closed</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Log any actions or observations</span></li>
                </ul>
              </div>

              {/* End-of-Day */}
              <div className="rounded-lg border border-emerald-600 bg-white/60 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-900 text-xs font-bold text-white">4</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">End-of-Day (6:00 PM) — 9 Items</h5>
                </div>
                <ul className="space-y-2 ml-9">
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Review all closed trades for the day</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Calculate daily P&amp;L and update tracking sheet</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Journal: What did I do well? What can I improve?</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Screenshot any notable chart patterns</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Update open position status and trailing stops</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Check daily loss limit — stop if hit</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Review any emotions felt during trading</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Set alerts for tomorrow&apos;s key levels</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Close platform — no more chart browsing</span></li>
                </ul>
              </div>

              {/* Sunday Weekly Review */}
              <div className="rounded-lg border border-emerald-700 bg-white/80 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-950 text-xs font-bold text-white">5</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Sunday Weekly Review — 6 Items</h5>
                </div>
                <ul className="space-y-2 ml-9">
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Calculate weekly P&amp;L, win rate, and R:R</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Identify your best and worst trade of the week</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Review rule compliance (did I break any rules?)</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Analyze emotional patterns across the week</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Update strategy parameters if needed (with data, not emotion)</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span className="text-sm text-slate-700">Plan the week ahead — mark key events and levels</span></li>
                </ul>
              </div>
            </div>

            <KeyTakeaway>
              A structured routine eliminates impulsive decisions. If you check charts randomly, you&apos;ll find &ldquo;reasons&rdquo; to trade. Your routine protects you from your own impulses.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 12: Component 10 — Journaling & Review Process   */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-journaling"
          title="Component 10 — Journaling & Review Process"
          icon={<BookOpen className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Your <strong className="text-slate-900">trading journal</strong> is the most powerful tool for improvement. Every professional trader journals. Every amateur skips it. The difference shows in their results.
            </p>

            {/* Journaling System Table */}
            <ComparisonTable
              headers={['Element', 'Frequency', 'Tool']}
              rows={[
                ['Trade log (entry/exit)', 'Every trade', 'Google Sheets or Notion'],
                ['Chart screenshot', 'Every trade', 'TradingView snapshots'],
                ['Emotional state', 'Every trade', '1-10 scale in journal'],
                ['Rule compliance check', 'Every trade', 'Yes/No in journal'],
                ['Daily summary', 'End of each day', 'Journal app or notebook'],
                ['Weekly review', 'Sunday', 'Written review document'],
                ['Monthly performance', 'Last day of month', 'Spreadsheet with charts'],
              ]}
            />

            {/* Minimum Data to Track */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Minimum Data to Track Per Trade (12 Items)</h4>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  { num: 1, item: 'Date & Time of Entry' },
                  { num: 2, item: 'Pair (e.g., BTC/USDT)' },
                  { num: 3, item: 'Direction (Long/Short)' },
                  { num: 4, item: 'Entry Price' },
                  { num: 5, item: 'Stop-Loss Price' },
                  { num: 6, item: 'Take-Profit Price(s)' },
                  { num: 7, item: 'Position Size ($)' },
                  { num: 8, item: 'Strategy Used' },
                  { num: 9, item: 'Exit Price & Reason' },
                  { num: 10, item: 'P&L ($ and %)' },
                  { num: 11, item: 'Emotional State (1-10)' },
                  { num: 12, item: 'Rule Compliance (Y/N)' },
                ].map((item) => (
                  <div key={item.num} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2.5">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <span className="text-xs font-bold">{item.num}</span>
                    </div>
                    <span className="text-sm text-slate-700">{item.item}</span>
                  </div>
                ))}
              </div>
            </div>

            <AnalogyBox title="Your Journal Is Like a Mirror">
              A mirror doesn&apos;t lie. It shows you exactly what&apos;s there — flaws and all. Your journal is the same. It shows you your real trading patterns, not the ones you imagine. Most traders think they&apos;re profitable until they start journaling and see the truth.
            </AnalogyBox>

            <KeyTakeaway>
              If you don&apos;t track it, you can&apos;t improve it. Journaling every trade is non-negotiable. The data you collect becomes the foundation for refining your strategy and scaling your performance.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 13: Component 11 — Psychology Rules              */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-psychology-rules"
          title="Component 11 — Psychology Rules"
          icon={<Brain className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              From Day 8, you learned that <strong className="text-slate-900">your brain is both your best and worst trading tool</strong>. Now we integrate those lessons into concrete rules within your trading plan.
            </p>

            {/* 10 Psychology Rules */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">10 Psychology Rules (From Day 8 Integration)</h4>
              <div className="space-y-2">
                {[
                  { icon: <Shield className="h-4 w-4" />, rule: 'Never trade within 30 minutes of a significant emotional event', detail: 'Argument, bad news, big win — all impair judgment.' },
                  { icon: <Eye className="h-4 w-4" />, rule: 'If you feel FOMO, close the chart and walk away for 15 minutes', detail: 'FOMO is always a trap. The next trade will come.' },
                  { icon: <Heart className="h-4 w-4" />, rule: 'After 2 consecutive losses, take a mandatory 2-hour break', detail: 'Prevents the revenge trading spiral.' },
                  { icon: <AlertTriangle className="h-4 w-4" />, rule: 'Never move your stop-loss further from entry', detail: 'If you want to move it, move it closer or exit.' },
                  { icon: <Scale className="h-4 w-4" />, rule: 'Never increase position size after a loss', detail: 'Doubling down to recover is gambling, not trading.' },
                  { icon: <Activity className="h-4 w-4" />, rule: 'If you can\'t explain the trade in one sentence, don\'t take it', detail: 'Complex justifications usually mask doubt.' },
                  { icon: <PenTool className="h-4 w-4" />, rule: 'Rate your emotional state before every trade (1-10)', detail: 'If above 7 or below 3, don\'t trade.' },
                  { icon: <Target className="h-4 w-4" />, rule: 'No new trades after hitting daily loss limit', detail: 'The market will be there tomorrow. Your capital might not be.' },
                  { icon: <Calendar className="h-4 w-4" />, rule: 'Take at least 1 full day off from trading per week', detail: 'Burnout leads to sloppy decisions and tilt.' },
                  { icon: <Brain className="h-4 w-4" />, rule: 'Review your psychology rules weekly — same as strategy rules', detail: 'If you break a psychology rule, journal it like a broken trade.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-700">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="text-fuchsia-600 [&>svg]:h-4 [&>svg]:w-4">{item.icon}</span>
                        {item.rule}
                      </p>
                      <p className="text-sm text-slate-600 mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-l-fuchsia-500 bg-fuchsia-50/60 px-4 py-3">
              <p className="text-sm font-semibold text-fuchsia-900">
                These aren&apos;t suggestions — they&apos;re rules. Breaking a psychology rule should feel the same as breaking a risk management rule. Journal every violation and review weekly.
              </p>
            </div>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 14: Component 12 — Performance Benchmarks        */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-performance-benchmarks"
          title="Component 12 — Performance Benchmarks"
          icon={<BarChart3 className="h-5 w-5" />}
          variant="success"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong className="text-slate-900">Performance benchmarks</strong> give you objective targets to measure progress. Without them, you&apos;re guessing whether you&apos;re improving. With them, you have a roadmap.
            </p>

            {/* Monthly Performance Targets */}
            <ComparisonTable
              headers={['Metric', 'Month 1', 'Month 3', 'Month 6', 'Month 12']}
              rows={[
                ['Win Rate', '35%+', '40%+', '45%+', '50%+'],
                ['Average R:R', '1:1', '1:1.5', '1:2', '1:2+'],
                ['Expectancy', 'Positive', '$10+/trade', '$25+/trade', '$50+/trade'],
                ['Max Drawdown', '<10%', '<8%', '<6%', '<5%'],
                ['Rule Compliance', '70%+', '80%+', '90%+', '95%+'],
                ['Journal Completion', '80%+', '90%+', '95%+', '100%'],
                ['Monthly Return Target', 'Breakeven', '2-3%', '3-5%', '3-5%+'],
              ]}
            />

            {/* When to Scale Up */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-emerald-800 sm:text-base flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                When to Scale Up (5 Criteria Checklist)
              </h4>
              <div className="rounded-lg border border-emerald-300 bg-emerald-50/40 p-4">
                <div className="space-y-2">
                  <ChecklistItem><span><strong>100+ trades completed</strong> with full journal data</span></ChecklistItem>
                  <ChecklistItem><span><strong>Positive expectancy</strong> over the last 50 trades</span></ChecklistItem>
                  <ChecklistItem><span><strong>90%+ rule compliance</strong> over the last month</span></ChecklistItem>
                  <ChecklistItem><span><strong>3 consecutive profitable months</strong></span></ChecklistItem>
                  <ChecklistItem><span><strong>Max drawdown under 6%</strong> in any single month</span></ChecklistItem>
                </div>
                <p className="mt-3 text-sm text-emerald-800 font-semibold">
                  All 5 must be true before increasing risk from 1% to 1.5% per trade.
                </p>
              </div>
            </div>

            {/* When to Scale Down */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-red-800 sm:text-base flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-red-600" />
                When to Scale Down (5 Criteria Checklist)
              </h4>
              <div className="rounded-lg border border-red-300 bg-red-50/40 p-4">
                <div className="space-y-2">
                  <ChecklistItem><span><strong>Hit weekly max drawdown</strong> 2 weeks in a row</span></ChecklistItem>
                  <ChecklistItem><span><strong>Win rate drops below 30%</strong> over 30 trades</span></ChecklistItem>
                  <ChecklistItem><span><strong>Rule compliance below 70%</strong> for the week</span></ChecklistItem>
                  <ChecklistItem><span><strong>Emotional state consistently above 7/10</strong> before trades</span></ChecklistItem>
                  <ChecklistItem><span><strong>3 consecutive losing days</strong></span></ChecklistItem>
                </div>
                <p className="mt-3 text-sm text-red-800 font-semibold">
                  Any ONE of these triggers a mandatory scale-down from 1% to 0.5% risk per trade until resolved.
                </p>
              </div>
            </div>

            <KeyTakeaway>
              Scaling up is a privilege earned through data, not a right. Scaling down is a safety mechanism, not a failure. The traders who survive are the ones who respect both.
            </KeyTakeaway>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
