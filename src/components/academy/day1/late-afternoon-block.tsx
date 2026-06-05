'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Layout,
  BarChart3,
  Wallet,
  TrendingUp,
  Coins,
  ArrowRightLeft,
  CreditCard,
  Building,
  Send,
  AlertTriangle,
  ShieldAlert,
  Zap,
  Clock,
  FlaskConical,
  CheckCircle2,
  XCircle,
  ArrowDown,
  ArrowRight,
  ShoppingCart,
  FileText,
  Users,
  Globe,
  Lock,
  Landmark,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { StepList } from '@/components/academy/step-list'

/* ─────────────────────────────── Tour Card ─────────────────────────────── */

interface TourCardProps {
  step: number
  title: string
  icon: React.ReactNode
  children: React.ReactNode
  accent?: 'amber' | 'green' | 'red' | 'teal' | 'slate' | 'purple'
}

const accentMap: Record<NonNullable<TourCardProps['accent']>, string> = {
  amber: 'border-amber-300 bg-amber-50/60',
  green: 'border-green-300 bg-green-50/60',
  red: 'border-red-300 bg-red-50/60',
  teal: 'border-teal-300 bg-teal-50/60',
  slate: 'border-slate-300 bg-slate-50/60',
  purple: 'border-purple-300 bg-purple-50/60',
}

function TourCard({ step, title, icon, children, accent = 'amber' }: TourCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: step * 0.05 }}
      className={`relative rounded-xl border-2 p-4 sm:p-5 ${accentMap[accent]}`}
    >
      {/* Step badge */}
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white shadow-sm">
          {step}
        </span>
        <span className="flex items-center gap-1.5 text-amber-700 [&>svg]:h-4 [&>svg]:w-4">
          {icon}
        </span>
        <h4 className="text-sm font-bold text-slate-900 sm:text-base">{title}</h4>
      </div>
      <div className="text-sm leading-relaxed text-slate-600 sm:text-base">{children}</div>
    </motion.div>
  )
}

/* ──────────────────────── Method Card (Deposit) ────────────────────────── */

interface MethodCardProps {
  number: number
  title: string
  icon: React.ReactNode
  bestFor: string
  children: React.ReactNode
  color: 'emerald' | 'blue' | 'purple'
}

const methodColorMap: Record<MethodCardProps['color'], { border: string; bg: string; badge: string; icon: string }> = {
  emerald: {
    border: 'border-emerald-300',
    bg: 'bg-emerald-50/50',
    badge: 'bg-emerald-600',
    icon: 'text-emerald-600',
  },
  blue: {
    border: 'border-blue-300',
    bg: 'bg-blue-50/50',
    badge: 'bg-blue-600',
    icon: 'text-blue-600',
  },
  purple: {
    border: 'border-purple-300',
    bg: 'bg-purple-50/50',
    badge: 'bg-purple-600',
    icon: 'text-purple-600',
  },
}

function MethodCard({ number, title, icon, bestFor, children, color }: MethodCardProps) {
  const c = methodColorMap[color]
  return (
    <div className={`rounded-xl border-2 ${c.border} ${c.bg} p-4 sm:p-5`}>
      <div className="mb-3 flex items-center gap-2">
        <span className={`flex h-8 w-8 items-center justify-center rounded-full ${c.badge} text-sm font-bold text-white`}>
          {number}
        </span>
        <span className={`flex items-center gap-1.5 [&>svg]:h-5 [&>svg]:w-5 ${c.icon}`}>{icon}</span>
        <h4 className="text-base font-bold text-slate-900 sm:text-lg">{title}</h4>
      </div>
      <div className="mb-3 text-sm leading-relaxed text-slate-700 sm:text-base">{children}</div>
      <div className="flex items-start gap-1.5 rounded-lg bg-white/70 px-3 py-2 text-xs font-semibold text-slate-600 sm:text-sm">
        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
        <span>Best for: {bestFor}</span>
      </div>
    </div>
  )
}

/* ═══════════════════════ MAIN COMPONENT ═══════════════════════════════════ */

