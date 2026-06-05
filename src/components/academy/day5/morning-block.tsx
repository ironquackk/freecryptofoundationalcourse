'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  Monitor,
  ArrowUpDown,
  BookOpen,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Target,
  Eye,
  Layers,
  ChevronRight,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { AnalogyBox } from '@/components/academy/analogy-box'

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
/*  SVG: Order Types Execution Diagram                         */
/* ─────────────────────────────────────────────────────────── */
function OrderTypesDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 520 340"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Four order types showing how Market, Limit, Stop-Limit, and OCO orders execute"
      >
        <defs>
          <linearGradient id="priceLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="260" y="22" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" letterSpacing="1">HOW EACH ORDER TYPE EXECUTES</text>

        {/* ── MARKET ORDER ── */}
        <rect x="15" y="40" width="115" height="280" rx="8" fill="white" stroke="#06b6d4" strokeWidth="1.5" />
        <rect x="15" y="40" width="115" height="28" rx="8" fill="#06b6d4" />
        <text x="72" y="59" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">MARKET</text>

        {/* Price axis line */}
        <line x1="35" y1="100" x2="110" y2="100" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 2" />
        <text x="30" y="103" textAnchor="end" fill="#94a3b8" fontSize="7">Current</text>

        {/* Arrow pointing to immediate execution */}
        <line x1="72" y1="110" x2="72" y2="160" stroke="#06b6d4" strokeWidth="2" />
        <polygon points="66,155 72,165 78,155" fill="#06b6d4" />

        {/* Execution box */}
        <rect x="40" y="168" width="65" height="30" rx="4" fill="#ecfdf5" stroke="#22c55e" strokeWidth="1" />
        <text x="72" y="180" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">FILLS NOW</text>
        <text x="72" y="192" textAnchor="middle" fill="#16a34a" fontSize="7">at best avail.</text>

        {/* Speed icon */}
        <Zap x="60" y="215" width="24" height="24" fill="#06b6d4" opacity="0.6" />
        <text x="72" y="255" textAnchor="middle" fill="#64748b" fontSize="7">Fastest</text>
        <text x="72" y="265" textAnchor="middle" fill="#64748b" fontSize="7">execution</text>

        {/* Pros/Cons */}
        <text x="72" y="285" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold">+ Instant fill</text>
        <text x="72" y="295" textAnchor="middle" fill="#dc2626" fontSize="7" fontWeight="bold">- Price slip</text>
        <text x="72" y="308" textAnchor="middle" fill="#94a3b8" fontSize="6">Use: Urgent entry</text>

        {/* ── LIMIT ORDER ── */}
        <rect x="145" y="40" width="115" height="280" rx="8" fill="white" stroke="#0891b2" strokeWidth="1.5" />
        <rect x="145" y="40" width="115" height="28" rx="8" fill="#0891b2" />
        <text x="202" y="59" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">LIMIT</text>

        {/* Price axis line - current */}
        <line x1="165" y1="100" x2="240" y2="100" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 2" />
        <text x="160" y="103" textAnchor="end" fill="#94a3b8" fontSize="7">Current</text>

        {/* Target price line */}
        <line x1="165" y1="140" x2="240" y2="140" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" />
        <text x="160" y="143" textAnchor="end" fill="#16a34a" fontSize="7">Target</text>

        {/* Waiting indicator */}
        <rect x="170" y="110" width="65" height="22" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1" />
        <text x="202" y="124" textAnchor="middle" fill="#92400e" fontSize="8" fontWeight="bold">WAITS...</text>

        {/* Arrow when price reaches target */}
        <line x1="202" y1="140" x2="202" y2="170" stroke="#22c55e" strokeWidth="2" />
        <polygon points="196,166 202,175 208,166" fill="#22c55e" />

        {/* Execution box */}
        <rect x="170" y="178" width="65" height="30" rx="4" fill="#ecfdf5" stroke="#22c55e" strokeWidth="1" />
        <text x="202" y="190" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">FILLS AT</text>
        <text x="202" y="202" textAnchor="middle" fill="#16a34a" fontSize="7">exact price</text>

        <Target x="190" y="220" width="24" height="24" fill="#0891b2" opacity="0.6" />
        <text x="202" y="255" textAnchor="middle" fill="#64748b" fontSize="7">Precise</text>
        <text x="202" y="265" textAnchor="middle" fill="#64748b" fontSize="7">price control</text>

        <text x="202" y="285" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold">+ Exact price</text>
        <text x="202" y="295" textAnchor="middle" fill="#dc2626" fontSize="7" fontWeight="bold">- May not fill</text>
        <text x="202" y="308" textAnchor="middle" fill="#94a3b8" fontSize="6">Use: Precise entry</text>

        {/* ── STOP-LIMIT ORDER ── */}
        <rect x="275" y="40" width="115" height="280" rx="8" fill="white" stroke="#0e7490" strokeWidth="1.5" />
        <rect x="275" y="40" width="115" height="28" rx="8" fill="#0e7490" />
        <text x="332" y="59" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">STOP-LIMIT</text>

        {/* Price axis line - current */}
        <line x1="295" y1="100" x2="370" y2="100" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 2" />
        <text x="290" y="103" textAnchor="end" fill="#94a3b8" fontSize="7">Current</text>

        {/* Stop trigger price */}
        <line x1="295" y1="125" x2="370" y2="125" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 2" />
        <text x="290" y="128" textAnchor="end" fill="#d97706" fontSize="7">Stop</text>

        {/* Limit price */}
        <line x1="295" y1="145" x2="370" y2="145" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" />
        <text x="290" y="148" textAnchor="end" fill="#16a34a" fontSize="7">Limit</text>

        {/* Two-step process */}
        <text x="332" y="115" textAnchor="middle" fill="#d97706" fontSize="7" fontWeight="bold">1. Price hits Stop</text>
        <line x1="332" y1="125" x2="332" y2="140" stroke="#f59e0b" strokeWidth="1.5" />
        <polygon points="326,137 332,145 338,137" fill="#f59e0b" />
        <text x="332" y="158" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold">2. Limit activates</text>

        {/* Execution box */}
        <rect x="300" y="168" width="65" height="30" rx="4" fill="#ecfdf5" stroke="#22c55e" strokeWidth="1" />
        <text x="332" y="180" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">FILLS AT</text>
        <text x="332" y="192" textAnchor="middle" fill="#16a34a" fontSize="7">limit or better</text>

        <Layers x="320" y="215" width="24" height="24" fill="#0e7490" opacity="0.6" />
        <text x="332" y="255" textAnchor="middle" fill="#64748b" fontSize="7">Two-step</text>
        <text x="332" y="265" textAnchor="middle" fill="#64748b" fontSize="7">trigger system</text>

        <text x="332" y="285" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold">+ Price control</text>
        <text x="332" y="295" textAnchor="middle" fill="#dc2626" fontSize="7" fontWeight="bold">- May skip</text>
        <text x="332" y="308" textAnchor="middle" fill="#94a3b8" fontSize="6">Use: Breakout entry</text>

        {/* ── OCO ORDER ── */}
        <rect x="405" y="40" width="100" height="280" rx="8" fill="white" stroke="#155e75" strokeWidth="1.5" />
        <rect x="405" y="40" width="100" height="28" rx="8" fill="#155e75" />
        <text x="455" y="59" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">OCO</text>

        {/* Price axis line - current */}
        <line x1="420" y1="100" x2="490" y2="100" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 2" />
        <text x="415" y="103" textAnchor="end" fill="#94a3b8" fontSize="7">Current</text>

        {/* TP price */}
        <line x1="420" y1="80" x2="490" y2="80" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" />
        <text x="415" y="83" textAnchor="end" fill="#16a34a" fontSize="7">TP</text>

        {/* SL price */}
        <line x1="420" y1="135" x2="490" y2="135" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2" />
        <text x="415" y="138" textAnchor="end" fill="#dc2626" fontSize="7">SL</text>

        {/* Branch arrows */}
        <line x1="455" y1="80" x2="455" y2="155" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" />
        <line x1="455" y1="135" x2="455" y2="155" stroke="#ef4444" strokeWidth="1.5" opacity="0.5" />
        <text x="455" y="120" textAnchor="middle" fill="#64748b" fontSize="6">OR</text>

        {/* Either/Or box */}
        <rect x="425" y="158" width="60" height="40" rx="4" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
        <text x="455" y="172" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold">Hit TP</text>
        <text x="455" y="182" textAnchor="middle" fill="#16a34a" fontSize="6">Cancel SL</text>

        <rect x="425" y="205" width="60" height="40" rx="4" fill="#fef2f2" stroke="#ef4444" strokeWidth="1" />
        <text x="455" y="219" textAnchor="middle" fill="#dc2626" fontSize="7" fontWeight="bold">Hit SL</text>
        <text x="455" y="229" textAnchor="middle" fill="#dc2626" fontSize="6">Cancel TP</text>

        <text x="455" y="265" textAnchor="middle" fill="#64748b" fontSize="7">Auto-cancel</text>
        <text x="455" y="275" textAnchor="middle" fill="#64748b" fontSize="7">other leg</text>

        <text x="455" y="295" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="bold">+ Hands-free</text>
        <text x="455" y="308" textAnchor="middle" fill="#94a3b8" fontSize="6">Use: Exit mgmt</text>
      </svg>
      <SvgCaption>Four order types — each serves a different purpose in your trading</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Order Book Visualization                              */
