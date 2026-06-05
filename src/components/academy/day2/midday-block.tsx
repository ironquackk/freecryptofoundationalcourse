'use client'

import React from 'react'
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  GitBranch,
  Pen,
  Ruler,
  Layers,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Zap,
  Target,
  FlaskConical,
  BarChart3,
  Eye,
  Activity,
  Gauge,
  ListChecks,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Clock,
  ZoomIn,
  ZoomOut,
  Split,
  CircleDot,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { StepList } from '@/components/academy/step-list'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 1: Market Structure — The Foundation of ALL Analysis
   ═══════════════════════════════════════════════════════════════════════ */

function UptrendSVG() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Grid lines */}
      <line x1="20" y1="10" x2="20" y2="105" stroke="#e2e8f0" strokeWidth="0.5" />
      <line x1="20" y1="105" x2="190" y2="105" stroke="#e2e8f0" strokeWidth="0.5" />
      <line x1="20" y1="80" x2="190" y2="80" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="4 2" />
      <line x1="20" y1="55" x2="190" y2="55" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="4 2" />
      <line x1="20" y1="30" x2="190" y2="30" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="4 2" />
      {/* Price line - uptrend */}
      <polyline
        points="30,90 50,70 65,78 85,52 100,60 120,35 135,42 155,18 170,25 185,8"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* HL labels */}
      <circle cx="65" cy="78" r="3" fill="#16a34a" />
      <text x="65" y="95" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">HL</text>
      <circle cx="100" cy="60" r="3" fill="#16a34a" />
      <text x="100" y="77" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">HL</text>
      <circle cx="135" cy="42" r="3" fill="#16a34a" />
      <text x="135" y="59" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">HL</text>
      {/* HH labels */}
      <circle cx="50" cy="70" r="3" fill="#16a34a" />
      <text x="50" y="63" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="85" cy="52" r="3" fill="#16a34a" />
      <text x="85" y="45" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="120" cy="35" r="3" fill="#16a34a" />
      <text x="120" y="28" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="155" cy="18" r="3" fill="#16a34a" />
      <text x="155" y="11" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">HH</text>
      {/* Arrow */}
      <line x1="30" y1="85" x2="175" y2="12" stroke="#16a34a" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
    </svg>
  )
}

function DowntrendSVG() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Grid lines */}
      <line x1="20" y1="10" x2="20" y2="105" stroke="#e2e8f0" strokeWidth="0.5" />
      <line x1="20" y1="105" x2="190" y2="105" stroke="#e2e8f0" strokeWidth="0.5" />
      <line x1="20" y1="80" x2="190" y2="80" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="4 2" />
      <line x1="20" y1="55" x2="190" y2="55" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="4 2" />
      <line x1="20" y1="30" x2="190" y2="30" stroke="#f1f5f9" strokeWidth="0.5" strokeDasharray="4 2" />
      {/* Price line - downtrend */}
      <polyline
        points="30,10 45,22 60,15 80,42 95,32 115,58 130,48 150,75 165,68 185,98"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* LH labels */}
      <circle cx="45" cy="22" r="3" fill="#dc2626" />
      <text x="45" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LH</text>
      <circle cx="80" cy="42" r="3" fill="#dc2626" />
      <text x="80" y="35" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LH</text>
      <circle cx="115" cy="58" r="3" fill="#dc2626" />
      <text x="115" y="51" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LH</text>
      <circle cx="150" cy="75" r="3" fill="#dc2626" />
      <text x="150" y="68" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LH</text>
      {/* LL labels */}
      <circle cx="60" cy="15" r="3" fill="#dc2626" />
      <text x="60" y="32" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LL</text>
      <circle cx="95" cy="32" r="3" fill="#dc2626" />
      <text x="95" y="49" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LL</text>
      <circle cx="130" cy="48" r="3" fill="#dc2626" />
      <text x="130" y="65" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LL</text>
      <circle cx="165" cy="68" r="3" fill="#dc2626" />
      <text x="165" y="85" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LL</text>
      {/* Arrow */}
      <line x1="30" y1="12" x2="180" y2="95" stroke="#dc2626" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
    </svg>
  )
}

function RangeSVG() {
  return (
    <svg viewBox="0 0 200 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Grid lines */}
      <line x1="20" y1="10" x2="20" y2="105" stroke="#e2e8f0" strokeWidth="0.5" />
      <line x1="20" y1="105" x2="190" y2="105" stroke="#e2e8f0" strokeWidth="0.5" />
      {/* Resistance zone */}
      <rect x="20" y="28" width="170" height="6" fill="#fef3c7" rx="1" />
      <line x1="20" y1="31" x2="190" y2="31" stroke="#d97706" strokeWidth="1" strokeDasharray="6 3" />
      <text x="195" y="34" fontSize="7" fill="#d97706" fontWeight="bold">R</text>
      {/* Support zone */}
      <rect x="20" y="80" width="170" height="6" fill="#fef3c7" rx="1" />
      <line x1="20" y1="83" x2="190" y2="83" stroke="#d97706" strokeWidth="1" strokeDasharray="6 3" />
      <text x="195" y="86" fontSize="7" fill="#d97706" fontWeight="bold">S</text>
      {/* Price line - ranging */}
      <polyline
        points="30,70 45,38 60,55 78,35 90,65 108,33 120,62 138,36 155,60 170,34 185,58"
        fill="none"
        stroke="#d97706"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Equal highs dots */}
      <circle cx="45" cy="38" r="3" fill="#d97706" />
      <circle cx="78" cy="35" r="3" fill="#d97706" />
      <circle cx="108" cy="33" r="3" fill="#d97706" />
      <circle cx="138" cy="36" r="3" fill="#d97706" />
      <circle cx="170" cy="34" r="3" fill="#d97706" />
      {/* Equal lows dots */}
      <circle cx="30" cy="70" r="3" fill="#d97706" />
      <circle cx="90" cy="65" r="3" fill="#d97706" />
      <circle cx="120" cy="62" r="3" fill="#d97706" />
      <circle cx="155" cy="60" r="3" fill="#d97706" />
      <circle cx="185" cy="58" r="3" fill="#d97706" />
    </svg>
  )
}

function MarketStructure() {
  return (
    <TopicCard
      id="d2-market-structure-trends"
      title="Market Structure — The Foundation of ALL Analysis"
      icon={<GitBranch />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        <span className="font-bold text-slate-900">Market structure</span> = the pattern of
        highs and lows that tells you the current trend direction. This is the{' '}
        <span className="font-bold text-amber-700">MOST important concept</span> in technical
        analysis. Everything else — indicators, patterns, signals — is secondary to reading
        market structure correctly.
      </p>

      <AnalogyBox title="Market Structure is Like Reading the Road">
        Before you look at your car&apos;s dashboard (indicators), you look out the windshield
        (market structure) to see if the road goes uphill, downhill, or is flat. Market
        structure tells you the direction — then you decide how to drive.
      </AnalogyBox>

      {/* Three structure types side-by-side */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {/* UPTREND */}
        <div className="rounded-xl border-2 border-green-300 bg-green-50/60 p-3 sm:p-4">
          <div className="mb-3 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-sm font-bold text-green-800 sm:text-base">UPTREND</h4>
          </div>
          <div className="mb-3 rounded-lg border border-green-200 bg-white p-2">
            <UptrendSVG />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-bold text-green-700 sm:text-sm">
              Higher Highs (HH) + Higher Lows (HL)
            </p>
            <ul className="space-y-1 text-xs text-slate-700 sm:text-sm">
              <li className="flex items-start gap-1.5">
                <ArrowUpRight className="mt-0.5 h-3 w-3 flex-shrink-0 text-green-600" />
                <span>Each peak higher, each trough higher</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-green-600">→</span>
                <span>Buyers in control</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-green-600">→</span>
                <span>Look for <strong>long (buy)</strong> opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* DOWNTREND */}
        <div className="rounded-xl border-2 border-red-300 bg-red-50/60 p-3 sm:p-4">
          <div className="mb-3 flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-red-600" />
            <h4 className="text-sm font-bold text-red-800 sm:text-base">DOWNTREND</h4>
          </div>
          <div className="mb-3 rounded-lg border border-red-200 bg-white p-2">
            <DowntrendSVG />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-bold text-red-700 sm:text-sm">
              Lower Highs (LH) + Lower Lows (LL)
            </p>
            <ul className="space-y-1 text-xs text-slate-700 sm:text-sm">
              <li className="flex items-start gap-1.5">
                <ArrowDownRight className="mt-0.5 h-3 w-3 flex-shrink-0 text-red-600" />
                <span>Each peak lower, each trough lower</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-red-600">→</span>
                <span>Sellers in control</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-red-600">→</span>
                <span>Look for <strong>short (sell)</strong> opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RANGE */}
        <div className="rounded-xl border-2 border-amber-300 bg-amber-50/60 p-3 sm:p-4">
          <div className="mb-3 flex items-center gap-2">
            <Minus className="h-5 w-5 text-amber-600" />
            <h4 className="text-sm font-bold text-amber-800 sm:text-base">RANGE</h4>
          </div>
          <div className="mb-3 rounded-lg border border-amber-200 bg-white p-2">
            <RangeSVG />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-bold text-amber-700 sm:text-sm">
              Equal Highs + Equal Lows
            </p>
            <ul className="space-y-1 text-xs text-slate-700 sm:text-sm">
              <li className="flex items-start gap-1.5">
                <Minus className="mt-0.5 h-3 w-3 flex-shrink-0 text-amber-600" />
                <span>Peaks ~same level, troughs ~same level</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-amber-600">→</span>
                <span>Neither side in control</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-amber-600">→</span>
                <span>Trade range or <strong>wait for breakout</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <KeyTakeaway>
          Before you look at ANY indicator, determine the market structure first. If
          it&apos;s making HH + HL → uptrend → look for buys. If it&apos;s making LH + LL →
          downtrend → look for sells. If it&apos;s ranging → be cautious or trade the range.
        </KeyTakeaway>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 2: Identifying Higher Highs, Higher Lows, Lower Highs, Lower Lows
   ═══════════════════════════════════════════════════════════════════════ */

function SwingPointsSVG() {
  return (
    <svg viewBox="0 0 320 150" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Axes */}
      <line x1="30" y1="10" x2="30" y2="130" stroke="#94a3b8" strokeWidth="1" />
      <line x1="30" y1="130" x2="305" y2="130" stroke="#94a3b8" strokeWidth="1" />
      <text x="15" y="20" fontSize="7" fill="#94a3b8">Price</text>
      <text x="290" y="142" fontSize="7" fill="#94a3b8">Time</text>

      {/* Uptrend price line */}
      <polyline
        points="40,110 65,85 80,95 110,65 125,78 160,42 175,55 210,22 225,38 265,12 280,25"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Swing Highs labeled H1, H2, H3 */}
      <circle cx="65" cy="85" r="4" fill="#16a34a" />
      <text x="65" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#16a34a">H1</text>

      <circle cx="110" cy="65" r="4" fill="#16a34a" />
      <text x="110" y="58" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#16a34a">H2</text>

      <circle cx="160" cy="42" r="4" fill="#16a34a" />
      <text x="160" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#16a34a">H3</text>

      <circle cx="210" cy="22" r="4" fill="#16a34a" />
      <text x="210" y="15" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#16a34a">H4</text>

      {/* Swing Lows labeled L1, L2, L3 */}
      <circle cx="80" cy="95" r="4" fill="#0d9488" />
      <text x="80" y="110" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0d9488">L1</text>

      <circle cx="125" cy="78" r="4" fill="#0d9488" />
      <text x="125" y="93" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0d9488">L2</text>

      <circle cx="175" cy="55" r="4" fill="#0d9488" />
      <text x="175" y="70" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0d9488">L3</text>

      <circle cx="225" cy="38" r="4" fill="#0d9488" />
      <text x="225" y="53" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0d9488">L4</text>

      {/* Arrows showing HH direction */}
      <line x1="67" y1="83" x2="108" y2="67" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
      <line x1="112" y1="63" x2="158" y2="44" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
      <line x1="162" y1="40" x2="208" y2="24" stroke="#16a34a" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />

      {/* Arrows showing HL direction */}
      <line x1="82" y1="93" x2="123" y2="80" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#arrowTeal)" />
      <line x1="127" y1="76" x2="173" y2="57" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#arrowTeal)" />
      <line x1="177" y1="53" x2="223" y2="40" stroke="#0d9488" strokeWidth="1.5" markerEnd="url(#arrowTeal)" />

      {/* Annotation */}
      <rect x="50" y="115" width="110" height="18" rx="4" fill="#f0fdf4" stroke="#16a34a" strokeWidth="0.5" />
      <text x="105" y="127" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">
        H1→H2→H3→H4 = HIGHER HIGHS ✓
      </text>

      <rect x="170" y="115" width="110" height="18" rx="4" fill="#f0fdfa" stroke="#0d9488" strokeWidth="0.5" />
      <text x="225" y="127" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#0d9488">
        L1→L2→L3→L4 = HIGHER LOWS ✓
      </text>

      {/* Arrow markers */}
      <defs>
        <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#16a34a" />
        </marker>
        <marker id="arrowTeal" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#0d9488" />
        </marker>
      </defs>
    </svg>
  )
}

