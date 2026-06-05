'use client'

import React from 'react'
import {
  CircleDot,
  Activity,
  Target,
  AlertTriangle,
  FlaskConical,
  Zap,
  Star,
  BookOpen,
  ClipboardList,
  CheckCircle2,
  XCircle,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Shield,
  BarChart3,
  Award,
  ArrowRight,
  Eye,
  Crosshair,
  Layers,
  Gauge,
  Volume2,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { QuizQuestion } from '@/components/academy/quiz-question'
import { MEXCLab } from '@/components/academy/mexc-lab'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

/* ═══════════════════════════════════════════════════════════════════════
   SVG: Bollinger Bands Wrapping Around Price (Topic 1)
   ═══════════════════════════════════════════════════════════════════════ */

function BollingerBandsOverviewSVG() {
  return (
    <svg viewBox="0 0 400 240" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="400" height="240" fill="#f8fafc" rx="8" />

      {/* Chart area */}
      <rect x="30" y="15" width="350" height="210" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" rx="4" />

      {/* Grid lines */}
      <line x1="30" y1="60" x2="380" y2="60" stroke="#f1f5f9" strokeWidth="0.5" />
      <line x1="30" y1="120" x2="380" y2="120" stroke="#f1f5f9" strokeWidth="0.5" />
      <line x1="30" y1="180" x2="380" y2="180" stroke="#f1f5f9" strokeWidth="0.5" />

      {/* Band fill area (squeeze then expand) */}
      <polygon
        points="40,80 80,78 120,76 150,74 170,72 180,70 190,68 200,65 210,58 220,50 230,42 240,38 250,42 260,50 270,58 280,62 290,58 300,50 310,42 320,38 330,42 340,50 350,60 360,68 370,72 370,168 360,162 350,150 340,140 330,135 320,138 310,145 300,155 290,162 280,158 270,155 260,150 250,142 240,138 230,142 220,150 210,158 200,165 190,168 180,170 170,168 150,165 120,162 80,160 40,158"
        fill="#14b8a6"
        opacity="0.08"
      />

      {/* Upper Bollinger Band (red) */}
      <polyline
        points="40,80 80,78 120,76 150,74 170,72 180,70 190,68 200,65 210,58 220,50 230,42 240,38 250,42 260,50 270,58 280,62 290,58 300,50 310,42 320,38 330,42 340,50 350,60 360,68 370,72"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1.5"
        strokeDasharray="6 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Middle Band / SMA 20 (teal) */}
      <polyline
        points="40,120 80,118 120,116 150,118 170,120 180,120 190,118 200,115 210,108 220,100 230,92 240,88 250,92 260,100 270,108 280,112 290,108 300,100 310,92 320,88 330,92 340,100 350,108 360,115 370,120"
        fill="none"
        stroke="#14b8a6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lower Bollinger Band (green) */}
      <polyline
        points="40,158 80,160 120,162 150,165 170,168 180,170 190,168 200,165 210,158 220,150 230,142 240,138 250,142 260,150 270,158 280,162 290,158 300,150 310,142 320,138 330,142 340,150 350,158 360,165 370,168"
        fill="none"
        stroke="#22c55e"
        strokeWidth="1.5"
        strokeDasharray="6 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Price line */}
      <polyline
        points="40,125 60,115 80,120 100,110 120,112 140,108 160,118 170,125 180,128 190,115 200,105 210,95 220,82 230,75 240,85 250,98 260,108 270,115 280,105 290,95 300,85 310,75 320,82 330,95 340,108 350,118 360,122 370,125"
        fill="none"
        stroke="#475569"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Squeeze zone label */}
      <rect x="45" y="60" width="130" height="16" rx="3" fill="#fef3c7" stroke="#f59e0b" strokeWidth="0.5" />
      <text x="110" y="72" textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="bold">SQUEEZE (narrow bands)</text>

      {/* Expansion zone label */}
      <rect x="195" y="22" width="140" height="16" rx="3" fill="#fce7f3" stroke="#ec4899" strokeWidth="0.5" />
      <text x="265" y="34" textAnchor="middle" fontSize="8" fill="#9d174d" fontWeight="bold">EXPANSION (wide bands)</text>

      {/* Legend */}
      <line x1="40" y1="228" x2="58" y2="228" stroke="#14b8a6" strokeWidth="2" />
      <text x="62" y="231" fontSize="7" fill="#14b8a6" fontWeight="bold">Middle (SMA 20)</text>
      <line x1="140" y1="228" x2="158" y2="228" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="162" y="231" fontSize="7" fill="#ef4444" fontWeight="bold">Upper Band</text>
      <line x1="230" y1="228" x2="248" y2="228" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="252" y="231" fontSize="7" fill="#22c55e" fontWeight="bold">Lower Band</text>
      <line x1="320" y1="228" x2="338" y2="228" stroke="#475569" strokeWidth="2" />
      <text x="342" y="231" fontSize="7" fill="#475569" fontWeight="bold">Price</text>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   SVG: Bollinger Band Squeeze Breakout with Volume (Topic 3)
   ═══════════════════════════════════════════════════════════════════════ */

function BollingerSqueezeBreakoutSVG() {
  return (
    <svg viewBox="0 0 420 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect x="0" y="0" width="420" height="280" fill="#f8fafc" rx="8" />

      {/* Price chart area */}
      <text x="30" y="18" fontSize="9" fill="#64748b" fontWeight="bold">PRICE + BOLLINGER BANDS</text>
      <rect x="30" y="24" width="360" height="140" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" rx="4" />

      {/* Squeeze zone band fill */}
      <polygon
        points="40,85 60,83 80,82 100,80 120,79 140,78 155,77 165,76 170,68 175,55 180,48 185,45 190,43 195,42 200,41 210,40 220,39 230,38 240,40 250,42 260,44 270,48 280,55 290,60 300,65 310,68 320,70 330,72 340,73 360,75 380,76 390,77 390,130 380,128 360,126 340,124 330,123 320,121 310,119 300,116 290,112 280,108 270,105 260,102 250,100 240,98 230,97 220,98 210,99 200,100 195,101 190,102 185,103 180,105 175,110 170,118 165,125 155,128 140,126 120,124 100,122 80,120 60,118 40,116"
        fill="#14b8a6"
        opacity="0.06"
      />

      {/* Upper band */}
      <polyline
        points="40,85 60,83 80,82 100,80 120,79 140,78 155,77 165,76 170,68 175,55 180,48 185,45 190,43 195,42 200,41 210,40 220,39 230,38 240,40 250,42 260,44 270,48 280,55 290,60 300,65 310,68 320,70 330,72 340,73 360,75 380,76 390,77"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1"
        strokeDasharray="5 3"
      />

      {/* Middle band */}
      <polyline
        points="40,100 60,99 80,98 100,97 120,96 140,95 155,95 165,95 170,92 175,85 180,78 185,75 190,74 195,73 200,72 210,72 220,71 230,70 240,72 250,74 260,76 270,80 280,85 290,90 300,94 310,96 320,98 330,100 340,101 360,103 380,104 390,105"
        fill="none"
        stroke="#14b8a6"
        strokeWidth="1.5"
      />

      {/* Lower band */}
      <polyline
        points="40,116 60,118 80,120 100,122 120,124 140,126 155,128 165,125 170,118 175,110 180,105 185,103 190,102 195,101 200,100 210,99 220,98 230,97 240,98 250,100 260,102 270,105 280,108 290,112 300,116 310,119 320,121 330,123 340,124 360,126 380,128 390,130"
        fill="none"
        stroke="#22c55e"
        strokeWidth="1"
        strokeDasharray="5 3"
      />

      {/* Price line */}
      <polyline
        points="40,105 55,100 70,102 85,98 100,96 115,95 130,94 145,96 155,100 165,98 170,88 175,75 180,65 185,60 190,55 195,52 200,48 210,45 220,42 230,40 240,45 250,55 260,65 270,75 280,82 290,88 300,95 310,100 320,104 330,108 340,110 360,112 380,114 390,116"
        fill="none"
        stroke="#475569"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Squeeze annotation */}
      <rect x="50" y="72" width="100" height="14" rx="3" fill="#fef3c7" stroke="#f59e0b" strokeWidth="0.5" />
      <text x="100" y="82" textAnchor="middle" fontSize="7" fill="#92400e" fontWeight="bold">SQUEEZE</text>

      {/* Breakout arrow */}
      <line x1="175" y1="65" x2="195" y2="45" stroke="#16a34a" strokeWidth="2" />
      <polygon points="192,42 198,40 196,48" fill="#16a34a" />
      <rect x="175" y="36" width="70" height="12" rx="3" fill="#16a34a" />
      <text x="210" y="45" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">BREAKOUT</text>

      {/* Entry marker */}
      <line x1="200" y1="48" x2="200" y2="165" stroke="#16a34a" strokeWidth="1" strokeDasharray="3 2" />
      <rect x="192" y="155" width="30" height="12" rx="2" fill="#16a34a" />
      <text x="207" y="164" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">ENTRY</text>

      {/* SL marker */}
      <line x1="175" y1="110" x2="175" y2="165" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 2" />
      <rect x="165" y="155" width="22" height="12" rx="2" fill="#ef4444" />
      <text x="176" y="164" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">SL</text>

      {/* TP marker */}
      <line x1="230" y1="40" x2="230" y2="165" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2" />
      <rect x="220" y="155" width="22" height="12" rx="2" fill="#d97706" />
      <text x="231" y="164" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">TP</text>

      {/* Volume bars area */}
      <text x="30" y="183" fontSize="9" fill="#64748b" fontWeight="bold">VOLUME</text>
      <rect x="30" y="188" width="360" height="70" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" rx="4" />

      {/* Volume bars — low during squeeze, spike on breakout */}
      <rect x="42" y="238" width="8" height="15" fill="#94a3b8" rx="1" />
      <rect x="55" y="240" width="8" height="13" fill="#94a3b8" rx="1" />
      <rect x="68" y="242" width="8" height="11" fill="#94a3b8" rx="1" />
      <rect x="81" y="243" width="8" height="10" fill="#94a3b8" rx="1" />
      <rect x="94" y="244" width="8" height="9" fill="#94a3b8" rx="1" />
      <rect x="107" y="244" width="8" height="9" fill="#94a3b8" rx="1" />
      <rect x="120" y="245" width="8" height="8" fill="#94a3b8" rx="1" />
      <rect x="133" y="244" width="8" height="9" fill="#94a3b8" rx="1" />
      <rect x="146" y="243" width="8" height="10" fill="#94a3b8" rx="1" />
      <rect x="159" y="240" width="8" height="13" fill="#94a3b8" rx="1" />
      {/* Breakout volume spike */}
      <rect x="172" y="215" width="8" height="38" fill="#22c55e" rx="1" />
      <rect x="185" y="208" width="8" height="45" fill="#22c55e" rx="1" />
      <rect x="198" y="198" width="8" height="55" fill="#22c55e" rx="1" />
      <rect x="211" y="202" width="8" height="51" fill="#22c55e" rx="1" />
      <rect x="224" y="210" width="8" height="43" fill="#22c55e" rx="1" />
      <rect x="237" y="220" width="8" height="33" fill="#22c55e" rx="1" />
      <rect x="250" y="228" width="8" height="25" fill="#94a3b8" rx="1" />
      <rect x="263" y="232" width="8" height="21" fill="#94a3b8" rx="1" />
      <rect x="276" y="235" width="8" height="18" fill="#94a3b8" rx="1" />
      <rect x="289" y="238" width="8" height="15" fill="#94a3b8" rx="1" />
      <rect x="302" y="240" width="8" height="13" fill="#94a3b8" rx="1" />
      <rect x="315" y="241" width="8" height="12" fill="#94a3b8" rx="1" />
      <rect x="328" y="242" width="8" height="11" fill="#94a3b8" rx="1" />
      <rect x="341" y="243" width="8" height="10" fill="#94a3b8" rx="1" />
      <rect x="354" y="244" width="8" height="9" fill="#94a3b8" rx="1" />
      <rect x="367" y="244" width="8" height="9" fill="#94a3b8" rx="1" />

      {/* Volume spike label */}
      <rect x="178" y="192" width="65" height="12" rx="3" fill="#16a34a" />
      <text x="210" y="201" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">HIGH VOLUME</text>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 1: What Are Bollinger Bands? — Volatility's Visual Tool
   ═══════════════════════════════════════════════════════════════════════ */

function TopicWhatAreBollingerBands() {
  return (
    <TopicCard
      id="d3-what-are-bb"
      title="What Are Bollinger Bands? — Volatility's Visual Tool"
      icon={<CircleDot />}
      variant="highlight"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        <span className="font-bold text-slate-900">Bollinger Bands</span> are a
        3-line indicator that measures <span className="font-bold text-amber-700">volatility</span> —
        how much price is spreading out or squeezing together. They wrap around price
        like an envelope, expanding when the market is volatile and contracting when
        it is quiet.
      </p>

      {/* Key facts */}
      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-4 text-center">
          <CircleDot className="mx-auto mb-2 h-6 w-6 text-amber-600" />
          <p className="text-xs font-bold uppercase tracking-wide text-amber-700">Created By</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">John Bollinger</p>
          <p className="text-xs text-slate-500">1980s</p>
        </div>
        <div className="rounded-lg border border-purple-200 bg-purple-50/60 p-4 text-center">
          <BarChart3 className="mx-auto mb-2 h-6 w-6 text-purple-600" />
          <p className="text-xs font-bold uppercase tracking-wide text-purple-700">Default Settings</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">20-period SMA</p>
          <p className="text-xs text-slate-500">2 standard deviations</p>
        </div>
        <div className="rounded-lg border border-teal-200 bg-teal-50/60 p-4 text-center">
          <Activity className="mx-auto mb-2 h-6 w-6 text-teal-600" />
          <p className="text-xs font-bold uppercase tracking-wide text-teal-700">Measures</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">Volatility</p>
          <p className="text-xs text-slate-500">Price spread / expansion</p>
        </div>
      </div>

      {/* Three components */}
      <p className="mb-3 text-sm font-bold text-slate-800">The Three Components:</p>
      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border-2 border-teal-300 bg-teal-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">M</div>
            <h4 className="text-sm font-bold text-teal-800">MIDDLE BAND</h4>
          </div>
          <p className="text-sm font-semibold text-slate-700">20-period SMA</p>
          <p className="mt-1 text-xs text-slate-600">The &ldquo;fair value&rdquo; baseline. Price tends to gravitate back toward this line.</p>
        </div>
        <div className="rounded-xl border-2 border-red-300 bg-red-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">U</div>
            <h4 className="text-sm font-bold text-red-800">UPPER BAND</h4>
          </div>
          <p className="text-sm font-semibold text-slate-700">Middle + 2 Std Dev</p>
          <p className="mt-1 text-xs text-slate-600">The upper boundary. Price touching this is relatively high.</p>
        </div>
        <div className="rounded-xl border-2 border-green-300 bg-green-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">L</div>
            <h4 className="text-sm font-bold text-green-800">LOWER BAND</h4>
          </div>
          <p className="text-sm font-semibold text-slate-700">Middle - 2 Std Dev</p>
          <p className="mt-1 text-xs text-slate-600">The lower boundary. Price touching this is relatively low.</p>
        </div>
      </div>

      {/* Why bands expand/contract */}
      <div className="mb-5 rounded-lg border-l-4 border-l-purple-500 bg-purple-50 p-4">
        <div className="flex items-start gap-3">
          <Activity className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
          <div>
            <p className="text-sm font-bold text-purple-800">Why Do Bands Expand and Contract?</p>
            <p className="mt-1 text-sm text-slate-700">
              Standard deviation measures how spread out prices are from the average. When prices
              are <strong>volatile</strong> (big candles, wide swings), the standard deviation increases
              and the bands <strong>expand</strong>. When prices are <strong>quiet</strong> (small
              candles, narrow range), the standard deviation decreases and the bands
              <strong> contract (squeeze)</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* SVG */}
      <div className="mb-4 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Bollinger Bands Wrapping Around Price — Squeeze and Expansion
        </p>
        <BollingerBandsOverviewSVG />
      </div>

      <AnalogyBox title="Bollinger Bands are Like a Rubber Band">
        When a rubber band is stretched too far (wide bands), it snaps back toward the
        center. When it is compressed tightly (squeeze), it is about to expand with force.
        The tighter the squeeze, the more explosive the eventual expansion. This is why
        Bollinger Band squeezes are one of the most powerful signals in technical analysis
        — they tell you a big move is coming before it happens.
      </AnalogyBox>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 2: Bollinger Bands — Reading the Signals
   ═══════════════════════════════════════════════════════════════════════ */

function TopicBBReadingSignals() {
  const headers = ['Signal', 'What It Looks Like', 'Meaning', 'How to Use']
  const rows = [
    [
      <span key="s1" className="font-semibold text-amber-700">Band Squeeze</span>,
      'Bands very close together',
      'Volatility dropped — BIG MOVE coming',
      <span key="a1" className="font-semibold text-amber-700">ALERT mode</span>,
    ],
    [
      <span key="s2" className="font-semibold text-purple-600">Band Expansion</span>,
      'Bands suddenly widen',
      'Volatility returned',
      'Confirm direction with volume',
    ],
    [
      <span key="s3" className="font-semibold text-red-600">Price Touching Upper Band</span>,
      'Price at/above upper boundary',
      'Relatively high',
      'NOT auto-sell — check context',
    ],
    [
      <span key="s4" className="font-semibold text-green-600">Price Touching Lower Band</span>,
      'Price at/below lower boundary',
      'Relatively low',
      'NOT auto-buy — check context',
    ],
    [
      <span key="s5" className="font-semibold text-green-700">Break Above Upper + High Vol</span>,
      'Strong breakout with conviction',
      'Momentum breakout confirmed',
      <span key="a5" className="font-semibold text-green-700">Consider long</span>,
    ],
    [
      <span key="s6" className="font-semibold text-red-700">Break Below Lower + High Vol</span>,
      'Strong breakdown with conviction',
      'Momentum breakdown confirmed',
      <span key="a6" className="font-semibold text-red-700">Consider short</span>,
    ],
    [
      <span key="s7" className="font-semibold text-teal-600">&ldquo;Riding the Band&rdquo;</span>,
      'Price walks along band for multiple candles',
      'Very strong trend',
      <span key="a7" className="font-semibold text-amber-700">Do NOT fight it</span>,
    ],
  ]

  return (
    <TopicCard
      id="d3-bb-signals"
      title="Bollinger Bands — Reading the Signals"
      icon={<Activity />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Bollinger Bands provide several distinct signals. Understanding each one
        helps you read volatility and anticipate price moves. Remember: every signal
        must be confirmed with <span className="font-bold text-amber-700">context</span> —
        never trade bands alone.
      </p>

      <div className="mb-4">
        <ComparisonTable headers={headers} rows={rows} />
      </div>

      <KeyTakeaway>
        The most valuable Bollinger Band signal is the <strong>squeeze</strong> — it
        tells you a big move is coming. The direction is not guaranteed, so wait
        for the breakout to confirm before entering.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 3: Bollinger Bands — The Squeeze Strategy
   ═══════════════════════════════════════════════════════════════════════ */

function TopicBBSqueezeStrategy() {
  return (
    <TopicCard
      id="d3-bb-squeeze-strategy"
      title="Bollinger Bands — The Squeeze Strategy"
      icon={<Target />}
      variant="success"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        The Bollinger Band squeeze is one of the most <span className="font-bold text-green-700">predictive</span> patterns
        in technical analysis. When bands squeeze tight, a big move is imminent. Here
        is the complete 5-step strategy.
      </p>

      {/* 5 steps */}
      <div className="space-y-4 mb-6">
        {/* Step 1 */}
        <div className="rounded-xl border-2 border-amber-300 bg-amber-50/50 p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">1</div>
            <h4 className="text-sm font-bold text-amber-900 sm:text-base">IDENTIFY THE SQUEEZE</h4>
          </div>
          <p className="text-sm text-slate-700">
            Bands are close together. Bandwidth (Upper - Lower / Middle) is at a
            <strong> 6-month low</strong>. The market is coiling like a spring.
          </p>
        </div>

        {/* Step 2 */}
        <div className="rounded-xl border-2 border-teal-300 bg-teal-50/50 p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">2</div>
            <h4 className="text-sm font-bold text-teal-900 sm:text-base">WAIT FOR THE BREAKOUT</h4>
          </div>
          <p className="text-sm text-slate-700">
            <strong>Do NOT predict direction.</strong> Wait for price to show you which way
            it wants to go. The breakout candle closes above the upper band (bullish) or
            below the lower band (bearish).
          </p>
        </div>

        {/* Step 3 */}
        <div className="rounded-xl border-2 border-purple-300 bg-purple-50/50 p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">3</div>
            <h4 className="text-sm font-bold text-purple-900 sm:text-base">CONFIRM WITH VOLUME</h4>
          </div>
          <p className="text-sm text-slate-700">
            <span className="font-semibold text-green-600">High volume = real breakout.</span>{' '}
            <span className="font-semibold text-red-600">Low volume = suspicious, likely fakeout.</span>{' '}
            Volume is the truth teller — it confirms whether the move has conviction.
          </p>
        </div>

        {/* Step 4 */}
        <div className="rounded-xl border-2 border-green-300 bg-green-50/50 p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">4</div>
            <h4 className="text-sm font-bold text-green-900 sm:text-base">ENTER THE TRADE</h4>
          </div>
          <div className="grid gap-2 sm:grid-cols-3 text-sm text-slate-700">
            <div className="rounded-lg border border-green-200 bg-white p-3">
              <p className="text-xs font-bold text-green-800 mb-1">ENTRY</p>
              <p>On breakout close or pullback to middle band</p>
            </div>
            <div className="rounded-lg border border-red-200 bg-white p-3">
              <p className="text-xs font-bold text-red-800 mb-1">STOP LOSS</p>
              <p>Below lower band (longs) or above upper band (shorts)</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-white p-3">
              <p className="text-xs font-bold text-amber-800 mb-1">TAKE PROFIT</p>
              <p>At opposite band or next S/R level</p>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="rounded-xl border-2 border-slate-300 bg-slate-50/50 p-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-600 text-sm font-bold text-white">5</div>
            <h4 className="text-sm font-bold text-slate-900 sm:text-base">SET REALISTIC EXPECTATIONS</h4>
          </div>
          <ul className="space-y-1 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              Bigger squeeze = bigger expected move
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              Not every squeeze works — some are false breakouts
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              Always use a stop loss — no exceptions
            </li>
          </ul>
        </div>
      </div>

      {/* SVG */}
      <div className="mb-4 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          Bollinger Band Squeeze Breakout with Volume, Entry, SL, and TP
        </p>
        <BollingerSqueezeBreakoutSVG />
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 4: Bollinger Bands — Common Mistakes
   ═══════════════════════════════════════════════════════════════════════ */

function TopicBBCommonMistakes() {
  return (
    <TopicCard
      id="d3-bb-mistakes"
      title="Bollinger Bands — Common Mistakes"
      icon={<AlertTriangle />}
      variant="warning"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Bollinger Bands are powerful, but misusing them leads to losses. Here are the
        four most common mistakes beginners make — and how to fix them.
      </p>

      <div className="space-y-4">
        {/* Mistake 1 */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4">
          <div className="flex items-start gap-3 mb-3">
            <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <div>
              <p className="text-sm font-bold text-red-800">Mistake 1: Selling every upper band touch</p>
              <p className="mt-1 text-sm text-slate-700">
                Price can &ldquo;ride&rdquo; the upper band in a strong uptrend for days or weeks.
                Selling just because price touches the upper band means you exit profitable trades too early.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <p className="text-sm text-slate-700">
              <span className="font-bold text-green-800">Fix:</span> Only sell with
              bearish pattern + resistance + divergence. The band touch alone is not a signal.
            </p>
          </div>
        </div>

        {/* Mistake 2 */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4">
          <div className="flex items-start gap-3 mb-3">
            <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <div>
              <p className="text-sm font-bold text-red-800">Mistake 2: Buying every lower band touch</p>
              <p className="mt-1 text-sm text-slate-700">
                Price can &ldquo;ride&rdquo; the lower band in a strong downtrend. Buying just
                because it touched the lower band means catching a falling knife.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <p className="text-sm text-slate-700">
              <span className="font-bold text-green-800">Fix:</span> Only buy with
              bullish pattern + support + divergence. The band touch alone is not a signal.
            </p>
          </div>
        </div>

        {/* Mistake 3 */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4">
          <div className="flex items-start gap-3 mb-3">
            <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <div>
              <p className="text-sm font-bold text-red-800">Mistake 3: Ignoring the squeeze</p>
              <p className="mt-1 text-sm text-slate-700">
                The squeeze is the most valuable signal Bollinger Bands provide. Ignoring it
                means missing the highest-probability setups.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <p className="text-sm text-slate-700">
              <span className="font-bold text-green-800">Fix:</span> Check for
              squeeze FIRST — it is the most valuable signal. When you see tight bands, go on alert.
            </p>
          </div>
        </div>

        {/* Mistake 4 */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 p-4">
          <div className="flex items-start gap-3 mb-3">
            <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
            <div>
              <p className="text-sm font-bold text-red-800">Mistake 4: Using BB as standalone</p>
              <p className="mt-1 text-sm text-slate-700">
                Bollinger Bands measure volatility — they do not tell you direction. Using
                them alone is like driving with only a speedometer and no steering wheel.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <p className="text-sm text-slate-700">
              <span className="font-bold text-green-800">Fix:</span> Always combine
              with S/R, trend direction, and volume. BB gives you volatility context; other
              tools give you direction and location.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 5: Practice — Bollinger Bands Setup and Analysis
   ═══════════════════════════════════════════════════════════════════════ */

function TopicPracticeBB() {
  return (
    <TopicCard
      id="d3-practice-bb"
      title="Practice — Bollinger Bands Setup and Analysis"
      icon={<FlaskConical />}
      variant="default"
    >
      <div className="mb-5 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="h-5 w-5 text-amber-600" />
          <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wide">Practice Lab</h4>
        </div>
        <div className="space-y-1">
          <ChecklistItem>
            Add BB (20,2) to BTC/USDT daily chart. Are the bands squeezing, expanding, or normal right now?
          </ChecklistItem>
          <ChecklistItem>
            Find 3 historical squeezes — how long did each squeeze last? Which direction did the breakout go? How big was the move? Was volume confirmed?
          </ChecklistItem>
          <ChecklistItem>
            Find 2 examples of &ldquo;riding the upper band&rdquo; — how long did price ride the band? What ended it?
          </ChecklistItem>
          <ChecklistItem>
            Find 2 lower band touches that reversed — was there also support at that level?
          </ChecklistItem>
          <ChecklistItem>
            Find a breakout above the upper band WITH volume — did price continue? Find one WITHOUT volume — did it fail?
          </ChecklistItem>
          <ChecklistItem>
            Write: &ldquo;Bollinger Band squeezes are valuable because ___&rdquo;
          </ChecklistItem>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 6: Combining Volume + Bollinger Bands — The Volatility Breakout System
   ═══════════════════════════════════════════════════════════════════════ */

function TopicVolatilityBreakoutSystem() {
  return (
    <TopicCard
      id="d3-volatility-breakout"
      title="Combining Volume + Bollinger Bands — The Volatility Breakout System"
      icon={<Zap />}
      variant="highlight"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        This is a complete, rule-based trading system that combines the two most
        powerful concepts from today: <span className="font-bold text-amber-700">Bollinger Bands</span> (volatility)
        and <span className="font-bold text-amber-700">Volume</span> (conviction).
      </p>

      {/* 5 system components */}
      <div className="space-y-4 mb-6">
        {/* Setup */}
        <div className="rounded-xl border-l-4 border-l-teal-500 bg-teal-50/60 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Volume2 className="h-5 w-5 text-teal-600" />
            <h4 className="text-sm font-bold text-teal-800">THE SETUP</h4>
          </div>
          <p className="text-sm text-slate-700">
            BB squeezing + price breaks out in either direction + <strong>CHECK VOLUME</strong>.
            If volume is high on the breakout, the setup is valid. If volume is low, skip it.
          </p>
        </div>

        {/* Entry */}
        <div className="rounded-xl border-l-4 border-l-green-500 bg-green-50/60 p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <h4 className="text-sm font-bold text-green-800">THE ENTRY</h4>
          </div>
          <p className="text-sm text-slate-700">
            Enter on the breakout candle close, or on a pullback to the middle band
            (SMA 20) for a better risk/reward ratio.
          </p>
        </div>

        {/* Protection */}
        <div className="rounded-xl border-l-4 border-l-red-500 bg-red-50/60 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-5 w-5 text-red-600" />
            <h4 className="text-sm font-bold text-red-800">THE PROTECTION</h4>
          </div>
          <p className="text-sm text-slate-700">
            Stop loss below the lower band (for longs) or above the upper band (for shorts).
            This gives the trade room to breathe while keeping risk defined.
          </p>
        </div>

        {/* Target */}
        <div className="rounded-xl border-l-4 border-l-amber-500 bg-amber-50/60 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-5 w-5 text-amber-600" />
            <h4 className="text-sm font-bold text-amber-800">THE TARGET</h4>
          </div>
          <ul className="space-y-1 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              <span><strong>First target:</strong> The opposite band</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              <span><strong>Second target:</strong> Next S/R level (from your Day 2 analysis)</span>
            </li>
          </ul>
        </div>

        {/* Confirmation */}
        <div className="rounded-xl border-l-4 border-l-purple-500 bg-purple-50/60 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="h-5 w-5 text-purple-600" />
            <h4 className="text-sm font-bold text-purple-800">THE CONFIRMATION</h4>
          </div>
          <ul className="space-y-1 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
              <span><strong>RSI:</strong> Is it confirming the breakout direction?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500" />
              <span><strong>MACD:</strong> Has it crossed in the direction of the breakout?</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Practice callout */}
      <div className="rounded-lg border-2 border-dashed border-amber-400 bg-amber-50/30 p-4">
        <div className="flex items-center gap-2 mb-2">
          <FlaskConical className="h-5 w-5 text-amber-600" />
          <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wide">Practice</h4>
        </div>
        <p className="text-sm text-slate-700">
          Find 2 examples of this system working on BTC/USDT daily. Screenshot and
          label each step (Setup, Entry, SL, TP, Confirmation).
        </p>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 7: THE COMPLETE 7-POINT TECHNICAL ANALYSIS FRAMEWORK
   ═══════════════════════════════════════════════════════════════════════ */

function TopicSevenPointFramework() {
  return (
    <TopicCard
      id="d3-seven-point-framework"
      title="THE COMPLETE 7-POINT TECHNICAL ANALYSIS FRAMEWORK"
      icon={<Star />}
      variant="highlight"
    >
      <p className="mb-2 text-sm leading-relaxed text-slate-600 sm:text-base">
        This is the <span className="font-bold text-amber-700">culmination of Days 2 and 3</span>.
        Every concept you have learned fits into this single framework. When you analyze
        any chart, you run through these 7 points in order. This is how professional
        traders think.
      </p>

      <div className="mb-4 rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
        <p className="text-sm font-bold text-amber-800">This is the most important topic of the entire bootcamp so far.</p>
        <p className="mt-1 text-sm text-slate-700">
          If you only take one thing away from Days 2 and 3, it is this framework.
          Memorize it. Practice it. Use it every single time you look at a chart.
        </p>
      </div>

      {/* 7 Points */}
      <div className="space-y-4 mb-6">
        {/* Point 1 */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">1</div>
            <div>
              <h4 className="text-sm font-bold text-green-800 sm:text-base">MARKET STRUCTURE</h4>
              <p className="mt-1 text-sm text-slate-700">
                Current trend? Break of Structure (BOS)? → <strong className="text-green-700">DIRECTION</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Point 2 */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">2</div>
            <div>
              <h4 className="text-sm font-bold text-blue-800 sm:text-base">KEY S/R LEVELS</h4>
              <p className="mt-1 text-sm text-slate-700">
                Nearest S1, S2, R1, R2? → <strong className="text-blue-700">LOCATION</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Point 3 */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">3</div>
            <div>
              <h4 className="text-sm font-bold text-amber-800 sm:text-base">EMA POSITION</h4>
              <p className="mt-1 text-sm text-slate-700">
                Price vs 200; EMA 20 vs 50; Cross? → <strong className="text-amber-700">MOMENTUM + dynamic S/R</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Point 4 */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">4</div>
            <div>
              <h4 className="text-sm font-bold text-purple-800 sm:text-base">RSI</h4>
              <p className="mt-1 text-sm text-slate-700">
                Reading? Divergence? → <strong className="text-purple-700">MOMENTUM STRENGTH + potential reversals</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Point 5 */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">5</div>
            <div>
              <h4 className="text-sm font-bold text-orange-800 sm:text-base">MACD</h4>
              <p className="mt-1 text-sm text-slate-700">
                Zero line? Last crossover? Histogram? → <strong className="text-orange-700">MOMENTUM DIRECTION + timing</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Point 6 */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">6</div>
            <div>
              <h4 className="text-sm font-bold text-teal-800 sm:text-base">VOLUME</h4>
              <p className="mt-1 text-sm text-slate-700">
                Trend? Confirms price? Divergence/spikes? → <strong className="text-teal-700">CONVICTION LEVEL</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Point 7 */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">7</div>
            <div>
              <h4 className="text-sm font-bold text-red-800 sm:text-base">BOLLINGER BANDS</h4>
              <p className="mt-1 text-sm text-slate-700">
                Squeeze? Band position? Breakout with volume? → <strong className="text-red-700">VOLATILITY CONTEXT</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SYNTHESIS */}
      <p className="mb-3 text-sm font-bold text-slate-800">SYNTHESIS — How Many Points Agree?</p>
      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border-2 border-green-300 bg-green-50 p-4 text-center">
          <div className="mb-2 flex h-10 w-10 mx-auto items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">7</div>
          <p className="text-sm font-bold text-green-800">All 7 agree</p>
          <p className="mt-1 text-xs font-semibold text-green-700 uppercase">STRONG BIAS</p>
        </div>
        <div className="rounded-xl border-2 border-amber-300 bg-amber-50 p-4 text-center">
          <div className="mb-2 flex h-10 w-10 mx-auto items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">5-6</div>
          <p className="text-sm font-bold text-amber-800">5-6 agree</p>
          <p className="mt-1 text-xs font-semibold text-amber-700 uppercase">MEDIUM BIAS</p>
        </div>
        <div className="rounded-xl border-2 border-orange-300 bg-orange-50 p-4 text-center">
          <div className="mb-2 flex h-10 w-10 mx-auto items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">3-4</div>
          <p className="text-sm font-bold text-orange-800">3-4 agree</p>
          <p className="mt-1 text-xs font-semibold text-orange-700 uppercase">WEAK BIAS</p>
        </div>
        <div className="rounded-xl border-2 border-red-300 bg-red-50 p-4 text-center">
          <div className="mb-2 flex h-10 w-10 mx-auto items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">&lt;3</div>
          <p className="text-sm font-bold text-red-800">Less than 3 agree</p>
          <p className="mt-1 text-xs font-semibold text-red-700 uppercase">NO BIAS — Stay out</p>
        </div>
      </div>

      {/* BIAS STATEMENT template */}
      <div className="rounded-xl bg-slate-800 p-5">
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-amber-400">Your Bias Statement Template</p>
        <p className="text-sm leading-relaxed text-slate-200 italic">
          &ldquo;Based on [list confirming points], my bias is [bullish/bearish/neutral]
          because [specific reason]. If price does [scenario A], I will [action].
          If price does [scenario B], I will [action].&rdquo;
        </p>
        <div className="mt-3 rounded-lg bg-slate-700 p-3">
          <p className="text-xs font-bold text-slate-400 mb-1">EXAMPLE:</p>
          <p className="text-xs leading-relaxed text-slate-300 italic">
            &ldquo;Based on Points 1,3,4,5,6,7, my bias is bullish because structure is
            uptrend, EMAs stacked bullish, RSI showing momentum, MACD bullish crossover,
            volume confirming, and BB showing expansion upward. If price pulls back to
            EMA 20, I will enter long with SL below EMA 50. If price breaks below EMA 50,
            I will re-assess.&rdquo;
          </p>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 8: Practice — Full 7-Point Analysis of BTC/USDT
   ═══════════════════════════════════════════════════════════════════════ */

function TopicPracticeBTCAnalysis() {
  return (
    <TopicCard
      id="d3-practice-btc-analysis"
      title="Practice — Full 7-Point Analysis of BTC/USDT"
      icon={<FlaskConical />}
      variant="default"
    >
      <div className="mb-5 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="h-5 w-5 text-amber-600" />
          <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wide">Practice Lab</h4>
        </div>
        <p className="mb-3 text-sm text-slate-700">
          Open BTC/USDT on the daily timeframe and run the full 7-point framework:
        </p>
        <div className="space-y-1">
          <ChecklistItem>
            <strong>Point 1 — Structure:</strong> The current structure is ___. The trend is ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 2 — S/R Levels:</strong> Nearest support is ___ and nearest resistance is ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 3 — EMAs:</strong> Price is ___ EMA 200. EMA 20 is ___ EMA 50. They are ___ (stacked/tangled).
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 4 — RSI:</strong> RSI is ___. There is ___ (divergence / no divergence).
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 5 — MACD:</strong> MACD is ___ the zero line. Last crossover was ___. Histogram is ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 6 — Volume:</strong> Volume is ___ (rising/falling/neutral). It ___ (confirms/does not confirm) price.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 7 — Bollinger Bands:</strong> Bands are ___ (squeezing/expanding/normal). Price is near the ___ band.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Synthesis:</strong> ___ out of 7 points agree. My bias statement: ___.
          </ChecklistItem>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 9: Practice — Full 7-Point Analysis of ETH/USDT
   ═══════════════════════════════════════════════════════════════════════ */

function TopicPracticeETHAnalysis() {
  return (
    <TopicCard
      id="d3-practice-eth-analysis"
      title="Practice — Full 7-Point Analysis of ETH/USDT"
      icon={<FlaskConical />}
      variant="default"
    >
      <div className="mb-5 rounded-xl border-2 border-dashed border-teal-400 bg-teal-50/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="h-5 w-5 text-teal-600" />
          <h4 className="text-sm font-bold text-teal-800 uppercase tracking-wide">Practice Lab — ETH/USDT 4H Timeframe</h4>
        </div>
        <p className="mb-3 text-sm text-slate-700">
          Apply the same 7-point framework to ETH/USDT on the 4-hour timeframe:
        </p>
        <div className="space-y-1">
          <ChecklistItem>
            <strong>Point 1 — Structure:</strong> The current structure is ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 2 — S/R Levels:</strong> Nearest S/R are ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 3 — EMAs:</strong> EMA alignment is ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 4 — RSI:</strong> RSI reading and divergence status ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 5 — MACD:</strong> MACD position and crossover ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 6 — Volume:</strong> Volume trend and confirmation ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 7 — Bollinger Bands:</strong> Band state and price position ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Compare with BTC:</strong> ETH&apos;s bias is ___. It ___ (agrees/conflicts) with BTC&apos;s bias.
          </ChecklistItem>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 10: Practice — Full 7-Point Analysis of an Altcoin
   ═══════════════════════════════════════════════════════════════════════ */

function TopicPracticeAltcoinAnalysis() {
  return (
    <TopicCard
      id="d3-practice-altcoin-analysis"
      title="Practice — Full 7-Point Analysis of an Altcoin"
      icon={<FlaskConical />}
      variant="default"
    >
      <div className="mb-5 rounded-xl border-2 border-dashed border-purple-400 bg-purple-50/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <FlaskConical className="h-5 w-5 text-purple-600" />
          <h4 className="text-sm font-bold text-purple-800 uppercase tracking-wide">Practice Lab — Choose Your Altcoin</h4>
        </div>
        <p className="mb-3 text-sm text-slate-700">
          Choose any altcoin (SOL, AVAX, LINK, etc.) and apply the full 7-point framework
          on the daily timeframe:
        </p>
        <div className="space-y-1">
          <ChecklistItem>
            <strong>Point 1 — Structure:</strong> The current structure is ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 2 — S/R Levels:</strong> Nearest S/R are ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 3 — EMAs:</strong> EMA alignment is ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 4 — RSI:</strong> RSI reading and divergence ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 5 — MACD:</strong> MACD position and signal ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 6 — Volume:</strong> Volume trend ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Point 7 — Bollinger Bands:</strong> Band state ___.
          </ChecklistItem>
          <ChecklistItem>
            <strong>Compare to BTC:</strong> This altcoin&apos;s bias ___ (agrees/conflicts) with BTC. When BTC leads, altcoins tend to ___.
          </ChecklistItem>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 11: Day 3 Self-Check Quiz — 20 Questions
   ═══════════════════════════════════════════════════════════════════════ */

function TopicDay3Quiz() {
  return (
    <TopicCard
      id="d3-quiz-la"
      title="Day 3 Self-Check Quiz — 20 Questions"
      icon={<BookOpen />}
      variant="highlight"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Test your understanding of Day 3 material. Click each question to reveal the answer.
        Be honest with yourself — if you cannot answer a question, go back and review.
      </p>

      <div className="space-y-3 mb-6">
        <QuizQuestion number={1} question="What 4 pieces of data does a candlestick contain?">
          <p>Open, High, Low, Close (OHLC). The body shows open-to-close, and the wicks show the high and low of the period.</p>
        </QuizQuestion>

        <QuizQuestion number={2} question="What does a long upper wick mean?">
          <p>Buyers pushed price up during the period, but sellers pushed it back down by the close. It shows rejection of higher prices — a bearish signal, especially at resistance.</p>
        </QuizQuestion>

        <QuizQuestion number={3} question="What does a long lower wick mean?">
          <p>Sellers pushed price down during the period, but buyers pushed it back up by the close. It shows rejection of lower prices — a bullish signal, especially at support.</p>
        </QuizQuestion>

        <QuizQuestion number={4} question="Draw a Hammer pattern. Where is it most reliable?">
          <p>A Hammer has a small body at the top and a long lower wick (at least 2x the body). It is most reliable at support levels, signaling a potential bullish reversal.</p>
        </QuizQuestion>

        <QuizQuestion number={5} question="Draw a Bearish Engulfing pattern. Where is it most reliable?">
          <p>A Bearish Engulfing has a small green candle followed by a larger red candle that completely &ldquo;engulfs&rdquo; the green candle&apos;s body. It is most reliable at resistance levels, signaling a potential bearish reversal.</p>
        </QuizQuestion>

        <QuizQuestion number={6} question="What does a Doji signal? Where does it matter most?">
          <p>A Doji has a very small body (open nearly equals close), showing indecision. It matters most at key S/R levels where a decision is imminent — it signals a potential reversal or continuation depending on the next candle.</p>
        </QuizQuestion>

        <QuizQuestion number={7} question="What is the golden rule about where patterns appear?">
          <p>WHERE a pattern appears matters 5-10x more than WHAT the pattern is. A Hammer at support is a strong buy signal. The same Hammer in the middle of a range means almost nothing.</p>
        </QuizQuestion>

        <QuizQuestion number={8} question="What does RSI measure?">
          <p>RSI (Relative Strength Index) measures the speed and magnitude of recent price changes — it quantifies momentum strength on a 0-100 scale. It does NOT measure the &ldquo;strength of the coin.&rdquo;</p>
        </QuizQuestion>

        <QuizQuestion number={9} question="What RSI level indicates overbought? Oversold?">
          <p>RSI above 70 indicates overbought conditions. RSI below 30 indicates oversold conditions. However, these are zones of caution, NOT automatic buy/sell signals.</p>
        </QuizQuestion>

        <QuizQuestion number={10} question="What is RSI divergence? Describe bullish divergence.">
          <p>RSI divergence occurs when price and RSI disagree. Bullish divergence: Price makes a lower low, but RSI makes a higher low. This means selling momentum is weakening even though price is still falling — a potential reversal signal.</p>
        </QuizQuestion>

        <QuizQuestion number={11} question="Why is RSI divergence more powerful than overbought/oversold?">
          <p>Divergence is a LEADING signal — it warns before the reversal happens. Overbought/oversold readings can persist for weeks in strong trends. Divergence shows the actual momentum shift in real time.</p>
        </QuizQuestion>

        <QuizQuestion number={12} question="What is hidden divergence?">
          <p>Hidden divergence signals trend CONTINUATION (not reversal). Bullish hidden divergence: Price makes a higher low, but RSI makes a lower low — the uptrend still has momentum. Bearish hidden divergence: Price makes a lower high, but RSI makes a higher high — the downtrend still has momentum.</p>
        </QuizQuestion>

        <QuizQuestion number={13} question="What are the 3 components of MACD?">
          <p>1) MACD Line (EMA 12 - EMA 26) — the fast momentum line. 2) Signal Line (9-period EMA of MACD Line) — the slower trigger line. 3) Histogram (MACD Line - Signal Line) — shows the distance between the two, indicating momentum strength.</p>
        </QuizQuestion>

        <QuizQuestion number={14} question="What does a MACD bullish crossover look like?">
          <p>The MACD Line crosses above the Signal Line. It is stronger when it happens below the zero line (deep oversold territory) and confirmed by an expanding green histogram.</p>
        </QuizQuestion>

        <QuizQuestion number={15} question="What does a shrinking histogram indicate?">
          <p>A shrinking histogram means the gap between the MACD Line and Signal Line is narrowing — momentum is weakening. If the histogram was positive and shrinking, bullish momentum is fading. If negative and shrinking, bearish momentum is fading.</p>
        </QuizQuestion>

        <QuizQuestion number={16} question="Why is MACD a lagging indicator?">
          <p>MACD is built from EMAs (moving averages), which by definition look backward. The crossover happens AFTER the price has already moved. MACD confirms what has happened; it does not predict what will happen.</p>
        </QuizQuestion>

        <QuizQuestion number={17} question="What does volume confirm?">
          <p>Volume confirms CONVICTION. A price move with high volume has conviction (real, sustainable). A price move with low volume lacks conviction (potentially a fakeout). Volume tells you whether market participants truly back the move.</p>
        </QuizQuestion>

        <QuizQuestion number={18} question="How do you distinguish a real breakout from a fakeout using volume?">
          <p>Real breakout: Volume spikes significantly above average on the breakout candle, and price sustains above/below the level on subsequent candles. Fakeout: Volume is below average or declining on the breakout, and price quickly reverses back below/above the level.</p>
        </QuizQuestion>

        <QuizQuestion number={19} question="What does a Bollinger Band squeeze indicate?">
          <p>A squeeze indicates that volatility has dropped to extreme lows and the market is coiling for a big move. The tighter the squeeze, the bigger the expected breakout. Direction is NOT guaranteed — wait for the breakout to confirm.</p>
        </QuizQuestion>

        <QuizQuestion number={20} question="Can you do a complete 7-point analysis without help?">
          <p>If you can run through all 7 points (Market Structure, S/R Levels, EMA Position, RSI, MACD, Volume, Bollinger Bands) and write a complete bias statement on any chart, you are ready for Day 4. If not, review the areas where you struggled before proceeding.</p>
        </QuizQuestion>
      </div>

      {/* Pass mark banner */}
      <div className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 p-5 text-center">
        <Award className="mx-auto mb-2 h-8 w-8 text-white" />
        <p className="text-lg font-bold text-white">Pass Mark: 16/20</p>
        <p className="mt-1 text-sm text-amber-100">
          If you scored below 16, review the topics you missed before moving to Day 4.
        </p>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 12: Day 3 Key Takeaways
   ═══════════════════════════════════════════════════════════════════════ */

function TopicDay3KeyTakeaways() {
  const takeaways = [
    { icon: <BarChart3 className="h-4 w-4" />, text: 'Candlesticks reveal market psychology at key levels' },
    { icon: <Target className="h-4 w-4" />, text: 'WHERE a pattern appears matters more than WHAT it is (5-10x at S/R)' },
    { icon: <Eye className="h-4 w-4" />, text: '10 patterns that matter: Hammer, Bullish Engulfing, Morning Star, Piercing Line (bullish), Shooting Star, Bearish Engulfing, Evening Star, Dark Cloud Cover (bearish), Doji, Spinning Top' },
    { icon: <Gauge className="h-4 w-4" />, text: 'RSI measures momentum — DIVERGENCE is the real power' },
    { icon: <Zap className="h-4 w-4" />, text: 'Regular divergence = reversal, Hidden divergence = continuation' },
    { icon: <Activity className="h-4 w-4" />, text: 'MACD confirms trend changes through crossovers — it is lagging' },
    { icon: <Volume2 className="h-4 w-4" />, text: 'Volume is the truth teller — no volume = no conviction' },
    { icon: <Layers className="h-4 w-4" />, text: 'Bollinger Bands measure volatility — squeezes predict big moves' },
    { icon: <Star className="h-4 w-4" />, text: '7-point framework = complete analysis' },
    { icon: <Shield className="h-4 w-4" />, text: 'More points agreeing = higher probability' },
    { icon: <Crosshair className="h-4 w-4" />, text: 'Always write a bias statement' },
    { icon: <ArrowRight className="h-4 w-4" />, text: 'Tomorrow: Trading styles, signals, and RISK MANAGEMENT' },
  ]

  return (
    <TopicCard
      id="d3-key-takeaways-la"
      title="Day 3 Key Takeaways"
      icon={<Star />}
      variant="default"
    >
      <div className="space-y-3 mb-6">
        {takeaways.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              {item.icon}
            </div>
            <div className="flex items-start gap-2 min-w-0">
              <span className="mt-0.5 text-xs font-bold text-slate-400">{idx + 1}.</span>
              <p className="text-sm text-slate-700">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tomorrow teaser */}
      <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-5">
        <div className="flex items-center gap-3 mb-2">
          <ArrowRight className="h-6 w-6 text-amber-400" />
          <h4 className="text-lg font-bold text-amber-400">Tomorrow — Day 4</h4>
        </div>
        <p className="text-sm text-slate-300">
          Trading styles, entry/exit signals, and <span className="font-bold text-amber-400">RISK MANAGEMENT</span> —
          the most important topic of the entire bootcamp. You will learn how to protect your
          capital and survive long enough to become consistently profitable.
        </p>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 13: Day 3 Homework (Before Day 4)
   ═══════════════════════════════════════════════════════════════════════ */

function TopicDay3Homework() {
  return (
    <TopicCard
      id="d3-homework-la"
      title="Day 3 Homework (Before Day 4)"
      icon={<ClipboardList />}
      variant="highlight"
    >
      <div className="mb-5 rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <ClipboardList className="h-5 w-5 text-amber-600" />
          <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wide">Homework Lab</h4>
        </div>
        <div className="space-y-1">
          <ChecklistItem>
            Full 7-point analysis for 3 different cryptocurrencies (BTC + 2 others)
          </ChecklistItem>
          <ChecklistItem>
            Find 5 candlestick patterns on any chart. Screenshot each with labels
          </ChecklistItem>
          <ChecklistItem>
            Find 5 RSI divergences. Screenshot and label each (regular or hidden, bullish or bearish)
          </ChecklistItem>
          <ChecklistItem>
            Find 3 volume-confirmed breakouts and 2 volume-divergence signals. Label each
          </ChecklistItem>
          <ChecklistItem>
            Find 2 Bollinger Band squeezes. What happened after each squeeze?
          </ChecklistItem>
          <ChecklistItem>
            Write: &ldquo;The indicator I trust the most is ___ because ___. The indicator
            I find most confusing is ___ because ___.&rdquo;
          </ChecklistItem>
        </div>
      </div>

      {/* Encouragement banner */}
      <div className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 p-5 text-center">
        <p className="text-lg font-bold text-white">
          You have completed Day 3!
        </p>
        <p className="mt-1 text-sm text-green-100">
          You now have a complete 7-point analysis framework. Practice it until it becomes
          second nature. The more charts you analyze, the faster and more accurate you will become.
        </p>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT: Day3LateAfternoonBlock
   ═══════════════════════════════════════════════════════════════════════ */

export function Day3LateAfternoonBlock() {
  return (
    <section id="d3-late-afternoon" aria-labelledby="d3-late-afternoon-heading" className="scroll-mt-16">
      <SectionDivider title="LATE AFTERNOON BLOCK — HOURS 7–8: BOLLINGER BANDS & THE COMPLETE FRAMEWORK" />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicWhatAreBollingerBands />
        <TopicBBReadingSignals />
        <TopicBBSqueezeStrategy />
        <TopicBBCommonMistakes />
        <TopicPracticeBB />
        <TopicVolatilityBreakoutSystem />
        <TopicSevenPointFramework />
        <TopicPracticeBTCAnalysis />
        <TopicPracticeETHAnalysis />
        <TopicPracticeAltcoinAnalysis />

        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d3-mexc-pattern-lab"
          title="MEXC Trading Lab: Pattern-Based Trading"
          icon={<TrendingUp />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Now put your candlestick pattern knowledge into action! Use the MEXC simulator to practice
            placing trades based on the patterns and indicators you learned today. Remember:
            Pattern + Level + Confirmation = High-Probability Trade.
          </p>

          <div className="mb-4 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="mb-2 text-sm font-bold text-green-800 sm:text-base">Practice Instructions</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Identify a bullish pattern on the chart, then place a Buy (Long) limit order at the support level where the pattern appeared
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Place a Sell (Short) order when you spot a bearish engulfing or shooting star pattern near resistance
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Use limit orders for precision entries — set your price at the support/resistance level, not at market price
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Always think about your stop-loss before entering — where would the pattern be invalidated?
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Target a minimum 1:2 risk/reward ratio — if your stop is $500 away, your target should be at least $1,000 away
              </li>
            </ul>
          </div>

          <MEXCLab />

          <KeyTakeaway>
            Pattern-based trading requires patience — wait for the pattern to form at a key level before entering.
            Never force a trade. The market will always present another opportunity. Your job is to execute only when
            the setup meets all your criteria: Pattern + Level + Indicator Confirmation + Volume.
          </KeyTakeaway>
        </TopicCard>

        <TopicDay3Quiz />
        <TopicDay3KeyTakeaways />
        <TopicDay3Homework />

        <AppliedLabSimulation
          id="d3-lab-2-mexc-patterns"
          title="LAB 6: Pattern-Based Trade Execution"
          subtitle="Use the MEXC simulator to execute a trade based on a candlestick pattern at a support/resistance level"
          dayNumber={3}
          sessionName="Late Afternoon Block"
          labType="mexc"
          learningObjectives={[
            'Combine candlestick pattern recognition with S/R level identification',
            'Execute a trade when a pattern confirms a level',
            'Practice risk management with pattern-based entries',
            'Use the Pattern + Level = High Probability framework',
          ]}
          tasks={[
            { id: 'd3-l2-t1', instruction: 'Look at the BTC price chart in the MEXC simulator. Identify where the current price is relative to recent support and resistance levels', hint: 'Check the order book — clustered buy orders suggest a support level, clustered sell orders suggest resistance' },
            { id: 'd3-l2-t2', instruction: 'Wait for or identify a candlestick pattern at one of these levels. For example: a bullish candle forming at support, or a bearish rejection at resistance', hint: 'You are looking for a candlestick that shows a reaction at the level — a long lower wick at support or a long upper wick at resistance' },
            { id: 'd3-l2-t3', instruction: 'If you see a bullish pattern at support: Switch to BUY side and set a Limit order just above the pattern\'s high', hint: 'Buying above the pattern\'s high confirms the pattern. The pattern shows buyers are stepping in; your entry confirms they are taking control.' },
            { id: 'd3-l2-t4', instruction: 'Set your position size (0.01 BTC) and place the order', hint: '0.01 BTC at ~$67,500 = $675 position size. This keeps your risk manageable.' },
            { id: 'd3-l2-t5', instruction: 'Plan your exit: Stop-loss below the pattern (below the support level). Take-profit at the next resistance level', hint: 'The pattern + level gives you a clear invalidation point (stop-loss) and a clear target (take-profit). This is why pattern + level is so powerful.' },
            { id: 'd3-l2-t6', instruction: 'Record your trade in your journal: Pattern type, Level, Entry, Stop-loss, Take-profit, Risk:Reward ratio', hint: 'A proper trade journal entry: "Bullish hammer at $67,400 support. Entry: $67,500. SL: $67,300. TP: $67,600. R:R = 1:0.5 (need at least 1:2)" — adjust your levels to achieve a better R:R.' },
          ]}
          selfAssessment={[
            {
              question: 'What is the "Pattern + Level" framework?',
              options: [
                'Using two patterns at the same time',
                'A candlestick pattern at a support/resistance level creates a high-probability trade',
                'Only trading when two indicators agree',
                'Trading at round number levels only',
              ],
              correctIndex: 1,
              explanation: 'Pattern + Level = High Probability. A candlestick pattern alone is just a shape. But when that same pattern forms at a validated S/R level, it becomes a high-probability trade setup because you have both pattern confirmation and level confluence.',
            },
            {
              question: 'Where should your stop-loss be when buying on a bullish pattern at support?',
              options: [
                'Above the resistance level',
                'Below the support level (below the pattern)',
                'At the entry price',
                'There is no need for a stop-loss',
              ],
              correctIndex: 1,
              explanation: 'Your stop-loss should be below the support level because if price breaks below support, the pattern has failed and your trade thesis is invalidated. The support level defines your maximum acceptable risk.',
            },
          ]}
          expectedOutcomes={[
            'Ability to combine candlestick patterns with S/R levels for high-probability trades',
            'Understanding of the Pattern + Level framework',
            'Skill in executing pattern-based trades with proper risk management',
            'Habit of journaling every trade with pattern, level, and R:R',
          ]}
        />
      </div>
    </section>
  )
}