export function LateAfternoonBlock() {
  return (
    <section id="late-afternoon" aria-label="Late Afternoon Block — Hours 6–7">
      {/* ──────────── Section Divider ──────────── */}
      <SectionDivider title="LATE AFTERNOON BLOCK — HOURS 6–7: NAVIGATING THE EXCHANGES" icon={<ArrowRightLeft />} />

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">

        {/* ═══════════════════════ TOPIC 1: Binance Interface ═══════════════════════ */}
        <TopicCard id="binance-interface" title="Binance Interface — Complete Tour" icon={<Layout />}>
          <p className="mb-5 text-sm text-slate-600 sm:text-base">
            Let&apos;s take a guided walk through the Binance interface. Each card below represents a key section
            you&apos;ll encounter — follow the numbered steps from top to bottom.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TourCard step={1} title="Home Dashboard" icon={<Layout />} accent="amber">
              <ul className="mt-1 space-y-1.5 text-slate-600">
                <li className="flex items-start gap-1.5"><TrendingUp className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500" /> <span><strong>Portfolio overview</strong> — total balance &amp; today&apos;s P&amp;L</span></li>
                <li className="flex items-start gap-1.5"><BarChart3 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500" /> <span><strong>Market movers</strong> — top gainers, top losers, most traded</span></li>
                <li className="flex items-start gap-1.5"><Zap className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500" /> <span><strong>Quick access</strong> — Spot, Futures, Earn</span></li>
              </ul>
            </TourCard>

            <TourCard step={2} title="Spot Trading Screen" icon={<BarChart3 />} accent="green">
              <ul className="mt-1 space-y-1.5 text-slate-600">
                <li className="flex items-start gap-1.5"><BarChart3 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500" /> <span><strong>Candlestick chart</strong> — price history at a glance</span></li>
                <li className="flex items-start gap-1.5"><ShoppingCart className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-600" /> <span><strong>Order book</strong> — green buys (left), red sells (right)</span></li>
                <li className="flex items-start gap-1.5"><FileText className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-500" /> <span><strong>Trade history</strong> — recent completed trades</span></li>
                <li className="flex items-start gap-1.5"><Coins className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500" /> <span><strong>Order panel</strong> — market &amp; limit orders</span></li>
                <li className="flex items-start gap-1.5"><Clock className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-500" /> <span><strong>Open orders</strong> — your pending limit orders</span></li>
              </ul>
            </TourCard>

            <TourCard step={3} title="Futures Tab" icon={<TrendingUp />} accent="red">
              <p>Where you trade with <strong>leverage</strong> — go long or short on price movements.</p>
              <div className="mt-2 flex items-center gap-1.5 rounded-md bg-red-100 px-2.5 py-1.5 text-xs font-semibold text-red-700">
                <ShieldAlert className="h-3.5 w-3.5" /> Don&apos;t use this yet — advanced traders only
              </div>
            </TourCard>

            <TourCard step={4} title="Earn Tab" icon={<Coins />} accent="teal">
              <p className="mb-1.5">Passive income on idle crypto:</p>
              <ul className="space-y-1 text-slate-600">
                <li>• <strong>Flexible savings</strong> — deposit &amp; withdraw anytime</li>
                <li>• <strong>Staking</strong> — lock tokens to earn rewards</li>
              </ul>
            </TourCard>

            <TourCard step={5} title="Wallet" icon={<Wallet />} accent="slate">
              <ul className="mt-1 space-y-1.5 text-slate-600">
                <li>• <strong>Overview</strong> — balances across all wallets</li>
                <li>• <strong>Deposit</strong> — add funds to Binance</li>
                <li>• <strong>Withdraw</strong> — send funds off Binance</li>
                <li>• <strong>Transaction history</strong> — full record</li>
              </ul>
            </TourCard>
          </div>
        </TopicCard>

        {/* ═══════════════════════ TOPIC 2: MEXC Interface ═══════════════════════ */}
        <TopicCard id="mexc-interface" title="MEXC Interface — Complete Tour" icon={<Layout />}>
          <p className="mb-5 text-sm text-slate-600 sm:text-base">
            MEXC offers a cleaner, more modern interface. Here&apos;s your guided tour — notice how it compares to Binance.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TourCard step={1} title="Home Dashboard" icon={<Layout />} accent="teal">
              <ul className="mt-1 space-y-1.5 text-slate-600">
                <li>• <strong>Clean, modern layout</strong> — less visual clutter</li>
                <li>• <strong>Portfolio at a glance</strong> — simple balance view</li>
                <li>• <strong>Quick trade buttons</strong> — buy / sell / convert</li>
              </ul>
            </TourCard>

            <TourCard step={2} title="Trade (Basic)" icon={<ShoppingCart />} accent="green">
              <p className="mb-1.5">Simple buy/sell interface — perfect for absolute beginners.</p>
              <ul className="space-y-1 text-slate-600">
                <li>• Just enter amount &amp; click <strong>Buy</strong> or <strong>Sell</strong></li>
                <li>• Good for your very first purchase</li>
                <li>• ⚠️ Higher fees than Advanced mode</li>
              </ul>
            </TourCard>

            <TourCard step={3} title="Trade (Advanced)" icon={<BarChart3 />} accent="amber">
              <p className="mb-1.5">Full charting + order book + order panel — this is where you&apos;ll do <strong>actual trading</strong>.</p>
              <ul className="space-y-1 text-slate-600">
                <li>• Lower fees than Basic mode</li>
                <li>• Same TradingView charts as Binance</li>
                <li>• All order types available</li>
              </ul>
            </TourCard>

            <TourCard step={4} title="Earn" icon={<Coins />} accent="teal">
              <p className="mb-1.5">Similar to Binance Earn — put idle crypto to work:</p>
              <ul className="space-y-1 text-slate-600">
                <li>• <strong>Flexible savings</strong> — withdraw anytime</li>
                <li>• <strong>Locked savings</strong> — higher rates, fixed term</li>
                <li>• <strong>Staking</strong> — earn by locking tokens</li>
              </ul>
            </TourCard>

            <TourCard step={5} title="Copy Trading" icon={<Users />} accent="purple">
              <p>Browse top traders and <strong>copy their strategies</strong> automatically. Great for learning, but be cautious — past performance ≠ future results.</p>
            </TourCard>

            <TourCard step={6} title="DEX" icon={<Globe />} accent="slate">
              <p className="mb-1.5">Built-in decentralized exchange — trade directly from your wallet.</p>
              <ul className="space-y-1 text-slate-600">
                <li>• No KYC needed</li>
                <li>• Swap tokens peer-to-peer</li>
                <li>• Advanced DeFi features</li>
              </ul>
            </TourCard>
          </div>
        </TopicCard>

        {/* ═══════════════════════ TOPIC 3: Comparison ═══════════════════════ */}
        <TopicCard id="binance-vs-mexc" title="Binance vs. MEXC — Interface Comparison" icon={<ArrowRightLeft />}>
          <ComparisonTable
            headers={['Feature', 'Binance', 'MEXC']}
            highlightColumn={2}
            rows={[
              ['Overall feel', 'Professional, feature-rich, can be overwhelming', 'Clean, modern, easier to navigate'],
              ['Beginner mode', 'No dedicated beginner mode', '"Basic" trade mode for simple buying'],
              ['Advanced trading', 'Spot, Margin, Futures tabs', '"Advanced" trade mode with full features'],
              ['Charting', 'Built-in TradingView charts', 'Built-in TradingView charts'],
              ['Order types', 'Market, Limit, Stop-Limit, OCO', 'Market, Limit, Stop-Limit, Plan/Trigger'],
              ['Fee display', 'Shown at order confirmation', 'Shown at order confirmation'],
              ['Mobile app', 'Excellent, full-featured', 'Excellent, clean design'],
              ['Key advantage', 'More coins, more liquidity', 'Lower fees, cleaner UI'],
            ]}
          />

          <div className="mt-6">
            <KeyTakeaway>
              Start with MEXC&apos;s <strong>Basic mode</strong> for your very first purchase. Then switch to{' '}
              <strong>Advanced mode</strong> for real trading. Use Binance for coins not available on MEXC.
            </KeyTakeaway>
          </div>
        </TopicCard>

        {/* ═══════════════════════ TOPIC 4: Deposit Funds ═══════════════════════ */}
        <TopicCard id="deposit-funds" title="How to Deposit Funds — Getting Money onto the Exchange" icon={<CreditCard />}>
          <p className="mb-5 text-sm text-slate-600 sm:text-base">
            Before you can trade, you need funds on the exchange. Here are the three main methods:
          </p>

          <div className="grid gap-5 lg:grid-cols-3">
            {/* Method 1: P2P */}
            <MethodCard number={1} title="P2P (Peer-to-Peer)" icon={<Users />} bestFor="Countries without direct bank deposit options" color="emerald">
              <p className="mb-3">You buy <strong>USDT</strong> directly from another person using bank transfer, GCash, or other local payment methods. The exchange acts as escrow.</p>
              <StepList
                steps={[
                  { number: 1, title: 'Go to P2P', description: 'Navigate to the P2P section in the app' },
                  { number: 2, title: 'Select USDT', description: 'Choose USDT as the crypto you want to buy' },
                  { number: 3, title: 'Choose a seller', description: 'Pick a reputable seller with good ratings' },
                  { number: 4, title: 'Pay', description: 'Send payment via the seller\'s preferred method' },
                  { number: 5, title: 'Confirm', description: 'Mark payment as complete in the app' },
                  { number: 6, title: 'USDT arrives', description: 'Funds land in your Funding wallet' },
                ]}
              />
            </MethodCard>

            {/* Method 2: Bank Transfer / Credit Card */}
            <MethodCard number={2} title="Bank Transfer / Credit Card" icon={<Building />} bestFor="Users with supported banks or cards" color="blue">
              <p className="mb-3">Direct deposit via bank transfer or card purchase. Available on both platforms but options <strong>vary by country</strong>.</p>
              <ul className="space-y-1.5 text-slate-600">
                <li className="flex items-start gap-1.5">
                  <CreditCard className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
                  <span>Card purchases usually have <strong>1–3% fees</strong></span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Landmark className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-500" />
                  <span>Bank transfers may be free but take longer</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500" />
                  <span>Fastest way if your bank is supported</span>
                </li>
              </ul>
            </MethodCard>

            {/* Method 3: Crypto Transfer */}
            <MethodCard number={3} title="Crypto Transfer" icon={<Send />} bestFor="Users transferring from another exchange or wallet" color="purple">
              <p className="mb-3">If you already own crypto, send it from another wallet to your exchange wallet.</p>
              <StepList
                steps={[
                  { number: 1, title: 'Wallet → Deposit', description: 'Open the Deposit section in your exchange' },
                  { number: 2, title: 'Select coin', description: 'Choose the cryptocurrency you want to deposit' },
                  { number: 3, title: 'Copy deposit address', description: 'Get your unique deposit address' },
                  { number: 4, title: 'Send from external wallet', description: 'Paste the address in your external wallet and send' },
                ]}
              />
            </MethodCard>
          </div>

          {/* Critical Warning Banner */}
          <div className="mt-6 flex items-start gap-3 rounded-xl border-2 border-red-300 bg-red-50 p-4 sm:p-5">
            <AlertTriangle className="mt-0.5 h-6 w-6 flex-shrink-0 text-red-600" />
            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wider text-red-700">⚠️ Critical Warning — Network Mismatch</p>
              <p className="text-sm font-semibold text-red-800 sm:text-base">
                Only send the <strong>correct coin</strong> to the <strong>correct network</strong>. Sending BTC to an ETH address ={' '}
                <span className="underline decoration-red-400 decoration-2">permanent loss of funds</span>. Always double-check the network before sending!
              </p>
            </div>
          </div>

          {/* After Deposit Note */}
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 sm:text-base">
            <strong className="text-slate-800">After deposit:</strong> Your funds will appear in your <strong>&quot;Funding&quot;</strong> wallet.
            You may need to transfer to your <strong>&quot;Spot&quot;</strong> wallet before trading.
          </div>
        </TopicCard>

        {/* ═══════════════════════ TOPIC 5: Trading Pairs ═══════════════════════ */}
        <TopicCard id="trading-pairs" title="Understanding Trading Pairs — What BTC/USDT Actually Means" icon={<ArrowRightLeft />}>
          <p className="mb-5 text-sm text-slate-600 sm:text-base">
            Every trade on an exchange involves a <strong>trading pair</strong> — two currencies that can be exchanged for each other.
          </p>

          {/* Visual Diagram: BASE / QUOTE */}
          <div className="mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            {/* BASE */}
            <div className="flex flex-col items-center rounded-xl border-2 border-amber-400 bg-amber-50 px-6 py-4 text-center shadow-sm sm:px-8 sm:py-5">
              <span className="mb-1 text-xs font-bold uppercase tracking-wider text-amber-600">Base Currency</span>
              <span className="text-2xl font-black text-amber-700 sm:text-3xl">BTC</span>
              <span className="mt-1 text-xs text-amber-600">What you&apos;re BUYING or SELLING</span>
            </div>

            {/* Slash / Divider */}
            <div className="flex flex-col items-center gap-1">
              <ArrowRight className="h-5 w-5 text-slate-400 sm:hidden" />
              <span className="text-3xl font-black text-slate-400 sm:text-4xl">/</span>
              <span className="text-xs font-medium text-slate-500">traded for</span>
            </div>

            {/* QUOTE */}
            <div className="flex flex-col items-center rounded-xl border-2 border-teal-400 bg-teal-50 px-6 py-4 text-center shadow-sm sm:px-8 sm:py-5">
              <span className="mb-1 text-xs font-bold uppercase tracking-wider text-teal-600">Quote Currency</span>
              <span className="text-2xl font-black text-teal-700 sm:text-3xl">USDT</span>
              <span className="mt-1 text-xs text-teal-600">What you&apos;re PAYING WITH or RECEIVING</span>
            </div>
          </div>

          {/* Explanation */}
          <div className="mb-4 space-y-2 text-sm text-slate-700 sm:text-base">
            <p>
              <strong>BTC/USDT = $65,000</strong> means <strong>1 BTC costs 65,000 USDT</strong>.
            </p>
            <p>
              When you <span className="font-semibold text-green-700">buy BTC/USDT</span>, you&apos;re spending USDT to get BTC.{' '}
              When you <span className="font-semibold text-red-700">sell BTC/USDT</span>, you&apos;re giving BTC to receive USDT.
            </p>
          </div>

          {/* Common Pairs */}
          <div className="mb-4 flex flex-wrap gap-2">
            {['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'BNB/USDT', 'XRP/USDT'].map((pair) => (
              <span
                key={pair}
                className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-800"
              >
                {pair}
              </span>
            ))}
          </div>

          <KeyTakeaway>
            Always trade pairs with <strong>USDT as the quote currency</strong> (e.g. BTC/USDT, ETH/USDT).
            Trading ALT/BTC pairs is more complex and <strong>not recommended for beginners</strong>.
          </KeyTakeaway>
        </TopicCard>

        {/* ═══════════════════════ SUB-TOPIC: Market vs Limit Orders ═══════════════════════ */}
        <TopicCard id="market-vs-limit" title="Your First Orders — Market vs. Limit" icon={<ShoppingCart />}>
          <p className="mb-5 text-sm text-slate-600 sm:text-base">
            There are two fundamental order types you need to understand before placing your first trade.
          </p>

          {/* Side-by-side comparison */}
          <div className="mb-6 grid gap-5 lg:grid-cols-2">
            {/* Market Order Card */}
            <div className="rounded-xl border-2 border-green-300 bg-green-50/50 p-4 sm:p-5">
              <div className="mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-600" />
                <h4 className="text-lg font-bold text-green-800">Market Order</h4>
              </div>
              <p className="mb-3 text-sm text-slate-700 sm:text-base">
                Buys/sells <strong>immediately</strong> at the best available price.
              </p>
              <div className="mb-3 space-y-1.5 text-sm text-slate-600">
                <p className="flex items-start gap-1.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span><strong>When speed matters</strong> — you want in or out NOW</span>
                </p>
                <p className="flex items-start gap-1.5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  <span><strong>Risk:</strong> slippage in fast-moving markets</span>
                </p>
              </div>
              <AnalogyBox title="Market Order = Buying at the grocery store">
                You pay whatever price is on the tag — instant, no negotiation.
              </AnalogyBox>
            </div>

            {/* Limit Order Card */}
            <div className="rounded-xl border-2 border-blue-300 bg-blue-50/50 p-4 sm:p-5">
              <div className="mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <h4 className="text-lg font-bold text-blue-800">Limit Order</h4>
              </div>
              <p className="mb-3 text-sm text-slate-700 sm:text-base">
                Sets a <strong>specific price</strong>. Only executes when the market reaches that price.
              </p>
              <div className="mb-3 space-y-1.5 text-sm text-slate-600">
                <p className="flex items-start gap-1.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-500" />
                  <span><strong>When you want a specific price</strong> — patience pays off</span>
                </p>
                <p className="flex items-start gap-1.5">
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-400" />
                  <span><strong>Risk:</strong> order may never execute if price isn&apos;t reached</span>
                </p>
              </div>
              <AnalogyBox title="Limit Order = Telling a real estate agent">
                &quot;I&apos;ll buy that house, but only for $300,000.&quot; You wait until the seller agrees — maybe they never do.
              </AnalogyBox>
            </div>
          </div>

          {/* Practice Labs */}
          <div className="space-y-5">
            {/* Binance Practice */}
            <div className="rounded-xl border-2 border-dashed border-amber-400 bg-amber-50/30 p-4 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-amber-600" />
                <h4 className="text-base font-bold text-amber-800 sm:text-lg">Practice Lab — Binance</h4>
              </div>
              <StepList
                steps={[
                  {
                    number: 1,
                    title: 'Deposit $10–20 USDT',
                    description: 'Use P2P or your preferred method to fund your Binance account',
                  },
                  {
                    number: 2,
                    title: 'Market buy $5 of BTC/USDT',
                    description: 'Watch instant execution — the order fills immediately at current price',
                  },
                  {
                    number: 3,
                    title: 'Limit buy $5 of BTC/USDT at 3% below current price',
                    description: 'Watch it sit in your Open Orders — it won\'t fill until the price drops',
                  },
                  {
                    number: 4,
                    title: 'Cancel the limit order',
                    description: 'Go to Open Orders → find your order → click Cancel',
                  },
                  {
                    number: 5,
                    title: 'Write your answer',
                    description: '"Market orders execute ___. Limit orders execute ___."',
                  },
                ]}
              />
            </div>

            {/* MEXC Practice */}
            <div className="rounded-xl border-2 border-dashed border-teal-400 bg-teal-50/30 p-4 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-teal-600" />
                <h4 className="text-base font-bold text-teal-800 sm:text-lg">Practice Lab — MEXC</h4>
              </div>
              <StepList
                steps={[
                  {
                    number: 1,
                    title: 'Deposit $10–20 USDT',
                    description: 'Fund your MEXC account using your preferred deposit method',
                  },
                  {
                    number: 2,
                    title: 'Market buy $5 of BTC/USDT',
                    description: 'Switch to Advanced trade mode first, then place a market order',
                  },
                  {
                    number: 3,
                    title: 'Limit buy $5 of ETH/USDT at 2% below current price',
                    description: 'Set your price 2% lower and submit the limit order',
                  },
                  {
                    number: 4,
                    title: 'Cancel the limit order',
                    description: 'Find it in Current Orders and cancel',
                  },
                  {
                    number: 5,
                    title: 'Write your answer',
                    description: '"I\'d use Binance for ___ and MEXC for ___"',
                  },
                ]}
              />
            </div>
          </div>
        </TopicCard>

      </div>
    </section>
  )
}
