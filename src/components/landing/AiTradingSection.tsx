import React, { useState } from 'react';
import { Bot, SlidersHorizontal, ArrowRight, Gauge, Cpu, Check, AlertTriangle } from 'lucide-react';

interface AiTradingSectionProps {
  onNavigate: (path: string) => void;
}

export const AiTradingSection: React.FC<AiTradingSectionProps> = ({ onNavigate }) => {
  const [riskTolerance, setRiskTolerance] = useState<'Conservative' | 'Balanced' | 'Dynamic'>('Balanced');
  const [modelHorizon, setModelHorizon] = useState<'Intraday' | 'Multi-Day' | 'Swing'>('Multi-Day');

  const configs = {
    Conservative: {
      drawdownMax: '1.2%',
      volatilityFilter: 'Strict (Filters top 30% volatile events)',
      orderSplitting: 'TWAP / VWAP Slicing',
      leverageCeiling: '1:2 Max',
    },
    Balanced: {
      drawdownMax: '2.5%',
      volatilityFilter: 'Dynamic ATR Boundary',
      orderSplitting: 'Adaptive Liquidity Probing',
      leverageCeiling: '1:5 Max',
    },
    Dynamic: {
      drawdownMax: '4.0%',
      volatilityFilter: 'Trend Continuation Volatility',
      orderSplitting: 'Immediate Or Cancel Execution',
      leverageCeiling: '1:10 Max',
    },
  }[riskTolerance];

  return (
    <section className="py-24 bg-[#0B0F19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#161F33] border border-[#1E293B] text-xs font-mono font-medium text-sky-400">
              <Bot className="w-3.5 h-3.5" />
              Machine Learning &amp; Algorithmic Infrastructure
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Algorithmic modeling without the guesswork.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              In Crestiqtrades, AI trading refers to statistical pattern detection, volatility filtering, and rule-based algorithmic execution. The models analyze liquidity pools, spread dynamics, and correlation matrices to assist traders in maintaining structural discipline.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <button
              type="button"
              onClick={() => onNavigate('/ai-trading')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1E293B] hover:bg-[#334155] rounded-lg border border-[#334155] transition-colors"
            >
              Learn More About AI Models
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Deep Dive Grid: Explanation + Illustrative Configuration Matrix */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Explanatory Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-sky-400" />
                How the AI Engine Operates
              </h3>
              
              <ul className="mt-6 space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-950 text-sky-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Continuous Multi-Asset Ingestion</strong>
                    Tick-level price action, order book depth, and liquidity variance across connected instruments are aggregated in real time.
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-950 text-sky-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Statistical Regime Classification</strong>
                    Models evaluate whether the current market condition is trending, range-bound, or experiencing abnormal volatility expansion.
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-950 text-sky-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Pre-Trade Risk Verification</strong>
                    Every calculated trade proposal must strictly comply with user-defined drawdown ceilings and exposure limits before submission.
                  </div>
                </li>
              </ul>

              {/* Explicit Honesty Box */}
              <div className="mt-8 p-4 rounded-lg bg-[#0E1526] border border-amber-900/50 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-amber-400 font-semibold">Risk Integrity Statement:</strong> Machine learning algorithms assist in mitigating emotional errors and automating strategy execution. They do not predict the future, guarantee returns, or eliminate market losses.
                </p>
              </div>
            </div>
          </div>

          {/* Right Interactive Strategy Visualizer (Pure solid panel, zero glassmorphism) */}
          <div className="lg:col-span-6">
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl overflow-hidden shadow-xl">
              
              {/* Header */}
              <div className="px-6 py-4 bg-[#0E1626] border-b border-[#1E293B] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-sky-400" />
                  <span className="text-sm font-bold text-white tracking-wide">
                    Strategy Parameter Simulator
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-[#161F33] px-2 py-0.5 rounded border border-[#1E293B]">
                  Model Control View
                </span>
              </div>

              {/* Controls */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Risk Tolerance Selector */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                    Risk Profile Selection
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Conservative', 'Balanced', 'Dynamic'] as const).map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setRiskTolerance(level)}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                          riskTolerance === level
                            ? 'bg-blue-600 border-blue-500 text-white shadow-sm'
                            : 'bg-[#0E1626] border-[#1E293B] text-slate-400 hover:text-white hover:bg-[#161F33]'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Model Execution Horizon */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                    Execution Time Horizon
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Intraday', 'Multi-Day', 'Swing'] as const).map((horizon) => (
                      <button
                        key={horizon}
                        type="button"
                        onClick={() => setModelHorizon(horizon)}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                          modelHorizon === horizon
                            ? 'bg-[#1E293B] border-sky-500 text-sky-300'
                            : 'bg-[#0E1626] border-[#1E293B] text-slate-400 hover:text-white'
                        }`}
                      >
                        {horizon}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Output Card */}
                <div className="p-4 rounded-lg bg-[#0A0E1A] border border-[#1E293B] space-y-3">
                  <div className="text-xs font-mono text-sky-400 flex items-center justify-between">
                    <span>Active Model Parameters</span>
                    <span className="text-slate-400 font-normal">Illustrative Simulation</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                    <div>
                      <span className="text-slate-400 block text-[11px]">Drawdown Guardrail</span>
                      <span className="font-mono font-bold text-amber-400 text-sm">{configs.drawdownMax}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Leverage Maximum</span>
                      <span className="font-mono font-bold text-slate-200 text-sm">{configs.leverageCeiling}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 block text-[11px]">Volatility Protection</span>
                      <span className="font-semibold text-slate-200">{configs.volatilityFilter}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 block text-[11px]">Order Splitting Mechanism</span>
                      <span className="font-semibold text-slate-200">{configs.orderSplitting}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-normal">
                  Parameters reflect client-configured risk gates. When the core trading engine is connected in production, orders execute directly through audited brokerage APIs.
                </p>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
