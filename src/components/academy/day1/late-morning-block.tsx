'use client'

import React from 'react'
import {
  TrendingUp,
  TrendingDown,
  Scale,
  Heart,
  Newspaper,
  Fish,
  PieChart,
  Coins,
  Globe,
  Clock,
  RotateCcw,
  Zap,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Target,
  DollarSign,
  Activity,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { DriverCard } from '@/components/academy/driver-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'

/* ─────────────────────── TOPIC 1: The 8 Drivers ─────────────────────── */

function DriversOfPrice() {
  return (
    <TopicCard
      id="why-prices-move"
      title="Why Do Crypto Prices Move? — The 8 Drivers"
      icon={<Scale />}
      variant="highlight"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        Crypto prices aren&apos;t random. Eight major forces drive every price move.
        Understanding these drivers is the foundation of making informed trading
        decisions instead of guessing.
      </p>

      <div className="flex flex-col gap-4">
        {/* Driver 1 */}
        <DriverCard number={1} title="SUPPLY AND DEMAND">
          <p className="mb-2">
            The most fundamental driver. When more people want to buy than sell →{' '}
            <span className="font-semibold text-green-600">price goes up</span>.
            When more people want to sell than buy →{' '}
            <span className="font-semibold text-red-600">price goes down</span>.
          </p>
          <p>
            Bitcoin&apos;s fixed supply (21 million) means{' '}
            <span className="font-semibold text-amber-700">demand is the main variable</span>.
            When demand increases (more buyers), price must rise because supply
            cannot increase.
          </p>
        </DriverCard>

        {/* Driver 2 */}
        <DriverCard number={2} title="MARKET SENTIMENT (Fear vs. Greed)">
          <p className="mb-2">
            Crypto is driven by emotion more than most markets because the
            participant base is younger, less institutional, and more reactive.
          </p>
          <p className="mb-2">
            The <span className="font-semibold text-amber-700">Fear &amp; Greed Index</span>{' '}
            (search &ldquo;crypto fear and greed index&rdquo;) measures sentiment on a
            0–100 scale.{' '}
            <span className="font-semibold text-red-600">0 = extreme fear</span> (potential
            buying opportunity).{' '}
            <span className="font-semibold text-green-600">100 = extreme greed</span>{' '}
            (potential selling opportunity).
          </p>
          <div className="mt-2 rounded-lg border border-amber-200 bg-amber-50 p-3">
            <p className="text-sm font-medium text-amber-800">
              🔄 Contrarian insight: The best time to buy is often when everyone
              is fearful. The best time to take profit is when everyone is greedy.
            </p>
          </div>
        </DriverCard>

        {/* Driver 3 */}
        <DriverCard number={3} title="NEWS AND EVENTS">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-amber-500">•</span>
              <span>
                <span className="font-semibold text-slate-800">Regulatory news</span>{' '}
                (government bans or approvals) →{' '}
                <span className="font-semibold text-red-600">major price impact</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-green-500">•</span>
              <span>
                <span className="font-semibold text-slate-800">Institutional adoption</span>{' '}
                (a company buying Bitcoin, a country making it legal tender) →{' '}
                <span className="font-semibold text-green-600">bullish</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-red-500">•</span>
              <span>
                <span className="font-semibold text-slate-800">Exchange hacks or collapses</span>{' '}
                (FTX in 2022) →{' '}
                <span className="font-semibold text-red-600">bearish</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-amber-500">•</span>
              <span>
                <span className="font-semibold text-slate-800">Protocol upgrades</span>{' '}
                (Ethereum merge, Bitcoin halving) → can be{' '}
                <span className="font-semibold text-green-600">bullish</span> or{' '}
                <span className="font-semibold text-red-600">bearish</span>{' '}
                depending on perception
              </span>
            </li>
          </ul>
        </DriverCard>

        {/* Driver 4 */}
        <DriverCard number={4} title="WHALE ACTIVITY">
          <p className="mb-2">
            <span className="font-semibold text-amber-700">Whales</span> (large
            holders) can move markets by buying or selling huge amounts.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <TrendingDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
              <span>
                When a whale transfers thousands of BTC to an exchange, it often
                signals intention to sell →{' '}
                <span className="font-semibold text-red-600">bearish</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                When a whale withdraws from an exchange to cold storage, it
                signals holding →{' '}
                <span className="font-semibold text-green-600">bullish</span>
              </span>
            </li>
          </ul>
          <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Tools to track:</span>{' '}
              Whale Alert on Twitter, blockchain explorers like blockchain.com
            </p>
          </div>
        </DriverCard>

        {/* Driver 5 */}
        <DriverCard number={5} title="BITCOIN DOMINANCE">
          <p className="mb-2">
            <span className="font-semibold text-amber-700">Bitcoin Dominance</span> ={' '}
            BTC&apos;s market cap ÷ Total crypto market cap
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
              <span>
                When BTC dominance is <strong>rising</strong>: Money is flowing{' '}
                <span className="font-semibold text-green-600">INTO Bitcoin</span>{' '}
                from altcoins. BTC is leading. Altcoins may underperform.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
              <span>
                When BTC dominance is <strong>falling</strong>: Money is flowing{' '}
                <span className="font-semibold text-green-600">FROM Bitcoin into altcoins</span>.
                &ldquo;Alt season&rdquo; may be starting.
              </span>
            </li>
          </ul>
          <p className="mt-3 text-sm text-slate-600">
            Understanding this dynamic is crucial for deciding whether to trade
            BTC or altcoins at any given time.
          </p>
        </DriverCard>

        {/* Driver 6 */}
        <DriverCard number={6} title="TOKENOMICS (Supply Mechanics)">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <TrendingDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
              <span>
                <span className="font-semibold text-slate-800">Inflation rate:</span>{' '}
                How many new tokens are created per year? High inflation ={' '}
                <span className="font-semibold text-red-600">bearish</span> (dilutes value)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <span className="font-semibold text-slate-800">Token burns:</span>{' '}
                Some projects periodically &ldquo;burn&rdquo; (destroy) tokens, reducing
                supply. This can be{' '}
                <span className="font-semibold text-green-600">bullish</span>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
              <span>
                <span className="font-semibold text-slate-800">Token unlocks:</span>{' '}
                Many projects have tokens that are &ldquo;locked&rdquo; and gradually unlock
                over time. Large unlocks increase circulating supply → can be{' '}
                <span className="font-semibold text-red-600">bearish</span>.{' '}
                Check tokenunlocks.app.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>
                <span className="font-semibold text-slate-800">Staking:</span>{' '}
                When tokens are locked for staking, they&apos;re removed from
                circulating supply → can be{' '}
                <span className="font-semibold text-green-600">bullish</span>
              </span>
            </li>
          </ul>
        </DriverCard>

        {/* Driver 7 */}
        <DriverCard number={7} title="MACROECONOMIC FACTORS">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <DollarSign className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
              <span>
                <span className="font-semibold text-slate-800">Interest rates:</span>{' '}
                When central banks raise rates, risky assets (including crypto) tend
                to{' '}
                <span className="font-semibold text-red-600">fall</span>. When rates
                are low, crypto tends to{' '}
                <span className="font-semibold text-green-600">rise</span>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Activity className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
              <span>
                <span className="font-semibold text-slate-800">Stock market correlation:</span>{' '}
                Crypto increasingly correlates with tech stocks (especially Nasdaq).
                When Nasdaq drops, BTC often drops too.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <TrendingDown className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
              <span>
                <span className="font-semibold text-slate-800">Dollar strength:</span>{' '}
                A strong US dollar is often{' '}
                <span className="font-semibold text-red-600">bearish</span> for
                crypto. A weak dollar is often{' '}
                <span className="font-semibold text-green-600">bullish</span>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Globe className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
              <span>
                <span className="font-semibold text-slate-800">Inflation data:</span>{' '}
                Higher-than-expected inflation can be{' '}
                <span className="font-semibold text-green-600">bullish</span> for
                Bitcoin (seen as an inflation hedge) or{' '}
                <span className="font-semibold text-red-600">bearish</span> (if it
                means rate hikes are coming).
              </span>
            </li>
          </ul>
        </DriverCard>

        {/* Driver 8 */}
        <DriverCard number={8} title="MARKET CYCLES">
          <p className="mb-2">
            Crypto tends to move in{' '}
            <span className="font-semibold text-amber-700">4-year cycles</span>,
            closely tied to Bitcoin&apos;s &ldquo;halving&rdquo; event (every ~4 years, the
            amount of new Bitcoin created per block is cut in half).
          </p>
          <div className="mb-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
            <p className="text-sm font-medium text-slate-800">Historical pattern:</p>
            <p className="mt-1 text-sm text-slate-600">
              Halving → Supply shock → Price rises → Media attention → More
              buyers → Bubble → Crash → Accumulation → Next halving → Repeat
            </p>
          </div>
          <p className="mb-2">
            The most recent halving was in <strong>April 2024</strong>.
            Historically, the year after a halving has been the most{' '}
            <span className="font-semibold text-green-600">bullish</span> part of
            the cycle.
          </p>
          <KeyTakeaway>
            Understanding where you are in the market cycle helps you set
            realistic expectations.
          </KeyTakeaway>
        </DriverCard>
      </div>
    </TopicCard>
  )
}

/* ─────────────── TOPIC 2: The Crypto Market Cycle ─────────────── */

function MarketCycle() {
  const phases = [
    {
      label: 'ACCUMULATION',
      color: 'bg-green-500',
      borderColor: 'border-green-500',
      textColor: 'text-green-700',
      bgColor: 'bg-green-50',
      position: 'top',
      description:
        'After a crash, prices are low, sentiment is terrible, media declares crypto "dead." Smart money quietly buys.',
      strategy: 'Buy and hold. Don\'t trade much.',
      strategyIcon: <Target className="h-4 w-4" />,
    },
    {
      label: 'MARKUP',
      subtitle: '(Bull Run)',
      color: 'bg-emerald-500',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      position: 'right',
      description:
        'Prices start rising. Optimism returns. More buyers enter. Media starts covering crypto again. FOMO kicks in.',
      strategy: 'Ride the trend. Take profits on the way up.',
      strategyIcon: <TrendingUp className="h-4 w-4" />,
    },
    {
      label: 'DISTRIBUTION',
      color: 'bg-amber-500',
      borderColor: 'border-amber-500',
      textColor: 'text-amber-700',
      bgColor: 'bg-amber-50',
      position: 'bottom',
      description:
        'Prices peak. Smart money sells to eager new buyers. Volume is high but price stops going up. Sentiment is euphoric.',
      strategy: 'Take profits aggressively. Don\'t FOMO into new positions.',
      strategyIcon: <AlertTriangle className="h-4 w-4" />,
    },
    {
      label: 'MARKDOWN',
      subtitle: '(Bear Market)',
      color: 'bg-red-500',
      borderColor: 'border-red-500',
      textColor: 'text-red-700',
      bgColor: 'bg-red-50',
      position: 'left',
      description:
        'Prices start falling. Panic selling. Capitulation. Media declares crypto "dead" again. Cycle restarts at Accumulation.',
      strategy: 'Stay in cash (USDT). Don\'t try to catch falling knives.',
      strategyIcon: <ShieldCheck className="h-4 w-4" />,
    },
  ]

  return (
    <TopicCard
      id="market-cycle"
      title="The Crypto Market Cycle — Understanding Where We Are"
      icon={<RotateCcw />}
      variant="default"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
        Crypto markets move in a repeating cycle of four phases. Recognizing
        which phase we&apos;re in is one of the most valuable skills a trader can
        develop.
      </p>

      {/* ── Cycle Diagram ── */}
      <div className="mx-auto mb-8 flex w-full max-w-md flex-col items-center">
        {/* Top: Accumulation */}
        <div className="mb-2 flex w-full justify-center">
          <div className="flex flex-col items-center">
            <div
              className={`flex h-20 w-52 items-center justify-center rounded-xl border-2 ${phases[0].borderColor} ${phases[0].bgColor} sm:h-24 sm:w-60`}
            >
              <div className="text-center">
                <p className={`text-sm font-bold ${phases[0].textColor} sm:text-base`}>
                  {phases[0].label}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">↓ Low prices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow down-right */}
        <div className="flex w-full items-start justify-between px-4 sm:px-8">
          {/* Left: Markdown */}
          <div className="flex flex-col items-center">
            <div
              className={`flex h-20 w-32 items-center justify-center rounded-xl border-2 ${phases[3].borderColor} ${phases[3].bgColor} sm:h-24 sm:w-40`}
            >
              <div className="text-center">
                <p className={`text-xs font-bold ${phases[3].textColor} sm:text-sm`}>
                  {phases[3].label}
                </p>
                {phases[3].subtitle && (
                  <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">
                    {phases[3].subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Center: cycle arrows */}
          <div className="flex flex-col items-center justify-center pt-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-slate-300 sm:h-20 sm:w-20">
              <RotateCcw className="h-6 w-6 text-slate-400 sm:h-8 sm:w-8" />
            </div>
          </div>

          {/* Right: Markup */}
          <div className="flex flex-col items-center">
            <div
              className={`flex h-20 w-32 items-center justify-center rounded-xl border-2 ${phases[1].borderColor} ${phases[1].bgColor} sm:h-24 sm:w-40`}
            >
              <div className="text-center">
                <p className={`text-xs font-bold ${phases[1].textColor} sm:text-sm`}>
                  {phases[1].label}
                </p>
                {phases[1].subtitle && (
                  <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">
                    {phases[1].subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Arrow up-left */}
        <div className="mt-2 flex w-full justify-center">
          <div className="flex flex-col items-center">
            <div
              className={`flex h-20 w-52 items-center justify-center rounded-xl border-2 ${phases[2].borderColor} ${phases[2].bgColor} sm:h-24 sm:w-60`}
            >
              <div className="text-center">
                <p className={`text-sm font-bold ${phases[2].textColor} sm:text-base`}>
                  {phases[2].label}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">↑ Peak prices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Directional flow labels */}
        <div className="mt-4 flex w-full items-center justify-center gap-2 text-xs text-slate-400 sm:text-sm">
          <span>Accumulation</span>
          <ArrowRight className="h-3 w-3" />
          <span>Markup</span>
          <ArrowRight className="h-3 w-3" />
          <span>Distribution</span>
          <ArrowRight className="h-3 w-3" />
          <span>Markdown</span>
          <ArrowRight className="h-3 w-3" />
          <span>↺</span>
        </div>
      </div>

      {/* ── Phase descriptions ── */}
      <div className="mb-6 space-y-3">
        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Phase Descriptions
        </h4>
        {phases.map((phase) => (
          <div
            key={phase.label}
            className={`rounded-lg border-l-4 ${phase.borderColor} ${phase.bgColor} p-3 sm:p-4`}
          >
            <p className={`text-sm font-bold ${phase.textColor} sm:text-base`}>
              {phase.label}
              {phase.subtitle && (
                <span className="font-normal text-slate-500">
                  {' '}
                  {phase.subtitle}
                </span>
              )}
            </p>
            <p className="mt-1 text-sm text-slate-600">{phase.description}</p>
          </div>
        ))}
      </div>

      {/* ── Trading strategies per phase ── */}
      <div className="mb-6 space-y-3">
        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Trading Strategy by Phase
        </h4>
        <div className="grid gap-3 sm:grid-cols-2">
          {phases.map((phase) => (
            <div
              key={`strategy-${phase.label}`}
              className={`flex items-start gap-3 rounded-lg border ${phase.borderColor}/30 ${phase.bgColor} p-3 sm:p-4`}
            >
              <span className={`mt-0.5 flex-shrink-0 ${phase.textColor}`}>
                {phase.strategyIcon}
              </span>
              <div>
                <p className={`text-sm font-bold ${phase.textColor}`}>
                  {phase.label}
                  {phase.subtitle && (
                    <span className="font-normal text-slate-500">
                      {' '}
                      {phase.subtitle}
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-sm text-slate-600">{phase.strategy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <KeyTakeaway>
        Most beginners enter at Distribution (because that&apos;s when their
        friends tell them about crypto) and panic sell at Markdown.
        Understanding cycles prevents this.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────── TOPIC 3: Bitcoin Halving ─────────────── */

function BitcoinHalving() {
  const halvingHeaders = ['Year', 'Mining Reward Change', 'Price ~1 Year Later']
  const halvingRows = [
    ['2012', '50 → 25 BTC', '≈ 8,000% increase'],
    ['2016', '25 → 12.5 BTC', '≈ 300% increase'],
    ['2020', '12.5 → 6.25 BTC', '≈ 500% increase'],
    ['2024', '6.25 → 3.125 BTC', 'Most recent halving'],
  ]

  return (
    <TopicCard
      id="bitcoin-halving"
      title="Bitcoin Halving — The Event That Drives the Cycle"
      icon={<Zap />}
      variant="highlight"
    >
      <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4">
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
          <div>
            <p className="text-sm font-bold text-amber-800 sm:text-base">
              What is the Halving?
            </p>
            <p className="mt-1 text-sm text-amber-900 sm:text-base">
              Every ~4 years (every 210,000 blocks), the reward for mining
              Bitcoin is <span className="font-bold">cut in half</span>. This
              reduces the rate at which new Bitcoin enters circulation, creating
              a supply shock.
            </p>
          </div>
        </div>
      </div>

      {/* Halving history table */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-700 sm:text-base">
          Halving History
        </h4>
        <ComparisonTable
          headers={halvingHeaders}
          rows={halvingRows}
          highlightColumn={2}
        />
      </div>

      {/* Why it matters */}
      <div className="mb-4 space-y-3">
        <div className="rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4">
          <div className="flex items-start gap-3">
            <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <div>
              <p className="text-sm font-bold text-green-800">Why It Matters</p>
              <p className="mt-1 text-sm text-green-900">
                Halving reduces the new supply of Bitcoin hitting the market. If
                demand stays the same but supply decreases,{' '}
                <span className="font-bold">price must rise</span> (basic
                economics).
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-l-4 border-l-amber-500 bg-amber-50 p-4">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
            <div>
              <p className="text-sm font-bold text-amber-800">
                Critical Nuance
              </p>
              <p className="mt-1 text-sm text-amber-900">
                The halving effect is <strong>not instant</strong>. Historically,
                Bitcoin&apos;s peak has come{' '}
                <span className="font-bold">12–18 months AFTER</span> the
                halving. Patience is key.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border-l-4 border-l-slate-500 bg-slate-50 p-4">
          <div className="flex items-start gap-3">
            <Coins className="mt-0.5 h-5 w-5 flex-shrink-0 text-slate-600" />
            <div>
              <p className="text-sm font-bold text-slate-800">For Traders</p>
              <p className="mt-1 text-sm text-slate-700">
                The halving creates a <strong>narrative</strong> that drives
                sentiment and capital flows. Narratives move markets as much as
                fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        The halving is the engine behind Bitcoin&apos;s 4-year cycle. Each
        halving reduces supply, creates a narrative, and historically leads to
        significant price appreciation 12–18 months later.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────── MAIN EXPORT ─────────────────────── */

export function LateMorningBlock() {
  return (
    <section id="late-morning" aria-labelledby="late-morning-heading">
      <SectionDivider title="LATE MORNING BLOCK — HOUR 4: WHY CRYPTO PRICES MOVE" />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <DriversOfPrice />
        <MarketCycle />
        <BitcoinHalving />
      </div>
    </section>
  )
}
