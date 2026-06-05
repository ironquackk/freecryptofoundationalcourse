'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun, RefreshCw, BookOpen, TrendingUp, DollarSign, AlertTriangle,
  ArrowRight, Lightbulb, GraduationCap, Globe, BarChart3, Library,
  Users, Newspaper, LineChart, Award, Scale, Zap
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'

/* ─── Continuous Improvement Cycle SVG ─── */
function ImprovementCycle() {
  const steps = ['Execute', 'Journal', 'Review', 'Analyze', 'Adjust']
  const cx = 150, cy = 150, r = 100

  return (
    <div className="flex justify-center py-4">
      <svg viewBox="0 0 300 300" className="w-full max-w-xs" aria-label="Continuous Improvement Cycle">
        {steps.map((label, i) => {
          const angle = (i * 72 - 90) * (Math.PI / 180)
          const x = cx + r * Math.cos(angle)
          const y = cy + r * Math.sin(angle)
          const nextAngle = ((i + 1) * 72 - 90) * (Math.PI / 180)
          const nx = cx + r * Math.cos(nextAngle)
          const ny = cy + r * Math.sin(nextAngle)
          const colors = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444']

          return (
            <motion.g
              key={label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
            >
              {/* Arrow to next */}
              <line
                x1={x + (nx - x) * 0.3}
                y1={y + (ny - y) * 0.3}
                x2={x + (nx - x) * 0.7}
                y2={y + (ny - y) * 0.7}
                stroke="#94a3b8"
                strokeWidth="2"
              />
              <circle
                cx={x + (nx - x) * 0.72}
                cy={y + (ny - y) * 0.72}
                r="4"
                fill="#94a3b8"
              />

              {/* Node */}
              <circle cx={x} cy={y} r="28" fill={colors[i]} opacity="0.9" />
              <text x={x} y={y + 4} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                {label}
              </text>
            </motion.g>
          )
        })}

        {/* Center */}
        <motion.circle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          cx={cx} cy={cy} r="22" fill="#292524" stroke="#f59e0b" strokeWidth="2"
        />
        <text x={cx} y={cy - 4} textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">NEVER</text>
        <text x={cx} y={cy + 8} textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">STOP</text>
      </svg>
    </div>
  )
}

/* ─── Capital Growth Path SVG ─── */
function CapitalGrowthPath() {
  return (
    <div className="flex justify-center py-4">
      <svg viewBox="0 0 700 200" className="w-full max-w-2xl" aria-label="Capital Growth Path">
        {/* Base line */}
        <line x1="50" y1="170" x2="650" y2="170" stroke="#475569" strokeWidth="2" />

        {/* Phase 1 */}
        <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <rect x="70" y="100" width="180" height="65" rx="10" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
          <text x="160" y="122" textAnchor="middle" fill="#6ee7b7" fontSize="12" fontWeight="bold">PHASE 1</text>
          <text x="160" y="140" textAnchor="middle" fill="#a7f3d0" fontSize="10">$500 → $2,000</text>
          <text x="160" y="156" textAnchor="middle" fill="#d1fae5" fontSize="9">Months 1-6</text>
        </motion.g>

        {/* Phase 2 */}
        <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }}>
          <rect x="260" y="60" width="180" height="65" rx="10" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="350" y="82" textAnchor="middle" fill="#93c5fd" fontSize="12" fontWeight="bold">PHASE 2</text>
          <text x="350" y="100" textAnchor="middle" fill="#bfdbfe" fontSize="10">$2,000 → $10,000</text>
          <text x="350" y="116" textAnchor="middle" fill="#dbeafe" fontSize="9">Months 6-18</text>
        </motion.g>

        {/* Phase 3 */}
        <motion.g initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
          <rect x="450" y="20" width="180" height="65" rx="10" fill="#78350f" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="540" y="42" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold">PHASE 3</text>
          <text x="540" y="60" textAnchor="middle" fill="#fef3c7" fontSize="10">$10,000+</text>
          <text x="540" y="76" textAnchor="middle" fill="#fef9c3" fontSize="9">Month 18+</text>
        </motion.g>

        {/* Connecting arrows */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 }}
          d="M 250,140 Q 255,120 260,100"
          fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#growth-arrow)"
        />
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          d="M 440,95 Q 445,75 450,60"
          fill="none" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#growth-arrow)"
        />

        <defs>
          <marker id="growth-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#94a3b8" />
          </marker>
        </defs>

        {/* Bottom labels */}
        <text x="160" y="186" textAnchor="middle" fill="#6ee7b7" fontSize="9">Learn & Survive</text>
        <text x="350" y="186" textAnchor="middle" fill="#93c5fd" fontSize="9">Build & Compound</text>
        <text x="540" y="186" textAnchor="middle" fill="#fde68a" fontSize="9">Scale & Optimize</text>
      </svg>
    </div>
  )
}

