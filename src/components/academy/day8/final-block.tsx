'use client'

import React from 'react'
import {
  Flag,
  ClipboardCheck,
  Lightbulb,
  Pencil,
  Award,
  Brain,
  Heart,
  Shield,
  Eye,
  BookOpen,
  PenTool,
  Thermometer,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Target,
  BarChart3,
  Clock,
  User,
  Flame,
  FlaskConical,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { QuizQuestion } from '@/components/academy/quiz-question'
import { DriverCard } from '@/components/academy/driver-card'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { MEXCLab } from '@/components/academy/mexc-lab'
import { TradingViewLab } from '@/components/academy/tradingview-lab'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day8FinalBlock() {
  return (
    <section id="d8-final" aria-labelledby="d8-final-heading">
      <SectionDivider
        icon={<Flag />}
        title="FINAL BLOCK — 5:30–6:00: REVIEW & PRACTICE — MODULE 7"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 21: Practice Exercises
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-practice"
          title="Practice Exercises"
          icon={<ClipboardCheck className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Theory without practice is useless. These three exercises will help you apply what
              you&apos;ve learned today. Complete all three before moving on.
            </p>

            {/* Exercise 1 */}
            <div className="rounded-xl border-2 border-rose-300 bg-rose-50/40 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-rose-500 text-sm font-bold text-white">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-rose-800 sm:text-base">
                    Emotional Self-Assessment (10 min)
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-rose-700">
                    Think about your last 5 trading decisions (or 5 important decisions if you haven&apos;t
                    traded yet). For each one, rate your emotional level (1-5) and identify which emotion
                    was dominant. Look for patterns: do you make worse decisions when excited? Anxious?
                    Write your findings in your journal.
                  </p>
                </div>
              </div>
            </div>

            {/* Exercise 2 */}
            <div className="rounded-xl border-2 border-rose-300 bg-rose-50/40 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-rose-500 text-sm font-bold text-white">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-rose-800 sm:text-base">
                    Journal Your Last Trade (20 min)
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-rose-700">
                    Using the Complete Trading Journal Template from today, fill out every section for your
                    most recent trade (or a hypothetical trade if you haven&apos;t traded yet). Pay special
                    attention to the Emotional State section — this is where the real learning happens. Be
                    brutally honest with yourself.
                  </p>
                </div>
              </div>
            </div>

            {/* Exercise 3 */}
            <div className="rounded-xl border-2 border-rose-300 bg-rose-50/40 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-rose-500 text-sm font-bold text-white">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-rose-800 sm:text-base">
                    Cognitive Bias Hunt (15 min)
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-rose-700">
                    Review your last week of trading (or decision-making). Find at least 3 instances where
                    a cognitive bias affected your judgment. For each one, identify: (1) Which bias was it?
                    (2) What did it make you do? (3) What should you have done instead? Write these in your
                    journal under &quot;Cognitive Bias Log.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TRADINGVIEW LAB: Emotional Bias Detection
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-tradingview-lab"
          title="TradingView Lab: Emotional Bias Detection"
          icon={<FlaskConical />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Your biggest enemy in chart analysis is not the market — it&apos;s your own biases. Practice
            identifying emotional bias in your chart analysis using the TradingView simulator below.
            The goal: catch yourself before your emotions cloud your judgment.
          </p>
          <div className="mb-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="text-sm font-bold text-green-800 mb-2">Practice Instructions — Emotional Bias Detection</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
                <span><strong>Confirmation bias test:</strong> Enable EMA 20 &amp; EMA 50. Now force yourself to write down ONE bearish argument for every bullish signal you see. Are you ignoring warning signs?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
                <span><strong>Anchoring bias test:</strong> Look at the current price without the Horizontal Line. Now draw it at your first impression of &quot;fair value.&quot; Did you anchor on an arbitrary price?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
                <span><strong>Recency bias test:</strong> Enable RSI and Volume. Are you overweighting the last 3 candles? Scroll through the full chart and check if your thesis holds across all the data.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
                <span><strong>FOMO self-check:</strong> Before drawing any trend line, rate your emotional level (1–5). If you&apos;re at 3+, step away for 5 minutes before continuing your analysis.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">5</span>
                <span><strong>Journal your biases:</strong> After completing the analysis, write down which bias you were most susceptible to and one concrete rule to counter it next time.</span>
              </li>
            </ol>
          </div>
          <TradingViewLab />
          <KeyTakeaway>
            Your brain is wired to seek confirmation, anchor on first impressions, and overweight recent events.
            The only defense is a systematic process: force yourself to argue the counter-case, check the full
            data set, and rate your emotional state before every analysis.
          </KeyTakeaway>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            MEXC TRADING LAB: Disciplined Execution
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-mexc-lab"
          title="MEXC Trading Lab: Disciplined Execution"
          icon={<FlaskConical />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Practice disciplined trade execution using the MEXC simulator below.
            Before placing each order, check your emotional level on the thermometer. If you
            would be at Level 3 or above in real trading, skip the trade. Build the habit of
            checking your emotions before executing.
          </p>
          <div className="mb-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="text-sm font-bold text-green-800 mb-2">Practice Instructions — Disciplined Execution</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
                <span><strong>3-Second Rule:</strong> Before clicking Buy or Sell, pause for 3 seconds. Ask: Confluence ≥ 70? SL and size correct? Emotional Level 1–2? If any answer is NO, do NOT trade.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
                <span><strong>Pre-trade checklist:</strong> Complete all 10 items before every order. Market regime identified? Entry zone defined? Position size calculated? No major news? Not a FOMO trade?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
                <span><strong>Emotional journaling:</strong> After each simulated order, write down your emotional state (1–5), what triggered it, and whether you followed your rules. This builds self-awareness.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
                <span><strong>Practice the 4-7-8 breath:</strong> Inhale 4 sec, hold 7 sec, exhale 8 sec. Do this before your first trade and after any trade that triggers an emotional spike.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">5</span>
                <span><strong>Rate the trade:</strong> After execution, grade yourself A–F on discipline alone (not profit/loss). A = followed all rules. F = traded on emotion.</span>
              </li>
            </ol>
          </div>
          <MEXCLab />
          <KeyTakeaway>
            A loss following your rules is the cost of business. A win breaking your rules is dangerous
            reinforcement. Discipline means executing the same process every time, regardless of the outcome.
            Your emotional state is data — observe it, journal it, but never let it make trading decisions.
          </KeyTakeaway>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 22: Day 8 Quiz (20 Questions)
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-quiz"
          title="Day 8 Self-Check Quiz — 20 Questions"
          icon={<BookOpen className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Test your understanding of everything we covered today about trading psychology and
              journaling. Click each question to reveal the answer. Score yourself honestly!
            </p>

            <div className="space-y-3">
              <QuizQuestion number={1} question="What is the #1 reason 90% of traders fail?">
                <p>
                  <strong>Emotional decision-making</strong>, not lack of knowledge. Traders know what to
                  do but can&apos;t control their emotions when it matters most. FOMO, greed, fear, and
                  revenge trading destroy more accounts than bad analysis ever will.
                </p>
              </QuizQuestion>

              <QuizQuestion number={2} question="What are the Four Fatal Emotions in trading?">
                <p>
                  <strong>FOMO</strong> (Fear of Missing Out), <strong>Greed</strong>, <strong>Fear</strong>,
                  and <strong>Revenge Trading</strong>. Each creates a specific destructive pattern: FOMO
                  makes you buy tops, greed makes you hold too long, fear makes you sell bottoms, and
                  revenge trading makes you double your losses.
                </p>
              </QuizQuestion>

              <QuizQuestion number={3} question="What is the most dangerous moment in the trading psychology cycle?">
                <p>
                  After a <strong>BIG WIN</strong>, not after a loss. A big win triggers euphoria and
                  overconfidence, which leads to careless trades with increased position sizes and skipped
                  checklists. The Euphoria → Overconfidence → Careless Trade → Loss cycle is the fastest
                  way to blow an account.
                </p>
              </QuizQuestion>

              <QuizQuestion number={4} question="Name 3 cognitive biases that affect traders and how to counter them.">
                <p>
                  Any 3 of: <strong>Confirmation Bias</strong> (seek confirming info) → Counter: actively
                  seek opposing evidence; <strong>Loss Aversion</strong> (feel losses 2x more than gains)
                  → Counter: use preset SL/TP and execute mechanically; <strong>Anchoring Bias</strong>
                  (fixate on first info) → Counter: evaluate based on current data, not past prices;
                  <strong>Recency Bias</strong> (overweight recent events) → Counter: review last 50
                  trades, not last 3; <strong>Sunk Cost Fallacy</strong> (continue because already
                  invested) → Counter: ask &quot;Would I enter this position now?&quot; If no, exit.
                </p>
              </QuizQuestion>

              <QuizQuestion number={5} question="What are the 5 levels of the Emotional Thermometer?">
                <p>
                  <strong>Level 1:</strong> Calm &amp; Focused (✅ trade normally), <strong>Level 2:</strong>{' '}
                  Mildly Excited (✅ trade normally), <strong>Level 3:</strong> Anxious (⚠️ reduce position
                  50%), <strong>Level 4:</strong> FOMO/Revenge (🛑 stop for 30 min), <strong>Level 5:</strong>{' '}
                  Panic (🛑 close all positions, no trading for 24 hrs). Rule: If Level 3+, must pause
                  before trading.
                </p>
              </QuizQuestion>

              <QuizQuestion number={6} question="What is the 3-Second Rule?">
                <p>
                  Before clicking Buy or Sell, pause for 3 seconds and answer three questions: (1) Confluence
                  score ≥ 70? (2) SL and position size correct? (3) Emotional Level 1-2? If you can&apos;t
                  answer YES to all three, <strong>do not take the trade</strong>. This eliminates 80% of
                  emotional mistakes.
                </p>
              </QuizQuestion>

              <QuizQuestion number={7} question="How many items are on the Pre-Trade Checklist? Name 5 of them.">
                <p>
                  There are <strong>10 items</strong>: Market regime identified, Confluence ≥ 70, Entry zone
                  defined, SL defined, Position size calculated, TP levels set, Trade logged in journal,
                  Emotional level 1-2, No major news within 4 hrs, Not a revenge/FOMO trade. If you
                  can&apos;t check off all 10, you don&apos;t take the trade.
                </p>
              </QuizQuestion>

              <QuizQuestion number={8} question="What is the Critical Mindset Shift about winning and losing?">
                <p>
                  <strong>A loss following your rules = Cost of business ✅</strong> (acceptable, part of
                  the system). <strong>A win breaking your rules = Dangerous reinforcement ❌</strong> (it
                  teaches your brain that breaking rules = reward, leading to bigger rule breaks and bigger
                  losses in the future).
                </p>
              </QuizQuestion>

              <QuizQuestion number={9} question="What should you do after 3 consecutive losses? After 5?">
                <p>
                  After <strong>3 consecutive losses</strong>: Reduce position size by 50% (your confidence
                  is shaken, smaller sizes reduce emotional pressure). After <strong>5+ consecutive
                  losses</strong>: Stop trading for 48 hours and paper trade only (something is fundamentally
                  wrong, you need to step back and recalibrate).
                </p>
              </QuizQuestion>

              <QuizQuestion number={10} question="Why are winning streaks more dangerous than losing streaks?">
                <p>
                  Winning streaks create <strong>overconfidence</strong> — the most destructive emotion in
                  trading. After 5+ wins, your brain releases dopamine, you feel invincible, and you increase
                  risk. The crash after a winning streak is the #1 account killer. After 7+ wins, you should
                  <strong> reduce position size by 25%</strong> as a deliberate countermeasure.
                </p>
              </QuizQuestion>

              <QuizQuestion number={11} question="What's the difference between a Trade Log and a Trading Journal?">
                <p>
                  A <strong>Trade Log</strong> records what happened (entry, exit, P&amp;L) — takes 1-2
                  minutes. A <strong>Trading Journal</strong> also includes why it happened (emotions,
                  reasoning, lessons) — takes 5-10 minutes. The journal is where real learning happens.
                  Professional traders who journal outperform non-journalers by 40-50%.
                </p>
              </QuizQuestion>

              <QuizQuestion number={12} question="What are the 6 sections of the Complete Trading Journal Template?">
                <p>
                  (1) Date &amp; Context, (2) Pre-Trade Analysis (including confluence breakdown), (3) Execution,
                  (4) Emotional State (before/during/after), (5) Outcome &amp; Rule Compliance, (6) Reflection
                  (what went well, what to change, lesson learned, grade).
                </p>
              </QuizQuestion>

              <QuizQuestion number={13} question="What is 'tilt' in trading? How many stages does it have?">
                <p>
                  <strong>Tilt</strong> is a state of emotional overwhelm that causes you to abandon your rules
                  and trade recklessly. It has <strong>6 stages</strong>: Trigger Event → Physical Response →
                  Cognitive Distortion → Impulsive Action → Worse Outcome → Full Tilt. The key is to break
                  the cycle at Stage 2 (Physical Response) using prevention techniques.
                </p>
              </QuizQuestion>

              <QuizQuestion number={14} question="Describe the 4-7-8 Breathing Protocol.">
                <p>
                  Inhale for <strong>4 seconds</strong>, hold for <strong>7 seconds</strong>, exhale for{' '}
                  <strong>8 seconds</strong>. Repeat <strong>3 times</strong>. This technique is used by
                  Navy SEALs and activates your parasympathetic nervous system, physically forcing your body
                  to calm down. It takes less than 60 seconds.
                </p>
              </QuizQuestion>

              <QuizQuestion number={15} question="In a bull market, what should you do during the 'Late Bull' phase?">
                <p>
                  <strong>REDUCE exposure, take profits, and tighten stops.</strong> During Late Bull, most
                  traders feel euphoria and go all-in — that&apos;s the trap. The later the bull market, the
                  closer the cliff edge. When your taxi driver gives you crypto tips, it&apos;s time to
                  start exiting.
                </p>
              </QuizQuestion>

              <QuizQuestion number={16} question="In a bear market bottom, what should you do?">
                <p>
                  <strong>ACCUMULATE.</strong> When sentiment is most negative (&quot;crypto is dead&quot;),
                  the opportunity is greatest. Dollar-cost average into quality assets. The crowd&apos;s
                  maximum pessimism is historically the best buying opportunity.
                </p>
              </QuizQuestion>

              <QuizQuestion number={17} question="What are the 3 parts of the Trader's Daily Routine?">
                <p>
                  <strong>Pre-Market</strong> (30 min): Check overnight moves, review charts, scan watchlist,
                  check news calendar, set emotional baseline. <strong>During Market</strong>: Only trade
                  pre-identified setups, use 3-Second Rule, complete checklist, journal immediately.
                  <strong>Post-Market</strong>: Complete post-trade reviews, record emotions, calculate daily
                  stats, update watchlist for tomorrow.
                </p>
              </QuizQuestion>

              <QuizQuestion number={18} question="Which trader type is recommended for beginners and why?">
                <p>
                  <strong>Swing Trader</strong> — because it gives you time to think, analyze, and learn
                  without the intense pressure of scalping or day trading. It fits around a full-time job,
                  requires less screen time (1-2 hrs/day), and is the most forgiving of beginner mistakes.
                </p>
              </QuizQuestion>

              <QuizQuestion number={19} question="What is a realistic monthly return target for a skilled trader after Year 1?">
                <p>
                  <strong>3-5% monthly</strong> is a realistic target for a skilled, disciplined trader.
                  At 5% monthly, $1,000 grows to $1,796 in 1 year, $3,225 in 2 years, and $5,792 in 3
                  years through compound growth. Anyone promising 20%+ monthly is lying or gambling.
                </p>
              </QuizQuestion>

              <QuizQuestion number={20} question="What are the 5 target benchmarks for Month 6 of trading?">
                <p>
                  Rule compliance ≥ 95%, Journal completion 100%, Win rate ≥ 55%, Average R:R ≥ 1:2.5,
                  Max drawdown &lt; 8%. These benchmarks represent the standards of a consistently
                  profitable trader who has built proper habits.
                </p>
              </QuizQuestion>
            </div>

            {/* Pass Mark Banner */}
            <div className="mt-6 rounded-xl border-2 border-rose-400 bg-gradient-to-r from-rose-50 to-pink-50 p-5 text-center shadow-sm">
              <Award className="mx-auto mb-2 h-8 w-8 text-rose-600" />
              <p className="text-lg font-bold text-rose-800 sm:text-xl">Pass Mark: 16 / 20</p>
              <p className="mt-1 text-sm text-slate-600">
                You need at least 16 correct answers before moving to Day 9. Review any topics you
                missed!
              </p>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 23: Day 8 Key Takeaways
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-takeaways"
          title="Day 8 Key Takeaways"
          icon={<Lightbulb className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-4">
            <DriverCard number={1} title="Psychology is 80% of trading success.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                You can have the best strategy in the world, but if you can&apos;t control your emotions,
                you will lose. Knowledge without discipline is wasted.
              </p>
            </DriverCard>

            <DriverCard number={2} title="The Emotional Thermometer is your most important tool.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Check it before every trade. If you&apos;re at Level 3 or above, stop. The market will
                always be there tomorrow — your capital might not be.
              </p>
            </DriverCard>

            <DriverCard number={3} title="Cognitive biases are hardwired — build systems to counter them.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                You can&apos;t eliminate biases, but checklists, journals, and rules can counteract them
                automatically. The system protects you when your brain can&apos;t.
              </p>
            </DriverCard>

            <DriverCard number={4} title="Winning streaks are more dangerous than losing streaks.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Overconfidence from wins leads to the biggest losses. After 7+ wins, reduce position size
                by 25%. Stay humble or the market will humble you.
              </p>
            </DriverCard>

            <DriverCard number={5} title="The 3-Second Rule saves accounts.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Three questions, three seconds. Confluence ≥ 70? SL and size correct? Emotional Level 1-2?
                If any answer is NO, walk away. No exceptions.
              </p>
            </DriverCard>

            <DriverCard number={6} title="A journal is non-negotiable.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Professional traders who journal outperform non-journalers by 40-50%. The journal creates
                self-awareness, accountability, and a feedback loop for improvement.
              </p>
            </DriverCard>

            <DriverCard number={7} title="Tilt must be stopped at Stage 2.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Once tilt reaches Stage 3 (Cognitive Distortion), you&apos;ve already lost objectivity.
                Use the 4-7-8 breathing protocol, physical reset, or timeout rule at the first sign of tilt.
              </p>
            </DriverCard>

            <DriverCard number={8} title="Your trading style must match your personality.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Don&apos;t choose a style because it sounds exciting. Start as a swing trader — it&apos;s
                the most forgiving, fits around a job, and gives you time to think.
              </p>
            </DriverCard>

            <DriverCard number={9} title="Realistic expectations prevent destructive behavior.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                5% monthly compounded turns $1,000 into nearly $6,000 in 3 years. That&apos;s realistic.
                Anyone promising 20%+ monthly is lying or gambling. Patience wins.
              </p>
            </DriverCard>

            <DriverCard number={10} title="Write and sign your Trading Rules Contract.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                The physical act of writing and signing creates psychological commitment. When you&apos;re
                about to break a rule, your signed contract creates the pause that saves your account.
              </p>
            </DriverCard>

            {/* Tomorrow teaser */}
            <div className="mt-6 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 p-5 text-center shadow-lg">
              <p className="text-sm font-bold uppercase tracking-wide text-rose-400 mb-2">Tomorrow — Day 9</p>
              <p className="text-lg font-bold text-white sm:text-xl">Building a Trading Strategy</p>
              <p className="mt-2 text-sm text-slate-400">
                Combine everything from Days 1-8 into a complete, personalized trading strategy.
              </p>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 24: Day 8 Homework
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d8-homework"
          title="Day 8 Homework"
          icon={<Pencil className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Complete all tasks below before starting Day 9. These assignments are designed to build
              the habits that separate profitable traders from the 90% who fail. Check each one off
              as you go!
            </p>

            <div className="rounded-xl border-2 border-rose-300 bg-rose-50/40 p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-2">
                <Pencil className="h-5 w-5 text-rose-600" />
                <h4 className="text-base font-bold text-rose-800 sm:text-lg">
                  HOMEWORK CHECKLIST
                </h4>
              </div>

              <div className="space-y-2">
                <ChecklistItem>
                  <span>
                    <strong>Task 1:</strong> Write out and physically sign the{' '}
                    <strong>Trading Rules Contract</strong>. Tape it to your monitor or keep it on
                    your desk where you can see it every time you trade.
                  </span>
                </ChecklistItem>

                <ChecklistItem>
                  <span>
                    <strong>Task 2:</strong> Create your <strong>Trading Journal</strong> (spreadsheet,
                    notebook, or app). Set up all 6 sections from the template. Start using it for your
                    very next trade.
                  </span>
                </ChecklistItem>

                <ChecklistItem>
                  <span>
                    <strong>Task 3:</strong> Complete the <strong>Emotional Self-Assessment</strong>
                    exercise: review your last 5 trading decisions, rate your emotional level for each,
                    and identify your most common emotional trap. Write a 200-word summary of your findings.
                  </span>
                </ChecklistItem>

                <ChecklistItem>
                  <span>
                    <strong>Task 4:</strong> Practice the <strong>4-7-8 Breathing Protocol</strong>{' '}
                    three times today (morning, afternoon, evening). Get comfortable with it so it becomes
                    automatic when you need it during a trade.
                  </span>
                </ChecklistItem>

                <ChecklistItem>
                  <span>
                    <strong>Task 5:</strong> Write: &ldquo;The most important thing I learned about
                    my trading psychology today is ___ because ___. The one change I will make starting
                    tomorrow is ___.&rdquo; Put this in your journal.
                  </span>
                </ChecklistItem>
              </div>
            </div>

            {/* Encouragement banner */}
            <div className="rounded-xl border-2 border-green-400 bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-5 text-center">
              <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-green-600" />
              <p className="text-base font-bold text-green-800 sm:text-lg">
                Day 8 Complete — You Now Have the Psychological Edge
              </p>
              <p className="mt-2 text-sm text-green-700">
                Most traders never learn this material. They blow up their accounts and quit, never
                understanding why. You now have the tools to control your emotions, recognize your
                biases, and build a systematic approach to trading. Use them.
              </p>
            </div>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            APPLIED LAB SIMULATION: Bias Detection & Emotional Trading Audit
        ══════════════════════════════════════════════════════════════════ */}
        <AppliedLabSimulation
          id="d8-lab-tradingview-psychology"
          title="LAB 11: Bias Detection & Emotional Trading Audit"
          subtitle="Use the TradingView simulator to identify your own cognitive biases and practice objective chart analysis"
          dayNumber={8}
          sessionName="Final Block"
          labType="tradingview"
          learningObjectives={[
            'Recognize common cognitive biases that affect trading decisions',
            'Practice objective chart analysis free from emotional bias',
            'Develop the habit of questioning your own assumptions',
            'Use a structured checklist to prevent emotionally-driven trades',
          ]}
          tasks={[
            { id: 'd8-l1-t1', instruction: 'Open the TradingView simulator. Before looking at indicators, write down your FIRST impression: Is the market bullish or bearish? This is your initial bias — now question it.', hint: 'Your first impression is often influenced by recency bias. The market may look bullish because of recent green candles, but the structure might tell a different story.' },
            { id: 'd8-l1-t2', instruction: 'Now analyze objectively: Determine market structure (HH+HL or LH+LL). Does the actual structure match your first impression?', hint: 'If your gut said "bullish" but the structure shows LH+LL, you have confirmation bias. Trust the structure, not your feelings.' },
            { id: 'd8-l1-t3', instruction: 'Enable EMA 20, 50, 200. Do the EMAs confirm the structure? If structure and EMAs disagree, which do you trust?', hint: 'Structure always takes priority. EMAs are lagging — they can still be pointing up while structure has already turned bearish.' },
            { id: 'd8-l1-t4', instruction: 'Check for FOMO: Are you feeling urgency to enter right now? If yes, close the simulator for 5 minutes, then return. Did the chart change? No? Then the urgency was in your head.', hint: 'FOMO creates false urgency. The market will always have another setup. Missing one trade is better than forcing a bad one.' },
            { id: 'd8-l1-t5', instruction: 'Apply the 3-Second Rule: Before any trade decision, pause for 3 seconds and ask: "Am I trading because the setup is valid, or because I feel like I should be in a trade?"', hint: 'The 3-second rule prevents impulsive trades. If you cannot articulate a clear setup in 3 seconds, do not trade.' },
            { id: 'd8-l1-t6', instruction: 'Write a one-sentence trade plan: "If price does X, I will do Y." If you cannot write this clearly, you are not ready to trade.', hint: 'A clear IF/THEN plan removes emotion. "If price breaks above $45,500 with volume, I will buy with SL at $44,800" is a plan. "I think it will go up" is not.' },
          ]}
          selfAssessment={[
            {
              question: 'What is confirmation bias in trading?',
              options: [
                'Only looking at one timeframe',
                'Seeking information that confirms your existing belief while ignoring evidence to the contrary',
                'Confirming trades with a friend',
                'Using confirmation orders on exchanges',
              ],
              correctIndex: 1,
              explanation: 'Confirmation bias means you look for evidence that supports what you already believe (e.g., "I think BTC will go up, so I only notice bullish signals"). To combat it, actively look for reasons your thesis might be WRONG.',
            },
            {
              question: 'What is the 3-Second Rule?',
              options: [
                'Wait 3 seconds before entering any trade to check for impulse',
                'Place your stop 3 seconds after entry',
                'Check 3 indicators before trading',
                'Hold winning trades for at least 3 seconds',
              ],
              correctIndex: 0,
              explanation: 'The 3-Second Rule is a pause before any trade decision. In those 3 seconds, ask yourself: "Am I trading this because the setup is valid, or because I feel emotional pressure to act?" If you cannot justify the trade calmly, do not take it.',
            },
          ]}
          expectedOutcomes={[
            'Recognition of personal cognitive biases in trading',
            'Ability to separate objective analysis from emotional reaction',
            'Skill in applying the 3-Second Rule before trades',
            'Habit of writing clear IF/THEN trade plans',
          ]}
        />
      </div>
    </section>
  )
}
