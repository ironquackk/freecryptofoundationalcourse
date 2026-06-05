'use client'

import React from 'react'
import {
  Layers,
  ClipboardCheck,
  HelpCircle,
  Star,
  BookOpen,
  Flag,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Trophy,
  FlaskConical,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { TradingViewLab } from '@/components/academy/tradingview-lab'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

/* ═══════════════════════════════════════════════════════════════════════
   SVG: 5-Phase Trade Workflow Flowchart
   ═══════════════════════════════════════════════════════════════════════ */

function TradeWorkflowFlowchartSVG() {
  return (
    <svg viewBox="0 0 800 180" className="w-full" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="5-Phase Trade Workflow: Preparation → Analysis → Risk Calculation → Execution → Documentation">
      {/* Background */}
      <rect x="0" y="0" width="800" height="180" fill="#f8fafc" rx="8" />

      {/* Phase 1 */}
      <rect x="10" y="30" width="140" height="110" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <text x="80" y="55" textAnchor="middle" fontSize="9" fill="#1e40af" fontWeight="bold">PHASE 1</text>
      <text x="80" y="72" textAnchor="middle" fontSize="8" fill="#1e3a8a" fontWeight="bold">PREPARATION</text>
      <text x="80" y="88" textAnchor="middle" fontSize="7" fill="#3b82f6">Before market</text>
      <text x="80" y="100" textAnchor="middle" fontSize="7" fill="#3b82f6">hours</text>
      <text x="80" y="120" textAnchor="middle" fontSize="10" fill="#1e40af">📋</text>

      {/* Arrow 1→2 */}
      <line x1="150" y1="85" x2="168" y2="85" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Phase 2 */}
      <rect x="170" y="30" width="140" height="110" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
      <text x="240" y="55" textAnchor="middle" fontSize="9" fill="#92400e" fontWeight="bold">PHASE 2</text>
      <text x="240" y="72" textAnchor="middle" fontSize="8" fill="#78350f" fontWeight="bold">ANALYSIS</text>
      <text x="240" y="88" textAnchor="middle" fontSize="7" fill="#d97706">7-point</text>
      <text x="240" y="100" textAnchor="middle" fontSize="7" fill="#d97706">framework</text>
      <text x="240" y="120" textAnchor="middle" fontSize="10" fill="#92400e">🔍</text>

      {/* Arrow 2→3 */}
      <line x1="310" y1="85" x2="328" y2="85" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Phase 3 */}
      <rect x="330" y="30" width="140" height="110" rx="10" fill="#fce7f3" stroke="#ec4899" strokeWidth="2" />
      <text x="400" y="55" textAnchor="middle" fontSize="9" fill="#9d174d" fontWeight="bold">PHASE 3</text>
      <text x="400" y="72" textAnchor="middle" fontSize="8" fill="#831843" fontWeight="bold">RISK CALC</text>
      <text x="400" y="88" textAnchor="middle" fontSize="7" fill="#db2777">Position size</text>
      <text x="400" y="100" textAnchor="middle" fontSize="7" fill="#db2777">+ R:R</text>
      <text x="400" y="120" textAnchor="middle" fontSize="10" fill="#9d174d">🧮</text>

      {/* Arrow 3→4 */}
      <line x1="470" y1="85" x2="488" y2="85" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Phase 4 */}
      <rect x="490" y="30" width="140" height="110" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
      <text x="560" y="55" textAnchor="middle" fontSize="9" fill="#166534" fontWeight="bold">PHASE 4</text>
      <text x="560" y="72" textAnchor="middle" fontSize="8" fill="#14532d" fontWeight="bold">EXECUTION</text>
      <text x="560" y="88" textAnchor="middle" fontSize="7" fill="#16a34a">Place trade</text>
      <text x="560" y="100" textAnchor="middle" fontSize="7" fill="#16a34a">+ walk away</text>
      <text x="560" y="120" textAnchor="middle" fontSize="10" fill="#166534">⚡</text>

      {/* Arrow 4→5 */}
      <line x1="630" y1="85" x2="648" y2="85" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" />

      {/* Phase 5 */}
      <rect x="650" y="30" width="140" height="110" rx="10" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
      <text x="720" y="55" textAnchor="middle" fontSize="9" fill="#5b21b6" fontWeight="bold">PHASE 5</text>
      <text x="720" y="72" textAnchor="middle" fontSize="8" fill="#4c1d95" fontWeight="bold">DOCUMENT</text>
      <text x="720" y="88" textAnchor="middle" fontSize="7" fill="#7c3aed">Journal +</text>
      <text x="720" y="100" textAnchor="middle" fontSize="7" fill="#7c3aed">review</text>
      <text x="720" y="120" textAnchor="middle" fontSize="10" fill="#5b21b6">📝</text>

      {/* Arrowhead marker definition */}
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#64748b" />
        </marker>
      </defs>

      {/* Bottom label */}
      <text x="400" y="168" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="bold">
        THE COMPLETE TRADE WORKFLOW — EVERY TRADE, EVERY TIME
      </text>
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 1: Bringing It All Together — Style + Signals + Risk Management
   ═══════════════════════════════════════════════════════════════════════ */

