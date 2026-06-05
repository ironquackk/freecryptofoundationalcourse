'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  Flame,
  Wind,
  Brain,
  Clock,
  Eye,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Activity,
  Coffee,
  Moon,
  Sunrise,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ChecklistItem } from '@/components/academy/checklist-item'

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Tilt Progression Diagram                              */
/*  Downward spiral from Trigger to Full Tilt                  */
/* ─────────────────────────────────────────────────────────── */
function TiltProgressionDiagram() {
  const stages = [
    { label: 'Trigger Event', desc: 'Unexpected loss, missed trade, market manipulation', color: '#f59e0b', y: 40 },
    { label: 'Physical Response', desc: 'Heart rate ↑, sweating, tension, shallow breathing', color: '#f97316', y: 105 },
    { label: 'Cognitive Distortion', desc: '"I need to win it back" / "The market is against me"', color: '#ef4444', y: 170 },
    { label: 'Impulsive Action', desc: 'Revenge trade, increase size, remove stop loss', color: '#dc2626', y: 235 },
    { label: 'Worse Outcome', desc: 'Bigger loss, deeper hole, more emotional pain', color: '#be123c', y: 300 },
    { label: 'Full Tilt 🛑', desc: 'Complete loss of control, account destruction', color: '#7f1d1d', y: 365 },
  ]

  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 420 420"
        className="mx-auto w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Tilt Progression Diagram showing the downward spiral from trigger event to full tilt"
      >
        {/* Title */}
        <text x="210" y="22" textAnchor="middle" fill="#1e293b" fontSize="13" fontWeight="bold" letterSpacing="1">THE TILT PROGRESSION — DOWNWARD SPIRAL</text>

        {/* Connecting arrows */}
        {stages.map((stage, i) => {
          if (i === stages.length - 1) return null
          const nextStage = stages[i + 1]
          return (
            <React.Fragment key={`arrow-${i}`}>
              <line
                x1="210"
                y1={stage.y + 25}
                x2="210"
                y2={nextStage.y - 5}
                stroke={nextStage.color}
                strokeWidth="2"
                opacity="0.6"
              />
              <polygon
                points={`205,${nextStage.y - 8} 210,${nextStage.y - 2} 215,${nextStage.y - 8}`}
                fill={nextStage.color}
                opacity="0.7"
              />
            </React.Fragment>
          )
        })}

        {/* Stage boxes */}
        {stages.map((stage, i) => (
          <React.Fragment key={`stage-${i}`}>
            <rect
              x="40"
              y={stage.y - 8}
              width="340"
              height="50"
              rx="10"
              fill="white"
              stroke={stage.color}
              strokeWidth="2.5"
            />
            {/* Stage number */}
            <circle cx="65" cy={stage.y + 17} r="14" fill={stage.color} />
            <text x="65" y={stage.y + 21} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{i + 1}</text>
            {/* Label */}
            <text x="90" y={stage.y + 10} fill="#1e293b" fontSize="11" fontWeight="bold">{stage.label}</text>
            {/* Description */}
            <text x="90" y={stage.y + 26} fill="#64748b" fontSize="8.5">{stage.desc}</text>
            {/* Severity indicator on right */}
            <rect x="350" y={stage.y + 5} width="20" height="14" rx="3" fill={stage.color} opacity="0.3" />
            <text x="360" y={stage.y + 15} textAnchor="middle" fill={stage.color} fontSize="7" fontWeight="bold">
              {['LOW', 'MED', 'HIGH', 'V.HIGH', 'CRIT', 'MAX'][i]}
            </text>
          </React.Fragment>
        ))}

        {/* Bottom warning */}
        <rect x="60" y="395" width="300" height="20" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="210" y="409" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">
          STOP TILT AT STAGE 2 — Don&apos;t let it progress further
        </text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        The Tilt Spiral — each stage feeds the next. Break the cycle early.
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day8AfternoonBlock() {
  return (
    <section id="d8-afternoon" aria-labelledby="d8-afternoon-heading">
      <SectionDivider
        icon={<Sun />}
        title="AFTERNOON BLOCK — 1:00–2:30: ADVANCED PSYCHOLOGICAL PATTERNS — MODULE 4"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 13: The Tilt Cycle
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-tilt-cycle"
          title="The Tilt Cycle"
          icon={<Flame className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong>Tilt</strong> is a term from poker that perfectly describes what happens to traders
              under emotional pressure. It&apos;s a state of <strong>emotional overwhelm that causes you
              to abandon your rules and trade recklessly</strong>. Tilt is not a character flaw — it&apos;s
              a neurological response. But it can be managed.
            </p>

            {/* Tilt Progression SVG */}
            <TiltProgressionDiagram />

            {/* 5 Tilt Prevention Techniques */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-rose-700 sm:text-base">
                <ShieldIcon className="h-4 w-4" />
                5 Tilt Prevention Techniques
              </h4>
              <ComparisonTable
                headers={['Technique', 'How to Do It', 'When to Use']}
                rows={[
                  [
                    'Physical Reset',
                    'Stand up, walk around for 2-3 minutes, stretch, splash cold water on face',
                    'Immediately after a painful loss or unexpected market move',
                  ],
                  [
                    'Breathing Protocol (4-7-8)',
                    'Inhale 4 sec → Hold 7 sec → Exhale 8 sec. Repeat 3 times. Activates parasympathetic nervous system.',
                    'When you feel tension building, before revenge trading',
                  ],
                  [
                    'Timeout Rule',
                    '30-minute minimum break after any loss exceeding 1R. No chart checking during timeout.',
                    'After every loss, mandatory. No exceptions.',
                  ],
                  [
                    'Loss Limit',
                    'Set a daily max loss (e.g., 3% of account). Hit it = stop for the day, no negotiation.',
                    'Pre-set at start of each day. Non-negotiable circuit breaker.',
                  ],
                  [
                    'Buddy System',
                    'Tell a friend/trading buddy when you feel tilted. They can talk you off the ledge.',
                    'When you recognize you\'re at Cognitive Distortion stage or beyond',
                  ],
                ]}
              />
            </div>

            {/* The 4-7-8 Breathing Box */}
            <div className="rounded-lg border-2 border-rose-400 bg-gradient-to-r from-rose-50 to-pink-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <Wind className="mt-0.5 h-6 w-6 flex-shrink-0 text-rose-600" />
                <div>
                  <p className="text-sm font-bold text-rose-800 sm:text-base">The 4-7-8 Breathing Protocol</p>
                  <p className="mt-1 text-sm leading-relaxed text-rose-700">
                    This breathing technique is used by Navy SEALs to stay calm under fire. It activates
                    your parasympathetic nervous system and physically forces your body to calm down.
                    It takes less than 60 seconds and can be done at your desk.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <div className="rounded-lg bg-white px-4 py-2 border border-rose-200">
                      <p className="text-2xl font-bold text-rose-600">4</p>
                      <p className="text-xs text-slate-600">Inhale (sec)</p>
                    </div>
                    <div className="rounded-lg bg-white px-4 py-2 border border-rose-200">
                      <p className="text-2xl font-bold text-rose-600">7</p>
                      <p className="text-xs text-slate-600">Hold (sec)</p>
                    </div>
                    <div className="rounded-lg bg-white px-4 py-2 border border-rose-200">
                      <p className="text-2xl font-bold text-rose-600">8</p>
                      <p className="text-xs text-slate-600">Exhale (sec)</p>
                    </div>
                    <div className="rounded-lg bg-white px-4 py-2 border border-rose-200">
                      <p className="text-2xl font-bold text-rose-600">3×</p>
                      <p className="text-xs text-slate-600">Repeat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              Tilt is not a character flaw — it&apos;s a neurological response. The key is recognizing it
              early (Stage 1-2) and using prevention techniques before it spirals. If you reach Stage 4+,
              you&apos;ve already lost control. Break the cycle at Stage 2.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 14: The Psychology of Different Market Phases
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-market-psychology"
          title="The Psychology of Different Market Phases"
          icon={<Brain className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Each market phase triggers different emotions. Knowing what you&apos;re likely to feel —
              and what you <em>should</em> do instead — is like having a psychological map for every
              market condition.
            </p>

            {/* Bull Market Psychology */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-green-700 sm:text-base">
                <TrendingUp className="h-4 w-4" />
                Bull Market Psychology
              </h4>
              <ComparisonTable
                headers={['Phase', 'What You Feel', 'What Most Traders Do', 'What You SHOULD Do']}
                rows={[
                  [
                    'Early Bull',
                    'Skepticism — "This rally is fake"',
                    'Wait for confirmation, miss the first 30% move',
                    'TRUST your signals. If S/R breaks + volume confirms, enter. Don\'t doubt the data.',
                  ],
                  [
                    'Mid Bull',
                    'Confidence — "I\'m a genius"',
                    'Increase position size, add leverage, tell everyone',
                    'STICK to your sizing. Same risk per trade. The strategy works — don\'t change it mid-stream.',
                  ],
                  [
                    'Late Bull',
                    'Euphoria — "We\'re all going to be rich!"',
                    'Go all-in, leverage max, buy random altcoins',
                    'REDUCE exposure. Take profits. Tighten stops. The later the bull, the closer the cliff.',
                  ],
                  [
                    'Top',
                    '"This time is different" / "It\'s going to $1M"',
                    'Hold everything, buy the dip, mock bears',
                    'SELL into strength. When your taxi driver gives you crypto tips, it\'s time to exit.',
                  ],
                ]}
              />
            </div>

            {/* Bear Market Psychology */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-red-700 sm:text-base">
                <TrendingDown className="h-4 w-4" />
                Bear Market Psychology
              </h4>
              <ComparisonTable
                headers={['Phase', 'What You Feel', 'What Most Traders Do', 'What You SHOULD Do']}
                rows={[
                  [
                    'Early Bear',
                    'Denial — "It\'s just a dip, it\'ll bounce"',
                    'Hold losing positions, buy more at "discount", average down',
                    'ACCEPT the trend change. If structure breaks down, cut losses. Denial is the most expensive emotion.',
                  ],
                  [
                    'Mid Bear',
                    'Despair — "I\'ve lost everything"',
                    'Sell at the bottom, rage-quit crypto, delete TradingView',
                    'LEARN. Bear markets are the best teachers. Study. Journal. Backtest. Practice on MEXC testnet.',
                  ],
                  [
                    'Late Bear',
                    'Apathy — "Crypto is dead"',
                    'Ignore crypto entirely, miss the accumulation zone',
                    'PREPARE. This is where fortunes are made. Build watchlists. Set alerts. Plan entries.',
                  ],
                  [
                    'Bottom',
                    '"Crypto is dead" / "It\'s going to zero"',
                    'Maximum pessimism, nobody wants to talk about crypto',
                    'ACCUMULATE. When the sentiment is most negative, the opportunity is greatest. DCA into quality.',
                  ],
                ]}
              />
            </div>

            {/* Emotional Map Summary */}
            <div className="rounded-lg border-2 border-rose-400 bg-gradient-to-r from-rose-50 to-pink-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <Eye className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600" />
                <p className="text-sm font-bold text-rose-900 sm:text-base">
                  The market doesn&apos;t create emotions — it amplifies the ones you already have. If you
                  bring fear to a bull market, you&apos;ll sell too early. If you bring greed to a bear
                  market, you&apos;ll buy too soon. Know the phase. Know the likely emotion. Choose the
                  right action.
                </p>
              </div>
            </div>

            <KeyTakeaway>
              Every market phase has a predictable emotional trap. The traders who survive are the ones
              who know which phase they&apos;re in and deliberately choose the counter-emotional action.
              When it feels hardest to act correctly is usually when it matters most.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 15: The Trader's Daily Routine
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-daily-routine"
          title="The Trader's Daily Routine"
          icon={<Calendar className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Consistency doesn&apos;t come from motivation — it comes from <strong>routine</strong>.
              A structured daily routine eliminates decision fatigue and creates the conditions for
              disciplined trading. Here&apos;s the professional trader&apos;s daily structure.
            </p>

            {/* Pre-Market */}
            <div className="rounded-xl border-2 border-amber-300 bg-amber-50/40 p-4 sm:p-5">
              <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-amber-800 sm:text-base">
                <Sunrise className="h-5 w-5" />
                Pre-Market (30 Minutes Before Market Open)
              </h4>
              <div className="space-y-1">
                <ChecklistItem>Check overnight market movements and news</ChecklistItem>
                <ChecklistItem>Review BTC and ETH daily charts for bias</ChecklistItem>
                <ChecklistItem>Scan watchlist for setups (MEXC, Binance, TradingView)</ChecklistItem>
                <ChecklistItem>Check economic calendar for news events today</ChecklistItem>
                <ChecklistItem>Review on-chain data if relevant (Glassnode, CryptoQuant)</ChecklistItem>
                <ChecklistItem>Check Fear &amp; Greed Index and funding rates</ChecklistItem>
                <ChecklistItem>Set your emotional baseline — rate your level 1-5</ChecklistItem>
              </div>
            </div>

            {/* During Market */}
            <div className="rounded-xl border-2 border-rose-300 bg-rose-50/40 p-4 sm:p-5">
              <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-rose-800 sm:text-base">
                <Activity className="h-5 w-5" />
                During Market (Active Trading Session)
              </h4>
              <div className="space-y-1">
                <ChecklistItem>Only trade setups from your pre-market scan</ChecklistItem>
                <ChecklistItem>Run 3-Second Rule before every entry</ChecklistItem>
                <ChecklistItem>Complete pre-trade checklist (10 items)</ChecklistItem>
                <ChecklistItem>Log each trade in journal immediately after execution</ChecklistItem>
              </div>
            </div>

            {/* Post-Market */}
            <div className="rounded-xl border-2 border-blue-300 bg-blue-50/40 p-4 sm:p-5">
              <h4 className="mb-4 flex items-center gap-2 text-sm font-bold text-blue-800 sm:text-base">
                <Moon className="h-5 w-5" />
                Post-Market (After Trading Session Ends)
              </h4>
              <div className="space-y-1">
                <ChecklistItem>Complete post-trade review for every trade taken today</ChecklistItem>
                <ChecklistItem>Record emotional state for each trade in journal</ChecklistItem>
                <ChecklistItem>Calculate daily P&amp;L, win rate, and R-multiple</ChecklistItem>
                <ChecklistItem>Review any broken rules — document what happened and why</ChecklistItem>
                <ChecklistItem>Update watchlist for tomorrow based on new market data</ChecklistItem>
                <ChecklistItem>Set alerts on TradingView for key levels on your watchlist</ChecklistItem>
              </div>
            </div>

            <AnalogyBox title="The Daily Routine is Like an Athlete's Training Schedule">
              A professional athlete doesn&apos;t just show up on game day and improvise. They have a
              pre-game warmup, a game plan, and a post-game recovery routine. Your daily trading routine
              is exactly the same. The routine creates the consistency, and consistency creates profitability.
            </AnalogyBox>

            <KeyTakeaway>
              A structured routine eliminates 80% of emotional decision-making. When your process is
              automatic, you don&apos;t have to rely on willpower — which is finite and unreliable.
              Build the routine, then trust the routine.
            </KeyTakeaway>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  Mini Shield Icon component for Topic 13 heading            */
/* ─────────────────────────────────────────────────────────── */
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}
