'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  CloudSun,
  FileText,
  AlertTriangle,
  ShieldAlert,
  Zap,
  CheckCircle2,
  XCircle,
  ChevronRight,
  Clock,
  Server,
  Flame,
  Bug,
  Brain,
  ArrowRightLeft,
  FlaskConical,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { TradingViewLab } from '@/components/academy/tradingview-lab'

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Emergency Protocol Quick Reference Card               */
/* ─────────────────────────────────────────────────────────── */
function EmergencyProtocolCard() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border-2 border-red-300 bg-red-50/30 p-4">
      <svg
        viewBox="0 0 520 340"
        className="mx-auto w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Emergency protocol quick reference card showing 6 emergency scenarios"
      >
        {/* Title */}
        <rect x="10" y="5" width="500" height="35" rx="6" fill="#dc2626" />
        <text x="260" y="27" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">🚨 EMERGENCY PROTOCOL QUICK REFERENCE 🚨</text>

        {/* Grid of emergency cards */}
        {[
          { icon: '⚡', title: 'Exchange Outage', action: 'Use Binance as backup. Do NOT market buy on return.', x: 15, y: 50 },
          { icon: '📉', title: 'Flash Crash', action: 'Do NOT panic sell. Check if SL triggered on MEXC.', x: 175, y: 50 },
          { icon: '🗑️', title: 'Delisting News', action: 'Close position immediately. Move to stablecoin.', x: 335, y: 50 },
          { icon: '🔓', title: 'Hack / Breach', action: 'Disable account. Move funds to cold wallet.', x: 15, y: 175 },
          { icon: '🧠', title: 'Emotional Crisis', action: 'Close all positions. Take 24hr minimum break.', x: 175, y: 175 },
          { icon: '📊', title: 'Unexpected Gap', action: 'Do NOT chase. Wait for new structure to form.', x: 335, y: 175 },
        ].map((card) => (
          <g key={card.title}>
            <rect x={card.x} y={card.y} width="145" height="110" rx="8" fill="white" stroke="#fca5a5" strokeWidth="1.5" />
            <text x={card.x + 72} y={card.y + 25} textAnchor="middle" fontSize="20">{card.icon}</text>
            <text x={card.x + 72} y={card.y + 45} textAnchor="middle" fill="#991b1b" fontSize="9" fontWeight="bold">{card.title}</text>
            <line x1={card.x + 10} y1={card.y + 52} x2={card.x + 135} y2={card.y + 52} stroke="#fecaca" strokeWidth="1" />
            <text x={card.x + 72} y={card.y + 70} textAnchor="middle" fill="#475569" fontSize="8">{card.action.split('.')[0]}.</text>
            <text x={card.x + 72} y={card.y + 82} textAnchor="middle" fill="#475569" fontSize="8">{card.action.split('.')[1] || ''}</text>
          </g>
        ))}

        {/* Bottom rule */}
        <rect x="10" y="300" width="500" height="30" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="260" y="320" textAnchor="middle" fill="#991b1b" fontSize="9" fontWeight="bold">PRINT THIS CARD. Keep it next to your trading desk. Read it BEFORE you react in any emergency.</text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-red-500 text-center">
        Emergency Quick Reference — when panic strikes, follow the card
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day9LateAfternoonBlock() {
  return (
    <section id="d9-late-afternoon" aria-labelledby="d9-late-afternoon-heading">
      <SectionDivider
        icon={<CloudSun />}
        title="LATE AFTERNOON BLOCK — 2:30-5:30: WRITING THE PLAN & EMERGENCY PROTOCOLS — MODULES 5-6"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 15: The Complete Trading Plan Document           */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-complete-plan"
          title="The Complete Trading Plan Document"
          icon={<FileText className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              This is the <strong className="text-slate-900">master template</strong>. Fill in every section. If you can&apos;t fill something in, you&apos;re not ready to trade live. This document is your commitment to yourself.
            </p>

            {/* Full 12-Section Template */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wide text-emerald-800 sm:text-base">
                📋 YOUR COMPLETE TRADING PLAN — Fill-In Template
              </h4>

              {/* Section 1: Mission & Goals */}
              <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">1</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Mission & Goals</h5>
                </div>
                <div className="space-y-3 ml-9">
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">My Mission Statement</p>
                    <p className="text-sm italic text-slate-400">[Write your personal trading mission — why you trade, what you stand for]</p>
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-2">
                      <p className="text-xs font-bold text-slate-500">Long-term (12mo)</p>
                      <p className="text-xs text-slate-400">[Your target]</p>
                    </div>
                    <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-2">
                      <p className="text-xs font-bold text-slate-500">Medium-term (3mo)</p>
                      <p className="text-xs text-slate-400">[Your target]</p>
                    </div>
                    <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-2">
                      <p className="text-xs font-bold text-slate-500">Short-term (1mo)</p>
                      <p className="text-xs text-slate-400">[Your target]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Market Selection */}
              <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">2</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Market Selection</h5>
                </div>
                <div className="space-y-2 ml-9">
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">My Primary Pairs</p>
                    <p className="text-sm italic text-slate-400">[e.g., BTC/USDT, ETH/USDT]</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">My Secondary Pairs (after Month 2)</p>
                    <p className="text-sm italic text-slate-400">[e.g., SOL/USDT, BNB/USDT]</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Market Selection Rules</p>
                    <p className="text-sm italic text-slate-400">[e.g., 24h volume &gt; $50M, only add after 30 trades]</p>
                  </div>
                </div>
              </div>

              {/* Section 3: Timeframe Selection */}
              <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">3</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Timeframe Selection</h5>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 ml-9">
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-2">
                    <p className="text-xs font-bold text-slate-500">Context TF</p>
                    <p className="text-xs text-slate-400">[e.g., Daily]</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-2">
                    <p className="text-xs font-bold text-slate-500">Signal TF</p>
                    <p className="text-xs text-slate-400">[e.g., 4H]</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-2">
                    <p className="text-xs font-bold text-slate-500">Precision TF</p>
                    <p className="text-xs text-slate-400">[e.g., 1H]</p>
                  </div>
                </div>
              </div>

              {/* Section 4: Trading Strategies */}
              <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">4</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Trading Strategies</h5>
                </div>
                <div className="space-y-2 ml-9">
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Strategy 1: [Name]</p>
                    <p className="text-sm italic text-slate-400">[Entry conditions, indicators, timeframe, market condition]</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Strategy 2: [Name]</p>
                    <p className="text-sm italic text-slate-400">[Entry conditions, indicators, timeframe, market condition]</p>
                  </div>
                </div>
              </div>

              {/* Section 5: Entry Rules */}
              <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">5</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Entry Rules</h5>
                </div>
                <div className="space-y-2 ml-9">
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">7-Step Entry Checklist (All Must Be YES)</p>
                    <ol className="list-decimal list-inside text-sm text-slate-400 space-y-0.5">
                      <li>Higher-TF trend direction confirmed?</li>
                      <li>Valid S/R level nearby?</li>
                      <li>Strategy signal aligned?</li>
                      <li>R:R at least 1:1.5?</li>
                      <li>Risk within daily/weekly limits?</li>
                      <li>No major news within 2hrs?</li>
                      <li>Right mental state?</li>
                    </ol>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Preferred Order Type</p>
                    <p className="text-sm italic text-slate-400">[e.g., Limit order on MEXC for entries, Stop-Limit for breakouts]</p>
                  </div>
                </div>
              </div>

              {/* Section 6: Exit Rules */}
              <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">6</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Exit Rules</h5>
                </div>
                <div className="space-y-2 ml-9">
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Stop-Loss Rule</p>
                    <p className="text-sm italic text-slate-400">[e.g., Below key S/R level, EMA 50, or 2% below entry — whichever is closer]</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Take-Profit Rule</p>
                    <p className="text-sm italic text-slate-400">[e.g., Next S/R level, 1:2 R:R minimum, or partial at 1:1 + trailing]</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Trailing Stop Method</p>
                    <p className="text-sm italic text-slate-400">[e.g., EMA 20 trail, or previous candle low on 4H]</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Time Stop Rule</p>
                    <p className="text-sm italic text-slate-400">[e.g., Exit if price hasn\'t moved 1% in my direction within 5 candles]</p>
                  </div>
                </div>
              </div>

              {/* Section 7: Risk Management Rules */}
              <div className="rounded-lg border-2 border-red-300 bg-red-50/20 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">7</div>
                  <h5 className="text-sm font-bold text-red-900 sm:text-base">Risk Management Rules</h5>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 ml-9">
                  <div className="rounded border border-dashed border-red-300 bg-white/60 p-2">
                    <p className="text-xs font-bold text-slate-500">Max Risk per Trade</p>
                    <p className="text-xs text-slate-400">[e.g., 1% of account]</p>
                  </div>
                  <div className="rounded border border-dashed border-red-300 bg-white/60 p-2">
                    <p className="text-xs font-bold text-slate-500">Max Daily Loss</p>
                    <p className="text-xs text-slate-400">[e.g., 3% of account]</p>
                  </div>
                  <div className="rounded border border-dashed border-red-300 bg-white/60 p-2">
                    <p className="text-xs font-bold text-slate-500">Max Weekly Drawdown</p>
                    <p className="text-xs text-slate-400">[e.g., 6% of account]</p>
                  </div>
                  <div className="rounded border border-dashed border-red-300 bg-white/60 p-2">
                    <p className="text-xs font-bold text-slate-500">Max Open Positions</p>
                    <p className="text-xs text-slate-400">[e.g., 3 at a time]</p>
                  </div>
                  <div className="rounded border border-dashed border-red-300 bg-white/60 p-2">
                    <p className="text-xs font-bold text-slate-500">Min R:R Ratio</p>
                    <p className="text-xs text-slate-400">[e.g., 1:1.5]</p>
                  </div>
                  <div className="rounded border border-dashed border-red-300 bg-white/60 p-2">
                    <p className="text-xs font-bold text-slate-500">Max Correlated Positions</p>
                    <p className="text-xs text-slate-400">[e.g., 2 same direction]</p>
                  </div>
                </div>
              </div>

              {/* Section 8: Position Sizing Model */}
              <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">8</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Position Sizing Model</h5>
                </div>
                <div className="space-y-2 ml-9">
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Position Size Formula</p>
                    <p className="text-sm italic text-slate-400">Position Size = (Account × Risk%) ÷ SL Distance</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Current Account Size & Risk Parameters</p>
                    <p className="text-sm italic text-slate-400">[e.g., $5,000 account, 1% risk per trade = $50 max loss]</p>
                  </div>
                </div>
              </div>

              {/* Section 9: Daily Routine */}
              <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">9</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Daily Routine</h5>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 ml-9">
                  {['Pre-Market (7:00 AM)', 'First Check (7:30 AM)', 'Midday Check (12:00 PM)', 'End-of-Day (6:00 PM)', 'Sunday Weekly Review'].map((time) => (
                    <div key={time} className="rounded border border-dashed border-emerald-300 bg-white/60 p-2">
                      <p className="text-xs font-bold text-slate-500">{time}</p>
                      <p className="text-xs text-slate-400">[Your checklist items]</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 10: Journaling & Review */}
              <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">10</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Journaling & Review Process</h5>
                </div>
                <div className="space-y-2 ml-9">
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Journaling Tool</p>
                    <p className="text-sm italic text-slate-400">[e.g., Google Sheets, Notion, TradingJournal spreadsheet]</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Data Tracked Per Trade</p>
                    <p className="text-sm italic text-slate-400">[12 items minimum — date, pair, direction, entry, SL, TP, size, strategy, exit, P&L, emotion, compliance]</p>
                  </div>
                </div>
              </div>

              {/* Section 11: Psychology Rules */}
              <div className="rounded-lg border-2 border-fuchsia-300 bg-fuchsia-50/20 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-600 text-xs font-bold text-white">11</div>
                  <h5 className="text-sm font-bold text-fuchsia-900 sm:text-base">Psychology Rules</h5>
                </div>
                <div className="space-y-2 ml-9">
                  <div className="rounded border border-dashed border-fuchsia-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">My 10 Psychology Rules</p>
                    <ol className="list-decimal list-inside text-sm text-slate-400 space-y-0.5">
                      <li>No trading within 30 min of emotional event</li>
                      <li>FOMO = close chart, 15 min break</li>
                      <li>2 consecutive losses = 2-hour break</li>
                      <li>Never move SL further from entry</li>
                      <li>Never increase size after a loss</li>
                      <li>Can&apos;t explain in 1 sentence = don&apos;t trade</li>
                      <li>Rate emotion 1-10 before every trade</li>
                      <li>Stop trading after daily loss limit</li>
                      <li>1 full day off per week minimum</li>
                      <li>Review psychology rules weekly</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Section 12: Performance Benchmarks */}
              <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">12</div>
                  <h5 className="text-sm font-bold text-emerald-900 sm:text-base">Performance Benchmarks</h5>
                </div>
                <div className="space-y-2 ml-9">
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">My Month 1 Targets</p>
                    <p className="text-sm italic text-slate-400">[e.g., 30+ trades, 35%+ win rate, breakeven P&L, 70%+ rule compliance]</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Scale-Up Criteria</p>
                    <p className="text-sm italic text-slate-400">[5 criteria — see Component 12]</p>
                  </div>
                  <div className="rounded border border-dashed border-emerald-300 bg-white/60 p-3">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-1">Scale-Down Triggers</p>
                    <p className="text-sm italic text-slate-400">[5 triggers — see Component 12]</p>
                  </div>
                </div>
              </div>

              {/* Signature Line */}
              <div className="rounded-xl border-2 border-emerald-400 bg-emerald-50/40 p-4 text-center">
                <p className="text-sm font-bold text-emerald-900 mb-2">My Commitment</p>
                <p className="text-sm italic text-slate-700 mb-4">
                  &ldquo;I commit to following this trading plan on every trade. I will review it weekly and update it monthly with data, not emotion. If I break a rule, I will journal it and learn from it.&rdquo;
                </p>
                <div className="border-b-2 border-slate-300 w-64 mx-auto mb-1" />
                <p className="text-xs text-slate-500">Signature &amp; Date</p>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 16: Emergency Protocols                          */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-emergency-protocols"
          title="Emergency Protocols"
          icon={<ShieldAlert className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Things <strong className="text-red-700">will</strong> go wrong. Exchanges go down. Flash crashes happen. Your emotions will betray you. The question isn&apos;t <em>if</em> — it&apos;s <em>when</em>. Having emergency protocols means you don&apos;t have to think during a crisis. You just follow the plan.
            </p>

            {/* Emergency Table */}
            <ComparisonTable
              headers={['Emergency', 'Protocol', 'Example']}
              rows={[
                ['Exchange Outage (MEXC down)', 'Use Binance as backup exchange. Do NOT market buy when MEXC returns — use limit orders only.', 'MEXC goes down during a BTC pump. You want to enter. Wait for MEXC to come back, then place a limit order. Do NOT FOMO market buy on Binance.'],
                ['Flash Crash (-20% in minutes)', 'Do NOT panic sell. Check if your stop-loss triggered on MEXC. If yes, stay out. If no, evaluate structure before acting.', 'BTC drops from $65K to $52K in 10 minutes. Your SL at $62K was hit. You\'re out. Don\'t re-enter — wait for new structure.'],
                ['Delisting Announcement', 'Close position immediately. Move all funds from that pair to USDT. Do NOT hold hoping for a bounce.', 'MEXC announces delisting of XYZ token. You have a long position. Close it NOW. Move to USDT. The pair will only get less liquid.'],
                ['Hack / Security Breach', 'Disable your account immediately. Move all funds to cold wallet. Change all passwords. Enable all 2FA.', 'You notice unauthorized login on your MEXC account. Freeze account via app. Move funds to hardware wallet. Change passwords on ALL crypto accounts.'],
                ['Emotional Crisis (tilt, anger, panic)', 'Close ALL open positions. Move to stablecoin. Take a minimum 24-hour break. No exceptions.', 'You just lost 3 trades in a row. You\'re angry and want to "make it back." STOP. Close everything. Walk away for 24 hours minimum.'],
                ['Unexpected Gap (weekend/event)', 'Do NOT chase the gap. Wait for new market structure to form. Place alerts at key levels.', 'BTC gaps up $3K over the weekend. You want to FOMO buy. STOP. Wait for the first 4H candle to form. Place alerts at key S/R levels.'],
              ]}
            />

            {/* Emergency Protocol Quick Reference SVG */}
            <EmergencyProtocolCard />

            <KeyTakeaway>
              Emergency protocols are your safety net. When things go wrong — and they will — you don&apos;t need to think. You need to follow the protocol. Print the quick reference card and keep it visible.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 17: The Plan Stress Test                          */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-stress-test"
          title="The Plan Stress Test"
          icon={<CheckCircle2 className="h-5 w-5" />}
          variant="success"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Before you go live, your plan must pass a <strong className="text-slate-900">stress test</strong>. Answer every question below honestly. If you can&apos;t answer YES to all 20, you&apos;re not ready.
            </p>

            <div className="rounded-xl border-2 border-emerald-400 bg-emerald-50/30 p-4 sm:p-5">
              <h4 className="mb-4 text-base font-bold text-emerald-900 sm:text-lg">20-Question Plan Stress Test</h4>
              <div className="space-y-2">
                {[
                  'Can you state your trading mission in one sentence?',
                  'Have you written down your specific, measurable, time-bound goals?',
                  'Have you defined exactly which markets/pairs you will trade?',
                  'Have you chosen your three timeframes (context, signal, precision)?',
                  'Can you describe your trading strategies\' entry conditions precisely?',
                  'Do you have a clear 7-step entry checklist you follow on every trade?',
                  'Is your stop-loss rule written down and non-negotiable?',
                  'Do you have a trailing stop method defined?',
                  'Do you have a time stop rule for dead trades?',
                  'Is your max risk per trade defined (1-2%)?',
                  'Is your max daily loss limit defined (3%)?',
                  'Is your max weekly drawdown defined (6%)?',
                  'Do you have a position sizing formula you use every trade?',
                  'Have you written out your daily routine with specific times?',
                  'Do you have a journaling system set up and ready to use?',
                  'Have you written down all 10 of your psychology rules?',
                  'Do you have clear performance benchmarks for Month 1, 3, 6, and 12?',
                  'Do you have emergency protocols for all 6 scenarios?',
                  'Have you backtested your strategy on at least 30 historical trades?',
                  'Are you prepared to follow this plan for the next 100 trades, no exceptions?',
                ].map((question, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-2.5">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-sm text-slate-700">{question}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border-2 border-red-400 bg-red-50/60 p-4 sm:p-5 text-center">
              <AlertTriangle className="mx-auto mb-2 h-8 w-8 text-red-600" />
              <p className="text-lg font-bold text-red-900 sm:text-xl">
                If you can&apos;t answer YES to all 20, you&apos;re not ready to trade live.
              </p>
              <p className="mt-2 text-sm text-slate-700">
                Go back and fill in the gaps. Every &ldquo;No&rdquo; is a potential way to lose money. Fix it before you risk real capital.
              </p>
            </div>

            <AnalogyBox title="The Stress Test Is Like a Pilot's Pre-Flight Checklist">
              A pilot doesn&apos;t take off until every item on the checklist is green. One red light = no takeoff. Your trading plan stress test is the same. One &ldquo;No&rdquo; = no live trading until it&apos;s fixed.
            </AnalogyBox>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TRADINGVIEW LAB: Execute the Plan on Charts           */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-tradingview-lab"
          title="TradingView Practice Lab — Execute Your Plan"
          icon={<FlaskConical />}
          variant="default"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Now that you have a complete trading plan, practice executing it on the TradingView
            simulator below. Identify a setup using your plan&apos;s entry rules, draw your S/R levels,
            apply your preferred indicators, and practice the full decision-making process from
            analysis to execution.
          </p>
          <TradingViewLab />
        </TopicCard>
      </div>
    </section>
  )
}
