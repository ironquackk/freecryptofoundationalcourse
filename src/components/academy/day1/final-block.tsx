'use client'

import React from 'react'
import {
  Monitor,
  BarChart3,
  Clock,
  CheckCircle,
  BookOpen,
  ClipboardList,
  ArrowRight,
  Star,
  TrendingUp,
  TrendingDown,
  Minus,
  Pencil,
  Eye,
  Shield,
  Target,
  Zap,
  Layers,
  Award,
  ArrowUpRight,
  ArrowDownRight,
  MoveHorizontal,
  Calendar,
  Lock,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { StepList } from '@/components/academy/step-list'
import { QuizQuestion } from '@/components/academy/quiz-question'
import { ChecklistItem } from '@/components/academy/checklist-item'

/* ──────────────────────────── FEATURE CARD ──────────────────────────── */
function FeatureCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode
  title: string
  items: string[]
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-amber-600 [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
        <h4 className="text-sm font-bold text-slate-900">{title}</h4>
      </div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-xs leading-relaxed text-slate-600 sm:text-sm">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ──────────────────────────── MAIN COMPONENT ──────────────────────────── */
export function FinalBlock() {
  return (
    <section id="final-block" aria-label="Final Block - Hour 8">
      {/* ── Section Divider ── */}
      <SectionDivider title="FINAL BLOCK — HOUR 8: TRADINGVIEW SETUP & DAY 1 REVIEW" />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 1: What Is TradingView and Why It's Essential
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="topic-8-1"
          title="What Is TradingView and Why It's Essential"
          icon={<Monitor />}
        >
          {/* Definition */}
          <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            <strong className="text-slate-900">TradingView</strong> is a web-based charting
            platform used by millions of traders worldwide.
          </p>

          {/* Why you need it */}
          <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50/60 p-4">
            <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-amber-800 sm:text-base">
              <Star className="h-4 w-4 text-amber-600" />
              Why You Need It
            </h4>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The charts on Binance and MEXC are basic. TradingView gives you{' '}
              <strong className="text-slate-900">professional-grade charting tools</strong>,{' '}
              <strong className="text-slate-900">indicators</strong>, and{' '}
              <strong className="text-slate-900">drawing capabilities</strong>. You&apos;ll do ALL
              your analysis on TradingView, then execute on Binance/MEXC. It&apos;s{' '}
              <span className="font-bold text-green-700">FREE</span> for basic use.
            </p>
          </div>

          {/* Setup steps */}
          <h4 className="mb-3 text-sm font-bold text-slate-900 sm:text-base">Setup Steps</h4>
          <div className="mb-6">
            <StepList
              steps={[
                {
                  number: 1,
                  title: 'Go to tradingview.com',
                  description: 'Visit the official TradingView website.',
                },
                {
                  number: 2,
                  title: 'Create a free account',
                  description:
                    'Sign up with your email. No payment required for the basic plan.',
                },
                {
                  number: 3,
                  title: 'Search for "BTCUSDT"',
                  description:
                    'Use the search bar at the top, find the BTC/USDT pair, and open the chart.',
                },
                {
                  number: 4,
                  title: 'This is your new home base',
                  description:
                    'This chart is where you will do all your market analysis going forward.',
                },
              ]}
            />
          </div>

          {/* Feature grid */}
          <h4 className="mb-3 text-sm font-bold text-slate-900 sm:text-base">
            TradingView Features You&apos;ll Use
          </h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Pencil />}
              title="Drawing Tools"
              items={['Horizontal lines (S/R)', 'Trend lines', 'Fibonacci', 'Rectangles (zones)']}
            />
            <FeatureCard
              icon={<BarChart3 />}
              title="Indicators"
              items={['EMA', 'RSI', 'MACD', 'Bollinger Bands', 'Volume']}
            />
            <FeatureCard
              icon={<Clock />}
              title="Timeframe Selector"
              items={['1m, 5m, 15m', '1H, 4H', '1D, 1W']}
            />
            <FeatureCard
              icon={<Eye />}
              title="Watchlist"
              items={['Save favorite pairs', 'Quick switching', 'Custom lists']}
            />
            <FeatureCard
              icon={<Layers />}
              title="Replay Mode"
              items={[
                'Scroll through history',
                'Candle by candle replay',
                'Practice reading charts',
              ]}
            />
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 2: Setting Up Your TradingView Workspace
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="topic-8-2"
          title="Setting Up Your TradingView Workspace"
          icon={<Monitor />}
          variant="highlight"
        >
          <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
            Complete each task below to get your TradingView workspace ready for analysis.
          </p>

          <div className="space-y-2">
            <ChecklistItem>
              <span>
                <strong>Task 1:</strong> Create your free account at tradingview.com
              </span>
            </ChecklistItem>
            <ChecklistItem>
              <span>
                <strong>Task 2:</strong> Open the BTC/USDT chart
              </span>
            </ChecklistItem>
            <ChecklistItem>
              <span>
                <strong>Task 3:</strong> Familiarize yourself with the layout — Left sidebar
                (Drawing tools), Top toolbar (Timeframe selector, chart type, indicators), Right
                sidebar (Watchlist, order panel), Bottom (Indicator panels)
              </span>
            </ChecklistItem>
            <ChecklistItem>
              <span>
                <strong>Task 4:</strong> Add BTC/USDT, ETH/USDT, and SOL/USDT to your watchlist
              </span>
            </ChecklistItem>
            <ChecklistItem>
              <span>
                <strong>Task 5:</strong> Try the drawing tools — draw a horizontal line, a trend
                line, a rectangle. Delete them. Get comfortable.
              </span>
            </ChecklistItem>
            <ChecklistItem>
              <span>
                <strong>Task 6:</strong> Switch through every timeframe (1m to 1W) on BTC/USDT.
                Observe how different the chart looks at each level. Write:{' '}
                <em className="text-amber-700">
                  &ldquo;The ___ timeframe looks the noisiest. The ___ timeframe looks the
                  cleanest.&rdquo;
                </em>
              </span>
            </ChecklistItem>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 3: Understanding What a Chart Is
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="topic-8-3"
          title="Understanding What a Chart Is — Before We Read It"
          icon={<BarChart3 />}
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            A <strong className="text-slate-900">chart</strong> is a visual representation of price
            movement over time.
          </p>

          {/* Axes explanation */}
          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-900">
                Horizontal Axis (X) = TIME
              </p>
              <p className="text-sm text-slate-600">
                Moving right means moving forward in time.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-900">
                Vertical Axis (Y) = PRICE
              </p>
              <p className="text-sm text-slate-600">
                Moving up = price increased. Moving down = price decreased.
              </p>
            </div>
          </div>

          {/* Chart type note */}
          <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50/50 p-4">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The most common chart type: <strong className="text-amber-800">CANDLESTICK</strong>{' '}
              (we&apos;ll learn to read these on Day 2)
            </p>
          </div>

          {/* Visual chart diagram */}
          <div className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
              Simple Chart with Directions
            </p>
            <div className="relative mx-auto h-52 w-full max-w-lg">
              {/* Y axis label */}
              <div className="absolute left-0 top-0 flex h-full flex-col items-center justify-center">
                <span className="-rotate-90 text-xs font-bold text-slate-500 sm:text-sm">
                  PRICE →
                </span>
              </div>

              {/* Chart area */}
              <div className="ml-8 h-full rounded border border-slate-300 bg-white relative overflow-hidden">
                {/* Simulated price line */}
                <svg
                  viewBox="0 0 400 160"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  <line x1="0" y1="40" x2="400" y2="40" stroke="#e2e8f0" strokeWidth="0.5" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="#e2e8f0" strokeWidth="0.5" />
                  <line x1="0" y1="120" x2="400" y2="120" stroke="#e2e8f0" strokeWidth="0.5" />

                  {/* Bullish segment (going up) */}
                  <polyline
                    points="10,130 60,110 110,90 150,60"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Bearish segment (going down) */}
                  <polyline
                    points="150,60 190,70 230,100 270,120"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Sideways segment (ranging) */}
                  <polyline
                    points="270,120 300,115 330,125 370,118 400,122"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Direction labels */}
                <div className="absolute left-[5%] top-[5%] flex items-center gap-1 rounded-full bg-green-100 px-2 py-1">
                  <ArrowUpRight className="h-3.5 w-3.5 text-green-600" />
                  <span className="text-xs font-bold text-green-700">BULLISH (Up)</span>
                </div>
                <div className="absolute left-[40%] top-[10%] flex items-center gap-1 rounded-full bg-red-100 px-2 py-1">
                  <ArrowDownRight className="h-3.5 w-3.5 text-red-600" />
                  <span className="text-xs font-bold text-red-700">BEARISH (Down)</span>
                </div>
                <div className="absolute bottom-[15%] right-[5%] flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1">
                  <MoveHorizontal className="h-3.5 w-3.5 text-amber-600" />
                  <span className="text-xs font-bold text-amber-700">RANGING (Sideways)</span>
                </div>
              </div>

              {/* X axis label */}
              <div className="mt-2 text-center">
                <span className="text-xs font-bold text-slate-500 sm:text-sm">TIME →</span>
              </div>
            </div>
          </div>

          {/* Quick reference */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg bg-green-50 p-3">
              <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
              <div>
                <p className="text-sm font-bold text-green-800">Chart goes UP</p>
                <p className="text-sm text-slate-600">
                  Asset becoming more valuable (bullish)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-red-50 p-3">
              <TrendingDown className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
              <div>
                <p className="text-sm font-bold text-red-800">Chart goes DOWN</p>
                <p className="text-sm text-slate-600">
                  Asset becoming less valuable (bearish)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-amber-50 p-3">
              <Minus className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
              <div>
                <p className="text-sm font-bold text-amber-800">Chart goes SIDEWAYS</p>
                <p className="text-sm text-slate-600">
                  Ranging — neither buyers nor sellers in control
                </p>
              </div>
            </div>
          </div>

          {/* What a chart tells you */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
              <Calendar className="mx-auto mb-2 h-6 w-6 text-slate-500" />
              <p className="text-sm font-bold text-slate-900">History</p>
              <p className="text-xs text-slate-500">Past</p>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-center">
              <Eye className="mx-auto mb-2 h-6 w-6 text-amber-600" />
              <p className="text-sm font-bold text-slate-900">Present</p>
              <p className="text-xs text-slate-500">Now</p>
            </div>
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 text-center">
              <Target className="mx-auto mb-2 h-6 w-6 text-purple-600" />
              <p className="text-sm font-bold text-slate-900">Potential</p>
              <p className="text-xs text-slate-500">Future — the hard part</p>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 4: The Concept of Timeframes — A Preview
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="topic-8-4"
          title="The Concept of Timeframes — A Preview"
          icon={<Clock />}
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            A <strong className="text-slate-900">timeframe</strong> determines how much time each
            &quot;candle&quot; or &quot;bar&quot; on the chart represents.
          </p>

          {/* Examples */}
          <div className="mb-6 space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                1D
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">1-Day (1D) Chart</p>
                <p className="text-sm text-slate-600">
                  Each candle = 1 full day. Big picture.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                4H
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">4-Hour (4H) Chart</p>
                <p className="text-sm text-slate-600">
                  Each candle = 4 hours. Medium-term moves.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                15m
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">15-Minute (15m) Chart</p>
                <p className="text-sm text-slate-600">
                  Each candle = 15 minutes. Short-term noise.
                </p>
              </div>
            </div>
          </div>

          {/* Key principle */}
          <div className="mb-6 rounded-lg border-l-4 border-l-amber-500 bg-amber-50/60 p-4">
            <p className="text-sm font-bold text-amber-800 sm:text-base">Key Principle</p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong className="text-green-700">Higher timeframes</strong> (1D, 4H) are more
              reliable for analysis.{' '}
              <strong className="text-red-700">Lower timeframes</strong> (15m, 5m, 1m) have more
              &quot;noise&quot; and false signals.
            </p>
          </div>

          {/* Beginner tip */}
          <div className="mb-6 rounded-lg border border-green-200 bg-green-50/60 p-4">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <CheckCircle className="mr-1 inline h-4 w-4 text-green-600" />
              <strong className="text-green-800">For beginners:</strong> Start with the{' '}
              <strong className="text-slate-900">1D (daily) chart</strong>. It&apos;s the cleanest
              and most reliable.
            </p>
          </div>

          {/* Timeframe reliability pyramid */}
          <div className="mx-auto max-w-md">
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
              Timeframe Reliability Hierarchy
            </p>
            <div className="flex flex-col items-center gap-1.5">
              {/* 1W - widest / most reliable */}
              <div className="flex w-full flex-col items-center">
                <div className="w-[30%] rounded-lg bg-green-600 py-2 text-center shadow-sm">
                  <span className="text-sm font-bold text-white">1W</span>
                </div>
                <span className="mt-0.5 text-[10px] text-green-700">Most Reliable</span>
              </div>
              {/* 1D */}
              <div className="flex w-full flex-col items-center">
                <div className="w-[40%] rounded-lg bg-green-500 py-2 text-center shadow-sm">
                  <span className="text-sm font-bold text-white">1D</span>
                </div>
                <span className="mt-0.5 text-[10px] text-green-600">Start Here</span>
              </div>
              {/* 4H */}
              <div className="flex w-full flex-col items-center">
                <div className="w-[50%] rounded-lg bg-amber-500 py-2 text-center shadow-sm">
                  <span className="text-sm font-bold text-white">4H</span>
                </div>
                <span className="mt-0.5 text-[10px] text-amber-600">Medium-term</span>
              </div>
              {/* 1H */}
              <div className="flex w-full flex-col items-center">
                <div className="w-[60%] rounded-lg bg-amber-400 py-2 text-center shadow-sm">
                  <span className="text-sm font-bold text-amber-900">1H</span>
                </div>
              </div>
              {/* 15m */}
              <div className="flex w-full flex-col items-center">
                <div className="w-[70%] rounded-lg bg-orange-400 py-2 text-center shadow-sm">
                  <span className="text-sm font-bold text-orange-900">15m</span>
                </div>
              </div>
              {/* 5m */}
              <div className="flex w-full flex-col items-center">
                <div className="w-[80%] rounded-lg bg-red-400 py-2 text-center shadow-sm">
                  <span className="text-sm font-bold text-red-900">5m</span>
                </div>
              </div>
              {/* 1m - noisiest */}
              <div className="flex w-full flex-col items-center">
                <div className="w-[90%] rounded-lg bg-red-600 py-2 text-center shadow-sm">
                  <span className="text-sm font-bold text-white">1m</span>
                </div>
                <span className="mt-0.5 text-[10px] text-red-600">Noisiest</span>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 5: Day 1 Self-Check Quiz — 20 Questions
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="topic-8-5"
          title="Day 1 Self-Check Quiz — 20 Questions"
          icon={<BookOpen />}
          variant="highlight"
        >
          <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
            Test your understanding of everything we covered today. Click each question to reveal
            the answer. Score yourself honestly!
          </p>

          <div className="space-y-3">
            <QuizQuestion number={1} question="What are the 3 functions of money?">
              <p>Medium of exchange, Store of value, Unit of account.</p>
            </QuizQuestion>

            <QuizQuestion
              number={2}
              question="Why was Bitcoin created? (What problem does it solve?)"
            >
              <p>
                Bitcoin was created to provide a decentralized, trustless, censorship-resistant
                form of digital money — solving the problems of inflation (central banks printing
                money), middlemen (banks controlling access), and financial exclusion.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={3}
              question="What is blockchain? Explain in your own words."
            >
              <p>
                A blockchain is a distributed, immutable digital ledger that records transactions
                across many computers. No single entity controls it, and once data is written, it
                cannot be altered.
              </p>
            </QuizQuestion>

            <QuizQuestion number={4} question='What does "decentralized" mean?'>
              <p>
                No single entity (person, company, or government) controls the system. Control is
                distributed across many participants in the network.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={5}
              question='What does "immutable" mean in the context of blockchain?'
            >
              <p>
                Immutable means it cannot be changed or undone. Once a transaction is recorded on
                the blockchain, it is permanent and cannot be altered.
              </p>
            </QuizQuestion>

            <QuizQuestion number={6} question="How many Bitcoins will ever exist?">
              <p>21 million. This is hardcoded into Bitcoin&apos;s protocol and cannot be changed.</p>
            </QuizQuestion>

            <QuizQuestion
              number={7}
              question="What is the difference between a coin and a token?"
            >
              <p>
                A <strong>coin</strong> operates on its own blockchain (e.g., BTC on Bitcoin, ETH
                on Ethereum). A <strong>token</strong> is built on top of an existing blockchain
                (e.g., USDT, UNI, LINK on Ethereum).
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={8}
              question="What is Ethereum and how is it different from Bitcoin?"
            >
              <p>
                Ethereum is a programmable blockchain that supports smart contracts and
                decentralized applications (dApps). Bitcoin is primarily a store of value and
                digital currency. Think: Bitcoin = digital gold, Ethereum = world computer.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={9}
              question="What are smart contracts? Give a real-world analogy."
            >
              <p>
                Smart contracts are self-executing programs stored on the blockchain that
                automatically enforce agreements when conditions are met. Analogy: A vending
                machine — you put in money, select an item, and it dispenses automatically without
                a cashier.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={10}
              question="What is USDT and why is it essential for trading?"
            >
              <p>
                USDT (Tether) is a stablecoin pegged 1:1 to the US dollar. It&apos;s essential
                for trading because it lets you move in and out of crypto positions without
                converting back to fiat currency. It&apos;s the &quot;cash&quot; of the crypto
                world.
              </p>
            </QuizQuestion>

            <QuizQuestion number={11} question="What is an altcoin? Name 3 examples.">
              <p>
                An altcoin is any cryptocurrency other than Bitcoin. Examples: Ethereum (ETH),
                Solana (SOL), Cardano (ADA) — among thousands of others.
              </p>
            </QuizQuestion>

            <QuizQuestion number={12} question='What does "market cap" mean?'>
              <p>
                Market cap (market capitalization) = Current Price × Total Circulating Supply. It
                represents the total value of all coins currently in circulation and is used to
                compare the size of different cryptocurrencies.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={13}
              question="Name 4 reasons why crypto prices move."
            >
              <p>
                Any 4 of: Supply and demand, Market sentiment (fear/greed), News and events,
                Whale activity (large holders), Tokenomics (supply schedule, burns), Macro factors
                (interest rates, inflation), Market cycles, Bitcoin dominance.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={14}
              question="What is the Bitcoin halving and why does it matter?"
            >
              <p>
                The Bitcoin halving is an event that occurs every ~210,000 blocks (roughly every 4
                years) where the block reward for miners is cut in half. It matters because it
                reduces the rate of new Bitcoin supply entering the market, historically leading to
                significant price increases in the following cycle.
              </p>
            </QuizQuestion>

            <QuizQuestion number={15} question="What is KYC?">
              <p>
                KYC stands for Know Your Customer. It&apos;s a verification process that exchanges
                require to confirm your identity (ID, selfie, proof of address) before you can
                trade. It helps prevent fraud and money laundering.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={16}
              question="Why should you use Google Authenticator instead of SMS for 2FA?"
            >
              <p>
                SMS-based 2FA is vulnerable to SIM-swap attacks, where hackers transfer your phone
                number to their SIM card to intercept codes. Google Authenticator generates
                time-based codes locally on your device, making it much harder to compromise.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={17}
              question="What is an anti-phishing code and how does it protect you?"
            >
              <p>
                An anti-phishing code is a custom word or phrase you set on your exchange account
                that appears in all legitimate emails from that exchange. If an email doesn&apos;t
                show your anti-phishing code, it&apos;s a phishing attempt and should be ignored.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={18}
              question="What's the difference between a market order and a limit order?"
            >
              <p>
                A <strong>market order</strong> buys/sells immediately at the current market price
                — fast but you don&apos;t control the exact price. A <strong>limit order</strong>{' '}
                buys/sells only at a specific price you set — you control the price but it may not
                fill if the market never reaches your price.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={19}
              question="What does BTC/USDT mean? Which is the base and which is the quote?"
            >
              <p>
                BTC/USDT means you are pricing Bitcoin (BTC) in terms of Tether (USDT). BTC is
                the <strong>base currency</strong> (what you&apos;re buying/selling) and USDT is
                the <strong>quote currency</strong> (what you&apos;re paying with).
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={20}
              question="What timeframe is best for beginners to analyze?"
            >
              <p>
                The 1D (daily) timeframe. It&apos;s the cleanest and most reliable, with the least
                noise and false signals.
              </p>
            </QuizQuestion>
          </div>

          {/* Pass Mark Banner */}
          <div className="mt-6 rounded-xl border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-amber-100 p-5 text-center shadow-sm">
            <Award className="mx-auto mb-2 h-8 w-8 text-amber-600" />
            <p className="text-lg font-bold text-amber-800 sm:text-xl">Pass Mark: 16 / 20</p>
            <p className="mt-1 text-sm text-slate-600">
              You need at least 16 correct answers before moving to Day 2. Review any topics you
              missed!
            </p>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 6: Day 1 Key Takeaways
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard id="topic-8-6" title="Day 1 Key Takeaways" icon={<Star />}>
          <div className="space-y-3">
            {[
              {
                icon: <Lock className="h-4 w-4" />,
                text: 'Crypto exists to solve real problems with traditional money: inflation, censorship, middlemen, and lack of access',
              },
              {
                icon: <Layers className="h-4 w-4" />,
                text: 'Blockchain is the underlying technology: decentralized, immutable, transparent, trustless',
              },
              {
                icon: <Star className="h-4 w-4" />,
                text: 'Bitcoin = digital gold (store of value, finite supply, market leader)',
              },
              {
                icon: <Zap className="h-4 w-4" />,
                text: 'Ethereum = world computer (smart contracts, dApps, platform for building)',
              },
              {
                icon: <Shield className="h-4 w-4" />,
                text: 'Stablecoins (USDT/USDC) = your trading fuel, the "cash" of the crypto world',
              },
              {
                icon: <BarChart3 className="h-4 w-4" />,
                text: 'Altcoins = everything else, ranging from legitimate projects to scams',
              },
              {
                icon: <TrendingUp className="h-4 w-4" />,
                text: 'Prices move on: supply/demand, sentiment, news, whales, tokenomics, macro, cycles, and Bitcoin dominance',
              },
              {
                icon: <Clock className="h-4 w-4" />,
                text: 'Understanding market cycles prevents buying at the top and selling at the bottom',
              },
              {
                icon: <Shield className="h-4 w-4" />,
                text: 'Security is non-negotiable: 2FA, anti-phishing, withdrawal whitelist, strong unique passwords',
              },
              {
                icon: <Lock className="h-4 w-4" />,
                text: 'Always use bookmarked official URLs — never click links from emails or DMs',
              },
              {
                icon: <Monitor className="h-4 w-4" />,
                text: 'TradingView is your analysis home. Binance/MEXC are your execution platforms.',
              },
              {
                icon: <ArrowRight className="h-4 w-4" />,
                text: 'Tomorrow: We learn to READ the chart — candlesticks, patterns, and the visual language of price action',
              },
            ].map((takeaway, index) => (
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

          {/* Tomorrow teaser - gradient card */}
          <div className="mt-6 rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 text-center shadow-lg">
            <div className="mb-2 flex items-center justify-center gap-2">
              <BookOpen className="h-6 w-6 text-amber-400" />
              <span className="text-sm font-bold uppercase tracking-wider text-amber-400">
                Coming Tomorrow — Day 2
              </span>
            </div>
            <p className="text-lg font-bold text-white sm:text-xl">
              Candlesticks, Patterns &amp; the Visual Language of Price Action
            </p>
            <p className="mt-2 text-sm text-slate-400">
              You&apos;ll learn to read the chart like a book. Every candle tells a story —
              tomorrow you&apos;ll learn to read it.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-amber-400">
              <ArrowRight className="h-5 w-5" />
              <span className="text-sm font-semibold">Get some rest — you&apos;ve earned it!</span>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 7: Day 1 Homework (Before Day 2)
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="topic-8-7"
          title="Day 1 Homework (Before Day 2)"
          icon={<ClipboardList />}
          variant="highlight"
        >
          <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
            Complete all tasks below before starting Day 2. Check each one off as you go!
          </p>

          <div className="rounded-xl border-2 border-amber-300 bg-amber-50/40 p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-amber-600" />
              <h4 className="text-base font-bold text-amber-800 sm:text-lg">
                HOMEWORK CHECKLIST
              </h4>
            </div>

            <div className="space-y-2">
              <ChecklistItem>
                <span>
                  <strong>Task 1:</strong> Complete both account setups (Binance + MEXC) with full
                  KYC and all security features. Check every box on the security checklist.
                </span>
              </ChecklistItem>
              <ChecklistItem>
                <span>
                  <strong>Task 2:</strong> Deposit at least $20 USDT into each exchange
                  (you&apos;ll need it for practice trades this week).
                </span>
              </ChecklistItem>
              <ChecklistItem>
                <span>
                  <strong>Task 3:</strong> Create your TradingView account. Add BTC, ETH, and SOL
                  to your watchlist. Explore the interface for at least 30 minutes.
                </span>
              </ChecklistItem>
              <ChecklistItem>
                <span>
                  <strong>Task 4:</strong> On TradingView, open BTC/USDT on the daily timeframe.
                  Just OBSERVE. Write 5 observations.
                </span>
              </ChecklistItem>
              <ChecklistItem>
                <span>
                  <strong>Task 5:</strong> Read through the 30 vocabulary terms one more time. Quiz
                  yourself.
                </span>
              </ChecklistItem>
              <ChecklistItem>
                <span>
                  <strong>Task 6:</strong> Write your answer to:{' '}
                  <em className="text-amber-700">
                    &ldquo;Based on what I learned today, the cryptocurrency I&apos;m most
                    interested in trading is ___ because ___&rdquo;
                  </em>
                </span>
              </ChecklistItem>
            </div>
          </div>

          {/* Encouragement banner */}
          <div className="mt-5 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 p-4 text-center">
            <CheckCircle className="mx-auto mb-1 h-6 w-6 text-green-600" />
            <p className="text-sm font-bold text-green-800 sm:text-base">
              Complete all 6 tasks and you&apos;re fully prepared for Day 2!
            </p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Take your time — building a strong foundation now pays off later.
            </p>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
