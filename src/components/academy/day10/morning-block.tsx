'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Layers, GitBranch, FileText, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'

/* ─── 5-Layer Framework Pyramid SVG ─── */
function FrameworkPyramid() {
  return (
    <div className="flex justify-center py-4">
      <svg viewBox="0 0 500 360" className="w-full max-w-lg" aria-label="5-Layer Framework Pyramid">
        {/* Layer 5 - Top (Day 9) */}
        <motion.polygon
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          points="200,40 300,40 325,100 175,100" fill="#92400e" stroke="#f59e0b" strokeWidth="2"
        />
        <text x="250" y="66" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">LAYER 5: THE PLAN</text>
        <text x="250" y="84" textAnchor="middle" fill="#fde68a" fontSize="9">Day 9</text>

        {/* Layer 4 (Days 7-8) */}
        <motion.polygon
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          points="175,105 325,105 355,175 145,175" fill="#78350f" stroke="#f59e0b" strokeWidth="2"
        />
        <text x="250" y="132" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">LAYER 4: STRATEGY & TESTING</text>
        <text x="250" y="152" textAnchor="middle" fill="#fde68a" fontSize="9">Days 7-8</text>

        {/* Layer 3 (Days 5-6) */}
        <motion.polygon
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          points="145,180 355,180 390,255 110,255" fill="#451a03" stroke="#f59e0b" strokeWidth="2"
        />
        <text x="250" y="207" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">LAYER 3: RISK & EXECUTION</text>
        <text x="250" y="227" textAnchor="middle" fill="#fde68a" fontSize="9">Days 5-6</text>

        {/* Layer 2 (Days 3-4) */}
        <motion.polygon
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          points="110,260 390,260 425,335 75,335" fill="#1c1917" stroke="#f59e0b" strokeWidth="2"
        />
        <text x="250" y="287" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="bold">LAYER 2: ANALYSIS</text>
        <text x="250" y="307" textAnchor="middle" fill="#fde68a" fontSize="9">Days 3-4</text>

        {/* Layer 1 - Bottom (Days 1-2) */}
        <motion.polygon
          initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          points="75,340 425,340 460,355 40,355" fill="#0c0a09" stroke="#f59e0b" strokeWidth="2"
        />
        <text x="250" y="352" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold">LAYER 1: FOUNDATION (Days 1-2)</text>

        {/* Arrow label */}
        <motion.text
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}
          x="470" y="200" textAnchor="start" fill="#94a3b8" fontSize="10" transform="rotate(-90,470,200)"
        >
          BUILD UPWARD →
        </motion.text>
      </svg>
    </div>
  )
}

/* ─── Master Process Flow SVG ─── */
function ProcessFlow() {
  const steps = [
    'Daily\nRoutine',
    'Signal\nScoring',
    'Pre-Trade\nChecklist',
    'Entry',
    'Management',
    'Exit',
    'Journal',
    'Review',
  ]

  return (
    <div className="overflow-x-auto py-4">
      <svg viewBox="0 0 920 110" className="w-full min-w-[600px]" aria-label="Master Process Flow">
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#f59e0b" />
          </marker>
        </defs>

        {steps.map((label, i) => {
          const x = 10 + i * 114
          const lines = label.split('\n')
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <rect
                x={x}
                y={20}
                width={100}
                height={56}
                rx={10}
                fill={i === 3 ? '#065f46' : i === 4 ? '#1e3a5f' : i === 5 ? '#7f1d1d' : '#292524'}
                stroke="#f59e0b"
                strokeWidth="1.5"
              />
              <text x={x + 50} y={lines.length === 1 ? 52 : 42} textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold">
                {lines[0]}
              </text>
              {lines.length > 1 && (
                <text x={x + 50} y={58} textAnchor="middle" fill="#d1d5db" fontSize="10">
                  {lines[1]}
                </text>
              )}
              <text x={x + 50} y={16} textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold">
                {i + 1}
              </text>
              {i < steps.length - 1 && (
                <line
                  x1={x + 100}
                  y1={48}
                  x2={x + 114}
                  y2={48}
                  stroke="#f59e0b"
                  strokeWidth="1.5"
                  markerEnd="url(#arrowhead)"
                />
              )}
            </motion.g>
          )
        })}

        {/* Loop-back arrow */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          d="M 930,48 Q 940,90 460,90 Q 10,90 10,48"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeDasharray="4 3"
          markerEnd="url(#arrowhead)"
        />
        <text x="470" y="102" textAnchor="middle" fill="#94a3b8" fontSize="9" fontStyle="italic">
          Continuous loop — every trade feeds the next
        </text>
      </svg>
    </div>
  )
}

