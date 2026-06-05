'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  Zap,
  Flame,
  ShieldAlert,
  ArrowLeftRight,
  DollarSign,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { ScamCard } from '@/components/academy/scam-card'

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
/*  SVG: Leverage Amplification Diagram                        */
/* ─────────────────────────────────────────────────────────── */
function LeverageAmplificationSvg() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 500 340"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Leverage Amplification Diagram showing how 10x leverage amplifies both gains and losses"
      >
        <defs>
          <linearGradient id="gainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
          <linearGradient id="lossGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="250" y="24" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="bold" letterSpacing="1">
          10X LEVERAGE: DOUBLE-EDGED SWORD
        </text>
        <text x="250" y="40" textAnchor="middle" fill="#64748b" fontSize="9">
          BTC moves 5% → Your position moves 50%
        </text>

        {/* === NO LEVERAGE (1x) === */}
        <rect x="20" y="55" width="220" height="130" rx="10" fill="white" stroke="#94a3b8" strokeWidth="1.5" />
        <text x="130" y="78" textAnchor="middle" fill="#475569" fontSize="12" fontWeight="bold">NO LEVERAGE (1X)</text>
        <text x="130" y="93" textAnchor="middle" fill="#94a3b8" fontSize="8">$1,000 position</text>

        {/* +5% gain */}
        <rect x="35" y="105" width="95" height="65" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" />
        <text x="82" y="125" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">BTC +5%</text>
        <text x="82" y="145" textAnchor="middle" fill="#22c55e" fontSize="18" fontWeight="bold">+$50</text>
        <text x="82" y="162" textAnchor="middle" fill="#64748b" fontSize="8">Total: $1,050</text>

        {/* -5% loss */}
        <rect x="140" y="105" width="95" height="65" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
        <text x="187" y="125" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">BTC -5%</text>
        <text x="187" y="145" textAnchor="middle" fill="#ef4444" fontSize="18" fontWeight="bold">-$50</text>
        <text x="187" y="162" textAnchor="middle" fill="#64748b" fontSize="8">Total: $950</text>

        {/* Verdict */}
        <text x="130" y="180" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">Manageable — Easy to recover</text>

        {/* === 10X LEVERAGE === */}
        <rect x="260" y="55" width="220" height="130" rx="10" fill="white" stroke="#ef4444" strokeWidth="2" />
        <text x="370" y="78" textAnchor="middle" fill="#dc2626" fontSize="12" fontWeight="bold">10X LEVERAGE</text>
        <text x="370" y="93" textAnchor="middle" fill="#94a3b8" fontSize="8">$1,000 margin ($10,000 position)</text>

        {/* +5% gain */}
        <rect x="275" y="105" width="95" height="65" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1.5" />
        <text x="322" y="125" textAnchor="middle" fill="#16a34a" fontSize="10" fontWeight="bold">BTC +5%</text>
        <text x="322" y="145" textAnchor="middle" fill="#22c55e" fontSize="18" fontWeight="bold">+$500</text>
        <text x="322" y="162" textAnchor="middle" fill="#64748b" fontSize="8">Total: $1,500</text>

        {/* -5% loss */}
        <rect x="380" y="105" width="95" height="65" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1.5" />
        <text x="427" y="125" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">BTC -5%</text>
        <text x="427" y="145" textAnchor="middle" fill="#ef4444" fontSize="18" fontWeight="bold">-$500</text>
        <text x="427" y="162" textAnchor="middle" fill="#64748b" fontSize="8">Total: $500</text>

        {/* Verdict */}
        <text x="370" y="180" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">Devastating — Half your margin gone</text>

        {/* === LIQUIDATION WARNING === */}
        <rect x="60" y="200" width="380" height="55" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
        <text x="250" y="220" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="bold">
          LIQUIDATION AT -10% MOVE
        </text>
        <text x="250" y="238" textAnchor="middle" fill="#7f1d1d" fontSize="9">
          At 10x leverage, a 10% BTC drop = 100% position loss = LIQUIDATED
        </text>
        <text x="250" y="250" textAnchor="middle" fill="#991b1b" fontSize="8">
          You lose ALL your margin. No recovery possible.
        </text>

        {/* Scale bar */}
        <rect x="60" y="270" width="380" height="18" rx="4" fill="#f1f5f9" />
        <rect x="60" y="270" width="38" height="18" rx="4" fill="#22c55e" opacity="0.7" />
        <rect x="98" y="270" width="76" height="18" rx="0" fill="#86efac" opacity="0.5" />
        <rect x="174" y="270" width="152" height="18" rx="0" fill="#fbbf24" opacity="0.5" />
        <rect x="326" y="270" width="114" height="18" rx="4" fill="#ef4444" opacity="0.7" />

        <text x="79" y="283" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">1x</text>
        <text x="136" y="283" textAnchor="middle" fill="#15803d" fontSize="7" fontWeight="bold">2x</text>
        <text x="250" y="283" textAnchor="middle" fill="#92400e" fontSize="7" fontWeight="bold">5x–10x</text>
        <text x="383" y="283" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">20x–50x</text>

        <text x="60" y="302" fill="#22c55e" fontSize="8" fontWeight="bold">Safe</text>
        <text x="250" y="302" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">Danger Zone</text>
        <text x="440" y="302" textAnchor="end" fill="#ef4444" fontSize="8" fontWeight="bold">Suicide</text>

        {/* Bottom note */}
        <text x="250" y="330" textAnchor="middle" fill="#94a3b8" fontSize="8">
          Leverage amplifies BOTH gains and losses equally. The market doesn&apos;t care about your direction.
        </text>
      </svg>
      <SvgCaption>10x Leverage — A 5% move becomes a 50% gain OR a 50% loss</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Liquidation Price Calculator Visual                   */
