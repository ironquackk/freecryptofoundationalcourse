'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Clock,
  User,
  PenTool,
  Target,
  Calculator,
  BarChart3,
  TrendingUp,
  Zap,
  Coffee,
  Eye,
  Award,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ChecklistItem } from '@/components/academy/checklist-item'

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Trader Type Comparison                                */
/*  Visual comparison of 4 trader types with timeline bars     */
/* ─────────────────────────────────────────────────────────── */
function TraderTypeDiagram() {
  const types = [
    { name: 'Scalper', color: '#ef4444', holdBar: 30, screenBar: 95, personality: 'Fast decisions, high stress tolerance' },
    { name: 'Day Trader', color: '#f59e0b', holdBar: 55, screenBar: 80, personality: 'Disciplined, patient intraday' },
    { name: 'Swing Trader', color: '#22c55e', holdBar: 80, screenBar: 30, personality: 'Patient, analytical, low stress' },
    { name: 'Position Trader', color: '#6366f1', holdBar: 95, screenBar: 15, personality: 'Long-term thinker, conviction' },
  ]

  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 440 340"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Trader Type Comparison showing four trading styles with hold duration and screen time"
      >
        {/* Title */}
        <text x="220" y="22" textAnchor="middle" fill="#1e293b" fontSize="12" fontWeight="bold" letterSpacing="1">TRADER TYPE COMPARISON</text>

        {/* Headers */}
        <text x="100" y="50" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">TYPE</text>
        <text x="250" y="50" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">HOLD DURATION</text>
        <text x="380" y="50" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">SCREEN TIME</text>

        {/* Scale labels */}
        <text x="170" y="64" textAnchor="end" fill="#94a3b8" fontSize="7">Short</text>
        <text x="330" y="64" textAnchor="start" fill="#94a3b8" fontSize="7">Long</text>

        {/* Trader type rows */}
        {types.map((type, i) => {
          const y = 85 + i * 60
          return (
            <React.Fragment key={type.name}>
              {/* Type label */}
              <rect x="15" y={y - 12} width="80" height="32" rx="6" fill="white" stroke={type.color} strokeWidth="2" />
              <text x="55" y={y + 6} textAnchor="middle" fill={type.color} fontSize="10" fontWeight="bold">{type.name}</text>

              {/* Hold duration bar */}
              <rect x="110" y={y - 8} width="220" height="12" rx="6" fill="#e2e8f0" />
              <rect x="110" y={y - 8} width={type.holdBar * 2.2} height="12" rx="6" fill={type.color} opacity="0.7" />

              {/* Screen time bar */}
              <rect x="340" y={y - 8} width="80" height="12" rx="6" fill="#e2e8f0" />
              <rect x="340" y={y - 8} width={type.screenBar * 0.8} height="12" rx="6" fill={type.color} opacity="0.5" />

              {/* Personality label */}
              <text x="220" y={y + 22} textAnchor="middle" fill="#64748b" fontSize="7.5" fontStyle="italic">{type.personality}</text>
            </React.Fragment>
          )
        })}

        {/* Recommendation box */}
        <rect x="30" y="310" width="380" height="24" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
        <text x="220" y="326" textAnchor="middle" fill="#16a34a" fontSize="8.5" fontWeight="bold">
          ★ RECOMMENDATION: Start as a Swing Trader — best balance of learning and lifestyle
        </text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Trader Type Comparison — find the style that matches your personality
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Realistic Returns Compound Chart                      */
/*  Shows growth of $1,000 at 5% monthly over 1/2/3 years     */
/* ─────────────────────────────────────────────────────────── */
function CompoundChartDiagram() {
  // $1,000 at 5% monthly
  const months = [0, 6, 12, 18, 24, 30, 36]
  const values = months.map(m => Math.round(1000 * Math.pow(1.05, m)))
  const maxVal = values[values.length - 1] // 5792

  const chartX = 70
  const chartY = 30
  const chartW = 320
  const chartH = 200

  const getX = (i: number) => chartX + (i / (months.length - 1)) * chartW
  const getY = (val: number) => chartY + chartH - (val / maxVal) * chartH

  const points = values.map((v, i) => `${getX(i)},${getY(v)}`).join(' ')

  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 440 310"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Compound growth chart showing $1,000 at 5% monthly over 3 years"
      >
        <defs>
          <linearGradient id="compoundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="220" y="20" textAnchor="middle" fill="#1e293b" fontSize="11" fontWeight="bold" letterSpacing="0.5">COMPOUND GROWTH: $1,000 at 5% Monthly</text>

        {/* Y-axis grid lines and labels */}
        {[0, 1000, 2000, 3000, 4000, 5000].map(v => {
          const y = getY(v)
          return (
            <React.Fragment key={`grid-${v}`}>
              <line x1={chartX} y1={y} x2={chartX + chartW} y2={y} stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="3 3" />
              <text x={chartX - 8} y={y + 3} textAnchor="end" fill="#94a3b8" fontSize="8">${(v / 1000).toFixed(0)}K</text>
            </React.Fragment>
          )
        })}

        {/* X-axis labels */}
        {months.map((m, i) => (
          <text key={`month-${i}`} x={getX(i)} y={chartY + chartH + 16} textAnchor="middle" fill="#94a3b8" fontSize="8">{m}m</text>
        ))}

        {/* Fill area under curve */}
        <polygon
          points={`${getX(0)},${getY(0)} ${points} ${getX(months.length - 1)},${getY(0)}`}
          fill="url(#compoundGrad)"
        />

        {/* Main curve */}
        <polyline
          points={points}
          fill="none"
          stroke="#f43f5e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points with value labels */}
        {values.map((v, i) => (
          <React.Fragment key={`point-${i}`}>
            <circle cx={getX(i)} cy={getY(v)} r="4" fill="white" stroke="#f43f5e" strokeWidth="2" />
            <text x={getX(i)} y={getY(v) - 10} textAnchor="middle" fill="#1e293b" fontSize="8" fontWeight="bold">${v.toLocaleString()}</text>
          </React.Fragment>
        ))}

        {/* Year markers */}
        <rect x="90" y="255" width="100" height="22" rx="4" fill="#fef3c7" stroke="#fbbf24" strokeWidth="1" />
        <text x="140" y="270" textAnchor="middle" fill="#92400e" fontSize="8" fontWeight="bold">1 Year: $1,796</text>

        <rect x="200" y="255" width="100" height="22" rx="4" fill="#fce7f3" stroke="#f472b6" strokeWidth="1" />
        <text x="250" y="270" textAnchor="middle" fill="#9d174d" fontSize="8" fontWeight="bold">2 Years: $3,225</text>

        <rect x="310" y="255" width="100" height="22" rx="4" fill="#ffe4e6" stroke="#f43f5e" strokeWidth="1" />
        <text x="360" y="270" textAnchor="middle" fill="#9f1239" fontSize="8" fontWeight="bold">3 Years: $5,792</text>

        {/* Note */}
        <rect x="70" y="288" width="300" height="16" rx="3" fill="white" stroke="#e2e8f0" strokeWidth="1" />
        <text x="220" y="300" textAnchor="middle" fill="#64748b" fontSize="7.5">5% monthly ≈ 80% annually — realistic for a skilled, disciplined trader</text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Compound Growth — patience and consistency beat get-rich-quick every time
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day8LateAfternoonBlock() {
  return (
    <section id="d8-late-afternoon" aria-labelledby="d8-late-afternoon-heading">
      <SectionDivider
        icon={<Clock />}
        title="LATE AFTERNOON BLOCK — 2:30–5:30: TRADING IDENTITY & ADVANCED JOURNALING — MODULES 5–6"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 16: What Type of Trader Are You?
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-trader-type"
          title="What Type of Trader Are You?"
          icon={<User className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Your trading style must match your personality, lifestyle, and risk tolerance. A scalper
              trying to be a position trader (or vice versa) is like a sprinter trying to run a marathon —
              wrong tool for the job. Here are the four main trader types:
            </p>

            {/* Trader Type SVG */}
            <TraderTypeDiagram />

            {/* Trader Type Table */}
            <ComparisonTable
              headers={['Type', 'Timeframe', 'Hold Duration', 'Screen Time', 'Best Personality Match']}
              rows={[
                ['Scalper', '1m–15m', 'Minutes to hours', 'Very High (6+ hrs)', 'Fast decisions, high stress tolerance, loves action'],
                ['Day Trader', '15m–4H', 'Hours (no overnight)', 'High (4-6 hrs)', 'Disciplined, patient intraday, structured routine'],
                ['Swing Trader', '4H–1D', 'Days to weeks', 'Low (1-2 hrs)', 'Patient, analytical, comfortable with overnight risk'],
                ['Position Trader', '1D–1W', 'Weeks to months', 'Very Low (<1 hr)', 'Long-term thinker, conviction-based, low stress tolerance'],
              ]}
            />

            {/* Self-Assessment Questions */}
            <div className="rounded-lg border-2 border-rose-400 bg-gradient-to-r from-rose-50 to-pink-50 p-4 sm:p-5">
              <h4 className="mb-3 text-sm font-bold text-rose-800 sm:text-base">5 Honest Self-Assessment Questions</h4>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span><strong>1.</strong> Can you watch charts for 6+ hours without losing focus or getting anxious?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span><strong>2.</strong> Do you have a full-time job or other commitments during market hours?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span><strong>3.</strong> Can you sleep peacefully with an open position overnight?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span><strong>4.</strong> Do you prefer quick, frequent feedback or long-term, big-picture analysis?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span><strong>5.</strong> How do you handle losing streaks — do you need immediate resolution or can you wait?</span>
                </li>
              </ul>
            </div>

            {/* Recommendation */}
            <div className="rounded-lg border-2 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <p className="text-sm font-bold text-green-800 sm:text-base">Recommendation: Start as a Swing Trader</p>
                  <p className="mt-1 text-sm leading-relaxed text-green-700">
                    Swing trading gives you time to think, analyze, and learn without the intense
                    pressure of scalping or day trading. It fits around a job, requires less screen
                    time, and is the most forgiving of beginner mistakes. Once you&apos;re consistently
                    profitable as a swing trader, you can explore other styles.
                  </p>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              Your trading style must match who you are. Don&apos;t choose a style because it sounds
              exciting — choose it because it fits your personality, schedule, and emotional makeup.
              For beginners, swing trading is the safest and most effective starting point.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 17: The Trading Rules Contract
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-trading-contract"
          title="The Trading Rules Contract"
          icon={<PenTool className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              This is not a suggestion. This is a <strong>contract with yourself</strong>. Print it.
              Sign it. Tape it to your monitor. When you&apos;re about to break a rule, this contract
              is what stops you.
            </p>

            {/* The 10-Rule Contract */}
            <div className="rounded-xl border-2 border-rose-400 bg-white p-4 sm:p-6 shadow-md">
              <div className="mb-4 text-center">
                <h4 className="text-lg font-bold text-slate-900 sm:text-xl">MY TRADING RULES CONTRACT</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">I agree to follow these rules on every single trade</p>
              </div>

              <div className="space-y-3">
                {[
                  'I will NEVER risk more than 1-2% of my account on a single trade.',
                  'I will ALWAYS set a stop loss before entering any trade.',
                  'I will NEVER move my stop loss away from my entry price.',
                  'I will ONLY trade when my Emotional Thermometer is Level 1 or 2.',
                  'I will follow the 3-Second Rule before every trade entry.',
                  'I will complete my Pre-Trade Checklist (10 items) before every trade.',
                  'I will journal every trade — no exceptions, no shortcuts.',
                  'I will follow the Losing Streak Protocol: 3 losses = reduce 50%, 4 losses = stop for day.',
                  'I will NOT revenge trade. A loss is a cost of business, not a personal attack.',
                  'I will review my trades weekly and adjust my process based on data, not emotion.',
                ].map((rule, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 border border-slate-200">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
                      {i + 1}
                    </div>
                    <p className="text-sm font-medium text-slate-800">{rule}</p>
                  </div>
                ))}
              </div>

              {/* Signature line */}
              <div className="mt-6 border-t-2 border-slate-200 pt-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Signature:</p>
                    <div className="border-b-2 border-slate-400 h-8" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Date:</p>
                    <div className="border-b-2 border-slate-400 h-8" />
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-500 text-center italic">
                  Write this out and sign it. Yes, physically sign it. The act of writing and signing
                  creates a psychological commitment far stronger than just reading.
                </p>
              </div>
            </div>

            <KeyTakeaway>
              A contract with yourself is only as strong as your commitment to it. But the physical act
              of writing and signing creates accountability. When you&apos;re about to break a rule, look
              at your signed contract. That pause might save your account.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 18: The Realistic Expectations Framework
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-realistic-expectations"
          title="The Realistic Expectations Framework"
          icon={<Target className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The #1 reason new traders blow up is <strong>unrealistic expectations</strong>. They
              expect to double their account in a month. When reality doesn&apos;t match their fantasy,
              they take excessive risks to catch up. Here&apos;s what realistic progress actually looks like.
            </p>

            {/* Year 1 Reality Check Table */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-rose-700 sm:text-base">
                <Calculator className="h-4 w-4" />
                Year 1 Reality Check
              </h4>
              <ComparisonTable
                headers={['Months', 'Expected Performance', 'Focus']}
                rows={[
                  ['1-2', 'Likely losing money', 'Learning the platform, placing trades, making mistakes'],
                  ['3-4', 'Breaking even or small losses', 'Refining your strategy, building discipline, journaling consistently'],
                  ['5-6', 'Slightly profitable (1-2% monthly)', 'Strategy is working, emotional control improving, fewer rule breaks'],
                  ['7-9', 'Consistently profitable (2-4% monthly)', 'Confidence based on data, not hope. Trusting the process.'],
                  ['10-12', 'Target: 3-5% monthly average', 'Steady growth, proper risk management, full journaling habit'],
                ]}
              />
            </div>

            {/* Compound Growth Chart SVG */}
            <CompoundChartDiagram />

            {/* The Math of Realistic Returns */}
            <div className="rounded-lg border-2 border-rose-400 bg-gradient-to-r from-rose-50 to-pink-50 p-4 sm:p-5">
              <h5 className="mb-3 text-sm font-bold text-rose-800 sm:text-base">The Math of Realistic Returns</h5>
              <p className="mb-3 text-sm text-rose-700">
                Starting with <strong>$1,000</strong> at <strong>5% monthly</strong> (a realistic target
                for a skilled, disciplined trader after Year 1):
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-white p-3 border border-rose-200 text-center">
                  <p className="text-xs text-slate-500">After 1 Year</p>
                  <p className="text-2xl font-bold text-rose-600">$1,796</p>
                  <p className="text-xs text-slate-500">+79.6%</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-rose-200 text-center">
                  <p className="text-xs text-slate-500">After 2 Years</p>
                  <p className="text-2xl font-bold text-rose-600">$3,225</p>
                  <p className="text-xs text-slate-500">+222.5%</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-rose-200 text-center">
                  <p className="text-xs text-slate-500">After 3 Years</p>
                  <p className="text-2xl font-bold text-rose-600">$5,792</p>
                  <p className="text-xs text-slate-500">+479.2%</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-600 italic">
                5% monthly is achievable but requires discipline, risk management, and consistent execution.
                Most professional traders average 3-7% monthly. Anyone promising 20%+ monthly is lying or gambling.
              </p>
            </div>

            <KeyTakeaway>
              Realistic expectations prevent destructive behavior. 5% monthly is not exciting — but
              compounded over 3 years, it turns $1,000 into nearly $6,000. Slow and steady beats fast
              and reckless every single time.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 19: Tracking Emotional Patterns
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-emotional-tracking"
          title="Tracking Emotional Patterns"
          icon={<Eye className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Over time, your journal data will reveal emotional patterns you could never see in the
              moment. But you need a simple tracking system to make those patterns visible.
            </p>

            {/* Simple Tracking Spreadsheet Template */}
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm overflow-x-auto">
              <h5 className="mb-3 text-sm font-bold text-slate-900 sm:text-base">Simple Tracking Spreadsheet</h5>
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="px-2 py-2 text-left">Trade #</th>
                    <th className="px-2 py-2 text-left">Date</th>
                    <th className="px-2 py-2 text-left">Pair</th>
                    <th className="px-2 py-2 text-left">Emotion Before</th>
                    <th className="px-2 py-2 text-left">Emotion After</th>
                    <th className="px-2 py-2 text-left">Level (1-5)</th>
                    <th className="px-2 py-2 text-left">Rules Followed?</th>
                    <th className="px-2 py-2 text-left">P&L</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="px-2 py-2">1</td>
                    <td className="px-2 py-2 text-slate-400">Jan 5</td>
                    <td className="px-2 py-2 text-slate-400">BTC/USDT</td>
                    <td className="px-2 py-2 text-slate-400">Calm</td>
                    <td className="px-2 py-2 text-slate-400">Satisfied</td>
                    <td className="px-2 py-2 text-slate-400">1</td>
                    <td className="px-2 py-2 text-green-600">Yes</td>
                    <td className="px-2 py-2 text-green-600">+$85</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="px-2 py-2">2</td>
                    <td className="px-2 py-2 text-slate-400">Jan 5</td>
                    <td className="px-2 py-2 text-slate-400">ETH/USDT</td>
                    <td className="px-2 py-2 text-slate-400">Excited</td>
                    <td className="px-2 py-2 text-slate-400">Frustrated</td>
                    <td className="px-2 py-2 text-amber-600">3</td>
                    <td className="px-2 py-2 text-red-600">No</td>
                    <td className="px-2 py-2 text-red-600">-$120</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-2 py-2">3</td>
                    <td className="px-2 py-2 text-slate-400">Jan 6</td>
                    <td className="px-2 py-2 text-slate-400">SOL/USDT</td>
                    <td className="px-2 py-2 text-slate-400">Calm</td>
                    <td className="px-2 py-2 text-slate-400">Calm</td>
                    <td className="px-2 py-2 text-slate-400">1</td>
                    <td className="px-2 py-2 text-green-600">Yes</td>
                    <td className="px-2 py-2 text-green-600">+$45</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-2 text-xs text-slate-500 italic">Example tracking data — notice how Level 3 (anxious) correlated with breaking rules and a loss</p>
            </div>

            {/* After 50 Trades Analysis */}
            <div className="rounded-lg border-2 border-rose-300 bg-rose-50/60 p-4 sm:p-5">
              <h5 className="mb-3 text-sm font-bold text-rose-800 sm:text-base">After 50 Trades — Analysis Questions</h5>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span>At what emotional level do I have the highest win rate?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span>Which emotion (before entry) most often leads to losses?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span>Do I lose more money when I break rules or when I follow them?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span>What time of day am I most/least profitable?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span>Which cognitive bias appears most often in my losing trades?</span>
                </li>
              </ul>
            </div>

            <KeyTakeaway>
              After 50 journaled trades, patterns emerge that are invisible in the moment. You might
              discover that 80% of your losses come from trading at Level 3+. That single insight can
              transform your profitability.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 20: The Monthly Deep Dive
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-monthly-dive"
          title="The Monthly Deep Dive"
          icon={<BarChart3 className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The Weekly Review catches short-term patterns. The Monthly Deep Dive reveals long-term
              trends in your performance, psychology, and process. Do this at the end of every month —
              it&apos;s the single most powerful improvement tool you have.
            </p>

            {/* 6 Analysis Areas */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { num: 1, title: 'Performance Review', desc: 'Win rate, P&L, R-multiple distribution, best/worst trades of the month' },
                { num: 2, title: 'Emotional Pattern Analysis', desc: 'Which emotions preceded your best/worst trades? Any recurring emotional traps?' },
                { num: 3, title: 'Rule Compliance Audit', desc: 'What % of trades followed all 10 rules? Which rules were broken most? Why?' },
                { num: 4, title: 'Strategy Effectiveness', desc: 'Which setups/pairs/timeframes were most profitable? Which should you drop?' },
                { num: 5, title: 'Process Improvement', desc: 'Is your pre-trade routine consistent? Journaling rate? Any new habits to build?' },
                { num: 6, title: 'Goal Setting', desc: 'Set 3 specific, measurable goals for next month based on this month\'s data' },
              ].map((area) => (
                <div key={area.num} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
                    {area.num}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{area.title}</p>
                    <p className="text-sm text-slate-600">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Target Benchmarks Table */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-rose-700 sm:text-base">
                <Award className="h-4 w-4" />
                Target Benchmarks
              </h4>
              <ComparisonTable
                headers={['Metric', 'Month 1', 'Month 3', 'Month 6']}
                rows={[
                  ['Rule compliance', '≥ 60%', '≥ 80%', '≥ 95%'],
                  ['Journal completion', '≥ 70%', '≥ 90%', '100%'],
                  ['Win rate', '≥ 40%', '≥ 50%', '≥ 55%'],
                  ['Average R:R', '≥ 1:1.5', '≥ 1:2', '≥ 1:2.5'],
                  ['Max drawdown', '< 15%', '< 10%', '< 8%'],
                ]}
              />
            </div>

            <KeyTakeaway>
              The Monthly Deep Dive is where you separate yourself from 95% of traders. Most people never
              review their performance systematically. Those who do improve exponentially. The benchmarks
              give you concrete targets — aim for Month 6 standards within your first 3 months.
            </KeyTakeaway>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
