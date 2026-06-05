'use client'

import React from 'react'
import {
  TrendingUp,
  TrendingDown,
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  Shield,
  Target,
  Eye,
  Pen,
  Ruler,
  Layers,
  ChevronRight,
  Minus,
  Crosshair,
  BarChart3,
  Zap,
  Repeat,
  CircleDot,
  FlaskConical,
  CheckCircle2,
  XCircle,
  Activity,
  DollarSign,
  LineChart,
  RotateCcw,
  Hash,
  Clock,
  Volume2,
  Star,
  Sun,
  Waypoints,
  GitBranch,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

/* ─────────────────────────────────────────────────────────── */
/*  Inline SVG: Support Level Diagram (Enhanced)              */
/* ─────────────────────────────────────────────────────────── */
function SupportDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 520 240"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Support level diagram showing price bouncing off a horizontal support line"
      >
        {/* Price axis */}
        <line x1="30" y1="20" x2="30" y2="220" stroke="#94a3b8" strokeWidth="1" />
        <text x="26" y="45" textAnchor="end" fontSize="8" fill="#94a3b8">$52K</text>
        <text x="26" y="85" textAnchor="end" fontSize="8" fill="#94a3b8">$48K</text>
        <text x="26" y="125" textAnchor="end" fontSize="8" fill="#94a3b8">$44K</text>
        <text x="26" y="170" textAnchor="end" fontSize="8" fill="#16a34a" fontWeight="bold">$40K</text>
        <text x="26" y="210" textAnchor="end" fontSize="8" fill="#94a3b8">$36K</text>

        {/* Time axis */}
        <line x1="30" y1="220" x2="500" y2="220" stroke="#94a3b8" strokeWidth="1" />
        <text x="120" y="235" textAnchor="middle" fontSize="7" fill="#94a3b8">Week 1</text>
        <text x="260" y="235" textAnchor="middle" fontSize="7" fill="#94a3b8">Week 2</text>
        <text x="400" y="235" textAnchor="middle" fontSize="7" fill="#94a3b8">Week 3</text>

        {/* Grid lines */}
        <line x1="30" y1="45" x2="500" y2="45" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="85" x2="500" y2="85" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="125" x2="500" y2="125" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="210" x2="500" y2="210" stroke="#e2e8f0" strokeWidth="0.5" />

        {/* Price line path - bouncing off support */}
        <path
          d="M 50 85 L 90 125 L 130 170 L 160 165 L 190 90 L 230 55 L 270 80 L 310 170 L 340 168 L 370 100 L 400 60 L 430 85 L 460 170 L 485 166"
          fill="none"
          stroke="#475569"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Support line */}
        <line
          x1="40"
          y1="170"
          x2="490"
          y2="170"
          stroke="#16a34a"
          strokeWidth="3"
          strokeDasharray="8 4"
        />

        {/* Support zone shading */}
        <rect x="40" y="168" width="450" height="8" fill="#16a34a" opacity="0.08" />

        {/* Support label */}
        <rect x="230" y="178" width="110" height="24" rx="4" fill="#16a34a" />
        <text x="285" y="195" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          SUPPORT ($40K)
        </text>

        {/* Bounce arrows (green, pointing up from support line) */}
        <polygon points="130,155 135,165 125,165" fill="#16a34a" />
        <line x1="130" y1="165" x2="130" y2="170" stroke="#16a34a" strokeWidth="2" />

        <polygon points="310,155 315,165 305,165" fill="#16a34a" />
        <line x1="310" y1="165" x2="310" y2="170" stroke="#16a34a" strokeWidth="2" />

        <polygon points="340,155 345,165 335,165" fill="#16a34a" />
        <line x1="340" y1="165" x2="340" y2="170" stroke="#16a34a" strokeWidth="2" />

        <polygon points="460,155 465,165 455,165" fill="#16a34a" />
        <line x1="460" y1="165" x2="460" y2="170" stroke="#16a34a" strokeWidth="2" />

        <polygon points="485,155 490,165 480,165" fill="#16a34a" />
        <line x1="485" y1="165" x2="485" y2="170" stroke="#16a34a" strokeWidth="2" />

        {/* Touch point dots */}
        <circle cx="130" cy="170" r="5" fill="#16a34a" />
        <circle cx="310" cy="170" r="5" fill="#16a34a" />
        <circle cx="340" cy="170" r="5" fill="#16a34a" />
        <circle cx="460" cy="170" r="5" fill="#16a34a" />
        <circle cx="485" cy="170" r="5" fill="#16a34a" />

        {/* Bounce labels */}
        <text x="130" y="150" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Bounce 1</text>
        <text x="325" y="150" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Bounce 2</text>
        <text x="472" y="150" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Bounce 3</text>
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        Price repeatedly bounces off the support level (green dashed line at $40K). Each green arrow marks a &ldquo;touch&rdquo; — buyers stepping in.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  Inline SVG: Resistance Level Diagram (Enhanced)           */
/* ─────────────────────────────────────────────────────────── */
function ResistanceDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 520 240"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Resistance level diagram showing price being rejected at a horizontal resistance line"
      >
        {/* Price axis */}
        <line x1="30" y1="20" x2="30" y2="220" stroke="#94a3b8" strokeWidth="1" />
        <text x="26" y="55" textAnchor="end" fontSize="8" fill="#dc2626" fontWeight="bold">$50K</text>
        <text x="26" y="100" textAnchor="end" fontSize="8" fill="#94a3b8">$46K</text>
        <text x="26" y="145" textAnchor="end" fontSize="8" fill="#94a3b8">$42K</text>
        <text x="26" y="190" textAnchor="end" fontSize="8" fill="#94a3b8">$38K</text>

        {/* Time axis */}
        <line x1="30" y1="220" x2="500" y2="220" stroke="#94a3b8" strokeWidth="1" />
        <text x="120" y="235" textAnchor="middle" fontSize="7" fill="#94a3b8">Week 1</text>
        <text x="260" y="235" textAnchor="middle" fontSize="7" fill="#94a3b8">Week 2</text>
        <text x="400" y="235" textAnchor="middle" fontSize="7" fill="#94a3b8">Week 3</text>

        {/* Grid lines */}
        <line x1="30" y1="100" x2="500" y2="100" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="145" x2="500" y2="145" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="190" x2="500" y2="190" stroke="#e2e8f0" strokeWidth="0.5" />

        {/* Price line path - rejecting at resistance */}
        <path
          d="M 50 185 L 80 120 L 105 55 L 120 50 L 155 115 L 195 165 L 230 120 L 255 55 L 270 48 L 300 105 L 340 155 L 370 105 L 395 55 L 410 50 L 435 110 L 470 155 L 490 115"
          fill="none"
          stroke="#475569"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Resistance line */}
        <line
          x1="40"
          y1="50"
          x2="490"
          y2="50"
          stroke="#dc2626"
          strokeWidth="3"
          strokeDasharray="8 4"
        />

        {/* Resistance zone shading */}
        <rect x="40" y="42" width="450" height="8" fill="#dc2626" opacity="0.08" />

        {/* Resistance label */}
        <rect x="220" y="22" width="130" height="24" rx="4" fill="#dc2626" />
        <text x="285" y="39" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          RESISTANCE ($50K)
        </text>

        {/* Rejection arrows (red, pointing down from resistance line) */}
        <polygon points="105,65 110,55 100,55" fill="#dc2626" />
        <line x1="105" y1="50" x2="105" y2="55" stroke="#dc2626" strokeWidth="2" />

        <polygon points="255,65 260,55 250,55" fill="#dc2626" />
        <line x1="255" y1="50" x2="255" y2="55" stroke="#dc2626" strokeWidth="2" />

        <polygon points="270,65 275,55 265,55" fill="#dc2626" />
        <line x1="270" y1="50" x2="270" y2="55" stroke="#dc2626" strokeWidth="2" />

        <polygon points="395,65 400,55 390,55" fill="#dc2626" />
        <line x1="395" y1="50" x2="395" y2="55" stroke="#dc2626" strokeWidth="2" />

        <polygon points="410,65 415,55 405,55" fill="#dc2626" />
        <line x1="410" y1="50" x2="410" y2="55" stroke="#dc2626" strokeWidth="2" />

        {/* Touch point dots */}
        <circle cx="105" cy="50" r="5" fill="#dc2626" />
        <circle cx="255" cy="50" r="5" fill="#dc2626" />
        <circle cx="270" cy="50" r="5" fill="#dc2626" />
        <circle cx="395" cy="50" r="5" fill="#dc2626" />
        <circle cx="410" cy="50" r="5" fill="#dc2626" />

        {/* Rejection labels */}
        <text x="105" y="78" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Reject 1</text>
        <text x="262" y="78" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Reject 2</text>
        <text x="402" y="78" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Reject 3</text>
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        Price repeatedly rejects at the resistance level (red dashed line at $50K). Each red arrow marks a &ldquo;rejection&rdquo; — sellers stepping in.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  Inline SVG: S/R Flip Diagram (Enhanced)                   */
/* ─────────────────────────────────────────────────────────── */
function SRFlipDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 520 280"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Support becoming resistance (S/R Flip) diagram"
      >
        {/* Price axis */}
        <line x1="30" y1="20" x2="30" y2="260" stroke="#94a3b8" strokeWidth="1" />
        <text x="26" y="55" textAnchor="end" fontSize="8" fill="#94a3b8">$55K</text>
        <text x="26" y="105" textAnchor="end" fontSize="8" fill="#94a3b8">$50K</text>
        <text x="26" y="155" textAnchor="end" fontSize="8" fill="#f59e0b" fontWeight="bold">$45K</text>
        <text x="26" y="205" textAnchor="end" fontSize="8" fill="#94a3b8">$40K</text>
        <text x="26" y="250" textAnchor="end" fontSize="8" fill="#94a3b8">$35K</text>

        {/* Grid lines */}
        <line x1="30" y1="55" x2="500" y2="55" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="105" x2="500" y2="105" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="205" x2="500" y2="205" stroke="#e2e8f0" strokeWidth="0.5" />
        <line x1="30" y1="250" x2="500" y2="250" stroke="#e2e8f0" strokeWidth="0.5" />

        {/* Phase labels */}
        <rect x="60" y="4" width="140" height="22" rx="4" fill="#16a34a" opacity="0.9" />
        <text x="130" y="19" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
          PHASE 1: SUPPORT
        </text>

        <rect x="320" y="4" width="160" height="22" rx="4" fill="#dc2626" opacity="0.9" />
        <text x="400" y="19" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">
          PHASE 2: RESISTANCE
        </text>

        {/* The key horizontal line that flips */}
        <line
          x1="30"
          y1="155"
          x2="490"
          y2="155"
          stroke="#f59e0b"
          strokeWidth="2.5"
          strokeDasharray="6 3"
        />

        {/* Flip label */}
        <rect x="220" y="141" width="90" height="20" rx="3" fill="#f59e0b" />
        <text x="265" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
          S/R FLIP
        </text>

        {/* Phase 1: Price bouncing OFF the line (support) */}
        <path
          d="M 40 85 L 70 145 L 90 155 L 110 145 L 140 75"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M 160 95 L 180 145 L 200 155 L 220 145 L 245 85"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Green up arrows at support touches */}
        <polygon points="90,141 94,149 86,149" fill="#16a34a" />
        <text x="90" y="135" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Bounce</text>
        <polygon points="200,141 204,149 196,149" fill="#16a34a" />
        <text x="200" y="135" textAnchor="middle" fontSize="7" fill="#16a34a" fontWeight="bold">Bounce</text>

        {/* Breakdown through support */}
        <path
          d="M 245 85 L 275 125 L 295 155 L 315 185 L 330 225"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <text x="310" y="175" fontSize="7" fill="#dc2626" fontWeight="bold">Break!</text>

        {/* Phase 2: Price approaching from below and rejecting (resistance) */}
        <path
          d="M 340 235 L 360 185 L 380 155 L 395 157 L 410 185 L 430 225"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M 440 215 L 455 175 L 470 155 L 485 160 L 495 185"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Red down arrows at resistance touches */}
        <polygon points="380,161 384,153 376,153" fill="#dc2626" />
        <text x="380" y="145" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Reject</text>
        <polygon points="470,161 474,153 466,153" fill="#dc2626" />
        <text x="470" y="145" textAnchor="middle" fontSize="7" fill="#dc2626" fontWeight="bold">Reject</text>

        {/* Touch dots */}
        <circle cx="90" cy="155" r="4" fill="#16a34a" />
        <circle cx="200" cy="155" r="4" fill="#16a34a" />
        <circle cx="380" cy="155" r="4" fill="#dc2626" />
        <circle cx="470" cy="155" r="4" fill="#dc2626" />
      </svg>
      <p className="mt-2 text-center text-xs text-slate-500">
        The same price level ($45K) acts as support (bounces up) then flips to resistance (rejects down) after price breaks below.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  Inline SVG: Market Structure Diagrams                      */
