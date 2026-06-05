'use client'

import React from 'react'
import {
  BarChart3,
  Scale,
  PieChart,
  TrendingUp,
  Coins,
  Users,
  Info,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { ComparisonTable } from '@/components/academy/comparison-table'

/* ═══════════════════════════════════════════════════════════════ */
/*  TOPIC 1: MVRV Ratio — Is Bitcoin Overvalued or Undervalued? */
/* ═══════════════════════════════════════════════════════════════ */
function TopicMVRV() {
  return (
    <TopicCard
      id="d6-mvrv"
      title="MVRV Ratio — Is Bitcoin Overvalued or Undervalued?"
      icon={<Scale />}
      variant="highlight"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        The MVRV ratio is one of the most powerful on-chain indicators for identifying market tops and
        bottoms. It compares the current market valuation to the &quot;real&quot; cost basis of all holders.
      </p>

      {/* FORMULA BREAKDOWN */}
      <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900 sm:text-base">
          Formula Breakdown
        </h4>
        <div className="space-y-3">
          <div className="rounded-lg border border-violet-200 bg-violet-50/60 p-3">
            <p className="text-center text-base font-bold text-violet-800 sm:text-lg">
              MVRV = Market Value / Realized Value
            </p>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
              <span>
                <strong>Market Value</strong> = Current price &times; circulating supply (just like
                traditional market cap)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-500" />
              <span>
                <strong>Realized Value</strong> = Sum of all BTC at the price they were{' '}
                <span className="font-bold text-violet-700">LAST MOVED</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ANALOGY BOX */}
      <div className="mb-5 rounded-lg border-l-4 border-l-violet-500 bg-violet-50/60 p-4 sm:px-6">
        <div className="flex items-start gap-3">
          <span className="text-xl flex-shrink-0">&#128161;</span>
          <div>
            <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-violet-700">
              Analogy
            </p>
            <p className="text-sm italic text-slate-700 sm:text-base">
              Think of Realized Value as the &apos;average cost basis&apos; of all BTC holders. If MVRV
              is 3, it means the market is valued at 3&times; what holders paid on average —
              they&apos;re sitting on massive profits and likely to sell.
            </p>
          </div>
        </div>
      </div>

      {/* MVRV INTERPRETATION ZONES — VERTICAL GAUGE SVG */}
      <div className="mb-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900 sm:text-base">
          MVRV Interpretation Zones
        </h4>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-8">
          {/* Vertical gauge */}
          <div className="flex-shrink-0">
            <svg width="80" height="280" viewBox="0 0 80 280" className="mx-auto">
              {/* Overvalued zone (top) */}
              <rect x="20" y="0" width="40" height="60" rx="6" fill="#ef4444" opacity="0.85" />
              <text x="40" y="35" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                &gt;3.5
              </text>

              {/* Elevated zone */}
              <rect x="20" y="65" width="40" height="70" rx="6" fill="#f59e0b" opacity="0.85" />
              <text x="40" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                2.0–3.5
              </text>

              {/* Normal zone */}
              <rect x="20" y="140" width="40" height="70" rx="6" fill="#22c55e" opacity="0.85" />
              <text x="40" y="180" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                1.0–2.0
              </text>

              {/* Undervalued zone (bottom) */}
              <rect x="20" y="215" width="40" height="60" rx="6" fill="#7c3aed" opacity="0.85" />
              <text x="40" y="250" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                &lt;1.0
              </text>

              {/* Labels on the right */}
              <text x="66" y="35" textAnchor="start" fill="#ef4444" fontSize="8" fontWeight="600">
                TOP
              </text>
              <text x="66" y="105" textAnchor="start" fill="#f59e0b" fontSize="8" fontWeight="600">
                CAUTION
              </text>
              <text x="66" y="180" textAnchor="start" fill="#22c55e" fontSize="8" fontWeight="600">
                NEUTRAL
              </text>
              <text x="66" y="250" textAnchor="start" fill="#7c3aed" fontSize="8" fontWeight="600">
                BOTTOM
              </text>

              {/* Arrow indicator */}
              <polygon points="10,30 18,25 18,35" fill="#1e293b" opacity="0.5" />
              <text x="8" y="20" textAnchor="middle" fill="#64748b" fontSize="7">
                Overvalued
              </text>
              <polygon points="10,250 18,245 18,255" fill="#1e293b" opacity="0.5" />
              <text x="8" y="270" textAnchor="middle" fill="#64748b" fontSize="7">
                Undervalued
              </text>
            </svg>
          </div>

          {/* Zone descriptions */}
          <div className="flex-1 space-y-3">
            <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 p-3">
              <p className="text-sm font-bold text-red-800">MVRV &gt; 3.5 — Overvalued</p>
              <p className="mt-1 text-xs text-red-700 sm:text-sm">Market top zone. Holders have 3.5&times;+ profits. Selling pressure increases dramatically.</p>
            </div>
            <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-3">
              <p className="text-sm font-bold text-amber-800">MVRV 2.0–3.5 — Elevated</p>
              <p className="mt-1 text-xs text-amber-700 sm:text-sm">Caution zone. Good profits but not extreme. Continue with tightened risk management.</p>
            </div>
            <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-3">
              <p className="text-sm font-bold text-green-800">MVRV 1.0–2.0 — Normal</p>
              <p className="mt-1 text-xs text-green-700 sm:text-sm">Neutral zone. Market is fairly valued. Standard trading conditions apply.</p>
            </div>
            <div className="rounded-lg border-l-4 border-l-violet-500 bg-violet-50 p-3">
              <p className="text-sm font-bold text-violet-800">MVRV &lt; 1.0 — Undervalued</p>
              <p className="mt-1 text-xs text-violet-700 sm:text-sm">Market bottom zone. Holders are at a loss on average. Historically the best accumulation zone.</p>
            </div>
          </div>
        </div>
      </div>

      {/* HISTORICAL ACCURACY */}
      <div className="mb-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900 sm:text-base">
          Historical Accuracy
        </h4>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100/40 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600">MVRV &gt; 3.5</p>
            <p className="mt-2 text-sm font-bold text-red-900">Called Tops</p>
            <p className="mt-1 text-xs text-red-700">2014, 2017, 2021 — every major Bitcoin top was flagged by MVRV entering the overvalued zone.</p>
          </div>
          <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100/40 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-green-600">MVRV &lt; 1.0</p>
            <p className="mt-2 text-sm font-bold text-green-900">Called Bottoms</p>
            <p className="mt-1 text-xs text-green-700">2015, 2018, 2022 — every major bottom coincided with MVRV dropping below 1.0.</p>
          </div>
          <div className="rounded-xl border border-violet-200 bg-gradient-to-br from-violet-50 to-violet-100/40 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-violet-600">Current Context</p>
            <p className="mt-2 text-sm font-bold text-violet-900">Always Check Live</p>
            <p className="mt-1 text-xs text-violet-700">MVRV thresholds shift over time. Use current data on Glassnode — don&apos;t rely on outdated numbers.</p>
          </div>
        </div>
      </div>

      {/* HOW TO USE */}
      <div className="rounded-lg border-l-4 border-l-slate-400 bg-slate-50 p-4 sm:px-6">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-500" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
              How to Use
            </p>
            <p className="mt-1.5 text-sm text-slate-700 sm:text-base">
              Check MVRV on <strong>Glassnode</strong>. When it enters extreme zones (above 3.5 or below
              1.0), adjust your trading bias. Extreme high = reduce exposure. Extreme low = consider
              accumulating.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════ */
/*  TOPIC 2: NUPL — Net Unrealized Profit/Loss                   */
/* ═══════════════════════════════════════════════════════════════ */
function TopicNUPL() {
  return (
    <TopicCard
      id="d6-nupl"
      title="NUPL — Net Unrealized Profit/Loss"
      icon={<PieChart />}
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        NUPL measures the aggregate unrealized profit or loss across the entire Bitcoin network.
        It tells you whether the market is in a state of profit or pain.
      </p>

      {/* FORMULA */}
      <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900 sm:text-base">
          Formula
        </h4>
        <div className="rounded-lg border border-violet-200 bg-violet-50/60 p-3">
          <p className="text-center text-base font-bold text-violet-800 sm:text-lg">
            NUPL = (Market Cap &minus; Realized Cap) / Market Cap
          </p>
        </div>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          The result ranges from &minus;0.5 to +1.0. Positive values mean the network is in profit;
          negative values mean the network is at a loss.
        </p>
      </div>

      {/* NUPL ZONES — HORIZONTAL BAR SVG */}
      <div className="mb-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900 sm:text-base">
          NUPL Zones
        </h4>

        {/* Horizontal bar */}
        <div className="mb-4 overflow-x-auto">
          <svg width="100%" viewBox="0 0 600 70" className="min-w-[500px]">
            {/* Surrender zone */}
            <rect x="0" y="10" width="60" height="40" rx="6" fill="#7c3aed" opacity="0.85" />
            <text x="30" y="35" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              &lt;0
            </text>

            {/* Capitulation zone */}
            <rect x="65" y="10" width="85" height="40" rx="6" fill="#22c55e" opacity="0.85" />
            <text x="107" y="35" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              0–0.25
            </text>

            {/* Hope/Fear zone */}
            <rect x="155" y="10" width="120" height="40" rx="6" fill="#eab308" opacity="0.85" />
            <text x="215" y="35" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              0.25–0.50
            </text>

            {/* Belief/Optimism zone */}
            <rect x="280" y="10" width="145" height="40" rx="6" fill="#f97316" opacity="0.85" />
            <text x="352" y="35" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              0.50–0.75
            </text>

            {/* Euphoria zone */}
            <rect x="430" y="10" width="170" height="40" rx="6" fill="#ef4444" opacity="0.85" />
            <text x="515" y="35" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
              &gt;0.75
            </text>

            {/* Zone labels below */}
            <text x="30" y="63" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="600">
              Surrender
            </text>
            <text x="107" y="63" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="600">
              Capitulation
            </text>
            <text x="215" y="63" textAnchor="middle" fill="#eab308" fontSize="8" fontWeight="600">
              Hope / Fear
            </text>
            <text x="352" y="63" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="600">
              Belief / Optimism
            </text>
            <text x="515" y="63" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="600">
              Euphoria / Top
            </text>
          </svg>
        </div>

        {/* Zone descriptions */}
        <div className="space-y-2">
          <div className="flex items-start gap-3 rounded-lg border-l-4 border-l-red-500 bg-red-50 p-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              &gt;75%
            </span>
            <div>
              <p className="text-sm font-bold text-red-800">Euphoria / Top</p>
              <p className="text-xs text-red-700 sm:text-sm">Profit-taking imminent. The majority of the network is in deep profit — historically signals market tops.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border-l-4 border-l-orange-500 bg-orange-50 p-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
              50–75%
            </span>
            <div>
              <p className="text-sm font-bold text-orange-800">Belief / Optimism</p>
              <p className="text-xs text-orange-700 sm:text-sm">Trend continues. Market is in profit but not extreme — bullish trend typically persists in this zone.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border-l-4 border-l-yellow-500 bg-yellow-50 p-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-xs font-bold text-white">
              25–50%
            </span>
            <div>
              <p className="text-sm font-bold text-yellow-800">Hope / Fear</p>
              <p className="text-xs text-yellow-700 sm:text-sm">Uncertainty. Market is transitioning — could go either way. Standard risk management applies.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
              0–25%
            </span>
            <div>
              <p className="text-sm font-bold text-green-800">Capitulation</p>
              <p className="text-xs text-green-700 sm:text-sm">Buying opportunity. Many holders are underwater. Historically a strong accumulation zone.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border-l-4 border-l-violet-500 bg-violet-50 p-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-violet-500 text-xs font-bold text-white">
              &lt;0%
            </span>
            <div>
              <p className="text-sm font-bold text-violet-800">Surrender</p>
              <p className="text-xs text-violet-700 sm:text-sm">Maximum fear, best buying zone. The entire network is at a loss. This is where diamonds are made.</p>
            </div>
          </div>
        </div>
      </div>

      {/* HOW TO COMBINE WITH TRADING */}
      <div className="space-y-0">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900 sm:text-base">
          How to Combine with Trading
        </h4>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100/40 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-green-600">Capitulation / Surrender</p>
            <p className="mt-2 text-sm font-semibold text-green-900">Look for Long Setups</p>
            <p className="mt-1 text-xs text-green-700">
              When NUPL is in the capitulation or surrender zone, use the chart patterns and support levels
              from <span className="font-bold">Day 2–3</span> to identify high-probability long entries.
            </p>
          </div>
          <div className="rounded-xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100/40 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-red-600">Euphoria Zone</p>
            <p className="mt-2 text-sm font-semibold text-red-900">Take Profits, Tighten Stops</p>
            <p className="mt-1 text-xs text-red-700">
              When NUPL enters euphoria, apply the risk management rules from <span className="font-bold">Day 4</span> —
              take partial profits and move stop losses to breakeven.
            </p>
          </div>
          <div className="rounded-xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100/40 p-4">
            <p className="text-xs font-bold uppercase tracking-wider text-yellow-600">Hope / Fear Zone</p>
            <p className="mt-2 text-sm font-semibold text-yellow-900">Normal Trading Conditions</p>
            <p className="mt-1 text-xs text-yellow-700">
              Standard technical analysis applies. No extreme on-chain signal — trade your plan
              without bias from macro on-chain data.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════ */
/*  TOPIC 3: SOPR — Spent Output Profit Ratio                    */
/* ═══════════════════════════════════════════════════════════════ */
function TopicSOPR() {
  return (
    <TopicCard
      id="d6-sopr"
      title="SOPR — Spent Output Profit Ratio"
      icon={<TrendingUp />}
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        SOPR tells you whether coins being moved on-chain are being moved at a profit or a loss.
        It&apos;s a direct measure of realized profit/loss across the network.
      </p>

      {/* FORMULA */}
      <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900 sm:text-base">
          Formula
        </h4>
        <div className="rounded-lg border border-violet-200 bg-violet-50/60 p-3">
          <p className="text-center text-base font-bold text-violet-800 sm:text-lg">
            SOPR = Total USD Value of Spent Outputs / Total USD Value When Created
          </p>
        </div>
      </div>

      {/* SOPR INTERPRETATION */}
      <div className="mb-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900 sm:text-base">
          SOPR Interpretation
        </h4>
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                1
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  SOPR &gt; 1.0: Selling at a <span className="text-green-700">PROFIT</span>
                </p>
                <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">On average, people are selling coins they acquired at a lower price — they&apos;re realizing gains.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                2
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  SOPR &lt; 1.0: Selling at a <span className="text-red-700">LOSS</span>
                </p>
                <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">On average, people are selling coins below what they paid — they&apos;re realizing losses.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-3">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                3
              </span>
              <div>
                <p className="text-sm font-bold text-amber-900">
                  SOPR &gt; 1.1: Profit-Taking Increasing
                </p>
                <p className="mt-0.5 text-xs text-amber-700 sm:text-sm">Selling pressure is rising. More holders are taking profits, which can push price down.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border-l-4 border-l-slate-400 bg-slate-50 p-3">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-500 text-xs font-bold text-white">
                4
              </span>
              <div>
                <p className="text-sm font-bold text-slate-700">
                  SOPR around 1.0: Breakeven Selling
                </p>
                <p className="mt-0.5 text-xs text-slate-600 sm:text-sm">Neutral — people are selling at roughly what they paid. No strong directional signal.</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-3">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                5
              </span>
              <div>
                <p className="text-sm font-bold text-green-800">
                  SOPR &lt; 0.95: Forced Selling / Capitulation
                </p>
                <p className="mt-0.5 text-xs text-green-700 sm:text-sm">Potential bottom. People are selling at significant losses, often forced by margin calls or panic.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KEY INSIGHT BOX */}
      <div className="mb-5 rounded-lg border-l-4 border-l-violet-500 bg-violet-50 p-4 sm:px-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Key Insight — The SOPR Reset
            </p>
            <p className="mt-1.5 text-sm font-semibold text-violet-900 sm:text-base">
              When SOPR drops below 1.0 during a bull market, it&apos;s often a buying opportunity.
              Holders refuse to sell at a loss, creating a supply squeeze. This is the{' '}
              <span className="underline">&apos;SOPR reset&apos;</span> — a powerful signal that
              short-term holders have capitulated and smart money is accumulating.
            </p>
          </div>
        </div>
      </div>

      {/* ADJUSTED SOPR NOTE */}
      <div className="rounded-lg border-l-4 border-l-slate-400 bg-slate-50 p-4 sm:px-6">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-500" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Adjusted SOPR
            </p>
            <p className="mt-1.5 text-sm text-slate-700 sm:text-base">
              The <strong>Adjusted SOPR</strong> excludes mining and early wallet movements, making it
              more accurate for trading signals. Always prefer adjusted SOPR over the raw metric.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════ */
/*  TOPIC 4: Stablecoin Supply Ratio (SSR)                       */
/* ═══════════════════════════════════════════════════════════════ */
function TopicSSR() {
  return (
    <TopicCard
      id="d6-ssr"
      title="Stablecoin Supply Ratio (SSR)"
      icon={<Coins />}
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        The Stablecoin Supply Ratio measures how much &quot;dry powder&quot; is sitting on the sidelines
        ready to buy Bitcoin. It compares Bitcoin&apos;s market cap to the total stablecoin supply.
      </p>

      {/* FORMULA */}
      <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900 sm:text-base">
          Formula
        </h4>
        <div className="rounded-lg border border-violet-200 bg-violet-50/60 p-3">
          <p className="text-center text-base font-bold text-violet-800 sm:text-lg">
            SSR = Bitcoin Market Cap / Total Stablecoin Market Cap
          </p>
        </div>
      </div>

      {/* KEY CONCEPT BOX */}
      <div className="mb-5 rounded-lg border-l-4 border-l-violet-500 bg-violet-50 p-4 sm:px-6">
        <div className="flex items-start gap-3">
          <span className="text-xl flex-shrink-0">&#128161;</span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Key Concept
            </p>
            <p className="mt-1.5 text-sm font-semibold text-violet-900 sm:text-base">
              Think of stablecoins as &apos;ammo&apos; waiting to be deployed. When there&apos;s a lot of
              stablecoin dry powder on the sidelines, BTC has fuel to rally.
            </p>
          </div>
        </div>
      </div>

      {/* SSR INTERPRETATION — SIDE BY SIDE CARDS */}
      <div className="mb-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-900 sm:text-base">
          SSR Interpretation
        </h4>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-red-50/40 p-4 sm:p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                &#8593;
              </span>
              <p className="text-base font-bold text-red-900 sm:text-lg">HIGH SSR</p>
            </div>
            <ul className="space-y-2 text-sm text-red-800 sm:text-base">
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span>Not enough stablecoin &quot;dry powder&quot; to push BTC higher</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span>Reduced buying pressure</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span className="font-bold">Bearish signal</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50/40 p-4 sm:p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                &#8595;
              </span>
              <p className="text-base font-bold text-green-900 sm:text-lg">LOW SSR</p>
            </div>
            <ul className="space-y-2 text-sm text-green-800 sm:text-base">
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span>Lots of stablecoins sitting on the sidelines</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span>Potential buying power ready to deploy</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span className="font-bold">Bullish signal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* PRACTICAL APPLICATION */}
      <div className="rounded-lg border-l-4 border-l-violet-500 bg-violet-50 p-4 sm:px-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
              Practical Application
            </p>
            <p className="mt-1.5 text-sm font-semibold text-violet-900 sm:text-base">
              When SSR is low and BTC starts rallying, the fuel is there for a big move. Track total USDT,
              USDC, and DAI supply on exchanges. Rising stablecoin supply + falling SSR = the powder keg
              is loading.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════ */
/*  TOPIC 5: Active Addresses & Network Activity                 */
/* ═══════════════════════════════════════════════════════════════ */
function TopicActiveAddresses() {
  return (
    <TopicCard
      id="d6-active-addresses"
      title="Active Addresses & Network Activity"
      icon={<Users />}
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Network activity metrics tell you whether people are actually using Bitcoin. A price move
        backed by strong network activity is far more trustworthy than one without.
      </p>

      {/* 5 NETWORK METRICS */}
      <div className="space-y-4">
        {/* 1. Active Addresses */}
        <div className="rounded-xl border border-violet-200 bg-gradient-to-r from-violet-50 to-violet-100/30 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
              1
            </span>
            <h4 className="text-base font-bold text-violet-900 sm:text-lg">Active Addresses</h4>
          </div>
          <p className="text-sm text-slate-700 sm:text-base">
            Unique addresses participating in transactions per day. This is the most direct measure
            of network usage.
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-3">
              <p className="text-xs font-bold uppercase text-green-700">Bullish Signal</p>
              <p className="mt-1 text-xs text-green-800 sm:text-sm">
                Rising active addresses + rising price = Healthy bull market
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-3">
              <p className="text-xs font-bold uppercase text-red-700">Bearish Divergence</p>
              <p className="mt-1 text-xs text-red-800 sm:text-sm">
                Rising price + falling active addresses = Weakened rally
              </p>
            </div>
          </div>
        </div>

        {/* 2. New Addresses */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
              2
            </span>
            <h4 className="text-base font-bold text-slate-900 sm:text-lg">New Addresses</h4>
          </div>
          <p className="text-sm text-slate-700 sm:text-base">
            Growth in network adoption — new participants entering the ecosystem.
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-3">
              <p className="text-xs font-bold uppercase text-green-700">Sustained Growth</p>
              <p className="mt-1 text-xs text-green-800 sm:text-sm">
                Increasing new addresses = Fundamental strength and adoption
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-100 p-3">
              <p className="text-xs font-bold uppercase text-slate-600">Declining</p>
              <p className="mt-1 text-xs text-slate-700 sm:text-sm">
                Decreasing new addresses = Losing interest, potential weakness
              </p>
            </div>
          </div>
        </div>

        {/* 3. Transaction Count */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
              3
            </span>
            <h4 className="text-base font-bold text-slate-900 sm:text-lg">Transaction Count</h4>
          </div>
          <p className="text-sm text-slate-700 sm:text-base">
            Overall blockchain usage — how many transactions are being processed.
          </p>
          <div className="mt-3 rounded-lg border-l-4 border-l-violet-500 bg-violet-50 p-3">
            <p className="text-sm font-semibold text-violet-800">
              Transaction spikes often precede price moves. A sudden surge in on-chain transactions
              can signal that large players are positioning.
            </p>
          </div>
        </div>

        {/* 4. Hash Rate */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
              4
            </span>
            <h4 className="text-base font-bold text-slate-900 sm:text-lg">Hash Rate</h4>
          </div>
          <p className="text-sm text-slate-700 sm:text-base">
            Mining security and confidence — the computational power securing the network.
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-green-200 bg-green-50 p-3">
              <p className="text-xs font-bold uppercase text-green-700">Rising Hash Rate</p>
              <p className="mt-1 text-xs text-green-800 sm:text-sm">
                Miners investing in infrastructure = Bullish long-term signal
              </p>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50 p-3">
              <p className="text-xs font-bold uppercase text-red-700">Falling Hash Rate</p>
              <p className="mt-1 text-xs text-red-800 sm:text-sm">
                Miners shutting down operations = Bearish signal (miner capitulation)
              </p>
            </div>
          </div>
        </div>

        {/* 5. NVT Ratio */}
        <div className="rounded-xl border-2 border-violet-300 bg-gradient-to-br from-violet-50 to-violet-100/30 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
              5
            </span>
            <h4 className="text-base font-bold text-violet-900 sm:text-lg">
              Network-to-Transaction (NVT) Ratio
            </h4>
          </div>
          <p className="text-sm text-slate-700 sm:text-base">
            Often called <span className="font-bold text-violet-700">&quot;Crypto&apos;s P/E Ratio&quot;</span> —
            it compares network value to transaction volume.
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-red-200 bg-red-50 p-3">
              <p className="text-xs font-bold uppercase text-red-700">High NVT</p>
              <p className="mt-1 text-xs text-red-800 sm:text-sm">
                Overvalued — like a high P/E stock. Price is high relative to actual usage.
              </p>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-3">
              <p className="text-xs font-bold uppercase text-green-700">Low NVT</p>
              <p className="mt-1 text-xs text-green-800 sm:text-sm">
                Undervalued — like a low P/E stock. High usage relative to price.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* KEY TAKEAWAY */}
      <div className="mt-6">
        <KeyTakeaway>
          Confirm your technical analysis with network activity. A breakout with rising active addresses
          is more trustworthy than a breakout with declining activity. On-chain confirmation adds conviction.
        </KeyTakeaway>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════ */
/*  MAIN EXPORT                                                   */
/* ═══════════════════════════════════════════════════════════════ */
export function Day6LateMorningBlock() {
  return (
    <section id="d6-late-morning" aria-label="Day 6 Late Morning Block">
      <SectionDivider title="LATE MORNING BLOCK — HOUR 3: ON-CHAIN METRICS & INDICATORS" icon={<BarChart3 />} />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
        <TopicMVRV />
        <TopicNUPL />
        <TopicSOPR />
        <TopicSSR />
        <TopicActiveAddresses />
      </div>
    </section>
  )
}
