'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  BookOpen,
  TrendingUp,
  BarChart3,
  Shield,
  ShoppingCart,
  Activity,
  Zap,
  Brain,
  Target,
  Trophy,
  Sun,
  Clock,
  Coffee,
  Sunset,
  Moon,
  FlaskConical,
  PanelLeftClose,
  PanelLeftOpen,
  Hash,
  CheckCircle2,
  Circle,
} from 'lucide-react'

// ── Progress Cache Keys ──────────────────────────────────────────────────
const CACHE_KEY_DAY = 'crypto-academy-active-day'
const CACHE_KEY_SESSION = 'crypto-academy-active-session'
const CACHE_KEY_COMPLETED = 'crypto-academy-completed-sessions'
const CACHE_KEY_SIDEBAR = 'crypto-academy-sidebar-open'

function loadCompletedSessions(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(CACHE_KEY_COMPLETED)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw))
  } catch { return new Set() }
}

function loadSidebarOpen(): boolean | null {
  if (typeof window === 'undefined') return null
  try {
    const v = localStorage.getItem(CACHE_KEY_SIDEBAR)
    return v === null ? null : v === 'true'
  } catch { return null }
}

function saveCache(key: string, value: string) {
  try { localStorage.setItem(key, value) } catch { /* noop */ }
}

// ── Subtopic data per session ────────────────────────────────────────────
// We extract these dynamically from the DOM, but also provide static
// fallback labels for sessions that haven't rendered yet.
interface SubtopicItem {
  id: string
  label: string
}

interface SessionMeta {
  id: string
  label: string
  icon: typeof Sun
  time: string
  subtopics: SubtopicItem[]
}

