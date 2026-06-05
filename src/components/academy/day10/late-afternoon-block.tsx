'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Clock, FileCheck, BookOpen, Shield, Sunrise, Users,
  AlertTriangle, CheckCircle2, Award, Scale, Target,
  ClipboardCheck, Handshake, Eye, MessageSquare, UserCheck,
  Brain, TrendingUp, Zap, RotateCcw, XCircle, FlaskConical
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { QuizQuestion } from '@/components/academy/quiz-question'
import { MEXCLab } from '@/components/academy/mexc-lab'

/* ─── 10 Trading Commandments SVG ─── */
function CommandmentsTablet() {
  const commandments = [
    { num: 'I', title: 'PROTECT CAPITAL FIRST', color: '#ef4444' },
    { num: 'II', title: 'FOLLOW THE PLAN', color: '#3b82f6' },
    { num: 'III', title: 'RESPECT THE STOP LOSS', color: '#ef4444' },
    { num: 'IV', title: 'THINK IN PROBABILITY', color: '#8b5cf6' },
    { num: 'V', title: 'SCORE BEFORE YOU SWING', color: '#f59e0b' },
    { num: 'VI', title: 'JOURNAL OR DON\'T TRADE', color: '#065f46' },
    { num: 'VII', title: 'EMOTIONS ARE DATA, NOT ORDERS', color: '#8b5cf6' },
    { num: 'VIII', title: 'SMALL & CONSISTENT > BIG & RECKLESS', color: '#10b981' },
    { num: 'IX', title: 'WHEN IN DOUBT, STAY OUT', color: '#f59e0b' },
    { num: 'X', title: 'THIS IS A MARATHON, NOT A SPRINT', color: '#065f46' },
  ]

  return (
    <div className="flex justify-center py-4">
      <svg viewBox="0 0 520 560" className="w-full max-w-md" aria-label="The 10 Trading Commandments">
        {/* Stone tablet background */}
        <rect x="20" y="10" width="480" height="540" rx="20" fill="#292524" stroke="#78716c" strokeWidth="3" />
        <rect x="30" y="20" width="460" height="520" rx="16" fill="#1c1917" stroke="#57534e" strokeWidth="1" />

        {/* Title */}
        <text x="260" y="55" textAnchor="middle" fill="#fbbf24" fontSize="18" fontWeight="bold" fontFamily="serif">
          THE 10 TRADING
        </text>
        <text x="260" y="78" textAnchor="middle" fill="#fbbf24" fontSize="18" fontWeight="bold" fontFamily="serif">
          COMMANDMENTS
        </text>

        {/* Divider */}
        <line x1="80" y1="90" x2="440" y2="90" stroke="#78716c" strokeWidth="1" />

        {/* Commandments */}
        {commandments.map((cmd, i) => {
          const y = 118 + i * 44
          return (
            <motion.g
              key={cmd.num}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
            >
              <rect x="50" y={y - 10} width="420" height="36" rx="6" fill="#292524" stroke="#57534e" strokeWidth="0.5" />
              <text x="75" y={y + 8} textAnchor="middle" fill={cmd.color} fontSize="14" fontWeight="bold" fontFamily="serif">
                {cmd.num}
              </text>
              <text x="100" y={y + 8} textAnchor="start" fill="#e7e5e4" fontSize="11" fontWeight="600">
                {cmd.title}
              </text>
            </motion.g>
          )
        })}

        {/* Bottom ornament */}
        <text x="260" y="540" textAnchor="middle" fill="#78716c" fontSize="9" fontStyle="italic">
          &ldquo;These rules are your edge. Break them and the market will break you.&rdquo;
        </text>
      </svg>
    </div>
  )
}

