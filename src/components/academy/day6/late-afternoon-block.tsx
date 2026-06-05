'use client'

import React from 'react'
import {
  Sunset,
  Gauge,
  DollarSign,
  MessageCircle,
  Layers,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Users,
  Search,
  Activity,
  CircleDot,
  Shield,
  Zap,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { DriverCard } from '@/components/academy/driver-card'

/* ═══════════════════════════════════════════════════════════════════════
   SVG: Fear & Greed Gauge (Topic 1)
   ═══════════════════════════════════════════════════════════════════════ */

function FearGreedGauge() {
  const centerX = 200
  const centerY = 160
  const radius = 130

  // Helper: convert value (0-100) to angle (180 to 0 degrees)
  const valueToAngle = (val: number) => 180 - (val / 100) * 180

  // Helper: polar to cartesian
  const polarToCartesian = (cx: number, cy: number, r: number, angleDeg: number) => {
    const angleRad = (angleDeg * Math.PI) / 180
    return {
      x: cx + r * Math.cos(angleRad),
      y: cy - r * Math.sin(angleRad),
    }
  }

  // Create arc segments for each zone
  const zones = [
    { start: 0, end: 20, color: '#dc2626', label: 'EXTREME FEAR' },
    { start: 20, end: 40, color: '#ea580c', label: 'FEAR' },
    { start: 40, end: 60, color: '#eab308', label: 'NEUTRAL' },
    { start: 60, end: 80, color: '#22c55e', label: 'GREED' },
    { start: 80, end: 100, color: '#15803d', label: 'EXTREME GREED' },
  ]

  const createArcPath = (startVal: number, endVal: number, r: number) => {
    const startAngle = valueToAngle(startVal)
    const endAngle = valueToAngle(endVal)
    const start = polarToCartesian(centerX, centerY, r, startAngle)
    const end = polarToCartesian(centerX, centerY, r, endAngle)
    const innerStart = polarToCartesian(centerX, centerY, r - 40, startAngle)
    const innerEnd = polarToCartesian(centerX, centerY, r - 40, endAngle)
    const largeArc = endVal - startVal > 50 ? 1 : 0

    return [
      `M ${start.x} ${start.y}`,
      `A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`,
      `L ${innerEnd.x} ${innerEnd.y}`,
      `A ${r - 40} ${r - 40} 0 ${largeArc} 1 ${innerStart.x} ${innerStart.y}`,
      'Z',
    ].join(' ')
  }

  // Tick marks
  const ticks: { outer: { x: number; y: number }; inner: { x: number; y: number }; value: number }[] = []
  for (let i = 0; i <= 100; i += 10) {
    const angle = valueToAngle(i)
    const outer = polarToCartesian(centerX, centerY, radius + 8, angle)
    const inner = polarToCartesian(centerX, centerY, radius + 2, angle)
    ticks.push({ outer, inner, value: i })
  }

  // Labels for each zone
  const zoneLabels = zones.map((zone) => {
    const midAngle = valueToAngle((zone.start + zone.end) / 2)
    const pos = polarToCartesian(centerX, centerY, radius + 28, midAngle)
    return { ...pos, label: zone.label, color: zone.color }
  })

  // Contrarian labels
  const contrarianBuyAngle = valueToAngle(10)
  const contrarianBuyPos = polarToCartesian(centerX, centerY, radius - 60, contrarianBuyAngle)
  const contrarianSellAngle = valueToAngle(90)
  const contrarianSellPos = polarToCartesian(centerX, centerY, radius - 60, contrarianSellAngle)

  // Needle pointing to example value (22 - Extreme Fear area)
  const needleValue = 22
  const needleAngle = valueToAngle(needleValue)
  const needleTip = polarToCartesian(centerX, centerY, radius - 15, needleAngle)
  const needleBase1 = polarToCartesian(centerX, centerY, 8, needleAngle + 90)
  const needleBase2 = polarToCartesian(centerX, centerY, 8, needleAngle - 90)

  return (
    <svg viewBox="0 0 400 240" className="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="400" height="240" fill="#f8fafc" rx="12" />

      {/* Title */}
      <text x={centerX} y="28" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold" letterSpacing="1">
        CRYPTO FEAR &amp; GREED INDEX
      </text>

      {/* Zone arcs */}
      {zones.map((zone, i) => (
        <path
          key={i}
          d={createArcPath(zone.start, zone.end, radius)}
          fill={zone.color}
          opacity="0.85"
        />
      ))}

      {/* Gradient overlay for polish */}
      <defs>
        <linearGradient id="gaugeShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={createArcPath(0, 100, radius)}
        fill="url(#gaugeShine)"
      />

      {/* Inner circle (hub) */}
      <circle cx={centerX} cy={centerY} r="12" fill="#1e293b" />
      <circle cx={centerX} cy={centerY} r="8" fill="#334155" />

      {/* Tick marks */}
      {ticks.map((tick, i) => (
        <line
          key={i}
          x1={tick.inner.x}
          y1={tick.inner.y}
          x2={tick.outer.x}
          y2={tick.outer.y}
          stroke="#475569"
          strokeWidth={tick.value % 20 === 0 ? 2 : 1}
        />
      ))}

      {/* Number labels at 0, 20, 40, 60, 80, 100 */}
      {[0, 20, 40, 60, 80, 100].map((val) => {
        const angle = valueToAngle(val)
        const pos = polarToCartesian(centerX, centerY, radius + 20, angle)
        return (
          <text
            key={val}
            x={pos.x}
            y={pos.y + 4}
            textAnchor="middle"
            fontSize="9"
            fill="#334155"
            fontWeight="bold"
          >
            {val}
          </text>
        )
      })}

      {/* Zone labels */}
      {zoneLabels.map((zl, i) => (
        <text
          key={i}
          x={zl.x}
          y={zl.y + 4}
          textAnchor="middle"
          fontSize="7"
          fill={zl.color}
          fontWeight="bold"
          letterSpacing="0.5"
        >
          {zl.label}
        </text>
      ))}

      {/* Needle */}
      <polygon
        points={`${needleTip.x},${needleTip.y} ${needleBase1.x},${needleBase1.y} ${needleBase2.x},${needleBase2.y}`}
        fill="#0f172a"
        opacity="0.9"
      />
      <circle cx={centerX} cy={centerY} r="5" fill="#f59e0b" />

      {/* Current value label */}
      <text x={centerX} y={centerY + 32} textAnchor="middle" fontSize="22" fill="#0f172a" fontWeight="bold">
        {needleValue}
      </text>
      <text x={centerX} y={centerY + 45} textAnchor="middle" fontSize="8" fill="#64748b" fontWeight="semibold">
        EXTREME FEAR
      </text>

      {/* Contrarian labels */}
      <rect x={contrarianBuyPos.x - 48} y={contrarianBuyPos.y - 8} width="96" height="16" rx="4" fill="#dc2626" opacity="0.9" />
      <text x={contrarianBuyPos.x} y={contrarianBuyPos.y + 4} textAnchor="middle" fontSize="7" fill="white" fontWeight="bold" letterSpacing="0.5">
        CONTRARIAN BUY
      </text>

      <rect x={contrarianSellPos.x - 50} y={contrarianSellPos.y - 8} width="100" height="16" rx="4" fill="#15803d" opacity="0.9" />
      <text x={contrarianSellPos.x} y={contrarianSellPos.y + 4} textAnchor="middle" fontSize="7" fill="white" fontWeight="bold" letterSpacing="0.5">
        CONTRARIAN SELL
      </text>

      {/* Source label */}
      <text x={centerX} y="234" textAnchor="middle" fontSize="7" fill="#94a3b8">
        Source: alternative.me/crypto/fear-and-greed-index/
      </text>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SVG: Funding Rate Scale (Topic 2)
   ═══════════════════════════════════════════════════════════════════════ */

function FundingRateScale() {
  const barY = 80
  const barHeight = 32
  const barLeft = 40
  const barRight = 360
  const barMid = (barLeft + barRight) / 2
  const barWidth = barRight - barLeft

  // Danger zone boundaries
  const negDangerLeft = barLeft
  const negDangerRight = barMid - (0.05 / 0.1) * (barWidth / 2)
  const posDangerLeft = barMid + (0.05 / 0.1) * (barWidth / 2)
  const posDangerRight = barRight

  return (
    <svg viewBox="0 0 400 220" className="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="400" height="220" fill="#f8fafc" rx="12" />

      {/* Title */}
      <text x="200" y="24" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold" letterSpacing="1">
        FUNDING RATE SCALE
      </text>

      {/* Danger zone backgrounds */}
      <rect x={negDangerLeft} y={barY - 4} width={negDangerRight - negDangerLeft} height={barHeight + 8} rx="6" fill="#fef2f2" stroke="#fecaca" strokeWidth="1" />
      <rect x={posDangerLeft} y={barY - 4} width={posDangerRight - posDangerLeft} height={barHeight + 8} rx="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />

      {/* Danger zone labels top */}
      <text x={(negDangerLeft + negDangerRight) / 2} y={barY - 12} textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold" letterSpacing="0.3">
        DANGER ZONE
      </text>
      <text x={(posDangerLeft + posDangerRight) / 2} y={barY - 12} textAnchor="middle" fontSize="7" fill="#15803d" fontWeight="bold" letterSpacing="0.3">
        DANGER ZONE
      </text>

      {/* Main gradient bar */}
      <defs>
        <linearGradient id="fundingGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="25%" stopColor="#f87171" />
          <stop offset="45%" stopColor="#fbbf24" />
          <stop offset="50%" stopColor="#a3a3a3" />
          <stop offset="55%" stopColor="#a3e635" />
          <stop offset="75%" stopColor="#4ade80" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
      </defs>
      <rect x={barLeft} y={barY} width={barWidth} height={barHeight} rx="6" fill="url(#fundingGrad)" />

      {/* Center line (0%) */}
      <line x1={barMid} y1={barY - 6} x2={barMid} y2={barY + barHeight + 6} stroke="#334155" strokeWidth="2" />

      {/* Scale labels below */}
      {[-0.1, -0.05, 0, 0.05, 0.1].map((val) => {
        const x = barMid + (val / 0.1) * (barWidth / 2)
        return (
          <React.Fragment key={val}>
            <line x1={x} y1={barY + barHeight} x2={x} y2={barY + barHeight + 6} stroke="#475569" strokeWidth="1" />
            <text x={x} y={barY + barHeight + 18} textAnchor="middle" fontSize="9" fill="#334155" fontWeight="bold">
              {val >= 0 ? '+' : ''}{val.toFixed(val === 0 ? 0 : 2)}%
            </text>
          </React.Fragment>
        )
      })}

      {/* Side labels */}
      <text x={barLeft + 10} y={barY + barHeight / 2 + 4} fontSize="8" fill="white" fontWeight="bold">
        SHORTS PAY LONGS
      </text>
      <text x={barRight - 10} y={barY + barHeight / 2 + 4} textAnchor="end" fontSize="8" fill="white" fontWeight="bold">
        LONGS PAY SHORTS
      </text>

      {/* Marker at -0.05 */}
      <line x1={negDangerRight} y1={barY - 2} x2={negDangerRight} y2={barY + barHeight + 2} stroke="#dc2626" strokeWidth="2" strokeDasharray="4 2" />
      {/* Marker at +0.05 */}
      <line x1={posDangerLeft} y1={barY - 2} x2={posDangerLeft} y2={barY + barHeight + 2} stroke="#15803d" strokeWidth="2" strokeDasharray="4 2" />

      {/* Illustrative examples */}
      {/* Example 1: Extreme positive */}
      <rect x="40" y="148" width="320" height="28" rx="6" fill="#fef3c7" stroke="#fbbf24" strokeWidth="1" />
      <CircleDot className="hidden" />
      <text x="52" y="166" fontSize="8" fill="#92400e" fontWeight="bold">Example:</text>
      <text x="102" y="166" fontSize="8" fill="#334155">Funding at +0.08% → Overleveraged longs → Cascade risk → Reduce long exposure</text>

      {/* Example 2: Extreme negative */}
      <rect x="40" y="182" width="320" height="28" rx="6" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
      <text x="52" y="200" fontSize="8" fill="#1e40af" fontWeight="bold">Example:</text>
      <text x="102" y="200" fontSize="8" fill="#334155">Funding at -0.07% → Overleveraged shorts → Short squeeze risk → Reduce short exposure</text>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SVG: Three-Layer Model Diagram (Topic 4)
   ═══════════════════════════════════════════════════════════════════════ */

function ThreeLayerModelDiagram() {
  const cx = 200
  const cy = 150

  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="400" height="300" fill="#f8fafc" rx="12" />

      {/* Title */}
      <text x="200" y="24" textAnchor="middle" fontSize="11" fill="#64748b" fontWeight="bold" letterSpacing="1">
        THE THREE-LAYER ANALYSIS MODEL
      </text>

      {/* Outer ring — SENTIMENT (violet) */}
      <circle cx={cx} cy={cy} r="120" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="3" />
      <circle cx={cx} cy={cy} r="105" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="6 3" opacity="0.5" />

      {/* Middle ring — ON-CHAIN (blue) */}
      <circle cx={cx} cy={cy} r="78" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" strokeWidth="3" />
      <circle cx={cx} cy={cy} r="65" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="6 3" opacity="0.5" />

      {/* Inner core — TECHNICAL (amber) */}
      <circle cx={cx} cy={cy} r="40" fill="#f59e0b" opacity="0.25" stroke="#f59e0b" strokeWidth="3" />

      {/* Labels inside layers */}
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="bold">
        TECHNICAL
      </text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="7" fill="#92400e">
        When to enter
      </text>

      <text x={cx} y={cy - 52} textAnchor="middle" fontSize="9" fill="#1e40af" fontWeight="bold">
        ON-CHAIN
      </text>
      <text x={cx} y={cy - 42} textAnchor="middle" fontSize="7" fill="#1e40af">
        If macro supports
      </text>

      <text x={cx} y={cy + 56} textAnchor="middle" fontSize="9" fill="#6d28d9" fontWeight="bold">
        SENTIMENT
      </text>
      <text x={cx} y={cy + 66} textAnchor="middle" fontSize="7" fill="#6d28d9">
        Where in the cycle
      </text>

      {/* Arrow from Sentiment to On-Chain (left side) */}
      <defs>
        <marker id="arrowViolet" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b5cf6" />
        </marker>
        <marker id="arrowBlue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
        </marker>
      </defs>

      {/* Confirm arrows — Sentiment confirms On-Chain */}
      <line x1={cx - 92} y1={cy - 60} x2={cx - 68} y2={cy - 42} stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrowViolet)" />
      <text x={cx - 115} y={cy - 44} fontSize="7" fill="#8b5cf6" fontWeight="bold">confirms</text>

      {/* Confirm arrows — On-Chain confirms Technical */}
      <line x1={cx - 55} y1={cy - 25} x2={cx - 35} y2={cy - 12} stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowBlue)" />
      <text x={cx - 75} y={cy - 12} fontSize="7" fill="#3b82f6" fontWeight="bold">confirms</text>

      {/* Right side labels with descriptions */}
      {/* Sentiment description */}
      <rect x="290" y="38" width="100" height="40" rx="6" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="1" />
      <text x="340" y="54" textAnchor="middle" fontSize="8" fill="#6d28d9" fontWeight="bold">SENTIMENT</text>
      <text x="340" y="66" textAnchor="middle" fontSize="7" fill="#6d28d9">Emotional cycle</text>
      <text x="340" y="74" textAnchor="middle" fontSize="7" fill="#6d28d9">context</text>
      <line x1="290" y1="58" x2="268" y2="80" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 2" />

      {/* On-Chain description */}
      <rect x="290" y="88" width="100" height="40" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" />
      <text x="340" y="104" textAnchor="middle" fontSize="8" fill="#1e40af" fontWeight="bold">ON-CHAIN</text>
      <text x="340" y="116" textAnchor="middle" fontSize="7" fill="#1e40af">Macro environment</text>
      <text x="340" y="124" textAnchor="middle" fontSize="7" fill="#1e40af">confirmation</text>
      <line x1="290" y1="108" x2="258" y2="120" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 2" />

      {/* Technical description */}
      <rect x="290" y="138" width="100" height="40" rx="6" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1" />
      <text x="340" y="154" textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="bold">TECHNICAL</text>
      <text x="340" y="166" textAnchor="middle" fontSize="7" fill="#92400e">Entry timing</text>
      <text x="340" y="174" textAnchor="middle" fontSize="7" fill="#92400e">primary tool</text>
      <line x1="290" y1="158" x2="240" y2="150" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" />

      {/* Bottom summary */}
      <rect x="40" y="262" width="320" height="28" rx="6" fill="#1e293b" />
      <text x="200" y="280" textAnchor="middle" fontSize="9" fill="#fbbf24" fontWeight="bold" letterSpacing="0.5">
        ALL THREE LAYERS MUST ALIGN FOR HIGH-CONVICTION TRADES
      </text>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 1: The Fear & Greed Index — Your Contrarian Compass
   ═══════════════════════════════════════════════════════════════════════ */

function TopicFearGreedIndex() {
  const actionHeaders = ['Score Range', 'Label', 'Your Action']
  const actionRows = [
    [
      <span key="r1" className="font-bold text-red-600">0–20</span>,
      <span key="l1" className="font-semibold text-red-700">Extreme Fear</span>,
      <span key="a1" className="font-semibold text-green-700">CONTRARIAN BUY — look for long setups</span>,
    ],
    [
      <span key="r2" className="font-bold text-orange-600">20–40</span>,
      <span key="l2" className="font-semibold text-orange-700">Fear</span>,
      'Start looking for buying opportunities',
    ],
    [
      <span key="r3" className="font-bold text-yellow-600">40–60</span>,
      <span key="l3" className="font-semibold text-yellow-700">Neutral</span>,
      'Trade your technicals, sentiment is neutral',
    ],
    [
      <span key="r4" className="font-bold text-green-600">60–80</span>,
      <span key="l4" className="font-semibold text-green-700">Greed</span>,
      'Tighten stops, take profits, be cautious',
    ],
    [
      <span key="r5" className="font-bold text-emerald-800">80–100</span>,
      <span key="l5" className="font-semibold text-emerald-900">Extreme Greed</span>,
      <span key="a5" className="font-semibold text-red-700">CONTRARIAN SELL — reduce exposure</span>,
    ],
  ]

  return (
    <TopicCard
      id="d6-fear-greed-index"
      title="The Fear & Greed Index — Your Contrarian Compass"
      icon={<Gauge />}
      variant="default"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        The{' '}
        <span className="font-bold text-violet-600">Crypto Fear &amp; Greed Index</span>{' '}
        (alternative.me/crypto/fear-and-greed-index/) provides a daily score from 0–100
        measuring market sentiment. It is a contrarian tool — when the crowd is most fearful,
        opportunities often emerge; when the crowd is most greedy, caution is warranted.
      </p>

      {/* 6 Components */}
      <p className="mb-3 text-sm font-bold text-slate-800">The 6 Components of the Index:</p>
      <div className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <DriverCard number={1} title="Volatility (25%)">
          Current volatility vs 30/90-day averages. Higher volatility = more fear.
        </DriverCard>
        <DriverCard number={2} title="Market Momentum (25%)">
          Current volume vs 30/90-day averages. Lower volume = more fear.
        </DriverCard>
        <DriverCard number={3} title="Social Media (15%)">
          Twitter/X activity and sentiment analysis. Overwhelming positivity = greed.
        </DriverCard>
        <DriverCard number={4} title="Surveys (15%)">
          Weekly investor sentiment surveys. Broad bearishness = fear.
        </DriverCard>
        <DriverCard number={5} title="Bitcoin Dominance (10%)">
          Rising BTC dominance = fear (flight to safety). Falling = greed (altcoin speculation).
        </DriverCard>
        <DriverCard number={6} title="Google Trends (10%)">
          Search volume for &ldquo;Bitcoin&rdquo;. High search volume = greed. Low = fear.
        </DriverCard>
      </div>

      {/* SVG Gauge */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Fear &amp; Greed Gauge — Visual Scale
        </p>
        <FearGreedGauge />
      </div>

      {/* Action Table */}
      <p className="mb-3 text-sm font-bold text-slate-800">Action Guide by Score:</p>
      <div className="mb-5">
        <ComparisonTable headers={actionHeaders} rows={actionRows} highlightColumn={2} />
      </div>

      {/* Critical nuance */}
      <div className="mb-5 rounded-lg border-l-4 border-l-violet-500 bg-violet-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600" />
          <div>
            <p className="text-sm font-bold text-violet-800">Critical Nuance</p>
            <p className="mt-1 text-sm text-slate-700">
              The F&amp;G Index is a <strong>macro indicator, not a timing tool</strong>. It tells
              you the environment, not the exact entry. In Extreme Fear, look for technical buy
              setups. In Extreme Greed, tighten risk management. <em>Never use it as your sole signal.</em>
            </p>
          </div>
        </div>
      </div>

      {/* Historical validation */}
      <p className="mb-3 text-sm font-bold text-slate-800">Historical Validation:</p>
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-red-200 bg-red-50/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <h4 className="text-sm font-bold text-red-800">March 2020 — Extreme Fear</h4>
          </div>
          <p className="text-sm text-slate-700">
            F&amp;G hit <span className="font-bold text-red-700">8</span> (Extreme Fear). BTC was
            around <span className="font-bold text-slate-900">$5,000</span>. This turned out to
            be the <span className="font-bold text-green-700">best buying opportunity in years</span>.
          </p>
        </div>
        <div className="rounded-xl border-2 border-green-200 bg-green-50/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-sm font-bold text-green-800">November 2021 — Extreme Greed</h4>
          </div>
          <p className="text-sm text-slate-700">
            F&amp;G hit <span className="font-bold text-green-700">84</span> (Extreme Greed). BTC
            was near <span className="font-bold text-slate-900">$69,000</span>. This was{' '}
            <span className="font-bold text-red-700">near the top</span>.
          </p>
        </div>
      </div>

      {/* The exception */}
      <div className="mb-4 rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800">The Exception</p>
            <p className="mt-1 text-sm text-slate-700">
              During parabolic bull runs, F&amp;G can stay above 80 for weeks or even months.
              Always combine with technical analysis. A high F&amp;G alone does not mean
              &ldquo;sell everything&rdquo; — it means <em>increase caution and risk management</em>.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 2: Funding Rate — The Hidden Sentiment Gauge
   ═══════════════════════════════════════════════════════════════════════ */

function TopicFundingRate() {
  return (
    <TopicCard
      id="d6-funding-rate"
      title="Funding Rate — The Hidden Sentiment Gauge"
      icon={<DollarSign />}
      variant="default"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        <span className="font-bold text-violet-600">Funding rate</span> is the payment
        between long and short traders in perpetual futures, occurring every 8 hours.
        It is <strong>not a fee</strong> — it is a mechanism to keep the futures price
        close to the spot price.
      </p>

      {/* How to read it */}
      <p className="mb-3 text-sm font-bold text-slate-800">How to Read It:</p>
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-green-200 bg-green-50/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-sm font-bold text-green-800">Positive Funding</h4>
          </div>
          <p className="text-sm text-slate-700">
            <strong>Longs pay shorts.</strong> More traders are betting on price going up.
            Extreme positive = too many longs, potential cascade.
          </p>
        </div>
        <div className="rounded-xl border-2 border-red-200 bg-red-50/50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <h4 className="text-sm font-bold text-red-800">Negative Funding</h4>
          </div>
          <p className="text-sm text-slate-700">
            <strong>Shorts pay longs.</strong> More traders are betting on price going down.
            Extreme negative = too many shorts, potential short squeeze.
          </p>
        </div>
      </div>

      {/* Practical impact */}
      <p className="mb-3 text-sm font-bold text-slate-800">Practical Impact — The Real Cost:</p>
      <div className="mb-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg bg-white p-3 border border-slate-100">
            <div>
              <p className="text-sm font-bold text-slate-800">$10,000 long @ 0.01%</p>
              <p className="text-xs text-slate-500">Normal funding rate</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-700">$1 / 8hrs</p>
              <p className="text-xs text-slate-500">$3/day = <strong>$90/month</strong></p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-red-50 p-3 border border-red-100">
            <div>
              <p className="text-sm font-bold text-red-800">$10,000 long @ 0.1%</p>
              <p className="text-xs text-red-500">High funding rate</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-red-700">$10 / 8hrs</p>
              <p className="text-xs text-red-500">$30/day = <strong className="text-red-700">$900/month</strong></p>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs font-semibold text-red-700">
          This is why high-leverage + high funding bleeds accounts dry.
        </p>
      </div>

      {/* Where to find it */}
      <div className="mb-5 rounded-lg border-l-4 border-l-blue-500 bg-blue-50 p-4">
        <div className="flex items-start gap-3">
          <Search className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
          <div>
            <p className="text-sm font-bold text-blue-800">Where to Find It</p>
            <p className="mt-1 text-sm text-slate-700">
              <strong>Coinglass.com</strong> — aggregates all major exchanges including MEXC and Binance.
              Also visible directly in your futures trading interface.
            </p>
          </div>
        </div>
      </div>

      {/* How to use for trading */}
      <p className="mb-3 text-sm font-bold text-slate-800">How to Use for Trading:</p>
      <div className="mb-5 space-y-3">
        <div className="rounded-lg border border-red-200 bg-red-50/50 p-3">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">!</span>
            <div>
              <p className="text-sm font-bold text-red-800">
                Extreme Positive (&gt;0.05%)
              </p>
              <p className="text-sm text-slate-700">
                Overleveraged longs. Cascade liquidation possible. <strong>Reduce long exposure.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-3">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">!</span>
            <div>
              <p className="text-sm font-bold text-blue-800">
                Extreme Negative (&lt;-0.05%)
              </p>
              <p className="text-sm text-slate-700">
                Overleveraged shorts. Short squeeze possible. <strong>Reduce short exposure.</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3">
          <div className="flex items-start gap-2">
            <Activity className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <div>
              <p className="text-sm font-bold text-amber-800">Funding Rate Divergence</p>
              <p className="mt-1 text-sm text-slate-700">
                <strong>Price rising but funding falling</strong> = rally losing conviction.
                <br />
                <strong>Price falling but funding becoming less negative</strong> = selling pressure easing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SVG */}
      <div className="mb-4 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Funding Rate Scale — Danger Zones and Direction
        </p>
        <FundingRateScale />
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 3: Social Sentiment — Reading the Crowd
   ═══════════════════════════════════════════════════════════════════════ */

function TopicSocialSentiment() {
  return (
    <TopicCard
      id="d6-social-sentiment"
      title="Social Sentiment — Reading the Crowd"
      icon={<MessageCircle />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Social platforms are the <span className="font-bold text-violet-600">pulse of the crowd</span>.
        Understanding crowd psychology helps you identify when sentiment has reached extremes
        — and extremes often signal reversals. Use these as <strong>contrarian indicators</strong>,
        not trading signals.
      </p>

      {/* Twitter/X */}
      <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100">
            <MessageCircle className="h-4 w-4 text-sky-600" />
          </div>
          <h4 className="text-sm font-bold text-slate-900">Twitter / X Crypto Community</h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <p className="text-sm text-slate-700">
              When every tweet is about a specific altcoin → often near <span className="font-bold text-red-700">local top</span>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <TrendingDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
            <p className="text-sm text-slate-700">
              When nobody is talking about crypto → often near <span className="font-bold text-green-700">local bottom</span>
            </p>
          </div>
        </div>
      </div>

      {/* Reddit */}
      <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
            <Users className="h-4 w-4 text-orange-600" />
          </div>
          <h4 className="text-sm font-bold text-slate-900">Reddit r/cryptocurrency</h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <TrendingDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
            <p className="text-sm text-slate-700">
              Top posts &ldquo;crypto is dead&rdquo; / &ldquo;I lost everything&rdquo; → likely near <span className="font-bold text-green-700">bottom</span>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <p className="text-sm text-slate-700">
              Top posts &ldquo;to the moon&rdquo; / &ldquo;which coin will 100x&rdquo; → likely near <span className="font-bold text-red-700">top</span>
            </p>
          </div>
        </div>
      </div>

      {/* Telegram */}
      <div className="mb-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
            <BarChart3 className="h-4 w-4 text-blue-600" />
          </div>
          <h4 className="text-sm font-bold text-slate-900">Telegram Group Mood</h4>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
            <p className="text-sm text-slate-700">
              Most bearish members turn bullish → <span className="font-bold text-amber-700">caution</span>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <p className="text-sm text-slate-700">
              Most bullish members give up → <span className="font-bold text-green-700">opportunity</span>
            </p>
          </div>
        </div>
      </div>

      {/* Key Rule */}
      <div className="mb-4 rounded-lg border-l-4 border-l-violet-500 bg-violet-50 p-4">
        <div className="flex items-start gap-3">
          <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600" />
          <div>
            <p className="text-sm font-bold text-violet-800">Key Rule</p>
            <p className="mt-1 text-sm text-slate-700">
              Social sentiment is <strong>supplementary, never primary</strong>. Use it to confirm
              technical and on-chain analysis. If technicals say &ldquo;buy&rdquo; AND sentiment
              is extremely fearful = <span className="font-bold text-green-700">confluence</span>.
              If technicals say &ldquo;buy&rdquo; but sentiment is euphoric = <span className="font-bold text-red-700">caution</span>.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 4: The Confluence Method — Combining On-Chain + Technical + Sentiment
   ═══════════════════════════════════════════════════════════════════════ */

function TopicConfluenceMethod() {
  const confluenceHeaders = ['Technical Signal', 'On-Chain Data', 'Sentiment', 'Action']
  const confluenceRows = [
    [
      <span key="t1" className="font-semibold text-green-700">Bullish</span>,
      <span key="o1" className="font-semibold text-green-700">Bullish</span>,
      <span key="s1" className="font-semibold text-red-600">Fearful (F&amp;G &lt; 30)</span>,
      <span key="a1" className="font-bold text-green-800">STRONG BUY — Full position</span>,
    ],
    [
      <span key="t2" className="font-semibold text-green-700">Bullish</span>,
      <span key="o2" className="font-semibold text-green-700">Bullish</span>,
      'Neutral',
      <span key="a2" className="font-semibold text-green-700">BUY — Normal position</span>,
    ],
    [
      <span key="t3" className="font-semibold text-green-700">Bullish</span>,
      <span key="o3" className="font-semibold text-red-600">Bearish</span>,
      <span key="s3" className="font-semibold text-green-700">Greedy (F&amp;G &gt; 70)</span>,
      <span key="a3" className="font-bold text-amber-700">CAUTION — Reduce or skip</span>,
    ],
    [
      <span key="t4" className="font-semibold text-green-700">Bullish</span>,
      <span key="o4" className="font-semibold text-red-600">Bearish</span>,
      'Neutral',
      <span key="a4" className="font-semibold text-slate-700">NEUTRAL — Small or wait</span>,
    ],
    [
      <span key="t5" className="font-semibold text-red-600">Bearish</span>,
      <span key="o5" className="font-semibold text-red-600">Bearish</span>,
      'Fearful',
      <span key="a5" className="font-bold text-red-800">STRONG SELL / SHORT</span>,
    ],
    [
      <span key="t6" className="font-semibold text-red-600">Bearish</span>,
      <span key="o6" className="font-semibold text-green-700">Bullish</span>,
      <span key="s6" className="font-semibold text-green-700">Greedy</span>,
      <span key="a6" className="font-bold text-amber-700">CAUTION — Conflicting, wait</span>,
    ],
  ]

  return (
    <TopicCard
      id="d6-confluence-method"
      title="The Confluence Method — Combining On-Chain + Technical + Sentiment"
      icon={<Layers />}
      variant="highlight"
    >
      {/* Emphasis banner */}
      <div className="mb-5 rounded-xl border-2 border-violet-400 bg-violet-100/60 p-4 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-violet-800">
          THIS IS THE MOST IMPORTANT PART OF DAY 6
        </p>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        No single indicator or data point should drive a trade. The{' '}
        <span className="font-bold text-violet-600">Confluence Method</span> requires
        alignment across three independent analysis layers. When all three agree, you
        have a high-conviction setup. When they conflict, you reduce risk or wait.
      </p>

      {/* Three-Layer Analysis Model */}
      <p className="mb-3 text-sm font-bold text-slate-800">The Three-Layer Analysis Model:</p>
      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border-2 border-amber-300 bg-amber-50/60 p-4 text-center">
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-white">
            1
          </div>
          <h4 className="text-sm font-bold text-amber-900">TECHNICAL ANALYSIS</h4>
          <p className="mt-1 text-xs text-slate-600">Days 2–3</p>
          <p className="mt-2 text-sm font-semibold text-slate-700">
            Tells you <span className="font-bold text-amber-700">WHEN</span> to enter
          </p>
          <p className="text-xs text-slate-500">Primary decision tool</p>
        </div>
        <div className="rounded-xl border-2 border-blue-300 bg-blue-50/60 p-4 text-center">
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">
            2
          </div>
          <h4 className="text-sm font-bold text-blue-900">ON-CHAIN ANALYSIS</h4>
          <p className="mt-1 text-xs text-slate-600">Today</p>
          <p className="mt-2 text-sm font-semibold text-slate-700">
            Tells you <span className="font-bold text-blue-700">IF</span> the macro supports
          </p>
          <p className="text-xs text-slate-500">Confirmation tool</p>
        </div>
        <div className="rounded-xl border-2 border-violet-300 bg-violet-50/60 p-4 text-center">
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 text-lg font-bold text-white">
            3
          </div>
          <h4 className="text-sm font-bold text-violet-900">SENTIMENT ANALYSIS</h4>
          <p className="mt-1 text-xs text-slate-600">Today</p>
          <p className="mt-2 text-sm font-semibold text-slate-700">
            Tells you <span className="font-bold text-violet-700">WHERE</span> in the cycle
          </p>
          <p className="text-xs text-slate-500">Context tool</p>
        </div>
      </div>

      {/* SVG Diagram */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Three-Layer Model — Confluence Diagram
        </p>
        <ThreeLayerModelDiagram />
      </div>

      {/* Confluence Matrix */}
      <p className="mb-3 text-sm font-bold text-slate-800">The Confluence Matrix:</p>
      <div className="mb-5">
        <ComparisonTable headers={confluenceHeaders} rows={confluenceRows} highlightColumn={3} />
      </div>

      {/* Worked Example */}
      <div className="mb-5 rounded-xl border-2 border-green-300 bg-green-50/40 p-4">
        <div className="mb-3 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <h4 className="text-sm font-bold text-green-800 uppercase tracking-wide">
            Worked Example — A Confluence Trade (STRONG BUY)
          </h4>
        </div>
        <div className="space-y-3">
          <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3">
            <p className="text-xs font-bold text-amber-800 mb-1">1. TECHNICAL</p>
            <p className="text-sm text-slate-700">
              BTC/USDT at major support on daily. RSI bullish divergence. MACD bullish
              crossover on 4H. EMA 20 above EMA 50. <span className="font-bold text-amber-700">7-Point score: 6/7</span>.
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-3">
            <p className="text-xs font-bold text-blue-800 mb-1">2. ON-CHAIN</p>
            <p className="text-sm text-slate-700">
              BTC exchange outflows increasing 5 consecutive days. MVRV at 0.95 (undervalued).
              NUPL at 0.15 (capitulation/hope). Miner reserves increasing.
            </p>
          </div>
          <div className="rounded-lg border border-violet-200 bg-violet-50/50 p-3">
            <p className="text-xs font-bold text-violet-800 mb-1">3. SENTIMENT</p>
            <p className="text-sm text-slate-700">
              F&amp;G at 22 (Extreme Fear). Funding rate -0.03%. Twitter full of &ldquo;crypto is dead.&rdquo;
            </p>
          </div>
          <div className="rounded-lg bg-green-600 p-3 text-center">
            <p className="text-sm font-bold text-white">
              → STRONG BUY confluence. Full position (1% risk), with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Counter-Example */}
      <div className="mb-5 rounded-xl border-2 border-red-300 bg-red-50/40 p-4">
        <div className="mb-3 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <h4 className="text-sm font-bold text-red-800 uppercase tracking-wide">
            Counter-Example — A Dangerous Trade (CAUTION)
          </h4>
        </div>
        <div className="space-y-3">
          <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3">
            <p className="text-xs font-bold text-amber-800 mb-1">1. TECHNICAL</p>
            <p className="text-sm text-slate-700">
              BTC at resistance. RSI overbought but rising. MACD histogram shrinking.
              <span className="font-bold text-red-700"> 7-Point score: 3/7</span>.
            </p>
          </div>
          <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-3">
            <p className="text-xs font-bold text-blue-800 mb-1">2. ON-CHAIN</p>
            <p className="text-sm text-slate-700">
              Exchange inflows spiking. MVRV at 3.8 (overvalued). NUPL at 0.78 (euphoria).
              Miners selling.
            </p>
          </div>
          <div className="rounded-lg border border-violet-200 bg-violet-50/50 p-3">
            <p className="text-xs font-bold text-violet-800 mb-1">3. SENTIMENT</p>
            <p className="text-sm text-slate-700">
              F&amp;G at 88 (Extreme Greed). Funding rate +0.08%. Taxi driver asking about Bitcoin.
            </p>
          </div>
          <div className="rounded-lg bg-red-600 p-3 text-center">
            <p className="text-sm font-bold text-white">
              → CAUTION / REDUCE EXPOSURE. No new longs. Take profits. Consider small short with tight stop.
            </p>
          </div>
        </div>
      </div>

      {/* Key Takeaway */}
      <KeyTakeaway>
        Confluence is king. No single indicator or data point should drive a trade. When
        technical, on-chain, AND sentiment all agree, you have a high-conviction setup.
        When they conflict, reduce risk or wait.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT: Day6LateAfternoonBlock
   ═══════════════════════════════════════════════════════════════════════ */

export function Day6LateAfternoonBlock() {
  return (
    <section id="d6-late-afternoon" aria-labelledby="d6-late-afternoon-heading">
      <SectionDivider
        icon={<Sunset />}
        title="LATE AFTERNOON BLOCK — HOURS 5–7: SENTIMENT ANALYSIS & INTEGRATION"
      />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicFearGreedIndex />
        <TopicFundingRate />
        <TopicSocialSentiment />
        <TopicConfluenceMethod />
      </div>
    </section>
  )
}