// ── Day metadata ─────────────────────────────────────────────────────────
const DAYS = [
  {
    day: 1, title: 'Crypto Foundations', icon: BookOpen, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10',
    sessions: [
      { id: 'morning-block', label: 'Morning: What Is Crypto', icon: Sun, time: '9:00 AM', subtopics: [
        { id: 'what-is-money', label: 'What Is Money?' },
        { id: '2008-crisis', label: 'The 2008 Financial Crisis' },
        { id: 'what-is-blockchain', label: 'What Is Blockchain?' },
        { id: 'blockchain-deeper', label: 'Blockchain — Deeper Understanding' },
        { id: 'what-is-bitcoin', label: 'What Is Bitcoin?' },
        { id: 'what-is-ethereum', label: 'What Is Ethereum?' },
        { id: 'ethereum-vs-bitcoin', label: 'Ethereum vs. Bitcoin' },
        { id: 'what-are-stablecoins', label: 'What Are Stablecoins?' },
        { id: 'what-are-altcoins', label: 'What Are Altcoins?' },
        { id: 'crypto-market-ecosystem', label: 'The Crypto Market Ecosystem' },
        { id: 'essential-vocabulary', label: 'Essential Crypto Vocabulary' },
      ]},
      { id: 'late-morning', label: 'Late Morning: Price Drivers', icon: Coffee, time: '10:30 AM', subtopics: [
        { id: 'why-prices-move', label: 'Why Do Crypto Prices Move?' },
        { id: 'market-cycle', label: 'The Crypto Market Cycle' },
        { id: 'bitcoin-halving', label: 'Bitcoin Halving' },
      ]},
      { id: 'afternoon', label: 'Afternoon: Exchanges & Security', icon: Sunset, time: '1:00 PM', subtopics: [
        { id: 'topic-exchanges', label: 'What Is a Crypto Exchange?' },
        { id: 'topic-binance-mexc', label: 'Why Binance AND MEXC?' },
        { id: 'topic-setup-binance', label: 'Setting Up Binance' },
        { id: 'topic-setup-mexc', label: 'Setting Up MEXC' },
        { id: 'topic-security-checklist', label: 'The Complete Security Checklist' },
        { id: 'topic-common-scams', label: 'Common Scams Every Beginner Must Know' },
      ]},
      { id: 'late-afternoon', label: 'Late Afternoon: Interface Tour', icon: Moon, time: '3:00 PM', subtopics: [
        { id: 'binance-interface', label: 'Binance Interface — Complete Tour' },
        { id: 'mexc-interface', label: 'MEXC Interface — Complete Tour' },
        { id: 'binance-vs-mexc', label: 'Binance vs. MEXC — Comparison' },
        { id: 'deposit-funds', label: 'How to Deposit Funds' },
        { id: 'trading-pairs', label: 'Understanding Trading Pairs' },
        { id: 'market-vs-limit', label: 'Market vs. Limit Orders' },
      ]},
      { id: 'final-block', label: 'Final: TradingView & Quiz', icon: Trophy, time: '4:30 PM', subtopics: [
        { id: 'topic-8-1', label: 'What Is TradingView?' },
        { id: 'topic-8-2', label: 'Setting Up TradingView Workspace' },
        { id: 'topic-8-3', label: 'Understanding What a Chart Is' },
        { id: 'topic-8-4', label: 'The Concept of Timeframes' },
        { id: 'topic-8-5', label: 'Day 1 Self-Check Quiz' },
        { id: 'topic-8-6', label: 'Day 1 Key Takeaways' },
        { id: 'topic-8-7', label: 'Day 1 Homework' },
      ]},
    ],
  },
  {
    day: 2, title: 'Technical Analysis & SMC', icon: TrendingUp, color: 'text-amber-400', bgColor: 'bg-amber-500/10',
    sessions: [
      { id: 'd2-morning', label: 'Session 1: S/R & Market Structure', icon: Sun, time: '9:00 AM', subtopics: [
        { id: 'd2-what-is-support', label: 'What Is Support?' },
        { id: 'd2-what-is-resistance', label: 'What Is Resistance?' },
        { id: 'd2-dual-nature-sr', label: 'The Dual Nature of S/R & The S/R Flip' },
        { id: 'd2-sr-drawing-rules', label: 'S/R Drawing Rules' },
        { id: 'd2-market-structure', label: 'Market Structure' },
        { id: 'd2-types-of-sr', label: 'Types of Support and Resistance' },
      ]},
      { id: 'd2-late-morning', label: 'Session 2: SMC Concepts (BOS/CHoCH/OB/FVG/Breaker/IDM)', icon: Coffee, time: '10:30 AM', subtopics: [
        { id: 'd2-smc-bos-choch', label: 'SMC Concepts — BOS & CHoCH' },
        { id: 'd2-order-blocks', label: 'Order Blocks' },
        { id: 'd2-fvg', label: 'Fair Value Gaps (FVG)' },
        { id: 'd2-liquidity-sweeps', label: 'Liquidity Sweeps' },
        { id: 'd2-breaker-blocks', label: 'Breaker Blocks — Failed OBs That Flip' },
        { id: 'd2-inducement', label: 'Inducement (IDM) — Smart Money Traps' },
        { id: 'd2-rejection-blocks', label: 'Rejection Blocks — Long Wicks' },
        { id: 'd2-smc-entry-checklist', label: 'SMC Entry Checklist' },
        { id: 'd2-smc-trading-reference', label: 'SMC Quick Reference' },
        { id: 'd2-smc-integration', label: 'Putting SMC Concepts Together' },
      ]},
      { id: 'd2-midday', label: 'Session 3: Trend Analysis & Structure Deep Dive', icon: Clock, time: '12:00 PM', subtopics: [
        { id: 'd2-market-structure-trends', label: 'Market Structure — Trends' },
        { id: 'd2-identifying-swings', label: 'Identifying HH/HL/LH/LL' },
        { id: 'd2-break-of-structure', label: 'Break of Structure (BOS)' },
        { id: 'd2-choch-vs-bos', label: 'Change of Character vs. BOS' },
        { id: 'd2-trend-lines', label: 'Trend Lines' },
        { id: 'd2-trend-channels', label: 'Trend Channels' },
        { id: 'd2-practice-market-structure', label: 'Practice — Market Structure' },
        { id: 'd2-multi-timeframe-structure', label: 'Multi-Timeframe Structure' },
        { id: 'd2-structure-transitions', label: 'Structure Transitions' },
        { id: 'd2-internal-external-structure', label: 'Internal vs External Structure' },
        { id: 'd2-trend-strength', label: 'Trend Strength Assessment' },
        { id: 'd2-structure-exercise', label: 'Practical Structure Labeling' },
      ]},
      { id: 'd2-afternoon', label: 'Session 4: EMAs & EMA Trading Strategies', icon: Sunset, time: '1:00 PM', subtopics: [
        { id: 'd2-moving-averages', label: 'Moving Averages' },
        { id: 'd2-three-emas', label: 'The Three Key EMAs' },
        { id: 'd2-ema-signal-rules', label: 'EMA Signal Rules' },
        { id: 'd2-golden-death-cross', label: 'Golden Cross & Death Cross' },
        { id: 'd2-emas-dynamic-sr', label: 'EMAs as Dynamic S/R' },
        { id: 'd2-ema-crossover-strategy', label: 'EMA Crossover Strategy' },
        { id: 'd2-when-emas-fail', label: 'When EMAs Fail' },
        { id: 'd2-ema-sr-confluence', label: 'EMA + S/R Confluence Trading' },
        { id: 'd2-ema-trading-rules-summary', label: '10 Immutable EMA Rules' },
        { id: 'd2-ema-practice-setups', label: 'Practice: Identify EMA Setups' },
        { id: 'd2-ema-lab', label: 'EMA Practice Lab' },
      ]},
      { id: 'd2-late-afternoon', label: 'Session 5: Integration & Walkthrough', icon: Moon, time: '3:00 PM', subtopics: [
        { id: 'd2-breakout-fakeout-ref', label: 'Breakout vs Fakeout — Quick Ref' },
        { id: 'd2-breakout-trading-steps', label: 'Breakout Trading Step-by-Step' },
        { id: 'd2-anatomy-of-trade', label: 'Anatomy of a High-Probability Trade' },
        { id: 'd2-integration-framework', label: 'The Complete Integration Framework' },
        { id: 'd2-full-walkthrough', label: 'Full Walkthrough: BTC/USDT Analysis' },
        { id: 'd2-when-not-to-trade', label: 'When NOT to Trade' },
        { id: 'd2-mastery-checklist', label: 'Day 2 Mastery Checklist' },
        { id: 'd2-integration-lab', label: 'Integration Lab' },
      ]},
      { id: 'd2-final', label: 'Session 6: Review & MEXC Lab', icon: Trophy, time: '4:30 PM', subtopics: [
        { id: 'd2-key-takeaways', label: 'Day 2 Key Takeaways' },
        { id: 'd2-mexc-lab', label: 'MEXC Spot Trading Lab' },
        { id: 'd2-quiz', label: 'Day 2 Quiz' },
        { id: 'd2-homework', label: 'Day 2 Homework' },
      ]},
    ],
  },
  {
    day: 3, title: 'Price Action & Indicators', icon: BarChart3, color: 'text-blue-400', bgColor: 'bg-blue-500/10',
    sessions: [
      { id: 'd3-morning', label: 'Session 1: Candlestick Patterns', icon: Sun, time: '9:00 AM', subtopics: [
        { id: 'd3-why-candlesticks', label: 'Why Candlesticks Matter' },
        { id: 'd3-candlestick-anatomy', label: 'Candlestick Anatomy' },
        { id: 'd3-candlestick-context', label: 'How to Read Candlestick Context' },
        { id: 'd3-bullish-patterns', label: 'Bullish Reversal Patterns' },
        { id: 'd3-bearish-patterns', label: 'Bearish Reversal Patterns' },
        { id: 'd3-indecision-patterns', label: 'Indecision Patterns' },
        { id: 'd3-pattern-level-combo', label: 'Pattern + Level Combination' },
        { id: 'd3-practice-btc', label: 'Practice — BTC/USDT' },
        { id: 'd3-practice-eth', label: 'Practice — ETH/USDT' },
      ]},
      { id: 'd3-late-morning', label: 'Session 2: Reversal Patterns + TradingView', icon: Coffee, time: '10:30 AM', subtopics: [
        { id: 'd3-bullish-patterns-lm', label: '5 Bullish Reversal Patterns' },
        { id: 'd3-bearish-patterns-lm', label: '5 Bearish Reversal Patterns' },
        { id: 'd3-pattern-level-confluence', label: 'Pattern + Level = High Probability' },
      ]},
      { id: 'd3-midday', label: 'Session 3: RSI & Divergence', icon: Clock, time: '12:00 PM', subtopics: [
        { id: 'd3-what-is-rsi', label: 'What Is RSI?' },
        { id: 'd3-rsi-basic-reading', label: 'RSI — The Basic Reading' },
        { id: 'd3-rsi-mistake', label: 'The Biggest RSI Mistake' },
        { id: 'd3-rsi-divergence', label: 'RSI Divergence' },
        { id: 'd3-rsi-divergence-pitfalls', label: 'RSI Divergence — Common Pitfalls' },
        { id: 'd3-rsi-hidden-divergence', label: 'RSI Hidden Divergence' },
        { id: 'd3-practice-rsi-basic', label: 'Practice — RSI Setup' },
        { id: 'd3-practice-rsi-divergence', label: 'Practice — RSI Divergence Hunt' },
      ]},
      { id: 'd3-afternoon', label: 'Session 4: MACD & Volume', icon: Sunset, time: '1:00 PM', subtopics: [
        { id: 'd3-what-is-macd', label: 'What Is MACD?' },
        { id: 'd3-macd-components', label: 'MACD — The Three Components' },
        { id: 'd3-macd-signals', label: 'MACD — Reading the Signals' },
        { id: 'd3-macd-nuances', label: 'MACD — Advanced Nuances' },
        { id: 'd3-practice-macd', label: 'Practice — MACD Setup' },
        { id: 'd3-what-is-volume', label: 'What Is Volume?' },
        { id: 'd3-volume-rules', label: 'Volume — The 6 Rules' },
        { id: 'd3-practice-volume', label: 'Practice — Volume Analysis' },
      ]},
      { id: 'd3-late-afternoon', label: 'Session 5: Bollinger Bands + MEXC', icon: Moon, time: '3:00 PM', subtopics: [
        { id: 'd3-what-are-bb', label: 'What Are Bollinger Bands?' },
        { id: 'd3-bb-signals', label: 'Bollinger Bands — Reading Signals' },
        { id: 'd3-bb-squeeze-strategy', label: 'BB — The Squeeze Strategy' },
        { id: 'd3-bb-mistakes', label: 'Bollinger Bands — Common Mistakes' },
        { id: 'd3-practice-bb', label: 'Practice — Bollinger Bands' },
        { id: 'd3-volatility-breakout', label: 'Volatility Breakout System' },
        { id: 'd3-seven-point-framework', label: 'The 7-Point TA Framework' },
        { id: 'd3-practice-btc-analysis', label: 'Practice — BTC/USDT Analysis' },
        { id: 'd3-practice-eth-analysis', label: 'Practice — ETH/USDT Analysis' },
        { id: 'd3-practice-altcoin-analysis', label: 'Practice — Altcoin Analysis' },
        { id: 'd3-quiz-la', label: 'Day 3 Self-Check Quiz' },
        { id: 'd3-key-takeaways-la', label: 'Day 3 Key Takeaways' },
        { id: 'd3-homework-la', label: 'Day 3 Homework' },
        { id: 'd3-mexc-pattern-lab', label: 'MEXC Pattern Trading Lab' },
      ]},
      { id: 'd3-final', label: 'Session 6: Integration + Labs', icon: Trophy, time: '4:30 PM', subtopics: [
        { id: 'd3-key-takeaways', label: 'Day 3 Key Takeaways' },
        { id: 'd3-trading-simulation', label: 'Complete Trading Simulation' },
        { id: 'd3-quiz', label: 'Day 3 Quiz' },
        { id: 'd3-homework', label: 'Day 3 Homework' },
        { id: 'd3-tradingview-lab', label: 'TradingView Lab: Pattern Practice' },
      ]},
    ],
  },
  {
    day: 4, title: 'Risk Management', icon: Shield, color: 'text-red-400', bgColor: 'bg-red-500/10',
    sessions: [
      { id: 'd4-morning', label: 'Session 1: Position Sizing', icon: Sun, time: '9:00 AM', subtopics: [
        { id: 'd4-risk-number-one', label: 'Why Risk Management Is #1' },
        { id: 'd4-one-percent-rule', label: 'The 1% Rule & Position Sizing' },
        { id: 'd4-risk-reward', label: 'Risk-Reward Ratio (RRR)' },
        { id: 'd4-stop-loss', label: 'Stop Loss Essentials' },
        { id: 'd4-morning-exercise', label: 'Practice: Calculate Position Sizes' },
      ]},
      { id: 'd4-late-morning', label: 'Session 2: Portfolio Risk', icon: Coffee, time: '10:30 AM', subtopics: [
        { id: 'd4-correlation-diversification', label: 'Correlation & Diversification' },
        { id: 'd4-allocation-models', label: 'Portfolio Allocation Models' },
        { id: 'd4-overexposure', label: 'The Risk of Overexposure' },
        { id: 'd4-max-drawdown', label: 'Max Drawdown Tolerance' },
      ]},
      { id: 'd4-afternoon', label: 'Session 3: Leverage & Liquidation', icon: Sunset, time: '1:00 PM', subtopics: [
        { id: 'd4-leverage-basics', label: 'What Is Leverage?' },
        { id: 'd4-liquidation', label: 'Liquidation Mechanics' },
        { id: 'd4-leverage-matrix', label: 'The Leverage Risk Matrix' },
        { id: 'd4-cross-isolated', label: 'Cross vs Isolated Margin' },
        { id: 'd4-funding-rate', label: 'Funding Rate Risk' },
      ]},
      { id: 'd4-late-afternoon', label: 'Session 4: Psychology + TradingView', icon: Moon, time: '3:00 PM', subtopics: [
        { id: 'd4-fomo-revenge', label: 'FOMO & Revenge Trading' },
        { id: 'd4-emotional-traps', label: 'The 4 Emotional Trading Traps' },
        { id: 'd4-pretrade-checklist', label: 'Building Your Pre-Trade Checklist' },
        { id: 'd4-trading-journal', label: 'The Trading Journal' },
        { id: 'd4-tradingview-risk-lab', label: 'TradingView Lab: Risk Levels' },
      ]},
      { id: 'd4-final', label: 'Session 5: Integration & Quiz', icon: Trophy, time: '4:30 PM', subtopics: [
        { id: 'd4-bringing-together', label: 'Bringing It All Together' },
        { id: 'd4-pre-trade-checklist', label: 'The Pre-Trade Checklist' },
        { id: 'd4-quiz', label: 'Day 4 Self-Check Quiz' },
        { id: 'd4-key-takeaways', label: 'Day 4 Key Takeaways' },
        { id: 'd4-homework', label: 'Day 4 Homework' },
        { id: 'd4-tradingview-lab', label: 'TradingView Lab: Stop Loss' },
      ]},
    ],
  },
  {
    day: 5, title: 'Spot Trading', icon: ShoppingCart, color: 'text-green-400', bgColor: 'bg-green-500/10',
    sessions: [
      { id: 'd5-morning', label: 'Session 1: MEXC Interface', icon: Sun, time: '9:00 AM', subtopics: [
        { id: 'd5-mexc-interface', label: 'MEXC Interface Walkthrough' },
        { id: 'd5-order-types', label: 'Order Types Deep Dive' },
        { id: 'd5-order-book', label: 'Understanding the Order Book' },
        { id: 'd5-slippage', label: 'Slippage & How to Avoid It' },
      ]},
      { id: 'd5-late-morning', label: 'Session 2: Pre-Trade Checklist', icon: Coffee, time: '10:30 AM', subtopics: [
        { id: 'd5-pre-trade-checklist', label: 'The Pre-Trade Checklist' },
        { id: 'd5-entry-timing', label: 'Entry Timing: Limit vs Market' },
        { id: 'd5-stop-loss-mexc', label: 'Setting Stop Loss on MEXC' },
        { id: 'd5-take-profit-mexc', label: 'Setting Take Profit on MEXC' },
      ]},
      { id: 'd5-afternoon', label: 'Session 3: Live Trading + Labs', icon: Sunset, time: '1:00 PM', subtopics: [
        { id: 'd5-trade-breakout', label: 'Trade #1: The Breakout Entry' },
        { id: 'd5-trade-pullback', label: 'Trade #2: The Pullback Entry' },
        { id: 'd5-trade-rejection', label: 'Trade #3: The Rejection Entry' },
        { id: 'd5-post-trade-review', label: 'Post-Trade Review Template' },
        { id: 'd5-trade-journal', label: 'Trade Journal Setup' },
        { id: 'd5-tradingview-spot-lab', label: 'TradingView Lab: Spot Trade' },
        { id: 'd5-mexc-lab', label: 'MEXC Lab: Live Spot Trading' },
      ]},
      { id: 'd5-late-afternoon', label: 'Session 4: Trading Journal', icon: Moon, time: '3:00 PM', subtopics: [
        { id: 'd5-journal-why', label: 'The Trading Journal' },
        { id: 'd5-journal-template', label: 'Complete Trading Journal Template' },
        { id: 'd5-weekly-review', label: 'How to Review Your Journal' },
        { id: 'd5-trade-management', label: 'Trade Management' },
        { id: 'd5-paper-trading', label: 'Practice — Paper Trading' },
      ]},
      { id: 'd5-final', label: 'Session 5: Workflow & Quiz', icon: Trophy, time: '4:30 PM', subtopics: [
        { id: 'd5-execution-workflow', label: 'The Complete Execution Workflow' },
        { id: 'd5-first-real-trade', label: 'Your First Real Spot Trade' },
        { id: 'd5-quiz', label: 'Day 5 Self-Check Quiz' },
        { id: 'd5-key-takeaways', label: 'Day 5 Key Takeaways' },
        { id: 'd5-homework', label: 'Day 5 Homework' },
      ]},
    ],
  },
  {
    day: 6, title: 'On-Chain & Sentiment', icon: Activity, color: 'text-purple-400', bgColor: 'bg-purple-500/10',
    sessions: [
      { id: 'd6-morning', label: 'Session 1: Signal Taxonomy', icon: Sun, time: '9:00 AM', subtopics: [
        { id: 'd6-signal-taxonomy', label: 'What Are Crypto Trading Signals?' },
        { id: 'd6-signal-evaluation', label: 'Evaluating Signal Providers' },
        { id: 'd6-signal-exercise', label: 'Exercise: Evaluate Signal Groups' },
        { id: 'd6-signal-feed', label: 'Building Your Personal Signal Feed' },
      ]},
      { id: 'd6-late-morning', label: 'Session 2: On-Chain MVRV/NUPL/SOPR', icon: Coffee, time: '10:30 AM', subtopics: [
        { id: 'd6-mvrv', label: 'MVRV Ratio' },
        { id: 'd6-nupl', label: 'NUPL — Net Unrealized Profit/Loss' },
        { id: 'd6-sopr', label: 'SOPR — Spent Output Profit Ratio' },
        { id: 'd6-ssr', label: 'Stablecoin Supply Ratio (SSR)' },
        { id: 'd6-active-addresses', label: 'Active Addresses & Network Activity' },
      ]},
      { id: 'd6-afternoon', label: 'Session 3: Exchange Flows', icon: Sunset, time: '1:00 PM', subtopics: [
        { id: 'd6-on-chain-basics', label: 'What Is On-Chain Analysis?' },
        { id: 'd6-exchange-flows', label: 'Exchange Inflows & Outflows' },
        { id: 'd6-mvrv-nupl-sopr', label: 'MVRV, NUPL & SOPR' },
        { id: 'd6-whales-miners', label: 'Whale Watching & Miner Behavior' },
      ]},
      { id: 'd6-late-afternoon', label: 'Session 4: Fear & Greed', icon: Moon, time: '3:00 PM', subtopics: [
        { id: 'd6-fear-greed-index', label: 'The Fear & Greed Index' },
        { id: 'd6-funding-rate', label: 'Funding Rate — Sentiment Gauge' },
        { id: 'd6-social-sentiment', label: 'Social Sentiment — Reading the Crowd' },
        { id: 'd6-confluence-method', label: 'The Confluence Method' },
      ]},
      { id: 'd6-final', label: 'Session 5: Labs & Quiz', icon: Trophy, time: '4:30 PM', subtopics: [
        { id: 'd6-tradingview-lab', label: 'TradingView Lab: On-Chain Analysis' },
        { id: 'd6-mexc-lab', label: 'MEXC Lab: Sentiment-Based Entries' },
        { id: 'd6-quiz', label: 'Day 6 Self-Check Quiz' },
        { id: 'd6-takeaways', label: 'Key Takeaways from Day 6' },
        { id: 'd6-homework', label: 'Day 6 Homework' },
      ]},
    ],
  },
  {
    day: 7, title: 'Signal Generation & Backtesting', icon: Zap, color: 'text-yellow-400', bgColor: 'bg-yellow-500/10',
    sessions: [
      { id: 'd7-morning', label: 'Session 1: 7-Step Signal Process', icon: Sun, time: '9:00 AM', subtopics: [
        { id: 'd7-7-step-signal', label: 'The 7-Step Signal Process' },
        { id: 'd7-signal-classification', label: 'Signal Type Classification' },
      ]},
      { id: 'd7-late-morning', label: 'Session 2: Backtesting + TradingView', icon: Coffee, time: '10:30 AM', subtopics: [
        { id: 'd7-what-is-backtesting', label: 'What Is Backtesting?' },
        { id: 'd7-manual-backtesting', label: 'Manual Backtesting: The Gold Standard' },
        { id: 'd7-backtesting-mexc-binance', label: 'Backtesting on MEXC & Binance' },
        { id: 'd7-performance-metrics', label: 'Strategy Performance Metrics' },
        { id: 'd7-tradingview-lab', label: 'TradingView Lab: Backtesting' },
      ]},
      { id: 'd7-afternoon', label: 'Session 3: Strategy Templates', icon: Sunset, time: '1:00 PM', subtopics: [
        { id: 'd7-ema-rsi-volume', label: 'Strategy: EMA + RSI + Volume' },
        { id: 'd7-bb-squeeze', label: 'Strategy: BB Squeeze Breakout' },
        { id: 'd7-onchain-swing', label: 'Strategy: On-Chain Swing Trade' },
      ]},
      { id: 'd7-late-afternoon', label: 'Session 4: Paper Trading + MEXC', icon: Moon, time: '3:00 PM', subtopics: [
        { id: 'd7-why-forward-testing', label: 'Why Forward Testing Matters' },
        { id: 'd7-paper-trading-setup', label: 'Paper Trading Setup' },
        { id: 'd7-forward-test-template', label: 'Forward Test Tracking Template' },
        { id: 'd7-overfitting', label: 'The Danger of Overfitting' },
        { id: 'd7-strategy-degradation', label: 'Strategy Degradation' },
        { id: 'd7-backtesting-mistakes', label: 'Common Backtesting Mistakes' },
        { id: 'd7-mexc-lab', label: 'MEXC Lab: Signal Execution' },
      ]},
      { id: 'd7-final', label: 'Session 5: Backtesting Practice', icon: Trophy, time: '4:30 PM', subtopics: [
        { id: 'd7-tradingview-lab-final', label: 'TradingView Lab: Backtesting Practice' },
        { id: 'd7-practice', label: 'Practice Exercises' },
        { id: 'd7-quiz', label: 'Day 7 Self-Check Quiz' },
        { id: 'd7-takeaways', label: 'Key Takeaways from Day 7' },
        { id: 'd7-homework', label: 'Day 7 Homework' },
      ]},
    ],
  },
  {
    day: 8, title: 'Trading Psychology', icon: Brain, color: 'text-pink-400', bgColor: 'bg-pink-500/10',
    sessions: [
      { id: 'd8-morning', label: 'Session 1: Why 90% Fail', icon: Sun, time: '9:00 AM', subtopics: [
        { id: 'd8-why-traders-fail', label: 'Why 90% of Traders Fail' },
        { id: 'd8-psychology-cycle', label: 'The Trading Psychology Cycle' },
        { id: 'd8-cognitive-biases', label: 'Cognitive Biases That Destroy' },
        { id: 'd8-emotional-thermometer', label: 'The Emotional Thermometer' },
      ]},
      { id: 'd8-late-morning', label: 'Session 2: Emotional Discipline', icon: Coffee, time: '10:30 AM', subtopics: [
        { id: 'd8-three-second-rule', label: 'The 3-Second Rule' },
        { id: 'd8-pre-trade-checklist', label: 'The Pre-Trade Checklist' },
        { id: 'd8-post-trade-review', label: 'The Post-Trade Review Protocol' },
        { id: 'd8-losing-streaks', label: 'Managing Losing Streaks' },
        { id: 'd8-winning-streaks', label: 'Managing Winning Streaks' },
        { id: 'd8-why-journal', label: 'Why Every Professional Journals' },
        { id: 'd8-journal-template', label: 'The Complete Journal Template' },
        { id: 'd8-weekly-review', label: 'Weekly Journal Review' },
      ]},
      { id: 'd8-afternoon', label: 'Session 3: Tilt Cycle', icon: Sunset, time: '1:00 PM', subtopics: [
        { id: 'd8-tilt-cycle', label: 'The Tilt Cycle' },
        { id: 'd8-market-psychology', label: 'Psychology of Market Phases' },
        { id: 'd8-daily-routine', label: "The Trader's Daily Routine" },
      ]},
      { id: 'd8-late-afternoon', label: 'Session 4: Trader Identity', icon: Moon, time: '3:00 PM', subtopics: [
        { id: 'd8-trader-type', label: 'What Type of Trader Are You?' },
        { id: 'd8-trading-contract', label: 'The Trading Rules Contract' },
        { id: 'd8-realistic-expectations', label: 'Realistic Expectations Framework' },
        { id: 'd8-emotional-tracking', label: 'Tracking Emotional Patterns' },
        { id: 'd8-monthly-dive', label: 'The Monthly Deep Dive' },
      ]},
      { id: 'd8-final', label: 'Session 5: Labs + Quiz', icon: Trophy, time: '4:30 PM', subtopics: [
        { id: 'd8-practice', label: 'Practice Exercises' },
        { id: 'd8-tradingview-lab', label: 'TradingView Lab: Bias Detection' },
        { id: 'd8-mexc-lab', label: 'MEXC Lab: Disciplined Execution' },
        { id: 'd8-quiz', label: 'Day 8 Self-Check Quiz' },
        { id: 'd8-takeaways', label: 'Day 8 Key Takeaways' },
        { id: 'd8-homework', label: 'Day 8 Homework' },
      ]},
    ],
  },
  {
    day: 9, title: 'Building a Trading Plan', icon: Target, color: 'text-teal-400', bgColor: 'bg-teal-500/10',
    sessions: [
      { id: 'd9-morning', label: 'Session 1: Plan Framework', icon: Sun, time: '9:00 AM', subtopics: [
        { id: 'd9-what-is-plan', label: 'What Is a Trading Plan?' },
        { id: 'd9-12-components', label: 'The 12-Component Trading Plan' },
      ]},
      { id: 'd9-late-morning', label: 'Session 2: Components 1-8', icon: Coffee, time: '10:30 AM', subtopics: [
        { id: 'd9-mission-goals', label: 'Component 1 — Mission & Goals' },
        { id: 'd9-market-selection', label: 'Component 2 — Market Selection' },
        { id: 'd9-timeframe-selection', label: 'Component 3 — Timeframe Selection' },
        { id: 'd9-trading-strategies', label: 'Component 4 — Trading Strategies' },
        { id: 'd9-entry-rules', label: 'Component 5 — Entry Rules' },
        { id: 'd9-exit-rules', label: 'Component 6 — Exit Rules' },
        { id: 'd9-risk-management', label: 'Component 7 — Risk Management' },
        { id: 'd9-position-sizing', label: 'Component 8 — Position Sizing' },
      ]},
      { id: 'd9-afternoon', label: 'Session 3: Components 9-12', icon: Sunset, time: '1:00 PM', subtopics: [
        { id: 'd9-daily-routine', label: 'Component 9 — Daily Routine' },
        { id: 'd9-journaling', label: 'Component 10 — Journaling' },
        { id: 'd9-psychology-rules', label: 'Component 11 — Psychology Rules' },
        { id: 'd9-performance-benchmarks', label: 'Component 12 — Performance Benchmarks' },
      ]},
      { id: 'd9-late-afternoon', label: 'Session 4: Emergency Protocols + Lab', icon: Moon, time: '3:00 PM', subtopics: [
        { id: 'd9-complete-plan', label: 'The Complete Trading Plan Document' },
        { id: 'd9-emergency-protocols', label: 'Emergency Protocols' },
        { id: 'd9-stress-test', label: 'The Plan Stress Test' },
        { id: 'd9-tradingview-lab', label: 'TradingView Lab: Execute Plan' },
      ]},
      { id: 'd9-final', label: 'Session 5: Plan Lab + Quiz', icon: Trophy, time: '4:30 PM', subtopics: [
        { id: 'd9-practice', label: 'Practice Exercises' },
        { id: 'd9-tradingview-lab-final', label: 'TradingView Lab: Plan-Based Analysis' },
        { id: 'd9-mexc-lab', label: 'MEXC Lab: Plan-Based Trading' },
        { id: 'd9-quiz', label: 'Day 9 Self-Check Quiz' },
        { id: 'd9-takeaways', label: 'Day 9 Key Takeaways' },
        { id: 'd9-homework', label: 'Day 9 Homework' },
      ]},
    ],
  },
  {
    day: 10, title: 'Final Integration & 90-Day Roadmap', icon: Trophy, color: 'text-orange-400', bgColor: 'bg-orange-500/10',
    sessions: [
      { id: 'd10-morning', label: 'Session 1: Knowledge Map', icon: Sun, time: '9:00 AM', subtopics: [
        { id: 'd10-knowledge-map', label: '10-Day Knowledge Map' },
        { id: 'd10-process-flow', label: 'The Master Process Flow' },
        { id: 'd10-cheat-sheets', label: 'Quick Reference Cheat Sheets' },
      ]},
      { id: 'd10-late-morning', label: 'Session 2: 90-Day Roadmap', icon: Coffee, time: '10:30 AM', subtopics: [
        { id: 'd10-mexc-workflow', label: 'Trade Execution Workflow on MEXC' },
        { id: 'd10-binance-secondary', label: 'Binance as Secondary Platform' },
        { id: 'd10-arbitrage', label: 'Cross-Platform Arbitrage' },
        { id: 'd10-90-day-roadmap', label: 'The 90-Day Roadmap' },
        { id: 'd10-milestone-checklist', label: 'The 90-Day Milestone Checklist' },
      ]},
      { id: 'd10-afternoon', label: 'Session 3: Beyond 90 Days', icon: Sunset, time: '1:00 PM', subtopics: [
        { id: 'd10-improvement-cycle', label: 'The Continuous Improvement Cycle' },
        { id: 'd10-advanced-strategies', label: 'Adding Advanced Strategies' },
        { id: 'd10-scaling', label: 'Scaling Your Trading Business' },
        { id: 'd10-resources', label: 'Common Resources for Learning' },
      ]},
      { id: 'd10-late-afternoon', label: 'Session 4: Final Exam + MEXC', icon: Moon, time: '3:00 PM', subtopics: [
        { id: 'd10-final-exam', label: 'The Final Exam — Trade Simulation' },
        { id: 'd10-final-assessment', label: 'Final Assessment — 50 Questions' },
        { id: 'd10-commandments', label: 'The 10 Trading Commandments' },
        { id: 'd10-first-24-hours', label: 'The First 24 Hours After Bootcamp' },
        { id: 'd10-accountability', label: 'Accountability & Community' },
        { id: 'd10-mexc-lab', label: 'MEXC Lab — Final Simulation' },
      ]},
      { id: 'd10-final', label: 'Session 5: Graduation & Cert', icon: Trophy, time: '4:30 PM', subtopics: [
        { id: 'd10-course-summary', label: 'Course Summary — 10 Days' },
        { id: 'd10-tradingview-lab', label: 'TradingView Lab: Integration' },
        { id: 'd10-mexc-lab-final', label: 'MEXC Lab: Final Challenge' },
        { id: 'd10-self-assessment', label: 'Final Self-Assessment' },
        { id: 'd10-next-steps', label: 'Your Next Steps' },
        { id: 'd10-final-quiz', label: 'Day 10 Final Quiz' },
        { id: 'd10-key-takeaways', label: 'Day 10 Key Takeaways' },
        { id: 'd10-homework', label: 'Day 10 (Final) Homework' },
        { id: 'd10-graduation', label: 'Graduation' },
      ]},
    ],
  },
]

