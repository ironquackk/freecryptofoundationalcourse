'use client'

import React from 'react'
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Shield,
  Target,
  Eye,
  Layers,
  Zap,
  Repeat,
  FlaskConical,
  Activity,
  GitBranch,
  Droplets,
  CircleDot,
  RotateCcw,
  ListChecks,
  Bookmark,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Fish,
  AlertCircle,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'

/* ─────────────────────────────────────────────────────────── */
/*  SVG: BOS (Break of Structure) Diagram — Bullish BOS       */
/* ─────────────────────────────────────────────────────────── */
function BullishBOSDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-2 text-center text-sm font-bold text-green-700">Bullish BOS — Price Breaks Above Previous High</p>
      <svg
        viewBox="0 0 520 240"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Bullish Break of Structure diagram showing price breaking above previous high"
      >
        {/* Price axis */}
        <line x1="30" y1="15" x2="30" y2="220" stroke="#94a3b8" strokeWidth="1" />
        <text x="26" y="50" textAnchor="end" fontSize="8" fill="#94a3b8">$55K</text>
        <text x="26" y="90" textAnchor="end" fontSize="8" fill="#16a34a" fontWeight="bold">$52K</text>
        <text x="26" y="135" textAnchor="end" fontSize="8" fill="#94a3b8">$48K</text>
        <text x="26" y="175" textAnchor="end" fontSize="8" fill="#94a3b8">$44K</text>
        <text x="26" y="215" textAnchor="end" fontSize="8" fill="#94a3b8">$40K</text>

        {/* Time axis */}
        <line x1="30" y1="220" x2="500" y2="220" stroke="#94a3b8" strokeWidth="1" />

        {/* Grid lines */}
        <line x1="30" y1="50" x2="500" y2="50" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="135" x2="500" y2="135" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="175" x2="500" y2="175" stroke="#e2e8f0" strokeWidth="0.5" />

        {/* Previous High line */}
        <line x1="30" y1="90" x2="500" y2="90" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 3" />
        <rect x="400" y="77" width="95" height="18" rx="3" fill="#f59e0b" />
        <text x="447" y="90" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Prev High $52K</text>

        {/* Uptrend building: HL, HH, HL */}
        <path
          d="M 50 195 L 80 150 L 100 170 L 140 110 L 165 130 L 200 90 L 225 105 L 260 70 L 280 82"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* BOS break — price surges above previous high */}
        <path
          d="M 280 82 L 310 55 L 340 35 L 370 25 L 400 30 L 430 18 L 470 22"
          fill="none"
          stroke="#16a34a"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* HH/HL labels before BOS */}
        <circle cx="80" cy="150" r="3" fill="#16a34a" />
        <text x="80" y="163" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">HL</text>

        <circle cx="140" cy="110" r="3" fill="#16a34a" />
        <text x="140" y="103" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">HH</text>

        <circle cx="165" cy="130" r="3" fill="#16a34a" />
        <text x="165" y="143" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">HL</text>

        <circle cx="200" cy="90" r="4" fill="#f59e0b" />
        <text x="200" y="83" textAnchor="middle" fontSize="8" fill="#f59e0b" fontWeight="bold">HH</text>

        <circle cx="225" cy="105" r="3" fill="#16a34a" />
        <text x="225" y="118" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">HL</text>

        {/* New HH after BOS */}
        <circle cx="430" cy="18" r="4" fill="#16a34a" />
        <text x="430" y="11" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">NEW HH!</text>

        {/* BOS marker */}
        <circle cx="340" cy="35" r="10" fill="none" stroke="#16a34a" strokeWidth="2.5" />
        <line x1="340" y1="25" x2="340" y2="15" stroke="#16a34a" strokeWidth="2" />
        <polygon points="334,15 340,8 346,15" fill="#16a34a" />
        <rect x="355" y="28" width="75" height="20" rx="4" fill="#16a34a" />
        <text x="392" y="42" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">BULL BOS</text>

        {/* Arrow from BOS label to break point */}
        <line x1="355" y1="38" x2="350" y2="36" stroke="#16a34a" strokeWidth="1.5" />
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        Bullish BOS: Price breaks above the previous Higher High, confirming the uptrend continuation. Each new HH is a BOS.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: CHoCH (Change of Character) Diagram                  */
/* ─────────────────────────────────────────────────────────── */
function CHoChDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-2 text-center text-sm font-bold text-amber-700">CHoCH — First Lower Low After Uptrend Signals Character Change</p>
      <svg
        viewBox="0 0 520 250"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="CHoCH diagram showing first lower low after uptrend"
      >
        {/* Price axis */}
        <line x1="30" y1="15" x2="30" y2="235" stroke="#94a3b8" strokeWidth="1" />
        <text x="26" y="45" textAnchor="end" fontSize="8" fill="#94a3b8">$58K</text>
        <text x="26" y="85" textAnchor="end" fontSize="8" fill="#94a3b8">$54K</text>
        <text x="26" y="120" textAnchor="end" fontSize="8" fill="#16a34a" fontWeight="bold">$50K</text>
        <text x="26" y="155" textAnchor="end" fontSize="8" fill="#94a3b8">$46K</text>
        <text x="26" y="190" textAnchor="end" fontSize="8" fill="#f59e0b" fontWeight="bold">$43K</text>
        <text x="26" y="225" textAnchor="end" fontSize="8" fill="#94a3b8">$40K</text>

        {/* Time axis */}
        <line x1="30" y1="235" x2="500" y2="235" stroke="#94a3b8" strokeWidth="1" />

        {/* Grid lines */}
        <line x1="30" y1="45" x2="500" y2="45" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="85" x2="500" y2="85" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="155" x2="500" y2="155" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="225" x2="500" y2="225" stroke="#e2e8f0" strokeWidth="0.5" />

        {/* Previous HL line (the one that gets broken) */}
        <line x1="30" y1="120" x2="500" y2="120" stroke="#16a34a" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        <text x="490" y="115" textAnchor="end" fontSize="8" fill="#16a34a" fontWeight="bold">Last HL ($50K)</text>

        {/* Uptrend portion (green) */}
        <path
          d="M 50 200 L 80 155 L 100 120 L 120 135 L 155 85 L 175 100 L 210 55 L 230 70"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* CHoCH — price drops below previous HL */}
        <path
          d="M 230 70 L 260 110 L 280 150 L 300 190"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeDasharray="8 4"
        />

        {/* Pullback after CHoCH */}
        <path
          d="M 300 190 L 330 145 L 350 165"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Confirmed new downtrend (red) */}
        <path
          d="M 350 165 L 380 200 L 400 185 L 430 215 L 460 200 L 490 230"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Uptrend swing labels */}
        <circle cx="100" cy="120" r="3" fill="#16a34a" />
        <text x="100" y="113" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">HL1</text>

        <circle cx="120" cy="135" r="3" fill="#16a34a" />
        <text x="120" y="148" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">HL2</text>

        <circle cx="155" cy="85" r="3" fill="#16a34a" />
        <text x="155" y="78" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">HH</text>

        <circle cx="210" cy="55" r="3" fill="#16a34a" />
        <text x="210" y="48" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">HH</text>

        {/* CHoCH marker */}
        <circle cx="300" cy="190" r="10" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <text x="300" y="194" textAnchor="middle" fontSize="8" fill="#f59e0b" fontWeight="bold">!</text>
        <rect x="305" y="182" width="70" height="20" rx="4" fill="#f59e0b" />
        <text x="340" y="196" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">CHoCH!</text>

        {/* First LL label */}
        <text x="300" y="210" textAnchor="middle" fontSize="7" fill="#f59e0b" fontWeight="bold">First LL</text>

        {/* New structure labels */}
        <circle cx="330" cy="145" r="3" fill="#dc2626" />
        <text x="330" y="138" textAnchor="middle" fontSize="8" fill="#dc2626" fontWeight="bold">LH</text>

        <circle cx="430" cy="215" r="3" fill="#dc2626" />
        <text x="430" y="228" textAnchor="middle" fontSize="8" fill="#dc2626" fontWeight="bold">LL</text>

        {/* Phase labels */}
        <rect x="50" y="8" width="80" height="18" rx="3" fill="#16a34a" />
        <text x="90" y="21" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">UPTREND</text>

        <rect x="170" y="8" width="120" height="18" rx="3" fill="#f59e0b" />
        <text x="230" y="21" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">CHoCH (WARNING)</text>

        <rect x="350" y="8" width="140" height="18" rx="3" fill="#dc2626" />
        <text x="420" y="21" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">NEW DOWNTREND</text>
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        CHoCH = First Lower Low after an uptrend. The market&apos;s &ldquo;character&rdquo; is changing from bullish to potentially bearish. This is a WARNING, not a confirmation.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Order Block Diagram (Enhanced)                        */
/* ─────────────────────────────────────────────────────────── */
function OrderBlockDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-2 text-center text-sm font-bold text-purple-700">Order Blocks — The Last Opposite Candle Before an Impulse Move</p>
      <svg
        viewBox="0 0 520 260"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Order block diagram showing bullish and bearish order blocks"
      >
        {/* Price axis */}
        <line x1="30" y1="15" x2="30" y2="245" stroke="#94a3b8" strokeWidth="1" />
        <text x="26" y="35" textAnchor="end" fontSize="8" fill="#94a3b8">$58K</text>
        <text x="26" y="85" textAnchor="end" fontSize="8" fill="#94a3b8">$54K</text>
        <text x="26" y="135" textAnchor="end" fontSize="8" fill="#94a3b8">$50K</text>
        <text x="26" y="185" textAnchor="end" fontSize="8" fill="#94a3b8">$46K</text>
        <text x="26" y="235" textAnchor="end" fontSize="8" fill="#94a3b8">$42K</text>

        {/* Grid lines */}
        <line x1="30" y1="35" x2="500" y2="35" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="85" x2="500" y2="85" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="135" x2="500" y2="135" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="185" x2="500" y2="185" stroke="#e2e8f0" strokeWidth="0.5" />

        {/* === BEARISH ORDER BLOCK (left side) === */}
        <text x="140" y="18" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="bold">BEARISH OB</text>

        {/* Some bullish candles leading up */}
        <line x1="60" y1="165" x2="60" y2="140" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="52" y="142" width="16" height="18" rx="1" fill="#16a34a" />
        <line x1="60" y1="142" x2="60" y2="135" stroke="#16a34a" strokeWidth="1.5" />

        <line x1="85" y1="155" x2="85" y2="125" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="77" y="127" width="16" height="23" rx="1" fill="#16a34a" />
        <line x1="85" y1="127" x2="85" y2="118" stroke="#16a34a" strokeWidth="1.5" />

        {/* THE BEARISH OB candle (last bullish candle before drop) */}
        <rect x="100" y="108" width="20" height="30" rx="2" fill="#16a34a" stroke="#dc2626" strokeWidth="2.5" />
        <line x1="110" y1="100" x2="110" y2="108" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="110" y1="138" x2="110" y2="145" stroke="#16a34a" strokeWidth="1.5" />

        {/* OB Zone shading */}
        <rect x="97" y="100" width="26" height="45" rx="3" fill="#dc2626" opacity="0.1" stroke="#dc2626" strokeWidth="1" strokeDasharray="4 2" />

        {/* Arrow pointing to OB */}
        <line x1="110" y1="90" x2="110" y2="98" stroke="#dc2626" strokeWidth="1.5" />
        <polygon points="106,90 110,82 114,90" fill="#dc2626" />
        <text x="110" y="78" textAnchor="middle" fontSize="8" fill="#dc2626" fontWeight="bold">Last bullish candle!</text>

        {/* Price drops after OB */}
        <line x1="140" y1="142" x2="140" y2="165" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="132" y="142" width="16" height="20" rx="1" fill="#dc2626" />
        <line x1="140" y1="162" x2="140" y2="178" stroke="#dc2626" strokeWidth="1.5" />

        <line x1="165" y1="160" x2="165" y2="195" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="157" y="162" width="16" height="28" rx="1" fill="#dc2626" />
        <line x1="165" y1="190" x2="165" y2="215" stroke="#dc2626" strokeWidth="1.5" />

        {/* Impulse drop arrow */}
        <line x1="125" y1="130" x2="155" y2="185" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="155,185 158,175 148,180" fill="#dc2626" />
        <text x="155" y="228" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Impulse Drop</text>

        {/* === BULLISH ORDER BLOCK (right side) === */}
        <text x="370" y="18" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="bold">BULLISH OB</text>

        {/* Some bearish candles leading down */}
        <line x1="310" y1="115" x2="310" y2="140" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="302" y="118" width="16" height="18" rx="1" fill="#dc2626" />
        <line x1="310" y1="136" x2="310" y2="148" stroke="#dc2626" strokeWidth="1.5" />

        <line x1="335" y1="125" x2="335" y2="158" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="327" y="128" width="16" height="25" rx="1" fill="#dc2626" />
        <line x1="335" y1="153" x2="335" y2="168" stroke="#dc2626" strokeWidth="1.5" />

        {/* THE BULLISH OB candle (last bearish candle before rally) */}
        <rect x="349" y="132" width="20" height="35" rx="2" fill="#dc2626" stroke="#16a34a" strokeWidth="2.5" />
        <line x1="359" y1="125" x2="359" y2="132" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="359" y1="167" x2="359" y2="178" stroke="#dc2626" strokeWidth="1.5" />

        {/* OB Zone shading */}
        <rect x="346" y="125" width="26" height="53" rx="3" fill="#16a34a" opacity="0.1" stroke="#16a34a" strokeWidth="1" strokeDasharray="4 2" />

        {/* Arrow pointing to OB */}
        <line x1="359" y1="118" x2="359" y2="123" stroke="#16a34a" strokeWidth="1.5" />
        <polygon points="355,118 359,110 363,118" fill="#16a34a" />
        <text x="359" y="106" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">Last bearish candle!</text>

        {/* Price rallies after OB */}
        <line x1="390" y1="105" x2="390" y2="130" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="382" y="105" width="16" height="20" rx="1" fill="#16a34a" />
        <line x1="390" y1="100" x2="390" y2="105" stroke="#16a34a" strokeWidth="1.5" />

        <line x1="415" y1="80" x2="415" y2="110" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="407" y="82" width="16" height="23" rx="1" fill="#16a34a" />
        <line x1="415" y1="72" x2="415" y2="82" stroke="#16a34a" strokeWidth="1.5" />

        <line x1="440" y1="55" x2="440" y2="82" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="432" y="57" width="16" height="20" rx="1" fill="#16a34a" />
        <line x1="440" y1="48" x2="440" y2="57" stroke="#16a34a" strokeWidth="1.5" />

        {/* Impulse rally arrow */}
        <line x1="375" y1="155" x2="425" y2="80" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="425,80 420,85 430,88" fill="#16a34a" />
        <text x="420" y="42" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Impulse Rally</text>

        {/* Return to OB (price magnet) */}
        <path d="M 445 58 L 465 80 L 475 100 L 468 125 L 460 132" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="480" y="115" fontSize="7" fill="#7c3aed" fontWeight="bold">Returns to OB</text>

        {/* Divider line */}
        <line x1="250" y1="30" x2="250" y2="240" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 2" />
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        <strong>Bearish OB:</strong> Last bullish candle before a strong drop. <strong>Bullish OB:</strong> Last bearish candle before a strong rally. Price often returns to these zones.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Fair Value Gap (FVG) Diagram (Enhanced)              */
/* ─────────────────────────────────────────────────────────── */
function FVGDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-2 text-center text-sm font-bold text-purple-700">Fair Value Gap (FVG) — 3-Candle Pattern Where Price Didn&apos;t Trade</p>
      <svg
        viewBox="0 0 520 260"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Fair Value Gap diagram showing the 3-candle gap pattern"
      >
        {/* Price axis */}
        <line x1="30" y1="15" x2="30" y2="245" stroke="#94a3b8" strokeWidth="1" />
        <text x="26" y="35" textAnchor="end" fontSize="8" fill="#94a3b8">$58K</text>
        <text x="26" y="75" textAnchor="end" fontSize="8" fill="#94a3b8">$55K</text>
        <text x="26" y="115" textAnchor="end" fontSize="8" fill="#94a3b8">$52K</text>
        <text x="26" y="155" textAnchor="end" fontSize="8" fill="#94a3b8">$49K</text>
        <text x="26" y="195" textAnchor="end" fontSize="8" fill="#94a3b8">$46K</text>
        <text x="26" y="235" textAnchor="end" fontSize="8" fill="#94a3b8">$43K</text>

        {/* Grid lines */}
        <line x1="30" y1="35" x2="500" y2="35" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="75" x2="500" y2="75" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="115" x2="500" y2="115" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="155" x2="500" y2="155" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="195" x2="500" y2="195" stroke="#e2e8f0" strokeWidth="0.5" />

        {/* Candle 1: Bearish */}
        <line x1="120" y1="130" x2="120" y2="145" stroke="#dc2626" strokeWidth="2" />
        <rect x="105" y="145" width="30" height="45" rx="2" fill="#dc2626" stroke="#b91c1c" strokeWidth="1" />
        <line x1="120" y1="190" x2="120" y2="205" stroke="#dc2626" strokeWidth="2" />
        <text x="120" y="220" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">Candle 1</text>
        <text x="120" y="232" textAnchor="middle" fill="#dc2626" fontSize="7">(Bearish)</text>

        {/* Candle 2: Strong Bullish (impulse) */}
        <line x1="250" y1="55" x2="250" y2="75" stroke="#16a34a" strokeWidth="2" />
        <rect x="235" y="75" width="30" height="95" rx="2" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
        <line x1="250" y1="170" x2="250" y2="190" stroke="#16a34a" strokeWidth="2" />
        <text x="250" y="205" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">Candle 2</text>
        <text x="250" y="217" textAnchor="middle" fill="#16a34a" fontSize="7">(Impulse!)</text>

        {/* Candle 3: Bullish continuation */}
        <line x1="380" y1="40" x2="380" y2="58" stroke="#16a34a" strokeWidth="2" />
        <rect x="365" y="58" width="30" height="42" rx="2" fill="#16a34a" stroke="#15803d" strokeWidth="1" />
        <line x1="380" y1="100" x2="380" y2="115" stroke="#16a34a" strokeWidth="2" />
        <text x="380" y="130" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">Candle 3</text>
        <text x="380" y="142" textAnchor="middle" fill="#16a34a" fontSize="7">(Continuation)</text>

        {/* FVG zone — the gap between Candle 1 high and Candle 3 low */}
        <rect x="150" y="130" width="200" height="28" rx="4" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6 3" />

        {/* FVG label */}
        <text x="250" y="148" textAnchor="middle" fill="#7c3aed" fontSize="12" fontWeight="bold">FVG ZONE</text>

        {/* Arrow showing the gap from Candle 1 high */}
        <line x1="135" y1="130" x2="150" y2="130" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="145" y="125" textAnchor="middle" fontSize="7" fill="#7c3aed" fontWeight="bold">C1 High</text>

        {/* Arrow showing the gap to Candle 3 low */}
        <line x1="365" y1="158" x2="350" y2="158" stroke="#7c3aed" strokeWidth="1.5" />
        <text x="365" y="168" textAnchor="middle" fontSize="7" fill="#7c3aed" fontWeight="bold">C3 Low</text>

        {/* Double-headed arrow showing the gap */}
        <line x1="155" y1="144" x2="345" y2="144" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" />

        {/* Price filling FVG later */}
        <path d="M 420 60 L 440 90 L 455 85 L 470 110 L 480 100 L 490 125 L 495 135" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="4 3" />
        <text x="470" y="80" textAnchor="middle" fontSize="7" fill="#7c3aed" fontWeight="bold">Price fills FVG</text>
        <polygon points="495,135 498,128 490,130" fill="#7c3aed" />

        {/* Explanation */}
        <rect x="60" y="240" width="400" height="16" rx="3" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="0.5" />
        <text x="260" y="251" textAnchor="middle" fontSize="8" fill="#7c3aed" fontWeight="bold">
          FVG = Gap between Candle 1&apos;s high ($52K) and Candle 3&apos;s low ($49K) — price didn&apos;t trade here!
        </text>
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        An FVG is the gap between Candle 1&apos;s high and Candle 3&apos;s low. Price often returns to &ldquo;fill&rdquo; this imbalance before continuing. FVGs act as price magnets.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Liquidity Sweep Diagram (Enhanced)                    */
/* ─────────────────────────────────────────────────────────── */
function LiquiditySweepDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-2 text-center text-sm font-bold text-teal-700">Liquidity Sweep — Stop Hunts Above/Below Equal Highs &amp; Lows</p>
      <svg
        viewBox="0 0 520 260"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Liquidity sweep diagram showing stop hunts above equal highs"
      >
        {/* Price axis */}
        <line x1="30" y1="15" x2="30" y2="245" stroke="#94a3b8" strokeWidth="1" />
        <text x="26" y="40" textAnchor="end" fontSize="8" fill="#94a3b8">$56K</text>
        <text x="26" y="80" textAnchor="end" fontSize="8" fill="#dc2626" fontWeight="bold">$52K</text>
        <text x="26" y="120" textAnchor="end" fontSize="8" fill="#94a3b8">$48K</text>
        <text x="26" y="160" textAnchor="end" fontSize="8" fill="#94a3b8">$44K</text>
        <text x="26" y="200" textAnchor="end" fontSize="8" fill="#94a3b8">$40K</text>
        <text x="26" y="240" textAnchor="end" fontSize="8" fill="#94a3b8">$36K</text>

        {/* Grid lines */}
        <line x1="30" y1="40" x2="500" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="120" x2="500" y2="120" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="160" x2="500" y2="160" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="200" x2="500" y2="200" stroke="#e2e8f0" strokeWidth="0.5" />

        {/* Equal Highs line (liquidity pool) */}
        <line x1="30" y1="80" x2="500" y2="80" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="6 3" />

        {/* Liquidity pool label */}
        <rect x="60" y="60" width="130" height="18" rx="3" fill="#dc2626" opacity="0.15" stroke="#dc2626" strokeWidth="1" />
        <text x="125" y="73" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">Liquidity Pool ($52K)</text>

        {/* Equal highs markers */}
        <circle cx="120" cy="80" r="5" fill="none" stroke="#dc2626" strokeWidth="2" />
        <text x="120" y="95" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Equal High 1</text>

        <circle cx="220" cy="80" r="5" fill="none" stroke="#dc2626" strokeWidth="2" />
        <text x="220" y="95" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Equal High 2</text>

        <circle cx="310" cy="80" r="5" fill="none" stroke="#dc2626" strokeWidth="2" />
        <text x="310" y="95" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Equal High 3</text>

        {/* Stop-loss orders above equal highs (buy stops) */}
        <text x="220" y="57" textAnchor="middle" fontSize="7" fill="#dc2626">Stop-loss orders (buy stops) →</text>
        {[100, 150, 200, 250, 300, 350].map((x, i) => (
          <React.Fragment key={i}>
            <line x1={x} y1="62" x2={x} y2="75" stroke="#dc2626" strokeWidth="1" opacity="0.5" />
            <polygon points={`${x-3},75 ${x+3},75 ${x},80`} fill="#dc2626" opacity="0.4" />
          </React.Fragment>
        ))}

        {/* Price building equal highs */}
        <path
          d="M 50 180 L 80 120 L 100 80 L 120 82 L 140 130 L 170 100 L 200 80 L 220 82 L 240 125 L 270 95 L 300 80 L 310 82"
          fill="none"
          stroke="#475569"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* LIQUIDITY SWEEP — price spikes above equal highs */}
        <path
          d="M 310 82 L 340 55 L 355 40"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Sweep zone */}
        <rect x="310" y="35" width="60" height="45" rx="3" fill="#dc2626" opacity="0.08" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />

        {/* Sweep marker */}
        <circle cx="355" cy="40" r="6" fill="none" stroke="#dc2626" strokeWidth="2" />
        <text x="370" y="35" fontSize="8" fill="#dc2626" fontWeight="bold">SWEEP!</text>
        <text x="370" y="45" fontSize="7" fill="#dc2626">Stop hunts</text>
        <text x="370" y="55" fontSize="7" fill="#dc2626">triggered</text>

        {/* Price reverses after sweep */}
        <path
          d="M 355 40 L 380 70 L 400 110 L 420 155 L 440 190 L 460 215 L 480 230"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Reversal arrow */}
        <polygon points="480,230 485,220 475,222" fill="#16a34a" />
        <text x="475" y="244" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">Reversal!</text>

        {/* Explanation boxes */}
        <rect x="380" y="160" width="115" height="50" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
        <text x="437" y="175" textAnchor="middle" fontSize="7" fill="#92400e" fontWeight="bold">Why it happens:</text>
        <text x="437" y="186" textAnchor="middle" fontSize="6" fill="#92400e">Institutions push price</text>
        <text x="437" y="195" textAnchor="middle" fontSize="6" fill="#92400e">above equal highs to</text>
        <text x="437" y="204" textAnchor="middle" fontSize="6" fill="#92400e">trigger stop-loss orders</text>
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        A liquidity sweep occurs when price briefly spikes above equal highs (or below equal lows) to trigger stop-loss orders, then reverses. Institutions &ldquo;hunt&rdquo; this liquidity before reversing.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 1: SMC Concepts — BOS & CHoCH                       */
/* ─────────────────────────────────────────────────────────── */
function TopicBOSAndCHoCH() {
  const comparisonHeaders = ['Feature', 'CHoCH', 'BOS']
  const comparisonRows = [
    [
      <span key="m" className="font-semibold">Meaning</span>,
      <span key="c" className="text-amber-700 font-semibold">Change of Character — first break</span>,
      <span key="b" className="text-green-700 font-semibold">Break of Structure — continuation/confirmation</span>,
    ],
    [
      <span key="m2" className="font-semibold">Signal Type</span>,
      <span key="c2" className="text-amber-700">Early warning — trend MAY be reversing</span>,
      <span key="b2" className="text-green-700">Confirmation — trend IS continuing or reversing</span>,
    ],
    [
      <span key="m3" className="font-semibold">Reliability</span>,
      <span key="c3" className="text-amber-700">Lower (many false CHoCHs)</span>,
      <span key="b3" className="text-green-700">Higher (confirmed by follow-through)</span>,
    ],
    [
      <span key="m4" className="font-semibold">When It Occurs</span>,
      <span key="c4" className="text-amber-700">First break of the dominant structure</span>,
      <span key="b4" className="text-green-700">Subsequent breaks in the new direction</span>,
    ],
    [
      <span key="m5" className="font-semibold">Your Action</span>,
      <span key="c5" className="text-amber-700">Alert mode — tighten stops, watch closely</span>,
      <span key="b5" className="text-green-700">Trade mode — look for entries in new direction</span>,
    ],
  ]

  return (
    <TopicCard id="d2-smc-bos-choch" title="SMC Concepts — BOS & CHoCH" icon={<GitBranch />} variant="highlight">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        <strong>Smart Money Concepts (SMC)</strong> is a framework that studies how institutional
        (&ldquo;smart money&rdquo;) traders move markets. The two most important SMC structure concepts are{' '}
        <span className="font-bold text-green-700">BOS</span> (Break of Structure) and{' '}
        <span className="font-bold text-amber-700">CHoCH</span> (Change of Character).
      </p>

      <AnalogyBox title="CHoCH is Your Alarm Clock, BOS is Getting Out of Bed">
        CHoCH is the alarm going off — something might be changing, but you might hit snooze (false CHoCH).
        BOS is you actually getting out of bed — the change is confirmed and you need to act.
      </AnalogyBox>

      {/* BOS Diagram */}
      <BullishBOSDiagram />

      {/* Definitions */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-green-300 bg-green-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-sm font-bold text-green-800">BOS — Break of Structure</h4>
          </div>
          <p className="text-sm text-slate-700">
            Price breaks a previous swing point in the <strong>same direction</strong> as the trend.
            In an uptrend, each new <strong className="text-green-600">Higher High</strong> is a BOS
            confirming the bullish trend continues.
          </p>
          <div className="mt-2 rounded border border-green-200 bg-green-100/50 p-2">
            <p className="text-xs text-green-800">
              ✓ BOS = CONFIRMATION. After BOS, you can trade in the trend direction with more confidence.
            </p>
          </div>
        </div>

        <div className="rounded-xl border-2 border-amber-300 bg-amber-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <h4 className="text-sm font-bold text-amber-800">CHoCH — Change of Character</h4>
          </div>
          <p className="text-sm text-slate-700">
            The <strong>first break</strong> of market structure in the opposite direction.
            In an uptrend, when price makes a <strong className="text-red-600">Lower Low</strong>,
            that is a CHoCH — the character of the market is changing.
          </p>
          <div className="mt-2 rounded border border-amber-200 bg-amber-100/50 p-2">
            <p className="text-xs text-amber-800">
              ⚠ CHoCH is a WARNING, not a confirmation. Many CHoCHs are false — price may resume the original trend.
            </p>
          </div>
        </div>
      </div>

      {/* CHoCH Diagram */}
      <CHoChDiagram />

      {/* Comparison */}
      <div className="mt-5">
        <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
      </div>

      <KeyTakeaway>
        CHoCH is your alarm — it wakes you up that something may be changing. BOS is you actually
        getting out of bed — the change is confirmed. Always wait for BOS before committing capital.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 2: Order Blocks — Where Institutions Trade           */
/* ─────────────────────────────────────────────────────────── */
function TopicOrderBlocks() {
  return (
    <TopicCard id="d2-order-blocks" title="Order Blocks — Where Institutions Trade" icon={<Layers />} variant="default">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        An <strong>order block</strong> is the last opposite-direction candle before a strong impulsive move.
        It represents where institutional orders were placed. Price frequently returns to these blocks
        because that is where unfilled institutional orders still sit.
      </p>

      <OrderBlockDiagram />

      {/* Types of OBs */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-green-300 bg-green-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-sm font-bold text-green-800">Bullish Order Block</h4>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span>The last <strong>red (bearish)</strong> candle before a strong upward move</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span>Institutional buy orders were placed here</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span>When price returns, it often bounces — acting as support</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border-2 border-red-300 bg-red-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <h4 className="text-sm font-bold text-red-800">Bearish Order Block</h4>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <span>The last <strong>green (bullish)</strong> candle before a strong downward move</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <span>Institutional sell orders were placed here</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <span>When price returns, it often rejects — acting as resistance</span>
            </li>
          </ul>
        </div>
      </div>

      <AnalogyBox title="Order Blocks are Like Price Magnets">
        Imagine a giant magnet hidden under the floor. A metal ball rolling past will be pulled toward
        it. Order blocks work the same way — unfilled institutional orders act as magnets that pull
        price back to fill them. When price returns to an order block and bounces, you get a
        high-probability entry.
      </AnalogyBox>

      <KeyTakeaway>
        Order blocks give you the <strong>precise zone</strong> where institutions traded. When price
        returns to an order block and shows a reaction (bounce or rejection), that is a high-probability
        entry with excellent risk/reward.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 3: Fair Value Gaps (FVG)                             */
/* ─────────────────────────────────────────────────────────── */
function TopicFVG() {
  return (
    <TopicCard id="d2-fvg" title="Fair Value Gaps (FVG)" icon={<Activity />} variant="default">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        A <strong>Fair Value Gap (FVG)</strong> is a 3-candle pattern where a large impulsive move
        creates a gap between the wick of the first candle and the wick of the third candle. This gap
        represents an area of <span className="font-semibold text-amber-700">imbalance</span> — price
        moved so fast that it left a &ldquo;hole&rdquo; in the market.
      </p>

      <FVGDiagram />

      {/* Why FVGs matter */}
      <div className="mt-5 space-y-3">
        <h4 className="text-sm font-bold text-slate-900 sm:text-base">Why FVGs Matter</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border-l-4 border-l-purple-500 bg-purple-50 p-4">
            <p className="text-sm font-bold text-purple-800">Price Tends to Fill Gaps</p>
            <p className="mt-1 text-sm text-slate-700">
              Markets are self-correcting. Price frequently returns to FVGs to &ldquo;fill&rdquo; the
              imbalance before continuing. This gives you <strong>predictable reentry zones</strong>.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-l-teal-500 bg-teal-50 p-4">
            <p className="text-sm font-bold text-teal-800">FVG = Institutional Footprint</p>
            <p className="mt-1 text-sm text-slate-700">
              Large impulsive moves that create FVGs are typically driven by institutional order flow.
              The gap shows where smart money aggressively entered the market.
            </p>
          </div>
        </div>
      </div>

      {/* How to trade FVGs */}
      <div className="mt-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
        <div className="flex items-start gap-3">
          <Target className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <p className="text-sm font-bold text-green-800">How to Trade FVGs</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                <span>Identify the FVG (3-candle pattern with a gap between C1 high and C3 low)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                <span>Wait for price to return and fill the gap</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                <span>Enter when price shows a reaction in the FVG zone (bounce/rejection)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                <span>Stop loss on the other side of the FVG zone</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        FVGs are like price magnets. When you see an FVG, mark it on your chart and wait for price
        to return. The fill often provides a <strong>high-probability entry</strong> with clear risk
        management (stop beyond the FVG).
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 4: Liquidity Sweeps                                  */
/* ─────────────────────────────────────────────────────────── */
function TopicLiquiditySweeps() {
  return (
    <TopicCard id="d2-liquidity-sweeps" title="Liquidity Sweeps — Stop Hunts by Smart Money" icon={<Droplets />} variant="warning">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        A <strong>liquidity sweep</strong> occurs when price briefly moves beyond an obvious level
        (equal highs or equal lows) to trigger stop-loss orders, then <strong>immediately reverses</strong>.
        This is how institutional traders &ldquo;hunt&rdquo; liquidity — they need the orders from
        retail stop-losses to fill their large positions.
      </p>

      <LiquiditySweepDiagram />

      {/* Why liquidity matters */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-teal-300 bg-teal-50/60 p-4">
          <h4 className="mb-2 text-sm font-bold text-teal-800">Where Liquidity Pools Form</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
              <span><strong>Above equal highs</strong> — buy stop-loss orders cluster here</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
              <span><strong>Below equal lows</strong> — sell stop-loss orders cluster here</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
              <span><strong>Above/below round numbers</strong> — $50K, $100K attract stops</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border-2 border-amber-300 bg-amber-50/60 p-4">
          <h4 className="mb-2 text-sm font-bold text-amber-800">How to Trade Liquidity Sweeps</h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              <span>Identify equal highs/lows — these are liquidity pools</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              <span>Wait for price to sweep beyond them (wick only, candle body stays outside briefly)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              <span>Enter in the opposite direction when price reverses</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              <span>Stop loss beyond the sweep extreme</span>
            </li>
          </ul>
        </div>
      </div>

      <AnalogyBox title="Liquidity Sweeps are Like Fishing with Chum">
        Fishermen throw chum (small food) into the water to attract fish to a specific spot, then
        catch them all at once. Smart money does the same — they push price slightly beyond a level
        to attract stop-loss orders (the chum), then execute their large position in the opposite
        direction using all that liquidity.
      </AnalogyBox>

      <KeyTakeaway>
        When you see equal highs or equal lows, expect a sweep. Don&apos;t place your stop-loss at the
        obvious level — that&apos;s exactly where institutions will hunt. Instead, wait for the sweep
        to happen and trade the reversal.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Breaker Block Diagram                                  */
/* ─────────────────────────────────────────────────────────── */
function BreakerBlockDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-2 text-center text-sm font-bold text-purple-700">Breaker Block — A Failed Order Block That Flips Direction</p>
      <svg
        viewBox="0 0 520 260"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Breaker block diagram showing a failed bullish order block becoming a bearish breaker block"
      >
        {/* Price axis */}
        <line x1="30" y1="15" x2="30" y2="245" stroke="#94a3b8" strokeWidth="1" />
        <text x="26" y="35" textAnchor="end" fontSize="8" fill="#94a3b8">$58K</text>
        <text x="26" y="75" textAnchor="end" fontSize="8" fill="#16a34a" fontWeight="bold">$54K</text>
        <text x="26" y="120" textAnchor="end" fontSize="8" fill="#94a3b8">$50K</text>
        <text x="26" y="165" textAnchor="end" fontSize="8" fill="#7c3aed" fontWeight="bold">$47K</text>
        <text x="26" y="205" textAnchor="end" fontSize="8" fill="#94a3b8">$43K</text>
        <text x="26" y="240" textAnchor="end" fontSize="8" fill="#94a3b8">$40K</text>

        {/* Grid lines */}
        <line x1="30" y1="35" x2="500" y2="35" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="75" x2="500" y2="75" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="120" x2="500" y2="120" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="205" x2="500" y2="205" stroke="#e2e8f0" strokeWidth="0.5" />

        {/* Phase labels */}
        <rect x="50" y="8" width="120" height="18" rx="3" fill="#16a34a" />
        <text x="110" y="21" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">ORIGINAL OB (BULL)</text>

        <rect x="200" y="8" width="140" height="18" rx="3" fill="#f59e0b" />
        <text x="270" y="21" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">OB FAILS (VIOLATED)</text>

        <rect x="370" y="8" width="120" height="18" rx="3" fill="#7c3aed" />
        <text x="430" y="21" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">BREAKER (BEAR)</text>

        {/* Step 1: Bullish order block - last red candle before rally */}
        <text x="130" y="50" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">Bullish OB</text>

        {/* Some bearish candles */}
        <line x1="60" y1="130" x2="60" y2="155" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="52" y="132" width="16" height="18" rx="1" fill="#dc2626" />
        <line x1="60" y1="150" x2="60" y2="162" stroke="#dc2626" strokeWidth="1.5" />

        <line x1="85" y1="120" x2="85" y2="150" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="77" y="122" width="16" height="22" rx="1" fill="#dc2626" />
        <line x1="85" y1="144" x2="85" y2="158" stroke="#dc2626" strokeWidth="1.5" />

        {/* THE bullish OB candle */}
        <rect x="100" y="108" width="20" height="40" rx="2" fill="#dc2626" stroke="#16a34a" strokeWidth="2.5" />
        <line x1="110" y1="100" x2="110" y2="108" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="110" y1="148" x2="110" y2="160" stroke="#dc2626" strokeWidth="1.5" />

        {/* OB Zone */}
        <rect x="97" y="100" width="26" height="60" rx="3" fill="#16a34a" opacity="0.1" stroke="#16a34a" strokeWidth="1" strokeDasharray="4 2" />

        {/* Price rallies from OB */}
        <line x1="140" y1="95" x2="140" y2="120" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="132" y="97" width="16" height="18" rx="1" fill="#16a34a" />
        <line x1="140" y1="88" x2="140" y2="97" stroke="#16a34a" strokeWidth="1.5" />

        <line x1="165" y1="70" x2="165" y2="95" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="157" y="72" width="16" height="18" rx="1" fill="#16a34a" />
        <line x1="165" y1="62" x2="165" y2="72" stroke="#16a34a" strokeWidth="1.5" />

        {/* Step 2: OB gets violated - price drops through it */}
        <line x1="200" y1="80" x2="200" y2="110" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="192" y="82" width="16" height="22" rx="1" fill="#dc2626" />
        <line x1="200" y1="104" x2="200" y2="120" stroke="#dc2626" strokeWidth="1.5" />

        <line x1="225" y1="110" x2="225" y2="145" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="217" y="112" width="16" height="28" rx="1" fill="#dc2626" />
        <line x1="225" y1="140" x2="225" y2="158" stroke="#dc2626" strokeWidth="1.5" />

        {/* Violation line through OB zone */}
        <line x1="97" y1="135" x2="240" y2="135" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6 3" />
        <text x="170" y="150" textAnchor="middle" fontSize="7" fill="#f59e0b" fontWeight="bold">OB Violated!</text>

        {/* Step 3: Price reverses back up through the failed OB = Breaker */}
        <line x1="260" y1="140" x2="260" y2="110" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="252" y="112" width="16" height="22" rx="1" fill="#16a34a" />
        <line x1="260" y1="100" x2="260" y2="112" stroke="#16a34a" strokeWidth="1.5" />

        {/* Breaker zone shading */}
        <rect x="97" y="100" width="26" height="60" rx="3" fill="#7c3aed" opacity="0.15" stroke="#7c3aed" strokeWidth="2" />

        {/* Price returns to breaker and rejects */}
        <path d="M 275 95 L 290 110 L 295 130 L 300 148 L 305 160" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinejoin="round" strokeDasharray="4 3" />

        {/* Return to breaker arrow */}
        <line x1="285" y1="80" x2="285" y2="100" stroke="#7c3aed" strokeWidth="1.5" />
        <polygon points="281,100 285,110 289,100" fill="#7c3aed" />
        <text x="320" y="80" textAnchor="middle" fontSize="7" fill="#7c3aed" fontWeight="bold">Returns to Breaker</text>

        {/* Strong drop after breaker rejection */}
        <line x1="340" y1="155" x2="340" y2="190" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="332" y="157" width="16" height="28" rx="1" fill="#dc2626" />
        <line x1="340" y1="185" x2="340" y2="205" stroke="#dc2626" strokeWidth="1.5" />

        <line x1="370" y1="190" x2="370" y2="225" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="362" y="192" width="16" height="28" rx="1" fill="#dc2626" />
        <line x1="370" y1="220" x2="370" y2="238" stroke="#dc2626" strokeWidth="1.5" />

        {/* Breaker block label */}
        <rect x="98" y="68" width="120" height="20" rx="4" fill="#7c3aed" />
        <text x="158" y="82" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">BEARISH BREAKER</text>

        {/* Divider line */}
        <line x1="250" y1="30" x2="250" y2="245" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 2" />
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        A Bullish OB that gets violated (broken through) becomes a <strong>Bearish Breaker Block</strong>. The failed level now attracts institutional sell orders. The opposite applies for a Bearish OB becoming a Bullish Breaker.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Inducement (IDM) Diagram                               */
/* ─────────────────────────────────────────────────────────── */
function InducementDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-2 text-center text-sm font-bold text-amber-700">Inducement — Smart Money Traps Retail into False Entries</p>
      <svg
        viewBox="0 0 520 260"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Inducement diagram showing fake breakout trap and reversal"
      >
        {/* Price axis */}
        <line x1="30" y1="15" x2="30" y2="245" stroke="#94a3b8" strokeWidth="1" />
        <text x="26" y="40" textAnchor="end" fontSize="8" fill="#94a3b8">$56K</text>
        <text x="26" y="80" textAnchor="end" fontSize="8" fill="#dc2626" fontWeight="bold">$52K</text>
        <text x="26" y="120" textAnchor="end" fontSize="8" fill="#94a3b8">$48K</text>
        <text x="26" y="160" textAnchor="end" fontSize="8" fill="#94a3b8">$44K</text>
        <text x="26" y="200" textAnchor="end" fontSize="8" fill="#94a3b8">$40K</text>
        <text x="26" y="240" textAnchor="end" fontSize="8" fill="#94a3b8">$36K</text>

        {/* Grid lines */}
        <line x1="30" y1="40" x2="500" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="80" x2="500" y2="80" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="120" x2="500" y2="120" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="200" x2="500" y2="200" stroke="#e2e8f0" strokeWidth="0.5" />

        {/* Resistance line at $52K */}
        <line x1="30" y1="80" x2="500" y2="80" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="6 3" />
        <rect x="400" y="67" width="95" height="18" rx="3" fill="#dc2626" />
        <text x="447" y="80" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Resistance $52K</text>

        {/* Price approaching resistance */}
        <path
          d="M 50 200 L 80 160 L 110 130 L 130 105 L 155 90 L 175 82 L 195 80"
          fill="none"
          stroke="#475569"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* Equal highs touching resistance */}
        <circle cx="195" cy="80" r="4" fill="none" stroke="#dc2626" strokeWidth="2" />
        <text x="195" y="73" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Touch 1</text>

        {/* Pullback from resistance */}
        <path
          d="M 195 80 L 220 100 L 240 95 L 260 80"
          fill="none"
          stroke="#475569"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        <circle cx="260" cy="80" r="4" fill="none" stroke="#dc2626" strokeWidth="2" />
        <text x="260" y="73" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Touch 2</text>

        {/* THE INDUCEMENT — fake breakout above resistance */}
        <path
          d="M 260 80 L 290 60 L 310 45"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Inducement zone */}
        <rect x="260" y="35" width="70" height="45" rx="3" fill="#f59e0b" opacity="0.12" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />

        {/* Fake breakout label */}
        <text x="295" y="32" textAnchor="middle" fontSize="8" fill="#16a34a" fontWeight="bold">Fake Breakout!</text>

        {/* Retail trap indicators */}
        <text x="330" y="42" fontSize="7" fill="#f59e0b" fontWeight="bold">Retail buys</text>
        <text x="330" y="52" fontSize="7" fill="#f59e0b" fontWeight="bold">here (TRAP!)</text>

        {/* Small buy arrows (retail traders entering) */}
        {[290, 300, 310].map((x, i) => (
          <React.Fragment key={i}>
            <line x1={x} y1="55" x2={x} y2="48" stroke="#16a34a" strokeWidth="1" opacity="0.6" />
            <polygon points={`${x-2},48 ${x+2},48 ${x},44`} fill="#16a34a" opacity="0.6" />
          </React.Fragment>
        ))}

        {/* REVERSAL — price dumps back below resistance */}
        <path
          d="M 310 45 L 330 65 L 350 95 L 370 130 L 390 165 L 410 195 L 440 220 L 470 235"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Reversal arrow */}
        <polygon points="470,235 475,225 465,227" fill="#dc2626" />

        {/* IDM marker */}
        <circle cx="310" cy="45" r="8" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <rect x="320" y="80" width="95" height="20" rx="4" fill="#f59e0b" />
        <text x="367" y="94" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">INDUCEMENT</text>
        <line x1="320" y1="90" x2="315" y2="55" stroke="#f59e0b" strokeWidth="1.5" />

        {/* Explanation box */}
        <rect x="360" y="130" width="130" height="55" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
        <text x="425" y="145" textAnchor="middle" fontSize="7" fill="#92400e" fontWeight="bold">What happened:</text>
        <text x="425" y="156" textAnchor="middle" fontSize="6" fill="#92400e">1. Price breaks resistance</text>
        <text x="425" y="166" textAnchor="middle" fontSize="6" fill="#92400e">2. Retail buys the breakout</text>
        <text x="425" y="176" textAnchor="middle" fontSize="6" fill="#92400e">3. Smart money sells into it</text>
        <text x="425" y="186" textAnchor="middle" fontSize="6" fill="#92400e">4. Price reverses hard</text>
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        Inducement: A short-term move designed to trick retail traders into entering too early. Smart money creates a false signal, then reverses to take the other side of the trade.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Rejection Block Diagram                                */
/* ─────────────────────────────────────────────────────────── */
function RejectionBlockDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="mb-2 text-center text-sm font-bold text-amber-700">Rejection Blocks — Candles with Long Wicks Showing Strong Rejection</p>
      <svg
        viewBox="0 0 520 260"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Rejection block diagram showing candle anatomy with rejection wicks"
      >
        {/* Price axis */}
        <line x1="30" y1="15" x2="30" y2="245" stroke="#94a3b8" strokeWidth="1" />
        <text x="26" y="35" textAnchor="end" fontSize="8" fill="#94a3b8">$58K</text>
        <text x="26" y="75" textAnchor="end" fontSize="8" fill="#94a3b8">$54K</text>
        <text x="26" y="115" textAnchor="end" fontSize="8" fill="#94a3b8">$50K</text>
        <text x="26" y="155" textAnchor="end" fontSize="8" fill="#94a3b8">$46K</text>
        <text x="26" y="195" textAnchor="end" fontSize="8" fill="#94a3b8">$42K</text>
        <text x="26" y="235" textAnchor="end" fontSize="8" fill="#94a3b8">$38K</text>

        {/* Grid lines */}
        <line x1="30" y1="35" x2="500" y2="35" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="75" x2="500" y2="75" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="115" x2="500" y2="115" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="195" x2="500" y2="195" stroke="#e2e8f0" strokeWidth="0.5" />

        {/* === BEARISH REJECTION BLOCK (left) === */}
        <text x="130" y="18" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="bold">BEARISH REJECTION</text>

        {/* Key level */}
        <line x1="40" y1="80" x2="230" y2="80" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 3" />
        <text x="50" y="75" fontSize="7" fill="#f59e0b" fontWeight="bold">Key Level</text>

        {/* Normal candle before rejection */}
        <line x1="70" y1="120" x2="70" y2="145" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="62" y="122" width="16" height="18" rx="1" fill="#16a34a" />
        <line x1="70" y1="115" x2="70" y2="122" stroke="#16a34a" strokeWidth="1.5" />

        {/* THE rejection candle — long upper wick */}
        <line x1="130" y1="140" x2="130" y2="50" stroke="#dc2626" strokeWidth="2" />
        <rect x="120" y="85" width="20" height="55" rx="2" fill="#dc2626" stroke="#dc2626" strokeWidth="1" />
        <line x1="130" y1="50" x2="130" y2="42" stroke="#dc2626" strokeWidth="2" />

        {/* Upper wick highlight */}
        <rect x="115" y="42" width="30" height="43" rx="2" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="130" y="37" textAnchor="middle" fontSize="8" fill="#f59e0b" fontWeight="bold">Long Upper Wick</text>
        <text x="130" y="27" textAnchor="middle" fontSize="7" fill="#dc2626">= SELLING PRESSURE</text>

        {/* Arrow pointing to wick */}
        <line x1="155" y1="55" x2="165" y2="55" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="195" y="52" fontSize="7" fill="#f59e0b" fontWeight="bold">Wick = Rejection</text>
        <text x="195" y="62" fontSize="7" fill="#f59e0b" fontWeight="bold">Body = Acceptance</text>

        {/* Price drops after rejection */}
        <line x1="180" y1="125" x2="180" y2="155" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="172" y="127" width="16" height="22" rx="1" fill="#dc2626" />
        <line x1="180" y1="149" x2="180" y2="168" stroke="#dc2626" strokeWidth="1.5" />

        <line x1="205" y1="150" x2="205" y2="190" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="197" y="152" width="16" height="30" rx="1" fill="#dc2626" />
        <line x1="205" y1="182" x2="205" y2="205" stroke="#dc2626" strokeWidth="1.5" />

        {/* Drop arrow */}
        <line x1="190" y1="135" x2="210" y2="195" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="210,195 215,185 205,188" fill="#dc2626" />
        <text x="225" y="215" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Rejection → Drop</text>

        {/* === BULLISH REJECTION BLOCK (right) === */}
        <text x="380" y="18" textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="bold">BULLISH REJECTION</text>

        {/* Key level */}
        <line x1="270" y1="170" x2="490" y2="170" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 3" />
        <text x="480" y="165" textAnchor="end" fontSize="7" fill="#f59e0b" fontWeight="bold">Key Level</text>

        {/* Normal candle before rejection */}
        <line x1="310" y1="130" x2="310" y2="155" stroke="#dc2626" strokeWidth="1.5" />
        <rect x="302" y="132" width="16" height="18" rx="1" fill="#dc2626" />
        <line x1="310" y1="150" x2="310" y2="162" stroke="#dc2626" strokeWidth="1.5" />

        {/* THE rejection candle — long lower wick */}
        <line x1="370" y1="120" x2="370" y2="135" stroke="#16a34a" strokeWidth="2" />
        <rect x="360" y="135" width="20" height="50" rx="2" fill="#16a34a" stroke="#16a34a" strokeWidth="1" />
        <line x1="370" y1="185" x2="370" y2="225" stroke="#16a34a" strokeWidth="2" />

        {/* Lower wick highlight */}
        <rect x="355" y="185" width="30" height="45" rx="2" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="370" y="240" textAnchor="middle" fontSize="8" fill="#f59e0b" fontWeight="bold">Long Lower Wick</text>
        <text x="370" y="252" textAnchor="middle" fontSize="7" fill="#16a34a">= BUYING PRESSURE</text>

        {/* Arrow pointing to wick */}
        <line x1="395" y1="210" x2="405" y2="210" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="440" y="207" fontSize="7" fill="#f59e0b" fontWeight="bold">Wick = Rejection</text>
        <text x="440" y="217" fontSize="7" fill="#f59e0b" fontWeight="bold">Body = Acceptance</text>

        {/* Price rallies after rejection */}
        <line x1="420" y1="100" x2="420" y2="125" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="412" y="102" width="16" height="18" rx="1" fill="#16a34a" />
        <line x1="420" y1="95" x2="420" y2="102" stroke="#16a34a" strokeWidth="1.5" />

        <line x1="450" y1="70" x2="450" y2="95" stroke="#16a34a" strokeWidth="1.5" />
        <rect x="442" y="72" width="16" height="18" rx="1" fill="#16a34a" />
        <line x1="450" y1="62" x2="450" y2="72" stroke="#16a34a" strokeWidth="1.5" />

        {/* Rally arrow */}
        <line x1="430" y1="115" x2="455" y2="68" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="455,68 450,75 460,75" fill="#16a34a" />
        <text x="470" y="55" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Rejection → Rally</text>

        {/* Divider line */}
        <line x1="250" y1="30" x2="250" y2="245" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 2" />
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        <strong>Bearish Rejection:</strong> Long upper wick at a key level = sellers overwhelmed buyers. <strong>Bullish Rejection:</strong> Long lower wick at a key level = buyers overwhelmed sellers. Rejection at an Order Block = high-probability entry.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 5: Breaker Blocks — Failed Order Blocks               */
/* ─────────────────────────────────────────────────────────── */
function TopicBreakerBlocks() {
  const comparisonHeaders = ['Feature', 'Order Block', 'Breaker Block']
  const comparisonRows = [
    [
      <span key="m" className="font-semibold">Definition</span>,
      <span key="o" className="text-green-700 font-semibold">Last opposite candle before impulse move</span>,
      <span key="b" className="text-purple-700 font-semibold">An order block that has been violated/failed</span>,
    ],
    [
      <span key="m2" className="font-semibold">Status</span>,
      <span key="o2" className="text-green-700">Active — price respects the level</span>,
      <span key="b2" className="text-purple-700">Failed — price broke through it</span>,
    ],
    [
      <span key="m3" className="font-semibold">Direction Flip</span>,
      <span key="o3" className="text-green-700">No — keeps original direction</span>,
      <span key="b3" className="text-purple-700">Yes — flips to opposite direction</span>,
    ],
    [
      <span key="m4" className="font-semibold">Bullish OB →</span>,
      <span key="o4" className="text-green-700">Acts as support (buy zone)</span>,
      <span key="b4" className="text-purple-700">When violated → becomes bearish breaker (sell zone)</span>,
    ],
    [
      <span key="m5" className="font-semibold">Bearish OB →</span>,
      <span key="o5" className="text-green-700">Acts as resistance (sell zone)</span>,
      <span key="b5" className="text-purple-700">When violated → becomes bullish breaker (buy zone)</span>,
    ],
    [
      <span key="m6" className="font-semibold">Power</span>,
      <span key="o6" className="text-green-700">High — institutional accumulation zone</span>,
      <span key="b6" className="text-purple-700">Even higher — failed levels attract MORE interest</span>,
    ],
  ]

  return (
    <TopicCard id="d2-breaker-blocks" title="Breaker Blocks — Failed Order Blocks That Flip" icon={<RotateCcw />} variant="highlight">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        A <strong>breaker block</strong> is an order block that has been <span className="font-semibold text-purple-700">violated</span> (price broke through it), causing it to &ldquo;break&rdquo; and flip its direction. When a bullish order block fails and price breaks below it, that zone becomes a <strong>bearish breaker block</strong> — and vice versa.
      </p>

      <BreakerBlockDiagram />

      {/* How it forms */}
      <div className="mt-5 space-y-3">
        <h4 className="text-sm font-bold text-slate-900 sm:text-base">How a Breaker Block Forms</h4>
        <div className="space-y-3">
          <div className="rounded-xl border-2 border-green-200 bg-green-50/40 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">1</span>
              <div>
                <p className="text-sm font-bold text-green-900">Bullish Order Block Forms</p>
                <p className="mt-1 text-sm text-slate-700">A bearish candle before a strong upward move creates a bullish OB. Price respects it as support.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-amber-200 bg-amber-50/40 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">2</span>
              <div>
                <p className="text-sm font-bold text-amber-900">OB Gets Violated</p>
                <p className="mt-1 text-sm text-slate-700">Price breaks through the bullish OB zone. The level has failed — it no longer holds as support.</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-2 border-purple-200 bg-purple-50/40 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">3</span>
              <div>
                <p className="text-sm font-bold text-purple-900">Breaker Block Activates</p>
                <p className="mt-1 text-sm text-slate-700">When price returns to the failed OB zone, it now acts as <strong>resistance</strong> instead of support. This is the bearish breaker block — a powerful sell zone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why powerful */}
      <div className="mt-5 rounded-xl border-2 border-purple-300 bg-purple-50/60 p-4">
        <div className="mb-2 flex items-center gap-2">
          <Zap className="h-5 w-5 text-purple-600" />
          <h4 className="text-sm font-bold text-purple-800">Why Breaker Blocks Are So Powerful</h4>
        </div>
        <p className="text-sm text-slate-700">
          Failed levels attract <strong>even more institutional interest</strong> than original order blocks. Here&apos;s why: when an OB fails, traders who entered at that level are now trapped in losing positions. Their stop-losses become fuel for the opposite move. Smart money knows this and targets these failed levels for high-probability entries.
        </p>
      </div>

      {/* Step by step identification */}
      <div className="mt-5 space-y-3">
        <h4 className="text-sm font-bold text-slate-900 sm:text-base">How to Identify a Breaker Block on Any Chart</h4>
        <ol className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
            <span><strong>Step 1:</strong> Identify an order block (last opposite candle before impulse move)</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
            <span><strong>Step 2:</strong> Watch for price to break through the OB zone (violation)</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
            <span><strong>Step 3:</strong> Mark the violated OB zone as a breaker block (flipped direction)</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
            <span><strong>Step 4:</strong> Wait for price to return to the breaker and show rejection</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-500" />
            <span><strong>Step 5:</strong> Enter in the breaker&apos;s direction with stop loss beyond the extreme</span>
          </li>
        </ol>
      </div>

      {/* Comparison table */}
      <div className="mt-5">
        <ComparisonTable headers={comparisonHeaders} rows={comparisonRows} />
      </div>

      <KeyTakeaway>
        A breaker block is a <strong>failed order block that flips direction</strong>. Bullish OB that breaks → Bearish Breaker.
        Bearish OB that breaks → Bullish Breaker. Failed levels attract even more institutional interest than original OBs.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 6: Inducement (IDM)                                  */
/* ─────────────────────────────────────────────────────────── */
function TopicInducement() {
  return (
    <TopicCard id="d2-inducement" title="Inducement (IDM) — Smart Money Traps" icon={<Fish />} variant="default">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        <strong>Inducement (IDM)</strong> is a short-term move designed to <span className="font-semibold text-amber-700">trap retail traders</span> into entering positions too early. Smart money creates a false signal to &ldquo;induce&rdquo; retail entries, then reverses to take the other side of the trade.
      </p>

      <InducementDiagram />

      {/* Types of inducement */}
      <div className="mt-5 space-y-3">
        <h4 className="text-sm font-bold text-slate-900 sm:text-base">Types of Inducement</h4>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border-2 border-amber-200 bg-amber-50/40 p-4">
            <p className="text-sm font-bold text-amber-800">Equal Highs/Lows Traps</p>
            <p className="mt-1 text-xs text-slate-700 sm:text-sm">
              Price creates equal highs or lows, inducing traders to place stops beyond them. Smart money sweeps these stops then reverses.
            </p>
          </div>
          <div className="rounded-xl border-2 border-amber-200 bg-amber-50/40 p-4">
            <p className="text-sm font-bold text-amber-800">Fake BOS</p>
            <p className="mt-1 text-xs text-slate-700 sm:text-sm">
              Price briefly breaks structure to trick traders into thinking the trend has changed, then reverses back. Always wait for candle close confirmation.
            </p>
          </div>
          <div className="rounded-xl border-2 border-amber-200 bg-amber-50/40 p-4">
            <p className="text-sm font-bold text-amber-800">Inside Bar Traps</p>
            <p className="mt-1 text-xs text-slate-700 sm:text-sm">
              A tight consolidation (inside bar) makes it look like a breakout is coming. Traders enter early on the breakout — but it&apos;s a trap.
            </p>
          </div>
        </div>
      </div>

      {/* How to avoid inducement */}
      <div className="mt-5 rounded-xl border-2 border-red-300 bg-red-50/60 p-4">
        <div className="mb-2 flex items-center gap-2">
          <Shield className="h-5 w-5 text-red-600" />
          <h4 className="text-sm font-bold text-red-800">How to Avoid Inducement Traps</h4>
        </div>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span><strong>Wait for candle close</strong> — Don&apos;t react to wicks. A break doesn&apos;t count until the candle body closes beyond the level.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span><strong>Use higher timeframe confirmation</strong> — If the 15m shows a breakout but the 4H structure is still bearish, it&apos;s likely inducement.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span><strong>Look for liquidity below/above</strong> — If there&apos;s obvious liquidity (equal highs/lows) near a breakout, expect a sweep.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span><strong>Don&apos;t chase breakouts</strong> — Wait for the retest. If the breakout is real, price will retest and hold. If it&apos;s inducement, price will reverse.</span>
          </li>
        </ul>
      </div>

      <AnalogyBox title="Inducement is Like Fishing">
        Smart money is the fisherman. They dangle bait (inducement) — a fake breakout, a short-term trend, an obvious support level. Retail traders are the fish — they see the bait and bite (enter the trade). Once hooked, the fisherman reels them in (reverses price) and collects their stop-loss money as profit. The key lesson? Don&apos;t bite at the first thing you see. Wait and confirm before entering.
      </AnalogyBox>

      <KeyTakeaway>
        Inducement is smart money&apos;s way of <strong>trapping retail traders</strong>. Always wait for candle
        closes, use higher timeframe confirmation, and be suspicious of moves that look &ldquo;too obvious.&rdquo;
        If a breakout seems easy, it&apos;s probably a trap.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 7: Rejection Blocks                                   */
/* ─────────────────────────────────────────────────────────── */
function TopicRejectionBlocks() {
  return (
    <TopicCard id="d2-rejection-blocks" title="Rejection Blocks — Long Wicks at Key Levels" icon={<AlertCircle />} variant="default">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        A <strong>rejection block</strong> is a candle that shows strong rejection at a key price level,
        identified by a <span className="font-semibold text-amber-700">long wick</span> (shadow). The long
        wick tells you that price tried to move beyond a level but was aggressively pushed back — indicating
        that large orders are sitting at that level.
      </p>

      <RejectionBlockDiagram />

      {/* How to spot */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-red-300 bg-red-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <h4 className="text-sm font-bold text-red-800">Bearish Rejection Block</h4>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <span>Candle with a <strong>long upper wick</strong> and small body near the bottom</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <span>Shows sellers overwhelmed buyers at that level</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <span>The longer the wick, the stronger the rejection</span>
            </li>
          </ul>
        </div>

        <div className="rounded-xl border-2 border-green-300 bg-green-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-sm font-bold text-green-800">Bullish Rejection Block</h4>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span>Candle with a <strong>long lower wick</strong> and small body near the top</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span>Shows buyers overwhelmed sellers at that level</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span>The longer the wick, the stronger the rejection</span>
            </li>
          </ul>
        </div>
      </div>

      {/* High probability entry */}
      <div className="mt-5 rounded-xl border-2 border-amber-300 bg-amber-50/60 p-4">
        <div className="mb-2 flex items-center gap-2">
          <Target className="h-5 w-5 text-amber-600" />
          <h4 className="text-sm font-bold text-amber-800">High-Probability Entry: Rejection at Order Block</h4>
        </div>
        <p className="text-sm text-slate-700">
          A rejection block on its own is a useful signal, but it becomes a <strong>high-probability entry</strong> when
          it occurs at an order block or key SMC level. When you see a long-wick rejection candle forming at
          an order block, it confirms that institutions are defending that level. This confluence of rejection
          + order block = strong entry signal.
        </p>
        <div className="mt-3 rounded-lg bg-amber-100/50 p-3">
          <p className="text-xs text-amber-800 sm:text-sm">
            <strong>Formula:</strong> Rejection Block + Order Block = High-Probability Entry
          </p>
        </div>
      </div>

      <KeyTakeaway>
        Rejection blocks (long-wick candles) show you <strong>where price was aggressively rejected</strong>.
        When a rejection block forms at an order block, it&apos;s a powerful confirmation that institutions are
        defending that level — giving you a high-probability entry point.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 8: SMC Entry Checklist                                */
/* ─────────────────────────────────────────────────────────── */
function TopicSMCEntryChecklist() {
  const checklistItems = [
    {
      step: 1,
      title: 'Market Structure Confirmed',
      description: 'BOS confirms the trend direction. CHoCH has already occurred (if reversal). You know whether you\'re looking for longs or shorts.',
      icon: <GitBranch className="h-4 w-4" />,
      pass: 'BOS confirmed in your trade direction',
      fail: 'No clear structure — choppy market',
    },
    {
      step: 2,
      title: 'Order Block or FVG Identified',
      description: 'You have a clear institutional zone (OB or FVG) that price could return to for entry. This gives you a precise entry zone.',
      icon: <Layers className="h-4 w-4" />,
      pass: 'Clear OB or FVG zone marked on chart',
      fail: 'No institutional zone — guessing entry',
    },
    {
      step: 3,
      title: 'Liquidity Sweep Present (or Expected)',
      description: 'There is obvious liquidity (equal highs/lows) that smart money could target before your entry. A sweep confirms institutional activity.',
      icon: <Droplets className="h-4 w-4" />,
      pass: 'Sweep occurred or liquidity pool nearby',
      fail: 'No liquidity sweep — smart money may not be active',
    },
    {
      step: 4,
      title: 'Inducement Avoided',
      description: 'You are NOT entering on a fake breakout or emotional impulse. You have waited for candle close confirmation and higher TF alignment.',
      icon: <Shield className="h-4 w-4" />,
      pass: 'Candle closed, higher TF confirms, no chasing',
      fail: 'Entering on wick, chasing breakout, no confirmation',
    },
    {
      step: 5,
      title: 'Risk/Reward Acceptable',
      description: 'Your stop loss is beyond the OB/Breaker extreme. Your take profit targets a minimum 2:1 reward-to-risk ratio.',
      icon: <Target className="h-4 w-4" />,
      pass: 'R:R is 2:1 or better, stop is logical',
      fail: 'R:R below 2:1, stop is arbitrary',
    },
  ]

  return (
    <TopicCard id="d2-smc-entry-checklist" title="SMC Entry Checklist — Your Pre-Trade Gate" icon={<ListChecks />} variant="highlight">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        Before entering any trade using SMC, run through this checklist. If any item fails, <strong>do not trade</strong>.
        Discipline in following this checklist separates profitable SMC traders from gamblers.
      </p>

      {/* Checklist */}
      <div className="mt-5 space-y-3">
        {checklistItems.map((item) => (
          <div key={item.step} className="rounded-xl border-2 border-slate-200 bg-white p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">{item.step}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <p className="text-sm font-bold text-slate-900">{item.title}</p>
                </div>
                <p className="mt-1 text-sm text-slate-700">{item.description}</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <div className="flex items-start gap-2 rounded-lg bg-green-50 p-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                    <span className="text-xs text-green-800 sm:text-sm">{item.pass}</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg bg-red-50 p-2">
                    <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                    <span className="text-xs text-red-800 sm:text-sm">{item.fail}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Example trade walkthrough */}
      <div className="mt-5 rounded-xl border-2 border-purple-300 bg-purple-50/60 p-4">
        <h4 className="mb-3 text-sm font-bold text-purple-900 sm:text-base">Example Trade Walkthrough</h4>
        <p className="mb-3 text-sm text-slate-700">
          You&apos;re watching BTC on the 4H chart. Here&apos;s how the checklist applies:
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span className="text-sm text-slate-700"><strong>Structure:</strong> CHoCH occurred at $52K (first LL). BOS confirmed at $48K. Trend is bearish → looking for shorts.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span className="text-sm text-slate-700"><strong>OB/FVG:</strong> Bearish OB at $50K (last bullish candle before the drop). Waiting for price to return there.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span className="text-sm text-slate-700"><strong>Liquidity:</strong> Equal lows at $44K — potential target. Also equal highs at $50K where the OB sits.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span className="text-sm text-slate-700"><strong>Inducement:</strong> Price briefly spikes to $51K (above OB) then rejects. You waited for candle close — it closed below OB. Not a trap.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span className="text-sm text-slate-700"><strong>R:R:</strong> Entry at $50K, Stop at $52K (2% risk), TP at $44K (12% reward). R:R = 6:1. ✅</span>
          </div>
        </div>
        <div className="mt-3 rounded-lg bg-purple-100/50 p-3">
          <p className="text-xs text-purple-800 sm:text-sm">
            <strong>Result:</strong> All 5 checks pass → ENTER THE TRADE. If even one check fails, sit on your hands.
          </p>
        </div>
      </div>

      {/* Common mistakes */}
      <div className="mt-5 rounded-xl border-2 border-red-300 bg-red-50/60 p-4">
        <div className="mb-2 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <h4 className="text-sm font-bold text-red-800">Common SMC Mistakes</h4>
        </div>
        <ul className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
            <span><strong>Entering on CHoCH alone</strong> — CHoCH is a warning, not a signal. Wait for BOS confirmation.</span>
          </li>
          <li className="flex items-start gap-2">
            <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
            <span><strong>Placing stops at obvious levels</strong> — Equal highs/lows are liquidity pools. Your stop WILL get hunted. Place stops beyond the sweep zone.</span>
          </li>
          <li className="flex items-start gap-2">
            <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
            <span><strong>Using SMC on low timeframes only</strong> — Always start from higher timeframes (4H/1D) for structure, then drill down for entries.</span>
          </li>
          <li className="flex items-start gap-2">
            <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
            <span><strong>Forcing trades</strong> — If the checklist doesn&apos;t pass, don&apos;t trade. No trade is also a position.</span>
          </li>
        </ul>
      </div>

      <KeyTakeaway>
        The SMC Entry Checklist is your <strong>pre-trade gate</strong>. All 5 items must pass before you
        enter: Structure confirmed, OB/FVG identified, Liquidity present, Inducement avoided, R:R acceptable.
        If any item fails — walk away.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 9: SMC Trading Reference Card                         */
/* ─────────────────────────────────────────────────────────── */
function TopicSMCTradingReference() {
  const referenceHeaders = ['Concept', 'When to Use', 'Entry Trigger', 'Stop Loss', 'Take Profit Target']
  const referenceRows = [
    [
      <span key="c" className="font-semibold text-purple-700">Order Block</span>,
      <span key="w">Price returns to an OB zone after an impulsive move away</span>,
      <span key="e">Rejection candle at OB (long wick) or candle close confirming bounce</span>,
      <span key="s">Just beyond the OB extreme</span>,
      <span key="t">Next opposing OB, unfilled FVG, or liquidity pool</span>,
    ],
    [
      <span key="c2" className="font-semibold text-purple-700">FVG</span>,
      <span key="w2">Price is pulling back toward an unfilled FVG after an impulse</span>,
      <span key="e2">Price enters the FVG zone and shows a reaction (candle reversal pattern)</span>,
      <span key="s2">Beyond the FVG boundary</span>,
      <span key="t2">Opposing FVG or liquidity level in the impulse direction</span>,
    ],
    [
      <span key="c3" className="font-semibold text-purple-700">Breaker Block</span>,
      <span key="w3">An OB has been violated and price returns to the failed level</span>,
      <span key="e3">Rejection candle at the breaker zone confirming the flip</span>,
      <span key="s3">Just beyond the breaker extreme</span>,
      <span key="t3">Next liquidity pool or opposing breaker/OB</span>,
    ],
    [
      <span key="c4" className="font-semibold text-purple-700">Liquidity Sweep</span>,
      <span key="w4">Equal highs/lows exist — expect a sweep before the real move</span>,
      <span key="e4">Price sweeps beyond the equal highs/lows then reverses (candle close confirms)</span>,
      <span key="s4">Beyond the sweep extreme</span>,
      <span key="t4">Opposing liquidity pool or OB on the other side of the range</span>,
    ],
    [
      <span key="c5" className="font-semibold text-purple-700">Rejection Block</span>,
      <span key="w5">Price is at a key SMC level (OB, breaker, FVG) and forms a long wick</span>,
      <span key="e5">Long-wick candle forms at the SMC level — enter on candle close</span>,
      <span key="s5">Just beyond the wick extreme</span>,
      <span key="t5">Next SMC level in the trade direction (OB, FVG, or liquidity)</span>,
    ],
  ]

  return (
    <TopicCard id="d2-smc-trading-reference" title="SMC Quick Reference — How to Trade Each Concept" icon={<Bookmark />} variant="highlight">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        Keep this reference card handy. It summarizes <strong>when to use</strong> each SMC concept,
        your <strong>entry trigger</strong>, where to place your <strong>stop loss</strong>, and
        what to target for <strong>take profit</strong>.
      </p>

      <div className="mt-5">
        <ComparisonTable headers={referenceHeaders} rows={referenceRows} />
      </div>

      {/* Important notes */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-amber-200 bg-amber-50/40 p-4">
          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <p className="text-sm font-bold text-amber-800">Golden Rule</p>
          </div>
          <p className="text-xs text-slate-700 sm:text-sm">
            <strong>Never use just one concept in isolation.</strong> The best trades have 2-3 SMC concepts
            aligned. Example: Liquidity sweep + Order Block rejection + FVG target = highest probability.
          </p>
        </div>
        <div className="rounded-xl border-2 border-green-200 bg-green-50/40 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Eye className="h-4 w-4 text-green-600" />
            <p className="text-sm font-bold text-green-800">Pro Tip</p>
          </div>
          <p className="text-xs text-slate-700 sm:text-sm">
            <strong>Always start from higher timeframes.</strong> Mark your structure, OBs, and FVGs on
            the 4H or Daily first. Then drop to 15m/5m for precise entries. The higher TF always dominates.
          </p>
        </div>
      </div>

      <KeyTakeaway>
        This reference card is your SMC cheat sheet. Each concept tells you <strong>when</strong> to use it,
        <strong> how</strong> to enter, where to <strong>cut losses</strong>, and where to <strong>take profits</strong>.
        Print it, bookmark it, memorize it — but always combine multiple concepts for the highest-probability trades.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 10: SMC Concept Integration                           */
/* ─────────────────────────────────────────────────────────── */
function TopicSMCIntegration() {
  return (
    <TopicCard id="d2-smc-integration" title="Putting SMC Concepts Together" icon={<Zap />} variant="highlight">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        The real power of SMC comes from combining these concepts. Here&apos;s how they work together:
      </p>

      <div className="space-y-4">
        <div className="rounded-xl border-2 border-amber-200 bg-amber-50/40 p-4">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">1</span>
            <div>
              <p className="text-sm font-bold text-slate-900">Structure First (BOS/CHoCH)</p>
              <p className="mt-1 text-sm text-slate-700">Determine the trend using market structure. CHoCH warns of a potential change. BOS confirms it. Only trade in the direction of the confirmed structure.</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-green-200 bg-green-50/40 p-4">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">2</span>
            <div>
              <p className="text-sm font-bold text-slate-900">Find Order Blocks for Entry Zones</p>
              <p className="mt-1 text-sm text-slate-700">Once you know the trend direction, find order blocks that align. In an uptrend, look for bullish order blocks below price. In a downtrend, look for bearish order blocks above price.</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-purple-200 bg-purple-50/40 p-4">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">3</span>
            <div>
              <p className="text-sm font-bold text-slate-900">Mark FVGs for Price Targets</p>
              <p className="mt-1 text-sm text-slate-700">FVGs show where price is likely to return. Use unfilled FVGs as potential entry zones (if price returns to fill) or as take-profit targets (price tends to move toward unfilled gaps).</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-teal-200 bg-teal-50/40 p-4">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">4</span>
            <div>
              <p className="text-sm font-bold text-slate-900">Watch for Liquidity Sweeps</p>
              <p className="mt-1 text-sm text-slate-700">Before a major move, institutions often sweep liquidity. If you see a sweep above equal highs followed by a reversal, that&apos;s a strong signal smart money is entering in the opposite direction.</p>
            </div>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        SMC is not about using one concept in isolation. The highest-probability trades occur when
        multiple SMC concepts align: CHoCH/BOS confirms direction, Order Blocks give entry zones,
        FVGs provide targets, and Liquidity Sweeps signal institutional activity.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  MAIN EXPORT                                                       */
/* ═══════════════════════════════════════════════════════════════════ */

export function Day2LateMorningBlock() {
  return (
    <section id="d2-late-morning" aria-label="Late Morning Block - Session 2">
      <SectionDivider title="LATE MORNING BLOCK — SESSION 2: SMART MONEY CONCEPTS (SMC)" />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicBOSAndCHoCH />

        <TopicOrderBlocks />

        <TopicFVG />

        <TopicLiquiditySweeps />

        <TopicBreakerBlocks />

        <TopicInducement />

        <TopicRejectionBlocks />

        <TopicSMCEntryChecklist />

        <TopicSMCTradingReference />

        <TopicSMCIntegration />
      </div>
    </section>
  )
}
