'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Star, Award, Map, ClipboardList, CheckCircle2, BookOpen,
  GraduationCap, Trophy, Shield, Target, Compass, Brain,
  BarChart3, Link2, Scale, Heart, Lightbulb, ArrowRight,
  TrendingUp, FileText, Zap, RefreshCw, Eye, Users,
  Layers, GitBranch
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { TradingViewLab } from '@/components/academy/tradingview-lab'
import { MEXCLab } from '@/components/academy/mexc-lab'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { QuizQuestion } from '@/components/academy/quiz-question'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

/* ─── Graduation Certificate SVG ─── */
function GraduationCertificate() {
  return (
    <div className="flex justify-center py-6">
      <svg viewBox="0 0 600 420" className="w-full max-w-lg" aria-label="Graduation Certificate">
        {/* Outer frame */}
        <rect x="5" y="5" width="590" height="410" rx="12" fill="none" stroke="#f59e0b" strokeWidth="3" />
        <rect x="15" y="15" width="570" height="390" rx="8" fill="none" stroke="#92400e" strokeWidth="1" strokeDasharray="6 3" />

        {/* Background pattern */}
        <rect x="20" y="20" width="560" height="380" rx="6" fill="#1c1917" />

        {/* Decorative corners */}
        <path d="M 30 30 L 60 30 M 30 30 L 30 60" stroke="#f59e0b" strokeWidth="2" />
        <path d="M 570 30 L 540 30 M 570 30 L 570 60" stroke="#f59e0b" strokeWidth="2" />
        <path d="M 30 390 L 60 390 M 30 390 L 30 360" stroke="#f59e0b" strokeWidth="2" />
        <path d="M 570 390 L 540 390 M 570 390 L 570 360" stroke="#f59e0b" strokeWidth="2" />

        {/* Star ornament top */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <text x="300" y="65" textAnchor="middle" fill="#fbbf24" fontSize="32">★</text>
        </motion.g>

        {/* Title */}
        <motion.text
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          x="300" y="100" textAnchor="middle" fill="#fbbf24" fontSize="22" fontWeight="bold" fontFamily="serif"
        >
          CERTIFICATE OF COMPLETION
        </motion.text>

        <line x1="120" y1="112" x2="480" y2="112" stroke="#78350f" strokeWidth="1" />

        {/* Body text */}
        <motion.text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          x="300" y="145" textAnchor="middle" fill="#d1d5db" fontSize="13"
        >
          This certifies that the bearer has completed
        </motion.text>
        <motion.text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          x="300" y="170" textAnchor="middle" fill="#fbbf24" fontSize="16" fontWeight="bold"
        >
          THE 10-DAY CRYPTO TRADING BOOTCAMP
        </motion.text>
        <motion.text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          x="300" y="195" textAnchor="middle" fill="#d1d5db" fontSize="12"
        >
          covering Foundations, Technical Analysis, Risk Management,
        </motion.text>
        <motion.text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
          x="300" y="212" textAnchor="middle" fill="#d1d5db" fontSize="12"
        >
          On-Chain Analysis, Strategy, Psychology, and Trading Plans.
        </motion.text>

        {/* Divider */}
        <line x1="150" y1="235" x2="450" y2="235" stroke="#78350f" strokeWidth="0.5" />

        {/* Graduate name placeholder */}
        <motion.text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          x="300" y="265" textAnchor="middle" fill="#fde68a" fontSize="20" fontWeight="bold" fontFamily="serif" fontStyle="italic"
        >
          [ YOUR NAME HERE ]
        </motion.text>
        <line x1="150" y1="275" x2="450" y2="275" stroke="#f59e0b" strokeWidth="0.5" />

        {/* Date and status */}
        <motion.text
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          x="300" y="305" textAnchor="middle" fill="#94a3b8" fontSize="11"
        >
          Status: BOOTCAMP GRADUATE — 90-Day Roadmap Begins Now
        </motion.text>

        {/* Seal */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8, type: 'spring' }}
        >
          <circle cx="300" cy="355" r="28" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="300" cy="355" r="22" fill="#92400e" stroke="#fbbf24" strokeWidth="1" />
          <text x="300" y="352" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">CRYPTO</text>
          <text x="300" y="364" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="bold">ACADEMY</text>
        </motion.g>

        {/* Corner stars */}
        <text x="50" y="370" fill="#78350f" fontSize="14">★</text>
        <text x="550" y="370" fill="#78350f" fontSize="14">★</text>
      </svg>
    </div>
  )
}

