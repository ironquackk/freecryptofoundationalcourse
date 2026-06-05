'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Clock,
  ClipboardCheck,
  BookOpen,
  PenTool,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  BarChart3,
  Target,
  FileText,
  Calculator,
  Star,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { ChecklistItem } from '@/components/academy/checklist-item'

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day8LateMorningBlock() {
  return (
    <section id="d8-late-morning" aria-labelledby="d8-late-morning-heading">
      <SectionDivider
        icon={<Clock />}
        title="LATE MORNING BLOCK — 9:30–12:00: EMOTIONAL DISCIPLINE & JOURNALING — MODULES 2–3"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 5: The 3-Second Rule
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-three-second-rule"
          title="The 3-Second Rule"
          icon={<Clock className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Before you click &quot;Buy&quot; or &quot;Sell&quot; on MEXC or Binance, you must pause for
              3 seconds and answer <strong>three questions</strong>. If you can&apos;t answer YES to all
              three, <strong>do not take the trade</strong>. This single habit can eliminate 80% of your
              emotional mistakes.
            </p>

            {/* The 3 Questions */}
            <div className="space-y-4">
              {[
                {
                  num: 1,
                  question: 'Confluence score ≥ 70?',
                  detail: 'Does this trade meet your minimum confluence threshold? Have you scored it using the framework from Day 4? If the score is below 70, the edge isn\'t strong enough.',
                  color: 'bg-rose-500',
                },
                {
                  num: 2,
                  question: 'SL and position size correct?',
                  detail: 'Is your stop loss at a valid technical level (not a random percentage)? Is your position size within your 1-2% risk rule? If either is wrong, you\'re gambling, not trading.',
                  color: 'bg-rose-600',
                },
                {
                  num: 3,
                  question: 'Emotional Level 1-2?',
                  detail: 'Check your Emotional Thermometer. Are you Calm/Focused (1) or Mildly Excited (2)? If you\'re at Level 3 or above, step away. The trade will still be there (or a better one will come).',
                  color: 'bg-rose-700',
                },
              ].map((q) => (
                <div key={q.num} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${q.color} text-lg font-bold text-white`}>
                    {q.num}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 sm:text-base">{q.question}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{q.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* The Rule Box */}
            <div className="rounded-lg border-2 border-rose-400 bg-gradient-to-r from-rose-50 to-pink-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600" />
                <p className="text-sm font-bold text-rose-900 sm:text-base">
                  3 NOs = NO TRADE. No exceptions. No &quot;just this once.&quot; No &quot;I have a feeling.&quot;
                  The 3-Second Rule exists precisely for the moments when you want to break it.
                </p>
              </div>
            </div>

            <KeyTakeaway>
              The 3-Second Rule transforms impulsive trades into intentional ones. Those 3 seconds are
              the gap between your emotional brain and your rational brain — use them.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 6: The Pre-Trade Checklist
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-pre-trade-checklist"
          title="The Pre-Trade Checklist"
          icon={<ClipboardCheck className="h-5 w-5" />}
          variant="success"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Professional traders use checklists for the same reason pilots do: <strong>under pressure,
              humans forget things</strong>. A checklist ensures you never skip a critical step, no matter
              how excited or anxious you feel. Print this out. Tape it to your monitor. Use it EVERY trade.
            </p>

            {/* 10-item checklist */}
            <div className="rounded-xl border-2 border-green-300 bg-green-50/40 p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-green-600" />
                <h4 className="text-base font-bold text-green-800 sm:text-lg">
                  PRE-TRADE CHECKLIST — 10 ITEMS
                </h4>
              </div>

              <div className="space-y-1">
                <ChecklistItem>Market regime identified (trending/ranging/volatile)</ChecklistItem>
                <ChecklistItem>Confluence score calculated and ≥ 70</ChecklistItem>
                <ChecklistItem>Entry zone defined (specific price or zone)</ChecklistItem>
                <ChecklistItem>Stop loss defined at valid technical level</ChecklistItem>
                <ChecklistItem>Position size calculated (risk ≤ 1-2% of account)</ChecklistItem>
                <ChecklistItem>Take profit levels set (minimum R:R of 1:2)</ChecklistItem>
                <ChecklistItem>Trade logged in journal BEFORE entry</ChecklistItem>
                <ChecklistItem>Emotional level is 1 or 2 (calm/focused)</ChecklistItem>
                <ChecklistItem>No major news events within 4 hours</ChecklistItem>
                <ChecklistItem>Not a revenge trade or FOMO trade</ChecklistItem>
              </div>
            </div>

            <AnalogyBox title="The Pre-Trade Checklist is Like a Pilot's Pre-Flight">
              Before every flight, a pilot goes through a 40+ item checklist — even if they&apos;ve flown
              that aircraft 1,000 times. Why? Because under pressure, even experts forget things. One
              missed step can be catastrophic. Your pre-trade checklist is your pre-flight check. Use it
              every single time, without exception.
            </AnalogyBox>

            <KeyTakeaway>
              If you can&apos;t check off all 10 items, you don&apos;t take the trade. A missed opportunity
              costs nothing. A bad trade costs real money.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 7: The Post-Trade Review Protocol
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-post-trade-review"
          title="The Post-Trade Review Protocol"
          icon={<FileText className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              What you do <em>after</em> a trade is just as important as what you do before it. The
              post-trade review is where you learn — not from books, not from courses, but from your own
              real experience. <strong>Winning and losing trades require different review questions.</strong>
            </p>

            {/* Winning Trade Review */}
            <div className="rounded-lg border border-green-200 bg-green-50/60 p-4 sm:p-5">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-green-800 sm:text-base">
                <TrendingUp className="h-4 w-4" />
                Winning Trade Review (4 Questions)
              </h4>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                  <span>Did I follow my trading plan, or did I get lucky?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                  <span>Was my entry timing optimal, or could I have entered at a better level?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                  <span>Did I hold for the full TP, or did I exit too early out of fear?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                  <span>What can I learn from this trade that applies to future trades?</span>
                </li>
              </ul>
            </div>

            {/* Losing Trade Review */}
            <div className="rounded-lg border border-red-200 bg-red-50/60 p-4 sm:p-5">
              <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-red-800 sm:text-base">
                <TrendingDown className="h-4 w-4" />
                Losing Trade Review (4 Questions)
              </h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                  <span>Did I follow my plan and the market just didn&apos;t cooperate? (This is OK.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                  <span>Did I break any rules? Which ones and why?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                  <span>Was my analysis wrong, or was my execution wrong?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                  <span>What specific change will I make before my next trade?</span>
                </li>
              </ul>
            </div>

            {/* Critical Mindset Shift */}
            <div className="rounded-lg border-2 border-amber-400 bg-gradient-to-r from-amber-50 to-orange-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-600" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-amber-700 sm:text-base">
                    Critical Mindset Shift
                  </p>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-semibold text-green-800">
                        A loss following your rules = Cost of business ✅
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-sm font-semibold text-red-800">
                        A win breaking your rules = Dangerous reinforcement ❌
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-amber-900">
                    A winning trade that broke your rules is MORE dangerous than a losing trade that
                    followed them. Why? Because it teaches your brain that breaking rules = reward.
                    Next time, you&apos;ll break a bigger rule and lose even more.
                  </p>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              Review every trade — winners AND losers. Winning teaches you what works; losing teaches you
              what doesn&apos;t. But a win from rule-breaking teaches you the wrong lesson — and that&apos;s
              the most dangerous outcome of all.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 8: Managing Losing Streaks
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-losing-streaks"
          title="Managing Losing Streaks"
          icon={<TrendingDown className="h-5 w-5" />}
          variant="warning"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Losing streaks are normal and inevitable. Even with a 60% win rate, you WILL have streaks
              of 3, 4, or even 5 consecutive losses. The question isn&apos;t whether they&apos;ll happen —
              it&apos;s <strong>how you respond when they do</strong>.
            </p>

            {/* Protocol Table */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-red-700 sm:text-base">
                <AlertTriangle className="h-4 w-4" />
                Losing Streak Protocol
              </h4>
              <ComparisonTable
                headers={['Consecutive Losses', 'Action', 'Why']}
                rows={[
                  ['2 losses', 'Review both trades carefully', 'Check if you\'re making the same mistake twice or if the market regime changed'],
                  ['3 losses', 'Reduce position size by 50%', 'Your confidence is shaken — smaller sizes reduce emotional pressure while you recalibrate'],
                  ['4 losses', 'Stop trading for the day', 'After 4 losses, your judgment is compromised. The market will be there tomorrow.'],
                  ['5+ losses', 'Stop for 48 hrs; paper trade only', 'Something is fundamentally wrong. You need to step back, review, and practice without risk'],
                ]}
              />
            </div>

            {/* Mathematical Reality */}
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-5">
              <h5 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-800 sm:text-base">
                <Calculator className="h-4 w-4" />
                The Mathematical Reality (60% Win Rate)
              </h5>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-3 border border-slate-200">
                  <p className="text-sm text-slate-600">Probability of 2 consecutive losses:</p>
                  <p className="text-lg font-bold text-slate-900">16%</p>
                  <p className="text-xs text-slate-500">Happens every ~6 trading sessions</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-slate-200">
                  <p className="text-sm text-slate-600">Probability of 3 consecutive losses:</p>
                  <p className="text-lg font-bold text-slate-900">6.4%</p>
                  <p className="text-xs text-slate-500">Happens every ~16 trading sessions</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-slate-200">
                  <p className="text-sm text-slate-600">Probability of 4 consecutive losses:</p>
                  <p className="text-lg font-bold text-amber-600">2.6%</p>
                  <p className="text-xs text-slate-500">Happens every ~38 trading sessions</p>
                </div>
                <div className="rounded-lg bg-white p-3 border border-slate-200">
                  <p className="text-sm text-slate-600">Probability of 5+ consecutive losses:</p>
                  <p className="text-lg font-bold text-red-600">1.0%</p>
                  <p className="text-xs text-slate-500">Rare but inevitable — have a plan</p>
                </div>
              </div>
            </div>

            <KeyTakeaway>
              Losing streaks are not a sign you&apos;re a bad trader — they&apos;re a statistical certainty.
              The protocol exists to protect you from making emotional decisions during the streak. Follow
              it mechanically, not emotionally.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 9: Managing Winning Streaks (Hidden Danger)
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-winning-streaks"
          title="Managing Winning Streaks (The Hidden Danger)"
          icon={<TrendingUp className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Everyone talks about managing losing streaks, but <strong>winning streaks are actually
              MORE dangerous</strong>. Why? Because they create overconfidence — the exact emotion that
              leads to your biggest losses. The crash after a winning streak is the #1 account killer.
            </p>

            {/* Protocol Table */}
            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-rose-700 sm:text-base">
                <Star className="h-4 w-4" />
                Winning Streak Protocol
              </h4>
              <ComparisonTable
                headers={['Consecutive Wins', 'Action', 'Why']}
                rows={[
                  ['3 wins', 'Review all 3 trades carefully', 'Check: did you follow rules or get lucky? Are market conditions favoring your style?'],
                  ['5 wins', 'Keep the SAME position size', 'The temptation to increase size is overwhelming. Resist it. Your edge hasn\'t changed.'],
                  ['7+ wins', 'REDUCE position size by 25%', 'At 7+ wins, overconfidence is at its peak. Reducing size is a deliberate countermeasure.'],
                ]}
              />
            </div>

            {/* Mathematical Reality */}
            <div className="rounded-lg border-2 border-rose-300 bg-gradient-to-r from-rose-50 to-pink-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <Calculator className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-600" />
                <div>
                  <p className="text-sm font-bold text-rose-800 sm:text-base">Mathematical Reality</p>
                  <p className="mt-1 text-sm leading-relaxed text-rose-900">
                    The probability of 7 consecutive wins with a 60% win rate is only{' '}
                    <strong className="text-rose-700">2.8%</strong>. If you&apos;re on a 7-win streak,
                    you&apos;re almost certainly benefiting from favorable conditions AND luck — not
                    supernatural skill. Reduce size and stay humble.
                  </p>
                </div>
              </div>
            </div>

            {/* The Danger Zone */}
            <div className="rounded-lg border-2 border-red-400 bg-red-50 p-4 sm:p-5">
              <h5 className="mb-2 text-sm font-bold text-red-800 sm:text-base">🚨 The Danger Zone: Euphoria</h5>
              <p className="text-sm leading-relaxed text-red-900">
                After 5+ consecutive wins, your brain releases dopamine. You feel like you can&apos;t lose.
                This is <strong>exactly</strong> when traders: increase leverage, skip their checklists,
                enter trades outside their strategy, and blow up their accounts. The winning streak didn&apos;t
                cause the blow-up — the <em>overconfidence</em> from the winning streak did.
              </p>
            </div>

            <KeyTakeaway>
              Winning streaks are where accounts go to die. When you feel invincible, you are at your
              most vulnerable. Reduce size after 7 wins, not increase it. The market always humbles the
              overconfident.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 10: Why Every Professional Trader Journals
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-why-journal"
          title="Why Every Professional Trader Journals"
          icon={<BookOpen className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A trading journal is not a nice-to-have — it&apos;s a <strong>non-negotiable requirement</strong>
              for anyone serious about becoming consistently profitable. It&apos;s the difference between
              guessing why you&apos;re losing and <em>knowing</em> why.
            </p>

            {/* Trade Log vs Trading Journal */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">
                Trade Log vs. Trading Journal
              </h4>
              <ComparisonTable
                headers={['Aspect', 'Trade Log', 'Trading Journal']}
                rows={[
                  ['Purpose', 'Record what happened', 'Understand WHY it happened'],
                  ['Contents', 'Entry, exit, P&L, pair', 'All of above + emotions, reasoning, lessons'],
                  ['Time to complete', '1-2 minutes per trade', '5-10 minutes per trade'],
                  ['Value', 'Statistical tracking', 'Deep self-awareness and pattern recognition'],
                  ['Who uses it', 'All traders (basic)', 'Profitable traders (essential)'],
                ]}
              />
            </div>

            {/* The Stat */}
            <div className="rounded-lg border-2 border-rose-400 bg-gradient-to-r from-rose-50 to-pink-50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <BarChart3 className="mt-0.5 h-6 w-6 flex-shrink-0 text-rose-600" />
                <div>
                  <p className="text-sm font-bold text-rose-800 sm:text-base">
                    Professional traders who journal outperform non-journalers by 40-50%
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-rose-700">
                    This isn&apos;t anecdotal — it&apos;s supported by research in behavioral psychology
                    and performance tracking. Self-awareness through journaling creates a feedback loop
                    that accelerates improvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Journal - 5 Reasons */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { num: 1, title: 'Pattern Recognition', desc: 'After 50+ journal entries, patterns emerge you could never see in real-time.' },
                { num: 2, title: 'Emotional Accountability', desc: 'Writing "entered out of FOMO" makes it real. You can\'t hide from the truth.' },
                { num: 3, title: 'Strategy Validation', desc: 'Your journal proves what actually works vs. what you think works.' },
                { num: 4, title: 'Confidence Building', desc: 'Reviewing past successful trades builds evidence-based confidence, not false confidence.' },
                { num: 5, title: 'Rule Enforcement', desc: 'The act of journaling forces you to slow down and think before acting.' },
              ].map((r) => (
                <div key={r.num} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
                    {r.num}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{r.title}</p>
                    <p className="text-sm text-slate-600">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <KeyTakeaway>
              A trade log tells you what happened. A trading journal tells you why. The &quot;why&quot;
              is where all the learning happens. Professional traders who journal outperform non-journalers
              by 40-50%.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 11: The Complete Trading Journal Template
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-journal-template"
          title="The Complete Trading Journal Template"
          icon={<PenTool className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Use this template for every trade. It takes 5-10 minutes per trade but will save you
              thousands of dollars in mistakes. You can use a notebook, spreadsheet, or the template
              we provide — the format matters less than the consistency.
            </p>

            {/* Journal Template Sections */}
            <div className="space-y-4">
              {/* Section 1: Date & Context */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h5 className="mb-3 text-sm font-bold text-slate-900 sm:text-base flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">1</span>
                  Date & Context
                </h5>
                <ul className="ml-8 space-y-1 text-sm text-slate-600">
                  <li>• Date and time of trade</li>
                  <li>• Market condition (bull/bear/sideways, volatile/calm)</li>
                  <li>• Overall portfolio state (up/down for the day/week)</li>
                  <li>• Any major news or events affecting the market</li>
                </ul>
              </div>

              {/* Section 2: Pre-Trade Analysis */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h5 className="mb-3 text-sm font-bold text-slate-900 sm:text-base flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">2</span>
                  Pre-Trade Analysis
                </h5>
                <ul className="ml-8 space-y-1 text-sm text-slate-600">
                  <li>• Pair (e.g., BTC/USDT on MEXC)</li>
                  <li>• Timeframe analyzed</li>
                  <li>• Confluence breakdown (each factor scored)</li>
                  <li>• Total confluence score / 7</li>
                  <li>• Entry price / zone</li>
                  <li>• Stop loss price and reason for placement</li>
                  <li>• Take profit target(s) and reason</li>
                  <li>• Risk/Reward ratio</li>
                  <li>• Position size and % of account risked</li>
                </ul>
              </div>

              {/* Section 3: Execution */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h5 className="mb-3 text-sm font-bold text-slate-900 sm:text-base flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">3</span>
                  Execution
                </h5>
                <ul className="ml-8 space-y-1 text-sm text-slate-600">
                  <li>• Actual entry price</li>
                  <li>• Did entry match plan? (Yes / No + why)</li>
                  <li>• Actual exit price</li>
                  <li>• Did exit match plan? (Yes / No + why)</li>
                  <li>• Actual P&L ($ and %)</li>
                  <li>• Actual R achieved (e.g., +1.8R or -1R)</li>
                </ul>
              </div>

              {/* Section 4: Emotional State */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h5 className="mb-3 text-sm font-bold text-slate-900 sm:text-base flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">4</span>
                  Emotional State
                </h5>
                <ul className="ml-8 space-y-1 text-sm text-slate-600">
                  <li>• Before entry: Emotional level (1-5) + specific emotion</li>
                  <li>• During trade: Emotional level (1-5) + any changes</li>
                  <li>• After exit: Emotional level (1-5) + specific emotion</li>
                  <li>• Did emotions affect any decisions? If yes, how?</li>
                </ul>
              </div>

              {/* Section 5: Outcome & Rule Compliance */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h5 className="mb-3 text-sm font-bold text-slate-900 sm:text-base flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">5</span>
                  Outcome & Rule Compliance
                </h5>
                <ul className="ml-8 space-y-1 text-sm text-slate-600">
                  <li>• Win or loss?</li>
                  <li>• Followed all 10 checklist items? (Yes/No per item)</li>
                  <li>• Which rules were followed? Which were broken?</li>
                  <li>• Was the outcome due to skill or luck?</li>
                </ul>
              </div>

              {/* Section 6: Reflection */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h5 className="mb-3 text-sm font-bold text-slate-900 sm:text-base flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">6</span>
                  Reflection
                </h5>
                <ul className="ml-8 space-y-1 text-sm text-slate-600">
                  <li>• What did I do well?</li>
                  <li>• What would I do differently?</li>
                  <li>• One specific lesson for future trades</li>
                  <li>• Grade this trade (A/B/C/D/F)</li>
                </ul>
              </div>
            </div>

            <KeyTakeaway>
              The journal template takes 5-10 minutes per trade. That investment of time will save you
              thousands of dollars in avoided mistakes. The sections on Emotional State and Reflection
              are where the real growth happens.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 12: Weekly Journal Review
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-weekly-review"
          title="Weekly Journal Review"
          icon={<BarChart3 className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Journaling individual trades is valuable, but the <strong>Weekly Review</strong> is where
              you see the big picture. It&apos;s like zooming out on a chart — individual candles matter
              less than the trend they create. Do this every Sunday (or your preferred day off from trading).
            </p>

            {/* Weekly Review Template */}
            <div className="space-y-4">
              {/* Statistics */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h5 className="mb-3 text-sm font-bold text-slate-900 sm:text-base flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">1</span>
                  Statistics
                </h5>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="text-sm text-slate-600">• Total trades: ___</div>
                  <div className="text-sm text-slate-600">• Win rate: ___%</div>
                  <div className="text-sm text-slate-600">• Total P&L: $___</div>
                  <div className="text-sm text-slate-600">• Average R per trade: ___</div>
                  <div className="text-sm text-slate-600">• Average winning R: ___</div>
                  <div className="text-sm text-slate-600">• Average losing R: ___</div>
                  <div className="text-sm text-slate-600">• Best trade: +___R</div>
                  <div className="text-sm text-slate-600">• Worst trade: -___R</div>
                  <div className="text-sm text-slate-600">• Rule compliance: ___%</div>
                  <div className="text-sm text-slate-600">• Journal completion: ___%</div>
                </div>
              </div>

              {/* Pattern Analysis */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h5 className="mb-3 text-sm font-bold text-slate-900 sm:text-base flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">2</span>
                  Pattern Analysis
                </h5>
                <ul className="ml-8 space-y-1 text-sm text-slate-600">
                  <li>• Which setups/pairs had the highest win rate?</li>
                  <li>• Which time of day was most/least profitable?</li>
                  <li>• What was my most common emotional mistake?</li>
                  <li>• Did I follow my losing/winning streak protocols?</li>
                  <li>• Which rules did I break most often?</li>
                </ul>
              </div>

              {/* Top 3 Lessons */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h5 className="mb-3 text-sm font-bold text-slate-900 sm:text-base flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">3</span>
                  Top 3 Lessons This Week
                </h5>
                <ul className="ml-8 space-y-1 text-sm text-slate-600">
                  <li>1. ___</li>
                  <li>2. ___</li>
                  <li>3. ___</li>
                </ul>
              </div>

              {/* Goals */}
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <h5 className="mb-3 text-sm font-bold text-slate-900 sm:text-base flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">4</span>
                  Goals for Next Week
                </h5>
                <ul className="ml-8 space-y-1 text-sm text-slate-600">
                  <li>• One specific rule to improve: ___</li>
                  <li>• One emotional pattern to work on: ___</li>
                  <li>• One process change to implement: ___</li>
                </ul>
              </div>
            </div>

            <KeyTakeaway>
              The Weekly Review is your most powerful improvement tool. Individual trade reviews catch
              micro-mistakes; weekly reviews catch systemic issues. Together, they create a continuous
              improvement loop that accelerates your growth.
            </KeyTakeaway>
          </div>
        </TopicCard>
      </div>
    </section>
  )
}