/* ─── Afternoon Block ─── */
export function Day10AfternoonBlock() {
  return (
    <section id="d10-afternoon" aria-labelledby="d10-afternoon-heading">
      <SectionDivider
        icon={<Sun />}
        title="AFTERNOON BLOCK — 1:00–2:30: BEYOND 90 DAYS"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ── Topic 9: The Continuous Improvement Cycle ── */}
        <TopicCard
          id="d10-improvement-cycle"
          title="The Continuous Improvement Cycle"
          icon={<RefreshCw />}
          variant="highlight"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Your growth as a trader never stops. This 5-step cycle is your compass for continuous improvement — run it every week, every month, every quarter.
          </p>

          <ImprovementCycle />

          <AnalogyBox title="The Kaizen Principle">
            Japanese manufacturing revolutionized quality through &ldquo;kaizen&rdquo; — continuous small improvements. Trading is identical. A 1% improvement per week compounds to 67% better in a year. Focus on getting slightly better, not dramatically different.
          </AnalogyBox>

          {/* Quarterly Review Template */}
          <h4 className="text-sm font-bold text-slate-800 mt-6 mb-3">Quarterly Review Template</h4>
          <ComparisonTable
            headers={['Area', 'Review Question']}
            rows={[
              ['Performance', 'What was my win rate, avg R:R, and total P/L this quarter?'],
              ['Process', 'Did I follow my trading plan on 90%+ of trades?'],
              ['Psychology', 'What were my 3 biggest emotional mistakes and how will I prevent them?'],
              ['Strategy', 'Is my edge still valid? Has market structure changed?'],
              ['Growth', 'What 1-2 skills will I focus on improving next quarter?'],
            ]}
          />

          <KeyTakeaway>
            The difference between a trader who survives and a trader who thrives is the review process. If you&apos;re not reviewing, you&apos;re repeating mistakes.
          </KeyTakeaway>
        </TopicCard>

        {/* ── Topic 10: Adding Advanced Strategies (After 6 Months) ── */}
        <TopicCard
          id="d10-advanced-strategies"
          title="Adding Advanced Strategies (After 6 Months)"
          icon={<Zap />}
          variant="default"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            These strategies are for <strong>after</strong> you&apos;ve proven profitability with basic strategies. They require more experience, capital, and discipline.
          </p>

          <ComparisonTable
            headers={['Strategy', 'Complexity', 'Requirements']}
            rows={[
              ['Mean Reversion', '⭐⭐⭐', 'Understanding of Bollinger Bands, RSI divergence, range identification'],
              ['Breakout Trading', '⭐⭐⭐', 'Volume analysis, S/R identification, false breakout filtering'],
              ['DeFi Yield', '⭐⭐⭐⭐', 'Understanding of AMMs, impermanent loss, smart contract risk'],
              ['Options Trading', '⭐⭐⭐⭐⭐', 'Greeks understanding, volatility analysis, premium decay'],
              ['Algorithmic Trading', '⭐⭐⭐⭐⭐', 'Programming skills (Python), API integration, backtesting frameworks'],
              ['Cross-Exchange Arbitrage', '⭐⭐⭐⭐', 'Multi-exchange accounts, fast execution, capital on multiple platforms'],
            ]}
          />

          <div className="mt-4 rounded-lg border-l-4 border-l-red-500 bg-red-50 px-4 py-3">
            <p className="text-sm font-bold text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              RULE: Do NOT attempt any advanced strategy until basic strategies have been profitable for 6 consecutive months.
            </p>
            <p className="text-xs text-red-700 mt-1">
              Prematurely adding complexity is the #1 way to blow up your account. Master the basics first.
            </p>
          </div>
        </TopicCard>

        {/* ── Topic 11: Scaling Your Trading Business ── */}
        <TopicCard
          id="d10-scaling"
          title="Scaling Your Trading Business"
          icon={<DollarSign />}
          variant="default"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            As you prove consistent profitability, you can gradually scale. But scale <strong>process first, capital second</strong>.
          </p>

          {/* Capital Growth Path SVG */}
          <CapitalGrowthPath />

          {/* Growth phases detail */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            {[
              {
                phase: 'Phase 1',
                range: '$500–$2K',
                time: 'Months 1–6',
                focus: 'Survive & Learn',
                rules: ['Max 0.5-1% risk', '1-2 strategies only', 'Journal every trade', 'Focus on process metrics'],
                color: 'border-emerald-400 bg-emerald-50',
                titleColor: 'text-emerald-800'
              },
              {
                phase: 'Phase 2',
                range: '$2K–$10K',
                time: 'Months 6–18',
                focus: 'Build & Compound',
                rules: ['Max 1% risk', '2-3 strategies', 'Weekly reviews mandatory', 'Track equity curve'],
                color: 'border-blue-400 bg-blue-50',
                titleColor: 'text-blue-800'
              },
              {
                phase: 'Phase 3',
                range: '$10K+',
                time: 'Month 18+',
                focus: 'Scale & Optimize',
                rules: ['Risk based on edge size', 'Advanced strategies OK', 'Quarterly deep reviews', 'Consider partial automation'],
                color: 'border-amber-400 bg-amber-50',
                titleColor: 'text-amber-800'
              },
            ].map((phase) => (
              <div key={phase.phase} className={`rounded-lg border ${phase.color} p-4`}>
                <p className={`text-sm font-bold ${phase.titleColor}`}>{phase.phase}: {phase.range}</p>
                <p className="text-xs text-slate-500 mb-2">{phase.time} · {phase.focus}</p>
                <ul className="space-y-1">
                  {phase.rules.map((rule, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-slate-400" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg border-l-4 border-l-red-500 bg-red-50 px-4 py-3">
            <p className="text-sm font-bold text-red-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              WARNING: NEVER deposit more than you can afford to lose.
            </p>
            <p className="text-xs text-red-700 mt-1">
              No matter how good your results, crypto is volatile. Your trading capital should be money you can lose entirely without affecting your life.
            </p>
          </div>
        </TopicCard>

        {/* ── Topic 12: Common Resources for Ongoing Learning ── */}
        <TopicCard
          id="d10-resources"
          title="Common Resources for Ongoing Learning"
          icon={<Library />}
          variant="default"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Your education doesn&apos;t end with this bootcamp. These are the best resources to continue building your knowledge.
          </p>

          <ComparisonTable
            headers={['Category', 'Recommendations', 'Purpose']}
            rows={[
              ['Books', '"Technical Analysis of Financial Markets" by Murphy, "Trading in the Zone" by Mark Douglas', 'Deepen theory & psychology'],
              ['On-Chain Data', 'Glassnode, CryptoQuant, Santiment, IntoTheBlock', 'Understand whale behavior & market health'],
              ['Community', 'r/BitcoinMarkets, TradingView community, Discord groups', 'Learn from other traders, share analysis'],
              ['News', 'CoinDesk, The Block, Decrypt, Cointelegraph', 'Stay updated on market-moving events'],
              ['Charts', 'TradingView (essential), CoinGlass (funding/liquidations)', 'Technical analysis & market data'],
              ['Courses', 'BabyPips (forex basics transfer), Investopedia, free YouTube channels', 'Continue structured learning'],
            ]}
          />

          <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
            <p className="text-sm text-amber-800 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span><strong>Study Rule:</strong> Spend 30 minutes per day on learning — even on non-trading days. Read one chapter, watch one video, or analyze one chart. Consistency beats intensity.</span>
            </p>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
