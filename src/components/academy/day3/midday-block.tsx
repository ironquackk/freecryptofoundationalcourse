'use client'

import React from 'react'
import {
  Gauge,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Activity,
  Eye,
  CheckCircle2,
  XCircle,
  Zap,
  Target,
  FlaskConical,
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  Search,
  BarChart3,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { ChecklistItem } from '@/components/academy/checklist-item'

/* ═══════════════════════════════════════════════════════════════════════
   SVG: RSI Panel Below Price Chart (Topic 1)
   ═══════════════════════════════════════════════════════════════════════ */

function RSIOverviewSVG() {
  return (
    <svg viewBox="0 0 400 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="400" height="240" fill="#f8fafc" rx="8" />

      {/* Price Chart Area */}
      <text x="30" y="22" fontSize="10" fill="#64748b" fontWeight="bold">PRICE</text>
      <rect x="30" y="28" width="340" height="80" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" rx="4" />

      {/* Price grid lines */}
      <line x1="30" y1="48" x2="370" y2="48" stroke="#f1f5f9" strokeWidth="0.5" />
      <line x1="30" y1="68" x2="370" y2="68" stroke="#f1f5f9" strokeWidth="0.5" />
      <line x1="30" y1="88" x2="370" y2="88" stroke="#f1f5f9" strokeWidth="0.5" />

      {/* Price line - uptrend with pullbacks */}
      <polyline
        points="40,95 60,80 75,88 100,65 115,72 140,50 155,58 180,38 195,48 220,30 240,42 260,25 280,35 300,18 320,28 340,15 360,22"
        fill="none"
        stroke="#475569"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* RSI Panel Area */}
      <text x="30" y="132" fontSize="10" fill="#64748b" fontWeight="bold">RSI (14)</text>
      <rect x="30" y="138" width="340" height="85" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" rx="4" />

      {/* RSI scale 0-100 */}
      <text x="22" y="145" fontSize="7" fill="#94a3b8">100</text>
      <text x="22" y="170" fontSize="7" fill="#94a3b8">70</text>
      <text x="22" y="190" fontSize="7" fill="#94a3b8">50</text>
      <text x="22" y="210" fontSize="7" fill="#94a3b8">30</text>
      <text x="22" y="227" fontSize="7" fill="#94a3b8">0</text>

      {/* Overbought zone (above 70) */}
      <rect x="30" y="138" width="340" height="28" fill="#fef2f2" opacity="0.6" rx="2" />
      <line x1="30" y1="166" x2="370" y2="166" stroke="#ef4444" strokeWidth="1" strokeDasharray="6 3" />
      <text x="372" y="169" fontSize="7" fill="#ef4444" fontWeight="bold">70</text>

      {/* Oversold zone (below 30) */}
      <rect x="30" y="208" width="340" height="15" fill="#f0fdf4" opacity="0.6" rx="2" />
      <line x1="30" y1="208" x2="370" y2="208" stroke="#22c55e" strokeWidth="1" strokeDasharray="6 3" />
      <text x="372" y="211" fontSize="7" fill="#22c55e" fontWeight="bold">30</text>

      {/* 50 center line */}
      <line x1="30" y1="187" x2="370" y2="187" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="4 2" />
      <text x="372" y="190" fontSize="7" fill="#94a3b8">50</text>

      {/* RSI line oscillating */}
      <polyline
        points="40,195 55,185 70,190 90,175 105,180 125,168 140,172 160,162 175,158 190,165 210,178 225,195 240,210 255,215 270,205 285,190 300,175 315,168 330,172 345,165 360,158"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Highlight: RSI entering overbought zone */}
      <circle cx="175" cy="158" r="3" fill="#ef4444" />
      <text x="175" y="152" textAnchor="middle" fontSize="7" fill="#ef4444" fontWeight="bold">OB</text>

      {/* Highlight: RSI entering oversold zone */}
      <circle cx="240" cy="210" r="3" fill="#22c55e" />
      <text x="240" y="222" textAnchor="middle" fontSize="7" fill="#22c55e" fontWeight="bold">OS</text>

      {/* Labels */}
      <rect x="120" y="140" width="80" height="14" rx="3" fill="#fef2f2" stroke="#fca5a5" strokeWidth="0.5" />
      <text x="160" y="150" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">OVERBOUGHT</text>

      <rect x="120" y="212" width="70" height="14" rx="3" fill="#f0fdf4" stroke="#86efac" strokeWidth="0.5" />
      <text x="155" y="222" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">OVERSOLD</text>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SVG: RSI Mistake — Two Side-by-Side Charts (Topic 3)
   ═══════════════════════════════════════════════════════════════════════ */

function RSIMistakeSVG() {
  return (
    <svg viewBox="0 0 420 220" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* ── LEFT: Good Signal (Overbought at Resistance) ── */}
      <rect x="0" y="0" width="200" height="220" fill="#f0fdf4" rx="6" />

      {/* Title */}
      <text x="100" y="18" textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="bold">
        OVERBOUGHT AT RESISTANCE
      </text>
      <text x="100" y="28" textAnchor="middle" fontSize="7" fill="#16a34a">✓ Good Signal</text>

      {/* Price chart */}
      <rect x="15" y="35" width="170" height="80" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />
      {/* Resistance line */}
      <line x1="15" y1="52" x2="185" y2="52" stroke="#dc2626" strokeWidth="1" strokeDasharray="5 3" />
      <text x="188" y="55" fontSize="6" fill="#dc2626" fontWeight="bold">R</text>

      {/* Price approaching resistance and getting rejected */}
      <polyline
        points="20,100 40,80 60,65 80,55 100,50 110,52 125,58 140,68 160,85 175,98"
        fill="none"
        stroke="#475569"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Rejection arrow */}
      <circle cx="100" cy="50" r="3" fill="#16a34a" />
      <line x1="100" y1="47" x2="100" y2="40" stroke="#16a34a" strokeWidth="1.5" />
      <polygon points="96,42 100,36 104,42" fill="#16a34a" />

      {/* RSI panel */}
      <rect x="15" y="125" width="170" height="70" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />
      <line x1="15" y1="145" x2="185" y2="145" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="4 2" />
      <text x="188" y="148" fontSize="5" fill="#ef4444">70</text>
      <line x1="15" y1="170" x2="185" y2="170" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="4 2" />
      <text x="188" y="173" fontSize="5" fill="#22c55e">30</text>

      {/* RSI line going overbought then falling */}
      <polyline
        points="20,180 40,170 60,155 80,140 100,135 110,138 125,150 140,165 160,175 175,180"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="135" r="3" fill="#ef4444" />

      {/* Result label */}
      <rect x="50" y="200" width="100" height="16" rx="4" fill="#16a34a" />
      <text x="100" y="212" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">PULLBACK ✓</text>

      {/* ── RIGHT: Bad Signal (Overbought in Uptrend) ── */}
      <rect x="220" y="0" width="200" height="220" fill="#fef2f2" rx="6" />

      {/* Title */}
      <text x="320" y="18" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="bold">
        OVERBOUGHT IN UPTREND
      </text>
      <text x="320" y="28" textAnchor="middle" fontSize="7" fill="#dc2626">✗ False Signal</text>

      {/* Price chart */}
      <rect x="235" y="35" width="170" height="80" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />
      {/* Uptrend line */}
      <line x1="240" y1="105" x2="400" y2="45" stroke="#16a34a" strokeWidth="1" strokeDasharray="5 3" opacity="0.5" />

      {/* Price continuing uptrend despite RSI overbought */}
      <polyline
        points="240,95 260,82 280,70 300,60 310,55 325,50 340,45 355,40 370,35 385,30 395,28"
        fill="none"
        stroke="#475569"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* "Still going up" arrow */}
      <line x1="380" y1="32" x2="390" y2="25" stroke="#dc2626" strokeWidth="1.5" />
      <polygon points="387,22 393,22 390,18" fill="#dc2626" />

      {/* RSI panel */}
      <rect x="235" y="125" width="170" height="70" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />
      <line x1="235" y1="145" x2="405" y2="145" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="4 2" />
      <text x="408" y="148" fontSize="5" fill="#ef4444">70</text>
      <line x1="235" y1="170" x2="405" y2="170" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="4 2" />
      <text x="408" y="173" fontSize="5" fill="#22c55e">30</text>

      {/* RSI staying overbought for extended time */}
      <polyline
        points="240,175 255,165 270,148 290,138 310,135 325,132 340,130 355,133 370,136 385,140 395,138"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Overbought zone highlight */}
      <rect x="285" y="125" width="110" height="20" fill="#fef2f2" opacity="0.5" rx="2" />

      {/* Result label */}
      <rect x="270" y="200" width="100" height="16" rx="4" fill="#dc2626" />
      <text x="320" y="212" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">KEPT RISING ✗</text>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SVG: RSI Divergence — Bullish & Bearish (Topic 4)
   ═══════════════════════════════════════════════════════════════════════ */

