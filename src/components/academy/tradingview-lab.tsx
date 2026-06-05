'use client'

import { useState, useMemo } from 'react'
import {
  TrendingUp,
  BarChart3,
  Minus,
  Crosshair,
  Activity,
  Layers,
  CheckCircle2,
  Circle,
  ExternalLink,
  ArrowRight,
} from 'lucide-react'

// ── Hardcoded candle data (30 candles forming an uptrend) ────────────────
// Each candle: { o: open, h: high, l: low, c: close } — price units
const CANDLE_DATA = [
  { o: 42000, h: 42400, l: 41700, c: 42200 },
  { o: 42200, h: 42600, l: 42000, c: 42100 },
  { o: 42100, h: 42500, l: 41800, c: 42350 },
  { o: 42350, h: 42800, l: 42200, c: 42600 },
  { o: 42600, h: 43100, l: 42400, c: 42850 },
  { o: 42850, h: 43200, l: 42600, c: 42700 },
  { o: 42700, h: 42900, l: 42300, c: 42450 },
  { o: 42450, h: 42700, l: 42100, c: 42600 },
  { o: 42600, h: 43200, l: 42500, c: 43050 },
  { o: 43050, h: 43500, l: 42900, c: 43300 },
  { o: 43300, h: 43800, l: 43100, c: 43600 },
  { o: 43600, h: 44000, l: 43400, c: 43500 },
  { o: 43500, h: 43700, l: 43100, c: 43200 },
  { o: 43200, h: 43400, l: 42900, c: 43050 },
  { o: 43050, h: 43600, l: 42900, c: 43400 },
  { o: 43400, h: 43900, l: 43300, c: 43750 },
  { o: 43750, h: 44200, l: 43600, c: 44000 },
  { o: 44000, h: 44500, l: 43800, c: 44300 },
  { o: 44300, h: 44700, l: 44100, c: 44200 },
  { o: 44200, h: 44400, l: 43800, c: 43950 },
  { o: 43950, h: 44300, l: 43700, c: 44100 },
  { o: 44100, h: 44600, l: 44000, c: 44450 },
  { o: 44450, h: 44900, l: 44300, c: 44700 },
  { o: 44700, h: 45200, l: 44500, c: 45000 },
  { o: 45000, h: 45500, l: 44800, c: 45300 },
  { o: 45300, h: 45700, l: 45100, c: 45200 },
  { o: 45200, h: 45400, l: 44800, c: 44950 },
  { o: 44950, h: 45300, l: 44800, c: 45100 },
  { o: 45100, h: 45700, l: 45000, c: 45500 },
  { o: 45500, h: 46100, l: 45400, c: 45900 },
]

const TIMEFRAMES = ['1m', '5m', '15m', '1H', '4H', '1D'] as const
type Timeframe = (typeof TIMEFRAMES)[number]

const INDICATOR_LIST = ['EMA 20', 'EMA 50', 'EMA 200', 'RSI', 'Volume'] as const
type Indicator = (typeof INDICATOR_LIST)[number]

const DRAW_TOOLS = ['Trend Line', 'Horizontal Line', 'Fibonacci'] as const
type DrawTool = (typeof DRAW_TOOLS)[number]

const PRACTICE_TASKS = [
  'Identify the uptrend on the candlestick chart',
  'Toggle EMA 20 and find where price crosses above it',
  'Draw a trend line connecting the lows',
  'Switch to 4H timeframe and observe the pattern',
  'Turn on RSI and check if the market is overbought',
  'Enable Volume and compare it with the uptrend strength',
] as const

// ── Chart layout constants ───────────────────────────────────────────────
const CHART_W = 800
const CHART_H = 340
const CANDLE_W = 18
const CANDLE_GAP = 6
const PAD_LEFT = 10
const PAD_TOP = 20
const PAD_BOTTOM = 30

const PRICE_MIN = 41500
const PRICE_MAX = 46500

function priceToY(price: number): number {
  return PAD_TOP + ((PRICE_MAX - price) / (PRICE_MAX - PRICE_MIN)) * (CHART_H - PAD_TOP - PAD_BOTTOM)
}

function candleX(index: number): number {
  return PAD_LEFT + index * (CANDLE_W + CANDLE_GAP) + CANDLE_W / 2
}

// ── Simple EMA calculation ───────────────────────────────────────────────
function calcEMA(closes: number[], period: number): number[] {
  const k = 2 / (period + 1)
  const ema: number[] = []
  ema[0] = closes.slice(0, period).reduce((a, b) => a + b, 0) / period
  for (let i = 1; i < closes.length; i++) {
    ema[i] = closes[i] * k + ema[i - 1] * (1 - k)
  }
  return ema
}

