'use client'

import React from 'react'
import {
  CloudMoon,
  Brain,
  Flame,
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  BookOpen,
  XCircle,
  Zap,
  ShieldAlert,
  Eye,
  Pencil,
  TrendingUp,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { ScamCard } from '@/components/academy/scam-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { DriverCard } from '@/components/academy/driver-card'
import { TradingViewLab } from '@/components/academy/tradingview-lab'

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day4LateAfternoonBlock() {
  return (
    <section id="d4-late-afternoon" aria-labelledby="d4-late-afternoon-heading">
      <SectionDivider
        icon={<CloudMoon />}
        title="LATE AFTERNOON BLOCK — HOURS 6-7: TRADING PSYCHOLOGY & EMOTIONAL RISK"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 1: FOMO & Revenge Trading                         */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-fomo-revenge"
          title="FOMO & Revenge Trading — The Two Account Killers"
          icon={<Flame className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The biggest risk to your account isn&apos;t the market — it&apos;s <strong className="text-red-700">you</strong>.
              Emotional trading destroys more accounts than bad analysis ever will. The two most dangerous emotional
              patterns are <strong>FOMO</strong> (Fear of Missing Out) and <strong>Revenge Trading</strong>, and they
              often work together in a devastating cycle.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* FOMO Card */}
              <ScamCard
                title="FOMO — Fear of Missing Out"
                description="You see a coin pumping 50% and jump in without analysis. The price immediately reverses because you bought at the top — the exact moment everyone else was taking profits. FOMO trades have no stop loss, no plan, and no logic. They're pure emotion."
                prevention="Before entering any trade, ask: 'Did I analyze this, or am I reacting to a price move?' If the answer is the latter, walk away. The market has 1,000+ opportunities per week — missing one means nothing."
                icon={<Zap className="h-5 w-5" />}
              />

              {/* Revenge Trading Card */}
              <ScamCard
                title="Revenge Trading"
                description="You just lost $200 on a trade. You're angry and immediately open a new, larger position to 'make it back.' You increase your leverage, widen your stop (or remove it), and double down. This second trade has even worse odds because it's driven by anger, not analysis."
                prevention="After a loss, close the chart. Take a minimum 1-hour break. No exceptions. The market will still be there when you return. Losses are the cost of doing business — they're not personal attacks that need to be avenged."
                icon={<Flame className="h-5 w-5" />}
              />
            </div>

            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                <div>
                  <p className="text-sm font-bold text-red-900 sm:text-base">The FOMO → Revenge Cycle</p>
                  <p className="mt-1 text-sm text-red-800">
                    FOMO leads to a bad entry → Loss → Anger → Revenge trade → Bigger loss → More anger → Bigger
                    revenge trade → Account destroyed. This cycle has killed more accounts than any market crash.
                    The antidote is always the same: <strong>stop trading after a loss</strong>.
                  </p>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              FOMO and revenge trading are the two most expensive emotions in trading. The market doesn&apos;t
              care about your feelings — it only cares about your position size and your stop loss. When emotions
              spike, positions should shrink.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 2: The 4 Emotional Trading Traps                   */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-emotional-traps"
          title="The 4 Emotional Trading Traps"
          icon={<Brain className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Beyond FOMO and revenge, there are four psychological traps that catch every trader — especially
              beginners. Recognizing them is the first step to avoiding them.
            </p>

            <DriverCard number={1} title="FOMO (Fear of Missing Out)">
              <div className="space-y-2">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  <strong>What it looks like:</strong> Buying a coin because it&apos;s pumping, not because you analyzed it.
                  Checking your phone every 5 minutes. Feeling physical anxiety when not in a trade.
                </p>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  <strong>The fix:</strong> Create a watchlist and wait for YOUR setups. If a coin isn&apos;t on your
                  watchlist or doesn&apos;t meet your criteria, you don&apos;t trade it. Period. On MEXC, use price
                  alerts instead of constantly checking charts.
                </p>
              </div>
            </DriverCard>

            <DriverCard number={2} title="Revenge Trading">
              <div className="space-y-2">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  <strong>What it looks like:</strong> Immediately opening a new (usually larger) position after a loss.
                  Increasing leverage after a loss. Removing stop losses to &ldquo;let it breathe.&rdquo; Thinking
                  &ldquo;I need to make that back right now.&rdquo;
                </p>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  <strong>The fix:</strong> Implement a mandatory cool-down period. After any loss, you must wait at
                  least 1 hour before trading again. After 2 consecutive losses, you&apos;re done for the day. No
                  exceptions. Write this rule down and stick it to your monitor.
                </p>
              </div>
            </DriverCard>

            <DriverCard number={3} title="Overconfidence">
              <div className="space-y-2">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  <strong>What it looks like:</strong> After 3–4 winning trades, you feel invincible. You increase
                  position sizes, add leverage, and start &ldquo;trusting your gut.&rdquo; You skip your analysis
                  because &ldquo;you know what you&apos;re doing.&rdquo;
                </p>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  <strong>The fix:</strong> Never change your risk parameters based on recent results. If you risk 1%
                  per trade, you risk 1% whether you&apos;re on a 5-win streak or a 5-loss streak. Consistency
                  in position sizing is the hallmark of a professional.
                </p>
              </div>
            </DriverCard>

            <DriverCard number={4} title="Analysis Paralysis">
              <div className="space-y-2">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  <strong>What it looks like:</strong> You see a perfect setup but can&apos;t pull the trigger. You
                  keep waiting for &ldquo;more confirmation.&rdquo; You analyze 15 indicators and find reasons NOT to
                  trade. The opportunity passes while you&apos;re still thinking.
                </p>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                  <strong>The fix:</strong> Use a pre-trade checklist (see below). If all criteria are met, you execute.
                  No second-guessing. The checklist removes emotion from the decision — either the setup meets your
                  rules or it doesn&apos;t.
                </p>
              </div>
            </DriverCard>

            <ComparisonTable
              headers={['Trap', 'Trigger', 'Symptom', 'Consequence', 'Recovery']}
              rows={[
                ['FOMO', 'Missing a pump', 'Impulsive buying', 'Buying the top', '1-hour cool-down'],
                ['Revenge', 'Taking a loss', 'Anger trading', 'Doubling losses', 'Stop for the day'],
                ['Overconfidence', 'Win streak', 'Bigger positions', 'Blow-up loss', 'Reset to base size'],
                ['Paralysis', 'Fear of loss', 'No execution', 'Missed profits', 'Use checklist'],
              ]}
            />
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 3: Pre-Trade Checklist                             */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-pretrade-checklist"
          title="Building Your Pre-Trade Checklist"
          icon={<ClipboardCheck className="h-5 w-5" />}
          variant="success"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A <strong className="text-slate-900">pre-trade checklist</strong> is a set of criteria that MUST all be
              met before you enter any trade. It removes emotion from the decision and ensures you only take
              high-quality setups. If even ONE item fails, you don&apos;t trade. No exceptions.
            </p>

            <div className="rounded-xl border-2 border-green-300 bg-green-50/40 p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-green-600" />
                <h4 className="text-base font-bold text-green-800 sm:text-lg">
                  THE PRE-TRADE CHECKLIST
                </h4>
              </div>
              <div className="space-y-2">
                <ChecklistItem>
                  <span>
                    <strong>1. Direction:</strong> Is the trend on the 4H and Daily chart aligned with my trade direction?
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>2. Setup:</strong> Is there a clear technical reason to enter (support/resistance, pattern, breakout)?
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>3. RRR:</strong> Is the risk-reward ratio at least 1:2? (If not, skip the trade)
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>4. Position Size:</strong> Have I calculated my position size using the 1% rule?
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>5. Stop Loss:</strong> Is my stop loss placed at a logical level (not a random %)?
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>6. Take Profit:</strong> Do I have a clear take-profit level based on structure (not a random target)?
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>7. Emotional State:</strong> Am I calm and following my plan? (Not FOMO, not revenge, not overconfident)
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>8. Market Conditions:</strong> Is the market in a tradable state? (Not during extreme news events or manipulation)
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>9. Exposure Check:</strong> Am I already overexposed to this sector/coin? (Max 2 correlated positions)
                  </span>
                </ChecklistItem>
                <ChecklistItem>
                  <span>
                    <strong>10. Risk Capital Only:</strong> Am I trading with money I can afford to lose? (Never trade rent money)
                  </span>
                </ChecklistItem>
              </div>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50/60 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <p className="text-sm font-semibold leading-relaxed text-green-900 sm:text-base">
                  Rule: 10/10 items must pass. If even ONE fails, you skip the trade. No &ldquo;I&apos;ll make
                  an exception just this once.&rdquo; The checklist is your guardrail against emotional decisions.
                </p>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 4: The Trading Journal                             */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-trading-journal"
          title="The Trading Journal — Your Most Valuable Tool"
          icon={<BookOpen className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A <strong className="text-slate-900">trading journal</strong> is a detailed record of every trade you
              take. It&apos;s the single most valuable tool for improving as a trader — more valuable than any
              indicator, course, or signal group. Without a journal, you&apos;re just guessing. With one, you&apos;re
              running a data-driven feedback loop.
            </p>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The journal reveals your patterns: Which setups work best for you? What time of day are you most
              profitable? Which coins give you the best win rate? What emotional state leads to your worst trades?
              You can&apos;t fix what you don&apos;t measure.
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-orange-700 sm:text-base">
                What to Track in Every Trade
              </h4>
              <ComparisonTable
                headers={['Category', 'Data Point', 'Why It Matters']}
                rows={[
                  ['Trade Info', 'Date, time, coin, direction (long/short)', 'Identify patterns by time and asset'],
                  ['Entry', 'Entry price, reason for entry, setup type', 'Know which setups work best'],
                  ['Risk', 'Position size, stop loss price, risk %, RRR', 'Track risk management discipline'],
                  ['Exit', 'Exit price, reason for exit, actual P&L', 'Measure execution quality'],
                  ['Market', 'Overall market condition, BTC trend', 'Context for the trade'],
                  ['Emotions', 'Emotional state before/during/after', 'Catch emotional trading patterns'],
                  ['Screenshots', 'Chart at entry, chart at exit', 'Visual review of setups'],
                  ['Grade', 'A–F grade on trade execution', 'Self-assessment beyond P&L'],
                ]}
              />
            </div>

            <div className="rounded-xl border border-orange-200 bg-orange-50/50 p-4 sm:p-5">
              <h4 className="mb-3 text-sm font-bold text-orange-800 sm:text-base">
                Sample Journal Entry Template
              </h4>
              <div className="space-y-2 rounded-lg bg-white border border-slate-200 p-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div><span className="text-slate-500">Date:</span> <strong>2025-01-15</strong></div>
                  <div><span className="text-slate-500">Time:</span> <strong>14:30 UTC</strong></div>
                  <div><span className="text-slate-500">Coin:</span> <strong>BTC/USDT</strong></div>
                  <div><span className="text-slate-500">Direction:</span> <strong className="text-green-600">Long</strong></div>
                  <div><span className="text-slate-500">Entry:</span> <strong>$42,150</strong></div>
                  <div><span className="text-slate-500">Stop Loss:</span> <strong>$41,400 (-1.78%)</strong></div>
                  <div><span className="text-slate-500">Take Profit:</span> <strong>$43,650 (+3.55%)</strong></div>
                  <div><span className="text-slate-500">RRR:</span> <strong className="text-green-600">1:2</strong></div>
                  <div><span className="text-slate-500">Position Size:</span> <strong>$1,200</strong></div>
                  <div><span className="text-slate-500">Risk:</span> <strong>$90 (0.9% of account)</strong></div>
                </div>
                <div className="border-t border-slate-100 pt-2 mt-2 text-sm">
                  <div><span className="text-slate-500">Setup:</span> Support bounce at 200 EMA on 4H chart</div>
                  <div><span className="text-slate-500">Emotional State:</span> Calm, followed plan</div>
                  <div><span className="text-slate-500">Market Context:</span> BTC in uptrend, altcoins mixed</div>
                  <div><span className="text-slate-500">Exit Reason:</span> Hit TP at $43,650</div>
                  <div><span className="text-slate-500">P&L:</span> <strong className="text-green-600">+$90 (+7.5%)</strong></div>
                  <div><span className="text-slate-500">Grade:</span> <strong>A</strong> — Followed plan perfectly</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-4 w-4 text-amber-600" />
                  <h5 className="text-sm font-bold text-slate-900">Weekly Review</h5>
                </div>
                <p className="text-sm text-slate-600">
                  Every Sunday, review all trades from the week. Calculate your win rate, average RRR, biggest
                  loss, and emotional triggers. Look for patterns — what works and what doesn&apos;t.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Pencil className="h-4 w-4 text-amber-600" />
                  <h5 className="text-sm font-bold text-slate-900">Monthly Review</h5>
                </div>
                <p className="text-sm text-slate-600">
                  Every month, calculate your P&L, win rate, risk-adjusted return, and emotional pattern frequency.
                  Adjust your strategy based on data — not feelings. This is how you evolve as a trader.
                </p>
              </div>
            </div>

            <KeyTakeaway>
              The trading journal is your mirror. It shows you the truth about your trading — the good, the bad,
              and the ugly. Without it, you&apos;re flying blind. With it, every trade becomes a lesson that
              improves your next one. Start journaling from your very first trade on MEXC.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TRADINGVIEW LAB: Risk Level Identification              */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d4-tradingview-risk-lab"
          title="TradingView Lab: Risk Level Identification"
          icon={<TrendingUp />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Use the TradingView simulator below to practice identifying entry and exit points with
            risk management in mind. This lab focuses on the core risk management skills: placing
            stop losses, calculating position sizes, and identifying risk/reward ratios.
          </p>

          <div className="mb-4 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="mb-2 text-sm font-bold text-green-800 sm:text-base">Risk Management Practice Instructions</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Draw a Horizontal Line at a key support level — this is where you would place your stop loss for a long position
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Use the Fibonacci tool to measure potential take-profit levels — the 1.618 and 2.618 extensions are common targets
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Enable EMA 20 and EMA 50 — identify where price is relative to moving averages (above both = lower risk long, below both = higher risk)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Turn on RSI — if RSI is above 70, the risk of entering a long is HIGHER. If RSI is below 30, the risk of entering a short is HIGHER
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Calculate position size: If your account is $10,000 and you risk 1% ($100), measure the distance from entry to stop loss in dollars. Position size = $100 / risk per unit
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Check risk/reward ratio: Measure distance from entry to stop loss (risk) vs. entry to take profit (reward). Minimum 1:2 required
              </li>
            </ul>
          </div>

          <TradingViewLab />

          <KeyTakeaway>
            Risk management is not optional — it is the foundation of every trade. Before you ever press
            the buy or sell button, you must know: your entry, your stop loss, your take profit, your position
            size, and your risk/reward ratio. If you can&apos;t answer all five, you&apos;re not trading — you&apos;re gambling.
          </KeyTakeaway>
        </TopicCard>
      </div>
    </section>
  )
}
