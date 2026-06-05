'use client'

import React from 'react'
import {
  BookOpen,
  BookMarked,
  ClipboardList,
  Calendar,
  Activity,
  GraduationCap,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  Target,
  BarChart3,
  Heart,
  Brain,
  PenLine,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { ChecklistItem } from '@/components/academy/checklist-item'

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 1: The Trading Journal — Why It's Your Most Important Tool
   ═══════════════════════════════════════════════════════════════════ */

function TopicJournalWhy() {
  return (
    <TopicCard
      id="d5-journal-why"
      title="The Trading Journal — Why It&apos;s Your Most Important Tool"
      icon={<BookMarked />}
      variant="highlight"
    >
      {/* Point 1 */}
      <div className="mb-4 rounded-xl border-2 border-amber-300 bg-amber-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <BookMarked className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <p className="text-sm font-bold text-amber-900 sm:text-base">
            Every professional trader journals every trade. Every amateur thinks they&apos;ll remember.
          </p>
        </div>
      </div>

      {/* Point 2 */}
      <div className="mb-4 rounded-xl border-2 border-slate-300 bg-slate-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600" />
          <p className="text-sm font-bold text-slate-900 sm:text-base">
            Without a journal, you&apos;re flying blind.
          </p>
        </div>
      </div>

      {/* Point 3 */}
      <div className="mb-4 rounded-xl border-2 border-red-300 bg-red-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <Target className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <p className="text-sm font-bold text-red-900 sm:text-base">
            The journal is your MIRROR — it shows the TRUTH, not what you THINK happened.
          </p>
        </div>
      </div>

      {/* Point 4 */}
      <div className="mb-6 rounded-xl border-2 border-purple-300 bg-purple-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <Brain className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
          <p className="text-sm font-bold text-purple-900 sm:text-base">
            The act of writing a trade down CHANGES how you trade. When you know you have to write &ldquo;I entered this trade because I was bored and FOMO-ing,&rdquo; you&apos;re less likely to enter it.
          </p>
        </div>
      </div>

      <KeyTakeaway>
        A journal creates ACCOUNTABILITY. You can&apos;t hide from your mistakes when they&apos;re written in black and white.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 2: The Complete Trading Journal Template
   ═══════════════════════════════════════════════════════════════════ */

function TopicJournalTemplate() {
  return (
    <TopicCard
      id="d5-journal-template"
      title="The Complete Trading Journal Template"
      icon={<ClipboardList />}
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        This is your master template. Copy it for every single trade. Every field matters — skip nothing.
      </p>

      {/* TRADE IDENTIFICATION — slate card */}
      <div className="mb-4 rounded-xl border-2 border-slate-300 bg-slate-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">
          📋 TRADE IDENTIFICATION
        </h4>
        <div className="space-y-2 text-sm text-slate-700 sm:text-base">
          <p>• Trade # (sequential)</p>
          <p>• Date</p>
          <p>• Day of week</p>
          <p>• Time of entry</p>
        </div>
      </div>

      {/* TRADE SETUP — blue card */}
      <div className="mb-4 rounded-xl border-2 border-blue-300 bg-blue-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-blue-800 sm:text-base">
          ⚙️ TRADE SETUP
        </h4>
        <div className="space-y-2 text-sm text-blue-900 sm:text-base">
          <p>• Pair</p>
          <p>• Direction: <strong>LONG</strong> or <strong>SHORT</strong></p>
          <p>• Timeframe</p>
          <p>• Trading style: Scalp / Day / Swing / Position</p>
          <p>• Strategy type: Trend follow / Breakout / Range / Pullback</p>
        </div>
      </div>

      {/* ANALYSIS — amber card */}
      <div className="mb-4 rounded-xl border-2 border-amber-300 bg-amber-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-amber-800 sm:text-base">
          🔍 ANALYSIS <span className="text-xs font-normal normal-case text-amber-700">— from Day 2-3 concepts</span>
        </h4>
        <div className="space-y-2 text-sm text-amber-900 sm:text-base">
          <p>• Market structure (Uptrend/Downtrend/Range)</p>
          <p>• Key S/R level (Price + touches)</p>
          <p>• EMA alignment (Price vs EMA 20/50/200)</p>
          <p>• Candlestick pattern at entry</p>
          <p>• RSI reading (Value + divergence)</p>
          <p>• MACD signal (Crossover/Histogram/Divergence)</p>
          <p>• Volume (Above/below average + confirming or not)</p>
          <p>• Bollinger Bands (Squeeze/Expansion/Walking)</p>
          <p>• Total confirmations <span className="font-bold text-red-700">(minimum 2)</span></p>
        </div>
      </div>

      {/* TRADE PARAMETERS — green card */}
      <div className="mb-4 rounded-xl border-2 border-green-300 bg-green-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-green-800 sm:text-base">
          📊 TRADE PARAMETERS
        </h4>
        <div className="space-y-2 text-sm text-green-900 sm:text-base">
          <p>• Entry price</p>
          <p>• Stop loss price</p>
          <p>• Stop loss distance (%)</p>
          <p>• Take profit 1, 2, 3</p>
          <p>• Risk/Reward ratio</p>
        </div>
      </div>

      {/* RISK MANAGEMENT — red card */}
      <div className="mb-4 rounded-xl border-2 border-red-300 bg-red-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-red-800 sm:text-base">
          🛡️ RISK MANAGEMENT
        </h4>
        <div className="space-y-2 text-sm text-red-900 sm:text-base">
          <p>• Account balance</p>
          <p>• Risk percentage</p>
          <p>• Risk amount</p>
          <p>• Position size (coins = $)</p>
          <p>• Leverage used</p>
          <p>• Margin type: Isolated / Cross</p>
        </div>
      </div>

      {/* TRADE MANAGEMENT — violet card */}
      <div className="mb-4 rounded-xl border-2 border-violet-300 bg-violet-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-violet-800 sm:text-base">
          🔧 TRADE MANAGEMENT
        </h4>
        <div className="space-y-2 text-sm text-violet-900 sm:text-base">
          <p>• Did you move your stop loss? Y/N — If yes, why?</p>
          <p>• Did you take partial profit? Y/N — At what level?</p>
          <p>• Did you add to the position? Y/N — Why?</p>
          <p>• Did you exit early? Y/N — Why?</p>
          <p>• Were you stopped out? Y/N</p>
          <p>• Did price hit TP? Y/N — Which TP?</p>
        </div>
      </div>

      {/* TRADE OUTCOME — emerald card */}
      <div className="mb-4 rounded-xl border-2 border-emerald-300 bg-emerald-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-800 sm:text-base">
          📈 TRADE OUTCOME
        </h4>
        <div className="space-y-2 text-sm text-emerald-900 sm:text-base">
          <p>• Exit price</p>
          <p>• Result: WIN / LOSS / BREAKEVEN</p>
          <p>• P&amp;L in dollars, percentage, R-multiples</p>
          <p>• Trade duration</p>
        </div>
      </div>

      {/* EMOTIONAL RECORD — rose card */}
      <div className="mb-4 rounded-xl border-2 border-rose-300 bg-rose-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-rose-800 sm:text-base">
          ❤️ EMOTIONAL RECORD
        </h4>
        <div className="space-y-2 text-sm text-rose-900 sm:text-base">
          <p>• Emotional state BEFORE entry (1-10 scale)</p>
          <p>• Emotional state DURING trade (1-10)</p>
          <p>• Emotional state AFTER exit (1-10)</p>
          <p>• Did you follow your plan? Y/N</p>
          <p>• If no, what did you do differently?</p>
          <p>• What was the strongest emotion?</p>
          <p>• Did you want to: Move stop? Close early? Add more?</p>
          <p>• What would you tell yourself BEFORE this trade if you could go back in time?</p>
        </div>
      </div>

      {/* LESSONS LEARNED — cyan card */}
      <div className="rounded-xl border-2 border-cyan-300 bg-cyan-50 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-cyan-800 sm:text-base">
          🎓 LESSONS LEARNED
        </h4>
        <div className="space-y-2 text-sm text-cyan-900 sm:text-base">
          <p>• What went well</p>
          <p>• What went wrong</p>
          <p>• What will I do differently next time</p>
          <p>• Grade this trade (A-F)</p>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 3: How to Review Your Journal — The Weekly Review Process
   ═══════════════════════════════════════════════════════════════════ */

function TopicWeeklyReview() {
  return (
    <TopicCard
      id="d5-weekly-review"
      title="How to Review Your Journal — The Weekly Review Process"
      icon={<Calendar />}
    >
      {/* THE WEEKLY REVIEW heading */}
      <div className="mb-6 rounded-xl border-2 border-slate-400 bg-slate-800 p-4 sm:p-5 text-center">
        <p className="text-lg font-black text-white sm:text-xl">THE WEEKLY REVIEW</p>
        <p className="mt-1 text-sm text-slate-300 sm:text-base">5 Steps to turn data into improvement</p>
      </div>

      {/* STEP 1: CALCULATE WEEKLY METRICS — blue card */}
      <div className="mb-4 rounded-xl border-2 border-blue-300 bg-blue-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">1</span>
          <div>
            <h4 className="text-sm font-bold text-blue-900 sm:text-base">CALCULATE WEEKLY METRICS</h4>
            <div className="mt-2 space-y-1 text-sm text-blue-800 sm:text-base">
              <p>• Total trades</p>
              <p>• Win rate</p>
              <p>• Average win (R)</p>
              <p>• Average loss (R)</p>
              <p>• Total P&amp;L</p>
              <p>• Expectancy</p>
              <p>• Risk management compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* STEP 2: IDENTIFY TOP 3 BEST TRADES — green card */}
      <div className="mb-4 rounded-xl border-2 border-green-300 bg-green-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">2</span>
          <div>
            <h4 className="text-sm font-bold text-green-900 sm:text-base">IDENTIFY TOP 3 BEST TRADES</h4>
            <div className="mt-2 space-y-1 text-sm text-green-800 sm:text-base">
              <p>• What did they have in common?</p>
              <p>• What confirmations were present?</p>
              <p>• What was your emotional state?</p>
              <p>• How can I find MORE of these?</p>
            </div>
          </div>
        </div>
      </div>

      {/* STEP 3: IDENTIFY TOP 3 WORST TRADES — red card */}
      <div className="mb-4 rounded-xl border-2 border-red-300 bg-red-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">3</span>
          <div>
            <h4 className="text-sm font-bold text-red-900 sm:text-base">IDENTIFY TOP 3 WORST TRADES</h4>
            <div className="mt-2 space-y-1 text-sm text-red-800 sm:text-base">
              <p>• What went wrong?</p>
              <p>• What was your emotional state?</p>
              <p>• What rule did I break?</p>
              <p>• How can I PREVENT this?</p>
            </div>
          </div>
        </div>
      </div>

      {/* STEP 4: CHECK FOR PATTERNS — amber card with checklist */}
      <div className="mb-4 rounded-xl border-2 border-amber-300 bg-amber-50 p-4 sm:p-5">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white">4</span>
          <h4 className="text-sm font-bold text-amber-900 sm:text-base">CHECK FOR PATTERNS</h4>
        </div>
        <div className="space-y-1">
          <ChecklistItem>Do I win more on certain days?</ChecklistItem>
          <ChecklistItem>Do I win more at certain times?</ChecklistItem>
          <ChecklistItem>Do I win more with certain pairs?</ChecklistItem>
          <ChecklistItem>Do I win more with certain strategies?</ChecklistItem>
          <ChecklistItem>Do I lose more after consecutive wins? (Overconfidence)</ChecklistItem>
          <ChecklistItem>Do I lose more after consecutive losses? (Revenge trading)</ChecklistItem>
        </div>
      </div>

      {/* STEP 5: SET ONE GOAL FOR NEXT WEEK — violet card */}
      <div className="mb-8 rounded-xl border-2 border-violet-300 bg-violet-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">5</span>
          <div>
            <h4 className="text-sm font-bold text-violet-900 sm:text-base">SET ONE GOAL FOR NEXT WEEK</h4>
            <div className="mt-3 space-y-2">
              {[
                'No trade without 3 confirmations',
                'No moving stop loss away',
                '24-hour break after 3 losses',
                'No trading on Mondays',
                'Only BTC/ETH until 45% win rate',
              ].map((goal) => (
                <div key={goal} className="rounded-lg border border-violet-200 bg-white px-3 py-2 text-sm text-violet-800 sm:text-base">
                  &ldquo;{goal}&rdquo;
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* THE MONTHLY REVIEW — separate slate card */}
      <div className="rounded-xl border-2 border-slate-400 bg-slate-100 p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">
          📅 THE MONTHLY REVIEW
        </h4>
        <div className="space-y-2 text-sm text-slate-700 sm:text-base">
          <p>• Compile weekly metrics</p>
          <p>• Calculate monthly win rate, R:R, expectancy, total P&amp;L</p>
          <p>• Compare to previous months</p>
          <p>• Decide: <strong>Continue</strong>, <strong>modify</strong>, or <strong>pause</strong></p>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 4: Trade Management — What to Do AFTER You Enter
   ═══════════════════════════════════════════════════════════════════ */

function TopicTradeManagement() {
  return (
    <TopicCard
      id="d5-trade-management"
      title="Trade Management — What to Do AFTER You Enter"
      icon={<Activity />}
      variant="warning"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        Entering a trade is only the beginning. What you do <strong>after</strong> you enter determines whether you&apos;re profitable or not. Here are the 5 scenarios you&apos;ll face.
      </p>

      {/* SCENARIO 1: PRICE GOES STRAIGHT TO STOP LOSS — red card */}
      <div className="mb-4 rounded-xl border-2 border-red-300 bg-red-50 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <TrendingDown className="h-5 w-5 text-red-600" />
          <h4 className="text-sm font-bold text-red-900 sm:text-base">SCENARIO 1: PRICE GOES STRAIGHT TO STOP LOSS</h4>
        </div>
        <p className="mb-3 text-sm font-bold text-red-900 sm:text-base">
          Your thesis was wrong. The market disagreed. Accept it.
        </p>
        <div className="mb-3 grid gap-3 sm:grid-cols-2">
          {/* DO NOT */}
          <div className="rounded-lg border border-red-200 bg-red-100/50 p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-700">DO NOT</p>
            <ul className="space-y-1 text-sm text-red-800 sm:text-base">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span>Move stop further</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span>Average down</span>
              </li>
            </ul>
          </div>
          {/* DO */}
          <div className="rounded-lg border border-green-200 bg-green-100/50 p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-green-700">DO</p>
            <ul className="space-y-1 text-sm text-green-800 sm:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span>Accept the loss</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span>Close chart</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span>Review when calm</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg border-l-4 border-l-red-500 bg-red-100/50 p-3">
          <p className="text-sm font-semibold text-red-900 sm:text-base">
            A 1% loss is exactly what you planned for. This is the cost of doing business.
          </p>
        </div>
      </div>

      {/* SCENARIO 2: PRICE GOES YOUR WAY, THEN PULLS BACK TO ENTRY — amber card */}
      <div className="mb-4 rounded-xl border-2 border-amber-300 bg-amber-50 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <Minus className="h-5 w-5 text-amber-600" />
          <h4 className="text-sm font-bold text-amber-900 sm:text-base">SCENARIO 2: PRICE GOES YOUR WAY, THEN PULLS BACK TO ENTRY</h4>
        </div>
        <p className="mb-3 text-sm text-amber-800 sm:text-base">
          Most emotionally challenging scenario
        </p>
        <div className="mb-3 grid gap-3 sm:grid-cols-2">
          {/* DO NOT */}
          <div className="rounded-lg border border-red-200 bg-red-100/50 p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-red-700">DO NOT</p>
            <ul className="space-y-1 text-sm text-red-800 sm:text-base">
              <li className="flex items-start gap-2">
                <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                <span>Close early &ldquo;to be safe&rdquo;</span>
              </li>
            </ul>
          </div>
          {/* DO */}
          <div className="rounded-lg border border-green-200 bg-green-100/50 p-3">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-green-700">DO</p>
            <ul className="space-y-1 text-sm text-green-800 sm:text-base">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span>If price reached TP1, move stop to breakeven (ALLOWED — moving closer)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-100/50 p-3">
          <p className="text-sm font-semibold text-amber-900 sm:text-base">
            <strong>Breakeven stop rule:</strong> Once price reaches 1R profit, move stop to entry
          </p>
        </div>
      </div>

      {/* SCENARIO 3: PRICE HITS TP1 BUT YOU'RE TEMPTED TO HOLD — green card */}
      <div className="mb-4 rounded-xl border-2 border-green-300 bg-green-50 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <h4 className="text-sm font-bold text-green-900 sm:text-base">SCENARIO 3: PRICE HITS TP1 BUT YOU&apos;RE TEMPTED TO HOLD</h4>
        </div>
        <p className="mb-3 text-sm font-bold text-green-800 sm:text-base">
          The greed trap
        </p>
        <div className="mb-3 rounded-lg border border-green-200 bg-white p-3">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-green-700">DO</p>
          <ul className="space-y-1 text-sm text-green-800 sm:text-base">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>Take partial profit at TP1 (50%)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>Move stop to breakeven on remaining 50%</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg border-l-4 border-l-green-500 bg-green-100/50 p-3">
          <p className="text-sm font-semibold text-green-900 sm:text-base">
            &ldquo;Scale out&rdquo; strategy from Day 4 — lock in profits, let the rest ride risk-free
          </p>
        </div>
      </div>

      {/* SCENARIO 4: PRICE GOING YOUR WAY AND YOU WANT TO ADD MORE — violet card */}
      <div className="mb-4 rounded-xl border-2 border-violet-300 bg-violet-50 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-violet-600" />
          <h4 className="text-sm font-bold text-violet-900 sm:text-base">SCENARIO 4: PRICE GOING YOUR WAY AND YOU WANT TO ADD MORE</h4>
        </div>
        <p className="mb-3 text-sm font-bold text-violet-800 sm:text-base">
          Pyramiding rules:
        </p>
        <div className="space-y-2 mb-3">
          {[
            { num: 1, text: 'Add-on has its own stop loss' },
            { num: 2, text: 'Add-on follows 1% risk rule independently' },
            { num: 3, text: 'Add-on has its own R:R of at least 1:2' },
            { num: 4, text: 'Total open risk doesn&apos;t exceed 3%' },
          ].map((rule) => (
            <div key={rule.num} className="flex items-start gap-2 text-sm text-violet-900 sm:text-base">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                {rule.num}
              </span>
              <span>{rule.text}</span>
            </div>
          ))}
        </div>
        <div className="rounded-lg border-l-4 border-l-red-500 bg-red-100/50 p-3">
          <p className="text-sm font-bold text-red-900 sm:text-base">
            NEVER add to a losing position
          </p>
        </div>
      </div>

      {/* SCENARIO 5: NOTHING HAPPENING — PRICE IS SIDEWAYS — slate card */}
      <div className="rounded-xl border-2 border-slate-300 bg-slate-50 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <Minus className="h-5 w-5 text-slate-600" />
          <h4 className="text-sm font-bold text-slate-900 sm:text-base">SCENARIO 5: NOTHING HAPPENING — PRICE IS SIDEWAYS</h4>
        </div>
        <p className="mb-3 text-sm font-bold text-slate-700 sm:text-base">
          The boredom trap
        </p>
        <div className="space-y-2 text-sm text-slate-700 sm:text-base">
          <p>• If stop hasn&apos;t been hit and TP hasn&apos;t been hit, trade is still valid</p>
          <p>• Check market conditions haven&apos;t fundamentally changed</p>
        </div>
        <div className="mt-3 rounded-lg border-l-4 border-l-slate-500 bg-slate-100 p-3">
          <p className="text-sm font-semibold text-slate-800 sm:text-base">
            A trade that goes sideways for a week then hits TP is still a winning trade
          </p>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   TOPIC 5: Practice — Your First Paper Trading Session
   ═══════════════════════════════════════════════════════════════════ */

function TopicPaperTrading() {
  return (
    <TopicCard
      id="d5-paper-trading"
      title="Practice — Your First Paper Trading Session"
      icon={<GraduationCap />}
      variant="success"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        Now it&apos;s time to put everything together. Execute these 3 paper trades using the journal template and all the concepts from Days 1-4.
      </p>

      {/* TRADE 1: TREND FOLLOWING — green border */}
      <div className="mb-4 rounded-xl border-2 border-green-400 bg-green-50/50 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-green-600" />
          <h4 className="text-sm font-bold text-green-900 sm:text-base">TRADE 1: TREND FOLLOWING</h4>
          <span className="rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase">Day 2 + Day 4</span>
        </div>
        <div className="space-y-2 text-sm text-green-800 sm:text-base">
          <p>1. Find pair in clear trend</p>
          <p>2. Identify trend using structure + EMA alignment</p>
          <p>3. Wait for pullback to EMA 20 or support</p>
          <p>4. Look for confirmation (RSI, candlestick, volume)</p>
          <p>5. Place trade with Entry, SL below pullback low, TP at next resistance</p>
        </div>
        <div className="mt-3 rounded-lg border border-green-200 bg-white p-3 font-mono text-sm text-green-900 sm:text-base">
          Pair ___ | Entry ___ | SL ___ | TP ___ | R:R ___ | Result ___
        </div>
      </div>

      {/* TRADE 2: BREAKOUT TRADE — amber border */}
      <div className="mb-4 rounded-xl border-2 border-amber-400 bg-amber-50/50 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <ArrowRight className="h-5 w-5 text-amber-600" />
          <h4 className="text-sm font-bold text-amber-900 sm:text-base">TRADE 2: BREAKOUT TRADE</h4>
          <span className="rounded-full bg-amber-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase">Day 2 + Day 3 + Day 4</span>
        </div>
        <div className="space-y-2 text-sm text-amber-800 sm:text-base">
          <p>1. Find pair pressing against resistance (3+ touches)</p>
          <p>2. Wait for breakout candle CLOSE above resistance with above-average volume</p>
          <p>3. Enter on breakout or retest</p>
          <p>4. SL below breakout level, TP at next resistance</p>
        </div>
        <div className="mt-3 rounded-lg border border-amber-200 bg-white p-3 font-mono text-sm text-amber-900 sm:text-base">
          Pair ___ | Entry ___ | SL ___ | TP ___ | R:R ___ | Result ___
        </div>
      </div>

      {/* TRADE 3: RANGE TRADE — slate border */}
      <div className="mb-6 rounded-xl border-2 border-slate-400 bg-slate-50/50 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2">
          <Minus className="h-5 w-5 text-slate-600" />
          <h4 className="text-sm font-bold text-slate-900 sm:text-base">TRADE 3: RANGE TRADE</h4>
          <span className="rounded-full bg-slate-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase">Day 2 + Day 3</span>
        </div>
        <div className="space-y-2 text-sm text-slate-700 sm:text-base">
          <p>1. Find pair in clear range</p>
          <p>2. Enter at support with bullish confirmation</p>
          <p>3. SL just below support, TP at resistance</p>
        </div>
        <div className="mt-3 rounded-lg border border-slate-200 bg-white p-3 font-mono text-sm text-slate-900 sm:text-base">
          Pair ___ | Entry ___ | SL ___ | TP ___ | R:R ___ | Result ___
        </div>
      </div>

      {/* AFTER ALL 3 TRADES — checklist card */}
      <div className="rounded-xl border-2 border-slate-300 bg-white p-4 sm:p-5">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">
          📋 AFTER ALL 3 TRADES
        </h4>
        <div className="space-y-1">
          <ChecklistItem>Calculate win rate: ___/3</ChecklistItem>
          <ChecklistItem>Calculate total P&amp;L in R: ___R</ChecklistItem>
          <ChecklistItem>Did I follow my plan? Y/N</ChecklistItem>
          <ChecklistItem>Did I follow risk management rules? Y/N</ChecklistItem>
          <ChecklistItem>What was the hardest part? ___</ChecklistItem>
        </div>
      </div>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN EXPORT: Day5LateAfternoonBlock
   ═══════════════════════════════════════════════════════════════════ */

export function Day5LateAfternoonBlock() {
  return (
    <section id="d5-late-afternoon" aria-label="Day 5 Late Afternoon Block">
      <SectionDivider title="LATE AFTERNOON BLOCK — HOURS 5–7: TRADING JOURNAL & TRADE MANAGEMENT" icon={<BookOpen />} />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
        <TopicJournalWhy />
        <TopicJournalTemplate />
        <TopicWeeklyReview />
        <TopicTradeManagement />
        <TopicPaperTrading />
      </div>
    </section>
  )
}
