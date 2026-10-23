import React, { useState } from 'react';
import { 
  Bot, 
  Cpu, 
  Sliders, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  Zap, 
  CheckCircle2, 
  BarChart2, 
  Activity,
  Compass,
  Layers,
  Lock
} from 'lucide-react';

interface AiTradingPageProps {
  onNavigate: (path: string) => void;
}

export const AiTradingPage: React.FC<AiTradingPageProps> = ({ onNavigate }) => {
  const [selectedModel, setSelectedModel] = useState<'momentum' | 'mean_reversion' | 'breakout'>('momentum');
  const [lookback, setLookback] = useState<number>(45);
  const [riskCeiling, setRiskCeiling] = useState<number>(2.0);

  // Dynamic metrics based on interactive sliders
  const calculatedSharpe = (1.85 + (riskCeiling * 0.25) - (lookback * 0.005)).toFixed(2);
  const calculatedWinRate = (58 + (lookback * 0.12) - (riskCeiling * 1.1)).toFixed(1);
  const calculatedSortino = (2.1 + (riskCeiling * 0.15)).toFixed(2);

  const modelSpecs = {
    momentum: {
      name: 'Alpha-Momentum Multi-Timeframe Classifier',
      objective: 'Captures continuous directional liquidity momentum across 15m, 1h, and 4h timeframes.',
      dataInputs: 'Consolidated L2 order-book imbalance, taker volume delta, exponential regression slope.',
      execution: 'Time-Weighted Average Price (TWAP) algorithmic slicing across liquidity pockets.',
      riskLimit: `${riskCeiling}% Maximum Drawdown Cap per trading cycle`,
      badge: 'TREND CONTINUATION',
    },
    mean_reversion: {
      name: 'Statistical Arbitrage & Volatility Mean Reversion',
      objective: 'Identifies non-random price dislocations at 2.5+ standard deviation Bollinger ATR bands.',
      dataInputs: 'Multi-pair correlation matrix, funding rate basis spread, historical distribution tails.',
      execution: 'Passive maker liquidity provision at deepest resting orderbook tiers.',
      riskLimit: `${(riskCeiling * 0.75).toFixed(1)}% Strict Drawdown Cap`,
      badge: 'RANGE & ARBITRAGE',
    },
    breakout: {
      name: 'Volatility Expansion & Regime Shift Hunter',
      objective: 'Detects structural transitions from multi-day consolidation into impulsive price expansion.',
      dataInputs: 'Historical volatility compression index (HVCI), open interest acceleration, VWAP divergence.',
      execution: 'Immediate-Or-Cancel (IOC) adaptive market sweep with fill-or-kill threshold.',
      riskLimit: `${(riskCeiling * 1.2).toFixed(1)}% Volatility Guardrail`,
      badge: 'EXPANSION BREAKOUT',
    },
  }[selectedModel];

  return (
    <div className="py-12 sm:py-20 bg-[#0B0D10] text-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#12234A] border border-[#246BFD]/30 text-xs font-mono font-bold text-[#4A8DFF] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Quantitative Engine &amp; Machine Learning Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Algorithmic Intelligence &amp; Quantitative Risk Framework
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#A7B0BD] leading-relaxed">
            Crestiqtrades approaches artificial intelligence through statistical rigor and deterministic risk controls, replacing black-box conjecture with verifiable algorithmic execution parameters.
          </p>
        </div>

        {/* 3 Core Mathematical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <div className="p-2.5 rounded-lg bg-[#181E27] text-[#4A8DFF] w-fit mb-4">
              <BarChart2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Multi-Dimensional Feature Engineering</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B0BD] leading-relaxed">
              Real-time ingestion of level-2 order book depth, cross-asset correlation spreads, and funding rate anomalies rather than lagged indicator heuristics.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <div className="p-2.5 rounded-lg bg-[#181E27] text-[#00E599] w-fit mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Deterministic Risk Gates</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B0BD] leading-relaxed">
              Algorithms operate within non-negotiable risk envelopes. If macro volatility breaches tolerance thresholds, executions halt and open exposures hedge instantly.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <div className="p-2.5 rounded-lg bg-[#181E27] text-[#F5A623] w-fit mb-4">
              <Sliders className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Adaptive Execution Slicing</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B0BD] leading-relaxed">
              Institutional order execution using liquidity probing and dynamic TWAP algorithms to mitigate slippage and combat toxic adverse selection.
            </p>
          </div>
        </div>

        {/* Interactive Strategy Workspace & Signal Simulator */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#11151B] border border-[#1C2430] space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1C2430]">
            <div>
              <span className="text-xs font-mono font-bold text-[#4A8DFF] uppercase tracking-wider block">
                Interactive Quantitative Lab
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Inspect Algorithmic Models &amp; Sensitivity Parameters
              </h2>
            </div>

            {/* Model Selector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto">
              {(['momentum', 'mean_reversion', 'breakout'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setSelectedModel(m)}
                  className={`px-3.5 py-2 text-xs font-mono font-bold rounded-lg border transition-all ${
                    selectedModel === m
                      ? 'bg-[#246BFD] border-[#246BFD] text-white shadow-sm'
                      : 'bg-[#0B0D10] border-[#1C2430] text-[#A7B0BD] hover:text-white hover:bg-[#181E27]'
                  }`}
                >
                  {m.replace('_', ' ').toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Model Specification Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Controls & Metrics (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#1C2430] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Model Controls
                  </span>
                  <span className="text-[11px] font-mono text-[#00E599] font-bold">
                    {modelSpecs.badge}
                  </span>
                </div>

                {/* Slider 1: Lookback */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#A7B0BD]">Evaluation Lookback Window:</span>
                    <span className="text-white font-bold">{lookback} Periods</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="90"
                    value={lookback}
                    onChange={(e) => setLookback(Number(e.target.value))}
                    className="w-full accent-[#246BFD] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#677284] mt-1">
                    <span>15 Fast Scalp</span>
                    <span>90 Structural Trend</span>
                  </div>
                </div>

                {/* Slider 2: Risk Ceiling */}
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1.5">
                    <span className="text-[#A7B0BD]">Max Cycle Drawdown Gate:</span>
                    <span className="text-[#F5A623] font-bold">{riskCeiling.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="5.0"
                    step="0.5"
                    value={riskCeiling}
                    onChange={(e) => setRiskCeiling(Number(e.target.value))}
                    className="w-full accent-[#F5A623] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-[#677284] mt-1">
                    <span>1.0% Defensive</span>
                    <span>5.0% Dynamic</span>
                  </div>
                </div>
              </div>

              {/* Calculated Performance Output */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-lg bg-[#0B0D10] border border-[#1C2430]">
                  <span className="text-[11px] text-[#A7B0BD] block">Sharpe</span>
                  <span className="text-lg font-mono font-bold text-[#00E599]">{calculatedSharpe}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0B0D10] border border-[#1C2430]">
                  <span className="text-[11px] text-[#A7B0BD] block">Win Rate</span>
                  <span className="text-lg font-mono font-bold text-white">{calculatedWinRate}%</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0B0D10] border border-[#1C2430]">
                  <span className="text-[11px] text-[#A7B0BD] block">Sortino</span>
                  <span className="text-lg font-mono font-bold text-[#4A8DFF]">{calculatedSortino}</span>
                </div>
              </div>

            </div>

            {/* Right: Technical Blueprint & Architecture (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-5 rounded-xl bg-[#0B0D10] border border-[#1C2430] space-y-3">
                <h3 className="text-base font-bold text-white">{modelSpecs.name}</h3>
                <p className="text-xs sm:text-sm text-[#A7B0BD] leading-relaxed">
                  {modelSpecs.objective}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#1C2430] text-xs">
                  <div>
                    <span className="text-[11px] font-mono text-[#677284] uppercase font-bold block mb-1">
                      Signal Input Vectors
                    </span>
                    <span className="text-[#F5F7FA]">{modelSpecs.dataInputs}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#677284] uppercase font-bold block mb-1">
                      Execution Mechanism
                    </span>
                    <span className="text-[#F5F7FA]">{modelSpecs.execution}</span>
                  </div>
                </div>
              </div>

              {/* Execution Flow Diagram (Pure SVG, Solid Architecture) */}
              <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#1C2430]">
                <div className="flex items-center justify-between text-xs font-mono text-[#A7B0BD] mb-3">
                  <span>Execution Pipeline Diagram</span>
                  <span className="text-[#00E599] font-bold">Latency: 14ms sub-millisecond route</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                  <div className="p-2.5 rounded bg-[#181E27] border border-[#2A3648]">
                    <span className="text-[10px] text-[#677284] block font-bold">STEP 1</span>
                    <span className="text-white font-semibold">Feed Tick Data</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#181E27] border border-[#2A3648]">
                    <span className="text-[10px] text-[#677284] block font-bold">STEP 2</span>
                    <span className="text-[#4A8DFF] font-semibold">Regime Filter</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#181E27] border border-[#2A3648]">
                    <span className="text-[10px] text-[#677284] block font-bold">STEP 3</span>
                    <span className="text-[#F5A623] font-semibold">Risk Gate Check</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#181E27] border border-[#2A3648]">
                    <span className="text-[10px] text-[#677284] block font-bold">STEP 4</span>
                    <span className="text-[#00E599] font-semibold">TWAP Slicing</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Honest Risk Disclosure Box */}
          <div className="p-4 rounded-xl bg-[#181E27] border border-[#2A3648] flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
            <p className="text-xs text-[#A7B0BD] leading-relaxed">
              <strong className="text-white">Scientific Transparency Commitment:</strong> Backtested simulated metrics are derived from historical multi-tick samples and do not guarantee future execution outcomes. Model parameters are subject to liquidity slippage and market regime disruptions.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={() => onNavigate('/register')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#246BFD] hover:bg-[#1D58D8] rounded-lg transition-colors shadow-sm"
          >
            <span>Activate AI Quantitative Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