function TopicBringingItAllTogether() {
  return (
    <TopicCard
      id="d4-bringing-together"
      title="Bringing It All Together — Style + Signals + Risk Management"
      icon={<Layers />}
      variant="highlight"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Every concept from Days 1–4 fits into a single, repeatable workflow. This is the
        <span className="font-bold text-amber-700"> complete process</span> you follow for every
        trade — no shortcuts, no skipping steps.
      </p>

      {/* SVG Flowchart */}
      <div className="mb-6 rounded-lg border border-slate-200 bg-white p-3">
        <p className="mb-2 text-center text-xs font-semibold text-slate-500 uppercase tracking-wide">
          The 5-Phase Trade Workflow
        </p>
        <TradeWorkflowFlowchartSVG />
      </div>

      {/* 5 Phases */}
      <div className="space-y-4">
        {/* PHASE 1: PREPARATION */}
        <div className="rounded-xl border-2 border-blue-300 bg-blue-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">1</div>
            <div>
              <h4 className="text-sm font-bold text-blue-900 sm:text-base">PHASE 1: PREPARATION</h4>
              <p className="text-xs text-blue-700 font-medium">Before market hours</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
              <span>Know your trading style and its rules</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
              <span>Know your risk limits (1% per trade, 3% daily, 5% weekly)</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
              <span>Have your trading plan written and accessible</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
              <span>Have your journal ready</span>
            </li>
          </ul>
        </div>

        {/* PHASE 2: ANALYSIS */}
        <div className="rounded-xl border-2 border-amber-300 bg-amber-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">2</div>
            <div>
              <h4 className="text-sm font-bold text-amber-900 sm:text-base">PHASE 2: ANALYSIS</h4>
              <p className="text-xs text-amber-700 font-medium">Using 7-point framework from Day 3</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
              <span>Determine bias (structure + EMAs)</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
              <span>Find the level (S/R)</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
              <span>Wait for confirmation (candlesticks + RSI + MACD + Volume + BB)</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
              <span>Generate your signal (7-step process)</span>
            </li>
          </ul>
        </div>

        {/* PHASE 3: RISK CALCULATION */}
        <div className="rounded-xl border-2 border-pink-300 bg-pink-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-sm font-bold text-white">3</div>
            <div>
              <h4 className="text-sm font-bold text-pink-900 sm:text-base">PHASE 3: RISK CALCULATION</h4>
              <p className="text-xs text-pink-700 font-medium">Using formulas from today</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-pink-500" />
              <span>Calculate position size using 1% rule</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-pink-500" />
              <span>Verify R:R is at least 1:2</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-pink-500" />
              <span>Calculate expectancy if you have enough data</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-pink-500" />
              <span>Run through complete risk management checklist</span>
            </li>
          </ul>
        </div>

        {/* PHASE 4: EXECUTION */}
        <div className="rounded-xl border-2 border-green-300 bg-green-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">4</div>
            <div>
              <h4 className="text-sm font-bold text-green-900 sm:text-base">PHASE 4: EXECUTION</h4>
              <p className="text-xs text-green-700 font-medium">Placing the trade</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
              <span>Place entry order</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
              <span>Set stop loss <strong>IMMEDIATELY</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
              <span>Set take profit <strong>IMMEDIATELY</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
              <span>Use OCO (Binance) or Plan (OKX) orders</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
              <span><strong>Walk away</strong> — don&apos;t micromanage</span>
            </li>
          </ul>
        </div>

        {/* PHASE 5: DOCUMENTATION */}
        <div className="rounded-xl border-2 border-purple-300 bg-purple-50/50 p-4 sm:p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">5</div>
            <div>
              <h4 className="text-sm font-bold text-purple-900 sm:text-base">PHASE 5: DOCUMENTATION</h4>
              <p className="text-xs text-purple-700 font-medium">After the trade</p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-purple-500" />
              <span>Journal the trade completely within 1 hour</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-purple-500" />
              <span>Record emotions before, during, and after</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-purple-500" />
              <span>Write lessons learned</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-purple-500" />
              <span>Update running metrics (win rate, R:R, expectancy)</span>
            </li>
          </ul>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 2: The Pre-Trade Checklist — Your Final Gate
   ═══════════════════════════════════════════════════════════════════════ */

function TopicPreTradeChecklist() {
  return (
    <TopicCard
      id="d4-pre-trade-checklist"
      title="The Pre-Trade Checklist — Your Final Gate"
      icon={<ClipboardCheck />}
      variant="success"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        The <span className="font-bold text-green-700">combined checklist from all 4 days</span>.
        Before you execute any trade, run through every single item. This is your final gate —
        it protects you from impulsive, emotional, or badly planned trades.
      </p>

      {/* ANALYSIS CHECKLIST */}
      <div className="mb-5 rounded-xl border border-blue-200 bg-blue-50/40 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">A</div>
          <h4 className="text-sm font-bold text-blue-900 sm:text-base">ANALYSIS CHECKLIST <span className="font-normal text-blue-600">(Days 2–3)</span></h4>
        </div>
        <div className="space-y-0.5">
          <ChecklistItem>Market structure confirms my bias</ChecklistItem>
          <ChecklistItem>Price is at a valid S/R level (3+ touches)</ChecklistItem>
          <ChecklistItem>At least 2 indicators confirm my entry</ChecklistItem>
          <ChecklistItem>No conflicting signals from 7-point framework</ChecklistItem>
        </div>
      </div>

      {/* SIGNAL CHECKLIST */}
      <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50/40 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">S</div>
          <h4 className="text-sm font-bold text-amber-900 sm:text-base">SIGNAL CHECKLIST <span className="font-normal text-amber-600">(Day 4)</span></h4>
        </div>
        <div className="space-y-0.5">
          <ChecklistItem>I have a complete signal (pair, direction, entry, SL, TP)</ChecklistItem>
          <ChecklistItem>My signal has clear reasoning</ChecklistItem>
          <ChecklistItem>R:R is at least 1:2</ChecklistItem>
          <ChecklistItem>Entry zone is tight (1–3% range)</ChecklistItem>
        </div>
      </div>

      {/* RISK MANAGEMENT CHECKLIST */}
      <div className="mb-5 rounded-xl border border-pink-200 bg-pink-50/40 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white">R</div>
          <h4 className="text-sm font-bold text-pink-900 sm:text-base">RISK MANAGEMENT CHECKLIST <span className="font-normal text-pink-600">(Day 4)</span></h4>
        </div>
        <div className="space-y-0.5">
          <ChecklistItem>Risking no more than 1% per trade</ChecklistItem>
          <ChecklistItem>Position size calculated with the formula</ChecklistItem>
          <ChecklistItem>Stop loss at a logical level</ChecklistItem>
          <ChecklistItem>Have NOT hit daily/weekly loss limits</ChecklistItem>
          <ChecklistItem>Fewer than 3 open positions</ChecklistItem>
          <ChecklistItem>Not in revenge/overconfident mindset</ChecklistItem>
        </div>
      </div>

      {/* EMOTIONAL CHECKLIST */}
      <div className="mb-6 rounded-xl border border-purple-200 bg-purple-50/40 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500 text-xs font-bold text-white">E</div>
          <h4 className="text-sm font-bold text-purple-900 sm:text-base">EMOTIONAL CHECKLIST <span className="font-normal text-purple-600">(Day 4)</span></h4>
        </div>
        <div className="space-y-0.5">
          <ChecklistItem>I am calm and clear-headed</ChecklistItem>
          <ChecklistItem>I am not FOMO-ing into this trade</ChecklistItem>
          <ChecklistItem>I am not revenge trading after a loss</ChecklistItem>
          <ChecklistItem>I am not overtrading (this is trade #___ today, max 3)</ChecklistItem>
          <ChecklistItem>I have a written reason for this trade</ChecklistItem>
          <ChecklistItem>I can accept the loss if my SL is hit</ChecklistItem>
        </div>
      </div>

      {/* Final Verdict */}
      <div className="space-y-3">
        <div className="rounded-xl border-2 border-green-400 bg-green-50 p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-green-700">GREEN LIGHT</p>
              <p className="text-sm font-bold text-green-900 sm:text-base">ALL boxes checked? → <strong>EXECUTE THE TRADE</strong></p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-red-400 bg-red-50 p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <XCircle className="h-6 w-6 flex-shrink-0 text-red-600" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-red-700">RED LIGHT</p>
              <p className="text-sm font-bold text-red-900 sm:text-base">ANY box unchecked? → <strong>DO NOT TRADE</strong></p>
            </div>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 3: Day 4 Self-Check Quiz — 20 Questions
   ═══════════════════════════════════════════════════════════════════════ */

function TopicSelfCheckQuiz() {
  const questions = [
    'What are the 4 trading styles? Which is recommended for beginners?',
    'Why is swing trading best for beginners? (Give 3 reasons)',
    'What are the 7 required components of a complete trading signal?',
    'What is the #1 red flag of a bad signal?',
    'Name 5 signal red flags and explain why each is dangerous.',
    'What is the 1% rule? Calculate for a $300 account.',
    'What is the position size formula? Calculate: $500 account, 1% risk, BTC entry $70K, SL $68.5K.',
    'What is the minimum acceptable R:R for beginners?',
    'Calculate R:R: Entry $3,500, SL $3,350, TP $3,800.',
    'Can you be profitable with a 40% win rate? Explain with numbers.',
    'What is the break-even win rate formula? Calculate for R:R of 1:3.',
    'What is your daily loss limit? Weekly loss limit?',
    'What should you do after 3 consecutive losses?',
    'What is expectancy? Calculate: 45% win rate, average win $25, average loss $10.',
    'A system with a 55% win rate but 0.8:1 R:R — is it profitable? Show the math.',
    'Why is a 50% drawdown catastrophic? (What gain is needed to recover?)',
    'What\'s the difference between position size and risk amount?',
    'When can you increase from 1% to 2% risk per trade?',
    'What is the revenge trading spiral? How do the daily loss limits prevent it?',
    'Can you recite the complete pre-trade checklist from memory?',
  ]

  return (
    <TopicCard
      id="d4-quiz"
      title="Day 4 Self-Check Quiz — 20 Questions"
      icon={<HelpCircle />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Test your understanding. Answer each question from memory first, then check your notes.
        Be honest with yourself — these concepts are your survival toolkit.
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
            Pass mark: <span className="text-amber-700">16 / 20</span> before moving to Day 5
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
   TOPIC 4: Day 4 Key Takeaways
   ═══════════════════════════════════════════════════════════════════════ */

function TopicKeyTakeaways() {
  const takeaways = [
    {
      icon: '🎯',
      text: 'Your trading style must match your personality, schedule, and capital. For beginners, swing trading is the answer.',
    },
    {
      icon: '📋',
      text: 'A signal without ALL 7 components is not a signal — it\'s a guess.',
    },
    {
      icon: '🚩',
      text: 'The #1 red flag: No stop loss. No exceptions.',
    },
    {
      icon: '🛡️',
      text: 'The 1% rule is your survival foundation. Never risk more than 1% per trade.',
    },
    {
      icon: '🧮',
      text: 'Position size = Risk Amount ÷ (Entry − SL). Calculate for EVERY trade.',
    },
    {
      icon: '⚖️',
      text: 'R:R matters more than win rate. With 1:2, you can be wrong 60% and still profit.',
    },
    {
      icon: '📐',
      text: 'The break-even formula: 1 ÷ (1 + R:R). Know it for any R:R.',
    },
    {
      icon: '🛑',
      text: 'Daily loss limit: 3%. Weekly: 5%. After 3 consecutive losses: 24-hour break.',
    },
    {
      icon: '📊',
      text: 'Expectancy is the ultimate metric: (Win% × Avg Win) − (Loss% × Avg Loss). Positive = profitable.',
    },
    {
      icon: '✅',
      text: 'The pre-trade checklist is your final gate. ALL boxes must be checked.',
    },
    {
      icon: '💪',
      text: 'Risk management isn\'t about limiting profits — it\'s about ensuring you SURVIVE long enough for your edge to work.',
    },
    {
      icon: '🔮',
      text: 'Tomorrow: Your first live spot trades, futures education, and trade journal setup.',
    },
  ]

  return (
    <TopicCard
      id="d4-key-takeaways"
      title="Day 4 Key Takeaways"
      icon={<Star />}
      variant="highlight"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        The 12 most important lessons from Day 4. Internalize these — they are the foundation
        of your trading survival.
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
        If you remember nothing else from Day 4, remember this: <strong>Risk management is not optional</strong>.
        It is the difference between a trader who survives and a trader who blows up their account.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   TOPIC 5: Day 4 Homework (Before Day 5)
   ═══════════════════════════════════════════════════════════════════════ */

function TopicHomework() {
  const tasks = [
    {
      num: 1,
      text: 'Write your complete trading style profile: "My style is ___. My primary timeframe is ___. My trading hours are ___. My max trades per day is ___."',
    },
    {
      num: 2,
      text: 'Calculate your position size for 5 different scenarios using the 1% rule. Show all work.',
    },
    {
      num: 3,
      text: 'Evaluate 5 signals from Telegram groups using the scoring framework. Record each signal\'s score out of 100.',
    },
    {
      num: 4,
      text: 'Generate 5 of your own signals using the 7-step process on historical data. Record complete signal anatomy for each.',
    },
    {
      num: 5,
      text: 'Write your complete risk management plan: "My account is $___. 1% risk = $___ per trade. 3% daily limit = $___. 5% weekly limit = $___. After 3 losses, I will ___."',
    },
    {
      num: 6,
      text: 'Print the pre-trade checklist. Put it next to your computer. Read it before every trade from now on.',
    },
    {
      num: 7,
      text: 'Write: "The most important thing I learned today is ___ because ___"',
    },
  ]

  return (
    <TopicCard
      id="d4-homework"
      title="Day 4 Homework (Before Day 5)"
      icon={<BookOpen />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        Complete all 7 tasks before Day 5. This homework is not busywork — it is
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
              You&apos;ve survived Day 4. Risk management is now in your DNA. Tomorrow, you put it
              into practice with real spot trades. <strong>Rest well</strong> — you&apos;ll need
              a clear head.
            </p>
          </div>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN EXPORT: Day 4 Final Block
   ═══════════════════════════════════════════════════════════════════════ */

export function Day4FinalBlock() {
  return (
    <section id="d4-final" aria-label="Day 4 Final Block">
      <SectionDivider title="FINAL BLOCK — HOUR 8: INTEGRATION & REVIEW" icon={<Flag />} />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
        <TopicBringingItAllTogether />
        <TopicPreTradeChecklist />
        <TopicCard
          id="d4-tradingview-lab"
          title="TradingView Practice Lab — Stop Loss Placement"
          icon={<FlaskConical />}
          variant="default"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Apply what you learned about risk management using the interactive TradingView simulator below.
            Practice identifying key levels, drawing support/resistance lines, and planning where to place
            your stop loss for different trade setups.
          </p>
          <TradingViewLab />
        </TopicCard>
        <TopicSelfCheckQuiz />
        <TopicKeyTakeaways />
        <TopicHomework />
        <AppliedLabSimulation
          id="d4-lab-tradingview-risk"
          title="LAB 7: Risk Level Identification & Stop Placement"
          subtitle="Use the TradingView simulator to practice identifying risk levels and placing stop-losses based on S/R"
          dayNumber={4}
          sessionName="Final Block"
          labType="tradingview"
          learningObjectives={[
            'Identify where to place stop-losses based on market structure',
            'Calculate position size using the 1% risk rule',
            'Determine risk-reward ratios for trade setups',
            'Recognize the difference between invalidation levels and arbitrary stops',
          ]}
          tasks={[
            { id: 'd4-l1-t1', instruction: 'Open the TradingView simulator. Identify a clear support level on the chart', hint: 'Look for a price level where price has bounced multiple times' },
            { id: 'd4-l1-t2', instruction: 'If buying at the current price, where would your stop-loss go? Place it just below the support level — this is your invalidation point', hint: 'Enable the Horizontal Line drawing tool to mark your stop level. It should be below support, not at a random percentage.' },
            { id: 'd4-l1-t3', instruction: 'Calculate your risk: Entry price minus Stop-loss price. This is your risk per BTC', hint: 'If entry is $45,000 and stop is $44,500, your risk is $500 per BTC' },
            { id: 'd4-l1-t4', instruction: 'Apply the 1% rule: If your account is $10,000, your max risk per trade is $100. How many BTC can you buy? (Max risk ÷ Risk per BTC)', hint: '$100 max risk ÷ $500 risk per BTC = 0.2 BTC position size' },
            { id: 'd4-l1-t5', instruction: 'Identify the next resistance level above your entry — this is your take-profit target', hint: 'Look for a level where price has rejected multiple times above the current price' },
            { id: 'd4-l1-t6', instruction: 'Calculate your risk-reward ratio: (TP - Entry) ÷ (Entry - SL). Is it at least 1:2?', hint: 'If TP is $46,500, Entry is $45,000, SL is $44,500: Reward = $1,500, Risk = $500, R:R = 3:1 — excellent!' },
          ]}
          selfAssessment={[
            {
              question: 'What is the 1% rule in risk management?',
              options: [
                'Never risk more than 1% of your total portfolio on a single trade',
                'Always use 1x leverage',
                'Only trade 1% of available coins',
                'Set stop-losses at 1% below entry',
              ],
              correctIndex: 0,
              explanation: 'The 1% rule means you never risk more than 1% of your total trading capital on any single trade. With a $10,000 account, your maximum risk per trade is $100. This protects you from catastrophic losses.',
            },
            {
              question: 'Why should stop-losses be placed at structure levels (below support) rather than arbitrary percentages?',
              options: [
                'Because percentage-based stops always get hit',
                'Because structure-based stops reflect the actual invalidation point of your trade thesis',
                'Because exchanges recommend it',
                'Because support levels never break',
              ],
              correctIndex: 1,
              explanation: 'A stop-loss below support makes logical sense because if support breaks, your trade thesis (buying at support) is invalidated. An arbitrary 2% stop might get hit by normal noise before the level actually fails.',
            },
          ]}
          expectedOutcomes={[
            'Ability to calculate position size using the 1% risk rule',
            'Understanding of structure-based stop-loss placement',
            'Skill in calculating and evaluating risk-reward ratios',
            'Recognition that risk management determines trade size, not the other way around',
          ]}
        />
      </div>
    </section>
  )
}
