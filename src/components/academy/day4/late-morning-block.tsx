'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  CloudSun,
  PieChart,
  AlertTriangle,
  TrendingDown,
  Shield,
  BarChart3,
  Layers,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'

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
/*  SVG: Diversification Correlation Diagram                   */
/* ─────────────────────────────────────────────────────────── */
function DiversificationDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 500 320"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Diversification Correlation Diagram showing poor vs true diversification"
      >
        <defs>
          <linearGradient id="correlGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="250" y="24" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="bold" letterSpacing="1">
          DIVERSIFICATION: CORRELATION MATTERS
        </text>

        {/* Left side: FAKE diversification */}
        <rect x="15" y="45" width="225" height="230" rx="10" fill="white" stroke="#ef4444" strokeWidth="2" />
        <rect x="15" y="45" width="225" height="30" rx="10" fill="#fef2f2" />
        <text x="127" y="65" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="bold">
          FAKE DIVERSIFICATION
        </text>

        {/* 5 altcoins moving together */}
        {['DOGE', 'SHIB', 'PEPE', 'FLOKI', 'BONK'].map((coin, i) => {
          const y = 100 + i * 32
          return (
            <React.Fragment key={coin}>
              <rect x="30" y={y - 10} width="65" height="20" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
              <text x="62" y={y + 4} textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">{coin}</text>
              {/* All arrows pointing same direction (down) */}
              <line x1="110" y1={y} x2="145" y2={y + 8} stroke="#ef4444" strokeWidth="1.5" opacity="0.7" />
              <polygon points="143,5 148,{y + 12} 140,{y + 12}" fill="#ef4444" opacity="0.7" />
            </React.Fragment>
          )
        })}

        <text x="127" y="265" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">
          All move together = No diversification
        </text>

        {/* Right side: TRUE diversification */}
        <rect x="260" y="45" width="225" height="230" rx="10" fill="white" stroke="#22c55e" strokeWidth="2" />
        <rect x="260" y="45" width="225" height="30" rx="10" fill="#f0fdf4" />
        <text x="372" y="65" textAnchor="middle" fill="#16a34a" fontSize="11" fontWeight="bold">
          TRUE DIVERSIFICATION
        </text>

        {/* Different asset categories */}
        {[
          { name: 'BTC', label: 'Store of Value', color: '#f97316' },
          { name: 'ETH', label: 'Smart Contracts', color: '#6366f1' },
          { name: 'SOL', label: 'High-Perf L1', color: '#8b5cf6' },
          { name: 'LINK', label: 'Oracle', color: '#3b82f6' },
          { name: 'USDT', label: 'Stablecoin', color: '#22c55e' },
        ].map((asset, i) => {
          const y = 100 + i * 32
          const arrowDir = i < 2 ? -8 : i === 4 ? 0 : 8
          return (
            <React.Fragment key={asset.name}>
              <rect x="275" y={y - 10} width="65" height="20" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
              <text x="307" y={y + 4} textAnchor="middle" fill={asset.color} fontSize="9" fontWeight="bold">{asset.name}</text>
              <line x1="355" y1={y} x2="395" y2={y + arrowDir} stroke={asset.color} strokeWidth="1.5" opacity="0.7" />
              <text x="405" y={y + 4} textAnchor="start" fill="#64748b" fontSize="7">{asset.label}</text>
            </React.Fragment>
          )
        })}

        <text x="372" y="265" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">
          Different sectors = True diversification
        </text>

        {/* Correlation scale */}
        <rect x="80" y="290" width="340" height="20" rx="4" fill="url(#correlGrad)" opacity="0.3" />
        <text x="80" y="304" fill="#22c55e" fontSize="8" fontWeight="bold">Low Correlation (Good)</text>
        <text x="340" y="304" fill="#ef4444" fontSize="8" fontWeight="bold">High Correlation (Bad)</text>
      </svg>
      <SvgCaption>Correlation is what matters — not the number of coins you hold</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day4LateMorningBlock() {
  return (
    <section id="d4-late-morning" aria-labelledby="d4-late-morning-heading">
      <SectionDivider
        icon={<CloudSun />}
        title="LATE MORNING BLOCK — HOURS 3-4: PORTFOLIO RISK & DIVERSIFICATION"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 1: Correlation & Diversification                 */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-correlation-diversification"
          title="Correlation & Diversification — Why Holding 5 Altcoins Isn&apos;t Diversified"
          icon={<PieChart className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Many beginners think holding 5 different altcoins means they&apos;re diversified. They&apos;re not. If
              all 5 coins move in the same direction at the same time (which most altcoins do), you haven&apos;t
              diversified — you&apos;ve just placed 5 bets on the same outcome. <strong className="text-slate-900">True
              diversification means holding assets that are NOT highly correlated</strong>.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong>Correlation</strong> measures how closely two assets move together. A correlation of{' '}
              <strong>+1.0</strong> means they move in perfect lockstep. A correlation of{' '}
              <strong>0</strong> means they move independently. A correlation of{' '}
              <strong>-1.0</strong> means they move in opposite directions.
            </p>

            {/* SVG Diagram */}
            <DiversificationDiagram />

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-orange-700 sm:text-base">
                Crypto Correlation Reality Check
              </h4>
              <ComparisonTable
                headers={['Pair', 'Correlation', 'Diversified?', 'Why']}
                rows={[
                  ['BTC & ETH', '0.85–0.95', 'Partially', 'ETH often leads but follows BTC trend'],
                  ['BTC & DOGE', '0.70–0.85', 'Barely', 'Meme coins amplify BTC moves'],
                  ['BTC & SOL', '0.60–0.80', 'Somewhat', 'L1s have independent catalysts'],
                  ['BTC & LINK', '0.50–0.70', 'Better', 'Oracle sector has unique drivers'],
                  ['BTC & USDT', '0.00', 'Yes', 'Stablecoin doesn\'t move with BTC'],
                  ['BTC & Gold', '0.10–0.30', 'Yes', 'Different asset class entirely'],
                ]}
              />
            </div>

            <AnalogyBox title="Diversification Is Like an Umbrella">
              <p className="text-sm sm:text-base">
                If you carry 5 umbrellas, you&apos;re protected against rain — but not against sun, wind, or cold.
                True preparation means having an umbrella AND sunscreen AND a jacket. Each protects against a
                different risk. In crypto, that means mixing different sectors, market caps, and even some
                stablecoins — not just holding 5 versions of the same bet.
              </p>
            </AnalogyBox>

            <KeyTakeaway>
              Diversification is about correlation, not quantity. Holding 5 meme coins is ONE bet.
              Holding BTC, ETH, a stablecoin, and cash is FOUR bets.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 2: Portfolio Allocation Models                    */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-allocation-models"
          title="Portfolio Allocation Models"
          icon={<BarChart3 className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              How you divide your capital across asset types is your <strong className="text-slate-900">portfolio
              allocation strategy</strong>. There&apos;s no one-size-fits-all — your allocation should match your
              risk tolerance, experience level, and market conditions. Here are three models for MEXC traders:
            </p>

            {/* Conservative Model */}
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-5 w-5 text-green-600" />
                <h4 className="text-sm font-bold text-green-800 sm:text-base">Conservative Model (70/20/10)</h4>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-white p-3 border border-green-200">
                  <p className="text-lg font-bold text-green-700">70%</p>
                  <p className="text-sm font-semibold text-slate-800">BTC + Stablecoins</p>
                  <p className="text-xs text-slate-500">Core holdings, low volatility</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-green-200">
                  <p className="text-lg font-bold text-amber-700">20%</p>
                  <p className="text-sm font-semibold text-slate-800">Major Alts (ETH, SOL)</p>
                  <p className="text-xs text-slate-500">Established projects</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-green-200">
                  <p className="text-lg font-bold text-red-700">10%</p>
                  <p className="text-sm font-semibold text-slate-800">Cash/USDT Reserve</p>
                  <p className="text-xs text-slate-500">For opportunities</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-green-800">
                <strong>Best for:</strong> Beginners, risk-averse traders, or bear market conditions.
              </p>
            </div>

            {/* Moderate Model */}
            <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="h-5 w-5 text-amber-600" />
                <h4 className="text-sm font-bold text-amber-800 sm:text-base">Moderate Model (50/30/20)</h4>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-white p-3 border border-amber-200">
                  <p className="text-lg font-bold text-green-700">50%</p>
                  <p className="text-sm font-semibold text-slate-800">BTC + ETH</p>
                  <p className="text-xs text-slate-500">Core position, medium risk</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-amber-200">
                  <p className="text-lg font-bold text-amber-700">30%</p>
                  <p className="text-sm font-semibold text-slate-800">Mid/Small Cap Alts</p>
                  <p className="text-xs text-slate-500">Growth potential, higher risk</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-amber-200">
                  <p className="text-lg font-bold text-red-700">20%</p>
                  <p className="text-sm font-semibold text-slate-800">Cash/USDT Reserve</p>
                  <p className="text-xs text-slate-500">Dry powder for dips</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-amber-800">
                <strong>Best for:</strong> Intermediate traders with 3–6 months experience, sideways market conditions.
              </p>
            </div>

            {/* Aggressive Model */}
            <div className="rounded-lg border border-red-200 bg-red-50/50 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <h4 className="text-sm font-bold text-red-800 sm:text-base">Aggressive Model (30/40/30)</h4>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-white p-3 border border-red-200">
                  <p className="text-lg font-bold text-green-700">30%</p>
                  <p className="text-sm font-semibold text-slate-800">BTC + ETH</p>
                  <p className="text-xs text-slate-500">Reduced core position</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-red-200">
                  <p className="text-lg font-bold text-red-700">40%</p>
                  <p className="text-sm font-semibold text-slate-800">Small/Micro Cap Alts</p>
                  <p className="text-xs text-slate-500">High risk, high reward</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-red-200">
                  <p className="text-lg font-bold text-amber-700">30%</p>
                  <p className="text-sm font-semibold text-slate-800">Cash/USDT + Staking</p>
                  <p className="text-xs text-slate-500">Reserve + passive income</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-red-800">
                <strong>Best for:</strong> Experienced traders only. High drawdowns possible. Not recommended for accounts under $10,000.
              </p>
            </div>

            <ComparisonTable
              headers={['Model', 'Max Drawdown', 'Recovery Time', 'Stress Level', 'Recommended XP']}
              rows={[
                ['Conservative 70/20/10', '10–20%', '1–3 months', 'Low', '0–3 months'],
                ['Moderate 50/30/20', '20–35%', '3–6 months', 'Medium', '3–6 months'],
                ['Aggressive 30/40/30', '35–60%', '6–18 months', 'High', '6+ months'],
              ]}
            />
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 3: The Risk of Overexposure                       */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-overexposure"
          title="The Risk of Overexposure — When Concentration Kills"
          icon={<AlertTriangle className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong className="text-red-700">Overexposure</strong> is when too much of your portfolio is in a
              single asset, sector, or trade. It&apos;s the #1 portfolio killer — not because the trade was wrong,
              but because the position was too large relative to your account. One bad trade shouldn&apos;t end
              your trading career.
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-red-700 sm:text-base">
                Overexposure Red Flags
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <p className="text-sm text-slate-700"><strong>More than 30% in a single coin</strong> — One 50% drop wipes 15% of your portfolio</p>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <p className="text-sm text-slate-700"><strong>More than 50% in one sector</strong> — e.g., all L1 tokens, all meme coins, all DeFi</p>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <p className="text-sm text-slate-700"><strong>Using leverage on concentrated positions</strong> — Leverage amplifies the overexposure</p>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3">
                  <span className="text-red-500 mt-0.5">✗</span>
                  <p className="text-sm text-slate-700"><strong>Zero cash reserves</strong> — No dry powder for opportunities or emergencies</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                <div>
                  <p className="text-sm font-bold text-red-900 sm:text-base">The Leverage Overexposure Trap</p>
                  <p className="mt-1 text-sm text-red-800">
                    If you put 50% of your account in one coin AND use 5x leverage, your effective exposure is{' '}
                    <strong>250% of your account</strong> on that single position. A 20% drop in the coin means a{' '}
                    <strong className="text-red-700">100% loss of your entire account</strong>. This is how beginners
                    get liquidated overnight. On MEXC, always check your total exposure before opening a new position.
                  </p>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              The golden rule of position sizing: no single position should risk more than 1% of your account,
              and no single asset should exceed 20% of your total portfolio. Diversification isn&apos;t just about
              spreading risk — it&apos;s about ensuring no single event can destroy you.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 4: Max Drawdown Tolerance                         */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-max-drawdown"
          title="Drawing the Line: Max Drawdown Tolerance"
          icon={<TrendingDown className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong className="text-slate-900">Maximum drawdown</strong> is the largest peak-to-trough decline in
              your portfolio. Before you start trading, you need to define your <strong>max drawdown
              tolerance</strong> — the point at which you stop trading entirely and reassess. This is your circuit
              breaker.
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-orange-700 sm:text-base">
                Setting Your Drawdown Limits
              </h4>
              <ComparisonTable
                headers={['Level', 'Drawdown', 'Action', 'Recovery Difficulty']}
                rows={[
                  ['Green Zone', '0–10%', 'Normal trading continues', 'Easy — days to weeks'],
                  ['Yellow Zone', '10–20%', 'Reduce position sizes by 50%', 'Moderate — weeks to months'],
                  ['Orange Zone', '20–30%', 'Stop opening new positions', 'Hard — months'],
                  ['Red Zone', '30%+', 'Close all positions, stop trading', 'Very Hard — 6–18 months'],
                ]}
              />
            </div>

            <div className="rounded-lg border border-orange-200 bg-orange-50/50 px-4 py-3 sm:px-5 sm:py-4">
              <h4 className="mb-2 text-sm font-bold text-orange-800 sm:text-base">
                Your Drawdown Action Plan
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-slate-700">
                  <strong>Step 1:</strong> Before your first trade, write down your max drawdown number. For beginners,
                  this should be <strong>15–20%</strong>.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Step 2:</strong> Track your portfolio value daily. When you hit 50% of your max drawdown
                  (e.g., 7.5–10%), reduce position sizes.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Step 3:</strong> If you hit your max drawdown, <strong>stop trading immediately</strong>.
                  Don&apos;t try to &ldquo;trade your way back.&rdquo; Take at least a week off to review your
                  strategy.
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Step 4:</strong> Return with smaller positions and a revised plan. There&apos;s no shame in
                  resetting — only in not learning from the loss.
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              On MEXC, you can use the <strong>Portfolio Overview</strong> feature to track your total account
              value and set alerts for when it drops below certain thresholds. This automation helps you stick
              to your plan when emotions try to override your logic.
            </p>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
