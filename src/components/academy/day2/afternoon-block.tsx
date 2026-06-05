'use client'

import React from 'react'
import {
  TrendingUp,
  TrendingDown,
  Compass,
  BarChart3,
  Target,
  AlertTriangle,
  Zap,
  ArrowRight,
  Minus,
  Eye,
  CheckCircle2,
  BookOpen,
  Layers,
  FlaskConical,
  Lightbulb,
  Crosshair,
  GitBranch,
  ShieldAlert,
  ShieldCheck,
  XCircle,
  ListOrdered,
  Brain,
  AlertOctagon,
  Ban,
  Spline,
  Hash,
  Activity,
  Percent,
  Waypoints,
  DollarSign,
  PenTool,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { TradingViewLab } from '@/components/academy/tradingview-lab'
import { QuizQuestion } from '@/components/academy/quiz-question'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 1: Moving Averages — Your Trend Compass
   ═══════════════════════════════════════════════════════════════════ */

function TopicMovingAverages() {
  return (
    <TopicCard
      id="d2-moving-averages"
      title="Moving Averages — Your Trend Compass"
      icon={<Compass />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        A <strong>moving average (MA)</strong> is the average closing price over the last N periods, plotted as a line on your chart. It smooths out daily noise and reveals the underlying trend direction.
      </p>
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        <span className="font-semibold text-amber-700">Why use it?</span> Individual candles are noisy. Moving averages strip away the chaos and show you the true path of price.
      </p>

      {/* SMA vs EMA comparison */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        {/* SMA */}
        <div className="rounded-xl border-2 border-slate-300 bg-slate-50/50 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <Minus className="h-5 w-5 text-slate-600" />
            <h4 className="text-base font-bold text-slate-800 sm:text-lg">SMA — Simple Moving Average</h4>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-slate-500">•</span>
              <span>Straight average of all periods</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-slate-500">•</span>
              <span>Treats every period <strong>equally</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-slate-500">•</span>
              <span>Smoother but <strong>slower</strong> to react</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-slate-500">•</span>
              <span>Best for: long-term analysis</span>
            </li>
          </ul>
        </div>

        {/* EMA */}
        <div className="rounded-xl border-2 border-amber-200 bg-amber-50/50 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-600" />
            <h4 className="text-base font-bold text-amber-800 sm:text-lg">EMA — Exponential Moving Average</h4>
          </div>
          <ul className="space-y-2 text-sm text-amber-900 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-amber-500">•</span>
              <span>More weight to <strong>recent</strong> prices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-amber-500">•</span>
              <span>Faster reaction to price changes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-amber-500">•</span>
              <span>Hugs price <strong>closer</strong> than SMA</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-amber-500">•</span>
              <span>Best for: <strong>active trading</strong></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Active trading recommendation */}
      <div className="mb-6 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
        <p className="text-sm font-bold text-green-800 sm:text-base">
          For active trading, <span className="underline">use EMA</span>. It reacts faster to real changes and gives you earlier signals.
        </p>
      </div>

      {/* SVG Chart showing SMA 20 vs EMA 20 */}
      <div className="mb-4">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: SMA 20 vs EMA 20 on the Same Chart
        </h4>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <svg viewBox="0 0 600 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Grid lines */}
            <line x1="0" y1="40" x2="600" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="80" x2="600" y2="80" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="120" x2="600" y2="120" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="160" x2="600" y2="160" stroke="#e2e8f0" strokeWidth="0.5" />

            {/* Price line */}
            <polyline
              points="20,140 60,120 100,100 140,110 180,80 220,60 260,90 300,70 340,50 380,80 420,60 460,40 500,55 540,30 580,45"
              fill="none" stroke="#1e293b" strokeWidth="2" />

            {/* SMA 20 - Slate, smoother, slower */}
            <polyline
              points="20,145 60,130 100,118 140,115 180,100 220,85 260,88 300,80 340,68 380,72 420,68 460,58 500,52 540,42 580,48"
              fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeDasharray="8,4" />

            {/* EMA 20 - Amber, hugs price closer */}
            <polyline
              points="20,142 60,125 100,105 140,112 180,85 220,65 260,88 300,73 340,55 380,76 420,63 460,44 500,52 540,33 580,46"
              fill="none" stroke="#f59e0b" strokeWidth="2.5" />

            {/* Labels */}
            <text x="585" y="38" fontSize="9" fill="#1e293b" fontWeight="bold">Price</text>
            <text x="585" y="55" fontSize="9" fill="#94a3b8" fontWeight="bold">SMA 20</text>
            <text x="585" y="48" fontSize="9" fill="#f59e0b" fontWeight="bold">EMA 20</text>

            {/* Annotation arrow showing EMA hugging closer */}
            <line x1="340" y1="55" x2="340" y2="68" stroke="#16a34a" strokeWidth="1.5" />
            <text x="345" y="63" fontSize="9" fill="#16a34a" fontWeight="bold">EMA closer</text>
          </svg>
        </div>
      </div>

      <AnalogyBox title="Moving Averages Are Like a River Current">
        Individual waves (daily prices) splash and crash chaotically. But the river current (the moving average) has a clear direction. Don&apos;t fight the current — trade with it.
      </AnalogyBox>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 2: The Three Key EMAs Every Trader Must Know
   ═══════════════════════════════════════════════════════════════════ */

function TopicThreeEMAs() {
  return (
    <TopicCard
      id="d2-three-emas"
      title="The Three Key EMAs Every Trader Must Know"
      icon={<Layers />}
      variant="default"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        You don&apos;t need a dozen indicators. These three EMAs give you everything: short-term momentum, medium-term trend, and long-term bias.
      </p>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {/* EMA 20 */}
        <div className="rounded-xl border-2 border-yellow-300 bg-yellow-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-4 w-8 rounded bg-yellow-400" />
            <h4 className="text-base font-bold text-yellow-800 sm:text-lg">EMA 20</h4>
          </div>
          <p className="text-sm font-semibold text-yellow-900 sm:text-base">Short-term trend</p>
          <ul className="mt-2 space-y-1.5 text-sm text-yellow-900/80">
            <li>• Tracks momentum</li>
            <li>• Price rides it in strong trends</li>
            <li>• First line of dynamic support</li>
          </ul>
        </div>

        {/* EMA 50 */}
        <div className="rounded-xl border-2 border-teal-300 bg-teal-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-4 w-8 rounded bg-teal-500" />
            <h4 className="text-base font-bold text-teal-800 sm:text-lg">EMA 50</h4>
          </div>
          <p className="text-sm font-semibold text-teal-900 sm:text-base">Medium-term trend</p>
          <ul className="mt-2 space-y-1.5 text-sm text-teal-900/80">
            <li>• Reliable dynamic S/R</li>
            <li>• Golden/Death Cross signal</li>
            <li>• Institutional watch level</li>
          </ul>
        </div>

        {/* EMA 200 */}
        <div className="rounded-xl border-2 border-red-300 bg-red-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-4 w-8 rounded bg-red-500" />
            <h4 className="text-base font-bold text-red-800 sm:text-lg">EMA 200</h4>
          </div>
          <p className="text-sm font-semibold text-red-900 sm:text-base">Long-term trend</p>
          <ul className="mt-2 space-y-1.5 text-sm text-red-900/80">
            <li>• Institutional level</li>
            <li>• Above = <span className="font-bold text-green-700">bullish</span></li>
            <li>• Below = <span className="font-bold text-red-700">bearish</span></li>
          </ul>
        </div>
      </div>

      {/* SVG Chart showing all three EMAs */}
      <div className="mb-4">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: Three EMAs Layered with Price
        </h4>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <svg viewBox="0 0 600 220" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Grid lines */}
            <line x1="0" y1="44" x2="600" y2="44" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="88" x2="600" y2="88" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="132" x2="600" y2="132" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="176" x2="600" y2="176" stroke="#e2e8f0" strokeWidth="0.5" />

            {/* EMA 200 - Red, farthest from price */}
            <polyline
              points="20,190 60,185 100,178 140,172 180,168 220,160 260,155 300,148 340,142 380,136 420,130 460,125 500,118 540,112 580,108"
              fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.7" />

            {/* EMA 50 - Teal, middle */}
            <polyline
              points="20,175 60,168 100,155 140,150 180,138 220,125 260,120 300,110 340,100 380,108 420,98 460,88 500,82 540,75 580,68"
              fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.8" />

            {/* EMA 20 - Yellow, closest to price */}
            <polyline
              points="20,168 60,155 100,138 140,145 180,120 220,105 260,118 300,100 340,85 380,105 420,90 460,72 500,80 540,62 580,55"
              fill="none" stroke="#eab308" strokeWidth="2.5" />

            {/* Price line */}
            <polyline
              points="20,165 60,148 100,130 140,142 180,112 220,95 260,115 300,92 340,78 380,100 420,82 460,65 500,75 540,55 580,48"
              fill="none" stroke="#1e293b" strokeWidth="2" />

            {/* Labels */}
            <circle cx="595" cy="108" r="4" fill="#ef4444" />
            <text x="580" y="105" fontSize="9" fill="#ef4444" fontWeight="bold" textAnchor="end">EMA 200</text>
            <circle cx="595" cy="68" r="4" fill="#14b8a6" />
            <text x="580" y="65" fontSize="9" fill="#14b8a6" fontWeight="bold" textAnchor="end">EMA 50</text>
            <circle cx="595" cy="55" r="4" fill="#eab308" />
            <text x="580" y="52" fontSize="9" fill="#eab308" fontWeight="bold" textAnchor="end">EMA 20</text>
            <circle cx="595" cy="48" r="4" fill="#1e293b" />
            <text x="580" y="45" fontSize="9" fill="#1e293b" fontWeight="bold" textAnchor="end">Price</text>

            {/* Stacked label */}
            <text x="300" y="210" fontSize="11" fill="#16a34a" fontWeight="bold" textAnchor="middle">
              Perfect Bullish Alignment: 20 &gt; 50 &gt; 200
            </text>
          </svg>
        </div>
      </div>

      <KeyTakeaway>
        These three EMAs are the only moving averages you need. EMA 20 for entries, EMA 50 for trend confirmation, EMA 200 for long-term bias.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 3: EMA Signal Rules
   ═══════════════════════════════════════════════════════════════════ */

function TopicEMASignalRules() {
  const signalRows: { scenario: string; signal: string; color: 'green' | 'red' | 'amber'; bold?: boolean }[] = [
    { scenario: 'Price above EMA 200', signal: 'Long-term uptrend. Look for buys.', color: 'green' },
    { scenario: 'Price below EMA 200', signal: 'Long-term downtrend. Look for shorts.', color: 'red' },
    { scenario: 'EMA 20 above EMA 50', signal: 'Short-term bullish momentum.', color: 'green' },
    { scenario: 'EMA 20 below EMA 50', signal: 'Short-term bearish momentum.', color: 'red' },
    { scenario: 'EMA 50 crosses above EMA 200', signal: 'GOLDEN CROSS — Major bullish signal.', color: 'green', bold: true },
    { scenario: 'EMA 50 crosses below EMA 200', signal: 'DEATH CROSS — Major bearish signal.', color: 'red', bold: true },
    { scenario: 'All EMAs stacked (20 > 50 > 200)', signal: 'Perfect bullish alignment. Buys only.', color: 'green', bold: true },
    { scenario: 'All EMAs stacked (20 < 50 < 200)', signal: 'Perfect bearish alignment. Shorts only.', color: 'red', bold: true },
    { scenario: 'EMAs tangled/crossing repeatedly', signal: 'No clear trend — WAIT for clarity.', color: 'amber', bold: true },
  ]

  const colorClasses = {
    green: 'text-green-600',
    red: 'text-red-600',
    amber: 'text-amber-600',
  }

  return (
    <TopicCard
      id="d2-ema-signal-rules"
      title="EMA Signal Rules — The Complete Reference"
      icon={<BookOpen />}
      variant="highlight"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        Print this table. Bookmark it. These rules are your complete EMA decision framework.
      </p>

      <div className="mb-6 overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-800">
              <th className="px-4 py-3 text-left text-sm font-semibold text-white">Scenario</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-white">Signal</th>
            </tr>
          </thead>
          <tbody>
            {signalRows.map((row, idx) => (
              <tr
                key={idx}
                className={`border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-slate-100`}
              >
                <td className="px-4 py-3 text-sm font-medium text-slate-800">{row.scenario}</td>
                <td className={`px-4 py-3 text-sm ${colorClasses[row.color]} ${row.bold ? 'font-bold' : 'font-semibold'}`}>{row.signal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tangled EMAs rule */}
      <div className="mb-4 rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800 sm:text-base">EMAs tangled/crossing repeatedly</p>
            <p className="mt-1 text-sm text-amber-900 sm:text-base">
              No clear trend. <span className="font-bold">Wait for clarity.</span> Do not force trades when EMAs are tangled — this means the market is deciding its next direction.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        When in doubt, check EMA 200. If price is above it, bias is bullish. If below, bias is bearish. Simple.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 4: Golden Cross & Death Cross
   ═══════════════════════════════════════════════════════════════════ */

function TopicGoldenAndDeathCross() {
  return (
    <TopicCard
      id="d2-golden-death-cross"
      title="Golden Cross & Death Cross"
      icon={<TrendingUp />}
      variant="default"
    >
      {/* Golden Cross */}
      <div className="mb-6 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
        <p className="text-sm font-bold text-green-800 sm:text-base">Golden Cross Definition</p>
        <p className="mt-1 text-sm text-green-900 sm:text-base">
          EMA 50 crosses <span className="font-bold">ABOVE</span> EMA 200 on the daily chart. Long-term <strong>bullish signal</strong>.
        </p>
      </div>

      {/* Death Cross */}
      <div className="mb-6 rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4">
        <p className="text-sm font-bold text-red-800 sm:text-base">Death Cross Definition</p>
        <p className="mt-1 text-sm text-red-900 sm:text-base">
          EMA 50 crosses <span className="font-bold">BELOW</span> EMA 200 on the daily chart. Long-term <strong>bearish signal</strong>.
        </p>
      </div>

      {/* Critical nuance */}
      <div className="mb-6 rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-bold text-amber-800 sm:text-base">Critical Nuance for Both</p>
        <p className="mt-2 text-sm text-amber-900 sm:text-base">
          Do <strong>NOT</strong> trade the moment the cross happens. Both Golden Cross and Death Cross are <strong>lagging signals</strong> — the move has already started.
        </p>
        <p className="mt-2 text-sm text-amber-900 sm:text-base">
          <span className="font-bold">Instead:</span> Wait for the <span className="text-green-700 font-bold">pullback to EMA 50</span> after the cross. That&apos;s your high-probability entry.
        </p>
      </div>

      {/* SVG Chart showing Golden Cross */}
      <div className="mb-4">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: Golden Cross with Pullback Entry
        </h4>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <svg viewBox="0 0 600 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Grid lines */}
            <line x1="0" y1="40" x2="600" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="80" x2="600" y2="80" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="120" x2="600" y2="120" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="160" x2="600" y2="160" stroke="#e2e8f0" strokeWidth="0.5" />

            {/* EMA 200 - Red */}
            <polyline
              points="20,170 60,168 100,165 140,162 180,158 220,155 260,152 300,148 340,144 380,140 420,136 460,132 500,128 540,124 580,120"
              fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.7" />

            {/* EMA 50 - Teal, starts below, crosses above */}
            <polyline
              points="20,175 60,172 100,167 140,163 180,157 220,150 260,145 300,140 340,135 380,130 420,124 460,118 500,112 540,105 580,98"
              fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.8" />

            {/* Price line */}
            <polyline
              points="20,180 60,175 100,155 140,145 180,130 220,125 260,140 300,120 340,110 380,130 420,100 460,85 500,75 540,65 580,50"
              fill="none" stroke="#1e293b" strokeWidth="2" />

            {/* Golden Cross marker */}
            <circle cx="180" cy="155" r="8" fill="none" stroke="#16a34a" strokeWidth="2" />
            <text x="190" y="178" fontSize="10" fill="#16a34a" fontWeight="bold">Golden Cross!</text>

            {/* Pullback arrow */}
            <line x1="380" y1="130" x2="380" y2="140" stroke="#16a34a" strokeWidth="2" />
            <circle cx="380" cy="130" r="6" fill="#16a34a" />
            <text x="395" y="140" fontSize="10" fill="#16a34a" fontWeight="bold">Pullback Entry</text>
            <text x="395" y="152" fontSize="9" fill="#16a34a">(at EMA 50)</text>

            {/* Labels */}
            <text x="590" y="120" fontSize="9" fill="#ef4444" fontWeight="bold">EMA 200</text>
            <text x="590" y="98" fontSize="9" fill="#14b8a6" fontWeight="bold">EMA 50</text>
            <text x="590" y="50" fontSize="9" fill="#1e293b" fontWeight="bold">Price</text>
          </svg>
        </div>
      </div>

      <KeyTakeaway>
        Both Golden Cross and Death Cross are <strong>lagging confirmation signals</strong>. Never trade the cross itself — trade the pullback/rally to EMA 50 after the cross.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 5: EMAs as Dynamic Support and Resistance
   ═══════════════════════════════════════════════════════════════════ */

function TopicEMAsDynamicSR() {
  return (
    <TopicCard
      id="d2-emas-dynamic-sr"
      title="EMAs as Dynamic Support and Resistance"
      icon={<ArrowRight />}
      variant="default"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        Unlike horizontal support/resistance levels that stay fixed, <strong>EMAs move with price</strong>, creating dynamic barriers that the market respects over and over.
      </p>

      <AnalogyBox title="EMAs Are Like Escalator Steps">
        Horizontal S/R is like a wall — it doesn&apos;t move. EMAs are like escalator steps — they carry you in a direction while still providing something to stand on.
      </AnalogyBox>

      {/* Uptrend vs Downtrend */}
      <div className="my-6 grid gap-4 sm:grid-cols-2">
        {/* Uptrend */}
        <div className="rounded-xl border-2 border-green-200 bg-green-50/50 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-base font-bold text-green-800 sm:text-lg">In UPTREND</h4>
          </div>
          <ul className="space-y-2 text-sm text-green-900 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-yellow-500 font-bold">EMA 20</span>
              <span>= <strong>Trampoline</strong> — bounces price up quickly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-teal-500 font-bold">EMA 50</span>
              <span>= <strong>Net</strong> — catches deeper pullbacks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-red-500 font-bold">EMA 200</span>
              <span>= <strong>Last defense</strong> — if broken, trend is in trouble</span>
            </li>
          </ul>
        </div>

        {/* Downtrend */}
        <div className="rounded-xl border-2 border-red-200 bg-red-50/50 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <h4 className="text-base font-bold text-red-800 sm:text-lg">In DOWNTREND</h4>
          </div>
          <ul className="space-y-2 text-sm text-red-900 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-yellow-500 font-bold">EMA 20</span>
              <span>= <strong>Ceiling</strong> — rejects price from above</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-teal-500 font-bold">EMA 50</span>
              <span>= <strong>Stronger ceiling</strong> — harder to break through</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-red-500 font-bold">EMA 200</span>
              <span>= <strong>Ultimate ceiling</strong> — major barrier</span>
            </li>
          </ul>
        </div>
      </div>

      {/* SVG Staircase Diagram */}
      <div className="mb-4">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: EMAs as Progressive Support Levels
        </h4>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <svg viewBox="0 0 600 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Price staircasing up */}
            <polyline
              points="40,170 80,140 100,155 140,120 160,135 200,95 220,110 260,70 280,85 320,50 360,65 400,35 440,50 480,25 520,38 560,15"
              fill="none" stroke="#1e293b" strokeWidth="2.5" />

            {/* EMA 20 - Yellow, close to price */}
            <polyline
              points="40,158 80,148 100,148 140,128 160,128 200,105 220,105 260,80 280,80 320,58 360,58 400,42 440,42 480,30 520,30 560,22"
              fill="none" stroke="#eab308" strokeWidth="2" />

            {/* EMA 50 - Teal, middle step */}
            <polyline
              points="40,165 80,160 100,158 140,148 160,145 200,128 220,125 260,108 280,105 320,88 360,82 400,68 440,62 480,50 520,45 560,38"
              fill="none" stroke="#14b8a6" strokeWidth="2" />

            {/* EMA 200 - Red, bottom step */}
            <polyline
              points="40,180 80,178 100,175 140,172 160,170 200,165 220,162 260,155 280,152 320,145 360,140 400,132 440,128 480,120 520,115 560,108"
              fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.7" />

            {/* Bounce markers */}
            <circle cx="100" cy="155" r="5" fill="#eab308" />
            <circle cx="160" cy="135" r="5" fill="#14b8a6" />
            <circle cx="220" cy="110" r="5" fill="#eab308" />
            <circle cx="280" cy="85" r="5" fill="#14b8a6" />
            <circle cx="360" cy="65" r="5" fill="#eab308" />
            <circle cx="440" cy="50" r="5" fill="#14b8a6" />

            {/* Labels */}
            <text x="575" y="22" fontSize="9" fill="#eab308" fontWeight="bold">EMA 20</text>
            <text x="575" y="38" fontSize="9" fill="#14b8a6" fontWeight="bold">EMA 50</text>
            <text x="575" y="108" fontSize="9" fill="#ef4444" fontWeight="bold">EMA 200</text>

            <text x="300" y="195" fontSize="10" fill="#16a34a" fontWeight="bold" textAnchor="middle">
              Bounces off EMA 20 (yellow) and EMA 50 (teal) = Dynamic Support Staircase
            </text>
          </svg>
        </div>
      </div>

      <KeyTakeaway>
        In an uptrend, EMAs act as ascending support. Each pullback to an EMA is a potential buy zone. The stronger the EMA holds, the stronger the trend.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 6: EMA Crossover Trading Strategy
   ═══════════════════════════════════════════════════════════════════ */

function TopicEMACrossoverStrategy() {
  return (
    <TopicCard
      id="d2-ema-crossover-strategy"
      title="EMA Crossover Trading Strategy"
      icon={<GitBranch />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        The <strong>EMA crossover</strong> is one of the most popular trading strategies — but also one of the most misused. Let&apos;s break it down properly so you avoid the common traps.
      </p>

      {/* Basic crossover explanation */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        {/* Bullish cross */}
        <div className="rounded-xl border-2 border-green-200 bg-green-50/50 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-base font-bold text-green-800 sm:text-lg">Bullish Crossover</h4>
          </div>
          <p className="text-sm text-green-900 sm:text-base">
            <span className="font-bold text-yellow-600">EMA 20</span> crosses <span className="font-bold">ABOVE</span> <span className="font-bold text-teal-600">EMA 50</span>
          </p>
          <p className="mt-2 text-sm text-green-900/80 sm:text-base">
            → Short-term momentum has shifted bullish. Look for buy setups.
          </p>
        </div>

        {/* Bearish cross */}
        <div className="rounded-xl border-2 border-red-200 bg-red-50/50 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <h4 className="text-base font-bold text-red-800 sm:text-lg">Bearish Crossover</h4>
          </div>
          <p className="text-sm text-red-900 sm:text-base">
            <span className="font-bold text-yellow-600">EMA 20</span> crosses <span className="font-bold">BELOW</span> <span className="font-bold text-teal-600">EMA 50</span>
          </p>
          <p className="mt-2 text-sm text-red-900/80 sm:text-base">
            → Short-term momentum has shifted bearish. Look for sell setups.
          </p>
        </div>
      </div>

      {/* Why crossover alone isn't enough */}
      <div className="mb-6 rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800 sm:text-base">Why Crossover Alone Isn&apos;t Enough</p>
            <p className="mt-2 text-sm text-amber-900 sm:text-base">
              In ranging markets, EMA 20 and EMA 50 will cross back and forth repeatedly, generating <span className="font-bold">whipsaw after whipsaw</span>. Each false signal costs you money — entry, exit, and emotional damage.
            </p>
            <p className="mt-2 text-sm text-amber-900/80 sm:text-base">
              A crossover is only valuable when it happens <strong>within a trending context</strong> confirmed by structure and S/R.
            </p>
          </div>
        </div>
      </div>

      {/* The refined approach */}
      <div className="mb-6 rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 sm:p-5">
        <h4 className="mb-3 text-base font-bold text-emerald-800 sm:text-lg">The Refined Approach: Crossover + Structure + S/R</h4>
        <p className="mb-4 text-sm text-emerald-900 sm:text-base">
          Don&apos;t trade the crossover in isolation. Use it as <strong>one piece of a three-part confirmation</strong>:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">1</span>
            <div>
              <p className="text-sm font-bold text-emerald-900 sm:text-base">Wait for the EMA 20/50 cross</p>
              <p className="text-sm text-emerald-800/80 sm:text-base">This gives you the momentum signal</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">2</span>
            <div>
              <p className="text-sm font-bold text-emerald-900 sm:text-base">Confirm market structure agrees</p>
              <p className="text-sm text-emerald-800/80 sm:text-base">Higher highs & higher lows for bullish, lower highs & lower lows for bearish</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">3</span>
            <div>
              <p className="text-sm font-bold text-emerald-900 sm:text-base">Enter on the pullback to EMA 20</p>
              <p className="text-sm text-emerald-800/80 sm:text-base">Don&apos;t chase — let price come back to the EMA for a low-risk entry</p>
            </div>
          </div>
        </div>
      </div>

      {/* SVG showing crossover strategy with entry points */}
      <div className="mb-4">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: EMA 20/50 Crossover Strategy with Pullback Entry
        </h4>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <svg viewBox="0 0 600 220" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Grid lines */}
            <line x1="0" y1="44" x2="600" y2="44" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="88" x2="600" y2="88" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="132" x2="600" y2="132" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="176" x2="600" y2="176" stroke="#e2e8f0" strokeWidth="0.5" />

            {/* EMA 200 - Red, background */}
            <polyline
              points="20,190 60,186 100,180 140,175 180,170 220,164 260,158 300,152 340,146 380,140 420,134 460,128 500,122 540,116 580,110"
              fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.5" />

            {/* EMA 50 - Teal, starts above EMA 20 */}
            <polyline
              points="20,155 60,150 100,145 140,148 180,142 220,130 260,120 300,115 340,108 380,105 420,95 460,88 500,80 540,72 580,65"
              fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.8" />

            {/* EMA 20 - Yellow, starts below EMA 50, then crosses above */}
            <polyline
              points="20,160 60,158 100,150 140,140 180,130 220,115 260,110 300,105 340,95 380,100 420,85 460,75 500,68 540,58 580,50"
              fill="none" stroke="#eab308" strokeWidth="2.5" />

            {/* Price line */}
            <polyline
              points="20,165 60,160 100,145 140,135 180,120 220,100 260,108 300,95 340,85 380,98 420,78 460,65 500,72 540,55 580,42"
              fill="none" stroke="#1e293b" strokeWidth="2" />

            {/* Crossover point */}
            <circle cx="140" cy="140" r="10" fill="none" stroke="#16a34a" strokeWidth="2.5" />
            <text x="115" y="168" fontSize="10" fill="#16a34a" fontWeight="bold">EMA 20/50 Cross</text>

            {/* Pullback entry 1 */}
            <circle cx="260" cy="108" r="7" fill="#16a34a" opacity="0.9" />
            <text x="270" y="122" fontSize="9" fill="#16a34a" fontWeight="bold">Entry 1</text>
            <text x="270" y="133" fontSize="8" fill="#16a34a">(Pullback to EMA 20)</text>

            {/* Pullback entry 2 */}
            <circle cx="380" cy="98" r="7" fill="#16a34a" opacity="0.9" />
            <text x="390" y="112" fontSize="9" fill="#16a34a" fontWeight="bold">Entry 2</text>
            <text x="390" y="123" fontSize="8" fill="#16a34a">(Pullback to EMA 20)</text>

            {/* Structure confirmation label */}
            <text x="200" y="195" fontSize="9" fill="#16a34a" fontWeight="bold">✓ HH + HL (Structure Confirms)</text>

            {/* Labels */}
            <circle cx="592" cy="110" r="3" fill="#ef4444" />
            <text x="580" y="118" fontSize="8" fill="#ef4444" fontWeight="bold" textAnchor="end">EMA 200</text>
            <circle cx="592" cy="65" r="3" fill="#14b8a6" />
            <text x="580" y="73" fontSize="8" fill="#14b8a6" fontWeight="bold" textAnchor="end">EMA 50</text>
            <circle cx="592" cy="50" r="3" fill="#eab308" />
            <text x="580" y="58" fontSize="8" fill="#eab308" fontWeight="bold" textAnchor="end">EMA 20</text>
          </svg>
        </div>
      </div>

      {/* Lagging warning */}
      <div className="mb-4 rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4">
        <div className="flex items-start gap-3">
          <AlertOctagon className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="text-sm font-bold text-red-800 sm:text-base">EMAs Are Lagging Indicators</p>
            <p className="mt-1 text-sm text-red-900 sm:text-base">
              By the time EMA 20 crosses EMA 50, <strong>price has already moved significantly</strong>. The crossover confirms what has already happened — it doesn&apos;t predict the future. This is why we trade the <span className="font-bold text-green-700">pullback after the cross</span>, not the cross itself.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        The EMA crossover is a <strong>momentum confirmation</strong>, not a standalone signal. Always combine: <strong>Crossover + Structure + S/R alignment</strong> = high-probability trade.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 7: When EMAs Fail
   ═══════════════════════════════════════════════════════════════════ */

function TopicWhenEMAsFail() {
  const failScenarios = [
    {
      title: 'Ranging Markets',
      icon: <Spline className="h-5 w-5" />,
      description: 'Price moves sideways within a range. EMAs cross back and forth repeatedly, generating whipsaw signals that lose money trade after trade.',
      color: 'amber' as const,
    },
    {
      title: 'Sudden Gaps',
      icon: <Zap className="h-5 w-5" />,
      description: 'Flash crashes or overnight pumps create gaps. EMAs can\'t keep up — they lag behind the actual price by hours or days, making signals useless.',
      color: 'red' as const,
    },
    {
      title: 'Low Liquidity',
      icon: <BarChart3 className="h-5 w-5" />,
      description: 'On thin order books, a single large order can distort price enough to trigger false EMA signals. Low-liquidity alts are especially dangerous.',
      color: 'amber' as const,
    },
    {
      title: 'Major News Events',
      icon: <AlertTriangle className="h-5 w-5" />,
      description: 'Fed rate decisions, CPI prints, exchange hacks — EMAs are completely useless during these events. Fundamentals override technicals instantly.',
      color: 'red' as const,
    },
  ]

  const colorMap = {
    amber: {
      border: 'border-amber-200',
      bg: 'bg-amber-50/50',
      iconColor: 'text-amber-600',
      titleColor: 'text-amber-800',
      textColor: 'text-amber-900',
    },
    red: {
      border: 'border-red-200',
      bg: 'bg-red-50/50',
      iconColor: 'text-red-600',
      titleColor: 'text-red-800',
      textColor: 'text-red-900',
    },
  }

  return (
    <TopicCard
      id="d2-when-emas-fail"
      title="When EMAs Fail — Know the Blind Spots"
      icon={<ShieldAlert />}
      variant="warning"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        EMAs are powerful — but they&apos;re not magic. Every indicator has blind spots, and knowing <strong>when EMAs fail</strong> is just as important as knowing when they work.
      </p>

      {/* 4 failure scenarios */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        {failScenarios.map((scenario, idx) => {
          const c = colorMap[scenario.color]
          return (
            <div key={idx} className={`rounded-xl border-2 ${c.border} ${c.bg} p-4 sm:p-5`}>
              <div className="mb-2 flex items-center gap-2">
                <span className={c.iconColor}>{scenario.icon}</span>
                <h4 className={`text-sm font-bold ${c.titleColor} sm:text-base`}>Scenario {idx + 1}: {scenario.title}</h4>
              </div>
              <p className={`text-sm ${c.textColor} sm:text-base`}>{scenario.description}</p>
            </div>
          )
        })}
      </div>

      {/* SVG showing whipsaw in a range */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: Whipsaw — 5 False Signals in a Range
        </h4>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <svg viewBox="0 0 600 220" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Grid lines */}
            <line x1="0" y1="44" x2="600" y2="44" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="88" x2="600" y2="88" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="132" x2="600" y2="132" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="176" x2="600" y2="176" stroke="#e2e8f0" strokeWidth="0.5" />

            {/* Range boundaries */}
            <line x1="20" y1="80" x2="580" y2="80" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
            <line x1="20" y1="155" x2="580" y2="155" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6,4" />
            <text x="585" y="83" fontSize="9" fill="#94a3b8" fontWeight="bold">Resistance</text>
            <text x="585" y="158" fontSize="9" fill="#94a3b8" fontWeight="bold">Support</text>

            {/* Price oscillating in range */}
            <polyline
              points="20,120 60,95 100,110 140,90 180,130 220,100 260,140 300,95 340,125 380,90 420,145 460,105 500,130 540,100 580,120"
              fill="none" stroke="#1e293b" strokeWidth="2" />

            {/* EMA 20 - Yellow, oscillating */}
            <polyline
              points="20,118 60,105 100,108 140,100 180,115 220,108 260,120 300,108 340,115 380,102 420,125 460,112 500,118 540,108 580,115"
              fill="none" stroke="#eab308" strokeWidth="2" />

            {/* EMA 50 - Teal, flatter */}
            <polyline
              points="20,115 60,110 100,110 140,108 180,112 220,110 260,114 300,112 340,113 380,110 420,116 460,114 500,115 540,113 580,114"
              fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.7" />

            {/* False signal markers with X */}
            {/* Signal 1: Bullish cross at ~80 */}
            <circle cx="80" cy="106" r="8" fill="none" stroke="#ef4444" strokeWidth="2" />
            <line x1="76" y1="102" x2="84" y2="110" stroke="#ef4444" strokeWidth="2" />
            <line x1="84" y1="102" x2="76" y2="110" stroke="#ef4444" strokeWidth="2" />
            <text x="68" y="96" fontSize="8" fill="#ef4444" fontWeight="bold">1</text>

            {/* Signal 2: Bearish cross at ~180 */}
            <circle cx="180" cy="115" r="8" fill="none" stroke="#ef4444" strokeWidth="2" />
            <line x1="176" y1="111" x2="184" y2="119" stroke="#ef4444" strokeWidth="2" />
            <line x1="184" y1="111" x2="176" y2="119" stroke="#ef4444" strokeWidth="2" />
            <text x="168" y="105" fontSize="8" fill="#ef4444" fontWeight="bold">2</text>

            {/* Signal 3: Bullish cross at ~300 */}
            <circle cx="300" cy="110" r="8" fill="none" stroke="#ef4444" strokeWidth="2" />
            <line x1="296" y1="106" x2="304" y2="114" stroke="#ef4444" strokeWidth="2" />
            <line x1="304" y1="106" x2="296" y2="114" stroke="#ef4444" strokeWidth="2" />
            <text x="288" y="100" fontSize="8" fill="#ef4444" fontWeight="bold">3</text>

            {/* Signal 4: Bearish cross at ~420 */}
            <circle cx="420" cy="120" r="8" fill="none" stroke="#ef4444" strokeWidth="2" />
            <line x1="416" y1="116" x2="424" y2="124" stroke="#ef4444" strokeWidth="2" />
            <line x1="424" y1="116" x2="416" y2="124" stroke="#ef4444" strokeWidth="2" />
            <text x="408" y="110" fontSize="8" fill="#ef4444" fontWeight="bold">4</text>

            {/* Signal 5: Bullish cross at ~540 */}
            <circle cx="540" cy="110" r="8" fill="none" stroke="#ef4444" strokeWidth="2" />
            <line x1="536" y1="106" x2="544" y2="114" stroke="#ef4444" strokeWidth="2" />
            <line x1="544" y1="106" x2="536" y2="114" stroke="#ef4444" strokeWidth="2" />
            <text x="528" y="100" fontSize="8" fill="#ef4444" fontWeight="bold">5</text>

            {/* Bottom label */}
            <text x="300" y="200" fontSize="11" fill="#ef4444" fontWeight="bold" textAnchor="middle">
              ❌ 5 False Crossover Signals in a Range — All Would Lose Money
            </text>
          </svg>
        </div>
      </div>

      {/* The golden rule */}
      <div className="mb-4 rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4">
        <div className="flex items-start gap-3">
          <Ban className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="text-sm font-bold text-red-800 sm:text-base">NEVER Trade EMA Signals Alone</p>
            <p className="mt-1 text-sm text-red-900 sm:text-base">
              Every EMA signal must be confirmed by <strong>market structure</strong> (trending HH/HL or LH/LL) and <strong>horizontal S/R levels</strong>. If EMAs say buy but structure says range — <span className="font-bold">don&apos;t trade</span>.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        EMAs fail in ranges, gaps, low liquidity, and during news events. <strong>Always combine EMAs with structure and S/R.</strong> If the market is ranging, EMAs are your enemy — stay out.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 8: EMA + S/R Confluence Trading
   ═══════════════════════════════════════════════════════════════════ */

function TopicEMASRConfluence() {
  return (
    <TopicCard
      id="d2-ema-sr-confluence"
      title="EMA + S/R Confluence Trading"
      icon={<Crosshair />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        The single most powerful EMA setup: <strong>price bouncing off an EMA exactly at a horizontal support or resistance level</strong>. This is confluence — two independent signals agreeing at the same price.
      </p>

      {/* Why confluence matters */}
      <div className="mb-6 rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-4 sm:p-5">
        <h4 className="mb-3 text-base font-bold text-emerald-800 sm:text-lg">Why Confluence Matters</h4>
        <p className="mb-3 text-sm text-emerald-900 sm:text-base">
          A single signal can be a coincidence. Two independent signals at the <strong>same price level</strong> is high probability. Think of it as two witnesses confirming the same story — it&apos;s much more credible than one.
        </p>
        <div className="flex items-center gap-2 rounded-lg bg-emerald-100 p-3">
          <ShieldCheck className="h-5 w-5 text-emerald-700" />
          <p className="text-sm font-bold text-emerald-900 sm:text-base">
            EMA bounce + Horizontal S/R = Confluence = High-probability entry
          </p>
        </div>
      </div>

      {/* 3 confluence setups */}
      <div className="mb-6 space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          3 High-Probability Confluence Setups
        </h4>

        {/* Setup A */}
        <div className="rounded-xl border-2 border-green-300 bg-green-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">A</span>
            <h4 className="text-sm font-bold text-green-800 sm:text-base">Price at Support + EMA 50 Bounce = Buy</h4>
          </div>
          <p className="text-sm text-green-900 sm:text-base">
            Price pulls back to a known horizontal support level. Simultaneously, EMA 50 is sitting at or near that same level. Price bounces off both — <span className="font-bold">double confirmation</span>. This is one of the highest-probability long setups you&apos;ll find.
          </p>
        </div>

        {/* Setup B */}
        <div className="rounded-xl border-2 border-red-300 bg-red-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">B</span>
            <h4 className="text-sm font-bold text-red-800 sm:text-base">Price at Resistance + EMA 20 Rejection = Sell</h4>
          </div>
          <p className="text-sm text-red-900 sm:text-base">
            Price rallies up to a horizontal resistance level. EMA 20 is right there too, acting as a ceiling. Price gets rejected from both — <span className="font-bold">double rejection</span>. Strong short setup.
          </p>
        </div>

        {/* Setup C */}
        <div className="rounded-xl border-2 border-purple-300 bg-purple-50/50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">C</span>
            <h4 className="text-sm font-bold text-purple-800 sm:text-base">Price at EMA 200 + Horizontal S/R = Major Decision Point</h4>
          </div>
          <p className="text-sm text-purple-900 sm:text-base">
            The most powerful confluence of all. When price reaches EMA 200 and it aligns with a key S/R level, you&apos;re at a <span className="font-bold">make-or-break</span> point. A bounce here can start a massive trend. A break here can cause a huge move. Position carefully and wait for confirmation.
          </p>
        </div>
      </div>

      {/* SVG showing confluence */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: Price Bouncing Off EMA 50 Exactly at Support
        </h4>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <svg viewBox="0 0 600 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Grid lines */}
            <line x1="0" y1="44" x2="600" y2="44" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="88" x2="600" y2="88" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="132" x2="600" y2="132" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="176" x2="600" y2="176" stroke="#e2e8f0" strokeWidth="0.5" />

            {/* Horizontal Support Level */}
            <line x1="20" y1="155" x2="580" y2="155" stroke="#16a34a" strokeWidth="2" strokeDasharray="8,4" />
            <text x="585" y="158" fontSize="9" fill="#16a34a" fontWeight="bold">Support</text>

            {/* EMA 200 - Red */}
            <polyline
              points="20,195 60,192 100,188 140,184 180,180 220,176 260,172 300,168 340,164 380,160 420,156 460,152 500,148 540,144 580,140"
              fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.5" />

            {/* EMA 50 - Teal, approaching support */}
            <polyline
              points="20,175 60,170 100,168 140,165 180,162 220,158 260,155 300,152 340,148 380,145 420,140 460,132 500,125 540,118 580,110"
              fill="none" stroke="#14b8a6" strokeWidth="2" opacity="0.8" />

            {/* EMA 20 - Yellow */}
            <polyline
              points="20,168 60,158 100,165 140,155 180,148 220,140 260,150 300,142 340,135 380,140 420,128 460,115 500,108 540,95 580,85"
              fill="none" stroke="#eab308" strokeWidth="2" />

            {/* Price line bouncing at confluence */}
            <polyline
              points="20,170 60,155 100,160 140,150 180,140 220,130 260,152 300,138 340,130 380,148 420,120 460,108 500,100 540,88 580,75"
              fill="none" stroke="#1e293b" strokeWidth="2.5" />

            {/* Confluence zone highlight */}
            <rect x="240" y="148" width="40" height="14" rx="3" fill="#16a34a" opacity="0.15" />

            {/* Bounce at confluence */}
            <circle cx="260" cy="152" r="9" fill="none" stroke="#16a34a" strokeWidth="2.5" />
            <text x="270" y="180" fontSize="10" fill="#16a34a" fontWeight="bold">CONFLUENCE!</text>
            <text x="270" y="192" fontSize="8" fill="#16a34a">EMA 50 + Support</text>

            {/* Arrow pointing to entry */}
            <line x1="260" y1="200" x2="260" y2="165" stroke="#16a34a" strokeWidth="1.5" />
            <polygon points="256,168 260,160 264,168" fill="#16a34a" />

            {/* Second bounce (wick test) */}
            <circle cx="380" cy="148" r="7" fill="#16a34a" opacity="0.3" />
            <text x="390" y="162" fontSize="8" fill="#16a34a" fontWeight="bold">2nd test</text>

            {/* Buy zone label */}
            <rect x="260" y="205" width="80" height="18" rx="4" fill="#16a34a" />
            <text x="300" y="218" fontSize="9" fill="white" fontWeight="bold" textAnchor="middle">BUY ZONE</text>

            {/* Labels */}
            <circle cx="592" cy="140" r="3" fill="#ef4444" />
            <text x="580" y="148" fontSize="8" fill="#ef4444" fontWeight="bold" textAnchor="end">EMA 200</text>
            <circle cx="592" cy="110" r="3" fill="#14b8a6" />
            <text x="580" y="118" fontSize="8" fill="#14b8a6" fontWeight="bold" textAnchor="end">EMA 50</text>
            <circle cx="592" cy="85" r="3" fill="#eab308" />
            <text x="580" y="93" fontSize="8" fill="#eab308" fontWeight="bold" textAnchor="end">EMA 20</text>
          </svg>
        </div>
      </div>

      {/* Step-by-step how to find confluence */}
      <div className="mb-4 rounded-xl border-2 border-slate-200 bg-white p-4 sm:p-5">
        <h4 className="mb-3 text-base font-bold text-slate-800 sm:text-lg">How to Find EMA + S/R Confluence on Any Chart</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white">1</span>
            <div>
              <p className="text-sm font-bold text-slate-900 sm:text-base">Draw horizontal S/R levels first</p>
              <p className="text-sm text-slate-600 sm:text-base">Find where price has bounced multiple times — these are your key levels</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white">2</span>
            <div>
              <p className="text-sm font-bold text-slate-900 sm:text-base">Add your 3 EMAs (20, 50, 200)</p>
              <p className="text-sm text-slate-600 sm:text-base">See where each EMA sits relative to your S/R levels</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white">3</span>
            <div>
              <p className="text-sm font-bold text-slate-900 sm:text-base">Mark confluence zones</p>
              <p className="text-sm text-slate-600 sm:text-base">Any EMA that overlaps or sits near a horizontal S/R = confluence zone</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white">4</span>
            <div>
              <p className="text-sm font-bold text-slate-900 sm:text-base">Wait for price to test the confluence</p>
              <p className="text-sm text-slate-600 sm:text-base">When price reaches the zone, look for candle confirmation (rejection wick, engulfing, etc.)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white">5</span>
            <div>
              <p className="text-sm font-bold text-slate-900 sm:text-base">Enter with a tight stop below the zone</p>
              <p className="text-sm text-slate-600 sm:text-base">Your stop goes just below the S/R level. If it breaks, the setup is invalid</p>
            </div>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        <strong>Confluence is king.</strong> An EMA bounce at a horizontal S/R level gives you two independent confirmations at the same price — that&apos;s the highest-probability setup you can find.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 9: EMA Trading Rules Summary
   ═══════════════════════════════════════════════════════════════════ */

function TopicEMATradingRulesSummary() {
  const rules = [
    {
      number: 1,
      icon: <Eye className="h-5 w-5" />,
      title: 'Always check EMA 200 first for long-term bias',
      description: 'Before any trade, look at where price is relative to EMA 200. This tells you the big picture.',
      color: 'red' as const,
    },
    {
      number: 2,
      icon: <Ban className="h-5 w-5" />,
      title: 'Never trade against the EMA 200 on the daily',
      description: 'If price is below EMA 200 on the daily, don\'t look for longs. If above, don\'t look for shorts.',
      color: 'red' as const,
    },
    {
      number: 3,
      icon: <Layers className="h-5 w-5" />,
      title: 'EMA 20 is for entries, EMA 50 is for trend, EMA 200 is for bias',
      description: 'Each EMA has a specific job. Don\'t use them interchangeably.',
      color: 'amber' as const,
    },
    {
      number: 4,
      icon: <Target className="h-5 w-5" />,
      title: 'Wait for pullbacks to EMAs, don\'t chase price',
      description: 'The best entries come when price returns to an EMA. Chasing leads to bad risk/reward.',
      color: 'amber' as const,
    },
    {
      number: 5,
      icon: <XCircle className="h-5 w-5" />,
      title: 'Tangled EMAs = no trade zone',
      description: 'When EMAs cross repeatedly, the market is undecided. Stay out until they separate.',
      color: 'red' as const,
    },
    {
      number: 6,
      icon: <Crosshair className="h-5 w-5" />,
      title: 'Combine EMAs with horizontal S/R for high-probability entries',
      description: 'Confluence between EMA and S/R is the most powerful setup you can trade.',
      color: 'green' as const,
    },
    {
      number: 7,
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'EMAs on higher timeframes are more reliable',
      description: 'EMA 200 on the daily is far more meaningful than EMA 200 on the 5-minute.',
      color: 'amber' as const,
    },
    {
      number: 8,
      icon: <BarChart3 className="h-5 w-5" />,
      title: 'A candle closing beyond an EMA is more meaningful than a wick',
      description: 'Wicks can be rejections. Candle closes show conviction. Wait for the close.',
      color: 'amber' as const,
    },
    {
      number: 9,
      icon: <AlertTriangle className="h-5 w-5" />,
      title: 'EMA crossovers are lagging — trade the pullback after, not the cross itself',
      description: 'By the time EMAs cross, the move is already underway. Enter on the pullback.',
      color: 'red' as const,
    },
    {
      number: 10,
      icon: <Compass className="h-5 w-5" />,
      title: 'When in doubt, zoom out (check the next higher timeframe)',
      description: 'Confused on 4H? Check the daily. Confused on daily? Check the weekly. Bigger TF = clearer picture.',
      color: 'green' as const,
    },
  ]

  const colorMap = {
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      badge: 'bg-red-600',
      iconColor: 'text-red-600',
      titleColor: 'text-red-900',
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      badge: 'bg-amber-600',
      iconColor: 'text-amber-600',
      titleColor: 'text-amber-900',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      badge: 'bg-green-600',
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
    },
  }

  return (
    <TopicCard
      id="d2-ema-trading-rules-summary"
      title="10 Immutable Rules for EMA Trading"
      icon={<ListOrdered />}
      variant="highlight"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        Print these. Memorize these. These 10 rules will keep you from making the most common EMA trading mistakes.
      </p>

      <div className="space-y-3">
        {rules.map((rule) => {
          const c = colorMap[rule.color]
          return (
            <div
              key={rule.number}
              className={`rounded-xl border ${c.border} ${c.bg} p-4 sm:p-5`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${c.badge} text-xs font-bold text-white`}
                >
                  {rule.number}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className={c.iconColor}>{rule.icon}</span>
                    <h4 className={`text-sm font-bold ${c.titleColor} sm:text-base`}>{rule.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 sm:text-base">{rule.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <KeyTakeaway>
        These 10 rules are your <strong>EMA trading safety net</strong>. Violate them and you&apos;ll lose money. Follow them consistently and you&apos;ll avoid 90% of common EMA mistakes.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 10: Practice — Identify EMA Setups
   ═══════════════════════════════════════════════════════════════════ */

function TopicEMAPracticeSetups() {
  return (
    <TopicCard
      id="d2-ema-practice-setups"
      title="Practice: Identify EMA Setups"
      icon={<Brain />}
      variant="default"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        Test your understanding. Read each scenario, think about your answer, then click to reveal the analysis.
      </p>

      <div className="space-y-4">
        <QuizQuestion
          number={1}
          question="Price is above EMA 200, EMA 20 just crossed above EMA 50. What's your bias?"
        >
          <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <p className="text-sm font-bold text-green-800 sm:text-base">Bias: Strongly Bullish</p>
            <p className="mt-2 text-sm text-green-900 sm:text-base">
              Price above EMA 200 = long-term bullish bias. EMA 20 crossing above EMA 50 = short-term momentum has shifted bullish. With <strong>all three signals aligned bullish</strong>, this is a buy-the-pullback scenario.
            </p>
            <p className="mt-2 text-sm text-green-900/80 sm:text-base">
              <span className="font-semibold">Action:</span> Wait for a pullback to EMA 20 or EMA 50 and enter long with a stop below the EMA you entered at.
            </p>
          </div>
        </QuizQuestion>

        <QuizQuestion
          number={2}
          question="EMAs are tangled on the 4H but stacked bullish on the Daily. What do you do?"
        >
          <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
            <p className="text-sm font-bold text-amber-800 sm:text-base">Bias: Cautiously Bullish — Follow the Daily</p>
            <p className="mt-2 text-sm text-amber-900 sm:text-base">
              <strong>Higher timeframe always wins.</strong> The Daily is your anchor — its bullish EMA alignment overrides the 4H confusion. The 4H tangle means you&apos;re in a short-term consolidation within a larger uptrend.
            </p>
            <p className="mt-2 text-sm text-amber-900/80 sm:text-base">
              <span className="font-semibold">Action:</span> Wait for the 4H EMAs to untangle and align bullish. When both timeframes agree, enter long. Don&apos;t force a trade while the 4H is messy.
            </p>
          </div>
        </QuizQuestion>

        <QuizQuestion
          number={3}
          question="Price bounces off EMA 50 at a key support level with 4 touches. What's the setup?"
        >
          <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <p className="text-sm font-bold text-green-800 sm:text-base">Bias: High-Probability Long — EMA + S/R Confluence</p>
            <p className="mt-2 text-sm text-green-900 sm:text-base">
              This is the <strong>holy grail setup</strong> — EMA 50 bounce + horizontal support confluence. Four touches means the level is extremely well-tested. Each bounce confirms that buyers are defending this zone.
            </p>
            <p className="mt-2 text-sm text-green-900/80 sm:text-base">
              <span className="font-semibold">Action:</span> Enter long at the 4th touch with a tight stop just below the support level. The more touches a level has, the more significant the eventual break — but while it holds, it&apos;s gold.
            </p>
          </div>
        </QuizQuestion>

        <QuizQuestion
          number={4}
          question="EMA 20 crosses below EMA 50, but price is still above EMA 200. What's your bias?"
        >
          <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
            <p className="text-sm font-bold text-amber-800 sm:text-base">Bias: Neutral to Cautiously Bullish — Short-Term Weakness, Long-Term Still Bullish</p>
            <p className="mt-2 text-sm text-amber-900 sm:text-base">
              The EMA 20/50 bearish cross signals <strong>short-term momentum has weakened</strong>, but price above EMA 200 means the long-term trend is still up. This is likely a <strong>deeper pullback within an uptrend</strong>, not a reversal.
            </p>
            <p className="mt-2 text-sm text-amber-900/80 sm:text-base">
              <span className="font-semibold">Action:</span> Don&apos;t short this — the long-term trend is still bullish. Wait to see if price holds above EMA 200. If it does and EMA 20 recrosses above EMA 50, that&apos;s your buy signal.
            </p>
          </div>
        </QuizQuestion>

        <QuizQuestion
          number={5}
          question="EMAs are perfectly stacked bearish on Daily. Where do you look for entries?"
        >
          <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4">
            <p className="text-sm font-bold text-red-800 sm:text-base">Bias: Strongly Bearish — Look for Short Entries on Pullbacks</p>
            <p className="mt-2 text-sm text-red-900 sm:text-base">
              Perfect bearish stack (EMA 20 &lt; EMA 50 &lt; EMA 200) means <strong>all timeframes confirm downtrend</strong>. EMAs now act as descending resistance — each pullback to an EMA is a potential short entry.
            </p>
            <p className="mt-2 text-sm text-red-900/80 sm:text-base">
              <span className="font-semibold">Action:</span> Wait for price to pull back up to EMA 20 (strongest ceiling) or EMA 50 (major ceiling). Look for rejection candles (bearish engulfing, shooting star) and enter short with a stop above the EMA.
            </p>
          </div>
        </QuizQuestion>
      </div>

      <KeyTakeaway>
        Real trading isn&apos;t about memorizing patterns — it&apos;s about <strong>understanding the logic behind each EMA signal</strong>. Always ask: &quot;What is the higher timeframe saying?&quot; and &quot;Is structure confirming what the EMAs show?&quot;
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TYPES OF S/R — THE COMPLETE REFERENCE
   ═══════════════════════════════════════════════════════════════════ */

function TopicTypesOfSRExhaustive() {
  const srTypes = [
    {
      id: 'd2-sr-type-horizontal',
      number: 1,
      title: 'Horizontal S/R (Static Levels)',
      icon: <Minus className="h-6 w-6" />,
      color: 'blue' as const,
      concept: 'Flat price levels identified by multiple touches over time. These are the most basic and reliable form of support and resistance — a price that price has bounced off repeatedly.',
      example: 'BTC respecting the $30,000 level as both support and resistance over 2 years. Every time price approaches $30K, buyers or sellers step in because the market remembers this level.',
      tip: 'Draw horizontal lines on every level where price has reversed at least twice. The more touches, the stronger the level. Wait for a third or fourth touch to trade — the market is confirming the level is real.',
    },
    {
      id: 'd2-sr-type-diagonal',
      number: 2,
      title: 'Diagonal S/R (Trendlines & Channels)',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'green' as const,
      concept: 'Dynamic lines connecting higher lows (uptrend support) or lower highs (downtrend resistance). Unlike horizontal levels, diagonal S/R moves with the trend, creating ascending or descending barriers.',
      example: 'SOL making higher lows along an ascending trendline from $20 → $30 → $45. Each bounce off the trendline is a buy opportunity as long as the trendline holds.',
      tip: 'Connect at least 3 swing points to draw a valid trendline. A trendline with 4+ touches is high-probability. When price breaks a trendline, it often retests it from the other side — that retest is your entry.',
    },
    {
      id: 'd2-sr-type-psychological',
      number: 3,
      title: 'Psychological S/R (Round Numbers)',
      icon: <Hash className="h-6 w-6" />,
      color: 'purple' as const,
      concept: 'Human tendency to anchor to whole numbers ($10,000, $100, $1,000). These levels act as S/R simply because millions of traders place orders at round numbers — creating a self-fulfilling prophecy.',
      example: 'BTC struggling at $20,000 simply because it is a mental milestone. Traders set limit orders, stop-losses, and take-profits at round numbers, creating a wall of orders that price must push through.',
      tip: 'Always check if a round number is near your technical S/R level. If both align, that level is extra-strong. Place your entries just before the round number (e.g., $19,950 instead of $20,000) to get filled before the crowd.',
    },
    {
      id: 'd2-sr-type-dynamic',
      number: 4,
      title: 'Dynamic S/R (Moving Averages)',
      icon: <Activity className="h-6 w-6" />,
      color: 'amber' as const,
      concept: 'Indicators that move with price (e.g., 50 EMA, 200 EMA) acting as support in uptrends and resistance in downtrends. Dynamic S/R adapts to current market conditions, unlike static horizontal levels.',
      example: 'ETH bouncing off the 200-day EMA during a bull run. Each time price pulls back to the 200 EMA, buyers step in because they trust this institutional level to hold.',
      tip: 'Combine EMA levels with horizontal S/R for confluence. When the 50 EMA crosses a horizontal support zone, you have double confirmation. Trade the bounce with your stop just below both the EMA and the horizontal level.',
    },
    {
      id: 'd2-sr-type-volume',
      number: 5,
      title: 'Volume-Based S/R (Volume Profile & Order Blocks)',
      icon: <BarChart3 className="h-6 w-6" />,
      color: 'red' as const,
      concept: 'High Volume Nodes (HVN) act as support/resistance because heavy trading occurred there — there is a concentration of limit orders. Order Blocks are institutional footprints — the last bearish candle before a bullish move (or vice versa) that marks where smart money entered.',
      example: 'A massive red candle (Order Block) acting as resistance on a lower timeframe. Price rallies back to the top of that red candle and gets rejected because that is where institutional sellers placed their orders.',
      tip: 'Look for the last opposing candle before a strong impulsive move — that is your Order Block. Combine with Volume Profile: if a High Volume Node aligns with an Order Block, you have found a high-probability S/R zone.',
    },
    {
      id: 'd2-sr-type-fibonacci',
      number: 6,
      title: 'Fibonacci Retracement Levels',
      icon: <Percent className="h-6 w-6" />,
      color: 'teal' as const,
      concept: 'Mathematical levels (0.236, 0.382, 0.5, 0.618, 0.786) where price tends to retrace to before continuing in the original direction. Derived from the Fibonacci sequence, these ratios appear throughout nature and financial markets.',
      example: 'BTC retracing to the 0.618 level of a prior impulse move from $25,000 to $40,000 and bouncing. The 0.618 level at $30,700 becomes a high-probability buy zone because deep retracements to this level are common in crypto.',
      tip: 'The 0.618 and 0.786 levels are the most reliable in crypto — they represent deep retracements where smart money typically enters. Always draw Fib from swing low to swing high (or vice versa) on the same timeframe you are trading.',
    },
  ]

  const colorMap: Record<string, { border: string; bg: string; headerBg: string; iconColor: string; titleColor: string; textColor: string; tipBorder: string; tipBg: string; tipColor: string }> = {
    blue: {
      border: 'border-blue-200',
      bg: 'bg-blue-50/50',
      headerBg: 'bg-blue-100/80',
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-800',
      textColor: 'text-blue-900',
      tipBorder: 'border-blue-300',
      tipBg: 'bg-blue-50',
      tipColor: 'text-blue-800',
    },
    green: {
      border: 'border-green-200',
      bg: 'bg-green-50/50',
      headerBg: 'bg-green-100/80',
      iconColor: 'text-green-600',
      titleColor: 'text-green-800',
      textColor: 'text-green-900',
      tipBorder: 'border-green-300',
      tipBg: 'bg-green-50',
      tipColor: 'text-green-800',
    },
    purple: {
      border: 'border-purple-200',
      bg: 'bg-purple-50/50',
      headerBg: 'bg-purple-100/80',
      iconColor: 'text-purple-600',
      titleColor: 'text-purple-800',
      textColor: 'text-purple-900',
      tipBorder: 'border-purple-300',
      tipBg: 'bg-purple-50',
      tipColor: 'text-purple-800',
    },
    amber: {
      border: 'border-amber-200',
      bg: 'bg-amber-50/50',
      headerBg: 'bg-amber-100/80',
      iconColor: 'text-amber-600',
      titleColor: 'text-amber-800',
      textColor: 'text-amber-900',
      tipBorder: 'border-amber-300',
      tipBg: 'bg-amber-50',
      tipColor: 'text-amber-800',
    },
    red: {
      border: 'border-red-200',
      bg: 'bg-red-50/50',
      headerBg: 'bg-red-100/80',
      iconColor: 'text-red-600',
      titleColor: 'text-red-800',
      textColor: 'text-red-900',
      tipBorder: 'border-red-300',
      tipBg: 'bg-red-50',
      tipColor: 'text-red-800',
    },
    teal: {
      border: 'border-teal-200',
      bg: 'bg-teal-50/50',
      headerBg: 'bg-teal-100/80',
      iconColor: 'text-teal-600',
      titleColor: 'text-teal-800',
      textColor: 'text-teal-900',
      tipBorder: 'border-teal-300',
      tipBg: 'bg-teal-50',
      tipColor: 'text-teal-800',
    },
  }

  return (
    <TopicCard
      id="d2-types-of-sr-complete"
      title="Types of Support & Resistance — The Complete Reference"
      icon={<Waypoints />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        Not all support and resistance is created equal. Understanding the <strong>6 distinct types</strong> of S/R gives you a complete toolkit for reading any chart. The best trades happen when <span className="font-bold">multiple types align</span> at the same price level.
      </p>

      {/* Summary overview */}
      <div className="mb-8 overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-800">
              <th className="px-4 py-3 text-left text-xs font-semibold text-white sm:text-sm">#</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white sm:text-sm">Type</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white sm:text-sm">Key Characteristic</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-white hidden sm:table-cell">Reliability</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-slate-200 bg-blue-50/30 hover:bg-blue-50/60">
              <td className="px-4 py-2.5 text-sm font-bold text-blue-700">1</td>
              <td className="px-4 py-2.5 text-sm font-semibold text-blue-800">Horizontal</td>
              <td className="px-4 py-2.5 text-sm text-slate-700">Flat, static price levels</td>
              <td className="px-4 py-2.5 text-sm text-blue-700 font-semibold hidden sm:table-cell">★★★★★</td>
            </tr>
            <tr className="border-slate-200 bg-green-50/30 hover:bg-green-50/60">
              <td className="px-4 py-2.5 text-sm font-bold text-green-700">2</td>
              <td className="px-4 py-2.5 text-sm font-semibold text-green-800">Diagonal</td>
              <td className="px-4 py-2.5 text-sm text-slate-700">Trendlines that move with the trend</td>
              <td className="px-4 py-2.5 text-sm text-green-700 font-semibold hidden sm:table-cell">★★★★</td>
            </tr>
            <tr className="border-slate-200 bg-purple-50/30 hover:bg-purple-50/60">
              <td className="px-4 py-2.5 text-sm font-bold text-purple-700">3</td>
              <td className="px-4 py-2.5 text-sm font-semibold text-purple-800">Psychological</td>
              <td className="px-4 py-2.5 text-sm text-slate-700">Round number self-fulfilling prophecy</td>
              <td className="px-4 py-2.5 text-sm text-purple-700 font-semibold hidden sm:table-cell">★★★</td>
            </tr>
            <tr className="border-slate-200 bg-amber-50/30 hover:bg-amber-50/60">
              <td className="px-4 py-2.5 text-sm font-bold text-amber-700">4</td>
              <td className="px-4 py-2.5 text-sm font-semibold text-amber-800">Dynamic</td>
              <td className="px-4 py-2.5 text-sm text-slate-700">Moving averages that adapt to price</td>
              <td className="px-4 py-2.5 text-sm text-amber-700 font-semibold hidden sm:table-cell">★★★★</td>
            </tr>
            <tr className="border-slate-200 bg-red-50/30 hover:bg-red-50/60">
              <td className="px-4 py-2.5 text-sm font-bold text-red-700">5</td>
              <td className="px-4 py-2.5 text-sm font-semibold text-red-800">Volume-Based</td>
              <td className="px-4 py-2.5 text-sm text-slate-700">Order Blocks & Volume Profile zones</td>
              <td className="px-4 py-2.5 text-sm text-red-700 font-semibold hidden sm:table-cell">★★★★★</td>
            </tr>
            <tr className="border-slate-200 bg-teal-50/30 hover:bg-teal-50/60">
              <td className="px-4 py-2.5 text-sm font-bold text-teal-700">6</td>
              <td className="px-4 py-2.5 text-sm font-semibold text-teal-800">Fibonacci</td>
              <td className="px-4 py-2.5 text-sm text-slate-700">Mathematical retracement ratios</td>
              <td className="px-4 py-2.5 text-sm text-teal-700 font-semibold hidden sm:table-cell">★★★★</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Each type as its own styled card */}
      <div className="space-y-6">
        {srTypes.map((sr) => {
          const c = colorMap[sr.color]
          return (
            <div key={sr.id} id={sr.id} className={`rounded-xl border-2 ${c.border} ${c.bg} overflow-hidden`}>
              {/* Header */}
              <div className={`${c.headerBg} px-5 py-4 flex items-center gap-3`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/60 ${c.iconColor}`}>
                  {sr.icon}
                </div>
                <div>
                  <span className={`text-xs font-bold ${c.iconColor} uppercase tracking-wider`}>Type {sr.number}</span>
                  <h4 className={`text-base font-bold ${c.titleColor} sm:text-lg`}>{sr.title}</h4>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 py-4 space-y-4">
                {/* Concept */}
                <div>
                  <h5 className={`text-xs font-bold uppercase tracking-wider ${c.iconColor} mb-1.5`}>Concept</h5>
                  <p className={`text-sm leading-relaxed ${c.textColor} sm:text-base`}>{sr.concept}</p>
                </div>

                {/* Crypto Example */}
                <div className={`rounded-lg border ${c.border} bg-white/50 p-3`}>
                  <h5 className={`text-xs font-bold uppercase tracking-wider ${c.iconColor} mb-1.5 flex items-center gap-1.5`}>
                    <DollarSign className="h-3.5 w-3.5" />
                    Crypto-Specific Example
                  </h5>
                  <p className={`text-sm leading-relaxed ${c.textColor} sm:text-base`}>{sr.example}</p>
                </div>

                {/* How to Trade It */}
                <div className={`rounded-lg border-l-4 ${c.tipBorder} ${c.tipBg} p-3`}>
                  <h5 className={`text-xs font-bold uppercase tracking-wider ${c.tipColor} mb-1.5 flex items-center gap-1.5`}>
                    <Lightbulb className="h-3.5 w-3.5" />
                    How to Trade It
                  </h5>
                  <p className={`text-sm leading-relaxed ${c.tipColor} sm:text-base`}>{sr.tip}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Confluence section */}
      <div className="mt-8 rounded-xl border-2 border-emerald-200 bg-emerald-50/50 p-5">
        <h4 className="mb-3 text-base font-bold text-emerald-800 sm:text-lg flex items-center gap-2">
          <Waypoints className="h-5 w-5 text-emerald-600" />
          The Power of Confluence: When Types Align
        </h4>
        <p className="mb-4 text-sm leading-relaxed text-emerald-900 sm:text-base">
          The highest-probability trades happen when <strong>multiple types of S/R converge</strong> at the same price level. This is called <span className="font-bold">confluence</span>, and it dramatically increases your win rate.
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">1</span>
            <p className="text-sm text-emerald-900 sm:text-base">
              <strong>Horizontal + Psychological:</strong> A $40,000 horizontal level IS a psychological round number. Double confluence = extra strong.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">2</span>
            <p className="text-sm text-emerald-900 sm:text-base">
              <strong>Dynamic + Horizontal:</strong> EMA 50 landing on a horizontal support zone. The EMA confirms what the horizontal level already told you.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">3</span>
            <p className="text-sm text-emerald-900 sm:text-base">
              <strong>Fibonacci + Volume-Based:</strong> The 0.618 Fib level aligns with an Order Block. Smart money entered at this mathematical level before.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">4</span>
            <p className="text-sm text-emerald-900 sm:text-base">
              <strong>Diagonal + All Others:</strong> An ascending trendline meets horizontal support at a round number with EMA confluence — this is the <span className="font-bold">holy grail</span> setup.
            </p>
          </div>
        </div>
      </div>

      {/* S/R Type Comparison SVG */}
      <div className="mt-6">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: All 6 Types of S/R on One Chart
        </h4>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <svg viewBox="0 0 620 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Grid lines */}
            <line x1="0" y1="56" x2="620" y2="56" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="112" x2="620" y2="112" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="168" x2="620" y2="168" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="224" x2="620" y2="224" stroke="#e2e8f0" strokeWidth="0.5" />

            {/* Type 1: Horizontal S/R (Blue) */}
            <line x1="0" y1="120" x2="620" y2="120" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6,3" />
            <rect x="440" y="108" width="170" height="20" rx="4" fill="#3b82f6" opacity="0.15" />
            <text x="525" y="122" fontSize="9" fill="#3b82f6" fontWeight="bold" textAnchor="middle">1. Horizontal $30K</text>

            {/* Type 2: Diagonal S/R (Green) - ascending trendline */}
            <line x1="20" y1="220" x2="600" y2="100" stroke="#16a34a" strokeWidth="2" />
            <text x="580" y="95" fontSize="9" fill="#16a34a" fontWeight="bold">2. Trendline</text>

            {/* Type 3: Psychological S/R (Purple) */}
            <line x1="0" y1="60" x2="620" y2="60" stroke="#9333ea" strokeWidth="2" strokeDasharray="3,4" />
            <text x="570" y="55" fontSize="9" fill="#9333ea" fontWeight="bold">3. $40K Psych</text>

            {/* Type 4: Dynamic S/R (Amber) - EMA-like curve */}
            <polyline
              points="20,210 60,195 100,180 140,168 180,155 220,148 260,140 300,132 340,128 380,122 420,118 460,112 500,108 540,105 580,100"
              fill="none" stroke="#f59e0b" strokeWidth="2" />
            <text x="590" y="98" fontSize="8" fill="#f59e0b" fontWeight="bold">4. 50 EMA</text>

            {/* Type 5: Volume-Based S/R (Red) - order block zone */}
            <rect x="280" y="100" width="60" height="35" rx="4" fill="#ef4444" opacity="0.15" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4,2" />
            <text x="310" y="92" fontSize="8" fill="#ef4444" fontWeight="bold" textAnchor="middle">5. Order Block</text>

            {/* Type 6: Fibonacci Level (Teal) */}
            <line x1="0" y1="155" x2="620" y2="155" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="8,4,2,4" />
            <text x="440" y="168" fontSize="8" fill="#14b8a6" fontWeight="bold">6. Fib 0.618</text>

            {/* Price line */}
            <polyline
              points="20,230 60,210 100,190 140,200 180,170 220,160 260,140 300,130 340,150 380,135 420,110 460,125 500,100 540,115 580,90"
              fill="none" stroke="#1e293b" strokeWidth="2" />

            {/* Bounce markers */}
            <circle cx="140" cy="200" r="5" fill="#16a34a" /> {/* Trendline bounce */}
            <circle cx="300" cy="130" r="5" fill="#3b82f6" /> {/* Horizontal bounce */}
            <circle cx="380" cy="135" r="5" fill="#f59e0b" /> {/* EMA bounce */}
            <circle cx="500" cy="100" r="5" fill="#14b8a6" /> {/* Fib bounce */}

            {/* Legend */}
            <rect x="20" y="248" width="580" height="28" rx="6" fill="white" stroke="#e2e8f0" />
            <circle cx="50" cy="262" r="4" fill="#3b82f6" />
            <text x="60" y="266" fontSize="7.5" fill="#3b82f6" fontWeight="bold">Horizontal</text>
            <circle cx="130" cy="262" r="4" fill="#16a34a" />
            <text x="140" y="266" fontSize="7.5" fill="#16a34a" fontWeight="bold">Diagonal</text>
            <circle cx="200" cy="262" r="4" fill="#9333ea" />
            <text x="210" y="266" fontSize="7.5" fill="#9333ea" fontWeight="bold">Psychological</text>
            <circle cx="295" cy="262" r="4" fill="#f59e0b" />
            <text x="305" y="266" fontSize="7.5" fill="#f59e0b" fontWeight="bold">Dynamic</text>
            <circle cx="365" cy="262" r="4" fill="#ef4444" />
            <text x="375" y="266" fontSize="7.5" fill="#ef4444" fontWeight="bold">Volume-Based</text>
            <circle cx="465" cy="262" r="4" fill="#14b8a6" />
            <text x="475" y="266" fontSize="7.5" fill="#14b8a6" fontWeight="bold">Fibonacci</text>
            <circle cx="545" cy="262" r="4" fill="#1e293b" />
            <text x="555" y="266" fontSize="7.5" fill="#1e293b" fontWeight="bold">Price</text>
          </svg>
        </div>
      </div>

      <AnalogyBox title="Think of S/R Types Like Layers of Armor">
        A single horizontal level is like a leather vest — decent protection. But when horizontal S/R, a round number, and the 50 EMA all converge at the same price? That&apos;s plate armor with a shield. The more layers that align, the harder it is for price to break through.
      </AnalogyBox>

      <KeyTakeaway>
        The <strong>6 types of S/R</strong> are your complete toolkit. Learn to identify each one, then look for <span className="font-bold">confluence</span> — when 2 or more types align at the same price, you have found a high-probability trading level.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════════ */

export function Day2AfternoonBlock() {
  return (
    <section id="d2-afternoon" aria-label="Afternoon Block - Session 3">
      <SectionDivider title="AFTERNOON BLOCK — SESSION 3: MOVING AVERAGES & EMA TRADING" />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicMovingAverages />

        <TopicThreeEMAs />

        <TopicEMASignalRules />

        <TopicGoldenAndDeathCross />

        <TopicEMAsDynamicSR />

        <TopicEMACrossoverStrategy />

        <TopicWhenEMAsFail />

        <TopicEMASRConfluence />

        <TopicEMATradingRulesSummary />

        <TopicEMAPracticeSetups />

        <TopicTypesOfSRExhaustive />

        {/* TradingViewLab for EMA practice */}
        <TopicCard id="d2-ema-lab" title="EMA Practice Lab — TradingView" icon={<FlaskConical />} variant="success">
          <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Use the TradingView simulator below to practice configuring and reading EMAs on live charts.
          </p>
          <div className="mb-4 rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
            <h4 className="text-sm font-bold text-amber-800 mb-2">Lab Tasks</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">1</span>
                <span>Add EMA 20 (yellow), EMA 50 (teal), and EMA 200 (red) to BTC/USDT Daily chart</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">2</span>
                <span>Identify the current EMA alignment — are they stacked bullish, bearish, or tangled?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">3</span>
                <span>Find the last time price bounced off EMA 20 or EMA 50 — did it hold as dynamic support/resistance?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">4</span>
                <span>Look for a recent Golden Cross or Death Cross on the daily chart. Where was the pullback entry?</span>
              </li>
            </ol>
          </div>

          <TradingViewLab />
        </TopicCard>

        {/* MEXC Lab 2 — Horizontal S/R Trading */}
        <AppliedLabSimulation
          id="d2-lab-2-mexc"
          title="LAB 2: Trading Horizontal Support & Resistance Levels"
          subtitle="Use the MEXC demo trading simulator to execute a trade based on a static S/R level"
          dayNumber={2}
          sessionName="Afternoon Block"
          labType="mexc"
          learningObjectives={[
            'Identify a clear horizontal support level on BTC',
            'Place a Limit Buy Order just above the support level',
            'Place a Stop-Loss Order just below the support level',
            'Execute a trade with a strict risk management plan based on a static S/R level',
          ]}
          tasks={[
            { id: 'd2-l2-t1', instruction: 'Identify a clear horizontal support level on the BTC chart in the MEXC simulator', hint: 'Look at the order book — where are the most buy orders clustered? That often aligns with a support level' },
            { id: 'd2-l2-t2', instruction: 'Switch to "Limit" order type and set the Buy side', hint: 'A limit order lets you specify the exact price you want to buy at — better than market order for S/R trading' },
            { id: 'd2-l2-t3', instruction: 'Set your limit buy price just ABOVE the support level (e.g., if support is $40,000, set limit at $40,050)', hint: 'Buying just above support ensures you get filled if price bounces, rather than missing the move' },
            { id: 'd2-l2-t4', instruction: 'Set your amount to 0.01 BTC and click "Buy BTC"', hint: 'With 10,000 USDT balance, 0.01 BTC at ~$40,000 = ~$400, which is 4% of your portfolio — reasonable for a single trade' },
            { id: 'd2-l2-t5', instruction: 'Now imagine your stop-loss: it should be just BELOW the support level. If support is $40,000, stop-loss would be at ~$39,800 (0.5% below)', hint: 'Your stop-loss should be placed where the support level would be invalidated — not at a random distance' },
            { id: 'd2-l2-t6', instruction: 'Calculate your risk-reward ratio: Risk = entry - stop loss. Reward = next resistance - entry. Aim for at least 1:2 risk-reward', hint: 'If entry is $40,050, stop at $39,800 (risk = $250), and next resistance is $41,000 (reward = $950), your R:R is about 1:3.8 — excellent!' },
          ]}
          selfAssessment={[
            {
              question: 'Where should you place your stop-loss when buying at support?',
              options: [
                'Just above the support level',
                'Just below the support level',
                'At the same price as your entry',
                'At the next resistance level',
              ],
              correctIndex: 1,
              explanation: 'Your stop-loss should be just below support because if price breaks below support, the level has failed and your trade thesis is invalidated. Placing it above support would trigger before the trade has a chance to work.',
            },
            {
              question: 'What is the minimum risk-reward ratio you should accept for an S/R-based trade?',
              options: [
                '1:0.5 (risk more than you can gain)',
                '1:1 (equal risk and reward)',
                '1:2 (risk 1 unit to gain 2 units)',
                '1:0.1 (tiny reward, big risk)',
              ],
              correctIndex: 2,
              explanation: 'A minimum 1:2 risk-reward ratio means you only need to be right 33% of the time to break even. With S/R-based trades, you should aim for 1:2 or better because the levels give you defined risk and reward points.',
            },
            {
              question: 'Why use a Limit Order instead of a Market Order when trading at support?',
              options: [
                'Limit orders are faster to execute',
                'Limit orders let you specify the exact entry price near support',
                'Limit orders have lower fees on all exchanges',
                'Market orders are always better',
              ],
              correctIndex: 1,
              explanation: 'A limit order lets you set a precise entry price just above support, ensuring you get a good fill. A market order would execute at whatever the current price is, which might be far from your intended support level entry.',
            },
          ]}
          expectedOutcomes={[
            'Ability to identify and trade horizontal S/R levels',
            'Understanding of limit order placement at support levels',
            'Knowledge of stop-loss placement relative to S/R',
            'Ability to calculate risk-reward ratios for S/R trades',
          ]}
        />
      </div>
    </section>
  )
}
