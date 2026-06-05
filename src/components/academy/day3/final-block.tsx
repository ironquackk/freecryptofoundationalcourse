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
  CandlestickChart,
  Award,
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
import { TradingViewLab } from '@/components/academy/tradingview-lab'

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 1: Day 3 Key Takeaways                                */
/* ─────────────────────────────────────────────────────────── */
function TopicKeyTakeaways() {
  const takeaways = [
    {
      icon: <CandlestickChart className="h-4 w-4" />,
      text: 'Candlesticks tell a story: green = buyers won, red = sellers won. Wicks show rejection, bodies show conviction. Read the story each candle tells.',
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      text: '5 Bullish reversal patterns: Hammer, Bullish Engulfing, Morning Star, Piercing Line, Bullish Harami. Each signals buyers are taking control at the bottom of a downtrend.',
    },
    {
      icon: <TrendingDown className="h-4 w-4" />,
      text: '5 Bearish reversal patterns: Shooting Star, Bearish Engulfing, Evening Star, Dark Cloud Cover, Bearish Harami. Each signals sellers are taking control at the top of an uptrend.',
    },
    {
      icon: <Activity className="h-4 w-4" />,
      text: 'RSI measures momentum (0-100). Above 70 = overbought (potential sell). Below 30 = oversold (potential buy). RSI divergence is the most powerful RSI signal.',
    },
    {
      icon: <BarChart3 className="h-4 w-4" />,
      text: 'MACD shows trend changes through crossovers. Bullish cross (MACD above signal) = buy signal. Bearish cross (MACD below signal) = sell signal. Histogram shows momentum strength.',
    },
    {
      icon: <Volume2 className="h-4 w-4" />,
      text: 'Volume confirms everything. High volume = real conviction. Low volume = suspicious. Volume should increase in the direction of the trend and decrease during pullbacks.',
    },
    {
      icon: <Eye className="h-4 w-4" />,
      text: 'Bollinger Bands measure volatility. Squeeze = big move coming. Expansion = move happening. Price touching bands is NOT an automatic signal — always check context.',
    },
    {
      icon: <Crosshair className="h-4 w-4" />,
      text: 'Pattern + Level = High Probability. Confluence (location + pattern + indicator + volume) is the secret to consistent trading. Never trade a single signal alone.',
    },
  ]

  return (
    <TopicCard id="d3-key-takeaways" title="Day 3 Key Takeaways" icon={<Star />} variant="highlight">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Here are the 8 most important concepts from Day 3. Master these and you have a complete
        toolkit for reading charts and finding high-probability setups.
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
/*  TOPIC 2: Complete Trading Simulation                        */
/* ─────────────────────────────────────────────────────────── */
function TopicTradingSimulation() {
  return (
    <TopicCard id="d3-trading-simulation" title="Complete Trading Simulation" icon={<Trophy />} variant="success">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        This is your chance to put <strong>everything from Days 2 and 3</strong> together. Use the MEXC
        simulator to execute a complete trade using the indicators and patterns you learned today.
        This is still a <strong>simulation</strong> — no real money at risk.
      </p>

      {/* Step-by-step instructions */}
      <div className="mb-5 space-y-3">
        <h4 className="text-sm font-bold text-slate-900 sm:text-base">Complete Trade Simulation — Step by Step</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
            <p className="text-xs font-bold text-amber-800 mb-1">STEP 1: ANALYZE STRUCTURE</p>
            <p className="text-sm text-slate-700">Determine the market structure (HH/HL or LH/LL). Identify the current trend direction on the 4H chart.</p>
          </div>
          <div className="rounded-lg border-l-4 border-l-blue-500 bg-blue-50 p-4">
            <p className="text-xs font-bold text-blue-800 mb-1">STEP 2: FIND THE LEVEL</p>
            <p className="text-sm text-slate-700">Locate the nearest support (if bullish) or resistance (if bearish). Check EMA positions for dynamic levels.</p>
          </div>
          <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <p className="text-xs font-bold text-green-800 mb-1">STEP 3: SPOT THE PATTERN</p>
            <p className="text-sm text-slate-700">Look for a candlestick pattern at the level. Hammer at support? Engulfing at resistance? This confirms the level is holding.</p>
          </div>
          <div className="rounded-lg border-l-4 border-l-purple-500 bg-purple-50 p-4">
            <p className="text-xs font-bold text-purple-800 mb-1">STEP 4: CHECK INDICATORS</p>
            <p className="text-sm text-slate-700">Verify with RSI (oversold/overbought?), MACD (crossover in your direction?), and Bollinger Bands (squeeze?). Get 2+ indicator confirmations.</p>
          </div>
          <div className="rounded-lg border-l-4 border-l-teal-500 bg-teal-50 p-4">
            <p className="text-xs font-bold text-teal-800 mb-1">STEP 5: CHECK VOLUME</p>
            <p className="text-sm text-slate-700">Is volume above average on the pattern candle? High volume = real conviction. Low volume = suspicious. Volume must confirm.</p>
          </div>
          <div className="rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4">
            <p className="text-xs font-bold text-red-800 mb-1">STEP 6: EXECUTE & MANAGE</p>
            <p className="text-sm text-slate-700">Enter the trade on the MEXC simulator below. Set stop loss below support (longs) or above resistance (shorts). Target 1:2 risk/reward minimum.</p>
          </div>
        </div>
      </div>

      {/* Confluence checklist */}
      <div className="mb-5 rounded-lg border-2 border-amber-300 bg-amber-50/40 p-4">
        <h4 className="mb-3 text-sm font-bold text-amber-800">Pre-Trade Confluence Checklist</h4>
        <div className="space-y-1">
          <ChecklistItem>Market structure confirms my bias (uptrend → buy, downtrend → sell)</ChecklistItem>
          <ChecklistItem>Price is at a key level (S/R, EMA, order block)</ChecklistItem>
          <ChecklistItem>Candlestick pattern confirms the level is holding or breaking</ChecklistItem>
          <ChecklistItem>At least 2 indicators confirm (RSI, MACD, BB)</ChecklistItem>
          <ChecklistItem>Volume is above average on the signal candle</ChecklistItem>
          <ChecklistItem>Stop loss and take profit are defined before entry (1:2+ R:R)</ChecklistItem>
        </div>
      </div>

      {/* MEXC Lab */}
      <MEXCLab />

      <KeyTakeaway>
        The goal is not to be right on every trade — it is to follow the <strong>process</strong>
        consistently. Even professional traders are wrong 40-50% of the time. The edge comes from
        risk management and high-probability setups, not from predicting the future.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 3: Day 3 Quiz                                         */
/* ─────────────────────────────────────────────────────────── */
function TopicQuiz() {
  return (
    <TopicCard id="d3-quiz" title="Day 3 Quiz" icon={<BookOpen />} variant="highlight">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Test your understanding of Day 3. Click each question to reveal the answer. Score yourself honestly!
      </p>

      <div className="space-y-3">
        <QuizQuestion number={1} question="What does a Hammer candlestick look like and what does it signal?">
          <p>A Hammer has a small body at the top with a long lower wick (2x+ the body). It appears at the
            bottom of a downtrend and signals that sellers tried to push price lower but buyers absorbed all
            the selling pressure and pushed price back up — a potential bullish reversal.</p>
        </QuizQuestion>

        <QuizQuestion number={2} question="What is the difference between a Morning Star and an Evening Star?">
          <p>Both are 3-candle patterns. Morning Star appears at the bottom: large red → small body → large
            green. It signals bullish reversal. Evening Star appears at the top: large green → small body →
            large red. It signals bearish reversal. The middle candle represents indecision.</p>
        </QuizQuestion>

        <QuizQuestion number={3} question="What does RSI measure and what are the key levels?">
          <p>RSI (Relative Strength Index) measures momentum on a scale of 0-100. Above 70 = overbought
            (potential selling opportunity). Below 30 = oversold (potential buying opportunity). The most
            powerful RSI signal is divergence — when price makes a new high/low but RSI does not.</p>
        </QuizQuestion>

        <QuizQuestion number={4} question="How do you read a MACD crossover signal?">
          <p>When the MACD line crosses ABOVE the signal line = bullish crossover (buy signal). When the
            MACD line crosses BELOW the signal line = bearish crossover (sell signal). The histogram shows
            the distance between the two lines — growing histogram = strengthening momentum.</p>
        </QuizQuestion>

        <QuizQuestion number={5} question="What does a Bollinger Band squeeze signal?">
          <p>A squeeze (bands contracting tightly together) signals that volatility has dropped to extremely
            low levels and a BIG MOVE is imminent. The direction is not guaranteed — wait for the breakout
            to confirm before entering. Squeezes are one of the most predictive patterns in technical analysis.</p>
        </QuizQuestion>

        <QuizQuestion number={6} question='Explain the concept of "Pattern + Level = High Probability."'>
          <p>A candlestick pattern alone is just a shape. A support/resistance level alone is just a line.
            But when a pattern appears AT a key level, the probability of a successful trade increases
            dramatically. Add indicator confirmation and volume, and you have confluence — multiple
            independent factors all pointing to the same conclusion.</p>
        </QuizQuestion>
      </div>

      {/* Pass mark */}
      <div className="mt-6 rounded-xl border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-amber-100 p-5 text-center shadow-sm">
        <Award className="mx-auto mb-2 h-8 w-8 text-amber-600" />
        <p className="text-lg font-bold text-amber-800 sm:text-xl">Pass Mark: 5 / 6</p>
        <p className="mt-1 text-sm text-slate-600">
          You need at least 5 correct answers before moving to Day 4. Review any topics you missed!
        </p>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 4: Day 3 Homework                                     */
/* ─────────────────────────────────────────────────────────── */
function TopicHomework() {
  return (
    <TopicCard id="d3-homework" title="Day 3 Homework" icon={<ClipboardList />} variant="highlight">
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Complete all tasks below before starting Day 4. Check each one off as you go!
      </p>

      <div className="rounded-xl border-2 border-amber-300 bg-amber-50/40 p-4 sm:p-5">
        <div className="mb-4 flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-amber-600" />
          <h4 className="text-base font-bold text-amber-800 sm:text-lg">HOMEWORK CHECKLIST</h4>
        </div>

        <div className="space-y-2">
          <ChecklistItem>
            <span><strong>Task 1:</strong> On TradingView, add RSI and MACD to BTC/USDT Daily. Identify the current readings — is RSI overbought, oversold, or neutral? Has MACD crossed recently?</span>
          </ChecklistItem>
          <ChecklistItem>
            <span><strong>Task 2:</strong> Find 3 real candlestick patterns on your charts this week. Screenshot each one and label: the pattern name, the level it appeared at, and whether it worked.</span>
          </ChecklistItem>
          <ChecklistItem>
            <span><strong>Task 3:</strong> Find one RSI divergence on ETH/USDT 4H. Was it a regular divergence (trend reversal) or hidden divergence (trend continuation)? Did price follow through?</span>
          </ChecklistItem>
          <ChecklistItem>
            <span><strong>Task 4:</strong> Add Bollinger Bands (20,2) to SOL/USDT Daily. Identify the current band state — squeezing, expanding, or normal? Is price near a band?</span>
          </ChecklistItem>
          <ChecklistItem>
            <span><strong>Task 5:</strong> Execute one complete simulated trade using the 6-step process: Structure → Level → Pattern → Indicator → Volume → Execute. Record your analysis and results.</span>
          </ChecklistItem>
          <ChecklistItem>
            <span><strong>Task 6:</strong> Write a one-page summary: &ldquo;The most important thing I learned in Days 2-3 is ___ because ___.&rdquo; This reflection solidifies your learning.</span>
          </ChecklistItem>
        </div>
      </div>

      {/* Tomorrow teaser */}
      <div className="mt-6 rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 text-center shadow-lg">
        <div className="mb-2 flex items-center justify-center gap-2">
          <BookOpen className="h-6 w-6 text-amber-400" />
          <span className="text-sm font-bold uppercase tracking-wider text-amber-400">
            Coming Tomorrow — Day 4
          </span>
        </div>
        <p className="text-lg font-bold text-white sm:text-xl">
          Risk Management — Protecting Your Capital
        </p>
        <p className="mt-2 text-sm text-slate-400">
          You will learn position sizing, stop-loss strategies, risk/reward ratios, and the psychology
          of managing losing trades. This is the most important day of the entire course.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-amber-400">
          <ArrowRight className="h-5 w-5" />
          <span className="text-sm font-semibold">Risk management is what separates traders from gamblers.</span>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  MAIN EXPORT                                                       */
/* ═══════════════════════════════════════════════════════════════════ */

export function Day3FinalBlock() {
  return (
    <section id="d3-final" aria-label="Final Block - Hour 8">
      <SectionDivider title="FINAL BLOCK — HOUR 8: DAY 3 REVIEW & TRADING SIMULATION" />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicKeyTakeaways />

        <TopicTradingSimulation />

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TRADINGVIEW LAB: Candlestick Pattern Practice          */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d3-tradingview-lab"
          title="TradingView Lab: Candlestick Pattern Practice"
          icon={<TrendingUp />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Use the TradingView simulator below to practice identifying candlestick patterns
            you learned today. This hands-on lab reinforces your ability to spot Hammers,
            Engulfing patterns, Morning/Evening Stars, and more on a live chart.
          </p>

          <div className="mb-4 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="mb-2 text-sm font-bold text-green-800 sm:text-base">Practice Instructions</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Scan the candlestick chart and identify at least 2 bullish reversal patterns (Hammer, Bullish Engulfing, Morning Star)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Find at least 1 bearish reversal pattern (Shooting Star, Bearish Engulfing, Evening Star)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Enable EMA 20 and EMA 50 — note where patterns appear relative to the moving averages
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Turn on RSI and check: do your identified patterns coincide with overbought (&gt;70) or oversold (&lt;30) readings?
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Draw a Horizontal Line at key levels — do patterns cluster near these levels? This confirms Pattern + Level = High Probability
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Enable Volume and compare volume on pattern candles vs. non-pattern candles — high volume confirms conviction
              </li>
            </ul>
          </div>

          <TradingViewLab />

          <KeyTakeaway>
            Candlestick patterns are only meaningful when they appear at <strong>key levels</strong> with
            <strong> indicator confirmation</strong> and <strong>volume support</strong>. A Hammer at support
            with RSI oversold and high volume is a high-probability setup. A Hammer in the middle of nowhere is just a shape.
          </KeyTakeaway>
        </TopicCard>

        <TopicQuiz />

        <TopicHomework />
      </div>
    </section>
  )
}
