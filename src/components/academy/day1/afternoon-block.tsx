'use client'

import React from 'react'
import {
  Shield,
  Lock,
  Key,
  AlertTriangle,
  Eye,
  Bug,
  Fish,
  UserX,
  TrendingUp,
  Gift,
  Smartphone,
  Building2,
  Globe,
  CheckCircle2,
  ArrowRightLeft,
  Bookmark,
  FileCheck,
  MessageSquareWarning,
  Coins,
} from 'lucide-react'
import { SectionDivider } from '@/components/academy/section-divider'
import { TopicCard } from '@/components/academy/topic-card'
import { StepList } from '@/components/academy/step-list'
import { ComparisonTable } from '@/components/academy/comparison-table'
import { KeyTakeaway } from '@/components/academy/key-takeaway'
import { ChecklistItem } from '@/components/academy/checklist-item'
import { ScamCard } from '@/components/academy/scam-card'

/* ------------------------------------------------------------------ */
/*  TOPIC 1 — What Is a Crypto Exchange?                              */
/* ------------------------------------------------------------------ */

function Topic1() {
  return (
    <TopicCard
      id="topic-exchanges"
      title="What Is a Crypto Exchange? — Your Gateway to the Market"
      icon={<ArrowRightLeft />}
    >
      {/* Definition */}
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        A <span className="font-bold text-amber-700">crypto exchange</span> is a platform where you
        can buy, sell, and trade cryptocurrencies. It&rsquo;s your on-ramp from traditional money
        (fiat) into the world of crypto.
      </p>

      {/* CEX vs DEX — side-by-side cards */}
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        {/* CEX Card */}
        <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-slate-50 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-blue-600" />
            <h4 className="text-base font-bold text-blue-900 sm:text-lg">
              Centralized Exchange (CEX)
            </h4>
          </div>
          <p className="mb-3 text-sm text-slate-600 sm:text-base">
            <span className="font-semibold text-slate-800">Examples:</span> Binance, MEXC, Coinbase
          </p>
          <p className="mb-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            A company operates the platform, holds your funds, and requires KYC (identity
            verification). Think of it like a stock brokerage.
          </p>
          <ul className="space-y-1.5 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>Easier to use, more features</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-500" />
              <span>You trust them with your money</span>
            </li>
          </ul>
        </div>

        {/* DEX Card */}
        <div className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-slate-50 p-4 sm:p-5">
          <div className="mb-3 flex items-center gap-2">
            <Globe className="h-5 w-5 text-purple-600" />
            <h4 className="text-base font-bold text-purple-900 sm:text-lg">
              Decentralized Exchange (DEX)
            </h4>
          </div>
          <p className="mb-3 text-sm text-slate-600 sm:text-base">
            <span className="font-semibold text-slate-800">Examples:</span> Uniswap, PancakeSwap
          </p>
          <p className="mb-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            No company, no KYC &mdash; you trade directly from your own wallet using smart contracts.
          </p>
          <ul className="space-y-1.5 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
              <span>You maintain full control of your funds</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
              <span>Harder to use, fewer features</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Why we use CEXes */}
      <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50/60 p-4 sm:p-5">
        <h4 className="mb-2 text-sm font-bold text-amber-800 sm:text-base">
          For this bootcamp, we use CEXes (Binance and MEXC) because they offer:
        </h4>
        <ul className="grid gap-1.5 text-sm text-slate-700 sm:grid-cols-2 sm:text-base">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
            More trading pairs and higher liquidity
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
            Advanced order types (limit, stop-loss, OCO)
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
            Customer support
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
            Fiat on-ramps
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
            Earn products, copy trading, and other features
          </li>
        </ul>
      </div>

      {/* Key risk */}
      <div className="mb-4 rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-700">
              Key Risk of CEXes
            </p>
            <p className="text-sm font-semibold text-red-900 sm:text-base">
              &ldquo;Not your keys, not your coins.&rdquo; If the exchange gets hacked, goes
              bankrupt, or freezes your account, you could lose your funds. This happened with{' '}
              <span className="font-bold">FTX in 2022</span>.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        Centralized exchanges are the easiest way to start, but always remember: when your crypto is
        on an exchange, the exchange controls it &mdash; not you.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ------------------------------------------------------------------ */