function RSIDivergenceSVG() {
  return (
    <svg viewBox="0 0 420 250" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* ── LEFT: BULLISH DIVERGENCE ── */}
      <rect x="0" y="0" width="200" height="250" fill="#f0fdf4" rx="6" />

      <text x="100" y="18" textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="bold">
        BULLISH DIVERGENCE
      </text>
      <text x="100" y="28" textAnchor="middle" fontSize="7" fill="#16a34a">Price Lower Low + RSI Higher Low</text>

      {/* Price chart */}
      <rect x="15" y="35" width="170" height="85" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />

      {/* Price making lower low */}
      <polyline
        points="20,55 40,50 55,72 75,65 90,90 105,80 125,98 140,88 165,78 175,82"
        fill="none"
        stroke="#475569"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* First low */}
      <circle cx="90" cy="90" r="3" fill="#dc2626" />
      <text x="90" y="104" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">LL1</text>
      {/* Second lower low */}
      <circle cx="125" cy="98" r="3" fill="#dc2626" />
      <text x="125" y="112" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">LL2 ↓</text>

      {/* Arrow showing price going down */}
      <line x1="92" y1="92" x2="123" y2="96" stroke="#dc2626" strokeWidth="1" markerEnd="url(#arrowRed2)" />

      {/* RSI panel */}
      <rect x="15" y="130" width="170" height="75" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />
      <line x1="15" y1="148" x2="185" y2="148" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="4 2" />
      <text x="188" y="151" fontSize="5" fill="#ef4444">70</text>
      <line x1="15" y1="175" x2="185" y2="175" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="4 2" />
      <text x="188" y="178" fontSize="5" fill="#22c55e">30</text>

      {/* RSI making higher low */}
      <polyline
        points="20,160 40,155 55,178 75,170 90,188 105,178 125,185 140,172 165,165 175,168"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* First RSI low */}
      <circle cx="90" cy="188" r="3" fill="#16a34a" />
      <text x="90" y="200" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">HL1</text>
      {/* Second RSI higher low */}
      <circle cx="125" cy="185" r="3" fill="#16a34a" />
      <text x="125" y="200" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">HL2 ↑</text>

      {/* Arrow showing RSI going UP (divergence) */}
      <line x1="127" y1="183" x2="92" y2="186" stroke="#16a34a" strokeWidth="1" markerEnd="url(#arrowGreen2)" />

      {/* Result */}
      <rect x="35" y="212" width="130" height="20" rx="4" fill="#16a34a" />
      <text x="100" y="226" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">
        🟢 SELLING MOMENTUM WEAKENING
      </text>

      {/* Divergence arrows in middle */}
      <line x1="100" y1="118" x2="100" y2="128" stroke="#16a34a" strokeWidth="1.5" />
      <polygon points="96,128 104,128 100,133" fill="#16a34a" />

      {/* ── RIGHT: BEARISH DIVERGENCE ── */}
      <rect x="220" y="0" width="200" height="250" fill="#fef2f2" rx="6" />

      <text x="320" y="18" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="bold">
        BEARISH DIVERGENCE
      </text>
      <text x="320" y="28" textAnchor="middle" fontSize="7" fill="#dc2626">Price Higher High + RSI Lower High</text>

      {/* Price chart */}
      <rect x="235" y="35" width="170" height="85" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />

      {/* Price making higher high */}
      <polyline
        points="240,90 260,82 275,72 295,65 310,58 325,50 340,42 360,38 375,48 395,52"
        fill="none"
        stroke="#475569"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* First high */}
      <circle cx="310" cy="58" r="3" fill="#dc2626" />
      <text x="310" y="52" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">HH1</text>
      {/* Second higher high */}
      <circle cx="360" cy="38" r="3" fill="#dc2626" />
      <text x="360" y="32" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">HH2 ↑</text>

      {/* Arrow showing price going up */}
      <line x1="312" y1="56" x2="358" y2="40" stroke="#dc2626" strokeWidth="1" markerEnd="url(#arrowRed2)" />

      {/* RSI panel */}
      <rect x="235" y="130" width="170" height="75" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />
      <line x1="235" y1="148" x2="405" y2="148" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="4 2" />
      <text x="408" y="151" fontSize="5" fill="#ef4444">70</text>
      <line x1="235" y1="175" x2="405" y2="175" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="4 2" />
      <text x="408" y="178" fontSize="5" fill="#22c55e">30</text>

      {/* RSI making lower high */}
      <polyline
        points="240,170 260,162 275,150 295,142 310,135 325,140 340,148 360,155 375,160 395,165"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* First RSI high */}
      <circle cx="310" cy="135" r="3" fill="#dc2626" />
      <text x="310" y="130" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">LH1</text>
      {/* Second RSI lower high */}
      <circle cx="360" cy="155" r="3" fill="#dc2626" />
      <text x="360" y="150" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">LH2 ↓</text>

      {/* Arrow showing RSI going DOWN (divergence) */}
      <line x1="358" y1="153" x2="312" y2="137" stroke="#dc2626" strokeWidth="1" markerEnd="url(#arrowRed2)" />

      {/* Divergence arrows in middle */}
      <line x1="320" y1="118" x2="320" y2="128" stroke="#dc2626" strokeWidth="1.5" />
      <polygon points="316,128 324,128 320,133" fill="#dc2626" />

      {/* Result */}
      <rect x="255" y="212" width="130" height="20" rx="4" fill="#dc2626" />
      <text x="320" y="226" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">
        🔴 BUYING MOMENTUM WEAKENING
      </text>

      {/* Arrow markers */}
      <defs>
        <marker id="arrowGreen2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#16a34a" />
        </marker>
        <marker id="arrowRed2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#dc2626" />
        </marker>
      </defs>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SVG: RSI Hidden Divergence (Topic 6)
   ═══════════════════════════════════════════════════════════════════════ */

