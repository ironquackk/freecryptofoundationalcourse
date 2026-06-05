'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  CloudSun,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  TrendingUp,
  TrendingDown,
  FlaskConical,
  ClipboardList,
  Activity,
  ArrowRight,
  RefreshCw,
  BarChart3,
  FileWarning,
  Brain,
  Gauge,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { MEXCLab } from '@/components/academy/mexc-lab'

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Strategy Health Dashboard                             */
/* ─────────────────────────────────────────────────────────── */
function StrategyHealthDashboard() {
  const metrics = [
    { label: 'Win Rate', green: '≥50%', yellow: '40–50%', red: '<40%' },
    { label: 'Profit Factor', green: '≥1.5', yellow: '1.0–1.5', red: '<1.0' },
    { label: 'Max Drawdown', green: '≤15%', yellow: '15–25%', red: '>25%' },
    { label: 'Expectancy', green: 'Positive + Sig.', yellow: 'Positive but small', red: 'Negative' },
    { label: 'Sharpe Ratio', green: '≥1.0', yellow: '0.5–1.0', red: '<0.5' },
  ]

  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 500 300"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Strategy Health Dashboard showing green, yellow, and red zones for five metrics"
      >
        <text x="250" y="22" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="1">
          STRATEGY HEALTH DASHBOARD
        </text>

        {/* Column headers */}
        <text x="100" y="52" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="bold">METRIC</text>
        <rect x="170" y="38" width="80" height="20" rx="4" fill="#dcfce7" stroke="#22c55e" strokeWidth="1" />
        <text x="210" y="52" textAnchor="middle" fill="#166534" fontSize="9" fontWeight="bold">GREEN</text>
        <rect x="270" y="38" width="80" height="20" rx="4" fill="#fef9c3" stroke="#eab308" strokeWidth="1" />
        <text x="310" y="52" textAnchor="middle" fill="#854d0e" fontSize="9" fontWeight="bold">YELLOW</text>
        <rect x="370" y="38" width="80" height="20" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="1" />
        <text x="410" y="52" textAnchor="middle" fill="#991b1b" fontSize="9" fontWeight="bold">RED</text>

        {/* Rows */}
        {metrics.map((m, i) => {
          const y = 72 + i * 44
          return (
            <React.Fragment key={m.label}>
              <text x="100" y={y + 18} textAnchor="middle" fill="#334155" fontSize="9" fontWeight="600">{m.label}</text>
              <rect x="170" y={y} width="80" height="32" rx="6" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
              <text x="210" y={y + 20} textAnchor="middle" fill="#166534" fontSize="8">{m.green}</text>
              <rect x="270" y={y} width="80" height="32" rx="6" fill="#fefce8" stroke="#fde047" strokeWidth="1" />
              <text x="310" y={y + 20} textAnchor="middle" fill="#854d0e" fontSize="8">{m.yellow}</text>
              <rect x="370" y={y} width="80" height="32" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
              <text x="410" y={y + 20} textAnchor="middle" fill="#991b1b" fontSize="8">{m.red}</text>
            </React.Fragment>
          )
        })}

        {/* Legend */}
        <text x="250" y="290" textAnchor="middle" fill="#64748b" fontSize="8">
          3+ metrics in Yellow = caution. Any metric in Red = stop trading and review.
        </text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Monitor your strategy health — act on Yellow warnings before they turn Red
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Overfitting Warning — Before/After                   */
/* ─────────────────────────────────────────────────────────── */
function OverfittingWarningDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 500 220"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Overfitting Warning showing perfect backtest results vs poor live results"
      >
        <text x="250" y="22" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="1">
          OVERFITTING: TOO GOOD TO BE TRUE
        </text>

        {/* Left: Backtest (perfect) */}
        <rect x="20" y="40" width="220" height="150" rx="12" fill="white" stroke="#22c55e" strokeWidth="2" />
        <text x="130" y="62" textAnchor="middle" fill="#166534" fontSize="10" fontWeight="bold">BACKTEST (CURVE-FIT)</text>

        {/* Perfect equity curve */}
        <polyline points="40,170 70,155 100,140 130,125 160,108 190,90 220,70" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="130" y="190" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">Win Rate: 85% | PF: 4.2 | DD: 5%</text>

        {/* Arrow */}
        <line x1="248" y1="115" x2="272" y2="115" stroke="#94a3b8" strokeWidth="2" />
        <polygon points="270,111 278,115 270,119" fill="#94a3b8" />
        <text x="260" y="108" textAnchor="middle" fill="#dc2626" fontSize="7" fontWeight="bold">GO LIVE</text>

        {/* Right: Live (fails) */}
        <rect x="280" y="40" width="200" height="150" rx="12" fill="white" stroke="#ef4444" strokeWidth="2" />
        <text x="380" y="62" textAnchor="middle" fill="#991b1b" fontSize="10" fontWeight="bold">LIVE (REALITY)</text>

        {/* Messy equity curve */}
        <polyline points="300,80 320,95 340,85 360,110 380,130 400,120 420,150 440,140 460,165" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="380" y="190" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">Win Rate: 42% | PF: 0.8 | DD: 35%</text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Overfitted strategies look perfect in backtests but collapse in live trading
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                               */
/* ─────────────────────────────────────────────────────────── */
export function Day7LateAfternoonBlock() {
  return (
    <section id="d7-late-afternoon" aria-labelledby="d7-late-afternoon-heading">
      <SectionDivider
        icon={<CloudSun />}
        title="LATE AFTERNOON BLOCK — 2:30–5:30: FORWARD TESTING & OPTIMIZATION — MODULES 5–6"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 10: Why Forward Testing Matters
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-why-forward-testing"
          title="Why Forward Testing Matters"
          icon={<FlaskConical className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Backtesting proves your strategy <em>could have</em> worked. Forward testing proves it
              <strong className="text-purple-800"> actually works in real-time</strong>. This is the step most beginners skip —
              and it&apos;s the reason 90% of backtested strategies fail when they go live.
            </p>

            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
              <div className="flex items-center gap-2 rounded-lg border border-purple-300 bg-purple-50 px-4 py-3">
                <BarChart3 className="h-5 w-5 text-purple-600" />
                <div className="text-center">
                  <p className="text-xs font-bold text-purple-700">BACKTEST</p>
                  <p className="text-lg font-bold text-purple-800">50+ trades</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400 hidden sm:block" />
              <div className="flex items-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-4 py-3">
                <Activity className="h-5 w-5 text-amber-600" />
                <div className="text-center">
                  <p className="text-xs font-bold text-amber-700">FORWARD TEST</p>
                  <p className="text-lg font-bold text-amber-800">30+ trades</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400 hidden sm:block" />
              <div className="flex items-center gap-2 rounded-lg border border-green-300 bg-green-50 px-4 py-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <div className="text-center">
                  <p className="text-xs font-bold text-green-700">LIVE</p>
                  <p className="text-lg font-bold text-green-800">Micro size</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4">
              <h5 className="mb-2 text-sm font-bold text-amber-800">Paper Trading Rules</h5>
              <ol className="ml-4 list-decimal space-y-1.5 text-sm text-slate-700">
                <li><strong>Treat it like real money</strong> — record every signal, follow every rule, feel the FOMO</li>
                <li><strong>No peeking ahead</strong> — don&apos;t look at what happened after your entry and adjust</li>
                <li><strong>Include fees and slippage</strong> — add 0.1% fee and 0.05% slippage to every trade</li>
                <li><strong>Minimum 30 trades</strong> before any conclusion — less than that is statistically meaningless</li>
              </ol>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 11: MEXC & Binance Paper Trading Setup
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-paper-trading-setup"
          title="MEXC & Binance Paper Trading Setup"
          icon={<ClipboardList className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-purple-200 bg-purple-50/40 p-4">
                <h5 className="mb-3 text-sm font-bold text-purple-800">MEXC Demo Trading (4 Steps)</h5>
                <ol className="ml-4 list-decimal space-y-2 text-sm text-slate-700">
                  <li>Open the MEXC app and navigate to <strong>Futures → Demo Trading</strong></li>
                  <li>Your demo account comes with <strong>10,000 USDT</strong> in virtual funds</li>
                  <li>Trade exactly as you would with real money — same pairs, same timeframes, same rules</li>
                  <li>Track every trade in your <strong>forward test log</strong> alongside the demo P&amp;L</li>
                </ol>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50/40 p-4">
                <h5 className="mb-3 text-sm font-bold text-amber-800">Binance Testnet (4 Steps)</h5>
                <ol className="ml-4 list-decimal space-y-2 text-sm text-slate-700">
                  <li>Visit <strong>testnet.binancefuture.com</strong> and create a testnet account</li>
                  <li>Get free testnet USDT from the <strong>faucet</strong> (top-right menu)</li>
                  <li>Trade futures on the testnet using your real strategy rules</li>
                  <li>Export your trade history and calculate metrics from the testnet data</li>
                </ol>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 px-4 py-3">
              <p className="text-sm font-semibold text-amber-900">
                ⚠️ Paper trading doesn&apos;t test emotions. You know it&apos;s not real money, so you won&apos;t feel the
                same fear or greed. That&apos;s why forward testing must eventually transition to micro-size live trading.
              </p>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 12: Forward Test Tracking Template
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-forward-test-template"
          title="Forward Test Tracking Template"
          icon={<ClipboardList className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Your forward test log must capture more detail than a backtest log. Include your emotional state
              and decision-making process — this data is invaluable for improving discipline.
            </p>

            <div className="rounded-lg border border-purple-200 bg-purple-50/30 p-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <h6 className="mb-1.5 text-xs font-bold uppercase text-purple-700">Pre-Trade</h6>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Date/Time of signal</li>
                    <li>• Pair & Direction</li>
                    <li>• Market Regime identified</li>
                    <li>• Confluence Score (/100)</li>
                    <li>• Entry Zone & SL/TP levels</li>
                    <li>• Position Size (1% rule)</li>
                    <li>• Confidence level (1–10)</li>
                  </ul>
                </div>
                <div>
                  <h6 className="mb-1.5 text-xs font-bold uppercase text-purple-700">Execution</h6>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Actual entry price</li>
                    <li>• Slippage (if any)</li>
                    <li>• Did you follow all rules?</li>
                    <li>• Did you hesitate or rush?</li>
                    <li>• Emotional state when entering</li>
                  </ul>
                </div>
                <div>
                  <h6 className="mb-1.5 text-xs font-bold uppercase text-purple-700">Management</h6>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Did you move SL? (Shouldn&apos;t!)</li>
                    <li>• TP1 hit? Closed 1/3?</li>
                    <li>• TP2 hit? Moved SL to BE?</li>
                    <li>• Did you exit early? Why?</li>
                    <li>• Emotional state during hold</li>
                  </ul>
                </div>
                <div>
                  <h6 className="mb-1.5 text-xs font-bold uppercase text-purple-700">Outcome & Lessons</h6>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Final P/L and R multiple</li>
                    <li>• Win or Loss</li>
                    <li>• What went well?</li>
                    <li>• What would I change?</li>
                    <li>• Grade the trade (A–F)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 13: The Danger of Overfitting
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-overfitting"
          title="The Danger of Overfitting"
          icon={<AlertTriangle className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong className="text-red-700">Overfitting</strong> is the #1 killer of backtested strategies. It happens when you
              optimize your rules so perfectly for historical data that they lose all predictive power for future data.
              A strategy that&apos;s &quot;too good to be true&quot; usually is.
            </p>

            {/* SVG: Overfitting Warning */}
            <OverfittingWarningDiagram />

            <div className="space-y-2">
              <h5 className="flex items-center gap-2 text-sm font-bold text-red-700">
                <XCircle className="h-4 w-4" /> 5 Signs of Overfitting
              </h5>
              <div className="space-y-2">
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-slate-700">Backtest win rate above <strong>80%</strong> (crypto markets are too volatile for this)</p>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-slate-700">Profit factor above <strong>3.0</strong> without clear economic rationale</p>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-slate-700">Strategy uses <strong>very specific parameters</strong> (e.g., RSI 17.3 on 23-minute chart)</p>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-slate-700">Performance <strong>degrades significantly</strong> on any new data</p>
                </div>
                <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50/50 p-3">
                  <span className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-slate-700">Strategy only works on <strong>one pair or one time period</strong></p>
                </div>
              </div>
            </div>

            <ComparisonTable
              headers={['Technique', 'How It Works', 'Why It Helps']}
              rows={[
                ['Walk-forward analysis', 'Test on rolling windows: train on period A, test on B', 'Simulates real-world sequential trading'],
                ['Parameter stability', 'Test RSI 12, 14, 16 — all should work similarly', 'If only 14 works, it&apos;s overfit'],
                ['Multi-asset testing', 'Test on BTC, ETH, SOL — all should be positive', 'A real edge works across assets'],
                ['Out-of-sample testing', 'Reserve 30% of data, never touch during development', 'Final verification on unseen data'],
                ['Monte Carlo simulation', 'Randomize trade order 1,000+ times, check survival', 'Tests if you survive unlucky sequences'],
              ]}
              highlightColumn={0}
            />
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 14: Strategy Degradation & When to Stop
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-strategy-degradation"
          title="Strategy Degradation & When to Stop"
          icon={<Gauge className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              No strategy works forever. Markets evolve, participants change, and what worked yesterday may
              not work tomorrow. <strong className="text-red-700">Knowing when to stop is as important as knowing when to start.</strong>
            </p>

            {/* SVG: Strategy Health Dashboard */}
            <StrategyHealthDashboard />

            <ComparisonTable
              headers={['Metric', 'Green Zone', 'Yellow Zone', 'Red Zone']}
              rows={[
                ['Win Rate', '≥50%', '40–50%', '<40%'],
                ['Profit Factor', '≥1.5', '1.0–1.5', '<1.0'],
                ['Max Drawdown', '≤15%', '15–25%', '>25%'],
                ['Expectancy', 'Positive + significant', 'Positive but small', 'Negative'],
                ['Sharpe Ratio', '≥1.0', '0.5–1.0', '<0.5'],
              ]}
            />

            <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 px-4 py-3">
              <h5 className="mb-2 text-sm font-bold text-red-800">Red Zone Protocol (5 Steps)</h5>
              <ol className="ml-4 list-decimal space-y-1.5 text-sm text-red-700">
                <li><strong>Stop trading immediately</strong> — switch to paper trading only</li>
                <li><strong>Review your last 20 trades</strong> — is the market regime different from your backtest?</li>
                <li><strong>Check for rule violations</strong> — are you actually following your own rules?</li>
                <li><strong>Re-backtest on recent data</strong> — does the strategy still have an edge on the last 3 months?</li>
                <li><strong>Decide: adapt or abandon</strong> — if the edge is gone, it&apos;s gone. Don&apos;t force it.</li>
              </ol>
            </div>

            <KeyTakeaway>
              A strategy in the Yellow zone needs attention. A strategy in the Red zone needs action.
              The most expensive mistake traders make is hoping a losing strategy will recover on its own.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 15: Common Backtesting Mistakes
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-backtesting-mistakes"
          title="Common Backtesting Mistakes"
          icon={<FileWarning className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              These 7 mistakes can make a losing strategy look like a winner in backtesting. Being aware of them
              is your first line of defense.
            </p>

            <ComparisonTable
              headers={['Mistake', 'Why It Kills You', 'Fix']}
              rows={[
                ['Look-ahead bias', 'You use data that wasn\'t available at the time (e.g., closing price before the close)', 'Only use data available at the exact moment of decision. Use bar-by-bar replay.'],
                ['Survivorship bias', 'You only test on coins that survived — ignoring delisted tokens', 'Include delisted pairs if possible. Acknowledge this limitation.'],
                ['Ignoring fees', '0.1% maker + 0.1% taker × 2 (entry+exit) = 0.4% per round trip', 'Always deduct fees. For 50 trades, that\'s 20% of your capital eaten by fees.'],
                ['Ignoring slippage', 'Your backtest assumes perfect fills at exact prices', 'Add 0.05–0.1% slippage per trade. Use limit orders in live.'],
                ['Cherry-picking', 'You only count the trades that fit your narrative', 'Log EVERY signal, including the ones you didn\'t take. Full transparency.'],
                ['Changing rules mid-test', 'You adjust parameters after seeing results', 'Lock rules before testing. One change = restart the entire backtest.'],
                ['Too few trades', '20 trades prove nothing — pure luck or variance', 'Minimum 50 trades. 100+ is better. Statistical significance matters.'],
              ]}
            />

            <AnalogyBox title="Backtesting Mistakes Are Like Doping in Sports">
              Look-ahead bias, ignoring fees, cherry-picking — they&apos;re all performance enhancers that make
              your backtest look amazing but disqualify you from the real competition. The only person you&apos;re
              cheating is yourself, and the bill comes due when you trade live.
            </AnalogyBox>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            MEXC TRADING LAB: Signal Execution
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-mexc-lab"
          title="MEXC Trading Lab: Signal Execution"
          icon={<FlaskConical className="h-5 w-5" />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Practice executing trades based on generated signals using the MEXC simulator. Treat this as
            a forward-testing exercise — follow the 7-step signal generation process before every order.
          </p>
          <div className="mb-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="text-sm font-bold text-green-800 mb-2">Practice Instructions — Signal Execution</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
                <span><strong>Identify the market regime:</strong> Is the chart showing an uptrend, downtrend, or range? Your execution strategy depends on this first step.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
                <span><strong>Score the confluence:</strong> Before placing any order, mentally score the setup out of 100. Only execute if the score is ≥ 70.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
                <span><strong>Place a limit order</strong> at your identified entry zone — not a market order. Practice getting a good fill price by using the order book to find support/resistance levels.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
                <span><strong>Calculate your position size</strong> using the 1% rule: Risk = Account × 1% ÷ (Entry − SL distance). Use the simulator&apos;s 10,000 USDT balance.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">5</span>
                <span><strong>Log the trade</strong> in your forward test template: signal type, confluence score, emotional state, entry price, SL, and TP levels.</span>
              </li>
            </ol>
          </div>
          <MEXCLab />
          <KeyTakeaway>
            Signal execution is where theory meets reality. The 7-step process — regime identification,
            confluence scoring, entry zone, SL, TP, position sizing, and documentation — must become
            automatic. Practice until every trade follows the process without exception.
          </KeyTakeaway>
        </TopicCard>
      </div>
    </section>
  )
}
