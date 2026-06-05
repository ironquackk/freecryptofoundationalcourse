'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FlaskConical,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Trophy,
  Target,
  AlertCircle,
  Lightbulb,
  ExternalLink,
  ArrowRight,
} from 'lucide-react'
import { TradingViewLab } from '@/components/academy/tradingview-lab'
import { MEXCLab } from '@/components/academy/mexc-lab'

// ── Types ──────────────────────────────────────────────────────────────────

export interface LabTask {
  id: string
  instruction: string
  hint?: string
}

export interface AssessmentQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface LabSimulationProps {
  id: string
  title: string
  subtitle: string
  dayNumber: number
  sessionName: string
  learningObjectives: string[]
  tasks: LabTask[]
  selfAssessment: AssessmentQuestion[]
  labType: 'tradingview' | 'mexc' | 'both'
  expectedOutcomes: string[]
}

// ── LocalStorage helpers ───────────────────────────────────────────────────

function loadCheckedTasks(labId: string): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(`lab-tasks-${labId}`)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw))
  } catch {
    return new Set()
  }
}

function saveCheckedTasks(labId: string, tasks: Set<string>) {
  try {
    localStorage.setItem(`lab-tasks-${labId}`, JSON.stringify([...tasks]))
  } catch { /* noop */ }
}

// ── Component ──────────────────────────────────────────────────────────────