/* ─────────────────────────────────────────────────────────── */
function UptrendSVG() {
  return (
    <svg viewBox="0 0 320 150" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Axes */}
      <line x1="30" y1="10" x2="30" y2="135" stroke="#94a3b8" strokeWidth="1" />
      <line x1="30" y1="135" x2="305" y2="135" stroke="#94a3b8" strokeWidth="1" />
      <text x="15" y="20" fontSize="7" fill="#94a3b8">Price</text>
      <text x="290" y="148" fontSize="7" fill="#94a3b8">Time</text>

      {/* Price line - uptrend */}
      <polyline
        points="40,115 65,85 80,95 110,65 125,78 160,42 175,55 210,22 225,38 265,12 280,25"
        fill="none"
        stroke="#16a34a"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* HL labels */}
      <circle cx="80" cy="95" r="3" fill="#0d9488" />
      <text x="80" y="112" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0d9488">HL</text>
      <circle cx="125" cy="78" r="3" fill="#0d9488" />
      <text x="125" y="95" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0d9488">HL</text>
      <circle cx="175" cy="55" r="3" fill="#0d9488" />
      <text x="175" y="72" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0d9488">HL</text>
      <circle cx="225" cy="38" r="3" fill="#0d9488" />
      <text x="225" y="55" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#0d9488">HL</text>

      {/* HH labels */}
      <circle cx="65" cy="85" r="3" fill="#16a34a" />
      <text x="65" y="78" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="110" cy="65" r="3" fill="#16a34a" />
      <text x="110" y="58" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="160" cy="42" r="3" fill="#16a34a" />
      <text x="160" y="35" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">HH</text>
      <circle cx="210" cy="22" r="3" fill="#16a34a" />
      <text x="210" y="15" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#16a34a">HH</text>

      {/* Arrow markers */}
      <defs>
        <marker id="arrowGreen2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6" fill="#16a34a" />
        </marker>
      </defs>

      {/* Rising arrow */}
      <line x1="45" y1="110" x2="270" y2="15" stroke="#16a34a" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
    </svg>
  )
}

