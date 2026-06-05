'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Coffee, Monitor, Building2, ArrowRightLeft, Map, ClipboardCheck,
  ArrowRight, AlertTriangle, CheckCircle2, Target, TrendingUp,
  Calendar, Flag, Shield
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { ChecklistItem } from '@/components/academy/checklist-item'

/* ─── 90-Day Roadmap Timeline SVG ─── */
function RoadmapTimeline() {
  return (
    <div className="overflow-x-auto py-4">
      <svg viewBox="0 0 900 220" className="w-full min-w-[600px]" aria-label="90-Day Roadmap Timeline">
        {/* Main timeline bar */}
        <rect x="30" y="95" width="840" height="10" rx="5" fill="#292524" />
        <rect x="30" y="95" width="280" height="10" rx="5" fill="#065f46" />
        <rect x="310" y="95" width="280" height="10" rx="5" fill="#1e3a5f" />
        <rect x="590" y="95" width="280" height="10" rx="5" fill="#78350f" />

        {/* Phase markers */}
        <circle cx="30" cy="100" r="8" fill="#10b981" stroke="#065f46" strokeWidth="2" />
        <circle cx="310" cy="100" r="8" fill="#3b82f6" stroke="#1e3a5f" strokeWidth="2" />
        <circle cx="590" cy="100" r="8" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
        <circle cx="870" cy="100" r="8" fill="#f59e0b" stroke="#92400e" strokeWidth="3" />

        {/* Phase 1 label */}
        <motion.g initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <rect x="60" y="30" width="220" height="50" rx="8" fill="#065f46" stroke="#10b981" strokeWidth="1" />
          <text x="170" y="52" textAnchor="middle" fill="#6ee7b7" fontSize="13" fontWeight="bold">PHASE 1: FOUNDATION</text>
          <text x="170" y="70" textAnchor="middle" fill="#a7f3d0" fontSize="10">Days 1–30 · Max 0.5% Risk</text>
        </motion.g>

        {/* Phase 2 label */}
        <motion.g initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}>
          <rect x="340" y="30" width="220" height="50" rx="8" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1" />
          <text x="450" y="52" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="bold">PHASE 2: DEVELOPMENT</text>
          <text x="450" y="70" textAnchor="middle" fill="#bfdbfe" fontSize="10">Days 31–60 · Max 0.75% Risk</text>
        </motion.g>

        {/* Phase 3 label */}
        <motion.g initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
          <rect x="620" y="30" width="220" height="50" rx="8" fill="#78350f" stroke="#f59e0b" strokeWidth="1" />
          <text x="730" y="52" textAnchor="middle" fill="#fde68a" fontSize="13" fontWeight="bold">PHASE 3: PERFORMANCE</text>
          <text x="730" y="70" textAnchor="middle" fill="#fef3c7" fontSize="10">Days 61–90 · Max 1.0% Risk</text>
        </motion.g>

        {/* Bottom labels */}
        <text x="170" y="130" textAnchor="middle" fill="#6ee7b7" fontSize="10">Week 1–4</text>
        <text x="170" y="145" textAnchor="middle" fill="#94a3b8" fontSize="9">Process &gt; Profit</text>

        <text x="450" y="130" textAnchor="middle" fill="#93c5fd" fontSize="10">Week 5–8</text>
        <text x="450" y="145" textAnchor="middle" fill="#94a3b8" fontSize="9">Refine & Build Edge</text>

        <text x="730" y="130" textAnchor="middle" fill="#fde68a" fontSize="10">Week 9–12</text>
        <text x="730" y="145" textAnchor="middle" fill="#94a3b8" fontSize="9">Perform & Scale</text>

        {/* Milestone markers */}
        <text x="170" y="175" textAnchor="middle" fill="#6ee7b7" fontSize="9">✓ First 50 trades journaled</text>
        <text x="450" y="175" textAnchor="middle" fill="#93c5fd" fontSize="9">✓ Strategy validated (100+ trades)</text>
        <text x="730" y="175" textAnchor="middle" fill="#fde68a" fontSize="9">✓ Consistent profitability</text>

        {/* Graduation star */}
        <motion.g initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
          <text x="870" y="130" textAnchor="middle" fill="#f59e0b" fontSize="20">★</text>
          <text x="870" y="148" textAnchor="middle" fill="#fde68a" fontSize="8" fontWeight="bold">GRADUATE</text>
        </motion.g>
      </svg>
    </div>
  )
}

