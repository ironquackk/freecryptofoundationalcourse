'use client'

import React from 'react'
import {
  TrendingUp,
  TrendingDown,
  GitBranch,
  Layers,
  Zap,
  Target,
  Eye,
  BarChart3,
  Activity,
  Crosshair,
  FlaskConical,
  AlertTriangle,
  Shield,
  Footprints,
  CheckCircle2,
  XCircle,
  Ban,
  ClipboardCheck,
  Star,
  CircleDot,
  ArrowRight,
  BookOpen,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { TradingViewLab } from '@/components/academy/tradingview-lab'

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 1: Breakout vs Fakeout — Quick Reference            */
/* ─────────────────────────────────────────────────────────── */
function TopicBreakoutFakeoutRef() {
  const comparisonHeaders = ['Feature', 'Real Breakout', 'Fakeout']
  const comparisonRows = [
    [
      <span key="v" className="font-semibold">Volume</span>,
      <span key="g" className="text-green-600 font-semibold">HIGH — above average</span>,
      <span key="r" className="text-red-600 font-semibold">LOW — below average</span>,
    ],
    [
      <span key="v2" className="font-semibold">Candle Close</span>,
      <span key="g2" className="text-green-600 font-semibold">CLOSES beyond level</span>,
      <span key="r2" className="text-red-600 font-semibold">WICK only, body stays inside</span>,
    ],
    [
      <span key="v3" className="font-semibold">Follow-through</span>,
      <span key="g3" className="text-green-600 font-semibold">Continues in direction</span>,
      <span key="r3" className="text-red-600 font-semibold">Reverses immediately</span>,
    ],
    [
      <span key="v4" className="font-semibold">Retest</span>,
      <span key="g4" className="text-green-600 font-semibold">Level holds as S/R flip</span>,
      <span key="r4" className="text-red-600 font-semibold">Falls back below level</span>,
    ],
  ]

  return (
    <TopicCard id="d2-breakout-fakeout-ref" title="Breakout vs Fakeout — Quick Reference" icon={<Shield />} variant="warning">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        A <strong>breakout</strong> is when price moves beyond a key level with conviction.
        A <strong>fakeout</strong> is when price briefly pokes beyond then reverses — trapping early entrants.
      </p>

      <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />

      <div className="mt-4 rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800">Fakeouts Are Deliberate</p>
            <p className="mt-1 text-sm text-amber-900">
              Institutions know where retail traders place their breakout orders and stop-losses. They push price
              beyond levels to trigger those orders, then reverse. The best defense: <strong>wait for the candle close</strong>.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        Never enter a breakout on the wick alone. Wait for the candle to <strong>close</strong> beyond
        the level with <strong>high volume</strong>. Patience eliminates 80% of fakeout traps.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 2 (NEW): Breakout Trading Step-by-Step              */
/* ─────────────────────────────────────────────────────────── */
function TopicBreakoutTradingSteps() {
  const steps = [
    {
      number: 1,
      title: 'Identify the Level',
      detail: 'Find an S/R level with 3 or more touches. The more touches, the more significant the level — and the more powerful the eventual breakout will be.',
      color: 'border-teal-500',
      bg: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
    {
      number: 2,
      title: 'Wait for Candle CLOSE Beyond the Level',
      detail: 'Not just a wick — the candle body must close beyond the level. A wick poking through means nothing; it could be a fakeout in the making. Only a close confirms conviction.',
      color: 'border-green-500',
      bg: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      number: 3,
      title: 'Check Volume',
      detail: 'Volume should be noticeably above average (1.5×–2× the 20-period average). Low volume on a breakout is the #1 red flag for a fakeout.',
      color: 'border-amber-500',
      bg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      number: 4,
      title: 'Wait for Retest (S/R Flip)',
      detail: 'After breaking out, price often comes back to retest the level from the other side. Former resistance becomes support (or vice versa). This is your confirmation — and your entry.',
      color: 'border-purple-500',
      bg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      number: 5,
      title: 'Enter on Retest with Stop on the Other Side',
      detail: 'Enter when the retest holds. Place your stop-loss just on the other side of the level. Your target is the next major S/R level or a measured move equal to the range height.',
      color: 'border-red-500',
      bg: 'bg-red-50',
      iconColor: 'text-red-600',
    },
  ]

  return (
    <TopicCard id="d2-breakout-trading-steps" title="Breakout Trading Step-by-Step" icon={<Footprints />} variant="highlight">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Knowing the difference between a breakout and a fakeout is theory. Here is the <span className="font-bold text-amber-700">practical 5-step process</span> for
        trading breakouts like a professional. Follow these steps in order — every single time.
      </p>

      {/* Breakout Trade Sequence SVG */}
      <div className="mb-6 overflow-x-auto">
        <svg viewBox="0 0 800 320" className="mx-auto w-full max-w-[700px]" xmlns="http://www.w3.org/2000/svg">
          {/* Background grid */}
          <defs>
            <pattern id="grid-bs" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="800" height="320" fill="url(#grid-bs)" rx="12" />

          {/* Resistance level */}
          <line x1="40" y1="100" x2="760" y2="100" stroke="#ef4444" strokeWidth="2" strokeDasharray="8,4" />
          <text x="50" y="92" className="text-xs" fill="#ef4444" fontWeight="bold" fontSize="11">Resistance ($45,000)</text>

          {/* Support / retest zone */}
          <line x1="40" y1="220" x2="760" y2="220" stroke="#22c55e" strokeWidth="2" strokeDasharray="8,4" />
          <text x="50" y="242" className="text-xs" fill="#22c55e" fontWeight="bold" fontSize="11">Support / Retest Zone</text>

          {/* Price path: approach → break → retest → target */}
          <polyline
            points="60,220 120,210 180,190 240,160 300,130 360,105 400,80 440,60 460,90 480,100 500,100 520,98 560,70 600,50 640,55 680,45 720,30"
            fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          />

          {/* Step 1: Identify level */}
          <circle cx="300" cy="130" r="6" fill="#14b8a6" />
          <line x1="300" y1="130" x2="300" y2="100" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="4,2" />
          <rect x="240" y="140" width="120" height="20" rx="4" fill="#14b8a6" />
          <text x="300" y="154" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">① Identify Level</text>

          {/* Step 2: Close beyond */}
          <circle cx="400" cy="80" r="6" fill="#22c55e" />
          <rect x="340" y="58" width="120" height="20" rx="4" fill="#22c55e" />
          <text x="400" y="72" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">② Close Beyond</text>

          {/* Step 3: Volume spike */}
          <rect x="370" y="270" width="14" height="30" fill="#94a3b8" rx="2" />
          <rect x="388" y="260" width="14" height="40" fill="#94a3b8" rx="2" />
          <rect x="406" y="240" width="14" height="60" fill="#f59e0b" rx="2" />
          <rect x="424" y="245" width="14" height="55" fill="#f59e0b" rx="2" />
          <rect x="442" y="260" width="14" height="40" fill="#94a3b8" rx="2" />
          <text x="420" y="305" textAnchor="middle" fill="#f59e0b" fontWeight="bold" fontSize="10">③ Volume ↑</text>

          {/* Step 4: Retest */}
          <circle cx="500" cy="100" r="6" fill="#a855f7" />
          <rect x="440" y="78" width="120" height="20" rx="4" fill="#a855f7" />
          <text x="500" y="92" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">④ Retest (S/R Flip)</text>

          {/* Step 5: Entry + Target */}
          <circle cx="520" cy="98" r="5" fill="#ef4444" stroke="white" strokeWidth="2" />
          <text x="540" y="85" fill="#ef4444" fontWeight="bold" fontSize="10">⑤ Entry</text>

          <line x1="520" y1="98" x2="520" y2="220" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3" />
          <text x="530" y="170" fill="#ef4444" fontSize="9">SL below</text>

          <line x1="530" y1="98" x2="700" y2="30" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="6,3" />
          <text x="720" y="28" fill="#22c55e" fontWeight="bold" fontSize="10">Target ✓</text>

          {/* S/R Flip label */}
          <rect x="460" y="100" width="80" height="14" rx="3" fill="rgba(168,85,247,0.15)" />
          <text x="500" y="112" textAnchor="middle" fill="#a855f7" fontWeight="600" fontSize="9">Resistance → Support</text>
        </svg>
      </div>

      {/* 5 Steps */}
      <div className="space-y-3 mb-5">
        {steps.map((step) => (
          <div key={step.number} className={`rounded-xl border-l-4 ${step.color} border border-slate-200 bg-white p-4 shadow-sm`}>
            <div className="flex items-start gap-3">
              <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${step.bg} border-2 ${step.color} text-sm font-bold ${step.iconColor}`}>
                {step.number}
              </div>
              <div className="flex-1">
                <h4 className="mb-1 text-sm font-bold text-slate-900 sm:text-base">{step.title}</h4>
                <p className="text-sm text-slate-700">{step.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why beginners skip step 4 */}
      <div className="rounded-lg border-2 border-red-300 bg-red-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="text-sm font-bold text-red-800">Why 90% of Beginners Skip Step 4 (and Get Faked Out)</p>
            <p className="mt-1 text-sm text-red-900">
              FOMO. When you see price break a level, your instinct screams &ldquo;buy now before you miss it!&rdquo;
              But the retest is where the real trade lives. <strong>Skipping the retest is like jumping on a moving train
              before checking if it&apos;s going your direction.</strong> The retest confirms the level has flipped.
              Without it, you&apos;re guessing.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        The retest is not optional — it&apos;s the entire point. A breakout without a retest is an unconfirmed
        breakout. <strong>Wait for the level to flip, then enter with confidence.</strong>
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 3 (NEW): Anatomy of a High-Probability Trade        */
/* ─────────────────────────────────────────────────────────── */
function TopicAnatomyOfTrade() {
  const elements = [
    {
      number: 1,
      label: 'Structure Agrees',
      detail: 'If the market is in an uptrend (HH + HL), you look for buys. If it\'s in a downtrend (LH + LL), you look for sells. Never fight the structure.',
      color: 'text-teal-600',
      bg: 'bg-teal-100',
      border: 'border-teal-400',
    },
    {
      number: 2,
      label: 'Price at Key Level',
      detail: 'Price is at a major support (for buys) or resistance (for sells) with 3+ touches, or bouncing off a key EMA. You\'re not chasing — you\'re waiting at the level.',
      color: 'text-green-600',
      bg: 'bg-green-100',
      border: 'border-green-400',
    },
    {
      number: 3,
      label: 'SMC Concept Present',
      detail: 'An order block, FVG, or breaker block is at or near the same level. This tells you institutions are active here — this is not a random bounce.',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
      border: 'border-purple-400',
    },
    {
      number: 4,
      label: 'No Inducement Trap Nearby',
      detail: 'There\'s no obvious liquidity pool or equal highs/lows just above/below your entry that institutions could target to stop you out. Your stop is safe from hunts.',
      color: 'text-amber-600',
      bg: 'bg-amber-100',
      border: 'border-amber-400',
    },
    {
      number: 5,
      label: 'Risk/Reward is 1:2 or Better',
      detail: 'Your potential profit is at least 2× your risk. Even with a 50% win rate, a 1:2 R:R makes you profitable over time. Never accept less than 1:2.',
      color: 'text-red-600',
      bg: 'bg-red-100',
      border: 'border-red-400',
    },
  ]

  return (
    <TopicCard id="d2-anatomy-of-trade" title="The Anatomy of a High-Probability Trade" icon={<Target />} variant="highlight">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        What makes a &ldquo;perfect&rdquo; trade setup? It&apos;s not about a single indicator flashing green.
        It&apos;s about <span className="font-bold text-amber-700">5 elements aligning at the same price level</span>.
        The more elements that agree, the higher the probability of success.
      </p>

      {/* SVG: Chart with all 5 elements labeled */}
      <div className="mb-6 overflow-x-auto">
        <svg viewBox="0 0 800 380" className="mx-auto w-full max-w-[700px]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-at" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
            </pattern>
            <marker id="arrowG" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M 0 0 L 8 4 L 0 8 Z" fill="#22c55e" />
            </marker>
          </defs>
          <rect width="800" height="380" fill="url(#grid-at)" rx="12" />

          {/* EMA lines */}
          <polyline points="60,300 140,290 220,270 300,240 380,200 460,180 540,150 620,130 700,110"
            fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.6" />
          <text x="710" y="108" fill="#f59e0b" fontSize="9" fontWeight="600">EMA 20</text>

          <polyline points="60,320 140,310 220,300 300,280 380,260 460,240 540,210 620,190 700,170"
            fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.6" />
          <text x="710" y="168" fill="#3b82f6" fontSize="9" fontWeight="600">EMA 50</text>

          <polyline points="60,350 140,345 220,340 300,335 380,325 460,315 540,300 620,285 700,270"
            fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.6" />
          <text x="710" y="268" fill="#6366f1" fontSize="9" fontWeight="600">EMA 200</text>

          {/* Price candles (simplified) — uptrend */}
          <rect x="80" y="290" width="12" height="30" fill="#22c55e" rx="2" />
          <line x1="86" y1="285" x2="86" y2="325" stroke="#22c55e" strokeWidth="1" />

          <rect x="110" y="270" width="12" height="25" fill="#22c55e" rx="2" />
          <line x1="116" y1="265" x2="116" y2="300" stroke="#22c55e" strokeWidth="1" />

          <rect x="140" y="255" width="12" height="20" fill="#ef4444" rx="2" />
          <line x1="146" y1="250" x2="146" y2="280" stroke="#ef4444" strokeWidth="1" />

          <rect x="170" y="240" width="12" height="28" fill="#22c55e" rx="2" />
          <line x1="176" y1="235" x2="176" y2="275" stroke="#22c55e" strokeWidth="1" />

          <rect x="200" y="225" width="12" height="22" fill="#22c55e" rx="2" />
          <line x1="206" y1="220" x2="206" y2="252" stroke="#22c55e" strokeWidth="1" />

          <rect x="230" y="215" width="12" height="18" fill="#ef4444" rx="2" />
          <line x1="236" y1="210" x2="236" y2="238" stroke="#ef4444" strokeWidth="1" />

          <rect x="260" y="200" width="12" height="25" fill="#22c55e" rx="2" />
          <line x1="266" y1="195" x2="266" y2="230" stroke="#22c55e" strokeWidth="1" />

          <rect x="290" y="185" width="12" height="20" fill="#22c55e" rx="2" />
          <line x1="296" y1="180" x2="296" y2="210" stroke="#22c55e" strokeWidth="1" />

          {/* Pullback to EMA 50 — entry zone */}
          <rect x="320" y="210" width="12" height="30" fill="#ef4444" rx="2" />
          <line x1="326" y1="205" x2="326" y2="245" stroke="#ef4444" strokeWidth="1" />

          <rect x="350" y="225" width="12" height="28" fill="#ef4444" rx="2" />
          <line x1="356" y1="220" x2="356" y2="258" stroke="#ef4444" strokeWidth="1" />

          {/* Order Block zone */}
          <rect x="315" y="215" width="60" height="40" fill="rgba(168,85,247,0.12)" rx="4" stroke="#a855f7" strokeWidth="1" strokeDasharray="4,2" />
          <text x="345" y="268" textAnchor="middle" fill="#a855f7" fontWeight="bold" fontSize="9">Order Block</text>

          {/* FVG zone */}
          <rect x="315" y="195" width="55" height="20" fill="rgba(168,85,247,0.08)" rx="3" stroke="#a855f7" strokeWidth="0.8" strokeDasharray="3,2" />
          <text x="342" y="190" textAnchor="middle" fill="#a855f7" fontWeight="600" fontSize="8">FVG</text>

          {/* Bounce candle from entry */}
          <rect x="380" y="195" width="12" height="22" fill="#22c55e" rx="2" />
          <line x1="386" y1="190" x2="386" y2="222" stroke="#22c55e" strokeWidth="1" />

          <rect x="410" y="175" width="12" height="25" fill="#22c55e" rx="2" />
          <line x1="416" y1="170" x2="416" y2="205" stroke="#22c55e" strokeWidth="1" />

          <rect x="440" y="155" width="12" height="22" fill="#22c55e" rx="2" />
          <line x1="446" y1="150" x2="446" y2="182" stroke="#22c55e" strokeWidth="1" />

          <rect x="470" y="135" width="12" height="25" fill="#22c55e" rx="2" />
          <line x1="476" y1="130" x2="476" y2="165" stroke="#22c55e" strokeWidth="1" />

          <rect x="500" y="115" width="12" height="22" fill="#22c55e" rx="2" />
          <line x1="506" y1="110" x2="506" y2="142" stroke="#22c55e" strokeWidth="1" />

          <rect x="530" y="95" width="12" height="25" fill="#22c55e" rx="2" />
          <line x1="536" y1="90" x2="536" y2="125" stroke="#22c55e" strokeWidth="1" />

          <rect x="560" y="75" width="12" height="22" fill="#22c55e" rx="2" />
          <line x1="566" y1="70" x2="566" y2="102" stroke="#22c55e" strokeWidth="1" />

          {/* HH / HL labels */}
          <text x="96" y="282" fill="#22c55e" fontWeight="bold" fontSize="9">HL</text>
          <text x="206" y="215" fill="#22c55e" fontWeight="bold" fontSize="9">HH</text>
          <text x="362" y="250" fill="#22c55e" fontWeight="bold" fontSize="9">HL</text>
          <text x="576" y="68" fill="#22c55e" fontWeight="bold" fontSize="9">HH</text>

          {/* Element 1: Structure */}
          <line x1="200" y1="215" x2="200" y2="35" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3,3" />
          <rect x="145" y="15" width="140" height="22" rx="4" fill="#14b8a6" />
          <text x="215" y="30" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">① Structure: Uptrend</text>

          {/* Element 2: Key Level */}
          <line x1="345" y1="238" x2="345" y2="42" stroke="#22c55e" strokeWidth="1" strokeDasharray="3,3" />
          <rect x="275" y="40" width="140" height="22" rx="4" fill="#22c55e" />
          <text x="345" y="55" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">② Price at EMA 50 + Level</text>

          {/* Element 3: SMC */}
          <rect x="605" y="40" width="170" height="22" rx="4" fill="#a855f7" />
          <text x="690" y="55" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">③ SMC: OB + FVG Present</text>

          {/* Element 5: R:R */}
          <circle cx="386" cy="200" r="5" fill="#ef4444" stroke="white" strokeWidth="2" />
          <text x="395" y="200" fill="#ef4444" fontWeight="bold" fontSize="9">Entry</text>

          <line x1="386" y1="200" x2="386" y2="270" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x="395" y="265" fill="#ef4444" fontSize="9">SL (1R)</text>

          <line x1="378" y1="200" x2="378" y2="60" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="6,3" />
          <text x="370" y="55" fill="#22c55e" fontWeight="bold" fontSize="9">TP (2R+)</text>

          {/* Element 4: No inducement */}
          <rect x="605" y="68" width="170" height="22" rx="4" fill="#f59e0b" />
          <text x="690" y="83" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">④ No Inducement Nearby</text>

          <rect x="605" y="96" width="170" height="22" rx="4" fill="#ef4444" />
          <text x="690" y="111" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">⑤ R:R = 1:2 or Better ✓</text>
        </svg>
      </div>

      {/* 5 Elements list */}
      <div className="space-y-3 mb-5">
        {elements.map((el) => (
          <div key={el.number} className={`rounded-lg border-l-4 ${el.border} ${el.bg} p-3`}>
            <div className="flex items-start gap-3">
              <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${el.bg} text-sm font-bold ${el.color} border ${el.border}`}>
                {el.number}
              </span>
              <div>
                <h4 className={`text-sm font-bold ${el.color}`}>{el.label}</h4>
                <p className="text-sm text-slate-700">{el.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Confluence scoring */}
      <div className="rounded-lg border-2 border-amber-400 bg-amber-50 p-4 mb-4">
        <div className="flex items-start gap-3">
          <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800">The Confluence Score</p>
            <div className="mt-2 space-y-1.5 text-sm text-amber-900">
              <p><span className="font-bold text-red-600">1–2/5:</span> Do NOT trade. Not enough confluence — you&apos;re gambling.</p>
              <p><span className="font-bold text-amber-600">3/5:</span> Acceptable trade. Good enough if risk is managed properly.</p>
              <p><span className="font-bold text-green-600">4/5:</span> Strong setup. High probability — size up slightly if your plan allows.</p>
              <p><span className="font-bold text-purple-600">5/5:</span> Golden setup. These are rare — maybe 1–2 per week. Full conviction.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 p-3">
        <p className="text-sm font-bold text-red-800">NEVER trade with less than 3/5 elements aligned.</p>
        <p className="mt-1 text-sm text-red-900">
          If you can&apos;t find at least 3 confirming factors, the market is not giving you a clear signal.
          Sitting out is always better than forcing a low-probability trade.
        </p>
      </div>

      <KeyTakeaway>
        A high-probability trade is not about being right — it&apos;s about having <strong>multiple independent
        reasons</strong> to enter at the same level. 3/5 minimum, 5/5 is golden.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 4: The Complete Integration Framework                 */
/* ─────────────────────────────────────────────────────────── */
function TopicIntegrationFramework() {
  const frameworkSteps = [
    {
      number: 1,
      title: 'MARKET STRUCTURE — Determine the Trend',
      description: 'Check HH/HL (uptrend), LH/LL (downtrend), or ranging. This is ALWAYS step 1. If structure is unclear, do not trade. Example: BTC making HH + HL on the 4H = bullish bias.',
      icon: <GitBranch className="h-5 w-5 text-amber-600" />,
      color: 'border-amber-500',
    },
    {
      number: 2,
      title: 'SUPPORT & RESISTANCE — Map the Levels',
      description: 'Draw horizontal S/R levels on the 4H/Daily chart. Mark key levels with 3+ touches. Identify the nearest support below and nearest resistance above. Example: $40K resistance with 5 rejections.',
      icon: <BarChart3 className="h-5 w-5 text-teal-600" />,
      color: 'border-teal-500',
    },
    {
      number: 3,
      title: 'EMAs — Confirm the Trend Direction',
      description: 'Check EMA stacking: 20 > 50 > 200 (bullish) or 20 < 50 < 200 (bearish). If EMAs are tangled, the market is undecided — wait for clarity. Example: EMA 20 above EMA 50 above EMA 200 = strong bullish.',
      icon: <Activity className="h-5 w-5 text-green-600" />,
      color: 'border-green-500',
    },
    {
      number: 4,
      title: 'SMC CONCEPTS — Identify Institutional Zones',
      description: 'Look for order blocks (last opposite candle before impulse), FVGs (3-candle gaps), BOS/CHoCH signals, and liquidity sweeps. These tell you WHERE institutions are trading and WHEN the structure is changing.',
      icon: <Layers className="h-5 w-5 text-purple-600" />,
      color: 'border-purple-500',
    },
    {
      number: 5,
      title: 'EXECUTE — Enter When All Align',
      description: 'Only enter when at least 3 of the 4 above factors agree. The more confluence, the higher the probability. Example: Price at support + bullish order block + EMA 50 bounce + bullish BOS = STRONG buy signal.',
      icon: <Crosshair className="h-5 w-5 text-red-600" />,
      color: 'border-red-500',
    },
  ]

  return (
    <TopicCard id="d2-integration-framework" title="The Complete Integration Framework" icon={<Zap />} variant="highlight">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        This is the <span className="font-bold text-amber-700">culmination of Day 2</span>. Every concept
        you learned today fits into this 5-step framework. When you analyze any chart, run through these
        steps in order. This is how professional traders combine multiple signals into a single, high-probability trade.
      </p>

      <div className="space-y-4 mb-6">
        {frameworkSteps.map((step) => (
          <div key={step.number} className={`rounded-xl border-l-4 ${step.color} border border-slate-200 bg-white p-4 shadow-sm`}>
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-amber-500 bg-white text-sm font-bold text-amber-600">
                {step.number}
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  {step.icon}
                  <h4 className="text-sm font-bold text-slate-900 sm:text-base">{step.title}</h4>
                </div>
                <p className="text-sm text-slate-700">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Confluence rule */}
      <div className="rounded-lg border-2 border-amber-400 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <Target className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800">The Confluence Rule</p>
            <p className="mt-1 text-sm text-amber-900">
              <strong>3 out of 4 minimum.</strong> Never trade on a single signal. The more factors
              that align at the same price level, the higher the probability of success. A trade with
              all 4 factors aligned is a <strong>&ldquo;golden setup&rdquo;</strong> — these are rare
              but extremely powerful.
            </p>
          </div>
        </div>
      </div>

      {/* Confluence examples */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-green-300 bg-green-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-sm font-bold text-green-800">Golden Setup Example (Buy)</h4>
          </div>
          <ul className="space-y-1 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">✓</span>
              <span>Structure: HH + HL (uptrend)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">✓</span>
              <span>S/R: Price at key support with 4 touches</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">✓</span>
              <span>EMAs: Stacked 20 &gt; 50 &gt; 200, bounce at EMA 50</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">✓</span>
              <span>SMC: Bullish order block at same level + BOS confirmed</span>
            </li>
          </ul>
          <p className="mt-2 text-sm font-bold text-green-800">4/4 = STRONG BUY</p>
        </div>

        <div className="rounded-xl border-2 border-red-300 bg-red-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <h4 className="text-sm font-bold text-red-800">Conflicting Setup (Avoid)</h4>
          </div>
          <ul className="space-y-1 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-green-500">✓</span>
              <span>Structure: HH + HL (uptrend)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-500">✗</span>
              <span>S/R: Price at strong resistance with 5 rejections</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-amber-500">~</span>
              <span>EMAs: Tangled, no clear alignment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-red-500">✗</span>
              <span>SMC: Bearish CHoCH just formed</span>
            </li>
          </ul>
          <p className="mt-2 text-sm font-bold text-red-800">1/4 = AVOID (mixed signals)</p>
        </div>
      </div>

      <KeyTakeaway>
        The integration framework is your systematic approach to every chart. Structure first, then S/R,
        then EMAs, then SMC zones. Only enter when multiple factors agree. This eliminates emotional
        trading and forces discipline.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 5 (NEW): Full Walkthrough — Analyzing BTC/USDT      */
/* ─────────────────────────────────────────────────────────── */
function TopicFullWalkthrough() {
  const steps = [
    {
      step: 1,
      title: 'Structure',
      finding: 'BTC has been making HH + HL since $38K. Current structure is uptrend.',
      result: 'bullish',
      icon: <GitBranch className="h-4 w-4" />,
    },
    {
      step: 2,
      title: 'S/R',
      finding: 'Key support at $40K (5 touches), resistance at $45K (3 rejections). Price is near support.',
      result: 'bullish',
      icon: <BarChart3 className="h-4 w-4" />,
    },
    {
      step: 3,
      title: 'EMAs',
      finding: 'EMA 20 ($41,800), EMA 50 ($40,500), EMA 200 ($37,200). Stacked bullish: 20 > 50 > 200.',
      result: 'bullish',
      icon: <Activity className="h-4 w-4" />,
    },
    {
      step: 4,
      title: 'SMC',
      finding: 'Bullish order block at $40,200–40,800. Bullish FVG from $39,500 to $41,000. Recent bullish BOS at $44,000.',
      result: 'bullish',
      icon: <Layers className="h-4 w-4" />,
    },
    {
      step: 5,
      title: 'Decision',
      finding: '4/5 elements align for a BUY. Entry at $40,500 (EMA 50 + OB zone). Stop at $39,800 (below OB). Target at $44,000 (previous BOS level). Risk/reward = 1:2.9 ✓',
      result: 'buy',
      icon: <Crosshair className="h-4 w-4" />,
    },
  ]

  return (
    <TopicCard id="d2-full-walkthrough" title="Full Walkthrough: Analyzing BTC/USDT Step by Step" icon={<BookOpen />} variant="highlight">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        Let&apos;s put everything together. <span className="font-bold text-amber-700">Imagine you open TradingView and see BTC/USDT at $42,500 on the Daily chart.</span> Here&apos;s how a professional trader would analyze this — step by step through the integration framework.
      </p>

      {/* Full Walkthrough Chart SVG */}
      <div className="mb-6 overflow-x-auto">
        <svg viewBox="0 0 800 420" className="mx-auto w-full max-w-[700px]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-fw" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
            </pattern>
            <linearGradient id="obGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="fvgGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          <rect width="800" height="420" fill="url(#grid-fw)" rx="12" />

          {/* Price axis labels */}
          <text x="25" y="75" fill="#64748b" fontSize="9" textAnchor="end">$45K</text>
          <text x="25" y="165" fill="#64748b" fontSize="9" textAnchor="end">$42.5K</text>
          <text x="25" y="220" fill="#64748b" fontSize="9" textAnchor="end">$40.5K</text>
          <text x="25" y="250" fill="#64748b" fontSize="9" textAnchor="end">$40K</text>
          <text x="25" y="340" fill="#64748b" fontSize="9" textAnchor="end">$38K</text>
          <text x="25" y="380" fill="#64748b" fontSize="9" textAnchor="end">$37.2K</text>

          {/* Resistance $45K */}
          <line x1="40" y1="70" x2="760" y2="70" stroke="#ef4444" strokeWidth="2" strokeDasharray="8,4" />
          <rect x="690" y="58" width="70" height="16" rx="3" fill="#ef4444" />
          <text x="725" y="70" textAnchor="middle" fill="white" fontWeight="bold" fontSize="9">R: $45K</text>

          {/* Support $40K */}
          <line x1="40" y1="248" x2="760" y2="248" stroke="#22c55e" strokeWidth="2" strokeDasharray="8,4" />
          <rect x="690" y="236" width="70" height="16" rx="3" fill="#22c55e" />
          <text x="725" y="248" textAnchor="middle" fill="white" fontWeight="bold" fontSize="9">S: $40K</text>

          {/* EMA 200 line */}
          <polyline points="60,375 140,370 220,360 300,350 380,340 460,330 540,320 620,310 700,300"
            fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.7" />
          <text x="710" y="298" fill="#6366f1" fontSize="9" fontWeight="600">EMA 200 ($37.2K)</text>

          {/* EMA 50 line */}
          <polyline points="60,310 140,300 220,280 300,260 380,235 460,220 540,205 620,190 700,175"
            fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.7" />
          <text x="710" y="173" fill="#3b82f6" fontSize="9" fontWeight="600">EMA 50 ($40.5K)</text>

          {/* EMA 20 line */}
          <polyline points="60,280 140,270 220,250 300,220 380,195 460,180 540,160 620,140 700,120"
            fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6,3" opacity="0.7" />
          <text x="710" y="118" fill="#f59e0b" fontSize="9" fontWeight="600">EMA 20 ($41.8K)</text>

          {/* Price candles */}
          {/* Start around $38K, move up to $45K, pull back, approach $40K */}
          <rect x="70" y="330" width="12" height="25" fill="#22c55e" rx="2" />
          <rect x="100" y="310" width="12" height="28" fill="#22c55e" rx="2" />
          <rect x="130" y="295" width="12" height="20" fill="#ef4444" rx="2" />
          <rect x="160" y="280" width="12" height="25" fill="#22c55e" rx="2" />
          <rect x="190" y="260" width="12" height="22" fill="#22c55e" rx="2" />
          <rect x="220" y="240" width="12" height="25" fill="#22c55e" rx="2" />
          <rect x="250" y="220" width="12" height="18" fill="#ef4444" rx="2" />
          <rect x="280" y="200" width="12" height="28" fill="#22c55e" rx="2" />
          <rect x="310" y="175" width="12" height="25" fill="#22c55e" rx="2" />
          <rect x="340" y="150" width="12" height="22" fill="#22c55e" rx="2" />
          <rect x="370" y="120" width="12" height="20" fill="#22c55e" rx="2" />
          {/* Rejection at $45K */}
          <rect x="400" y="75" width="12" height="25" fill="#ef4444" rx="2" />
          <rect x="430" y="95" width="12" height="20" fill="#ef4444" rx="2" />
          <rect x="460" y="115" width="12" height="28" fill="#ef4444" rx="2" />
          <rect x="490" y="145" width="12" height="22" fill="#ef4444" rx="2" />
          <rect x="520" y="165" width="12" height="18" fill="#ef4444" rx="2" />
          {/* Pullback nearing $40K support + OB zone */}

          {/* Order Block zone ($40,200–$40,800) */}
          <rect x="510" y="228" width="70" height="30" fill="url(#obGrad)" rx="4" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x="545" y="270" textAnchor="middle" fill="#a855f7" fontWeight="bold" fontSize="9">OB Zone</text>
          <text x="545" y="280" textAnchor="middle" fill="#a855f7" fontSize="8">$40.2K–$40.8K</text>

          {/* FVG zone ($39,500–$41,000) */}
          <rect x="500" y="200" width="80" height="58" fill="url(#fvgGrad)" rx="4" stroke="#a855f7" strokeWidth="0.8" strokeDasharray="3,2" />
          <text x="540" y="295" textAnchor="middle" fill="#a855f7" fontWeight="600" fontSize="8">FVG ($39.5K–$41K)</text>

          {/* BOS label at $44K */}
          <line x1="340" y1="105" x2="380" y2="105" stroke="#22c55e" strokeWidth="2" />
          <text x="360" y="100" textAnchor="middle" fill="#22c55e" fontWeight="bold" fontSize="9">BOS @ $44K</text>

          {/* Current price at $42,500 */}
          <line x1="540" y1="165" x2="760" y2="165" stroke="#1e293b" strokeWidth="1.5" />
          <rect x="690" y="155" width="70" height="18" rx="3" fill="#1e293b" />
          <text x="725" y="168" textAnchor="middle" fill="white" fontWeight="bold" fontSize="9">$42,500</text>

          {/* Entry, Stop, Target */}
          <circle cx="545" cy="232" r="5" fill="#22c55e" stroke="white" strokeWidth="2" />
          <text x="560" y="228" fill="#22c55e" fontWeight="bold" fontSize="9">Entry $40,500</text>

          <line x1="545" y1="232" x2="545" y2="290" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x="560" y="288" fill="#ef4444" fontWeight="bold" fontSize="9">SL $39,800</text>

          <line x1="537" y1="232" x2="537" y2="105" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="6,3" />
          <text x="530" y="100" fill="#22c55e" fontWeight="bold" fontSize="9">TP $44,000</text>

          {/* R:R label */}
          <rect x="620" y="125" width="90" height="28" rx="5" fill="#22c55e" />
          <text x="665" y="137" textAnchor="middle" fill="white" fontWeight="bold" fontSize="10">R:R = 1:2.9</text>
          <text x="665" y="148" textAnchor="middle" fill="white" fontSize="9">✓ Excellent</text>

          {/* HH/HL labels */}
          <text x="375" y="115" fill="#22c55e" fontWeight="bold" fontSize="8">HH</text>
          <text x="470" y="155" fill="#22c55e" fontWeight="bold" fontSize="8">HL</text>
        </svg>
      </div>

      {/* Step-by-step analysis */}
      <div className="space-y-3 mb-5">
        {steps.map((s) => (
          <div key={s.step} className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex items-start gap-3">
              <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white text-sm font-bold ${
                s.result === 'buy' ? 'bg-amber-500' : s.result === 'bullish' ? 'bg-green-500' : 'bg-red-500'
              }`}>
                {s.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {s.icon}
                  <h4 className="text-sm font-bold text-slate-900">Step {s.step}: {s.title}</h4>
                  <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-bold ${
                    s.result === 'buy'
                      ? 'bg-amber-100 text-amber-800'
                      : s.result === 'bullish'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {s.result === 'buy' ? '→ BUY' : s.result === 'bullish' ? '✓ Bullish' : '✗ Bearish'}
                  </span>
                </div>
                <p className="text-sm text-slate-700">{s.finding}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Score card */}
      <div className="rounded-lg border-2 border-green-400 bg-green-50 p-4">
        <h4 className="mb-3 text-sm font-bold text-green-800 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5" /> Confluence Score Card
        </h4>
        <div className="grid gap-2 sm:grid-cols-5">
          <div className="flex items-center gap-2 rounded-lg bg-white p-2 border border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">Structure</p>
              <p className="text-xs text-green-600">HH+HL ✓</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white p-2 border border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">S/R</p>
              <p className="text-xs text-green-600">At Support ✓</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white p-2 border border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">EMAs</p>
              <p className="text-xs text-green-600">Stacked ✓</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white p-2 border border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">SMC</p>
              <p className="text-xs text-green-600">OB+FVG ✓</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white p-2 border border-amber-200">
            <Star className="h-4 w-4 text-amber-500 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-slate-900">R:R</p>
              <p className="text-xs text-amber-600">1:2.9 ✓</p>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-green-100 p-2 border border-green-300">
          <span className="text-lg">🏆</span>
          <p className="text-sm font-bold text-green-800">4/5 Elements Align + Excellent R:R = STRONG BUY (Golden Setup)</p>
        </div>
      </div>

      <KeyTakeaway>
        This is exactly how a professional analyzes a chart. No guessing, no hoping — just a systematic
        checklist that gives you a clear answer. <strong>If the answer isn&apos;t clear, don&apos;t trade.</strong>
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 6 (NEW): When NOT to Trade                           */
/* ─────────────────────────────────────────────────────────── */
function TopicWhenNotToTrade() {
  const scenarios = [
    {
      number: 1,
      title: 'Conflicting Timeframes',
      description: 'Daily chart is bullish, but the 4H chart is bearish. Or the weekly is ranging while the daily is trending. When timeframes disagree, there is no clear bias.',
      doInstead: 'Zoom out to the highest timeframe and wait for alignment. If the Daily and 4H don\'t agree, sit out until they do.',
      icon: <GitBranch className="h-5 w-5" />,
      color: 'border-red-400',
      bg: 'bg-red-50',
    },
    {
      number: 2,
      title: 'Major News Event Within 24 Hours',
      description: 'Fed rate decisions, CPI data, employment reports, or any high-impact economic event. These cause wild, unpredictable volatility that ignores all technical analysis.',
      doInstead: 'Close positions or tighten stops before the event. Do NOT open new positions until the volatility settles — usually 2–4 hours after the release.',
      icon: <AlertTriangle className="h-5 w-5" />,
      color: 'border-amber-400',
      bg: 'bg-amber-50',
    },
    {
      number: 3,
      title: 'EMAs Tangled with No Clear Direction',
      description: 'EMA 20, 50, and 200 are crisscrossing each other with no clear stacking pattern. This means the market has no trend — it\'s consolidating or confused.',
      doInstead: 'Wait for the EMAs to separate and stack in one direction. A tangled EMA is the market saying "I don\'t know" — don\'t force a direction.',
      icon: <Activity className="h-5 w-5" />,
      color: 'border-purple-400',
      bg: 'bg-purple-50',
    },
    {
      number: 4,
      title: 'Price in No-Man\'s Land',
      description: 'Price is far from any support, resistance, or EMA level. There\'s no clear level to enter at, no level for a stop-loss, and no level for a target. You\'re trading in the middle of nowhere.',
      doInstead: 'Set alerts at the nearest S/R or EMA levels and walk away. Only trade when price reaches a level that gives you a defined risk.',
      icon: <CircleDot className="h-5 w-5" />,
      color: 'border-teal-400',
      bg: 'bg-teal-50',
    },
    {
      number: 5,
      title: 'You\'ve Hit Your Daily Loss Limit',
      description: 'This is a psychological rule, not a technical one — but it\'s the most important. If you\'ve lost your predetermined daily max (e.g., 2% of account), stop trading. Revenge trading destroys accounts.',
      doInstead: 'Close the charts. Walk away. Review your trades tomorrow with a clear head. Psychology > Analysis, always.',
      icon: <Ban className="h-5 w-5" />,
      color: 'border-red-400',
      bg: 'bg-red-50',
    },
  ]

  return (
    <TopicCard id="d2-when-not-to-trade" title="When NOT to Trade" icon={<Ban />} variant="warning">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Knowing when to stay out is <span className="font-bold text-red-700">just as important</span> as knowing
        when to enter. These 5 scenarios are your &ldquo;do not enter&rdquo; list. Violating these rules
        will cost you more than any bad trade.
      </p>

      <div className="space-y-4 mb-5">
        {scenarios.map((s) => (
          <div key={s.number} className={`rounded-xl border-l-4 ${s.color} border border-slate-200 ${s.bg} p-4`}>
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white border-2 text-red-600" style={{ borderColor: 'inherit' }}>
                {s.number}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {s.icon}
                  <h4 className="text-sm font-bold text-slate-900 sm:text-base">{s.title}</h4>
                </div>
                <p className="text-sm text-slate-700 mb-2">{s.description}</p>
                <div className="rounded-lg bg-white/80 p-2.5 border border-slate-200">
                  <p className="text-xs font-bold text-teal-700 mb-0.5">What to do instead:</p>
                  <p className="text-sm text-slate-700">{s.doInstead}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnalogyBox title="Not Trading IS a Position">
        Cash is a position. When you&apos;re in cash, you&apos;re positioned to wait for the perfect setup.
        Think of it like a sniper — they spend 90% of their time waiting and 10% shooting.
        Amateur traders shoot at everything that moves. Professionals wait for the shot they can&apos;t miss.
      </AnalogyBox>

      <KeyTakeaway>
        The best traders in the world spend more time <strong>not trading</strong> than trading.
        If the setup isn&apos;t there, cash is your best position. Protecting capital is always priority #1.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 7 (NEW): Day 2 Mastery Checklist                    */
/* ─────────────────────────────────────────────────────────── */
function TopicMasteryChecklist() {
  return (
    <TopicCard id="d2-mastery-checklist" title="Day 2 Mastery Checklist" icon={<ClipboardCheck />} variant="success">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        After completing Day 2, you should be able to do everything on this checklist. <span className="font-bold text-green-700">Check off each item as you master it.</span> If you can&apos;t check an item, go back and review that section before moving to Day 3.
      </p>

      {/* Technical Skills */}
      <div className="mb-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900 sm:text-base">
          <BarChart3 className="h-5 w-5 text-teal-600" />
          Technical Skills
        </h4>
        <div className="rounded-xl border border-slate-200 bg-white p-2">
          <ChecklistItem>
            I can identify support and resistance with 3+ touches
          </ChecklistItem>
          <ChecklistItem>
            I can draw S/R levels correctly using wick extremes
          </ChecklistItem>
          <ChecklistItem>
            I can identify market structure (HH/HL, LH/LL, Range)
          </ChecklistItem>
          <ChecklistItem>
            I can spot BOS and CHoCH signals
          </ChecklistItem>
          <ChecklistItem>
            I can identify Order Blocks and FVGs
          </ChecklistItem>
          <ChecklistItem>
            I can set up EMA 20/50/200 on any chart
          </ChecklistItem>
          <ChecklistItem>
            I can read EMA stacking and crossovers
          </ChecklistItem>
          <ChecklistItem>
            I can apply the 5-step integration framework
          </ChecklistItem>
        </div>
      </div>

      {/* Mental Skills */}
      <div className="mb-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900 sm:text-base">
          <Shield className="h-5 w-5 text-purple-600" />
          Mental Skills
        </h4>
        <div className="rounded-xl border border-slate-200 bg-white p-2">
          <ChecklistItem>
            I wait for confluence before entering trades
          </ChecklistItem>
          <ChecklistItem>
            I don&apos;t trade when signals are conflicting
          </ChecklistItem>
          <ChecklistItem>
            I wait for candle closes before acting on breakouts
          </ChecklistItem>
          <ChecklistItem>
            I always define my risk before entering
          </ChecklistItem>
        </div>
      </div>

      <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <p className="text-sm font-bold text-green-800">Goal: Check Every Box Before Day 3</p>
            <p className="mt-1 text-sm text-green-900">
              Day 3 builds on Day 2. If you haven&apos;t mastered these fundamentals, the advanced concepts
              won&apos;t make sense. Take the time to practice each skill on a live chart until it feels natural.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        Mastery isn&apos;t about memorizing — it&apos;s about <strong>doing</strong>. Open TradingView,
        pick any crypto pair, and practice each checklist item until you can do it without thinking.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════════ */

export function Day2LateAfternoonBlock() {
  return (
    <section id="d2-late-afternoon" aria-label="Late Afternoon Block - Session 4">
      <SectionDivider title="LATE AFTERNOON BLOCK — SESSION 4: INTEGRATION FRAMEWORK & TRADINGVIEW LAB" />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicBreakoutFakeoutRef />

        {/* NEW: Breakout Trading Step-by-Step */}
        <TopicBreakoutTradingSteps />

        {/* NEW: Anatomy of a High-Probability Trade */}
        <TopicAnatomyOfTrade />

        <TopicIntegrationFramework />

        {/* NEW: Full Walkthrough — Analyzing BTC/USDT */}
        <TopicFullWalkthrough />

        {/* NEW: When NOT to Trade */}
        <TopicWhenNotToTrade />

        {/* NEW: Day 2 Mastery Checklist */}
        <TopicMasteryChecklist />

        {/* TradingView Integration Lab */}
        <TopicCard id="d2-integration-lab" title="Integration Lab — Apply the 5-Step Framework" icon={<FlaskConical />} variant="success">
          <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Use the TradingView simulator below to practice the complete 5-step integration framework on live charts.
          </p>
          <div className="mb-4 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="text-sm font-bold text-green-800 mb-2">Integration Lab Tasks</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
                <span><strong>Structure:</strong> On BTC/USDT 4H, label the swing points and determine if it&apos;s HH+HL or LH+LL</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
                <span><strong>S/R:</strong> Draw 3 key horizontal levels. How many touches does each have?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
                <span><strong>EMAs:</strong> Add EMA 20/50/200. Are they stacked bullish, bearish, or tangled?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
                <span><strong>SMC:</strong> Find one order block and one FVG. Is there a recent BOS or CHoCH?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">5</span>
                <span><strong>Decision:</strong> Score each factor ✓/✗. Do you have 3+ factors aligned? Write your confluence score.</span>
              </li>
            </ol>
          </div>

          <TradingViewLab />
        </TopicCard>
      </div>
    </section>
  )
}