/* ─── Final Block ─── */
export function Day10FinalBlock() {
  return (
    <section id="d10-final" aria-labelledby="d10-final-heading">
      <SectionDivider
        icon={<Star />}
        title="FINAL BLOCK — 5:00–6:00: FINAL REVIEW & CERTIFICATION"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ── Topic 18: Course Summary ── */}
        <TopicCard
          id="d10-course-summary"
          title="Course Summary — 10 Days in Review"
          icon={<BookOpen />}
          variant="highlight"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Look at how far you&apos;ve come. From &ldquo;what is blockchain?&rdquo; to building a complete trading plan. Here&apos;s the full 10-day journey:
          </p>

          <ComparisonTable
            headers={['Day', 'Topic', 'Key Output']}
            rows={[
              ['1', 'Crypto Foundations', 'Understanding of blockchain, money, exchanges, security'],
              ['2', 'Technical Analysis', 'S/R identification, market structure, EMAs, integration'],
              ['3', 'Price Action & Indicators', 'Candlestick patterns, RSI, MACD, volume analysis'],
              ['4', 'Risk Management', '1% rule, position sizing, R:R, daily loss limits'],
              ['5', 'Spot Trading', 'MEXC/Binance execution, order types, trade management'],
              ['6', 'On-Chain & Sentiment', 'Whale tracking, funding rates, Fear & Greed, MVRV'],
              ['7', 'Strategy & Backtesting', '3 strategies, backtesting process, expectancy'],
              ['8', 'Psychology & Journaling', 'Emotional management, trade journal, review process'],
              ['9', 'Building Your Trading Plan', 'Complete 12-component trading plan'],
              ['10', 'Final Integration & Roadmap', 'Framework review, 90-day roadmap, commandments, graduation'],
            ]}
          />

          <KeyTakeaway>
            10 days gave you the foundation. The next 90 days will build the trader. And the 90 days after that will build the career. This is just the beginning.
          </KeyTakeaway>
        </TopicCard>

        {/* ── TradingView Lab: Complete Integration Analysis ── */}
        <TopicCard
          id="d10-tradingview-lab"
          title="TradingView Lab: Complete Integration Analysis"
          icon={<Layers />}
          variant="success"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            This is your final chart analysis challenge. Apply <strong>everything</strong> you&apos;ve learned
            over 10 days — from market structure to on-chain correlation to emotional bias detection —
            in one comprehensive analysis on the TradingView simulator.
          </p>
          <div className="mb-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="text-sm font-bold text-green-800 mb-2">Final Analysis Challenge — Complete Integration</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
                <span><strong>Market Structure (Day 2):</strong> Identify the current trend — HH/HL (uptrend) or LH/LL (downtrend)? Draw the trend line.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
                <span><strong>Support &amp; Resistance (Day 2):</strong> Mark key S/R levels with Horizontal Lines. Where would the S/R flip occur?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
                <span><strong>EMA Alignment (Day 2–3):</strong> Enable EMA 20/50/200. Are they stacked bullishly or bearishly? Where is price relative to each?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
                <span><strong>RSI &amp; Volume Confirmation (Day 3):</strong> Is RSI overbought/oversold? Is volume confirming the current move or diverging?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">5</span>
                <span><strong>On-Chain Correlation (Day 6):</strong> If you could check on-chain data right now, what would you look for? Exchange flows? MVRV? Write your hypothesis.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">6</span>
                <span><strong>Sentiment Overlay (Day 6):</strong> What would the Fear &amp; Greed Index likely show? Are you feeling FOMO or fear? Rate yourself 1–5.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">7</span>
                <span><strong>Signal Generation (Day 7):</strong> Score the confluence out of 100. If ≥ 70, define entry zone, SL, TP1/TP2/TP3, and calculate position size using the 1% rule.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">8</span>
                <span><strong>Final Verdict:</strong> Would you take this trade? Write a complete signal log entry with all 7 steps from Day 7.</span>
              </li>
            </ol>
          </div>
          <TradingViewLab />
          <KeyTakeaway>
            This is the complete integration: structure → S/R → EMAs → RSI/Volume → on-chain → sentiment →
            signal → execution. Every piece of knowledge from 10 days flows into a single decision.
            When all layers align, you have conviction. When they conflict, you have caution.
          </KeyTakeaway>
        </TopicCard>

        {/* ── MEXC Trading Lab: Final Trading Challenge ── */}
        <TopicCard
          id="d10-mexc-lab-final"
          title="MEXC Trading Lab: Final Trading Challenge"
          icon={<Trophy />}
          variant="success"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            This is your graduation challenge — a comprehensive trading exercise applying everything you&apos;ve
            learned over 10 days. Execute a complete trade from analysis to journaling using the MEXC simulator.
            Treat this as your final exam.
          </p>
          <div className="mb-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="text-sm font-bold text-green-800 mb-2">Final Trading Challenge — Complete Trade Execution</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
                <span><strong>Complete Pre-Market Routine (Day 9):</strong> Check the chart. Identify market structure. Scan the order book. Set your emotional baseline (1–5).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
                <span><strong>Score the Signal (Day 7):</strong> Use the 7-step signal generation process. Score confluence out of 100. Only proceed if ≥ 70.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
                <span><strong>Apply Risk Management (Day 4):</strong> Calculate position size using the 1% rule. Define SL before entry. Ensure R:R ≥ 2:1. Verify daily/weekly risk limits.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
                <span><strong>Execute with Discipline (Day 8):</strong> Use the 3-Second Rule. Complete the 10-item pre-trade checklist. Place a <strong>limit order</strong> at your planned entry zone.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">5</span>
                <span><strong>Follow Exit Rules (Day 9):</strong> Honor the hierarchy: Hard SL → Trailing Stop → TP Target → Time Stop → Signal Exit. Don&apos;t move your SL further from entry.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">6</span>
                <span><strong>Journal Everything (Day 8):</strong> Record all 12 data points. Grade your discipline (A–F). What went well? What would you change? This journal entry is your final assignment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">7</span>
                <span><strong>Self-Assessment (Day 10):</strong> After the trade, rate yourself on the 9-skill self-assessment. Which skills need the most work in your first 90 days?</span>
              </li>
            </ol>
          </div>
          <MEXCLab />
          <KeyTakeaway>
            This final challenge combines every skill from 10 days: platform mastery, technical analysis, risk
            management, on-chain thinking, signal generation, psychology, and journaling. The trader who
            follows the complete process — from pre-market routine to post-trade journal — is the trader
            who survives and thrives. That trader is you.
          </KeyTakeaway>
        </TopicCard>

        {/* ── Topic 19: Final Self-Assessment ── */}
        <TopicCard
          id="d10-self-assessment"
          title="Final Self-Assessment"
          icon={<Target />}
          variant="default"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Rate yourself honestly on each skill. This isn&apos;t about ego — it&apos;s about knowing where to focus your next 30 days.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left text-white font-semibold px-4 py-3">Skill</th>
                  <th className="text-center text-white font-semibold px-3 py-3">1 (Beginner)</th>
                  <th className="text-center text-white font-semibold px-3 py-3">3 (Intermediate)</th>
                  <th className="text-center text-white font-semibold px-3 py-3">5 (Proficient)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { skill: 'Platform Mastery', l1: 'Can place basic orders', l3: 'Comfortable with all order types', l5: 'Execute without hesitation' },
                  { skill: 'Technical Analysis', l1: 'Recognize basic patterns', l3: 'Integrate multiple indicators', l5: 'Build complete analysis framework' },
                  { skill: 'Risk Management', l1: 'Know the 1% rule', l3: 'Calculate position size consistently', l5: 'Risk is automatic, not emotional' },
                  { skill: 'On-Chain Analysis', l1: 'Know what tools exist', l3: 'Can interpret key metrics', l5: 'On-chain is part of every analysis' },
                  { skill: 'Signal Generation', l1: 'Need external signals', l3: 'Generate own signals with scoring', l5: 'Consistent, reproducible signals' },
                  { skill: 'Backtesting', l1: 'Understand the concept', l3: 'Can backtest with 50+ samples', l5: 'Statistical validation of edge' },
                  { skill: 'Psychology', l1: 'Aware of FOMO/tilt', l3: 'Can manage emotions in real-time', l5: 'Emotions are data, not decisions' },
                  { skill: 'Journaling', l1: 'Keep basic records', l3: 'Detailed journal with emotions', l5: 'Journal drives improvement cycle' },
                  { skill: 'Trading Plan', l1: 'Have a rough plan', l3: 'Written 12-component plan', l5: 'Plan is followed on 95%+ of trades' },
                ].map((row, i) => (
                  <tr key={row.skill} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-slate-800">{row.skill}</td>
                    <td className="px-3 py-3 text-center text-slate-600 text-xs">{row.l1}</td>
                    <td className="px-3 py-3 text-center text-slate-600 text-xs">{row.l3}</td>
                    <td className="px-3 py-3 text-center text-slate-600 text-xs">{row.l5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 rounded-lg border-l-4 border-l-amber-500 bg-amber-50 px-4 py-3">
            <p className="text-sm text-amber-800 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Action Item:</strong> Any skill below 3 needs focused practice in the next 30 days. Schedule specific practice sessions for your weakest 2-3 skills.</span>
            </p>
          </div>
        </TopicCard>

        {/* ── Topic 20: Your Next Steps ── */}
        <TopicCard
          id="d10-next-steps"
          title="Your Next Steps"
          icon={<Map />}
          variant="highlight"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-6">
            Here&apos;s your action plan from this moment forward. No ambiguity — just clear next steps.
          </p>

          {/* TODAY */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded bg-red-100 text-red-800 border border-red-300">TODAY</span>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-50/50 p-3 space-y-1">
              <ChecklistItem>Complete the Final Assessment (50 questions) — score yourself honestly</ChecklistItem>
              <ChecklistItem>Write or finalize your complete trading plan (all 12 components)</ChecklistItem>
              <ChecklistItem>Print the 10 Trading Commandments and pin them near your screen</ChecklistItem>
              <ChecklistItem>Set your alarm for tomorrow&apos;s first daily routine</ChecklistItem>
            </div>
          </div>

          {/* TOMORROW */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded bg-amber-100 text-amber-800 border border-amber-300">TOMORROW</span>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-3 space-y-1">
              <ChecklistItem>Execute your first solo daily routine (check BTC, scan watchlist, check news)</ChecklistItem>
              <ChecklistItem>Score any signals — only take trades scoring ≥ 7/10</ChecklistItem>
              <ChecklistItem>Log everything in your trade journal — even &ldquo;no trade today&rdquo;</ChecklistItem>
            </div>
          </div>

          {/* THIS WEEK */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded bg-blue-100 text-blue-800 border border-blue-300">THIS WEEK</span>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-3 space-y-1">
              <ChecklistItem>Complete 5 daily routines (Monday through Friday)</ChecklistItem>
              <ChecklistItem>Paper-trade or micro-trade at least 3 signals with full scoring</ChecklistItem>
              <ChecklistItem>Complete your first weekly review (30 minutes, review all journal entries)</ChecklistItem>
              <ChecklistItem>Identify your top 2 mistakes from this week and write prevention rules</ChecklistItem>
            </div>
          </div>

          {/* THIS MONTH */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">THIS MONTH</span>
            </div>
            <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-3 space-y-1">
              <ChecklistItem>Complete 20+ daily routines and log each one</ChecklistItem>
              <ChecklistItem>Execute 10+ trades (paper or micro) following the full 8-step process</ChecklistItem>
              <ChecklistItem>Complete 4 weekly reviews and 1 monthly review</ChecklistItem>
              <ChecklistItem>Check off all Phase 1 milestones from the 90-Day Roadmap</ChecklistItem>
            </div>
          </div>

          {/* NEXT 90 DAYS */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2 py-1 rounded bg-amber-600 text-amber-100 border border-amber-500">NEXT 90 DAYS</span>
            </div>
            <div className="rounded-lg border border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50 p-3 space-y-1">
              <ChecklistItem>Follow the 90-Day Roadmap — Phase 1, Phase 2, Phase 3</ChecklistItem>
              <ChecklistItem>Complete 100+ trades with full journaling</ChecklistItem>
              <ChecklistItem>Achieve positive expectancy over a 30-trade sample</ChecklistItem>
              <ChecklistItem>Complete the quarterly review and plan the next 90 days</ChecklistItem>
            </div>
          </div>
        </TopicCard>

        {/* ── Topic 21: Day 10 Final Quiz (20 Questions) ── */}
        <TopicCard
          id="d10-final-quiz"
          title="Day 10 Final Quiz — 20 Questions"
          icon={<BookOpen />}
          variant="highlight"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-6">
            This quiz specifically tests Day 10 content. Answer all 20 questions before checking the answers.
          </p>

          <div className="space-y-2">
            <QuizQuestion number={1} question="What are the 5 layers of the bootcamp framework, from bottom to top?">
              Layer 1: Foundation (Days 1-2), Layer 2: Analysis (Days 3-4), Layer 3: Risk & Execution (Days 5-6), Layer 4: Strategy & Testing (Days 7-8), Layer 5: The Plan (Day 9).
            </QuizQuestion>
            <QuizQuestion number={2} question="What is the 8-step master process flow?">
              Daily Routine → Signal Scoring → Pre-Trade Checklist → Entry → Management → Exit → Journal → Review. It&apos;s a continuous loop.
            </QuizQuestion>
            <QuizQuestion number={3} question="In the Technical Analysis Quick Check, what 7 questions should you ask?">
              (1) What is market structure? (2) Where is price vs S/R? (3) What are EMAs saying? (4) Is RSI OB/OS? (5) Is MACD confirming? (6) Is volume confirming? (7) Are there candlestick confirmations?
            </QuizQuestion>
            <QuizQuestion number={4} question="What is the first step in the MEXC trade execution workflow?">
              Identify the signal — S/R bounce, breakout, EMA cross, or pattern completion. Then score it before proceeding.
            </QuizQuestion>
            <QuizQuestion number={5} question="When should you use Binance instead of MEXC?">
              When the token isn&apos;t on MEXC, when you need higher liquidity, for P2P with local currency, for Binance Earn products, or for large position sizes with less slippage.
            </QuizQuestion>
            <QuizQuestion number={6} question="Why shouldn't beginners chase cross-platform arbitrage?">
              Execution risk, transfer delays, withdrawal fees, and slippage make it unprofitable for small accounts. Focus on learning to trade instead.
            </QuizQuestion>
            <QuizQuestion number={7} question="What are the 3 phases of the 90-day roadmap and their risk limits?">
              Phase 1: Foundation (Days 1-30, max 0.5% risk), Phase 2: Development (Days 31-60, max 0.75% risk), Phase 3: Performance (Days 61-90, max 1% risk if criteria met).
            </QuizQuestion>
            <QuizQuestion number={8} question="Name 3 milestones you should hit by Day 30.">
              Any 3 of: completed 7-day routine streak, MEXC account set up, 5+ paper trades journaled, 5+ micro real trades, all trades have SL/TP, daily loss limit never exceeded, trading journal in use, weekly reviews completed, can explain market structure.
            </QuizQuestion>
            <QuizQuestion number={9} question="What is the continuous improvement cycle?">
              Execute → Journal → Review → Analyze → Adjust → Execute. It&apos;s a never-ending loop where each iteration makes you slightly better.
            </QuizQuestion>
            <QuizQuestion number={10} question="After how long can you consider advanced strategies?">
              After your basic strategies have been profitable for 6 consecutive months. Adding complexity too early is the #1 way to blow up your account.
            </QuizQuestion>
            <QuizQuestion number={11} question="What are the 3 capital growth phases?">
              Phase 1: $500-$2K (Months 1-6, Learn & Survive), Phase 2: $2K-$10K (Months 6-18, Build & Compound), Phase 3: $10K+ (Month 18+, Scale & Optimize).
            </QuizQuestion>
            <QuizQuestion number={12} question="What is the #1 rule about deposits?">
              NEVER deposit more than you can afford to lose. Trading capital should be money you can lose entirely without affecting your life.
            </QuizQuestion>
            <QuizQuestion number={13} question="In the final exam simulation, what 8 steps must you complete?">
              (1) Identify market structure, (2) Determine price vs S/R, (3) Analyze EMA configuration, (4) Interpret RSI, (5) Calculate position size, (6) Define entry/SL/TP with R:R, (7) Complete pre-trade checklist, (8) Write journal entry.
            </QuizQuestion>
            <QuizQuestion number={14} question="What is the passing score on the final trade simulation?">
              70 out of 100 points. Score below 70 and you should revisit Days 3-6 before trading real money.
            </QuizQuestion>
            <QuizQuestion number={15} question="What is the 1st Trading Commandment?">
              PROTECT CAPITAL FIRST. If your capital is gone, you can&apos;t trade. Every decision starts with &ldquo;how much can I lose?&rdquo; — not &ldquo;how much can I make?&rdquo;
            </QuizQuestion>
            <QuizQuestion number={16} question="What does Commandment #7 say about emotions?">
              EMOTIONS ARE DATA, NOT ORDERS. Notice your emotions but don&apos;t act on them. Write them in your journal — they&apos;re information about your state, not trading signals.
            </QuizQuestion>
            <QuizQuestion number={17} question="What should you do tomorrow morning as your first trading action?">
              Execute your daily routine: check BTC daily chart, identify market structure, check S/R levels, scan watchlist, check news, score signals.
            </QuizQuestion>
            <QuizQuestion number={18} question="Name 2 accountability methods for traders.">
              Any 2 of: trading journal commitment, accountability partner, weekly review calls, community challenges, mentor check-ins.
            </QuizQuestion>
            <QuizQuestion number={19} question="What should you do if a skill in your self-assessment scores below 3?">
              Schedule focused practice for that skill in the next 30 days. Your weakest 2-3 skills need dedicated improvement time.
            </QuizQuestion>
            <QuizQuestion number={20} question="What is the graduation message of this bootcamp?">
              The real learning starts now. Trade small, follow your rules, and improve every single week. Education without execution is entertainment — you didn&apos;t come here to be entertained.
            </QuizQuestion>
          </div>

          <div className="mt-6 rounded-lg border border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-3 text-center">
            <p className="text-lg font-bold text-amber-800 flex items-center justify-center gap-2">
              <Award className="w-5 h-5" />
              Pass Mark: 16 / 20 (80%)
            </p>
          </div>
        </TopicCard>

        {/* ── Topic 22: Day 10 Key Takeaways ── */}
        <TopicCard
          id="d10-key-takeaways"
          title="Day 10 Key Takeaways"
          icon={<Star />}
          variant="highlight"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: Layers, title: 'The 5-Layer Framework', desc: 'Every piece of knowledge from 10 days builds upward. Skip a layer and the whole structure collapses.', color: 'border-amber-400 bg-amber-50' },
              { icon: GitBranch, title: 'The 8-Step Process', desc: 'Daily Routine → Signal Scoring → Checklist → Entry → Management → Exit → Journal → Review. Never skip steps.', color: 'border-blue-400 bg-blue-50' },
              { icon: FileText, title: 'Cheat Sheets Save Trades', desc: 'Keep your Quick Check guides visible. In the heat of the moment, a glance at a cheat sheet beats guessing.', color: 'border-emerald-400 bg-emerald-50' },
              { icon: Map, title: 'The 90-Day Roadmap', desc: 'Phase 1 (0.5% risk) → Phase 2 (0.75% risk) → Phase 3 (1% risk). Process before profit, always.', color: 'border-violet-400 bg-violet-50' },
              { icon: RefreshCw, title: 'Continuous Improvement', desc: 'Execute → Journal → Review → Analyze → Adjust. The loop never stops. Kaizen — small daily improvements compound.', color: 'border-teal-400 bg-teal-50' },
              { icon: Shield, title: 'The 10 Commandments', desc: 'Your immutable laws. Break them and the market collects its fee. PROTECT CAPITAL FIRST.', color: 'border-red-400 bg-red-50' },
              { icon: Zap, title: 'Advanced Strategies Later', desc: '6 months of basic profitability before even thinking about advanced strategies. Patience is a trading skill.', color: 'border-amber-400 bg-amber-50' },
              { icon: TrendingUp, title: 'Scale Process Before Capital', desc: 'Don\'t add money until your process is proven. A $500 account with good process beats $10K with bad process.', color: 'border-emerald-400 bg-emerald-50' },
              { icon: Users, title: 'Accountability Wins', desc: 'The most successful traders aren\'t lone wolves. Build accountability systems that keep you honest.', color: 'border-blue-400 bg-blue-50' },
              { icon: GraduationCap, title: 'The Journey Begins Now', desc: 'This bootcamp gave you the map. The next 90 days will test if you can follow it. Trade small. Follow rules. Improve weekly.', color: 'border-amber-400 bg-amber-50' },
            ].map((item) => (
              <div key={item.title} className={`rounded-lg border-l-4 ${item.color} px-4 py-3`}>
                <div className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 mt-0.5 text-slate-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-slate-800">{item.title}</p>
                    <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TopicCard>

        {/* ── Topic 23: Day 10 (Final) Homework ── */}
        <TopicCard
          id="d10-homework"
          title="Day 10 (Final) Homework"
          icon={<ClipboardList />}
          variant="highlight"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            This is your final homework assignment. Complete it <strong>today</strong> — don&apos;t put it off until tomorrow.
          </p>

          <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 space-y-2">
            <ChecklistItem>
              <strong>Complete the 50-question final assessment</strong> — score yourself honestly. Note which sections you scored weakest on.
            </ChecklistItem>
            <ChecklistItem>
              <strong>Finalize your complete trading plan</strong> — make sure all 12 components are written, clear, and actionable. Print it.
            </ChecklistItem>
            <ChecklistItem>
              <strong>Set up your trade journal</strong> — create the template (spreadsheet, Notion, or notebook) with all 5 essential fields ready for tomorrow.
            </ChecklistItem>
            <ChecklistItem>
              <strong>Write your personal commitment letter</strong> — a letter to your future self committing to the 90-day roadmap, the 10 Commandments, and the daily process.
            </ChecklistItem>
            <ChecklistItem>
              <strong>Schedule your first weekly review</strong> — put it on your calendar for this Sunday. 30 minutes. Non-negotiable.
            </ChecklistItem>
          </div>

          <div className="mt-4 rounded-lg border border-green-300 bg-green-50 px-4 py-3">
            <p className="text-sm text-green-800 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Remember:</strong> The homework isn&apos;t busywork — it&apos;s the bridge between knowing and doing. Complete every item today.</span>
            </p>
          </div>
        </TopicCard>

        {/* ── Topic 24: Graduation Message ── */}
        <TopicCard
          id="d10-graduation"
          title="Graduation"
          icon={<GraduationCap />}
          variant="success"
        >
          {/* Certificate SVG */}
          <GraduationCertificate />

          <div className="text-center mt-6 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-2xl sm:text-3xl font-bold text-slate-800">
                🎓 Congratulations, Graduate!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto">
                You&apos;ve completed the <strong>10-Day Crypto Trading Bootcamp</strong>. You now have what 95% of crypto traders don&apos;t: a systematic framework, a written plan, and the knowledge to execute it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="rounded-xl border-2 border-amber-400 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 px-6 py-5 max-w-xl mx-auto">
                <p className="text-lg sm:text-xl font-bold text-amber-900 italic">
                  &ldquo;The real learning starts now. Trade small, follow your rules, and improve every single week.&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-2"
            >
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Education without execution is entertainment. You didn&apos;t come here to be entertained. You came here to become a trader.
              </p>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Your 90-day roadmap starts <strong>tomorrow morning</strong>. Set your alarm. Open your plan. Follow the process.
              </p>
              <p className="text-base font-bold text-amber-700 mt-4">
                Now go trade. 🚀
              </p>
            </motion.div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            APPLIED LAB SIMULATION: Final Integration
        ══════════════════════════════════════════════════════════════════ */}
        <AppliedLabSimulation
          id="d10-lab-final-integration"
          title="LAB 13: Final Integration — The Complete Trader"
          subtitle="Demonstrate your complete trading process: analyze, plan, execute, and review using all skills from the 10-day bootcamp"
          dayNumber={10}
          sessionName="Final Block"
          labType="both"
          learningObjectives={[
            'Demonstrate mastery of the complete trading workflow',
            'Apply all 10 days of knowledge in a single trade sequence',
            'Use TradingView for analysis and MEXC for execution',
            'Self-evaluate using the complete trader checklist',
          ]}
          tasks={[
            { id: 'd10-l1-t1', instruction: 'COMPLETE ANALYSIS (TradingView): Determine market structure, identify S/R levels, check EMA alignment, analyze volume, and assess RSI. Write your confluence score.', hint: 'This is everything from Days 2-3 combined. Structure → S/R → EMAs → Volume → RSI → Confluence Score. You should be able to do this in under 5 minutes now.' },
            { id: 'd10-l1-t2', instruction: 'TRADE PLAN: Write a complete IF/THEN plan: "If price does X at level Y, I will enter Z with SL at A and TP at B. Risk: $100. R:R: 1:N."', hint: 'Your plan should include all components from Day 9: Market, direction, entry trigger, SL, TP, position size, and risk amount.' },
            { id: 'd10-l1-t3', instruction: 'RISK CHECK: Calculate your position size using the 1% rule. Verify R:R is at least 1:2. If not, do NOT take the trade.', hint: 'Risk per trade = Account × 1% = $100. Position size = Max risk ÷ (Entry - SL). If R:R < 1:2, find a better setup.' },
            { id: 'd10-l1-t4', instruction: 'EXECUTE (MEXC): Switch to the MEXC simulator and place your order exactly as planned. No adjustments, no second-guessing.', hint: 'This is where discipline matters most. Follow the plan like a machine. Your emotions should not be involved in execution.' },
            { id: 'd10-l1-t5', instruction: 'PSYCHOLOGY CHECK: After placing the order, rate your emotional state: Calm (1), Slightly nervous (2), Anxious (3), FOMO (4), Panicking (5). If 3+, you may have violated your psychology rules.', hint: 'If you are feeling anxious, you probably risked too much or broke a plan rule. True discipline feels boring, not exciting.' },
            { id: 'd10-l1-t6', instruction: 'POST-TRADE REVIEW: Complete the full review — Was the analysis sound? Did I follow the plan? Was risk managed? What did I learn? Score: Plan compliance /10, Analysis quality /10, Execution discipline /10.', hint: 'This review template comes from Day 8 journaling. Honest self-assessment is the fastest path to improvement.' },
            { id: 'd10-l1-t7', instruction: 'GRADUATION CHECK: Can you do this entire process independently? If yes, you are ready for the 90-Day Roadmap. If not, review the days where you scored lowest.', hint: 'The 90-Day Roadmap is designed to build on this foundation with real (small) money. Only proceed when you can execute this process consistently in demo.' },
          ]}
          selfAssessment={[
            {
              question: 'What are the 5 steps of the complete trading workflow?',
              options: [
                'Buy, Hold, Sell, Repeat, Profit',
                'Analyze, Plan, Execute, Review, Improve',
                'Check Twitter, Buy, Hope, Sell, Complain',
                'Open chart, Click buy, Check price, Panic, Sell',
              ],
              correctIndex: 1,
              explanation: 'The complete workflow is: Analyze (structure, S/R, indicators) → Plan (IF/THEN with defined risk) → Execute (follow the plan) → Review (evaluate process compliance) → Improve (adjust based on review findings).',
            },
            {
              question: 'What should you do if your confluence score is below 3?',
              options: [
                'Trade anyway with a smaller position',
                'Stay out of the market and wait for a better setup',
                'Switch to a different coin',
                'Increase leverage to compensate',
              ],
              correctIndex: 1,
              explanation: 'When confluence is below 3, the probability of success is too low. No trade is always better than a bad trade. The market will present clearer setups — patience is part of the process.',
            },
          ]}
          expectedOutcomes={[
            'Demonstrated ability to execute the complete trading workflow independently',
            'Mastery of the Analysis → Plan → Execute → Review cycle',
            'Self-awareness of emotional state during trading',
            'Readiness for the 90-Day Roadmap with real (small) money',
          ]}
        />
      </div>
    </section>
  )
}
