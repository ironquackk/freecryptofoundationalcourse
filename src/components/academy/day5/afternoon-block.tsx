'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Sun,
  TrendingUp,
  ArrowDownRight,
  XCircle,
  ClipboardList,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Target,
  Shield,
  Zap,
  FileText,
  PenLine,
  BarChart3,
  FlaskConical,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { StepList } from '@/components/academy/step-list'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { MEXCLab } from '@/components/academy/mexc-lab'
import { TradingViewLab } from '@/components/academy/tradingview-lab'

/* ─────────────────────────────────────────────────────────── */
/*  SVG Caption Wrapper                                        */
/* ─────────────────────────────────────────────────────────── */
function SvgCaption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500 text-center">
      {children}
    </p>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  SVG: Breakout Trade Execution Diagram                      */
/* ─────────────────────────────────────────────────────────── */
function BreakoutTradeDiagram() {
  return (
    <div className="my-4 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
      <svg
        viewBox="0 0 480 280"
        className="mx-auto w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Breakout trade execution showing entry, stop loss, and take profit levels"
      >
        {/* Title */}
        <text x="240" y="20" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="bold" letterSpacing="1">TRADE #1: THE BREAKOUT ENTRY</text>

        {/* Resistance line */}
        <line x1="30" y1="90" x2="450" y2="90" stroke="#dc2626" strokeWidth="2" strokeDasharray="8 4" />
        <text x="445" y="85" textAnchor="end" fill="#dc2626" fontSize="9" fontWeight="bold">Resistance $67,500</text>

        {/* Support line */}
        <line x1="30" y1="200" x2="450" y2="200" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="6 3" />
        <text x="445" y="195" textAnchor="end" fill="#16a34a" fontSize="8">Support $65,000</text>

        {/* Price action approaching resistance */}
        <polyline
          points="50,180 80,165 110,150 140,130 170,120 200,105 230,95 260,92 290,88"
          fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
        {/* Candle bodies near resistance */}
        <rect x="55" y="170" width="10" height="20" rx="1" fill="#22c55e" />
        <rect x="85" y="155" width="10" height="18" rx="1" fill="#22c55e" />
        <rect x="115" y="140" width="10" height="22" rx="1" fill="#ef4444" />
        <rect x="145" y="120" width="10" height="25" rx="1" fill="#22c55e" />
        <rect x="175" y="110" width="10" height="20" rx="1" fill="#22c55e" />
        <rect x="205" y="95" width="10" height="18" rx="1" fill="#ef4444" />
        <rect x="235" y="90" width="10" height="15" rx="1" fill="#22c55e" />
        {/* BREAKOUT candle */}
        <rect x="265" y="68" width="14" height="28" rx="2" fill="#22c55e" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="272" y1="58" x2="272" y2="68" stroke="#22c55e" strokeWidth="2" />
        <line x1="272" y1="96" x2="272" y2="105" stroke="#22c55e" strokeWidth="2" />

        {/* Post-breakout move */}
        <polyline
          points="290,88 310,72 340,60 370,52 400,48 430,45"
          fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        />
        <rect x="295" y="68" width="10" height="20" rx="1" fill="#22c55e" />
        <rect x="325" y="55" width="10" height="18" rx="1" fill="#22c55e" />
        <rect x="355" y="48" width="10" height="15" rx="1" fill="#22c55e" />

        {/* Entry point */}
        <circle cx="290" cy="88" r="6" fill="#06b6d4" stroke="white" strokeWidth="2" />
        <line x1="296" y1="88" x2="330" y2="118" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 2" />
        <text x="332" y="115" fill="#06b6d4" fontSize="9" fontWeight="bold">Entry $67,550</text>

        {/* Stop Loss */}
        <line x1="280" y1="110" x2="340" y2="110" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="290" cy="110" r="4" fill="#ef4444" />
        <line x1="300" y1="110" x2="330" y2="132" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 2" />
        <text x="332" y="130" fill="#dc2626" fontSize="9" fontWeight="bold">SL $66,900</text>
        <text x="332" y="142" fill="#dc2626" fontSize="7">(below resistance)</text>

        {/* Take Profit */}
        <line x1="380" y1="48" x2="420" y2="48" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="390" cy="48" r="4" fill="#16a34a" />
        <text x="380" y="40" fill="#16a34a" fontSize="9" fontWeight="bold">TP $69,000</text>

        {/* Risk/Reward box */}
        <rect x="35" y="230" width="150" height="40" rx="6" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" />
        <text x="110" y="248" textAnchor="middle" fill="#16a34a" fontSize="9" fontWeight="bold">Risk: $650 | Reward: $1,450</text>
        <text x="110" y="260" textAnchor="middle" fill="#16a34a" fontSize="8">R:R = 1:2.2</text>

        {/* Key annotations */}
        <rect x="200" y="230" width="245" height="40" rx="6" fill="#ecfeff" stroke="#06b6d4" strokeWidth="1" />
        <text x="322" y="248" textAnchor="middle" fill="#0e7490" fontSize="8" fontWeight="bold">Breakout candle CLOSES above resistance</text>
        <text x="322" y="260" textAnchor="middle" fill="#0e7490" fontSize="7">Enter on next candle open or limit at $67,550</text>
      </svg>
      <SvgCaption>Breakout entry — wait for the candle to CLOSE above resistance before entering</SvgCaption>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN EXPORT                                                */
/* ─────────────────────────────────────────────────────────── */
export function Day5AfternoonBlock() {
  return (
    <section id="d5-afternoon" aria-labelledby="d5-afternoon-heading">
      <SectionDivider
        icon={<Sun />}
        title="AFTERNOON BLOCK — HOURS 4-6: LIVE TRADING PRACTICE"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 1: Trade #1 — The Breakout Entry              */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-trade-breakout"
          title="Trade #1: The Breakout Entry"
          icon={<TrendingUp className="h-5 w-5" />}
          variant="highlight"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The breakout is one of the most powerful setups in trading. When price breaks through a key resistance level with volume, it often continues moving in that direction. Here&apos;s how to identify and execute it.
            </p>

            {/* Setup criteria */}
            <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50/40 p-4 sm:p-5">
              <h4 className="mb-3 text-base font-bold text-cyan-900 sm:text-lg">Setup Criteria</h4>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {[
                  'Price approaching a well-defined resistance level',
                  'At least 2 previous touches on resistance (the more, the better)',
                  'Volume increasing as price approaches resistance',
                  'RSI above 50 but not overbought (below 70)',
                  'MACD showing bullish momentum',
                  '4H and/or 1D trend is bullish',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-cyan-600" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step by step execution */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Step-by-Step Execution</h4>
            <StepList
              steps={[
                {
                  number: 1,
                  title: 'Identify the resistance level',
                  description: 'On TradingView, draw a horizontal line at the resistance zone. How many times has price rejected this level? (Minimum 2 touches required.)',
                },
                {
                  number: 2,
                  title: 'Wait for the breakout candle',
                  description: 'Watch for a candle that CLOSES above resistance. Not just a wick — the candle body must close above. This is the most critical step. Wicks above resistance are fakeouts; closes above are breakouts.',
                },
                {
                  number: 3,
                  title: 'Confirm with volume',
                  description: 'The breakout candle should have noticeably higher volume than the previous 5-10 candles. Low-volume breakouts fail more often than they succeed.',
                },
                {
                  number: 4,
                  title: 'Enter on the next candle (or limit)',
                  description: 'Option A: Market order on the next candle open (if the move is fast). Option B: Limit order at the resistance level (now acting as support) for a retest entry. On MEXC, place your buy order.',
                },
                {
                  number: 5,
                  title: 'Set stop-loss below the broken resistance',
                  description: 'Place your SL just below the resistance level (now support). If price falls back below, the breakout failed. On MEXC, set a stop-limit sell order.',
                },
                {
                  number: 6,
                  title: 'Set take-profit at next resistance or R:R target',
                  description: 'Target the next major resistance level, or set your TP based on at least a 1:2 risk/reward ratio.',
                },
              ]}
            />

            {/* SVG: Breakout trade diagram */}
            <BreakoutTradeDiagram />

            <KeyTakeaway>
              The #1 rule of breakout trading: wait for the CLOSE, not the wick. A wick above resistance that closes below it is a fakeout. A candle body closing above resistance with volume is a breakout.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 2: Trade #2 — The Pullback Entry              */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-trade-pullback"
          title="Trade #2: The Pullback Entry"
          icon={<ArrowDownRight className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A pullback entry is often safer than a breakout entry. Instead of buying when price breaks out, you <strong className="text-slate-900">wait for price to pull back to the broken resistance level</strong> (now acting as support) and enter there. This gives you a tighter stop-loss and better R:R.
            </p>

            {/* Setup criteria */}
            <div className="rounded-xl border border-teal-200 bg-teal-50/40 p-4 sm:p-5">
              <h4 className="mb-3 text-sm font-bold text-teal-900 sm:text-base">Setup Criteria</h4>
              <div className="space-y-2">
                {[
                  'A breakout has already occurred (price is above former resistance)',
                  'Price is pulling back (retracing) toward the breakout level',
                  'The breakout level should now act as support',
                  'A candlestick pattern forms at or near the support level (hammer, bullish engulfing, etc.)',
                  'Volume on the pullback is lower than the breakout volume (healthy sign)',
                  'RSI is between 40-60 (not overbought or oversold)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-100 text-[10px] font-bold text-teal-700">{i + 1}</span>
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution steps */}
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Step-by-Step Execution</h4>
            <StepList
              steps={[
                {
                  number: 1,
                  title: 'Identify the breakout level',
                  description: 'After a confirmed breakout, mark the exact resistance level that was broken. This is now your support zone.',
                },
                {
                  number: 2,
                  title: 'Wait for the pullback',
                  description: 'Be patient. Don\'t FOMO in while price is still moving up. Let it come to you. Watch for price to retrace 38.2% to 61.8% of the breakout move (Fibonacci levels).',
                },
                {
                  number: 3,
                  title: 'Look for confirmation at support',
                  description: 'When price reaches the support zone, look for: a hammer candle, bullish engulfing, or a rejection wick. These confirm that buyers are stepping in.',
                },
                {
                  number: 4,
                  title: 'Enter with a limit order at support',
                  description: 'Set a limit buy order at or just above the support level. This is your precision entry — you\'re buying where you expect the bounce.',
                },
                {
                  number: 5,
                  title: 'Set stop-loss below support',
                  description: 'Place your SL just below the support zone. If support fails, the trade thesis is invalidated. Your risk is small because you entered near support.',
                },
                {
                  number: 6,
                  title: 'Target the previous high or beyond',
                  description: 'Set TP at the recent swing high. Since your entry is tighter, your R:R should be excellent (often 1:3 or better).',
                },
              ]}
            />

            <div className="rounded-lg border border-amber-200 bg-amber-50/60 px-4 py-3 sm:px-5 sm:py-4">
              <div className="flex items-start gap-2">
                <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
                <p className="text-sm font-semibold leading-relaxed text-amber-900 sm:text-base">
                  Danger: Sometimes a pullback doesn&apos;t stop at the old resistance — it keeps going and becomes a full reversal. If price closes below the support zone with volume, get out immediately. Not every breakout retests successfully.
                </p>
              </div>
            </div>

            <KeyTakeaway>
              The pullback entry gives you the best R:R because your stop-loss is tight (just below support). Patience is the key — let the trade come to you. The market rewards patience, not FOMO.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 3: Trade #3 — The Rejection Entry             */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-trade-rejection"
          title="Trade #3: The Rejection Entry"
          icon={<XCircle className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A rejection entry is when price tests a key support or resistance level and <strong className="text-slate-900">gets rejected</strong> — you see a long wick, a hammer, or an engulfing candle that shows the level held. This is one of the highest-probability setups because it shows you the level is respected by the market.
            </p>

            {/* Comparison of the 3 trade types */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <h4 className="mb-3 text-sm font-bold text-slate-900 sm:text-base">Comparing the Three Trade Types</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="py-2 pr-4 text-left font-bold text-slate-900">Trade Type</th>
                      <th className="py-2 pr-4 text-left font-bold text-slate-900">When to Enter</th>
                      <th className="py-2 pr-4 text-left font-bold text-slate-900">Risk Level</th>
                      <th className="py-2 text-left font-bold text-slate-900">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600">
                    <tr className="border-b border-slate-100">
                      <td className="py-2 pr-4 font-semibold text-cyan-700">Breakout</td>
                      <td className="py-2 pr-4">Close above resistance</td>
                      <td className="py-2 pr-4"><span className="text-amber-700">Medium</span></td>
                      <td className="py-2">Strong momentum plays</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-2 pr-4 font-semibold text-teal-700">Pullback</td>
                      <td className="py-2 pr-4">Retest of broken level</td>
                      <td className="py-2 pr-4"><span className="text-green-700">Lower</span></td>
                      <td className="py-2">Best R:R, patient entries</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-slate-700">Rejection</td>
                      <td className="py-2 pr-4">Wick/pattern at key level</td>
                      <td className="py-2 pr-4"><span className="text-green-700">Lower</span></td>
                      <td className="py-2">Range-bound markets</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Execution steps */}
            <StepList
              steps={[
                {
                  number: 1,
                  title: 'Identify the key level',
                  description: 'A well-tested support (for buying) or resistance (for selling). At least 3 previous touches. Draw the level on TradingView.',
                },
                {
                  number: 2,
                  title: 'Wait for price to test the level',
                  description: 'Price approaches your level. Don\'t front-run — wait for the actual test.',
                },
                {
                  number: 3,
                  title: 'Look for the rejection signal',
                  description: 'A long lower wick (hammer) at support, or a bullish engulfing candle. The candle must show that sellers tried to push through but buyers defended the level.',
                },
                {
                  number: 4,
                  title: 'Enter after the signal candle closes',
                  description: 'On MEXC, place a limit buy order near the close of the rejection candle. Alternatively, use a market order if the rejection is strong and fast.',
                },
                {
                  number: 5,
                  title: 'Set SL below the wick low',
                  description: 'Place your stop-loss just below the lowest point of the rejection wick. If price goes below that, the rejection failed.',
                },
                {
                  number: 6,
                  title: 'Target the opposite side of the range',
                  description: 'In a ranging market, target the opposite boundary. In a trending market, target the next S/R level or use a 1:2 R:R minimum.',
                },
              ]}
            />

            <KeyTakeaway>
              Rejection entries work best in ranging markets and at major S/R levels. The key signal is the candlestick — if you see a hammer with a long wick at support, that&apos;s the market telling you &ldquo;buyers are here.&rdquo;
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 4: Post-Trade Review Template                   */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-post-trade-review"
          title="Post-Trade Review Template — What to Analyze After Every Trade"
          icon={<ClipboardList className="h-5 w-5" />}
          variant="default"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              The trade itself is only half the work. The <strong className="text-slate-900">post-trade review</strong> is where you learn and improve. Every professional trader reviews their trades. Beginners don&apos;t — that&apos;s why they keep making the same mistakes.
            </p>

            {/* Review template */}
            <div className="rounded-xl border-2 border-cyan-200 bg-cyan-50/30 p-4 sm:p-5">
              <h4 className="mb-4 text-base font-bold text-cyan-900 sm:text-lg flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Post-Trade Review Template
              </h4>
              <div className="space-y-3">
                {[
                  { category: 'Trade Details', items: ['Date & time of entry/exit', 'Trading pair (e.g., BTC/USDT)', 'Trade direction (long/short)', 'Entry price, Exit price', 'Position size', 'Stop-loss level, Take-profit level'] },
                  { category: 'Pre-Trade Analysis', items: ['What was the setup? (breakout, pullback, rejection)', 'Which checklist items were met?', 'What was the R:R ratio?', 'What was the confluence score?'] },
                  { category: 'Execution Quality', items: ['Did you enter at the planned price?', 'Was there slippage? How much?', 'Did you follow your plan or deviate?', 'Were you emotional during execution?'] },
                  { category: 'Outcome & Reflection', items: ['Result: Win or loss? P&L amount?', 'Did the trade follow your thesis?', 'What did you do well?', 'What would you do differently?', 'Rate your emotional discipline: 1-10'] },
                ].map((section, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-white p-3">
                    <h5 className="mb-2 text-sm font-bold text-slate-900">{section.category}</h5>
                    <ul className="space-y-1">
                      {section.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <AnalogyBox title="Trading Without Review Is Like Practicing Golf Blindfolded">
              You can swing a thousand times, but if you never see where the ball went, you can&apos;t improve your swing. The post-trade review is your &ldquo;video replay&rdquo; — it shows you exactly what you did right and wrong so you can adjust.
            </AnalogyBox>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TOPIC 5: Trade Journal Setup                           */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-trade-journal"
          title="Trade Journal Setup — Your Most Important Tool"
          icon={<BookOpen className="h-5 w-5" />}
          variant="success"
        >
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              A trade journal is not optional — it&apos;s the single most important tool for improving as a trader. Every professional keeps one. It&apos;s the difference between <strong className="text-slate-900">trading deliberately</strong> and <strong className="text-red-700">gambling randomly</strong>.
            </p>

            {/* Journal template */}
            <div className="rounded-xl border-2 border-green-300 bg-green-50/40 p-4 sm:p-5">
              <h4 className="mb-4 text-base font-bold text-green-900 sm:text-lg flex items-center gap-2">
                <PenLine className="h-5 w-5" />
                Trade Journal Template (Copy This)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-slate-200">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      {['Date', 'Pair', 'Dir', 'Entry', 'SL', 'TP', 'Size', 'Exit', 'P&L', 'R:R', 'Setup', 'Emotion', 'Notes'].map(h => (
                        <th key={h} className="px-2 py-2 text-xs font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      {['Jan 15', 'BTC/USDT', 'Long', '$65,000', '$64,500', '$66,500', '$500', '$66,450', '+$145', '1:3', 'Breakout', '7/10', 'Waited for close ✅'].map((cell, i) => (
                        <td key={i} className="px-2 py-2 text-xs text-slate-700">{cell}</td>
                      ))}
                    </tr>
                    <tr className="bg-white border-b border-slate-200">
                      {['Jan 16', 'ETH/USDT', 'Long', '$3,420', '$3,360', '$3,580', '$400', '$3,350', '-$60', '1:2', 'Pullback', '4/10', 'FOMO entered ❌'].map((cell, i) => (
                        <td key={i} className="px-2 py-2 text-xs text-slate-700">{cell}</td>
                      ))}
                    </tr>
                    <tr className="bg-slate-50">
                      {['...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...', '...'].map((cell, i) => (
                        <td key={i} className="px-2 py-2 text-xs text-slate-400">{cell}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Journal tools */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 sm:text-base">Where to Keep Your Journal</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { tool: 'Google Sheets / Excel', desc: 'Free, easy to customize, shareable. Add formulas for win rate, avg P&L, etc.', icon: <BarChart3 className="h-5 w-5" /> },
                  { tool: 'Notion', desc: 'Template-based, visual, great for notes and screenshots alongside trade data.', icon: <FileText className="h-5 w-5" /> },
                  { tool: 'Dedicated Journal App', desc: 'TraderSync, Edgewonk — built for traders with analytics. Most have free tiers.', icon: <PenLine className="h-5 w-5" /> },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-white p-4 text-center">
                    <span className="mb-2 inline-block text-cyan-600">{item.icon}</span>
                    <h5 className="mb-1 text-sm font-bold text-slate-900">{item.tool}</h5>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key metrics to track */}
            <div className="rounded-lg border border-amber-200 bg-amber-50/60 px-4 py-3 sm:px-5 sm:py-4">
              <h5 className="mb-2 text-sm font-bold text-amber-900">5 Key Metrics to Track Weekly</h5>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {[
                  { metric: 'Win Rate', target: '50-60%' },
                  { metric: 'Avg R:R', target: '≥ 1:2' },
                  { metric: 'Max Drawdown', target: '< 10%' },
                  { metric: 'Avg Emotion', target: '≥ 7/10' },
                  { metric: 'Plan Adherence', target: '> 80%' },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-white p-2 text-center">
                    <p className="text-xs font-bold text-slate-900">{item.metric}</p>
                    <p className="text-xs text-cyan-600 font-semibold">{item.target}</p>
                  </div>
                ))}
              </div>
            </div>

            <KeyTakeaway>
              A trade journal turns your mistakes into lessons and your wins into repeatable strategies. Without it, you&apos;re just gambling and hoping. With it, you&apos;re building a track record and a system.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  TRADINGVIEW LAB: Spot Trade Analysis                     */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-tradingview-spot-lab"
          title="TradingView Lab: Spot Trade Analysis"
          icon={<TrendingUp className="h-5 w-5" />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Before placing any spot trade, you need to analyze the chart for the right setup.
            Use the TradingView simulator below to practice analyzing spot trade setups
            using the three trade types you learned: breakout, pullback, and rejection.
          </p>

          <div className="mb-4 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="mb-2 text-sm font-bold text-green-800 sm:text-base">Spot Trade Analysis Instructions</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Identify the current trend direction using EMA 20 and EMA 50 — are they aligned bullish or bearish?
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Draw a Horizontal Line at resistance — is price approaching for a potential breakout?
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Use the Fibonacci tool to identify pullback zones — the 0.382 and 0.618 levels are where pullbacks typically find support
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Turn on RSI — look for readings between 40-60 for pullback entries, or oversold readings for rejection entries
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Enable Volume and compare current volume to recent candles — high volume confirms breakouts, low volume on pullbacks is healthy
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Decide which trade type fits the current setup: breakout, pullback, or rejection — then plan entry, SL, and TP
              </li>
            </ul>
          </div>

          <TradingViewLab />

          <KeyTakeaway>
            Spot trade analysis is about matching the right trade type to the right market condition.
            Breakouts work in momentum markets, pullbacks in trending markets, and rejections in ranging markets.
            Always confirm your analysis with multiple indicators before executing.
          </KeyTakeaway>
        </TopicCard>

        {/* ═══════════════════════════════════════════════════════ */}
        {/*  MEXC TRADING LAB: Live Spot Trading Practice             */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TopicCard
          id="d5-mexc-lab"
          title="MEXC Trading Lab: Live Spot Trading Practice"
          icon={<FlaskConical />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
            Now it&apos;s your turn! Practice executing spot trades using the MEXC simulator below.
            Apply the breakout, pullback, and rejection strategies you learned, and practice
            placing orders with proper risk management.
          </p>

          <div className="mb-4 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="mb-2 text-sm font-bold text-green-800 sm:text-base">Spot Trading Practice Instructions</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Execute a Breakout trade: Place a Buy order when you identify a resistance breakout on the chart
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Execute a Pullback trade: Set a limit Buy order at a support level where price might pull back to
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Execute a Rejection trade: Place a Buy order after spotting a hammer or bullish engulfing pattern at support
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Practice both Market and Limit orders — understand when to use each (fast moves = market, patient entries = limit)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Before each order, calculate: position size (1% risk), stop loss level, take profit level, and risk/reward ratio
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                Record each simulated trade in your journal: date, pair, direction, entry, SL, TP, setup type, and emotional state
              </li>
            </ul>
          </div>

          <MEXCLab />

          <KeyTakeaway>
            Spot trading is the safest way to trade crypto — you own the actual asset and can&apos;t be liquidated.
            Master the three entry types (breakout, pullback, rejection) and always combine them with proper risk management.
            The simulator is your playground — make mistakes here, not with real money.
          </KeyTakeaway>
        </TopicCard>
      </div>
    </section>
  )
}
