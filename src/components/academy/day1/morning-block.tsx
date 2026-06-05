'use client'

import React from 'react'
import {
  Coins,
  Gem,
  Shield,
  Lock,
  Eye,
  Network,
  Cpu,
  FileCode,
  Globe,
  Divide,
  Key,
  BookOpen,
  Landmark,
  Link2,
  Boxes,
  Sun,
  Banknote,
  TrendingDown,
  Bitcoin,
  Server,
  Scale,
  ArrowRight,
  Zap,
  DollarSign,
  AlertTriangle,
  Layers,
  Wallet,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
  Anchor,
  ChevronRight,
  ArrowDown,
  CircleDollarSign,
  Activity,
  Landmark as BankIcon,
  Store,
  Repeat,
  TrendingUp,
} from 'lucide-react'
import { TopicCard } from '@/components/academy/topic-card'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { AnalogyBox } from '@/components/academy/analogy-box'
import { StepList } from '@/components/academy/step-list'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { SectionDivider } from '@/components/academy/section-divider'

/* ─────────────────────────────────────────────
   TOPIC 1 — What Is Money?
   ───────────────────────────────────────────── */

function TopicWhatIsMoney() {
  const moneyFunctions = [
    {
      label: 'MEDIUM OF EXCHANGE',
      description:
        'You can trade it for goods and services — like buying coffee with dollars.',
      icon: <Banknote className="h-5 w-5" />,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
    },
    {
      label: 'STORE OF VALUE',
      description:
        'It holds its purchasing power over time — like saving dollars in a bank.',
      icon: <Lock className="h-5 w-5" />,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
    },
    {
      label: 'UNIT OF ACCOUNT',
      description:
        'It provides a common measure for pricing — a car costs $30,000.',
      icon: <Scale className="h-5 w-5" />,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
    },
  ]

  const historySteps = [
    { number: 1, title: 'Barter', description: 'People traded goods directly — but finding someone who wants what you have is hard.' },
    { number: 2, title: 'Gold', description: 'Rare, durable, and universally valued — gold became the standard of money.' },
    { number: 3, title: 'Paper Money (backed by gold)', description: 'Governments issued paper notes that could be exchanged for gold on demand.' },
    { number: 4, title: 'Fiat Money (backed by nothing)', description: 'Governments severed the link to gold. Paper money now has value ONLY because the government says it does and people trust it.' },
  ]

  return (
    <TopicCard
      id="what-is-money"
      title="What Is Money? (Before We Talk About Crypto)"
      icon={<BookOpen className="h-5 w-5" />}
      variant="default"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-700 sm:text-base">
        To understand crypto, you must first understand money itself.
      </p>

      {/* 3 functions of money */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        The 3 Functions of Money
      </h4>
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        {moneyFunctions.map((fn) => (
          <div
            key={fn.label}
            className={`rounded-lg border ${fn.border} ${fn.bg} p-4`}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className={fn.color}>{fn.icon}</span>
              <span className={`text-xs font-bold ${fn.color}`}>{fn.label}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">{fn.description}</p>
          </div>
        ))}
      </div>

      {/* History timeline */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        The History of Money
      </h4>
      <div className="mb-6">
        <StepList steps={historySteps} />
      </div>

      {/* Fiat money explanation */}
      <div className="mb-4 rounded-lg border border-red-200 bg-red-50/60 p-4">
        <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-red-700">
          <TrendingDown className="h-4 w-4" />
          The Problem with Fiat Money
        </h4>
        <p className="mb-2 text-sm leading-relaxed text-slate-700">
          Governments can print unlimited amounts → inflation → your money loses value over time.
        </p>
        <p className="text-sm font-semibold text-red-600">
          $1 in 1970 is worth about $0.15 today.
        </p>
      </div>

      {/* Why this matters for crypto */}
      <div className="mb-6 rounded-lg border border-green-200 bg-green-50/60 p-4">
        <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-green-700">
          <Bitcoin className="h-4 w-4" />
          Why This Matters for Crypto
        </h4>
        <p className="text-sm leading-relaxed text-slate-700">
          Bitcoin was created as a response to this problem — a form of money that <strong>NO government can print more of</strong>. There will only ever be <strong>21 million bitcoins</strong>.
        </p>
      </div>

      <KeyTakeaway>
        Crypto didn&apos;t appear out of nowhere. It solves real problems with the current financial system.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────
   TOPIC 2 — The 2008 Financial Crisis
   ───────────────────────────────────────────── */

function Topic2008Crisis() {
  return (
    <TopicCard
      id="2008-crisis"
      title="The 2008 Financial Crisis — The Birth of Bitcoin"
      icon={<Landmark className="h-5 w-5" />}
      variant="highlight"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        In 2008, the global financial system nearly collapsed. Banks made reckless bets, governments bailed them out by printing trillions of dollars, and ordinary people lost their homes and savings.
      </p>

      {/* Satoshi's paper */}
      <div className="mb-5 rounded-lg border border-amber-200 bg-amber-50/50 p-4">
        <p className="mb-2 text-sm leading-relaxed text-slate-700">
          On <strong>October 31, 2008</strong>, an anonymous person (or group) called <strong>Satoshi Nakamoto</strong> published a paper titled:
        </p>
        <p className="mb-3 text-sm font-bold italic text-amber-800">
          &ldquo;Bitcoin: A Peer-to-Peer Electronic Cash System&rdquo;
        </p>
        <blockquote className="border-l-4 border-amber-500 bg-amber-100/60 py-3 pl-4 pr-3 text-sm italic text-slate-800">
          &ldquo;A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.&rdquo;
        </blockquote>
      </div>

      {/* Genesis Block */}
      <div className="mb-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="mb-2 text-sm leading-relaxed text-slate-700">
          On <strong>January 3, 2009</strong>, the first Bitcoin block (the &ldquo;Genesis Block&rdquo;) was mined. Embedded in it was a newspaper headline:
        </p>
        <blockquote className="border-l-4 border-amber-500 bg-amber-100/60 py-3 pl-4 pr-3 text-sm font-semibold italic text-slate-800">
          &ldquo;Chancellor on brink of second bailout for banks&rdquo;
        </blockquote>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          — a direct criticism of the banking system.
        </p>
      </div>

      <KeyTakeaway>
        Bitcoin was born from a crisis of <strong>TRUST</strong> in banks and governments. Its entire purpose is to be money that doesn&apos;t need a middleman.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────
   TOPIC 3 — What Is Blockchain?
   ───────────────────────────────────────────── */

function TopicWhatIsBlockchain() {
  const blockchainSteps = [
    { number: 1, title: 'Transaction initiated', description: 'Someone wants to send Bitcoin to someone else.' },
    { number: 2, title: 'Broadcast to network', description: 'The transaction is broadcast to a network of computers (called "nodes").' },
    { number: 3, title: 'Verification', description: 'These computers verify the transaction is valid — the sender actually has the Bitcoin.' },
    { number: 4, title: 'Grouped into a block', description: 'Verified transactions are grouped into a "block".' },
    { number: 5, title: 'Added to the chain', description: 'The block is added to the chain of previous blocks — the "blockchain".' },
    { number: 6, title: 'Permanent record', description: 'This block is now permanent and cannot be changed.' },
  ]

  const keyProperties = [
    {
      label: 'DECENTRALIZED',
      description:
        'No single company, government, or server controls it. Thousands of computers worldwide maintain the network.',
      icon: <Network className="h-6 w-6" />,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
    },
    {
      label: 'IMMUTABLE',
      description:
        'Once a transaction is recorded, it cannot be changed, deleted, or reversed. Ever.',
      icon: <Lock className="h-6 w-6" />,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
    },
    {
      label: 'TRANSPARENT',
      description:
        'Anyone can view every transaction that has ever occurred on the blockchain.',
      icon: <Eye className="h-6 w-6" />,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
    },
    {
      label: 'TRUSTLESS',
      description:
        "You don't need to trust a bank or middleman. The math and cryptography ensure security.",
      icon: <Shield className="h-6 w-6" />,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
    },
  ]

  return (
    <TopicCard
      id="what-is-blockchain"
      title="What Is Blockchain? — The Technology Behind Crypto"
      icon={<Link2 className="h-5 w-5" />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        A blockchain is a <strong>decentralized, digital ledger</strong> that records transactions across many computers so that no single entry can be altered retroactively.
      </p>

      {/* Analogy */}
      <div className="mb-6">
        <AnalogyBox title="A Shared Google Doc">
          Imagine a shared Google Doc that thousands of people have a copy of. Every time someone adds a line, all copies update simultaneously. No one can delete or change a previous line — only add new ones. That&apos;s blockchain.
        </AnalogyBox>
      </div>

      {/* How it works */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        How It Works (Simplified)
      </h4>
      <div className="mb-6">
        <StepList steps={blockchainSteps} />
      </div>

      {/* Key properties 2x2 grid */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        Key Properties of Blockchain
      </h4>
      <div className="grid gap-3 sm:grid-cols-2">
        {keyProperties.map((prop) => (
          <div
            key={prop.label}
            className={`rounded-lg border ${prop.border} ${prop.bg} p-4`}
          >
            <div className="mb-2 flex items-center gap-2">
              <span className={prop.color}>{prop.icon}</span>
              <span className={`text-xs font-bold ${prop.color}`}>
                {prop.label}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────
   TOPIC 4 — Blockchain: Deeper Understanding
   ───────────────────────────────────────────── */

function TopicBlockchainDeeper() {
  return (
    <TopicCard
      id="blockchain-deeper"
      title="Blockchain — Deeper Understanding"
      icon={<Boxes className="h-5 w-5" />}
      variant="highlight"
    >
      {/* Why is decentralization important? */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        Why Is Decentralization Important?
      </h4>

      {/* Traditional vs Blockchain comparison */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        {/* Traditional */}
        <div className="rounded-lg border border-red-200 bg-red-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Banknote className="h-4 w-4 text-red-600" />
            <span className="text-xs font-bold uppercase text-red-700">Traditional System</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
              Your money is in a bank
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
              The bank can freeze your account
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
              The bank can limit withdrawals
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
              The bank can collapse
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
              You trust them with your money
            </li>
          </ul>
        </div>

        {/* Blockchain */}
        <div className="rounded-lg border border-green-200 bg-green-50/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Bitcoin className="h-4 w-4 text-green-600" />
            <span className="text-xs font-bold uppercase text-green-700">Blockchain System</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              Your money is on the blockchain
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              No bank can freeze it
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              No government can seize it (if you hold your own keys)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              No single point of failure
            </li>
          </ul>
        </div>
      </div>

      {/* Trade-off warning */}
      <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50/60 p-4">
        <div className="mb-1 flex items-center gap-2">
          <Zap className="h-4 w-4 text-amber-600" />
          <span className="text-xs font-bold uppercase text-amber-700">Trade-off: Freedom = Responsibility</span>
        </div>
        <p className="text-sm leading-relaxed text-slate-700">
          If you lose your private keys (like a password), <strong>no one can recover your funds</strong>. There is no &ldquo;forgot password&rdquo; button.
        </p>
      </div>

      {/* What is a "block"? */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        What Is a &ldquo;Block&rdquo;?
      </h4>
      <p className="mb-2 text-sm leading-relaxed text-slate-700">
        A collection of transactions (typically 1,500–2,500 for Bitcoin). Each block contains:
      </p>
      <ul className="mb-6 space-y-1.5 text-sm text-slate-700">
        <li className="flex items-start gap-2">
          <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
          <span><strong>Transaction data</strong> — the actual transfers</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
          <span><strong>A timestamp</strong> — when the block was created</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
          <span><strong>A reference to the previous block</strong> (called a &ldquo;hash&rdquo;)</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500" />
          <span><strong>A mathematical puzzle solution</strong> (called &ldquo;proof of work&rdquo;)</span>
        </li>
      </ul>

      {/* What is "mining"? */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        What Is &ldquo;Mining&rdquo;?
      </h4>
      <p className="mb-2 text-sm leading-relaxed text-slate-700">
        Computers compete to solve a complex math problem. The first to solve it gets to add the next block and receives a reward (<strong>newly created Bitcoin + transaction fees</strong>). This is how new Bitcoin enters circulation.
      </p>
      <p className="mb-6 text-sm leading-relaxed text-slate-700">
        Mining also secures the network — attacking it would require more computing power than all the world&apos;s miners combined.
      </p>

      {/* What is a "hash"? */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        What Is a &ldquo;Hash&rdquo;?
      </h4>
      <p className="mb-2 text-sm leading-relaxed text-slate-700">
        A unique digital fingerprint of a block&apos;s data. If even one character in the block changes, the hash completely changes.
      </p>
      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm leading-relaxed text-slate-700">
          This is what makes blockchain <strong>immutable</strong> — changing a past block would change its hash, which would break the link to all subsequent blocks, which every node would immediately detect as invalid.
        </p>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────
   TOPIC 5 — What Is Bitcoin?
   ───────────────────────────────────────────── */

function TopicWhatIsBitcoin() {
  const characteristics = [
    {
      label: 'FINITE SUPPLY',
      description:
        'There will only ever be 21 million bitcoins. Currently about 19.5 million have been mined. The last Bitcoin will be mined around 2140.',
      icon: <Coins className="h-5 w-5" />,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
    },
    {
      label: 'SCARCITY',
      description:
        'Like gold, Bitcoin is scarce. Unlike gold, its supply is mathematically guaranteed. No one can "discover" more Bitcoin.',
      icon: <Gem className="h-5 w-5" />,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200',
    },
    {
      label: 'DIVISIBLE',
      description:
        'Each Bitcoin can be divided into 100 million units called "Satoshis" (sats). You don\'t need to buy a whole Bitcoin — you can buy $5 worth.',
      icon: <Divide className="h-5 w-5" />,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
    },
    {
      label: 'PORTABLE',
      description:
        'You can send Bitcoin to anyone, anywhere in the world, in minutes. No bank holidays, no wire transfer fees, no borders.',
      icon: <Globe className="h-5 w-5" />,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
    },
    {
      label: 'PERMISSIONLESS',
      description:
        'Anyone can use Bitcoin. No application, no approval, no minimum balance. You just need an internet connection.',
      icon: <Key className="h-5 w-5" />,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
    },
  ]

  const valueReasons = [
    'Scarcity',
    'Network effects',
    'Security',
    'Trustlessness',
    'Store of value narrative ("digital gold")',
  ]

  return (
    <TopicCard
      id="what-is-bitcoin"
      title="What Is Bitcoin? — The First and Most Important Cryptocurrency"
      icon={<Bitcoin className="h-5 w-5" />}
      variant="default"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Bitcoin (BTC) is a <strong>decentralized digital currency</strong> that operates on the Bitcoin blockchain without any central authority.
      </p>

      {/* Key characteristics */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        Key Characteristics
      </h4>
      <div className="mb-6 space-y-3">
        {characteristics.map((char) => (
          <div
            key={char.label}
            className={`flex items-start gap-3 rounded-lg border ${char.border} ${char.bg} p-3 sm:p-4`}
          >
            <span className={`mt-0.5 flex-shrink-0 ${char.color}`}>{char.icon}</span>
            <div className="min-w-0">
              <span className={`text-xs font-bold ${char.color}`}>{char.label}</span>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                {char.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Bitcoin has value */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        Why Bitcoin Has Value
      </h4>
      <ul className="mb-6 space-y-1.5 text-sm text-slate-700">
        {valueReasons.map((reason) => (
          <li key={reason} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
            {reason}
          </li>
        ))}
      </ul>

      {/* Bitcoin's role in trading */}
      <div className="mb-5 rounded-lg border border-amber-200 bg-amber-50/60 p-4">
        <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-amber-800">
          <Bitcoin className="h-4 w-4" />
          Bitcoin&apos;s Role in Trading
        </h4>
        <p className="mb-2 text-sm leading-relaxed text-slate-700">
          BTC is the &ldquo;reserve currency&rdquo; of crypto. Most altcoins are priced in BTC.
        </p>
        <ul className="space-y-1.5 text-sm text-slate-700">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
            BTC goes up → altcoins often go up <em>more</em>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
            BTC goes down → altcoins often crash <em>harder</em>
          </li>
        </ul>
      </div>

      <KeyTakeaway>
        Understanding BTC&apos;s trend is <strong>ESSENTIAL</strong> for trading any cryptocurrency.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────
   TOPIC 6 — What Is Ethereum?
   ───────────────────────────────────────────── */

function TopicWhatIsEthereum() {
  const dApps = [
    {
      name: 'Uniswap',
      description: 'Decentralized exchange — trade tokens without a middleman',
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      name: 'Aave',
      description: 'Decentralized lending — lend and borrow crypto without a bank',
      icon: <Banknote className="h-5 w-5" />,
    },
    {
      name: 'OpenSea',
      description: 'NFT marketplace — buy and sell digital collectibles',
      icon: <Gem className="h-5 w-5" />,
    },
  ]

  return (
    <TopicCard
      id="what-is-ethereum"
      title="What Is Ethereum? — The World Computer"
      icon={<Cpu className="h-5 w-5" />}
      variant="default"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        Ethereum (ETH) is a <strong>decentralized platform</strong> that runs smart contracts — applications that run exactly as programmed without any possibility of downtime, censorship, fraud, or third-party interference.
      </p>

      <p className="mb-5 text-sm leading-relaxed text-slate-600">
        Created by <strong>Vitalik Buterin</strong> in 2015.
      </p>

      {/* Bitcoin vs Ethereum key difference */}
      <div className="mb-5 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 text-center">
          <p className="mb-1 text-xs font-bold uppercase text-amber-700">Bitcoin</p>
          <p className="text-sm font-bold text-slate-800">Digital Money</p>
          <p className="mt-1 text-xs text-slate-600">Does ONE thing really well: store and transfer value</p>
        </div>
        <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-4 text-center">
          <p className="mb-1 text-xs font-bold uppercase text-blue-700">Ethereum</p>
          <p className="text-sm font-bold text-slate-800">Platform for dApps</p>
          <p className="mt-1 text-xs text-slate-600">Like the App Store, but no company controls it</p>
        </div>
      </div>

      {/* Smart contracts */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        What Are Smart Contracts?
      </h4>
      <p className="mb-3 text-sm leading-relaxed text-slate-700">
        Self-executing contracts where the terms are written directly into code.
      </p>

      <div className="mb-5">
        <AnalogyBox title="A Vending Machine">
          You put in money, you select a product, the machine gives it to you. No cashier needed. The smart contract is the vending machine — it automatically executes when conditions are met.
        </AnalogyBox>
      </div>

      {/* Example */}
      <div className="mb-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h5 className="mb-2 text-sm font-bold text-slate-800">Real-World Example</h5>
        <p className="text-sm leading-relaxed text-slate-700">
          A smart contract could automatically pay out insurance money if a flight is delayed. No claims process, no adjuster, no delay. The code checks the flight data and pays automatically.
        </p>
      </div>

      {/* dApps */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        What Are dApps?
      </h4>
      <p className="mb-3 text-sm leading-relaxed text-slate-700">
        Applications built on top of Ethereum&apos;s blockchain. These apps run on thousands of computers worldwide — no single server can go down.
      </p>
      <div className="space-y-3">
        {dApps.map((dApp) => (
          <div
            key={dApp.name}
            className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
          >
            <span className="mt-0.5 flex-shrink-0 text-amber-600">{dApp.icon}</span>
            <div className="min-w-0">
              <span className="text-sm font-bold text-slate-800">{dApp.name}</span>
              <p className="text-sm text-slate-600">{dApp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────
   TOPIC 7 — Ethereum vs. Bitcoin
   ───────────────────────────────────────────── */

function TopicEthereumVsBitcoin() {
  const headers = ['Feature', 'Bitcoin', 'Ethereum']
  const rows = [
    ['Purpose', 'Digital gold / store of value', 'Platform for smart contracts and dApps'],
    ['Creator', 'Satoshi Nakamoto (anonymous)', 'Vitalik Buterin + team'],
    ['Supply', 'Fixed at 21 million', 'No fixed cap (but issuance decreases over time)'],
    ['Speed', '~10 minutes per block', '~12 seconds per block'],
    ['Language', 'Simple scripting', 'Turing-complete (can run complex programs)'],
    ['Primary Use', 'Saving and transferring value', 'Building and running applications'],
    ['Narrative', '"Digital gold"', '"World computer"'],
    ['Market Rank', '#1 (always)', '#2 (always)'],
    ['Volatility', 'High but less than altcoins', 'High, slightly more volatile than BTC'],
    ['Role in Trading', 'Market leader — sets the trend', 'Large-cap altcoin — follows BTC but has its own drivers'],
  ]

  return (
    <TopicCard
      id="ethereum-vs-bitcoin"
      title="Ethereum vs. Bitcoin — Key Differences"
      icon={<Scale className="h-5 w-5" />}
      variant="default"
    >
      <div className="mb-6">
        <ComparisonTable headers={headers} rows={rows} />
      </div>

      <KeyTakeaway>
        You don&apos;t have to choose between BTC and ETH. Most traders hold and trade both. <strong>BTC is your stability anchor; ETH is your growth play.</strong>
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────
   TOPIC 8 — What Are Stablecoins?
   ───────────────────────────────────────────── */

function TopicWhatAreStablecoins() {
  const stablecoins = [
    {
      name: 'USDT',
      fullName: 'Tether',
      description:
        'The most widely used stablecoin. Pegged to USD. Available on virtually every exchange.',
      icon: <DollarSign className="h-6 w-6" />,
      color: 'text-emerald-700',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      badge: 'Most Used',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      name: 'USDC',
      fullName: 'Circle',
      description:
        'Considered more transparent and regulated. Also pegged to USD.',
      icon: <CircleDollarSign className="h-6 w-6" />,
      color: 'text-blue-700',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      badge: 'Most Trusted',
      badgeColor: 'bg-blue-100 text-blue-800',
    },
    {
      name: 'DAI',
      fullName: 'MakerDAO',
      description:
        'Decentralized stablecoin backed by crypto collateral, not fiat.',
      icon: <Anchor className="h-6 w-6" />,
      color: 'text-amber-700',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      badge: 'Decentralized',
      badgeColor: 'bg-amber-100 text-amber-800',
    },
  ]

  const essentialReasons = [
    {
      number: 1,
      text: (
        <>
          They are your <strong>&ldquo;cash&rdquo; in the crypto world</strong>. When you sell a crypto, you receive USDT/USDC — not dollars in your bank.
        </>
      ),
    },
    {
      number: 2,
      text: (
        <>
          You trade <strong>PAIRS like BTC/USDT</strong> — meaning you buy Bitcoin using USDT, and you sell Bitcoin for USDT.
        </>
      ),
    },
    {
      number: 3,
      text: (
        <>
          They allow you to <strong>move in and out of positions quickly</strong> without converting back to bank dollars (which takes days and has fees).
        </>
      ),
    },
    {
      number: 4,
      text: (
        <>
          They <strong>protect you from volatility</strong> — if the market is crashing, you sell your crypto for USDT and wait on the sidelines.
        </>
      ),
    },
  ]

  return (
    <TopicCard
      id="what-are-stablecoins"
      title="What Are Stablecoins? — The Bridge Between Fiat and Crypto"
      icon={<DollarSign className="h-5 w-5" />}
      variant="default"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-700 sm:text-base">
        <strong>Stablecoins</strong> are cryptocurrencies designed to maintain a stable value, typically pegged 1:1 to the US dollar. They combine the speed and freedom of crypto with the price stability of traditional money.
      </p>

      {/* 3 stablecoin cards */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        The Most Important Stablecoins
      </h4>
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {stablecoins.map((sc) => (
          <div
            key={sc.name}
            className={`rounded-lg border ${sc.border} ${sc.bg} p-4`}
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={sc.color}>{sc.icon}</span>
                <span className={`text-lg font-bold ${sc.color}`}>{sc.name}</span>
              </div>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${sc.badgeColor}`}>
                {sc.badge}
              </span>
            </div>
            <p className="mb-1 text-xs font-medium text-slate-500">{sc.fullName}</p>
            <p className="text-sm leading-relaxed text-slate-600">{sc.description}</p>
          </div>
        ))}
      </div>

      {/* Why stablecoins are ESSENTIAL */}
      <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-800">
        Why Stablecoins Are ESSENTIAL for Trading
      </h4>
      <div className="mb-6 space-y-3">
        {essentialReasons.map((reason) => (
          <div
            key={reason.number}
            className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
          >
            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
              {reason.number}
            </span>
            <p className="mt-0.5 text-sm leading-relaxed text-slate-700">
              {reason.text}
            </p>
          </div>
        ))}
      </div>

      {/* Risk note */}
      <div className="mb-6 rounded-lg border border-red-300 bg-red-50 p-4">
        <div className="mb-2 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <span className="text-sm font-bold uppercase text-red-700">Risk: Stablecoins Can Lose Their Peg</span>
        </div>
        <p className="text-sm leading-relaxed text-slate-700">
          Stablecoins are supposed to be worth exactly <strong>$1</strong>, but they&apos;ve briefly lost their peg in extreme market conditions. <strong>USDC briefly fell to $0.87</strong> during the SVB banking crisis in March 2023. Always understand the risks.
        </p>
      </div>

      <KeyTakeaway>
        Stablecoins are the <strong>lubricant of the crypto market</strong>. Without them, trading would be far slower, more expensive, and much less flexible.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────
   TOPIC 9 — What Are Altcoins?
   ───────────────────────────────────────────── */

function TopicWhatAreAltcoins() {
  const tiers = [
    {
      title: 'LARGE-CAP ALTCOINS',
      subtitle: 'Top 10–20 by market cap',
      color: 'text-green-700',
      bg: 'bg-green-50',
      border: 'border-green-200',
      headerBg: 'bg-green-100',
      riskLevel: 'Medium',
      riskColor: 'text-green-700',
      riskBg: 'bg-green-100',
      description: 'Established projects with real use cases and large communities',
      examples: [
        { symbol: 'SOL', name: 'Solana — fast blockchain' },
        { symbol: 'BNB', name: 'Binance\'s token' },
        { symbol: 'XRP', name: 'Ripple — payments' },
        { symbol: 'ADA', name: 'Cardano — blockchain platform' },
        { symbol: 'AVAX', name: 'Avalanche — DeFi platform' },
      ],
      risk: 'They can drop 40–60% in bear markets but usually survive.',
      goodFor: 'Beginners who want more upside than BTC/ETH with manageable risk',
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: 'MID-CAP ALTCOINS',
      subtitle: 'Top 20–100',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      headerBg: 'bg-amber-100',
      riskLevel: 'Medium-High',
      riskColor: 'text-amber-700',
      riskBg: 'bg-amber-100',
      description: 'Growing projects with potential but less established',
      examples: [
        { symbol: 'LINK', name: 'Chainlink — oracle network' },
        { symbol: 'MATIC', name: 'Polygon — Ethereum scaling' },
        { symbol: 'ARB', name: 'Arbitrum — Layer 2' },
      ],
      risk: 'Can drop 60–80% in bear markets.',
      goodFor: 'Traders with some experience looking for higher returns',
      icon: <Activity className="h-5 w-5" />,
    },
    {
      title: 'SMALL-CAP / MEMECOINS',
      subtitle: 'Below Top 100',
      color: 'text-red-700',
      bg: 'bg-red-50',
      border: 'border-red-200',
      headerBg: 'bg-red-100',
      riskLevel: 'EXTREME',
      riskColor: 'text-red-700',
      riskBg: 'bg-red-100',
      description: 'High-risk, high-reward. Many are speculative or even jokes.',
      examples: [
        { symbol: 'DOGE', name: 'Dogecoin' },
        { symbol: 'SHIB', name: 'Shiba Inu' },
        { symbol: 'PEPE', name: 'Pepe' },
        { symbol: 'FLOKI', name: 'Floki Inu' },
      ],
      risk: 'Can go up 10x or drop to zero. Many are outright scams.',
      goodFor: 'NOT for beginners. Only trade with money you\'re OK losing entirely.',
      icon: <AlertTriangle className="h-5 w-5" />,
    },
  ]

  return (
    <TopicCard
      id="what-are-altcoins"
      title="What Are Altcoins? — Everything Beyond Bitcoin and Ethereum"
      icon={<Layers className="h-5 w-5" />}
      variant="default"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-700 sm:text-base">
        <strong>&ldquo;Altcoin&rdquo; = alternative coin</strong> — any cryptocurrency other than Bitcoin. There are thousands of altcoins, and they fall into very different risk categories.
      </p>

      {/* 3 tier cards */}
      <div className="space-y-5">
        {tiers.map((tier) => (
          <div
            key={tier.title}
            className={`overflow-hidden rounded-lg border ${tier.border} ${tier.bg}`}
          >
            {/* Tier header */}
            <div className={`flex items-center gap-2 px-4 py-3 ${tier.headerBg}`}>
              <span className={tier.color}>{tier.icon}</span>
              <div>
                <span className={`text-sm font-bold ${tier.color}`}>{tier.title}</span>
                <span className={`ml-2 text-xs ${tier.color} opacity-75`}>{tier.subtitle}</span>
              </div>
              <span className={`ml-auto rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${tier.riskBg} ${tier.riskColor}`}>
                Risk: {tier.riskLevel}
              </span>
            </div>

            {/* Tier body */}
            <div className="px-4 py-3">
              <p className="mb-3 text-sm leading-relaxed text-slate-700">{tier.description}</p>

              {/* Examples */}
              <div className="mb-3 flex flex-wrap gap-2">
                {tier.examples.map((ex) => (
                  <span
                    key={ex.symbol}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm"
                  >
                    <strong className={tier.color}>{ex.symbol}</strong>
                    <span className="text-slate-500">{ex.name}</span>
                  </span>
                ))}
              </div>

              {/* Risk and Good For */}
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="rounded-md border border-slate-200 bg-white/80 p-2.5">
                  <p className="mb-0.5 text-[10px] font-bold uppercase text-slate-500">Risk</p>
                  <p className="text-xs leading-relaxed text-slate-700">{tier.risk}</p>
                </div>
                <div className="rounded-md border border-slate-200 bg-white/80 p-2.5">
                  <p className="mb-0.5 text-[10px] font-bold uppercase text-slate-500">Good For</p>
                  <p className="text-xs leading-relaxed text-slate-700">{tier.goodFor}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <KeyTakeaway>
          Coach&apos;s rule for beginners: <strong>Stick to the top 20 coins by market cap for your first 3 months. No exceptions.</strong>
        </KeyTakeaway>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────
   TOPIC 10 — The Crypto Market Ecosystem
   ───────────────────────────────────────────── */

function TopicCryptoMarketEcosystem() {
  return (
    <TopicCard
      id="crypto-market-ecosystem"
      title="The Crypto Market Ecosystem — How Everything Connects"
      icon={<Network className="h-5 w-5" />}
      variant="default"
    >
      <p className="mb-6 text-sm leading-relaxed text-slate-700 sm:text-base">
        The crypto ecosystem is interconnected. Understanding how each piece relates to the others gives you the big picture before you start trading.
      </p>

      {/* Visual ecosystem diagram */}
      <div className="mb-6 space-y-0">
        {/* Top layer: CEX + DEX + Wallets */}
        <div className="rounded-t-xl border border-slate-200 bg-slate-50 p-4">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
            Access Points — Where You Interact
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {/* CEX */}
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <div className="mb-2 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-bold uppercase text-blue-700">CEX</span>
              </div>
              <p className="mb-1.5 text-xs font-semibold text-slate-700">Centralized Exchanges</p>
              <p className="text-xs leading-relaxed text-slate-600">Binance, MEXC, Coinbase — platforms where you buy and sell crypto. You trust them to hold your funds (like a bank).</p>
              <p className="mt-2 rounded bg-blue-100/80 px-2 py-1 text-[10px] font-bold text-blue-800">
                📍 This is where you&apos;ll start trading
              </p>
            </div>

            {/* DEX */}
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-3">
              <div className="mb-2 flex items-center gap-2">
                <Repeat className="h-4 w-4 text-purple-600" />
                <span className="text-xs font-bold uppercase text-purple-700">DEX</span>
              </div>
              <p className="mb-1.5 text-xs font-semibold text-slate-700">Decentralized Exchanges</p>
              <p className="text-xs leading-relaxed text-slate-600">Uniswap, PancakeSwap, dYdX — trade directly from your own wallet. No middleman, no KYC.</p>
              <p className="mt-2 rounded bg-purple-100/80 px-2 py-1 text-[10px] font-bold text-purple-800">
                🔮 Explore later in the bootcamp
              </p>
            </div>

            {/* Wallets */}
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
              <div className="mb-2 flex items-center gap-2">
                <Wallet className="h-4 w-4 text-amber-600" />
                <span className="text-xs font-bold uppercase text-amber-700">Wallets</span>
              </div>
              <p className="mb-1.5 text-xs font-semibold text-slate-700">Your Crypto Storage</p>
              <p className="text-xs leading-relaxed text-slate-600">Software or hardware that stores your crypto. <strong>&ldquo;Not your keys, not your coins&rdquo;</strong> — if your crypto is on an exchange, the exchange technically holds it.</p>
            </div>
          </div>
        </div>

        {/* Connection arrows: Top → Middle */}
        <div className="flex justify-center py-1">
          <div className="flex items-center gap-1 text-slate-400">
            <div className="h-4 border-l-2 border-dashed border-slate-300" />
            <ArrowDown className="h-4 w-4" />
            <div className="h-4 border-l-2 border-dashed border-slate-300" />
          </div>
        </div>

        {/* Middle layer: Tokens + DeFi */}
        <div className="border-x border-slate-200 bg-slate-100/80 p-4">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
            Application Layer — What Runs On Top
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Tokens */}
            <div className="rounded-lg border border-teal-200 bg-teal-50 p-3">
              <div className="mb-2 flex items-center gap-2">
                <Coins className="h-4 w-4 text-teal-600" />
                <span className="text-xs font-bold uppercase text-teal-700">Tokens</span>
              </div>
              <p className="mb-1.5 text-xs leading-relaxed text-slate-600">
                Tokens are <strong>NOT</strong> the same as coins. A coin has its own blockchain (BTC, ETH, SOL). A token is built ON TOP of another blockchain.
              </p>
              <div className="rounded border border-teal-200 bg-teal-100/60 px-2.5 py-1.5">
                <p className="text-xs leading-relaxed text-slate-700">
                  <strong>Example:</strong> USDT is a token that exists on Ethereum, Solana, Tron, and other blockchains. It doesn&apos;t have its own blockchain.
                </p>
              </div>
            </div>

            {/* DeFi */}
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
              <div className="mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
                <span className="text-xs font-bold uppercase text-emerald-700">DeFi</span>
              </div>
              <p className="mb-1.5 text-xs leading-relaxed text-slate-600">
                <strong>Decentralized Finance</strong> — financial applications built on blockchain: lending, borrowing, trading, earning yield — without banks.
              </p>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">Uniswap (trading)</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">Aave (lending)</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">Lido (staking)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Connection arrows: Middle → Bottom */}
        <div className="flex justify-center py-1">
          <div className="flex items-center gap-1 text-slate-400">
            <div className="h-4 border-l-2 border-dashed border-slate-300" />
            <ArrowDown className="h-4 w-4" />
            <div className="h-4 border-l-2 border-dashed border-slate-300" />
          </div>
        </div>

        {/* Bottom layer: Blockchains */}
        <div className="rounded-b-xl border border-slate-200 bg-slate-800 p-4">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-slate-400">
            Foundation Layer — The Networks
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-lg bg-amber-900/40 px-3 py-2">
                <Bitcoin className="h-4 w-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-300">Bitcoin</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-blue-900/40 px-3 py-2">
                <Cpu className="h-4 w-4 text-blue-400" />
                <span className="text-xs font-bold text-blue-300">Ethereum</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-purple-900/40 px-3 py-2">
                <Zap className="h-4 w-4 text-purple-400" />
                <span className="text-xs font-bold text-purple-300">Solana</span>
              </div>
              <span className="text-xs font-medium text-slate-500">etc.</span>
            </div>
          </div>
          <p className="mt-2 text-center text-xs text-slate-400">
            The networks that everything runs on
          </p>
        </div>
      </div>

      <KeyTakeaway>
        The crypto ecosystem is interconnected. Understanding how <strong>blockchains, tokens, DeFi, CEXes, DEXes, and wallets</strong> relate to each other gives you the big picture before you start trading.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────
   TOPIC 11 — Essential Crypto Vocabulary
   ───────────────────────────────────────────── */

function TopicEssentialVocabulary() {
  const terms = [
    { term: 'Token', definition: 'A digital asset built on top of an existing blockchain (e.g., USDT is a token on Ethereum)', category: 'basics' },
    { term: 'Coin', definition: 'A digital asset that has its OWN blockchain (e.g., BTC, ETH, SOL)', category: 'basics' },
    { term: 'Market Cap', definition: 'Total value of a cryptocurrency = Current Price × Circulating Supply', category: 'market' },
    { term: 'Circulating Supply', definition: 'Number of coins/tokens currently available in the market', category: 'market' },
    { term: 'Max Supply', definition: 'Maximum number of coins that will EVER exist (Bitcoin = 21 million)', category: 'market' },
    { term: 'Volume', definition: 'Total amount of a cryptocurrency traded in a given period (24h volume is most common)', category: 'market' },
    { term: 'Liquidity', definition: 'How easily you can buy or sell without significantly affecting the price. High liquidity = easy to trade. Low liquidity = hard to trade, big price impact.', category: 'market' },
    { term: 'Volatility', definition: 'How much a price swings up and down. Crypto is extremely volatile compared to stocks.', category: 'market' },
    { term: 'Bull Market', definition: 'A period of rising prices. "Bulls" are optimistic traders who believe prices will go up.', category: 'sentiment' },
    { term: 'Bear Market', definition: 'A period of falling prices. "Bears" are pessimistic traders who believe prices will go down.', category: 'sentiment' },
    { term: 'Pump', definition: 'A rapid increase in price (often driven by hype or manipulation)', category: 'sentiment' },
    { term: 'Dump', definition: 'A rapid decrease in price (often after a pump)', category: 'sentiment' },
    { term: 'FOMO', definition: 'Fear of Missing Out — the urge to buy because everyone else is buying', category: 'sentiment' },
    { term: 'FUD', definition: 'Fear, Uncertainty, and Doubt — negative news or rumors that cause panic selling', category: 'sentiment' },
    { term: 'Whale', definition: 'An individual or entity that holds a very large amount of cryptocurrency, capable of moving markets', category: 'trading' },
    { term: 'Bag', definition: 'The cryptocurrency you\'re holding. "Bags" usually refers to holdings that are underwater (losing money).', category: 'trading' },
    { term: 'HODL', definition: '"Hold On for Dear Life" — the meme term for holding crypto long-term despite price drops (originally a typo of "hold")', category: 'trading' },
    { term: 'Ape', definition: 'To buy into a cryptocurrency impulsively without research ("I aped into this coin")', category: 'trading' },
    { term: 'DYOR', definition: 'Do Your Own Research — never buy something just because someone told you to', category: 'trading' },
    { term: 'Gas Fee', definition: 'A small fee paid to process a transaction on a blockchain (especially Ethereum). When the network is busy, gas fees increase.', category: 'technical' },
    { term: 'APY', definition: 'Annual Percentage Yield — the yearly return on an investment, including compound interest. Used in staking and DeFi.', category: 'defi' },
    { term: 'TVL', definition: 'Total Value Locked — the total amount of assets deposited in a DeFi protocol. Higher TVL = more trust and usage.', category: 'defi' },
    { term: 'KYC', definition: 'Know Your Customer — the identity verification process required by centralized exchanges (upload ID + selfie)', category: 'security' },
    { term: '2FA', definition: 'Two-Factor Authentication — an extra security layer beyond just a password (Google Authenticator, SMS code)', category: 'security' },
    { term: 'Private Key', definition: 'A secret code that proves ownership of your crypto and allows you to spend it. NEVER share your private key with anyone.', category: 'security' },
    { term: 'Seed Phrase', definition: '12 or 24 words that can restore your wallet. Treat this like the combination to a vault. Write it down on paper. Never store it digitally.', category: 'security' },
    { term: 'Airdrop', definition: 'Free tokens distributed to wallet holders, usually as a marketing strategy or reward for early users', category: 'technical' },
    { term: 'Fork', definition: 'A change to a blockchain\'s rules. A "hard fork" creates a new, separate blockchain (e.g., Bitcoin Cash forked from Bitcoin)', category: 'technical' },
    { term: 'Slippage', definition: 'The difference between the expected price of a trade and the actual executed price. Common on DEXes with low liquidity.', category: 'trading' },
    { term: 'Liquidation', definition: 'When your leveraged position is forcibly closed because your margin is insufficient. You lose your collateral.', category: 'trading' },
  ]

  const categoryLabels: Record<string, { label: string; color: string; bg: string }> = {
    basics: { label: 'Basics', color: 'text-amber-700', bg: 'bg-amber-100' },
    market: { label: 'Market', color: 'text-blue-700', bg: 'bg-blue-100' },
    sentiment: { label: 'Sentiment', color: 'text-purple-700', bg: 'bg-purple-100' },
    trading: { label: 'Trading', color: 'text-emerald-700', bg: 'bg-emerald-100' },
    technical: { label: 'Technical', color: 'text-slate-700', bg: 'bg-slate-200' },
    defi: { label: 'DeFi', color: 'text-teal-700', bg: 'bg-teal-100' },
    security: { label: 'Security', color: 'text-red-700', bg: 'bg-red-100' },
  }

  return (
    <TopicCard
      id="essential-vocabulary"
      title="Essential Crypto Vocabulary — 30 Terms Every Trader Must Know"
      icon={<BookOpen className="h-5 w-5" />}
      variant="default"
    >
      <p className="mb-4 text-sm leading-relaxed text-slate-700">
        Before you trade, you need to speak the language. Here are the 30 terms you&apos;ll encounter every single day.
      </p>

      {/* Category legend */}
      <div className="mb-4 flex flex-wrap gap-2">
        {Object.entries(categoryLabels).map(([key, val]) => (
          <span
            key={key}
            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${val.bg} ${val.color}`}
          >
            {val.label}
          </span>
        ))}
      </div>

      {/* Scrollable vocabulary table */}
      <div className="max-h-[520px] overflow-y-auto rounded-lg border border-slate-200 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300">
        <table className="w-full text-left text-sm">
          <thead className="sticky top-0 z-10 bg-slate-800">
            <tr>
              <th className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white">
                Term
              </th>
              <th className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white">
                Definition
              </th>
            </tr>
          </thead>
          <tbody>
            {terms.map((item, idx) => {
              const cat = categoryLabels[item.category]
              return (
                <tr
                  key={item.term}
                  className={`border-b border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} hover:bg-slate-100/80`}
                >
                  <td className="whitespace-nowrap px-4 py-2.5 align-top">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">{item.term}</span>
                      <span className={`hidden sm:inline-flex rounded-full px-1.5 py-0.5 text-[8px] font-bold uppercase ${cat.bg} ${cat.color}`}>
                        {cat.label}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {item.definition}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <KeyTakeaway>
          Learn these terms <strong>before</strong> you start trading. When someone says &ldquo;the whales are accumulating, don&apos;t FOMO&rdquo; — you need to know exactly what that means.
        </KeyTakeaway>
      </div>
    </TopicCard>
  )
}

/* ─────────────────────────────────────────────
   MAIN EXPORT — Morning Block
   ───────────────────────────────────────────── */

export function MorningBlock() {
  return (
    <section id="morning-block" aria-labelledby="morning-block-heading">
      {/* Section divider */}
      <SectionDivider
        title="MORNING BLOCK — HOURS 1–3: WHAT IS CRYPTO AND WHY DOES IT EXIST?"
        icon={<Sun className="h-5 w-5" />}
      />

      {/* Topics */}
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <TopicWhatIsMoney />
        <Topic2008Crisis />
        <TopicWhatIsBlockchain />
        <TopicBlockchainDeeper />
        <TopicWhatIsBitcoin />
        <TopicWhatIsEthereum />
        <TopicEthereumVsBitcoin />
        <TopicWhatAreStablecoins />
        <TopicWhatAreAltcoins />
        <TopicCryptoMarketEcosystem />
        <TopicEssentialVocabulary />
      </div>
    </section>
  )
}