function IdentifyingSwings() {
  return (
    <TopicCard
      id="d2-identifying-swings"
      title="Identifying Higher Highs, Higher Lows, Lower Highs, Lower Lows"
      icon={<BarChart3 />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Before you can read market structure, you need to identify <strong>swing highs</strong> and{' '}
        <strong>swing lows</strong> — the building blocks of every trend.
      </p>

      {/* Definitions */}
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
          <p className="text-sm font-bold text-green-800">Swing High</p>
          <p className="mt-1 text-sm text-slate-700">
            A peak that is <strong>higher than the candles on either side</strong> of it.
            Like a mountain peak between two valleys.
          </p>
        </div>
        <div className="rounded-lg border-l-4 border-l-teal-500 bg-teal-50 p-4">
          <p className="text-sm font-bold text-teal-800">Swing Low</p>
          <p className="mt-1 text-sm text-slate-700">
            A trough that is <strong>lower than the candles on either side</strong> of it.
            Like a valley between two hills.
          </p>
        </div>
      </div>

      {/* HH, HL, LH, LL definitions */}
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50/50 p-3">
          <ArrowUpRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <p className="text-sm font-bold text-green-800">Higher High (HH)</p>
            <p className="mt-0.5 text-sm text-slate-700">
              Current swing high is above the previous swing high. Shows buyers are pushing harder.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-teal-200 bg-teal-50/50 p-3">
          <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-600" />
          <div>
            <p className="text-sm font-bold text-teal-800">Higher Low (HL)</p>
            <p className="mt-0.5 text-sm text-slate-700">
              Current swing low is above the previous swing low. Shows sellers can&apos;t push as low.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50/50 p-3">
          <ArrowDownRight className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="text-sm font-bold text-red-800">Lower High (LH)</p>
            <p className="mt-0.5 text-sm text-slate-700">
              Current swing high is below the previous swing high. Shows buyers can&apos;t push as high.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-orange-200 bg-orange-50/50 p-3">
          <TrendingDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600" />
          <div>
            <p className="text-sm font-bold text-orange-800">Lower Low (LL)</p>
            <p className="mt-0.5 text-sm text-slate-700">
              Current swing low is below the previous swing low. Shows sellers are pushing harder.
            </p>
          </div>
        </div>
      </div>

      {/* Practice method */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="mb-2 text-sm font-bold text-slate-800">
          <Pen className="mr-1.5 inline h-4 w-4 text-amber-600" />
          Practice Method: Label &amp; Compare
        </p>
        <ol className="ml-4 list-decimal space-y-1 text-sm text-slate-700">
          <li>Label swing highs as <strong>H1, H2, H3...</strong> (left to right)</li>
          <li>Label swing lows as <strong>L1, L2, L3...</strong> (left to right)</li>
          <li>Compare: Is H2 above or below H1? Is L2 above or below L1?</li>
          <li>Conclude: If H2 &gt; H1 and L2 &gt; L1 → Uptrend (HH + HL)</li>
        </ol>
      </div>

      {/* Visual chart */}
      <div className="mb-4 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Uptrend Example — Labeled Swing Points
        </p>
        <SwingPointsSVG />
      </div>

      <KeyTakeaway>
        Always label your swings before deciding the trend. Don&apos;t guess — compare H1 vs H2
        and L1 vs L2 objectively. This simple practice eliminates 90% of trend-reading mistakes.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 3: Break of Structure (BOS) — When Trends Change
   ═══════════════════════════════════════════════════════════════════════ */

function BOSSVG() {
  return (
    <svg viewBox="0 0 320 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Axes */}
      <line x1="30" y1="10" x2="30" y2="140" stroke="#94a3b8" strokeWidth="1" />
      <line x1="30" y1="140" x2="305" y2="140" stroke="#94a3b8" strokeWidth="1" />

      {/* Uptrend portion (green) */}
      <polyline
        points="40,115 60,80 75,95 100,55 115,70 140,35 155,50"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* BOS break point (red) */}
      <polyline
        points="155,50 170,90 190,110"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="6 3"
      />

      {/* New downtrend forming (red) */}
      <polyline
        points="190,110 210,75 225,90 250,55 265,70 290,30"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Previous swing low (the one being broken) */}
      <line x1="30" y1="70" x2="165" y2="70" stroke="#16a34a" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.6" />
      <text x="35" y="67" fontSize="8" fill="#16a34a" fontWeight="bold">Previous HL</text>

      {/* BOS marker */}
      <circle cx="170" cy="90" r="8" fill="none" stroke="#dc2626" strokeWidth="2" />
      <circle cx="170" cy="90" r="3" fill="#dc2626" />

      {/* BOS label */}
      <rect x="180" y="95" width="55" height="20" rx="4" fill="#dc2626" />
      <text x="207" y="109" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">BOS!</text>

      {/* Arrow pointing to break */}
      <line x1="178" y1="96" x2="183" y2="100" stroke="#dc2626" strokeWidth="1.5" />

      {/* Uptrend swing labels */}
      <circle cx="60" cy="80" r="3" fill="#16a34a" />
      <text x="60" y="73" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">HH</text>

      <circle cx="100" cy="55" r="3" fill="#16a34a" />
      <text x="100" y="48" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">HH</text>

      <circle cx="140" cy="35" r="3" fill="#16a34a" />
      <text x="140" y="28" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">HH</text>

      <circle cx="75" cy="95" r="3" fill="#16a34a" />
      <text x="75" y="108" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">HL</text>

      <circle cx="115" cy="70" r="3" fill="#16a34a" />
      <text x="115" y="83" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">HL</text>

      {/* After BOS labels */}
      <circle cx="210" cy="75" r="3" fill="#dc2626" />
      <text x="210" y="68" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">LH</text>

      <circle cx="250" cy="55" r="3" fill="#dc2626" />
      <text x="250" y="48" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">LH</text>

      {/* Annotation */}
      <text x="170" y="155" textAnchor="middle" fontSize="8" fill="#64748b">
        Price broke below the previous Higher Low → structure is broken
      </text>
    </svg>
  )
}

function BreakOfStructure() {
  return (
    <TopicCard
      id="d2-break-of-structure"
      title="Break of Structure (BOS) — When Trends Change"
      icon={<Zap />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        A <strong>Break of Structure (BOS)</strong> occurs when the established pattern of
        highs and lows is broken. It&apos;s the moment the market tells you: <em>&ldquo;The trend
        may be changing.&rdquo;</em>
      </p>

      {/* BOS Definitions */}
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <p className="text-sm font-bold text-green-800">Bullish BOS</p>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            In a <strong>downtrend</strong>, price makes a <span className="font-bold text-green-600">Higher High</span>{' '}
            then a <span className="font-bold text-green-600">Higher Low</span>. The pattern of LH + LL is broken.
            Buyers are stepping in.
          </p>
        </div>
        <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4">
          <div className="flex items-center gap-2">
            <TrendingDown className="h-4 w-4 text-red-600" />
            <p className="text-sm font-bold text-red-800">Bearish BOS</p>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            In an <strong>uptrend</strong>, price makes a <span className="font-bold text-red-600">Lower Low</span>{' '}
            then a <span className="font-bold text-red-600">Lower High</span>. The pattern of HH + HL is broken.
            Sellers are taking over.
          </p>
        </div>
      </div>

      {/* Visual chart */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Bearish BOS Example — Uptrend Breaking Structure
        </p>
        <BOSSVG />
      </div>

      {/* How to trade */}
      <div className="mb-4 rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800">How to Trade BOS</p>
            <p className="mt-1 text-sm text-amber-900">
              <strong>Don&apos;t enter on the BOS itself!</strong> The BOS is a signal, not an
              entry. Wait for a <span className="font-bold">pullback</span> to the new structure
              level before entering. This gives you a better risk/reward and confirms the new
              direction.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        A BOS tells you the old trend may be ending. But don&apos;t rush in — wait for a pullback
        after the BOS for a safer, higher-probability entry.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 4: Change of Character (ChoCh) vs. Break of Structure (BOS)
   ═══════════════════════════════════════════════════════════════════════ */

function ChoChVsBOS() {
  const comparisonHeaders = ['Feature', 'ChoCh', 'BOS']
  const comparisonRows = [
    ['Meaning', 'First sign of trend change', 'Confirmation of new trend'],
    ['Timing', 'Early (less reliable)', 'Later (more reliable)'],
    ['Entry', "Don't enter here", 'Enter on pullback after BOS'],
    ['Risk', 'High (false signals)', 'Lower (confirmed direction)'],
    ['Analogy', 'First crack in the dam', 'Water flowing through the break'],
    ['Action', 'Alert mode — watch closely', 'Trade mode — look for entries'],
  ]

  return (
    <TopicCard
      id="d2-choch-vs-bos"
      title="Change of Character (ChoCh) vs. Break of Structure (BOS)"
      icon={<GitBranch />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Understanding the difference between <strong>ChoCh</strong> and <strong>BOS</strong> is
        crucial. Many beginners enter trades too early because they confuse the first sign of
        change with a confirmed change.
      </p>

      {/* Definitions */}
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border-2 border-amber-300 bg-amber-50/60 p-4">
          <p className="mb-2 text-sm font-bold text-amber-800">ChoCh (Change of Character)</p>
          <p className="text-sm text-slate-700">
            The <strong>FIRST</strong> break of structure that signals a potential reversal.
            Think of it as the market&apos;s first hint that something might be changing.
          </p>
          <div className="mt-2 rounded border border-amber-200 bg-amber-100/60 p-2">
            <p className="text-xs font-medium text-amber-800">
              ⚠️ Many false ChoChs occur — the market fakes a reversal then continues the original trend.
            </p>
          </div>
        </div>
        <div className="rounded-lg border-2 border-green-300 bg-green-50/60 p-4">
          <p className="mb-2 text-sm font-bold text-green-800">BOS (Break of Structure)</p>
          <p className="text-sm text-slate-700">
            <strong>Subsequent</strong> breaks that <strong>CONFIRM</strong> the new trend direction.
            After ChoCh, the next BOS tells you the reversal is real.
          </p>
          <div className="mt-2 rounded border border-green-200 bg-green-100/60 p-2">
            <p className="text-xs font-medium text-green-800">
              ✓ More reliable — the market has confirmed the new direction with multiple data points.
            </p>
          </div>
        </div>
      </div>

      {/* Visual timeline */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-4">
        <p className="mb-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Sequence of a Trend Reversal
        </p>
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
          <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-50 px-4 py-2">
            <span className="text-sm font-bold text-slate-700">Original Trend</span>
          </div>
          <span className="text-lg text-slate-400">→</span>
          <div className="flex items-center gap-2 rounded-lg border-2 border-amber-400 bg-amber-50 px-4 py-2">
            <AlertTriangle className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-bold text-amber-800">ChoCh (1st break)</span>
          </div>
          <span className="text-lg text-slate-400">→</span>
          <div className="flex items-center gap-2 rounded-lg border-2 border-green-400 bg-green-50 px-4 py-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <span className="text-sm font-bold text-green-800">BOS (Confirmation)</span>
          </div>
          <span className="text-lg text-slate-400">→</span>
          <div className="flex items-center gap-2 rounded-lg border-2 border-blue-400 bg-blue-50 px-4 py-2">
            <Target className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-800">Enter on Pullback</span>
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="mb-4">
        <ComparisonTable
          headers={comparisonHeaders}
          rows={comparisonRows}
          highlightColumn={2}
        />
      </div>

      <KeyTakeaway>
        ChoCh is your alarm clock — it wakes you up. BOS is you actually getting out of bed.
        Wait for BOS confirmation before committing capital. Entering on ChoCh alone is
        gambling, not trading.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 5: Trend Lines — How to Draw Them Correctly
   ═══════════════════════════════════════════════════════════════════════ */

function TrendLines() {
  const rules = [
    {
      number: 1,
      title: 'In UPTREND: Connect HIGHER LOWS',
      description: 'Draw the trend line beneath price, connecting the swing lows (HL points). The line acts as dynamic support.',
    },
    {
      number: 2,
      title: 'In DOWNTREND: Connect LOWER HIGHS',
      description: 'Draw the trend line above price, connecting the swing highs (LH points). The line acts as dynamic resistance.',
    },
    {
      number: 3,
      title: 'Need AT LEAST 3 TOUCHES',
      description: 'A trend line needs a minimum of 3 touch points to be considered valid. Two points only define a line — three confirms it.',
    },
    {
      number: 4,
      title: 'More touches = more valid',
      description: 'The more times price respects (touches and bounces off) the trend line, the stronger and more significant it becomes.',
    },
    {
      number: 5,
      title: "Don't force it",
      description: "If price doesn't respect the line, redraw it or discard it. A forced trend line is worse than no trend line — it gives false signals.",
    },
  ]

  const mistakes = [
    {
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      title: 'Drawing through candle bodies',
      description: 'Trend lines should connect wicks (shadows), not candle bodies. Wicks show where price was rejected.',
    },
    {
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      title: 'Wrong direction',
      description: 'Connecting highs in an uptrend or lows in a downtrend. Always connect HLs in uptrend, LHs in downtrend.',
    },
    {
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      title: 'Forcing lines to fit',
      description: 'Adjusting the line to make it "work" instead of accepting that the trend line may not exist on that chart.',
    },
    {
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      title: 'Too small timeframe',
      description: 'Trend lines on 1m or 5m charts are noise. Use 4H, Daily, or Weekly for reliable trend lines.',
    },
  ]

  return (
    <TopicCard
      id="d2-trend-lines"
      title="Trend Lines — How to Draw Them Correctly"
      icon={<Ruler />}
      variant="highlight"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        A <strong>trend line</strong> is a diagonal line connecting swing lows (uptrend) or
        swing highs (downtrend). It&apos;s one of the simplest yet most powerful tools in
        technical analysis — but only if drawn correctly.
      </p>

      <AnalogyBox title="Trend Lines are Like Guardrails">
        On a winding mountain road, guardrails keep you on the right path. Trend lines do the
        same for your trades — they show you the path of the trend and warn you when price
        might be leaving it.
      </AnalogyBox>

      {/* 5 Rules */}
      <div className="mt-6 mb-6">
        <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          <Ruler className="mr-1.5 inline h-4 w-4 text-amber-600" />
          5 Rules for Valid Trend Lines
        </h4>
        <StepList steps={rules} />
      </div>

      {/* Common mistakes */}
      <div className="mb-4">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-red-700 sm:text-base">
          <AlertTriangle className="mr-1.5 inline h-4 w-4 text-red-500" />
          4 Common Mistakes
        </h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {mistakes.map((mistake, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50/50 p-3"
            >
              <span className="mt-0.5 flex-shrink-0">{mistake.icon}</span>
              <div>
                <p className="text-sm font-bold text-red-800">{mistake.title}</p>
                <p className="mt-0.5 text-sm text-slate-700">{mistake.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <KeyTakeaway>
        A good trend line has 3+ touches, connects the correct points (HLs in uptrend, LHs in
        downtrend), and price respects it naturally. If you&apos;re forcing a line to exist,
        step back — the chart may not have a valid trend line right now.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 6: Trend Channels — Riding the Lane
   ═══════════════════════════════════════════════════════════════════════ */

function ChannelSVG() {
  return (
    <svg viewBox="0 0 300 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="30" y="10" width="260" height="130" fill="#f8fafc" rx="4" />

      {/* Upper channel line */}
      <line x1="40" y1="70" x2="270" y2="15" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="272" y="14" fontSize="8" fill="#0d9488" fontWeight="bold">Upper</text>

      {/* Lower channel line (main trend line) */}
      <line x1="40" y1="120" x2="270" y2="65" stroke="#16a34a" strokeWidth="2" />
      <text x="272" y="64" fontSize="8" fill="#16a34a" fontWeight="bold">Lower</text>

      {/* Channel fill */}
      <polygon
        points="40,120 270,65 270,15 40,70"
        fill="#16a34a"
        opacity="0.04"
      />

      {/* Price line bouncing in channel */}
      <polyline
        points="45,115 65,80 80,95 105,60 120,75 145,38 160,55 185,22 200,40 230,18 245,35 268,10"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Touch points on lower channel */}
      <circle cx="45" cy="115" r="4" fill="#16a34a" />
      <text x="45" y="130" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Buy</text>

      <circle cx="80" cy="95" r="4" fill="#16a34a" />
      <text x="80" y="110" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Buy</text>

      <circle cx="120" cy="75" r="4" fill="#16a34a" />
      <text x="120" y="90" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Buy</text>

      <circle cx="160" cy="55" r="4" fill="#16a34a" />
      <text x="160" y="70" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Buy</text>

      <circle cx="200" cy="40" r="4" fill="#16a34a" />
      <text x="200" y="55" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Buy</text>

      {/* Touch points on upper channel */}
      <circle cx="65" cy="80" r="4" fill="#0d9488" />
      <text x="65" y="75" textAnchor="middle" fontSize="7" fill="#0d9488" fontWeight="bold">Sell</text>

      <circle cx="105" cy="60" r="4" fill="#0d9488" />
      <text x="105" y="55" textAnchor="middle" fontSize="7" fill="#0d9488" fontWeight="bold">Sell</text>

      <circle cx="145" cy="38" r="4" fill="#0d9488" />
      <text x="145" y="33" textAnchor="middle" fontSize="7" fill="#0d9488" fontWeight="bold">Sell</text>

      <circle cx="185" cy="22" r="4" fill="#0d9488" />
      <text x="185" y="17" textAnchor="middle" fontSize="7" fill="#0d9488" fontWeight="bold">Sell</text>

      <circle cx="230" cy="18" r="4" fill="#0d9488" />
      <text x="230" y="13" textAnchor="middle" fontSize="7" fill="#0d9488" fontWeight="bold">Sell</text>

      {/* Channel label */}
      <text x="155" y="155" textAnchor="middle" fontSize="9" fill="#475569" fontWeight="bold">
        ↑ Uptrend Channel: Buy at lower line, Sell at upper line
      </text>
    </svg>
  )
}

function TrendChannels() {
  return (
    <TopicCard
      id="d2-trend-channels"
      title="Trend Channels — Riding the Lane"
      icon={<Layers />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        A <strong>channel</strong> is formed when you draw a parallel line to your trend line.
        Together, the two lines create a &ldquo;lane&rdquo; that price tends to travel within,
        giving you clear zones for entries and exits.
      </p>

      {/* Channel types */}
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <p className="text-sm font-bold text-green-800">Uptrend Channel</p>
          </div>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            <li>• <strong>Lower line</strong> = HL trend line (support)</li>
            <li>• <strong>Upper line</strong> = parallel through HH (resistance)</li>
            <li>• Buy near lower line, take profit near upper</li>
          </ul>
        </div>
        <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4">
          <div className="flex items-center gap-2">
            <TrendingDown className="h-4 w-4 text-red-600" />
            <p className="text-sm font-bold text-red-800">Downtrend Channel</p>
          </div>
          <ul className="mt-2 space-y-1 text-sm text-slate-700">
            <li>• <strong>Upper line</strong> = LH trend line (resistance)</li>
            <li>• <strong>Lower line</strong> = parallel through LL (support)</li>
            <li>• Sell near upper line, take profit near lower</li>
          </ul>
        </div>
      </div>

      {/* Channel diagram */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Uptrend Channel — Price Bouncing Between Lines
        </p>
        <ChannelSVG />
      </div>

      {/* Breakout signals */}
      <div className="mb-4 grid gap-3 sm:grid-cols-2">
        <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50/60 p-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800">Break Below Lower Line</p>
            <p className="mt-0.5 text-sm text-slate-700">
              Trend is <strong>weakening</strong>. Could signal a reversal or deep pullback. Tighten stops or exit.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50/60 p-3">
          <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <p className="text-sm font-bold text-green-800">Break Above Upper Line</p>
            <p className="mt-0.5 text-sm text-slate-700">
              Trend is <strong>accelerating</strong>. Momentum is strong. Consider trailing stops to ride the move.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        Channels give you a roadmap: buy at the lower line, sell at the upper line, and watch
        for breaks as early warning signals. Always combine channel analysis with market
        structure — never use channels alone.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 7: Practice — Market Structure & Trend Lines
   ═══════════════════════════════════════════════════════════════════════ */

function PracticeMarketStructure() {
  const btcTasks = [
    {
      number: 1,
      title: 'Identify current market structure',
      description: 'Label all swing highs (H1, H2, H3) and swing lows (L1, L2, L3) on the 4H chart. Is it HH+HL, LH+LL, or ranging?',
    },
    {
      number: 2,
      title: 'Find any recent Break of Structure',
      description: 'Is there a BOS on the chart? If yes, mark it — was it a ChoCh (first break) or a BOS (confirmation)?',
    },
    {
      number: 3,
      title: 'Draw the trend line',
      description: 'Connect the correct swing points (HLs in uptrend, LHs in downtrend). Does it have 3+ touches? If not, note it.',
    },
    {
      number: 4,
      title: 'Draw the parallel channel',
      description: 'Add a parallel line to create a channel. Does price respect both boundaries?',
    },
    {
      number: 5,
      title: 'Write your market structure statement',
      description: 'Fill in: "Current BTC 4H structure is ___ because ___" (e.g., "uptrend because it\'s making HH + HL since the BOS at $XX,XXX")',
    },
  ]

  const multiPairTasks = [
    {
      number: 1,
      title: 'Analyze ETH/USDT on 4H timeframe',
      description: 'Same process as BTC: label swing highs/lows, identify structure, draw trend line and channel.',
    },
    {
      number: 2,
      title: 'Analyze SOL/USDT on Daily timeframe',
      description: 'Repeat the full analysis on a higher timeframe. Note any differences from the 4H analysis.',
    },
    {
      number: 3,
      title: 'Compare correlation across pairs',
      description: 'Are BTC, ETH, and SOL in the same structure? If BTC is in an uptrend, are the alts too? Note divergences.',
    },
    {
      number: 4,
      title: 'Write your comparative statement',
      description: 'Fill in: "BTC is ___. ETH is ___. SOL is ___. They are ___" (e.g., "BTC is in uptrend. ETH is in uptrend. SOL is ranging. They are mostly correlated but SOL is lagging.")',
    },
  ]

  return (
    <TopicCard
      id="d2-practice-market-structure"
      title="Practice — Market Structure & Trend Lines"
      icon={<FlaskConical />}
      variant="default"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        Theory means nothing without practice. Grab your charts and work through these
        exercises step by step. Write down your answers — don&apos;t just think them.
      </p>

      {/* Practice Lab 1: BTC */}
      <div className="mb-6 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/30 p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <FlaskConical className="h-5 w-5 text-amber-600" />
          <h4 className="text-sm font-bold text-amber-800 sm:text-base">
            Practice Lab 1: BTC/USDT on 4H Timeframe
          </h4>
        </div>
        <StepList steps={btcTasks} />
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-100/50 p-3">
          <p className="text-sm font-medium text-amber-900">
            📝 Write your answer for Task 5 in your trading journal. This becomes your first
            market structure assessment.
          </p>
        </div>
      </div>

      {/* Practice Lab 2: Multiple Pairs */}
      <div className="mb-4 rounded-xl border-2 border-dashed border-teal-400 bg-teal-50/30 p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <FlaskConical className="h-5 w-5 text-teal-600" />
          <h4 className="text-sm font-bold text-teal-800 sm:text-base">
            Practice Lab 2: Multi-Pair Analysis (ETH + SOL + Comparison)
          </h4>
        </div>
        <StepList steps={multiPairTasks} />
        <div className="mt-4 rounded-lg border border-teal-200 bg-teal-100/50 p-3">
          <p className="text-sm font-medium text-teal-900">
            📊 Comparing multiple pairs teaches you about market correlation — a critical
            skill for portfolio management and confirmation trading.
          </p>
        </div>
      </div>

      <KeyTakeaway>
        The goal isn&apos;t to be right — it&apos;s to build the habit of reading structure
        before making trading decisions. Do this exercise daily for 2 weeks and you&apos;ll
        start seeing market structure automatically.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 7: Multi-Timeframe Structure Analysis
   ═══════════════════════════════════════════════════════════════════════ */

function MultiTimeframeSVG() {
  return (
    <svg viewBox="0 0 320 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Weekly - Uptrend */}
      <rect x="15" y="5" width="90" height="58" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <text x="60" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">WEEKLY</text>
      <polyline
        points="25,48 35,42 45,45 55,35 65,38 75,25 85,28 95,15"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="45" cy="45" r="2" fill="#16a34a" />
      <circle cx="65" cy="38" r="2" fill="#16a34a" />
      <text x="60" y="58" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#16a34a">UPTREND ✓</text>

      {/* Daily - Uptrend */}
      <rect x="115" y="5" width="90" height="58" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <text x="160" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">DAILY</text>
      <polyline
        points="125,48 135,42 140,46 150,35 155,40 165,25 170,30 180,18 185,22 195,12"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="140" cy="46" r="2" fill="#16a34a" />
      <circle cx="155" cy="40" r="2" fill="#16a34a" />
      <text x="160" y="58" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#16a34a">UPTREND ✓</text>

      {/* 4H - Pullback (looks bearish) */}
      <rect x="215" y="5" width="90" height="58" rx="6" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
      <text x="260" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">4H</text>
      <polyline
        points="225,20 235,28 240,22 250,38 255,32 265,48 270,42 280,52 285,48 295,55"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="260" y="58" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#dc2626">DOWNTREND ✗</text>

      {/* Resolution arrow */}
      <rect x="40" y="72" width="240" height="24" rx="4" fill="#fefce8" stroke="#d97706" strokeWidth="1" />
      <text x="160" y="88" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#d97706">
        Higher TF Uptrend + Lower TF Downtrend = BUY THE DIP on 4H 🎯
      </text>

      {/* Scenario 2 */}
      <rect x="15" y="105" width="90" height="58" rx="6" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
      <text x="60" y="118" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">WEEKLY</text>
      <polyline
        points="25,15 35,22 45,18 55,32 65,28 75,42 85,38 95,52"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="60" y="158" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#dc2626">DOWNTREND ✗</text>

      <rect x="115" y="105" width="90" height="58" rx="6" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" />
      <text x="160" y="118" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">DAILY</text>
      <polyline
        points="125,15 135,25 140,20 150,38 155,32 165,48 170,42 180,55 185,50 195,58"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="160" y="158" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#dc2626">DOWNTREND ✗</text>

      <rect x="215" y="105" width="90" height="58" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5" />
      <text x="260" y="118" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">4H</text>
      <polyline
        points="225,52 235,42 240,48 250,30 255,38 265,20 270,28 280,12 285,18 295,8"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="260" y="158" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#16a34a">UPTREND ✓</text>

      {/* Resolution arrow 2 */}
      <rect x="40" y="172" width="240" height="24" rx="4" fill="#fefce8" stroke="#d97706" strokeWidth="1" />
      <text x="160" y="188" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#d97706">
        Higher TF Downtrend + Lower TF Uptrend = SELL THE RALLY on 4H 🎯
      </text>
    </svg>
  )
}

function MultiTimeframeStructure() {
  return (
    <TopicCard
      id="d2-multi-timeframe-structure"
      title="Multi-Timeframe Structure Analysis"
      icon={<Layers />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        Looking at <strong>one timeframe</strong> is like looking at one piece of a puzzle. You
        need <span className="font-bold text-amber-700">multiple timeframes</span> to see the
        full picture. The most common mistake beginners make is trading based on a single
        timeframe — and getting confused when the trade goes against them.
      </p>

      <AnalogyBox title="Multi-Timeframe is Like Google Maps">
        Zoomed out (Weekly/Daily) you see the city-to-city highway direction. Zoomed in
        (4H/1H) you see the street-level turns. You need both: the highway tells you the
        destination, the streets tell you when to turn. Trading without higher timeframe
        context is like driving cross-country using only street view.
      </AnalogyBox>

      {/* The Golden Rule */}
      <div className="mt-5 mb-5 rounded-lg border-2 border-amber-300 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-900">THE GOLDEN RULE OF TIMEFRAMES</p>
            <p className="mt-1 text-sm text-amber-800">
              <span className="font-bold">Higher timeframe structure ALWAYS overrides lower timeframe structure.</span>
              If the Daily is in an uptrend and the 4H is in a downtrend, the 4H downtrend is a
              <span className="font-bold"> pullback</span> — not a reversal. Trade in the direction of the higher timeframe.
            </p>
          </div>
        </div>
      </div>

      {/* Timeframe Hierarchy */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-4">
        <p className="mb-3 text-sm font-bold text-slate-800">
          <ZoomOut className="mr-1.5 inline h-4 w-4 text-teal-600" />
          Timeframe Hierarchy (Highest → Lowest Authority)
        </p>
        <div className="flex flex-col items-center gap-1.5 sm:flex-row sm:justify-center sm:gap-2">
          <div className="rounded-lg border-2 border-teal-400 bg-teal-50 px-3 py-1.5 text-xs font-bold text-teal-800 sm:text-sm">
            Weekly
          </div>
          <ChevronRight className="hidden h-4 w-4 text-slate-400 sm:block" />
          <span className="text-slate-400 sm:hidden">↓</span>
          <div className="rounded-lg border-2 border-green-400 bg-green-50 px-3 py-1.5 text-xs font-bold text-green-800 sm:text-sm">
            Daily
          </div>
          <ChevronRight className="hidden h-4 w-4 text-slate-400 sm:block" />
          <span className="text-slate-400 sm:hidden">↓</span>
          <div className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 sm:text-sm">
            4H
          </div>
          <ChevronRight className="hidden h-4 w-4 text-slate-400 sm:block" />
          <span className="text-slate-400 sm:hidden">↓</span>
          <div className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 sm:text-sm">
            1H
          </div>
          <ChevronRight className="hidden h-4 w-4 text-slate-400 sm:block" />
          <span className="text-slate-400 sm:hidden">↓</span>
          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 sm:text-sm">
            15m
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-slate-500">
          Left = Higher authority (direction). Right = Lower authority (timing).
        </p>
      </div>

      {/* Visual: 3 timeframes */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Same Market, Different Timeframes = Different Structure Readings
        </p>
        <MultiTimeframeSVG />
      </div>

      {/* Two scenarios */}
      <div className="mb-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <p className="text-sm font-bold text-green-800">Scenario A: Buy the Dip</p>
          </div>
          <p className="text-sm text-slate-700">
            <strong>Daily uptrend</strong> + <strong>4H pullback (downtrend)</strong> = The 4H dip is a
            buying opportunity. Wait for 4H structure to show signs of reversal (CHoCH), then enter
            long — aligned with the Daily trend.
          </p>
        </div>
        <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <TrendingDown className="h-4 w-4 text-red-600" />
            <p className="text-sm font-bold text-red-800">Scenario B: Sell the Rally</p>
          </div>
          <p className="text-sm text-slate-700">
            <strong>Daily downtrend</strong> + <strong>4H bounce (uptrend)</strong> = The 4H rally is a
            selling opportunity. Wait for 4H structure to show signs of reversal (CHoCH), then enter
            short — aligned with the Daily trend.
          </p>
        </div>
      </div>

      {/* Practice question */}
      <div className="mb-4 rounded-lg border-2 border-dashed border-teal-400 bg-teal-50/30 p-4">
        <p className="mb-2 text-sm font-bold text-teal-800">
          <Eye className="mr-1.5 inline h-4 w-4 text-teal-600" />
          Practice Question: Which Timeframe Should You Trust?
        </p>
        <p className="text-sm text-slate-700">
          You see: Weekly uptrend, Daily range, 4H downtrend, 1H uptrend. Which direction
          do you trade? <span className="font-bold text-teal-700">Answer: Long (buy).</span> The Weekly
          uptrend is the highest authority. Look for 4H/1H pullback entries to get long — aligned
          with the Weekly trend.
        </p>
      </div>

      <KeyTakeaway>
        Always start your analysis from the highest timeframe and work down. Weekly → Daily → 4H
        → 1H. The higher timeframe gives you direction, the lower timeframe gives you timing.
        Never trade against the higher timeframe structure.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 8: Structure Transitions — How Trends Actually Change
   ═══════════════════════════════════════════════════════════════════════ */

function StructureTransitionSVG() {
  return (
    <svg viewBox="0 0 340 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background zones */}
      <rect x="30" y="5" width="95" height="145" rx="4" fill="#f0fdf4" opacity="0.5" />
      <rect x="125" y="5" width="90" height="145" rx="4" fill="#fefce8" opacity="0.5" />
      <rect x="215" y="5" width="95" height="145" rx="4" fill="#fef2f2" opacity="0.5" />

      {/* Zone labels */}
      <text x="77" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">PHASE 1</text>
      <text x="77" y="27" textAnchor="middle" fontSize="6" fill="#16a34a">Weakening</text>
      <text x="170" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#d97706">PHASE 2</text>
      <text x="170" y="27" textAnchor="middle" fontSize="6" fill="#d97706">Range (CHoCH)</text>
      <text x="262" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">PHASE 3</text>
      <text x="262" y="27" textAnchor="middle" fontSize="6" fill="#dc2626">New Trend (BOS)</text>

      {/* Phase 1: Weakening uptrend */}
      <polyline
        points="40,110 55,55 65,72 78,35 88,50 98,30 108,42"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Smaller HH, deeper HL */}
      <circle cx="55" cy="55" r="2.5" fill="#16a34a" />
      <text x="55" y="50" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="78" cy="35" r="2.5" fill="#16a34a" />
      <text x="78" y="30" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="98" cy="30" r="2.5" fill="#16a34a" />
      <text x="98" y="25" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="65" cy="72" r="2.5" fill="#0d9488" />
      <text x="65" y="85" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#0d9488">HL</text>
      <circle cx="88" cy="50" r="2.5" fill="#0d9488" />
      <text x="88" y="63" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#0d9488">HL</text>
      {/* Annotation */}
      <text x="77" y="148" textAnchor="middle" fontSize="6" fill="#64748b">Smaller HH gaps</text>
      <text x="77" y="155" textAnchor="middle" fontSize="6" fill="#64748b">Deeper HL pullbacks</text>

      {/* Phase 2: CHoCH → Range */}
      <polyline
        points="108,42 118,65 128,40 140,70 150,38 162,68 172,40 182,65"
        fill="none"
        stroke="#d97706"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* CHoCH marker */}
      <circle cx="118" cy="65" r="5" fill="none" stroke="#dc2626" strokeWidth="1.5" />
      <text x="118" y="80" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">CHoCH</text>
      {/* Range boundaries */}
      <line x1="125" y1="38" x2="215" y2="38" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3 2" />
      <line x1="125" y1="70" x2="215" y2="70" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3 2" />
      <text x="220" y="41" fontSize="6" fill="#d97706">R</text>
      <text x="220" y="73" fontSize="6" fill="#d97706">S</text>
      {/* Danger zone */}
      <rect x="130" y="90" width="80" height="16" rx="3" fill="#fef2f2" stroke="#dc2626" strokeWidth="0.5" />
      <text x="170" y="101" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">⚠️ MONEY LOST HERE</text>

      {/* Phase 3: BOS → New downtrend */}
      <polyline
        points="182,65 195,80 205,60 218,95 228,72 240,105 250,85 262,115 272,95 285,130 295,110 308,140"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2"
      />
      {/* BOS marker */}
      <circle cx="218" cy="95" r="5" fill="none" stroke="#dc2626" strokeWidth="1.5" />
      <text x="218" y="108" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">BOS</text>
      {/* New structure labels */}
      <circle cx="205" cy="60" r="2.5" fill="#dc2626" />
      <text x="205" y="55" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">LH</text>
      <circle cx="228" cy="72" r="2.5" fill="#dc2626" />
      <text x="228" y="67" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">LH</text>
      <circle cx="250" cy="85" r="2.5" fill="#dc2626" />
      <text x="250" y="80" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">LH</text>
      <circle cx="240" cy="105" r="2.5" fill="#dc2626" />
      <text x="240" y="118" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">LL</text>
      <circle cx="272" cy="95" r="2.5" fill="#dc2626" />
      <text x="272" y="88" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">LH</text>
      <circle cx="295" cy="110" r="2.5" fill="#dc2626" />
      <text x="295" y="123" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">LL</text>

      {/* Axes */}
      <line x1="30" y1="5" x2="30" y2="155" stroke="#94a3b8" strokeWidth="0.5" />
      <line x1="30" y1="155" x2="310" y2="155" stroke="#94a3b8" strokeWidth="0.5" />
    </svg>
  )
}

function StructureTransitions() {
  const phaseSteps = [
    {
      number: 1,
      title: 'Structure Weakens',
      description: 'The trend is still intact (e.g., still making HH+HL), but the HH gaps are getting smaller and the HL pullbacks are getting deeper. The momentum is fading — like a car losing speed uphill.',
    },
    {
      number: 2,
      title: 'CHoCH (First Break) → Range',
      description: 'The first swing low is broken — this is the Change of Character. Price enters a range-bound phase between support and resistance. This is the DANGER ZONE: most traders lose money here by trying to pick a direction too early.',
    },
    {
      number: 3,
      title: 'BOS (Confirmation) → New Trend',
      description: 'Price breaks out of the range in the new direction with a confirmed Break of Structure. Now you have LH+LL (downtrend) confirmed. This is where you can safely enter in the new direction — on a pullback after the BOS.',
    },
  ]

  return (
    <TopicCard
      id="d2-structure-transitions"
      title="Structure Transitions — How Trends Actually Change"
      icon={<GitBranch />}
      variant="default"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        Trends don&apos;t reverse instantly. The transition from uptrend to downtrend (or vice
        versa) goes through a <span className="font-bold text-amber-700">predictable 3-phase process</span>.
        Understanding this process prevents you from entering trades too early or in the wrong
        direction.
      </p>

      <AnalogyBox title="Trend Transitions are Like a Car Turning Around">
        A car going 60mph doesn&apos;t instantly reverse. It slows down (Phase 1: weakens),
        stops (Phase 2: ranges), then accelerates in the new direction (Phase 3: new trend).
        Trying to jump in front of the car while it&apos;s still slowing down is how traders get run over.
      </AnalogyBox>

      {/* Visual diagram */}
      <div className="mt-5 mb-5 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Full Transition Sequence: Uptrend → Range → Downtrend
        </p>
        <StructureTransitionSVG />
      </div>

      {/* 3 Phases */}
      <div className="mb-5">
        <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          <GitBranch className="mr-1.5 inline h-4 w-4 text-amber-600" />
          The 3 Phases of Every Trend Transition
        </h4>
        <StepList steps={phaseSteps} />
      </div>

      {/* Key insight box */}
      <div className="mb-4 rounded-lg border-2 border-red-300 bg-red-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="text-sm font-bold text-red-800">KEY INSIGHT: Most Money is Lost in Phase 2</p>
            <p className="mt-1 text-sm text-red-900">
              The range (Phase 2) is where traders get chopped up. They try to pick a direction
              before the market has decided. <strong>The solution?</strong> Wait for Phase 3 (BOS
              confirmation) before entering. Yes, you&apos;ll miss the very start of the move — but
              you&apos;ll also avoid 90% of false signals. Patience in Phase 2 = profitability in Phase 3.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        Trends change through 3 phases: Weaken → Range (CHoCH) → Confirm (BOS). Don&apos;t trade
        the range — wait for BOS confirmation. The money you preserve by not trading Phase 2
        is just as important as the money you make in Phase 3.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 9: Internal vs External Structure
   ═══════════════════════════════════════════════════════════════════════ */

function InternalExternalSVG() {
  return (
    <svg viewBox="0 0 320 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Axes */}
      <line x1="30" y1="10" x2="30" y2="140" stroke="#94a3b8" strokeWidth="0.5" />
      <line x1="30" y1="140" x2="305" y2="140" stroke="#94a3b8" strokeWidth="0.5" />

      {/* External structure (big swings) */}
      <polyline
        points="40,120 80,100 120,80 160,60 200,40 240,20 280,15"
        fill="none"
        stroke="#0d9488"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="8 4"
      />
      <text x="285" y="15" fontSize="7" fill="#0d9488" fontWeight="bold">Ext.</text>

      {/* External swing labels */}
      <circle cx="40" cy="120" r="4" fill="#0d9488" />
      <text x="40" y="132" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0d9488">EL1</text>
      <circle cx="120" cy="80" r="4" fill="#0d9488" />
      <text x="120" y="73" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0d9488">EH1</text>
      <circle cx="200" cy="40" r="4" fill="#0d9488" />
      <text x="200" y="33" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0d9488">EH2</text>
      <circle cx="160" cy="60" r="4" fill="#0d9488" />
      <text x="160" y="73" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#0d9488">EL2</text>

      {/* Internal structure (smaller swings within each external move) */}
      <polyline
        points="40,120 50,110 58,115 70,95 78,102 90,80 98,88 108,65 115,72 125,55 132,62 140,45 148,52 158,35 165,42 175,28 182,35 192,22 198,28 210,18 218,25 230,15 238,20 250,12 258,16 270,10 278,14 285,8"
        fill="none"
        stroke="#16a34a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Zoomed section highlight */}
      <rect x="120" y="45" width="55" height="50" rx="4" fill="none" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2" />
      <text x="148" y="43" textAnchor="middle" fontSize="6" fill="#d97706" fontWeight="bold">ZOOM IN →</text>

      {/* Legend */}
      <rect x="40" y="142" width="12" height="3" rx="1" fill="#0d9488" />
      <text x="55" y="147" fontSize="6" fill="#0d9488" fontWeight="bold">External (Daily/4H)</text>
      <rect x="150" y="142" width="12" height="3" rx="1" fill="#16a34a" />
      <text x="165" y="147" fontSize="6" fill="#16a34a" fontWeight="bold">Internal (1H/15m)</text>
    </svg>
  )
}

function InternalExternalStructure() {
  return (
    <TopicCard
      id="d2-internal-external-structure"
      title="Internal vs External Structure — Precision Timing"
      icon={<Split />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        <span className="font-bold text-slate-900">External structure</span> gives you the big
        picture direction. <span className="font-bold text-slate-900">Internal structure</span>{' '}
        gives you the precise entry timing. Professional traders use <strong>both</strong> — they
        don&apos;t pick one or the other.
      </p>

      <AnalogyBox title="External = Highway Direction, Internal = Lane Position">
        You&apos;re driving north on a highway (External: uptrend). But you might be in the left
        lane, middle lane, or right lane at any given moment (Internal: short-term structure).
        The highway tells you you&apos;re going north. The lane tells you exactly where you are
        right now. You need the highway direction to know your destination, and the lane
        position to know when to make your move.
      </AnalogyBox>

      {/* Definitions */}
      <div className="mt-5 mb-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border-2 border-teal-300 bg-teal-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <ZoomOut className="h-4 w-4 text-teal-600" />
            <p className="text-sm font-bold text-teal-800">External Structure</p>
          </div>
          <p className="text-sm text-slate-700">
            The <strong>big picture</strong> — Daily and 4H swing highs and lows. These are the
            major structural points that define the overall trend direction.
          </p>
          <div className="mt-2 rounded border border-teal-200 bg-teal-100/50 p-2">
            <p className="text-xs font-medium text-teal-800">
              Use for: Direction bias, trade side selection (long vs short)
            </p>
          </div>
        </div>
        <div className="rounded-lg border-2 border-green-300 bg-green-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <ZoomIn className="h-4 w-4 text-green-600" />
            <p className="text-sm font-bold text-green-800">Internal Structure</p>
          </div>
          <p className="text-sm text-slate-700">
            The <strong>moves within each swing</strong> — 1H and 15m swing highs and lows. These
            are the smaller structural points inside each external swing.
          </p>
          <div className="mt-2 rounded border border-green-200 bg-green-100/50 p-2">
            <p className="text-xs font-medium text-green-800">
              Use for: Entry timing, stop placement, risk management
            </p>
          </div>
        </div>
      </div>

      {/* Visual diagram */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          External (teal dashed) vs Internal (green solid) Structure
        </p>
        <InternalExternalSVG />
      </div>

      {/* How to combine them */}
      <div className="mb-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="mb-3 text-sm font-bold text-slate-800">
          <Target className="mr-1.5 inline h-4 w-4 text-amber-600" />
          How to Combine External + Internal Structure
        </p>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">1</span>
            <p className="text-sm text-slate-700">
              <strong>External uptrend</strong> → You know to look for <span className="font-bold text-green-600">long (buy)</span> opportunities
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">2</span>
            <p className="text-sm text-slate-700">
              <strong>Internal CHoCH down</strong> → Price is pulling back within the external uptrend — this is your <span className="font-bold text-amber-600">discount zone</span>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">3</span>
            <p className="text-sm text-slate-700">
              <strong>Internal BOS up</strong> → The pullback is over, internal structure confirms a new push up — <span className="font-bold text-green-600">ENTER LONG</span>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">4</span>
            <p className="text-sm text-slate-700">
              <strong>Stop loss</strong> below the internal swing low — tight risk because you entered with internal structure confirmation
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        External structure tells you WHICH direction to trade. Internal structure tells you
        WHEN to enter. Using only external = late entries with wide stops. Using only
        internal = trading without direction. Combine both for precision.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 10: Trend Strength Assessment
   ═══════════════════════════════════════════════════════════════════════ */

function TrendStrengthSVG() {
  return (
    <svg viewBox="0 0 320 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Strong Uptrend */}
      <rect x="20" y="5" width="135" height="140" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1" />
      <text x="87" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#16a34a">STRONG UPTREND</text>

      <line x1="30" y1="25" x2="30" y2="135" stroke="#e2e8f0" strokeWidth="0.5" />
      <line x1="30" y1="135" x2="145" y2="135" stroke="#e2e8f0" strokeWidth="0.5" />

      <polyline
        points="35,125 48,95 55,105 70,70 78,82 95,45 102,58 118,22 128,35 140,12"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* EMA line */}
      <polyline
        points="35,122 48,100 55,98 70,78 78,75 95,55 102,52 118,35 128,32 140,22"
        fill="none"
        stroke="#0d9488"
        strokeWidth="1"
        strokeDasharray="4 2"
        opacity="0.6"
      />

      {/* Labels */}
      <circle cx="48" cy="95" r="2.5" fill="#16a34a" />
      <text x="48" y="88" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="70" cy="70" r="2.5" fill="#16a34a" />
      <text x="70" y="63" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="95" cy="45" r="2.5" fill="#16a34a" />
      <text x="95" y="38" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="118" cy="22" r="2.5" fill="#16a34a" />
      <text x="118" y="15" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#16a34a">HH</text>

      <circle cx="55" cy="105" r="2.5" fill="#0d9488" />
      <text x="55" y="118" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#0d9488">HL</text>
      <circle cx="78" cy="82" r="2.5" fill="#0d9488" />
      <text x="78" y="95" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#0d9488">HL</text>
      <circle cx="102" cy="58" r="2.5" fill="#0d9488" />
      <text x="102" y="71" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#0d9488">HL</text>

      {/* Shallow pullback arrows */}
      <rect x="42" y="130" width="80" height="12" rx="3" fill="#f0fdf4" stroke="#16a34a" strokeWidth="0.5" />
      <text x="82" y="139" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#16a34a">Clean + Shallow Pullbacks ✓</text>

      {/* Weak Uptrend */}
      <rect x="165" y="5" width="135" height="140" rx="6" fill="#fef2f2" stroke="#dc2626" strokeWidth="1" />
      <text x="232" y="18" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#dc2626">WEAK UPTREND</text>

      <line x1="175" y1="25" x2="175" y2="135" stroke="#e2e8f0" strokeWidth="0.5" />
      <line x1="175" y1="135" x2="290" y2="135" stroke="#e2e8f0" strokeWidth="0.5" />

      <polyline
        points="180,115 192,95 198,105 210,82 218,98 232,78 240,95 252,72 260,88 272,68 280,82 288,65"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* EMA line - price chopping around it */}
      <polyline
        points="180,112 192,100 198,98 210,90 218,88 232,82 240,80 252,76 260,74 272,72 280,70 288,68"
        fill="none"
        stroke="#0d9488"
        strokeWidth="1"
        strokeDasharray="4 2"
        opacity="0.6"
      />

      {/* Labels */}
      <circle cx="192" cy="95" r="2.5" fill="#dc2626" />
      <text x="192" y="88" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">HH</text>
      <circle cx="210" cy="82" r="2.5" fill="#dc2626" />
      <text x="210" y="75" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">HH*</text>
      <circle cx="232" cy="78" r="2.5" fill="#dc2626" />
      <text x="232" y="71" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">HH*</text>
      <circle cx="252" cy="72" r="2.5" fill="#dc2626" />
      <text x="252" y="65" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">HH*</text>

      <circle cx="198" cy="105" r="2.5" fill="#0d9488" />
      <text x="198" y="118" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#0d9488">HL</text>
      <circle cx="218" cy="98" r="2.5" fill="#0d9488" />
      <text x="218" y="112" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#0d9488">HL*</text>
      <circle cx="240" cy="95" r="2.5" fill="#0d9488" />
      <text x="240" y="108" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#0d9488">HL*</text>

      {/* Deep pullback arrows */}
      <rect x="187" y="130" width="80" height="12" rx="3" fill="#fef2f2" stroke="#dc2626" strokeWidth="0.5" />
      <text x="227" y="139" textAnchor="middle" fontSize="6" fontWeight="bold" fill="#dc2626">Small Gaps + Deep Pullbacks ✗</text>
    </svg>
  )
}

function TrendStrength() {
  const strongSigns = [
    {
      icon: <CheckCircle2 className="h-4 w-4 text-green-600" />,
      title: 'Clean HH/HL pattern',
      description: 'Each swing high is clearly above the previous, each swing low is clearly above the previous. No ambiguity.',
    },
    {
      icon: <CheckCircle2 className="h-4 w-4 text-green-600" />,
      title: 'Price respects EMAs',
      description: 'The 20/50 EMA acts as dynamic support in an uptrend, or dynamic resistance in a downtrend. Price bounces off cleanly.',
    },
    {
      icon: <CheckCircle2 className="h-4 w-4 text-green-600" />,
      title: 'Shallow pullbacks',
      description: 'Pullbacks are relatively small (23.6%–38.2% Fibonacci retracements). Sellers can barely push price down before buyers step in.',
    },
    {
      icon: <CheckCircle2 className="h-4 w-4 text-green-600" />,
      title: 'Increasing volume on impulse moves',
      description: 'When price moves in the trend direction, volume increases. When it pulls back, volume decreases. Shows conviction.',
    },
    {
      icon: <CheckCircle2 className="h-4 w-4 text-green-600" />,
      title: 'Clean BOS',
      description: 'Breaks of structure happen decisively — price slices through previous swing points with strong candles, not slow chops.',
    },
  ]

  const weakSigns = [
    {
      icon: <XCircle className="h-4 w-4 text-red-500" />,
      title: 'Smaller swing differentials',
      description: 'Each new HH is only barely above the previous HH. The trend is running out of momentum — like a ball losing bounce.',
    },
    {
      icon: <XCircle className="h-4 w-4 text-red-500" />,
      title: 'Deeper pullbacks',
      description: 'Pullbacks reach 50%–61.8% Fibonacci retracements or deeper. Sellers are pushing back harder — the trend is losing control.',
    },
    {
      icon: <XCircle className="h-4 w-4 text-red-500" />,
      title: 'CHoCH on internal timeframe',
      description: 'While the external trend is still intact, the internal (lower timeframe) structure shows a CHoCH. Early warning of weakness.',
    },
    {
      icon: <XCircle className="h-4 w-4 text-red-500" />,
      title: 'Volume divergence',
      description: 'Price makes new highs but volume is decreasing on those highs. Fewer participants are fueling the move — the engine is sputtering.',
    },
    {
      icon: <XCircle className="h-4 w-4 text-red-500" />,
      title: 'Price chopping around EMAs',
      description: 'Instead of clean bounces off EMAs, price whipsaws back and forth across them. No clear trend respect = no clear trend.',
    },
  ]

  return (
    <TopicCard
      id="d2-trend-strength"
      title="Trend Strength Assessment — Is the Trend Strong or Dying?"
      icon={<Gauge />}
      variant="default"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        Not all trends are created equal. A <strong>strong trend</strong> is safe to trade with
        full position size. A <strong>weakening trend</strong> requires caution — smaller positions
        or staying out entirely. Knowing the difference is what separates profitable traders from
        gamblers.
      </p>

      {/* Visual comparison */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Strong vs Weak Uptrend Comparison
        </p>
        <TrendStrengthSVG />
      </div>

      {/* 5 Signs of Strong Trend */}
      <div className="mb-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-green-700 sm:text-base">
          <ShieldCheck className="mr-1.5 inline h-4 w-4 text-green-600" />
          5 Signs of a Strong Trend
        </h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {strongSigns.map((sign, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50/50 p-3"
            >
              <span className="mt-0.5 flex-shrink-0">{sign.icon}</span>
              <div>
                <p className="text-sm font-bold text-green-800">{sign.title}</p>
                <p className="mt-0.5 text-sm text-slate-700">{sign.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5 Signs of Weak Trend */}
      <div className="mb-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-red-700 sm:text-base">
          <AlertTriangle className="mr-1.5 inline h-4 w-4 text-red-500" />
          5 Signs of a Weakening Trend
        </h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {weakSigns.map((sign, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50/50 p-3"
            >
              <span className="mt-0.5 flex-shrink-0">{sign.icon}</span>
              <div>
                <p className="text-sm font-bold text-red-800">{sign.title}</p>
                <p className="mt-0.5 text-sm text-slate-700">{sign.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trading rule */}
      <div className="mb-4 rounded-lg border-2 border-amber-300 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <Gauge className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-900">TRADING RULE: Size According to Trend Strength</p>
            <ul className="mt-2 space-y-1 text-sm text-amber-900">
              <li className="flex items-start gap-2">
                <span className="font-bold text-green-600">Strong trend:</span>
                <span>Full position size. Trail your stop. Ride the trend.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-amber-600">Moderate trend:</span>
                <span>Half position size. Tighter stop. Take profits at structure levels.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-600">Weak trend:</span>
                <span>Stay out, or scalp only with minimal size. The risk of reversal is too high.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        Only trade aggressively in the direction of strong trends. In weak trends, reduce
        position size or stay out. A strong trend with multiple confirming signals is the
        highest-probability setup you&apos;ll ever find. Weak trends are where profits go to die.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 11: Practical Structure Labeling Exercise
   ═══════════════════════════════════════════════════════════════════════ */

function StructureLabelingExercise() {
  const labelingSteps = [
    {
      number: 1,
      title: 'Zoom Out to Daily/4H',
      description: 'Start with the highest timeframe you\'ll trade. Open BTC/USDT on the Daily chart. This gives you the macro view — don\'t skip this step or you\'ll miss the forest for the trees.',
    },
    {
      number: 2,
      title: 'Mark All Swing Highs and Swing Lows',
      description: 'Using the horizontal line tool in TradingView, mark every visible swing high and swing low. Don\'t judge them yet — just mark them. A swing needs at least 2 candles on each side to be valid.',
    },
    {
      number: 3,
      title: 'Label H1, H2, H3... and L1, L2, L3...',
      description: 'Number each swing high (H1, H2, H3...) and each swing low (L1, L2, L3...) from left to right. This creates a chronological sequence you can compare.',
    },
    {
      number: 4,
      title: 'Compare Consecutive Highs and Lows',
      description: 'Is H2 above H1? Is L2 above L1? Write down your comparisons: H2 > H1, L2 > L1, etc. This is where the structure reading actually happens.',
    },
    {
      number: 5,
      title: 'Determine Structure (Uptrend/Downtrend/Range)',
      description: 'If H2 > H1 AND L2 > L1 → Uptrend. If H2 < H1 AND L2 < L1 → Downtrend. If H2 ≈ H1 AND L2 ≈ L1 → Range. Write your conclusion clearly on the chart.',
    },
    {
      number: 6,
      title: 'Check for CHoCH or BOS Signals',
      description: 'Is there a point where the structure pattern changed? Mark it: was it a CHoCH (first break) or a BOS (confirmed break)? Circle these on your chart — they are your key decision points.',
    },
    {
      number: 7,
      title: 'Mark Your Entry Zone Based on Structure',
      description: 'Based on your structure analysis, where would you enter? In an uptrend, mark the next expected HL as your buy zone. In a downtrend, mark the next expected LH as your sell zone. Also mark your stop loss level.',
    },
  ]

  const practiceTasks = [
    {
      id: 'pt1',
      task: 'Open BTC/USDT Daily chart on TradingView and complete all 7 labeling steps above',
      detail: 'Screenshot your labeled chart and save it — you\'ll compare it next week',
    },
    {
      id: 'pt2',
      task: 'Repeat the labeling process on ETH/USDT Daily chart',
      detail: 'Notice how different assets can have different structures at the same time',
    },
    {
      id: 'pt3',
      task: 'Switch to the 4H chart on BTC/USDT and label structure there',
      detail: 'Compare: Does 4H structure agree with Daily? If not, which do you follow and why?',
    },
    {
      id: 'pt4',
      task: 'Find a CHoCH that was a false signal (price continued the original trend)',
      detail: 'This is common! Mark why it was false — did higher timeframe structure contradict it?',
    },
    {
      id: 'pt5',
      task: 'Find a BOS that led to a profitable trade. Identify your entry on pullback after BOS',
      detail: 'Mark your entry, stop loss, and take profit levels. Calculate the risk/reward ratio.',
    },
  ]

  return (
    <TopicCard
      id="d2-structure-exercise"
      title="Practical Structure Labeling Exercise — Your First Assignment"
      icon={<ListChecks />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        Theory is useless without practice. This exercise takes you step-by-step through
        labeling market structure on a <strong>real chart</strong>. By the end, you&apos;ll have a
        systematic process you can apply to any asset, any timeframe, any market condition.
      </p>

      <div className="mb-5 rounded-lg border-l-4 border-l-teal-500 bg-teal-50 p-4">
        <p className="text-sm font-medium text-teal-800">
          <Clock className="mr-1.5 inline h-4 w-4 text-teal-600" />
          <strong>Time needed:</strong> 30–45 minutes. Open TradingView in another tab and follow
          along. Don&apos;t just read — do it.
        </p>
      </div>

      {/* Step-by-step labeling */}
      <div className="mb-6">
        <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          <Pen className="mr-1.5 inline h-4 w-4 text-amber-600" />
          Step-by-Step: How to Label Any Chart
        </h4>
        <StepList steps={labelingSteps} />
      </div>

      {/* Practice Tasks Checklist */}
      <div className="mb-4">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-teal-700 sm:text-base">
          <ListChecks className="mr-1.5 inline h-4 w-4 text-teal-600" />
          Practice Tasks Checklist (Do on TradingView)
        </h4>
        <div className="space-y-3">
          {practiceTasks.map((task, idx) => (
            <div
              key={task.id}
              className="flex items-start gap-3 rounded-lg border border-teal-200 bg-teal-50/40 p-3"
            >
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                {idx + 1}
              </span>
              <div>
                <p className="text-sm font-bold text-slate-800">{task.task}</p>
                <p className="mt-0.5 text-xs text-slate-600">{task.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <KeyTakeaway>
        Structure labeling is not a one-time exercise — it&apos;s a daily habit. Do this every day
        for 2 weeks and you&apos;ll start seeing structure automatically, without having to
        consciously label it. That&apos;s the goal: make structure reading as natural as reading
        words on a page.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════════════════════════════ */

export function Day2MiddayBlock() {
  return (
    <section id="d2-midday" aria-labelledby="day2-midday-heading">
      <SectionDivider title="MIDDAY BLOCK — HOUR 4: MARKET STRUCTURE & TREND LINES" />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <MarketStructure />
        <IdentifyingSwings />
        <BreakOfStructure />
        <ChoChVsBOS />
        <TrendLines />
        <TrendChannels />
        <PracticeMarketStructure />
        <MultiTimeframeStructure />
        <StructureTransitions />
        <InternalExternalStructure />
        <TrendStrength />
        <StructureLabelingExercise />

        <AppliedLabSimulation
          id="d2-lab-3-tradingview-structure"
          title="LAB 3: Structural Labeling — Training Your Eye"
          subtitle="Use the TradingView simulator to label market structure (HH, HL, LH, LL) on the ETH/USDT chart"
          dayNumber={2}
          sessionName="Midday Block"
          labType="tradingview"
          learningObjectives={[
            'Identify swing highs and swing lows on a price chart',
            'Label market structure points as HH, HL, LH, or LL',
            'Determine the current trend direction based on structure',
            'Recognize when a Break of Structure (BOS) occurs',
          ]}
          tasks={[
            { id: 'd2-l3-t1', instruction: 'Open the TradingView simulator and switch to the 4H timeframe view', hint: 'Use the timeframe buttons at the top of the chart simulator' },
            { id: 'd2-l3-t2', instruction: 'Identify the first swing high on the chart — this is where price made a peak before pulling back. Label it mentally as H1', hint: 'Look for a candle wick that is higher than the candles around it' },
            { id: 'd2-l3-t3', instruction: 'Identify the first swing low after H1 — where price bottomed before rising again. Label it L1', hint: 'Look for a candle wick that is lower than the candles around it' },
            { id: 'd2-l3-t4', instruction: 'Continue labeling: Compare each new swing high to the previous one. Is it Higher (HH) or Lower (LH)?', hint: 'In the current chart data, you should see an overall uptrend forming HH and HL patterns' },
            { id: 'd2-l3-t5', instruction: 'Enable the "Trend Line" drawing tool and draw a line connecting the swing lows (HL points) — this is your uptrend support line', hint: 'In a healthy uptrend, this line should have a gentle upward slope' },
            { id: 'd2-l3-t6', instruction: 'Look for a Break of Structure (BOS): a moment where price broke above a previous swing high (confirming the uptrend). How many BOS points can you find?', hint: 'Each time price makes a new higher high, that is technically a BOS of the previous high' },
            { id: 'd2-l3-t7', instruction: 'Enable EMA 20 and EMA 50 — do they confirm the structure you identified? Price above both EMAs = bullish structure confirmation', hint: 'When price is above EMA 20 and EMA 50, and making HH+HL, you have triple confirmation of an uptrend' },
          ]}
          selfAssessment={[
            {
              question: 'What structure pattern defines an uptrend?',
              options: [
                'Lower Highs and Lower Lows',
                'Higher Highs and Higher Lows',
                'Equal Highs and Equal Lows',
                'Random price movement',
              ],
              correctIndex: 1,
              explanation: 'An uptrend is defined by Higher Highs (each peak is higher than the previous) and Higher Lows (each trough is higher than the previous). This shows buyers are in control.',
            },
            {
              question: 'What is the difference between BOS and CHoCH?',
              options: [
                'BOS is a reversal signal, CHoCH is a continuation signal',
                'BOS confirms trend continuation, CHoCH signals the FIRST potential reversal',
                'They are the same thing',
                'BOS only happens in downtrends',
              ],
              correctIndex: 1,
              explanation: 'Break of Structure (BOS) confirms the existing trend is continuing (e.g., new HH in an uptrend). Change of Character (CHoCH) is the FIRST break against the trend (e.g., breaking a HL in an uptrend), signaling a potential reversal.',
            },
            {
              question: 'Why is it important to label structure before using indicators?',
              options: [
                'Because indicators are useless',
                'Because structure tells you WHO is in control — buyers or sellers. Indicators only confirm what structure already shows.',
                'Because it is a TradingView requirement',
                'Because labels make charts look professional',
              ],
              correctIndex: 1,
              explanation: 'Structure dictates strategy. You don\'t short an uptrend and you don\'t long a downtrend. Indicators are secondary to structure — they confirm what structure already tells you.',
            },
          ]}
          expectedOutcomes={[
            'Ability to identify and label HH, HL, LH, LL on any chart',
            'Understanding of how to determine trend direction from structure alone',
            'Recognition of BOS as a trend continuation signal',
            'Skill in combining structure analysis with EMA confirmation',
          ]}
        />
      </div>
    </section>
  )
}