function RSIHiddenDivergenceSVG() {
  return (
    <svg viewBox="0 0 420 250" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* ── LEFT: BULLISH HIDDEN DIVERGENCE ── */}
      <rect x="0" y="0" width="200" height="250" fill="#f0fdf4" rx="6" />

      <text x="100" y="18" textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="bold">
        BULLISH HIDDEN DIVERGENCE
      </text>
      <text x="100" y="28" textAnchor="middle" fontSize="7" fill="#16a34a">Price Higher Low + RSI Lower Low</text>

      {/* Price chart - uptrend */}
      <rect x="15" y="35" width="170" height="85" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />

      <polyline
        points="20,105 40,70 55,80 75,55 90,68 110,40 125,52 145,28 160,38 175,20"
        fill="none"
        stroke="#475569"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Price HL1 */}
      <circle cx="55" cy="80" r="3" fill="#16a34a" />
      <text x="55" y="92" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">HL1</text>
      {/* Price HL2 (higher) */}
      <circle cx="90" cy="68" r="3" fill="#16a34a" />
      <text x="90" y="80" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">HL2 ↑</text>

      {/* Arrow: price low going up */}
      <line x1="57" y1="78" x2="88" y2="70" stroke="#16a34a" strokeWidth="1" markerEnd="url(#arrowGreen3)" />

      {/* RSI panel */}
      <rect x="15" y="130" width="170" height="75" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />
      <line x1="15" y1="148" x2="185" y2="148" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="4 2" />
      <line x1="15" y1="175" x2="185" y2="175" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="4 2" />

      <polyline
        points="20,165 40,150 55,160 75,148 90,172 110,155 125,148 145,142 160,150 175,138"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* RSI LL1 */}
      <circle cx="55" cy="160" r="3" fill="#16a34a" />
      <text x="55" y="194" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">LL1</text>
      {/* RSI LL2 (lower) */}
      <circle cx="90" cy="172" r="3" fill="#16a34a" />
      <text x="90" y="194" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">LL2 ↓</text>

      {/* Arrow: RSI low going down */}
      <line x1="57" y1="162" x2="88" y2="170" stroke="#16a34a" strokeWidth="1" markerEnd="url(#arrowGreen3)" />

      {/* Result */}
      <rect x="35" y="212" width="130" height="20" rx="4" fill="#16a34a" />
      <text x="100" y="226" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">
        🟢 UPTREND CONTINUES
      </text>

      {/* ── RIGHT: BEARISH HIDDEN DIVERGENCE ── */}
      <rect x="220" y="0" width="200" height="250" fill="#fef2f2" rx="6" />

      <text x="320" y="18" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="bold">
        BEARISH HIDDEN DIVERGENCE
      </text>
      <text x="320" y="28" textAnchor="middle" fontSize="7" fill="#dc2626">Price Lower High + RSI Higher High</text>

      {/* Price chart - downtrend */}
      <rect x="235" y="35" width="170" height="85" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />

      <polyline
        points="240,30 260,55 275,45 295,68 310,60 330,85 345,75 365,100 380,92 395,115"
        fill="none"
        stroke="#475569"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Price LH1 */}
      <circle cx="260" cy="55" r="3" fill="#dc2626" />
      <text x="260" y="48" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">LH1</text>
      {/* Price LH2 (lower) */}
      <circle cx="295" cy="68" r="3" fill="#dc2626" />
      <text x="295" y="62" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">LH2 ↓</text>

      {/* Arrow: price high going down */}
      <line x1="262" y1="57" x2="293" y2="66" stroke="#dc2626" strokeWidth="1" markerEnd="url(#arrowRed3)" />

      {/* RSI panel */}
      <rect x="235" y="130" width="170" height="75" fill="#ffffff" stroke="#d1d5db" strokeWidth="0.5" rx="3" />
      <line x1="235" y1="148" x2="405" y2="148" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="4 2" />
      <line x1="235" y1="175" x2="405" y2="175" stroke="#22c55e" strokeWidth="0.5" strokeDasharray="4 2" />

      <polyline
        points="240,172 260,165 275,170 295,155 310,162 330,148 345,155 365,145 380,150 395,140"
        fill="none"
        stroke="#8b5cf6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* RSI HH1 */}
      <circle cx="260" cy="165" r="3" fill="#dc2626" />
      <text x="260" y="160" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">HH1</text>
      {/* RSI HH2 (higher) */}
      <circle cx="295" cy="155" r="3" fill="#dc2626" />
      <text x="295" y="150" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">HH2 ↑</text>

      {/* Arrow: RSI high going up */}
      <line x1="262" y1="163" x2="293" y2="157" stroke="#dc2626" strokeWidth="1" markerEnd="url(#arrowRed3)" />

      {/* Result */}
      <rect x="255" y="212" width="130" height="20" rx="4" fill="#dc2626" />
      <text x="320" y="226" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">
        🔴 DOWNTREND CONTINUES
      </text>

      {/* Arrow markers */}
      <defs>
        <marker id="arrowGreen3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#16a34a" />
        </marker>
        <marker id="arrowRed3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#dc2626" />
        </marker>
      </defs>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 1: What Is RSI? — Relative Strength Index
   ═══════════════════════════════════════════════════════════════════════ */

