'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  Shield,
  Calculator,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Target,
  Ruler,
  ArrowRight,
  Scale,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'
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
/*  SVG: Position Sizing Calculator Infographic                */
/* ─────────────────────────────────────────────────────────── */
function PositionSizingInfographic() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 500 340"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Position Sizing Formula Infographic showing how to calculate position size"
      >
        <defs>
          <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="250" y="28" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold" letterSpacing="1">
          THE 1% RULE — POSITION SIZING FORMULA
        </text>

        {/* Step 1: Account Size */}
        <rect x="20" y="55" width="140" height="80" rx="10" fill="white" stroke="#f97316" strokeWidth="2" />
        <circle cx="55" cy="80" r="14" fill="url(#orangeGrad)" />
        <text x="55" y="84" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">1</text>
        <text x="90" y="78" textAnchor="start" fill="#1e293b" fontSize="10" fontWeight="bold">Account Size</text>
        <text x="90" y="94" textAnchor="start" fill="#64748b" fontSize="9">Total capital</text>
        <text x="90" y="120" textAnchor="start" fill="#f97316" fontSize="16" fontWeight="bold">$10,000</text>

        {/* Arrow 1 */}
        <line x1="160" y1="95" x2="185" y2="95" stroke="#f97316" strokeWidth="2" />
        <polygon points="185,91 193,95 185,99" fill="#f97316" />

        {/* Step 2: Risk Amount (1%) */}
        <rect x="195" y="55" width="120" height="80" rx="10" fill="white" stroke="#f97316" strokeWidth="2" />
        <circle cx="225" cy="80" r="14" fill="url(#orangeGrad)" />
        <text x="225" y="84" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">2</text>
        <text x="255" y="78" textAnchor="start" fill="#1e293b" fontSize="10" fontWeight="bold">Risk 1%</text>
        <text x="255" y="94" textAnchor="start" fill="#64748b" fontSize="9">Max loss per trade</text>
        <text x="255" y="120" textAnchor="start" fill="#f97316" fontSize="16" fontWeight="bold">$100</text>

        {/* Arrow 2 */}
        <line x1="315" y1="95" x2="340" y2="95" stroke="#f97316" strokeWidth="2" />
        <polygon points="340,91 348,95 340,99" fill="#f97316" />

        {/* Step 3: Stop Loss Distance */}
        <rect x="350" y="55" width="130" height="80" rx="10" fill="white" stroke="#f97316" strokeWidth="2" />
        <circle cx="380" cy="80" r="14" fill="url(#orangeGrad)" />
        <text x="380" y="84" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">3</text>
        <text x="415" y="78" textAnchor="start" fill="#1e293b" fontSize="10" fontWeight="bold">Stop Loss</text>
        <text x="415" y="94" textAnchor="start" fill="#64748b" fontSize="9">% from entry</text>
        <text x="415" y="120" textAnchor="start" fill="#f97316" fontSize="16" fontWeight="bold">5%</text>

        {/* Arrow down to formula */}
        <line x1="250" y1="135" x2="250" y2="165" stroke="#f97316" strokeWidth="2" />
        <polygon points="246,165 250,173 254,165" fill="#f97316" />

        {/* Formula box */}
        <rect x="60" y="175" width="380" height="55" rx="12" fill="url(#orangeGrad)" />
        <text x="250" y="200" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">FORMULA</text>
        <text x="250" y="220" textAnchor="middle" fill="white" fontSize="11">
          Position Size = Risk Amount ÷ Stop Loss %
        </text>

        {/* Arrow down to result */}
        <line x1="250" y1="230" x2="250" y2="255" stroke="#22c55e" strokeWidth="2" />
        <polygon points="246,255 250,263 254,255" fill="#22c55e" />

        {/* Result box */}
        <rect x="100" y="265" width="300" height="55" rx="12" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
        <text x="250" y="290" textAnchor="middle" fill="#16a34a" fontSize="12" fontWeight="bold">RESULT</text>
        <text x="250" y="308" textAnchor="middle" fill="#15803d" fontSize="14" fontWeight="bold">
          $100 ÷ 5% = $2,000 Position Size
        </text>

        {/* Bottom note */}
        <text x="250" y="335" textAnchor="middle" fill="#94a3b8" fontSize="8">
          You risk $100 (1% of $10,000) by opening a $2,000 position with a 5% stop loss
        </text>
      </svg>
      <SvgCaption>Position Sizing Calculator — The 1% Rule in action</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Risk-Reward Ratio Comparison                          */
