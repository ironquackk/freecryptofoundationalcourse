'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Blocks, Bitcoin, Building2, Shield, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

const bricks = [
  { icon: Blocks, label: 'Blockchain' },
  { icon: Bitcoin, label: 'Bitcoin' },
  { icon: Building2, label: 'Exchanges' },
  { icon: Shield, label: 'Security' },
  { icon: TrendingUp, label: 'Markets' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" />

      {/* Hero image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-image.png"
          alt="Crypto Foundations - Building blocks of cryptocurrency"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-900/70 to-slate-800/90" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="mb-2 sm:mb-3">
          <span className="text-sm sm:text-base md:text-lg font-medium text-slate-400 tracking-wider uppercase">
            DAY 1:
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
        >
          <span className="text-white">Crypto </span>
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              Foundations
            </span>
            {/* Animated shimmer overlay */}
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-clip-text text-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut' as const,
              }}
              style={{ backgroundSize: '200% 100%' }}
              aria-hidden
            >
              Foundations
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8 max-w-2xl"
        >
          Understanding the World You&apos;re About to Trade In
        </motion.p>

        {/* Badge / Pill */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <Badge
            variant="outline"
            className="border-amber-500/40 bg-amber-500/10 text-amber-300 px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm font-medium"
          >
            8-Hour Intensive &nbsp;|&nbsp; 10-Day Crypto Trading Bootcamp
          </Badge>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg italic text-amber-400/90 mb-10 sm:mb-12 max-w-xl"
        >
          &ldquo;You can&apos;t trade what you don&apos;t understand. Master the foundation
          first.&rdquo;
        </motion.p>

        {/* Brick icons row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
        >
          {bricks.map((brick, index) => (
            <motion.div
              key={brick.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.12,
                ease: 'easeOut' as const,
              }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-300">
                <brick.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-slate-400 group-hover:text-amber-400 transition-colors duration-300" />
              </div>
              <span className="text-[10px] sm:text-xs md:text-sm text-slate-500 group-hover:text-amber-300/80 transition-colors duration-300 font-medium">
                {brick.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        }}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-slate-500" />
      </motion.div>
    </section>
  )
}
