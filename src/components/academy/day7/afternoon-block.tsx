'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  BookOpen,
  TrendingUp,
  TrendingDown,
  Activity,
  BarChart3,
  Target,
  ShieldAlert,
  Zap,
  ArrowRight,
  Layers,
  CircleDot,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'

/* ─────────────────────────────────────────────────────────── */
/*  Rule Row helper                                            */
/* ─────────────────────────────────────────────────────────── */
function RuleRow({ number, children, color = '#8b5cf6' }: { number: number; children: React.ReactNode; color?: string }) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
      <span
        className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {number}
      </span>
      <div className="text-sm leading-relaxed text-slate-700 sm:text-base">{children}</div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                               */
/* ─────────────────────────────────────────────────────────── */
export function Day7AfternoonBlock() {
  return (
    <section id="d7-afternoon" aria-labelledby="d7-afternoon-heading">
      <SectionDivider
        icon={<Sun />}
        title="AFTERNOON BLOCK — 1:00–2:30: BUILDING & TESTING FIRST STRATEGY — MODULE 4"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 7: Strategy Template — EMA + RSI + Volume Strategy
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-ema-rsi-volume"
          title="Strategy Template — EMA + RSI + Volume Strategy"
          icon={<Layers className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              This is your first complete strategy template combining three key indicators. It&apos;s designed
              for the <strong className="text-purple-800">4H timeframe on BTC/USDT</strong> and follows the
              confluence principle — all conditions must align.
            </p>

            {/* Long Entry Rules */}
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
              <h5 className="mb-3 flex items-center gap-2 text-sm font-bold text-green-800">
                <TrendingUp className="h-4 w-4" /> Long Entry Rules (ALL must be true)
              </h5>
              <div className="space-y-2">
                <RuleRow number={1} color="#16a34a">
                  <strong>EMA 20 is above EMA 50</strong> on the 4H chart (short-term trend is bullish)
                </RuleRow>
                <RuleRow number={2} color="#16a34a">
                  <strong>Price pulls back to EMA 20</strong> or the zone between EMA 20 and EMA 50 (dynamic support)
                </RuleRow>
                <RuleRow number={3} color="#16a34a">
                  <strong>RSI(14) is between 40–60</strong> and bouncing upward (not overbought, momentum returning)
                </RuleRow>
                <RuleRow number={4} color="#16a34a">
                  <strong>Volume is increasing</strong> on the bounce candle (participation confirms the move)
                </RuleRow>
                <RuleRow number={5} color="#16a34a">
                  <strong>Price is above EMA 200</strong> on the Daily (macro trend supports long bias)
                </RuleRow>
              </div>
            </div>

            {/* Short Entry Rules */}
            <div className="rounded-lg border border-red-200 bg-red-50/50 p-4">
              <h5 className="mb-3 flex items-center gap-2 text-sm font-bold text-red-800">
                <TrendingDown className="h-4 w-4" /> Short Entry Rules (ALL must be true)
              </h5>
              <div className="space-y-2">
                <RuleRow number={1} color="#dc2626">
                  <strong>EMA 20 is below EMA 50</strong> on the 4H chart (short-term trend is bearish)
                </RuleRow>
                <RuleRow number={2} color="#dc2626">
                  <strong>Price pulls back to EMA 20</strong> or the zone between EMA 20 and EMA 50 (dynamic resistance)
                </RuleRow>
                <RuleRow number={3} color="#dc2626">
                  <strong>RSI(14) is between 40–60</strong> and turning downward (not oversold, momentum returning)
                </RuleRow>
                <RuleRow number={4} color="#dc2626">
                  <strong>Volume is increasing</strong> on the rejection candle (participation confirms the move)
                </RuleRow>
                <RuleRow number={5} color="#dc2626">
                  <strong>Price is below EMA 200</strong> on the Daily (macro trend supports short bias)
                </RuleRow>
              </div>
            </div>

            {/* Exit Rules */}
            <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4">
              <h5 className="mb-3 flex items-center gap-2 text-sm font-bold text-amber-800">
                <Target className="h-4 w-4" /> Exit Rules
              </h5>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded bg-white p-3 border border-amber-200">
                  <h6 className="text-xs font-bold uppercase text-amber-700 mb-1">Stop Loss</h6>
                  <p className="text-sm text-slate-700">Below EMA 50 (long) / Above EMA 50 (short) or swing low/high, whichever is wider. Minimum 1.5× ATR.</p>
                </div>
                <div className="rounded bg-white p-3 border border-amber-200">
                  <h6 className="text-xs font-bold uppercase text-amber-700 mb-1">Take Profit</h6>
                  <p className="text-sm text-slate-700">TP1 at 1R (close 1/3), TP2 at 2R (close 1/3), TP3 at 3R+ (trail remaining 1/3 with EMA 20 cross as exit)</p>
                </div>
              </div>
            </div>

            {/* Filter Rules */}
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h5 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-800">
                <ShieldAlert className="h-4 w-4" /> Filter Rules — SKIP if any condition is true
              </h5>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-slate-700">
                  <XIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                  <span>RSI is above 70 (long) or below 30 (short) — overextended</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-700">
                  <XIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                  <span>Major news event within 24 hours (Fed, CPI, etc.)</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-700">
                  <XIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                  <span>EMAs 20/50 are tangled (less than 0.5% apart) — no clear trend</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-700">
                  <XIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
                  <span>Spread/wicks are unusually wide — low liquidity or manipulation zone</span>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              This strategy works best in trending markets. When EMAs are tangled (range), sit on your hands.
              The filter rules are as important as the entry rules — they protect you from bad trades.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 8: Strategy Template — Bollinger Band Squeeze Breakout
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-bb-squeeze"
          title="Strategy Template — Bollinger Band Squeeze Breakout"
          icon={<Activity className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The Bollinger Band Squeeze is one of the most reliable breakout setups. When volatility contracts
              (bands squeeze), a significant move usually follows. This strategy captures that move.
            </p>

            <div className="space-y-3">
              <h5 className="text-sm font-bold text-purple-800">Setup Identification (3 Steps)</h5>
              <RuleRow number={1} color="#8b5cf6">
                <strong>BB Width</strong> (BBW indicator) drops to its lowest level in 20+ periods — this confirms the squeeze
              </RuleRow>
              <RuleRow number={2} color="#8b5cf6">
                <strong>Price compresses</strong> between the upper and lower bands, often forming a triangle or flag pattern
              </RuleRow>
              <RuleRow number={3} color="#8b5cf6">
                <strong>Volume declines</strong> during the squeeze — both buyers and sellers are waiting for a catalyst
              </RuleRow>
            </div>

            <div className="space-y-3">
              <h5 className="text-sm font-bold text-purple-800">Entry Rules</h5>
              <RuleRow number={1} color="#7c3aed">
                <strong>Wait for breakout</strong> — a candle closes above the upper BB (long) or below the lower BB (short)
              </RuleRow>
              <RuleRow number={2} color="#7c3aed">
                <strong>Volume must surge</strong> on the breakout candle (at least 1.5× average volume)
              </RuleRow>
              <RuleRow number={3} color="#7c3aed">
                <strong>RSI confirms direction</strong> — RSI above 50 for long, below 50 for short
              </RuleRow>
              <RuleRow number={4} color="#7c3aed">
                <strong>Enter on the close</strong> of the breakout candle, or on a retest of the broken band
              </RuleRow>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-red-200 bg-red-50/50 p-3 text-center">
                <h6 className="text-xs font-bold uppercase text-red-700 mb-1">Stop Loss</h6>
                <p className="text-sm font-semibold text-red-800">Middle BB (SMA 20)</p>
                <p className="text-xs text-slate-500">If price recrosses the middle, the breakout failed</p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50/50 p-3 text-center">
                <h6 className="text-xs font-bold uppercase text-green-700 mb-1">TP1</h6>
                <p className="text-sm font-semibold text-green-800">Opposite BB</p>
                <p className="text-xs text-slate-500">Close 1/3 at the other band</p>
              </div>
              <div className="rounded-lg border border-purple-200 bg-purple-50/50 p-3 text-center">
                <h6 className="text-xs font-bold uppercase text-purple-700 mb-1">TP2</h6>
                <p className="text-sm font-semibold text-purple-800">Measured Move</p>
                <p className="text-xs text-slate-500">Close 1/3 at squeeze height projected out</p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <h5 className="mb-2 text-sm font-bold text-slate-800">BTC Example</h5>
              <ComparisonTable
                headers={['Parameter', 'Value', 'Calculation']}
                rows={[
                  ['Squeeze range', '$64,000–$66,000', 'Upper BB to Lower BB = $2,000'],
                  ['Breakout', '$66,200 (long)', 'Candle closes above upper BB with volume'],
                  ['Stop Loss', '$65,000', 'Middle BB (SMA 20)'],
                  ['TP1', '$68,000', 'Opposite band extension (close 1/3)'],
                  ['TP2', '$70,000', 'Measured move: $66,000 + $2,000 = $68,000 × 1.1 (close 1/3)'],
                  ['R:R', '1:1 at TP1, 1:2+ at TP2', 'Risk $1,200, Reward $1,800–$3,800'],
                ]}
              />
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 9: Strategy Template — On-Chain Confirmed Swing Trade
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d7-onchain-swing"
          title="Strategy Template — On-Chain Confirmed Swing Trade"
          icon={<CircleDot className="h-5 w-5" />}
          variant="success"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              This advanced strategy combines technical analysis with on-chain data and sentiment for
              <strong className="text-purple-800"> high-conviction swing trades</strong> on the Daily/4H timeframe.
              It&apos;s the most demanding template — all three layers must confirm.
            </p>

            {/* Long Setup */}
            <div className="rounded-lg border border-green-200 bg-green-50/50 p-4">
              <h5 className="mb-3 flex items-center gap-2 text-sm font-bold text-green-800">
                <TrendingUp className="h-4 w-4" /> Long Setup (All 5 conditions must be true)
              </h5>
              <div className="space-y-2">
                <div className="flex items-start gap-3 rounded border border-green-200 bg-white p-2.5">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">T</span>
                  <div>
                    <span className="text-xs font-bold text-green-700">Technical:</span>
                    <span className="text-sm text-slate-700"> Price at key support on Daily, RSI oversold or bouncing from 30–40, bullish divergence on 4H</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded border border-green-200 bg-white p-2.5">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">T</span>
                  <div>
                    <span className="text-xs font-bold text-green-700">Technical:</span>
                    <span className="text-sm text-slate-700"> EMA 20/50 trending up on 4H, price pulling back to EMA zone</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded border border-purple-200 bg-white p-2.5">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">O</span>
                  <div>
                    <span className="text-xs font-bold text-purple-700">On-Chain:</span>
                    <span className="text-sm text-slate-700"> Exchange outflows increasing (coins leaving exchanges), MVRV below 1.2 (undervalued zone), whale accumulation detected</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded border border-purple-200 bg-white p-2.5">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">O</span>
                  <div>
                    <span className="text-xs font-bold text-purple-700">On-Chain:</span>
                    <span className="text-sm text-slate-700"> NUPL in capitulation/fear zone (below 0.25), SOPR resetting below 1.0</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded border border-amber-200 bg-white p-2.5">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">S</span>
                  <div>
                    <span className="text-xs font-bold text-amber-700">Sentiment:</span>
                    <span className="text-sm text-slate-700"> Fear &amp; Greed Index below 30 (fear/extreme fear), funding rate negative (shorts paying longs)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Short Setup */}
            <div className="rounded-lg border border-red-200 bg-red-50/50 p-4">
              <h5 className="mb-3 flex items-center gap-2 text-sm font-bold text-red-800">
                <TrendingDown className="h-4 w-4" /> Short Setup (All 5 conditions must be true)
              </h5>
              <div className="space-y-2">
                <div className="flex items-start gap-3 rounded border border-red-200 bg-white p-2.5">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">T</span>
                  <div>
                    <span className="text-xs font-bold text-red-700">Technical:</span>
                    <span className="text-sm text-slate-700"> Price at key resistance on Daily, RSI overbought or rejecting from 60–70, bearish divergence on 4H</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded border border-red-200 bg-white p-2.5">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">T</span>
                  <div>
                    <span className="text-xs font-bold text-red-700">Technical:</span>
                    <span className="text-sm text-slate-700"> EMA 20/50 trending down on 4H, price pulling back to EMA zone</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded border border-purple-200 bg-white p-2.5">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">O</span>
                  <div>
                    <span className="text-xs font-bold text-purple-700">On-Chain:</span>
                    <span className="text-sm text-slate-700"> Exchange inflows increasing (coins moving to exchanges), MVRV above 3.5 (overvalued), whale distribution detected</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded border border-purple-200 bg-white p-2.5">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">O</span>
                  <div>
                    <span className="text-xs font-bold text-purple-700">On-Chain:</span>
                    <span className="text-sm text-slate-700"> NUPL in euphoria/greed zone (above 0.75), SOPR consistently above 1.1</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded border border-amber-200 bg-white p-2.5">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">S</span>
                  <div>
                    <span className="text-xs font-bold text-amber-700">Sentiment:</span>
                    <span className="text-sm text-slate-700"> Fear &amp; Greed Index above 75 (greed/extreme greed), funding rate highly positive (longs paying shorts)</span>
                  </div>
                </div>
              </div>
            </div>

            <AnalogyBox title="On-Chain Confirmed Trades Are Like a Triple-Locked Door">
              Each layer — technical, on-chain, sentiment — is a lock. One lock alone can be picked (a fake breakout,
              a single on-chain metric, a sentiment spike). But when all three locks are engaged and pointing the same
              direction, the probability of a successful trade increases dramatically. This is confluence at its finest.
            </AnalogyBox>

            <KeyTakeaway>
              These three strategy templates give you a starting framework. In practice, you&apos;ll adapt them
              based on your backtesting results. The key is having clear rules — then testing them rigorously
              before ever risking real capital.
            </KeyTakeaway>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}

/* ─── Small X icon for filter rules ─── */
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