// ── Static subtopic lookup from DAYS config ──────────────────────────────
// Build a map of sessionId → subtopics from the static DAYS data for fast lookup
const staticSubtopicMap: Record<string, SubtopicItem[]> = {}
DAYS.forEach(day => {
  day.sessions.forEach(session => {
    staticSubtopicMap[session.id] = session.subtopics
  })
})

// ── Sidebar Component ────────────────────────────────────────────────────
interface SidebarProps {
  activeDay: number
  onDayChange: (day: number) => void
  onSectionClick: (sectionId: string) => void
}

export function Sidebar({ activeDay, onDayChange, onSectionClick }: SidebarProps) {
  // ── State ────────────────────────────────────────────────────────────
  const [mobileOpen, setMobileOpen] = useState(false)
  // Start with true to avoid hydration mismatch (server can't read localStorage).
  // After mount, sync with the cached preference.
  const [desktopOpen, setDesktopOpen] = useState(true)
  const [hydrated, setHydrated] = useState(false)
  const [expandedDay, setExpandedDay] = useState<number>(activeDay)
  const [expandedSessions, setExpandedSessions] = useState<Set<string>>(new Set())
  const [completedSessions, setCompletedSessions] = useState<Set<string>>(new Set())
  const [activeSubtopic, setActiveSubtopic] = useState<string>('')

  // Hydrate from localStorage after mount to avoid SSR/client mismatch
  useEffect(() => {
    const cached = loadSidebarOpen()
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (cached !== null) setDesktopOpen(cached)
    setCompletedSessions(loadCompletedSessions())
    setHydrated(true)
  }, [])

  // Track sessions that were recently manually toggled to prevent
  // the scroll handler from immediately re-expanding them
  const recentlyToggledRef = useRef<Set<string>>(new Set())

  // ── Sync expandedDay when activeDay prop changes (render-time adjust) ─
  const [prevActiveDay, setPrevActiveDay] = useState(activeDay)
  if (activeDay !== prevActiveDay) {
    setPrevActiveDay(activeDay)
    setExpandedDay(activeDay)
    saveCache(CACHE_KEY_DAY, String(activeDay))

    // Auto-expand the first session of the new day
    const dayData = DAYS.find(d => d.day === activeDay)
    if (dayData && dayData.sessions.length > 0) {
      setExpandedSessions(prev => {
        const next = new Set(prev)
        next.add(dayData.sessions[0].id)
        return next
      })
    }
  }

  // ── Track scroll position for active subtopic highlighting ───────────
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120
      let currentSection = ''
      let currentSubtopic = ''

      // Find active session
      DAYS.forEach(day => {
        day.sessions.forEach(session => {
          const el = document.getElementById(session.id)
          if (el && el.offsetTop <= scrollY) {
            currentSection = session.id
          }
        })
      })

      // Find active subtopic within the active section (using static data)
      if (currentSection) {
        const sessionTopics = staticSubtopicMap[currentSection]
        if (sessionTopics) {
          for (let i = sessionTopics.length - 1; i >= 0; i--) {
            const el = document.getElementById(sessionTopics[i].id)
            if (el && el.offsetTop <= scrollY) {
              currentSubtopic = sessionTopics[i].id
              break
            }
          }
        }
      }

      if (currentSection) {
        saveCache(CACHE_KEY_SESSION, currentSection)
        // Auto-expand the currently active session based on scroll position,
        // but skip if the user recently manually toggled this session
        if (!recentlyToggledRef.current.has(currentSection)) {
          setExpandedSessions(prev => {
            if (prev.has(currentSection)) return prev // already expanded
            const next = new Set(prev)
            next.add(currentSection)
            return next
          })
        }
      }
      if (currentSubtopic) {
        setActiveSubtopic(currentSubtopic)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Close on ESC ─────────────────────────────────────────────────────
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // ── Handlers ─────────────────────────────────────────────────────────
  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? -1 : day)
  }

  const handleDayClick = (day: number) => {
    onDayChange(day)
    setExpandedDay(day)
    setMobileOpen(false)
  }

  const handleSessionClick = useCallback((sessionId: string) => {
    onSectionClick(sessionId)
    setMobileOpen(false)

    // Toggle session subtopic expansion in the Set
    setExpandedSessions(prev => {
      const next = new Set(prev)
      if (next.has(sessionId)) next.delete(sessionId)
      else next.add(sessionId)
      return next
    })

    // Mark this session as recently toggled so the scroll handler
    // doesn't immediately re-expand it
    recentlyToggledRef.current.add(sessionId)
    setTimeout(() => {
      recentlyToggledRef.current.delete(sessionId)
    }, 1500)
  }, [onSectionClick])

  const handleSubtopicClick = useCallback((subtopicId: string) => {
    const el = document.getElementById(subtopicId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileOpen(false)

    // Ensure the parent session of this subtopic is expanded
    for (const day of DAYS) {
      for (const session of day.sessions) {
        if (session.subtopics.some(t => t.id === subtopicId)) {
          setExpandedSessions(prev => {
            if (prev.has(session.id)) return prev
            const next = new Set(prev)
            next.add(session.id)
            return next
          })
          break
        }
      }
    }
  }, [])

  const toggleSessionComplete = useCallback((sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setCompletedSessions(prev => {
      const next = new Set(prev)
      if (next.has(sessionId)) next.delete(sessionId)
      else next.add(sessionId)
      saveCache(CACHE_KEY_COMPLETED, JSON.stringify([...next]))
      return next
    })
  }, [])

  const toggleDesktopSidebar = useCallback(() => {
    setDesktopOpen(prev => {
      const next = !prev
      saveCache(CACHE_KEY_SIDEBAR, String(next))
      // Dispatch custom event so academy-app can sync its margin
      window.dispatchEvent(new CustomEvent('sidebar-toggle'))
      return next
    })
  }, [])

  // ── Computed ─────────────────────────────────────────────────────────
  // Count total sessions and completed for progress
  const totalSessions = DAYS.reduce((acc, d) => acc + d.sessions.length, 0)
  const completedCount = completedSessions.size
  const progressPct = Math.round((completedCount / totalSessions) * 100)

  const isSidebarVisible = desktopOpen // on desktop, controlled by toggle

  return (
    <>
      {/* ── Mobile Hamburger ── */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-[60] flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-white shadow-lg transition-colors hover:bg-slate-700 lg:hidden"
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* ── Desktop Toggle Button ── */}
      <button
        onClick={toggleDesktopSidebar}
        className="fixed top-4 z-[60] hidden lg:flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-slate-700"
        style={hydrated ? { left: isSidebarVisible ? 276 : 16 } : { left: 276 }}
        aria-label={isSidebarVisible ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        {isSidebarVisible ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
      </button>

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[45] bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ── Sidebar Panel ── */}
      <aside
        className={`
          fixed top-0 left-0 z-[50] h-screen bg-slate-900 border-r border-slate-700/50
          transform transition-all duration-300 ease-in-out overflow-hidden
          lg:z-[50]
          ${isSidebarVisible ? 'w-72' : 'w-0 lg:-translate-x-full'}
          ${mobileOpen ? 'w-72 translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="w-72 min-w-[272px] flex flex-col h-full">
          {/* ── Header ── */}
          <div className="flex-shrink-0 bg-slate-900 border-b border-slate-700/50 px-4 py-3">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="CFA"
                className="h-9 w-9 rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-sm font-bold text-white">Crypto Foundations</h2>
                <p className="text-[10px] text-slate-400">Academy · 10-Day Bootcamp</p>
              </div>
              {/* Close on mobile */}
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
                aria-label="Close sidebar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* ── Overall Progress Bar ── */}
            <div className="mt-3">
              <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                <span>Overall Progress</span>
                <span className="font-semibold text-amber-400">{completedCount}/{totalSessions} sessions</span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-700">
                <div
                  className="h-1.5 rounded-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <p className="text-[9px] text-slate-500 mt-1">{progressPct}% complete</p>
            </div>
          </div>

          {/* ── Day/Session Tree (scrollable) ── */}
          <nav className="flex-1 overflow-y-auto px-2 py-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#475569 transparent' }} aria-label="Course navigation">
            <ul className="space-y-0.5">
              {DAYS.map((dayData) => {
                const DayIcon = dayData.icon
                const isActive = dayData.day === activeDay
                const isExpanded = expandedDay === dayData.day
                // Count completed sessions for this day
                const daySessions = dayData.sessions.map(s => s.id)
                const dayCompleted = daySessions.filter(s => completedSessions.has(s)).length
                const dayTotal = daySessions.length
                const allDayComplete = dayCompleted === dayTotal && dayTotal > 0

                return (
                  <li key={dayData.day}>
                    {/* Day Header */}
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDayClick(dayData.day)}
                        className={`
                          flex flex-1 items-center gap-2 rounded-lg px-2.5 py-2 text-left transition-all
                          ${isActive
                            ? 'bg-amber-500/15 text-amber-300'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                          }
                        `}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <div className={`
                          flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg
                          ${isActive ? 'bg-amber-500/20' : allDayComplete ? 'bg-emerald-500/15' : dayData.bgColor}
                        `}>
                          <DayIcon className={`h-3.5 w-3.5 ${isActive ? 'text-amber-400' : allDayComplete ? 'text-emerald-400' : dayData.color}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className={`text-[11px] font-semibold truncate ${isActive ? 'text-amber-300' : ''}`}>
                            Day {dayData.day}
                          </p>
                          <p className="text-[9px] text-slate-500 truncate">
                            {dayData.title}
                          </p>
                        </div>
                        {/* Day completion badge */}
                        <span className={`flex-shrink-0 text-[8px] font-bold px-1.5 py-0.5 rounded ${
                          allDayComplete
                            ? 'text-emerald-400 bg-emerald-500/10'
                            : dayCompleted > 0
                              ? 'text-amber-400 bg-amber-500/10'
                              : 'text-slate-600 bg-slate-800'
                        }`}>
                          {dayCompleted}/{dayTotal}
                        </span>
                      </button>

                      <button
                        onClick={() => toggleDay(dayData.day)}
                        className="flex-shrink-0 p-1 rounded text-slate-500 hover:bg-slate-800 hover:text-white transition-colors"
                        aria-label={isExpanded ? `Collapse Day ${dayData.day}` : `Expand Day ${dayData.day}`}
                      >
                        {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                      </button>
                    </div>

                    {/* Expanded Sessions + Subtopics */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <ul className="ml-3 mt-0.5 space-y-0 border-l border-slate-700/50 pl-2">
                            {dayData.sessions.map((session) => {
                              const SessionIcon = session.icon
                              const isSessionExpanded = expandedSessions.has(session.id)
                              const isSessionComplete = completedSessions.has(session.id)
                              const sessionSubtopics = session.subtopics

                              return (
                                <li key={session.id}>
                                  {/* Session row */}
                                  <div className="flex items-center group">
                                    <button
                                      onClick={() => handleSessionClick(session.id)}
                                      className="flex flex-1 items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
                                    >
                                      <SessionIcon className="h-3 w-3 flex-shrink-0 text-slate-500" />
                                      <div className="min-w-0 flex-1">
                                        <p className="text-[10px] font-medium truncate leading-tight">{session.label}</p>
                                        <p className="text-[8px] text-slate-600">{session.time}</p>
                                      </div>
                                      {sessionSubtopics.length > 0 && (
                                        <span className="text-[7px] text-slate-600 bg-slate-800 px-1 rounded">
                                          {sessionSubtopics.length}
                                        </span>
                                      )}
                                    </button>
                                    {/* Completion toggle */}
                                    <button
                                      onClick={(e) => toggleSessionComplete(session.id, e)}
                                      className="flex-shrink-0 p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                      aria-label={isSessionComplete ? 'Mark incomplete' : 'Mark complete'}
                                      title={isSessionComplete ? 'Mark incomplete' : 'Mark complete'}
                                    >
                                      {isSessionComplete ? (
                                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                      ) : (
                                        <Circle className="h-3.5 w-3.5 text-slate-600 hover:text-slate-400" />
                                      )}
                                    </button>
                                  </div>

                                  {/* Subtopics (expandable) */}
                                  <AnimatePresence>
                                    {isSessionExpanded && sessionSubtopics.length > 0 && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="overflow-hidden"
                                      >
                                        <ul className="ml-4 mt-0.5 mb-1 space-y-0 border-l border-slate-700/30 pl-2">
                                          {sessionSubtopics.map((topic) => {
                                            const isActiveTopic = activeSubtopic === topic.id
                                            return (
                                              <li key={topic.id}>
                                                <button
                                                  onClick={() => handleSubtopicClick(topic.id)}
                                                  className={`flex w-full items-start gap-1.5 rounded px-1.5 py-1 text-left transition-colors ${
                                                    isActiveTopic
                                                      ? 'bg-amber-500/10 text-amber-300'
                                                      : 'text-slate-500 hover:bg-slate-800/60 hover:text-slate-300'
                                                  }`}
                                                >
                                                  <Hash className={`h-2.5 w-2.5 flex-shrink-0 mt-0.5 ${isActiveTopic ? 'text-amber-400' : 'text-slate-600'}`} />
                                                  <p className="text-[9px] leading-tight line-clamp-2">{topic.label}</p>
                                                </button>
                                              </li>
                                            )
                                          })}
                                        </ul>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </li>
                              )
                            })}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* ── Footer ── */}
          <div className="flex-shrink-0 bg-slate-900 border-t border-slate-700/50 px-4 py-3">
            <div className="flex items-center gap-2 text-[10px] text-slate-500">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Day {activeDay} of 10</span>
              <span className="ml-auto">{Math.round((activeDay / 10) * 100)}%</span>
            </div>
            <div className="mt-1.5 h-1 rounded-full bg-slate-700">
              <div
                className="h-1 rounded-full bg-amber-500 transition-all duration-500"
                style={{ width: `${(activeDay / 10) * 100}%` }}
              />
            </div>
            <button
              onClick={() => {
                if (confirm('Reset all progress? This cannot be undone.')) {
                  setCompletedSessions(new Set())
                  saveCache(CACHE_KEY_COMPLETED, '[]')
                }
              }}
              className="mt-2 w-full text-[9px] text-slate-600 hover:text-red-400 transition-colors text-center"
            >
              Reset Progress
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
