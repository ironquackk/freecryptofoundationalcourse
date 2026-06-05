'use client'

import React from 'react'
import {
  CandlestickChart,
  Eye,
  Search,
  TrendingUp,
  TrendingDown,
  HelpCircle,
  Target,
  FlaskConical,
  Sun,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Shield,
  Zap,
  BarChart3,
  Star,
  Volume2,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

/* ─────────────────────────────────────────────────────────── */
/*  SVG Caption Wrapper                                        */
/* ─────────────────────────────────────────────────────────── */
function SvgCaption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
      {children}
    </p>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Candlestick Anatomy Diagram                           */
/* ─────────────────────────────────────────────────────────── */
function CandlestickAnatomyDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 300 340"
        className="mx-auto w-full max-w-sm"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Candlestick anatomy diagram showing Open, High, Low, Close, Body, Upper Wick, and Lower Wick"
      >
        {/* Background grid */}
        <line x1="150" y1="10" x2="150" y2="330" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4 4" />

        {/* Bullish candle (green) */}
        {/* Upper wick */}
        <line x1="90" y1="40" x2="90" y2="100" stroke="#22c55e" strokeWidth="3" />
        {/* Body */}
        <rect x="60" y="100" width="60" height="100" rx="3" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
        {/* Lower wick */}
        <line x1="90" y1="200" x2="90" y2="280" stroke="#22c55e" strokeWidth="3" />

        {/* Bearish candle (red) */}
        {/* Upper wick */}
        <line x1="210" y1="60" x2="210" y2="120" stroke="#ef4444" strokeWidth="3" />
        {/* Body */}
        <rect x="180" y="120" width="60" height="90" rx="3" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
        {/* Lower wick */}
        <line x1="210" y1="210" x2="210" y2="290" stroke="#ef4444" strokeWidth="3" />

        {/* Labels for bullish candle */}
        <text x="30" y="44" textAnchor="end" fill="#16a34a" fontSize="9" fontWeight="bold">High</text>
        <line x1="34" y1="40" x2="57" y2="40" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 2" />

        <text x="30" y="104" textAnchor="end" fill="#16a34a" fontSize="9" fontWeight="bold">Open</text>
        <line x1="34" y1="100" x2="57" y2="100" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 2" />

        <text x="30" y="204" textAnchor="end" fill="#16a34a" fontSize="9" fontWeight="bold">Close</text>
        <line x1="34" y1="200" x2="57" y2="200" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 2" />

        <text x="30" y="284" textAnchor="end" fill="#16a34a" fontSize="9" fontWeight="bold">Low</text>
        <line x1="34" y1="280" x2="57" y2="280" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 2" />

        {/* Labels for bearish candle */}
        <text x="270" y="64" textAnchor="start" fill="#dc2626" fontSize="9" fontWeight="bold">High</text>
        <line x1="243" y1="60" x2="266" y2="60" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />

        <text x="270" y="124" textAnchor="start" fill="#dc2626" fontSize="9" fontWeight="bold">Open</text>
        <line x1="243" y1="120" x2="266" y2="120" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />

        <text x="270" y="214" textAnchor="start" fill="#dc2626" fontSize="9" fontWeight="bold">Close</text>
        <line x1="243" y1="210" x2="266" y2="210" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />

        <text x="270" y="294" textAnchor="start" fill="#dc2626" fontSize="9" fontWeight="bold">Low</text>
        <line x1="243" y1="290" x2="266" y2="290" stroke="#dc2626" strokeWidth="1" strokeDasharray="3 2" />

        {/* Component labels with bracket indicators */}
        {/* Upper Wick label - bullish */}
        <rect x="100" y="62" width="40" height="16" rx="2" fill="#22c55e" opacity="0.15" />
        <text x="120" y="74" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">Upper</text>
        <text x="120" y="82" textAnchor="middle" fill="#16a34a" fontSize="7">Wick</text>

        {/* Body label - bullish */}
        <text x="90" y="156" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Body</text>

        {/* Lower Wick label - bullish */}
        <rect x="100" y="232" width="40" height="16" rx="2" fill="#22c55e" opacity="0.15" />
        <text x="120" y="244" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">Lower</text>
        <text x="120" y="252" textAnchor="middle" fill="#16a34a" fontSize="7">Wick</text>

        {/* Upper Wick label - bearish */}
        <rect x="160" y="82" width="40" height="16" rx="2" fill="#ef4444" opacity="0.15" />
        <text x="180" y="94" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">Upper</text>
        <text x="180" y="102" textAnchor="middle" fill="#dc2626" fontSize="7">Wick</text>

        {/* Body label - bearish */}
        <text x="210" y="170" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">Body</text>

        {/* Lower Wick label - bearish */}
        <rect x="160" y="242" width="40" height="16" rx="2" fill="#ef4444" opacity="0.15" />
        <text x="180" y="254" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">Lower</text>
        <text x="180" y="262" textAnchor="middle" fill="#dc2626" fontSize="7">Wick</text>

        {/* Title labels */}
        <text x="90" y="24" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">BULLISH</text>
        <text x="210" y="24" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">BEARISH</text>

        {/* Bottom note */}
        <text x="150" y="320" textAnchor="middle" fill="#64748b" fontSize="8">
          Green: Close &gt; Open (buyers won) | Red: Close &lt; Open (sellers won)
        </text>
      </svg>
      <SvgCaption>Candlestick anatomy — every part tells a story</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Hammer Candle                                         */
/* ─────────────────────────────────────────────────────────── */
function HammerDiagram() {
  return (
    <div className="my-3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 160 200"
        className="mx-auto w-full max-w-[180px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Hammer candlestick pattern diagram"
      >
        {/* Support line */}
        <line x1="10" y1="170" x2="150" y2="170" stroke="#16a34a" strokeWidth="2" strokeDasharray="6 3" />
        <text x="80" y="186" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">Support</text>

        {/* Hammer candle */}
        {/* Small body on top */}
        <rect x="60" y="60" width="40" height="25" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
        {/* Long lower wick (2x+ body) */}
        <line x1="80" y1="85" x2="80" y2="168" stroke="#22c55e" strokeWidth="3" />
        {/* No or very short upper wick */}
        <line x1="80" y1="55" x2="80" y2="60" stroke="#22c55e" strokeWidth="3" />

        {/* Labels */}
        <text x="115" y="76" fill="#16a34a" fontSize="8" fontWeight="bold">Small body</text>
        <line x1="100" y1="73" x2="113" y2="73" stroke="#16a34a" strokeWidth="0.8" strokeDasharray="2 2" />
        <text x="110" y="130" fill="#16a34a" fontSize="8" fontWeight="bold">Long lower</text>
        <text x="110" y="140" fill="#16a34a" fontSize="8" fontWeight="bold">wick (2x+)</text>
        <line x1="83" y1="130" x2="108" y2="130" stroke="#16a34a" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Pattern name */}
        <rect x="40" y="10" width="80" height="24" rx="4" fill="#16a34a" />
        <text x="80" y="27" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">HAMMER</text>
      </svg>
      <SvgCaption>Hammer — sellers pushed, buyers fought back</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Bullish Engulfing                                     */
/* ─────────────────────────────────────────────────────────── */
function BullishEngulfingDiagram() {
  return (
    <div className="my-3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 200 200"
        className="mx-auto w-full max-w-[220px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Bullish Engulfing candlestick pattern diagram"
      >
        {/* Support line */}
        <line x1="10" y1="170" x2="190" y2="170" stroke="#16a34a" strokeWidth="2" strokeDasharray="6 3" />
        <text x="100" y="186" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">Support</text>

        {/* Small red candle (candle 1) */}
        <rect x="40" y="80" width="35" height="50" rx="2" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="57" y1="70" x2="57" y2="80" stroke="#ef4444" strokeWidth="2" />
        <line x1="57" y1="130" x2="57" y2="145" stroke="#ef4444" strokeWidth="2" />

        {/* Larger green candle (candle 2) that engulfs */}
        <line x1="120" y1="60" x2="120" y2="68" stroke="#22c55e" strokeWidth="2" />
        <rect x="100" y="68" width="40" height="85" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="120" y1="153" x2="120" y2="165" stroke="#22c55e" strokeWidth="2" />

        {/* Engulfing indicator arrows */}
        <line x1="93" y1="68" x2="88" y2="68" stroke="#16a34a" strokeWidth="1.5" />
        <polygon points="88,65 83,68 88,71" fill="#16a34a" />
        <line x1="93" y1="153" x2="88" y2="153" stroke="#16a34a" strokeWidth="1.5" />
        <polygon points="88,150 83,153 88,156" fill="#16a34a" />

        {/* Labels */}
        <text x="57" y="55" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">Small red</text>
        <text x="120" y="50" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">Larger green</text>
        <text x="120" y="60" textAnchor="middle" fill="#16a34a" fontSize="7">(engulfs)</text>

        {/* Pattern name */}
        <rect x="25" y="10" width="150" height="24" rx="4" fill="#16a34a" />
        <text x="100" y="27" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">BULLISH ENGULFING</text>
      </svg>
      <SvgCaption>Bullish Engulfing — buyers overwhelmed the sellers</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Morning Star                                          */
/* ─────────────────────────────────────────────────────────── */
function MorningStarDiagram() {
  return (
    <div className="my-3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 260 200"
        className="mx-auto w-full max-w-[280px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Morning Star candlestick pattern diagram"
      >
        {/* Support line */}
        <line x1="10" y1="170" x2="250" y2="170" stroke="#16a34a" strokeWidth="2" strokeDasharray="6 3" />
        <text x="130" y="186" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">Support</text>

        {/* Candle 1: Large red */}
        <line x1="50" y1="40" x2="50" y2="50" stroke="#ef4444" strokeWidth="2" />
        <rect x="33" y="50" width="34" height="90" rx="2" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="50" y1="140" x2="50" y2="160" stroke="#ef4444" strokeWidth="2" />
        <text x="50" y="30" textAnchor="middle" fill="#dc2626" fontSize="7" fontWeight="bold">Strong selling</text>

        {/* Candle 2: Small body (indecision) */}
        <line x1="130" y1="110" x2="130" y2="118" stroke="#94a3b8" strokeWidth="2" />
        <rect x="118" y="118" width="24" height="20" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="130" y1="138" x2="130" y2="150" stroke="#94a3b8" strokeWidth="2" />
        <text x="130" y="106" textAnchor="middle" fill="#64748b" fontSize="7" fontWeight="bold">Indecision</text>

        {/* Candle 3: Large green */}
        <line x1="210" y1="40" x2="210" y2="55" stroke="#22c55e" strokeWidth="2" />
        <rect x="193" y="55" width="34" height="90" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="210" y1="145" x2="210" y2="162" stroke="#22c55e" strokeWidth="2" />
        <text x="210" y="35" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold">Strong buying</text>

        {/* Arrow flow */}
        <polygon points="80,95 88,90 88,100" fill="#64748b" />
        <line x1="88" y1="95" x2="105" y2="95" stroke="#64748b" strokeWidth="1.5" />
        <polygon points="160,95 168,90 168,100" fill="#64748b" />
        <line x1="168" y1="95" x2="185" y2="95" stroke="#64748b" strokeWidth="1.5" />

        {/* Pattern name */}
        <rect x="60" y="10" width="140" height="18" rx="4" fill="#16a34a" />
        <text x="130" y="23" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">MORNING STAR</text>
      </svg>
      <SvgCaption>Morning Star — strong selling, then indecision, then strong buying</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Piercing Line                                         */
/* ─────────────────────────────────────────────────────────── */
function PiercingLineDiagram() {
  return (
    <div className="my-3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 200 200"
        className="mx-auto w-full max-w-[220px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Piercing Line candlestick pattern diagram"
      >
        {/* Support line */}
        <line x1="10" y1="170" x2="190" y2="170" stroke="#16a34a" strokeWidth="2" strokeDasharray="6 3" />
        <text x="100" y="186" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">Support</text>

        {/* Candle 1: Red candle */}
        <line x1="57" y1="50" x2="57" y2="60" stroke="#ef4444" strokeWidth="2" />
        <rect x="40" y="60" width="34" height="70" rx="2" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="57" y1="130" x2="57" y2="150" stroke="#ef4444" strokeWidth="2" />

        {/* Candle 2: Green candle opening below red's low, closing above midpoint */}
        <line x1="143" y1="40" x2="143" y2="50" stroke="#22c55e" strokeWidth="2" />
        <rect x="126" y="50" width="34" height="75" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="143" y1="125" x2="143" y2="155" stroke="#22c55e" strokeWidth="2" />

        {/* Midpoint line of red candle */}
        <line x1="35" y1="95" x2="95" y2="95" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="98" y="99" fill="#8b5cf6" fontSize="7" fontWeight="bold">Midpoint</text>

        {/* Opens below indicator */}
        <text x="143" y="165" textAnchor="middle" fill="#16a34a" fontSize="7">Opens below</text>

        {/* Closes above midpoint indicator */}
        <line x1="165" y1="95" x2="175" y2="95" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="2 2" />

        {/* Pattern name */}
        <rect x="20" y="10" width="160" height="24" rx="4" fill="#16a34a" />
        <text x="100" y="27" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">PIERCING LINE</text>
      </svg>
      <SvgCaption>Piercing Line — buyers counter-attacked past the midpoint</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Shooting Star                                         */
/* ─────────────────────────────────────────────────────────── */
function ShootingStarDiagram() {
  return (
    <div className="my-3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 160 200"
        className="mx-auto w-full max-w-[180px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Shooting Star candlestick pattern diagram"
      >
        {/* Resistance line */}
        <line x1="10" y1="40" x2="150" y2="40" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 3" />
        <text x="80" y="30" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">Resistance</text>

        {/* Shooting Star candle */}
        {/* Long upper wick */}
        <line x1="80" y1="42" x2="80" y2="130" stroke="#ef4444" strokeWidth="3" />
        {/* Small body at bottom */}
        <rect x="60" y="130" width="40" height="25" rx="2" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
        {/* No or very short lower wick */}
        <line x1="80" y1="155" x2="80" y2="165" stroke="#ef4444" strokeWidth="3" />

        {/* Labels */}
        <text x="110" y="90" fill="#dc2626" fontSize="8" fontWeight="bold">Long upper</text>
        <text x="110" y="100" fill="#dc2626" fontSize="8" fontWeight="bold">wick (2x+)</text>
        <line x1="83" y1="90" x2="108" y2="90" stroke="#dc2626" strokeWidth="0.8" strokeDasharray="2 2" />
        <text x="110" y="146" fill="#dc2626" fontSize="8" fontWeight="bold">Small body</text>
        <line x1="100" y1="143" x2="108" y2="143" stroke="#dc2626" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Pattern name */}
        <rect x="15" y="170" width="130" height="24" rx="4" fill="#dc2626" />
        <text x="80" y="187" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">SHOOTING STAR</text>
      </svg>
      <SvgCaption>Shooting Star — buyers pushed, sellers fought back</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Bearish Engulfing                                     */
/* ─────────────────────────────────────────────────────────── */
function BearishEngulfingDiagram() {
  return (
    <div className="my-3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 200 200"
        className="mx-auto w-full max-w-[220px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Bearish Engulfing candlestick pattern diagram"
      >
        {/* Resistance line */}
        <line x1="10" y1="40" x2="190" y2="40" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 3" />
        <text x="100" y="30" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">Resistance</text>

        {/* Small green candle (candle 1) */}
        <line x1="57" y1="55" x2="57" y2="68" stroke="#22c55e" strokeWidth="2" />
        <rect x="40" y="68" width="34" height="45" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="57" y1="113" x2="57" y2="130" stroke="#22c55e" strokeWidth="2" />

        {/* Larger red candle (candle 2) that engulfs */}
        <line x1="143" y1="45" x2="143" y2="55" stroke="#ef4444" strokeWidth="2" />
        <rect x="123" y="55" width="40" height="85" rx="2" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="143" y1="140" x2="143" y2="160" stroke="#ef4444" strokeWidth="2" />

        {/* Engulfing indicator arrows */}
        <line x1="116" y1="55" x2="111" y2="55" stroke="#dc2626" strokeWidth="1.5" />
        <polygon points="111,52 106,55 111,58" fill="#dc2626" />
        <line x1="116" y1="140" x2="111" y2="140" stroke="#dc2626" strokeWidth="1.5" />
        <polygon points="111,137 106,140 111,143" fill="#dc2626" />

        {/* Labels */}
        <text x="57" y="50" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">Small green</text>
        <text x="143" y="170" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">Larger red (engulfs)</text>

        {/* Pattern name */}
        <rect x="20" y="170" width="160" height="24" rx="4" fill="#dc2626" />
        <text x="100" y="187" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">BEARISH ENGULFING</text>
      </svg>
      <SvgCaption>Bearish Engulfing — sellers overwhelmed the buyers</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Evening Star                                          */
/* ─────────────────────────────────────────────────────────── */
function EveningStarDiagram() {
  return (
    <div className="my-3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 260 200"
        className="mx-auto w-full max-w-[280px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Evening Star candlestick pattern diagram"
      >
        {/* Resistance line */}
        <line x1="10" y1="40" x2="250" y2="40" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 3" />
        <text x="130" y="30" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">Resistance</text>

        {/* Candle 1: Large green */}
        <line x1="50" y1="45" x2="50" y2="60" stroke="#22c55e" strokeWidth="2" />
        <rect x="33" y="60" width="34" height="85" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="50" y1="145" x2="50" y2="160" stroke="#22c55e" strokeWidth="2" />
        <text x="50" y="174" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold">Strong buying</text>

        {/* Candle 2: Small body (indecision) */}
        <line x1="130" y1="60" x2="130" y2="70" stroke="#94a3b8" strokeWidth="2" />
        <rect x="118" y="70" width="24" height="20" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="130" y1="90" x2="130" y2="105" stroke="#94a3b8" strokeWidth="2" />
        <text x="130" y="118" textAnchor="middle" fill="#64748b" fontSize="7" fontWeight="bold">Indecision</text>

        {/* Candle 3: Large red */}
        <line x1="210" y1="45" x2="210" y2="55" stroke="#ef4444" strokeWidth="2" />
        <rect x="193" y="55" width="34" height="90" rx="2" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="210" y1="145" x2="210" y2="158" stroke="#ef4444" strokeWidth="2" />
        <text x="210" y="174" textAnchor="middle" fill="#dc2626" fontSize="7" fontWeight="bold">Strong selling</text>

        {/* Arrow flow */}
        <polygon points="80,90 88,85 88,95" fill="#64748b" />
        <line x1="88" y1="90" x2="105" y2="90" stroke="#64748b" strokeWidth="1.5" />
        <polygon points="160,90 168,85 168,95" fill="#64748b" />
        <line x1="168" y1="90" x2="185" y2="90" stroke="#64748b" strokeWidth="1.5" />

        {/* Pattern name */}
        <rect x="60" y="185" width="140" height="18" rx="4" fill="#dc2626" />
        <text x="130" y="198" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">EVENING STAR</text>
      </svg>
      <SvgCaption>Evening Star — strong buying, then indecision, then strong selling</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Dark Cloud Cover                                      */
/* ─────────────────────────────────────────────────────────── */
function DarkCloudCoverDiagram() {
  return (
    <div className="my-3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 200 200"
        className="mx-auto w-full max-w-[220px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Dark Cloud Cover candlestick pattern diagram"
      >
        {/* Resistance line */}
        <line x1="10" y1="40" x2="190" y2="40" stroke="#dc2626" strokeWidth="2" strokeDasharray="6 3" />
        <text x="100" y="30" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">Resistance</text>

        {/* Candle 1: Green candle */}
        <line x1="57" y1="45" x2="57" y2="55" stroke="#22c55e" strokeWidth="2" />
        <rect x="40" y="55" width="34" height="70" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="57" y1="125" x2="57" y2="145" stroke="#22c55e" strokeWidth="2" />

        {/* Candle 2: Red candle opening above green's high, closing below midpoint */}
        <line x1="143" y1="38" x2="143" y2="50" stroke="#ef4444" strokeWidth="2" />
        <rect x="126" y="50" width="34" height="70" rx="2" fill="#ef4444" stroke="#dc2626" strokeWidth="1.5" />
        <line x1="143" y1="120" x2="143" y2="145" stroke="#ef4444" strokeWidth="2" />

        {/* Midpoint line of green candle */}
        <line x1="35" y1="90" x2="95" y2="90" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="98" y="94" fill="#8b5cf6" fontSize="7" fontWeight="bold">Midpoint</text>

        {/* Opens above indicator */}
        <text x="143" y="160" textAnchor="middle" fill="#dc2626" fontSize="7">Opens above</text>

        {/* Closes below midpoint indicator */}
        <line x1="165" y1="90" x2="175" y2="90" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="2 2" />

        {/* Pattern name */}
        <rect x="15" y="165" width="170" height="24" rx="4" fill="#dc2626" />
        <text x="100" y="182" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">DARK CLOUD COVER</text>
      </svg>
      <SvgCaption>Dark Cloud Cover — sellers counter-attacked past the midpoint</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Doji Types                                            */
/* ─────────────────────────────────────────────────────────── */
function DojiTypesDiagram() {
  return (
    <div className="my-3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 400 200"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Four types of Doji candlestick patterns"
      >
        {/* Standard Doji */}
        <line x1="50" y1="50" x2="50" y2="150" stroke="#94a3b8" strokeWidth="3" />
        <line x1="35" y1="100" x2="65" y2="100" stroke="#94a3b8" strokeWidth="4" />
        <text x="50" y="175" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="bold">Standard</text>
        <text x="50" y="188" textAnchor="middle" fill="#475569" fontSize="8">Doji</text>

        {/* Dragonfly Doji */}
        <line x1="150" y1="60" x2="150" y2="150" stroke="#94a3b8" strokeWidth="3" />
        <line x1="135" y1="60" x2="165" y2="60" stroke="#94a3b8" strokeWidth="4" />
        <text x="150" y="175" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="bold">Dragonfly</text>
        <text x="150" y="188" textAnchor="middle" fill="#475569" fontSize="8">Doji</text>

        {/* Gravestone Doji */}
        <line x1="250" y1="50" x2="250" y2="140" stroke="#94a3b8" strokeWidth="3" />
        <line x1="235" y1="140" x2="265" y2="140" stroke="#94a3b8" strokeWidth="4" />
        <text x="250" y="175" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="bold">Gravestone</text>
        <text x="250" y="188" textAnchor="middle" fill="#475569" fontSize="8">Doji</text>

        {/* Four-Price Doji */}
        <line x1="350" y1="100" x2="350" y2="100" stroke="#94a3b8" strokeWidth="4" />
        <text x="350" y="175" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="bold">Four-Price</text>
        <text x="350" y="188" textAnchor="middle" fill="#475569" fontSize="8">Doji</text>
        {/* Highlight the single line */}
        <line x1="330" y1="100" x2="370" y2="100" stroke="#94a3b8" strokeWidth="4" />

        {/* Top label */}
        <text x="200" y="25" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">4 TYPES OF DOJI</text>
        <text x="200" y="38" textAnchor="middle" fill="#64748b" fontSize="8">Open = Close in all cases</text>
      </svg>
      <SvgCaption>Four Doji types — all show open equals close (complete indecision)</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Spinning Top                                          */
/* ─────────────────────────────────────────────────────────── */
function SpinningTopDiagram() {
  return (
    <div className="my-3 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 120 160"
        className="mx-auto w-full max-w-[140px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Spinning Top candlestick pattern diagram"
      >
        {/* Spinning Top candle */}
        <line x1="60" y1="30" x2="60" y2="55" stroke="#94a3b8" strokeWidth="3" />
        <rect x="40" y="55" width="40" height="30" rx="2" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="60" y1="85" x2="60" y2="110" stroke="#94a3b8" strokeWidth="3" />

        {/* Labels */}
        <text x="90" y="42" fill="#64748b" fontSize="7" fontWeight="bold">Upper</text>
        <text x="90" y="50" fill="#64748b" fontSize="7" fontWeight="bold">wick</text>
        <line x1="80" y1="42" x2="88" y2="42" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2 2" />

        <text x="90" y="73" fill="#64748b" fontSize="7" fontWeight="bold">Small</text>
        <text x="90" y="81" fill="#64748b" fontSize="7" fontWeight="bold">body</text>

        <text x="90" y="100" fill="#64748b" fontSize="7" fontWeight="bold">Lower</text>
        <text x="90" y="108" fill="#64748b" fontSize="7" fontWeight="bold">wick</text>
        <line x1="80" y1="100" x2="88" y2="100" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Pattern name */}
        <rect x="15" y="125" width="90" height="20" rx="4" fill="#64748b" />
        <text x="60" y="139" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">SPINNING TOP</text>
      </svg>
      <SvgCaption>Spinning Top — small body, wicks both sides, indecision</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: High Probability vs Low Probability Comparison        */
/* ─────────────────────────────────────────────────────────── */
function ProbabilityComparisonDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        {/* HIGH PROBABILITY */}
        <div className="flex-1 rounded-lg border-2 border-green-300 bg-green-50/50 p-3">
          <p className="mb-2 text-center text-sm font-bold text-green-700">HIGH PROBABILITY</p>
          <svg
            viewBox="0 0 240 180"
            className="mx-auto w-full max-w-[240px]"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Bullish Engulfing at support with volume spike and RSI oversold - high probability setup"
          >
            {/* Grid */}
            <line x1="0" y1="40" x2="240" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="80" x2="240" y2="80" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="120" x2="240" y2="120" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="160" x2="240" y2="160" stroke="#e2e8f0" strokeWidth="0.5" />

            {/* Support line */}
            <line x1="10" y1="140" x2="230" y2="140" stroke="#16a34a" strokeWidth="2" strokeDasharray="6 3" />
            <text x="225" y="136" textAnchor="end" fill="#16a34a" fontSize="8" fontWeight="bold">S</text>

            {/* Downtrend candles approaching support */}
            <rect x="20" y="50" width="14" height="30" rx="1" fill="#ef4444" />
            <line x1="27" y1="45" x2="27" y2="50" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="27" y1="80" x2="27" y2="90" stroke="#ef4444" strokeWidth="1.5" />

            <rect x="45" y="65" width="14" height="25" rx="1" fill="#ef4444" />
            <line x1="52" y1="58" x2="52" y2="65" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="52" y1="90" x2="52" y2="105" stroke="#ef4444" strokeWidth="1.5" />

            <rect x="70" y="85" width="14" height="25" rx="1" fill="#ef4444" />
            <line x1="77" y1="80" x2="77" y2="85" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="77" y1="110" x2="77" y2="125" stroke="#ef4444" strokeWidth="1.5" />

            {/* Small red candle */}
            <rect x="100" y="110" width="14" height="18" rx="1" fill="#ef4444" />
            <line x1="107" y1="105" x2="107" y2="110" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="107" y1="128" x2="107" y2="138" stroke="#ef4444" strokeWidth="1.5" />

            {/* Bullish Engulfing (large green) */}
            <line x1="135" y1="80" x2="135" y2="90" stroke="#22c55e" strokeWidth="1.5" />
            <rect x="122" y="90" width="26" height="45" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
            <line x1="135" y1="135" x2="135" y2="142" stroke="#22c55e" strokeWidth="1.5" />

            {/* Engulfing label */}
            <text x="135" y="76" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold">Bullish Engulfing</text>

            {/* Volume bars (spike on engulfing) */}
            <rect x="22" y="158" width="10" height="8" fill="#94a3b8" opacity="0.5" />
            <rect x="47" y="156" width="10" height="10" fill="#94a3b8" opacity="0.5" />
            <rect x="72" y="157" width="10" height="9" fill="#94a3b8" opacity="0.5" />
            <rect x="102" y="155" width="10" height="11" fill="#94a3b8" opacity="0.5" />
            <rect x="127" y="148" width="10" height="18" fill="#22c55e" opacity="0.8" />
            <text x="132" y="146" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold">VOL!</text>

            {/* RSI indicator at bottom */}
            <line x1="10" y1="175" x2="230" y2="175" stroke="#e2e8f0" strokeWidth="0.5" />
            <text x="15" y="175" fill="#8b5cf6" fontSize="7" fontWeight="bold">RSI: 25</text>
            <text x="65" y="175" fill="#8b5cf6" fontSize="6">Oversold</text>

            {/* Check marks */}
            <text x="210" y="48" fill="#16a34a" fontSize="9" fontWeight="bold">At S/R</text>
            <text x="205" y="155" fill="#16a34a" fontSize="9" fontWeight="bold">Vol Spike</text>
          </svg>
        </div>

        {/* LOW PROBABILITY */}
        <div className="flex-1 rounded-lg border-2 border-red-300 bg-red-50/50 p-3">
          <p className="mb-2 text-center text-sm font-bold text-red-700">LOW PROBABILITY — SKIP</p>
          <svg
            viewBox="0 0 240 180"
            className="mx-auto w-full max-w-[240px]"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Bullish Engulfing in middle of range without confirmations - low probability setup"
          >
            {/* Grid */}
            <line x1="0" y1="40" x2="240" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="80" x2="240" y2="80" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="120" x2="240" y2="120" stroke="#e2e8f0" strokeWidth="0.5" />
            <line x1="0" y1="160" x2="240" y2="160" stroke="#e2e8f0" strokeWidth="0.5" />

            {/* Some candles in middle of range */}
            <rect x="20" y="70" width="14" height="25" rx="1" fill="#22c55e" />
            <line x1="27" y1="62" x2="27" y2="70" stroke="#22c55e" strokeWidth="1.5" />
            <line x1="27" y1="95" x2="27" y2="105" stroke="#22c55e" strokeWidth="1.5" />

            <rect x="45" y="55" width="14" height="20" rx="1" fill="#22c55e" />
            <line x1="52" y1="50" x2="52" y2="55" stroke="#22c55e" strokeWidth="1.5" />
            <line x1="52" y1="75" x2="52" y2="85" stroke="#22c55e" strokeWidth="1.5" />

            <rect x="70" y="75" width="14" height="20" rx="1" fill="#ef4444" />
            <line x1="77" y1="68" x2="77" y2="75" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="77" y1="95" x2="77" y2="108" stroke="#ef4444" strokeWidth="1.5" />

            {/* Small red candle */}
            <rect x="100" y="80" width="14" height="15" rx="1" fill="#ef4444" />
            <line x1="107" y1="75" x2="107" y2="80" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="107" y1="95" x2="107" y2="105" stroke="#ef4444" strokeWidth="1.5" />

            {/* Bullish Engulfing (large green) - but in middle of range */}
            <line x1="135" y1="60" x2="135" y2="68" stroke="#22c55e" strokeWidth="1.5" />
            <rect x="122" y="68" width="26" height="30" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
            <line x1="135" y1="98" x2="135" y2="110" stroke="#22c55e" strokeWidth="1.5" />

            {/* Engulfing label */}
            <text x="135" y="56" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold">Bullish Engulfing</text>

            {/* Question marks - no S/R nearby */}
            <text x="200" y="90" fill="#dc2626" fontSize="14" fontWeight="bold">?</text>
            <text x="212" y="90" fill="#dc2626" fontSize="14" fontWeight="bold">?</text>
            <text x="195" y="105" fill="#dc2626" fontSize="7">No S/R here</text>

            {/* Volume bars (normal - no spike) */}
            <rect x="22" y="158" width="10" height="8" fill="#94a3b8" opacity="0.5" />
            <rect x="47" y="158" width="10" height="8" fill="#94a3b8" opacity="0.5" />
            <rect x="72" y="158" width="10" height="8" fill="#94a3b8" opacity="0.5" />
            <rect x="102" y="158" width="10" height="8" fill="#94a3b8" opacity="0.5" />
            <rect x="127" y="157" width="10" height="9" fill="#94a3b8" opacity="0.4" />
            <text x="132" y="152" textAnchor="middle" fill="#94a3b8" fontSize="7">Low vol</text>

            {/* RSI indicator at bottom */}
            <line x1="10" y1="175" x2="230" y2="175" stroke="#e2e8f0" strokeWidth="0.5" />
            <text x="15" y="175" fill="#94a3b8" fontSize="7">RSI: 52</text>
            <text x="55" y="175" fill="#94a3b8" fontSize="6">Neutral</text>

            {/* X marks */}
            <text x="200" y="152" fill="#dc2626" fontSize="7" fontWeight="bold">No confirm</text>
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  Pattern Card Sub-Component for Bullish/Bearish Patterns    */
/* ─────────────────────────────────────────────────────────── */
interface PatternCardProps {
  name: string
  psychology: string
  reliability: string
  reliabilityColor: string
  borderColor: string
  bgColor: string
  children: React.ReactNode
}

function PatternCard({ name, psychology, reliability, reliabilityColor, borderColor, bgColor, children }: PatternCardProps) {
  return (
    <div className={`rounded-xl border-2 ${borderColor} ${bgColor} p-4 sm:p-5`}>
      <h4 className="mb-3 text-base font-bold text-slate-900 sm:text-lg">{name}</h4>
      <div className="flex justify-center">{children}</div>
      <div className="mt-4 space-y-2">
        <div className="flex items-start gap-2">
          <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Psychology</p>
            <p className="text-sm text-slate-700">{psychology}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Reliability</p>
            <p className={`text-sm font-semibold ${reliabilityColor}`}>{reliability}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 1: Why Candlesticks Matter                           */
/* ─────────────────────────────────────────────────────────── */
function TopicWhyCandlesticksMatter() {
  return (
    <TopicCard
      id="d3-why-candlesticks"
      title="Why Candlesticks Matter — The Language of Price"
      icon={<CandlestickChart />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        Candlesticks are the most widely used charting method in the world. Every single professional
        trader reads candlesticks. They are the <strong>alphabet of price action</strong> — once you learn
        to read them, the chart starts telling you a story.
      </p>

      <div className="space-y-3">
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">1</span>
          <p className="text-sm text-slate-700">
            <strong>Candlesticks show the battle between buyers and sellers</strong> in a single visual —
            who won, who lost, and by how much.
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">2</span>
          <p className="text-sm text-slate-700">
            <strong>Patterns form at key levels</strong> and signal potential reversals or continuations —
            giving you early warning of trend changes.
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">3</span>
          <p className="text-sm text-slate-700">
            <strong>They compress more information</strong> than line charts — open, high, low, close all
            visible at a glance.
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">4</span>
          <p className="text-sm text-slate-700">
            <strong>Patterns at support/resistance are 5-10x more reliable</strong> than patterns in the
            middle of a range. Context is everything.
          </p>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
          <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">5</span>
          <p className="text-sm text-slate-700">
            <strong>Candlesticks are universal</strong> — they work on every timeframe, every asset class,
            every market. Learn once, use forever.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-start gap-2">
          <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Day 2 Connection</p>
            <p className="mt-1 text-sm font-semibold text-amber-800">
              WHERE a pattern appears matters more than WHAT the pattern is.
              A Hammer at support is powerful. A Hammer in the middle of a range is just noise.
              This is why you learned support and resistance first.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 2: Candlestick Anatomy                               */
/* ─────────────────────────────────────────────────────────── */
function TopicCandlestickAnatomy() {
  return (
    <TopicCard
      id="d3-candlestick-anatomy"
      title="Candlestick Anatomy — Every Part Has Meaning"
      icon={<Eye />}
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        Before you can read patterns, you need to understand the individual candle. Every part —
        the body, the wicks, their size — tells you something about what happened during that time period.
      </p>

      <CandlestickAnatomyDiagram />

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-4 w-4 rounded bg-green-500" />
            <h4 className="text-sm font-bold text-green-800">Green Candle = Buyers Won</h4>
          </div>
          <p className="text-sm text-green-700">
            <strong>Close is higher than Open.</strong> Price started at the bottom of the body
            and ended at the top. Buyers controlled the session.
          </p>
        </div>
        <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-4 w-4 rounded bg-red-500" />
            <h4 className="text-sm font-bold text-red-800">Red Candle = Sellers Won</h4>
          </div>
          <p className="text-sm text-red-700">
            <strong>Close is lower than Open.</strong> Price started at the top of the body
            and ended at the bottom. Sellers controlled the session.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h4 className="mb-2 text-sm font-bold text-slate-900">Upper Wick = Rejection of Higher Prices</h4>
          <p className="text-sm text-slate-600">
            A <strong>long upper wick</strong> means price pushed high but was rejected. Sellers stepped in
            and pushed it back down. This is bearish signal at resistance.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h4 className="mb-2 text-sm font-bold text-slate-900">Lower Wick = Rejection of Lower Prices</h4>
          <p className="text-sm text-slate-600">
            A <strong>long lower wick</strong> means price was pushed low but was rejected. Buyers stepped in
            and pushed it back up. This is bullish signal at support.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="mb-3 text-sm font-bold text-slate-900 sm:text-base">Candlestick Component Size Guide</h4>
        <ComparisonTable
          headers={['Component', 'Large', 'Small']}
          rows={[
            ['Body', 'Strong conviction — clear winner', 'Weak conviction / indecision'],
            ['Wicks', 'Rejection at extremes — battle occurred', 'Steady directional movement — little opposition'],
          ]}
        />
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 3: Candlestick Context                               */
/* ─────────────────────────────────────────────────────────── */
function TopicCandlestickContext() {
  return (
    <TopicCard
      id="d3-candlestick-context"
      title="How to Read Candlestick Context — Size, Position, and Sequence"
      icon={<Search />}
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        A single candle means almost nothing by itself. The same candle can be bullish or bearish
        depending on its <strong>context</strong>. Three factors determine what a candle is actually saying:
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {/* SIZE */}
        <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-amber-600" />
            <h4 className="text-base font-bold text-amber-800">SIZE</h4>
          </div>
          <p className="text-sm text-amber-700">
            The same candle shape means different things depending on its size relative to recent candles.
            A large candle = strong move. A small candle = weak move or indecision.
          </p>
          <div className="mt-2 rounded border border-amber-200 bg-white p-2">
            <p className="text-xs text-amber-800">
              <strong>Example:</strong> A big bullish candle after a series of small ones? That is a
              breakout. Same big candle after an already large move? That might be exhaustion.
            </p>
          </div>
        </div>

        {/* POSITION */}
        <div className="rounded-xl border-2 border-green-300 bg-green-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Target className="h-5 w-5 text-green-600" />
            <h4 className="text-base font-bold text-green-800">POSITION</h4>
          </div>
          <p className="text-sm text-green-700">
            Where the candle forms changes everything. A bullish pattern at support is a trading signal.
            The same pattern in the middle of a range is meaningless noise.
          </p>
          <div className="mt-2 rounded border border-green-200 bg-white p-2">
            <p className="text-xs text-green-800">
              <strong>Key insight:</strong> Patterns at support or resistance are
              <strong> 5-10x more reliable</strong> than patterns anywhere else.
            </p>
          </div>
        </div>

        {/* SEQUENCE */}
        <div className="rounded-xl border-2 border-purple-300 bg-purple-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-600" />
            <h4 className="text-base font-bold text-purple-800">SEQUENCE</h4>
          </div>
          <p className="text-sm text-purple-700">
            Candles before and after matter. Shrinking candles = momentum fading. Growing candles = momentum
            building. The sequence tells you the momentum story.
          </p>
          <div className="mt-2 rounded border border-purple-200 bg-white p-2">
            <p className="text-xs text-purple-800">
              <strong>Example:</strong> Three shrinking red candles followed by a big green one?
              That is a momentum shift — sellers are weakening.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-lg border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-50 to-amber-100/50 p-4 sm:px-6">
        <div className="flex items-start gap-3">
          <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800">
              The Golden Rule of Candlestick Reading
            </p>
            <p className="mt-1 text-sm font-semibold text-amber-700">
              A pattern at support or resistance is 5-10x more reliable. Never trade a pattern
              in isolation — always ask: &ldquo;Where is this forming? What is the context?&rdquo;
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 4: Bullish Reversal Patterns                         */
/* ─────────────────────────────────────────────────────────── */
function TopicBullishReversalPatterns() {
  return (
    <TopicCard
      id="d3-bullish-patterns"
      title="Bullish Reversal Patterns — What to Look for at SUPPORT"
      icon={<TrendingUp />}
      variant="success"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        These patterns appear at <strong className="text-green-600">support</strong> and signal that
        buyers are stepping in and the downtrend may be ending. Each pattern tells a different
        story about the battle between buyers and sellers.
      </p>

      <div className="space-y-6">
        {/* HAMMER */}
        <PatternCard
          name="Hammer"
          psychology="Sellers pushed down, buyers fought back. Support held."
          reliability="HIGH at support"
          reliabilityColor="text-green-700"
          borderColor="border-green-300"
          bgColor="bg-green-50/30"
        >
          <HammerDiagram />
        </PatternCard>

        {/* BULLISH ENGULFING */}
        <PatternCard
          name="Bullish Engulfing"
          psychology="Sellers were in control, then buyers overwhelmed them with even stronger force."
          reliability="HIGH at support, even better with volume confirmation"
          reliabilityColor="text-green-700"
          borderColor="border-green-300"
          bgColor="bg-green-50/30"
        >
          <BullishEngulfingDiagram />
        </PatternCard>

        {/* MORNING STAR */}
        <PatternCard
          name="Morning Star"
          psychology="Strong selling led to indecision, which led to strong buying — a complete shift in control."
          reliability="VERY HIGH at support"
          reliabilityColor="text-green-700"
          borderColor="border-green-300"
          bgColor="bg-green-50/30"
        >
          <MorningStarDiagram />
        </PatternCard>

        {/* PIERCING LINE */}
        <PatternCard
          name="Piercing Line"
          psychology="Sellers continued their push, then buyers counter-attacked past the midpoint — showing real determination."
          reliability="MEDIUM-HIGH at support"
          reliabilityColor="text-amber-700"
          borderColor="border-green-300"
          bgColor="bg-green-50/30"
        >
          <PiercingLineDiagram />
        </PatternCard>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 5: Bearish Reversal Patterns                         */
/* ─────────────────────────────────────────────────────────── */
function TopicBearishReversalPatterns() {
  return (
    <TopicCard
      id="d3-bearish-patterns"
      title="Bearish Reversal Patterns — What to Look for at RESISTANCE"
      icon={<TrendingDown />}
      variant="warning"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        These patterns appear at <strong className="text-red-600">resistance</strong> and signal that
        sellers are stepping in and the uptrend may be ending. Each is the mirror image of a bullish
        pattern — the psychology is inverted.
      </p>

      <div className="space-y-6">
        {/* SHOOTING STAR */}
        <PatternCard
          name="Shooting Star"
          psychology="Buyers pushed up, sellers fought back. Resistance held."
          reliability="HIGH at resistance"
          reliabilityColor="text-red-700"
          borderColor="border-red-300"
          bgColor="bg-red-50/30"
        >
          <ShootingStarDiagram />
        </PatternCard>

        {/* BEARISH ENGULFING */}
        <PatternCard
          name="Bearish Engulfing"
          psychology="Buyers were in control, then sellers overwhelmed them with even stronger force."
          reliability="HIGH at resistance, even better with volume confirmation"
          reliabilityColor="text-red-700"
          borderColor="border-red-300"
          bgColor="bg-red-50/30"
        >
          <BearishEngulfingDiagram />
        </PatternCard>

        {/* EVENING STAR */}
        <PatternCard
          name="Evening Star"
          psychology="Strong buying led to indecision, which led to strong selling — a complete shift in control."
          reliability="VERY HIGH at resistance"
          reliabilityColor="text-red-700"
          borderColor="border-red-300"
          bgColor="bg-red-50/30"
        >
          <EveningStarDiagram />
        </PatternCard>

        {/* DARK CLOUD COVER */}
        <PatternCard
          name="Dark Cloud Cover"
          psychology="Buyers continued their push, then sellers counter-attacked past the midpoint — showing real determination."
          reliability="MEDIUM-HIGH at resistance"
          reliabilityColor="text-amber-700"
          borderColor="border-red-300"
          bgColor="bg-red-50/30"
        >
          <DarkCloudCoverDiagram />
        </PatternCard>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 6: Indecision Patterns                               */
/* ─────────────────────────────────────────────────────────── */
function TopicIndecisionPatterns() {
  return (
    <TopicCard
      id="d3-indecision-patterns"
      title="Indecision Patterns — When the Market Is Thinking"
      icon={<HelpCircle />}
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        Not every candle signals a clear winner. Indecision patterns show that <strong>neither buyers
        nor sellers are in control</strong>. The key question is: what happens after the indecision?
      </p>

      {/* DOJI */}
      <div className="mb-6 rounded-xl border-2 border-slate-300 bg-slate-50 p-4 sm:p-5">
        <h4 className="mb-3 text-base font-bold text-slate-900 sm:text-lg">DOJI</h4>
        <p className="mb-4 text-sm text-slate-700">
          A Doji forms when <strong>the open and close are virtually identical</strong>. The body is
          essentially a flat line. Neither side won. Complete indecision.
        </p>

        <DojiTypesDiagram />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50 p-3">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <h5 className="text-sm font-bold text-green-800">Doji at S/R = Signal</h5>
            </div>
            <p className="text-xs text-green-700">
              A Doji at support or resistance can signal a potential reversal. The market is undecided
              at a critical level — the next candle often resolves the direction.
            </p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-3">
            <div className="flex items-center gap-2 mb-2">
              <XCircle className="h-4 w-4 text-red-600" />
              <h5 className="text-sm font-bold text-red-800">Doji in Middle = Meaningless</h5>
            </div>
            <p className="text-xs text-red-700">
              A Doji in the middle of a range tells you nothing. It is just a pause. Without a key level,
              there is no reason to act on it.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Critical Rule</p>
              <p className="text-sm font-semibold text-amber-800">
                A Doji is a WARNING signal, not an ACTION signal. Wait for the next candle to confirm
                the direction before entering a trade.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SPINNING TOP */}
      <div className="rounded-xl border-2 border-slate-300 bg-slate-50 p-4 sm:p-5">
        <h4 className="mb-3 text-base font-bold text-slate-900 sm:text-lg">SPINNING TOP</h4>
        <p className="mb-4 text-sm text-slate-700">
          A Spinning Top has a <strong>small body with wicks on both sides</strong>. It is less extreme
          than a Doji — the open and close are close but not identical. Still shows indecision, just
          less pronounced.
        </p>

        <div className="flex justify-center">
          <SpinningTopDiagram />
        </div>

        <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3">
          <p className="text-sm text-slate-600">
            <strong>Key difference from Doji:</strong> A Spinning Top shows that both sides fought
            and neither won decisively, but there was <em>some</em> movement. A Doji shows complete
            stalemate. Both require the same context — look for them at S/R levels.
          </p>
        </div>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 7: Pattern + Level Combination                       */
/* ─────────────────────────────────────────────────────────── */
function TopicPatternLevelCombination() {
  return (
    <TopicCard
      id="d3-pattern-level-combo"
      title="The Pattern + Level Combination — Where Patterns Actually Work"
      icon={<Target />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        A candlestick pattern by itself is like a traffic light without a road — it has no context.
        The <strong>same pattern can be high probability or worthless</strong> depending on where it forms
        and what confirms it.
      </p>

      <ProbabilityComparisonDiagram />

      <div className="mt-5">
        <h4 className="mb-3 text-sm font-bold text-slate-900 sm:text-base">Pattern Probability Hierarchy</h4>
        <ComparisonTable
          headers={['Scenario', 'Probability', 'Action']}
          rows={[
            [
              'Pattern at S/R + volume + indicator',
              <span key="highest" className="font-bold text-green-700">HIGHEST</span>,
              <span key="strong" className="text-green-700">Strong trade</span>,
            ],
            [
              'Pattern at S/R + one confirmation',
              <span key="good" className="font-bold text-green-600">GOOD</span>,
              <span key="caution" className="text-amber-700">Trade with caution</span>,
            ],
            [
              'Pattern at S/R, no confirmation',
              <span key="medium" className="font-bold text-amber-600">MEDIUM</span>,
              <span key="wait" className="text-amber-700">Wait for confirm</span>,
            ],
            [
              'Pattern NOT at S/R',
              <span key="low" className="font-bold text-red-600">LOW</span>,
              <span key="skip" className="text-red-700">Skip it</span>,
            ],
          ]}
        />
      </div>

      <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-start gap-2">
          <Volume2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Confirmation Checklist</p>
            <p className="mt-1 text-sm text-amber-800">
              Before trading any pattern, ask yourself: <strong>(1)</strong> Is it at a key S/R level?
              <strong> (2)</strong> Is there a volume spike confirming the move?
              <strong> (3)</strong> Does an indicator (RSI, EMA) support the direction?
              The more &ldquo;yes&rdquo; answers, the higher the probability.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 8: Practice — Pattern Hunt on BTC/USDT               */
/* ─────────────────────────────────────────────────────────── */
function TopicPracticeBTC() {
  return (
    <TopicCard
      id="d3-practice-btc"
      title="Practice — Pattern Hunt on BTC/USDT"
      icon={<FlaskConical />}
    >
      <div className="rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/40 p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
            <FlaskConical className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 sm:text-lg">Practice Lab: BTC/USDT</h4>
            <p className="text-xs font-medium text-amber-700">Open TradingView, BTC/USDT Daily chart</p>
          </div>
        </div>

        <div className="space-y-1">
          <ChecklistItem>
            Find 2 examples of each bullish pattern at support: Hammer, Bullish Engulfing, and Morning Star.
            Screenshot each one.
          </ChecklistItem>
          <ChecklistItem>
            Find 2 examples of each bearish pattern at resistance: Shooting Star, Bearish Engulfing,
            and Evening Star. Screenshot each one.
          </ChecklistItem>
          <ChecklistItem>
            Find 5 Doji candles and analyze: Where did they form? At S/R or in the middle?
            What happened after each one?
          </ChecklistItem>
          <ChecklistItem>
            Write this sentence: &ldquo;The most reliable pattern I found was ___ because ___.&rdquo;
          </ChecklistItem>
        </div>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 9: Practice — Pattern Hunt on ETH/USDT               */
/* ─────────────────────────────────────────────────────────── */
function TopicPracticeETH() {
  return (
    <TopicCard
      id="d3-practice-eth"
      title="Practice — Pattern Hunt on ETH/USDT"
      icon={<FlaskConical />}
    >
      <div className="rounded-xl border-2 border-dashed border-teal-400 bg-teal-50/40 p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100">
            <FlaskConical className="h-5 w-5 text-teal-600" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 sm:text-lg">Practice Lab: ETH/USDT</h4>
            <p className="text-xs font-medium text-teal-700">Open TradingView, ETH/USDT Daily chart</p>
          </div>
        </div>

        <div className="space-y-1">
          <ChecklistItem>
            Find 2 examples of each bullish pattern at support: Hammer, Bullish Engulfing, and Morning Star.
            How do they compare to BTC patterns?
          </ChecklistItem>
          <ChecklistItem>
            Find 2 examples of each bearish pattern at resistance: Shooting Star, Bearish Engulfing,
            and Evening Star. Were any more reliable on ETH than BTC?
          </ChecklistItem>
          <ChecklistItem>
            Find 3 Spinning Top candles. What happened after each? Did they lead to reversals
            at S/R or continuation?
          </ChecklistItem>
          <ChecklistItem>
            Compare: Which pair had cleaner, more reliable patterns — BTC or ETH? Write down why.
          </ChecklistItem>
        </div>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT: Day3MorningBlock                              */
/* ─────────────────────────────────────────────────────────── */
export function Day3MorningBlock() {
  return (
    <section id="d3-morning" aria-labelledby="d3-morning-heading">
      <h2 id="d3-morning-heading" className="sr-only">
        Day 3 Morning Block - Candlestick Reading and Patterns
      </h2>
      <SectionDivider title="MORNING BLOCK — HOURS 1–3: CANDLESTICK READING & PATTERNS" />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicWhyCandlesticksMatter />
        <TopicCandlestickAnatomy />
        <TopicCandlestickContext />
        <TopicBullishReversalPatterns />
        <TopicBearishReversalPatterns />
        <TopicIndecisionPatterns />
        <TopicPatternLevelCombination />
        <TopicPracticeBTC />
        <TopicPracticeETH />

        <KeyTakeaway>
          A candlestick pattern is only as good as its context. The golden rule: patterns at support or
          resistance are 5-10x more reliable than patterns in the middle of a range. Always combine
          your pattern reading with S/R levels, volume, and indicators for the highest probability trades.
        </KeyTakeaway>

        <AppliedLabSimulation
          id="d3-lab-1-tradingview-candlesticks"
          title="LAB 5: Candlestick Pattern Recognition"
          subtitle="Use the TradingView simulator to identify and practice reading candlestick patterns on the chart"
          dayNumber={3}
          sessionName="Morning Block"
          labType="tradingview"
          learningObjectives={[
            'Identify bullish and bearish candlestick patterns on a live chart',
            'Distinguish between reversal and continuation patterns',
            'Understand the importance of context (where the pattern forms matters more than the pattern itself)',
            'Practice reading candlestick bodies and wicks for market sentiment',
          ]}
          tasks={[
            { id: 'd3-l1-t1', instruction: 'Open the TradingView simulator and observe the candlestick chart. Identify the most recent bullish candle (green) — what does its long body tell you?', hint: 'A long green body means buyers dominated the session from open to close. The longer the body, the stronger the buying pressure.' },
            { id: 'd3-l1-t2', instruction: 'Find a candle with a long upper wick and short body. This is a potential rejection signal — what does it mean?', hint: 'A long upper wick means sellers pushed price down from the high. It shows rejection at higher prices and potential bearish reversal.' },
            { id: 'd3-l1-t3', instruction: 'Look for a Doji or spinning top candle (very small body with wicks on both sides). What does indecision look like?', hint: 'A Doji forms when open and close are nearly equal. It shows neither buyers nor sellers won — indecision often precedes a reversal.' },
            { id: 'd3-l1-t4', instruction: 'Enable EMA 20 and EMA 50. Find a bullish candlestick pattern that formed NEAR an EMA support. This is high-probability confluence.', hint: 'When a bullish pattern forms right at an EMA support, the pattern AND the indicator agree — this is much stronger than the pattern alone.' },
            { id: 'd3-l1-t5', instruction: 'Switch to the RSI indicator. Is the market overbought (RSI > 70) or oversold (RSI < 30)? Do you see any candlestick reversal patterns at these extremes?', hint: 'Bearish patterns at RSI overbought = strong sell signal. Bullish patterns at RSI oversold = strong buy signal.' },
            { id: 'd3-l1-t6', instruction: 'Write down: Which is more important — the candlestick pattern itself, or WHERE it forms on the chart?', hint: 'CONTEXT IS KING. A hammer at support is a buy signal. The same hammer in the middle of nowhere is just a candle. Always ask: "Where is this pattern forming?"' },
          ]}
          selfAssessment={[
            {
              question: 'What does a long upper wick on a candle indicate?',
              options: [
                'Buyers are in full control',
                'Sellers rejected price from higher levels during the session',
                'The market is trending upward',
                'Volume is low',
              ],
              correctIndex: 1,
              explanation: 'A long upper wick (shadow) means price reached a high during the session but sellers pushed it back down. This shows rejection at higher prices and can signal a potential bearish reversal, especially when it occurs at resistance.',
            },
            {
              question: 'Why is context more important than the candlestick pattern itself?',
              options: [
                'Because patterns never work',
                'Because the same pattern can be bullish or bearish depending on WHERE it forms',
                'Because you should only use indicators',
                'Context does not matter',
              ],
              correctIndex: 1,
              explanation: 'A hammer candle at support is a bullish reversal signal. The exact same hammer candle at resistance might mean nothing. WHERE the pattern forms (at S/R, at an EMA, at overbought/oversold) determines its significance.',
            },
          ]}
          expectedOutcomes={[
            'Ability to identify basic candlestick patterns on any chart',
            'Understanding of wick and body analysis for market sentiment',
            'Recognition that context (location) matters more than pattern shape',
            'Skill in combining candlestick patterns with EMA and RSI confluence',
          ]}
        />
      </div>
    </section>
  )
}
