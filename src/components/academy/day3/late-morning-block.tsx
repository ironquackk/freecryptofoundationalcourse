'use client'

import React from 'react'
import {
  TrendingUp,
  TrendingDown,
  Eye,
  Target,
  AlertTriangle,
  Zap,
  FlaskConical,
  CheckCircle2,
  XCircle,
  ArrowUp,
  ArrowDown,
  Crosshair,
  Layers,
  BarChart3,
  Shield,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { TradingViewLab } from '@/components/academy/tradingview-lab'

/* ─────────────────────────────────────────────────────────── */
/*  PracticeLab Component                                      */
/* ─────────────────────────────────────────────────────────── */
interface PracticeLabProps {
  id: string
  title: string
  subtitle: string
  tasks: { number: number; prompt: string }[]
}

function PracticeLab({ id, title, subtitle, tasks }: PracticeLabProps) {
  return (
    <div
      id={id}
      className="rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/40 p-4 sm:p-6"
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
          <FlaskConical className="h-5 w-5 text-amber-600" />
        </div>
        <div>
          <h4 className="text-base font-bold text-slate-900 sm:text-lg">{title}</h4>
          <p className="text-xs text-amber-700 font-medium">{subtitle}</p>
        </div>
      </div>
      <ol className="space-y-3">
        {tasks.map((task) => (
          <li key={task.number} className="flex gap-3">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800">
              {task.number}
            </span>
            <p className="text-sm leading-relaxed text-slate-700">{task.prompt}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  Pattern Card Sub-Component                                  */
/* ─────────────────────────────────────────────────────────── */
interface PatternItemProps {
  name: string
  description: string
  psychology: string
  reliability: 'High' | 'Medium' | 'Low'
  color: 'green' | 'red'
}

function PatternItem({ name, description, psychology, reliability, color }: PatternItemProps) {
  const reliabilityColors = {
    High: 'bg-green-100 text-green-700',
    Medium: 'bg-amber-100 text-amber-700',
    Low: 'bg-red-100 text-red-700',
  }

  const borderColors = {
    green: 'border-green-200 bg-green-50/30',
    red: 'border-red-200 bg-red-50/30',
  }

  const nameColors = {
    green: 'text-green-800',
    red: 'text-red-800',
  }

  return (
    <div className={`rounded-lg border p-4 ${borderColors[color]}`}>
      <div className="mb-2 flex items-center justify-between">
        <h5 className={`text-sm font-bold sm:text-base ${nameColors[color]}`}>{name}</h5>
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${reliabilityColors[reliability]}`}>
          {reliability}
        </span>
      </div>
      <p className="mb-2 text-sm text-slate-700">{description}</p>
      <div className="rounded border border-slate-200 bg-white/60 p-2">
        <p className="text-xs text-slate-600">
          <span className="font-semibold">Psychology:</span> {psychology}
        </p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 1: 5 Bullish Reversal Patterns                        */
/* ─────────────────────────────────────────────────────────── */
function TopicBullishPatterns() {
  const bullishPatterns: PatternItemProps[] = [
    {
      name: 'Hammer',
      description: 'Small body at the top with a long lower wick (2x+ the body). Appears at the bottom of a downtrend. The long wick shows sellers pushed price down but buyers absorbed all the selling and pushed price back up.',
      psychology: 'Sellers tried to push price lower but failed — buyers absorbed all selling pressure. The rejection of lower prices signals potential reversal.',
      reliability: 'High',
      color: 'green',
    },
    {
      name: 'Bullish Engulfing',
      description: 'A large green candle that completely engulfs the previous small red candle. The green body opens below the red close and closes above the red open, showing buyers overwhelmed sellers.',
      psychology: 'Buyers completely overwhelmed the selling from the previous period. The size of the engulfing candle shows the strength of the new buying pressure.',
      reliability: 'High',
      color: 'green',
    },
    {
      name: 'Morning Star',
      description: 'A 3-candle pattern: (1) large red candle, (2) small-body candle (indecision), (3) large green candle. The indecision candle shows the battle, and the third candle resolves it in favor of buyers.',
      psychology: 'Strong selling → indecision → strong buying. The shift from seller dominance to buyer dominance is clear across three periods.',
      reliability: 'High',
      color: 'green',
    },
    {
      name: 'Piercing Line',
      description: 'A 2-candle pattern: (1) red candle, (2) green candle that opens below the red low but closes above the midpoint of the red body. Shows buyers counter-attacked past the halfway point.',
      psychology: 'Buyers pushed price up past the midpoint of the previous selling. This means they overcame more than half the selling pressure — a sign of strength.',
      reliability: 'Medium',
      color: 'green',
    },
    {
      name: 'Bullish Harami',
      description: 'A 2-candle pattern: (1) large red candle, (2) small green candle completely inside the red body. The small body shows indecision after strong selling — the trend may be losing momentum.',
      psychology: 'After strong selling, the small green body shows buyers are starting to appear. The selling momentum is fading, though not yet reversed. Confirmation needed.',
      reliability: 'Medium',
      color: 'green',
    },
  ]

  return (
    <TopicCard id="d3-bullish-patterns-lm" title="5 Bullish Reversal Patterns" icon={<TrendingUp />} variant="success">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        These 5 patterns appear at the <strong>bottom of downtrends</strong> and signal that buyers
        may be taking control. Each pattern tells a story about the battle between buyers and sellers.
      </p>

      <div className="space-y-4 mb-5">
        {bullishPatterns.map((pattern, i) => (
          <PatternItem key={i} {...pattern} />
        ))}
      </div>

      <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800">Critical Rule</p>
            <p className="mt-1 text-sm text-amber-900">
              These patterns are <strong>much more reliable</strong> when they appear at key support levels,
              with oversold RSI, and with volume spikes. A Hammer in the middle of a range with no
              support is far less reliable than a Hammer bouncing off major support.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        Bullish reversal patterns work best at <strong>support + oversold + volume</strong>. Without
        confluence, a single pattern is just a shape — not a signal.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 2: 5 Bearish Reversal Patterns                        */
/* ─────────────────────────────────────────────────────────── */
function TopicBearishPatterns() {
  const bearishPatterns: PatternItemProps[] = [
    {
      name: 'Shooting Star',
      description: 'Small body at the bottom with a long upper wick (2x+ the body). Appears at the top of an uptrend. The long wick shows buyers pushed price up but sellers absorbed all buying and pushed price back down.',
      psychology: 'Buyers tried to push price higher but failed — sellers absorbed all buying pressure. The rejection of higher prices signals potential reversal.',
      reliability: 'High',
      color: 'red',
    },
    {
      name: 'Bearish Engulfing',
      description: 'A large red candle that completely engulfs the previous small green candle. The red body opens above the green close and closes below the green open, showing sellers overwhelmed buyers.',
      psychology: 'Sellers completely overwhelmed the buying from the previous period. The size of the engulfing candle shows the strength of the new selling pressure.',
      reliability: 'High',
      color: 'red',
    },
    {
      name: 'Evening Star',
      description: 'A 3-candle pattern: (1) large green candle, (2) small-body candle (indecision), (3) large red candle. The indecision candle shows the battle, and the third candle resolves it in favor of sellers.',
      psychology: 'Strong buying → indecision → strong selling. The shift from buyer dominance to seller dominance is clear across three periods.',
      reliability: 'High',
      color: 'red',
    },
    {
      name: 'Dark Cloud Cover',
      description: 'A 2-candle pattern: (1) green candle, (2) red candle that opens above the green high but closes below the midpoint of the green body. Shows sellers counter-attacked past the halfway point.',
      psychology: 'Sellers pushed price down past the midpoint of the previous buying. This means they overcame more than half the buying pressure — a sign of bearish strength.',
      reliability: 'Medium',
      color: 'red',
    },
    {
      name: 'Bearish Harami',
      description: 'A 2-candle pattern: (1) large green candle, (2) small red candle completely inside the green body. The small body shows indecision after strong buying — the trend may be losing momentum.',
      psychology: 'After strong buying, the small red body shows sellers are starting to appear. The buying momentum is fading, though not yet reversed. Confirmation needed.',
      reliability: 'Medium',
      color: 'red',
    },
  ]

  return (
    <TopicCard id="d3-bearish-patterns-lm" title="5 Bearish Reversal Patterns" icon={<TrendingDown />} variant="warning">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        These 5 patterns appear at the <strong>top of uptrends</strong> and signal that sellers
        may be taking control. They are the mirror images of the bullish patterns.
      </p>

      <div className="space-y-4 mb-5">
        {bearishPatterns.map((pattern, i) => (
          <PatternItem key={i} {...pattern} />
        ))}
      </div>

      {/* Comparison Table */}
      <ComparisonTable
        headers={['Pattern', 'Bullish Version', 'Bearish Version']}
        rows={[
          ['Single Candle', 'Hammer (long lower wick)', 'Shooting Star (long upper wick)'],
          ['2-Candle Engulfing', 'Bullish Engulfing (green engulfs red)', 'Bearish Engulfing (red engulfs green)'],
          ['3-Candle Star', 'Morning Star (red → small → green)', 'Evening Star (green → small → red)'],
          ['2-Candle Counter', 'Piercing Line (closes above midpoint)', 'Dark Cloud Cover (closes below midpoint)'],
          ['2-Candle Inside', 'Bullish Harami (small green inside red)', 'Bearish Harami (small red inside green)'],
        ]}
      />

      <KeyTakeaway>
        Every bullish pattern has a bearish mirror. Learning them as pairs makes them easier to
        remember: Hammer ↔ Shooting Star, Bullish Engulfing ↔ Bearish Engulfing, Morning Star ↔ Evening Star.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  TOPIC 3: Pattern + Level = High Probability                 */
/* ─────────────────────────────────────────────────────────── */
function TopicPatternPlusLevel() {
  return (
    <TopicCard id="d3-pattern-level-confluence" title="Pattern + Level = High Probability" icon={<Crosshair />} variant="highlight">
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        A candlestick pattern alone is just a shape. But when that pattern appears at a{' '}
        <strong>key support or resistance level</strong>, with indicator confirmation, it becomes a
        <span className="font-semibold text-green-700"> high-probability trade setup</span>.
        This concept — called <strong>confluence</strong> — is the secret to consistent trading.
      </p>

      <AnalogyBox title="Confluence is Like a Lock and Key">
        A key alone does not open a door. A lock alone does not open a door. But when the right key
        fits the right lock, the door opens. Candlestick patterns are the key. Support/resistance
        levels are the lock. When they align, the trade &ldquo;opens.&rdquo;
      </AnalogyBox>

      {/* The Confluence Framework */}
      <div className="mt-5 mb-5">
        <h4 className="mb-3 text-sm font-bold text-slate-900 sm:text-base">The Confluence Framework — 4 Layers</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3 rounded-lg border-2 border-amber-300 bg-amber-50/60 p-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">1</div>
            <div>
              <p className="text-sm font-bold text-amber-800">LOCATION — Is price at a key level?</p>
              <p className="mt-1 text-sm text-slate-700">Support, resistance, EMA, order block, FVG. If price is in the middle of nowhere, skip. Location is the #1 filter.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border-2 border-green-300 bg-green-50/60 p-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">2</div>
            <div>
              <p className="text-sm font-bold text-green-800">PATTERN — Is there a reversal/continuation pattern?</p>
              <p className="mt-1 text-sm text-slate-700">Hammer at support, Engulfing at resistance, Morning Star at EMA bounce. The pattern confirms the level is holding or breaking.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border-2 border-blue-300 bg-blue-50/60 p-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-bold text-white">3</div>
            <div>
              <p className="text-sm font-bold text-blue-800">INDICATOR — Does the indicator confirm?</p>
              <p className="mt-1 text-sm text-slate-700">RSI oversold + hammer at support = stronger signal. MACD bearish cross + engulfing at resistance = stronger signal. Indicators provide the third confirmation layer.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border-2 border-purple-300 bg-purple-50/60 p-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm font-bold text-white">4</div>
            <div>
              <p className="text-sm font-bold text-purple-800">VOLUME — Is volume confirming the move?</p>
              <p className="mt-1 text-sm text-slate-700">High volume on the pattern candle = real conviction. Low volume = suspicious. Volume is the final truth teller.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <div className="space-y-3 mb-5">
        <h4 className="text-sm font-bold text-slate-900 sm:text-base">Real-World Examples</h4>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50/50 p-3">
            <p className="text-xs font-bold text-green-800 mb-1">HIGH PROBABILITY ✅</p>
            <p className="text-sm text-slate-700">
              Bullish Engulfing at $38K support + RSI oversold (28) + volume 2x average.
              <span className="font-semibold text-green-700"> 4 layers of confluence.</span>
            </p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50/50 p-3">
            <p className="text-xs font-bold text-red-800 mb-1">LOW PROBABILITY ❌</p>
            <p className="text-sm text-slate-700">
              Bullish Engulfing in the middle of a range + RSI neutral (52) + volume average.
              <span className="font-semibold text-red-700"> 1 layer only — skip.</span>
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        <strong>Pattern + Level = High Probability.</strong> A pattern without a level is just a shape.
        A level without a pattern is just a line. When both align, plus indicator and volume
        confirmation, you have a trade worth taking.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  MAIN EXPORT                                                       */
/* ═══════════════════════════════════════════════════════════════════ */

export function Day3LateMorningBlock() {
  return (
    <section id="d3-late-morning" aria-label="Late Morning Block - Hours 3-4">
      <SectionDivider title="LATE MORNING BLOCK — HOURS 3-4: CANDLESTICK PATTERNS DEEP DIVE" />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicBullishPatterns />

        <TopicBearishPatterns />

        <TopicPatternPlusLevel />

        {/* Practice Lab */}
        <PracticeLab
          id="d3-pattern-lab"
          title="Pattern Spotting on TradingView"
          subtitle="Use the TradingView simulator to practice identifying candlestick patterns"
          tasks={[
            { number: 1, prompt: 'On the TradingView chart below, identify any hammer or shooting star patterns. Look for small bodies with long wicks at swing highs or swing lows.' },
            { number: 2, prompt: 'Toggle on the EMA 20 and EMA 50 indicators. Find a candlestick pattern that appears right at an EMA level — this is the "Pattern + Level" confluence concept.' },
            { number: 3, prompt: 'Switch timeframes between 1H, 4H, and 1D. Notice how patterns on higher timeframes are more reliable. Which timeframe shows the clearest patterns?' },
            { number: 4, prompt: 'Write your observation: "The [pattern name] at [support/resistance/EMA] with [high/low] volume is a [high/low] probability setup because ___."' },
          ]}
        />

        <TradingViewLab />
      </div>
    </section>
  )
}