/* ─────────────────────────────────────────────────────────── */
function LiquidationCalcSvg() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 500 350"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Liquidation Price Calculator showing how to calculate liquidation price"
      >
        {/* Title */}
        <text x="250" y="24" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="bold" letterSpacing="1">
          LIQUIDATION PRICE CALCULATOR
        </text>
        <text x="250" y="40" textAnchor="middle" fill="#64748b" fontSize="9">
          Entry: $60,000 | Margin: $1,000 | Leverage: 10x | Position: $10,000
        </text>

        {/* Price scale (vertical) */}
        <rect x="40" y="55" width="420" height="240" rx="10" fill="white" stroke="#e2e8f0" strokeWidth="1" />

        {/* Y-axis price labels */}
        <text x="35" y="75" textAnchor="end" fill="#94a3b8" fontSize="8">$66,000</text>
        <text x="35" y="120" textAnchor="end" fill="#94a3b8" fontSize="8">$64,000</text>
        <text x="35" y="165" textAnchor="end" fill="#64748b" fontSize="8" fontWeight="bold">$60,000</text>
        <text x="35" y="210" textAnchor="end" fill="#94a3b8" fontSize="8">$56,000</text>
        <text x="35" y="255" textAnchor="end" fill="#ef4444" fontSize="8" fontWeight="bold">$54,545</text>
        <text x="35" y="280" textAnchor="end" fill="#94a3b8" fontSize="8">$52,000</text>

        {/* Grid lines */}
        <line x1="45" y1="72" x2="455" y2="72" stroke="#f1f5f9" strokeWidth="1" />
        <line x1="45" y1="117" x2="455" y2="117" stroke="#f1f5f9" strokeWidth="1" />
        <line x1="45" y1="162" x2="455" y2="162" stroke="#64748b" strokeWidth="1.5" strokeDasharray="6 3" />
        <line x1="45" y1="207" x2="455" y2="207" stroke="#f1f5f9" strokeWidth="1" />
        <line x1="45" y1="252" x2="455" y2="252" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 3" />

        {/* Entry line label */}
        <rect x="340" y="150" width="105" height="22" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
        <text x="392" y="165" textAnchor="middle" fill="#334155" fontSize="9" fontWeight="bold">ENTRY $60,000</text>

        {/* Liquidation line label */}
        <rect x="300" y="240" width="145" height="22" rx="4" fill="#fef2f2" stroke="#ef4444" strokeWidth="1" />
        <text x="372" y="255" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">LIQUIDATION $54,545</text>

        {/* Green zone (profit area) */}
        <rect x="55" y="62" width="100" height="100" rx="0" fill="#22c55e" opacity="0.08" />
        <text x="105" y="120" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">PROFIT</text>
        <text x="105" y="135" textAnchor="middle" fill="#16a34a" fontSize="8">ZONE</text>

        {/* Red zone (loss area) */}
        <rect x="55" y="162" width="100" height="90" rx="0" fill="#ef4444" opacity="0.08" />
        <text x="105" y="200" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">LOSS</text>
        <text x="105" y="215" textAnchor="middle" fill="#dc2626" fontSize="8">ZONE</text>

        {/* Dead zone (liquidated) */}
        <rect x="55" y="252" width="100" height="35" rx="0" fill="#ef4444" opacity="0.15" />
        <text x="105" y="273" textAnchor="middle" fill="#991b1b" fontSize="9" fontWeight="bold">DEAD</text>

        {/* Formula box */}
        <rect x="180" y="80" width="260" height="100" rx="8" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
        <text x="310" y="100" textAnchor="middle" fill="#9a3412" fontSize="10" fontWeight="bold">LIQUIDATION FORMULA</text>
        <text x="310" y="120" textAnchor="middle" fill="#1e293b" fontSize="9">Long: Entry × (1 - 1/Leverage)</text>
        <text x="310" y="140" textAnchor="middle" fill="#1e293b" fontSize="9">Short: Entry × (1 + 1/Leverage)</text>
        <text x="310" y="160" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="bold">
          $60,000 × (1 - 0.1) = $54,000 (approx)
        </text>

        {/* Distance indicator */}
        <line x1="155" y1="162" x2="155" y2="252" stroke="#f97316" strokeWidth="2" />
        <line x1="150" y1="162" x2="160" y2="162" stroke="#f97316" strokeWidth="2" />
        <line x1="150" y1="252" x2="160" y2="252" stroke="#f97316" strokeWidth="2" />
        <text x="160" y="210" fill="#f97316" fontSize="8" fontWeight="bold" transform="rotate(-90, 160, 210)">
          -9.1% = Liquidated
        </text>

        {/* Bottom summary */}
        <rect x="60" y="300" width="380" height="40" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="250" y="318" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold">
          With 10x leverage, you can only survive a 9.1% drop before liquidation
        </text>
        <text x="250" y="333" textAnchor="middle" fill="#7f1d1d" fontSize="8">
          BTC regularly moves 5-10% in a single day. This is why high leverage is dangerous.
        </text>
      </svg>
      <SvgCaption>Liquidation Price — How close your liquidation really is</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day4AfternoonBlock() {
  return (
    <section id="d4-afternoon" aria-labelledby="d4-afternoon-heading">
      <SectionDivider
        icon={<Zap />}
        title="AFTERNOON BLOCK — HOURS 4-6: LEVERAGE, LIQUIDATION & ADVANCED RISK"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 1: What Is Leverage?                             */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-leverage-basics"
          title="What Is Leverage? The Double-Edged Sword"
          icon={<Zap className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong className="text-slate-900">Leverage</strong> allows you to control a larger position with a
              smaller amount of capital. On MEXC, you can trade with leverage from 2x up to 200x. But here&apos;s
              the critical truth: <strong className="text-red-700">leverage amplifies BOTH your gains AND your losses
              equally</strong>. It does not give you an edge — it gives you exposure.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              With 10x leverage, a 1% move in the asset becomes a 10% move in your account. A 5% gain becomes 50%.
              But a 5% loss also becomes 50%. And at roughly 10% against you, your entire margin is gone — you&apos;re
              liquidated.
            </p>

            {/* SVG: Leverage Amplification */}
            <LeverageAmplificationSvg />

            <AnalogyBox title="Leverage Is Like a Microscope">
              <p className="text-sm sm:text-base">
                A microscope doesn&apos;t create new things — it makes tiny things appear big. Leverage doesn&apos;t
                create new profits — it makes small price moves appear big in your account. The problem is, it makes
                small losses appear big too. And when those losses exceed your margin, the microscope breaks — you&apos;re
                liquidated. Use leverage to fine-tune your position size, not to multiply your bets.
              </p>
            </AnalogyBox>

            <KeyTakeaway>
              Leverage is a tool, not a strategy. It should be used to optimize position sizing (e.g., using 2–3x
              to achieve your desired risk), not to gamble with oversized positions. Never use leverage to enter a
              trade you couldn&apos;t afford without it.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 2: Liquidation Mechanics                          */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-liquidation"
          title="Liquidation Mechanics — How You Lose Everything"
          icon={<Flame className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong className="text-red-700">Liquidation</strong> is when the exchange forcibly closes your position
              because your margin can no longer cover your losses. On MEXC, this happens automatically when your
              position&apos;s losses reach approximately 100% of your margin (minus maintenance margin). You don&apos;t
              get a phone call. You don&apos;t get a second chance. Your position is gone.
            </p>

            <div className="rounded-lg border border-orange-200 bg-orange-50/50 px-4 py-3 sm:px-5 sm:py-4">
              <h4 className="mb-2 text-sm font-bold text-orange-800 sm:text-base">
                How to Calculate Liquidation Price
              </h4>
              <div className="space-y-2">
                <p className="text-sm text-slate-700">
                  <strong>Long Position:</strong> Liquidation Price = Entry Price × (1 - 1 ÷ Leverage)
                </p>
                <p className="text-sm text-slate-700">
                  <strong>Short Position:</strong> Liquidation Price = Entry Price × (1 + 1 ÷ Leverage)
                </p>
              </div>
            </div>

            {/* SVG: Liquidation Price Calculator */}
            <LiquidationCalcSvg />

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-red-700 sm:text-base">
                Liquidation Examples
              </h4>
              <ComparisonTable
                headers={['Leverage', 'Entry Price', 'Liquidation (Long)', 'Distance to Liquidation', 'Buffer']}
                rows={[
                  ['2x', '$60,000', '$30,000', '50.0%', 'Safe'],
                  ['5x', '$60,000', '$48,000', '20.0%', 'Moderate'],
                  ['10x', '$60,000', '$54,000', '10.0%', 'Dangerous'],
                  ['20x', '$60,000', '$57,000', '5.0%', 'Very Dangerous'],
                  ['50x', '$60,000', '$58,800', '2.0%', 'Suicidal'],
                ]}
              />
            </div>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong>BTC regularly moves 3–5% in a single day</strong>, and 10%+ moves happen multiple times per year.
              At 20x leverage, a 5% adverse move liquidates you entirely. At 50x, a 2% move does it. These are not
              rare events — they are normal market behavior.
            </p>

            <ScamCard
              title="The Leverage Trap on Social Media"
              description="You'll see traders on Twitter/X posting 50x or 100x leverage wins. What they don't show you are the 99 liquidated trades before that one win. Survivorship bias makes high leverage look profitable — but the math says otherwise. Most traders using 20x+ leverage are net negative over time."
              prevention="Unfollow anyone who brags about high-leverage wins. Focus on consistent 1:2+ RRR trades with 2–3x leverage maximum. If someone's selling a course based on high-leverage trades, it's a red flag."
            />
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 3: The Leverage Risk Matrix                        */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-leverage-matrix"
          title="The Leverage Risk Matrix"
          icon={<ShieldAlert className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Not all leverage is equally dangerous. This matrix shows the real-world impact of different leverage
              levels on your trading. <strong>Pay attention to the psychological pressure column</strong> — it&apos;s
              the one most people ignore but the one that causes the most damage.
            </p>

            <ComparisonTable
              headers={['Leverage', 'Liquidation %', 'Fee Impact (Daily)', 'Psych Pressure', 'Recommended For']}
              rows={[
                ['1x (Spot)', 'N/A', '0%', 'None', 'All traders'],
                ['2x', '50% move', '0.02–0.05%', 'Low', 'Beginners'],
                ['3x', '33% move', '0.03–0.08%', 'Low-Medium', 'Intermediate'],
                ['5x', '20% move', '0.05–0.12%', 'Medium', 'Experienced only'],
                ['10x', '10% move', '0.10–0.25%', 'High', 'Advanced only'],
                ['20x', '5% move', '0.20–0.50%', 'Extreme', 'Avoid'],
                ['50x', '2% move', '0.50–1.25%', 'Unbearable', 'Never'],
              ]}
              highlightColumn={0}
            />

            <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                <div>
                  <p className="text-sm font-bold text-red-900 sm:text-base">The Fee Erosion Reality</p>
                  <p className="mt-1 text-sm text-red-800">
                    At 10x leverage, you&apos;re paying trading fees on the full leveraged position, not just your
                    margin. If you open a $10,000 position with $1,000 at 0.1% fee, you pay{' '}
                    <strong>$10 per open and $10 per close = $20 total</strong>. That&apos;s 2% of your margin just
                    in fees. On MEXC, check the fee schedule carefully — fees are based on position size, not margin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 4: Cross vs Isolated Margin                       */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-cross-isolated"
          title="Cross vs Isolated Margin — Protecting Your Account"
          icon={<ArrowLeftRight className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              When you open a leveraged position on MEXC, you choose between <strong className="text-slate-900">Cross
              Margin</strong> and <strong className="text-slate-900">Isolated Margin</strong>. This choice determines
              how much of your account is at risk if the trade goes against you. For beginners, this is one of the
              most important settings to understand.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Isolated Margin */}
              <div className="rounded-xl border-2 border-green-300 bg-green-50/40 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="h-5 w-5 text-green-600" />
                  <h4 className="text-sm font-bold text-green-800 sm:text-base">Isolated Margin</h4>
                </div>
                <p className="text-sm text-slate-700 mb-3">
                  Only the margin you allocated to this specific position is at risk. If you&apos;re liquidated,
                  you lose only that margin — your remaining account balance is safe.
                </p>
                <div className="space-y-1.5">
                  <p className="text-sm text-green-700"><strong>+</strong> Risk is capped at your set margin</p>
                  <p className="text-sm text-green-700"><strong>+</strong> One bad trade can&apos;t wipe your account</p>
                  <p className="text-sm text-green-700"><strong>+</strong> Better for risk management</p>
                  <p className="text-sm text-amber-700"><strong>-</strong> May be liquidated sooner in volatile markets</p>
                </div>
                <div className="mt-3 rounded-lg bg-green-100 p-2">
                  <p className="text-xs font-bold text-green-800 text-center">RECOMMENDED FOR BEGINNERS</p>
                </div>
              </div>

              {/* Cross Margin */}
              <div className="rounded-xl border-2 border-red-300 bg-red-50/40 p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Flame className="h-5 w-5 text-red-600" />
                  <h4 className="text-sm font-bold text-red-800 sm:text-base">Cross Margin</h4>
                </div>
                <p className="text-sm text-slate-700 mb-3">
                  Your entire account balance is shared as margin for the position. If the trade goes against you,
                  the exchange will use all available funds in your account before liquidating.
                </p>
                <div className="space-y-1.5">
                  <p className="text-sm text-green-700"><strong>+</strong> Higher liquidation threshold (more buffer)</p>
                  <p className="text-sm text-green-700"><strong>+</strong> Less likely to be liquidated by wicks</p>
                  <p className="text-sm text-red-700"><strong>-</strong> One bad trade can drain your entire account</p>
                  <p className="text-sm text-red-700"><strong>-</strong> Risk is unbounded</p>
                </div>
                <div className="mt-3 rounded-lg bg-red-100 p-2">
                  <p className="text-xs font-bold text-red-800 text-center">EXPERIENCED TRADERS ONLY</p>
                </div>
              </div>
            </div>

            <ComparisonTable
              headers={['Feature', 'Isolated Margin', 'Cross Margin']}
              rows={[
                ['Max Risk', 'Allocated margin only', 'Entire account balance'],
                ['Liquidation', 'Lose allocated margin', 'Lose entire balance'],
                ['Buffer for Wicks', 'Less buffer', 'More buffer'],
                ['Risk Control', 'Excellent', 'Poor'],
                ['Best For', 'Beginners, risk-conscious', 'Experienced, portfolio hedging'],
                ['MEXC Default', 'Isolated', '—'],
              ]}
            />

            <KeyTakeaway>
              Always use Isolated Margin as a beginner. Cross Margin can wipe your entire account on a single
              bad trade. On MEXC, check your margin mode before every trade — it&apos;s easy to accidentally use
              Cross Margin and expose your whole balance.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 5: Funding Rate Risk                               */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-funding-rate"
          title="Funding Rate Risk — The Hidden Cost of Holding"
          icon={<DollarSign className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              When you hold a perpetual futures position on MEXC (or any exchange), you pay or receive{' '}
              <strong className="text-slate-900">funding</strong> every 8 hours. This is the cost of keeping your
              position open — and it can be <strong className="text-red-700">significant</strong>, especially during
              trending markets.
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-orange-700 sm:text-base">
                How Funding Works
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-green-200 bg-green-50/50 p-3">
                  <p className="text-sm font-bold text-green-800">Positive Funding Rate</p>
                  <p className="text-sm text-slate-600">Longs pay shorts. Market is bullish/overcrowded on longs. You PAY if you&apos;re long, you RECEIVE if you&apos;re short.</p>
                </div>
                <div className="rounded-lg border border-red-200 bg-red-50/50 p-3">
                  <p className="text-sm font-bold text-red-800">Negative Funding Rate</p>
                  <p className="text-sm text-slate-600">Shorts pay longs. Market is bearish/overcrowded on shorts. You PAY if you&apos;re short, you RECEIVE if you&apos;re long.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">
                Funding Cost Calculator
              </h4>
              <ComparisonTable
                headers={['Position Size', 'Funding Rate', 'Cost per 8h', 'Cost per Day', 'Cost per Week']}
                rows={[
                  ['$1,000', '0.01%', '$0.10', '$0.30', '$2.10'],
                  ['$5,000', '0.01%', '$0.50', '$1.50', '$10.50'],
                  ['$10,000', '0.01%', '$1.00', '$3.00', '$21.00'],
                  ['$10,000', '0.05%', '$5.00', '$15.00', '$105.00'],
                  ['$10,000', '0.10%', '$10.00', '$30.00', '$210.00'],
                  ['$50,000', '0.10%', '$50.00', '$150.00', '$1,050.00'],
                ]}
              />
            </div>

            <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                <div>
                  <p className="text-sm font-bold text-amber-900 sm:text-base">The Funding Rate Reality Check</p>
                  <p className="mt-1 text-sm text-amber-800">
                    During the 2021 bull run, BTC funding rates hit <strong>0.3–0.5%</strong> per 8 hours. A $10,000
                    long position at 0.3% funding cost <strong>$90 per day</strong> — that&apos;s{' '}
                    <strong>$630 per week</strong> just to hold the position. If BTC didn&apos;t move up at least 6.3%
                    that week, you lost money despite being &ldquo;right.&rdquo; Always check the funding rate on
                    MEXC before opening a futures position.
                  </p>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              Funding is a real, ongoing cost that eats into your profits or compounds your losses. Before opening
              any futures position on MEXC, check the current funding rate and factor it into your trade plan.
              If funding is extreme, consider waiting for it to normalize.
            </KeyTakeaway>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
