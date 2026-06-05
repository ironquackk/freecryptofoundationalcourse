'use client'

import React from 'react'
import {
  BarChart3,
  Layers,
  Activity,
  AlertTriangle,
  FlaskConical,
  Volume2,
  BookOpen,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { ChecklistItem } from '@/components/academy/checklist-item'

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 1: What Is MACD? — Moving Average Convergence Divergence
   ═══════════════════════════════════════════════════════════════════ */

function TopicWhatIsMACD() {
  return (
    <TopicCard
      id="d3-what-is-macd"
      title="What Is MACD? — Moving Average Convergence Divergence"
      icon={<BarChart3 />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        <strong>MACD</strong> (Moving Average Convergence Divergence) is a trend-following momentum indicator
        that shows the relationship between two exponential moving averages (EMAs) of a security&apos;s price.
      </p>
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        It was created by <strong>Gerald Appel</strong> in the late 1970s and remains one of the most
        widely-used indicators in technical analysis. The default settings are <strong>12, 26, 9</strong>.
      </p>

      {/* Key facts grid */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 text-center">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-600">Creator</p>
          <p className="text-sm font-bold text-amber-800 sm:text-base">Gerald Appel</p>
          <p className="mt-1 text-xs text-amber-700">Late 1970s</p>
        </div>
        <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 text-center">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-600">Scale</p>
          <p className="text-sm font-bold text-blue-800 sm:text-base">12, 26, 9</p>
          <p className="mt-1 text-xs text-blue-700">Default Settings</p>
        </div>
        <div className="rounded-xl border border-purple-200 bg-purple-50/50 p-4 text-center">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-purple-600">Components</p>
          <p className="text-sm font-bold text-purple-800 sm:text-base">3 Outputs</p>
          <p className="mt-1 text-xs text-purple-700">Line + Signal + Histogram</p>
        </div>
      </div>

      {/* What it measures */}
      <div className="mb-6 rounded-lg border-l-4 border-l-blue-500 bg-blue-50 p-4">
        <p className="text-sm font-bold text-blue-800 sm:text-base">What MACD Measures</p>
        <p className="mt-1 text-sm text-blue-900 sm:text-base">
          The <strong>convergence</strong> and <strong>divergence</strong> of two EMAs. When the EMAs move
          closer together, they are converging. When they move apart, they are diverging. This tells you
          whether momentum is strengthening or weakening.
        </p>
      </div>

      {/* Critical distinction */}
      <div className="mb-6 rounded-lg border-2 border-red-200 bg-red-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="text-sm font-bold text-red-800 sm:text-base">Critical Distinction</p>
            <p className="mt-1 text-sm font-semibold text-red-900 sm:text-base">
              MACD measures the GAP between two EMAs — not the price itself.
            </p>
            <p className="mt-1 text-sm text-red-800 sm:text-base">
              When MACD is rising, the gap between the 12-EMA and 26-EMA is widening (momentum increasing).
              When MACD is falling, the gap is narrowing (momentum decreasing).
            </p>
          </div>
        </div>
      </div>

      <AnalogyBox title="MACD is Like a Thermometer">
        A thermometer doesn&apos;t tell you if it&apos;s summer or winter — it tells you the temperature
        right now. MACD doesn&apos;t tell you if the market is bull or bear — it tells you if the market
        temperature (momentum) is rising or falling. When the thermometer is rising, things are heating up.
        When it&apos;s falling, things are cooling down.
      </AnalogyBox>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 2: MACD — The Three Components
   ═══════════════════════════════════════════════════════════════════ */

function TopicMACDComponents() {
  return (
    <TopicCard
      id="d3-macd-components"
      title="MACD — The Three Components"
      icon={<Layers />}
      variant="default"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        MACD has three distinct components. Each one tells you something different about momentum.
        Understanding all three is essential before you use MACD to make trading decisions.
      </p>

      {/* 3 component cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {/* MACD LINE */}
        <div className="rounded-xl border-2 border-blue-300 bg-blue-50/50 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-3 w-8 rounded bg-blue-500" />
            <h4 className="text-sm font-bold text-blue-800 sm:text-base">MACD LINE</h4>
          </div>
          <ul className="space-y-2 text-sm text-blue-900/80 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-blue-500">•</span>
              <span>Calculated: <strong>12-EMA minus 26-EMA</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-blue-500">•</span>
              <span>Positive = <span className="font-bold text-green-600">bullish momentum</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-blue-500">•</span>
              <span>Negative = <span className="font-bold text-red-600">bearish momentum</span></span>
            </li>
          </ul>
          {/* Mini SVG for MACD line */}
          <div className="mt-3">
            <svg viewBox="0 0 160 40" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="20" x2="160" y2="20" stroke="#e2e8f0" strokeWidth="0.5" />
              <polyline
                points="10,30 30,25 50,15 70,10 90,18 110,12 130,8 150,5"
                fill="none" stroke="#3b82f6" strokeWidth="2"
              />
              <text x="130" y="16" fontSize="7" fill="#3b82f6" fontWeight="bold">MACD</text>
            </svg>
          </div>
        </div>

        {/* SIGNAL LINE */}
        <div className="rounded-xl border-2 border-orange-300 bg-orange-50/50 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-3 w-8 rounded bg-orange-500" />
            <h4 className="text-sm font-bold text-orange-800 sm:text-base">SIGNAL LINE</h4>
          </div>
          <ul className="space-y-2 text-sm text-orange-900/80 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-orange-500">•</span>
              <span>9-period <strong>EMA of the MACD line</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-orange-500">•</span>
              <span>Smoothed version of the MACD</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-orange-500">•</span>
              <span>Generates <strong>crossover signals</strong></span>
            </li>
          </ul>
          {/* Mini SVG for Signal line */}
          <div className="mt-3">
            <svg viewBox="0 0 160 40" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="20" x2="160" y2="20" stroke="#e2e8f0" strokeWidth="0.5" />
              <polyline
                points="10,32 30,28 50,20 70,14 90,18 110,14 130,10 150,8"
                fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"
              />
              <polyline
                points="10,34 30,30 50,24 70,18 90,19 110,16 130,12 150,10"
                fill="none" stroke="#f97316" strokeWidth="2"
              />
              <text x="120" y="18" fontSize="7" fill="#f97316" fontWeight="bold">Signal</text>
            </svg>
          </div>
        </div>

        {/* HISTOGRAM */}
        <div className="rounded-xl border-2 border-purple-300 bg-purple-50/50 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-3 w-8 rounded bg-purple-500" />
            <h4 className="text-sm font-bold text-purple-800 sm:text-base">HISTOGRAM</h4>
          </div>
          <ul className="space-y-2 text-sm text-purple-900/80 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-purple-500">•</span>
              <span>MACD line <strong>minus Signal line</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-purple-500">•</span>
              <span>Growing bars = momentum <strong>increasing</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-purple-500">•</span>
              <span>Shrinking bars = momentum <strong>decreasing</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-purple-500">•</span>
              <span>Bar flip = <strong>crossover imminent</strong></span>
            </li>
          </ul>
          {/* Mini SVG for Histogram */}
          <div className="mt-3">
            <svg viewBox="0 0 160 40" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="20" x2="160" y2="20" stroke="#e2e8f0" strokeWidth="0.5" />
              <rect x="15" y="22" width="8" height="6" fill="#22c55e" rx="1" />
              <rect x="35" y="20" width="8" height="8" fill="#22c55e" rx="1" />
              <rect x="55" y="15" width="8" height="13" fill="#22c55e" rx="1" />
              <rect x="75" y="12" width="8" height="16" fill="#22c55e" rx="1" />
              <rect x="95" y="14" width="8" height="14" fill="#22c55e" rx="1" />
              <rect x="115" y="18" width="8" height="10" fill="#22c55e" rx="1" />
              <rect x="135" y="21" width="8" height="7" fill="#ef4444" rx="1" />
              <text x="115" y="10" fontSize="7" fill="#8b5cf6" fontWeight="bold">Histogram</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Full MACD Panel SVG */}
      <div className="mb-4">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: Complete MACD Panel
        </h4>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <svg viewBox="0 0 500 320" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Price chart area */}
            <text x="10" y="16" fontSize="10" fill="#64748b" fontWeight="bold">PRICE CHART</text>
            <line x1="0" y1="30" x2="500" y2="30" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="70" x2="500" y2="70" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="110" x2="500" y2="110" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="150" x2="500" y2="150" stroke="#e2e8f0" strokeWidth="0.5" />

            {/* Price line */}
            <polyline
              points="20,130 60,120 100,100 140,110 180,80 220,60 260,70 300,55 340,40 380,50 420,35 460,25"
              fill="none" stroke="#1e293b" strokeWidth="2"
            />

            {/* 12 EMA (close to price) */}
            <polyline
              points="20,132 60,125 100,108 140,112 180,90 220,72 260,74 300,62 340,48 380,52 420,40 460,32"
              fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,3" opacity="0.5"
            />

            {/* 26 EMA (slower) */}
            <polyline
              points="20,138 60,132 100,118 140,118 180,102 220,88 260,84 300,76 340,64 380,62 420,52 460,44"
              fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,3" opacity="0.3"
            />

            {/* Separator */}
            <line x1="0" y1="165" x2="500" y2="165" stroke="#94a3b8" strokeWidth="1" />
            <text x="10" y="182" fontSize="10" fill="#64748b" fontWeight="bold">MACD (12,26,9)</text>

            {/* Zero line */}
            <line x1="0" y1="240" x2="500" y2="240" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,2" />
            <text x="470" y="244" fontSize="8" fill="#94a3b8">Zero</text>

            {/* Histogram bars */}
            {/* Negative bars */}
            <rect x="18" y="240" width="14" height="8" fill="#ef4444" rx="1" opacity="0.7" />
            <rect x="38" y="240" width="14" height="5" fill="#ef4444" rx="1" opacity="0.7" />
            {/* Positive bars - growing */}
            <rect x="58" y="236" width="14" height="4" fill="#22c55e" rx="1" opacity="0.7" />
            <rect x="78" y="232" width="14" height="8" fill="#22c55e" rx="1" opacity="0.7" />
            <rect x="98" y="224" width="14" height="16" fill="#22c55e" rx="1" opacity="0.8" />
            {/* Peak */}
            <rect x="118" y="220" width="14" height="20" fill="#22c55e" rx="1" opacity="0.8" />
            <rect x="138" y="222" width="14" height="18" fill="#22c55e" rx="1" opacity="0.8" />
            <rect x="158" y="218" width="14" height="22" fill="#22c55e" rx="1" opacity="0.9" />
            <rect x="178" y="212" width="14" height="28" fill="#22c55e" rx="1" opacity="0.9" />
            {/* Shrinking */}
            <rect x="198" y="216" width="14" height="24" fill="#22c55e" rx="1" opacity="0.8" />
            <rect x="218" y="220" width="14" height="20" fill="#22c55e" rx="1" opacity="0.7" />
            <rect x="238" y="224" width="14" height="16" fill="#22c55e" rx="1" opacity="0.7" />
            <rect x="258" y="228" width="14" height="12" fill="#22c55e" rx="1" opacity="0.6" />
            <rect x="278" y="234" width="14" height="6" fill="#22c55e" rx="1" opacity="0.5" />
            {/* Cross to negative */}
            <rect x="298" y="240" width="14" height="4" fill="#ef4444" rx="1" opacity="0.5" />
            <rect x="318" y="240" width="14" height="10" fill="#ef4444" rx="1" opacity="0.6" />
            <rect x="338" y="240" width="14" height="16" fill="#ef4444" rx="1" opacity="0.7" />
            <rect x="358" y="240" width="14" height="12" fill="#ef4444" rx="1" opacity="0.6" />
            {/* Recovery */}
            <rect x="378" y="240" width="14" height="6" fill="#ef4444" rx="1" opacity="0.5" />
            <rect x="398" y="236" width="14" height="4" fill="#22c55e" rx="1" opacity="0.5" />
            <rect x="418" y="228" width="14" height="12" fill="#22c55e" rx="1" opacity="0.7" />
            <rect x="438" y="222" width="14" height="18" fill="#22c55e" rx="1" opacity="0.8" />

            {/* MACD Line (blue) */}
            <polyline
              points="25,248 45,245 65,238 85,232 105,222 125,218 145,220 165,216 185,210 205,214 225,218 245,224 265,230 285,236 305,242 325,250 345,256 365,252 385,246 405,238 425,228 445,220"
              fill="none" stroke="#3b82f6" strokeWidth="2.5"
            />

            {/* Signal Line (orange) */}
            <polyline
              points="25,246 45,244 65,240 85,236 105,230 125,226 145,224 165,222 185,218 205,218 225,220 245,224 265,228 285,234 305,240 325,246 345,252 365,254 385,250 405,244 425,236 445,228"
              fill="none" stroke="#f97316" strokeWidth="2"
            />

            {/* Labels */}
            <circle cx="475" cy="215" r="4" fill="#3b82f6" />
            <text x="480" y="218" fontSize="9" fill="#3b82f6" fontWeight="bold">MACD</text>
            <circle cx="475" cy="230" r="4" fill="#f97316" />
            <text x="480" y="233" fontSize="9" fill="#f97316" fontWeight="bold">Signal</text>
            <rect x="472" y="244" width="8" height="8" fill="#22c55e" rx="1" opacity="0.7" />
            <text x="480" y="252" fontSize="9" fill="#16a34a" fontWeight="bold">Histogram</text>

            {/* Crossover markers */}
            <circle cx="165" cy="218" r="5" fill="none" stroke="#16a34a" strokeWidth="2" />
            <text x="148" y="208" fontSize="8" fill="#16a34a" fontWeight="bold">Bullish Cross</text>

            <circle cx="305" cy="242" r="5" fill="none" stroke="#dc2626" strokeWidth="2" />
            <text x="310" y="256" fontSize="8" fill="#dc2626" fontWeight="bold">Bearish Cross</text>
          </svg>
        </div>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
          Complete MACD panel: Price chart (top) + MACD with histogram (bottom)
        </p>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 3: MACD — Reading the Signals
   ═══════════════════════════════════════════════════════════════════ */

function TopicMACDSignals() {
  const headers = ['Signal', 'What to Look For', 'Meaning', 'How to Use']

  const rows = [
    [
      'Bullish Crossover',
      'MACD crosses ABOVE Signal',
      'Upward momentum building',
      'Potential buy — more reliable below zero'
    ],
    [
      'Bearish Crossover',
      'MACD crosses BELOW Signal',
      'Downward momentum building',
      'Potential sell — more reliable above zero'
    ],
    [
      'Zero Line Cross Up',
      'MACD crosses above zero',
      '12-EMA now above 26-EMA',
      'Confirms bullish trend (lagging)'
    ],
    [
      'Zero Line Cross Down',
      'MACD crosses below zero',
      '12-EMA now below 26-EMA',
      'Confirms bearish trend (lagging)'
    ],
    [
      'Histogram Growing (+)',
      'Green bars getting taller',
      'Bullish momentum strengthening',
      'Hold longs or look for entries'
    ],
    [
      'Histogram Growing (-)',
      'Red bars getting taller',
      'Bearish momentum strengthening',
      'Hold shorts or look for shorts'
    ],
    [
      'Histogram Shrinking',
      'Bars getting shorter',
      'Momentum fading',
      'Prepare for change — tighten stops'
    ],
  ]

  return (
    <TopicCard
      id="d3-macd-signals"
      title="MACD — Reading the Signals"
      icon={<Activity />}
      variant="default"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        MACD generates several types of signals. Here is the complete reference for every signal MACD
        produces and how to interpret each one.
      </p>

      <ComparisonTable headers={headers} rows={rows} />

      <div className="mt-6 rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800 sm:text-base">Signal Reliability Tip</p>
            <p className="mt-1 text-sm text-amber-900 sm:text-base">
              Bullish crossovers <strong>below the zero line</strong> are stronger signals because they
              represent potential reversals. Crossovers above zero are trend continuations with smaller
              expected moves. The opposite applies for bearish crossovers.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 4: MACD — Advanced Nuances
   ═══════════════════════════════════════════════════════════════════ */

function TopicMACDNuances() {
  return (
    <TopicCard
      id="d3-macd-nuances"
      title="MACD — Advanced Nuances"
      icon={<AlertTriangle />}
      variant="highlight"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        MACD is powerful, but it has limitations. Understanding these nuances separates beginners who
        blindly follow crossovers from skilled traders who know when to trust the signal and when to
        ignore it.
      </p>

      <div className="space-y-4">
        {/* Nuance 1: LAGGING */}
        <div className="rounded-xl border-l-4 border-l-amber-500 bg-amber-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">1</span>
            <h4 className="text-sm font-bold text-amber-800 sm:text-base">MACD is LAGGING</h4>
          </div>
          <p className="mb-2 text-sm text-slate-700 sm:text-base">
            By the time a crossover happens, price has <strong>already moved significantly</strong>.
            MACD is derived from moving averages — which are inherently backward-looking.
          </p>
          <div className="rounded-lg bg-white border border-amber-200 p-3">
            <p className="text-sm font-semibold text-amber-800">
              Fix: Always combine MACD with S/R and market structure. Never use it in isolation.
            </p>
          </div>
        </div>

        {/* Nuance 2: FALSE SIGNALS */}
        <div className="rounded-xl border-l-4 border-l-red-500 bg-red-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">2</span>
            <h4 className="text-sm font-bold text-red-800 sm:text-base">False Signals in Ranging Markets</h4>
          </div>
          <p className="mb-2 text-sm text-slate-700 sm:text-base">
            Choppy, sideways markets produce <strong>whipsaw buy-sell-buy signals</strong> that will chop
            your account to pieces. MACD assumes trending conditions.
          </p>
          <div className="rounded-lg bg-white border border-red-200 p-3">
            <p className="text-sm font-semibold text-red-800">
              Fix: Only trust MACD signals that align with market structure. If price is ranging, ignore MACD entirely.
            </p>
          </div>
        </div>

        {/* Nuance 3: ZERO LINE CONTEXT */}
        <div className="rounded-xl border-l-4 border-l-blue-500 bg-blue-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">3</span>
            <h4 className="text-sm font-bold text-blue-800 sm:text-base">Zero Line Provides Context</h4>
          </div>
          <p className="mb-2 text-sm text-slate-700 sm:text-base">
            Not all crossovers are equal. Context matters:
          </p>
          <ul className="mb-2 space-y-1 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-green-600 font-bold">+</span>
              <span>Bullish crossover <strong>below zero</strong> = stronger reversal potential (oversold bounce)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-amber-600 font-bold">+</span>
              <span>Bullish crossover <strong>above zero</strong> = trend continuation, smaller expected move</span>
            </li>
          </ul>
          <div className="rounded-lg bg-white border border-blue-200 p-3">
            <p className="text-sm font-semibold text-blue-800">
              Fix: Always check where the crossover happens relative to zero. Same crossover, different context = different trade.
            </p>
          </div>
        </div>

        {/* Nuance 4: MACD DIVERGENCE */}
        <div className="rounded-xl border-l-4 border-l-purple-500 bg-purple-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">4</span>
            <h4 className="text-sm font-bold text-purple-800 sm:text-base">MACD Divergence Exists Too</h4>
          </div>
          <p className="mb-2 text-sm text-slate-700 sm:text-base">
            Like RSI, MACD can show divergence with price — a powerful warning signal:
          </p>
          <ul className="mb-2 space-y-1 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-red-600 font-bold">-</span>
              <span>Price higher highs + MACD lower highs = <strong className="text-red-600">bearish divergence</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-green-600 font-bold">+</span>
              <span>Price lower lows + MACD higher lows = <strong className="text-green-600">bullish divergence</strong></span>
            </li>
          </ul>
          <div className="rounded-lg bg-white border border-purple-200 p-3">
            <p className="text-sm font-semibold text-purple-800">
              Note: MACD divergence is less common than RSI divergence but provides additional confirmation when both appear together.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 5: Practice — MACD Setup and Analysis
   ═══════════════════════════════════════════════════════════════════ */

function TopicPracticeMACD() {
  return (
    <TopicCard
      id="d3-practice-macd"
      title="Practice — MACD Setup and Analysis"
      icon={<FlaskConical />}
      variant="default"
    >
      <div className="mb-4 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="h-5 w-5 text-amber-600" />
          <h4 className="text-sm font-bold uppercase tracking-wide text-amber-700 sm:text-base">Practice Lab</h4>
        </div>
        <p className="mb-4 text-sm text-slate-600 sm:text-base">
          Open <strong>TradingView</strong> → Load <strong>BTC/USDT Daily</strong> → Complete these tasks:
        </p>
        <div className="space-y-1">
          <ChecklistItem>
            Add MACD (12, 26, 9) to BTC/USDT daily chart
          </ChecklistItem>
          <ChecklistItem>
            Where is MACD relative to Signal? (Above = bullish, Below = bearish)
          </ChecklistItem>
          <ChecklistItem>
            Is MACD above or below zero? What does this say about medium-term trend?
          </ChecklistItem>
          <ChecklistItem>
            What is the histogram doing? Growing, shrinking? Which direction?
          </ChecklistItem>
          <ChecklistItem>
            Find last 3 bullish crossovers — did price go up? How soon? How much?
          </ChecklistItem>
          <ChecklistItem>
            Find last 3 bearish crossovers — did price go down? How soon? How much?
          </ChecklistItem>
          <ChecklistItem>
            Find a FALSE signal crossover — what was the market structure at the time?
          </ChecklistItem>
          <ChecklistItem>
            Write: &quot;MACD crossovers work best when ___ and fail when ___&quot;
          </ChecklistItem>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 6: What Is Volume? — The Truth Teller
   ═══════════════════════════════════════════════════════════════════ */

function TopicWhatIsVolume() {
  return (
    <TopicCard
      id="d3-what-is-volume"
      title="What Is Volume? — The Truth Teller"
      icon={<Volume2 />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        <strong>Volume</strong> is the total number of units (coins, tokens, or contracts) traded during
        a given period. It appears as bars at the bottom of your chart — green bars for up candles,
        red bars for down candles.
      </p>

      {/* What volume measures */}
      <div className="mb-6 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
        <p className="text-sm font-bold text-green-800 sm:text-base">What Volume Measures</p>
        <p className="mt-1 text-sm text-green-900 sm:text-base">
          <strong>PARTICIPATION</strong> and <strong>CONVICTION</strong>. Volume tells you how many
          market participants are actively trading and how strongly they believe in the current price move.
        </p>
      </div>

      {/* Key principle */}
      <div className="mb-6 rounded-lg border-2 border-amber-300 bg-amber-50 p-4">
        <p className="text-sm font-bold text-amber-800 sm:text-base">The Key Principle</p>
        <p className="mt-2 text-base font-semibold text-amber-900 sm:text-lg">
          &quot;Price tells you <span className="text-blue-600">WHAT</span> happened.
          Volume tells you <span className="text-green-600">HOW MUCH</span> people believed in it.&quot;
        </p>
      </div>

      {/* SVG: Side-by-side volume comparison */}
      <div className="mb-4">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: Volume Confirms or Questions the Move
        </h4>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* LEFT: Real move with increasing volume */}
          <div>
            <div className="rounded-xl border-2 border-green-200 bg-green-50/30 p-3">
              <p className="mb-2 text-center text-xs font-bold text-green-700 uppercase tracking-wide">Real Move — Increasing Volume</p>
              <svg viewBox="0 0 220 180" className="w-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <rect x="0" y="0" width="220" height="180" fill="#f0fdf4" rx="8" />

                {/* Grid lines */}
                <line x1="20" y1="30" x2="200" y2="30" stroke="#d1fae5" strokeWidth="0.5" />
                <line x1="20" y1="60" x2="200" y2="60" stroke="#d1fae5" strokeWidth="0.5" />
                <line x1="20" y1="90" x2="200" y2="90" stroke="#d1fae5" strokeWidth="0.5" />

                {/* Price line going up */}
                <polyline
                  points="25,100 55,90 85,72 115,58 145,42 175,30"
                  fill="none" stroke="#16a34a" strokeWidth="2.5"
                />
                <text x="180" y="28" fontSize="8" fill="#16a34a" fontWeight="bold">Price</text>

                {/* Volume bars — increasing */}
                <line x1="20" y1="145" x2="200" y2="145" stroke="#d1fae5" strokeWidth="0.5" />
                <rect x="20" y="138" width="18" height="7" fill="#22c55e" rx="1" opacity="0.6" />
                <rect x="50" y="133" width="18" height="12" fill="#22c55e" rx="1" opacity="0.7" />
                <rect x="80" y="126" width="18" height="19" fill="#22c55e" rx="1" opacity="0.8" />
                <rect x="110" y="118" width="18" height="27" fill="#22c55e" rx="1" opacity="0.85" />
                <rect x="140" y="108" width="18" height="37" fill="#22c55e" rx="1" opacity="0.9" />
                <rect x="170" y="96" width="18" height="49" fill="#22c55e" rx="1" opacity="0.95" />

                <text x="110" y="170" fontSize="9" fill="#16a34a" fontWeight="bold" textAnchor="middle">CONFIRMED</text>
              </svg>
            </div>
          </div>

          {/* RIGHT: Suspicious move with declining volume */}
          <div>
            <div className="rounded-xl border-2 border-red-200 bg-red-50/30 p-3">
              <p className="mb-2 text-center text-xs font-bold text-red-700 uppercase tracking-wide">Suspicious Move — Declining Volume</p>
              <svg viewBox="0 0 220 180" className="w-full" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <rect x="0" y="0" width="220" height="180" fill="#fef2f2" rx="8" />

                {/* Grid lines */}
                <line x1="20" y1="30" x2="200" y2="30" stroke="#fecaca" strokeWidth="0.5" />
                <line x1="20" y1="60" x2="200" y2="60" stroke="#fecaca" strokeWidth="0.5" />
                <line x1="20" y1="90" x2="200" y2="90" stroke="#fecaca" strokeWidth="0.5" />

                {/* Price line going up (similar to left) */}
                <polyline
                  points="25,100 55,90 85,72 115,58 145,42 175,30"
                  fill="none" stroke="#dc2626" strokeWidth="2.5"
                />
                <text x="180" y="28" fontSize="8" fill="#dc2626" fontWeight="bold">Price</text>

                {/* Volume bars — decreasing */}
                <line x1="20" y1="145" x2="200" y2="145" stroke="#fecaca" strokeWidth="0.5" />
                <rect x="20" y="96" width="18" height="49" fill="#ef4444" rx="1" opacity="0.95" />
                <rect x="50" y="108" width="18" height="37" fill="#ef4444" rx="1" opacity="0.9" />
                <rect x="80" y="118" width="18" height="27" fill="#ef4444" rx="1" opacity="0.85" />
                <rect x="110" y="126" width="18" height="19" fill="#ef4444" rx="1" opacity="0.8" />
                <rect x="140" y="133" width="18" height="12" fill="#ef4444" rx="1" opacity="0.7" />
                <rect x="170" y="138" width="18" height="7" fill="#ef4444" rx="1" opacity="0.6" />

                <text x="110" y="170" fontSize="9" fill="#dc2626" fontWeight="bold" textAnchor="middle">SUSPICIOUS</text>
              </svg>
            </div>
          </div>
        </div>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
          Same price move, different volume — volume reveals the truth behind the move
        </p>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 7: Volume — The 6 Rules Every Trader Must Know
   ═══════════════════════════════════════════════════════════════════ */

function TopicVolumeRules() {
  return (
    <TopicCard
      id="d3-volume-rules"
      title="Volume — The 6 Rules Every Trader Must Know"
      icon={<BookOpen />}
      variant="default"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        These six rules form the foundation of volume analysis. Memorize them. They apply to every
        market, every timeframe, every asset class.
      </p>

      {/* 6 Rule cards in 2-column grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {/* Rule 1 */}
        <div className="rounded-xl border-l-4 border-l-green-500 bg-green-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">1</span>
            <h4 className="text-sm font-bold text-green-800 sm:text-base">VOLUME CONFIRMS TREND</h4>
          </div>
          <p className="text-sm text-green-900 sm:text-base">
            In a healthy trend, volume <strong>increases on trend-direction days</strong> and decreases on
            counter-trend days. Uptrend with rising volume on green candles? Confirmed.
          </p>
        </div>

        {/* Rule 2 */}
        <div className="rounded-xl border-l-4 border-l-amber-500 bg-amber-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">2</span>
            <h4 className="text-sm font-bold text-amber-800 sm:text-base">VOLUME CONFIRMS BREAKOUTS</h4>
          </div>
          <p className="text-sm text-amber-900 sm:text-base">
            Breakout with <strong>high volume</strong> = real breakout. Breakout with low volume = fakeout.
            Volume is the lie detector for breakouts.
          </p>
        </div>

        {/* Rule 3 */}
        <div className="rounded-xl border-l-4 border-l-red-500 bg-red-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">3</span>
            <h4 className="text-sm font-bold text-red-800 sm:text-base">VOLUME DIVERGENCE SIGNALS EXHAUSTION</h4>
          </div>
          <p className="text-sm text-red-900 sm:text-base">
            Price making new highs on <strong>declining volume</strong> = caution. The move lacks conviction.
            Fewer participants are driving the price — exhaustion is near.
          </p>
        </div>

        {/* Rule 4 */}
        <div className="rounded-xl border-l-4 border-l-purple-500 bg-purple-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">4</span>
            <h4 className="text-sm font-bold text-purple-800 sm:text-base">VOLUME SPIKES SIGNAL SIGNIFICANT EVENTS</h4>
          </div>
          <p className="text-sm text-purple-900 sm:text-base">
            Volume 2-3x the average signals <strong>institutional activity</strong>. Something big is
            happening. Pay attention — smart money is making a move.
          </p>
        </div>

        {/* Rule 5 */}
        <div className="rounded-xl border-l-4 border-l-blue-500 bg-blue-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">5</span>
            <h4 className="text-sm font-bold text-blue-800 sm:text-base">HIGH VOLUME AT KEY LEVELS = STRONG LEVEL</h4>
          </div>
          <p className="text-sm text-blue-900 sm:text-base">
            A support or resistance level with <strong>high volume</strong> is stronger than one with low
            volume. Heavy volume = many participants care about that price.
          </p>
        </div>

        {/* Rule 6 */}
        <div className="rounded-xl border-l-4 border-l-teal-500 bg-teal-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">6</span>
            <h4 className="text-sm font-bold text-teal-800 sm:text-base">VOLUME PRECEDES PRICE</h4>
          </div>
          <p className="text-sm text-teal-900 sm:text-base">
            Volume often <strong>increases before major moves</strong>. If you see volume rising while price
            is still consolidating, a big move may be coming soon.
          </p>
        </div>
      </div>

      {/* 4 Practical Examples */}
      <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
        4 Practical Volume Examples
      </h4>

      <div className="space-y-4">
        {/* Example 1: Real Breakout */}
        <div>
          <div className="rounded-xl border border-green-200 bg-green-50/20 p-3">
            <p className="mb-2 text-xs font-bold text-green-700 uppercase tracking-wide">Example 1: Real Breakout</p>
            <svg viewBox="0 0 400 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="400" height="160" fill="#f8fafc" rx="6" />
              {/* Resistance line */}
              <line x1="20" y1="60" x2="400" y2="60" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6,3" />
              <text x="345" y="56" fontSize="8" fill="#ef4444" fontWeight="bold">Resistance</text>

              {/* Price bouncing then breaking out */}
              <polyline
                points="20,90 50,70 80,85 110,65 140,78 170,62 200,55 230,40 260,30 290,25 320,20 350,22 380,18"
                fill="none" stroke="#1e293b" strokeWidth="2"
              />

              {/* Breakout zone highlight */}
              <rect x="195" y="55" width="40" height="10" fill="#22c55e" opacity="0.2" rx="2" />

              {/* Volume bars */}
              <line x1="20" y1="130" x2="380" y2="130" stroke="#e2e8f0" strokeWidth="0.5" />
              <rect x="18" y="122" width="16" height="8" fill="#ef4444" rx="1" opacity="0.5" />
              <rect x="48" y="118" width="16" height="12" fill="#22c55e" rx="1" opacity="0.5" />
              <rect x="78" y="124" width="16" height="6" fill="#ef4444" rx="1" opacity="0.5" />
              <rect x="108" y="120" width="16" height="10" fill="#22c55e" rx="1" opacity="0.6" />
              <rect x="138" y="122" width="16" height="8" fill="#ef4444" rx="1" opacity="0.5" />
              <rect x="168" y="116" width="16" height="14" fill="#22c55e" rx="1" opacity="0.7" />
              {/* TALL breakout volume bar */}
              <rect x="198" y="95" width="16" height="35" fill="#22c55e" rx="1" opacity="0.95" />
              <rect x="228" y="100" width="16" height="30" fill="#22c55e" rx="1" opacity="0.9" />
              <rect x="258" y="108" width="16" height="22" fill="#22c55e" rx="1" opacity="0.8" />
              <rect x="288" y="114" width="16" height="16" fill="#22c55e" rx="1" opacity="0.7" />
              <rect x="318" y="118" width="16" height="12" fill="#22c55e" rx="1" opacity="0.6" />
              <rect x="348" y="120" width="16" height="10" fill="#22c55e" rx="1" opacity="0.5" />

              <text x="210" y="90" fontSize="8" fill="#16a34a" fontWeight="bold">Tall volume = REAL breakout</text>
            </svg>
          </div>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
            Resistance broken on high volume — confirmed breakout
          </p>
        </div>

        {/* Example 2: Fakeout */}
        <div>
          <div className="rounded-xl border border-red-200 bg-red-50/20 p-3">
            <p className="mb-2 text-xs font-bold text-red-700 uppercase tracking-wide">Example 2: Fakeout</p>
            <svg viewBox="0 0 400 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="400" height="160" fill="#f8fafc" rx="6" />
              {/* Resistance line */}
              <line x1="20" y1="60" x2="400" y2="60" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6,3" />
              <text x="345" y="56" fontSize="8" fill="#ef4444" fontWeight="bold">Resistance</text>

              {/* Price poking above then falling back */}
              <polyline
                points="20,85 50,70 80,82 110,68 140,75 170,58 200,55 230,70 260,85 290,95 320,105 350,115 380,120"
                fill="none" stroke="#1e293b" strokeWidth="2"
              />

              {/* Fakeout zone */}
              <circle cx="185" cy="58" r="8" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,2" />

              {/* Volume bars */}
              <line x1="20" y1="130" x2="380" y2="130" stroke="#e2e8f0" strokeWidth="0.5" />
              <rect x="18" y="122" width="16" height="8" fill="#ef4444" rx="1" opacity="0.5" />
              <rect x="48" y="118" width="16" height="12" fill="#22c55e" rx="1" opacity="0.5" />
              <rect x="78" y="124" width="16" height="6" fill="#ef4444" rx="1" opacity="0.5" />
              <rect x="108" y="120" width="16" height="10" fill="#22c55e" rx="1" opacity="0.6" />
              <rect x="138" y="122" width="16" height="8" fill="#ef4444" rx="1" opacity="0.5" />
              {/* Short volume bar on "breakout" */}
              <rect x="168" y="126" width="16" height="4" fill="#22c55e" rx="1" opacity="0.5" />
              <rect x="198" y="125" width="16" height="5" fill="#22c55e" rx="1" opacity="0.5" />
              <rect x="228" y="122" width="16" height="8" fill="#ef4444" rx="1" opacity="0.6" />
              <rect x="258" y="118" width="16" height="12" fill="#ef4444" rx="1" opacity="0.7" />
              <rect x="288" y="114" width="16" height="16" fill="#ef4444" rx="1" opacity="0.8" />
              <rect x="318" y="110" width="16" height="20" fill="#ef4444" rx="1" opacity="0.9" />
              <rect x="348" y="106" width="16" height="24" fill="#ef4444" rx="1" opacity="0.9" />

              <text x="170" y="120" fontSize="8" fill="#dc2626" fontWeight="bold">Short volume = FAKEOUT</text>
            </svg>
          </div>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
            Small candle pokes above resistance on low volume, then falls back
          </p>
        </div>

        {/* Example 3: Volume Divergence at Top */}
        <div>
          <div className="rounded-xl border border-amber-200 bg-amber-50/20 p-3">
            <p className="mb-2 text-xs font-bold text-amber-700 uppercase tracking-wide">Example 3: Volume Divergence at Top</p>
            <svg viewBox="0 0 400 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="400" height="160" fill="#f8fafc" rx="6" />

              {/* Price making 3 higher peaks */}
              <polyline
                points="20,110 50,85 70,95 100,65 120,80 150,48 170,60 200,35 220,50 250,30 270,45 300,55 330,75 360,95 385,110"
                fill="none" stroke="#1e293b" strokeWidth="2"
              />

              {/* Peak labels */}
              <text x="95" y="58" fontSize="7" fill="#d97706" fontWeight="bold">Peak 1</text>
              <text x="145" y="42" fontSize="7" fill="#d97706" fontWeight="bold">Peak 2</text>
              <text x="248" y="24" fontSize="7" fill="#d97706" fontWeight="bold">Peak 3</text>

              {/* Trend line through peaks */}
              <line x1="100" y1="65" x2="250" y2="30" stroke="#d97706" strokeWidth="1" strokeDasharray="4,3" />
              <text x="260" y="38" fontSize="7" fill="#d97706">Higher highs</text>

              {/* Volume bars — declining */}
              <line x1="20" y1="130" x2="385" y2="130" stroke="#e2e8f0" strokeWidth="0.5" />
              <rect x="18" y="108" width="16" height="22" fill="#22c55e" rx="1" opacity="0.7" />
              <rect x="48" y="100" width="16" height="30" fill="#22c55e" rx="1" opacity="0.8" />
              <rect x="68" y="110" width="16" height="20" fill="#ef4444" rx="1" opacity="0.7" />
              <rect x="98" y="95" width="16" height="35" fill="#22c55e" rx="1" opacity="0.9" />
              <rect x="118" y="108" width="16" height="22" fill="#ef4444" rx="1" opacity="0.7" />
              <rect x="148" y="102" width="16" height="28" fill="#22c55e" rx="1" opacity="0.8" />
              <rect x="168" y="110" width="16" height="20" fill="#ef4444" rx="1" opacity="0.7" />
              <rect x="198" y="108" width="16" height="22" fill="#22c55e" rx="1" opacity="0.7" />
              <rect x="218" y="114" width="16" height="16" fill="#ef4444" rx="1" opacity="0.6" />
              <rect x="248" y="112" width="16" height="18" fill="#22c55e" rx="1" opacity="0.6" />
              <rect x="268" y="116" width="16" height="14" fill="#ef4444" rx="1" opacity="0.5" />
              <rect x="298" y="118" width="16" height="12" fill="#ef4444" rx="1" opacity="0.5" />
              <rect x="328" y="114" width="16" height="16" fill="#ef4444" rx="1" opacity="0.7" />
              <rect x="358" y="108" width="16" height="22" fill="#ef4444" rx="1" opacity="0.9" />
              <rect x="383" y="106" width="16" height="24" fill="#ef4444" rx="1" opacity="0.9" />

              {/* Declining volume arrow */}
              <line x1="110" y1="92" x2="255" y2="105" stroke="#d97706" strokeWidth="1.5" />
              <text x="140" y="88" fontSize="7" fill="#d97706" fontWeight="bold">Lower volume at each peak</text>
            </svg>
          </div>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
            3 higher price peaks with 3 lower volume peaks — exhaustion warning
          </p>
        </div>

        {/* Example 4: Capitulation Volume */}
        <div>
          <div className="rounded-xl border border-purple-200 bg-purple-50/20 p-3">
            <p className="mb-2 text-xs font-bold text-purple-700 uppercase tracking-wide">Example 4: Capitulation Volume</p>
            <svg viewBox="0 0 400 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="400" height="160" fill="#f8fafc" rx="6" />

              {/* Price declining sharply then reversing */}
              <polyline
                points="20,30 50,40 80,48 110,55 140,65 170,78 195,95 210,120 225,130 240,115 270,95 300,72 330,55 360,42 385,35"
                fill="none" stroke="#1e293b" strokeWidth="2"
              />

              {/* Capitulation zone */}
              <rect x="195" y="100" width="45" height="35" fill="#ef4444" opacity="0.1" rx="4" />
              <text x="218" y="145" fontSize="7" fill="#dc2626" fontWeight="bold" textAnchor="middle">Capitulation</text>

              {/* Volume bars */}
              <line x1="20" y1="130" x2="385" y2="130" stroke="#e2e8f0" strokeWidth="0.5" />
              <rect x="18" y="122" width="16" height="8" fill="#ef4444" rx="1" opacity="0.5" />
              <rect x="48" y="120" width="16" height="10" fill="#ef4444" rx="1" opacity="0.5" />
              <rect x="78" y="118" width="16" height="12" fill="#ef4444" rx="1" opacity="0.6" />
              <rect x="108" y="115" width="16" height="15" fill="#ef4444" rx="1" opacity="0.6" />
              <rect x="138" y="112" width="16" height="18" fill="#ef4444" rx="1" opacity="0.7" />
              <rect x="168" y="106" width="16" height="24" fill="#ef4444" rx="1" opacity="0.8" />
              {/* MASSIVE capitulation volume bar */}
              <rect x="193" y="70" width="18" height="60" fill="#ef4444" rx="1" opacity="0.95" />
              <rect x="218" y="100" width="16" height="30" fill="#22c55e" rx="1" opacity="0.7" />
              <rect x="248" y="110" width="16" height="20" fill="#22c55e" rx="1" opacity="0.6" />
              <rect x="278" y="116" width="16" height="14" fill="#22c55e" rx="1" opacity="0.6" />
              <rect x="308" y="120" width="16" height="10" fill="#22c55e" rx="1" opacity="0.5" />
              <rect x="338" y="122" width="16" height="8" fill="#22c55e" rx="1" opacity="0.5" />
              <rect x="368" y="124" width="16" height="6" fill="#22c55e" rx="1" opacity="0.5" />

              <text x="202" y="66" fontSize="8" fill="#dc2626" fontWeight="bold">Tallest bar</text>
              <text x="240" y="90" fontSize="8" fill="#16a34a" fontWeight="bold">Reversal</text>
            </svg>
          </div>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
            Massive red candle with highest volume bar, then price reverses — capitulation
          </p>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 8: Practice — Volume Analysis
   ═══════════════════════════════════════════════════════════════════ */

function TopicPracticeVolume() {
  return (
    <TopicCard
      id="d3-practice-volume"
      title="Practice — Volume Analysis"
      icon={<FlaskConical />}
      variant="default"
    >
      <div className="mb-4 rounded-xl border-2 border-dashed border-teal-400 bg-teal-50/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="h-5 w-5 text-teal-600" />
          <h4 className="text-sm font-bold uppercase tracking-wide text-teal-700 sm:text-base">Practice Lab</h4>
        </div>
        <p className="mb-4 text-sm text-slate-600 sm:text-base">
          Open <strong>TradingView</strong> → Load <strong>BTC/USDT Daily</strong> → Complete these tasks:
        </p>
        <div className="space-y-1">
          <ChecklistItem>
            Check current volume trend — is it increasing, decreasing, or average compared to the 30-day average?
          </ChecklistItem>
          <ChecklistItem>
            Find 3 breakouts above resistance — was volume high or low? What happened after?
          </ChecklistItem>
          <ChecklistItem>
            Find 3 breakdowns below support — same volume analysis
          </ChecklistItem>
          <ChecklistItem>
            Find 2 volume divergences (new highs on declining volume) — what happened next?
          </ChecklistItem>
          <ChecklistItem>
            Find a volume spike (2x+ average) — what caused it? What happened to price?
          </ChecklistItem>
          <ChecklistItem>
            Find capitulation volume (massive volume at bottom) — did price reverse?
          </ChecklistItem>
          <ChecklistItem>
            Write: &quot;Volume is important because ___&quot;
          </ChecklistItem>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT: Day 3 Afternoon Block
   ═══════════════════════════════════════════════════════════════════ */

export function Day3AfternoonBlock() {
  return (
    <section id="d3-afternoon" aria-labelledby="d3-afternoon-heading">
      <SectionDivider title="AFTERNOON BLOCK — HOURS 5–6: MACD & VOLUME" />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicWhatIsMACD />
        <TopicMACDComponents />
        <TopicMACDSignals />
        <TopicMACDNuances />
        <TopicPracticeMACD />
        <TopicWhatIsVolume />
        <TopicVolumeRules />
        <TopicPracticeVolume />
      </div>
    </section>
  )
}