/* ─────────────────────────────────────────────────────────── */
function RiskRewardSvg() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 500 310"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Risk-Reward Ratio comparison showing 1:1, 1:2, and 1:3 scenarios"
      >
        {/* Title */}
        <text x="250" y="24" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="bold" letterSpacing="1">
          RISK-REWARD RATIO COMPARISON
        </text>

        {/* === 1:1 RRR === */}
        <rect x="20" y="45" width="145" height="230" rx="10" fill="white" stroke="#ef4444" strokeWidth="1.5" />
        <text x="92" y="70" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="bold">1:1 RRR</text>

        {/* Entry line */}
        <line x1="35" y1="130" x2="150" y2="130" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="92" y="126" textAnchor="middle" fill="#64748b" fontSize="8">Entry: $100</text>

        {/* Stop loss zone (red) */}
        <rect x="40" y="130" width="105" height="40" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="92" y="155" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">-$10 (Risk)</text>
        <text x="92" y="168" textAnchor="middle" fill="#ef4444" fontSize="8">SL: $90</text>

        {/* Take profit zone (green) */}
        <rect x="40" y="90" width="105" height="40" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
        <text x="92" y="115" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">+$10 (Reward)</text>
        <text x="92" y="80" textAnchor="middle" fill="#22c55e" fontSize="8">TP: $110</text>

        {/* Arrow indicators */}
        <line x1="55" y1="130" x2="55" y2="170" stroke="#ef4444" strokeWidth="2" />
        <polygon points="51,170 55,178 59,170" fill="#ef4444" />
        <line x1="55" y1="130" x2="55" y2="90" stroke="#22c55e" strokeWidth="2" />
        <polygon points="51,90 55,82 59,90" fill="#22c55e" />

        {/* Verdict */}
        <rect x="35" y="230" width="115" height="35" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="92" y="245" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">NEED 50%+ WIN RATE</text>
        <text x="92" y="258" textAnchor="middle" fill="#ef4444" fontSize="7">High risk, low reward</text>

        {/* === 1:2 RRR === */}
        <rect x="178" y="45" width="145" height="230" rx="10" fill="white" stroke="#f97316" strokeWidth="2" />
        <text x="250" y="70" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="bold">1:2 RRR ★</text>

        {/* Entry line */}
        <line x1="193" y1="155" x2="308" y2="155" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="250" y="151" textAnchor="middle" fill="#64748b" fontSize="8">Entry: $100</text>

        {/* Stop loss zone (red) */}
        <rect x="198" y="155" width="105" height="40" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="250" y="180" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">-$10 (Risk)</text>
        <text x="250" y="193" textAnchor="middle" fill="#ef4444" fontSize="8">SL: $90</text>

        {/* Take profit zone (green) */}
        <rect x="198" y="75" width="105" height="80" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
        <text x="250" y="115" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">+$20 (Reward)</text>
        <text x="250" y="65" textAnchor="middle" fill="#22c55e" fontSize="8">TP: $120</text>

        {/* Arrow indicators */}
        <line x1="213" y1="155" x2="213" y2="195" stroke="#ef4444" strokeWidth="2" />
        <polygon points="209,195 213,203 217,195" fill="#ef4444" />
        <line x1="213" y1="155" x2="213" y2="75" stroke="#22c55e" strokeWidth="2" />
        <polygon points="209,75 213,67 217,75" fill="#22c55e" />

        {/* Verdict */}
        <rect x="193" y="230" width="115" height="35" rx="6" fill="#fff7ed" stroke="#fdba74" strokeWidth="1.5" />
        <text x="250" y="245" textAnchor="middle" fill="#ea580c" fontSize="8" fontWeight="bold">NEED 34%+ WIN RATE</text>
        <text x="250" y="258" textAnchor="middle" fill="#f97316" fontSize="7">Recommended minimum</text>

        {/* === 1:3 RRR === */}
        <rect x="335" y="45" width="145" height="230" rx="10" fill="white" stroke="#22c55e" strokeWidth="1.5" />
        <text x="407" y="70" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="bold">1:3 RRR</text>

        {/* Entry line */}
        <line x1="350" y1="180" x2="465" y2="180" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="407" y="176" textAnchor="middle" fill="#64748b" fontSize="8">Entry: $100</text>

        {/* Stop loss zone (red) */}
        <rect x="355" y="180" width="105" height="40" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="407" y="205" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">-$10 (Risk)</text>
        <text x="407" y="218" textAnchor="middle" fill="#ef4444" fontSize="8">SL: $90</text>

        {/* Take profit zone (green) */}
        <rect x="355" y="60" width="105" height="120" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
        <text x="407" y="120" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">+$30 (Reward)</text>
        <text x="407" y="50" textAnchor="middle" fill="#22c55e" fontSize="8">TP: $130</text>

        {/* Arrow indicators */}
        <line x1="370" y1="180" x2="370" y2="220" stroke="#ef4444" strokeWidth="2" />
        <polygon points="366,220 370,228 374,220" fill="#ef4444" />
        <line x1="370" y1="180" x2="370" y2="60" stroke="#22c55e" strokeWidth="2" />
        <polygon points="366,60 370,52 374,60" fill="#22c55e" />

        {/* Verdict */}
        <rect x="350" y="230" width="115" height="35" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
        <text x="407" y="245" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">NEED 25%+ WIN RATE</text>
        <text x="407" y="258" textAnchor="middle" fill="#22c55e" fontSize="7">Ideal for professionals</text>

        {/* Bottom summary */}
        <text x="250" y="300" textAnchor="middle" fill="#64748b" fontSize="9">
          Higher RRR = Lower win rate needed to be profitable. Always aim for at least 1:2.
        </text>
      </svg>
      <SvgCaption>Risk-Reward Ratio — Higher RRR means you need fewer winning trades</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day4MorningBlock() {
  return (
    <section id="d4-morning" aria-labelledby="d4-morning-heading">
      <SectionDivider
        icon={<Sun />}
        title="MORNING BLOCK — HOURS 1-3: POSITION SIZING & CAPITAL PROTECTION"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 1: Why Risk Management Is #1                    */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-risk-number-one"
          title="Why Risk Management Is #1"
          icon={<Shield className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Ask any professional trader what separates winners from losers, and the answer is never &ldquo;better
              entries&rdquo; or &ldquo;smarter indicators.&rdquo; It&apos;s always the same:{' '}
              <strong className="text-slate-900">risk management</strong>. The best strategy in the world will destroy
              your account if you don&apos;t manage risk. Risk management isn&apos;t optional — it&apos;s the foundation
              every trade is built on.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Consider this: if you lose <strong className="text-red-600">50%</strong> of your capital, you need a{' '}
              <strong className="text-green-600">100% gain</strong> just to break even. If you lose{' '}
              <strong className="text-red-600">90%</strong>, you need a <strong className="text-green-600">900% gain</strong>.
              The math of losses is asymmetric — and it&apos;s working against you every time you ignore risk.
            </p>

            {/* Loss Recovery Table */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-red-700 sm:text-base">
                The Brutal Math of Losses
              </h4>
              <ComparisonTable
                headers={['Loss', 'Recovery Needed', 'Difficulty']}
                rows={[
                  ['10%', '11.1%', 'Easy'],
                  ['25%', '33.3%', 'Moderate'],
                  ['50%', '100%', 'Very Hard'],
                  ['75%', '300%', 'Nearly Impossible'],
                  ['90%', '900%', 'Game Over'],
                ]}
              />
            </div>

            <AnalogyBox title="Risk Management Is Like a Seatbelt">
              <p className="text-sm sm:text-base">
                You don&apos;t wear a seatbelt because you expect to crash — you wear it because the consequences of
                not wearing one are catastrophic. Risk management works the same way. You don&apos;t use stop losses
                because you expect to be wrong — you use them because when you ARE wrong (and you will be), the
                consequences without them are account-destroying. A seatbelt doesn&apos;t slow you down; it lets you
                drive confidently. Risk management doesn&apos;t limit your profits; it ensures you survive to take them.
              </p>
            </AnalogyBox>

            <KeyTakeaway>
              Risk management is not about avoiding losses — it&apos;s about controlling them so they never take you
              out of the game. Protect your capital first, and the profits will follow.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 2: The 1% Rule & Position Sizing Formula        */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-one-percent-rule"
          title="The 1% Rule & Position Sizing Formula"
          icon={<Calculator className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The <strong className="text-slate-900">1% Rule</strong> is the single most important rule in trading:{' '}
              <strong>never risk more than 1% of your total trading capital on a single trade</strong>. This doesn&apos;t
              mean your position size is 1% — it means your maximum loss on any single trade is 1% of your account.
            </p>

            <div className="rounded-lg border border-orange-200 bg-orange-50/50 px-4 py-3 sm:px-5 sm:py-4">
              <h4 className="mb-2 text-sm font-bold text-orange-800 sm:text-base">
                The Position Sizing Formula
              </h4>
              <p className="text-sm sm:text-base font-mono text-slate-800 bg-white rounded-lg px-4 py-3 border border-slate-200">
                Position Size = (Account × Risk %) ÷ Stop Loss %
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Where <strong>Risk %</strong> is your maximum tolerable loss (usually 1%), and{' '}
                <strong>Stop Loss %</strong> is the distance from your entry to your stop loss.
              </p>
            </div>

            {/* SVG Infographic */}
            <PositionSizingInfographic />

            {/* Example scenarios */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-orange-700 sm:text-base">
                Position Sizing Examples
              </h4>
              <ComparisonTable
                headers={['Account', 'Risk (1%)', 'Stop Loss', 'Position Size', 'Max Loss']}
                rows={[
                  ['$1,000', '$10', '2%', '$500', '$10'],
                  ['$5,000', '$50', '5%', '$1,000', '$50'],
                  ['$10,000', '$100', '3%', '$3,333', '$100'],
                  ['$10,000', '$100', '5%', '$2,000', '$100'],
                  ['$50,000', '$500', '4%', '$12,500', '$500'],
                ]}
              />
            </div>

            <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                <p className="text-sm font-semibold leading-relaxed text-amber-900 sm:text-base">
                  Notice: The position size changes with the stop loss distance, but the max loss stays the same.
                  That&apos;s the point — you control your risk, not your position size.
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              For beginners on MEXC, we recommend <strong>risking only 0.5–1%</strong> per trade. As you gain
              experience and prove consistency over 100+ trades, you may gradually increase to 1.5–2%.{' '}
              <strong className="text-red-700">Never exceed 2% per trade</strong>, regardless of how confident you are.
            </p>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 3: Risk-Reward Ratio (RRR)                      */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-risk-reward"
          title="Risk-Reward Ratio (RRR)"
          icon={<Scale className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The <strong className="text-slate-900">Risk-Reward Ratio</strong> (RRR) compares how much you stand to
              lose versus how much you stand to gain on a trade. A 1:2 RRR means you&apos;re risking $1 to make $2.
              This ratio determines your <strong>break-even win rate</strong> — the minimum percentage of winning trades
              needed to be profitable.
            </p>

            {/* SVG: Risk-Reward Comparison */}
            <RiskRewardSvg />

            {/* Win rate table */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-orange-700 sm:text-base">
                Break-Even Win Rate by RRR
              </h4>
              <ComparisonTable
                headers={['RRR', 'Risk', 'Reward', 'Break-Even Win Rate', 'Rating']}
                rows={[
                  ['1:1', '$100', '$100', '50.0%', 'Poor'],
                  ['1:1.5', '$100', '$150', '40.0%', 'Fair'],
                  ['1:2', '$100', '$200', '33.3%', 'Good ★'],
                  ['1:3', '$100', '$300', '25.0%', 'Excellent'],
                  ['1:5', '$100', '$500', '16.7%', 'Ideal (Hard to Find)'],
                ]}
                highlightColumn={3}
              />
            </div>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong>Key insight:</strong> With a 1:2 RRR, you only need to win{' '}
              <strong className="text-green-600">1 out of 3 trades</strong> to break even. Win more than 33%, and
              you&apos;re profitable. This is why professional traders always aim for at least 1:2 — it gives them a
              mathematical edge even when they&apos;re wrong more often than they&apos;re right.
            </p>

            <KeyTakeaway>
              Never enter a trade with less than a 1:2 risk-reward ratio. If the potential profit doesn&apos;t
              exceed the potential loss by at least 2x, the trade isn&apos;t worth taking. Discipline in RRR is what
              separates profitable traders from gamblers.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 4: Stop Loss Essentials                          */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-stop-loss"
          title="Stop Loss Essentials — Your Safety Net"
          icon={<Target className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A <strong className="text-slate-900">stop loss</strong> is a pre-set order to close your position at a
              specific price to limit your loss. It&apos;s non-negotiable — every trade you enter MUST have a stop
              loss. No exceptions. A trade without a stop loss isn&apos;t a trade; it&apos;s an unlimited risk exposure.
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-red-700 sm:text-base">
                The 4 Types of Stop Losses
              </h4>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Fixed Stop Loss */}
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                      <span className="text-sm font-bold text-red-600">1</span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">Fixed Stop Loss</h5>
                  </div>
                  <p className="text-sm text-slate-600">
                    A set percentage or dollar amount below your entry. Example: &ldquo;If I buy at $100, my stop
                    is at $95 (5% loss).&rdquo; Simple and easy to calculate. Best for beginners.
                  </p>
                </div>

                {/* Trailing Stop Loss */}
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                      <span className="text-sm font-bold text-amber-600">2</span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">Trailing Stop Loss</h5>
                  </div>
                  <p className="text-sm text-slate-600">
                    Moves up with the price but never moves down. Example: &ldquo;Trail by 5%.&rdquo; If price goes
                    from $100 to $120, your stop moves from $95 to $114. Locks in profits as the trade moves in your favor.
                  </p>
                </div>

                {/* Technical Stop Loss */}
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-sm font-bold text-blue-600">3</span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">Technical Stop Loss</h5>
                  </div>
                  <p className="text-sm text-slate-600">
                    Placed at a key technical level — below support, below a moving average, or below a swing low.
                    Example: &ldquo;Stop below the 200 EMA at $92.&rdquo; Market-logic based, but requires chart analysis skills.
                  </p>
                </div>

                {/* Time-Based Stop Loss */}
                <div className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <span className="text-sm font-bold text-green-600">4</span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">Time-Based Stop Loss</h5>
                  </div>
                  <p className="text-sm text-slate-600">
                    Close the position if it hasn&apos;t moved in your favor within a set time. Example: &ldquo;If BTC
                    hasn&apos;t broken above resistance in 48 hours, exit.&rdquo; Prevents capital from being tied up in dead trades.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">
                Stop Loss Comparison
              </h4>
              <ComparisonTable
                headers={['Type', 'Best For', 'Difficulty', 'Flexibility', 'MEXC Support']}
                rows={[
                  ['Fixed', 'Beginners', 'Easy', 'Low', 'Yes'],
                  ['Trailing', 'Trending markets', 'Medium', 'High', 'Yes'],
                  ['Technical', 'Experienced traders', 'Hard', 'Medium', 'Manual'],
                  ['Time-Based', 'Swing trades', 'Medium', 'Medium', 'Manual'],
                ]}
              />
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                <div>
                  <p className="text-sm font-bold text-red-900 sm:text-base">The #1 Mistake: Moving Your Stop Loss</p>
                  <p className="mt-1 text-sm text-red-800">
                    When a trade goes against you, the temptation to &ldquo;just widen the stop a little&rdquo; is
                    overwhelming. Don&apos;t do it. Moving your stop loss turns a controlled loss into an uncontrolled
                    disaster. If your stop was placed correctly, it should stay where it is. If you find yourself
                    constantly moving stops, your entry strategy needs work — not your stop loss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 5: Practice Exercise                             */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-morning-exercise"
          title="Practice Exercise: Calculate Position Sizes"
          icon={<Ruler className="h-5 w-5" />}
          variant="success"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Use the Position Sizing Formula to solve each scenario. Remember:{' '}
              <strong>Position Size = (Account × Risk %) ÷ Stop Loss %</strong>. Check each answer after calculating.
            </p>

            <div className="rounded-xl border-2 border-green-300 bg-green-50/40 p-4 sm:p-5">
              <h4 className="mb-4 text-base font-bold text-green-800 sm:text-lg">
                CALCULATION PRACTICE
              </h4>
              <div className="space-y-2">
                <ChecklistItem>
                  <span>
                    <strong>Q1:</strong> Account = $5,000. Risk = 1%. Stop Loss = 4%. What is your position size?
                    <br />
                    <span className="text-green-600 text-xs mt-1 inline-block">Answer: ($5,000 × 0.01) ÷ 0.04 = $1,250</span>
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>Q2:</strong> Account = $20,000. Risk = 1%. Stop Loss = 2%. What is your position size?
                    <br />
                    <span className="text-green-600 text-xs mt-1 inline-block">Answer: ($20,000 × 0.01) ÷ 0.02 = $10,000</span>
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>Q3:</strong> Account = $3,000. Risk = 1%. Stop Loss = 8%. What is your position size? Is this a wide stop?
                    <br />
                    <span className="text-green-600 text-xs mt-1 inline-block">Answer: ($3,000 × 0.01) ÷ 0.08 = $375. Yes, 8% is very wide — consider reducing position or finding a better entry.</span>
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>Q4:</strong> Account = $10,000. You want to enter BTC at $60,000 with a stop at $57,600. What % is your stop loss? What is your position size at 1% risk?
                    <br />
                    <span className="text-green-600 text-xs mt-1 inline-block">Answer: SL % = ($60,000 - $57,600) ÷ $60,000 = 4%. Position = ($10,000 × 0.01) ÷ 0.04 = $2,500</span>
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>Q5:</strong> You risk 2% of a $10,000 account with a 3% stop loss. Your RRR is 1:3. If you win, how much profit do you make? If you lose, how much do you lose?
                    <br />
                    <span className="text-green-600 text-xs mt-1 inline-block">Answer: Risk = $200. Position = ($10,000 × 0.02) ÷ 0.03 = $6,667. Loss = $200. Profit at 1:3 RRR = $600.</span>
                  </span>
                </ChecklistItem>
              </div>
            </div>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
