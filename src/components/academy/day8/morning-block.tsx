'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  Brain,
  AlertTriangle,
  Heart,
  Zap,
  ShieldAlert,
  Flame,
  TrendingDown,
  ArrowRight,
  Frown,
  Smile,
  Meh,
  Angry,
  Skull,
  Thermometer,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Psychology Cycle Diagram                              */
/*  Circular flow: Euphoria → Overconfidence → Careless Trade  */
/*  → Loss → Anxiety → Revenge/Paralysis → Despair →          */
/*  Discipline → Small Wins → Euphoria                         */
/* ─────────────────────────────────────────────────────────── */
function PsychologyCycleDiagram() {
  const nodes = [
    { label: 'Euphoria', color: '#22c55e', angle: 0 },
    { label: 'Overconfidence', color: '#f59e0b', angle: 36 },
    { label: 'Careless Trade', color: '#f97316', angle: 72 },
    { label: 'Loss', color: '#ef4444', angle: 108 },
    { label: 'Anxiety', color: '#e11d48', angle: 144 },
    { label: 'Revenge / Paralysis', color: '#be123c', angle: 180 },
    { label: 'Despair', color: '#7f1d1d', angle: 216 },
    { label: 'Discipline', color: '#6366f1', angle: 252 },
    { label: 'Small Wins', color: '#0ea5e9', angle: 288 },
  ]

  const cx = 200
  const cy = 200
  const r = 140

  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 400 400"
        className="mx-auto w-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Trading Psychology Cycle showing the emotional loop traders experience"
      >
        <defs>
          <filter id="cycleGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Center label */}
        <circle cx={cx} cy={cy} r="35" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" />
        <text x={cx} y={cy - 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" letterSpacing="0.5">EMOTIONAL</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold" letterSpacing="0.5">CYCLE</text>

        {/* Draw connection arcs between nodes */}
        {nodes.map((node, i) => {
          const nextNode = nodes[(i + 1) % nodes.length]
          const startAngle = (node.angle - 90) * (Math.PI / 180)
          const endAngle = (nextNode.angle - 90) * (Math.PI / 180)
          const x1 = cx + r * Math.cos(startAngle)
          const y1 = cy + r * Math.sin(startAngle)
          const x2 = cx + r * Math.cos(endAngle)
          const y2 = cy + r * Math.sin(endAngle)

          // Calculate midpoint for arrow
          const midAngle = ((node.angle + nextNode.angle) / 2 - 90) * (Math.PI / 180)
          const midR = r + 18
          const arrowX = cx + midR * Math.cos(midAngle)
          const arrowY = cy + midR * Math.sin(midAngle)

          return (
            <React.Fragment key={`arc-${i}`}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#94a3b8"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.5"
              />
              {/* Small arrow at midpoint */}
              <polygon
                points={`${arrowX - 3},${arrowY - 3} ${arrowX + 3},${arrowY} ${arrowX - 3},${arrowY + 3}`}
                fill="#94a3b8"
                opacity="0.6"
                transform={`rotate(${(node.angle + nextNode.angle) / 2}, ${arrowX}, ${arrowY})`}
              />
            </React.Fragment>
          )
        })}

        {/* Draw nodes */}
        {nodes.map((node, i) => {
          const angle = (node.angle - 90) * (Math.PI / 180)
          const x = cx + r * Math.cos(angle)
          const y = cy + r * Math.sin(angle)

          return (
            <React.Fragment key={`node-${i}`}>
              <circle cx={x} cy={y} r="22" fill="white" stroke={node.color} strokeWidth="2.5" filter="url(#cycleGlow)" />
              <text
                x={x}
                y={y + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={node.color}
                fontSize="7"
                fontWeight="bold"
              >
                {node.label.length > 10 ? node.label.split(' ')[0] : node.label}
              </text>
              {node.label.includes('/') && (
                <text
                  x={x}
                  y={y + 9}
                  textAnchor="middle"
                  fill={node.color}
                  fontSize="6"
                  fontWeight="bold"
                >
                  {node.label.split(' / ')[1]}
                </text>
              )}
            </React.Fragment>
          )
        })}

        {/* Warning label at bottom */}
        <rect x="80" y="365" width="240" height="26" rx="6" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="200" y="382" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">
          ⚠ Most dangerous moment: After a BIG WIN, not after a loss
        </text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        The Trading Psychology Cycle — emotions loop endlessly without discipline
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Emotional Thermometer Visual                          */
/*  5-level gauge from green (calm) to dark red (panic)       */
/* ─────────────────────────────────────────────────────────── */
function EmotionalThermometerDiagram() {
  const levels = [
    { level: 1, label: 'Calm & Focused', emoji: '✅', color: '#22c55e', action: 'Trade normally', height: 50 },
    { level: 2, label: 'Mildly Excited', emoji: '✅', color: '#84cc16', action: 'Trade normally', height: 50 },
    { level: 3, label: 'Anxious', emoji: '⚠️', color: '#f59e0b', action: 'Reduce position 50%', height: 50 },
    { level: 4, label: 'FOMO / Revenge', emoji: '🛑', color: '#ef4444', action: 'Stop trading 30 min', height: 50 },
    { level: 5, label: 'Panic', emoji: '🛑', color: '#7f1d1d', action: 'Close all positions', height: 50 },
  ]

  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 460 320"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Emotional Thermometer showing 5 levels of trading emotions and required actions"
      >
        {/* Title */}
        <text x="230" y="24" textAnchor="middle" fill="#1e293b" fontSize="14" fontWeight="bold" letterSpacing="1">EMOTIONAL THERMOMETER</text>

        {/* Thermometer body (left side) */}
        <rect x="30" y="45" width="60" height="250" rx="30" fill="white" stroke="#e2e8f0" strokeWidth="2" />
        {/* Mercury fill - gradient from green at top to dark red at bottom */}
        <defs>
          <linearGradient id="mercuryGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="25%" stopColor="#84cc16" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="75%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>
        </defs>
        <rect x="35" y="50" width="50" height="240" rx="25" fill="url(#mercuryGrad)" opacity="0.3" />

        {/* Level markers on thermometer */}
        {levels.map((l, i) => {
          const y = 70 + i * 50
          return (
            <React.Fragment key={`thermo-${i}`}>
              <line x1="90" y1={y} x2="120" y2={y} stroke={l.color} strokeWidth="2" />
              <circle cx="60" cy={y} r="6" fill={l.color} opacity="0.6" />
            </React.Fragment>
          )
        })}

        {/* Level cards on right side */}
        {levels.map((l, i) => {
          const y = 50 + i * 52
          return (
            <React.Fragment key={`card-${i}`}>
              <rect x="125" y={y} width="310" height="44" rx="8" fill="white" stroke={l.color} strokeWidth="2" />
              {/* Level badge */}
              <circle cx="148" cy={y + 22} r="14" fill={l.color} />
              <text x="148" y={y + 26} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">{l.level}</text>
              {/* Label */}
              <text x="172" y={y + 17} fill="#1e293b" fontSize="11" fontWeight="bold">{l.emoji} {l.label}</text>
              {/* Action */}
              <text x="172" y={y + 34} fill="#64748b" fontSize="9">→ {l.action}</text>
            </React.Fragment>
          )
        })}

        {/* Bottom rule */}
        <rect x="30" y="300" width="400" height="18" rx="4" fill="#fef2f2" stroke="#fca5a5" strokeWidth="1" />
        <text x="230" y="313" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold">
          RULE: If Level 3+, you MUST pause before trading
        </text>
      </svg>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
        Your Emotional Thermometer — check your level before every trade
      </p>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day8MorningBlock() {
  return (
    <section id="d8-morning" aria-labelledby="d8-morning-heading">
      <SectionDivider
        icon={<Sun />}
        title="MORNING BLOCK — 8:00–9:30: PSYCHOLOGY OF TRADING — MODULE 1"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 1: Why 90% of Traders Fail (It's Not What You Think)
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-why-traders-fail"
          title="Why 90% of Traders Fail (It's Not What You Think)"
          icon={<TrendingDown className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-6">
            {/* The truth */}
            <div className="rounded-lg border-2 border-rose-300 bg-rose-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-rose-600" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-rose-700 sm:text-base">
                    The #1 Reason Traders Fail
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-rose-900 sm:text-base">
                    It&apos;s <strong>NOT</strong> lack of knowledge, bad strategy, or poor analysis.
                    The #1 reason is <strong className="text-rose-700">emotional decision-making</strong>.
                    Traders know what to do — they just can&apos;t make themselves do it under pressure.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              You can have the best strategy in the world, but if you panic-sell at the bottom,
              FOMO-buy at the top, or revenge-trade after a loss, your knowledge is worthless.
              <strong> Psychology is the invisible force that determines 80% of your trading results.</strong>
            </p>

            {/* The Four Fatal Emotions Table */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-rose-700 sm:text-base">
                <Flame className="h-4 w-4" />
                The Four Fatal Emotions
              </h4>
              <ComparisonTable
                headers={['Emotion', 'How It Manifests', 'The Damage', 'Crypto Example']}
                rows={[
                  [
                    'FOMO',
                    'Buying because price is already pumping and you feel left out',
                    'Entering at the top, getting trapped in a dump',
                    'BTC runs from $40K to $48K in 2 days. You buy at $47,800. It drops to $42K. You panic-sell at a 12% loss.',
                  ],
                  [
                    'Greed',
                    'Holding too long, increasing position size beyond your plan',
                    'Turning a winning trade into a losing one',
                    'SOL hits your TP at $180 but you hold for "just a bit more." It drops to $145. Your 20% gain becomes a 3% loss.',
                  ],
                  [
                    'Fear',
                    'Selling at the bottom, not taking valid setups',
                    'Missing profits, locking in losses unnecessarily',
                    'BTC drops to support at $38K. Your plan says buy. Fear says "it\'s going to $20K." You don\'t buy. It bounces to $44K.',
                  ],
                  [
                    'Revenge Trading',
                    'Immediately entering a new trade after a loss to "win it back"',
                    'Doubling losses, destroying account balance',
                    'You lose $200 on a bad ETH trade. Angry, you open a 5x leverage long on DOGE. It dips 4%, you\'re liquidated. Total loss: $600.',
                  ],
                ]}
              />
            </div>

            {/* Analogy */}
            <AnalogyBox title="Trading Psychology is Like Driving">
              Knowing the rules of the road (strategy) is easy. But when someone cuts you off (a sudden
              market move), your reflex takes over. If your reflex is to swerve wildly (revenge trade),
              you crash. Professional driving — like professional trading — means training your reflexes,
              not just knowing the rules.
            </AnalogyBox>

            <KeyTakeaway>
              90% of traders fail not because they don&apos;t know what to do, but because they can&apos;t
              control their emotions when it matters most. Psychology is the foundation everything else
              is built on.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 2: The Trading Psychology Cycle
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-psychology-cycle"
          title="The Trading Psychology Cycle"
          icon={<Brain className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Every trader — beginner or professional — goes through an emotional cycle. The difference
              is that <strong>professionals recognize where they are in the cycle and adjust their behavior</strong>,
              while beginners get swept along by it.
            </p>

            {/* Psychology Cycle SVG */}
            <PsychologyCycleDiagram />

            {/* Key Insight Box */}
            <div className="rounded-lg border-2 border-rose-400 bg-gradient-to-r from-rose-50 to-pink-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <Zap className="mt-0.5 h-6 w-6 flex-shrink-0 text-rose-600" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-rose-700 sm:text-base">
                    Key Insight
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-rose-900 sm:text-base">
                    <strong>The most dangerous moment is NOT after a loss. It&apos;s after a BIG WIN.</strong>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-rose-800">
                    After a big win, euphoria floods your brain. You feel invincible. You increase your
                    position size. You skip your checklist. You take trades you&apos;d normally pass on.
                    This is exactly when the market punishes you. The cycle from Euphoria → Overconfidence
                    → Careless Trade → Loss is the fastest way to blow an account.
                  </p>
                </div>
              </div>
            </div>

            {/* The Break Point */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">
                Where the Cycle Breaks (or Doesn&apos;t)
              </h4>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-red-200 bg-red-50/60 p-4">
                  <h5 className="mb-2 text-sm font-bold text-red-800">Without Awareness ❌</h5>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Euphoria → Overconfidence → Blow up</li>
                    <li>• Loss → Revenge → Bigger loss</li>
                    <li>• Despair → Give up → Quit trading</li>
                    <li>• Cycle repeats until account is zero</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-green-200 bg-green-50/60 p-4">
                  <h5 className="mb-2 text-sm font-bold text-green-800">With Awareness ✅</h5>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Euphoria → Recognize it → Stick to plan</li>
                    <li>• Loss → Accept it → Review, don&apos;t revenge</li>
                    <li>• Despair → Step back → Paper trade</li>
                    <li>• Discipline → Small wins → Compound growth</li>
                  </ul>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              The trading psychology cycle is inevitable. Getting caught in it is optional. The moment
              you recognize where you are in the cycle, you regain control.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 3: Cognitive Biases That Destroy Traders
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-cognitive-biases"
          title="Cognitive Biases That Destroy Traders"
          icon={<ShieldAlert className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Your brain is wired with shortcuts (heuristics) that helped our ancestors survive, but
              these same shortcuts <strong>sabotage your trading</strong>. Recognizing these biases is
              the first step to countering them.
            </p>

            {/* 8-row Bias Table */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-rose-700 sm:text-base">
                <Brain className="h-4 w-4" />
                The 8 Deadly Cognitive Biases
              </h4>
              <ComparisonTable
                headers={['Bias', 'Definition', 'Trading Example', 'How to Counter']}
                rows={[
                  [
                    'Confirmation Bias',
                    'Seeking information that confirms your existing belief',
                    'You\'re bullish on ETH so you only read bullish articles, ignoring bearish on-chain data',
                    'Actively seek the OPPOSING case. For every bullish argument, find a bearish one.',
                  ],
                  [
                    'Anchoring Bias',
                    'Fixating on the first piece of information you see',
                    'BTC was $69K so you think $45K is "cheap" — but $45K might still be overvalued',
                    'Evaluate based on current data and fundamentals, not past prices. No price is "cheap" or "expensive" in isolation.',
                  ],
                  [
                    'Recency Bias',
                    'Overweighting recent events over historical patterns',
                    'After 3 winning trades, you think you\'ve "figured it out" and increase risk',
                    'Look at your last 50 trades, not your last 3. Review weekly, not daily.',
                  ],
                  [
                    'Loss Aversion',
                    'Feeling losses 2x more than equivalent gains',
                    'You hold a losing position hoping it\'ll recover, but take profit too early on winners',
                    'Use preset SL/TP. Execute mechanically. Never move your SL away from entry.',
                  ],
                  [
                    'Sunk Cost Fallacy',
                    'Continuing because you\'ve already invested',
                    '"I\'ve already lost $500 on this trade, I can\'t close it now" — so you hold and lose $1,200',
                    'Ask: "If I had no position right now, would I enter?" If NO, exit immediately.',
                  ],
                  [
                    'Disposition Effect',
                    'Selling winners too early, holding losers too long',
                    'Take 5% profit on BTC but hold a 15% loss on ALT hoping it bounces',
                    'Set rules: minimum R:R of 1:2. Let winners run. Cut losers fast.',
                  ],
                  [
                    'Herd Mentality',
                    'Following what everyone else is doing',
                    'Buying DOGE because everyone on Twitter is talking about it, without any analysis',
                    'When everyone agrees, be extra cautious. The crowd is usually wrong at extremes.',
                  ],
                  [
                    'Illusion of Control',
                    'Believing you can control or predict outcomes',
                    '"I knew it was going to pump" — after the fact. You didn\'t know; you guessed and got lucky.',
                    'Think in probabilities, not certainties. "My edge gives me 60% odds" not "I know what will happen."',
                  ],
                ]}
              />
            </div>

            {/* Practical Anti-Bias Strategy */}
            <div className="rounded-lg border border-rose-300 bg-rose-50/60 p-4 sm:p-5">
              <h5 className="mb-3 text-sm font-bold text-rose-800 sm:text-base">
                Your Anti-Bias Pre-Trade Checklist
              </h5>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span><strong>Before entry:</strong> Write down ONE reason this trade could be WRONG</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span><strong>Before entry:</strong> Check — am I following the crowd or my analysis?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span><strong>During trade:</strong> Am I holding because of my plan or because I don&apos;t want to accept a loss?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                  <span><strong>After trade:</strong> Was this skill or luck? Be honest.</span>
                </li>
              </ul>
            </div>

            <KeyTakeaway>
              You cannot eliminate cognitive biases — they&apos;re hardwired into your brain. But you can
              recognize them and build systems (checklists, journals, rules) that counteract them automatically.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 4: The Emotional Thermometer
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-emotional-thermometer"
          title="The Emotional Thermometer"
          icon={<Thermometer className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Before every single trade, you need to check your emotional state. Just like a thermometer
              measures temperature, your <strong>Emotional Thermometer</strong> measures whether you&apos;re
              in a fit state to trade. This simple tool alone can save your account.
            </p>

            {/* Emotional Thermometer SVG */}
            <EmotionalThermometerDiagram />

            {/* Detailed Level Descriptions */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">
                Level-by-Level Breakdown
              </h4>

              {/* Level 1 */}
              <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50/60 p-3 sm:p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white">
                  1
                </div>
                <div>
                  <p className="text-sm font-bold text-green-800">Calm & Focused ✅</p>
                  <p className="text-sm text-green-700">
                    You&apos;ve done your analysis. You have a plan. You feel no urgency or excitement.
                    This is your ideal trading state. <strong>Action: Trade normally.</strong>
                  </p>
                </div>
              </div>

              {/* Level 2 */}
              <div className="flex items-start gap-3 rounded-lg border border-lime-200 bg-lime-50/60 p-3 sm:p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-lime-500 text-sm font-bold text-white">
                  2
                </div>
                <div>
                  <p className="text-sm font-bold text-lime-800">Mildly Excited ✅</p>
                  <p className="text-sm text-lime-700">
                    You see a great setup and feel a little rush. This is normal and fine — excitement
                    isn&apos;t the enemy, <em>uncontrolled</em> excitement is. <strong>Action: Trade normally, but double-check your plan.</strong>
                  </p>
                </div>
              </div>

              {/* Level 3 */}
              <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50/60 p-3 sm:p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                  3
                </div>
                <div>
                  <p className="text-sm font-bold text-amber-800">Anxious ⚠️</p>
                  <p className="text-sm text-amber-700">
                    You feel a knot in your stomach. You&apos;re checking the chart every 30 seconds.
                    You&apos;re worried about missing out or losing money.{' '}
                    <strong>Action: Reduce position size by 50%. If anxiety persists, close the trade.</strong>
                  </p>
                </div>
              </div>

              {/* Level 4 */}
              <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50/60 p-3 sm:p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                  4
                </div>
                <div>
                  <p className="text-sm font-bold text-red-800">FOMO / Revenge 🛑</p>
                  <p className="text-sm text-red-700">
                    You feel an overwhelming urge to act RIGHT NOW. You&apos;re angry about a previous
                    loss or terrified of missing a pump. Your heart rate is elevated.{' '}
                    <strong>Action: STOP. Step away for 30 minutes minimum. No trading.</strong>
                  </p>
                </div>
              </div>

              {/* Level 5 */}
              <div className="flex items-start gap-3 rounded-lg border-2 border-red-400 bg-red-100/80 p-3 sm:p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-900 text-sm font-bold text-white">
                  5
                </div>
                <div>
                  <p className="text-sm font-bold text-red-900">Panic 🛑</p>
                  <p className="text-sm text-red-800">
                    You can&apos;t think clearly. You&apos;re making impulsive decisions. You might
                    be sweating, heart pounding, unable to focus.{' '}
                    <strong>Action: CLOSE ALL POSITIONS immediately. Do not trade for 24 hours.</strong>
                </p>
                </div>
              </div>
            </div>

            {/* The Rule */}
            <div className="rounded-lg border-2 border-rose-400 bg-gradient-to-r from-rose-50 to-pink-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-rose-600" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-rose-700 sm:text-base">
                    THE RULE
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-rose-900 sm:text-base">
                    If you are Level 3 or above, you <strong>MUST</strong> pause before trading.
                    No exceptions. The market will always be there tomorrow. Your capital might not be.
                  </p>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              The Emotional Thermometer is your most important trading tool — more important than any
              indicator, chart pattern, or on-chain metric. If you&apos;re not in the right emotional
              state, nothing else matters.
            </KeyTakeaway>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