// ── Simple RSI calculation ───────────────────────────────────────────────
function calcRSI(closes: number[], period = 14): number[] {
  const rsi: number[] = []
  for (let i = 0; i < closes.length; i++) {
    if (i < period) { rsi.push(50); continue }
    let gains = 0, losses = 0
    for (let j = i - period + 1; j <= i; j++) {
      const diff = closes[j] - closes[j - 1]
      if (diff > 0) gains += diff
      else losses -= diff
    }
    const avgGain = gains / period
    const avgLoss = losses / period || 0.001
    const rs = avgGain / avgLoss
    rsi.push(100 - 100 / (1 + rs))
  }
  return rsi
}

// ── Component ────────────────────────────────────────────────────────────
export function TradingViewLab() {
  const [timeframe, setTimeframe] = useState<Timeframe>('1H')
  const [indicators, setIndicators] = useState<Set<Indicator>>(new Set())
  const [drawTools, setDrawTools] = useState<Set<DrawTool>>(new Set())
  const [tasks, setTasks] = useState<Set<number>>(new Set())

  const closes = useMemo(() => CANDLE_DATA.map((c) => c.c), [])

  const ema20 = useMemo(() => calcEMA(closes, 20), [closes])
  const ema50 = useMemo(() => calcEMA(closes, 50), [closes])
  const ema200 = useMemo(() => calcEMA(closes, 200), [closes])
  const rsiValues = useMemo(() => calcRSI(closes), [closes])

  const showRSI = indicators.has('RSI')
  const showVolume = indicators.has('Volume')

  // Build SVG path for an EMA line
  function emaPath(ema: number[]): string {
    return ema
      .map((val, i) => {
        const x = candleX(i)
        const y = priceToY(val)
        return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
      })
      .join(' ')
  }

  function toggleIndicator(ind: Indicator) {
    setIndicators((prev) => {
      const next = new Set(prev)
      if (next.has(ind)) next.delete(ind)
      else next.add(ind)
      return next
    })
  }

  function toggleDrawTool(tool: DrawTool) {
    setDrawTools((prev) => {
      const next = new Set(prev)
      if (next.has(tool)) next.delete(tool)
      else next.add(tool)
      return next
    })
  }

  function toggleTask(idx: number) {
    setTasks((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  // RSI panel dimensions
  const RSI_H = 80
  const totalChartH = showRSI ? CHART_H + RSI_H + 8 : CHART_H

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-700 bg-slate-950 text-white">
      {/* ── Header Bar ─────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-3 bg-amber-900/60 px-4 py-2.5 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-amber-400" />
          <span className="font-bold text-amber-300 text-sm tracking-wide">
            TradingView Simulator
          </span>
        </div>
        <span className="text-xs font-mono text-amber-200/80 bg-amber-950/50 px-2 py-0.5 rounded">
          BTCUSDT
        </span>
        <div className="ml-auto flex items-center gap-2">
          <a
            href="https://www.tradingview.com/chart/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 hover:text-amber-200 border border-amber-500/30 transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Open TradingView
          </a>
          <span className="text-xs text-slate-400 hidden sm:inline">
            ⚠ Educational mock — no real data
          </span>
        </div>
      </div>

      {/* ── Toolbar Row ────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-2 bg-slate-900 px-4 py-2 border-b border-slate-800">
        {/* Timeframe buttons */}
        <div className="flex items-center gap-1 mr-2">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-2 py-1 text-xs font-mono rounded transition-colors ${
                timeframe === tf
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>

        <div className="h-5 w-px bg-slate-700 hidden sm:block" />

        {/* Drawing tools */}
        <div className="flex items-center gap-1 mr-2">
          <span className="text-[10px] text-slate-500 mr-1 hidden sm:inline">Draw:</span>
          {(
            [
              ['Trend Line', TrendingUp],
              ['Horizontal Line', Minus],
              ['Fibonacci', Layers],
            ] as const
          ).map(([tool, Icon]) => (
            <button
              key={tool}
              onClick={() => toggleDrawTool(tool)}
              className={`flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors ${
                drawTools.has(tool)
                  ? 'bg-emerald-700/60 text-emerald-300 ring-1 ring-emerald-500/40'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{tool}</span>
            </button>
          ))}
        </div>

        <div className="h-5 w-px bg-slate-700 hidden sm:block" />

        {/* Indicator buttons */}
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-slate-500 mr-1 hidden sm:inline">Ind:</span>
          {(
            [
              ['EMA 20', Activity, 'text-yellow-400'],
              ['EMA 50', Activity, 'text-blue-400'],
              ['EMA 200', Activity, 'text-purple-400'],
              ['RSI', BarChart3, 'text-orange-400'],
              ['Volume', Crosshair, 'text-cyan-400'],
            ] as const
          ).map(([ind, Icon, colorClass]) => (
            <button
              key={ind}
              onClick={() => toggleIndicator(ind)}
              className={`flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors ${
                indicators.has(ind)
                  ? `bg-slate-700/70 ring-1 ring-slate-600 ${colorClass}`
                  : 'bg-slate-800 text-slate-500 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{ind}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Chart Area ─────────────────────────────────────────────────── */}
      <div className="bg-slate-900 overflow-x-auto">
        <svg
          viewBox={`0 0 ${CHART_W} ${totalChartH}`}
          className="w-full min-w-[600px]"
          style={{ maxHeight: '500px' }}
        >
          {/* Grid lines */}
          {[42000, 43000, 44000, 45000, 46000].map((p) => (
            <g key={p}>
              <line
                x1={0}
                y1={priceToY(p)}
                x2={CHART_W}
                y2={priceToY(p)}
                stroke="#334155"
                strokeDasharray="4 4"
              />
              <text
                x={CHART_W - 4}
                y={priceToY(p) - 3}
                textAnchor="end"
                className="fill-slate-500"
                fontSize="9"
                fontFamily="monospace"
              >
                {p.toLocaleString()}
              </text>
            </g>
          ))}

          {/* Volume bars (behind candles) */}
          {showVolume &&
            CANDLE_DATA.map((c, i) => {
              const isGreen = c.c >= c.o
              const volH = 15 + Math.abs(c.c - c.o) / 50
              return (
                <rect
                  key={`vol-${i}`}
                  x={candleX(i) - CANDLE_W / 2}
                  y={CHART_H - PAD_BOTTOM - volH}
                  width={CANDLE_W}
                  height={volH}
                  fill={isGreen ? '#22c55e20' : '#ef444420'}
                  rx={1}
                />
              )
            })}

          {/* Candlesticks */}
          {CANDLE_DATA.map((c, i) => {
            const isGreen = c.c >= c.o
            const color = isGreen ? '#22c55e' : '#ef4444'
            const bodyTop = priceToY(Math.max(c.o, c.c))
            const bodyBot = priceToY(Math.min(c.o, c.c))
            const bodyH = Math.max(bodyBot - bodyTop, 1)
            return (
              <g key={i}>
                {/* Wick */}
                <line
                  x1={candleX(i)}
                  y1={priceToY(c.h)}
                  x2={candleX(i)}
                  y2={priceToY(c.l)}
                  stroke={color}
                  strokeWidth={1.5}
                />
                {/* Body */}
                <rect
                  x={candleX(i) - CANDLE_W / 2}
                  y={bodyTop}
                  width={CANDLE_W}
                  height={bodyH}
                  fill={isGreen ? color : color}
                  stroke={color}
                  strokeWidth={0.5}
                  rx={1}
                />
              </g>
            )
          })}

          {/* EMA overlays */}
          {indicators.has('EMA 20') && (
            <path d={emaPath(ema20)} fill="none" stroke="#facc15" strokeWidth={1.5} opacity={0.85} />
          )}
          {indicators.has('EMA 50') && (
            <path d={emaPath(ema50)} fill="none" stroke="#60a5fa" strokeWidth={1.5} opacity={0.85} />
          )}
          {indicators.has('EMA 200') && (
            <path d={emaPath(ema200)} fill="none" stroke="#c084fc" strokeWidth={1.5} opacity={0.85} />
          )}

          {/* Drawing tool overlays */}
          {drawTools.has('Trend Line') && (
            <line
              x1={candleX(0)}
              y1={priceToY(CANDLE_DATA[0].l)}
              x2={candleX(29)}
              y2={priceToY(CANDLE_DATA[14].l)}
              stroke="#f59e0b"
              strokeWidth={1.5}
              strokeDasharray="6 3"
            />
          )}
          {drawTools.has('Horizontal Line') && (
            <>
              <line
                x1={0}
                y1={priceToY(45000)}
                x2={CHART_W}
                y2={priceToY(45000)}
                stroke="#f87171"
                strokeWidth={1}
                strokeDasharray="8 4"
              />
              <text
                x={6}
                y={priceToY(45000) - 4}
                fill="#f87171"
                fontSize="9"
                fontFamily="monospace"
              >
                45,000
              </text>
            </>
          )}
          {drawTools.has('Fibonacci') && (
            <>
              {[0, 0.236, 0.382, 0.5, 0.618, 0.786, 1].map((level) => {
                const price = PRICE_MIN + (PRICE_MAX - PRICE_MIN) * level
                return (
                  <g key={level}>
                    <line
                      x1={0}
                      y1={priceToY(price)}
                      x2={CHART_W}
                      y2={priceToY(price)}
                      stroke="#a78bfa"
                      strokeWidth={0.7}
                      strokeDasharray="3 5"
                      opacity={0.5}
                    />
                    <text
                      x={CHART_W - 4}
                      y={priceToY(price) - 3}
                      textAnchor="end"
                      fill="#a78bfa"
                      fontSize="8"
                      fontFamily="monospace"
                      opacity={0.7}
                    >
                      {(level * 100).toFixed(1)}%
                    </text>
                  </g>
                )
              })}
            </>
          )}

          {/* Timeframe label (decorative) */}
          <text x={8} y={16} fill="#94a3b8" fontSize="10" fontFamily="monospace">
            BTCUSDT · {timeframe}
          </text>

          {/* RSI sub-panel */}
          {showRSI && (
            <g transform={`translate(0, ${CHART_H + 8})`}>
              <rect
                x={0}
                y={0}
                width={CHART_W}
                height={RSI_H}
                fill="#0f172a"
                rx={4}
              />
              {/* RSI separator */}
              <line
                x1={0}
                y1={0}
                x2={CHART_W}
                y2={0}
                stroke="#334155"
                strokeWidth={1}
              />
              {/* Overbought / oversold lines */}
              <line
                x1={0}
                y1={RSI_H * 0.2}
                x2={CHART_W}
                y2={RSI_H * 0.2}
                stroke="#ef444440"
                strokeDasharray="4 4"
              />
              <text x={CHART_W - 4} y={RSI_H * 0.2 - 2} textAnchor="end" fill="#ef444480" fontSize="7" fontFamily="monospace">70</text>
              <line
                x1={0}
                y1={RSI_H * 0.8}
                x2={CHART_W}
                y2={RSI_H * 0.8}
                stroke="#22c55e40"
                strokeDasharray="4 4"
              />
              <text x={CHART_W - 4} y={RSI_H * 0.8 - 2} textAnchor="end" fill="#22c55e80" fontSize="7" fontFamily="monospace">30</text>
              <line
                x1={0}
                y1={RSI_H * 0.5}
                x2={CHART_W}
                y2={RSI_H * 0.5}
                stroke="#334155"
                strokeDasharray="2 4"
              />
              <text x={CHART_W - 4} y={RSI_H * 0.5 - 2} textAnchor="end" fill="#94a3b880" fontSize="7" fontFamily="monospace">50</text>
              {/* RSI label */}
              <text x={8} y={14} fill="#fb923c" fontSize="9" fontFamily="monospace">
                RSI (14)
              </text>
              {/* RSI line */}
              {(() => {
                const path = rsiValues
                  .map((val, i) => {
                    const x = candleX(i)
                    const y = RSI_H * (1 - val / 100)
                    return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`
                  })
                  .join(' ')
                return (
                  <path d={path} fill="none" stroke="#fb923c" strokeWidth={1.5} opacity={0.9} />
                )
              })()}
            </g>
          )}
        </svg>
      </div>

      {/* ── Price Info Bar ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center gap-4 bg-slate-900/80 border-t border-slate-800 px-4 py-2 text-xs font-mono">
        <span className="text-slate-400">
          O <span className="text-white">{CANDLE_DATA[29].o.toLocaleString()}</span>
        </span>
        <span className="text-slate-400">
          H <span className="text-white">{CANDLE_DATA[29].h.toLocaleString()}</span>
        </span>
        <span className="text-slate-400">
          L <span className="text-white">{CANDLE_DATA[29].l.toLocaleString()}</span>
        </span>
        <span className="text-slate-400">
          C <span className="text-emerald-400">{CANDLE_DATA[29].c.toLocaleString()}</span>
        </span>
        <span className="ml-auto text-slate-500">
          +{(CANDLE_DATA[29].c - CANDLE_DATA[0].o).toLocaleString()} (
          {(((CANDLE_DATA[29].c - CANDLE_DATA[0].o) / CANDLE_DATA[0].o) * 100).toFixed(2)}%)
        </span>
      </div>

      {/* ── Practice Tasks ─────────────────────────────────────────────── */}
      <div className="bg-slate-900 border-t border-slate-800 px-4 py-4">
        <h3 className="text-sm font-semibold text-amber-300 mb-3 flex items-center gap-2">
          <Layers className="h-4 w-4" />
          Practice Tasks
          <span className="text-[10px] text-slate-500 font-normal ml-1">
            ({tasks.size}/{PRACTICE_TASKS.length} completed)
          </span>
        </h3>

        {/* TradingView + MEXC Workflow Banner */}
        <div className="mb-4 p-3 rounded-lg bg-slate-800 border border-slate-700">
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
            <ArrowRight className="h-4 w-4 text-slate-600 hidden sm:block" />
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
          <p className="text-[10px] text-slate-500 mt-2 pl-0 sm:pl-16">
            First identify your setup on TradingView, then place the trade on MEXC demo to practice execution.
          </p>
        </div>
        <ul className="space-y-2">
          {PRACTICE_TASKS.map((task, idx) => (
            <li key={idx}>
              <button
                onClick={() => toggleTask(idx)}
                className="flex items-start gap-2.5 text-left w-full group"
              >
                {tasks.has(idx) ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                ) : (
                  <Circle className="h-4 w-4 text-slate-600 mt-0.5 shrink-0 group-hover:text-slate-400 transition-colors" />
                )}
                <span
                  className={`text-xs leading-relaxed ${
                    tasks.has(idx)
                      ? 'text-slate-500 line-through'
                      : 'text-slate-300 group-hover:text-white transition-colors'
                  }`}
                >
                  {task}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Completion message */}
        {tasks.size === PRACTICE_TASKS.length && (
          <div className="mt-4 p-3 bg-emerald-900/30 border border-emerald-800/50 rounded-lg text-center">
            <p className="text-emerald-300 text-xs font-medium">
              🎉 Great job! You&apos;ve completed all practice tasks.
            </p>
          </div>
        )}
      </div>

      {/* ── Legend ─────────────────────────────────────────────────────── */}
      {(indicators.size > 0 || drawTools.size > 0) && (
        <div className="flex flex-wrap items-center gap-3 bg-slate-950 border-t border-slate-800 px-4 py-2">
          {indicators.has('EMA 20') && (
            <span className="flex items-center gap-1 text-[10px] text-yellow-400">
              <span className="w-3 h-0.5 bg-yellow-400 inline-block rounded" /> EMA 20
            </span>
          )}
          {indicators.has('EMA 50') && (
            <span className="flex items-center gap-1 text-[10px] text-blue-400">
              <span className="w-3 h-0.5 bg-blue-400 inline-block rounded" /> EMA 50
            </span>
          )}
          {indicators.has('EMA 200') && (
            <span className="flex items-center gap-1 text-[10px] text-purple-400">
              <span className="w-3 h-0.5 bg-purple-400 inline-block rounded" /> EMA 200
            </span>
          )}
          {indicators.has('RSI') && (
            <span className="flex items-center gap-1 text-[10px] text-orange-400">
              <span className="w-3 h-0.5 bg-orange-400 inline-block rounded" /> RSI (14)
            </span>
          )}
          {indicators.has('Volume') && (
            <span className="flex items-center gap-1 text-[10px] text-cyan-400">
              <span className="w-3 h-0.5 bg-cyan-400 inline-block rounded" /> Volume
            </span>
          )}
          {drawTools.has('Trend Line') && (
            <span className="flex items-center gap-1 text-[10px] text-amber-400">
              <span className="w-3 h-0.5 bg-amber-400 inline-block rounded" style={{ borderBottom: '1px dashed currentColor' }} /> Trend Line
            </span>
          )}
          {drawTools.has('Horizontal Line') && (
            <span className="flex items-center gap-1 text-[10px] text-red-400">
              <span className="w-3 h-0.5 bg-red-400 inline-block rounded" style={{ borderBottom: '1px dashed currentColor' }} /> H-Line
            </span>
          )}
          {drawTools.has('Fibonacci') && (
            <span className="flex items-center gap-1 text-[10px] text-violet-400">
              <span className="w-3 h-0.5 bg-violet-400 inline-block rounded" style={{ borderBottom: '1px dashed currentColor' }} /> Fib
            </span>
          )}
        </div>
      )}
    </div>
  )
}