/* ─── Morning Block ─── */
export function Day10MorningBlock() {
  return (
    <section id="d10-morning" aria-labelledby="d10-morning-heading">
      <SectionDivider
        icon={<Sun />}
        title="MORNING BLOCK — 8:00–9:30: COMPLETE FRAMEWORK REVIEW"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ── Topic 1: 10-Day Bootcamp Knowledge Map ── */}
        <TopicCard
          id="d10-knowledge-map"
          title="10-Day Bootcamp Knowledge Map"
          icon={<Layers />}
          variant="highlight"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Everything you&apos;ve learned over 10 days forms a <strong>5-Layer Framework</strong>. Each layer builds on the one below it — you can&apos;t skip layers and expect consistent results.
          </p>

          {/* 5-Layer Pyramid SVG */}
          <FrameworkPyramid />

          {/* Layer descriptions */}
          <div className="space-y-3 mt-4">
            {[
              { layer: 'Layer 1', title: 'Foundation (Days 1-2)', desc: 'Crypto basics, blockchain, money, exchanges, security, support/resistance, market structure, EMAs', color: 'bg-stone-900 border-amber-600' },
              { layer: 'Layer 2', title: 'Analysis (Days 3-4)', desc: 'Candlestick patterns, indicators (RSI, MACD, Volume), risk/reward, position sizing', color: 'bg-stone-800 border-amber-500' },
              { layer: 'Layer 3', title: 'Risk & Execution (Days 5-6)', desc: 'Spot/futures trading mechanics, order types, on-chain analysis, sentiment, funding rates', color: 'bg-amber-950 border-amber-400' },
              { layer: 'Layer 4', title: 'Strategy & Testing (Days 7-8)', desc: 'Trading strategies, backtesting, trading psychology, journaling, emotional management', color: 'bg-amber-900 border-amber-300' },
              { layer: 'Layer 5', title: 'The Plan (Day 9)', desc: 'Complete trading plan, rules, daily routine, performance tracking', color: 'bg-amber-800 border-yellow-300' },
            ].map((item) => (
              <div
                key={item.layer}
                className={`flex items-start gap-3 rounded-lg border-l-4 ${item.color} px-4 py-3`}
              >
                <span className="text-xs font-bold text-amber-400 mt-0.5 whitespace-nowrap">{item.layer}</span>
                <div>
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="text-xs text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <KeyTakeaway>
            Each layer depends on the one below. A trader who skips risk management (Layer 3) to jump into strategies (Layer 4) is building on sand.
          </KeyTakeaway>
        </TopicCard>

        {/* ── Topic 2: The Master Process Flow ── */}
        <TopicCard
          id="d10-process-flow"
          title="The Master Process Flow"
          icon={<GitBranch />}
          variant="default"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Every single trade you take should follow this <strong>8-step process</strong>. No exceptions. This is your operational system — memorize it, internalize it, execute it.
          </p>

          {/* Process Flow SVG */}
          <ProcessFlow />

          {/* Step descriptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {[
              { step: 1, title: 'Daily Routine', desc: 'Market overview, BTC check, news scan, watchlist update', color: 'border-stone-600' },
              { step: 2, title: 'Signal Scoring', desc: 'Score each signal 0-10 across your criteria (S/R, structure, indicators, volume)', color: 'border-stone-600' },
              { step: 3, title: 'Pre-Trade Checklist', desc: '5-point checklist: trend, S/R, indicator confluence, risk/reward, position size', color: 'border-stone-600' },
              { step: 4, title: 'Entry', desc: 'Execute only if ALL checklist items pass. Place stop-loss IMMEDIATELY.', color: 'border-emerald-500' },
              { step: 5, title: 'Management', desc: 'Trail stops, monitor price action, DO NOT move SL to breakeven prematurely', color: 'border-blue-500' },
              { step: 6, title: 'Exit', desc: 'Hit TP or SL — both are valid exits. No &ldquo;just one more candle&rdquo; thinking.', color: 'border-red-500' },
              { step: 7, title: 'Journal', desc: 'Log the trade: entry reason, SL, TP, emotions, outcome, screenshot', color: 'border-stone-600' },
              { step: 8, title: 'Review', desc: 'Weekly review of journal entries. Find patterns in your mistakes and wins.', color: 'border-stone-600' },
            ].map((item) => (
              <div
                key={item.step}
                className={`flex items-start gap-3 rounded-lg border-l-4 ${item.color} bg-slate-50 px-3 py-2.5`}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 text-amber-400 text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-800">{item.title}</p>
                  <p className="text-xs text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <KeyTakeaway>
            If you can&apos;t explain which step of the process you&apos;re on for every open trade, you&apos;re gambling — not trading.
          </KeyTakeaway>
        </TopicCard>

        {/* ── Topic 3: Quick Reference Cheat Sheets ── */}
        <TopicCard
          id="d10-cheat-sheets"
          title="Quick Reference Cheat Sheets"
          icon={<FileText />}
          variant="highlight"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-6">
            Keep these cheat sheets visible on your desk or as a second monitor reference. They are your <strong>fast-check guides</strong> before and during every trade.
          </p>

          {/* Technical Analysis Quick Check */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-600" />
              Technical Analysis Quick Check
            </h4>
            <ComparisonTable
              headers={['#', 'Question', 'Check']}
              rows={[
                ['1', 'What is the market structure (trend)?', 'HH/HL = up, LH/LL = down'],
                ['2', 'Where is price relative to key S/R levels?', 'Near support = bullish bias, near resistance = bearish'],
                ['3', 'What are EMAs telling you?', 'Stacked = trend, Tangled = range'],
                ['4', 'Is RSI overbought or oversold?', 'RSI > 70 = OB, RSI < 30 = OS'],
                ['5', 'Is MACD confirming the trend?', 'Histogram expanding = momentum growing'],
                ['6', 'Is volume confirming the move?', 'High volume = real move, Low volume = weak'],
                ['7', 'Are there candlestick confirmations?', 'Pin bar, engulfing, doji at key levels'],
              ]}
            />
          </div>

          {/* Risk Management Quick Check */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              Risk Management Quick Check
            </h4>
            <ComparisonTable
              headers={['#', 'Question', 'Rule']}
              rows={[
                ['1', 'What is my max risk per trade?', '≤ 1% of account'],
                ['2', 'Where is my stop-loss?', 'Must be set BEFORE entry'],
                ['3', 'What is the risk/reward ratio?', 'Minimum 1:2, ideally 1:3+'],
                ['4', 'What is my position size?', 'Calculated from SL distance and risk %'],
                ['5', 'How many positions am I in?', 'Maximum 3 concurrent positions'],
                ['6', 'Have I hit my daily loss limit?', 'Stop trading at -2% daily loss'],
              ]}
            />
          </div>

          {/* On-Chain Quick Check */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              On-Chain Quick Check
            </h4>
            <ComparisonTable
              headers={['#', 'Question', 'Signal']}
              rows={[
                ['1', 'Are whales accumulating or distributing?', 'Large inflows to exchanges = bearish'],
                ['2', 'Is exchange reserve rising or falling?', 'Rising = selling pressure, Falling = hodling'],
                ['3', 'What is the funding rate?', 'High positive = crowded long, High negative = crowded short'],
                ['4', 'Is there unusual on-chain activity?', 'Large transfers, wallet movements'],
                ['5', 'What is MVRV telling us?', 'MVRV > 3.5 = overvalued, MVRV < 1 = undervalued'],
              ]}
            />
          </div>

          <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
            <p className="text-sm text-amber-800 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Pro Tip:</strong> Print these cheat sheets and tape them to your monitor. In the heat of a trade, you won&apos;t remember all these questions — but you CAN glance at a cheat sheet.</span>
            </p>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
