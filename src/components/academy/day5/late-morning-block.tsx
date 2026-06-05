'use client'

import React from 'react'
import {
  Sun,
  ClipboardCheck,
  ArrowUpDown,
  Shield,
  Target,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Clock,
  ChevronRight,
  Settings,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { StepList } from '@/components/academy/step-list'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ComparisonTable } from '@/components/academy/comparison-table'

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day5LateMorningBlock() {
  return (
    <section id="d5-late-morning" aria-labelledby="d5-late-morning-heading">
      <SectionDivider
        icon={<Sun />}
        title="LATE MORNING BLOCK — HOURS 3-4: TRADE EXECUTION FRAMEWORK"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 1: The Pre-Trade Checklist                     */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-pre-trade-checklist"
          title="The Pre-Trade Checklist — Never Skip This"
          icon={<ClipboardCheck className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Before you click &ldquo;Buy&rdquo; or &ldquo;Sell,&rdquo; you must complete a <strong className="text-slate-900">confluence check</strong>. This is your pre-flight checklist — just like a pilot runs through instruments before takeoff, you run through your analysis before risking capital. <strong className="text-red-700">If you can&apos;t check every box, don&apos;t take the trade.</strong>
            </p>

            {/* The 7-Point Pre-Trade Checklist */}
            <div className="rounded-xl border-2 border-cyan-300 bg-cyan-50/40 p-4 sm:p-5">
              <h4 className="mb-4 text-base font-bold text-cyan-900 sm:text-lg flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5" />
                7-Point Pre-Trade Checklist
              </h4>

              <div className="space-y-3">
                {[
                  { num: 1, label: 'Trend Direction', detail: 'What is the trend on the 4H and 1D? Am I trading WITH the trend? (Never counter-trend as a beginner.)', color: 'bg-cyan-600' },
                  { num: 2, label: 'Key Level Identified', detail: 'Is price at a significant support/resistance level? Am I entering at a logical level or just guessing?', color: 'bg-teal-600' },
                  { num: 3, label: 'Candlestick Confirmation', detail: 'Is there a confirming candlestick pattern? (Hammer, engulfing, rejection, etc.) Never enter on an unconfirmed candle.', color: 'bg-cyan-700' },
                  { num: 4, label: 'Indicator Confluence', detail: 'Do at least 2 indicators confirm? (RSI oversold/overbought, MACD crossover, volume spike, Bollinger Band touch.)', color: 'bg-teal-700' },
                  { num: 5, label: 'Risk/Reward ≥ 1:2', detail: 'Is my potential profit at least 2x my potential loss? If not, this trade is not worth taking.', color: 'bg-amber-600' },
                  { num: 6, label: 'Position Size Calculated', detail: 'Have I calculated my position size based on 1-2% risk? (Day 4 knowledge!) Never enter without knowing your exact size.', color: 'bg-amber-700' },
                  { num: 7, label: 'Stop Loss & Take Profit Defined', detail: 'Do I know my exact SL and TP levels BEFORE entering? If the trade goes wrong, do I know exactly where I exit?', color: 'bg-red-600' },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
                    <div className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${item.color}`}>
                      {item.num}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.label}</p>
                      <p className="text-sm text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <AnalogyBox title="The Checklist Is Your Parachute">
              Skydivers check their gear before every jump — even if they checked it the last time. Why? Because the consequences of skipping a check are catastrophic. Your pre-trade checklist is the same. One skipped check can mean the difference between a manageable loss and a blown account.
            </AnalogyBox>

            <KeyTakeaway>
              If you can&apos;t check all 7 boxes, the trade is a NO. There will always be another setup. There won&apos;t always be another account.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 2: Entry Timing — Limit vs Market              */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-entry-timing"
          title="Entry Timing: Limit vs Market — When to Use Which"
          icon={<ArrowUpDown className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              One of the most common beginner mistakes is using market orders for everything. The order type you choose for entry directly impacts your profitability. Here&apos;s exactly when to use each.
            </p>

            <ComparisonTable
              headers={['Scenario', 'Order Type', 'Why', 'Example']}
              rows={[
                ['Price at key level, waiting for confirmation', 'Limit', 'You know your exact price. Be patient.', 'Buy limit at $65,000 support with hammer confirmation'],
                ['Breakout happening right now, fast move', 'Market', 'Speed matters. A few dollars of slippage is acceptable.', 'BTC breaking resistance on 4H with volume — enter NOW'],
                ['Pullback to moving average', 'Limit', 'You can set your price and wait.', 'Buy limit at 21 EMA on BTC/USDT'],
                ['Stop-loss triggered, need to exit immediately', 'Market', 'Emergency exit — don\'t quibble over price.', 'Trade went wrong — cut the loss immediately'],
                ['Entering at a zone (not exact price)', 'Limit', 'Set the limit at the edge of the zone.', 'Buy zone $64,800–$65,200, set limit at $65,000'],
                ['Low-liquidity altcoin', 'Limit ONLY', 'Market orders will get destroyed on low-liquidity pairs.', 'A small-cap token with $50K daily volume'],
              ]}
            />

            {/* Decision flowchart */}
            <div className="rounded-xl border border-cyan-200 bg-cyan-50/30 p-4 sm:p-5">
              <h4 className="mb-3 text-base font-bold text-slate-900 sm:text-lg">Quick Decision Framework</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-cyan-600" />
                  <p><strong>Is the market moving fast?</strong> → Yes → Market order (accept slippage for speed)</p>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-cyan-600" />
                  <p><strong>Is price at a key level and you can wait?</strong> → Yes → Limit order (control your price)</p>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-cyan-600" />
                  <p><strong>Is the pair low-liquidity?</strong> → Yes → Limit order ONLY (never market order)</p>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-cyan-600" />
                  <p><strong>Are you cutting a loss?</strong> → Yes → Market order (speed &gt; price)</p>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              90% of your entries should be limit orders. Market orders are for emergencies and breakouts. If you&apos;re using market orders more than 10% of the time, you&apos;re either too impatient or chasing moves.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 3: Setting Stop Loss on MEXC                    */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-stop-loss-mexc"
          title="Setting Stop Loss on MEXC — Step-by-Step"
          icon={<Shield className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A <strong className="text-red-700">stop loss is not optional</strong>. It is your seatbelt. You would never drive without one, and you should never trade without one. Here&apos;s exactly how to set it on MEXC.
            </p>

            {/* Step-by-step instructions */}
            <StepList
              steps={[
                {
                  number: 1,
                  title: 'Open the spot trading page',
                  description: 'Navigate to Trade → Spot on MEXC. Select your trading pair (e.g., BTC/USDT).',
                },
                {
                  number: 2,
                  title: 'Enter your position first',
                  description: 'Place your buy order (limit or market). Wait for it to fill completely. Check your fill price in the order history.',
                },
                {
                  number: 3,
                  title: 'Switch to Stop-Limit order type',
                  description: 'Below the chart, in the order entry panel, click the order type dropdown and select "Stop-Limit."',
                },
                {
                  number: 4,
                  title: 'Set the Stop price (trigger)',
                  description: 'This is the price that ACTIVATES your stop-loss. Set it just below your support level (for longs). Example: If support is at $65,000, set stop at $64,850 (below the level, not at it).',
                },
                {
                  number: 5,
                  title: 'Set the Limit price (maximum acceptable)',
                  description: 'This is the worst price you\'re willing to accept. Set it slightly below the stop price. Example: Stop at $64,850, limit at $64,800. The $50 gap ensures your order fills even if price moves fast.',
                },
                {
                  number: 6,
                  title: 'Enter the full position amount',
                  description: 'Make sure you\'re selling your ENTIRE position. Don\'t accidentally sell only half — check the amount field carefully.',
                },
                {
                  number: 7,
                  title: 'Click "Sell" and confirm',
                  description: 'Review the order preview. Confirm the stop price, limit price, and amount are correct. Click confirm. Your stop-loss is now active.',
                },
              ]}
            />

            {/* Critical warnings */}
            <div className="rounded-xl border-2 border-red-300 bg-red-50/50 p-4 sm:p-5">
              <h4 className="mb-3 text-base font-bold text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Critical Stop-Loss Mistakes to Avoid
              </h4>
              <div className="space-y-2">
                {[
                  'Don\'t set your stop AT the support level — set it BELOW. Support can be briefly pierced before bouncing (wicks).',
                  'Don\'t set your stop too tight — normal market noise will trigger it. Give your trade room to breathe (1-2 ATR below support).',
                  'Don\'t move your stop-loss DOWN when the trade goes against you. This is called "widening the stop" and it turns small losses into catastrophic ones.',
                  'Don\'t cancel your stop-loss because you "feel" the trade will reverse. Your feelings are not a trading strategy.',
                  'Always double-check that your stop-loss order shows as "Active" in your open orders after placing it.',
                ].map((mistake, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                    <p className="text-sm text-red-800">{mistake}</p>
                  </div>
                ))}
              </div>
            </div>

            <KeyTakeaway>
              Set your stop-loss BEFORE you enter the trade, or immediately after. Never, ever enter a trade without a stop-loss. If MEXC is down or your stop doesn&apos;t fill, that&apos;s what position sizing (1-2% risk) is for — it limits the damage even when stop-losses fail.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 4: Setting Take Profit on MEXC                  */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-take-profit-mexc"
          title="Setting Take Profit on MEXC — Step-by-Step"
          icon={<Target className="h-5 w-5" />}
          variant="success"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Setting a take-profit (TP) order <strong>before</strong> you enter ensures you don&apos;t get greedy and let a winning trade turn into a losing one. Here&apos;s how to do it on MEXC.
            </p>

            <StepList
              steps={[
                {
                  number: 1,
                  title: 'Determine your TP level',
                  description: 'Based on your analysis (resistance level, Fibonacci extension, R:R ratio). Example: Entry at $65,000, SL at $64,500 (risk $500), TP at $66,500 (reward $1,500) — a 1:3 R:R trade.',
                },
                {
                  number: 2,
                  title: 'Use a Limit Sell order',
                  description: 'On MEXC\'s spot trading page, select "Limit" order type. Set the price to your TP level. This is the price at which you want to sell.',
                },
                {
                  number: 3,
                  title: 'Enter the full position amount',
                  description: 'Sell your entire position at the TP level. Alternatively, you can sell half at TP1 and half at TP2 (scaling out).',
                },
                {
                  number: 4,
                  title: 'Place the order',
                  description: 'Click "Sell" and confirm. Your take-profit order sits in the order book, waiting for the price to reach it.',
                },
                {
                  number: 5,
                  title: 'Optional: Use OCO for auto-cleanup',
                  description: 'If MEXC supports OCO for your pair, set up an OCO order with your TP as the limit and your SL as the stop-limit. When one fills, the other cancels automatically.',
                },
              ]}
            />

            {/* Scaling out strategy */}
            <div className="rounded-xl border border-green-200 bg-green-50/50 p-4 sm:p-5">
              <h4 className="mb-3 text-base font-bold text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                The Scaling-Out Strategy
              </h4>
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base mb-3">
                Instead of selling your entire position at one target, consider <strong>scaling out</strong>:
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-800">1</span>
                  <p className="text-sm text-slate-700"><strong>Sell 50% at TP1</strong> (first target, e.g., 1:1.5 R:R) — locks in some profit, reduces emotional pressure.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-800">2</span>
                  <p className="text-sm text-slate-700"><strong>Move SL to breakeven</strong> on the remaining 50% — now you have a risk-free trade.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-200 text-xs font-bold text-green-800">3</span>
                  <p className="text-sm text-slate-700"><strong>Sell 50% at TP2</strong> (second target, e.g., 1:3 R:R) — let the rest run for maximum profit.</p>
                </div>
              </div>
            </div>

            <AnalogyBox title="Take-Profit Is Like a Flight Plan">
              A pilot files a flight plan before takeoff — they know where they&apos;re going. A take-profit order is your trade plan. You define your destination before you enter. Without it, you&apos;re just flying around hoping to land somewhere good.
            </AnalogyBox>

            <KeyTakeaway>
              Always set your TP <strong>before</strong> you enter the trade. If you wait until you&apos;re in profit to decide when to exit, greed and fear will make the decision for you — and it usually ends badly.
            </KeyTakeaway>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
