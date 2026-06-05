'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Coffee,
  Target,
  Globe,
  Clock,
  Layers,
  ArrowRight,
  Shield,
  Calculator,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ChevronRight,
  TrendingUp,
  BarChart3,
  Crosshair,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Strategy Selection Flowchart                          */
/* ─────────────────────────────────────────────────────────── */
function StrategySelectionFlowchart() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 600 420"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Strategy selection flowchart showing decision tree for choosing a trading strategy"
      >
        {/* Start */}
        <rect x="220" y="10" width="160" height="40" rx="20" fill="#059669" />
        <text x="300" y="35" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">START: Pick a Strategy</text>

        {/* Q1 */}
        <line x1="300" y1="50" x2="300" y2="70" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="300,60 295,70 305,70" fill="#94a3b8" />

        <rect x="175" y="70" width="250" height="50" rx="8" fill="white" stroke="#10b981" strokeWidth="1.5" />
        <text x="300" y="90" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">What is the market doing?</text>
        <text x="300" y="105" textAnchor="middle" fill="#64748b" fontSize="9">(Check daily + 4H structure)</text>

        {/* Trending branch */}
        <line x1="175" y1="95" x2="100" y2="95" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="100" y1="95" x2="100" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="95,145 100,155 105,145" fill="#94a3b8" />
        <text x="90" y="128" textAnchor="end" fill="#10b981" fontSize="9" fontWeight="bold">TRENDING</text>

        <rect x="20" y="155" width="160" height="45" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
        <text x="100" y="173" textAnchor="middle" fill="#065f46" fontSize="10" fontWeight="bold">EMA + RSI + Volume</text>
        <text x="100" y="188" textAnchor="middle" fill="#065f46" fontSize="9">(Trend-Following)</text>

        {/* Ranging branch */}
        <line x1="300" y1="120" x2="300" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="295,145 300,155 305,145" fill="#94a3b8" />
        <text x="315" y="140" fill="#f59e0b" fontSize="9" fontWeight="bold">RANGING</text>

        <rect x="220" y="155" width="160" height="45" rx="8" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="300" y="173" textAnchor="middle" fill="#92400e" fontSize="10" fontWeight="bold">BB Squeeze Breakout</text>
        <text x="300" y="188" textAnchor="middle" fill="#92400e" fontSize="9">(Breakout Strategy)</text>

        {/* Unclear branch */}
        <line x1="425" y1="95" x2="500" y2="95" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="500" y1="95" x2="500" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="495,145 500,155 505,145" fill="#94a3b8" />
        <text x="510" y="128" fill="#ef4444" fontSize="9" fontWeight="bold">UNCLEAR</text>

        <rect x="420" y="155" width="160" height="45" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
        <text x="500" y="173" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">NO TRADE</text>
        <text x="500" y="188" textAnchor="middle" fill="#991b1b" fontSize="9">(Wait for clarity)</text>

        {/* Q2: Trending follow-up */}
        <line x1="100" y1="200" x2="100" y2="225" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="95,220 100,230 105,220" fill="#94a3b8" />

        <rect x="20" y="230" width="160" height="40" rx="8" fill="white" stroke="#10b981" strokeWidth="1.5" />
        <text x="100" y="248" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="bold">Trend direction confirmed?</text>
        <text x="100" y="260" textAnchor="middle" fill="#64748b" fontSize="8">(EMA stack + structure)</text>

        {/* Yes branch */}
        <line x1="20" y1="250" x2="5" y2="250" stroke="#10b981" strokeWidth="1.5" />
        <line x1="5" y1="250" x2="5" y2="295" stroke="#10b981" strokeWidth="1.5" />
        <text x="10" y="278" fill="#10b981" fontSize="8" fontWeight="bold">YES</text>

        <rect x="5" y="295" width="110" height="40" rx="6" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
        <text x="60" y="312" textAnchor="middle" fill="#065f46" fontSize="9" fontWeight="bold">Wait for pullback</text>
        <text x="60" y="324" textAnchor="middle" fill="#065f46" fontSize="8">to EMA 20/50</text>

        {/* No branch */}
        <line x1="180" y1="250" x2="195" y2="250" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="195" y1="250" x2="195" y2="295" stroke="#ef4444" strokeWidth="1.5" />
        <text x="190" y="278" fill="#ef4444" fontSize="8" fontWeight="bold">NO</text>

        <rect x="140" y="295" width="110" height="40" rx="6" fill="#fef2f2" stroke="#ef4444" strokeWidth="1" />
        <text x="195" y="312" textAnchor="middle" fill="#991b1b" fontSize="9" fontWeight="bold">NO TRADE</text>
        <text x="195" y="324" textAnchor="middle" fill="#991b1b" fontSize="8">Wait for alignment</text>

        {/* Q2: Breakout follow-up */}
        <line x1="300" y1="200" x2="300" y2="230" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="295,225 300,235 305,225" fill="#94a3b8" />

        <rect x="230" y="235" width="140" height="40" rx="8" fill="white" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="300" y="253" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="bold">Squeeze forming?</text>
        <text x="300" y="265" textAnchor="middle" fill="#64748b" fontSize="8">(BB bands narrowing)</text>

        <line x1="230" y1="255" x2="215" y2="255" stroke="#10b981" strokeWidth="1.5" />
        <line x1="215" y1="255" x2="215" y2="295" stroke="#10b981" strokeWidth="1.5" />
        <text x="222" y="280" fill="#10b981" fontSize="8" fontWeight="bold">YES</text>

        <rect x="180" y="350" width="120" height="35" rx="6" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
        <text x="240" y="367" textAnchor="middle" fill="#065f46" fontSize="9" fontWeight="bold">Set breakout alert</text>
        <text x="240" y="377" textAnchor="middle" fill="#065f46" fontSize="8">Enter on break + vol</text>

        <line x1="370" y1="255" x2="385" y2="255" stroke="#f59e0b" strokeWidth="1.5" />
        <line x1="385" y1="255" x2="385" y2="295" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="380" y="280" fill="#f59e0b" fontSize="8" fontWeight="bold">NO</text>

        <rect x="340" y="295" width="110" height="40" rx="6" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1" />
        <text x="395" y="312" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="bold">Wait for squeeze</text>
        <text x="395" y="324" textAnchor="middle" fill="#92400e" fontSize="8">or structure change</text>

        {/* Bottom rule */}
        <rect x="100" y="400" width="400" height="16" rx="4" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" />
        <text x="300" y="412" textAnchor="middle" fill="#065f46" fontSize="8" fontWeight="bold">RULE: Never add a 3rd strategy until 50+ trades and 3 months with your first 2</text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Strategy Selection Flowchart — always start with market structure
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Entry Decision Tree (7 Steps)                        */
/* ─────────────────────────────────────────────────────────── */
function EntryDecisionTree() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 600 520"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Entry Decision Tree showing the 7 steps to determine if a trade entry is valid"
      >
        {/* Step 1 */}
        <rect x="200" y="10" width="200" height="36" rx="6" fill="#059669" />
        <text x="300" y="32" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">1. What is the higher-TF trend?</text>
        <line x1="300" y1="46" x2="300" y2="60" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="295,56 300,64 305,56" fill="#94a3b8" />

        {/* Step 2 */}
        <rect x="175" y="64" width="250" height="36" rx="6" fill="white" stroke="#10b981" strokeWidth="1.5" />
        <text x="300" y="86" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">2. Is there a valid S/R level nearby?</text>
        <line x1="300" y1="100" x2="300" y2="114" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="295,110 300,118 305,110" fill="#94a3b8" />

        {/* Step 3 */}
        <rect x="175" y="118" width="250" height="36" rx="6" fill="white" stroke="#10b981" strokeWidth="1.5" />
        <text x="300" y="140" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">3. Does the strategy signal align?</text>
        <line x1="300" y1="154" x2="300" y2="168" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="295,164 300,172 305,164" fill="#94a3b8" />

        {/* Step 4 */}
        <rect x="175" y="172" width="250" height="36" rx="6" fill="white" stroke="#10b981" strokeWidth="1.5" />
        <text x="300" y="194" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">4. Is R:R at least 1:1.5 or better?</text>
        <line x1="300" y1="208" x2="300" y2="222" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="295,218 300,226 305,218" fill="#94a3b8" />

        {/* Step 5 */}
        <rect x="175" y="226" width="250" height="36" rx="6" fill="white" stroke="#10b981" strokeWidth="1.5" />
        <text x="300" y="248" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">5. Is risk within daily/weekly limits?</text>
        <line x1="300" y1="262" x2="300" y2="276" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="295,272 300,280 305,272" fill="#94a3b8" />

        {/* Step 6 */}
        <rect x="175" y="280" width="250" height="36" rx="6" fill="white" stroke="#10b981" strokeWidth="1.5" />
        <text x="300" y="302" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">6. No major news/event within 2hrs?</text>
        <line x1="300" y1="316" x2="300" y2="330" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="295,326 300,334 305,326" fill="#94a3b8" />

        {/* Step 7 */}
        <rect x="175" y="334" width="250" height="36" rx="6" fill="white" stroke="#10b981" strokeWidth="1.5" />
        <text x="300" y="356" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="bold">7. Are you in the right mental state?</text>
        <line x1="300" y1="370" x2="300" y2="385" stroke="#94a3b8" strokeWidth="1.5" />
        <polygon points="295,380 300,388 305,380" fill="#94a3b8" />

        {/* YES result */}
        <rect x="200" y="388" width="200" height="44" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
        <text x="300" y="407" textAnchor="middle" fill="#065f46" fontSize="12" fontWeight="bold">ENTER THE TRADE</text>
        <text x="300" y="422" textAnchor="middle" fill="#065f46" fontSize="9">Place limit order on MEXC</text>

        {/* NO branches */}
        <text x="440" y="88" fill="#ef4444" fontSize="9" fontWeight="bold">NO → No trade</text>
        <text x="440" y="142" fill="#ef4444" fontSize="9" fontWeight="bold">NO → No trade</text>
        <text x="440" y="196" fill="#ef4444" fontSize="9" fontWeight="bold">NO → No trade</text>
        <text x="440" y="250" fill="#ef4444" fontSize="9" fontWeight="bold">NO → Skip trade</text>
        <text x="440" y="304" fill="#ef4444" fontSize="9" fontWeight="bold">NO → Reduce size</text>
        <text x="440" y="358" fill="#ef4444" fontSize="9" fontWeight="bold">NO → Wait or skip</text>
        <text x="440" y="360" fill="#ef4444" fontSize="9"> </text>

        {/* Bottom note */}
        <rect x="100" y="450" width="400" height="30" rx="6" fill="#fef2f2" stroke="#ef4444" strokeWidth="1" />
        <text x="300" y="469" textAnchor="middle" fill="#991b1b" fontSize="9" fontWeight="bold">If ANY step is NO → STOP. No trade. The best trade is the one you don&apos;t take.</text>

        {/* Step number legend */}
        <rect x="100" y="490" width="400" height="24" rx="4" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" />
        <text x="300" y="506" textAnchor="middle" fill="#065f46" fontSize="8" fontWeight="bold">7-Step Entry Decision Tree — print this and keep it next to your screen</text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        The 7-Step Entry Decision Tree — every &ldquo;No&rdquo; is a saved trade
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Risk Management Framework Visual                      */
/* ─────────────────────────────────────────────────────────── */
function RiskManagementVisual() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 480 320"
        className="mx-auto w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Risk management framework showing layered protection from position to portfolio level"
      >
        <text x="240" y="20" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" letterSpacing="1">RISK MANAGEMENT — LAYERED PROTECTION</text>

        {/* Layer 1 - Position */}
        <rect x="40" y="35" width="400" height="50" rx="6" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
        <text x="60" y="55" fill="#065f46" fontSize="10" fontWeight="bold">LAYER 1: POSITION LEVEL</text>
        <text x="60" y="72" fill="#065f46" fontSize="9">Max 1-2% per trade | Stop-loss on EVERY trade | R:R ≥ 1:1.5</text>

        {/* Layer 2 - Daily */}
        <rect x="65" y="95" width="350" height="50" rx="6" fill="#d1fae5" stroke="#059669" strokeWidth="1.5" />
        <text x="85" y="115" fill="#065f46" fontSize="10" fontWeight="bold">LAYER 2: DAILY LEVEL</text>
        <text x="85" y="132" fill="#065f46" fontSize="9">Max 3 trades/day | Max 3% daily loss | Stop after 2 consecutive losses</text>

        {/* Layer 3 - Weekly */}
        <rect x="90" y="155" width="300" height="50" rx="6" fill="#a7f3d0" stroke="#047857" strokeWidth="1.5" />
        <text x="110" y="175" fill="#065f46" fontSize="10" fontWeight="bold">LAYER 3: WEEKLY LEVEL</text>
        <text x="110" y="192" fill="#065f46" fontSize="9">Max 6% weekly drawdown | Review every Sunday</text>

        {/* Layer 4 - Portfolio */}
        <rect x="115" y="215" width="250" height="50" rx="6" fill="#6ee7b7" stroke="#065f46" strokeWidth="1.5" />
        <text x="135" y="235" fill="#065f46" fontSize="10" fontWeight="bold">LAYER 4: PORTFOLIO LEVEL</text>
        <text x="135" y="252" fill="#065f46" fontSize="9">Max 10% total exposure | Max 2 correlated positions</text>

        {/* Central shield */}
        <circle cx="240" cy="295" r="16" fill="#059669" />
        <text x="240" y="299" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">🛡️</text>
        <text x="280" y="299" fill="#065f46" fontSize="9" fontWeight="bold">Each layer protects the one above it</text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Four layers of protection — position → daily → weekly → portfolio
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day9LateMorningBlock() {
  return (
    <section id="d9-late-morning" aria-labelledby="d9-late-morning-heading">
      <SectionDivider
        icon={<Coffee />}
        title="LATE MORNING BLOCK — 9:30-12:00: COMPONENTS 1-8 — MODULES 2-3"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 3: Component 1 — Mission & Goals                */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-mission-goals"
          title="Component 1 — Mission & Goals"
          icon={<Target className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Every trading plan starts with a <strong className="text-slate-900">mission statement</strong> — a clear, concise declaration of why you trade and what you intend to achieve. This isn&apos;t fluff — it&apos;s your anchor when emotions run high.
            </p>

            {/* Mission statement example */}
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/50 p-4 sm:p-5">
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wide text-emerald-800 sm:text-base">Example Mission Statement</h4>
              <p className="text-sm italic text-slate-700 sm:text-base leading-relaxed">
                &ldquo;I trade to build long-term wealth through disciplined, rule-based trading. My goal is consistent monthly returns by following my plan, managing risk on every trade, and continuously improving through journaling and review. I will never risk more than I can afford to lose, and I will always prioritize capital preservation over profit.&rdquo;
              </p>
            </div>

            {/* SMART Goal Setting */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">SMART Goal Setting</h4>
            <ComparisonTable
              headers={['SMART Element', 'Bad Example', 'Good Example']}
              highlightColumn={2}
              rows={[
                ['Specific', '"I want to make money trading"', '"I will trade BTC/USDT and ETH/USDT using EMA+RSI strategy on 4H timeframe"'],
                ['Measurable', '"I want to be profitable"', '"I will achieve a win rate of 45%+ with average R:R of 1:2"'],
                ['Achievable', '"I will 10x my account in a month"', '"I will target 3-5% monthly returns in my first 3 months"'],
                ['Relevant', '"I want to quit my job immediately"', '"I will build consistent profitability that could supplement my income within 12 months"'],
                ['Time-bound', '"Someday I\'ll be consistent"', '"I will complete 100 trades with my plan by end of Month 3 and review"'],
              ]}
            />

            {/* Goal Hierarchy */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Goal Hierarchy</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-lg border-2 border-emerald-400 bg-emerald-50/50 p-4">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wide text-emerald-700">Long-term (12 Months)</div>
                  <p className="text-sm text-slate-700">Consistent 3-5% monthly returns. Win rate 50%+. Complete 500+ trades. Full trading plan followed on 95% of trades.</p>
                </div>
                <div className="rounded-lg border-2 border-emerald-500 bg-emerald-50/30 p-4">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wide text-emerald-800">Medium-term (3 Months)</div>
                  <p className="text-sm text-slate-700">Achieve breakeven or better. Win rate 40%+. Complete 100 trades. Journal 100% of trades. Follow plan 80%+ of the time.</p>
                </div>
                <div className="rounded-lg border-2 border-emerald-600 bg-emerald-50/20 p-4">
                  <div className="mb-2 text-xs font-bold uppercase tracking-wide text-emerald-900">Short-term (This Month)</div>
                  <p className="text-sm text-slate-700">Complete 30+ trades. Win rate 35%+. Journal every trade. Limit drawdown to 6%. Follow plan on every trade.</p>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              Your mission statement is the reason you trade. Your SMART goals are how you measure progress. Write them down, review them weekly, and never lose sight of why you started.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 4: Component 2 — Market Selection                */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-market-selection"
          title="Component 2 — Market Selection"
          icon={<Globe className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              You can&apos;t trade everything. <strong className="text-slate-900">Market selection</strong> defines the specific assets you trade and why. Beginners try to trade 20 pairs and fail at all of them. Professionals focus on 2-5 pairs and master them.
            </p>

            {/* Market Categories Table */}
            <ComparisonTable
              headers={['Category', 'Pairs', 'Liquidity', 'Best For']}
              rows={[
                ['Major Pairs', 'BTC/USDT, ETH/USDT', 'Very High', 'Your primary focus — start here'],
                ['Large Caps', 'SOL, BNB, XRP, ADA', 'High', 'Secondary — add after Month 2'],
                ['MEXC Altcoins', 'Hot new listings, low-cap', 'Low-Medium', 'AVOID for first 3 months'],
              ]}
            />

            {/* Market Selection Rules */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">4 Market Selection Rules</h4>
              <div className="space-y-2">
                {[
                  { rule: 'Only trade pairs with 24h volume > $50M', detail: 'Low volume = wide spreads = slippage. Check MEXC volume before trading any pair.' },
                  { rule: 'Start with BTC/USDT and ETH/USDT only', detail: 'These are the most liquid, most analyzed, and most predictable pairs in crypto.' },
                  { rule: 'Never trade more than 5 pairs simultaneously', detail: 'Each pair needs attention. More pairs = less focus = worse decisions.' },
                  { rule: 'Only add new pairs after 30 trades on your core pairs', detail: 'Prove you can trade BTC and ETH consistently before expanding.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.rule}</p>
                      <p className="text-sm text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* When to ADD/REMOVE */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-emerald-300 bg-emerald-50/50 p-4">
                <h5 className="mb-2 text-sm font-bold text-emerald-800">When to ADD a Market</h5>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span>30+ trades on current pairs</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span>Positive expectancy on current pairs</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-emerald-600" /><span>Volume consistently above $50M</span></li>
                </ul>
              </div>
              <div className="rounded-lg border border-red-300 bg-red-50/50 p-4">
                <h5 className="mb-2 text-sm font-bold text-red-800">When to REMOVE a Market</h5>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-600" /><span>3 consecutive losing trades on it</span></li>
                  <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-600" /><span>Win rate below 30% over 20+ trades</span></li>
                  <li className="flex items-start gap-2"><XCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-600" /><span>Volume drops below $20M</span></li>
                </ul>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 5: Component 3 — Timeframe Selection             */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-timeframe-selection"
          title="Component 3 — Timeframe Selection"
          icon={<Clock className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Your <strong className="text-slate-900">timeframe</strong> determines your trading style, your screen time, and your stress level. Choose before you trade — not during.
            </p>

            <ComparisonTable
              headers={['Trading Style', 'Higher TF (Context)', 'Entry TF (Signal)', 'Lower TF (Precision)', 'Screen Time']}
              rows={[
                ['Swing', 'Daily', '4H', '1H', '1-2 hrs/day'],
                ['Intraday', '4H', '1H', '15m', '3-5 hrs/day'],
                ['Position', 'Weekly', 'Daily', '4H', '30 min/day'],
              ]}
            />

            {/* Three-Screen Method */}
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/40 p-4 sm:p-5">
              <h4 className="mb-3 text-base font-bold text-emerald-900 sm:text-lg">The Three-Screen Method</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-emerald-400 bg-white/80 p-3 text-center">
                  <div className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-1">Screen 1: Context</div>
                  <div className="text-lg font-bold text-slate-900">Higher TF</div>
                  <p className="text-xs text-slate-600 mt-1">Trend direction & bias</p>
                </div>
                <div className="rounded-lg border border-emerald-500 bg-white/80 p-3 text-center">
                  <div className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-1">Screen 2: Signal</div>
                  <div className="text-lg font-bold text-slate-900">Entry TF</div>
                  <p className="text-xs text-slate-600 mt-1">Strategy & entry trigger</p>
                </div>
                <div className="rounded-lg border border-emerald-600 bg-white/80 p-3 text-center">
                  <div className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-1">Screen 3: Precision</div>
                  <div className="text-lg font-bold text-slate-900">Lower TF</div>
                  <p className="text-xs text-slate-600 mt-1">Fine-tune entry & SL</p>
                </div>
              </div>
            </div>

            {/* Important Rule */}
            <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50/60 px-4 py-3 sm:px-5 sm:py-4 flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-900 sm:text-base">Critical Rule</p>
                <p className="text-sm text-slate-700">
                  <strong>Never check a timeframe lower than your Entry TF</strong> once you&apos;re in a trade. Lower timeframes create noise and trigger premature exits. Trust your Entry TF signal.
                </p>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 6: Component 4 — Trading Strategies              */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-trading-strategies"
          title="Component 4 — Trading Strategies"
          icon={<Layers className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Your <strong className="text-slate-900">Strategy Arsenal</strong> is the set of proven strategies you deploy. Start with 2. Master them before adding more.
            </p>

            <ComparisonTable
              headers={['Strategy', 'Type', 'Confidence (out of 100)', 'Min. Trades to Validate']}
              rows={[
                ['EMA + RSI + Volume', 'Trend-Following', '70/100', '50 trades'],
                ['BB Squeeze Breakout', 'Breakout', '70/100', '50 trades'],
              ]}
            />

            {/* Rule about adding strategies */}
            <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50/60 px-4 py-3 sm:px-5 sm:py-4 flex items-start gap-3">
              <XCircle className="h-5 w-5 flex-shrink-0 text-red-500 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-red-900 sm:text-base">Rule: Don&apos;t Add a 3rd Strategy Until...</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-500" /><span>You&apos;ve completed <strong>50+ trades</strong> with strategies 1 and 2</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-500" /><span>You&apos;ve traded for at least <strong>3 months</strong> consistently</span></li>
                  <li className="flex items-start gap-2"><ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-red-500" /><span>You have <strong>positive expectancy</strong> on at least one strategy</span></li>
                </ul>
              </div>
            </div>

            {/* Strategy Selection Flowchart SVG */}
            <StrategySelectionFlowchart />
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 7: Component 5 — Entry Rules                     */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-entry-rules"
          title="Component 5 — Entry Rules"
          icon={<Crosshair className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Your <strong className="text-slate-900">entry rules</strong> are the exact, non-negotiable conditions that must ALL be met before you enter a trade. No &ldquo;maybe,&rdquo; no &ldquo;close enough.&rdquo;
            </p>

            {/* Entry Decision Tree SVG */}
            <EntryDecisionTree />

            {/* Entry Types on MEXC */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Entry Types on MEXC</h4>
            <ComparisonTable
              headers={['Order Type', 'When to Use', 'MEXC Setting', 'Priority']}
              rows={[
                ['Limit Order', 'Standard entry at a specific price', 'Trade → Spot → Limit', '1st Choice — Always preferred'],
                ['Stop-Limit Order', 'Breakout entry above resistance', 'Trade → Spot → Stop-Limit', '2nd Choice — For breakouts'],
                ['Market Order', 'EMERGENCY ONLY — when speed is critical', 'Trade → Spot → Market', 'Last Resort — Slippage risk'],
              ]}
            />

            <KeyTakeaway>
              The 7-step decision tree is your filter. If you can&apos;t answer YES to all 7 steps, there is no trade. The best trade you&apos;ll ever make is the one you <em>don&apos;t</em> take when the setup isn&apos;t right.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 8: Component 6 — Exit Rules                      */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-exit-rules"
          title="Component 6 — Exit Rules"
          icon={<ArrowRight className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Amateurs focus on entries. Professionals focus on <strong className="text-slate-900">exits</strong>. Your exit rules determine your profitability more than anything else.
            </p>

            {/* Exit Rule Hierarchy */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Exit Rule Hierarchy (5 Priorities)</h4>
              <div className="space-y-2">
                {[
                  { priority: 1, rule: 'Hard Stop-Loss', detail: 'The non-negotiable price level where you exit. Placed BEFORE entry. Never moved further from entry.', color: 'bg-red-100 border-red-300 text-red-800' },
                  { priority: 2, rule: 'Trailing Stop', detail: 'Moves with price to lock in profits. Never moves backward. Triggered by your trailing method.', color: 'bg-amber-100 border-amber-300 text-amber-800' },
                  { priority: 3, rule: 'Take-Profit Target', detail: 'Pre-defined price target based on S/R, R:R, or Fibonacci. Set before entry.', color: 'bg-emerald-100 border-emerald-300 text-emerald-800' },
                  { priority: 4, rule: 'Time Stop', detail: 'If the trade hasn\'t moved significantly in your direction after X candles, exit. Dead money costs opportunity.', color: 'bg-blue-100 border-blue-300 text-blue-800' },
                  { priority: 5, rule: 'Signal-Based Exit', detail: 'If a counter-signal appears (e.g., bearish engulfing at resistance while long), exit regardless of other rules.', color: 'bg-slate-100 border-slate-300 text-slate-800' },
                ].map((item) => (
                  <div key={item.priority} className={`rounded-lg border p-3 ${item.color}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-xs font-bold text-slate-900">
                        {item.priority}
                      </div>
                      <h5 className="text-sm font-bold">{item.rule}</h5>
                    </div>
                    <p className="text-sm ml-8 text-slate-700">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trailing Stop Rules */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Trailing Stop Methods</h4>
            <ComparisonTable
              headers={['Method', 'How It Works', 'Best For', 'Example']}
              rows={[
                ['EMA Trail', 'SL follows EMA 20 or EMA 50', 'Trend-following trades', 'SL = EMA 20 value - 0.5%'],
                ['ATR Trail', 'SL = Price - (2 × ATR)', 'Volatile markets', 'ATR=500 → SL = Entry - 1000'],
                ['Percentage Trail', 'SL = High - X%', 'Simple rule-based approach', '5% trail from highest point'],
                ['Prev. Candle Low', 'SL = Previous candle low', 'Swing trades', '4H candle low as SL level'],
              ]}
            />

            {/* Time Stop Example */}
            <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4">
              <h5 className="mb-2 text-sm font-bold text-blue-900">Time Stop Example</h5>
              <p className="text-sm text-slate-700">
                You enter a swing long on BTC/USDT at $65,000 with a target of $68,000. After <strong>5 daily candles</strong> (5 days), price is still at $65,200 — barely moved. Your capital is sitting in a dead trade while other opportunities pass. <strong className="text-blue-800">Time stop rule: Exit if price hasn&apos;t moved 1% in your direction within 5 candles.</strong> Free your capital for better setups.
              </p>
            </div>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 9: Component 7 — Risk Management Rules           */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-risk-management"
          title="Component 7 — Risk Management Rules"
          icon={<Shield className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              This is the <strong className="text-red-700">most important component</strong> of your trading plan. Without risk management, everything else is meaningless. This is the component that keeps you in the game.
            </p>

            {/* Risk Management Framework Visual */}
            <RiskManagementVisual />

            {/* Risk Management Framework Table */}
            <ComparisonTable
              headers={['Rule', 'Parameter', 'Rationale']}
              rows={[
                ['Max risk per trade', '1-2% of account', 'A 10-trade losing streak loses max 20%, not 100%'],
                ['Max daily loss', '3% of account', 'Prevents revenge trading and tilt spirals'],
                ['Max weekly drawdown', '6% of account', 'Circuit breaker — forces a break and review'],
                ['Max open positions', '3 at a time', 'Focus and attention are limited resources'],
                ['Min R:R ratio', '1:1.5 (prefer 1:2+)', 'With 40% win rate and 1:2 R:R, you\'re profitable'],
                ['Max correlated positions', '2 same direction', 'BTC + ETH are correlated — double risk if both fail'],
                ['Mandatory stop-loss', 'On EVERY trade', 'No exceptions. No mental stops. No "I\'ll watch it"'],
              ]}
            />

            {/* Correlation Risk */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Correlation Risk Explained</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-emerald-300 bg-emerald-50/50 p-4">
                  <h5 className="mb-2 text-sm font-bold text-emerald-800">Low Correlation ✅</h5>
                  <p className="text-sm text-slate-700 mb-2">These pairs tend to move independently — safer to hold together:</p>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• BTC/USDT + a DeFi token</li>
                    <li>• ETH/USDT + a Layer-1 altcoin</li>
                    <li>• Two assets in different sectors</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-red-300 bg-red-50/50 p-4">
                  <h5 className="mb-2 text-sm font-bold text-red-800">High Correlation ⚠️</h5>
                  <p className="text-sm text-slate-700 mb-2">These pairs move together — holding both doubles your risk:</p>
                  <ul className="space-y-1 text-sm text-slate-600">
                    <li>• BTC/USDT + ETH/USDT</li>
                    <li>• SOL + BNB (both L1 competitors)</li>
                    <li>• Any two majors in the same direction</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50/60 px-4 py-3 sm:px-5 sm:py-4">
              <p className="text-sm font-bold text-red-900">
                Rule: Maximum 2 positions in the same direction on correlated assets. If BTC drops 5%, ETH likely drops 4-6% too. Two longs = double the pain.
              </p>
            </div>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 10: Component 8 — Position Sizing Model          */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-position-sizing"
          title="Component 8 — Position Sizing Model"
          icon={<Calculator className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Position sizing answers the question: <strong className="text-slate-900">&ldquo;How much should I risk on this trade?&rdquo;</strong> It&apos;s not a gut feeling — it&apos;s a formula.
            </p>

            {/* Fixed Percentage Model */}
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/40 p-4 sm:p-5">
              <h4 className="mb-3 text-base font-bold text-emerald-900 sm:text-lg">The Fixed Percentage Model</h4>
              <div className="rounded-lg bg-white/80 border border-emerald-200 p-4 mb-3">
                <p className="text-center text-lg font-bold text-slate-900">
                  Position Size = (Account × Risk%) ÷ Stop-Loss Distance
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <h5 className="mb-2 text-sm font-bold text-slate-800">Example:</h5>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>• Account: $5,000</li>
                  <li>• Risk per trade: 1% = $50</li>
                  <li>• Stop-loss distance: 2% below entry ($1,300 on BTC at $65,000)</li>
                  <li>• Position Size = $50 ÷ 0.02 = <strong className="text-emerald-700">$2,500</strong></li>
                  <li>• If stopped out: Loss = $2,500 × 2% = $50 (exactly 1% of account) ✅</li>
                </ul>
              </div>
            </div>

            {/* Position Sizing Quick Reference */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Position Sizing Quick Reference</h4>
            <ComparisonTable
              headers={['Account Size', '1% Risk', 'Position (2% SL)', 'Position (5% SL)']}
              rows={[
                ['$1,000', '$10', '$500', '$200'],
                ['$2,500', '$25', '$1,250', '$500'],
                ['$5,000', '$50', '$2,500', '$1,000'],
                ['$10,000', '$100', '$5,000', '$2,000'],
                ['$25,000', '$250', '$12,500', '$5,000'],
              ]}
            />

            {/* Futures Example */}
            <div className="rounded-xl border border-amber-300 bg-amber-50/40 p-4 sm:p-5">
              <h4 className="mb-2 text-base font-bold text-amber-900 sm:text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-amber-600" />
                Futures Example with 5x Leverage on MEXC
              </h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Account: $5,000 | Risk: 1% = $50</li>
                <li>• BTC entry: $65,000 | SL: $63,700 (2% below)</li>
                <li>• Position Size (spot): $2,500</li>
                <li>• With 5x leverage: Margin required = $2,500 ÷ 5 = <strong>$500</strong></li>
                <li>• Your $2,500 position controls $2,500 worth of BTC with only $500 margin</li>
                <li>• If stopped out: Loss is still $50 (1% of account) ✅</li>
              </ul>
              <div className="mt-3 rounded-lg border border-red-200 bg-red-50/50 p-3 flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 flex-shrink-0 text-red-600 mt-0.5" />
                <p className="text-xs text-red-800">
                  <strong>Warning:</strong> Leverage magnifies BOTH gains and losses. 5x leverage with a 20% adverse move = 100% loss. Only use leverage when you have a proven edge and strict risk management.
                </p>
              </div>
            </div>

            <KeyTakeaway>
              Position sizing is the bridge between risk management and execution. Never risk more than 1-2% per trade, and always calculate your position size <em>before</em> entering — not after.
            </KeyTakeaway>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
