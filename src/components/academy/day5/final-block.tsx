'use client'

import React from 'react'
import {
  Workflow,
  Rocket,
  HelpCircle,
  Star,
  BookOpen,
  Flag,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Trophy,
  AlertTriangle,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

/* ═══════════════════════════════════════════════════════════════════════
   SVG: 7-Phase Execution Workflow Flowchart
   ═══════════════════════════════════════════════════════════════════════ */

function ExecutionWorkflowFlowchartSVG() {
  return (
    <svg viewBox="0 0 860 260" className="w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="7-Phase Execution Workflow: Market Scan → Analysis → Signal Generation → Pre-Trade Checklist → Order Execution → Walk Away → Post-Trade Journaling">
      {/* Background */}
      <rect x="0" y="0" width="860" height="260" fill="#f8fafc" rx="8" />

      {/* Defs */}
      <defs>
        <marker id="arrowhead-d5" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#64748b" />
        </marker>
        <marker id="arrowhead-down-d5" markerWidth="6" markerHeight="8" refX="3" refY="0" orient="auto">
          <polygon points="0 8, 3 0, 6 8" fill="#64748b" />
        </marker>
      </defs>

      {/* ──── ROW 1: Phases 1–4 ──── */}

      {/* Phase 1: MARKET SCAN (blue) */}
      <rect x="10" y="20" width="185" height="100" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="102" y="44" textAnchor="middle" fontSize="9" fill="#1e40af" fontWeight="bold">PHASE 1</text>
      <text x="102" y="60" textAnchor="middle" fontSize="8.5" fill="#1e3a8a" fontWeight="bold">MARKET SCAN</text>
      <text x="102" y="76" textAnchor="middle" fontSize="7" fill="#3b82f6">10 minutes</text>
      <text x="102" y="96" textAnchor="middle" fontSize="11" fill="#1e40af">🔍</text>

      {/* Arrow 1→2 */}
      <line x1="195" y1="70" x2="213" y2="70" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-d5)" />

      {/* Phase 2: ANALYSIS (amber) */}
      <rect x="215" y="20" width="185" height="100" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
      <text x="307" y="44" textAnchor="middle" fontSize="9" fill="#92400e" fontWeight="bold">PHASE 2</text>
      <text x="307" y="60" textAnchor="middle" fontSize="8.5" fill="#78350f" fontWeight="bold">ANALYSIS</text>
      <text x="307" y="76" textAnchor="middle" fontSize="7" fill="#d97706">15 min / setup</text>
      <text x="307" y="96" textAnchor="middle" fontSize="11" fill="#92400e">📊</text>

      {/* Arrow 2→3 */}
      <line x1="400" y1="70" x2="418" y2="70" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-d5)" />

      {/* Phase 3: SIGNAL GENERATION (green) */}
      <rect x="420" y="20" width="185" height="100" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="512" y="44" textAnchor="middle" fontSize="9" fill="#166534" fontWeight="bold">PHASE 3</text>
      <text x="512" y="60" textAnchor="middle" fontSize="8.5" fill="#14532d" fontWeight="bold">SIGNAL GEN</text>
      <text x="512" y="76" textAnchor="middle" fontSize="7" fill="#16a34a">5 minutes</text>
      <text x="512" y="96" textAnchor="middle" fontSize="11" fill="#166534">⚡</text>

      {/* Arrow 3→4 */}
      <line x1="605" y1="70" x2="623" y2="70" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-d5)" />

      {/* Phase 4: PRE-TRADE CHECKLIST (pink) */}
      <rect x="625" y="20" width="185" height="100" rx="10" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
      <text x="717" y="44" textAnchor="middle" fontSize="9" fill="#9d174d" fontWeight="bold">PHASE 4</text>
      <text x="717" y="60" textAnchor="middle" fontSize="8.5" fill="#831843" fontWeight="bold">PRE-TRADE CHK</text>
      <text x="717" y="76" textAnchor="middle" fontSize="7" fill="#db2777">2 minutes</text>
      <text x="717" y="96" textAnchor="middle" fontSize="11" fill="#9d174d">✅</text>

      {/* ──── Connecting arrow from Phase 4 down to Phase 5 ──── */}
      <line x1="717" y1="120" x2="717" y2="138" stroke="#64748b" strokeWidth="2" />
      <line x1="717" y1="138" x2="102" y2="138" stroke="#64748b" strokeWidth="2" />
      <line x1="102" y1="138" x2="102" y2="148" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-down-d5)" />

      {/* ──── ROW 2: Phases 5–7 ──── */}

      {/* Phase 5: ORDER EXECUTION (cyan/teal) */}
      <rect x="10" y="150" width="185" height="100" rx="10" fill="#ccfbf1" stroke="#14b8a6" strokeWidth="2" />
      <text x="102" y="174" textAnchor="middle" fontSize="9" fill="#115e59" fontWeight="bold">PHASE 5</text>
      <text x="102" y="190" textAnchor="middle" fontSize="8.5" fill="#134e4a" fontWeight="bold">ORDER EXEC</text>
      <text x="102" y="206" textAnchor="middle" fontSize="7" fill="#0d9488">3 minutes</text>
      <text x="102" y="226" textAnchor="middle" fontSize="11" fill="#115e59">🚀</text>

      {/* Arrow 5→6 */}
      <line x1="195" y1="200" x2="213" y2="200" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-d5)" />

      {/* Phase 6: WALK AWAY (slate) */}
      <rect x="215" y="150" width="185" height="100" rx="10" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
      <text x="307" y="174" textAnchor="middle" fontSize="9" fill="#334155" fontWeight="bold">PHASE 6</text>
      <text x="307" y="190" textAnchor="middle" fontSize="8.5" fill="#1e293b" fontWeight="bold">WALK AWAY</text>
      <text x="307" y="206" textAnchor="middle" fontSize="7" fill="#475569">Close everything</text>
      <text x="307" y="226" textAnchor="middle" fontSize="11" fill="#334155">🚶</text>

      {/* Arrow 6→7 */}
      <line x1="400" y1="200" x2="418" y2="200" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-d5)" />

      {/* Phase 7: POST-TRADE JOURNALING (purple) */}
      <rect x="420" y="150" width="185" height="100" rx="10" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
      <text x="512" y="174" textAnchor="middle" fontSize="9" fill="#5b21b6" fontWeight="bold">PHASE 7</text>
      <text x="512" y="190" textAnchor="middle" fontSize="8.5" fill="#4c1d95" fontWeight="bold">JOURNALING</text>
      <text x="512" y="206" textAnchor="middle" fontSize="7" fill="#7c3aed">5 minutes</text>
      <text x="512" y="226" textAnchor="middle" fontSize="11" fill="#5b21b6">📝</text>

      {/* Bottom label */}
      <text x="430" y="252" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="bold">
        THE COMPLETE EXECUTION WORKFLOW — FROM ANALYSIS TO TRADE
      </text>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 1: The Complete Execution Workflow — From Analysis to Trade
   ═══════════════════════════════════════════════════════════════════════ */

