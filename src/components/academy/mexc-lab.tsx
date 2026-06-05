'use client'

import { useState, useEffect } from 'react'
import {
  ArrowUp,
  ArrowDown,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
  Wallet,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
} from 'lucide-react'

// ── Hardcoded Data ──────────────────────────────────────────────────────────

const ASK_PRICES = [67550, 67540, 67530, 67520, 67510]
const BID_PRICES = [67500, 67490, 67480, 67470, 67460]
const ASK_AMOUNTS = [0.45, 0.32, 0.78, 0.21, 0.55]
const BID_AMOUNTS = [0.62, 0.38, 0.91, 0.27, 0.44]

const RECENT_TRADES = [
  { price: 67500, amount: 0.012, side: 'buy' as const, time: '14:32:05' },
  { price: 67498, amount: 0.034, side: 'sell' as const, time: '14:31:58' },
  { price: 67502, amount: 0.008, side: 'buy' as const, time: '14:31:42' },
  { price: 67495, amount: 0.056, side: 'sell' as const, time: '14:31:30' },
  { price: 67505, amount: 0.023, side: 'buy' as const, time: '14:31:15' },
  { price: 67490, amount: 0.041, side: 'sell' as const, time: '14:31:02' },
]

// Simplified candle data for the SVG chart
const CANDLES = [
  { open: 67420, close: 67480, high: 67500, low: 67410 },
  { open: 67480, close: 67450, high: 67490, low: 67430 },
  { open: 67450, close: 67510, high: 67520, low: 67440 },
  { open: 67510, close: 67490, high: 67530, low: 67480 },
  { open: 67490, close: 67530, high: 67550, low: 67485 },
  { open: 67530, close: 67500, high: 67560, low: 67495 },
  { open: 67500, close: 67540, high: 67555, low: 67490 },
  { open: 67540, close: 67510, high: 67550, low: 67500 },
  { open: 67510, close: 67550, high: 67570, low: 67505 },
  { open: 67550, close: 67500, high: 67560, low: 67490 },
]

const CHART_MIN = 67380
const CHART_MAX = 67580
const CHART_H = 160

function priceToY(price: number): number {
  return CHART_H - ((price - CHART_MIN) / (CHART_MAX - CHART_MIN)) * CHART_H
}

// ── Component ───────────────────────────────────────────────────────────────