export function AppliedLabSimulation({
  id,
  title,
  subtitle,
  dayNumber,
  sessionName,
  learningObjectives,
  tasks,
  selfAssessment,
  labType,
  expectedOutcomes,
}: LabSimulationProps) {
  const [checkedTasks, setCheckedTasks] = useState<Set<string>>(new Set())
  const [revealedAnswers, setRevealedAnswers] = useState<Set<number>>(new Set())
  const [showObjectives, setShowObjectives] = useState(false)
  const [showOutcomes, setShowOutcomes] = useState(false)
  const [expandedHints, setExpandedHints] = useState<Set<string>>(new Set())

  // Load persisted tasks from localStorage
  useEffect(() => {
    setCheckedTasks(loadCheckedTasks(id))
  }, [id])

  const toggleTask = (taskId: string) => {
    setCheckedTasks(prev => {
      const next = new Set(prev)
      if (next.has(taskId)) next.delete(taskId)
      else next.add(taskId)
      saveCheckedTasks(id, next)
      return next
    })
  }

  const toggleHint = (taskId: string) => {
    setExpandedHints(prev => {
      const next = new Set(prev)
      if (next.has(taskId)) next.delete(taskId)
      else next.add(taskId)
      return next
    })
  }

  const toggleAnswer = (index: number) => {
    setRevealedAnswers(prev => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  // Progress calculation
  const completionPct = tasks.length > 0
    ? Math.round((checkedTasks.size / tasks.length) * 100)
    : 0
  const isComplete = tasks.length > 0 && checkedTasks.size === tasks.length

  // Day color classes
  const dayColors: Record<number, { badge: string; accent: string; bg: string }> = {
    1:  { badge: 'bg-emerald-500/20 text-emerald-400',  accent: 'text-emerald-400',  bg: 'bg-emerald-500/10' },
    2:  { badge: 'bg-amber-500/20 text-amber-400',      accent: 'text-amber-400',    bg: 'bg-amber-500/10' },
    3:  { badge: 'bg-sky-500/20 text-sky-400',          accent: 'text-sky-400',      bg: 'bg-sky-500/10' },
    4:  { badge: 'bg-red-500/20 text-red-400',          accent: 'text-red-400',      bg: 'bg-red-500/10' },
    5:  { badge: 'bg-green-500/20 text-green-400',      accent: 'text-green-400',    bg: 'bg-green-500/10' },
    6:  { badge: 'bg-purple-500/20 text-purple-400',    accent: 'text-purple-400',   bg: 'bg-purple-500/10' },
    7:  { badge: 'bg-yellow-500/20 text-yellow-400',    accent: 'text-yellow-400',   bg: 'bg-yellow-500/10' },
    8:  { badge: 'bg-pink-500/20 text-pink-400',        accent: 'text-pink-400',     bg: 'bg-pink-500/10' },
    9:  { badge: 'bg-teal-500/20 text-teal-400',        accent: 'text-teal-400',     bg: 'bg-teal-500/10' },
    10: { badge: 'bg-orange-500/20 text-orange-400',    accent: 'text-orange-400',   bg: 'bg-orange-500/10' },
  }
  const colors = dayColors[dayNumber] || dayColors[1]

  return (
    <div id={id} className="w-full space-y-6">
      {/* ── Lab Header ─────────────────────────────────────────────────── */}
      <div className="rounded-xl border border-slate-700/50 bg-slate-900 overflow-hidden">
        <div className={`px-6 py-4 border-b border-slate-700/50 ${colors.bg}`}>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold ${colors.badge}`}>
              <FlaskConical className="h-3 w-3" />
              Day {dayNumber}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-700/50 text-slate-300">
              {sessionName}
            </span>
            {isComplete && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/20 text-emerald-400">
                <Trophy className="h-3 w-3" />
                Complete
              </span>
            )}
          </div>
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
        </div>

        {/* Learning Objectives (collapsible) */}
        <div className="px-6 py-3">
          <button
            onClick={() => setShowObjectives(!showObjectives)}
            className="flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors w-full text-left"
          >
            {showObjectives ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            <Target className="h-4 w-4" />
            Learning Objectives ({learningObjectives.length})
          </button>
          <AnimatePresence>
            {showObjectives && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <ul className="mt-2 space-y-1.5 pl-6">
                  {learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className={`mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0 ${colors.accent.replace('text-', 'bg-')}`} />
                      {obj}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Progress Bar ───────────────────────────────────────────────── */}
      <div className="rounded-xl border border-slate-700/50 bg-slate-900 px-6 py-3">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>Task Progress</span>
          <span className="font-mono">{checkedTasks.size}/{tasks.length} ({completionPct}%)</span>
        </div>
        <div className="h-2 rounded-full bg-slate-800">
          <motion.div
            className="h-2 rounded-full bg-amber-500 transition-all"
            initial={{ width: 0 }}
            animate={{ width: `${completionPct}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* ── Main Content: Split-screen Layout ──────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Task Checklist */}
        <div className="rounded-xl border border-slate-700/50 bg-slate-900 overflow-hidden">
          <div className="px-6 py-3 border-b border-slate-700/50 bg-slate-800/50">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-400" />
              Instructions & Tasks
            </h3>
          </div>
          <div className="px-6 py-4 max-h-[600px] overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#475569 transparent' }}>
            <ul className="space-y-3">
              {tasks.map((task) => {
                const isChecked = checkedTasks.has(task.id)
                const isHintExpanded = expandedHints.has(task.id)
                return (
                  <li key={task.id} className="group">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="flex items-start gap-3 text-left w-full rounded-lg px-2 py-2 -mx-2 transition-colors hover:bg-slate-800/60"
                    >
                      {isChecked ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Circle className="h-5 w-5 text-slate-600 mt-0.5 flex-shrink-0 group-hover:text-slate-400 transition-colors" />
                      )}
                      <span className={`text-sm leading-relaxed ${isChecked ? 'text-slate-500 line-through' : 'text-slate-200'}`}>
                        {task.instruction}
                      </span>
                    </button>
                    {task.hint && (
                      <div className="ml-8 mt-0.5">
                        <button
                          onClick={() => toggleHint(task.id)}
                          className="flex items-center gap-1 text-xs text-amber-400/70 hover:text-amber-400 transition-colors"
                        >
                          <Lightbulb className="h-3 w-3" />
                          {isHintExpanded ? 'Hide hint' : 'Show hint'}
                        </button>
                        <AnimatePresence>
                          {isHintExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.15 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-1 text-xs text-amber-300/80 bg-amber-500/5 border border-amber-500/10 rounded-lg px-3 py-2">
                                {task.hint}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>

            {/* Completion badge */}
            {isComplete && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mt-6 p-4 bg-emerald-900/20 border border-emerald-800/40 rounded-xl text-center"
              >
                <Trophy className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <p className="text-emerald-300 text-sm font-semibold">All tasks completed!</p>
                <p className="text-emerald-400/60 text-xs mt-1">Great work — proceed to the self-assessment below.</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Right: Simulator */}
        <div className="space-y-4">
          {/* Workflow Banner — always shown above the simulators */}
          <div className="p-3 rounded-lg bg-slate-800 border border-slate-700">
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
              First identify your setup (S/R, patterns, structure) on TradingView, then execute the trade on MEXC demo for real practice.
            </p>
          </div>

          {labType === 'tradingview' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="inline-flex items-center justify-center h-5 w-12 rounded bg-amber-500/20 border border-amber-500/30 text-[9px] font-bold text-amber-300">STEP 1</span>
                  TradingView Simulator
                </h4>
                <a
                  href="https://www.tradingview.com/chart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Open real TradingView <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <TradingViewLab />
              <div className="mt-3 p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="font-medium">After analyzing above, execute your trade on MEXC:</span>
                  <a
                    href="https://www.mexc.com/exchange/BTC_USDT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-300 hover:text-emerald-200 font-semibold transition-colors"
                  >
                    Open MEXC Demo <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          )}
          {labType === 'mexc' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="inline-flex items-center justify-center h-5 w-12 rounded bg-emerald-500/20 border border-emerald-500/30 text-[9px] font-bold text-emerald-300">STEP 2</span>
                  MEXC Simulator
                </h4>
                <a
                  href="https://www.mexc.com/exchange/BTC_USDT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Open real MEXC Demo <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <MEXCLab />
              <div className="mt-3 p-2.5 rounded-lg bg-slate-800 border border-slate-700">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ArrowRight className="h-3.5 w-3.5 rotate-180 text-amber-400" />
                  <span className="font-medium">Before trading above, analyze your setup on TradingView:</span>
                  <a
                    href="https://www.tradingview.com/chart/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 font-semibold transition-colors"
                  >
                    Open TradingView <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          )}
          {labType === 'both' && (
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="inline-flex items-center justify-center h-5 w-12 rounded bg-amber-500/20 border border-amber-500/30 text-[9px] font-bold text-amber-300">STEP 1</span>
                    TradingView Simulator
                  </h4>
                  <a
                    href="https://www.tradingview.com/chart/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Open real TradingView <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <TradingViewLab />
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
                  <span className="text-amber-400 font-medium">Analysis complete?</span>
                  <ArrowRight className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Now execute on MEXC below</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="inline-flex items-center justify-center h-5 w-12 rounded bg-emerald-500/20 border border-emerald-500/30 text-[9px] font-bold text-emerald-300">STEP 2</span>
                    MEXC Simulator
                  </h4>
                  <a
                    href="https://www.mexc.com/exchange/BTC_USDT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Open real MEXC Demo <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <MEXCLab />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Expected Outcomes ──────────────────────────────────────────── */}
      <div className="rounded-xl border border-slate-700/50 bg-slate-900 overflow-hidden">
        <div className="px-6 py-3">
          <button
            onClick={() => setShowOutcomes(!showOutcomes)}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors w-full text-left"
          >
            {showOutcomes ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            Expected Outcomes ({expectedOutcomes.length})
          </button>
          <AnimatePresence>
            {showOutcomes && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <ul className="mt-2 space-y-2 pl-6">
                  {expectedOutcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-amber-500/60 mt-0.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Self-Assessment ────────────────────────────────────────────── */}
      {selfAssessment.length > 0 && (
        <div className="rounded-xl border border-slate-700/50 bg-slate-900 overflow-hidden">
          <div className="px-6 py-3 border-b border-slate-700/50 bg-slate-800/50">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-amber-400" />
              Self-Assessment
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Click to reveal the correct answer and explanation.</p>
          </div>
          <div className="px-6 py-4 space-y-4">
            {selfAssessment.map((q, qIdx) => {
              const isRevealed = revealedAnswers.has(qIdx)
              return (
                <div key={qIdx} className="rounded-lg border border-slate-700/40 bg-slate-800/30 overflow-hidden">
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-slate-200 mb-3">
                      {qIdx + 1}. {q.question}
                    </p>
                    <ul className="space-y-1.5">
                      {q.options.map((opt, optIdx) => {
                        const isCorrect = optIdx === q.correctIndex
                        let optClass = 'text-slate-400 bg-slate-800/60 border-slate-700/30'
                        if (isRevealed && isCorrect) {
                          optClass = 'text-emerald-300 bg-emerald-500/10 border-emerald-700/40'
                        } else if (isRevealed && !isCorrect) {
                          optClass = 'text-slate-500 bg-slate-800/30 border-slate-700/20'
                        }
                        return (
                          <li
                            key={optIdx}
                            className={`text-xs rounded-lg border px-3 py-2 ${optClass}`}
                          >
                            <span className="font-mono mr-1.5">{String.fromCharCode(65 + optIdx)}.</span>
                            {opt}
                            {isRevealed && isCorrect && (
                              <CheckCircle2 className="inline h-3 w-3 ml-1.5 text-emerald-400" />
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>

                  {/* Reveal button */}
                  <div className="px-4 pb-3">
                    <button
                      onClick={() => toggleAnswer(qIdx)}
                      className="text-xs font-medium text-amber-400/70 hover:text-amber-400 transition-colors flex items-center gap-1"
                    >
                      {isRevealed ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
                      {isRevealed ? 'Hide Answer' : 'Reveal Answer'}
                    </button>
                    <AnimatePresence>
                      {isRevealed && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 p-3 bg-amber-500/5 border border-amber-500/15 rounded-lg">
                            <p className="text-xs text-amber-300/90">
                              <span className="font-semibold">Answer: </span>
                              {String.fromCharCode(65 + q.correctIndex)}. {q.options[q.correctIndex]}
                            </p>
                            <p className="text-xs text-slate-400 mt-1.5">{q.explanation}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