/* ─────────────────────────────────────────────────────────── */
function OrderBookDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 440 360"
        className="mx-auto w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Order book visualization showing bids in green, asks in red, and the spread between them"
      >
        <defs>
          <linearGradient id="bidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="askGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="220" y="20" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold" letterSpacing="1">ORDER BOOK STRUCTURE</text>

        {/* Column headers */}
        <text x="90" y="44" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">Price (USDT)</text>
        <text x="220" y="44" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">Amount</text>
        <text x="340" y="44" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">Total</text>

        {/* ASKS (sell orders) — red, top half */}
        <rect x="60" y="55" width="300" height="24" rx="3" fill="url(#askGrad)" />
        <rect x="325" y="55" width="35" height="24" rx="3" fill="#ef4444" opacity="0.3" />
        <text x="90" y="71" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">67,245</text>
        <text x="220" y="71" textAnchor="middle" fill="#475569" fontSize="9">0.842</text>
        <text x="340" y="71" textAnchor="middle" fill="#475569" fontSize="9">2.41</text>

        <rect x="60" y="83" width="300" height="24" rx="3" fill="url(#askGrad)" />
        <rect x="290" y="83" width="70" height="24" rx="3" fill="#ef4444" opacity="0.3" />
        <text x="90" y="99" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">67,240</text>
        <text x="220" y="99" textAnchor="middle" fill="#475569" fontSize="9">1.523</text>
        <text x="340" y="99" textAnchor="middle" fill="#475569" fontSize="9">1.57</text>

        <rect x="60" y="111" width="300" height="24" rx="3" fill="url(#askGrad)" />
        <rect x="250" y="111" width="110" height="24" rx="3" fill="#ef4444" opacity="0.3" />
        <text x="90" y="127" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">67,235</text>
        <text x="220" y="127" textAnchor="middle" fill="#475569" fontSize="9">2.341</text>
        <text x="340" y="127" textAnchor="middle" fill="#475569" fontSize="9">3.91</text>

        <rect x="60" y="139" width="300" height="24" rx="3" fill="url(#askGrad)" />
        <rect x="215" y="139" width="145" height="24" rx="3" fill="#ef4444" opacity="0.3" />
        <text x="90" y="155" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">67,230</text>
        <text x="220" y="155" textAnchor="middle" fill="#475569" fontSize="9">3.812</text>
        <text x="340" y="155" textAnchor="middle" fill="#475569" fontSize="9">7.72</text>

        {/* ── SPREAD ── */}
        <rect x="40" y="168" width="360" height="28" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="220" y="186" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">
          SPREAD: 67,225 — 67,230 = $5.00 (0.007%)
        </text>

        {/* BIDS (buy orders) — green, bottom half */}
        <rect x="60" y="201" width="300" height="24" rx="3" fill="url(#bidGrad)" />
        <rect x="180" y="201" width="180" height="24" rx="3" fill="#22c55e" opacity="0.3" />
        <text x="90" y="217" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">67,225</text>
        <text x="220" y="217" textAnchor="middle" fill="#475569" fontSize="9">4.230</text>
        <text x="340" y="217" textAnchor="middle" fill="#475569" fontSize="9">4.23</text>

        <rect x="60" y="229" width="300" height="24" rx="3" fill="url(#bidGrad)" />
        <rect x="230" y="229" width="130" height="24" rx="3" fill="#22c55e" opacity="0.3" />
        <text x="90" y="245" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">67,220</text>
        <text x="220" y="245" textAnchor="middle" fill="#475569" fontSize="9">2.891</text>
        <text x="340" y="245" textAnchor="middle" fill="#475569" fontSize="9">8.46</text>

        <rect x="60" y="257" width="300" height="24" rx="3" fill="url(#bidGrad)" />
        <rect x="270" y="257" width="90" height="24" rx="3" fill="#22c55e" opacity="0.3" />
        <text x="90" y="273" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">67,215</text>
        <text x="220" y="273" textAnchor="middle" fill="#475569" fontSize="9">1.645</text>
        <text x="340" y="273" textAnchor="middle" fill="#475569" fontSize="9">10.1</text>

        <rect x="60" y="285" width="300" height="24" rx="3" fill="url(#bidGrad)" />
        <rect x="300" y="285" width="60" height="24" rx="3" fill="#22c55e" opacity="0.3" />
        <text x="90" y="301" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">67,210</text>
        <text x="220" y="301" textAnchor="middle" fill="#475569" fontSize="9">0.978</text>
        <text x="340" y="301" textAnchor="middle" fill="#475569" fontSize="9">11.1</text>

        {/* Legend */}
        <rect x="60" y="325" width="12" height="12" rx="2" fill="#ef4444" opacity="0.5" />
        <text x="78" y="335" fill="#dc2626" fontSize="8" fontWeight="bold">Asks (sell walls)</text>

        <rect x="180" y="325" width="12" height="12" rx="2" fill="#22c55e" opacity="0.5" />
        <text x="198" y="335" fill="#16a34a" fontSize="8" fontWeight="bold">Bids (buy walls)</text>

        <rect x="300" y="325" width="12" height="12" rx="2" fill="#f59e0b" opacity="0.5" />
        <text x="318" y="335" fill="#92400e" fontSize="8" fontWeight="bold">Spread</text>

        {/* Side labels */}
        <text x="20" y="135" fill="#dc2626" fontSize="9" fontWeight="bold" transform="rotate(-90, 20, 135)">SELLERS</text>
        <text x="20" y="265" fill="#16a34a" fontSize="9" fontWeight="bold" transform="rotate(-90, 20, 265)">BUYERS</text>
      </svg>
      <SvgCaption>Order book — the real-time supply and demand for an asset</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MEXC Interface Section Component                            */