export function MEXCLab() {
  const [orderType, setOrderType] = useState<'market' | 'limit'>('limit')
  const [orderSide, setOrderSide] = useState<'buy' | 'sell'>('buy')
  const [price, setPrice] = useState('67500')
  const [amount, setAmount] = useState('0.01')
  const [confirmation, setConfirmation] = useState<string | null>(null)

  useEffect(() => {
    if (!confirmation) return
    const timer = setTimeout(() => setConfirmation(null), 3000)
    return () => clearTimeout(timer)
  }, [confirmation])

  const handlePlaceOrder = () => {
    const amt = parseFloat(amount) || 0
    const prc = parseFloat(price) || 0
    if (amt <= 0) return

    const typeLabel = orderType === 'market' ? 'Market' : 'Limit'
    const sideLabel = orderSide === 'buy' ? 'Buy' : 'Sell'
    const displayPrice = orderType === 'market'
      ? (orderSide === 'buy' ? ASK_PRICES[0] : BID_PRICES[0])
      : prc

    setConfirmation(
      `✅ ${typeLabel} ${sideLabel} placed: ${amt} BTC at $${displayPrice.toLocaleString()}`
    )
    setAmount('0.01')
    setPrice('67500')
  }

  const total = (parseFloat(amount) || 0) * (parseFloat(price) || 0)

  return (
    <div className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden border border-gray-700 bg-[#0b0e11] text-gray-100 font-mono text-xs sm:text-sm">
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-4 py-3 bg-[#1a1d23] border-b border-gray-700">
        <div className="flex items-center gap-3">
          <span className="text-base sm:text-lg font-bold text-white tracking-wide">
            MEXC Simulator
          </span>
          <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded text-xs font-semibold">
            DEMO
          </span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-green-400" />
          <span className="font-semibold text-white">BTC / USDT</span>
          <span className="text-green-400 font-bold">67,500.00</span>
          <a
            href="https://www.mexc.com/exchange/BTC_USDT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 hover:text-emerald-200 border border-emerald-500/30 transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Open MEXC Demo
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-gray-700">
        {/* ── Left: Order Book ──────────────────────────────────────────── */}
        <section className="col-span-1 md:col-span-3 bg-[#0b0e11] p-3">
          <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">
            Order Book
          </h3>

          {/* Asks (sells) */}
          <div className="mb-2">
            <div className="flex text-[10px] text-gray-500 mb-1">
              <span className="flex-1">Price(USDT)</span>
              <span className="flex-1 text-right">Amount(BTC)</span>
              <span className="flex-1 text-right">Total</span>
            </div>
            {ASK_PRICES.map((p, i) => {
              const pct = (ASK_AMOUNTS[i] / 0.91) * 100
              return (
                <div
                  key={`ask-${i}`}
                  className="relative flex items-center py-0.5 hover:bg-red-900/20"
                >
                  <div
                    className="absolute inset-y-0 right-0 bg-red-500/10"
                    style={{ width: `${pct}%` }}
                  />
                  <span className="flex-1 text-red-400 relative z-10">
                    {p.toLocaleString()}
                  </span>
                  <span className="flex-1 text-right text-gray-300 relative z-10">
                    {ASK_AMOUNTS[i].toFixed(3)}
                  </span>
                  <span className="flex-1 text-right text-gray-400 relative z-10">
                    {(p * ASK_AMOUNTS[i]).toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Spread */}
          <div className="text-center py-1 text-yellow-400 font-bold text-xs border-y border-gray-800">
            67,500.00
            <ArrowUp className="inline w-3 h-3 ml-1" />
          </div>

          {/* Bids (buys) */}
          <div className="mt-2">
            {BID_PRICES.map((p, i) => {
              const pct = (BID_AMOUNTS[i] / 0.91) * 100
              return (
                <div
                  key={`bid-${i}`}
                  className="relative flex items-center py-0.5 hover:bg-green-900/20"
                >
                  <div
                    className="absolute inset-y-0 right-0 bg-green-500/10"
                    style={{ width: `${pct}%` }}
                  />
                  <span className="flex-1 text-green-400 relative z-10">
                    {p.toLocaleString()}
                  </span>
                  <span className="flex-1 text-right text-gray-300 relative z-10">
                    {BID_AMOUNTS[i].toFixed(3)}
                  </span>
                  <span className="flex-1 text-right text-gray-400 relative z-10">
                    {(p * BID_AMOUNTS[i]).toLocaleString(undefined, {
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Center: Chart ─────────────────────────────────────────────── */}
        <section className="col-span-1 md:col-span-6 bg-[#0b0e11] p-3">
          <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">
            Price Chart
          </h3>
          <svg
            viewBox={`0 0 ${CANDLES.length * 40} ${CHART_H + 20}`}
            className="w-full h-36 sm:h-44"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((frac) => {
              const y = frac * CHART_H
              const val = CHART_MAX - frac * (CHART_MAX - CHART_MIN)
              return (
                <g key={frac}>
                  <line
                    x1={0}
                    y1={y}
                    x2={CANDLES.length * 40}
                    y2={y}
                    stroke="#1e2329"
                    strokeWidth={0.5}
                  />
                  <text x={2} y={y - 2} fill="#5e6673" fontSize={7}>
                    {val.toFixed(0)}
                  </text>
                </g>
              )
            })}

            {/* Candles */}
            {CANDLES.map((c, i) => {
              const x = i * 40 + 20
              const isBull = c.close >= c.open
              const color = isBull ? '#00c087' : '#f6465d'
              const bodyTop = priceToY(Math.max(c.open, c.close))
              const bodyBot = priceToY(Math.min(c.open, c.close))
              const bodyH = Math.max(bodyBot - bodyTop, 1)
              return (
                <g key={i}>
                  {/* Wick */}
                  <line
                    x1={x}
                    y1={priceToY(c.high)}
                    x2={x}
                    y2={priceToY(c.low)}
                    stroke={color}
                    strokeWidth={1}
                  />
                  {/* Body */}
                  <rect
                    x={x - 7}
                    y={bodyTop}
                    width={14}
                    height={bodyH}
                    fill={isBull ? color : color}
                    rx={1}
                  />
                </g>
              )
            })}
          </svg>

          {/* Recent Trades */}
          <div className="mt-3">
            <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-semibold">
              Recent Trades
            </h4>
            <div className="flex text-[10px] text-gray-500 mb-1">
              <span className="flex-1">Price(USDT)</span>
              <span className="flex-1 text-right">Amount(BTC)</span>
              <span className="flex-1 text-right">Time</span>
            </div>
            <div className="max-h-28 overflow-y-auto custom-scrollbar">
              {RECENT_TRADES.map((t, i) => (
                <div key={i} className="flex py-0.5 hover:bg-gray-800/30">
                  <span
                    className={`flex-1 ${
                      t.side === 'buy' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {t.price.toLocaleString()}
                  </span>
                  <span className="flex-1 text-right text-gray-300">
                    {t.amount.toFixed(3)}
                  </span>
                  <span className="flex-1 text-right text-gray-500">
                    {t.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Right: Order Panel ────────────────────────────────────────── */}
        <section className="col-span-1 md:col-span-3 bg-[#0b0e11] p-3">
          {/* Balance */}
          <div className="flex items-center gap-2 mb-3 px-2 py-2 bg-[#1a1d23] rounded">
            <Wallet className="w-4 h-4 text-yellow-400" />
            <span className="text-gray-400">USDT:</span>
            <span className="text-white font-semibold">10,000.00</span>
          </div>

          {/* Order Type Toggle */}
          <div className="flex mb-3 bg-[#1a1d23] rounded overflow-hidden">
            <button
              onClick={() => setOrderType('market')}
              className={`flex-1 py-1.5 text-xs font-semibold transition-colors ${
                orderType === 'market'
                  ? 'bg-gray-600 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Market
            </button>
            <button
              onClick={() => setOrderType('limit')}
              className={`flex-1 py-1.5 text-xs font-semibold transition-colors ${
                orderType === 'limit'
                  ? 'bg-gray-600 text-white'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              Limit
            </button>
          </div>

          {/* Buy / Sell Toggle */}
          <div className="flex mb-3 gap-1">
            <button
              onClick={() => setOrderSide('buy')}
              className={`flex-1 py-1.5 rounded text-xs font-bold flex items-center justify-center gap-1 transition-colors ${
                orderSide === 'buy'
                  ? 'bg-green-600 text-white'
                  : 'bg-[#1a1d23] text-gray-400 hover:text-green-400'
              }`}
            >
              <ArrowUp className="w-3 h-3" />
              Buy (Long)
            </button>
            <button
              onClick={() => setOrderSide('sell')}
              className={`flex-1 py-1.5 rounded text-xs font-bold flex items-center justify-center gap-1 transition-colors ${
                orderSide === 'sell'
                  ? 'bg-red-600 text-white'
                  : 'bg-[#1a1d23] text-gray-400 hover:text-red-400'
              }`}
            >
              <ArrowDown className="w-3 h-3" />
              Sell (Short)
            </button>
          </div>

          {/* Price Input (Limit only) */}
          {orderType === 'limit' && (
            <div className="mb-3">
              <label className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 block">
                <DollarSign className="inline w-3 h-3" /> Price (USDT)
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-[#1a1d23] border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-gray-400"
                placeholder="67500"
              />
            </div>
          )}

          {/* Amount Input */}
          <div className="mb-3">
            <label className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 block">
              <ShoppingCart className="inline w-3 h-3" /> Amount (BTC)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-[#1a1d23] border border-gray-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-gray-400"
              placeholder="0.01"
              step="0.001"
              min="0"
            />
          </div>

          {/* Total */}
          <div className="mb-3 px-1 flex justify-between text-[10px]">
            <span className="text-gray-400">Total (USDT)</span>
            <span className="text-white font-semibold">
              {total.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </span>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            disabled={!parseFloat(amount)}
            className={`w-full py-3 rounded font-bold text-sm flex items-center justify-center gap-2 transition-all ${
              orderSide === 'buy'
                ? 'bg-green-600 hover:bg-green-500 text-white disabled:bg-green-900 disabled:text-green-700'
                : 'bg-red-600 hover:bg-red-500 text-white disabled:bg-red-900 disabled:text-red-700'
            }`}
          >
            {orderSide === 'buy' ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            {orderSide === 'buy' ? 'Buy BTC' : 'Sell BTC'}
          </button>

          {/* Confirmation Message */}
          {confirmation && (
            <div
              className={`mt-3 p-2 rounded text-xs font-semibold flex items-start gap-2 ${
                orderSide === 'buy'
                  ? 'bg-green-900/40 text-green-400 border border-green-700/50'
                  : 'bg-red-900/40 text-red-400 border border-red-700/50'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{confirmation}</span>
            </div>
          )}

          {/* Disclaimer */}
          <p className="mt-3 text-[9px] text-gray-600 text-center leading-relaxed">
            This is a simulated trading interface for educational purposes only.
            No real trades are executed. No real funds are used.
          </p>
        </section>
      </div>

      {/* ── Pre-Trade Analysis Workflow Banner ──────────────────────────── */}
      <div className="px-4 py-3 bg-[#14171c] border-t border-gray-700">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center gap-2 flex-1">
            <span className="inline-flex items-center justify-center h-6 w-14 rounded bg-amber-500/20 border border-amber-500/30 text-[10px] font-bold text-amber-300 tracking-wider">STEP 1</span>
            <a
              href="https://www.tradingview.com/chart/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
            >
              Analyze on TradingView
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <ArrowRight className="h-4 w-4 text-gray-600 hidden sm:block" />
          <div className="flex items-center gap-2 flex-1">
            <span className="inline-flex items-center justify-center h-6 w-14 rounded bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-bold text-emerald-300 tracking-wider">STEP 2</span>
            <a
              href="https://www.mexc.com/exchange/BTC_USDT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              Execute on MEXC Demo
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
        <p className="text-[10px] text-gray-500 mt-2 pl-0 sm:pl-16">
          Before placing a trade here, identify your entry, stop loss, and take profit on TradingView first.
        </p>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────────── */}
      <footer className="flex items-center justify-between px-4 py-2 bg-[#1a1d23] border-t border-gray-700 text-[10px] text-gray-500">
        <span>MEXC Lab v1.0 — Academy Simulator</span>
        <span className="flex items-center gap-1">
          <Wallet className="w-3 h-3 text-yellow-500" />
          Balance: 10,000.00 USDT
        </span>
      </footer>

      {/* Custom scrollbar style */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0b0e11;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2b3139;
          border-radius: 2px;
        }
      `}</style>
    </div>
  )
}
