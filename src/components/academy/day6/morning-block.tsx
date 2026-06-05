'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  Radar,
  ShieldAlert,
  Rss,
  TrendingUp,
  Activity,
  Brain,
  Merge,
  X,
  Check,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Search,
  BarChart3,
  MessageSquare,
  Filter,
  ArrowDown,
  Target,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { ChecklistItem } from '@/components/academy/checklist-item'

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
/*  SVG: Signal Taxonomy Diagram                               */
/*  Quadrant layout with CONFLUENCE at center                  */
/* ─────────────────────────────────────────────────────────── */
function SignalTaxonomyDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 400 380"
        className="mx-auto w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Signal Taxonomy Diagram showing four signal types converging into Confluence"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="confluenceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
        </defs>

        {/* Background subtle grid */}
        <line x1="200" y1="20" x2="200" y2="360" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="20" y1="190" x2="380" y2="190" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="4 4" />

        {/* Connecting arrows from outer types to center */}
        {/* Left (Technical) to Center */}
        <line x1="135" y1="190" x2="158" y2="190" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" />
        <polygon points="158,186 166,190 158,194" fill="#8b5cf6" opacity="0.6" />

        {/* Right (On-Chain) to Center */}
        <line x1="265" y1="190" x2="242" y2="190" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" />
        <polygon points="242,186 234,190 242,194" fill="#8b5cf6" opacity="0.6" />

        {/* Top arrow - from Technical+OnChain area to Confluence */}
        <line x1="200" y1="130" x2="200" y2="152" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" />
        <polygon points="196,152 200,160 204,152" fill="#8b5cf6" opacity="0.6" />

        {/* Bottom arrow - from Sentiment area to Confluence */}
        <line x1="200" y1="250" x2="200" y2="228" stroke="#8b5cf6" strokeWidth="2" opacity="0.6" />
        <polygon points="196,228 200,220 204,228" fill="#8b5cf6" opacity="0.6" />

        {/* CONFLUENCE (center, largest, glowing) */}
        <circle cx="200" cy="190" r="42" fill="url(#confluenceGrad)" filter="url(#glow)" opacity="0.95" />
        <circle cx="200" cy="190" r="42" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.5" />
        <text x="200" y="184" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" letterSpacing="1">CONFLU</text>
        <text x="200" y="198" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" letterSpacing="1">ENCE</text>
        <text x="200" y="212" textAnchor="middle" fill="#ddd6fe" fontSize="7">Most Powerful</text>

        {/* TECHNICAL (Left) */}
        <rect x="30" y="155" width="105" height="70" rx="12" fill="white" stroke="#8b5cf6" strokeWidth="2" />
        {/* Chart icon */}
        <polyline points="52,200 60,188 70,194 80,180 90,185" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="82" y="174" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="bold">TECHNICAL</text>
        <text x="82" y="210" textAnchor="middle" fill="#64748b" fontSize="7">Reactive</text>

        {/* ON-CHAIN (Right) */}
        <rect x="265" y="155" width="105" height="70" rx="12" fill="white" stroke="#8b5cf6" strokeWidth="2" />
        {/* Blockchain icon - linked blocks */}
        <rect x="290" y="185" width="14" height="14" rx="2" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
        <rect x="310" y="185" width="14" height="14" rx="2" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
        <line x1="304" y1="192" x2="310" y2="192" stroke="#8b5cf6" strokeWidth="1.5" />
        <text x="317" y="174" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="bold">ON-CHAIN</text>
        <text x="317" y="210" textAnchor="middle" fill="#64748b" fontSize="7">Predictive</text>

        {/* SENTIMENT (Bottom) */}
        <rect x="148" y="250" width="105" height="70" rx="12" fill="white" stroke="#8b5cf6" strokeWidth="2" />
        {/* Mood icon - smiley */}
        <circle cx="200" cy="275" r="10" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
        <circle cx="196" cy="273" r="1.5" fill="#8b5cf6" />
        <circle cx="204" cy="273" r="1.5" fill="#8b5cf6" />
        <path d="M194 278 Q200 283 206 278" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
        <text x="200" y="296" textAnchor="middle" fill="#64748b" fontSize="7">Contrarian</text>
        <text x="200" y="263" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="bold">SENTIMENT</text>

        {/* Top label: Combination area */}
        <text x="200" y="60" textAnchor="middle" fill="#7c3aed" fontSize="9" fontWeight="bold" letterSpacing="0.5">COMBINATION = CONFLUENCE</text>
        <text x="200" y="74" textAnchor="middle" fill="#64748b" fontSize="8">Professional traders combine 2+ signal types</text>

        {/* Directional labels */}
        <text x="200" y="355" textAnchor="middle" fill="#94a3b8" fontSize="7">Arrows show all signal types flowing into Confluence at center</text>
      </svg>
      <SvgCaption>The Signal Taxonomy — all types converge into Confluence</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Red Flags vs Green Flags Diagram                      */
