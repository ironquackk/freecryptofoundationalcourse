'use client'

import React from 'react'
import {
  Clock,
  Link,
  ArrowRightLeft,
  BarChart3,
  Eye,
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  Building2,
  Gauge,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'

/* ═══════════════════════════════════════════════════════════════════
   SVG: Transparency Spectrum
   Horizontal gradient bar showing Stock Market → Altcoin → Bitcoin/Ethereum
   ═══════════════════════════════════════════════════════════════════ */

function TransparencySpectrum() {
  return (
    <div className="my-6">
      <svg
        viewBox="0 0 500 160"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect x="0" y="0" width="500" height="160" fill="#fafafa" rx="12" />

        {/* Title */}
        <text x="250" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">
          TRANSPARENCY SPECTRUM
        </text>

        {/* Gradient bar */}
        <defs>
          <linearGradient id="transparencyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
            <stop offset="30%" stopColor="#f97316" stopOpacity="0.7" />
            <stop offset="55%" stopColor="#f59e0b" stopOpacity="0.55" />
            <stop offset="80%" stopColor="#8b5cf6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <rect x="40" y="42" width="420" height="36" rx="8" fill="url(#transparencyGrad)" />

        {/* Opaque overlay (left side) to simulate frosted glass */}
        <rect x="40" y="42" width="140" height="36" rx="8" fill="#ef4444" opacity="0.5" />

        {/* Labels on the bar */}
        <text x="110" y="65" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">
          OPAQUE
        </text>
        <text x="250" y="65" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">
          TRANSLUCENT
        </text>
        <text x="400" y="65" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7c3aed">
          TRANSPARENT
        </text>

        {/* Arrow indicators */}
        <text x="250" y="96" textAnchor="middle" fontSize="10" fill="#94a3b8">
          ◄── Less Visibility ────────────── More Visibility ──►
        </text>

        {/* Category labels below */}
        {/* Stock Market */}
        <rect x="50" y="110" width="120" height="38" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="110" y="127" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">
          Stock Market
        </text>
        <text x="110" y="141" textAnchor="middle" fontSize="9" fill="#b91c1c">
          Can&apos;t see positions
        </text>

        {/* Altcoin Markets */}
        <rect x="190" y="110" width="120" height="38" rx="6" fill="#fffbeb" stroke="#fcd34d" strokeWidth="1" />
        <text x="250" y="127" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#d97706">
          Altcoin Markets
        </text>
        <text x="250" y="141" textAnchor="middle" fontSize="9" fill="#b45309">
          Partial visibility
        </text>

        {/* Bitcoin/Ethereum */}
        <rect x="330" y="110" width="120" height="38" rx="6" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="1" />
        <text x="390" y="127" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c3aed">
          Bitcoin / Ethereum
        </text>
        <text x="390" y="141" textAnchor="middle" fontSize="9" fill="#6d28d9">
          Full on-chain visibility
        </text>

        {/* Connecting lines from bar to labels */}
        <line x1="110" y1="78" x2="110" y2="110" stroke="#fca5a5" strokeWidth="1" strokeDasharray="3,2" />
        <line x1="250" y1="78" x2="250" y2="110" stroke="#fcd34d" strokeWidth="1" strokeDasharray="3,2" />
        <line x1="400" y1="78" x2="390" y2="110" stroke="#c4b5fd" strokeWidth="1" strokeDasharray="3,2" />
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   SVG: Exchange Flow Diagram
   Personal wallets ↔ Exchange with inflow/outflow arrows + mini chart
   ═══════════════════════════════════════════════════════════════════ */

function ExchangeFlowDiagram() {
  return (
    <div className="my-6">
      <svg
        viewBox="0 0 500 360"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect x="0" y="0" width="500" height="360" fill="#fafafa" rx="12" />

        {/* Title */}
        <text x="250" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">
          EXCHANGE FLOW DIAGRAM
        </text>

        {/* Personal Wallet (left) */}
        <rect x="30" y="60" width="130" height="80" rx="10" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" />
        <text x="95" y="92" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">Personal</text>
        <text x="95" y="106" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">Wallets</text>
        <text x="95" y="124" textAnchor="middle" fontSize="8" fill="#15803d">(Self-custody)</text>
        {/* Wallet icon */}
        <rect x="75" y="66" width="14" height="10" rx="2" fill="none" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="84" y="63" width="7" height="6" rx="1" fill="none" stroke="#16a34a" strokeWidth="1.5" />

        {/* Exchange (right) */}
        <rect x="340" y="60" width="130" height="80" rx="10" fill="#fef2f2" stroke="#fca5a5" strokeWidth="2" />
        <text x="405" y="92" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">Exchange</text>
        <text x="405" y="106" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991b1b">(Binance, MEXC)</text>
        <text x="405" y="124" textAnchor="middle" fontSize="8" fill="#b91c1c">(Centralized)</text>
        {/* Building icon */}
        <rect x="390" y="66" width="16" height="14" rx="1" fill="none" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="394" y1="72" x2="394" y2="80" stroke="#dc2626" strokeWidth="1" />
        <line x1="398" y1="72" x2="398" y2="80" stroke="#dc2626" strokeWidth="1" />
        <line x1="402" y1="72" x2="402" y2="80" stroke="#dc2626" strokeWidth="1" />

        {/* INFLOW Arrow (top: wallet → exchange) */}
        <defs>
          <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#ef4444" />
          </marker>
          <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto">
            <polygon points="8 0, 0 3, 8 6" fill="#22c55e" />
          </marker>
        </defs>

        <line x1="165" y1="82" x2="335" y2="82" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
        <rect x="210" y="68" width="80" height="22" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="250" y="83" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">INFLOW</text>
        <text x="250" y="60" textAnchor="middle" fontSize="9" fill="#dc2626">🐻 BEARISH — Preparing to sell</text>

        {/* OUTFLOW Arrow (bottom: exchange → wallet) */}
        <line x1="335" y1="118" x2="165" y2="118" stroke="#22c55e" strokeWidth="2.5" markerEnd="url(#arrowGreen)" />
        <rect x="210" y="104" width="80" height="22" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
        <text x="250" y="119" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#16a34a">OUTFLOW</text>
        <text x="250" y="142" textAnchor="middle" fontSize="9" fill="#16a34a">🐂 BULLISH — Holding long-term</text>

        {/* Separator */}
        <line x1="20" y1="165" x2="480" y2="165" stroke="#e2e8f0" strokeWidth="1" />

        {/* Mini chart: How flow predicts price */}
        <text x="250" y="185" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#475569">
          HOW FLOW PREDICTS PRICE
        </text>

        {/* Chart area */}
        {/* Grid */}
        <line x1="60" y1="200" x2="460" y2="200" stroke="#f1f5f9" strokeWidth="0.5" />
        <line x1="60" y1="230" x2="460" y2="230" stroke="#f1f5f9" strokeWidth="0.5" />
        <line x1="60" y1="260" x2="460" y2="260" stroke="#f1f5f9" strokeWidth="0.5" />
        <line x1="60" y1="290" x2="460" y2="290" stroke="#f1f5f9" strokeWidth="0.5" />
        <line x1="60" y1="320" x2="460" y2="320" stroke="#f1f5f9" strokeWidth="0.5" />

        {/* Y axis labels */}
        <text x="55" y="204" textAnchor="end" fontSize="8" fill="#94a3b8">Price</text>

        {/* Price line (black) - drops after inflow spike, rises after outflow */}
        <polyline
          points="80,280 120,275 140,260 160,285 180,310 200,305 220,290 240,275 260,260 280,245 300,230 320,220 340,215 360,210 380,230 400,250 420,260 440,270"
          fill="none" stroke="#1e293b" strokeWidth="2"
        />

        {/* Inflow spike region (red shaded) */}
        <rect x="140" y="195" width="60" height="130" fill="#fef2f2" opacity="0.6" rx="2" />
        <text x="170" y="210" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">Inflow Spike</text>
        <text x="170" y="220" textAnchor="middle" fontSize="7" fill="#dc2626">↓ Price drops</text>

        {/* Outflow sustained region (green shaded) */}
        <rect x="240" y="195" width="80" height="130" fill="#f0fdf4" opacity="0.6" rx="2" />
        <text x="280" y="210" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">Sustained Outflow</text>
        <text x="280" y="220" textAnchor="middle" fontSize="7" fill="#16a34a">↑ Price rises</text>

        {/* Another inflow spike */}
        <rect x="360" y="195" width="60" height="130" fill="#fef2f2" opacity="0.6" rx="2" />
        <text x="390" y="210" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">Inflow Spike</text>
        <text x="390" y="220" textAnchor="middle" fontSize="7" fill="#dc2626">↓ Price drops</text>

        {/* X axis labels */}
        <text x="80" y="340" textAnchor="middle" fontSize="7" fill="#94a3b8">Day 1</text>
        <text x="170" y="340" textAnchor="middle" fontSize="7" fill="#94a3b8">Day 5</text>
        <text x="280" y="340" textAnchor="middle" fontSize="7" fill="#94a3b8">Day 12</text>
        <text x="390" y="340" textAnchor="middle" fontSize="7" fill="#94a3b8">Day 18</text>
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   SVG: MVRV Gauge
   Semicircular gauge showing BUY ZONE / NORMAL / SELL ZONE
   ═══════════════════════════════════════════════════════════════════ */

function MVRVGauge() {
  return (
    <div className="my-6">
      <svg
        viewBox="0 0 400 230"
        className="mx-auto w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect x="0" y="0" width="400" height="230" fill="#fafafa" rx="12" />

        {/* Title */}
        <text x="200" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">
          MVRV GAUGE
        </text>

        {/* Gauge arc segments */}
        {/* Green zone: MVRV < 1.0 (BUY ZONE) */}
        <path
          d="M 80 180 A 120 120 0 0 1 152 72"
          fill="none" stroke="#22c55e" strokeWidth="24" strokeLinecap="butt" opacity="0.85"
        />

        {/* Yellow zone: MVRV 1.0 - 3.5 (NORMAL) */}
        <path
          d="M 152 72 A 120 120 0 0 1 296 100"
          fill="none" stroke="#f59e0b" strokeWidth="24" strokeLinecap="butt" opacity="0.85"
        />

        {/* Red zone: MVRV > 3.5 (SELL ZONE) */}
        <path
          d="M 296 100 A 120 120 0 0 1 320 180"
          fill="none" stroke="#ef4444" strokeWidth="24" strokeLinecap="butt" opacity="0.85"
        />

        {/* Inner arc for depth */}
        <path
          d="M 92 180 A 108 108 0 0 1 158 83"
          fill="none" stroke="#16a34a" strokeWidth="4" strokeLinecap="butt" opacity="0.3"
        />
        <path
          d="M 158 83 A 108 108 0 0 1 288 108"
          fill="none" stroke="#d97706" strokeWidth="4" strokeLinecap="butt" opacity="0.3"
        />
        <path
          d="M 288 108 A 108 108 0 0 1 308 180"
          fill="none" stroke="#dc2626" strokeWidth="4" strokeLinecap="butt" opacity="0.3"
        />

        {/* Zone labels */}
        <text x="95" y="145" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#166534">
          BUY ZONE
        </text>
        <text x="95" y="157" textAnchor="middle" fontSize="8" fill="#15803d">
          MVRV &lt; 1.0
        </text>

        <text x="210" y="70" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400e">
          NORMAL
        </text>
        <text x="210" y="82" textAnchor="middle" fontSize="8" fill="#b45309">
          MVRV 1.0–3.5
        </text>

        <text x="310" y="135" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#991b1b">
          SELL ZONE
        </text>
        <text x="310" y="147" textAnchor="middle" fontSize="8" fill="#b91c1c">
          MVRV &gt; 3.5
        </text>

        {/* Needle pointing to illustrative position (~2.0 in NORMAL zone) */}
        <line
          x1="200" y1="180"
          x2="185" y2="85"
          stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round"
        />
        <circle cx="200" cy="180" r="8" fill="#1e293b" />
        <circle cx="200" cy="180" r="4" fill="#f8fafc" />

        {/* Value display */}
        <rect x="160" y="190" width="80" height="28" rx="6" fill="#1e293b" />
        <text x="200" y="208" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffffff">
          2.0
        </text>

        {/* Scale markers */}
        <text x="72" y="192" textAnchor="middle" fontSize="8" fill="#64748b">0</text>
        <text x="145" y="62" textAnchor="middle" fontSize="8" fill="#64748b">1.0</text>
        <text x="300" y="88" textAnchor="middle" fontSize="8" fill="#64748b">3.5</text>
        <text x="332" y="192" textAnchor="middle" fontSize="8" fill="#64748b">6+</text>
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   SVG: SOPR Chart Illustration
   Line chart with breakeven line, profit/loss zones, annotations
   ═══════════════════════════════════════════════════════════════════ */

function SOPRChartIllustration() {
  return (
    <div className="my-6">
      <svg
        viewBox="0 0 480 260"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect x="0" y="0" width="480" height="260" fill="#fafafa" rx="12" />

        {/* Title */}
        <text x="240" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">
          SOPR — SPENT OUTPUT PROFIT RATIO
        </text>

        {/* Profit zone (above 1.0) */}
        <rect x="50" y="36" width="410" height="80" fill="#f0fdf4" opacity="0.5" rx="0" />
        <text x="465" y="70" textAnchor="end" fontSize="9" fontWeight="bold" fill="#16a34a">PROFIT ZONE</text>
        <text x="465" y="82" textAnchor="end" fontSize="8" fill="#15803d">SOPR &gt; 1.0</text>

        {/* Loss zone (below 1.0) */}
        <rect x="50" y="116" width="410" height="80" fill="#fef2f2" opacity="0.5" rx="0" />
        <text x="465" y="155" textAnchor="end" fontSize="9" fontWeight="bold" fill="#dc2626">LOSS ZONE</text>
        <text x="465" y="167" textAnchor="end" fontSize="8" fill="#b91c1c">SOPR &lt; 1.0</text>

        {/* Breakeven line at SOPR = 1.0 */}
        <line x1="50" y1="116" x2="460" y2="116" stroke="#475569" strokeWidth="2" strokeDasharray="6,3" />
        <text x="55" y="113" fontSize="10" fontWeight="bold" fill="#475569">SOPR = 1.0</text>
        <text x="55" y="128" fontSize="8" fill="#64748b">Breakeven</text>

        {/* SOPR line - illustrative path */}
        <polyline
          points="60,75 90,68 120,60 150,55 170,65 190,80 210,95 230,110 245,130 260,145 275,140 290,125 305,108 320,95 340,80 360,70 380,62 400,58 420,65 440,75"
          fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinejoin="round"
        />

        {/* Fill below the SOPR line to 1.0 in the profit zone */}
        {/* Annotations */}
        {/* Peak above 1.1 - profit taking */}
        <line x1="150" y1="55" x2="150" y2="40" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2" />
        <rect x="110" y="28" width="85" height="16" rx="3" fill="#fffbeb" stroke="#fcd34d" strokeWidth="0.5" />
        <text x="152" y="40" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#b45309">
          SOPR &gt; 1.1 Profit Taking
        </text>

        {/* Drop below 1.0 - capitulation */}
        <circle cx="260" cy="145" r="4" fill="#ef4444" />
        <line x1="260" y1="149" x2="260" y2="170" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,2" />
        <rect x="220" y="170" width="85" height="16" rx="3" fill="#fef2f2" stroke="#fca5a5" strokeWidth="0.5" />
        <text x="262" y="181" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#dc2626">
          SOPR &lt; 1.0 Capitulation
        </text>

        {/* Bounce back above 1.0 - bullish signal */}
        <circle cx="305" cy="108" r="4" fill="#22c55e" />
        <line x1="305" y1="104" x2="305" y2="90" stroke="#22c55e" strokeWidth="1" strokeDasharray="3,2" />
        <rect x="265" y="76" width="90" height="16" rx="3" fill="#f0fdf4" stroke="#86efac" strokeWidth="0.5" />
        <text x="310" y="87" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#16a34a">
          Bounce above 1.0 = Bullish
        </text>

        {/* Sustained below 1.0 region */}
        <rect x="220" y="116" width="75" height="60" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,2" rx="3" />
        <text x="257" y="210" textAnchor="middle" fontSize="7" fill="#dc2626">
          Sustained &lt; 1.0 = Bearish
        </text>

        {/* Y axis labels */}
        <text x="46" y="60" textAnchor="end" fontSize="7" fill="#94a3b8">1.2</text>
        <text x="46" y="90" textAnchor="end" fontSize="7" fill="#94a3b8">1.1</text>
        <text x="46" y="145" textAnchor="end" fontSize="7" fill="#94a3b8">0.9</text>
        <text x="46" y="175" textAnchor="end" fontSize="7" fill="#94a3b8">0.8</text>

        {/* X axis */}
        <line x1="50" y1="196" x2="460" y2="196" stroke="#cbd5e1" strokeWidth="0.5" />
        <text x="60" y="210" textAnchor="middle" fontSize="7" fill="#94a3b8">Week 1</text>
        <text x="150" y="210" textAnchor="middle" fontSize="7" fill="#94a3b8">Week 3</text>
        <text x="260" y="210" textAnchor="middle" fontSize="7" fill="#94a3b8">Week 5</text>
        <text x="350" y="210" textAnchor="middle" fontSize="7" fill="#94a3b8">Week 7</text>
        <text x="440" y="210" textAnchor="middle" fontSize="7" fill="#94a3b8">Week 9</text>

        {/* Legend */}
        <line x1="60" y1="240" x2="80" y2="240" stroke="#8b5cf6" strokeWidth="2.5" />
        <text x="85" y="243" fontSize="8" fill="#64748b">SOPR Line</text>
        <line x1="160" y1="240" x2="180" y2="240" stroke="#475569" strokeWidth="1.5" strokeDasharray="4,2" />
        <text x="185" y="243" fontSize="8" fill="#64748b">Breakeven (1.0)</text>
        <circle cx="280" cy="240" r="3" fill="#22c55e" />
        <text x="288" y="243" fontSize="8" fill="#64748b">Bullish bounce</text>
        <circle cx="370" cy="240" r="3" fill="#ef4444" />
        <text x="378" y="243" fontSize="8" fill="#64748b">Capitulation</text>
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   SVG: Whale Transaction Flow Diagram
   Central whale with 4 arrows to different destinations
   ═══════════════════════════════════════════════════════════════════ */

function WhaleTransactionFlowDiagram() {
  return (
    <div className="my-6">
      <svg
        viewBox="0 0 500 320"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect x="0" y="0" width="500" height="320" fill="#fafafa" rx="12" />

        {/* Title */}
        <text x="250" y="24" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">
          WHALE TRANSACTION FLOW DIAGRAM
        </text>

        {/* Central whale icon */}
        <circle cx="250" cy="160" r="45" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="2.5" />
        {/* Simple whale shape inside */}
        <ellipse cx="250" cy="158" rx="22" ry="12" fill="#8b5cf6" opacity="0.8" />
        <ellipse cx="232" cy="148" rx="3" ry="3" fill="#ffffff" />
        <path d="M 272 155 Q 285 145 280 160 Q 275 170 272 162" fill="#8b5cf6" opacity="0.8" />
        <text x="250" y="178" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#7c3aed">
          WHALE
        </text>
        <text x="250" y="188" textAnchor="middle" fontSize="7" fill="#7c3aed">
          1,000+ BTC
        </text>

        {/* Arrow markers */}
        <defs>
          <marker id="arrowRedW" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#ef4444" />
          </marker>
          <marker id="arrowGreenW" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#22c55e" />
          </marker>
          <marker id="arrowGrayW" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#94a3b8" />
          </marker>
          <marker id="arrowTealW" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#14b8a6" />
          </marker>
        </defs>

        {/* Arrow 1: Whale → Exchange (top-left) — BEARISH */}
        <line x1="210" y1="130" x2="100" y2="62" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrowRedW)" />
        <rect x="30" y="40" width="90" height="50" rx="8" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
        {/* Exchange building icon */}
        <rect x="55" y="48" width="12" height="10" rx="1" fill="none" stroke="#dc2626" strokeWidth="1" />
        <line x1="58" y1="52" x2="58" y2="58" stroke="#dc2626" strokeWidth="0.75" />
        <line x1="62" y1="52" x2="62" y2="58" stroke="#dc2626" strokeWidth="0.75" />
        <text x="75" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">Exchange</text>
        <text x="75" y="82" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ef4444">🐻 BEARISH</text>

        {/* Arrow 2: Whale → Cold Storage (top-right) — BULLISH */}
        <line x1="290" y1="130" x2="400" y2="62" stroke="#22c55e" strokeWidth="2.5" markerEnd="url(#arrowGreenW)" />
        <rect x="380" y="40" width="100" height="50" rx="8" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" />
        {/* Cold storage / lock icon */}
        <rect x="412" y="46" width="10" height="8" rx="1" fill="none" stroke="#16a34a" strokeWidth="1" />
        <path d="M 414 46 L 414 43 Q 417 39 420 43 L 420 46" fill="none" stroke="#16a34a" strokeWidth="1" />
        <text x="430" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">Cold Storage</text>
        <text x="430" y="82" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#22c55e">🐂 BULLISH</text>

        {/* Arrow 3: Whale → Another Whale (bottom-left) — NEUTRAL */}
        <line x1="210" y1="190" x2="100" y2="250" stroke="#94a3b8" strokeWidth="2.5" markerEnd="url(#arrowGrayW)" />
        <rect x="30" y="238" width="105" height="50" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
        {/* Another whale icon */}
        <ellipse cx="75" cy="252" rx="10" ry="6" fill="#94a3b8" opacity="0.6" />
        <text x="82" y="266" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#64748b">Another Whale</text>
        <text x="82" y="280" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#94a3b8">⚖️ NEUTRAL</text>

        {/* Arrow 4: Whale → DeFi Protocol (bottom-right) — MODERATELY BULLISH */}
        <line x1="290" y1="190" x2="400" y2="250" stroke="#14b8a6" strokeWidth="2.5" markerEnd="url(#arrowTealW)" />
        <rect x="380" y="238" width="105" height="50" rx="8" fill="#f0fdfa" stroke="#5eead4" strokeWidth="1.5" />
        {/* DeFi icon (hexagon) */}
        <polygon points="432,246 440,250 440,258 432,262 424,258 424,250" fill="none" stroke="#14b8a6" strokeWidth="1" />
        <text x="432" y="276" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0d9488">DeFi Protocol</text>
        <text x="432" y="288" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#14b8a6">🐂 MOD. BULLISH</text>

        {/* Movement type labels on arrows */}
        <text x="148" y="88" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#ef4444" transform="rotate(-30, 148, 88)">
          Preparing to sell
        </text>
        <text x="352" y="88" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#22c55e" transform="rotate(30, 352, 88)">
          Holding long-term
        </text>
        <text x="148" y="228" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#94a3b8" transform="rotate(30, 148, 228)">
          OTC / Internal
        </text>
        <text x="352" y="228" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#14b8a6" transform="rotate(-30, 352, 228)">
          Staking / Lending
        </text>
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 1: What Is On-Chain Analysis and Why Does It Matter?
   ═══════════════════════════════════════════════════════════════════ */

function TopicOnChainAnalysis() {
  return (
    <TopicCard
      id="d6-on-chain-basics"
      title="What Is On-Chain Analysis and Why Does It Matter?"
      icon={<Link />}
      variant="default"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        <strong>On-chain analysis</strong> is the study of data permanently recorded on the blockchain.
        Every transaction, wallet balance, and smart contract interaction is <strong>public, permanent,
        and verifiable</strong>.
      </p>

      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        This is unique to crypto — there is no equivalent in stock markets. In traditional finance,
        you can&apos;t see when a large holder moves shares to a brokerage. In crypto, you can.
      </p>

      {/* Core insight box */}
      <div className="mb-6 rounded-lg border-l-4 border-l-violet-500 bg-violet-50 p-4">
        <div className="flex items-start gap-3">
          <Gauge className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600" />
          <div>
            <p className="text-sm font-bold text-violet-800 sm:text-base">Core Insight</p>
            <p className="mt-1 text-sm text-violet-900 sm:text-base">
              On-chain data shows <strong>intentions before execution</strong>. When a whale moves
              5,000 BTC to an exchange, they haven&apos;t sold yet — but they&apos;re{' '}
              <em>preparing</em> to sell. This gives you a window of hours or days to react.
            </p>
          </div>
        </div>
      </div>

      {/* Limitation box */}
      <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50/50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800 sm:text-base">Limitation</p>
            <p className="mt-1 text-sm text-amber-900 sm:text-base">
              On-chain analysis is most useful for <strong>BTC and ETH</strong>. Smaller altcoins
              have less transparent on-chain data, and many tokens live on centralized exchanges
              where movement isn&apos;t visible on-chain.
            </p>
          </div>
        </div>
      </div>

      {/* Transparency Spectrum Visual */}
      <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
        Visual: Transparency Spectrum
      </h4>
      <TransparencySpectrum />
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Crypto markets offer varying levels of on-chain transparency
      </p>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 2: Exchange Inflows & Outflows — The Smart Money Compass
   ═══════════════════════════════════════════════════════════════════ */

function TopicExchangeFlows() {
  return (
    <TopicCard
      id="d6-exchange-flows"
      title="Exchange Inflows & Outflows — The Smart Money Compass"
      icon={<ArrowRightLeft />}
      variant="highlight"
    >
      {/* Inflow/Outflow definitions */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        {/* INFLOW */}
        <div className="rounded-xl border-2 border-red-200 bg-red-50/40 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <h4 className="text-sm font-bold text-red-800 sm:text-base">EXCHANGE INFLOW</h4>
          </div>
          <p className="text-sm text-slate-700 sm:text-base">
            Crypto <strong>FROM</strong> personal wallets <strong>TO</strong> exchange
          </p>
          <p className="mt-2 text-sm font-bold text-red-600 sm:text-base">
            = Generally BEARISH (preparing to sell)
          </p>
        </div>

        {/* OUTFLOW */}
        <div className="rounded-xl border-2 border-green-200 bg-green-50/40 p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-sm font-bold text-green-800 sm:text-base">EXCHANGE OUTFLOW</h4>
          </div>
          <p className="text-sm text-slate-700 sm:text-base">
            Crypto <strong>FROM</strong> exchange <strong>TO</strong> personal wallets
          </p>
          <p className="mt-2 text-sm font-bold text-green-600 sm:text-base">
            = Generally BULLISH (holding long-term)
          </p>
        </div>
      </div>

      {/* How to read the data */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          How to Read the Data
        </h4>
        <ul className="space-y-2 text-sm text-slate-600 sm:text-base">
          <li className="flex items-start gap-2">
            <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-violet-500" />
            <span>Use <strong>CryptoQuant</strong> (free tier) or <strong>Glassnode</strong> (free tier)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-violet-500" />
            <span>Look for <strong>spikes</strong> that deviate from the average</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-violet-500" />
            <span>Single large inflow spike (10x daily average) = <strong className="text-red-600">warning sign</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-violet-500" />
            <span>Sustained outflow over multiple days = <strong className="text-green-600">accumulation phase</strong></span>
          </li>
        </ul>
      </div>

      {/* Real-world patterns */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Real-World Patterns
        </h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/30 p-3">
            <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">1</span>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                March 2020: Large BTC inflows preceded COVID crash
              </p>
              <p className="text-xs text-slate-500">Whales moved coins to exchanges before the market collapsed</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-green-100 bg-green-50/30 p-3">
            <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">2</span>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                Late 2020: Sustained outflows preceded bull run to $64,000
              </p>
              <p className="text-xs text-slate-500">Coins left exchanges as investors held for the long term</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/30 p-3">
            <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">3</span>
            <div>
              <p className="text-sm font-semibold text-slate-800">
                2022: Large inflows preceded FTX-related dumps
              </p>
              <p className="text-xs text-slate-500">Exchange-specific inflows signaled distress before the collapse</p>
            </div>
          </div>
        </div>
      </div>

      {/* Exchange Flow Diagram Visual */}
      <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
        Visual: Exchange Flow Diagram
      </h4>
      <ExchangeFlowDiagram />

      {/* MEXC/Binance specific note */}
      <div className="mb-6 rounded-lg border border-violet-200 bg-violet-50/40 p-4">
        <div className="flex items-start gap-3">
          <Building2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600" />
          <div>
            <p className="text-sm font-bold text-violet-800 sm:text-base">
              MEXC and Binance Specific Data
            </p>
            <p className="mt-1 text-sm text-violet-900 sm:text-base">
              CryptoQuant provides exchange-specific flow data. Monitor MEXC inflows/outflows
              separately — a spike on one exchange may not reflect the broader market.
            </p>
          </div>
        </div>
      </div>

      {/* The nuance */}
      <div className="mb-6 rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800 sm:text-base">The Nuance</p>
            <p className="mt-1 text-sm text-amber-900 sm:text-base">
              Not all inflows are bearish. Some are for <strong>staking, DeFi, or earning products</strong>.
              Context matters. Look for unusually large inflows relative to the 30-day average — that&apos;s
              when the signal becomes meaningful.
            </p>
          </div>
        </div>
      </div>

      {/* Analogy */}
      <AnalogyBox title="The Aquarium Glass">
        Imagine the stock market is an aquarium with frosted glass — you can see the fish (price) but
        not the water currents (money flow). On-chain analysis makes the glass transparent. You can
        now see the currents that move the fish. When the current flows toward the exchange, the fish
        (price) is about to be affected.
      </AnalogyBox>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 3: MVRV, NUPL & SOPR — The Three Pillars
   ═══════════════════════════════════════════════════════════════════ */

function TopicOnChainValuation() {
  return (
    <TopicCard
      id="d6-mvrv-nupl-sopr"
      title="MVRV, NUPL & SOPR — The Three Pillars of On-Chain Valuation"
      icon={<BarChart3 />}
      variant="default"
    >
      {/* ─── MVRV Section ─── */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">1</div>
          <h4 className="text-base font-bold text-slate-900 sm:text-lg">MVRV — Market Value to Realized Value</h4>
        </div>

        <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-sm text-slate-700 sm:text-base">
            <strong>Formula:</strong> MVRV = Market Cap ÷ Realized Cap
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Market Cap = Current price × Total supply &nbsp;|&nbsp; Realized Cap = Sum of each coin&apos;s value at the price when it last moved on-chain
          </p>
        </div>

        {/* MVRV zones */}
        <div className="mb-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border-2 border-green-200 bg-green-50/50 p-3 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-green-600">Buy Zone</p>
            <p className="mt-1 text-lg font-bold text-green-800">MVRV &lt; 1.0</p>
            <p className="mt-1 text-xs text-green-700">Undervalued — holders at a loss</p>
          </div>
          <div className="rounded-lg border-2 border-amber-200 bg-amber-50/50 p-3 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-600">Normal Range</p>
            <p className="mt-1 text-lg font-bold text-amber-800">MVRV 1.0–3.5</p>
            <p className="mt-1 text-xs text-amber-700">Fair valuation zone</p>
          </div>
          <div className="rounded-lg border-2 border-red-200 bg-red-50/50 p-3 text-center">
            <p className="text-xs font-bold uppercase tracking-wide text-red-600">Sell Zone</p>
            <p className="mt-1 text-lg font-bold text-red-800">MVRV &gt; 3.5</p>
            <p className="mt-1 text-xs text-red-700">Overvalued — massive profit incentive to sell</p>
          </div>
        </div>

        <p className="mb-4 text-xs text-slate-500">
          Find on <strong>Glassnode free tier</strong>
        </p>

        {/* MVRV Gauge Visual */}
        <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: MVRV Gauge
        </h4>
        <MVRVGauge />
      </div>

      {/* ─── NUPL Section ─── */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">2</div>
          <h4 className="text-base font-bold text-slate-900 sm:text-lg">NUPL — Net Unrealized Profit/Loss</h4>
        </div>

        <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-sm text-slate-700 sm:text-base">
            <strong>Formula:</strong> NUPL = (Market Cap − Realized Cap) ÷ Market Cap
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Tells the percentage of total market in profit vs loss
          </p>
        </div>

        {/* NUPL comparison table */}
        <div className="mb-4">
          <ComparisonTable
            headers={['NUPL Range', 'Phase', 'Signal']}
            rows={[
              ['> 0.75', 'Euphoria', 'SELL — market overheated'],
              ['0.50–0.75', 'Optimism/Belief', 'Caution — still bullish but watch'],
              ['0.25–0.50', 'Belief/Hope', 'Normal bull market range'],
              ['0.00–0.25', 'Hope/Capitulation', 'Accumulate — smart money buying'],
              ['< 0.00', 'Capitulation', 'STRONG BUY — maximum fear'],
            ]}
            highlightColumn={2}
          />
        </div>

        {/* NUPL key insight */}
        <div className="rounded-lg border-l-4 border-l-violet-500 bg-violet-50 p-4">
          <p className="text-sm font-bold text-violet-800 sm:text-base">Key Insight</p>
          <p className="mt-1 text-sm text-violet-900 sm:text-base">
            NUPL is like a macro gas gauge. Above 0.75 = tank almost empty (bullish fuel running out).
            Below 0 = tank overflowing with fear, but also opportunity.
          </p>
        </div>
      </div>

      {/* ─── SOPR Section ─── */}
      <div className="mb-4">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">3</div>
          <h4 className="text-base font-bold text-slate-900 sm:text-lg">SOPR — Spent Output Profit Ratio</h4>
        </div>

        <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
          <p className="text-sm text-slate-700 sm:text-base">
            <strong>Formula:</strong> SOPR = Total output value ÷ Total input value for the day
          </p>
        </div>

        {/* SOPR readings */}
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50/50 p-4">
            <p className="text-sm font-bold text-green-800 sm:text-base">SOPR &gt; 1.0</p>
            <p className="mt-1 text-sm text-green-900 sm:text-base">
              Coins moved at <strong>profit</strong> — normal bull market behavior
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50/50 p-4">
            <p className="text-sm font-bold text-red-800 sm:text-base">SOPR &lt; 1.0</p>
            <p className="mt-1 text-sm text-red-900 sm:text-base">
              Coins moved at <strong>loss</strong> — capitulation or near bottoms
            </p>
          </div>
        </div>

        {/* Advanced SOPR readings */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
            Advanced SOPR Readings
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-amber-100 bg-amber-50/30 p-3">
              <span className="flex-shrink-0 text-amber-500">⚡</span>
              <p className="text-sm text-slate-700 sm:text-base">
                <strong>SOPR spike above 1.1</strong> = Too many taking profits — potential correction
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-green-100 bg-green-50/30 p-3">
              <span className="flex-shrink-0 text-green-500">🔄</span>
              <p className="text-sm text-slate-700 sm:text-base">
                <strong>SOPR dropping below 1 then bouncing back above 1</strong> = Bullish signal
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50/30 p-3">
              <span className="flex-shrink-0 text-red-500">📉</span>
              <p className="text-sm text-slate-700 sm:text-base">
                <strong>Sustained SOPR below 1</strong> = Bearish — ongoing capitulation
              </p>
            </div>
          </div>
        </div>

        <p className="mb-4 text-xs text-slate-500">
          Find on <strong>Glassnode</strong> and <strong>CryptoQuant</strong>
        </p>

        {/* SOPR Chart Visual */}
        <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: SOPR Chart Illustration
        </h4>
        <SOPRChartIllustration />
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 4: Whale Watching & Miner Behavior — Following the Big Players
   ═══════════════════════════════════════════════════════════════════ */

function TopicWhalesAndMiners() {
  return (
    <TopicCard
      id="d6-whales-miners"
      title="Whale Watching & Miner Behavior — Following the Big Players"
      icon={<Eye />}
      variant="default"
    >
      {/* ─── Whale Watching ─── */}
      <div className="mb-8">
        <h4 className="mb-3 text-base font-bold text-slate-900 sm:text-lg">Whale Watching</h4>

        <div className="mb-4 rounded-lg border border-violet-200 bg-violet-50/40 p-4">
          <p className="text-sm text-slate-700 sm:text-base">
            A <strong>whale</strong> = entity holding <strong>1,000+ BTC</strong> ($65M+). Their moves
            can shift markets. Tracking them gives you early warning of major price movements.
          </p>
        </div>

        {/* Tracking tools */}
        <div className="mb-4">
          <h5 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-700">Track via:</h5>
          <ul className="space-y-2 text-sm text-slate-600 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-violet-500" />
              <span><strong>Whale Alert</strong> (@whale_alert on Twitter/X)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-violet-500" />
              <span><strong>CryptoQuant Whale Metrics</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-violet-500" />
              <span><strong>Blockchain Explorers</strong></span>
            </li>
          </ul>
        </div>

        {/* What movements tell you */}
        <div className="mb-6">
          <h5 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700">
            What Whale Movements Tell You
          </h5>
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-l-red-400 bg-red-50/30 p-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Whale → Exchange = <span className="text-red-600 font-bold">Preparing to sell (BEARISH)</span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-l-green-400 bg-green-50/30 p-3">
              <ArrowLeft className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Exchange → Whale wallet = <span className="text-green-600 font-bold">Cold storage holding (BULLISH)</span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-l-slate-300 bg-slate-50/30 p-3">
              <ArrowRightLeft className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Whale → Whale = <span className="text-slate-500 font-bold">Internal transfer or OTC (less informative)</span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-l-teal-400 bg-teal-50/30 p-3">
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-500" />
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Whale → DeFi protocol = <span className="text-teal-600 font-bold">Staking/lending (moderately bullish)</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The trap */}
        <div className="mb-6 rounded-lg border-2 border-amber-200 bg-amber-50/50 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <div>
              <p className="text-sm font-bold text-amber-800 sm:text-base">The Trap</p>
              <p className="mt-1 text-sm text-amber-900 sm:text-base">
                Don&apos;t overreact to every alert. Look for <strong>patterns over time</strong>.
                A single whale moving coins could be internal treasury management, not a sell signal.
                Three whales moving to exchanges in the same week? That&apos;s a pattern worth heeding.
              </p>
            </div>
          </div>
        </div>

        {/* Whale Transaction Flow Diagram */}
        <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Visual: Whale Transaction Flow Diagram
        </h4>
        <WhaleTransactionFlowDiagram />
      </div>

      {/* ─── Miner Behavior ─── */}
      <div>
        <h4 className="mb-3 text-base font-bold text-slate-900 sm:text-lg">Miner Behavior</h4>

        <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          Miners are the most consistent sellers in crypto — they <strong>must</strong> sell BTC to pay
          operational costs (electricity, hardware, payroll). Understanding miner behavior gives you
          insight into the baseline selling pressure in the market.
        </p>

        {/* Key metrics grid */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">$</span>
              <h5 className="text-sm font-bold text-slate-800">Miner Revenue</h5>
            </div>
            <p className="text-sm text-slate-600">
              When revenue drops, miners may sell more aggressively to cover costs. Lower revenue = increased sell pressure.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">🏦</span>
              <h5 className="text-sm font-bold text-slate-800">Miner Reserve</h5>
            </div>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-green-600">Increasing</span> = holding (bullish) &nbsp;|&nbsp;{' '}
              <span className="font-semibold text-red-600">Decreasing</span> = selling (bearish)
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">⛏️</span>
              <h5 className="text-sm font-bold text-slate-800">Hash Rate</h5>
            </div>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-green-600">Increasing</span> = confidence (bullish) &nbsp;|&nbsp;{' '}
              <span className="font-semibold text-red-600">Decreasing</span> = stress (bearish)
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">⚙️</span>
              <h5 className="text-sm font-bold text-slate-800">Difficulty Adjustment</h5>
            </div>
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-green-600">Rising</span> = more miners = healthy &nbsp;|&nbsp;{' '}
              <span className="font-semibold text-red-600">Falling</span> = miners leaving = stress
            </p>
          </div>
        </div>

        {/* MPI */}
        <div className="mb-6 rounded-lg border border-violet-200 bg-violet-50/40 p-4">
          <div className="flex items-start gap-3">
            <BarChart3 className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600" />
            <div>
              <p className="text-sm font-bold text-violet-800 sm:text-base">
                Miner Position Index (MPI)
              </p>
              <p className="mt-1 text-sm text-violet-900 sm:text-base">
                <strong>High MPI</strong> = miners selling &nbsp;|&nbsp;{' '}
                <strong>Low MPI</strong> = miners holding. This metric quantifies miner selling
                behavior relative to historical norms.
              </p>
            </div>
          </div>
        </div>

        {/* Key Takeaway */}
        <KeyTakeaway>
          Miners are the &quot;forced sellers&quot; of Bitcoin. They create consistent selling pressure.
          When this pressure increases, supply rises. When it decreases, supply tightens and price
          tends to rise.
        </KeyTakeaway>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT: Day 6 Afternoon Block
   ═══════════════════════════════════════════════════════════════════ */

export function Day6AfternoonBlock() {
  return (
    <section id="d6-afternoon" aria-labelledby="d6-afternoon-heading">
      <SectionDivider
        icon={<Clock />}
        title="AFTERNOON BLOCK — HOURS 3–5: ON-CHAIN ANALYSIS DEEP DIVE"
      />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicOnChainAnalysis />
        <TopicExchangeFlows />
        <TopicOnChainValuation />
        <TopicWhalesAndMiners />
      </div>
    </section>
  )
}
