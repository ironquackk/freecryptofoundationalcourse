'use client'

import React from 'react'
import {
  Star,
  BookOpen,
  ClipboardList,
  Trophy,
  TrendingUp,
  TrendingDown,
  Shield,
  Target,
  Zap,
  Layers,
  BarChart3,
  Activity,
  Eye,
  Crosshair,
  GitBranch,
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  AlertTriangle,
  Volume2,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { QuizQuestion } from '@/components/academy/quiz-question'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { MEXCLab } from '@/components/academy/mexc-lab'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 1: Day 2 Key Takeaways                                */
/* ─────────────────────────────────────────────────────────── */
function TopicKeyTakeaways() {
  const takeaways = [
    {
      icon: <BarChart3 className="h-4 w-4" />,
      text: 'Support is a floor where buyers step in; resistance is a ceiling where sellers step in. The more touches, the stronger the level.',
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      text: 'Market structure (HH/HL = uptrend, LH/LL = downtrend) is the MOST important concept. Always determine structure first.',
    },
    {
      icon: <GitBranch className="h-4 w-4" />,
      text: 'CHoCH (Change of Character) warns of a potential reversal. BOS (Break of Structure) confirms it. Wait for BOS before committing capital.',
    },
    {
      icon: <Layers className="h-4 w-4" />,
      text: 'Order blocks mark where institutions placed orders. Bullish OB = last red candle before a rally. Bearish OB = last green candle before a drop.',
    },
    {
      icon: <Activity className="h-4 w-4" />,
      text: 'Fair Value Gaps (FVGs) are 3-candle patterns where price didn\'t trade. Price tends to return and fill these gaps — they act as price magnets.',
    },
    {
      icon: <Shield className="h-4 w-4" />,
      text: 'Liquidity sweeps occur when institutions push price beyond equal highs/lows to trigger stop-losses, then reverse. Don\'t put stops at obvious levels.',
    },
    {
      icon: <Zap className="h-4 w-4" />,
      text: 'EMA 20 for short-term momentum, EMA 50 for medium-term trend, EMA 200 for long-term bias. When stacked, they confirm the trend.',
    },
    {
      icon: <Target className="h-4 w-4" />,
      text: 'The integration framework: Structure → S/R → EMAs → SMC → Execute. Require 3+ factors aligned for high-probability trades.',
    },
  ]

  return (
    <TopicCard id="d2-key-takeaways" title="Day 2 Key Takeaways" icon={<Star />} variant="highlight">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Here are the 8 most important concepts from Day 2. If you remember nothing else,
        remember these.
      </p>

      <div className="space-y-3">
        {takeaways.map((takeaway, index) => (
          <div
            key={index}
            className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/50 p-3 transition-colors hover:bg-slate-50"
          >
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <span className="text-xs font-bold">{index + 1}</span>
            </div>
            <div className="flex items-start gap-2 pt-0.5">
              <span className="mt-0.5 flex-shrink-0 text-amber-600 [&>svg]:h-4 [&>svg]:w-4">
                {takeaway.icon}
              </span>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                {takeaway.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 2: MEXC Spot Trading Lab                              */
/* ─────────────────────────────────────────────────────────── */
function TopicMEXCLab() {
  return (
    <TopicCard id="d2-mexc-lab" title="MEXC Spot Trading Lab" icon={<Trophy />} variant="success">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        Now it is time to put your analysis into practice! Use the MEXC simulator below to place
        your first simulated spot trade. Remember: this is a <strong>simulation</strong> — no real
        money is at risk. Practice the process so it becomes second nature.
      </p>

      <div className="mb-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
        <h4 className="text-sm font-bold text-green-800 mb-2">Instructions for Your First Simulated Trade</h4>
        <ol className="space-y-2 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
            <span>Before trading, check the chart: What is the market structure? Where is support/resistance? Are EMAs aligned?</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
            <span>If bullish bias (HH+HL, price above EMAs): Place a <strong>BUY</strong> order near a support level or EMA bounce.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
            <span>Use a <strong>limit order</strong> at the support level for a better entry price, or a <strong>market order</strong> for immediate execution.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
            <span>Set your <strong>stop loss</strong> below the support level or below the EMA. Always define your risk before entering.</span>
          </li>
        </ol>
      </div>

      {/* MEXC Lab Component */}
      <MEXCLab />

      <KeyTakeaway>
        The goal of this lab is not to make money — it is to practice the <strong>process</strong>:
        analyze the chart, form a bias, plan your entry/exit, and execute. Repeat this process
        until it becomes automatic.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 3: Day 2 Quiz                                         */
/* ─────────────────────────────────────────────────────────── */
function TopicQuiz() {
  return (
    <TopicCard id="d2-quiz" title="Day 2 Quiz" icon={<BookOpen />} variant="highlight">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Test your understanding of Day 2. Click each question to reveal the answer. Score yourself honestly!
      </p>

      <div className="space-y-3">
        <QuizQuestion number={1} question="What is support and what is resistance?">
          <p>Support is a price level where buyers consistently step in (a &ldquo;floor&rdquo;).
            Resistance is a price level where sellers consistently step in (a &ldquo;ceiling&rdquo;).
            The more times a level is tested, the stronger it is considered.</p>
        </QuizQuestion>

        <QuizQuestion number={2} question="What does the S/R flip mean and why does it happen?">
          <p>The S/R flip means old support becomes new resistance (and vice versa). It happens because
            of trapped traders — when support breaks, buyers who bought there are now underwater and sell
            to break even when price returns, creating selling pressure at the old support level.</p>
        </QuizQuestion>

        <QuizQuestion number={3} question="What market structure defines an uptrend? A downtrend?">
          <p>Uptrend: Higher Highs (HH) + Higher Lows (HL). Downtrend: Lower Highs (LH) + Lower Lows (LL).
            Range: Equal highs and equal lows.</p>
        </QuizQuestion>

        <QuizQuestion number={4} question="What is the difference between CHoCH and BOS?">
          <p>CHoCH (Change of Character) is the FIRST break of structure signaling a potential reversal
            — it is a warning, not confirmation. BOS (Break of Structure) is a subsequent break that
            CONFIRMS the new trend direction. Always wait for BOS before committing capital.</p>
        </QuizQuestion>

        <QuizQuestion number={5} question="What is an Order Block and why is it important?">
          <p>An Order Block is the last opposite-direction candle before a strong impulsive move. It marks
            where institutional orders were placed. Price often returns to order blocks because unfilled
            institutional orders still sit there, acting as price magnets for high-probability entries.</p>
        </QuizQuestion>

        <QuizQuestion number={6} question="What is a Fair Value Gap (FVG) and how do you trade it?">
          <p>A Fair Value Gap is a 3-candle pattern where a gap exists between Candle 1&apos;s high and Candle 3&apos;s low —
            price didn&apos;t trade in that zone. To trade it: identify the FVG, wait for price to return and fill the gap,
            enter when price shows a reaction in the FVG zone, and place your stop on the other side of the FVG.</p>
        </QuizQuestion>

        <QuizQuestion number={7} question="What is a liquidity sweep and how can you avoid being trapped?">
          <p>A liquidity sweep occurs when institutions push price beyond equal highs or equal lows to trigger
            stop-loss orders, then reverse. To avoid being trapped: don&apos;t place stop-losses at the most obvious levels
            (just above equal highs or just below equal lows). Instead, wait for the sweep to happen and trade the reversal.</p>
        </QuizQuestion>

        <QuizQuestion number={8} question="Name the 5 steps of the integration framework in order.">
          <p>1) Market Structure (determine trend). 2) Support & Resistance (map levels). 3) EMAs
            (confirm trend direction). 4) SMC Concepts (identify institutional zones). 5) Execute
            (enter when 3+ factors align).</p>
        </QuizQuestion>
      </div>

      {/* Pass mark */}
      <div className="mt-6 rounded-xl border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-amber-100 p-5 text-center shadow-sm">
        <Award className="mx-auto mb-2 h-8 w-8 text-amber-600" />
        <p className="text-lg font-bold text-amber-800 sm:text-xl">Pass Mark: 6 / 8</p>
        <p className="mt-1 text-sm text-slate-600">
          You need at least 6 correct answers before moving to Day 3. Review any topics you missed!
        </p>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 4: Day 2 Homework                                     */
/* ─────────────────────────────────────────────────────────── */
function TopicHomework() {
  return (
    <TopicCard id="d2-homework" title="Day 2 Homework" icon={<ClipboardList />} variant="highlight">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Complete all tasks below before starting Day 3. Check each one off as you go!
      </p>

      <div className="rounded-xl border-2 border-amber-300 bg-amber-50/40 p-4 sm:p-5">
        <div className="mb-4 flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-amber-600" />
          <h4 className="text-base font-bold text-amber-800 sm:text-lg">HOMEWORK CHECKLIST</h4>
        </div>

        <div className="space-y-2">
          <ChecklistItem>
            <span><strong>Task 1:</strong> On TradingView, add EMA 20 (yellow), EMA 50 (teal), and EMA 200 (red) to BTC/USDT Daily. Identify the current EMA alignment.</span>
          </ChecklistItem>
          <ChecklistItem>
            <span><strong>Task 2:</strong> Draw 3 support and 3 resistance levels on BTC/USDT 4H chart. Use the 6 drawing rules from today. Label each level with the number of touches.</span>
          </ChecklistItem>
          <ChecklistItem>
            <span><strong>Task 3:</strong> Find 2 examples of an S/R flip on ETH/USDT daily chart. Screenshot and label the flip.</span>
          </ChecklistItem>
          <ChecklistItem>
            <span><strong>Task 4:</strong> Identify one bullish order block and one bearish order block on BTC/USDT 4H. Mark the last opposite candle before each impulse move.</span>
          </ChecklistItem>
          <ChecklistItem>
            <span><strong>Task 5:</strong> Find one Fair Value Gap on SOL/USDT. Did price eventually come back to fill it? How long did it take?</span>
          </ChecklistItem>
          <ChecklistItem>
            <span><strong>Task 6:</strong> Identify one recent liquidity sweep on any crypto pair. Was it above equal highs or below equal lows? What happened after the sweep?</span>
          </ChecklistItem>
          <ChecklistItem>
            <span><strong>Task 7:</strong> Apply the 5-step integration framework to your top 3 watchlist coins. Write: &ldquo;For [COIN]: Structure=___, S/R=___, EMAs=___, SMC=___, Decision=___&rdquo;</span>
          </ChecklistItem>
        </div>
      </div>

      {/* Tomorrow teaser */}
      <div className="mt-6 rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 text-center shadow-lg">
        <div className="mb-2 flex items-center justify-center gap-2">
          <BookOpen className="h-6 w-6 text-amber-400" />
          <span className="text-sm font-bold uppercase tracking-wider text-amber-400">
            Coming Tomorrow — Day 3
          </span>
        </div>
        <p className="text-lg font-bold text-white sm:text-xl">
          Candlestick Patterns &amp; Technical Indicators
        </p>
        <p className="mt-2 text-sm text-slate-400">
          You will learn to read individual candlesticks, spot reversal patterns, and use RSI, MACD,
          and Bollinger Bands to confirm your trades.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-amber-400">
          <ArrowRight className="h-5 w-5" />
          <span className="text-sm font-semibold">Get some rest — Day 3 is packed!</span>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  MAIN EXPORT                                                       */
/* ═══════════════════════════════════════════════════════════════════ */

export function Day2FinalBlock() {
  return (
    <section id="d2-final" aria-label="Final Block - Session 5">
      <SectionDivider title="FINAL BLOCK — SESSION 5: DAY 2 REVIEW & MEXC TRADING LAB" />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicKeyTakeaways />

        <AppliedLabSimulation
          id="d2-lab-4-mexc-break"
          title="LAB 4: Trading the Break — Structure-Based Entry"
          subtitle="Use the MEXC demo trading simulator to execute a trade that follows market structure, not fights it"
          dayNumber={2}
          sessionName="Final Block"
          labType="mexc"
          learningObjectives={[
            'Identify a coin in a clear uptrend (HH/HL structure)',
            'Wait for a pullback to a Higher Low (support within the uptrend)',
            'Place a Buy Order at the structure-based support level',
            'Set a Take Profit near the previous Higher High',
            'Trade WITH the structure, not against it',
          ]}
          tasks={[
            { id: 'd2-l4-t1', instruction: 'Look at the BTC price chart in the MEXC simulator. Determine the current market structure: Is it making HH+HL (uptrend) or LH+LL (downtrend)?', hint: 'The chart shows BTC in the 67,400–67,570 range. Look at the pattern of recent highs and lows.' },
            { id: 'd2-l4-t2', instruction: 'If the structure is bullish (or you determine an upward bias), set your order to BUY side', hint: 'In an uptrend, you ONLY look for buy opportunities. Never short an uptrend.' },
            { id: 'd2-l4-t3', instruction: 'Set a Limit Buy order near the current support level (where the last Higher Low formed)', hint: 'Place your limit order at or just above the recent swing low — this is where the next pullback should find buyers' },
            { id: 'd2-l4-t4', instruction: 'Set your position size to 0.01 BTC', hint: 'With a 10,000 USDT demo balance, 0.01 BTC at ~$67,500 = $675, about 6.75% of your portfolio' },
            { id: 'd2-l4-t5', instruction: 'Place the Buy order', hint: 'Click the green "Buy BTC" button to execute the simulated trade' },
            { id: 'd2-l4-t6', instruction: 'Now plan your exit: Your take-profit should be near the previous Higher High. Your stop-loss should be below the Higher Low you bought at.', hint: 'In this simulation, if you bought at ~$67,500, TP might be at ~$67,600 (previous high) and SL at ~$67,400 (below the recent low). This gives you a defined risk-reward.' },
            { id: 'd2-l4-t7', instruction: 'Record your trade: Entry price, Stop-loss level, Take-profit level, and the Risk:Reward ratio in your notes', hint: 'A good R:R is at least 1:2. If your risk (entry - SL) is $100, your reward (TP - entry) should be at least $200.' },
          ]}
          selfAssessment={[
            {
              question: 'Why should you only look for buys in an uptrend (HH+HL)?',
              options: [
                'Because shorting is illegal in crypto',
                'Because trading with the structure gives you the highest probability of success',
                'Because downtrends never happen',
                'Because buys are always profitable',
              ],
              correctIndex: 1,
              explanation: '"Structure dictates strategy." In an uptrend, buyers are in control. Buying on pullbacks to Higher Lows gives you the highest probability entries because you are trading in the direction of the dominant force.',
            },
            {
              question: 'Where should you place your take-profit when buying in an uptrend?',
              options: [
                'At an arbitrary round number',
                'Near the previous Higher High',
                'At double your entry price',
                'At the stop-loss level',
              ],
              correctIndex: 1,
              explanation: 'In an uptrend, the previous Higher High is a logical take-profit because price has already shown it can reach that level. It is a tested resistance that, if broken, would be a BOS confirming further upside.',
            },
            {
              question: 'What is the golden rule of structure-based trading?',
              options: [
                'Always use maximum leverage',
                'Trade WITH the structure, never against it',
                'Ignore the chart and follow your gut',
                'Buy when everyone else is selling',
              ],
              correctIndex: 1,
              explanation: 'The golden rule is: Trade WITH the structure. In an uptrend (HH+HL), look for buys. In a downtrend (LH+LL), look for shorts. In a range, be cautious or trade the boundaries. Never fight the structure.',
            },
          ]}
          expectedOutcomes={[
            'Ability to identify market structure direction before placing any trade',
            'Understanding of structure-based entry (buy at HL in uptrend)',
            'Knowledge of where to place TP and SL based on structure',
            'Habit of always checking structure before executing any trade',
          ]}
        />

        <TopicMEXCLab />

        <TopicQuiz />

        <TopicHomework />
      </div>
    </section>
  )
}