/* ─────────────────────────────────────────────────────────── */
function MexcInterfaceSection() {
  const areas = [
    {
      name: 'Spot Trading Page',
      description: 'Your home base for all spot trades. Navigate to Trade → Spot on MEXC. The layout shows the chart on the left/center, order book on the right, and order entry at the bottom-right.',
      color: 'border-cyan-300 bg-cyan-50/50',
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      name: 'Order Book',
      description: 'Real-time display of all buy (bid) and sell (ask) orders. Green = bids (buyers), Red = asks (sellers). The depth shows you where supply and demand are concentrated.',
      color: 'border-green-300 bg-green-50/50',
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      name: 'Trade History',
      description: 'Shows recent executed trades — price, amount, and time. Green = buy-filled, Red = sell-filled. Helps you see real-time market momentum.',
      color: 'border-amber-300 bg-amber-50/50',
      icon: <Eye className="h-5 w-5" />,
    },
    {
      name: 'Chart Integration',
      description: 'MEXC integrates TradingView charts directly. You can draw, add indicators, and switch timeframes without leaving the platform. But for deep analysis, use TradingView separately.',
      color: 'border-purple-300 bg-purple-50/50',
      icon: <Layers className="h-5 w-5" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {areas.map((area) => (
        <div key={area.name} className={`rounded-lg border p-4 ${area.color}`}>
          <div className="mb-2 flex items-center gap-2">
            <span className="text-cyan-600 [&>svg]:h-5 [&>svg]:w-5">{area.icon}</span>
            <h5 className="text-sm font-bold text-slate-900">{area.name}</h5>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">{area.description}</p>
        </div>
      ))}
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day5MorningBlock() {
  return (
    <section id="d5-morning" aria-labelledby="d5-morning-heading">
      <SectionDivider
        icon={<Sun />}
        title="MORNING BLOCK — HOURS 1-3: MEXC PLATFORM MASTERY"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 1: MEXC Interface Walkthrough                  */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-mexc-interface"
          title="MEXC Interface Walkthrough"
          icon={<Monitor className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Today we transition from theory to practice. Your primary execution platform is <strong className="text-slate-900">MEXC</strong> — a global exchange known for its wide selection of trading pairs, low fees, and user-friendly interface. Before you place your first real trade, you need to know every corner of the platform.
            </p>

            <MexcInterfaceSection />

            <AnalogyBox title="The Trading Dashboard Is Like an Airplane Cockpit">
              A pilot doesn&apos;t just &ldquo;fly&rdquo; — they know every instrument, switch, and warning light before takeoff. Your trading platform is the same. Before you risk real money, you should be able to navigate MEXC with your eyes closed. Fumbling during a fast market move costs money.
            </AnalogyBox>

            <div className="rounded-lg border border-cyan-200 bg-cyan-50/60 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-600" />
                <p className="text-sm font-semibold leading-relaxed text-cyan-900 sm:text-base">
                  First exercise: Log into MEXC, navigate to the spot trading page, and identify all four areas above. Don&apos;t trade yet — just observe for 15 minutes.
                </p>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 2: Order Types Deep Dive                       */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-order-types"
          title="Order Types Deep Dive — Market, Limit, Stop-Limit & OCO"
          icon={<ArrowUpDown className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Understanding order types is <strong className="text-slate-900">non-negotiable</strong>. Using the wrong order type can cost you money through slippage, missed fills, or unintended entries. Here are the four order types you must master.
            </p>

            {/* Market Order */}
            <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50/30 p-4 sm:p-5">
              <h4 className="mb-2 text-base font-bold text-slate-900 sm:text-lg flex items-center gap-2">
                <Zap className="h-5 w-5 text-cyan-600" />
                1. Market Order
              </h4>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base mb-3">
                A market order executes <strong>immediately</strong> at the best available price. You don&apos;t specify a price — you specify an amount, and the exchange fills it from the order book.
              </p>
              <div className="space-y-2">
                <p className="text-sm"><span className="text-green-700 font-bold">Best for:</span> When you need to enter or exit RIGHT NOW — during a breakout that won&apos;t wait, or when cutting a losing trade.</p>
                <p className="text-sm"><span className="text-red-700 font-bold">Danger:</span> In low-liquidity markets, a market order can &ldquo;eat through&rdquo; multiple levels of the order book, resulting in a much worse average price than expected. This is called <strong>slippage</strong>.</p>
              </div>
            </div>

            {/* Limit Order */}
            <div className="rounded-xl border-2 border-teal-200 bg-teal-50/30 p-4 sm:p-5">
              <h4 className="mb-2 text-base font-bold text-slate-900 sm:text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-teal-600" />
                2. Limit Order
              </h4>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base mb-3">
                A limit order sets a <strong>specific price</strong> at which you want to buy or sell. Your order sits in the order book until the market reaches your price — then it fills. If the market never reaches your price, the order never fills.
              </p>
              <div className="space-y-2">
                <p className="text-sm"><span className="text-green-700 font-bold">Best for:</span> Patient entries at key levels (support, resistance, Fibonacci levels). Also the standard way to set take-profit targets.</p>
                <p className="text-sm"><span className="text-red-700 font-bold">Danger:</span> During fast moves, the price can blow right past your limit without filling if there aren&apos;t enough orders ahead of you in the queue.</p>
              </div>
            </div>

            {/* Stop-Limit Order */}
            <div className="rounded-xl border-2 border-amber-200 bg-amber-50/30 p-4 sm:p-5">
              <h4 className="mb-2 text-base font-bold text-slate-900 sm:text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                3. Stop-Limit Order
              </h4>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base mb-3">
                A stop-limit is a <strong>two-step order</strong>. First, the <strong>stop price</strong> acts as a trigger — when the market hits this price, the order activates. Then, the <strong>limit price</strong> sets the maximum (or minimum) you&apos;re willing to accept. On MEXC, you set both prices.
              </p>
              <div className="space-y-2">
                <p className="text-sm"><span className="text-green-700 font-bold">Best for:</span> Breakout entries (buy when price breaks above resistance, but only up to a certain price) and stop-loss orders (sell when price drops below support, but not below a certain level).</p>
                <p className="text-sm"><span className="text-red-700 font-bold">Danger:</span> In a flash crash, price can gap past both your stop AND limit — the order triggers but never fills because the limit was already breached. Your stop-loss becomes useless.</p>
              </div>
            </div>

            {/* OCO Order */}
            <div className="rounded-xl border-2 border-purple-200 bg-purple-50/30 p-4 sm:p-5">
              <h4 className="mb-2 text-base font-bold text-slate-900 sm:text-lg flex items-center gap-2">
                <Layers className="h-5 w-5 text-purple-600" />
                4. OCO (One-Cancels-the-Other)
              </h4>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base mb-3">
                An OCO order combines <strong>a limit order (take-profit) and a stop-limit order (stop-loss)</strong> into a single pair. When one order fills, the other is automatically cancelled. It&apos;s the &ldquo;set it and forget it&rdquo; exit strategy.
              </p>
              <div className="space-y-2">
                <p className="text-sm"><span className="text-green-700 font-bold">Best for:</span> Setting your exit plan before you enter a trade. You define both your profit target and your maximum loss — whichever hits first executes, and the other cancels automatically.</p>
                <p className="text-sm"><span className="text-red-700 font-bold">Note:</span> Not all exchanges support OCO for all pairs. On MEXC, check if OCO is available for your specific trading pair. If not, set TP and SL as separate orders and manually cancel the other when one fills.</p>
              </div>
            </div>

            {/* SVG: Order Types Diagram */}
            <OrderTypesDiagram />

            {/* Comparison Table */}
            <ComparisonTable
              headers={['Order Type', 'Price Control', 'Execution Speed', 'Fill Guarantee', 'Best Use']}
              rows={[
                ['Market', 'None', 'Instant', 'Yes (at unknown price)', 'Urgent entry/exit'],
                ['Limit', 'Exact price', 'Waits for price', 'No (may never fill)', 'Precise entry at level'],
                ['Stop-Limit', 'Two-step control', 'After trigger', 'No (may skip)', 'Breakout entry, SL'],
                ['OCO', 'TP + SL control', 'After trigger', 'One leg fills', 'Hands-free exit mgmt'],
              ]}
            />

            <KeyTakeaway>
              Always use limit orders for entries unless the market is breaking out and every second counts. Market orders are for emergencies. Stop-limits are for protection. OCO is for exits.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 3: Understanding the Order Book                 */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-order-book"
          title="Understanding the Order Book — Reading Supply & Demand"
          icon={<BookOpen className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The order book is the <strong className="text-slate-900">heartbeat of the market</strong>. It shows you every pending buy and sell order waiting to be filled. Learning to read it gives you an unfair advantage over traders who only look at charts.
            </p>

            {/* Key concepts */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
                <h5 className="mb-2 text-sm font-bold text-green-800">Bids (Green Side)</h5>
                <p className="text-sm leading-relaxed text-slate-700">
                  Buy orders waiting to be filled. The highest bid is the best price a buyer is willing to pay. Large bid walls indicate strong buying interest at a specific level.
                </p>
              </div>
              <div className="rounded-lg border border-red-200 bg-red-50/50 p-4">
                <h5 className="mb-2 text-sm font-bold text-red-800">Asks (Red Side)</h5>
                <p className="text-sm leading-relaxed text-slate-700">
                  Sell orders waiting to be filled. The lowest ask is the best price a seller will accept. Large ask walls indicate strong selling pressure at a specific level.
                </p>
              </div>
            </div>

            {/* SVG: Order Book */}
            <OrderBookDiagram />

            {/* Spread explanation */}
            <div className="rounded-xl border-2 border-amber-300 bg-amber-50/50 p-4 sm:p-5">
              <h4 className="mb-3 text-base font-bold text-amber-900 sm:text-lg">The Spread — Why It Matters</h4>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base mb-3">
                The <strong>spread</strong> is the gap between the highest bid and the lowest ask. It&apos;s the hidden cost of every trade:
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-600" />
                  <span><strong>Tight spread</strong> (small gap, like $1–$5 on BTC): High liquidity, easy to enter/exit, low cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-600" />
                  <span><strong>Wide spread</strong> (large gap, like $50+ on BTC): Low liquidity, harder to enter/exit, higher cost.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-600" />
                  <span><strong>Rule of thumb:</strong> If the spread is wider than 0.1% of the price, be cautious with market orders. Use limit orders instead.</span>
                </li>
              </ul>
            </div>

            {/* Order book reading tips */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">5 Tips for Reading the Order Book</h4>
              <div className="space-y-2">
                {[
                  { tip: 'Watch for large walls', detail: 'A huge bid wall at a level = strong support. A huge ask wall = strong resistance.' },
                  { tip: 'Walls can be fake', detail: '"Spoofing" — large orders placed and cancelled before execution. Don\'t trust walls blindly; they can disappear in seconds.' },
                  { tip: 'Watch the rate of change', detail: 'If bids are stacking up faster than asks, buyers are gaining control. If asks are growing, sellers are taking over.' },
                  { tip: 'Use the depth chart', detail: 'MEXC shows a visual depth chart (cumulative view of the order book). It makes it much easier to spot walls at a glance.' },
                  { tip: 'Check the spread before entering', detail: 'Wide spread = use limit orders only. Tight spread = market orders are safer.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.tip}</p>
                      <p className="text-sm text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <KeyTakeaway>
              The order book shows you what the chart cannot — the real-time intentions of buyers and sellers. But remember: large orders can be fake (spoofing). Always confirm with price action.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 4: Slippage & How to Avoid It                  */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-slippage"
          title="Slippage & How to Avoid It"
          icon={<AlertTriangle className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong className="text-red-700">Slippage</strong> is the difference between the price you expect and the price you actually get. It&apos;s the hidden enemy of every market order, and it can turn a good trade into a bad one before you even start.
            </p>

            {/* Slippage example */}
            <div className="rounded-xl border border-red-200 bg-red-50/50 p-4 sm:p-5">
              <h4 className="mb-3 text-base font-bold text-red-900">Real-World Slippage Example</h4>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                You want to buy 0.5 BTC at <strong>$67,225</strong> (the current ask). You place a market order. But there&apos;s only 0.1 BTC at $67,225, 0.15 BTC at $67,230, and 0.25 BTC at $67,245. Your order &ldquo;eats through&rdquo; all three levels, and your average fill price is <strong>$67,238</strong>. That&apos;s $13 of slippage — on just 0.5 BTC, that&apos;s $6.50 lost before your trade even starts.
              </p>
            </div>

            {/* How to avoid slippage */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">6 Ways to Minimize Slippage</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { title: 'Use Limit Orders', desc: 'The #1 defense. You set the maximum price you\'ll pay. If it can\'t fill at that price, it simply waits.' },
                  { title: 'Trade Liquid Pairs', desc: 'BTC/USDT, ETH/USDT have tight spreads. Small-cap altcoins can have 0.5%+ spreads — avoid market orders.' },
                  { title: 'Check the Spread First', desc: 'Before any market order, look at the spread. If it\'s wider than 0.1%, switch to a limit order.' },
                  { title: 'Avoid Market Orders During Volatility', desc: 'During news events or flash crashes, spreads widen and slippage explodes. Stay calm and use limit orders.' },
                  { title: 'Split Large Orders', desc: 'Instead of buying 1 BTC at once, buy 0.25 BTC in 4 batches. This gives the order book time to refill between fills.' },
                  { title: 'Use MEXC\'s Order Preview', desc: 'Before confirming, MEXC shows you the estimated fill price. If it\'s significantly worse than expected, switch to a limit order.' },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-white p-3">
                    <div className="mb-1 flex items-center gap-2">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan-600 text-xs font-bold text-white">
                        {i + 1}
                      </div>
                      <h5 className="text-sm font-bold text-slate-900">{item.title}</h5>
                    </div>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <AnalogyBox title="Slippage Is Like Buying at a Busy Store">
              Imagine you&apos;re at a store where the price tag says $10, but by the time you reach the register, the cashier says &ldquo;That one&apos;s sold out, but we have the same item for $12.&rdquo; That&apos;s slippage. The more crowded (illiquid) the store, the worse the markup.
            </AnalogyBox>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
