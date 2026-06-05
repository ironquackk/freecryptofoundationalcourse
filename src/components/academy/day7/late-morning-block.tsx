'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Coffee,
  FlaskConical,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  BarChart3,
  TrendingUp,
  Calculator,
  ClipboardCheck,
  ExternalLink,
  ShieldCheck,
  FileSearch,
  ArrowRight,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { TradingViewLab } from '@/components/academy/tradingview-lab'

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Backtesting Pipeline                                 */
/* ─────────────────────────────────────────────────────────── */
function BacktestingPipelineDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 500 220"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Backtesting Pipeline showing Backtest to Forward Test to Live progression"
      >
        <defs>
          <linearGradient id="pipe1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="pipe2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="pipe3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
        </defs>

        <text x="250" y="22" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold" letterSpacing="1">
          STRATEGY VALIDATION PIPELINE
        </text>

        {/* Step 1: Backtest */}
        <rect x="20" y="50" width="140" height="100" rx="16" fill="url(#pipe1)" />
        <text x="90" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">BACKTEST</text>
        <text x="90" y="105" textAnchor="middle" fill="#ddd6fe" fontSize="9">50+ trades minimum</text>
        <text x="90" y="120" textAnchor="middle" fill="#ddd6fe" fontSize="9">Historical data</text>
        <text x="90" y="140" textAnchor="middle" fill="#c4b5fd" fontSize="8">→ Metrics pass?</text>

        {/* Arrow 1→2 */}
        <line x1="160" y1="100" x2="185" y2="100" stroke="#94a3b8" strokeWidth="2" />
        <polygon points="183,96 191,100 183,104" fill="#94a3b8" />
        <text x="172" y="93" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">✓ PASS</text>

        {/* Step 2: Forward Test */}
        <rect x="190" y="50" width="140" height="100" rx="16" fill="url(#pipe2)" />
        <text x="260" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">FORWARD</text>
        <text x="260" y="100" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">TEST</text>
        <text x="260" y="120" textAnchor="middle" fill="#fef3c7" fontSize="9">30+ trades minimum</text>
        <text x="260" y="140" textAnchor="middle" fill="#fde68a" fontSize="8">→ Consistent results?</text>

        {/* Arrow 2→3 */}
        <line x1="330" y1="100" x2="355" y2="100" stroke="#94a3b8" strokeWidth="2" />
        <polygon points="353,96 361,100 353,104" fill="#94a3b8" />
        <text x="342" y="93" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="bold">✓ PASS</text>

        {/* Step 3: Live */}
        <rect x="360" y="50" width="120" height="100" rx="16" fill="url(#pipe3)" />
        <text x="420" y="85" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">LIVE</text>
        <text x="420" y="105" textAnchor="middle" fill="#dcfce7" fontSize="9">Micro size first</text>
        <text x="420" y="120" textAnchor="middle" fill="#dcfce7" fontSize="9">Scale up gradually</text>
        <text x="420" y="140" textAnchor="middle" fill="#bbf7d0" fontSize="8">→ Monitor metrics</text>

        {/* Fail paths */}
        <line x1="90" y1="150" x2="90" y2="185" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="90" y="200" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">✗ FAIL → Refine strategy</text>

        <line x1="260" y1="150" x2="260" y2="185" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="260" y="200" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">✗ FAIL → Re-backtest</text>

        <line x1="420" y1="150" x2="420" y2="185" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="420" y="200" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">⚠ DEGRADE → Reduce size</text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Strategy Validation Pipeline — fail at any stage and go back
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                               */
/* ─────────────────────────────────────────────────────────── */
export function Day7LateMorningBlock() {
  return (
    <section id="d7-late-morning" aria-labelledby="d7-late-morning-heading">
      <SectionDivider
        icon={<Coffee />}
        title="LATE MORNING BLOCK — 9:30–12:00: BACKTESTING FUNDAMENTALS — MODULES 2–3"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 3: What Is Backtesting and Why It Matters
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-what-is-backtesting"
          title="What Is Backtesting and Why It Matters"
          icon={<FlaskConical className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong>Backtesting</strong> is the process of testing a trading strategy on historical data to see how it
              would have performed. It&apos;s the bridge between <em>theory</em> and <em>reality</em> — the only way to know
              if your signal generation process actually produces profits before risking real money.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
                <h5 className="mb-2 flex items-center gap-2 text-sm font-bold text-green-800">
                  <CheckCircle2 className="h-4 w-4" /> What Backtesting PROVES
                </h5>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />Whether the strategy has a statistical edge</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />Your average win rate and risk-reward ratio</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />Maximum drawdown and recovery time</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />Which market conditions the strategy works in</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />Your realistic expectancy per trade</li>
                </ul>
              </div>
              <div className="rounded-lg border border-red-200 bg-red-50/50 p-4">
                <h5 className="mb-2 flex items-center gap-2 text-sm font-bold text-red-800">
                  <XCircle className="h-4 w-4" /> What Backtesting CANNOT Prove
                </h5>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />Future performance (past ≠ future)</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />How you&apos;ll handle emotions in real time</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />Exact execution quality (slippage, latency)</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 px-4 py-3">
              <h5 className="flex items-center gap-2 text-sm font-bold text-red-800">
                <AlertTriangle className="h-4 w-4" /> The Hard Truth
              </h5>
              <p className="mt-1 text-sm text-red-700">
                90% of strategies that look amazing in backtesting fail in live trading. Why? Overfitting, look-ahead bias,
                ignoring fees/slippage, and unrealistic execution assumptions. Backtesting is <em>necessary</em> but not
                <em>sufficient</em> — you must also forward-test.
              </p>
            </div>

            <AnalogyBox title="Backtesting Is Like a Flight Simulator">
              A flight simulator teaches you the controls and tests your skills in a safe environment. It builds
              competence and confidence. But no pilot would fly a real plane based <em>only</em> on simulator hours —
              they need supervised real flights too. Backtesting is the simulator; forward testing is the supervised flight.
            </AnalogyBox>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 4: Manual Backtesting: The Gold Standard
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-manual-backtesting"
          title="Manual Backtesting: The Gold Standard"
          icon={<FileSearch className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              While automated backtesting tools exist, <strong className="text-purple-800">manual backtesting is the gold
              standard for beginners</strong>. It forces you to engage with every bar, every setup, and every decision —
              building the pattern recognition that automated tools cannot teach.
            </p>

            <div className="space-y-2">
              <h5 className="text-sm font-bold text-purple-800">5-Step Manual Backtesting Process</h5>
              <div className="space-y-2">
                <div className="flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50/30 p-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">1</span>
                  <p className="text-sm text-slate-700"><strong>Define the rules</strong> — Write down every entry, exit, and filter rule with zero ambiguity</p>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50/30 p-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">2</span>
                  <p className="text-sm text-slate-700"><strong>Scroll the chart</strong> — Move forward bar-by-bar on TradingView Replay, never looking ahead</p>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50/30 p-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">3</span>
                  <p className="text-sm text-slate-700"><strong>Log every signal</strong> — Record every trade in your log, including the ones you didn&apos;t take (and why)</p>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50/30 p-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">4</span>
                  <p className="text-sm text-slate-700"><strong>Calculate metrics</strong> — After 50+ trades, compute all six essential metrics (next topic)</p>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-purple-200 bg-purple-50/30 p-3">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">5</span>
                  <p className="text-sm text-slate-700"><strong>Evaluate and iterate</strong> — If metrics fail, adjust one variable and re-test (never curve-fit)</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h5 className="mb-3 text-sm font-bold text-slate-800">Backtest Trade Log Template</h5>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="px-2 py-2 text-left">#</th>
                      <th className="px-2 py-2 text-left">Date</th>
                      <th className="px-2 py-2 text-left">Pair</th>
                      <th className="px-2 py-2 text-left">Dir</th>
                      <th className="px-2 py-2 text-left">Entry</th>
                      <th className="px-2 py-2 text-left">SL</th>
                      <th className="px-2 py-2 text-left">TP1</th>
                      <th className="px-2 py-2 text-left">TP2</th>
                      <th className="px-2 py-2 text-left">Result</th>
                      <th className="px-2 py-2 text-left">P/L</th>
                      <th className="px-2 py-2 text-left">R</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-green-50/50">
                      <td className="px-2 py-1.5">1</td>
                      <td className="px-2 py-1.5">Jan 5</td>
                      <td className="px-2 py-1.5">BTC</td>
                      <td className="px-2 py-1.5 text-green-700">Long</td>
                      <td className="px-2 py-1.5">$42,500</td>
                      <td className="px-2 py-1.5">$41,800</td>
                      <td className="px-2 py-1.5">$43,200</td>
                      <td className="px-2 py-1.5">$43,900</td>
                      <td className="px-2 py-1.5 text-green-700">Win</td>
                      <td className="px-2 py-1.5 text-green-700">+$490</td>
                      <td className="px-2 py-1.5">+0.7R</td>
                    </tr>
                    <tr className="bg-red-50/50">
                      <td className="px-2 py-1.5">2</td>
                      <td className="px-2 py-1.5">Jan 8</td>
                      <td className="px-2 py-1.5">BTC</td>
                      <td className="px-2 py-1.5 text-green-700">Long</td>
                      <td className="px-2 py-1.5">$43,800</td>
                      <td className="px-2 py-1.5">$43,100</td>
                      <td className="px-2 py-1.5">$44,500</td>
                      <td className="px-2 py-1.5">$45,200</td>
                      <td className="px-2 py-1.5 text-red-700">Loss</td>
                      <td className="px-2 py-1.5 text-red-700">-$700</td>
                      <td className="px-2 py-1.5">-1.0R</td>
                    </tr>
                    <tr className="bg-green-50/50">
                      <td className="px-2 py-1.5">3</td>
                      <td className="px-2 py-1.5">Jan 12</td>
                      <td className="px-2 py-1.5">BTC</td>
                      <td className="px-2 py-1.5 text-green-700">Long</td>
                      <td className="px-2 py-1.5">$44,100</td>
                      <td className="px-2 py-1.5">$43,400</td>
                      <td className="px-2 py-1.5">$44,800</td>
                      <td className="px-2 py-1.5">$45,500</td>
                      <td className="px-2 py-1.5 text-green-700">Win</td>
                      <td className="px-2 py-1.5 text-green-700">+$910</td>
                      <td className="px-2 py-1.5">+1.3R</td>
                    </tr>
                    <tr className="bg-red-50/50">
                      <td className="px-2 py-1.5">4</td>
                      <td className="px-2 py-1.5">Jan 15</td>
                      <td className="px-2 py-1.5">BTC</td>
                      <td className="px-2 py-1.5 text-red-700">Short</td>
                      <td className="px-2 py-1.5">$45,000</td>
                      <td className="px-2 py-1.5">$45,700</td>
                      <td className="px-2 py-1.5">$44,300</td>
                      <td className="px-2 py-1.5">$43,600</td>
                      <td className="px-2 py-1.5 text-red-700">Loss</td>
                      <td className="px-2 py-1.5 text-red-700">-$700</td>
                      <td className="px-2 py-1.5">-1.0R</td>
                    </tr>
                    <tr className="bg-green-50/50">
                      <td className="px-2 py-1.5">5</td>
                      <td className="px-2 py-1.5">Jan 20</td>
                      <td className="px-2 py-1.5">BTC</td>
                      <td className="px-2 py-1.5 text-green-700">Long</td>
                      <td className="px-2 py-1.5">$43,600</td>
                      <td className="px-2 py-1.5">$42,900</td>
                      <td className="px-2 py-1.5">$44,300</td>
                      <td className="px-2 py-1.5">$45,000</td>
                      <td className="px-2 py-1.5 text-green-700">Win</td>
                      <td className="px-2 py-1.5 text-green-700">+$980</td>
                      <td className="px-2 py-1.5">+1.4R</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 5: Backtesting on MEXC & Binance
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-backtesting-mexc-binance"
          title="Backtesting on MEXC & Binance"
          icon={<BarChart3 className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-purple-200 bg-purple-50/40 p-4">
                <h5 className="mb-2 text-sm font-bold text-purple-800">MEXC Method (4 Steps)</h5>
                <ol className="ml-4 list-decimal space-y-1.5 text-sm text-slate-700">
                  <li>Open BTC/USDT chart and switch to <strong>desired timeframe</strong></li>
                  <li>Scroll back 3–6 months using the <strong>chart history slider</strong></li>
                  <li>Move forward candle-by-candle, applying your rules to each setup</li>
                  <li>Record every signal in your <strong>trade log spreadsheet</strong></li>
                </ol>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50/40 p-4">
                <h5 className="mb-2 text-sm font-bold text-amber-800">Binance Method (3 Steps)</h5>
                <ol className="ml-4 list-decimal space-y-1.5 text-sm text-slate-700">
                  <li>Use <strong>Strategy Tester</strong> tab in Binance Trading interface</li>
                  <li>Select a built-in strategy or import a Pine Script equivalent</li>
                  <li>Review the auto-generated <strong>performance report</strong> and trade list</li>
                </ol>
              </div>
            </div>

            <h5 className="text-sm font-bold text-slate-800">Free Backtesting Tools</h5>
            <ComparisonTable
              headers={['Tool', 'Type', 'Best For', 'Cost']}
              rows={[
                ['TradingView Replay', 'Manual', 'Bar-by-bar replay, best for learning', 'Free tier works'],
                ['MEXC Chart History', 'Manual', 'In-platform backtesting', 'Free'],
                ['Binance Strategy Tester', 'Semi-auto', 'Automated strategy testing', 'Free'],
                ['CryptoCompare', 'Data source', 'Historical price data download', 'Free tier'],
                ['Google Sheets', 'Manual', 'Trade log and metric calculation', 'Free'],
                ['TradingView Pine Script', 'Automated', 'Custom strategy coding and testing', 'Pro plan ($15/mo)'],
              ]}
              highlightColumn={1}
            />
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 6: Strategy Performance Metrics — The Six Essential Metrics
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-performance-metrics"
          title="Strategy Performance Metrics — The Six Essential Metrics"
          icon={<Calculator className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              After backtesting 50+ trades, these six metrics tell you whether your strategy is worth trading
              live. <strong className="text-purple-800">All six must pass</strong> — one good metric doesn&apos;t compensate for a failing one.
            </p>

            {/* Backtesting Pipeline SVG */}
            <BacktestingPipelineDiagram />

            {/* Metric 1: Win Rate */}
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h5 className="mb-2 flex items-center gap-2 text-sm font-bold text-purple-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">1</span>
                Win Rate
              </h5>
              <div className="mb-2 rounded bg-purple-50 p-2">
                <p className="font-mono text-sm font-bold text-purple-800 text-center">
                  Win Rate = (Winning Trades ÷ Total Trades) × 100
                </p>
              </div>
              <ComparisonTable
                headers={['Win Rate', 'Interpretation', 'Action']}
                rows={[
                  ['Below 40%', 'Unreliable strategy', 'Discard or fundamentally redesign'],
                  ['40–50%', 'Below average', 'Needs strong R:R (2:1+) to be viable'],
                  ['50–60%', 'Solid', 'Good if R:R is 1.5:1 or better'],
                  ['60–70%', 'Strong', 'Can work with moderate R:R'],
                  ['Above 70%', 'Exceptional (verify!)', 'Likely overfit — re-test on new data'],
                ]}
              />
            </div>

            {/* Metric 2: Risk-Reward Ratio */}
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h5 className="mb-2 flex items-center gap-2 text-sm font-bold text-purple-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">2</span>
                Risk-Reward Ratio (Average)
              </h5>
              <div className="mb-2 rounded bg-purple-50 p-2">
                <p className="font-mono text-sm font-bold text-purple-800 text-center">
                  Avg R:R = Average Win Amount ÷ Average Loss Amount
                </p>
              </div>
              <p className="text-sm text-slate-600">
                <strong>Example:</strong> If your average winning trade makes $300 and your average losing trade loses $150,
                your R:R = 2.0:1. This means you need only a 33% win rate to break even.
              </p>
            </div>

            {/* Metric 3: Expectancy */}
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h5 className="mb-2 flex items-center gap-2 text-sm font-bold text-purple-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">3</span>
                Expectancy
              </h5>
              <div className="mb-2 rounded bg-purple-50 p-2">
                <p className="font-mono text-sm font-bold text-purple-800 text-center">
                  Expectancy = (Win Rate × Avg Win) − (Loss Rate × Avg Loss)
                </p>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Example:</strong> Win Rate 55%, Avg Win $300, Avg Loss $150 → Expectancy = (0.55 × $300) − (0.45 × $150) =
                $165 − $67.50 = <strong className="text-green-700">+$97.50 per trade</strong>
              </p>
              <ComparisonTable
                headers={['Expectancy', 'Interpretation', 'Action']}
                rows={[
                  ['Negative', 'Losing strategy', 'Discard — you lose money on average'],
                  ['$0 (Break-even)', 'No edge', 'Fees will make this negative — not viable'],
                  ['Positive but small', 'Marginal edge', 'May not survive real-world conditions'],
                  ['Positive and significant', 'Real edge', 'Proceed to forward testing'],
                ]}
              />
            </div>

            {/* Metric 4: Maximum Drawdown */}
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h5 className="mb-2 flex items-center gap-2 text-sm font-bold text-purple-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">4</span>
                Maximum Drawdown
              </h5>
              <div className="mb-2 rounded bg-purple-50 p-2">
                <p className="font-mono text-sm font-bold text-purple-800 text-center">
                  Max DD = ((Peak Value − Trough Value) ÷ Peak Value) × 100
                </p>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Example:</strong> Account grew to $6,000 then dropped to $4,500 → Max DD = ($6,000 − $4,500) ÷ $6,000
                = <strong className="text-red-700">25%</strong>
              </p>
              <ComparisonTable
                headers={['Drawdown', 'Psychological Impact', 'Recovery Needed']}
                rows={[
                  ['10%', 'Uncomfortable but manageable', '11% gain to recover'],
                  ['20%', 'Serious — many traders quit here', '25% gain to recover'],
                  ['30%', 'Devastating — confidence shattered', '43% gain to recover'],
                  ['50%', 'Catastrophic — account half gone', '100% gain to recover'],
                ]}
              />
            </div>

            {/* Metric 5: Profit Factor */}
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h5 className="mb-2 flex items-center gap-2 text-sm font-bold text-purple-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">5</span>
                Profit Factor
              </h5>
              <div className="mb-2 rounded bg-purple-50 p-2">
                <p className="font-mono text-sm font-bold text-purple-800 text-center">
                  Profit Factor = Gross Profits ÷ Gross Losses
                </p>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Example:</strong> Total wins = $15,000, Total losses = $6,000 → Profit Factor = $15,000 ÷ $6,000
                = <strong className="text-green-700">2.5</strong>
              </p>
              <ComparisonTable
                headers={['Profit Factor', 'Quality', 'Action']}
                rows={[
                  ['Below 1.0', 'Losing strategy', 'Discard'],
                  ['1.0–1.5', 'Marginal', 'High risk — may not survive live trading'],
                  ['1.5–2.0', 'Good', 'Viable for forward testing'],
                  ['2.0–3.0', 'Strong', 'Solid strategy'],
                  ['Above 3.0', 'Exceptional (verify!)', 'Likely overfit — verify on new data'],
                ]}
              />
            </div>

            {/* Metric 6: Sharpe Ratio */}
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h5 className="mb-2 flex items-center gap-2 text-sm font-bold text-purple-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">6</span>
                Sharpe Ratio
              </h5>
              <div className="mb-2 rounded bg-purple-50 p-2">
                <p className="font-mono text-sm font-bold text-purple-800 text-center">
                  Sharpe = (Avg Return − Risk-Free Rate) ÷ Std Dev of Returns
                </p>
              </div>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Example:</strong> Avg return 2% per trade, risk-free rate 0.5%, std dev 3% → Sharpe = (2% − 0.5%) ÷ 3%
                = <strong>0.5</strong> (below average — returns are too volatile)
              </p>
              <ComparisonTable
                headers={['Sharpe Ratio', 'Quality', 'Interpretation']}
                rows={[
                  ['Below 0.5', 'Poor', 'Returns don&apos;t compensate for risk'],
                  ['0.5–1.0', 'Below average', 'Risk-adjusted returns are weak'],
                  ['1.0–2.0', 'Good', 'Solid risk-adjusted performance'],
                  ['2.0–3.0', 'Very good', 'Strong, consistent returns'],
                  ['Above 3.0', 'Excellent', 'Outstanding (verify not overfit)'],
                ]}
              />
            </div>

            {/* Strategy Acceptance Checklist */}
            <div className="rounded-lg border-2 border-purple-300 bg-purple-50/40 p-4 sm:p-5">
              <h5 className="mb-3 flex items-center gap-2 text-sm font-bold text-purple-800 sm:text-base">
                <ClipboardCheck className="h-5 w-5" /> Strategy Acceptance Checklist
              </h5>
              <div className="space-y-2">
                <ChecklistItem>Win rate ≥ 50% (or ≥ 40% with R:R ≥ 2:1)</ChecklistItem>
                <ChecklistItem>Average R:R ≥ 1.5:1</ChecklistItem>
                <ChecklistItem>Expectancy is positive and significant</ChecklistItem>
                <ChecklistItem>Maximum drawdown ≤ 25%</ChecklistItem>
                <ChecklistItem>Profit factor ≥ 1.5</ChecklistItem>
                <ChecklistItem>Sharpe ratio ≥ 1.0</ChecklistItem>
                <ChecklistItem>Tested on 50+ trades</ChecklistItem>
                <ChecklistItem>Tested across different market conditions</ChecklistItem>
                <ChecklistItem>No look-ahead bias or overfitting</ChecklistItem>
              </div>
            </div>

            <KeyTakeaway>
              No single metric tells the full story. A 70% win rate is useless with a 0.3:1 R:R, and a 3:1 R:R
              is useless with a 20% win rate. All six metrics must pass before you forward-test with real money on the line.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TRADINGVIEW LAB: Backtesting Practice
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-tradingview-lab"
          title="TradingView Practice Lab — Backtesting Replay"
          icon={<FlaskConical />}
          variant="default"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Apply what you learned about backtesting using the interactive TradingView simulator below.
            Practice scrolling through candles bar-by-bar, identifying setups, and tracking your entries
            and exits as if you were performing a real manual backtest.
          </p>
          <TradingViewLab />
        </TopicCard>
      </div>
    </section>
  )
}