/* ─── Late Afternoon Block ─── */
export function Day10LateAfternoonBlock() {
  return (
    <section id="d10-late-afternoon" aria-labelledby="d10-late-afternoon-heading">
      <SectionDivider
        icon={<Clock />}
        title="LATE AFTERNOON BLOCK — 2:30–5:00: FINAL SIMULATION & GRADUATION"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ── Topic 13: The Final Exam — Complete Trade Simulation ── */}
        <TopicCard
          id="d10-final-exam"
          title="The Final Exam — Complete Trade Simulation"
          icon={<FileCheck />}
          variant="highlight"
        >
          <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 mb-4">
            <p className="text-sm font-bold text-amber-800 mb-1">📋 SCENARIO</p>
            <p className="text-sm text-amber-900">
              You have a <strong>$5,000 account</strong>. BTC/USDT is trading at <strong>$67,500</strong>. You notice price approaching a key support level at $66,800 with RSI at 28 (oversold). EMA 20 is at $68,200 and EMA 50 is at $69,500. Volume is increasing.
            </p>
          </div>

          <h4 className="text-sm font-bold text-slate-800 mb-3">8-Step Simulation Instructions</h4>
          <div className="space-y-2 mb-6">
            {[
              { step: 1, text: 'Identify the market structure (is BTC in an uptrend, downtrend, or range?)' },
              { step: 2, text: 'Determine where price is relative to key S/R levels' },
              { step: 3, text: 'Analyze the EMA configuration (stacked? tangled? which direction?)' },
              { step: 4, text: 'Interpret RSI at 28 — what does it tell you?' },
              { step: 5, text: 'Calculate your position size (1% risk, SL at $66,200)' },
              { step: 6, text: 'Define your entry, stop-loss, and take-profit levels with R:R ratio' },
              { step: 7, text: 'Write your pre-trade checklist (all 5 items must pass)' },
              { step: 8, text: 'Write your trade journal entry for this trade' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3 rounded-lg bg-slate-50 border border-slate-200 px-3 py-2.5">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center border border-amber-300">
                  {item.step}
                </span>
                <p className="text-sm text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Grading Rubric */}
          <h4 className="text-sm font-bold text-slate-800 mb-3">Grading Rubric</h4>
          <ComparisonTable
            headers={['Component', 'Points', 'Criteria']}
            rows={[
              ['Market Structure Identification', '15', 'Correctly identifies trend and structure'],
              ['S/R Level Analysis', '15', 'Accurately locates support/resistance zones'],
              ['Indicator Interpretation', '15', 'Correct RSI, EMA, volume analysis'],
              ['Position Sizing Calculation', '15', 'Correct formula: (Account × Risk%) / (Entry - SL)'],
              ['Entry/SL/TP & R:R', '15', 'Logical levels with minimum 1:2 R:R'],
              ['Pre-Trade Checklist', '15', 'All 5 items checked with reasoning'],
              ['Trade Journal Entry', '10', 'Complete with emotions, reasoning, screenshot note'],
            ]}
          />

          <div className="mt-4 rounded-lg border border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-3 text-center">
            <p className="text-lg font-bold text-amber-800 flex items-center justify-center gap-2">
              <Award className="w-5 h-5" />
              Passing Score: 70 / 100
            </p>
            <p className="text-xs text-amber-700 mt-1">Score below 70? Revisit Days 3-6 before trading real money.</p>
          </div>
        </TopicCard>

        {/* ── Topic 14: 10-Day Bootcamp Final Assessment ── */}
        <TopicCard
          id="d10-final-assessment"
          title="10-Day Bootcamp Final Assessment — 50 Questions"
          icon={<BookOpen />}
          variant="highlight"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            This comprehensive assessment covers all 10 days of the bootcamp. Work through each section — you should be able to answer at least 80% correctly.
          </p>

          {/* Foundation (Days 1-2) */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 text-xs font-bold flex items-center justify-center">1</span>
              Foundation (Days 1-2): 5 Questions
            </h4>
            <div className="space-y-2">
              <QuizQuestion number={1} question="What are the 3 functions of money?">
                Medium of exchange, store of value, and unit of account. Crypto aims to fulfill all three, with Bitcoin excelling as a store of value due to its 21M cap.
              </QuizQuestion>
              <QuizQuestion number={2} question="What problem did Bitcoin solve that fiat couldn't?">
                Double-spending without a central authority. Bitcoin&apos;s proof-of-work consensus allows trustless, decentralized transaction verification.
              </QuizQuestion>
              <QuizQuestion number={3} question="What is the difference between a CEX and a DEX?">
                A CEX (Centralized Exchange) like MEXC/Binance holds your funds and requires KYC. A DEX (Decentralized Exchange) like Uniswap is non-custodial and permissionless but has less liquidity and fewer pairs.
              </QuizQuestion>
              <QuizQuestion number={4} question="Name 3 essential security measures for any exchange account.">
                2FA (Google Authenticator), anti-phishing code, and withdrawal whitelist. All three should be enabled before depositing any funds.
              </QuizQuestion>
              <QuizQuestion number={5} question="What is support and resistance?">
                Support is a price level where buying pressure historically overcomes selling pressure (price bounces up). Resistance is where selling pressure overcomes buying (price bounces down). They flip roles when broken.
              </QuizQuestion>
            </div>
          </div>

          {/* Technical Analysis (Days 3-4) */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-800 text-blue-300 text-xs font-bold flex items-center justify-center">2</span>
              Technical Analysis (Days 3-4): 8 Questions
            </h4>
            <div className="space-y-2">
              <QuizQuestion number={6} question="What is market structure and why is it the FIRST thing you check?">
                Market structure is the pattern of highs and lows that tells you the current trend direction (HH/HL = uptrend, LH/LL = downtrend). It&apos;s checked first because your entire bias depends on it.
              </QuizQuestion>
              <QuizQuestion number={7} question="Explain the difference between a Break of Structure (BOS) and a Change of Character (ChoCh).">
                BOS confirms the existing trend continues (price breaks a swing in the trend&apos;s direction). ChoCh signals a potential reversal (price breaks a swing AGAINST the trend — first LH in an uptrend or first HL in a downtrend).
              </QuizQuestion>
              <QuizQuestion number={8} question="What does RSI > 70 and RSI < 30 typically signal?">
                RSI &gt; 70 suggests overbought conditions (potential reversal down). RSI &lt; 30 suggests oversold conditions (potential reversal up). However, in strong trends, RSI can stay overbought/oversold for extended periods.
              </QuizQuestion>
              <QuizQuestion number={9} question="What is the Golden Cross and what does it signal?">
                When EMA 50 crosses above EMA 200. It signals a potential long-term bullish trend. However, it&apos;s a lagging indicator — wait for a pullback to EMA 50 for a better entry.
              </QuizQuestion>
              <QuizQuestion number={10} question="What is the MACD histogram and how do you read it?">
                The histogram shows the difference between the MACD line and signal line. Growing positive bars = increasing bullish momentum. Growing negative bars = increasing bearish momentum. Shrinking bars = momentum fading.
              </QuizQuestion>
              <QuizQuestion number={11} question="Why is volume important for confirming moves?">
                High volume confirms a move is genuine (many participants agree on the price). Low volume suggests weakness — the move may be a fake-out. Volume should increase in the direction of the trend.
              </QuizQuestion>
              <QuizQuestion number={12} question="Name 3 bullish candlestick patterns and what they signal.">
                Hammer (reversal at support), Bullish Engulfing (strong reversal signal), Morning Star (3-candle reversal pattern). All are more reliable at key S/R levels with volume confirmation.
              </QuizQuestion>
              <QuizQuestion number={13} question="What is the 3-pillar integration framework?">
                Structure (direction), S/R (where to trade), EMAs (when to enter). All three must align for a high-probability trade: 3/3 = strong trade, 2/3 = moderate, 1/3 = no trade.
              </QuizQuestion>
            </div>
          </div>

          {/* Risk Management & Futures (Days 5-6) */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-800 text-red-300 text-xs font-bold flex items-center justify-center">3</span>
              Risk Management & Futures (Days 5-6): 7 Questions
            </h4>
            <div className="space-y-2">
              <QuizQuestion number={14} question="What is the 1% rule and why is it non-negotiable?">
                Never risk more than 1% of your account on a single trade. With a $5,000 account, max loss per trade = $50. This ensures you can survive 20+ consecutive losses and still have capital to recover.
              </QuizQuestion>
              <QuizQuestion number={15} question="How do you calculate position size?">
                Position Size = (Account × Risk%) / (Entry Price - Stop-Loss Price). Example: ($5,000 × 0.01) / ($67,500 - $66,200) = $50 / $1,300 = 0.038 BTC.
              </QuizQuestion>
              <QuizQuestion number={16} question="What is the minimum acceptable risk/reward ratio and why?">
                Minimum 1:2 R:R. This means for every dollar risked, you target two dollars profit. With a 40% win rate and 1:2 R:R, you&apos;re still profitable: (0.4 × 2) - (0.6 × 1) = +0.2 per trade.
              </QuizQuestion>
              <QuizQuestion number={17} question="What is the difference between spot and futures trading?">
                Spot: buying/selling the actual asset. Futures: trading contracts based on price with leverage. Futures allow shorting and leveraged positions but carry liquidation risk and funding fees.
              </QuizQuestion>
              <QuizQuestion number={18} question="What is a funding rate and how does it affect your P/L?">
                Funding rate is a periodic payment between long and short traders on futures exchanges. Positive rate: longs pay shorts (crowded long). Negative rate: shorts pay longs (crowded short). It&apos;s a cost that affects your net P/L.
              </QuizQuestion>
              <QuizQuestion number={19} question="What is liquidation and how do you avoid it?">
                Liquidation occurs when your position&apos;s unrealized loss exceeds your margin. Avoid by: using low leverage (2-3x max), setting stop-losses, never using your entire balance as margin.
              </QuizQuestion>
              <QuizQuestion number={20} question="Why should beginners start with spot trading before futures?">
                Spot has no liquidation risk, no funding fees, simpler mechanics, and teaches market direction without leverage complications. Master spot first, then consider futures after 3+ months of profitability.
              </QuizQuestion>
            </div>
          </div>

          {/* On-Chain & Sentiment (Day 6) */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-800 text-emerald-300 text-xs font-bold flex items-center justify-center">4</span>
              On-Chain & Sentiment (Day 6): 6 Questions
            </h4>
            <div className="space-y-2">
              <QuizQuestion number={21} question="What does a rising exchange reserve typically signal?">
                More coins being deposited on exchanges = potential selling pressure. Traders typically move coins to exchanges to sell, so rising reserves can signal bearish sentiment.
              </QuizQuestion>
              <QuizQuestion number={22} question="What is whale watching and why does it matter?">
                Tracking large holders&apos; wallet activity. When whales move large amounts to exchanges, it can precede major price moves. It&apos;s a leading indicator of potential supply hitting the market.
              </QuizQuestion>
              <QuizQuestion number={23} question="What is the Fear & Greed Index and how do you use it?">
                A 0-100 gauge of market sentiment. 0 = Extreme Fear (potential buying opportunity), 100 = Extreme Greed (potential top). Use it as a contrarian indicator, not a timing tool.
              </QuizQuestion>
              <QuizQuestion number={24} question="What does MVRV > 3.5 suggest?">
                Market Value to Realized Value above 3.5 means holders are heavily in profit on average — historically associated with market tops. It suggests the asset may be overvalued relative to its cost basis.
              </QuizQuestion>
              <QuizQuestion number={25} question="Name 2 on-chain tools and what they track.">
                Glassnode (whale movements, exchange flows, HODL waves) and CryptoQuant (exchange reserves, miner flows, funding rates). Both provide on-chain data that complements technical analysis.
              </QuizQuestion>
              <QuizQuestion number={26} question="How does social sentiment differ from on-chain data?">
                Social sentiment measures what people SAY (Twitter, Reddit, news), while on-chain data measures what people DO (actual transactions, wallet movements). On-chain data is more reliable because talk is cheap — money isn&apos;t.
              </QuizQuestion>
            </div>
          </div>

          {/* Strategy & Backtesting (Day 7) */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-violet-800 text-violet-300 text-xs font-bold flex items-center justify-center">5</span>
              Strategy & Backtesting (Day 7): 8 Questions
            </h4>
            <div className="space-y-2">
              <QuizQuestion number={27} question="What is a trading edge and why do you need one?">
                A statistical advantage that makes your trades profitable over a large sample size. Without an edge, you&apos;re gambling. Your edge comes from your strategy, risk management, and discipline combined.
              </QuizQuestion>
              <QuizQuestion number={28} question="What is backtesting and what are its 3 main limitations?">
                Testing a strategy on historical data. Limitations: (1) Past performance doesn&apos;t guarantee future results, (2) Survivorship bias — failed coins disappear from data, (3) Slippage and fees aren&apos;t always accounted for.
              </QuizQuestion>
              <QuizQuestion number={29} question="How many trades do you need to validate a strategy?">
                Minimum 100 trades to achieve statistical significance. Fewer than 50 trades could be random luck. Track win rate, avg win, avg loss, and expectancy across the full sample.
              </QuizQuestion>
              <QuizQuestion number={30} question="What is expectancy and how do you calculate it?">
                Expectancy = (Win Rate × Avg Win) - (Loss Rate × Avg Loss). Example: (0.45 × $200) - (0.55 × $100) = $90 - $55 = +$35 per trade. Positive expectancy means your strategy makes money over time.
              </QuizQuestion>
              <QuizQuestion number={31} question="Name the 3 basic trading strategies covered in the bootcamp.">
                (1) Trend Following — trade in the direction of the trend using EMA bounces, (2) Range Trading — buy support, sell resistance in sideways markets, (3) Breakout Trading — enter when price breaks key S/R with volume.
              </QuizQuestion>
              <QuizQuestion number={32} question="What is the difference between forward testing and backtesting?">
                Backtesting uses historical data (past). Forward testing (paper trading) uses real-time data without real money (present). Forward testing is more reliable because it tests your execution and psychology.
              </QuizQuestion>
              <QuizQuestion number={33} question="Why is curve-fitting dangerous in backtesting?">
                Over-optimizing parameters to fit historical data perfectly, creating a strategy that looks great on past data but fails in live markets. The more parameters you tweak, the less likely it works going forward.
              </QuizQuestion>
              <QuizQuestion number={34} question="What metrics should you track when evaluating a strategy?">
                Win rate, average win/loss ratio, risk/reward ratio, maximum drawdown, Sharpe ratio, expectancy, and profit factor. No single metric tells the whole story — track them all.
              </QuizQuestion>
            </div>
          </div>

          {/* Psychology & Journaling (Day 8) */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-pink-800 text-pink-300 text-xs font-bold flex items-center justify-center">6</span>
              Psychology & Journaling (Day 8): 6 Questions
            </h4>
            <div className="space-y-2">
              <QuizQuestion number={35} question="What is FOMO and how do you combat it?">
                Fear Of Missing Out — entering trades because others are profiting, not because your setup is valid. Combat by: sticking to your watchlist, waiting for your setup, and remembering that the market creates new opportunities every day.
              </QuizQuestion>
              <QuizQuestion number={36} question="What is revenge trading and why is it destructive?">
                Entering a trade immediately after a loss to &ldquo;win back&rdquo; the money. It&apos;s destructive because you trade with emotion, not analysis, and typically leads to bigger losses. Rule: after 2 consecutive losses, step away for at least 1 hour.
              </QuizQuestion>
              <QuizQuestion number={37} question="What are the 5 essential fields in a trade journal?">
                (1) Entry reason (why you took the trade), (2) Entry/SL/TP prices, (3) Emotional state before and during, (4) Screenshot of the chart at entry, (5) Outcome and lessons learned.
              </QuizQuestion>
              <QuizQuestion number={38} question="What is tilt and how do you recognize it?">
                An emotional state where you lose rational decision-making ability, usually triggered by a big loss or series of losses. Signs: increasing position size, abandoning your plan, entering trades without analysis.
              </QuizQuestion>
              <QuizQuestion number={39} question="Why is a daily loss limit critical?">
                It prevents catastrophic days. Set at -2% of your account. Once hit, close all positions and stop trading for the day. It protects you from tilt-induced cascading losses.
              </QuizQuestion>
              <QuizQuestion number={40} question="What is the 'process over outcome' mindset?">
                Judging your trading by how well you followed your plan, not by whether you made money. A losing trade executed perfectly is better than a winning trade taken impulsively. Focus on process, and profits will follow.
              </QuizQuestion>
            </div>
          </div>

          {/* Trading Plan (Day 9) */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-teal-800 text-teal-300 text-xs font-bold flex items-center justify-center">7</span>
              Trading Plan (Day 9): 5 Questions
            </h4>
            <div className="space-y-2">
              <QuizQuestion number={41} question="What are the 12 components of a complete trading plan?">
                (1) Goals, (2) Markets, (3) Timeframes, (4) Strategy, (5) Entry rules, (6) Exit rules, (7) Risk rules, (8) Position sizing, (9) Daily routine, (10) Journal template, (11) Review schedule, (12) Rules & commandments.
              </QuizQuestion>
              <QuizQuestion number={42} question="Why must your trading plan be written down?">
                A mental plan is flexible — you&apos;ll bend rules when emotions run high. A written plan is a contract with yourself. Studies show people who write down goals and plans are 42% more likely to achieve them.
              </QuizQuestion>
              <QuizQuestion number={43} question="What is a daily trading routine and what should it include?">
                A fixed sequence of actions before trading: check BTC trend, scan news, review watchlist, check open positions, set alerts. It puts you in a systematic mindset rather than a reactive one.
              </QuizQuestion>
              <QuizQuestion number={44} question="How often should you review your trading plan?">
                Weekly mini-review (15 min), monthly full review (1 hour), quarterly deep review (2-3 hours). The plan is a living document — update it as your skills and market conditions evolve.
              </QuizQuestion>
              <QuizQuestion number={45} question="What makes a trading plan 'complete'?">
                It covers every decision you might face: what to trade, when to enter, when to exit, how much to risk, what to do when wrong, what to do when right, and how to improve. If you can be surprised by a situation, your plan isn&apos;t complete.
              </QuizQuestion>
            </div>
          </div>

          {/* Integration (Day 10) */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-600 text-amber-100 text-xs font-bold flex items-center justify-center">8</span>
              Integration (Day 10): 5 Questions
            </h4>
            <div className="space-y-2">
              <QuizQuestion number={46} question="What are the 5 layers of the bootcamp framework?">
                Layer 1: Foundation (Days 1-2), Layer 2: Analysis (Days 3-4), Layer 3: Risk & Execution (Days 5-6), Layer 4: Strategy & Testing (Days 7-8), Layer 5: The Plan (Day 9). Each layer builds on the one below.
              </QuizQuestion>
              <QuizQuestion number={47} question="What are the 3 phases of the 90-day roadmap?">
                Phase 1: Foundation (Days 1-30, max 0.5% risk), Phase 2: Development (Days 31-60, max 0.75% risk), Phase 3: Performance (Days 61-90, max 1% risk if criteria met).
              </QuizQuestion>
              <QuizQuestion number={48} question="What is the 8-step master process flow?">
                Daily Routine → Signal Scoring → Pre-Trade Checklist → Entry → Management → Exit → Journal → Review. It loops continuously — every trade feeds the next cycle.
              </QuizQuestion>
              <QuizQuestion number={49} question="When should you add advanced strategies?">
                Only after your basic strategies have been profitable for 6 consecutive months. Prematurely adding complexity is the #1 way to blow up your account.
              </QuizQuestion>
              <QuizQuestion number={50} question="What is the #1 rule of the 10 Trading Commandments?">
                PROTECT CAPITAL FIRST. If your capital is gone, you can&apos;t trade. Every other rule supports this fundamental principle. Preservation before profit, always.
              </QuizQuestion>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-3 text-center">
            <p className="text-lg font-bold text-amber-800 flex items-center justify-center gap-2">
              <Award className="w-5 h-5" />
              Pass Mark: 40 / 50 (80%)
            </p>
            <p className="text-xs text-amber-700 mt-1">Below 80%? Review the day sections where you scored weakest.</p>
          </div>
        </TopicCard>

        {/* ── Topic 15: The 10 Trading Commandments ── */}
        <TopicCard
          id="d10-commandments"
          title="The 10 Trading Commandments"
          icon={<Shield />}
          variant="highlight"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            These are your immutable laws. Write them. Memorize them. Obey them. Every time you break one, the market will collect its fee.
          </p>

          {/* Commandments SVG */}
          <CommandmentsTablet />

          {/* Detailed commandments */}
          <div className="space-y-3 mt-4">
            {[
              { num: 1, title: 'PROTECT CAPITAL FIRST', desc: 'If your capital is gone, you can\'t trade. Every decision starts with "how much can I lose?" — not "how much can I make?"', icon: Shield, color: 'border-red-400 bg-red-50' },
              { num: 2, title: 'FOLLOW THE PLAN', desc: 'Your written trading plan exists for a reason. If you didn\'t plan it, don\'t trade it. Impulsive trades are donations to the market.', icon: FileCheck, color: 'border-blue-400 bg-blue-50' },
              { num: 3, title: 'RESPECT THE STOP LOSS', desc: 'Your stop-loss is your emergency exit. Never widen it, never remove it, never "give it more room." A stopped-out trade is a protected account.', icon: AlertTriangle, color: 'border-red-400 bg-red-50' },
              { num: 4, title: 'THINK IN PROBABILITY', desc: 'No single trade matters. Think in series of 100+ trades. A losing trade isn\'t a failure — it\'s a cost of doing business. Your edge plays out over time.', icon: Scale, color: 'border-violet-400 bg-violet-50' },
              { num: 5, title: 'SCORE BEFORE YOU SWING', desc: 'Every signal gets scored. If it doesn\'t reach 7/10 on your scoring system, walk away. The best trade is often no trade.', icon: Target, color: 'border-amber-400 bg-amber-50' },
              { num: 6, title: 'JOURNAL OR DON\'T TRADE', desc: 'If you\'re not willing to journal a trade, you\'re not serious enough to take it. No journal = no trade. Period.', icon: BookOpen, color: 'border-emerald-400 bg-emerald-50' },
              { num: 7, title: 'EMOTIONS ARE DATA, NOT ORDERS', desc: 'Notice your emotions — fear, greed, FOMO — but don\'t act on them. Write them in your journal. They\'re information about your state, not trading signals.', icon: Brain, color: 'border-violet-400 bg-violet-50' },
              { num: 8, title: 'SMALL & CONSISTENT > BIG & RECKLESS', desc: '5% per month compounded = 80% per year. One 50% loss requires a 100% gain to recover. Small, consistent wins build empires.', icon: TrendingUp, color: 'border-emerald-400 bg-emerald-50' },
              { num: 9, title: 'WHEN IN DOUBT, STAY OUT', desc: 'Uncertainty is your signal to wait. The market creates opportunities every single day. You never miss a trade — you only avoid a mistake.', icon: XCircle, color: 'border-amber-400 bg-amber-50' },
              { num: 10, title: 'THIS IS A MARATHON, NOT A SPRINT', desc: 'The traders who survive 5+ years aren\'t the ones who made the most in month one. They\'re the ones who lost the least while learning. Play the long game.', icon: RotateCcw, color: 'border-emerald-400 bg-emerald-50' },
            ].map((cmd) => (
              <div key={cmd.num} className={`rounded-lg border-l-4 ${cmd.color} px-4 py-3`}>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-800 text-amber-400 text-xs font-bold flex items-center justify-center">
                    {cmd.num}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{cmd.title}</p>
                    <p className="text-xs text-slate-600 mt-1">{cmd.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <KeyTakeaway>
            Print these commandments. Read them before every trading session. The day you think you don&apos;t need them is the day the market will remind you why they exist.
          </KeyTakeaway>
        </TopicCard>

        {/* ── Topic 16: The First 24 Hours After Bootcamp ── */}
        <TopicCard
          id="d10-first-24-hours"
          title="The First 24 Hours After Bootcamp"
          icon={<Sunrise />}
          variant="success"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Tomorrow morning is your first day as a bootcamp graduate. Here&apos;s exactly what to do.
          </p>

          <h4 className="text-sm font-bold text-slate-800 mb-3">Tomorrow Morning Checklist</h4>
          <div className="rounded-lg border border-green-200 bg-green-50/50 p-3 space-y-1 mb-4">
            <ChecklistItem>Wake up at your scheduled time (set alarm tonight)</ChecklistItem>
            <ChecklistItem>Open TradingView and check BTC/USDT daily chart</ChecklistItem>
            <ChecklistItem>Identify current market structure (trending up, down, or ranging?)</ChecklistItem>
            <ChecklistItem>Check key S/R levels on BTC</ChecklistItem>
            <ChecklistItem>Scan your watchlist for any pairs near key levels</ChecklistItem>
            <ChecklistItem>Check news calendar for any major events today</ChecklistItem>
            <ChecklistItem>Score any potential signals (≥ 7/10 only)</ChecklistItem>
            <ChecklistItem>If no signal scores ≥ 7 — that&apos;s fine. Log &ldquo;No trade today&rdquo; in journal</ChecklistItem>
            <ChecklistItem>If a signal qualifies — execute your full 8-step process</ChecklistItem>
          </div>

          <div className="rounded-lg border border-amber-300 bg-gradient-to-r from-amber-50 to-yellow-50 px-4 py-3 text-center">
            <p className="text-sm font-bold text-amber-800">
              You are now a trader with a plan. Act like it.
            </p>
          </div>
        </TopicCard>

        {/* ── Topic 17: Accountability & Community ── */}
        <TopicCard
          id="d10-accountability"
          title="Accountability & Community"
          icon={<Users />}
          variant="default"
        >
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Trading can be isolating. Having accountability structures dramatically increases your chance of success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                title: 'Trading Journal Commitment',
                desc: 'Post your weekly journal summary to a trusted friend or group. Accountability through transparency.',
                icon: ClipboardCheck,
                color: 'border-amber-400'
              },
              {
                title: 'Find an Accountability Partner',
                desc: 'Pair up with another trader. Check in daily on whether you followed your plan. Call out each other\'s mistakes.',
                icon: UserCheck,
                color: 'border-blue-400'
              },
              {
                title: 'Weekly Review Calls',
                desc: 'Schedule a 30-minute weekly call to review trades, discuss mistakes, and set intentions for the next week.',
                icon: MessageSquare,
                color: 'border-emerald-400'
              },
              {
                title: 'Community Challenges',
                desc: 'Join trading challenges (e.g., "30-day journaling streak") to build habits with peer support.',
                icon: Handshake,
                color: 'border-violet-400'
              },
              {
                title: 'Mentor Check-ins',
                desc: 'If you have access to a mentor, schedule monthly reviews. Fresh eyes catch blind spots you can\'t see.',
                icon: Eye,
                color: 'border-teal-400'
              },
            ].map((method) => (
              <div key={method.title} className={`rounded-lg border-l-4 ${method.color} bg-slate-50 px-4 py-3`}>
                <div className="flex items-start gap-2">
                  <method.icon className="w-4 h-4 mt-0.5 text-slate-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-slate-800">{method.title}</p>
                    <p className="text-xs text-slate-600 mt-1">{method.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <KeyTakeaway>
            The most successful traders are not lone wolves — they have accountability systems that keep them honest when motivation fades.
          </KeyTakeaway>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  MEXC TRADING LAB: Final Simulation Practice            */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d10-mexc-lab"
          title="MEXC Trading Lab — Final Simulation"
          icon={<FlaskConical />}
          variant="default"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Put everything together in this final trading simulation. Use the MEXC simulator below
            to execute a complete trade following your 8-step process: score the signal, run the
            pre-trade checklist, place the order, and journal the result. This is your dress rehearsal
            before going live.
          </p>
          <MEXCLab />
        </TopicCard>
      </div>
    </section>
  )
}