function DowntrendSVG() {
  return (
    <svg viewBox="0 0 320 150" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {/* Axes */}
      <line x1="30" y1="10" x2="30" y2="135" stroke="#94a3b8" strokeWidth="1" />
      <line x1="30" y1="135" x2="305" y2="135" stroke="#94a3b8" strokeWidth="1" />

      {/* Price line - downtrend */}
      <polyline
        points="40,15 55,28 70,18 90,48 105,38 125,65 140,55 160,82 175,72 195,100 210,88 230,118"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* LH labels */}
      <circle cx="55" cy="28" r="3" fill="#dc2626" />
      <text x="55" y="21" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LH</text>
      <circle cx="90" cy="48" r="3" fill="#dc2626" />
      <text x="90" y="41" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LH</text>
      <circle cx="125" cy="65" r="3" fill="#dc2626" />
      <text x="125" y="58" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LH</text>
      <circle cx="160" cy="82" r="3" fill="#dc2626" />
      <text x="160" y="75" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">LH</text>

      {/* LL labels */}
      <circle cx="70" cy="18" r="3" fill="#f97316" />
      <text x="70" y="35" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#f97316">LL</text>
      <circle cx="105" cy="38" r="3" fill="#f97316" />
      <text x="105" y="55" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#f97316">LL</text>
      <circle cx="140" cy="55" r="3" fill="#f97316" />
      <text x="140" y="72" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#f97316">LL</text>
      <circle cx="175" cy="72" r="3" fill="#f97316" />
      <text x="175" y="89" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#f97316">LL</text>

      {/* Falling arrow */}
      <line x1="42" y1="18" x2="225" y2="115" stroke="#dc2626" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
    </svg>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  Practice Lab Card Component                               */
/* ─────────────────────────────────────────────────────────── */
interface PracticeLabProps {
  id: string
  title: string
  subtitle: string
  tasks: { number: number; prompt: string }[]
}

function PracticeLab({ id, title, subtitle, tasks }: PracticeLabProps) {
  return (
    <div
      id={id}
      className="rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/40 p-4 sm:p-6"
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
          <FlaskConical className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-900 sm:text-lg">{title}</h4>
          <p className="text-xs text-amber-700 font-medium">{subtitle}</p>
        </div>
      </div>
      <ol className="space-y-3">
        {tasks.map((task) => (
          <li key={task.number} className="flex gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800">
              {task.number}
            </span>
            <p className="text-sm leading-relaxed text-slate-700">{task.prompt}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 1: What Is Support?                                 */
/* ─────────────────────────────────────────────────────────── */
function TopicWhatIsSupport() {
  return (
    <TopicCard id="d2-what-is-support" title="What Is Support?" icon={<TrendingUp />}>
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        <strong>Support</strong> is a price level where buyers consistently step in and prevent further decline.
        It acts as a <span className="font-semibold text-green-600">&ldquo;floor&rdquo;</span> beneath price.
      </p>

      <AnalogyBox title="The Trampoline">
        Imagine a trampoline beneath price. Every time price hits it, it bounces back up.
        That trampoline is support — and just like a trampoline, the more it&apos;s been tested, the
        more you trust it will hold.
      </AnalogyBox>

      <div className="mt-4 rounded-lg border-2 border-green-200 bg-green-50/60 p-4">
        <div className="flex items-start gap-2">
          <ArrowUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-green-700">Demand Zone Framing</p>
            <p className="mt-1 text-sm font-semibold text-green-800">
              Support is not just a line — it is a <span className="underline decoration-green-400 decoration-2">concentration of buying pressure</span>.
              Think of it as a <strong>Demand Zone</strong>: a price area where large numbers of buy orders
              are clustered, waiting to absorb selling. The thicker the cluster of orders, the stronger the support.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="mb-2 text-sm font-bold text-slate-900 sm:text-base">The Psychology Behind Support — What Are Market Participants Thinking?</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50/40 p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-green-700">
              🟢 Buyers at This Level
            </p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-green-500">•</span>
                <span><strong>Bargain hunters:</strong> &ldquo;This price is a deal — I&apos;m loading up.&rdquo;</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-green-500">•</span>
                <span><strong>Averaging down:</strong> &ldquo;I bought higher, but at this price I can lower my average.&rdquo;</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-green-500">•</span>
                <span><strong>Institutional accumulation:</strong> Large players quietly absorb sell pressure with limit buy orders at this level.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50/40 p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-700">
              🔴 Sellers at This Level
            </p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-red-500">•</span>
                <span><strong>Exhaustion:</strong> &ldquo;I&apos;ve been selling all the way down, but the buying is too strong here — I&apos;m done.&rdquo;</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-red-500">•</span>
                <span><strong>Short covering:</strong> &ldquo;Price keeps bouncing — I need to close my short before it runs.&rdquo;</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-red-500">•</span>
                <span><strong>Waiting for a break:</strong> &ldquo;If support holds, I&apos;ll flip to a buyer.&rdquo;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="mb-2 text-sm font-bold text-slate-900 sm:text-base">Why It Forms</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <ArrowUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span>When price drops to a level where previous buyers bought before, they may buy more <strong>(averaging down)</strong>.</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <ArrowUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span>New buyers see value at this price and enter the market.</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <ArrowUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
            <span><strong>Demand exceeds supply</strong> at this price, preventing further decline.</span>
          </li>
        </ul>
      </div>

      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-start gap-2">
          <DollarSign className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Real Crypto Example</p>
            <p className="mt-1 text-sm text-slate-700">
              In 2023–2024, <strong>BTC repeatedly bounced off $40,000</strong> as support. Each time price
              dipped toward $40K, massive buy orders absorbed the selling — a clear Demand Zone. The level
              was tested 5+ times before eventually breaking, demonstrating how a strong support level
              acts as a trampoline for price action.
            </p>
          </div>
        </div>
      </div>

      <SupportDiagram />

      <div className="mt-4 rounded-lg border border-green-200 bg-green-50 p-4">
        <div className="flex items-start gap-2">
          <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-green-700">Key Rule</p>
            <p className="mt-1 text-sm font-semibold text-green-800">
              The more times price bounces off support, the stronger the level is considered.
              A support level with <span className="underline decoration-green-400 decoration-2">5+ touches</span> is far more reliable
              than one with only 2 touches.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 2: What Is Resistance?                              */
/* ─────────────────────────────────────────────────────────── */
function TopicWhatIsResistance() {
  return (
    <TopicCard id="d2-what-is-resistance" title="What Is Resistance?" icon={<TrendingDown />}>
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        <strong>Resistance</strong> is a price level where sellers consistently step in and prevent further advance.
        It acts as a <span className="font-semibold text-red-600">&ldquo;ceiling&rdquo;</span> above price.
      </p>

      <AnalogyBox title="The Glass Ceiling">
        Imagine a glass ceiling above price. Every time price hits it, it falls back down —
        you can see the level above but you can&apos;t break through. That glass ceiling is resistance,
        and every failed attempt to break it reinforces the barrier.
      </AnalogyBox>

      <div className="mt-4 rounded-lg border-2 border-red-200 bg-red-50/60 p-4">
        <div className="flex items-start gap-2">
          <ArrowDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-red-700">Supply Zone Framing</p>
            <p className="mt-1 text-sm font-semibold text-red-800">
              Resistance is not just a line — it is a <span className="underline decoration-red-400 decoration-2">concentration of selling pressure</span>.
              Think of it as a <strong>Supply Zone</strong>: a price area where large numbers of sell orders
              are clustered, waiting to absorb buying. The thicker the cluster of orders, the stronger the resistance.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="mb-2 text-sm font-bold text-slate-900 sm:text-base">The Psychology Behind Resistance — Why Do Sellers Overwhelm Buyers?</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-red-200 bg-red-50/40 p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-700">
              🔴 Sellers at This Level
            </p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-red-500">•</span>
                <span><strong>Break-even sellers:</strong> &ldquo;I bought at this price last time and got stuck — now I can finally exit at no loss.&rdquo;</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-red-500">•</span>
                <span><strong>Profit-takers:</strong> &ldquo;I bought lower and this is my target — time to lock in gains.&rdquo;</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-red-500">•</span>
                <span><strong>Rejection traders:</strong> &ldquo;Price has failed here before — I&apos;m shorting this level.&rdquo;</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-green-200 bg-green-50/40 p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-green-700">
              🟢 Buyers at This Level
            </p>
            <ul className="space-y-1.5 text-sm text-slate-700">
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-green-500">•</span>
                <span><strong>Fading momentum:</strong> &ldquo;We&apos;ve pushed up but the selling is too strong — I&apos;ll wait for a breakout.&rdquo;</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-green-500">•</span>
                <span><strong>Trapped longs:</strong> &ldquo;I bought the breakout and now it&apos;s reversing — I need to sell before losses grow.&rdquo;</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="mt-0.5 text-green-500">•</span>
                <span><strong>Waiting for confirmation:</strong> &ldquo;If it breaks resistance with volume, then I&apos;ll buy.&rdquo;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="mb-2 text-sm font-bold text-slate-900 sm:text-base">Why It Forms</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <ArrowDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
            <span>When price rises to a level where previous sellers sold before, they may sell again <strong>(averaging up)</strong>.</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <ArrowDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
            <span>New sellers see overvaluation at this price and enter shorts or take profit.</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-600">
            <ArrowDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
            <span><strong>Supply exceeds demand</strong> at this price, preventing further advance.</span>
          </li>
        </ul>
      </div>

      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-start gap-2">
          <DollarSign className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Real Crypto Example</p>
            <p className="mt-1 text-sm text-slate-700">
              Throughout 2023–2024, <strong>ETH struggled to break $3,000 multiple times</strong>. Each rally
              toward $3,000 was met with heavy selling — profit-takers exiting, break-even sellers
              from the previous cycle unloading, and short sellers entering. This $3,000 level was
              a textbook Supply Zone, rejecting price 4+ times before finally breaking on high volume.
            </p>
          </div>
        </div>
      </div>

      <ResistanceDiagram />

      <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-4">
        <div className="flex items-start gap-2">
          <Star className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-red-700">Key Rule</p>
            <p className="mt-1 text-sm font-semibold text-red-800">
              The more times price rejects at resistance, the stronger the level is considered.
              A resistance level with <span className="underline decoration-red-400 decoration-2">5+ rejections</span> is far more reliable
              than one with only 2 rejections.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 3: The Dual Nature & S/R Flip                       */
/* ─────────────────────────────────────────────────────────── */
function TopicDualNatureAndFlip() {
  const strengthFactors = [
    { icon: <CircleDot className="h-5 w-5" />, title: 'Number of Touches', desc: 'More touches = more validated = stronger level.', color: 'text-amber-600 bg-amber-100' },
    { icon: <Clock className="h-5 w-5" />, title: 'Timeframe', desc: 'Levels on higher timeframes (4H, Daily) are stronger than lower timeframe levels.', color: 'text-teal-600 bg-teal-100' },
    { icon: <Volume2 className="h-5 w-5" />, title: 'Volume', desc: 'High volume at a level confirms strong interest from buyers/sellers.', color: 'text-purple-600 bg-purple-100' },
    { icon: <Clock className="h-5 w-5" />, title: 'Recency', desc: 'Recently tested levels are more relevant than levels from months ago.', color: 'text-green-600 bg-green-100' },
    { icon: <Hash className="h-5 w-5" />, title: 'Round Numbers', desc: '$10,000, $50,000, $100,000 — these round numbers act as psychological S/R.', color: 'text-red-600 bg-red-100' },
  ]

  return (
    <TopicCard id="d2-dual-nature-sr" title="The Dual Nature of S/R & The S/R Flip (Polarity Principle)" icon={<Repeat />} variant="highlight">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        Support and resistance are the <strong>same concept viewed from different directions</strong>.
        A level that acts as support (floor) when price is above it can act as resistance (ceiling)
        when price drops below it. This &ldquo;flip&rdquo; is one of the most powerful concepts in technical analysis,
        and it&apos;s known as the <span className="font-bold text-amber-700">Polarity Principle</span>.
      </p>

      <div className="mt-4 rounded-lg border-2 border-amber-200 bg-amber-50/60 p-4">
        <div className="flex items-start gap-2">
          <Repeat className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">The Polarity Principle</p>
            <p className="mt-1 text-sm font-semibold text-amber-800">
              Once a support or resistance level is decisively crossed, it changes its role.
              Old support becomes new resistance. Old resistance becomes new support.
              The polarity reverses — like a magnet flipping its poles.
            </p>
          </div>
        </div>
      </div>

      <SRFlipDiagram />

      <div className="mt-5">
        <h4 className="mb-2 text-sm font-bold text-slate-900 sm:text-base">Why Does the Flip Happen? — The Trapped Trader Mechanism</h4>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm leading-relaxed text-slate-700">
            <strong>Trapped traders.</strong> When support breaks, traders who bought at support are now
            underwater. They are <strong>trapped</strong> in losing positions. When price returns to that level,
            these trapped buyers finally get a chance to sell at <strong>break even</strong> — they&apos;ve been
            waiting for this moment, desperate to exit without a loss. This creates a wave of selling
            pressure that turns the old support into new resistance.
          </p>
          <div className="mt-3 rounded-md border border-amber-200 bg-amber-50 p-3">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">The Trapped Buyer&apos;s Internal Monologue</p>
            <p className="text-sm italic text-amber-800">
              &ldquo;I bought at $60K thinking it was support. Price crashed to $52K and I&apos;m down 13%.
              Now price is back at $60K — I can finally sell and break even! I&apos;m not going through that
              again — <strong>SELL.</strong>&rdquo;
            </p>
            <p className="mt-2 text-xs text-amber-700">
              Multiply this by thousands of traders, and you get a wall of sell orders at the old support level.
            </p>
          </div>
          <div className="mt-3 flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
            <p className="text-sm text-amber-700">
              The same psychology works in reverse: traders who shorted at resistance and price breaks above,
              they cover at breakeven, creating buying pressure at the old resistance level — turning it into new support.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-start gap-2">
          <DollarSign className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-amber-700">Real Crypto Example</p>
            <p className="mt-1 text-sm text-slate-700">
              In 2021, <strong>BTC had $60,000 as strong support</strong> — price bounced off it multiple times.
              When it finally broke below in May 2021, thousands of buyers who bought at $60K were trapped underwater.
              When BTC rallied back to $60K in October 2021, those trapped buyers finally sold at break-even,
              creating massive selling pressure. <strong>$60K flipped from support to resistance</strong>,
              and price rejected sharply — a textbook Polarity Principle in action.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="mb-3 text-sm font-bold text-slate-900 sm:text-base">5 Strength Factors That Determine How Powerful a Level Is</h4>
        <div className="space-y-3">
          {strengthFactors.map((factor, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
              <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${factor.color}`}>
                {factor.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{factor.title}</p>
                <p className="mt-0.5 text-sm text-slate-600">{factor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <KeyTakeaway>
        Support and resistance are not two different things — they are the same line, viewed from different sides.
        The more touches, higher timeframe, higher volume, more recent, and closer to a round number — the stronger the level.
      </KeyTakeaway>

      <div className="mt-4 rounded-lg border-2 border-amber-300 bg-amber-50 p-4">
        <p className="text-sm font-bold text-amber-900 italic">
          &ldquo;A level&apos;s role changes once price crosses it. What was once a safety net becomes a barrier.&rdquo;
        </p>
        <p className="mt-1 text-xs text-amber-700">— The Polarity Principle</p>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 4: S/R Drawing Rules — The 6 Commandments           */
/* ─────────────────────────────────────────────────────────── */
function TopicDrawingRules() {
  const rules = [
    {
      number: 1,
      title: 'DRAW ON 4H OR DAILY TIMEFRAME',
      desc: 'Lower timeframes are too noisy. Levels on the 4H or Daily chart carry far more weight and are respected by more traders.',
      icon: <BarChart3 className="h-5 w-5" />,
    },
    {
      number: 2,
      title: 'CONNECT WICKS, NOT BODIES',
      desc: 'Wicks (shadows) show where price actually reached. Bodies show where price opened/closed. Always draw from wick extremes.',
      icon: <Crosshair className="h-5 w-5" />,
    },
    {
      number: 3,
      title: 'A VALID LEVEL NEEDS AT LEAST 2–3 TOUCHES',
      desc: 'A single touch is just a random point. Two touches make a line. Three or more touches confirm it as a valid level.',
      icon: <Target className="h-5 w-5" />,
    },
    {
      number: 4,
      title: 'MORE TOUCHES = STRONGER LEVEL',
      desc: 'Each additional touch validates the level further. A level with 5+ touches is institutional-grade.',
      icon: <Star className="h-5 w-5" />,
    },
    {
      number: 5,
      title: 'HORIZONTAL LINES ARE MORE RELIABLE THAN DIAGONAL',
      desc: 'Horizontal S/R is the gold standard. Trend lines (diagonal) are useful but more subjective and easier to draw incorrectly.',
      icon: <Minus className="h-5 w-5" />,
    },
    {
      number: 6,
      title: 'ROUND NUMBERS ACT AS PSYCHOLOGICAL S/R',
      desc: 'Prices like $10K, $20K, $50K act as magnets. Traders place orders at round numbers, creating self-fulfilling S/R levels.',
      icon: <Hash className="h-5 w-5" />,
    },
  ]

  return (
    <TopicCard id="d2-sr-drawing-rules" title="S/R Drawing Rules — The 6 Commandments" icon={<Ruler />} variant="highlight">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Drawing support and resistance is an art, but it has rules. Follow these 6 commandments
        and your levels will be more accurate than 90% of beginners.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {rules.map((rule) => (
          <div
            key={rule.number}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                {rule.number}
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                {rule.icon}
              </div>
            </div>
            <h4 className="mb-1.5 text-sm font-bold text-slate-900">{rule.title}</h4>
            <p className="text-xs leading-relaxed text-slate-600">{rule.desc}</p>
          </div>
        ))}
      </div>

      <KeyTakeaway>
        If you only remember one rule: <strong>draw on higher timeframes using wick extremes</strong>,
        and require at least 2–3 touches for a valid level.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 5: Market Structure — The Foundation                 */
/* ─────────────────────────────────────────────────────────── */
function TopicMarketStructure() {
  return (
    <TopicCard id="d2-market-structure" title="Market Structure — The Foundation of ALL Analysis" icon={<GitBranch />} variant="highlight">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
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
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                <span>Buyers in control → <strong>Look for buys</strong></span>
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
                <span>Sellers in control → <strong>Look for shorts</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Structure identification method */}
      <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="mb-2 text-sm font-bold text-slate-800">
          <Pen className="mr-1.5 inline h-4 w-4 text-amber-600" />
          How to Identify Structure: Label &amp; Compare
        </p>
        <ol className="ml-4 list-decimal space-y-1 text-sm text-slate-700">
          <li>Label swing highs as <strong>H1, H2, H3...</strong> (left to right)</li>
          <li>Label swing lows as <strong>L1, L2, L3...</strong> (left to right)</li>
          <li>Compare: Is H2 above or below H1? Is L2 above or below L1?</li>
          <li>Conclude: If H2 &gt; H1 and L2 &gt; L1 → Uptrend (HH + HL)</li>
        </ol>
      </div>

      <KeyTakeaway>
        Before you look at ANY indicator, determine the market structure first. If
        it&apos;s making HH + HL → uptrend → look for buys. If it&apos;s making LH + LL →
        downtrend → look for sells. If it&apos;s ranging → be cautious or trade the range.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 6: Types of Support and Resistance                  */
/* ─────────────────────────────────────────────────────────── */
function TopicTypesOfSR() {
  const types = [
    {
      icon: <Minus className="h-5 w-5" />,
      title: 'HORIZONTAL S/R',
      desc: 'The most reliable type. Flat lines drawn across price highs/lows. Every trader can see them.',
      badge: 'Most Reliable',
      badgeColor: 'bg-green-100 text-green-700',
      iconBg: 'bg-green-100 text-green-600',
    },
    {
      icon: <Hash className="h-5 w-5" />,
      title: 'PSYCHOLOGICAL S/R',
      desc: 'Round numbers ($10K, $50K, $100K) where traders cluster orders. Self-fulfilling prophecy.',
      badge: 'Psychological',
      badgeColor: 'bg-amber-100 text-amber-700',
      iconBg: 'bg-amber-100 text-amber-600',
    },
    {
      icon: <Activity className="h-5 w-5" />,
      title: 'DYNAMIC S/R',
      desc: 'Moving Averages (MA 50, MA 200) that move with price. Covered in detail in the Afternoon Block.',
      badge: 'Dynamic',
      badgeColor: 'bg-teal-100 text-teal-700',
      iconBg: 'bg-teal-100 text-teal-600',
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'TREND LINE S/R',
      desc: 'Diagonal lines connecting higher lows (uptrend) or lower highs (downtrend). More subjective.',
      badge: 'Diagonal',
      badgeColor: 'bg-purple-100 text-purple-700',
      iconBg: 'bg-purple-100 text-purple-600',
    },
    {
      icon: <Volume2 className="h-5 w-5" />,
      title: 'VOLUME-BASED S/R',
      desc: 'Levels where extremely high volume occurred. Large orders were filled — those traders will defend their levels.',
      badge: 'Volume',
      badgeColor: 'bg-rose-100 text-rose-700',
      iconBg: 'bg-rose-100 text-rose-600',
    },
    {
      icon: <Waypoints className="h-5 w-5" />,
      title: 'PRIOR SWING HIGH/LOW',
      desc: 'Previous obvious peaks and troughs. Markets have memory — these levels get retested.',
      badge: 'Swing Points',
      badgeColor: 'bg-slate-100 text-slate-700',
      iconBg: 'bg-slate-100 text-slate-600',
    },
  ]

  return (
    <TopicCard id="d2-types-of-sr" title="Types of Support and Resistance" icon={<Layers />}>
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Not all support and resistance is created equal. Understanding the different types helps you
        identify which levels are most likely to hold.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {types.map((type, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${type.iconBg}`}>
                {type.icon}
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${type.badgeColor}`}>
                {type.badge}
              </span>
            </div>
            <h4 className="mb-1.5 text-sm font-bold text-slate-900">{type.title}</h4>
            <p className="text-xs leading-relaxed text-slate-600">{type.desc}</p>
          </div>
        ))}
      </div>

      <KeyTakeaway>
        Start with <strong>horizontal S/R</strong> and <strong>prior swing highs/lows</strong> — they are
        the most objective and reliable. Add psychological round numbers for extra confluence.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  MAIN EXPORT                                                       */
/* ═══════════════════════════════════════════════════════════════════ */

export function Day2MorningBlock() {
  return (
    <section id="d2-morning" aria-label="Morning Block - Session 1">
      <SectionDivider title="MORNING BLOCK — SESSION 1: SUPPORT/RESISTANCE & MARKET STRUCTURE" />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicWhatIsSupport />

        <TopicWhatIsResistance />

        <TopicDualNatureAndFlip />

        <TopicDrawingRules />

        <TopicTypesOfSR />

        <TopicMarketStructure />

        {/* Practice Lab */}
        <PracticeLab
          id="d2-sr-structure-lab"
          title="S/R & Structure Practice Lab"
          subtitle="Apply what you learned about support, resistance, and market structure"
          tasks={[
            { number: 1, prompt: 'Open BTC/USDT on the 4H chart. Draw 3 support and 3 resistance levels using the 6 drawing rules. Label each with the number of touches.' },
            { number: 2, prompt: 'Identify the current market structure: Is BTC making HH+HL (uptrend), LH+LL (downtrend), or ranging? Label the swing points as H1, H2... and L1, L2...' },
            { number: 3, prompt: 'Find one example of an S/R flip on ETH/USDT daily chart. Mark where old support became new resistance (or vice versa).' },
            { number: 4, prompt: 'Check the round numbers ($40K, $50K, etc.) — did price react at any psychological level recently? Mark it on your chart.' },
          ]}
        />

        <AppliedLabSimulation
          id="d2-lab-1-tradingview"
          title="LAB 1: Identifying Support & Resistance Zones"
          subtitle="Use the TradingView simulator to identify and annotate S/R zones on the BTC/USDT chart"
          dayNumber={2}
          sessionName="Morning Block"
          labType="tradingview"
          learningObjectives={[
            'Identify areas where price has reversed multiple times',
            'Distinguish between support (Demand Zone) and resistance (Supply Zone)',
            'Recognize an S/R Flip on the chart',
            'Apply proper color-coding to S/R zones (Green = Support, Red = Resistance)',
          ]}
          tasks={[
            { id: 'd2-l1-t1', instruction: 'Open the BTC/USDT chart in the TradingView simulator above', hint: 'The simulator is in the right panel — use the timeframe buttons to switch views' },
            { id: 'd2-l1-t2', instruction: 'Enable the "Horizontal Line" drawing tool and identify a price level where price bounced multiple times (Support)', hint: 'Look for a level where green candles consistently start moving upward' },
            { id: 'd2-l1-t3', instruction: 'Identify a price level where price rejected multiple times (Resistance)', hint: 'Look for a level where red candles consistently start moving downward' },
            { id: 'd2-l1-t4', instruction: 'Enable the "Fibonacci" tool to see retracement levels — check if any Fibonacci level coincides with your S/R zones', hint: 'Confluence of Fibonacci + S/R makes the level much stronger' },
            { id: 'd2-l1-t5', instruction: 'Look for an S/R Flip: a level that was previously support (bounces) but became resistance (rejections) after price broke below', hint: 'The S/R Flip diagram above shows exactly what to look for on the chart' },
            { id: 'd2-l1-t6', instruction: 'Toggle EMA 20 and EMA 50 on — do any of them align with your identified S/R zones? This is called "confluence"', hint: 'When an EMA lines up with a horizontal S/R level, that level becomes much stronger' },
          ]}
          selfAssessment={[
            {
              question: 'What makes a support level stronger?',
              options: [
                'When it has been touched only once',
                'When it has been touched multiple times (3+)',
                'When it is on a lower timeframe',
                'When volume is low at that level',
              ],
              correctIndex: 1,
              explanation: 'Multiple touches validate the level. Each additional touch confirms that buyers consistently step in at that price.',
            },
            {
              question: 'Why does old support become new resistance (S/R Flip)?',
              options: [
                'Because the market is random',
                'Because round numbers attract orders',
                'Because trapped buyers sell at break-even when price returns',
                'Because EMAs change direction',
              ],
              correctIndex: 2,
              explanation: 'When support breaks, traders who bought at support are underwater. When price returns, they sell to break even, creating selling pressure that turns the old support into new resistance.',
            },
            {
              question: 'What is "confluence" in the context of S/R analysis?',
              options: [
                'When two indicators disagree',
                'When multiple factors (S/R, EMA, Fibonacci) align at the same level',
                'When volume is decreasing',
                'When the market is ranging',
              ],
              correctIndex: 1,
              explanation: 'Confluence means multiple analysis tools point to the same level. When a horizontal S/R level, an EMA, and a Fibonacci retracement all align at the same price, that level is extremely strong.',
            },
          ]}
          expectedOutcomes={[
            'Ability to visually identify S/R zones on any chart',
            'Understanding that support = Demand Zone and resistance = Supply Zone',
            'Ability to spot an S/R Flip (Polarity Principle)',
            'Recognition that confluence (S/R + EMA + Fibonacci) creates stronger levels',
          ]}
        />
      </div>
    </section>
  )
}