/* ─────────────────────────────────────────────────────────── */
function RedGreenFlagsDiagram() {
  const redFlags = [
    'No stop loss on any signal',
    'Excessive leverage (10x, 20x, 50x)',
    '"Guaranteed profit" or "100% win rate"',
    'No reasoning provided',
    'Pressure tactics ("Buy in 5 min!")',
    'Hidden or inconsistent track record',
    'Paid group funnel',
  ]

  const greenFlags = [
    'Verifiable track record (55–65%)',
    'Risk management built in',
    'Educational content included',
    'Free trial period (1–2 weeks)',
    'Active community discussions',
  ]

  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 500 400"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Red Flags vs Green Flags comparison for evaluating signal providers"
      >
        {/* Divider line */}
        <line x1="250" y1="40" x2="250" y2="390" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />

        {/* Red side header */}
        <rect x="20" y="10" width="210" height="32" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
        <text x="125" y="31" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">RED FLAGS</text>

        {/* Green side header */}
        <rect x="270" y="10" width="210" height="32" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" />
        <text x="375" y="31" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="bold">GREEN FLAGS</text>

        {/* Red flags with X marks */}
        {redFlags.map((flag, i) => {
          const y = 70 + i * 44
          return (
            <React.Fragment key={`red-${i}`}>
              {/* X mark circle */}
              <circle cx="42" cy={y} r="12" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="36" y1={y - 6} x2="48" y2={y + 6} stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              <line x1="48" y1={y - 6} x2="36" y2={y + 6} stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              {/* Text */}
              <text x="62" y={y + 4} fill="#7f1d1d" fontSize="9" fontWeight="500">{flag}</text>
            </React.Fragment>
          )
        })}

        {/* Green flags with checkmarks */}
        {greenFlags.map((flag, i) => {
          const y = 70 + i * 52
          return (
            <React.Fragment key={`green-${i}`}>
              {/* Checkmark circle */}
              <circle cx="292" cy={y} r="12" fill="#dcfce7" stroke="#22c55e" strokeWidth="1.5" />
              <polyline points={`285,${y} 289,${y + 5} 299,${y - 5}`} fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {/* Text - using y+4 for vertical centering */}
              <text x="312" y={y + 4} fill="#14532d" fontSize="9" fontWeight="500">{flag}</text>
            </React.Fragment>
          )
        })}

        {/* Bottom note */}
        <text x="250" y="390" textAnchor="middle" fill="#64748b" fontSize="8">One red flag is enough to walk away. Multiple green flags build confidence.</text>
      </svg>
      <SvgCaption>Red flags warn — green flags confirm</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Signal Feed Pipeline Diagram                          */
/* ─────────────────────────────────────────────────────────── */
function SignalFeedPipelineDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 440 520"
        className="mx-auto w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Signal Feed Pipeline showing sources flowing into Your Analysis hub and filtering to Trade Decision"
      >
        <defs>
          <linearGradient id="analysisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="decisionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="220" y="24" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold" letterSpacing="1">SIGNAL FEED PIPELINE</text>

        {/* === SOURCE ROW 1: On-Chain === */}
        <rect x="20" y="50" width="120" height="60" rx="8" fill="white" stroke="#8b5cf6" strokeWidth="1.5" />
        {/* Icon: database/link */}
        <circle cx="50" cy="75" r="8" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
        <line x1="58" y1="75" x2="64" y2="75" stroke="#8b5cf6" strokeWidth="1.5" />
        <circle cx="72" cy="75" r="8" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
        <text x="80" y="72" textAnchor="start" fill="#7c3aed" fontSize="9" fontWeight="bold">On-Chain</text>
        <text x="80" y="84" textAnchor="start" fill="#64748b" fontSize="7">Glassnode, CryptoQuant</text>
        <text x="80" y="96" textAnchor="start" fill="#64748b" fontSize="7">Whale Alert</text>

        {/* === SOURCE ROW 1: Technical === */}
        <rect x="160" y="50" width="120" height="60" rx="8" fill="white" stroke="#8b5cf6" strokeWidth="1.5" />
        {/* Icon: chart */}
        <polyline points="178,95 188,80 198,88 208,72 218,78" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="220" y="72" textAnchor="start" fill="#7c3aed" fontSize="9" fontWeight="bold">Technical</text>
        <text x="220" y="84" textAnchor="start" fill="#64748b" fontSize="7">TradingView</text>
        <text x="220" y="96" textAnchor="start" fill="#64748b" fontSize="7">CoinGecko, MEXC</text>

        {/* === SOURCE ROW 1: Sentiment === */}
        <rect x="300" y="50" width="120" height="60" rx="8" fill="white" stroke="#8b5cf6" strokeWidth="1.5" />
        {/* Icon: speech bubble */}
        <rect x="318" y="72" width="22" height="16" rx="4" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
        <polygon points="324,88 328,94 332,88" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
        <text x="358" y="72" textAnchor="start" fill="#7c3aed" fontSize="9" fontWeight="bold">Sentiment</text>
        <text x="358" y="84" textAnchor="start" fill="#64748b" fontSize="7">F&G Index, Twitter/X</text>
        <text x="358" y="96" textAnchor="start" fill="#64748b" fontSize="7">Reddit, Coinglass</text>

        {/* Arrows from sources down to YOUR ANALYSIS hub */}
        <line x1="80" y1="110" x2="190" y2="185" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5" />
        <polygon points="187,182 194,187 187,190" fill="#8b5cf6" opacity="0.5" />

        <line x1="220" y1="110" x2="220" y2="178" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5" />
        <polygon points="216,178 220,186 224,178" fill="#8b5cf6" opacity="0.5" />

        <line x1="360" y1="110" x2="250" y2="185" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.5" />
        <polygon points="247,182 254,187 253,190" fill="#8b5cf6" opacity="0.5" />

        {/* === YOUR ANALYSIS HUB === */}
        <rect x="120" y="186" width="200" height="70" rx="16" fill="url(#analysisGrad)" />
        <text x="220" y="218" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">YOUR ANALYSIS</text>
        <text x="220" y="236" textAnchor="middle" fill="#ddd6fe" fontSize="9">7-Step Process (Day 4) + Confluence</text>

        {/* Filter funnel arrow */}
        <line x1="220" y1="256" x2="220" y2="290" stroke="#8b5cf6" strokeWidth="2" opacity="0.5" />
        {/* Funnel shape */}
        <polygon points="170,275 270,275 250,300 190,300" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1" opacity="0.7" />
        <text x="220" y="293" textAnchor="middle" fill="#7c3aed" fontSize="8" fontWeight="bold">FILTER</text>

        {/* Filter criteria */}
        <text x="220" y="318" textAnchor="middle" fill="#64748b" fontSize="8">Scoring Framework + Risk Check + Confluence</text>

        {/* Arrow to TRADE DECISION */}
        <line x1="220" y1="325" x2="220" y2="355" stroke="#f59e0b" strokeWidth="2" opacity="0.6" />
        <polygon points="216,355 220,363 224,355" fill="#f59e0b" opacity="0.6" />

        {/* === TRADE DECISION === */}
        <rect x="130" y="365" width="180" height="55" rx="12" fill="url(#decisionGrad)" />
        <text x="220" y="393" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">TRADE DECISION</text>
        <text x="220" y="408" textAnchor="middle" fill="#fef3c7" fontSize="8">Execute, Wait, or Pass</text>

        {/* Side labels */}
        <text x="10" y="145" fill="#94a3b8" fontSize="7" transform="rotate(-90, 10, 145)">SOURCES</text>
        <text x="10" y="310" fill="#94a3b8" fontSize="7" transform="rotate(-90, 10, 310)">DECISION</text>

        {/* Bottom rule */}
        <rect x="60" y="440" width="320" height="50" rx="8" fill="#fff7ed" stroke="#fdba74" strokeWidth="1" />
        <text x="220" y="460" textAnchor="middle" fill="#92400e" fontSize="8" fontWeight="bold">THE RULE</text>
        <text x="220" y="476" textAnchor="middle" fill="#78350f" fontSize="7">Never pay for signal groups until consistently profitable on your own.</text>

        {/* Bottom note */}
        <text x="220" y="510" textAnchor="middle" fill="#94a3b8" fontSize="7">External sources are for confirmation &amp; confluence, not blind following.</text>
      </svg>
      <SvgCaption>Your Signal Feed Pipeline — sources flow through your analysis to decisions</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  Signal Type Detail Card                                    */
/* ─────────────────────────────────────────────────────────── */
function SignalTypeCard({
  number,
  name,
  nature,
  description,
  color,
}: {
  number: number
  name: string
  nature: string
  description: string
  color: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: number * 0.1 }}
      className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 sm:p-4"
    >
      <div
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white sm:h-10 sm:w-10"
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-slate-900 sm:text-base">{name}</span>
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white"
            style={{ backgroundColor: color }}
          >
            {nature}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  Score Interpretation Badge                                 */
/* ─────────────────────────────────────────────────────────── */
function ScoreBadge({ range, label, colorClass }: { range: string; label: string; colorClass: string }) {
  return (
    <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 ${colorClass}`}>
      <span className="text-sm font-bold">{range}</span>
      <span className="text-sm">=</span>
      <span className="text-sm font-semibold">{label}</span>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  Source Category Block                                      */
/* ─────────────────────────────────────────────────────────── */
function SourceCategory({
  title,
  icon,
  color,
  sources,
}: {
  title: string
  icon: React.ReactNode
  color: string
  sources: { name: string; detail: string }[]
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex-shrink-0" style={{ color }}>{icon}</span>
        <h5 className="text-sm font-bold text-slate-900" style={{ color }}>{title}</h5>
      </div>
      <ul className="space-y-2">
        {sources.map((source) => (
          <li key={source.name} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: color }} />
            <div>
              <span className="text-sm font-semibold text-slate-800">{source.name}</span>
              <span className="text-sm text-slate-500"> — {source.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day6MorningBlock() {
  return (
    <section id="d6-morning" aria-labelledby="d6-morning-heading">
      <SectionDivider
        icon={<Sun />}
        title="MORNING BLOCK — HOURS 1–3: UNDERSTANDING & EVALUATING CRYPTO SIGNALS"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 1: What Are Crypto Trading Signals?            */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d6-signal-taxonomy"
          title="What Are Crypto Trading Signals? The Complete Taxonomy"
          icon={<Radar className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            {/* Definition */}
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A <strong className="text-slate-900">crypto trading signal</strong> is a recommendation or data-driven insight
              that suggests a specific trading action — buy, sell, or hold — at a particular price level with defined risk
              parameters. Understanding <em>what type</em> of signal you are receiving is the first step to evaluating its quality.
            </p>

            {/* The 4 signal types */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-violet-600 sm:text-base">
                The 4 Types of Signals
              </h4>

              <SignalTypeCard
                number={1}
                name="Technical Signals"
                nature="Reactive"
                description="From chart analysis (Days 2–3). Show what is happening or has just happened on the price chart. Most accessible to beginners — you can see patterns, indicators, and levels directly."
                color="#8b5cf6"
              />

              <SignalTypeCard
                number={2}
                name="On-Chain Signals"
                nature="Predictive"
                description="From blockchain data. Show what's about to happen before it appears on the chart. Examples: large exchange inflows (selling pressure), whale accumulation, miner outflows."
                color="#6d28d9"
              />

              <SignalTypeCard
                number={3}
                name="Sentiment Signals"
                nature="Contrarian"
                description="From market mood — Fear & Greed Index, social media buzz, funding rates. Extreme sentiment often precedes a reversal. When everyone is greedy, be cautious; when everyone is fearful, look for opportunities."
                color="#a78bfa"
              />

              <SignalTypeCard
                number={4}
                name="Combination Signals (Confluence)"
                nature="Most Powerful"
                description="Combine 2+ signal types. This is what professional traders look for — when technical, on-chain, and sentiment signals all point the same direction, the probability of success increases dramatically."
                color="#5b21b6"
              />
            </div>

            {/* SVG: Signal Taxonomy Diagram */}
            <SignalTaxonomyDiagram />

            {/* Key insight */}
            <div className="rounded-lg border border-violet-200 bg-violet-50/60 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start gap-2">
                <Brain className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600" />
                <p className="text-sm font-semibold leading-relaxed text-violet-900 sm:text-base">
                  Most beginners blindly follow Telegram signals without understanding what type they are. Understanding the taxonomy lets you immediately assess quality.
                </p>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 2: Evaluating Signal Providers                  */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d6-signal-evaluation"
          title="Evaluating Signal Providers — The Due Diligence Framework"
          icon={<ShieldAlert className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-6">
            {/* Intro */}
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Thousands of signal providers exist on Telegram, Discord, Twitter/X, and YouTube.{' '}
              <strong className="text-red-700">Most are incompetent or fraudulent.</strong> Before you follow anyone&apos;s
              signals, you need a rigorous framework to separate genuine analysts from scammers.
            </p>

            {/* 7 Red Flags */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-red-700 sm:text-base">
                <XCircle className="h-4 w-4" />
                The 7 Red Flags
              </h4>
              <div className="space-y-2">
                <ChecklistItem>No stop loss on any signal</ChecklistItem>
                <ChecklistItem>Excessive leverage recommendations (10x, 20x, 50x)</ChecklistItem>
                <ChecklistItem>&quot;Guaranteed profit&quot; or &quot;100% win rate&quot;</ChecklistItem>
                <ChecklistItem>No reasoning provided</ChecklistItem>
                <ChecklistItem>Pressure tactics (&quot;Buy in the next 5 minutes!&quot;)</ChecklistItem>
                <ChecklistItem>Hidden or inconsistent track record</ChecklistItem>
                <ChecklistItem>Paid group funnel</ChecklistItem>
              </div>
            </div>

            {/* 5 Green Flags */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-green-700 sm:text-base">
                <CheckCircle2 className="h-4 w-4" />
                The 5 Green Flags
              </h4>
              <div className="space-y-2">
                <ChecklistItem>Verifiable track record (55–65% win rate)</ChecklistItem>
                <ChecklistItem>Risk management built in (SL, position size, R:R)</ChecklistItem>
                <ChecklistItem>Educational content (teach you to fish)</ChecklistItem>
                <ChecklistItem>Free trial period (1–2 weeks)</ChecklistItem>
                <ChecklistItem>Active community with real discussions</ChecklistItem>
              </div>
            </div>

            {/* SVG: Red/Green Flags Diagram */}
            <RedGreenFlagsDiagram />

            {/* Scoring Framework Table */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">
                <Target className="h-4 w-4 text-violet-600" />
                The Scoring Framework
              </h4>
              <ComparisonTable
                headers={['Component', 'Weight', 'Score (0–20)']}
                rows={[
                  ['Stop loss present on every signal', '20', '—'],
                  ['Risk/Reward ratio ≥ 1:2', '20', '—'],
                  ['Reasoning/analysis provided', '20', '—'],
                  ['Entry precision (zone ≤ 3%)', '20', '—'],
                  ['Leverage appropriate (≤ 3x for beginners)', '10', '—'],
                  ['Verifiable track record', '10', '—'],
                  ['Total', '100', '—'],
                ]}
              />
            </div>

            {/* Score Interpretation */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wide text-slate-600">Score Interpretation</h5>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <ScoreBadge range="80–100" label="High Quality" colorClass="border-green-300 bg-green-50 text-green-800" />
                <ScoreBadge range="60–79" label="Moderate" colorClass="border-amber-300 bg-amber-50 text-amber-800" />
                <ScoreBadge range="40–59" label="Low" colorClass="border-orange-300 bg-orange-50 text-orange-800" />
                <ScoreBadge range="Below 40" label="Dangerous" colorClass="border-red-300 bg-red-50 text-red-800" />
              </div>
            </div>

            {/* Practical Exercise */}
            <TopicCard
              id="d6-signal-exercise"
              title="Practical Exercise: Evaluate Real Signal Groups"
              icon={<Search className="h-5 w-5" />}
              variant="highlight"
            >
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Evaluate <strong>3 real Telegram signal groups</strong> over 48 hours using this scoring framework. Document every
                signal, claim, and result. <strong className="text-red-700">Do not trade</strong> — just observe and score.
              </p>
            </TopicCard>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 3: Building Your Personal Signal Feed           */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d6-signal-feed"
          title="Building Your Personal Signal Feed"
          icon={<Rss className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            {/* Intro */}
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              You don&apos;t need expensive subscriptions to get quality signal data. Here are the best{' '}
              <strong>free sources</strong> organized by category. Build your feed gradually — start with one source from each
              category and expand as you get comfortable.
            </p>

            {/* Source categories */}
            <div className="grid gap-4 sm:grid-cols-1">
              {/* On-Chain Data Sources */}
              <SourceCategory
                title="Free On-Chain Data Sources"
                icon={<Activity className="h-5 w-5" />}
                color="#8b5cf6"
                sources={[
                  { name: 'Glassnode (free tier)', detail: 'MVRV, NUPL, active addresses, exchange net position' },
                  { name: 'CryptoQuant (free tier)', detail: 'Exchange inflow/outflow, miner revenue, funding rates' },
                  { name: 'Whale Alert (Twitter/X bot)', detail: 'Real-time large transaction alerts' },
                  { name: 'Blockchain.com Explorer', detail: 'Transaction and wallet lookup' },
                  { name: 'Fear & Greed Index (alternative.me)', detail: 'Daily sentiment reading' },
                ]}
              />

              {/* Technical Analysis Sources */}
              <SourceCategory
                title="Free Technical Analysis Sources"
                icon={<BarChart3 className="h-5 w-5" />}
                color="#6d28d9"
                sources={[
                  { name: 'TradingView', detail: 'Charts and indicators' },
                  { name: 'CoinGecko / CoinMarketCap', detail: 'Price data, market cap, volume' },
                  { name: 'MEXC Market Data', detail: 'In-platform market overview' },
                ]}
              />

              {/* Sentiment Sources */}
              <SourceCategory
                title="Free Sentiment Sources"
                icon={<MessageSquare className="h-5 w-5" />}
                color="#a78bfa"
                sources={[
                  { name: 'Twitter/X Crypto CT', detail: 'Community sentiment' },
                  { name: 'Reddit r/cryptocurrency', detail: 'Community mood gauge' },
                  { name: 'Funding Rate Charts (Coinglass)', detail: 'Futures market positioning' },
                ]}
              />
            </div>

            {/* The Rule */}
            <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                <p className="text-sm font-semibold leading-relaxed text-amber-900 sm:text-base">
                  Never pay for signal groups until consistently profitable on your own. External sources are for confirmation
                  and confluence, not blind following.
                </p>
              </div>
            </div>

            {/* SVG: Signal Feed Pipeline Diagram */}
            <SignalFeedPipelineDiagram />

            {/* Key Takeaway */}
            <KeyTakeaway>
              Your own signals, generated using the 7-step process from Day 4, should be your primary trading signals. External
              sources are for confirmation and confluence, not blind following.
            </KeyTakeaway>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