/*  TOPIC 2 — Why Binance AND MEXC?                                    */
/* ------------------------------------------------------------------ */

function Topic2() {
  return (
    <TopicCard
      id="topic-binance-mexc"
      title="Why Binance AND MEXC? — Two Platforms, Strategic Advantage"
      icon={<Coins />}
      variant="highlight"
    >
      {/* Why two exchanges */}
      <p className="mb-4 text-sm leading-relaxed text-slate-700 sm:text-base">
        Using <span className="font-bold text-amber-700">two exchanges</span> gives you a strategic
        edge. Here&rsquo;s why:
      </p>
      <ul className="mb-6 grid gap-2 text-sm text-slate-700 sm:grid-cols-2 sm:text-base">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
          <span>
            <strong className="text-slate-900">Redundancy</strong> &mdash; if one goes down, you
            still have access
          </span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
          <span>
            <strong className="text-slate-900">Price differences</strong> &mdash; arbitrage
            opportunities between exchanges
          </span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
          <span>
            <strong className="text-slate-900">Different strengths</strong> &mdash; each excels in
            different areas
          </span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
          <span>
            <strong className="text-slate-900">Security diversification</strong> &mdash; don&rsquo;t
            put all eggs in one basket
          </span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
          <span>
            <strong className="text-slate-900">Feature access</strong> &mdash; combined features
            exceed either alone
          </span>
        </li>
      </ul>

      {/* Binance & MEXC strength cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        {/* Binance */}
        <div className="rounded-xl border border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50/50 p-4 sm:p-5">
          <h4 className="mb-3 flex items-center gap-2 text-base font-bold text-amber-900 sm:text-lg">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-xs font-black text-white">
              B
            </span>
            Binance Strengths
          </h4>
          <ul className="mb-3 space-y-1.5 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              Largest crypto exchange by volume
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              Most listed coins (350+)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              Highest liquidity
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              Binance Earn / Launchpad / Launchpool
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
              Most comprehensive ecosystem
            </li>
          </ul>
          <p className="text-sm font-semibold text-amber-800 sm:text-base">
            ✅ Better for: Spot trading, finding lesser-known coins, earning passive income
          </p>
        </div>

        {/* MEXC */}
        <div className="rounded-xl border border-teal-300 bg-gradient-to-br from-teal-50 to-cyan-50/50 p-4 sm:p-5">
          <h4 className="mb-3 flex items-center gap-2 text-base font-bold text-teal-900 sm:text-lg">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-500 text-xs font-black text-white">
              M
            </span>
            MEXC Strengths
          </h4>
          <ul className="mb-3 space-y-1.5 text-sm text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
              Lower spot trading fees (0.08% vs 0.1%)
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
              Cleaner beginner-friendly interface
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
              Built-in DEX access
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
              More transparent copy trading
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500" />
              Better futures trading interface
            </li>
          </ul>
          <p className="text-sm font-semibold text-teal-800 sm:text-base">
            ✅ Better for: Beginners learning, futures trading, lower-fee trading
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mb-4">
        <ComparisonTable
          headers={['Feature', 'Binance', 'MEXC']}
          highlightColumn={0}
          rows={[
            ['Spot Trading Fees', '0.1%', '0.08%'],
            ['Number of Listed Coins', '350+', '~300'],
            ['Liquidity', 'Highest', 'High'],
            ['Beginner Friendly', 'Moderate', 'Very'],
            ['Futures Trading', 'Good', 'Excellent'],
            ['Earn Products', 'Extensive', 'Good'],
            ['Built-in DEX Access', 'No', 'Yes'],
            ['Copy Trading', 'Yes', 'More Transparent'],
            ['Ecosystem Size', 'Largest', 'Growing'],
          ]}
        />
      </div>

      {/* Strategy */}
      <div className="mb-4 rounded-lg border-l-4 border-l-green-500 bg-green-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-green-700">
              Strategy
            </p>
            <p className="text-sm font-semibold text-green-900 sm:text-base">
              Use <strong>BOTH</strong>. Binance as primary. MEXC as secondary and for futures.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        Two exchanges mean more opportunities, better prices, and less risk. Binance for depth and
        ecosystem, MEXC for fees and futures.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ------------------------------------------------------------------ */
/*  TOPIC 3 — Setting Up Binance                                      */
/* ------------------------------------------------------------------ */

function Topic3() {
  const binanceSteps = [
    {
      number: 1,
      title: 'Registration',
      description:
        'Go to binance.com (VERIFY the URL carefully). Register with your email. Create a STRONG password — 12+ characters with mixed case, numbers, and symbols.',
    },
    {
      number: 2,
      title: 'KYC Verification',
      description:
        'Go to Identity Verification. Select your country and ID type. Upload clear photos of your government-issued ID. Take a selfie. Wait for approval (usually within hours).',
    },
    {
      number: 3,
      title: 'Google Authenticator Setup',
      description:
        'Download the Google Authenticator app on your phone. In Binance: Settings → Security → Google Authentication → Enable. Scan the QR code. SAVE THE BACKUP KEY on paper — not digitally!',
    },
    {
      number: 4,
      title: 'Anti-Phishing Code',
      description:
        'Settings → Security → Anti-Phishing Code. Set a unique word or phrase that only you know. Every legitimate Binance email will include this code. If an email doesn\'t have it, it\'s fake.',
    },
    {
      number: 5,
      title: 'Withdrawal Whitelist',
      description:
        'Settings → Security → Withdrawal Whitelist → Enable. Add only the wallet addresses you trust. This prevents anyone from withdrawing to an unknown address even if they access your account.',
    },
    {
      number: 6,
      title: 'Bookmark the Official URL',
      description:
        'Bookmark binance.com in your browser. ALWAYS use the bookmark to visit Binance. NEVER click links from emails, DMs, or search ads — they could be phishing links.',
    },
  ]

  return (
    <TopicCard
      id="topic-setup-binance"
      title="Setting Up Binance — Step-by-Step Walkthrough"
      icon={<Building2 />}
      variant="success"
    >
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
          <Lock className="h-3.5 w-3.5" /> Security-Critical Steps Below
        </span>
      </div>

      <StepList steps={binanceSteps} />

      {/* Security badges for critical steps */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          <Key className="h-3.5 w-3.5" /> Step 3: Save backup key on paper
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          <Eye className="h-3.5 w-3.5" /> Step 4: Anti-phishing protects you from fake emails
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          <Bookmark className="h-3.5 w-3.5" /> Step 6: Always use bookmarked URL
        </span>
      </div>

      <KeyTakeaway>
        Take your time with each step. The 30 minutes you spend securing your account now can save
        you from devastating losses later.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ------------------------------------------------------------------ */
/*  TOPIC 4 — Setting Up MEXC                                          */
/* ------------------------------------------------------------------ */

function Topic4() {
  const mexcSteps = [
    {
      number: 1,
      title: 'Registration',
      description:
        'Go to mexc.com (VERIFY the URL carefully). Register with your email. Create a strong, unique password — different from your Binance password!',
    },
    {
      number: 2,
      title: 'KYC Verification',
      description:
        'Same process as Binance: navigate to Identity Verification, select your country and ID type, upload clear photos of your ID, take a selfie, and wait for approval.',
    },
    {
      number: 3,
      title: 'Google Authenticator',
      description:
        'Same setup as Binance: Download Google Authenticator, go to Security settings → Google Authentication → Enable, scan the QR code, and SAVE THE BACKUP KEY on paper.',
    },
    {
      number: 4,
      title: 'Anti-Phishing Code',
      description:
        'Navigate to Security settings → Set your anti-phishing code. Use a different code than your Binance one for added security. Every legitimate MEXC email will show this code.',
    },
    {
      number: 5,
      title: 'Withdrawal Whitelist',
      description:
        'Security settings → Withdrawal Whitelist → Enable. Add only your approved wallet addresses. This adds a critical layer of protection for your funds.',
    },
    {
      number: 6,
      title: 'Bookmark the Official URL',
      description:
        'Bookmark mexc.com in your browser. ALWAYS use the bookmark to visit MEXC. NEVER click links from emails, DMs, or search ads.',
    },
  ]

  return (
    <TopicCard
      id="topic-setup-mexc"
      title="Setting Up MEXC — Step-by-Step Walkthrough"
      icon={<Globe />}
      variant="success"
    >
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
          <Lock className="h-3.5 w-3.5" /> Security-Critical Steps Below
        </span>
      </div>

      <StepList steps={mexcSteps} />

      {/* Security badges */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          <Key className="h-3.5 w-3.5" /> Step 3: Save backup key on paper
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          <Eye className="h-3.5 w-3.5" /> Step 4: Use a different anti-phishing code than Binance
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
          <Bookmark className="h-3.5 w-3.5" /> Step 6: Always use bookmarked URL
        </span>
      </div>

      <KeyTakeaway>
        Use a different password and anti-phishing code for MEXC than Binance. If one account is
        compromised, the other stays safe.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ------------------------------------------------------------------ */
/*  TOPIC 5 — The Complete Security Checklist                         */
/* ------------------------------------------------------------------ */

function Topic5() {
  return (
    <TopicCard
      id="topic-security-checklist"
      title="The Complete Security Checklist — Protect Everything"
      icon={<Shield />}
      variant="warning"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        Work through every item on this checklist before depositing significant funds. Your security
        is only as strong as your weakest link.
      </p>

      {/* Account Security */}
      <div className="mb-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-800 sm:text-base">
          <Lock className="h-4 w-4 text-red-600 sm:h-5 sm:w-5" />
          Account Security
        </h4>
        <div className="rounded-xl border border-red-200 bg-red-50/50 p-3 sm:p-4">
          <ChecklistItem>
            Google Authenticator 2FA enabled on <strong>BOTH</strong> accounts (NOT SMS)
          </ChecklistItem>
          <ChecklistItem>
            Anti-phishing code set on <strong>BOTH</strong> accounts
          </ChecklistItem>
          <ChecklistItem>
            Withdrawal whitelist activated on <strong>BOTH</strong> accounts
          </ChecklistItem>
          <ChecklistItem>
            Password is unique (not used on any other website)
          </ChecklistItem>
          <ChecklistItem>
            Password is 12+ characters with mixed case, numbers, and symbols
          </ChecklistItem>
          <ChecklistItem>
            Backup key for Google Authenticator written on paper (not stored digitally)
          </ChecklistItem>
        </div>
      </div>

      {/* Behavioral Security */}
      <div className="mb-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-800 sm:text-base">
          <Eye className="h-4 w-4 text-amber-600 sm:h-5 sm:w-5" />
          Behavioral Security
        </h4>
        <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-3 sm:p-4">
          <ChecklistItem>
            I have bookmarked the official URLs for Binance and MEXC
          </ChecklistItem>
          <ChecklistItem>
            I will <strong>NEVER</strong> click a link from an email or DM claiming to be an
            exchange
          </ChecklistItem>
          <ChecklistItem>
            I will <strong>NEVER</strong> share my password, 2FA codes, or private keys with anyone
          </ChecklistItem>
          <ChecklistItem>
            I will <strong>NEVER</strong> send crypto to someone who promises to double it
          </ChecklistItem>
          <ChecklistItem>
            I will <strong>NEVER</strong> trust a &ldquo;support agent&rdquo; who DMs me first
          </ChecklistItem>
          <ChecklistItem>
            I understand that Binance/MEXC support will <strong>NEVER</strong> ask for my password or
            2FA
          </ChecklistItem>
        </div>
      </div>

      {/* Device Security */}
      <div className="mb-5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-700 sm:text-base">
          <Smartphone className="h-4 w-4 text-slate-600 sm:h-5 sm:w-5" />
          Device Security
        </h4>
        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-3 sm:p-4">
          <ChecklistItem>
            My phone has a PIN/biometric lock
          </ChecklistItem>
          <ChecklistItem>
            My computer has up-to-date antivirus software
          </ChecklistItem>
          <ChecklistItem>
            I don&rsquo;t use public WiFi for trading (or I use a VPN if I must)
          </ChecklistItem>
          <ChecklistItem>
            I lock my computer when I step away
          </ChecklistItem>
        </div>
      </div>

      {/* Warning stat banner */}
      <div className="rounded-xl border-2 border-red-400 bg-gradient-to-r from-red-600 to-red-700 p-4 text-center shadow-sm sm:p-5">
        <AlertTriangle className="mx-auto mb-2 h-7 w-7 text-red-200 sm:h-8 sm:w-8" />
        <p className="text-base font-bold text-white sm:text-lg">
          Over $1.7 Billion Stolen in 2023
        </p>
        <p className="mt-1 text-sm text-red-100 sm:text-base">
          Through hacks, scams, and phishing attacks. Don&rsquo;t be the next victim &mdash; secure
          your accounts now.
        </p>
      </div>

      <KeyTakeaway>
        Security isn&rsquo;t a one-time setup &mdash; it&rsquo;s a habit. Every item on this
        checklist exists because someone lost money by skipping it.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ------------------------------------------------------------------ */
/*  TOPIC 6 — Common Scams Every Beginner Must Know                   */
/* ------------------------------------------------------------------ */

function Topic6() {
  return (
    <TopicCard
      id="topic-common-scams"
      title="Common Scams Every Beginner Must Know"
      icon={<Bug />}
      variant="warning"
    >
      <p className="mb-5 text-sm leading-relaxed text-slate-700 sm:text-base">
        The crypto space is full of scammers targeting beginners. Learn these common scams now so
        you can recognize and avoid them.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <ScamCard
          title="Phishing"
          description="Fake websites or emails that look identical to Binance/MEXC. They steal your login credentials when you enter them on the fake site."
          prevention="Always use bookmarked URLs. Check for your anti-phishing code in every email."
          icon={<Fish className="h-5 w-5" />}
        />

        <ScamCard
          title="Pig Butchering Scam"
          description="A stranger befriends you online, builds trust over weeks, then introduces you to a 'guaranteed' crypto investment. The platform is fake — your money goes straight to the scammer."
          prevention="Never invest through a platform someone you met online recommended."
          icon={<Fish className="h-5 w-5" />}
        />

        <ScamCard
          title="Impersonation"
          description="Someone pretends to be a crypto influencer, support agent, or project team member. They use fake profiles and even deepfakes to gain your trust."
          prevention="Real support will never DM you first or ask for credentials. Always verify through official channels."
          icon={<UserX className="h-5 w-5" />}
        />

        <ScamCard
          title="Pump and Dump"
          description="A group artificially inflates a small coin's price through coordinated buying and hype, then dumps their holdings. Late buyers are left with heavy losses."
          prevention="Don't buy coins that suddenly pumped without a fundamental reason. Avoid FOMO."
          icon={<TrendingUp className="h-5 w-5" />}
        />

        <ScamCard
          title="Fake Giveaway"
          description="'Send me 1 ETH and I'll send back 2 ETH!' — This classic scam promises to multiply your crypto. Once you send, you never get anything back."
          prevention="If it sounds too good to be true, it is. No one will ever double your crypto for free."
          icon={<Gift className="h-5 w-5" />}
        />

        <ScamCard
          title="Fake Apps"
          description="Malicious apps disguised as legitimate wallets or exchanges appear in app stores or through phishing links. They steal your keys and funds."
          prevention="Only download apps from official websites' links. Verify the developer name and reviews before installing."
          icon={<Smartphone className="h-5 w-5" />}
        />
      </div>

      {/* Final warning */}
      <div className="mt-5 rounded-lg border-l-4 border-l-red-500 bg-red-50 p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <MessageSquareWarning className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-red-700">
              Remember
            </p>
            <p className="text-sm font-semibold text-red-900 sm:text-base">
              Scammers are constantly evolving their tactics. The best defense is skepticism: if
              someone is rushing you, promising guaranteed returns, or asking for your credentials,
              <span className="font-bold"> it&rsquo;s a scam</span>.
            </p>
          </div>
        </div>
      </div>

      <KeyTakeaway>
        The most dangerous scam is the one you don&rsquo;t see coming. Stay skeptical, verify
        everything, and never rush into any investment decision.
      </KeyTakeaway>
    </TopicCard>
  )
}

/* ------------------------------------------------------------------ */
/*  MAIN EXPORT — AfternoonBlock                                      */
/* ------------------------------------------------------------------ */

export function AfternoonBlock() {
  return (
    <section id="afternoon" aria-labelledby="afternoon-block-heading" className="w-full">
      {/* Section Divider */}
      <SectionDivider
        title="AFTERNOON BLOCK — HOURS 5–6: EXCHANGES, ACCOUNTS & SECURITY"
        icon={<Shield />}
      />

      {/* Topics */}
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <Topic1 />
        <Topic2 />
        <Topic3 />
        <Topic4 />
        <Topic5 />
        <Topic6 />
      </div>
    </section>
  )
}
