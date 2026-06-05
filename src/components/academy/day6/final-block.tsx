'use client'

import React from 'react'
import {
  Flag,
  ClipboardCheck,
  Lightbulb,
  Pencil,
  Award,
  FlaskConical,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { QuizQuestion } from '@/components/academy/quiz-question'
import { DriverCard } from '@/components/academy/driver-card'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { TradingViewLab } from '@/components/academy/tradingview-lab'
import { MEXCLab } from '@/components/academy/mexc-lab'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AppliedLabSimulation } from '@/components/academy/applied-lab-simulation'

export function Day6FinalBlock() {
  return (
    <section id="d6-final" aria-labelledby="d6-final-heading">
      <SectionDivider
        icon={<Flag />}
        title="FINAL BLOCK — HOUR 8: REVIEW, ASSESSMENT & HOMEWORK"
      />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* ══════════════════════════════════════════════════════════════════
            TRADINGVIEW LAB: On-Chain Correlation Analysis
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d6-tradingview-lab"
          title="TradingView Lab: On-Chain Correlation Analysis"
          icon={<FlaskConical />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Apply what you learned about on-chain analysis and confluence using the interactive
            TradingView simulator below. Your mission: correlate on-chain metrics with price action
            to find high-conviction trade setups.
          </p>
          <div className="mb-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="text-sm font-bold text-green-800 mb-2">Practice Instructions — On-Chain Correlation</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
                <span>Enable <strong>EMA 20 &amp; EMA 50</strong> and identify the current trend. Is price in an uptrend (EMA 20 above 50) or downtrend?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
                <span>Turn on <strong>RSI</strong> and check if the market is overbought (&gt;70) or oversold (&lt;30). How would this correlate with on-chain MVRV data?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
                <span>Enable <strong>Volume</strong> and observe volume spikes. Large volume on green candles often coincides with exchange outflows (bullish on-chain signal).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
                <span>Draw a <strong>Trend Line</strong> connecting the lows. If price bounces off this line with rising volume and RSI turning up from oversold, you have a confluence signal matching on-chain bullish data.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">5</span>
                <span>Use <strong>Fibonacci</strong> retracement levels to find potential entry zones. The 0.618 level often aligns with where whales accumulate (on-chain confirmation).</span>
              </li>
            </ol>
          </div>
          <TradingViewLab />
          <KeyTakeaway>
            On-chain data leads price by hours or days. When your chart analysis (EMA trend + RSI levels + volume confirmation)
            aligns with on-chain signals (exchange outflows, MVRV buy zone, whale accumulation), you have a high-conviction
            confluence setup that beats any single indicator.
          </KeyTakeaway>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            MEXC TRADING LAB: Sentiment-Based Entries
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d6-mexc-lab"
          title="MEXC Trading Lab: Sentiment-Based Entries"
          icon={<FlaskConical />}
          variant="success"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Practice using sentiment signals to inform your trading decisions on the MEXC simulator.
            Before placing each order, consider what the Fear &amp; Greed Index, funding rates, and social
            sentiment would tell you about the current market environment.
          </p>
          <div className="mb-5 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
            <h4 className="text-sm font-bold text-green-800 mb-2">Practice Instructions — Sentiment-Based Entries</h4>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">1</span>
                <span>Before placing any order, rate the current market sentiment on a scale of 1–10 (1 = Extreme Fear, 10 = Extreme Greed). Write it down.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">2</span>
                <span>If you rated sentiment below 3 (Extreme Fear), practice placing a <strong>BUY limit order</strong> near a support level — this is the contrarian entry.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">3</span>
                <span>If you rated sentiment above 8 (Extreme Greed), practice placing a <strong>SELL order</strong> or setting a limit sell at resistance — take profits when others are euphoric.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">4</span>
                <span>Check the <strong>order book depth</strong> — are there large buy walls (support) or sell walls (resistance)? Order book imbalance is a micro-sentiment signal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">5</span>
                <span>After each simulated trade, journal: What was the sentiment? What on-chain data would confirm or contradict it? Did you follow the confluence?</span>
              </li>
            </ol>
          </div>
          <MEXCLab />
          <KeyTakeaway>
            Sentiment is contrarian — when the crowd is most fearful, opportunities are greatest.
            But sentiment alone is not a timing tool. Always combine sentiment signals with technical
            levels and on-chain confirmation before executing a trade.
          </KeyTakeaway>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 1: Day 6 Self-Check Quiz (20 Questions)
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d6-quiz"
          title="Day 6 Self-Check Quiz — 20 Questions"
          icon={<ClipboardCheck />}
          variant="default"
        >
          <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
            Test your understanding of everything we covered today. Click each question to reveal
            the answer. Score yourself honestly!
          </p>

          <div className="space-y-3">
            <QuizQuestion number={1} question="What are the 4 types of crypto trading signals?">
              <p>
                <strong>Technical signals</strong> (based on chart patterns and indicators),{' '}
                <strong>On-chain signals</strong> (based on blockchain data like exchange flows and MVRV),{' '}
                <strong>Sentiment signals</strong> (based on market emotion and social data), and{' '}
                <strong>Confluence signals</strong> (when multiple signal types align together).
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={2}
              question="Which type of signal is reactive (shows what's happening)?"
            >
              <p>
                <strong>Technical signals</strong> are reactive — they show what has already happened
                on the chart (price movements, indicator readings, pattern formations). They confirm
                trends after they begin, rather than predicting them in advance.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={3}
              question="Which type of signal is predictive (shows what's about to happen)?"
            >
              <p>
                <strong>On-chain signals</strong> are predictive — they often lead price by hours or
                days. Metrics like exchange inflows, MVRV, and whale movements show what market
                participants are preparing to do before the price reflects it.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={4}
              question="Name 3 red flags when evaluating a signal provider."
            >
              <p>
                Any 3 of: No verifiable track record; Promises guaranteed returns; No explanation of
                methodology; No risk management mentioned; Uses high-pressure tactics or FOMO;
                Anonymous or unverified identity; Only shows wins, never losses; Asks for payment
                upfront without a free trial; Claims insider information; No stop-loss ever provided
                with signals.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={5}
              question="Name 3 green flags when evaluating a signal provider."
            >
              <p>
                Any 3 of: Verifiable track record with wins AND losses shown; Clear methodology
                explained; Risk management included (stop-loss, position sizing); Realistic
                expectations set; Free trial or sample signals available; Transparent about
                performance; Active community with real discussion; Provides context/reasoning for
                each trade; Registered or known identity; Consistent approach (not chasing every
                hype).
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={6}
              question="What score range on the signal evaluation framework indicates 'high quality'?"
            >
              <p>
                A score of <strong>75–100</strong> on the signal evaluation framework indicates a
                high-quality signal provider. Scores of 50–74 are moderate quality (use with
                caution), and scores below 50 suggest the provider should be avoided.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={7}
              question="Define exchange inflow and explain why it's generally bearish."
            >
              <p>
                <strong>Exchange inflow</strong> is the amount of crypto moving INTO exchange wallets
                from external wallets. It&apos;s generally bearish because when large amounts of
                crypto flow onto exchanges, it typically means holders are preparing to sell. More
                supply on exchanges = more selling pressure = price tends to decline.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={8}
              question="Define exchange outflow and explain why it's generally bullish."
            >
              <p>
                <strong>Exchange outflow</strong> is the amount of crypto moving OUT of exchange
                wallets to external wallets (cold storage, DeFi, etc.). It&apos;s generally bullish
                because it means holders are moving crypto off exchanges to hold long-term, reducing
                available selling supply. Less supply on exchanges = less selling pressure = price
                tends to rise.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={9}
              question="What does MVRV measure? What is the formula?"
            >
              <p>
                <strong>MVRV</strong> (Market Value to Realized Value) measures whether the market
                is overvalued or undervalued by comparing the current market cap to the cap based on
                what holders actually paid. Formula:{' '}
                <strong>MVRV = Market Cap ÷ Realized Cap</strong>. When MVRV is high, holders are
                in profit and likely to sell. When MVRV is low, holders are at a loss and less
                likely to sell.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={10}
              question="What MVRV range is historically a 'buy zone'?"
            >
              <p>
                MVRV below <strong>1.0</strong> is historically a buy zone. When MVRV drops below 1,
                it means the average holder is underwater (market cap is below realized cap), which
                has historically been one of the best times to accumulate Bitcoin. Conversely, MVRV
                above 3.5–4.0 has historically signaled market tops.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={11}
              question="What does NUPL measure? What does NUPL above 0.75 indicate?"
            >
              <p>
                <strong>NUPL</strong> (Net Unrealized Profit/Loss) measures the overall profit or
                loss of the market relative to the total market cap. Formula:{' '}
                <strong>NUPL = (Market Cap − Realized Cap) ÷ Market Cap</strong>. NUPL above 0.75
                indicates <strong>euphoria</strong> — the market is in extreme profit territory, and
                historically this has been a strong sell signal as it precedes major corrections.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={12}
              question="What does SOPR below 1.0 mean?"
            >
              <p>
                <strong>SOPR</strong> (Spent Output Profit Ratio) below 1.0 means holders are
                selling at a loss — they paid more for their coins than they&apos;re receiving when
                selling. Historically, SOPR below 1.0 during a downtrend signals capitulation and can
                mark a bottom, as weak hands are flushed out. During an uptrend, it may indicate a
                brief reset before continuation.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={13}
              question="Name 3 ways to track whale movements."
            >
              <p>
                Any 3 of:{' '}
                <strong>Whale Alert</strong> (Twitter/X bot and website that tracks large
                transactions in real-time),{' '}
                <strong>CryptoQuant</strong> (on-chain analytics platform showing exchange flows and
                whale activity),{' '}
                <strong>Glassnode</strong> (on-chain analytics with whale-specific metrics),{' '}
                <strong>Blockchain explorers</strong> (manually monitoring known whale wallet
                addresses on Etherscan, Blockchain.com, etc.),{' '}
                <strong>Wallet tracking tools</strong> (Arkham Intelligence, Nansen) that label and
                monitor large holder wallets.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={14}
              question="What does an increasing hash rate indicate about miner confidence?"
            >
              <p>
                An increasing hash rate indicates that miners are <strong>confident and investing
                more resources</strong> into the network. They are willing to spend more on
                electricity and hardware because they expect the network to remain profitable and
                secure long-term. A rising hash rate is a <strong>bullish long-term signal</strong>
                — it shows that the professionals closest to the network infrastructure are betting
                on its success.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={15}
              question="What are the 6 components of the Fear & Greed Index?"
            >
              <p>
                The 6 components are:{' '}
                <strong>1) Market Volatility</strong> (current volatility vs. average),{' '}
                <strong>2) Market Momentum/Volume</strong> (current volume vs. average),{' '}
                <strong>3) Social Media</strong> (sentiment analysis of crypto-related posts),{' '}
                <strong>4) Surveys</strong> (weekly investor sentiment polls),{' '}
                <strong>5) Bitcoin Dominance</strong> (whether capital is flowing into BTC or
                altcoins), and{' '}
                <strong>6) Google Trends</strong> (search volume for Bitcoin-related terms).
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={16}
              question="What Fear & Greed range is a contrarian buy signal?"
            >
              <p>
                The <strong>0–24 range</strong> (&quot;Extreme Fear&quot;) is the contrarian buy
                signal. When the index shows extreme fear, the crowd is panicking and prices are
                typically depressed — historically one of the best times to buy. Conversely, the
                75–100 range (&quot;Extreme Greed&quot;) is a contrarian sell signal.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={17}
              question="What does a positive funding rate mean? Who pays whom?"
            >
              <p>
                A <strong>positive funding rate</strong> means longs (buyers) are paying shorts
                (sellers). This happens when there are more traders holding long positions than short
                positions, creating an imbalance. The funding rate is a mechanism to keep the
                perpetual futures price close to the spot price. A persistently high positive funding
                rate indicates the market is overcrowded on the long side and may be due for a
                correction.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={18}
              question="If you hold a $5,000 long position at 0.05% funding rate, how much do you pay per day?"
            >
              <p>
                <strong>$7.50 per day</strong>. Calculation: $5,000 × 0.05% = $2.50 per funding
                interval. Funding is paid 3 times per day (every 8 hours), so $2.50 × 3 = $7.50
                per day. Over a week, that&apos;s $52.50 — a significant cost that can eat into
                your profits or compound your losses.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={19}
              question="In the Three-Layer Analysis Model, what does on-chain analysis tell you?"
            >
              <p>
                On-chain analysis tells you the <strong>underlying reality beneath the price</strong>.
                While technical analysis shows what price has done and sentiment shows how people
                feel, on-chain analysis reveals what market participants are actually{' '}
                <strong>doing with their money</strong> — are they moving coins to exchanges to sell?
                Are whales accumulating? Are miners holding or capitulating? Is the overall market in
                profit or at a loss? It provides the fundamental data layer that validates or
                contradicts the other two layers.
              </p>
            </QuizQuestion>

            <QuizQuestion
              number={20}
              question="Describe a STRONG BUY confluence setup (all three layers confirming)."
            >
              <p>
                A STRONG BUY confluence occurs when all three analysis layers align bullishly:{' '}
                <strong>Technical layer</strong> — price is at key support, RSI is oversold, bullish
                chart pattern forming, trend is up on higher timeframes.{' '}
                <strong>On-chain layer</strong> — exchange outflows increasing (coins moving off
                exchanges), MVRV is in the buy zone (below 1.0), NUPL is in fear/capitulation
                territory, SOPR is resetting below 1, whales are accumulating.{' '}
                <strong>Sentiment layer</strong> — Fear &amp; Greed Index is in Extreme Fear (0–24),
                funding rate is negative (shorts paying longs — a contrarian signal), social media is
                bearish with panic. When all three layers confirm the same direction, you have a
                high-conviction trade setup with the odds strongly in your favor.
              </p>
            </QuizQuestion>
          </div>

          {/* Pass Mark Banner */}
          <div className="mt-6 rounded-xl border-2 border-violet-400 bg-gradient-to-r from-violet-50 to-purple-50 p-5 text-center shadow-sm">
            <Award className="mx-auto mb-2 h-8 w-8 text-violet-600" />
            <p className="text-lg font-bold text-violet-800 sm:text-xl">Pass Mark: 16 / 20</p>
            <p className="mt-1 text-sm text-slate-600">
              You need at least 16 correct answers before moving to Day 7. Review any topics you
              missed!
            </p>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 2: Key Takeaways from Day 6
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d6-takeaways"
          title="Key Takeaways from Day 6"
          icon={<Lightbulb />}
          variant="highlight"
        >
          <div className="space-y-4">
            <DriverCard number={1} title="Not all signals are equal.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Understand the four types (technical, on-chain, sentiment, confluence) and evaluate
                every signal with the scoring framework before acting. A signal without verification
                is just noise.
              </p>
            </DriverCard>

            <DriverCard number={2} title="On-chain data is your x-ray vision.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Exchange flows, MVRV, NUPL, and SOPR show what&apos;s happening beneath the surface.
                This data often leads price by hours or days, giving you a critical edge over
                traders who only read charts.
              </p>
            </DriverCard>

            <DriverCard number={3} title="Whales and miners move first.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Track their behavior using Whale Alert, CryptoQuant, and blockchain explorers. Their
                actions signal intent before execution — when a whale moves $100M to an exchange,
                the sell hasn&apos;t happened yet, but it&apos;s about to.
              </p>
            </DriverCard>

            <DriverCard number={4} title="Sentiment is contrarian.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                When the crowd is most fearful, opportunities are greatest. When the crowd is most
                greedy, danger is highest. But sentiment is context, not a timing tool — it tells
                you the environment, not the exact moment to act.
              </p>
            </DriverCard>

            <DriverCard number={5} title="Confluence is king.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                No single indicator or data point should drive a trade. When technical, on-chain, AND
                sentiment all agree, you have a high-conviction setup. When they conflict, reduce
                risk or wait. Confluence transforms uncertainty into confidence.
              </p>
            </DriverCard>

            <DriverCard number={6} title="The funding rate is a real cost.">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Always check the funding rate before opening a futures position. At extreme levels,
                funding can consume a significant portion of your potential gains. A $5,000 long at
                0.05% costs $7.50/day — that&apos;s $52.50/week just to hold the position.
              </p>
            </DriverCard>
          </div>
        </TopicCard>

        {/* ══════════════════════════════════════════════════════════════════
            TOPIC 3: Day 6 Homework
        ══════════════════════════════════════════════════════════════════ */}
        <TopicCard
          id="d6-homework"
          title="Day 6 Homework"
          icon={<Pencil />}
          variant="default"
        >
          <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
            Complete all tasks below before starting Day 7. Check each one off as you go!
          </p>

          <div className="rounded-xl border-2 border-violet-300 bg-violet-50/40 p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-2">
              <Pencil className="h-5 w-5 text-violet-600" />
              <h4 className="text-base font-bold text-violet-800 sm:text-lg">
                HOMEWORK CHECKLIST
              </h4>
            </div>

            <div className="space-y-2">
              <ChecklistItem>
                <span>
                  <strong>Task 1:</strong> Set up free accounts on{' '}
                  <strong>Glassnode</strong> and <strong>CryptoQuant</strong>. Bookmark the key
                  metrics: MVRV, NUPL, SOPR, exchange net flow, miner reserves.
                </span>
              </ChecklistItem>

              <ChecklistItem>
                <span>
                  <strong>Task 2:</strong> Track BTC exchange flows for <strong>3 consecutive
                  days</strong>. Record the net flow each day and note any correlation with BTC price
                  movement. Write a 1-paragraph summary of what you observed.
                </span>
              </ChecklistItem>

              <ChecklistItem>
                <span>
                  <strong>Task 3:</strong> Look up the current values of{' '}
                  <strong>MVRV, NUPL, and SOPR</strong> for BTC. Based on these readings alone, what
                  phase of the market cycle are we in? Write your analysis (minimum 200 words).
                </span>
              </ChecklistItem>

              <ChecklistItem>
                <span>
                  <strong>Task 4:</strong> Find one instance of a large whale transaction on{' '}
                  <strong>Whale Alert</strong> or a blockchain explorer that preceded a notable price
                  move. Screenshot the alert, note the time, and compare it to the price chart. How
                  much lead time did the on-chain data give before the chart reacted?
                </span>
              </ChecklistItem>

              <ChecklistItem>
                <span>
                  <strong>Task 5:</strong> Create one complete confluence trade analysis for{' '}
                  <strong>BTC/USDT</strong> right now:
                  <ul className="mt-2 ml-4 list-disc space-y-1">
                    <li>
                      <strong>Technical:</strong> Apply the 7-Point Framework. Score it out of 7.
                    </li>
                    <li>
                      <strong>On-Chain:</strong> Check exchange flows, MVRV, NUPL, SOPR. Bullish or
                      bearish?
                    </li>
                    <li>
                      <strong>Sentiment:</strong> Check Fear &amp; Greed Index, funding rate, social
                      mood.
                    </li>
                    <li>
                      <strong>Conclusion:</strong> What does the confluence matrix say? Strong buy,
                      buy, caution, neutral, or avoid?
                    </li>
                  </ul>
                </span>
              </ChecklistItem>

              <ChecklistItem>
                <span>
                  <strong>Task 6:</strong> Evaluate <strong>2 signal providers</strong> (Telegram
                  groups, Discord servers, or Twitter/X accounts) using the scoring framework from
                  this morning. Score each out of 100 and write a 1-paragraph verdict for each.
                </span>
              </ChecklistItem>

              <ChecklistItem>
                <span>
                  <strong>Task 7:</strong> Write: &ldquo;The most valuable on-chain metric I learned
                  today is ___ because ___.&rdquo;
                </span>
              </ChecklistItem>
            </div>
          </div>
        </TopicCard>

        <AppliedLabSimulation
          id="d6-lab-tradingview-sentiment"
          title="LAB 9: Sentiment & On-Chain Confirmation Analysis"
          subtitle="Use the TradingView simulator to practice confirming trade setups with sentiment and indicator confluence"
          dayNumber={6}
          sessionName="Final Block"
          labType="tradingview"
          learningObjectives={[
            'Use multiple indicators to confirm a trade bias',
            'Understand how sentiment analysis complements technical analysis',
            'Practice the confluence method: structure + S/R + indicator + sentiment',
            'Recognize when NOT to trade due to conflicting signals',
          ]}
          tasks={[
            { id: 'd6-l1-t1', instruction: 'Open the TradingView simulator. Determine market structure first: Is the trend up (HH+HL) or down (LH+LL)?', hint: 'Always start with structure — it is the foundation of all analysis' },
            { id: 'd6-l1-t2', instruction: 'Enable EMA 20, EMA 50, and EMA 200. Check the EMA alignment: Are they stacked bullish (20 > 50 > 200) or bearish (20 < 50 < 200)?', hint: 'When all three EMAs are stacked in order, it confirms the trend direction strongly' },
            { id: 'd6-l1-t3', instruction: 'Enable RSI. Check if RSI is at an extreme (overbought > 70 or oversold < 30). What does this tell you about market sentiment?', hint: 'RSI overbought in an uptrend may mean a pullback is due. RSI oversold in an uptrend may be a buying opportunity.' },
            { id: 'd6-l1-t4', instruction: 'Enable Volume bars. Compare volume on up-moves vs down-moves. Is volume confirming the trend?', hint: 'In a healthy uptrend, volume should be higher on green candles than red candles. This confirms genuine buying interest.' },
            { id: 'd6-l1-t5', instruction: 'Apply the Confluence Score: Count how many factors agree (Structure, EMAs, RSI, Volume, S/R level). 5/5 = strongest setup, 3/5 = acceptable, <3 = stay out', hint: 'The confluence method requires at least 3 factors aligned before entering a trade. Fewer than 3 means the setup is too weak.' },
            { id: 'd6-l1-t6', instruction: 'Based on your confluence analysis, would you enter a trade right now? If yes, what direction? If no, why not?', hint: 'If structure is bullish, EMAs are stacked, RSI is neutral, and volume confirms → Buy. If signals conflict → Stay out and wait.' },
          ]}
          selfAssessment={[
            {
              question: 'What is the "Confluence Method"?',
              options: [
                'Using only one indicator for all decisions',
                'Requiring multiple analysis factors to align before entering a trade',
                'Following social media sentiment blindly',
                'Trading based on gut feeling',
              ],
              correctIndex: 1,
              explanation: 'The Confluence Method requires multiple technical (and optionally sentiment) factors to align at the same time. When structure, EMAs, RSI, volume, and S/R all point in the same direction, the probability of success is much higher.',
            },
            {
              question: 'When should you NOT trade?',
              options: [
                'When the market is trending strongly',
                'When multiple factors align',
                'When signals conflict and confluence is below 3 factors',
                'When volume is high',
              ],
              correctIndex: 2,
              explanation: 'When your confluence score is below 3 (e.g., structure says bullish but EMAs and RSI say bearish), the signals are conflicting. This means the market is undecided, and the probability of any trade working is low. Stay out and wait for clarity.',
            },
          ]}
          expectedOutcomes={[
            'Ability to use the Confluence Method for trade confirmation',
            'Understanding of how multiple indicators work together',
            'Recognition of when signals conflict and you should stay out',
            'Skill in scoring trade setups with a confluence checklist',
          ]}
        />
      </div>
    </section>
  )
}
