// Content data for all days of the Crypto Foundations Academy Bootcamp
// Used by the PPTX generation API

export interface SlideData {
  title: string
  bullets: string[]
  subSlides?: { title: string; bullets: string[] }[]
}

export interface SectionData {
  sectionTitle: string
  slides: SlideData[]
}

export interface DayContent {
  day: number
  title: string
  subtitle: string
  tagline: string
  sections: SectionData[]
}

export const daysData: DayContent[] = [
  // ─── DAY 1 ───
  {
    day: 1,
    title: 'Crypto Foundations',
    subtitle: 'Understanding the World You\'re About to Trade In',
    tagline: 'The foundation everything else is built on',
    sections: [
      {
        sectionTitle: 'Morning Block — Hours 1-3: What Is Crypto and Why Does It Exist?',
        slides: [
          {
            title: 'What Is Money?',
            bullets: [
              'Three functions: Medium of Exchange, Store of Value, Unit of Account',
              'History: Barter → Gold → Paper → Fiat → Crypto',
              'Fiat problem: US Dollar lost 85% of purchasing power since 1970',
              'Crypto relevance: Bitcoin\'s 21M cap = built-in scarcity',
              'Key takeaway: Crypto solves real financial problems'
            ]
          },
          {
            title: 'The 2008 Financial Crisis — Bitcoin\'s Origin',
            bullets: [
              'Sept 15, 2008: Lehman Brothers collapsed',
              'Bank bailouts using taxpayer money — "Too Big to Fail"',
              'Oct 31, 2008: Satoshi Nakamoto published the Bitcoin whitepaper',
              'Jan 3, 2009: Genesis Block mined — embedded headline about bank bailouts',
              'Bitcoin was born from a crisis of trust in the traditional financial system'
            ]
          },
          {
            title: 'What Is Blockchain?',
            bullets: [
              'A distributed, immutable ledger shared across thousands of computers',
              'Analogy: Like a shared Google Doc that no one can erase or change',
              '6-step process: Transaction → Broadcast → Validation → Block → Hash → Chain',
              '4 key properties: Decentralized, Immutable, Transparent, Trustless'
            ]
          },
          {
            title: 'What Is Bitcoin?',
            bullets: [
              'Finite Supply: Only 21 million will ever exist',
              'Scarcity: More scarce than gold (fixed cap vs. ongoing mining)',
              'Divisible: Each BTC = 100 million satoshis',
              'Portable: Send millions anywhere in minutes',
              'Permissionless: No bank approval needed',
              'Why it has value: Scarcity + utility + network effects + trust in code'
            ]
          },
          {
            title: 'What Is Ethereum?',
            bullets: [
              'Bitcoin = Digital Money. Ethereum = World Computer',
              'Smart Contracts: Self-executing code — like a vending machine',
              'dApps: Uniswap (exchange), Aave (lending), OpenSea (NFTs)',
              'ETH vs BTC: BTC is store of value, ETH is programmable platform',
              'Both are essential: BTC = stability anchor, ETH = growth play'
            ]
          },
          {
            title: 'What Are Stablecoins?',
            bullets: [
              'Crypto tokens pegged 1:1 to fiat currency (usually USD)',
              'USDT (Tether): Most used, highest liquidity',
              'USDC (Circle): Most trusted, regulated',
              'DAI (MakerDAO): Decentralized, over-collateralized',
              'Essential for: Trading pairs, avoiding volatility, DeFi',
              'Risk: Peg can break (USDC dropped to $0.87 during SVB crisis)'
            ]
          },
          {
            title: 'What Are Altcoins?',
            bullets: [
              'Large-Cap (Top 10): SOL, BNB, XRP — Medium risk, safer plays',
              'Mid-Cap (10-50): LINK, ARB — Medium-high risk, growth potential',
              'Small-Cap/Memecoins: DOGE, SHIB, PEPE — EXTREME risk, gambling',
              'Coach\'s Rule: Stick to top 20 coins for your first 3 months'
            ]
          },
          {
            title: 'Essential Crypto Vocabulary',
            bullets: [
              'HODL: Hold On for Dear Life — don\'t sell in panic',
              'FOMO: Fear Of Missing Out — buying at the top',
              'FUD: Fear, Uncertainty, Doubt — panic selling',
              'ATH: All-Time High / ATL: All-Time Low',
              'Market Cap: Price × Circulating Supply',
              'Whale: Someone holding massive amounts of crypto',
              'DYOR: Do Your Own Research — always verify'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Late Morning — Hour 4: Why Crypto Prices Move',
        slides: [
          {
            title: '8 Drivers of Crypto Prices',
            bullets: [
              '1. Supply & Demand: Fundamental law of markets',
              '2. Market Sentiment: Greed = buying, Fear = selling',
              '3. News & Events: Regulations, hacks, partnerships',
              '4. Whale Activity: Large holders can move markets',
              '5. Bitcoin Dominance: BTC direction affects all alts',
              '6. Tokenomics: Inflation, burns, unlocks, staking',
              '7. Macro Factors: Interest rates, inflation, stock market',
              '8. Market Cycles: Accumulation → Markup → Distribution → Markdown'
            ]
          },
          {
            title: 'The Crypto Market Cycle',
            bullets: [
              'Accumulation: Smart money buys, public ignores (best entry)',
              'Markup (Bull): Prices rise, public FOMOs in',
              'Distribution: Smart money sells, public buys the top',
              'Markdown (Bear): Prices crash, public panics and sells',
              'Key insight: Beginners enter at Distribution (worst time)'
            ]
          },
          {
            title: 'Bitcoin Halving — The Cycle Engine',
            bullets: [
              'Every ~4 years, Bitcoin mining reward cuts in half',
              '2012: 50→25 BTC | 2016: 25→12.5 | 2020: 12.5→6.25 | 2024: 6.25→3.125',
              'Reduced supply + steady demand = price pressure upward',
              'Historically: Peak comes 12-18 months after halving',
              'Critical nuance: Halving is priced in — don\'t buy just because of it'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Afternoon — Hours 5-6: Exchanges, Accounts & Security',
        slides: [
          {
            title: 'What Is a Crypto Exchange?',
            bullets: [
              'CEX (Centralized): Binance, MEXC — custodial, easy, KYC required',
              'DEX (Decentralized): Uniswap, dYdX — non-custodial, permissionless',
              'For beginners: Start with CEX, learn DEX later',
              '"Not your keys, not your coins" — FTX collapse lesson (2022)'
            ]
          },
          {
            title: 'Setting Up Binance & MEXC',
            bullets: [
              'Both required: Diversification and feature access',
              'Registration → KYC → Google Authenticator → Anti-Phishing Code',
              'Critical: Whitelist withdrawal addresses',
              'Bookmark the real URL — phishing is the #1 scam',
              'Use different passwords for each exchange'
            ]
          },
          {
            title: 'The Complete Security Checklist',
            bullets: [
              'Account: 2FA, strong passwords, anti-phishing, whitelist',
              'Behavioral: No shared WiFi for trading, verify URLs, never share seed phrases',
              'Device: Updated OS, antivirus, no jailbreaking, private browsing',
              '$1.7 billion stolen in 2023 alone — security is not optional'
            ]
          },
          {
            title: 'Common Scams Every Beginner Must Know',
            bullets: [
              'Phishing: Fake websites/emails stealing credentials',
              'Pig Butchering: Long-term romance/investment scams',
              'Impersonation: Fake accounts pretending to be influencers',
              'Pump & Dump: Coordinated buy → hype → sell → crash',
              'Fake Giveaways: "Send 1 ETH, get 2 back" — you get nothing',
              'Rule: If it sounds too good to be true, it IS too good to be true'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Late Afternoon — Hours 6-7: Interface Tour & Trading Basics',
        slides: [
          {
            title: 'Binance Interface Tour',
            bullets: [
              'Home Dashboard: Portfolio overview, market movers',
              'Spot Trading: Buy/sell crypto pairs (BTC/USDT)',
              'Futures Tab: Leveraged trading — DO NOT touch yet',
              'Earn Tab: Staking, savings, liquidity pools',
              'Wallet: Deposit, withdraw, transfer between accounts'
            ]
          },
          {
            title: 'Understanding Trading Pairs',
            bullets: [
              'BASE/QUOTE format: BTC/USDT = buy BTC using USDT',
              'Always start with USDT pairs — most liquid and stable',
              'Market Order: Buy/sell instantly at current price',
              'Limit Order: Buy/sell at your specified price',
              'Practice: Place a small limit order on Binance'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Final Block — Hour 8: TradingView & Day 1 Review',
        slides: [
          {
            title: 'TradingView — Your Chart Platform',
            bullets: [
              'The #1 charting platform used by crypto traders',
              'Free features: Drawing tools, indicators, watchlists, replay mode',
              'Setup: Create account → Search BTCUSDT → Default chart ready',
              'Practice: Switch timeframes, draw trend lines, add indicators'
            ]
          },
          {
            title: 'Day 1 Key Takeaways',
            bullets: [
              '1. Crypto exists because the traditional system has real flaws',
              '2. Blockchain solves trust through math, not institutions',
              '3. Bitcoin is digital gold, Ethereum is a world computer',
              '4. Market cycles drive everything — know where you are',
              '5. Security is not optional — $1.7B stolen in 2023',
              '6. Never share seed phrases, always verify URLs',
              '7. Start with top 20 coins — no memecoins for 3 months',
              '8. Tomorrow: Technical Analysis — reading the charts'
            ]
          },
          {
            title: 'Day 1 Homework',
            bullets: [
              '1. Complete Binance + MEXC account setup with all security features',
              '2. Create TradingView account and bookmark BTC/USDT chart',
              '3. Write down 10 crypto terms and their definitions from memory',
              '4. Place one small limit order (even $5) on Binance',
              '5. Identify which market cycle phase you think we\'re in',
              '6. Set up a trading journal (Google Doc or notebook)'
            ]
          }
        ]
      }
    ]
  },

  // ─── DAY 2 ───
  {
    day: 2,
    title: 'Technical Analysis',
    subtitle: 'Support/Resistance, Trends & Moving Averages',
    tagline: 'Where price has been tells you where it\'s likely to go',
    sections: [
      {
        sectionTitle: 'Morning Block — Hours 1-4: Support & Resistance',
        slides: [
          {
            title: 'What Is Support?',
            bullets: [
              'A price level where buying pressure historically overcomes selling',
              'Price has bounced multiple times from this level',
              'Think of it as a "floor" — price tends to stop falling here',
              'How to draw: Connect the lowest points of bounces with a horizontal line'
            ]
          },
          {
            title: 'What Is Resistance?',
            bullets: [
              'A price level where selling pressure historically overcomes buying',
              'Price has rejected multiple times from this level',
              'Think of it as a "ceiling" — price tends to stop rising here',
              'How to draw: Connect the highest points of rejections with a horizontal line'
            ]
          },
          {
            title: '5 Rules for Drawing S/R Levels',
            bullets: [
              'Rule 1: Touches matter — 3+ touches = strong level',
              'Rule 2: Recent levels matter more than old ones',
              'Rule 3: Round numbers act as psychological S/R ($50K, $100K)',
              'Rule 4: Volume at level = stronger level',
              'Rule 5: S/R zones, not lines — use zones of 1-2%'
            ]
          },
          {
            title: 'S/R Flip — Resistance Becomes Support',
            bullets: [
              'When resistance breaks, it often becomes support (and vice versa)',
              'This is one of the most powerful concepts in trading',
              'Why: The buyers who broke resistance defend their new position',
              'Look for: Clean break + retest + bounce = confirmed flip'
            ]
          },
          {
            title: 'Breakout vs. Fakeout',
            bullets: [
              'Breakout: Price breaks through S/R with conviction and stays',
              'Fakeout: Price pokes through then falls back — a trap',
              'How to tell the difference: VOLUME + CLOSE',
              'Real breakout: Candle closes above S/R + high volume',
              'Fakeout: Wick pokes above but candle closes below + low volume',
              'Rule: Wait for the candle to CLOSE above/below before entering'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Midday Block — Hour 4: Market Structure & Trend Lines',
        slides: [
          {
            title: 'Market Structure — The Foundation',
            bullets: [
              'Uptrend: Higher Highs + Higher Lows (buyers in control)',
              'Downtrend: Lower Highs + Lower Lows (sellers in control)',
              'Range: Price bounces between support and resistance',
              'Rule: ALWAYS determine structure before any indicator',
              'Structure tells you DIRECTION — indicators tell you TIMING'
            ]
          },
          {
            title: 'Break of Structure (BOS) & Change of Character (ChoCh)',
            bullets: [
              'BOS: Price breaks a swing point continuing the trend (trend continues)',
              'ChoCh: First break against the trend (potential reversal signal)',
              'BOS = trend confirmation, ChoCh = warning sign',
              'Wait for retest after ChoCh before trading the reversal'
            ]
          },
          {
            title: 'Trend Lines & Channels',
            bullets: [
              'Trend line: Diagonal line connecting swing highs or lows',
              'Rising trend line: Connect higher lows (uptrend support)',
              'Falling trend line: Connect lower highs (downtrend resistance)',
              'Channel: Two parallel trend lines containing price action',
              '3+ touches = valid trend line, more touches = stronger'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Afternoon Block — Hours 5-8: Moving Averages & Integration',
        slides: [
          {
            title: 'Moving Averages — Your Trend Compass',
            bullets: [
              'SMA (Simple): Average of last N closing prices — equal weight',
              'EMA (Exponential): Gives more weight to recent prices — faster response',
              'EMA is preferred for crypto — reacts faster to volatility',
              'Analogy: Moving averages are like a river current — price flows around them'
            ]
          },
          {
            title: 'The Three Key EMAs',
            bullets: [
              'EMA 20 (Yellow): Short-term trend — scalp/swing trading',
              'EMA 50 (Blue): Medium-term trend — swing trading',
              'EMA 200 (Red): Long-term trend — position trading/investing',
              'Stacked EMAs (20>50>200 above) = strong uptrend',
              'Tangled EMAs = ranging/choppy market — be cautious'
            ]
          },
          {
            title: 'Golden Cross & Death Cross',
            bullets: [
              'Golden Cross: EMA 50 crosses ABOVE EMA 200 — major bullish signal',
              'Death Cross: EMA 50 crosses BELOW EMA 200 — major bearish signal',
              'These are LAGGING signals — the move has already started',
              'Best used as confirmation, not entry signals',
              'Nuance: Wait for pullback to EMA 50 after cross for better entry'
            ]
          },
          {
            title: 'EMAs as Dynamic Support & Resistance',
            bullets: [
              'In uptrend: Price bounces off EMA 20/50 like support steps',
              'In downtrend: Price rejects from EMA 20/50 like resistance ceiling',
              'EMA 200 is the "line in the sand" — above = bullish bias, below = bearish',
              'The EMA Bounce Trade: Entry on bounce, SL below EMA, TP at next S/R'
            ]
          },
          {
            title: 'INTEGRATION — S/R + Structure + EMAs',
            bullets: [
              'Step 1: Market Structure → Direction (which way are we going?)',
              'Step 2: Key S/R Levels → Location (where are the key zones?)',
              'Step 3: EMA Position → Momentum (are EMAs confirming?)',
              'Step 4: Synthesis → Do all three agree?',
              'Step 5: Bias Statement → "My bias is ___ because ___"',
              'Trading Rule: Structure + S/R + EMAs must ALL agree for high-probability trades'
            ]
          },
          {
            title: 'Day 2 Key Takeaways',
            bullets: [
              '1. S/R levels are the foundation — draw them FIRST on every chart',
              '2. 3+ touches = valid level; volume confirms strength',
              '3. Market structure tells you direction — determine it before indicators',
              '4. BOS = trend continues, ChoCh = potential reversal warning',
              '5. EMA 20/50/200 are your trend compass',
              '6. Golden/Death Cross = lagging confirmation, not entry signals',
              '7. The Trading Rule: Structure + S/R + EMAs must all agree',
              '8. Tomorrow: Price Action & Technical Indicators (RSI, MACD, Volume, BB)'
            ]
          },
          {
            title: 'Day 2 Homework',
            bullets: [
              '1. Draw S/R levels on BTC/USDT daily chart (at least 3 support + 3 resistance)',
              '2. Identify current market structure on BTC (uptrend/downtrend/range)',
              '3. Add EMA 20, 50, 200 to your chart — note their positions',
              '4. Find 2 examples of S/R flip in the last 6 months',
              '5. Write a bias statement for BTC using the integration framework',
              '6. Repeat steps 1-5 for ETH/USDT on the 4H timeframe'
            ]
          }
        ]
      }
    ]
  },

  // ─── DAY 3 ───
  {
    day: 3,
    title: 'Price Action & Technical Indicators',
    subtitle: 'RSI, MACD, Volume & Bollinger Bands',
    tagline: 'Indicators confirm what price is already telling you',
    sections: [
      {
        sectionTitle: 'Morning Block — Hours 1-3: Candlestick Reading & Patterns',
        slides: [
          {
            title: 'Why Candlesticks Matter',
            bullets: [
              'Candlesticks are the LANGUAGE of the market',
              'Every candle tells a story: who won (buyers/sellers), how hard they fought',
              '4 data points: Open, High, Low, Close',
              'Golden Rule: WHERE a pattern appears matters 5-10x more than WHAT it is',
              'Patterns at S/R levels are dramatically more reliable than in the middle'
            ]
          },
          {
            title: 'Candlestick Anatomy',
            bullets: [
              'Body: Range between Open and Close (large = strong conviction)',
              'Upper Wick: Rejection of higher prices (selling pressure at top)',
              'Lower Wick: Rejection of lower prices (buying pressure at bottom)',
              'Green candle: Close > Open = buyers won the session',
              'Red candle: Close < Open = sellers won the session',
              'Small body + long wicks = indecision/indecision'
            ]
          },
          {
            title: 'Bullish Reversal Patterns (at Support)',
            bullets: [
              'Hammer: Small body on top, long lower wick — sellers pushed down, buyers fought back',
              'Bullish Engulfing: Small red + larger green candle — buyers overwhelmed sellers',
              'Morning Star: Large red → small body → large green — selling → indecision → buying',
              'Piercing Line: Red candle + green opening below red low, closing above midpoint',
              'All patterns are MUCH more reliable at support with volume confirmation'
            ]
          },
          {
            title: 'Bearish Reversal Patterns (at Resistance)',
            bullets: [
              'Shooting Star: Small body at bottom, long upper wick — mirror of Hammer',
              'Bearish Engulfing: Small green + larger red candle — mirror of Bullish Engulfing',
              'Evening Star: Large green → small body → large red — mirror of Morning Star',
              'Dark Cloud Cover: Green + red opening above green high, closing below midpoint',
              'All patterns are MUCH more reliable at resistance with volume confirmation'
            ]
          },
          {
            title: 'Indecision Patterns — Doji & Spinning Top',
            bullets: [
              'Doji: Open ≈ Close — complete indecision, neither side won',
              '4 types: Standard (cross), Dragonfly (long lower wick), Gravestone (long upper), Four-Price',
              'Doji at S/R = WARNING signal, not action signal — wait for confirmation',
              'Doji in middle of range = meaningless',
              'Spinning Top: Small body with wicks both sides — less extreme but still indecision'
            ]
          },
          {
            title: 'Pattern + Level = High Probability',
            bullets: [
              'Pattern at S/R + volume + indicator confirmation = HIGHEST probability',
              'Pattern at S/R + one confirmation = GOOD probability',
              'Pattern at S/R without confirmation = MEDIUM — wait',
              'Pattern NOT at S/R = LOW — skip it',
              'Never trade a pattern in isolation — always confirm with context'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Midday Block — Hour 4: RSI — The Momentum Detective',
        slides: [
          {
            title: 'What Is RSI? — Relative Strength Index',
            bullets: [
              'Momentum indicator measuring speed and magnitude of price changes',
              'Created by J. Welles Wilder Jr. (1978)',
              'Scale: 0-100 oscillator, default period: 14 candles',
              'Above 70 = Overbought zone, Below 30 = Oversold zone',
              'Critical: RSI measures momentum, NOT the "strength of the coin"'
            ]
          },
          {
            title: 'RSI — The Basic Reading',
            bullets: [
              'Above 70: Overbought — price risen too fast (be cautious on longs)',
              'Below 30: Oversold — price fallen too fast (be cautious on shorts)',
              '40-60: Neutral — no strong momentum',
              'RSI rising + Price rising = Confirmed bullish momentum',
              'RSI falling + Price falling = Confirmed bearish momentum',
              'RSI flat + Price moving = Move lacks conviction — be suspicious'
            ]
          },
          {
            title: 'The Biggest RSI Mistake',
            bullets: [
              'WRONG: RSI above 70 = sell now, RSI below 30 = buy now',
              'Strong trends can stay overbought/oversold for WEEKS',
              'CORRECT: Overbought at RESISTANCE = higher probability pullback',
              'CORRECT: Oversold at SUPPORT = higher probability bounce',
              'Overbought in strong uptrend = NORMAL, not a sell signal',
              'Never use RSI in isolation — always combine with structure and S/R'
            ]
          },
          {
            title: 'RSI Divergence — The Most Powerful Signal',
            bullets: [
              'Bullish Divergence: Price lower low + RSI higher low → selling momentum weakening',
              'Bearish Divergence: Price higher high + RSI lower high → buying momentum weakening',
              'Divergence is a LEADING signal — warns before the reversal happens',
              'Best at: Support (bullish) or Resistance (bearish) levels',
              'Regular divergence = potential reversal',
              'Hidden divergence = trend continuation (reloading)'
            ]
          },
          {
            title: 'RSI Hidden Divergence — Trend Continuation',
            bullets: [
              'Bullish Hidden: Price higher low + RSI lower low → uptrend continues (reloading)',
              'Bearish Hidden: Price lower high + RSI higher high → downtrend continues (reloading)',
              'Regular divergence = REVERSAL signal',
              'Hidden divergence = CONTINUATION signal',
              'Use hidden divergence to find trend-continuation entries'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Afternoon Block — Hours 5-6: MACD & Volume',
        slides: [
          {
            title: 'What Is MACD? — Moving Average Convergence Divergence',
            bullets: [
              'Trend-following momentum indicator showing relationship between two EMAs',
              'Created by Gerald Appel (late 1970s)',
              'Default settings: 12, 26, 9',
              'Three components: MACD Line, Signal Line, Histogram',
              'Measures the GAP between two EMAs — not the price itself'
            ]
          },
          {
            title: 'MACD — The Three Components',
            bullets: [
              'MACD Line: 12-EMA minus 26-EMA (positive = bullish, negative = bearish)',
              'Signal Line: 9-period EMA of MACD line (smoothed — generates crossovers)',
              'Histogram: MACD minus Signal (growing = momentum increasing, shrinking = fading)',
              'Histogram flip = crossover imminent',
              'Bullish crossover: MACD crosses above Signal (more reliable below zero)',
              'Bearish crossover: MACD crosses below Signal (more reliable above zero)'
            ]
          },
          {
            title: 'MACD — Advanced Nuances',
            bullets: [
              'MACD is LAGGING — by the time crossover happens, price already moved',
              'False signals in ranging markets = whipsaw buy-sell-buy',
              'Zero line provides context: Below-zero bullish crossover = stronger reversal',
              'MACD divergence exists too (less common than RSI divergence)',
              'Always combine MACD with S/R and market structure'
            ]
          },
          {
            title: 'What Is Volume? — The Truth Teller',
            bullets: [
              'Volume = total units traded during a period',
              'Price tells you WHAT happened. Volume tells you HOW MUCH people believed in it.',
              'High volume = conviction, Low volume = skepticism',
              'Strong move + high volume = real (sustainable)',
              'Strong move + low volume = suspicious (potential reversal)'
            ]
          },
          {
            title: 'Volume — The 6 Rules',
            bullets: [
              '1. Volume confirms trend (increases on trend-direction days)',
              '2. Volume confirms breakouts (high = real, low = fakeout)',
              '3. Volume divergence signals exhaustion (new highs + declining volume = caution)',
              '4. Volume spikes signal significant events (2-3x average = institutional)',
              '5. High volume at key levels = stronger S/R level',
              '6. Volume precedes price (increases before major moves)'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Late Afternoon — Hours 7-8: Bollinger Bands & Complete Framework',
        slides: [
          {
            title: 'What Are Bollinger Bands?',
            bullets: [
              '3-line indicator measuring volatility (John Bollinger, 1980s)',
              'Middle Band: 20-period SMA — "fair value"',
              'Upper Band: Middle + 2 standard deviations',
              'Lower Band: Middle - 2 standard deviations',
              'Bands expand when volatile, squeeze when quiet',
              'Analogy: Like a rubber band — stretched too far snaps back'
            ]
          },
          {
            title: 'Bollinger Bands — The Squeeze Strategy',
            bullets: [
              'Step 1: Identify the squeeze (bands very close together)',
              'Step 2: WAIT for the breakout (don\'t predict direction)',
              'Step 3: Confirm with VOLUME (high = real, low = suspicious)',
              'Step 4: Enter on breakout close or pullback to middle band',
              'Step 5: Set realistic expectations (bigger squeeze = bigger expected move)',
              'SL below lower band (longs), above upper band (shorts)',
              'TP at opposite band or next S/R level'
            ]
          },
          {
            title: 'Bollinger Bands — Common Mistakes',
            bullets: [
              'Mistake: Selling every upper band touch → Only sell with pattern + resistance + divergence',
              'Mistake: Buying every lower band touch → Only buy with pattern + support + divergence',
              'Mistake: Ignoring the squeeze → Squeeze is the MOST valuable signal',
              'Mistake: Using BB as standalone → Always combine with S/R, trend, volume'
            ]
          },
          {
            title: 'THE COMPLETE 7-POINT FRAMEWORK',
            bullets: [
              '1. Market Structure → Direction (which way?)',
              '2. Key S/R Levels → Location (where are the zones?)',
              '3. EMA Position → Momentum + dynamic S/R',
              '4. RSI → Momentum strength + potential reversals',
              '5. MACD → Momentum direction + timing',
              '6. Volume → Conviction level',
              '7. Bollinger Bands → Volatility context',
              'All 7 agree = STRONG bias, 5-6 = MEDIUM, <3 = NO BIAS (stay out)'
            ]
          },
          {
            title: 'Day 3 Key Takeaways',
            bullets: [
              '1. Candlesticks reveal psychology — WHERE they appear matters 5-10x more',
              '2. 10 patterns that matter: Hammer, Bullish Engulfing, Morning Star, Piercing Line,',
              '   Shooting Star, Bearish Engulfing, Evening Star, Dark Cloud Cover, Doji, Spinning Top',
              '3. RSI measures momentum — DIVERGENCE is the real power',
              '4. Regular divergence = reversal, Hidden divergence = continuation',
              '5. MACD confirms trend changes through crossovers — it\'s lagging',
              '6. Volume is the truth teller — no volume = no conviction',
              '7. Bollinger Bands measure volatility — squeezes predict big moves',
              '8. 7-point framework = complete analysis; more agreeing = higher probability',
              '9. Tomorrow: Trading styles, signals, and RISK MANAGEMENT'
            ]
          },
          {
            title: 'Day 3 Homework',
            bullets: [
              '1. Full 7-point analysis for 3 different cryptocurrencies',
              '2. Find 5 candlestick patterns on any chart, screenshot with labels',
              '3. Find 5 RSI divergences, screenshot and label',
              '4. Find 3 volume-confirmed breakouts and 2 volume-divergence signals',
              '5. Find 2 Bollinger Band squeezes — what happened after?',
              '6. Write: "The indicator I trust most is ___ because ___"'
            ]
          }
        ]
      }
    ]
  },

  // ─── DAY 4 ───
  {
    day: 4,
    title: 'Risk Management',
    subtitle: 'Position Sizing, Stop Losses & Protecting Your Capital',
    tagline: 'Survive long enough to let the winners run',
    sections: [
      {
        sectionTitle: 'Morning Block — Hours 1-3: Why Risk Management Matters',
        slides: [
          {
            title: 'Why 90% of Traders Lose Money',
            bullets: [
              'It\'s not about being right — it\'s about not going broke',
              'A trader who wins 40% of trades can be profitable with proper risk management',
              'A trader who wins 60% of trades can still lose money without it',
              'Risk management is the #1 skill that separates survivors from casualties',
              'The market will always give you another chance — if you still have capital'
            ]
          },
          {
            title: 'The 1% Rule — Your Survival Foundation',
            bullets: [
              'Never risk more than 1% of your total portfolio on a single trade',
              '$1,000 account = max $10 risk per trade',
              '$10,000 account = max $100 risk per trade',
              'This means your STOP LOSS distance determines your position size',
              '10 losing trades in a row = only 10% drawdown (recoverable)',
              'Without this rule: 5 bad trades can wipe out 50%+ of your account'
            ]
          },
          {
            title: 'Position Sizing — The Math',
            bullets: [
              'Formula: Position Size = Risk Amount / (Entry - Stop Loss)',
              'Example: $10,000 account, 1% risk = $100 max risk',
              'Entry at $50,000 BTC, SL at $49,000 = $1,000 risk per BTC',
              'Position: $100 / $1,000 = 0.1 BTC ($5,000 position)',
              'If stop hit: You lose $100 (1%) — you survive',
              'If target hit ($52,000): You gain $200 (2%) — 2:1 reward/risk'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Midday — Hour 4: Stop Losses & Take Profits',
        slides: [
          {
            title: 'Stop Loss — Your Emergency Exit',
            bullets: [
              'A stop loss is a pre-planned order to exit if the trade goes against you',
              'Types: Fixed (dollar/percentage), Technical (below S/R, below EMA), Volatility (ATR-based)',
              'NEVER trade without a stop loss — period',
              'Place stop BEFORE entering the trade — not after',
              'Rule: If you have to think about where your stop should be, you shouldn\'t be in the trade'
            ]
          },
          {
            title: 'Risk/Reward Ratio — The Math of Profitability',
            bullets: [
              'R:R = Potential Profit / Potential Loss',
              '1:1 = need 50%+ win rate to be profitable',
              '1:2 = need only 34%+ win rate (recommended minimum)',
              '1:3 = need only 25%+ win rate (ideal for beginners)',
              'Never take trades with R:R below 1:1.5',
              'The better your R:R, the more room for error you have'
            ]
          },
          {
            title: 'Take Profit Strategies',
            bullets: [
              'Fixed Target: Set at specific S/R level (most common)',
              'Trailing Stop: Move stop up as price moves in your favor',
              'Partial Profit: Take 50% at 1:1, let rest run to 1:2+',
              'Time-based: If trade hasn\'t moved in X candles, exit',
              'Rule: Always have a take profit BEFORE entering'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Afternoon — Hours 5-8: Risk Management in Practice',
        slides: [
          {
            title: 'The 5 Deadly Sins of Risk Management',
            bullets: [
              '1. No stop loss: "I\'ll just hold" — this is how accounts get liquidated',
              '2. Moving your stop: Widening stop because you "feel" it will recover',
              '3. Over-leveraging: Using 10-50x leverage — one bad trade = account wipe',
              '4. Revenge trading: Doubling down after a loss to "win it back"',
              '5. FOMO entries: Entering late, oversized positions because "it\'s going to the moon"'
            ]
          },
          {
            title: 'Building Your Risk Management Plan',
            bullets: [
              'Max risk per trade: 1% of portfolio',
              'Max daily loss: 3% of portfolio (3 losing trades = stop for the day)',
              'Max weekly loss: 6% of portfolio (hit this = take a week off)',
              'Max open positions: 3 (beginners) to 5 (experienced)',
              'Max leverage: 0x for first 3 months, max 3x after that',
              'Required R:R: Minimum 1:2 for every trade'
            ]
          },
          {
            title: 'Day 4 Key Takeaways',
            bullets: [
              '1. Risk management is the #1 skill — more important than analysis',
              '2. The 1% rule: Never risk more than 1% per trade',
              '3. Position size = Risk / (Entry - Stop Loss)',
              '4. Always use stop losses — place them BEFORE entering',
              '5. Minimum 1:2 risk/reward ratio',
              '6. The 5 deadly sins will destroy your account',
              '7. Have a written risk plan and follow it without exception',
              '8. Tomorrow: Spot Trading — Your First Real Trades'
            ]
          },
          {
            title: 'Day 4 Homework',
            bullets: [
              '1. Write your personal risk management plan (all the numbers)',
              '2. Calculate position sizes for 3 hypothetical BTC trades',
              '3. On TradingView, mark where stops and targets would be for your last 5 signals',
              '4. Journal: What is your biggest risk management weakness?',
              '5. Set your max daily loss limit and write it where you can see it'
            ]
          }
        ]
      }
    ]
  },

  // ─── DAY 5 ───
  {
    day: 5,
    title: 'Spot Trading',
    subtitle: 'Your First Real Trades on the Market',
    tagline: 'From theory to practice — small steps, big lessons',
    sections: [
      {
        sectionTitle: 'Morning Block — Hours 1-3: Spot Trading Fundamentals',
        slides: [
          {
            title: 'What Is Spot Trading?',
            bullets: [
              'Buying and selling actual crypto assets (not derivatives)',
              'You own the actual coin — no liquidation risk (unless leveraged)',
              'Simpler than futures — best starting point for beginners',
              'Market orders vs Limit orders — when to use each',
              'Slippage: Difference between expected and actual fill price'
            ]
          },
          {
            title: 'Order Types Deep Dive',
            bullets: [
              'Market Order: Instant execution at current price (use for urgency)',
              'Limit Order: Execution at your price or better (use for entries/exits)',
              'Stop-Limit: Triggers a limit order when stop price is hit',
              'OCO (One-Cancels-Other): Set TP and SL simultaneously',
              'Pro tip: Use limit orders for entries, market for emergency exits only'
            ]
          },
          {
            title: 'Building a Watchlist',
            bullets: [
              'Start with top 10-20 coins by market cap',
              'Criteria: High liquidity, active volume, clear S/R levels',
              'Tools: CoinGecko, CoinMarketCap for screening',
              'Watch 5-8 coins maximum — quality over quantity',
              'Include BTC, ETH, and 3-6 alts with different narratives'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Midday — Hour 4: Trade Execution',
        slides: [
          {
            title: 'The Pre-Trade Checklist',
            bullets: [
              '1. Market structure: What\'s the trend?',
              '2. S/R levels: Where are the key zones?',
              '3. Indicator confluence: Do 5+ of 7 points agree?',
              '4. Risk calculation: Is R:R at least 1:2?',
              '5. Position size: Does it follow the 1% rule?',
              '6. Stop loss: Where exactly? (below S/R, below EMA)',
              '7. Take profit: Where exactly? (next S/R, opposite band)',
              'If ANY item is unclear, DO NOT take the trade'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Afternoon — Hours 5-8: Live Practice & Review',
        slides: [
          {
            title: 'Practice — Your First Real Trades',
            bullets: [
              'Trade 1: BTC/USDT with 0.5% risk (half of normal) — just to feel it',
              'Trade 2: ETH/USDT following the complete 7-point framework',
              'Trade 3: An altcoin of your choice with full analysis',
              'After each trade: Journal entry with analysis, emotions, lessons',
              'Review at end of day: What worked? What didn\'t? What will you change?'
            ]
          },
          {
            title: 'Day 5 Key Takeaways',
            bullets: [
              '1. Spot trading = buying/selling actual crypto (safest starting point)',
              '2. Use limit orders for entries, market orders only for emergencies',
              '3. Never skip the pre-trade checklist — no exceptions',
              '4. Start small: 0.5% risk for your first 10 trades',
              '5. Journal EVERY trade — the data will teach you more than any course',
              '6. Tomorrow: Futures & Leverage — the dangerous tool you need to understand'
            ]
          }
        ]
      }
    ]
  },

  // ─── DAY 6 ───
  {
    day: 6,
    title: 'Futures & Leverage',
    subtitle: 'Understanding the Dangerous Tool You Must Respect',
    tagline: 'Leverage amplifies both gains AND losses',
    sections: [
      {
        sectionTitle: 'Morning Block — Hours 1-3: Futures Fundamentals',
        slides: [
          {
            title: 'What Are Crypto Futures?',
            bullets: [
              'Contracts to buy/sell crypto at a future date and price',
              'You don\'t own the underlying asset — you\'re trading a derivative',
              'Key difference from spot: You can SHORT (profit from falling prices)',
              'Perpetual futures: No expiry date — most common in crypto',
              'Funding rate: Fee paid between long/short traders every 8 hours'
            ]
          },
          {
            title: 'What Is Leverage?',
            bullets: [
              'Borrowing money to increase your position size',
              '10x leverage: $100 controls $1,000 position',
              '50x leverage: $100 controls $5,000 position',
              'Liquidation: If price moves against you, you lose EVERYTHING',
              '10x leverage: 10% adverse move = LIQUIDATED',
              'The math: 90% of high-leverage traders lose money'
            ]
          },
          {
            title: 'Why Beginners Should NOT Use High Leverage',
            bullets: [
              '1% move against you at 100x = 100% loss (liquidation)',
              '5% move against you at 20x = 100% loss (liquidation)',
              'Crypto moves 5-10% in a single day regularly',
              'Liquidation fees eat into any recovery',
              'The emotional damage leads to revenge trading',
              'Rule: 0x leverage for first 3 months. Max 3x after that.'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Afternoon — Hours 4-8: If You MUST Trade Futures',
        slides: [
          {
            title: 'Safe Futures Trading (If You Insist)',
            bullets: [
              'Max leverage: 3x for beginners, 5x for experienced',
              'Always use isolated margin (not cross margin)',
              'Set stop loss BEFORE entering — no exceptions',
              'Position size: Same 1% risk rule applies',
              'Never hold futures positions overnight if possible',
              'Understand funding rates — they can eat your profits'
            ]
          },
          {
            title: 'Day 6 Key Takeaways',
            bullets: [
              '1. Futures = derivatives, not actual crypto ownership',
              '2. Leverage amplifies BOTH gains and losses equally',
              '3. 90% of high-leverage traders lose money',
              '4. 0x leverage for 3 months, max 3x after that',
              '5. Always use isolated margin and pre-set stop losses',
              '6. The ability to short is useful — but not worth blowing up your account',
              '7. Tomorrow: DeFi & Advanced Concepts'
            ]
          }
        ]
      }
    ]
  },

  // ─── DAY 7 ───
  {
    day: 7,
    title: 'DeFi & Advanced Concepts',
    subtitle: 'Decentralized Finance, Yield Farming & Protocol Analysis',
    tagline: 'The future of finance — with risks you must understand',
    sections: [
      {
        sectionTitle: 'Morning Block — Hours 1-3: DeFi Fundamentals',
        slides: [
          {
            title: 'What Is DeFi?',
            bullets: [
              'Decentralized Finance: Financial services without intermediaries',
              'No banks, no brokers — just smart contracts on the blockchain',
              'TVL (Total Value Locked): Measure of DeFi ecosystem size',
              'Key protocols: Uniswap (DEX), Aave (lending), Lido (staking)',
              'Advantages: Permissionless, transparent, 24/7, composable',
              'Risks: Smart contract bugs, rug pulls, impermanent loss'
            ]
          },
          {
            title: 'DeFi Yield Opportunities',
            bullets: [
              'Staking: Lock tokens to secure network → earn rewards (4-20% APY)',
              'Lending: Supply assets to lending protocols → earn interest (2-15% APY)',
              'Liquidity Providing: Supply tokens to DEX pools → earn trading fees',
              'Yield Farming: Move capital between protocols chasing highest returns',
              'Impermanent Loss: The hidden risk of liquidity providing — understand it before doing it'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Afternoon — Hours 4-8: Protocol Analysis & Safety',
        slides: [
          {
            title: 'How to Evaluate a DeFi Protocol',
            bullets: [
              '1. Audits: Has it been audited? By whom? (Not a guarantee but essential)',
              '2. TVL: Higher = more trusted, but not foolproof',
              '3. Team: Doxxed vs anonymous? Track record?',
              '4. Tokenomics: Inflation rate, unlock schedule, utility',
              '5. Time: How long has it been running without issues? (Lindy effect)',
              '6. Community: Active development, responsive team, transparent communication'
            ]
          },
          {
            title: 'Day 7 Key Takeaways',
            bullets: [
              '1. DeFi removes intermediaries but adds smart contract risk',
              '2. Higher yield = higher risk (always)',
              '3. Impermanent loss is real — understand it before providing liquidity',
              '4. Always evaluate protocols before depositing funds',
              '5. Never put more than you can afford to lose into any single protocol',
              '6. Tomorrow: Trading Psychology'
            ]
          }
        ]
      }
    ]
  },

  // ─── DAY 8 ───
  {
    day: 8,
    title: 'Trading Psychology',
    subtitle: 'Mastering Your Mind — The Hidden 80% of Trading',
    tagline: 'Your biggest enemy is staring back at you in the mirror',
    sections: [
      {
        sectionTitle: 'Morning Block — Hours 1-3: Emotional Trading',
        slides: [
          {
            title: 'The 5 Emotional Traps',
            bullets: [
              '1. FOMO (Fear of Missing Out): Buying at the top because "everyone is"',
              '2. Panic Selling: Selling at the bottom because you can\'t take the pain',
              '3. Greed: Not taking profits because "it\'s going higher"',
              '4. Revenge Trading: Doubling down after a loss to "win it back"',
              '5. Confirmation Bias: Only seeing evidence that supports your position'
            ]
          },
          {
            title: 'Fear & Greed Index — The Crowd Counter',
            bullets: [
              'Measures market sentiment on a 0-100 scale',
              'Extreme Fear (0-25): Often = market bottom (contrarian buy signal)',
              'Extreme Greed (75-100): Often = market top (contrarian sell signal)',
              'The crowd is usually wrong at extremes',
              'Use as a supplementary tool, not a primary signal'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Afternoon — Hours 4-8: Building Discipline',
        slides: [
          {
            title: 'The Trading Journal — Your Most Important Tool',
            bullets: [
              'Record EVERY trade: Date, pair, entry, stop, target, outcome',
              'Record your EMOTIONS: What were you feeling before/during/after?',
              'Review weekly: Patterns will emerge in your mistakes',
              'Key metrics: Win rate, average win/loss, R:R achieved, biggest drawdown',
              'After 100 trades: You\'ll know your edge and your weaknesses'
            ]
          },
          {
            title: 'Day 8 Key Takeaways',
            bullets: [
              '1. Emotions are your biggest enemy — the market doesn\'t care about your feelings',
              '2. FOMO and panic are responsible for most beginner losses',
              '3. A trading journal is mandatory — not optional',
              '4. Follow your plan mechanically — no improvising',
              '5. Take breaks after losses — the market will still be there tomorrow',
              '6. Tomorrow: Building a Strategy'
            ]
          }
        ]
      }
    ]
  },

  // ─── DAY 9 ───
  {
    day: 9,
    title: 'Building a Strategy',
    subtitle: 'Creating Your Personal Trading System',
    tagline: 'A strategy is a plan you can repeat — not a feeling',
    sections: [
      {
        sectionTitle: 'Morning Block — Hours 1-3: Strategy Components',
        slides: [
          {
            title: 'What Makes a Trading Strategy?',
            bullets: [
              'Entry rules: EXACT conditions that must be met to enter',
              'Exit rules: EXACT conditions to take profit or cut loss',
              'Risk management: Position sizing, max daily loss, leverage limits',
              'Timeframe: Which chart(s) do you trade on?',
              'Market conditions: When do you trade and when do you sit out?',
              'If any of these are undefined, you don\'t have a strategy — you have gambling'
            ]
          },
          {
            title: 'Three Beginner-Friendly Strategies',
            bullets: [
              '1. EMA Bounce: Trend + EMA 20/50 bounce + RSI confirmation',
              '2. S/R Breakout: Clean break of key level + volume + retest',
              '3. Divergence Play: RSI divergence at S/R + candle pattern confirmation',
              'Each strategy must include: Entry, Stop, Target, Timeframe, Conditions',
              'Start with ONE strategy. Master it. Then add a second.'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Afternoon — Hours 4-8: Backtesting & Refinement',
        slides: [
          {
            title: 'Backtesting — Proving Your Edge',
            bullets: [
              'Test your strategy on 100+ historical trades before using real money',
              'TradingView replay: Manually walk through historical data',
              'Record: Win rate, average R:R, max drawdown, profit factor',
              'Minimum viable: 40%+ win rate at 1:2 R:R, or 50%+ at 1:1.5 R:R',
              'Warning: Past performance doesn\'t guarantee future results',
              'But: A strategy that fails backtesting WILL fail in live trading'
            ]
          },
          {
            title: 'Day 9 Key Takeaways',
            bullets: [
              '1. A strategy is a repeatable plan — not a gut feeling',
              '2. Every strategy needs: Entry, Exit, Risk, Timeframe, Conditions',
              '3. Start with ONE strategy and master it completely',
              '4. Backtest on 100+ trades before using real money',
              '5. Minimum viable: 40% win rate at 1:2 R:R',
              '6. Tomorrow: Final Challenge — putting it all together'
            ]
          }
        ]
      }
    ]
  },

  // ─── DAY 10 ───
  {
    day: 10,
    title: 'Final Challenge',
    subtitle: 'Putting It All Together — Your Trading Plan',
    tagline: 'Graduation day — you\'re ready to start (not finish) learning',
    sections: [
      {
        sectionTitle: 'Morning Block — Hours 1-3: The Complete Trading Plan',
        slides: [
          {
            title: 'Your Personal Trading Plan',
            bullets: [
              '1. Markets: Which coins will you trade? (Top 10 only for first 6 months)',
              '2. Timeframes: Primary (4H/Daily) + Confirmation (1H/Weekly)',
              '3. Strategy: Which ONE strategy will you start with?',
              '4. Risk Rules: 1% per trade, 3% daily max, 6% weekly max',
              '5. Schedule: When will you analyze? When will you trade?',
              '6. Journal: How will you track every trade and emotion?',
              '7. Review: Weekly review session — what worked, what didn\'t'
            ]
          },
          {
            title: 'The 10 Commandments of Crypto Trading',
            bullets: [
              '1. Never risk more than 1% per trade',
              '2. Always use a stop loss — place it BEFORE entering',
              '3. Minimum 1:2 risk/reward ratio',
              '4. Never move your stop loss further from entry',
              '5. Follow your plan mechanically — no emotional decisions',
              '6. Journal every trade without exception',
              '7. Stop trading after 3 consecutive losses (take a break)',
              '8. Never trade with money you can\'t afford to lose',
              '9. Stick to top 20 coins for your first 3 months',
              '10. The market will always give you another chance — if you survive'
            ]
          }
        ]
      },
      {
        sectionTitle: 'Afternoon — Hours 4-8: Graduation & Next Steps',
        slides: [
          {
            title: 'Your First 30 Days After the Bootcamp',
            bullets: [
              'Week 1: Paper trade only — no real money',
              'Week 2: Micro trades (0.5% risk) — feel the emotions',
              'Week 3: Small trades (1% risk) — follow the plan strictly',
              'Week 4: Review everything — adjust and improve',
              'Month 2-3: Build consistency — same strategy, same rules',
              'Month 4+: Consider adding a second strategy'
            ]
          },
          {
            title: 'Resources for Continued Learning',
            bullets: [
              'Books: "Trading in the Zone" by Mark Douglas, "Technical Analysis" by Murphy',
              'Websites: TradingView, CoinGecko, CoinMarketCap',
              'Communities: Find a trading group — accountability matters',
              'Practice: TradingView replay mode — 100+ backtests minimum',
              'Warning: Avoid "guru" courses promising guaranteed returns'
            ]
          },
          {
            title: 'Congratulations — You\'ve Completed the Bootcamp!',
            bullets: [
              'You now understand: Crypto foundations, technical analysis, risk management',
              'You have: A 7-point framework, a trading plan, risk rules',
              'You know: Your biggest enemy is your own emotions',
              'Remember: This is the START of your journey, not the end',
              'The next 12 months will teach you more than any course ever could',
              'Final rule: Stay humble, stay disciplined, and always DYOR'
            ]
          }
        ]
      }
    ]
  }
]