function TopicWhatIsRSI() {
  return (
    <TopicCard
      id="d3-what-is-rsi"
      title="What Is RSI? — Relative Strength Index"
      icon={<Gauge />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        <span className="font-bold text-slate-900">RSI (Relative Strength Index)</span> is a
        momentum indicator that measures the <span className="font-bold text-amber-700">speed and magnitude</span> of
        recent price changes. It evaluates whether an asset is{' '}
        <span className="font-semibold text-red-600">overbought</span> or{' '}
        <span className="font-semibold text-green-600">oversold</span>.
      </p>

      {/* Key facts */}
      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-4 text-center">
          <Activity className="mx-auto mb-2 h-6 w-6 text-amber-600" />
          <p className="text-xs font-bold uppercase tracking-wide text-amber-700">Created By</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">J. Welles Wilder Jr.</p>
          <p className="text-xs text-slate-500">1978</p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-purple-50/60 p-4 text-center">
          <Gauge className="mx-auto mb-2 h-6 w-6 text-purple-600" />
          <p className="text-xs font-bold uppercase tracking-wide text-purple-700">Scale</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">0 → 100</p>
          <p className="text-xs text-slate-500">Oscillator</p>
        </div>
        <div className="rounded-lg border border-teal-200 bg-teal-50/60 p-4 text-center">
          <BarChart3 className="mx-auto mb-2 h-6 w-6 text-teal-600" />
          <p className="text-xs font-bold uppercase tracking-wide text-teal-700">Default Period</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">14 candles</p>
          <p className="text-xs text-slate-500">Most common setting</p>
        </div>
      </div>

      {/* Critical distinction */}
      <div className="mb-5 rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800">Critical Distinction</p>
            <p className="mt-1 text-sm text-slate-700">
              RSI measures the <strong>strength of the momentum</strong> behind a price move —
              NOT the &ldquo;strength of the coin.&rdquo; A coin can have a low RSI and still
              be in a strong downtrend. RSI tells you about the <em>pace</em> of the move,
              not the quality of the asset.
            </p>
          </div>
        </div>
      </div>

      {/* SVG: RSI panel */}
      <div className="mb-4 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          RSI Panel Below Price Chart — Oscillating 0–100
        </p>
        <RSIOverviewSVG />
      </div>

      <AnalogyBox title="RSI is Like a Speedometer">
        Imagine you&apos;re driving on a highway. The speedometer (RSI) tells you how fast
        you&apos;re going right now — not whether you&apos;re heading in the right direction.
        Going 120 mph (RSI above 70) doesn&apos;t mean you should slam the brakes — but it
        does mean you should be cautious. Going 20 mph (RSI below 30) doesn&apos;t mean
        you should floor it — but you might want to check if there&apos;s an opportunity
        to speed up.
      </AnalogyBox>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 2: RSI — The Basic Reading
   ═══════════════════════════════════════════════════════════════════════ */

function TopicRSIBasicReading() {
  const headers = ['RSI Reading', 'Meaning', 'Action']
  const rows = [
    [
      <span key="ob" className="font-semibold text-red-600">Above 70</span>,
      <span key="m1"><span className="font-semibold">OVERBOUGHT</span> {'\u2014'} Price risen too fast</span>,
      'Be cautious on longs. Don\'t auto-sell.',
    ],
    [
      <span key="os" className="font-semibold text-green-600">Below 30</span>,
      <span key="m2"><span className="font-semibold">OVERSOLD</span> {'\u2014'} Price fallen too fast</span>,
      'Be cautious on shorts. Don\'t auto-buy.',
    ],
    [
      <span key="ne" className="font-semibold text-amber-600">40{'\u2013'}60</span>,
      <span key="m3"><span className="font-semibold">NEUTRAL</span> {'\u2014'} No strong momentum</span>,
      'Wait for clearer signals.',
    ],
    [
      <span key="r1"><span className="font-semibold text-green-600">RSI rising</span> + <span className="font-semibold text-green-600">Price rising</span></span>,
      <span key="m4" className="font-semibold">Confirmed bullish momentum</span>,
      <span key="a4" className="text-green-700">Supports long bias.</span>,
    ],
    [
      <span key="r2"><span className="font-semibold text-red-600">RSI falling</span> + <span className="font-semibold text-red-600">Price falling</span></span>,
      <span key="m5" className="font-semibold">Confirmed bearish momentum</span>,
      <span key="a5" className="text-red-700">Supports short bias.</span>,
    ],
    [
      <span key="r3"><span className="font-semibold text-amber-600">RSI flat</span> + <span className="font-semibold">Price moving</span></span>,
      <span key="m6" className="font-semibold">Momentum not confirming</span>,
      <span key="a6" className="text-amber-700">Be suspicious {'\u2014'} move may lack conviction.</span>,
    ],
  ]

  return (
    <TopicCard
      id="d3-rsi-basic-reading"
      title="RSI — The Basic Reading"
      icon={<Activity />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        The RSI oscillates between 0 and 100. The two most important levels are{' '}
        <span className="font-bold text-red-600">70</span> (overbought threshold) and{' '}
        <span className="font-bold text-green-600">30</span> (oversold threshold).
        But these are NOT automatic buy/sell signals — they&apos;re <em>zones of caution</em>.
      </p>

      <div className="mb-4">
        <ComparisonTable headers={headers} rows={rows} />
      </div>

      <KeyTakeaway>
        RSI above 70 doesn&apos;t mean &ldquo;sell&rdquo; — it means &ldquo;be careful if
        you&apos;re buying.&rdquo; RSI below 30 doesn&apos;t mean &ldquo;buy&rdquo; — it
        means &ldquo;be careful if you&apos;re selling.&rdquo; Context is everything.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 3: The Biggest RSI Mistake Beginners Make
   ═══════════════════════════════════════════════════════════════════════ */

function TopicRSIMistake() {
  return (
    <TopicCard
      id="d3-rsi-mistake"
      title="The Biggest RSI Mistake Beginners Make"
      icon={<AlertTriangle />}
      variant="warning"
    >
      {/* The Mistake */}
      <div className="mb-5 rounded-lg border-2 border-red-300 bg-red-50 p-4">
        <div className="flex items-center gap-2 mb-2">
          <XCircle className="h-5 w-5 text-red-600" />
          <p className="text-sm font-bold text-red-800 uppercase tracking-wide">The Mistake</p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg bg-red-100 p-3 text-center">
            <p className="text-base font-bold text-red-700">RSI above 70 = SELL NOW</p>
          </div>
          <div className="rounded-lg bg-red-100 p-3 text-center">
            <p className="text-base font-bold text-red-700">RSI below 30 = BUY NOW</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-red-900">
          <strong>Why this is wrong:</strong> Strong trends can stay overbought or oversold
          for <strong>weeks</strong>. Selling just because RSI hit 71 in a strong uptrend
          means you miss the entire move. Buying just because RSI hit 29 in a strong
          downtrend means you catch a falling knife.
        </p>
      </div>

      {/* Correct Usage */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <p className="text-sm font-bold text-green-800 uppercase tracking-wide">Correct Usage</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <div className="flex items-center gap-2 mb-1">
              <TrendingDown className="h-4 w-4 text-green-600" />
              <p className="text-sm font-bold text-green-800">Overbought at RESISTANCE</p>
            </div>
            <p className="text-sm text-slate-700">
              Higher probability pullback. Price is at a level where sellers historically step in,
              AND momentum is overextended.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <p className="text-sm font-bold text-green-800">Oversold at SUPPORT</p>
            </div>
            <p className="text-sm text-slate-700">
              Higher probability bounce. Price is at a level where buyers historically step in,
              AND selling momentum is exhausted.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-red-600" />
              <p className="text-sm font-bold text-red-800">Overbought in Strong UPTREND</p>
            </div>
            <p className="text-sm text-slate-700">
              <strong>NORMAL, not a sell signal.</strong> In a strong uptrend, RSI can stay
              above 70 for extended periods. This shows strength, not weakness.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4">
            <div className="flex items-center gap-2 mb-1">
              <TrendingDown className="h-4 w-4 text-red-600" />
              <p className="text-sm font-bold text-red-800">Oversold in Strong DOWNTREND</p>
            </div>
            <p className="text-sm text-slate-700">
              <strong>NORMAL, not a buy signal.</strong> In a strong downtrend, RSI can stay
              below 30 for extended periods. This shows weakness, not opportunity.
            </p>
          </div>
        </div>
      </div>

      {/* SVG: Two side-by-side charts */}
      <div className="mb-4 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Good Signal vs. False Signal — Context Matters
        </p>
        <RSIMistakeSVG />
      </div>

      <KeyTakeaway>
        Never use RSI in isolation. Overbought at resistance = caution. Overbought in
        uptrend = normal. Always combine RSI with structure (support/resistance) and
        trend direction before making any decision.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 4: RSI Divergence — The Most Powerful RSI Signal
   ═══════════════════════════════════════════════════════════════════════ */

function TopicRSIDivergence() {
  return (
    <TopicCard
      id="d3-rsi-divergence"
      title="RSI Divergence — The Most Powerful RSI Signal"
      icon={<Zap />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        <span className="font-bold text-slate-900">Divergence</span> occurs when price and RSI
        <span className="font-bold text-amber-700"> disagree</span>. Price makes a new extreme,
        but RSI doesn&apos;t confirm it. This is the single most powerful RSI signal because
        it&apos;s a <span className="font-bold text-green-600">LEADING signal</span> — it
        warns you <em>before</em> the reversal happens.
      </p>

      {/* Two types */}
      <div className="mb-5 grid gap-4 sm:grid-cols-2">
        {/* Bullish Divergence */}
        <div className="rounded-xl border-2 border-green-300 bg-green-50/60 p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-sm font-bold text-green-800 sm:text-base">BULLISH DIVERGENCE</h4>
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <ArrowDownRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
              <p><strong>Price:</strong> Makes a <span className="font-semibold text-red-600">lower low</span></p>
            </div>
            <div className="flex items-start gap-2">
              <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <p><strong>RSI:</strong> Makes a <span className="font-semibold text-green-600">higher low</span></p>
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-green-200 bg-white p-3">
            <p className="text-xs font-bold text-green-800 mb-1">MEANING</p>
            <p className="text-sm text-slate-700">
              Selling momentum is <strong>weakening</strong>. Price is making new lows, but
              with less force. Sellers are losing steam.
            </p>
          </div>
          <div className="mt-2 rounded-lg border border-green-200 bg-green-100/50 p-2">
            <p className="text-xs font-medium text-green-800">
              <strong>Best at:</strong> Support levels — oversold + divergence at support = high probability bounce
            </p>
          </div>
        </div>

        {/* Bearish Divergence */}
        <div className="rounded-xl border-2 border-red-300 bg-red-50/60 p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <h4 className="text-sm font-bold text-red-800 sm:text-base">BEARISH DIVERGENCE</h4>
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
              <p><strong>Price:</strong> Makes a <span className="font-semibold text-red-600">higher high</span></p>
            </div>
            <div className="flex items-start gap-2">
              <ArrowDownRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <p><strong>RSI:</strong> Makes a <span className="font-semibold text-green-600">lower high</span></p>
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-red-200 bg-white p-3">
            <p className="text-xs font-bold text-red-800 mb-1">MEANING</p>
            <p className="text-sm text-slate-700">
              Buying momentum is <strong>weakening</strong>. Price is making new highs, but
              with less force. Buyers are losing steam.
            </p>
          </div>
          <div className="mt-2 rounded-lg border border-red-200 bg-red-100/50 p-2">
            <p className="text-xs font-medium text-red-800">
              <strong>Best at:</strong> Resistance levels — overbought + divergence at resistance = high probability pullback
            </p>
          </div>
        </div>
      </div>

      {/* Why powerful */}
      <div className="mb-5 rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <Zap className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800">Why Divergence Is So Powerful</p>
            <p className="mt-1 text-sm text-slate-700">
              Divergence is a <strong>LEADING signal</strong> — it warns you <em>before</em> a
              reversal happens. Most indicators are lagging (they confirm after the move).
              Divergence shows you the momentum shift <strong>in real time</strong>, giving you
              time to prepare. Think of it as the market&apos;s &ldquo;check engine light&rdquo; —
              it tells you something is changing before the car breaks down.
            </p>
          </div>
        </div>
      </div>

      {/* SVG: Divergence diagrams */}
      <div className="mb-4 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Bullish &amp; Bearish RSI Divergence — Price vs. RSI Disagreement
        </p>
        <RSIDivergenceSVG />
      </div>

      <KeyTakeaway>
        Divergence = price and RSI disagree. Bullish divergence (price lower low + RSI
        higher low) warns of potential upside reversal. Bearish divergence (price higher
        high + RSI lower high) warns of potential downside reversal. It&apos;s a LEADING
        signal — use it to prepare, not to impulsively enter.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 5: RSI Divergence — Common Pitfalls
   ═══════════════════════════════════════════════════════════════════════ */

function TopicRSIDivergencePitfalls() {
  const pitfalls = [
    {
      number: 1,
      title: 'Trading divergence without confirmation',
      description:
        'Divergence alone is not a trade signal. It warns you that momentum is shifting — but the shift may not result in a reversal.',
      fix: 'Wait for a candlestick pattern (pin bar, engulfing) or a Break of Structure (BOS) before entering. Divergence is your alarm — confirmation is your entry.',
      icon: <XCircle className="h-5 w-5 text-red-500" />,
    },
    {
      number: 2,
      title: 'Seeing divergence everywhere (confirmation bias)',
      description:
        'When you want to find a reversal, you\'ll start seeing divergence in every tiny wick. Minor differences between price and RSI are NOT meaningful divergence.',
      fix: 'Only count CLEAR, MEANINGFUL differences. The RSI swing must be visually obvious. If you have to squint to see it, it\'s not divergence — it\'s noise.',
      icon: <Eye className="h-5 w-5 text-red-500" />,
    },
    {
      number: 3,
      title: 'Ignoring trend direction',
      description:
        'Bullish divergence in a strong downtrend often fails. Bearish divergence in a strong uptrend often fails. The trend is more powerful than any single indicator signal.',
      fix: 'Trend context matters. Divergence works best when it aligns with key S/R levels AND when the trend is already showing signs of exhaustion (slowing momentum, decreasing volume).',
      icon: <TrendingDown className="h-5 w-5 text-red-500" />,
    },
    {
      number: 4,
      title: 'Using divergence on small timeframes',
      description:
        'Divergence on 1-minute or 5-minute charts is mostly noise. The smaller the timeframe, the more false signals you\'ll get.',
      fix: 'Use 4H or Daily timeframes for reliable divergence signals. The higher the timeframe, the more meaningful the divergence.',
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
    },
  ]

  return (
    <TopicCard
      id="d3-rsi-divergence-pitfalls"
      title="RSI Divergence — Common Pitfalls"
      icon={<AlertTriangle />}
      variant="warning"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Divergence is powerful, but it&apos;s also one of the most misused signals.
        Here are the <span className="font-bold text-red-600">4 biggest pitfalls</span> that
        cause beginners to lose money with divergence.
      </p>

      <div className="space-y-4">
        {pitfalls.map((pitfall) => (
          <div
            key={pitfall.number}
            className="rounded-xl border border-red-200 bg-red-50/40 p-4"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-200 text-xs font-bold text-red-800">
                {pitfall.number}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  {pitfall.icon}
                  <p className="text-sm font-bold text-red-800">{pitfall.title}</p>
                </div>
                <p className="text-sm text-slate-700">{pitfall.description}</p>
              </div>
            </div>
            <div className="ml-10 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-3">
              <div className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-green-700 mb-1">Fix</p>
                  <p className="text-sm text-green-900">{pitfall.fix}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <KeyTakeaway>
          Divergence is a signal generator, not a trade trigger. Always wait for confirmation
          (candlestick pattern + BOS), use higher timeframes (4H+), and respect the trend
          context. A confirmed divergence at a key S/R level is one of the highest-probability
          setups in trading.
        </KeyTakeaway>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 6: RSI Hidden Divergence — Trend Continuation Signal
   ═══════════════════════════════════════════════════════════════════════ */

function TopicRSIHiddenDivergence() {
  return (
    <TopicCard
      id="d3-rsi-hidden-divergence"
      title="RSI Hidden Divergence — Trend Continuation Signal"
      icon={<Search />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        While regular divergence signals a potential <strong>reversal</strong>, hidden divergence
        signals a potential <span className="font-bold text-amber-700">trend continuation</span>.
        It&apos;s called &ldquo;hidden&rdquo; because the disagreement between price and RSI
        is less obvious — price respects the trend, but RSI shows a temporary momentum reset.
      </p>

      {/* Regular vs Hidden comparison */}
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border-2 border-purple-300 bg-purple-50/60 p-4">
          <p className="text-sm font-bold text-purple-800 mb-2">Regular Divergence</p>
          <div className="rounded-lg bg-white p-3 border border-purple-200">
            <p className="text-sm text-slate-700">
              = <strong className="text-purple-700">REVERSAL</strong> signal
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Price and RSI both make extremes, but in opposite directions. Warns that the
              current trend may be ending.
            </p>
          </div>
        </div>
        <div className="rounded-lg border-2 border-amber-300 bg-amber-50/60 p-4">
          <p className="text-sm font-bold text-amber-800 mb-2">Hidden Divergence</p>
          <div className="rounded-lg bg-white p-3 border border-amber-200">
            <p className="text-sm text-slate-700">
              = <strong className="text-amber-700">CONTINUATION</strong> signal
            </p>
            <p className="mt-1 text-xs text-slate-500">
              RSI makes an extreme, but price doesn&apos;t. Shows the trend is pausing
              (resetting) before likely continuing.
            </p>
          </div>
        </div>
      </div>

      {/* Two types of hidden divergence */}
      <div className="mb-5 grid gap-4 sm:grid-cols-2">
        {/* Bullish Hidden */}
        <div className="rounded-xl border-2 border-green-300 bg-green-50/60 p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-sm font-bold text-green-800 sm:text-base">BULLISH HIDDEN</h4>
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <p><strong>Price:</strong> Makes a <span className="font-semibold text-green-600">higher low</span></p>
            </div>
            <div className="flex items-start gap-2">
              <ArrowDownRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
              <p><strong>RSI:</strong> Makes a <span className="font-semibold text-red-600">lower low</span></p>
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-green-200 bg-white p-3">
            <p className="text-xs font-bold text-green-800 mb-1">MEANING</p>
            <p className="text-sm text-slate-700">
              Uptrend continuation. Price held higher, but RSI reset (oversold momentum-wise).
              This is a &ldquo;pause and reload&rdquo; — the trend is likely to resume upward.
            </p>
          </div>
        </div>

        {/* Bearish Hidden */}
        <div className="rounded-xl border-2 border-red-300 bg-red-50/60 p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <h4 className="text-sm font-bold text-red-800 sm:text-base">BEARISH HIDDEN</h4>
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <div className="flex items-start gap-2">
              <ArrowDownRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
              <p><strong>Price:</strong> Makes a <span className="font-semibold text-red-600">lower high</span></p>
            </div>
            <div className="flex items-start gap-2">
              <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <p><strong>RSI:</strong> Makes a <span className="font-semibold text-green-600">higher high</span></p>
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-red-200 bg-white p-3">
            <p className="text-xs font-bold text-red-800 mb-1">MEANING</p>
            <p className="text-sm text-slate-700">
              Downtrend continuation. Price held lower, but RSI reset (overbought momentum-wise).
              This is a &ldquo;pause and reload&rdquo; — the trend is likely to resume downward.
            </p>
          </div>
        </div>
      </div>

      {/* SVG: Hidden divergence diagrams */}
      <div className="mb-4 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Hidden Divergence — Trend Continuation Signals
        </p>
        <RSIHiddenDivergenceSVG />
      </div>

      <KeyTakeaway>
        Regular divergence = reversal. Hidden divergence = continuation. Bullish hidden
        (price higher low + RSI lower low) means the uptrend is reloading. Bearish hidden
        (price lower high + RSI higher high) means the downtrend is reloading. Use hidden
        divergence to find trend-continuation entries.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 7: Practice — RSI Setup and Basic Reading
   ═══════════════════════════════════════════════════════════════════════ */

function TopicPracticeRSIBasic() {
  return (
    <TopicCard
      id="d3-practice-rsi-basic"
      title="Practice — RSI Setup and Basic Reading"
      icon={<FlaskConical />}
      variant="default"
    >
      <div className="mb-4 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="h-5 w-5 text-amber-600" />
          <h4 className="text-sm font-bold uppercase tracking-wide text-amber-700 sm:text-base">
            Practice Lab
          </h4>
        </div>
        <p className="mb-4 text-sm text-slate-600 sm:text-base">
          Open <strong>TradingView</strong> → Load <strong>BTC/USDT Daily</strong> → Add
          RSI indicator → Complete these tasks:
        </p>
        <div className="space-y-1">
          <ChecklistItem>
            Add the RSI (14) indicator to your chart — confirm it appears in a panel below
            the price chart
          </ChecklistItem>
          <ChecklistItem>
            Identify the current RSI reading — is it in the overbought zone (&gt;70),
            oversold zone (&lt;30), or neutral zone (30–70)?
          </ChecklistItem>
          <ChecklistItem>
            Scroll back 6 months and mark every time RSI crossed above 70 and below 30.
            Count: How many times did each happen?
          </ChecklistItem>
          <ChecklistItem>
            For each overbought/oversold event, check: Was price at a key S/R level?
            Write down how many times RSI signals at S/R levels led to reversals vs.
            RSI signals in trends that kept going.
          </ChecklistItem>
        </div>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-100/50 p-3">
        <p className="text-sm font-medium text-amber-900">
          📝 Record your findings in your trading journal. This exercise builds your
          intuition for how RSI behaves differently at S/R levels vs. in trending markets.
        </p>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 8: Practice — RSI Divergence Hunt
   ═══════════════════════════════════════════════════════════════════════ */

function TopicPracticeRSIDivergence() {
  return (
    <TopicCard
      id="d3-practice-rsi-divergence"
      title="Practice — RSI Divergence Hunt"
      icon={<FlaskConical />}
      variant="default"
    >
      <div className="mb-4 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="h-5 w-5 text-amber-600" />
          <h4 className="text-sm font-bold uppercase tracking-wide text-amber-700 sm:text-base">
            Practice Lab
          </h4>
        </div>
        <p className="mb-4 text-sm text-slate-600 sm:text-base">
          Stay on <strong>BTC/USDT Daily</strong> → Hunt for RSI divergences in the
          historical data:
        </p>
        <div className="space-y-1">
          <ChecklistItem>
            Scroll back 12 months and find at least 3 <strong>bullish divergences</strong>
            (price lower low + RSI higher low). Mark them with a drawing tool.
          </ChecklistItem>
          <ChecklistItem>
            Find at least 3 <strong>bearish divergences</strong> (price higher high + RSI
            lower high). Mark them with a different color.
          </ChecklistItem>
          <ChecklistItem>
            For each divergence, check: Did price actually reverse afterward? Note the
            &ldquo;hit rate&rdquo; — how many worked vs. failed?
          </ChecklistItem>
          <ChecklistItem>
            Look for any <strong>hidden divergences</strong> (trend continuation). How do
            they compare to regular divergences in terms of reliability?
          </ChecklistItem>
          <ChecklistItem>
            Write a 1-paragraph summary: &ldquo;In my sample, RSI divergence at S/R levels
            worked ___% of the time, and divergence in trends worked ___% of the time.&rdquo;
          </ChecklistItem>
        </div>
      </div>

      <div className="rounded-lg border border-green-200 bg-green-50 p-3">
        <p className="text-sm font-medium text-green-900">
          🎯 This is one of the most valuable exercises you can do. Understanding how
          often divergence actually works (and when it fails) will prevent you from
          blindly trusting it in live trading. Knowledge from your own research beats
          any textbook.
        </p>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════════════ */

export function Day3MiddayBlock() {
  return (
    <section id="d3-midday" aria-labelledby="day3-midday-heading">
      <SectionDivider title="MIDDAY BLOCK — HOUR 4: RSI — THE MOMENTUM DETECTIVE" />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicWhatIsRSI />
        <TopicRSIBasicReading />
        <TopicRSIMistake />
        <TopicRSIDivergence />
        <TopicRSIDivergencePitfalls />
        <TopicRSIHiddenDivergence />
        <TopicPracticeRSIBasic />
        <TopicPracticeRSIDivergence />
      </div>
    </section>
  )
}
