'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  Crosshair,
  Zap,
  ShieldCheck,
  Target,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Activity,
  ArrowRight,
  Calculator,
  FileText,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ChecklistItem } from '@/components/academy/checklist-item'

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Signal Generation Flowchart (7 Steps)                */
/* ─────────────────────────────────────────────────────────── */
function SignalGenerationFlowchart() {
  const steps = [
    { label: '1. Market Regime', short: 'What market type?', color: '#8b5cf6' },
    { label: '2. Confluence', short: 'Score ≥ 70?', color: '#7c3aed' },
    { label: '3. Entry Zone', short: 'Where to enter?', color: '#6d28d9' },
    { label: '4. Stop Loss', short: 'Risk defined?', color: '#dc2626' },
    { label: '5. Take Profit', short: '1/3-1/3-1/3', color: '#16a34a' },
    { label: '6. Position Size', short: '1% risk rule', color: '#f59e0b' },
    { label: '7. Document', short: 'Log everything', color: '#0ea5e9' },
  ]

  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 500 320"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="7-Step Signal Generation Process Flowchart"
      >
        <text x="250" y="22" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold" letterSpacing="1">
          7-STEP SIGNAL GENERATION PROCESS
        </text>

        {/* Row 1: Steps 1-4 */}
        {steps.slice(0, 4).map((step, i) => {
          const x = 15 + i * 125
          const y = 55
          return (
            <React.Fragment key={step.label}>
              <rect x={x} y={y} width="110" height="65" rx="10" fill="white" stroke={step.color} strokeWidth="2" />
              <text x={x + 55} y={y + 28} textAnchor="middle" fill={step.color} fontSize="9" fontWeight="bold">{step.label}</text>
              <text x={x + 55} y={y + 48} textAnchor="middle" fill="#64748b" fontSize="8">{step.short}</text>
              {/* Arrow to next */}
              {i < 3 && (
                <>
                  <line x1={x + 110} y1={y + 32} x2={x + 125} y2={y + 32} stroke="#94a3b8" strokeWidth="1.5" />
                  <polygon points={`${x + 122},${y + 28} ${x + 128},${y + 32} ${x + 122},${y + 36}`} fill="#94a3b8" />
                </>
              )}
            </React.Fragment>
          )
        })}

        {/* Curved arrow from step 4 to step 5 */}
        <line x1="390" y1="120" x2="390" y2="155" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="386,152 390,160 394,152" fill="#94a3b8" />

        {/* Row 2: Steps 5-7 (right to left) */}
        {steps.slice(4).map((step, i) => {
          const x = 395 - i * 125 - 110
          const y = 165
          return (
            <React.Fragment key={step.label}>
              <rect x={x} y={y} width="110" height="65" rx="10" fill="white" stroke={step.color} strokeWidth="2" />
              <text x={x + 55} y={y + 28} textAnchor="middle" fill={step.color} fontSize="9" fontWeight="bold">{step.label}</text>
              <text x={x + 55} y={y + 48} textAnchor="middle" fill="#64748b" fontSize="8">{step.short}</text>
              {/* Arrow to next (leftward) */}
              {i < 2 && (
                <>
                  <line x1={x} y1={y + 32} x2={x - 15} y2={y + 32} stroke="#94a3b8" strokeWidth="1.5" />
                  <polygon points={`${x - 12},${y + 28} ${x - 18},${y + 32} ${x - 12},${y + 36}`} fill="#94a3b8" />
                </>
              )}
            </React.Fragment>
          )
        })}

        {/* Final arrow down to EXECUTE */}
        <line x1="140" y1="230" x2="140" y2="260" stroke="#16a34a" strokeWidth="2" />
        <polygon points="136,258 140,266 144,258" fill="#16a34a" />

        {/* EXECUTE box */}
        <rect x="70" y="268" width="140" height="40" rx="12" fill="#16a34a" />
        <text x="140" y="293" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">EXECUTE TRADE</text>

        {/* Side note */}
        <rect x="280" y="260" width="200" height="50" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
        <text x="380" y="280" textAnchor="middle" fill="#92400e" fontSize="8" fontWeight="bold">SKIP IF ANY STEP FAILS</text>
        <text x="380" y="298" textAnchor="middle" fill="#78350f" fontSize="7">No confluence? No trade. No SL? No trade.</text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        The 7-Step Signal Generation Process — each step is a gate
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Confluence Score Breakdown (Bar Chart)               */
/* ─────────────────────────────────────────────────────────── */
function ConfluenceScoreChart() {
  const factors = [
    { label: 'Trend Alignment', pts: 20, color: '#8b5cf6' },
    { label: 'S/R Level', pts: 20, color: '#7c3aed' },
    { label: 'Volume Confirm', pts: 15, color: '#6d28d9' },
    { label: 'Indicator Agree', pts: 15, color: '#a78bfa' },
    { label: 'On-Chain Support', pts: 15, color: '#c4b5fd' },
    { label: 'Sentiment Align', pts: 10, color: '#8b5cf6' },
    { label: 'Fib/Extension', pts: 5, color: '#7c3aed' },
  ]

  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 420 300"
        className="mx-auto w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Confluence Score Breakdown showing 7 factors and their weights"
      >
        <text x="210" y="22" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="1">
          CONFLUENCE SCORE BREAKDOWN (100 PTS)
        </text>

        {/* Bars */}
        {factors.map((f, i) => {
          const y = 45 + i * 34
          const barWidth = f.pts * 6 // scale: 20pts = 120px
          return (
            <React.Fragment key={f.label}>
              <text x="130" y={y + 14} textAnchor="end" fill="#334155" fontSize="9" fontWeight="500">{f.label}</text>
              <rect x="140" y={y + 2} width={barWidth} height="18" rx="3" fill={f.color} opacity="0.85" />
              <text x={140 + barWidth + 6} y={y + 15} fill="#475569" fontSize="9" fontWeight="bold">{f.pts} pts</text>
            </React.Fragment>
          )
        })}

        {/* Minimum line */}
        <line x1="140" y1="290" x2="140" y2="40" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        <rect x="140" y={290} width="420" height="0.5" stroke="none" fill="#e2e8f0" />
        {/* 70-pt threshold line */}
        <line x1={140 + 70 * 6} y1="290" x2={140 + 70 * 6} y2="40" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 3" />
        <text x={140 + 70 * 6} y="298" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">MIN 70</text>

        {/* Legend */}
        <rect x="300" y="262" width="12" height="12" rx="2" fill="#ef4444" opacity="0.6" />
        <text x="318" y="272" fill="#64748b" fontSize="8">Minimum threshold (70/100)</text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Confluence Score — minimum 70/100 required to take a trade
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: 1/3-1/3-1/3 TP Method Visual                        */
/* ─────────────────────────────────────────────────────────── */
function TpMethodVisual() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 460 310"
        className="mx-auto w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="1/3-1/3-1/3 Take Profit Scaling Method"
      >
        <text x="230" y="22" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="1">
          1/3 — 1/3 — 1/3 SCALING OUT METHOD
        </text>

        {/* Price axis */}
        <line x1="80" y1="45" x2="80" y2="270" stroke="#94a3b8" strokeWidth="1" />
        <text x="75" y="55" textAnchor="end" fill="#64748b" fontSize="8">TP3 (3R+)</text>
        <text x="75" y="120" textAnchor="end" fill="#64748b" fontSize="8">TP2 (2R)</text>
        <text x="75" y="185" textAnchor="end" fill="#64748b" fontSize="8">TP1 (1R)</text>
        <text x="75" y="250" textAnchor="end" fill="#64748b" fontSize="8">Entry</text>
        <text x="75" y="275" textAnchor="end" fill="#dc2626" fontSize="8">SL</text>

        {/* Price levels */}
        <line x1="80" y1="50" x2="400" y2="50" stroke="#16a34a" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="80" y1="115" x2="400" y2="115" stroke="#16a34a" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="80" y1="180" x2="400" y2="180" stroke="#22c55e" strokeWidth="1" strokeDasharray="4 3" />
        <line x1="80" y1="245" x2="400" y2="245" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="80" y1="275" x2="400" y2="275" stroke="#dc2626" strokeWidth="1.5" />

        {/* TP1 zone: 1/3 position closed */}
        <rect x="120" y="160" width="80" height="75" rx="6" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
        <text x="160" y="190" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">TP1</text>
        <text x="160" y="205" textAnchor="middle" fill="#166534" fontSize="8">1R profit</text>
        <text x="160" y="222" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">Close 1/3</text>

        {/* TP2 zone: 1/3 position closed */}
        <rect x="220" y="95" width="80" height="75" rx="6" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
        <text x="260" y="125" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">TP2</text>
        <text x="260" y="140" textAnchor="middle" fill="#166534" fontSize="8">2R profit</text>
        <text x="260" y="157" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">Close 1/3</text>

        {/* TP3 zone: remaining 1/3 */}
        <rect x="320" y="30" width="80" height="75" rx="6" fill="#86efac" stroke="#15803d" strokeWidth="1.5" />
        <text x="360" y="60" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">TP3</text>
        <text x="360" y="75" textAnchor="middle" fill="#166534" fontSize="8">3R+ trailing</text>
        <text x="360" y="92" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">Close 1/3</text>

        {/* BTC example at bottom */}
        <rect x="90" y="286" width="340" height="20" rx="4" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1" />
        <text x="260" y="300" textAnchor="middle" fill="#5b21b6" fontSize="8" fontWeight="bold">
          BTC Example: Entry $66,000 → SL $64,800 (R=$1,200) → TP1 $67,200 → TP2 $68,400 → TP3 $69,600+
        </text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Scaling out in thirds — lock in profits progressively
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  Step Number Card helper                                   */
/* ─────────────────────────────────────────────────────────── */
function StepCard({
  number,
  title,
  color,
  children,
}: {
  number: number
  title: string
  color: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: number * 0.08 }}
      className="rounded-lg border border-slate-200 bg-white p-4 sm:p-5"
    >
      <div className="mb-3 flex items-center gap-3">
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: color }}
        >
          {number}
        </div>
        <h4 className="text-sm font-bold text-slate-900 sm:text-base" style={{ color }}>
          {title}
        </h4>
      </div>
      <div className="text-sm leading-relaxed text-slate-600 sm:text-base">{children}</div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                               */
