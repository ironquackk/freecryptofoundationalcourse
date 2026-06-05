'use client'

import React from 'react'
import {
  Flag,
  ClipboardCheck,
  Lightbulb,
  Pencil,
  Award,
  Crosshair,
  FlaskConical,
  Calculator,
  ShieldCheck,
  FileText,
  Brain,
  TrendingUp,
  AlertTriangle,
  Activity,
  Target,
  BarChart3,
  Layers,
  Eye,
  RefreshCw,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { QuizQuestion } from '@/components/academy/quiz-question'
import { DriverCard } from '@/components/academy/driver-card'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { TradingViewLab } from '@/components/academy/tradingview-lab'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

export function Day7FinalBlock() {
  return (
    <section id="d7-final" aria-labelledby="d7-final-heading">
      <SectionDivider
        icon={<Flag />}
        title="FINAL BLOCK — 5:30–6:00: REVIEW & PRACTICE — MODULE 7"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TRADINGVIEW LAB: Signal Backtesting Practice
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-tradingview-lab-final"
          title="TradingView Lab: Signal Backtesting Practice"
          icon={<FlaskConical />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Now it&apos;s time to backtest the EMA + RSI + Volume strategy on the TradingView simulator.
            Practice identifying entry signals on historical price data and logging them as you would
            in a real manual backtest.
          </p>
          <div className="mb-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="text-sm font-bold text-green-800 mb-2">Practice Instructions — Signal Backtesting</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
                <span>Enable <strong>EMA 20, EMA 50, and EMA 200</strong>. Identify where EMA 20 is above EMA 50 (bullish alignment) — these are potential long zones.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
                <span>Turn on <strong>RSI</strong>. Find areas where RSI was between 40–60 and bouncing upward — this is the confirmation condition for a long entry.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
                <span>Enable <strong>Volume</strong> and check if volume was increasing on the bounce candles — the third confirmation of a valid signal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
                <span>Use the <strong>Horizontal Line</strong> tool to mark where you would enter, set your stop-loss, and define TP1/TP2/TP3. Calculate the R:R ratio for each setup.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">5</span>
                <span>Log at least <strong>3 signal setups</strong> with: Entry price, SL, TP1, TP2, TP3, R:R ratio, and confluence score out of 100.</span>
              </li>
            </ol>
          </div>
          <TradingViewLab />
          <KeyTakeaway>
            Backtesting on the chart builds pattern recognition. When you manually identify where the EMA + RSI + Volume
            strategy would have signaled entries, you train your eyes to spot those same patterns in real-time trading.
          </KeyTakeaway>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 16: Practice Exercises
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-practice"
          title="Practice Exercises"
          icon={<ClipboardCheck />}
          variant="highlight"
        >
          <div className="space-y-5">
            {/* Exercise 1 */}
            <div className="rounded-lg border-2 border-purple-200 bg-purple-50/30 p-4 sm:p-5">
              <div className="mb-3 flex items-center gap-2">
                <Crosshair className="h-5 w-5 text-purple-600" />
                <h4 className="text-base font-bold text-purple-800 sm:text-lg">Exercise 1: Manual Backtest (30 min)</h4>
              </div>
              <p className="mb-3 text-sm text-slate-700 sm:text-base">
                Backtest the <strong>EMA + RSI + Volume strategy</strong> on BTC/USDT over the last 3 months on the 4H timeframe.
              </p>
              <div className="space-y-1.5 text-sm text-slate-600">
                <p>• Open TradingView → BTC/USDT 4H → scroll back 3 months</p>
                <p>• Apply EMA 20/50/200, RSI(14), and volume</p>
                <p>• Move forward bar-by-bar using Replay mode</p>
                <p>• Log every signal that meets ALL 5 entry conditions</p>
                <p>• Record: Entry, SL, TP1, TP2, TP3, Result, P/L, R multiple</p>
                <p>• Minimum: find and log <strong>10 setups</strong></p>
              </div>
            </div>

            {/* Exercise 2 */}
            <div className="rounded-lg border-2 border-amber-200 bg-amber-50/30 p-4 sm:p-5">
              <div className="mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-600" />
                <h4 className="text-base font-bold text-amber-800 sm:text-lg">Exercise 2: Calculate Strategy Metrics (15 min)</h4>
              </div>
              <p className="mb-3 text-sm text-slate-700 sm:text-base">
                Given the following 50-trade results, calculate all six essential metrics:
              </p>
              <div className="rounded border border-slate-200 bg-white p-3 text-sm text-slate-700">
                <p>• Total trades: 50 | Wins: 29 | Losses: 21</p>
                <p>• Total profit from wins: $14,500</p>
                <p>• Total loss from losses: $6,300</p>
                <p>• Average win: $500 | Average loss: $300</p>
                <p>• Peak account: $7,800 | Trough: $6,200</p>
                <p>• Std dev of returns: 2.8% | Avg return: 1.9%</p>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Calculate: Win Rate, Avg R:R, Expectancy, Max DD, Profit Factor, Sharpe Ratio. Does this strategy pass the acceptance checklist?
              </p>
            </div>

            {/* Exercise 3 */}
            <div className="rounded-lg border-2 border-green-200 bg-green-50/30 p-4 sm:p-5">
              <div className="mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                <h4 className="text-base font-bold text-green-800 sm:text-lg">Exercise 3: Signal Generation Drill (15 min)</h4>
              </div>
              <p className="mb-3 text-sm text-slate-700 sm:text-base">
                Score the current BTC/USDT setup using the Confluence Score Table:
              </p>
              <div className="space-y-1.5 text-sm text-slate-600">
                <p>• Open BTC/USDT on MEXC or TradingView</p>
                <p>• Identify the current market regime (Step 1)</p>
                <p>• Score each of the 7 confluence factors (Step 2)</p>
                <p>• Determine the entry zone, SL, and TP levels (Steps 3–5)</p>
                <p>• Calculate position size using the 1% rule (Step 6)</p>
                <p>• Fill in the complete signal log template (Step 7)</p>
                <p>• <strong>Would you take this trade? Why or why not?</strong></p>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 17: Day 7 Quiz (20 Questions)
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-quiz"
          title="Day 7 Self-Check Quiz — 20 Questions"
          icon={<ClipboardCheck />}
          variant="default"
        >
          <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
            Test your understanding of everything we covered today. Click each question to reveal
            the answer. Score yourself honestly!
          </p>

          <div className="space-y-3">
            <QuizQuestion number={1} question="What are the 7 steps of the signal generation process?">
              <p>
                <strong>1) Market Regime Identification</strong> — determine the current market type (trend, range, volatile).{' '}
                <strong>2) Multi-Timeframe Confluence</strong> — score confluence across factors (minimum 70/100).{' '}
                <strong>3) Entry Zone Definition</strong> — define an acceptable price range for entry.{' '}
                <strong>4) Stop Loss Placement</strong> — choose the widest SL that still maintains R:R ≥ 2:1.{' '}
                <strong>5) Take Profit Strategy</strong> — scale out 1/3 at TP1 (1R), 1/3 at TP2 (2R), 1/3 at TP3 (3R+).{' '}
                <strong>6) Position Sizing</strong> — use the 1% risk rule.{' '}
                <strong>7) Signal Documentation</strong> — log every detail for future review.
              </p>
            </QuizQuestion>

            <QuizQuestion number={2} question="What are the 6 market regimes and what strategy works in each?">
              <p>
                <strong>Strong Uptrend:</strong> trend-following, pullback buys.{' '}
                <strong>Weak Uptrend:</strong> cautious longs only.{' '}
                <strong>Strong Downtrend:</strong> shorts, pullback sells.{' '}
                <strong>Range-Bound:</strong> buy support, sell resistance.{' '}
                <strong>High Volatility:</strong> reduce size, wider stops.{' '}
                <strong>Low Volatility:</strong> breakout setups.
              </p>
            </QuizQuestion>

            <QuizQuestion number={3} question="What is the minimum confluence score required to take a trade?">
              <p>
                A minimum confluence score of <strong>70/100</strong> is required. Below this, the signal doesn&apos;t have
                enough alignment across factors to justify the risk.
              </p>
            </QuizQuestion>

            <QuizQuestion number={4} question="Which two confluence factors carry the most weight (20 pts each)?">
              <p>
                <strong>Trend Alignment</strong> (20 pts) and <strong>S/R Level</strong> (20 pts). These are the most
                important because a trade against the trend or away from key levels has a much lower probability of success.
              </p>
            </QuizQuestion>

            <QuizQuestion number={5} question="What is the rule for stop loss placement regarding width and R:R?">
              <p>
                <strong>Always use the WIDEST stop that still maintains R:R ≥ 2:1.</strong> A tight stop gets hunted by
                market noise. A wide stop gives your trade room to breathe, but you must ensure the potential reward
                justifies the wider risk.
              </p>
            </QuizQuestion>

            <QuizQuestion number={6} question="Explain the 1/3-1/3-1/3 take profit method.">
              <p>
                Close <strong>1/3 of your position at TP1 (1R profit)</strong> to lock in initial gains.{' '}
                Close <strong>1/3 at TP2 (2R profit)</strong> and move SL to breakeven on the remaining.{' '}
                <strong>Trail the remaining 1/3</strong> to TP3 (3R+) using a trailing stop or let it run.
                This method locks in profits progressively while keeping upside exposure.
              </p>
            </QuizQuestion>

            <QuizQuestion number={7} question="Using the 1% risk rule with a $5,000 account and entry $66,000 / SL $64,800 on BTC, what is your position size?">
              <p>
                Risk per trade = $5,000 × 1% = <strong>$50</strong>. Risk per BTC = $66,000 − $64,800 = <strong>$1,200</strong>.
                Position size = $50 ÷ $1,200 = <strong>0.0417 BTC</strong> (approximately $2,750 position value).
              </p>
            </QuizQuestion>

            <QuizQuestion number={8} question="What are the 4 signal types and their minimum confluence scores?">
              <p>
                <strong>Scalp</strong> (5m–15m): 60/100 confluence, 0.5% risk.{' '}
                <strong>Intraday</strong> (1H–4H): 70/100, 0.75% risk.{' '}
                <strong>Swing</strong> (4H–Daily): 80/100, 1.0% risk.{' '}
                <strong>Position</strong> (Daily–Weekly): 85/100, 1.0% risk.
              </p>
            </QuizQuestion>

            <QuizQuestion number={9} question="What is backtesting and what can it prove vs. not prove?">
              <p>
                <strong>Backtesting</strong> tests a strategy on historical data. It can <strong>prove</strong>: statistical edge,
                average win rate and R:R, max drawdown, which conditions the strategy works in, and realistic expectancy.
                It <strong>cannot prove</strong>: future performance, how you&apos;ll handle emotions, or exact execution quality.
              </p>
            </QuizQuestion>

            <QuizQuestion number={10} question="What are the 5 steps of manual backtesting?">
              <p>
                <strong>1)</strong> Define every rule with zero ambiguity.{' '}
                <strong>2)</strong> Scroll the chart bar-by-bar (never look ahead).{' '}
                <strong>3)</strong> Log every signal, including ones not taken.{' '}
                <strong>4)</strong> Calculate all six metrics after 50+ trades.{' '}
                <strong>5)</strong> Evaluate and iterate — adjust one variable and re-test.
              </p>
            </QuizQuestion>

            <QuizQuestion number={11} question="Name the six essential strategy performance metrics.">
              <p>
                <strong>1) Win Rate</strong> — percentage of winning trades.{' '}
                <strong>2) Risk-Reward Ratio</strong> — average win divided by average loss.{' '}
                <strong>3) Expectancy</strong> — expected profit per trade.{' '}
                <strong>4) Maximum Drawdown</strong> — largest peak-to-trough decline.{' '}
                <strong>5) Profit Factor</strong> — gross profits divided by gross losses.{' '}
                <strong>6) Sharpe Ratio</strong> — risk-adjusted return metric.
              </p>
            </QuizQuestion>

            <QuizQuestion number={12} question="What expectancy is needed to consider a strategy viable?">
              <p>
                Expectancy must be <strong>positive AND significant</strong> — meaning the expected profit per trade
                is large enough to survive real-world conditions (fees, slippage, emotional errors). A marginally
                positive expectancy (e.g., $5 per trade on a $5,000 account) may not be viable after costs.
              </p>
            </QuizQuestion>

            <QuizQuestion number={13} question="If your account peaks at $6,000 and drops to $4,500, what is your max drawdown and how much gain is needed to recover?">
              <p>
                Max DD = ($6,000 − $4,500) ÷ $6,000 = <strong>25%</strong>. Recovery needed = $1,500 ÷ $4,500
                = <strong>33.3% gain</strong> to get back to the peak. This shows why drawdowns are so dangerous —
                the recovery percentage is always larger than the drawdown percentage.
              </p>
            </QuizQuestion>

            <QuizQuestion number={14} question="What is overfitting and what are 3 signs of it?">
              <p>
                <strong>Overfitting</strong> is when a strategy is optimized so perfectly for historical data that it
                loses predictive power for future data. Three signs: (1) Backtest win rate above 80%, (2) Profit factor
                above 3.0 without economic rationale, (3) Strategy uses very specific parameters (e.g., RSI 17.3).
                Other signs: performance degrades on new data, only works on one pair or period.
              </p>
            </QuizQuestion>

            <QuizQuestion number={15} question="Name 3 techniques to avoid overfitting.">
              <p>
                Any 3 of: <strong>Walk-forward analysis</strong> (test on rolling windows),{' '}
                <strong>Parameter stability</strong> (nearby parameter values should also work),{' '}
                <strong>Multi-asset testing</strong> (strategy should work on BTC, ETH, SOL),{' '}
                <strong>Out-of-sample testing</strong> (reserve 30% of data for final verification),{' '}
                <strong>Monte Carlo simulation</strong> (randomize trade order to test survival).
              </p>
            </QuizQuestion>

            <QuizQuestion number={16} question="What is the testing pipeline before going live?">
              <p>
                <strong>Backtest</strong> (50+ trades on historical data) → if metrics pass →{' '}
                <strong>Forward Test</strong> (30+ trades in real-time paper trading) → if consistent →{' '}
                <strong>Live Trading</strong> (start with micro size, scale up gradually). Fail at any stage
                and go back to the previous step or refine.
              </p>
            </QuizQuestion>

            <QuizQuestion number={17} question="What are the 4 paper trading rules?">
              <p>
                <strong>1)</strong> Treat it like real money — record every signal, follow every rule.{' '}
                <strong>2)</strong> No peeking ahead — don&apos;t look at what happened after your entry.{' '}
                <strong>3)</strong> Include fees and slippage — add 0.1% fee and 0.05% slippage per trade.{' '}
                <strong>4)</strong> Minimum 30 trades — less than that is statistically meaningless.
              </p>
            </QuizQuestion>

            <QuizQuestion number={18} question="Name 3 common backtesting mistakes and how to fix them.">
              <p>
                Any 3 of: <strong>Look-ahead bias</strong> (using future data) — fix: use bar-by-bar replay only.{' '}
                <strong>Ignoring fees</strong> — fix: always deduct 0.1% maker + 0.1% taker per round trip.{' '}
                <strong>Ignoring slippage</strong> — fix: add 0.05–0.1% slippage per trade.{' '}
                <strong>Cherry-picking</strong> — fix: log every signal.{' '}
                <strong>Changing rules mid-test</strong> — fix: one change = restart entire backtest.{' '}
                <strong>Too few trades</strong> — fix: minimum 50 trades, 100+ preferred.
              </p>
            </QuizQuestion>

            <QuizQuestion number={19} question="What is the Red Zone protocol when a strategy degrades?">
              <p>
                <strong>1)</strong> Stop trading immediately — switch to paper trading.{' '}
                <strong>2)</strong> Review your last 20 trades — is the market regime different?{' '}
                <strong>3)</strong> Check for rule violations — are you following your own rules?{' '}
                <strong>4)</strong> Re-backtest on recent data — does the edge still exist?{' '}
                <strong>5)</strong> Decide: adapt or abandon — if the edge is gone, don&apos;t force it.
              </p>
            </QuizQuestion>

            <QuizQuestion number={20} question="Describe the EMA + RSI + Volume strategy's long entry conditions.">
              <p>
                All 5 conditions must be true for a long entry: <strong>1)</strong> EMA 20 is above EMA 50 on the 4H chart.{' '}
                <strong>2)</strong> Price pulls back to EMA 20 or the zone between EMA 20 and EMA 50.{' '}
                <strong>3)</strong> RSI(14) is between 40–60 and bouncing upward.{' '}
                <strong>4)</strong> Volume is increasing on the bounce candle.{' '}
                <strong>5)</strong> Price is above EMA 200 on the Daily chart.
              </p>
            </QuizQuestion>
          </div>

          {/* Pass Mark Banner */}
          <div className="mt-6 rounded-xl border-2 border-purple-400 bg-gradient-to-r from-purple-50 to-violet-50 p-5 text-center shadow-sm">
            <Award className="mx-auto mb-2 h-8 w-8 text-purple-600" />
            <p className="text-lg font-bold text-purple-800 sm:text-xl">Pass Mark: 16 / 20</p>
            <p className="mt-1 text-sm text-slate-600">
              You need at least 16 correct answers before moving to Day 8. Review any topics you
              missed!
            </p>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 18: Day 7 Key Takeaways
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-takeaways"
          title="Key Takeaways from Day 7"
          icon={<Lightbulb />}
          variant="highlight"
        >
          <div className="space-y-4">
            <DriverCard number={1} title="The 7-step process is non-negotiable.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Every signal must pass through regime identification, confluence scoring, entry zone, SL, TP,
                position sizing, and documentation. Skip any step and you&apos;re gambling.
              </p>
            </DriverCard>

            <DriverCard number={2} title="Confluence separates signals from noise.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                No single indicator should ever trigger a trade. Score your confluence — 70/100 minimum.
                The more factors align, the higher your probability of success.
              </p>
            </DriverCard>

            <DriverCard number={3} title="Backtesting proves the edge exists.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Without backtesting, you&apos;re flying blind. 50+ trades minimum, six essential metrics calculated,
                and all must pass before you risk a single dollar.
              </p>
            </DriverCard>

            <DriverCard number={4} title="Manual backtesting builds pattern recognition.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Automated tools are faster, but manual backtesting teaches you to read the chart. The pattern
                recognition you build is the real ROI of backtesting.
              </p>
            </DriverCard>

            <DriverCard number={5} title="All six metrics must pass.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Win rate, R:R, expectancy, max drawdown, profit factor, and Sharpe ratio — one good metric
                doesn&apos;t compensate for a failing one. The strategy acceptance checklist is your gate.
              </p>
            </DriverCard>

            <DriverCard number={6} title="Overfitting is the silent killer.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                If it looks too good to be true, it probably is. Use walk-forward analysis, parameter stability
                testing, and out-of-sample data to verify your edge is real.
              </p>
            </DriverCard>

            <DriverCard number={7} title="Forward testing is mandatory.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Backtesting proves the past; forward testing proves the present. 30+ paper trades minimum
                before any live capital. No exceptions.
              </p>
            </DriverCard>

            <DriverCard number={8} title="The 1% risk rule protects your survival.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Position sizing based on 1% risk ensures you can survive a losing streak. Even 10 consecutive
                losses only costs you 10% — recoverable. Without it, 5 bad trades can destroy your account.
              </p>
            </DriverCard>

            <DriverCard number={9} title="Know when to stop.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Monitor your strategy health dashboard. Yellow means caution. Red means stop trading, review,
                and decide whether to adapt or abandon. Hoping a losing strategy recovers is the most expensive mistake.
              </p>
            </DriverCard>

            <DriverCard number={10} title="Document everything.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                If you don&apos;t document it, it never happened. Signal logs, trade journals, and forward test
                records are your most valuable trading tools — they reveal patterns in your behavior that no
                chart can show.
              </p>
            </DriverCard>

            {/* Tomorrow teaser */}
            <div className="mt-4 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 p-5 text-center shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-1">Tomorrow — Day 8</p>
              <p className="text-base font-bold text-white sm:text-lg">Trading Psychology & Mindset Mastery</p>
              <p className="mt-1 text-sm text-slate-400">
                The biggest enemy isn&apos;t the market — it&apos;s you.
              </p>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 19: Day 7 Homework
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-homework"
          title="Day 7 Homework"
          icon={<Pencil />}
          variant="default"
        >
          <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
            Complete all tasks below before starting Day 8. Check each one off as you go!
          </p>

          <div className="rounded-xl border-2 border-purple-300 bg-purple-50/40 p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-2">
              <Pencil className="h-5 w-5 text-purple-600" />
              <h4 className="text-base font-bold text-purple-800 sm:text-lg">
                HOMEWORK CHECKLIST
              </h4>
            </div>

            <div className="space-y-2">
              <ChecklistItem>
                <span>
                  <strong>Task 1:</strong> Complete the <strong>Manual Backtest Exercise</strong> — backtest the EMA + RSI + Volume
                  strategy on BTC/USDT over the last 3 months. Log a minimum of 10 setups with full entry/exit details.
                </span>
              </ChecklistItem>

              <ChecklistItem>
                <span>
                  <strong>Task 2:</strong> Calculate the <strong>six essential metrics</strong> from your backtest results:
                  win rate, average R:R, expectancy, max drawdown, profit factor, and Sharpe ratio. Does your strategy pass
                  the acceptance checklist?
                </span>
              </ChecklistItem>

              <ChecklistItem>
                <span>
                  <strong>Task 3:</strong> Score the <strong>current BTC/USDT setup</strong> using the Confluence Score Table.
                  Fill in the complete signal log template (all 7 steps). Would you take this trade right now? Explain why or why not.
                </span>
              </ChecklistItem>

              <ChecklistItem>
                <span>
                  <strong>Task 4:</strong> Set up <strong>MEXC Demo Trading</strong> or <strong>Binance Testnet</strong>.
                  Place 3 paper trades using any of the three strategy templates from today. Log each trade in the forward test
                  tracking template (including emotional state and confidence level).
                </span>
              </ChecklistItem>

              <ChecklistItem>
                <span>
                  <strong>Task 5:</strong> Write: &ldquo;The most dangerous backtesting mistake I&apos;m most likely to make is ___
                  because ___. My plan to avoid it is ___.&rdquo;
                </span>
              </ChecklistItem>
            </div>
          </div>

          {/* Encouragement */}
          <div className="mt-5 rounded-lg border border-green-200 bg-green-50 p-4 text-center">
            <p className="text-sm font-semibold text-green-800">
              🎯 You now have a complete system — from signal generation to backtesting to forward testing.
              The gap between you and consistent profitability is just practice and discipline. Keep going!
            </p>
          </div>
        </TopicCard>

        <AppliedLabSimulation
          id="d7-lab-mexc-signal"
          title="LAB 10: Signal Generation & Execution"
          subtitle="Generate a complete trading signal using the 7-step process and execute it on the MEXC simulator"
          dayNumber={7}
          sessionName="Final Block"
          labType="mexc"
          learningObjectives={[
            'Apply the 7-step signal generation process in real-time',
            'Generate a complete trading signal with entry, stop-loss, and take-profit',
            'Execute the signal on a demo exchange',
            'Track and evaluate signal performance',
          ]}
          tasks={[
            { id: 'd7-l1-t1', instruction: 'STEP 1 — MARKET CONTEXT: Is the overall crypto market bullish or bearish right now? Check BTC trend direction.', hint: 'If BTC is trending up, altcoins tend to follow. If BTC is trending down, even good altcoin setups may fail.' },
            { id: 'd7-l1-t2', instruction: 'STEP 2 — STRUCTURE: Determine the structure of BTC on the MEXC chart (HH+HL or LH+LL)', hint: 'Use the candlestick chart in the center panel to identify swing highs and lows' },
            { id: 'd7-l1-t3', instruction: 'STEP 3 — KEY LEVELS: Identify the nearest support and resistance levels from the order book and chart', hint: 'The order book shows where orders are clustered — these often align with S/R levels' },
            { id: 'd7-l1-t4', instruction: 'STEP 4 — CONFLUENCE: Count how many factors support your trade direction (structure, level, order flow). Minimum 3 required.', hint: 'If 3+ factors align, proceed. If fewer than 3, do NOT trade this signal.' },
            { id: 'd7-l1-t5', instruction: 'STEP 5 — ENTRY: Place your limit order at the identified level. Set position size using 1% risk rule.', hint: 'Entry at support for buys, entry at resistance for sells. Always use limit orders for precision.' },
            { id: 'd7-l1-t6', instruction: 'STEP 6 — RISK MANAGEMENT: Set stop-loss below support (for buys) and take-profit at next resistance. Verify R:R ≥ 1:2', hint: 'If R:R is less than 1:2, the trade is not worth taking. Wait for a better setup.' },
            { id: 'd7-l1-t7', instruction: 'STEP 7 — EXECUTE & TRACK: Place the order and record all details in your signal log for later review', hint: 'Record: Date, Pair, Direction, Entry, SL, TP, R:R, Confluence Score, Outcome (when known)' },
          ]}
          selfAssessment={[
            {
              question: 'What is the first step in the 7-step signal generation process?',
              options: [
                'Place the order immediately',
                'Determine market context (overall BTC trend direction)',
                'Set stop-loss',
                'Check RSI',
              ],
              correctIndex: 1,
              explanation: 'Market context is always first. If BTC is in a downtrend, even perfect altcoin setups have a lower probability of success. You must understand the macro environment before analyzing any individual setup.',
            },
            {
              question: 'What minimum confluence score should a signal have before you trade it?',
              options: [
                '1 factor is enough',
                'At least 2 factors',
                'At least 3 factors aligned',
                'All 7 factors must align',
              ],
              correctIndex: 2,
              explanation: 'A minimum of 3 factors aligned (e.g., structure + S/R + EMA) gives you an acceptable probability edge. Fewer than 3 means the setup is too weak. More than 3 is even better but not always available.',
            },
          ]}
          expectedOutcomes={[
            'Ability to apply the 7-step signal generation process',
            'Skill in generating complete signals with entry/SL/TP',
            'Understanding of confluence scoring for signal quality',
            'Habit of tracking and evaluating signal performance',
          ]}
        />
      </div>
    </section>
  )
}