function TopicExecutionWorkflow() {
  return (
    <TopicCard
      id="d5-execution-workflow"
      title="The Complete Execution Workflow — From Analysis to Trade"
      icon={<Workflow />}
      variant="highlight"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Every concept from Days 1–5 fits into a single, <span className="font-bold text-amber-700">7-phase execution workflow</span>.
        This is the complete process you follow for every real trade — no shortcuts, no skipping steps.
        Total time: ~40 minutes from scan to journal.
      </p>

      {/* SVG Flowchart */}
      <div className="mb-6 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          The 7-Phase Execution Workflow
        </p>
        <ExecutionWorkflowFlowchartSVG />
      </div>

      {/* 7 Phases */}
      <div className="space-y-4">
        {/* PHASE 1: MARKET SCAN */}
        <div className="rounded-xl border-2 border-blue-300 bg-blue-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">1</div>
            <div>
              <h4 className="text-sm font-bold text-blue-900 sm:text-base">PHASE 1: MARKET SCAN</h4>
              <p className="text-xs text-blue-700 font-medium">10 minutes</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
              <span>Open TradingView → Scan BTC/USDT daily chart</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
              <span>What&apos;s BTC trend? (from Day 2)</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
              <span>Scan top 10 coins by volume → Any at key S/R levels?</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
              <span>Pick 1–2 pairs with potential setups</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
              <span>Set alerts at key levels</span>
            </li>
          </ul>
        </div>

        {/* PHASE 2: ANALYSIS */}
        <div className="rounded-xl border-2 border-amber-300 bg-amber-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">2</div>
            <div>
              <h4 className="text-sm font-bold text-amber-900 sm:text-base">PHASE 2: ANALYSIS</h4>
              <p className="text-xs text-amber-700 font-medium">15 minutes per setup</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
              <span>Apply 7-Point Framework (Day 3):</span>
            </li>
          </ul>
          <div className="mt-2 ml-5 grid grid-cols-1 gap-1 sm:grid-cols-2">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-100 text-xs font-bold text-amber-700">1</span>
              Structure
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-100 text-xs font-bold text-amber-700">2</span>
              S/R
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-100 text-xs font-bold text-amber-700">3</span>
              EMAs
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-100 text-xs font-bold text-amber-700">4</span>
              Pattern
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-100 text-xs font-bold text-amber-700">5</span>
              RSI
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-100 text-xs font-bold text-amber-700">6</span>
              MACD
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-100 text-xs font-bold text-amber-700">7</span>
              Volume
            </div>
          </div>
          <p className="mt-3 text-sm font-semibold text-amber-800 sm:text-base">
            Minimum 2 confirmations. 3+ = strong signal.
          </p>
        </div>

        {/* PHASE 3: SIGNAL GENERATION */}
        <div className="rounded-xl border-2 border-green-300 bg-green-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">3</div>
            <div>
              <h4 className="text-sm font-bold text-green-900 sm:text-base">PHASE 3: SIGNAL GENERATION</h4>
              <p className="text-xs text-green-700 font-medium">5 minutes</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
              <span>Use 7-step process from Day 4:</span>
            </li>
          </ul>
          <ol className="mt-2 ml-5 space-y-1 text-sm text-slate-600 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-green-100 text-xs font-bold text-green-700">1</span>
              Determine bias
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-green-100 text-xs font-bold text-green-700">2</span>
              Find the level
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-green-100 text-xs font-bold text-green-700">3</span>
              Wait for confirmation
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-green-100 text-xs font-bold text-green-700">4</span>
              Define entry, SL, TP
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-green-100 text-xs font-bold text-green-700">5</span>
              Calculate R:R (minimum 1:2)
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-green-100 text-xs font-bold text-green-700">6</span>
              Calculate position size (1% rule)
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-green-100 text-xs font-bold text-green-700">7</span>
              Document the signal
            </li>
          </ol>
        </div>

        {/* PHASE 4: PRE-TRADE CHECKLIST */}
        <div className="rounded-xl border-2 border-pink-300 bg-pink-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-white">4</div>
            <div>
              <h4 className="text-sm font-bold text-pink-900 sm:text-base">PHASE 4: PRE-TRADE CHECKLIST</h4>
              <p className="text-xs text-pink-700 font-medium">2 minutes</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-pink-500" />
              <span>Run COMPLETE checklist from Day 4:</span>
            </li>
          </ul>
          <div className="mt-2 ml-2 space-y-1">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-pink-500" />
              Analysis checklist ✓
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-pink-500" />
              Signal checklist ✓
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-pink-500" />
              Risk management checklist ✓
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className="h-4 w-4 text-pink-500" />
              Emotional checklist ✓
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <div className="flex-1 rounded-lg border-2 border-green-400 bg-green-50 p-2 text-center">
              <p className="text-xs font-bold text-green-800">ALL checked? → Execute</p>
            </div>
            <div className="flex-1 rounded-lg border-2 border-red-400 bg-red-50 p-2 text-center">
              <p className="text-xs font-bold text-red-800">ANY unchecked? → Do not trade</p>
            </div>
          </div>
        </div>

        {/* PHASE 5: ORDER EXECUTION */}
        <div className="rounded-xl border-2 border-teal-300 bg-teal-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">5</div>
            <div>
              <h4 className="text-sm font-bold text-teal-900 sm:text-base">PHASE 5: ORDER EXECUTION</h4>
              <p className="text-xs text-teal-700 font-medium">3 minutes</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal-500" />
              <span>Open Binance or OKX</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal-500" />
              <span>Place limit order at entry price</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal-500" />
              <span>Set stop loss (stop-limit for BTC/ETH, stop-market for altcoins)</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal-500" />
              <span>Set take profit (limit or OCO)</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal-500" />
              <span>Verify all orders in Open Orders</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-teal-500" />
              <span>Take screenshot for journal</span>
            </li>
          </ul>
        </div>

        {/* PHASE 6: WALK AWAY */}
        <div className="rounded-xl border-2 border-slate-300 bg-slate-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-500 text-sm font-bold text-white">6</div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 sm:text-base">PHASE 6: WALK AWAY</h4>
              <p className="text-xs text-slate-600 font-medium">Until SL or TP is hit</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-slate-500" />
              <span>Close the exchange. Close TradingView.</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-slate-500" />
              <span>Set price alerts at SL and TP</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-slate-500" />
              <span>Do <strong>NOT</strong> check every 5 minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-slate-500" />
              <span>Trust your analysis. Trust your plan.</span>
            </li>
          </ul>
        </div>

        {/* PHASE 7: POST-TRADE JOURNALING */}
        <div className="rounded-xl border-2 border-purple-300 bg-purple-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">7</div>
            <div>
              <h4 className="text-sm font-bold text-purple-900 sm:text-base">PHASE 7: POST-TRADE JOURNALING</h4>
              <p className="text-xs text-purple-700 font-medium">5 minutes</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-purple-500" />
              <span>Journal within 1 hour</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-purple-500" />
              <span>Fill in EVERY field</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-purple-500" />
              <span>Be honest about emotions</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-purple-500" />
              <span>Calculate P&amp;L in R-multiples</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-purple-500" />
              <span>Write lesson learned</span>
            </li>
          </ul>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 2: Your First Real Spot Trade — The Controlled Entry
   ═══════════════════════════════════════════════════════════════════════ */

function TopicFirstRealTrade() {
  const rules = [
    {
      num: 1,
      title: 'SPOT ONLY',
      text: 'No leverage, no futures',
    },
    {
      num: 2,
      title: 'BTC/USDT or ETH/USDT ONLY',
      text: 'Most liquid, least manipulated',
    },
    {
      num: 3,
      title: 'Maximum position',
      text: 'Whatever 1% risk gives you',
    },
    {
      num: 4,
      title: 'MUST have',
      text: 'Entry, SL, TP all defined BEFORE entering',
    },
    {
      num: 5,
      title: 'MUST pass',
      text: 'Complete pre-trade checklist from Day 4',
    },
    {
      num: 6,
      title: 'MUST be',
      text: 'Swing trade setup on 4H or daily chart',
    },
    {
      num: 7,
      title: 'MUST use',
      text: 'Limit order for entry, not market order',
    },
    {
      num: 8,
      title: 'MUST set',
      text: 'OCO or paired TP/SL immediately after entry fills',
    },
  ]

  return (
    <TopicCard
      id="d5-first-real-trade"
      title="Your First Real Spot Trade — The Controlled Entry"
      icon={<Rocket />}
      variant="success"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Before you place your first real trade, you must commit to these
        <span className="font-bold text-green-700"> 8 rules</span>. They are designed
        to protect you while you learn the emotional reality of trading with real money.
      </p>

      {/* 8 Rules */}
      <div className="space-y-3 mb-6">
        {rules.map((rule) => (
          <div key={rule.num} className="flex items-start gap-3 rounded-xl border border-green-200 bg-white p-4 sm:p-5">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
              {rule.num}
            </span>
            <div>
              <p className="text-sm font-bold text-green-900 sm:text-base">{rule.title}</p>
              <p className="text-sm text-slate-600 sm:text-base">{rule.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* IF THERE IS NO VALID SETUP TODAY */}
      <div className="mb-4 rounded-xl border-2 border-amber-400 bg-amber-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-600" />
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-700">
              If there is no valid setup today
            </p>
            <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
                <span>Do <strong>NOT</strong> force a trade</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
                <span>&quot;The best trade is often no trade.&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
                <span>Continue paper trading until a setup appears</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
                <span>A setup will appear within 1–3 days. Be patient.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* IF A VALID SETUP EXISTS TODAY */}
      <div className="rounded-xl border-2 border-green-400 bg-green-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" />
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-green-700">
              If a valid setup exists today
            </p>
            <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
                <span>Walk through Phases 1–7 with real money</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
                <span>Journal the experience completely</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
                <span>Compare real experience to paper trading:</span>
              </li>
            </ul>
            <div className="mt-2 ml-5 space-y-1">
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-green-500 font-bold">→</span>
                Was it more emotional?
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-green-500 font-bold">→</span>
                Did you follow every rule?
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <span className="text-green-500 font-bold">→</span>
                What will you do differently on Trade #2?
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 3: Day 5 Self-Check Quiz — 20 Questions
   ═══════════════════════════════════════════════════════════════════════ */

function TopicSelfCheckQuiz() {
  const questions = [
    'What are the 3 fundamental order types? Explain each in one sentence.',
    'What is slippage and which order type causes it?',
    'Why should limit orders be your default for entries?',
    'What is the difference between a stop order and a stop-limit order?',
    'When should you use stop-market vs. stop-limit?',
    'What does OCO stand for and why is it essential for swing traders?',
    'How does a trailing stop work? Give an example with numbers.',
    'What is a post-only order and what benefit does it provide?',
    'Explain GTC, IOC, and FOK time-in-force options.',
    'What are the spot trading maker/taker fees on Binance and OKX?',
    'What is the difference between spot trading and futures trading?',
    'How does 10x leverage affect a 5% price move? Show the math.',
    'What is the liquidation price at 10x leverage? At 5x?',
    'Why should beginners ALWAYS use isolated margin?',
    'What is the funding rate and how does it affect long-term futures positions?',
    'Name all the fields in the complete trading journal template.',
    'What should you do if price reaches TP1? (Scale-out strategy)',
    'When is it OK to move your stop loss? When is it NOT OK?',
    'Walk through the 7-phase execution workflow from memory.',
    'What are the 8 rules for your first real trade?',
  ]

  return (
    <TopicCard
      id="d5-quiz"
      title="Day 5 Self-Check Quiz — 20 Questions"
      icon={<HelpCircle />}
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Test your understanding. Answer each question from memory first, then check your notes.
        Be honest with yourself — these concepts are your survival toolkit for real trading.
      </p>

      <div className="space-y-3 mb-6">
        {questions.map((q, i) => (
          <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 sm:p-4">
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white">
              {i + 1}
            </span>
            <p className="text-sm text-slate-700 sm:text-base leading-relaxed">{q}</p>
          </div>
        ))}
      </div>

      {/* Pass mark indicator */}
      <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-4 sm:p-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <Trophy className="h-5 w-5 text-amber-600" />
          <p className="text-base font-bold text-amber-900 sm:text-lg">
            Pass mark: <span className="text-amber-700">16 / 20</span> before moving to Day 6
          </p>
          <Trophy className="h-5 w-5 text-amber-600" />
        </div>
        <p className="mt-1 text-xs text-amber-700">
          If you scored below 16, review the sections you missed before proceeding.
        </p>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 4: Day 5 Key Takeaways
   ═══════════════════════════════════════════════════════════════════════ */

function TopicKeyTakeaways() {
  const takeaways = [
    {
      icon: '🛒',
      text: 'Market orders are for emergencies. Limit orders for everything else.',
    },
    {
      icon: '⚖️',
      text: 'Stop-limit = price certainty but risks not filling. Stop-market = fill certainty but bad price risk.',
    },
    {
      icon: '🔗',
      text: 'OCO (Plan Orders on OKX) is non-negotiable for swing traders.',
    },
    {
      icon: '📈',
      text: 'Trailing stops let profits run. Use 3–5% trail for swing trades.',
    },
    {
      icon: '💰',
      text: 'Post-only orders ensure lower maker fee. Over hundreds of trades, this matters.',
    },
    {
      icon: '🏦',
      text: 'Binance has more volume/pairs. OKX has lower maker fees. Use both.',
    },
    {
      icon: '⚡',
      text: 'Futures are powerful but dangerous. Start 1x (spot). 2–3x after 3 months. Never exceed 5x.',
    },
    {
      icon: '🛡️',
      text: 'ALWAYS use isolated margin. Cross margin risks entire account.',
    },
    {
      icon: '💸',
      text: 'Funding rate is a hidden cost. Check before opening futures.',
    },
    {
      icon: '📓',
      text: 'Trading journal is your most important tool. Record EVERY trade. Review weekly.',
    },
    {
      icon: '✅',
      text: 'Moving stop CLOSER is allowed. Moving it FURTHER AWAY = first step to blown account.',
    },
    {
      icon: '🎯',
      text: 'Take partial profit at TP1, move stop to breakeven. Risk-free trade.',
    },
    {
      icon: '🚀',
      text: 'First real trade must follow ALL 8 controlled entry rules. If no setup, WAIT.',
    },
    {
      icon: '🔮',
      text: 'Tomorrow: On-chain analysis, reading the blockchain, understanding "smart money."',
    },
  ]

  return (
    <TopicCard
      id="d5-key-takeaways"
      title="Day 5 Key Takeaways"
      icon={<Star />}
      variant="highlight"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        The 14 most important lessons from Day 5. Internalize these — they are the
        foundation of your real-world trading practice.
      </p>

      <div className="space-y-3 mb-4">
        {takeaways.map((item, i) => (
          <div key={i} className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50/40 p-3 sm:p-4">
            <span className="text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
            <p className="text-sm font-medium text-slate-800 sm:text-base leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      <KeyTakeaway>
        Today you crossed the bridge from theory to practice. Every order you place from now on
        should be <strong>deliberate, informed, and correct</strong>. You are no longer a
        student — you are a trader.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 5: Day 5 Homework (Before Day 6)
   ═══════════════════════════════════════════════════════════════════════ */

function TopicHomework() {
  const tasks = [
    {
      num: 1,
      text: 'On Binance Testnet OR OKX Demo, place 5 different order types: Market, Limit, Stop-Limit, OCO (or Plan Order), and Trailing Stop. Screenshot each and write what happened.',
    },
    {
      num: 2,
      text: 'Create your trading journal. Use a notebook, Google Sheets, or Notion. Set up the COMPLETE template from today with ALL fields.',
    },
    {
      num: 3,
      text: 'On the testnet, execute 5 complete paper trades using the 7-phase execution workflow. Journal each trade completely.',
    },
    {
      num: 4,
      text: 'Compare Binance and OKX interfaces. Write: "I prefer ___ for ___ because ___." You should have accounts on BOTH exchanges.',
    },
    {
      num: 5,
      text: 'Calculate the fee difference for your trading style. If you make 20 trades per month with an average position of $200, what are your monthly fees on Binance vs OKX? Show the math.',
    },
    {
      num: 6,
      text: 'Write your COMPLETE risk management plan (updated with today&apos;s knowledge): "My account is $___. I trade on ___. My max leverage is ___. My margin type is ___. I use ___ order type for entries and ___ for exits. My journal is ___."',
    },
    {
      num: 7,
      text: 'If a valid setup exists, place your first real spot trade following all 8 controlled entry rules. Journal it completely. If no setup exists, write: "I am waiting for a setup because ___. No trade is better than a bad trade."',
    },
  ]

  return (
    <TopicCard
      id="d5-homework"
      title="Day 5 Homework (Before Day 6)"
      icon={<BookOpen />}
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Complete all 7 tasks before Day 6. This homework is not busywork — it is
        <span className="font-bold text-slate-900"> practice for real trading</span>.
        The more effort you put in now, the fewer mistakes you&apos;ll make with real money.
      </p>

      <div className="space-y-3 mb-6">
        {tasks.map((task) => (
          <div key={task.num} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-800 text-sm font-bold text-white">
              {task.num}
            </span>
            <p className="text-sm text-slate-700 sm:text-base leading-relaxed">{task.text}</p>
          </div>
        ))}
      </div>

      {/* Motivational closing box */}
      <div className="rounded-xl border-2 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Trophy className="mt-0.5 h-6 w-6 flex-shrink-0 text-green-600" />
          <div>
            <p className="text-sm font-bold text-green-900 sm:text-base leading-relaxed">
              You&apos;ve completed Day 5 — the day you went from student to trader. You now know
              how to place every order type, navigate both major exchanges, understand futures
              mechanics, and have your trading journal set up. Tomorrow, we dive into on-chain
              analysis — reading the blockchain to see what the &apos;smart money&apos; is doing.
              <strong> Rest well.</strong>
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT: Day 5 Final Block
   ═══════════════════════════════════════════════════════════════════════ */

export function Day5FinalBlock() {
  return (
    <section id="d5-final" aria-label="Day 5 Final Block">
      <SectionDivider title="FINAL BLOCK — HOUR 8: INTEGRATION & YOUR FIRST REAL TRADE" icon={<Flag />} />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
        <TopicExecutionWorkflow />
        <TopicFirstRealTrade />
        <TopicSelfCheckQuiz />
        <TopicKeyTakeaways />
        <TopicHomework />
        <AppliedLabSimulation
          id="d5-lab-mexc-spot"
          title="LAB 8: Complete Spot Trade Execution Workflow"
          subtitle="Execute a full spot trade on the MEXC simulator: analyze, plan, execute, and review"
          dayNumber={5}
          sessionName="Final Block"
          labType="mexc"
          learningObjectives={[
            'Execute the complete spot trading workflow from analysis to review',
            'Use limit orders for precise entries at S/R levels',
            'Practice the pre-trade checklist before executing',
            'Record and review the trade for continuous improvement',
          ]}
          tasks={[
            { id: 'd5-l1-t1', instruction: 'PRE-TRADE CHECK: Before placing any order, answer: What is the current market structure? Where is S/R? Are EMAs aligned?', hint: 'This is the pre-trade checklist from today — never skip it. A trade without analysis is gambling.' },
            { id: 'd5-l1-t2', instruction: 'Determine your bias: Bullish (look for buys) or Bearish (look for sells) or Neutral (stay out)', hint: 'If price is above both EMA 20 and EMA 50, and making HH+HL, your bias is bullish.' },
            { id: 'd5-l1-t3', instruction: 'Set a Limit Buy order at a support level identified from the order book or chart', hint: 'Use the order book on the left panel to find where buy orders are clustered — that often indicates a support zone' },
            { id: 'd5-l1-t4', instruction: 'Set your amount based on the 1% risk rule. With $10,000 demo balance, max risk = $100', hint: 'Calculate: If your stop is $200 below entry, your position size = $100 ÷ $200 = 0.5 BTC maximum' },
            { id: 'd5-l1-t5', instruction: 'Execute the Buy order and record: Entry price, Stop-loss, Take-profit, R:R ratio', hint: 'Click the green Buy button. Then immediately note your SL and TP levels.' },
            { id: 'd5-l1-t6', instruction: 'POST-TRADE REVIEW: Write down what went well, what could improve, and what you would do differently next time', hint: 'This is the most important step. Every professional trader reviews their trades. The review is where learning happens.' },
          ]}
          selfAssessment={[
            {
              question: 'What is the correct order of the spot trading workflow?',
              options: [
                'Execute → Analyze → Review',
                'Analyze → Execute → Review',
                'Review → Analyze → Execute',
                'Execute → Review → Analyze',
              ],
              correctIndex: 1,
              explanation: 'The correct workflow is: Analyze (determine structure, S/R, bias) → Execute (place order with risk management) → Review (evaluate the trade). Never execute before analyzing, and always review after.',
            },
            {
              question: 'Why is the post-trade review the most important step?',
              options: [
                'Because it makes you money',
                'Because reviewing trades is where the real learning and improvement happens',
                'Because exchanges require it',
                'It is not actually important',
              ],
              correctIndex: 1,
              explanation: 'The post-trade review is where you identify patterns in your trading behavior, spot mistakes, and reinforce good habits. Without review, you repeat the same mistakes indefinitely. Every professional trader journals and reviews.',
            },
          ]}
          expectedOutcomes={[
            'Ability to execute the complete spot trading workflow',
            'Understanding of the pre-trade checklist',
            'Skill in using limit orders at S/R levels',
            'Habit of post-trade review and journaling',
          ]}
        />
      </div>
    </section>
  )
}