/* ─────────────────────────────────────────────────────────── */
export function Day7MorningBlock() {
  return (
    <section id="d7-morning" aria-labelledby="d7-morning-heading">
      <SectionDivider
        icon={<Sun />}
        title="MORNING BLOCK — 8:00–9:30: SIGNAL GENERATION MASTERY — MODULE 1"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 1: The 7-Step Signal Generation Process (Deep Dive)
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-7-step-signal"
          title="The 7-Step Signal Generation Process (Deep Dive)"
          icon={<Crosshair className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A professional signal isn&apos;t just &quot;buy here.&quot; It&apos;s a <strong className="text-purple-800">systematic, 7-step
              process</strong> that defines every element before you risk a single dollar. Skip any step and you&apos;re gambling, not trading.
            </p>

            {/* SVG Flowchart */}
            <SignalGenerationFlowchart />

            {/* ─── Step 1: Market Regime Identification ─── */}
            <StepCard number={1} title="Market Regime Identification" color="#8b5cf6">
              <p className="mb-3">
                Before generating any signal, you must identify the <strong>current market regime</strong>. Different regimes require
                different strategies — a trend strategy fails in a range, and a range strategy fails in a trend.
              </p>
              <ComparisonTable
                headers={['Regime', 'Price Action', 'Volume Profile', 'Indicator Behavior', 'Valid Strategies']}
                rows={[
                  ['Strong Uptrend', 'HH + HL pattern', 'Rising on up days', 'EMA stacked bullish', 'Trend-following, pullback buys'],
                  ['Weak Uptrend', 'Higher lows but flat tops', 'Declining volume', 'EMA tangling', 'Cautious longs only'],
                  ['Strong Downtrend', 'LH + LL pattern', 'Rising on down days', 'EMA stacked bearish', 'Shorts, pullback sells'],
                  ['Range-Bound', 'Horizontal S/R', 'Low & flat', 'RSI 40–60, EMA flat', 'Range trades (buy S / sell R)'],
                  ['High Volatility', 'Large wicks, gaps', 'Spiky, erratic', 'ATR high, RSI extreme', 'Reduce size, wider stops'],
                  ['Low Volatility', 'Small bodies, tight', 'Very low', 'ATR low, Bollinger squeeze', 'Breakout setups'],
                ]}
              />

              <div className="mt-4 rounded-lg border border-purple-200 bg-purple-50/60 px-4 py-3">
                <h5 className="mb-2 text-sm font-bold text-purple-800 flex items-center gap-2">
                  <Clock className="h-4 w-4" /> How to Identify the Regime in 60 Seconds on MEXC
                </h5>
                <ol className="ml-4 list-decimal space-y-1 text-sm text-slate-700">
                  <li>Open <strong>BTC/USDT Daily</strong> — Is price above or below EMA 200? (Trend direction)</li>
                  <li>Switch to <strong>4H</strong> — Are EMAs 20/50/200 stacked or tangled? (Trend strength)</li>
                  <li>Check <strong>volume bars</strong> — Rising, falling, or flat? (Participation)</li>
                  <li>Look at <strong>ATR(14)</strong> — Above or below average? (Volatility level)</li>
                  <li>Check <strong>RSI</strong> — Trending (40–80 or 20–60) or ranging (40–60)? (Momentum character)</li>
                </ol>
              </div>
            </StepCard>

            {/* ─── Step 2: Multi-Timeframe Confluence ─── */}
            <StepCard number={2} title="Multi-Timeframe Confluence" color="#7c3aed">
              <p className="mb-3">
                A high-probability signal requires confluence across <strong>multiple timeframes and data sources</strong>.
                No single indicator should ever trigger a trade alone.
              </p>

              <div className="grid gap-3 sm:grid-cols-3 mb-4">
                <div className="rounded-lg border border-purple-300 bg-purple-50/50 p-3 text-center">
                  <h5 className="text-xs font-bold uppercase text-purple-700 mb-1">Signal TF</h5>
                  <p className="text-2xl font-bold text-purple-600">4H</p>
                  <p className="text-xs text-slate-600">Where the setup forms</p>
                </div>
                <div className="rounded-lg border border-violet-300 bg-violet-50/50 p-3 text-center">
                  <h5 className="text-xs font-bold uppercase text-violet-700 mb-1">Context TF</h5>
                  <p className="text-2xl font-bold text-violet-600">Daily</p>
                  <p className="text-xs text-slate-600">Confirms the big picture</p>
                </div>
                <div className="rounded-lg border border-indigo-300 bg-indigo-50/50 p-3 text-center">
                  <h5 className="text-xs font-bold uppercase text-indigo-700 mb-1">Entry TF</h5>
                  <p className="text-2xl font-bold text-indigo-600">1H</p>
                  <p className="text-xs text-slate-600">Precision entry timing</p>
                </div>
              </div>

              <h5 className="mb-2 text-sm font-bold text-purple-800">Confluence Score Table</h5>
              <p className="text-sm text-slate-600 mb-2">
                Score each factor. You need a <strong>minimum of 70/100</strong> to take the trade.
              </p>

              <ComparisonTable
                headers={['Factor', 'Weight', 'What to Check']}
                rows={[
                  ['Trend Alignment', '20 pts', 'Signal TF trend matches Context TF trend'],
                  ['S/R Level', '20 pts', 'Entry near key support (long) or resistance (short)'],
                  ['Volume Confirmation', '15 pts', 'Volume increasing in trade direction'],
                  ['Indicator Agreement', '15 pts', 'RSI, MACD, EMA all agree on direction'],
                  ['On-Chain Support', '15 pts', 'Exchange outflows, MVRV, whale accumulation'],
                  ['Sentiment Alignment', '10 pts', 'Fear & Greed supports contrarian view'],
                  ['Fib/Extension Level', '5 pts', 'Entry at key Fibonacci retracement or extension'],
                ]}
              />

              {/* SVG: Confluence Score Chart */}
              <ConfluenceScoreChart />
            </StepCard>

            {/* ─── Step 3: Entry Zone Definition ─── */}
            <StepCard number={3} title="Entry Zone Definition" color="#6d28d9">
              <p className="mb-3">
                Never enter on a single price point. Define an <strong>entry zone</strong> — a range where you&apos;re
                comfortable entering, with a clear expiry time.
              </p>

              <div className="grid gap-3 sm:grid-cols-3 mb-4">
                <div className="rounded-lg border border-emerald-300 bg-emerald-50/50 p-3">
                  <h5 className="text-xs font-bold uppercase text-emerald-700 mb-1">Ideal Entry</h5>
                  <p className="text-sm font-bold text-emerald-800">$65,800</p>
                  <p className="text-xs text-slate-500">Exact S/R confluence level</p>
                </div>
                <div className="rounded-lg border border-amber-300 bg-amber-50/50 p-3">
                  <h5 className="text-xs font-bold uppercase text-amber-700 mb-1">Entry Zone</h5>
                  <p className="text-sm font-bold text-amber-800">$65,800–$66,200</p>
                  <p className="text-xs text-slate-500">Acceptable range</p>
                </div>
                <div className="rounded-lg border border-red-300 bg-red-50/50 p-3">
                  <h5 className="text-xs font-bold uppercase text-red-700 mb-1">Zone Expiry</h5>
                  <p className="text-sm font-bold text-red-800">48 hours</p>
                  <p className="text-xs text-slate-500">If not hit, signal expires</p>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-sm text-slate-700">
                  <strong>BTC Example:</strong> Current price $67,200. Support zone $65,800–$66,200.
                  Ideal entry at $66,000 (mid-support). Entry zone $65,800–$66,200.
                  If price doesn&apos;t reach the zone within 48 hours, the signal expires — no chase.
                </p>
              </div>
            </StepCard>

            {/* ─── Step 4: Stop Loss Placement ─── */}
            <StepCard number={4} title="Stop Loss Placement" color="#dc2626">
              <p className="mb-3">
                Your stop loss is your <strong>insurance policy</strong>. There are four methods — choose the one
                that makes sense for the setup.
              </p>

              <ComparisonTable
                headers={['Method', 'How It Works', 'BTC Example (Entry $66K)']}
                rows={[
                  ['Structural SL', 'Below swing low (long) or above swing high (short)', '$65,200 (below support)'],
                  ['ATR-Based SL', 'Entry - (1.5× ATR) for longs', '$66,000 - (1.5 × $800) = $64,800'],
                  ['Percentage SL', 'Fixed % from entry (typically 2–3%)', '$66,000 - 2% = $64,680'],
                  ['Volatility SL', 'Below Bollinger Band or Keltner Channel', '$64,500 (below lower BB)'],
                ]}
              />

              <div className="mt-3 rounded-lg border-l-4 border-l-red-500 bg-red-50 px-4 py-3">
                <p className="text-sm font-bold text-red-800">
                  🔴 RULE: Always use the <u>WIDEST</u> stop that still maintains R:R ≥ 2:1
                </p>
                <p className="mt-1 text-sm text-red-700">
                  A tight stop gets hunted. A wide stop gives your trade room to breathe. But never risk more than 2:1 R:R minimum.
                </p>
              </div>
            </StepCard>

            {/* ─── Step 5: Take Profit Strategy ─── */}
            <StepCard number={5} title="Take Profit Strategy (Scaling Out)" color="#16a34a">
              <p className="mb-3">
                Never close your entire position at one level. Use the <strong className="text-green-700">1/3-1/3-1/3 method</strong> to
                scale out progressively — this locks in profits while keeping upside exposure.
              </p>

              <div className="mb-3 space-y-2">
                <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">1/3</div>
                  <div>
                    <span className="text-sm font-bold text-green-800">TP1 = 1R</span>
                    <span className="text-sm text-slate-600"> — Close 1/3 of position. Lock in initial profit.</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700 text-xs font-bold text-white">1/3</div>
                  <div>
                    <span className="text-sm font-bold text-green-800">TP2 = 2R</span>
                    <span className="text-sm text-slate-600"> — Close 1/3. Move SL to breakeven on remaining.</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">1/3</div>
                  <div>
                    <span className="text-sm font-bold text-green-800">TP3 = 3R+</span>
                    <span className="text-sm text-slate-600"> — Trail remaining 1/3 with trailing stop or let it run.</span>
                  </div>
                </div>
              </div>

              {/* SVG: TP Method Visual */}
              <TpMethodVisual />

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <h5 className="mb-1 text-sm font-bold text-slate-800">BTC Example Calculation</h5>
                <p className="text-sm text-slate-700">
                  Entry: $66,000 | SL: $64,800 | R = $1,200<br />
                  TP1: $66,000 + $1,200 = <strong className="text-green-700">$67,200</strong> (close 1/3, profit: $400)<br />
                  TP2: $66,000 + $2,400 = <strong className="text-green-700">$68,400</strong> (close 1/3, profit: $800)<br />
                  TP3: $66,000 + $3,600+ = <strong className="text-green-700">$69,600+</strong> (trail 1/3, profit: $1,200+)<br />
                  <strong className="text-purple-700">Total potential if all hit: $2,400 on $1,200 risk = 2R</strong>
                </p>
              </div>
            </StepCard>

            {/* ─── Step 6: Position Sizing ─── */}
            <StepCard number={6} title="Position Sizing — The 1% Risk Rule" color="#f59e0b">
              <p className="mb-3">
                Position sizing determines <strong>how much</strong> you risk per trade. The 1% rule ensures
                you can survive a losing streak without devastating your account.
              </p>

              <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 mb-3">
                <h5 className="text-sm font-bold text-amber-800 mb-2">The Formula</h5>
                <p className="text-lg font-mono font-bold text-amber-900 text-center">
                  Position Size = (Account × 1%) ÷ (Entry - SL)
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-3">
                  <h5 className="text-sm font-bold text-slate-800 mb-2">Spot Example</h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Account: <strong>$5,000</strong></li>
                    <li>Risk per trade: <strong>$50</strong> (1%)</li>
                    <li>Entry: $66,000 | SL: $64,800</li>
                    <li>Risk per unit: $1,200</li>
                    <li>Position: $50 ÷ $1,200 = <strong className="text-purple-700">0.0417 BTC</strong></li>
                    <li>Position value: <strong>$2,750</strong></li>
                  </ul>
                </div>
                <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-3">
                  <h5 className="text-sm font-bold text-purple-800 mb-2">Futures Example (10× Leverage)</h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Account: <strong>$5,000</strong></li>
                    <li>Risk per trade: <strong>$50</strong> (1%)</li>
                    <li>Entry: $66,000 | SL: $64,800</li>
                    <li>Liquidation distance: ~10% = $6,600</li>
                    <li>With 10× leverage: Same 0.0417 BTC position</li>
                    <li>But margin required: only <strong>$275</strong></li>
                    <li className="text-red-600 font-semibold">⚠️ Risk of liquidation if SL not triggered</li>
                  </ul>
                </div>
              </div>
            </StepCard>

            {/* ─── Step 7: Signal Documentation ─── */}
            <StepCard number={7} title="Signal Documentation" color="#0ea5e9">
              <p className="mb-3">
                If you don&apos;t document your signal, it never happened. Every signal — whether taken or not —
                should be logged for future review and improvement.
              </p>

              <div className="rounded-lg border border-sky-200 bg-sky-50/50 p-4">
                <h5 className="text-sm font-bold text-sky-800 mb-3">Full Signal Log Template</h5>
                <div className="grid gap-2 sm:grid-cols-2 text-sm">
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <span className="font-semibold text-slate-700">Date/Time:</span> <span className="text-slate-500">2024-01-15 14:30 UTC</span>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <span className="font-semibold text-slate-700">Pair:</span> <span className="text-slate-500">BTC/USDT</span>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <span className="font-semibold text-slate-700">Direction:</span> <span className="text-green-600">Long</span>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <span className="font-semibold text-slate-700">Market Regime:</span> <span className="text-slate-500">Weak Uptrend</span>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <span className="font-semibold text-slate-700">Confluence Score:</span> <span className="text-purple-600">75/100</span>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <span className="font-semibold text-slate-700">Entry Zone:</span> <span className="text-slate-500">$65,800–$66,200</span>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <span className="font-semibold text-slate-700">Stop Loss:</span> <span className="text-red-600">$64,800 (structural)</span>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <span className="font-semibold text-slate-700">TP1/2/3:</span> <span className="text-green-600">$67,200 / $68,400 / $69,600+</span>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <span className="font-semibold text-slate-700">Position Size:</span> <span className="text-slate-500">0.0417 BTC</span>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200">
                    <span className="font-semibold text-slate-700">R:R Ratio:</span> <span className="text-slate-500">1:2 minimum</span>
                  </div>
                  <div className="rounded bg-white p-2 border border-slate-200 sm:col-span-2">
                    <span className="font-semibold text-slate-700">Reasoning:</span> <span className="text-slate-500">EMA 20 bounce at daily support, volume confirming, on-chain outflows bullish, F&G at 28 (fear)</span>
                  </div>
                </div>
              </div>
            </StepCard>

            <KeyTakeaway>
              The 7-step process is your safety net. Each step is a gate — if any gate fails, you don&apos;t take the trade.
              Discipline in the process separates professionals from gamblers.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 2: Signal Type Classification & Execution Rules
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-signal-classification"
          title="Signal Type Classification & Execution Rules"
          icon={<Zap className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Not all signals are created equal. A scalp signal has completely different parameters than a swing
              signal. Using the wrong risk management for the signal type is one of the most common beginner mistakes.
            </p>

            <ComparisonTable
              headers={['Signal Type', 'Timeframe', 'Min Confluence', 'Risk per Trade', 'Typical Hold']}
              rows={[
                ['Scalp', '5m–15m', '60/100', '0.5%', 'Minutes to hours'],
                ['Intraday', '1H–4H', '70/100', '0.75%', 'Hours to 1–2 days'],
                ['Swing', '4H–Daily', '80/100', '1.0%', '2 days to 2 weeks'],
                ['Position', 'Daily–Weekly', '85/100', '1.0%', 'Weeks to months'],
              ]}
              highlightColumn={0}
            />

            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-700 sm:text-base">
                <Target className="h-4 w-4" />
                4 Execution Priority Rules
              </h4>

              <div className="space-y-2">
                <div className="flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50/40 p-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">1</span>
                  <p className="text-sm text-slate-700">
                    <strong>Higher timeframe signals take priority.</strong> A daily buy signal overrides a 4H sell signal.
                    Always align with the higher timeframe trend.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50/40 p-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">2</span>
                  <p className="text-sm text-slate-700">
                    <strong>Never downgrade your signal type.</strong> If you planned a swing trade, don&apos;t exit
                    at the first 15m dip. Stick to the plan that justified the entry.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50/40 p-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">3</span>
                  <p className="text-sm text-slate-700">
                    <strong>Confluence minimum increases with signal duration.</strong> Scalp = 60, Intraday = 70,
                    Swing = 80, Position = 85. Longer holds require higher conviction.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50/40 p-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">4</span>
                  <p className="text-sm text-slate-700">
                    <strong>Risk per trade scales inversely with timeframe.</strong> Scalps use 0.5% risk (more trades,
                    less per trade). Swing trades use 1.0% (fewer trades, more per trade).
                  </p>
                </div>
              </div>
            </div>

            <AnalogyBox title="Signal Types Are Like Gears in a Car">
              You don&apos;t drive in first gear on the highway, and you don&apos;t start in fifth gear.
              Each signal type is a different gear — use the right one for the market conditions and your experience level.
              Beginners should start in &quot;swing&quot; gear — it gives you time to think and learn.
            </AnalogyBox>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