/* ─── Late Morning Block ─── */
export function Day10LateMorningBlock() {
  return (
    <section id="d10-late-morning" aria-labelledby="d10-late-morning-heading">
      <SectionDivider
        icon={<Coffee />}
        title="LATE MORNING BLOCK — 9:30–12:00: MEXC+BINANCE WORKFLOW & 90-DAY ROADMAP"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ── Topic 4: Complete Trade Execution Workflow on MEXC ── */}
        <TopicCard
          id="d10-mexc-workflow"
          title="Complete Trade Execution Workflow on MEXC"
          icon={<Monitor />}
          variant="highlight"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            This is your end-to-end process from spotting a signal to executing a trade on MEXC. Follow these 10 steps every single time.
          </p>

          {/* 10-Step Process */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              { step: 1, title: 'Identify signal', desc: 'S/R bounce, breakout, EMA cross, or pattern completion' },
              { step: 2, title: 'Score the signal', desc: 'Use your 10-point scoring system (≥ 7/10 to proceed)' },
              { step: 3, title: 'Check pre-trade list', desc: 'Trend, S/R, confluence, R:R, position size' },
              { step: 4, title: 'Open MEXC', desc: 'Go to MEXC.com → Spot or Futures trading' },
              { step: 5, title: 'Select pair', desc: 'Search for the pair (e.g., BTC/USDT)' },
              { step: 6, title: 'Set order type', desc: 'Limit order at your calculated entry price' },
              { step: 7, title: 'Set stop-loss', desc: 'Enter SL price immediately — NO EXCEPTIONS' },
              { step: 8, title: 'Set take-profit', desc: 'Enter TP at your target (minimum 1:2 R:R)' },
              { step: 9, title: 'Confirm & execute', desc: 'Double-check all values → Place order' },
              { step: 10, title: 'Log the trade', desc: 'Screenshot, entry reason, emotions → Journal' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center border border-amber-300">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.title}</p>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MEXC Order Placement Table */}
          <h4 className="text-sm font-bold text-slate-800 mb-3">MEXC Order Placement — Step by Step</h4>
          <ComparisonTable
            headers={['Step', 'Action', 'Interface Location']}
            rows={[
              ['1', 'Log in to MEXC account', 'Top-right corner'],
              ['2', 'Navigate to Spot Trading', 'Trade → Spot Trading menu'],
              ['3', 'Search and select pair', 'Search bar (top-left of chart)'],
              ['4', 'Switch to Limit Order', 'Order type dropdown (default Market)'],
              ['5', 'Enter price in Price field', 'Price input box'],
              ['6', 'Enter quantity in Amount field', 'Amount input box'],
              ['7', 'Set Stop-Loss (SL)', 'SL/TP toggle → Set SL price'],
              ['8', 'Set Take-Profit (TP)', 'Same SL/TP panel → Set TP price'],
              ['9', 'Click "Buy" or "Sell"', 'Green (Buy) or Red (Sell) button'],
            ]}
          />

          <KeyTakeaway>
            The most dangerous moment in trading is between seeing the signal and placing the order. That&apos;s when emotions take over. Your checklist is your shield.
          </KeyTakeaway>
        </TopicCard>

        {/* ── Topic 5: Binance as Secondary Platform ── */}
        <TopicCard
          id="d10-binance-secondary"
          title="Binance as Secondary Platform"
          icon={<Building2 />}
          variant="default"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            While MEXC is your primary platform, Binance is your backup and has specific use cases where it excels. Know when to use each.
          </p>

          <h4 className="text-sm font-bold text-slate-800 mb-3">When to Use Binance Instead of MEXC</h4>
          <ComparisonTable
            headers={['Scenario', 'Why Binance?', 'Priority']}
            rows={[
              ['Token not listed on MEXC', 'Binance has 350+ trading pairs', 'Use Binance'],
              ['Higher liquidity needed', 'Binance has deepest order books', 'Use Binance'],
              ['P2P with local currency', 'Binance P2P has more merchants', 'Use Binance'],
              ['Binance Earn products', 'Wider range of yield products', 'Use Binance'],
              ['Large position sizes', 'Less slippage on Binance', 'Use Binance'],
            ]}
            highlightColumn={2}
          />

          {/* Binance-Specific Notes */}
          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
            <h4 className="text-sm font-bold text-blue-800 mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Binance-Specific Notes
            </h4>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <span><strong>Trading Fee:</strong> 0.1% spot (vs MEXC 0.2%) — Binance is cheaper on fees</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <span><strong>BNB Discount:</strong> Pay fees in BNB for 25% discount → Effective 0.075% fee</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-3.5 h-3.5 mt-1 flex-shrink-0" />
                <span><strong>Withdrawal:</strong> Transfer between platforms takes ~10-30 min (network dependent)</span>
              </li>
            </ul>
          </div>
        </TopicCard>

        {/* ── Topic 6: Cross-Platform Arbitrage Awareness ── */}
        <TopicCard
          id="d10-arbitrage"
          title="Cross-Platform Arbitrage Awareness"
          icon={<ArrowRightLeft />}
          variant="default"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Price differences between exchanges exist. As a beginner, you should understand <em>why</em> — but NOT chase them.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {[
              { title: 'Liquidity Differences', desc: 'Different order book depth on each exchange creates slight price variations', icon: '💧' },
              { title: 'Transfer Delays', desc: 'Moving funds between exchanges takes time — prices converge before you can act', icon: '⏱️' },
              { title: 'Withdrawal Fees', desc: 'Network fees eat into the tiny price gap (often 0.1-0.5% difference)', icon: '💸' },
              { title: 'Slippage on Execution', desc: 'Your buy on Exchange A and sell on Exchange B won\'t fill at expected prices', icon: '📈' },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-sm font-bold text-slate-800 mb-1">{item.icon} {item.title}</p>
                <p className="text-xs text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 px-4 py-3">
            <p className="text-sm font-bold text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              RULE: Don&apos;t chase arbitrage as a beginner
            </p>
            <p className="text-xs text-red-700 mt-1">
              Arbitrage seems risk-free but execution risk, transfer delays, and fees make it unprofitable for small accounts. Focus on learning to trade, not on &ldquo;free money&rdquo; strategies.
            </p>
          </div>
        </TopicCard>

        {/* ── Topic 7: The 90-Day Roadmap ── */}
        <TopicCard
          id="d10-90-day-roadmap"
          title="The 90-Day Roadmap"
          icon={<Map />}
          variant="highlight"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            This is your <strong>structured plan for the next 90 days</strong> after graduation. Follow it faithfully — the phases are designed to protect you while you build skill.
          </p>

          {/* Timeline SVG */}
          <RoadmapTimeline />

          {/* Phase 1 */}
          <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 overflow-hidden">
            <div className="bg-emerald-700 px-4 py-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Flag className="w-4 h-4" />
                PHASE 1: FOUNDATION — Days 1–30
              </h4>
            </div>
            <div className="px-4 py-4">
              <ComparisonTable
                headers={['Week', 'Focus', 'Actions', 'Success Metrics']}
                rows={[
                  ['1', 'Setup & Routine', 'Open MEXC account, set up TradingView, create watchlist, start daily market review', 'Daily routine completed 7/7 days'],
                  ['2', 'Observation Only', 'Paper trade 5 signals, journal every observation, no real money yet', '5 paper trades journaled with screenshots'],
                  ['3', 'Micro Trading', 'First real trades (micro size), 0.5% max risk, journal every trade', '5 real trades completed and journaled'],
                  ['4', 'Review & Adjust', 'Review all Week 3 trades, identify top 2 mistakes, fix them', 'Win rate ≥ 30%, all trades journaled'],
                ]}
              />
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-800 font-medium">Max 0.5% risk</span>
                <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-800 font-medium">Micro positions only</span>
                <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-800 font-medium">Focus on process, NOT profit</span>
              </div>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 overflow-hidden">
            <div className="bg-blue-700 px-4 py-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4" />
                PHASE 2: DEVELOPMENT — Days 31–60
              </h4>
            </div>
            <div className="px-4 py-4">
              <ComparisonTable
                headers={['Week', 'Focus', 'Actions', 'Success Metrics']}
                rows={[
                  ['5', 'Strategy Testing', 'Pick 1-2 strategies, backtest on 50+ historical setups', '50+ backtest results logged'],
                  ['6', 'Forward Testing', 'Trade strategy in real-time (small size), track win rate', '15+ trades, win rate tracked'],
                  ['7', 'Refinement', 'Analyze losing trades, adjust entry/exit criteria, refine SL placement', 'Improved win rate or R:R from Week 6'],
                  ['8', 'Consistency Check', 'Aim for consistent daily routine, max 2 strategies, max 3 positions', '3+ consecutive green weeks'],
                ]}
              />
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 font-medium">Max 0.75% risk</span>
                <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 font-medium">Up to 2 strategies</span>
                <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 font-medium">Max 3 positions</span>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 overflow-hidden">
            <div className="bg-amber-700 px-4 py-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                PHASE 3: PERFORMANCE — Days 61–90
              </h4>
            </div>
            <div className="px-4 py-4">
              <ComparisonTable
                headers={['Week', 'Focus', 'Actions', 'Success Metrics']}
                rows={[
                  ['9', 'Full Execution', 'Trade your validated plan, 1% risk (if criteria met), full process', 'All 12 plan components active'],
                  ['10', 'Performance Review', 'Monthly deep review, calculate Sharpe ratio, track equity curve', 'Positive expectancy confirmed'],
                  ['11', 'Scaling Prep', 'If profitable, slowly increase position size by 10-20%', 'No significant drawdown increase'],
                  ['12', 'Graduation Review', 'Full 90-day review, plan next quarter, celebrate wins', '3-month trading journal complete'],
                ]}
              />
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-800 font-medium">Max 1.0% risk (if criteria met)</span>
                <span className="text-xs px-2 py-1 rounded bg-amber-100 text-amber-800 font-medium">All 12 plan components active</span>
              </div>
            </div>
          </div>

          <KeyTakeaway>
            The 90-day roadmap isn&apos;t about getting rich — it&apos;s about building a sustainable trading business. Process over profit, every single day.
          </KeyTakeaway>
        </TopicCard>

        {/* ── Topic 8: The 90-Day Milestone Checklist ── */}
        <TopicCard
          id="d10-milestone-checklist"
          title="The 90-Day Milestone Checklist"
          icon={<ClipboardCheck />}
          variant="success"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-6">
            Track your progress against these milestones. If you haven&apos;t hit a milestone by the deadline, <strong>don&apos;t advance</strong> — stay in the current phase until you do.
          </p>

          {/* By Day 30 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center border border-emerald-300">
                30
              </div>
              <h4 className="text-sm font-bold text-emerald-800">By Day 30 — Phase 1 Milestones</h4>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-3 space-y-1">
              <ChecklistItem>Completed 7-day daily routine streak</ChecklistItem>
              <ChecklistItem>MEXC account fully set up and funded</ChecklistItem>
              <ChecklistItem>TradingView workspace configured</ChecklistItem>
              <ChecklistItem>Watchlist of 10 pairs created</ChecklistItem>
              <ChecklistItem>5+ paper trades journaled with screenshots</ChecklistItem>
              <ChecklistItem>5+ micro real trades executed</ChecklistItem>
              <ChecklistItem>All trades have pre-set SL and TP</ChecklistItem>
              <ChecklistItem>Daily loss limit never exceeded</ChecklistItem>
              <ChecklistItem>Trading journal template in use</ChecklistItem>
              <ChecklistItem>Weekly review completed for all 4 weeks</ChecklistItem>
              <ChecklistItem>Can explain market structure in your own words</ChecklistItem>
            </div>
          </div>

          {/* By Day 60 */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center border border-blue-300">
                60
              </div>
              <h4 className="text-sm font-bold text-blue-800">By Day 60 — Phase 2 Milestones</h4>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-3 space-y-1">
              <ChecklistItem>1-2 strategies backtested with 50+ results each</ChecklistItem>
              <ChecklistItem>Win rate tracked and documented</ChecklistItem>
              <ChecklistItem>Average R:R calculated per strategy</ChecklistItem>
              <ChecklistItem>15+ forward-tested trades logged</ChecklistItem>
              <ChecklistItem>Losing trade patterns identified and documented</ChecklistItem>
              <ChecklistItem>Entry criteria refined from backtest data</ChecklistItem>
              <ChecklistItem>Daily routine takes &lt; 30 minutes</ChecklistItem>
              <ChecklistItem>No emotional trades in the last 2 weeks</ChecklistItem>
              <ChecklistItem>Can identify 3 personal trading weaknesses</ChecklistItem>
              <ChecklistItem>Equity curve shows improvement trend</ChecklistItem>
            </div>
          </div>

          {/* By Day 90 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center border border-amber-300">
                90
              </div>
              <h4 className="text-sm font-bold text-amber-800">By Day 90 — Phase 3 Milestones</h4>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3 space-y-1">
              <ChecklistItem>All 12 trading plan components active and followed</ChecklistItem>
              <ChecklistItem>Positive expectancy over last 30 trades</ChecklistItem>
              <ChecklistItem>Sharpe ratio calculated and documented</ChecklistItem>
              <ChecklistItem>3+ consecutive profitable weeks</ChecklistItem>
              <ChecklistItem>Maximum drawdown under 5% of account</ChecklistItem>
              <ChecklistItem>Daily routine fully automated (habit)</ChecklistItem>
              <ChecklistItem>Trading journal has 100+ entries</ChecklistItem>
              <ChecklistItem>Can explain your edge in 1 sentence</ChecklistItem>
              <ChecklistItem>Position sizing is consistently calculated (no guessing)</ChecklistItem>
              <ChecklistItem>No unplanned trades in the last month</ChecklistItem>
              <ChecklistItem>Quarterly review completed with next quarter plan</ChecklistItem>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
            <p className="text-sm text-amber-800 flex items-start gap-2">
              <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Important:</strong> If you haven&apos;t hit Phase 1 milestones by Day 30, stay in Phase 1. There&apos;s no shame in taking longer — the market isn&apos;t going anywhere.</span>
            </p>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
