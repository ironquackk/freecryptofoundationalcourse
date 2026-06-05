'use client'

import React from 'react'
import {
  Flag,
  ClipboardList,
  Pencil,
  Lightbulb,
  Award,
  FlaskConical,
  FileText,
  Shield,
  CheckCircle2,
  ClipboardCheck,
  Target,
  Scale,
  Clock,
  BookOpen,
  Brain,
  TrendingUp,
  ShieldAlert,
  PenTool,
  AlertTriangle,
  BarChart3,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { QuizQuestion } from '@/components/academy/quiz-question'
import { DriverCard } from '@/components/academy/driver-card'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { TradingViewLab } from '@/components/academy/tradingview-lab'
import { MEXCLab } from '@/components/academy/mexc-lab'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day9FinalBlock() {
  return (
    <section id="d9-final" aria-labelledby="d9-final-heading">
      <SectionDivider
        icon={<Flag />}
        title="FINAL BLOCK — 5:30-6:00: REVIEW & PRACTICE — MODULE 7"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 18: Practice Exercises
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-practice"
          title="Practice Exercises"
          icon={<FlaskConical className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              These three exercises will transform today&apos;s theory into your actual trading plan. Complete all three before you leave.
            </p>

            {/* Exercise 1 */}
            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/30 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">1</div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 sm:text-lg">Complete Your Trading Plan</h4>
                  <p className="text-xs text-emerald-700 font-medium">⏱ 30 minutes</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 mb-3">
                Open a new document (Google Docs, Notion, or pen and paper) and fill in <strong>all 12 sections</strong> of the trading plan template from Topic 15. Don&apos;t leave anything blank. If you&apos;re unsure about a section, write your best answer — you can refine it later.
              </p>
              <div className="rounded-lg border border-emerald-200 bg-white/60 p-3">
                <div className="space-y-2">
                  <ChecklistItem><span>Write your mission statement</span></ChecklistItem>
                  <ChecklistItem><span>Define your SMART goals (short/medium/long-term)</span></ChecklistItem>
                  <ChecklistItem><span>List your primary trading pairs</span></ChecklistItem>
                  <ChecklistItem><span>Choose your three timeframes</span></ChecklistItem>
                  <ChecklistItem><span>Write out your 7-step entry checklist</span></ChecklistItem>
                  <ChecklistItem><span>Define your exit rules (SL, TP, trail, time stop)</span></ChecklistItem>
                  <ChecklistItem><span>Write your risk management parameters</span></ChecklistItem>
                  <ChecklistItem><span>Calculate your position sizing for current account</span></ChecklistItem>
                  <ChecklistItem><span>Outline your daily routine schedule</span></ChecklistItem>
                  <ChecklistItem><span>Set up your journaling system</span></ChecklistItem>
                  <ChecklistItem><span>Write your 10 psychology rules</span></ChecklistItem>
                  <ChecklistItem><span>Define your performance benchmarks</span></ChecklistItem>
                </div>
              </div>
            </div>

            {/* Exercise 2 */}
            <div className="rounded-xl border-2 border-amber-300 bg-amber-50/30 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">2</div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 sm:text-lg">Stress Test Your Plan</h4>
                  <p className="text-xs text-amber-700 font-medium">⏱ 15 minutes</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 mb-3">
                Go through the 20-question stress test from Topic 17. Answer each one honestly. Circle or highlight any question where your answer is &ldquo;No&rdquo; — those are your action items to fix before going live.
              </p>
              <div className="rounded-lg border border-amber-200 bg-white/60 p-3">
                <div className="space-y-2">
                  <ChecklistItem><span>Answer all 20 stress test questions</span></ChecklistItem>
                  <ChecklistItem><span>Highlight every &ldquo;No&rdquo; answer</span></ChecklistItem>
                  <ChecklistItem><span>Write a fix-it plan for each &ldquo;No&rdquo; (what, when, how)</span></ChecklistItem>
                  <ChecklistItem><span>Set a deadline to fix all gaps before going live</span></ChecklistItem>
                </div>
              </div>
            </div>

            {/* Exercise 3 */}
            <div className="rounded-xl border-2 border-red-300 bg-red-50/30 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">3</div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 sm:text-lg">Emergency Drill</h4>
                  <p className="text-xs text-red-700 font-medium">⏱ 15 minutes</p>
                </div>
              </div>
              <p className="text-sm text-slate-700 mb-3">
                Imagine each of the 6 emergency scenarios actually happened right now. Walk through your response step by step. Time yourself — in a real emergency, you need to act fast.
              </p>
              <div className="rounded-lg border border-red-200 bg-white/60 p-3">
                <div className="space-y-2">
                  <ChecklistItem><span>MEXC goes down mid-trade — walk through your response</span></ChecklistItem>
                  <ChecklistItem><span>BTC flash-crashes 15% — what do you do?</span></ChecklistItem>
                  <ChecklistItem><span>A pair you hold gets delisted — immediate action?</span></ChecklistItem>
                  <ChecklistItem><span>You realize you&apos;re on tilt after 3 losses — protocol?</span></ChecklistItem>
                  <ChecklistItem><span>Write the emergency card and place it by your desk</span></ChecklistItem>
                </div>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TRADINGVIEW LAB: Plan-Based Analysis
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-tradingview-lab-final"
          title="TradingView Lab: Plan-Based Analysis"
          icon={<FlaskConical className="h-5 w-5" />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Now that you have a complete trading plan, apply it to live charts. Every analysis you do
            should follow your plan&apos;s entry rules, risk parameters, and timeframes. No improvising.
          </p>
          <div className="mb-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="text-sm font-bold text-green-800 mb-2">Practice Instructions — Plan-Based Analysis</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
                <span><strong>Follow your timeframe plan:</strong> Switch to your Context TF first (e.g., Daily). What is the trend? Then drop to your Signal TF (e.g., 4H) to find setups. Then use Precision TF (e.g., 1H) for entry timing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
                <span><strong>Apply your Entry Decision Tree:</strong> (1) Higher-TF trend? (2) Valid S/R nearby? (3) Strategy signal aligns? (4) R:R ≥ 1:1.5? (5) Risk within limits? (6) No major news? (7) Right mental state? If ANY is NO → no trade.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
                <span><strong>Use your plan&apos;s indicators:</strong> Enable only the indicators specified in your trading plan (e.g., EMA 20/50/200, RSI). Don&apos;t add extra indicators on a whim — that&apos;s plan violation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
                <span><strong>Mark your levels:</strong> Use Horizontal Line and Trend Line tools to mark S/R and entry zones exactly as your plan dictates. Document the R:R ratio for every potential setup.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">5</span>
                <span><strong>Score confluence:</strong> Use your plan&apos;s confluence scoring system. Only proceed if the score meets your minimum threshold (≥ 70/100). Write the breakdown in your journal.</span>
              </li>
            </ol>
          </div>
          <TradingViewLab />
          <KeyTakeaway>
            A trading plan only works if you follow it on every single trade. When you apply your plan to
            the chart, you should be able to answer every question on your Entry Decision Tree with confidence.
            If you can&apos;t, the answer is always &ldquo;no trade.&rdquo;
          </KeyTakeaway>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            MEXC TRADING LAB: Plan-Based Trading
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-mexc-lab"
          title="MEXC Trading Lab: Plan-Based Trading"
          icon={<FlaskConical className="h-5 w-5" />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Execute trades strictly according to your trading plan using the MEXC simulator. Every order
            must pass your plan&apos;s entry rules, risk management parameters, and psychology checklist.
            No exceptions — this is plan-based trading, not impulse trading.
          </p>
          <div className="mb-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="text-sm font-bold text-green-800 mb-2">Practice Instructions — Plan-Based Trading</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
                <span><strong>Check your daily routine:</strong> Have you completed your pre-market check? Scanned your watchlist? Identified setups? Don&apos;t trade if you haven&apos;t done your routine.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
                <span><strong>Calculate position size using your plan:</strong> With 10,000 USDT balance, use the Fixed Percentage Model from your plan (1% risk = $100 max loss per trade). Enter the correct amount.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
                <span><strong>Place a limit order at your plan&apos;s entry zone:</strong> Don&apos;t market buy. Use the order book to find the best entry price within your planned zone.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
                <span><strong>Verify risk limits:</strong> Does this trade exceed your daily max (3%)? Weekly max (6%)? Are you already holding 2 correlated positions? If any limit is breached, skip the trade.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">5</span>
                <span><strong>Journal the trade with all 12 data points:</strong> Date/time, pair, direction, entry, SL, TP, size, strategy, exit reason, P&amp;L, emotional state, rule compliance.</span>
              </li>
            </ol>
          </div>
          <MEXCLab />
          <KeyTakeaway>
            Your trading plan is your contract with yourself. If you can&apos;t follow it in a simulator with
            fake money, you won&apos;t follow it with real money. Every trade must pass your entry rules,
            risk limits, and psychology checklist — no exceptions, no improvisation.
          </KeyTakeaway>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 19: Day 9 Quiz (20 Questions)
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-quiz"
          title="Day 9 Self-Check Quiz — 20 Questions"
          icon={<ClipboardCheck className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Test your understanding of everything we covered today. Click each question to reveal the answer. Score yourself honestly!
            </p>

            <div className="space-y-3">
              <QuizQuestion number={1} question="What is the difference between a trading strategy and a trading plan?">
                <p>
                  A <strong>trading strategy</strong> tells you how to find and execute trades (entry and exit signals).
                  A <strong>trading plan</strong> is a comprehensive written document covering your entire trading business —
                  including strategy, risk management, daily routine, journaling, psychology rules, performance benchmarks,
                  and emergency protocols. A strategy is one piece of the plan; the plan is the entire system.
                </p>
              </QuizQuestion>

              <QuizQuestion number={2} question="Name all 12 components of a complete trading plan.">
                <p>
                  (1) Mission &amp; Goals, (2) Market Selection, (3) Timeframe Selection, (4) Trading Strategies,
                  (5) Entry Rules, (6) Exit Rules, (7) Risk Management Rules, (8) Position Sizing Model,
                  (9) Daily Routine, (10) Journaling &amp; Review Process, (11) Psychology Rules, (12) Performance Benchmarks.
                </p>
              </QuizQuestion>

              <QuizQuestion number={3} question="What does SMART stand for in goal setting? Give an example of a SMART trading goal.">
                <p>
                  <strong>SMART</strong> = Specific, Measurable, Achievable, Relevant, Time-bound. Example: &ldquo;I will achieve
                  a win rate of 40%+ with an average R:R of 1:2 on BTC/USDT and ETH/USDT using the EMA+RSI strategy
                  on the 4H timeframe, completing 100 trades by end of Month 3.&rdquo;
                </p>
              </QuizQuestion>

              <QuizQuestion number={4} question="Why should beginners start with only BTC/USDT and ETH/USDT?">
                <p>
                  BTC/USDT and ETH/USDT are the most liquid crypto pairs (tightest spreads, deepest order books),
                  the most analyzed (most educational content available), and the most predictable (most established
                  patterns). Starting with 2 pairs allows deep focus and mastery. Trading 20 pairs leads to
                  shallow analysis and poor decisions.
                </p>
              </QuizQuestion>

              <QuizQuestion number={5} question="Explain the Three-Screen Method for timeframe selection.">
                <p>
                  <strong>Screen 1 (Context TF):</strong> The higher timeframe used to determine trend direction and
                  market bias (e.g., Daily). <strong>Screen 2 (Signal TF):</strong> The timeframe where your strategy
                  generates entry signals (e.g., 4H). <strong>Screen 3 (Precision TF):</strong> The lower timeframe
                  used to fine-tune entry price and stop-loss placement (e.g., 1H).
                </p>
              </QuizQuestion>

              <QuizQuestion number={6} question="When can you add a 3rd trading strategy?">
                <p>
                  You can add a 3rd strategy only after: (1) completing 50+ trades with your first two strategies,
                  (2) trading consistently for at least 3 months, and (3) achieving positive expectancy on at least
                  one of your existing strategies. Adding strategies too early leads to confusion and lack of mastery.
                </p>
              </QuizQuestion>

              <QuizQuestion number={7} question="What are the 7 steps of the Entry Decision Tree?">
                <p>
                  (1) What is the higher-TF trend? (2) Is there a valid S/R level nearby? (3) Does the strategy
                  signal align? (4) Is R:R at least 1:1.5 or better? (5) Is risk within daily/weekly limits?
                  (6) No major news/event within 2 hours? (7) Are you in the right mental state? If ANY step
                  is NO → no trade.
                </p>
              </QuizQuestion>

              <QuizQuestion number={8} question="What is the hierarchy of exit rules (5 priorities)?">
                <p>
                  Priority 1: <strong>Hard Stop-Loss</strong> (non-negotiable exit price, placed before entry).
                  Priority 2: <strong>Trailing Stop</strong> (moves with price to lock profits, never backward).
                  Priority 3: <strong>Take-Profit Target</strong> (pre-defined target based on S/R or R:R).
                  Priority 4: <strong>Time Stop</strong> (exit if trade hasn&apos;t moved after X candles).
                  Priority 5: <strong>Signal-Based Exit</strong> (exit on counter-signal regardless of other rules).
                </p>
              </QuizQuestion>

              <QuizQuestion number={9} question="What is the formula for position sizing using the Fixed Percentage Model?">
                <p>
                  <strong>Position Size = (Account × Risk%) ÷ Stop-Loss Distance</strong>. For example, with a $5,000
                  account, 1% risk ($50), and a 2% stop-loss distance: Position Size = ($5,000 × 0.01) ÷ 0.02 = $2,500.
                  If stopped out, you lose exactly $50 (1% of account).
                </p>
              </QuizQuestion>

              <QuizQuestion number={10} question="What are the 4 layers of the Risk Management Framework?">
                <p>
                  <strong>Layer 1 (Position Level):</strong> Max 1-2% risk per trade, stop-loss on every trade, R:R ≥ 1:1.5.
                  <strong>Layer 2 (Daily Level):</strong> Max 3 trades/day, max 3% daily loss, stop after 2 consecutive losses.
                  <strong>Layer 3 (Weekly Level):</strong> Max 6% weekly drawdown, review every Sunday.
                  <strong>Layer 4 (Portfolio Level):</strong> Max 10% total exposure, max 2 correlated positions.
                </p>
              </QuizQuestion>

              <QuizQuestion number={11} question="Why is correlation risk important? Give an example.">
                <p>
                  Correlated assets move together, so holding positions in the same direction on correlated pairs
                  doubles your risk. For example, BTC and ETH are highly correlated — if BTC drops 5%, ETH likely
                  drops 4-6%. If you&apos;re long both, you lose on both simultaneously. The rule: maximum 2 positions
                  in the same direction on correlated assets.
                </p>
              </QuizQuestion>

              <QuizQuestion number={12} question="What are the 5 time blocks in the daily trading routine?">
                <p>
                  (1) <strong>Pre-Market (7:00 AM)</strong> — 7 items including overnight review, news check, setup identification.
                  (2) <strong>First Chart Check (7:30 AM)</strong> — 5 items including framework analysis, entries, and journaling.
                  (3) <strong>Midday Check (12:00 PM)</strong> — 4 items including position review and new 4H setups.
                  (4) <strong>End-of-Day (6:00 PM)</strong> — 9 items including trade review, P&amp;L calculation, and emotional review.
                  (5) <strong>Sunday Weekly Review</strong> — 6 items including weekly performance analysis and next-week planning.
                </p>
              </QuizQuestion>

              <QuizQuestion number={13} question="What are the minimum 12 data points to track per trade in your journal?">
                <p>
                  (1) Date &amp; Time of Entry, (2) Pair, (3) Direction (Long/Short), (4) Entry Price,
                  (5) Stop-Loss Price, (6) Take-Profit Price(s), (7) Position Size ($), (8) Strategy Used,
                  (9) Exit Price &amp; Reason, (10) P&amp;L ($ and %), (11) Emotional State (1-10),
                  (12) Rule Compliance (Y/N).
                </p>
              </QuizQuestion>

              <QuizQuestion number={14} question="Name 3 of the 10 psychology rules from your trading plan.">
                <p>
                  Any 3 of: (1) No trading within 30 min of emotional event, (2) FOMO = close chart for 15 min,
                  (3) 2 consecutive losses = 2-hour break, (4) Never move SL further from entry,
                  (5) Never increase size after a loss, (6) Can&apos;t explain in 1 sentence = don&apos;t trade,
                  (7) Rate emotion 1-10 before every trade, (8) Stop trading after daily loss limit,
                  (9) 1 full day off per week, (10) Review psychology rules weekly.
                </p>
              </QuizQuestion>

              <QuizQuestion number={15} question="What are the 5 criteria to scale UP your position size?">
                <p>
                  (1) 100+ trades completed with full journal data, (2) Positive expectancy over last 50 trades,
                  (3) 90%+ rule compliance over the last month, (4) 3 consecutive profitable months,
                  (5) Max drawdown under 6% in any single month. All 5 must be true before increasing from 1% to 1.5%.
                </p>
              </QuizQuestion>

              <QuizQuestion number={16} question="What triggers a mandatory scale DOWN of position size?">
                <p>
                  Any ONE of: (1) Hit weekly max drawdown 2 weeks in a row, (2) Win rate drops below 30% over 30 trades,
                  (3) Rule compliance below 70% for the week, (4) Emotional state consistently above 7/10 before trades,
                  (5) 3 consecutive losing days. Triggers reduction from 1% to 0.5% risk per trade until resolved.
                </p>
              </QuizQuestion>

              <QuizQuestion number={17} question="What should you do if MEXC goes down while you have an open position?">
                <p>
                  (1) Don&apos;t panic. (2) Use Binance as backup to monitor price. (3) When MEXC returns, use
                  <strong>limit orders only</strong> to adjust your position — do NOT market buy/sell on return
                  (liquidity is thin and slippage is high after an outage). (4) If your SL was triggered during
                  the outage, accept it and move on — don&apos;t re-enter immediately.
                </p>
              </QuizQuestion>

              <QuizQuestion number={18} question="What is a Time Stop and when would you use it?">
                <p>
                  A <strong>Time Stop</strong> is a rule that exits a trade if it hasn&apos;t moved significantly
                  in your direction within a defined number of candles. Example: If price hasn&apos;t moved 1% in
                  your direction within 5 daily candles, exit the trade. Time stops free capital from dead trades
                  and reduce opportunity cost.
                </p>
              </QuizQuestion>

              <QuizQuestion number={19} question="What happens if you can&apos;t answer YES to all 20 questions on the Plan Stress Test?">
                <p>
                  You are <strong>not ready to trade live</strong>. Every &ldquo;No&rdquo; represents a gap in your
                  plan that could cost you money. Go back and fill in the gaps before risking real capital.
                  Fix each &ldquo;No&rdquo; with a specific action item and deadline. Only go live when all 20 answers are YES.
                </p>
              </QuizQuestion>

              <QuizQuestion number={20} question="Why is it critical that your trading plan is a WRITTEN document, not just in your head?">
                <p>
                  A written plan: (1) Eliminates ambiguity — you can&apos;t reinterpret vague mental rules to justify
                  bad trades. (2) Creates accountability — you can review whether you actually followed your rules.
                  (3) Reduces emotional decisions — you reference the plan, not your feelings. (4) Enables review
                  and improvement — you can&apos;t improve what you haven&apos;t defined. Mental plans bend to emotions;
                  written plans don&apos;t.
                </p>
              </QuizQuestion>
            </div>

            {/* Pass Mark Banner */}
            <div className="mt-6 rounded-xl border-2 border-emerald-400 bg-gradient-to-r from-emerald-50 to-green-50 p-5 text-center shadow-sm">
              <Award className="mx-auto mb-2 h-8 w-8 text-emerald-600" />
              <p className="text-lg font-bold text-emerald-800 sm:text-xl">Pass Mark: 16 / 20</p>
              <p className="mt-1 text-sm text-slate-600">
                You need at least 16 correct answers before moving to Day 10. Review any topics you missed!
              </p>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 20: Day 9 Key Takeaways
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-takeaways"
          title="Day 9 Key Takeaways"
          icon={<Lightbulb className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-4">
            <DriverCard number={1} title="A trading plan is your entire business — not just a strategy.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Strategy is one piece. Your plan covers mission, markets, timeframes, entries, exits, risk,
                routine, journaling, psychology, and benchmarks. Missing any piece creates a blind spot.
              </p>
            </DriverCard>

            <DriverCard number={2} title="Written rules beat mental rules every time.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Mental rules bend to emotions. Written rules don&apos;t. If it&apos;s not written down, it&apos;s not a rule —
                it&apos;s a suggestion you&apos;ll ignore when it matters most.
              </p>
            </DriverCard>

            <DriverCard number={3} title="Risk management is the most important component.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Without risk management, everything else is meaningless. 1-2% per trade, 3% daily max, 6% weekly
                max. These numbers keep you in the game long enough to let your edge work.
              </p>
            </DriverCard>

            <DriverCard number={4} title="Position sizing is a formula, not a feeling.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Always calculate position size before entry using the Fixed Percentage Model. Never risk more
                than 1-2% per trade regardless of how &ldquo;sure&rdquo; you feel about the setup.
              </p>
            </DriverCard>

            <DriverCard number={5} title="Your daily routine eliminates impulsive decisions.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Only check charts during scheduled times. Random browsing leads to random trades. Structure
                protects you from your own impulses.
              </p>
            </DriverCard>

            <DriverCard number={6} title="If you don&apos;t track it, you can&apos;t improve it.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Journal every trade with 12 data points minimum. The data you collect becomes the foundation
                for refining your strategy and scaling your performance.
              </p>
            </DriverCard>

            <DriverCard number={7} title="Psychology rules are as important as risk rules.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                From Day 8: Your brain is your best and worst tool. Integrate all 10 psychology rules into your
                plan and journal violations the same way you journal broken trades.
              </p>
            </DriverCard>

            <DriverCard number={8} title="Scale up is earned; scale down is a safety mechanism.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                You need 5 criteria met to scale up (100+ trades, positive expectancy, 90%+ compliance, 3
                profitable months, &lt;6% drawdown). But only 1 trigger to scale down. Asymmetry by design.
              </p>
            </DriverCard>

            <DriverCard number={9} title="Emergency protocols remove panic from the equation.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                When things go wrong, you don&apos;t need to think — you need to follow the protocol. Print the
                emergency card and keep it visible. Reacting on instinct in a crisis leads to bad decisions.
              </p>
            </DriverCard>

            <DriverCard number={10} title="The 20-question stress test is your final gate.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                If you can&apos;t answer YES to all 20, you&apos;re not ready for live trading. Every &ldquo;No&rdquo; is a
                potential way to lose money. Fix it before you risk real capital.
              </p>
            </DriverCard>

            {/* Tomorrow teaser */}
            <div className="rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 p-5 text-center shadow-lg">
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-400 mb-1">Tomorrow — Day 10</p>
              <p className="text-lg font-bold text-white sm:text-xl">The Final Challenge</p>
              <p className="mt-2 text-sm text-slate-300">
                Your graduation day — putting everything together in a live simulation. The 10-day journey concludes.
              </p>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 21: Day 9 Homework
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d9-homework"
          title="Day 9 Homework"
          icon={<Pencil className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Complete all tasks below before starting Day 10. Check each one off as you go!
            </p>

            <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50/40 p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-emerald-600" />
                <h4 className="text-base font-bold text-emerald-800 sm:text-lg">
                  HOMEWORK CHECKLIST
                </h4>
              </div>

              <div className="space-y-2">
                <ChecklistItem>
                  <span>
                    <strong>Task 1:</strong> Finalize your <strong>complete written trading plan</strong> with all 12
                    components. This should be a document you can print and reference while trading. Don&apos;t leave any
                    section blank.
                  </span>
                </ChecklistItem>

                <ChecklistItem>
                  <span>
                    <strong>Task 2:</strong> Complete the <strong>20-question stress test</strong> and fix every &ldquo;No&apos;&apos;
                    answer. Your goal is 20/20 YES before Day 10. Write your fix-it plan with deadlines.
                  </span>
                </ChecklistItem>

                <ChecklistItem>
                  <span>
                    <strong>Task 3:</strong> Set up your <strong>trading journal</strong> (Google Sheets, Notion, or
                    spreadsheet). Create all 12 columns for data tracking. Enter at least 3 hypothetical trades from
                    past analysis to test the system.
                  </span>
                </ChecklistItem>

                <ChecklistItem>
                  <span>
                    <strong>Task 4:</strong> Write the <strong>Emergency Protocol Quick Reference Card</strong> on a
                    physical piece of paper (or print it). Place it next to your trading desk. Read it once before
                    every trading session.
                  </span>
                </ChecklistItem>

                <ChecklistItem>
                  <span>
                    <strong>Task 5:</strong> Write: &ldquo;The most important thing I learned about trading plans today
                    is ___ because ___.&rdquo; Minimum 100 words. Be specific — reference a component, rule, or insight
                    that changed how you think about trading.
                  </span>
                </ChecklistItem>
              </div>
            </div>

            {/* Encouragement banner */}
            <div className="rounded-xl border border-emerald-400 bg-gradient-to-r from-emerald-50 to-green-50 p-4 text-center">
              <p className="text-base font-bold text-emerald-800 sm:text-lg">
                🎯 You now have the complete blueprint for professional trading.
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Tomorrow is the final day — your graduation challenge. Bring your completed trading plan.
              </p>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            APPLIED LAB SIMULATION: Plan-Based Trading
        ══════════════════════════════════════════════════════════════════ */}
        <AppliedLabSimulation
          id="d9-lab-mexc-plan"
          title="LAB 12: Plan-Based Trading — Execute According to Your Rules"
          subtitle="Use the MEXC simulator to execute a trade strictly according to a predefined trading plan"
          dayNumber={9}
          sessionName="Final Block"
          labType="mexc"
          learningObjectives={[
            'Execute a trade strictly following a predefined trading plan',
            'Practice the discipline of sticking to plan rules even when emotions push otherwise',
            'Use the 12-component trading plan as a decision framework',
            'Evaluate whether the trade was plan-compliant or emotion-driven',
          ]}
          tasks={[
            { id: 'd9-l1-t1', instruction: 'BEFORE TRADING: Write down your trading plan for this session: Market selection, Entry criteria, Exit criteria, Risk per trade, Max positions', hint: 'Your plan should be specific: "I will trade BTC/USDT. I will buy when price pulls back to EMA 20 support in an uptrend. SL below the swing low. TP at previous high. Risk: 1% ($100). Max 1 position."' },
            { id: 'd9-l1-t2', instruction: 'Check if the current market conditions match your plan entry criteria. If they do not match, DO NOT TRADE. Sit and wait.', hint: 'The hardest part of trading is NOT trading when your plan criteria are not met. Discipline means sitting on your hands when conditions do not align.' },
            { id: 'd9-l1-t3', instruction: 'If conditions match your plan: Execute the trade on MEXC simulator exactly as your plan specifies. Same order type, same position size, same direction.', hint: 'Follow your plan like a robot. No adjustments. No "just this once." The plan is the plan.' },
            { id: 'd9-l1-t4', instruction: 'Set your stop-loss exactly where your plan says. Do not widen it because you "feel" the trade will work out.', hint: 'Moving your stop-loss further from entry is one of the most common plan violations. It turns a small planned loss into a large unplanned one.' },
            { id: 'd9-l1-t5', instruction: 'After execution, record in your journal: Did you follow the plan 100%? Any deviations? What were you feeling when you placed the order?', hint: 'Even if the trade loses, if you followed the plan, it is a GOOD trade. Even if the trade wins, if you broke your rules, it is a BAD trade.' },
            { id: 'd9-l1-t6', instruction: 'PLAN COMPLIANCE SCORE: Rate yourself 1-10 on how strictly you followed your plan. Be honest.', hint: 'A score of 8+ means strong discipline. Below 6 means you need more practice with plan-based trading before using real money.' },
          ]}
          selfAssessment={[
            {
              question: 'What makes a trade "good" vs "bad"?',
              options: [
                'Good trades always make money; bad trades always lose money',
                'A good trade follows the plan regardless of outcome; a bad trade breaks the rules regardless of outcome',
                'Good trades use market orders; bad trades use limit orders',
                'There is no such thing as a good or bad trade',
              ],
              correctIndex: 1,
              explanation: 'A trade that follows your plan but loses money is a GOOD trade (the process was correct, the outcome was unlucky). A trade that breaks your rules but makes money is a BAD trade (the process was wrong, the profit was lucky). Over time, good process produces consistent results; bad process eventually leads to disaster.',
            },
            {
              question: 'Why is moving your stop-loss further from entry one of the worst plan violations?',
              options: [
                'Because it increases trading fees',
                'Because it turns a small planned loss into a potentially large unplanned loss',
                'Because exchanges do not allow it',
                'Moving stop-losses is actually fine',
              ],
              correctIndex: 1,
              explanation: 'Widening your stop-loss means you are risking more than you planned. Your position size was calculated based on the original stop distance. When you widen the stop, your actual risk is now larger than the 1% you planned, which can lead to catastrophic losses over time.',
            },
          ]}
          expectedOutcomes={[
            'Ability to execute trades strictly according to a predefined plan',
            'Understanding of plan compliance as the measure of trade quality',
            'Skill in resisting the urge to deviate from the plan',
            'Habit of scoring plan compliance after every trade',
          ]}
        />
      </div>
    </section>
  )
}
