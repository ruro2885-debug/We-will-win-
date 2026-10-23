import React, { useState } from 'react';
import { Bot, Cpu, Sliders, ShieldCheck, AlertTriangle, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface AiTradingPageProps {
  onNavigate: (path: string) => void;
}

export const AiTradingPage: React.FC<AiTradingPageProps> = ({ onNavigate }) => {
  const [selectedModel, setSelectedModel] = useState<'momentum' | 'mean_reversion' | 'breakout'>('momentum');

  const models = {
    momentum: {
      name: 'Alpha-Momentum Classifier',
      target: 'Trend continuation during liquidity surges',
      filter: 'Multi-timeframe exponential alignment + volume delta',
      drawdownMax: '2.0% Maximum Allowed',
      executionStyle: 'TWAP Slice to limit market impact',
    },
    mean_reversion: {
      name: 'Statistical Arbitrage & Range',
      target: 'Exhaustion at standard deviation boundaries',
      filter: 'Bollinger ATR bandwidth + funding rate skew',
      drawdownMax: '1.5% Maximum Allowed',
      executionStyle: 'Passive limit order placement at order book depth',
    },
    breakout: {
      name: 'Volatility Expansion Hunter',
      target: 'Consolidation breakdown or breakout breakouts',
      filter: 'Implied volatility compression threshold',
      drawdownMax: '2.5% Maximum Allowed',
      executionStyle: 'Immediate Or Cancel (IOC) aggressive fill',
    },
  }[selectedModel];

  return (
    <div className="py-16 md:py-24 bg-[#0B0F19] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161F33] border border-[#1E293B] text-xs font-mono font-medium text-sky-400 mb-6">
            <Bot className="w-3.5 h-3.5" />
            <span>Quantitative Engine Deep-Dive</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            AI Trading &amp; Algorithmic Framework
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Understanding the mathematics, risk parameters, and operational boundaries behind the Crestiqtrades algorithmic engine.
          </p>
        </div>

        {/* Core Principles */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
            <Cpu className="w-6 h-6 text-sky-400 mb-3" />
            <h3 className="text-lg font-bold text-white">Feature Engineering</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Real-time parsing of bid/ask imbalance, order-flow velocity, and cross-asset correlation matrices.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
            <ShieldCheck className="w-6 h-6 text-teal-400 mb-3" />
            <h3 className="text-lg font-bold text-white">Deterministic Risk Gates</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Algorithms are bound by immutable client risk limits. If volatility breaches tolerance, execution disengages instantly.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
            <Sliders className="w-6 h-6 text-indigo-400 mb-3" />
            <h3 className="text-lg font-bold text-white">Execution Optimization</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              Orders are sliced using VWAP and algorithmic liquidity probing to eliminate front-running and adverse selection.
            </p>
          </div>
        </div>

        {/* Model Inspector */}
        <div className="mt-14 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#1E293B]">
            <div>
              <h2 className="text-2xl font-bold text-white">Inspect Algorithmic Model Profiles</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Select a model archetype to inspect simulated execution rules.</p>
            </div>
            
            <div className="flex items-center gap-2">
              {(['momentum', 'mean_reversion', 'breakout'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setSelectedModel(m)}
                  className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg border transition-colors ${
                    selectedModel === m
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-[#0E1626] border-[#1E293B] text-slate-400 hover:text-white'
                  }`}
                >
                  {m.replace('_', ' ').toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Model Card Content */}
          <div className="mt-6 space-y-4">
            <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#1E293B]">
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider">Model Archetype</div>
              <div className="text-xl font-bold text-white mt-1">{models.name}</div>
              <p className="text-sm text-slate-300 mt-2">{models.target}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#1E293B]">
                <span className="text-slate-400 block text-[11px] mb-1">Signal Filter Formula</span>
                <span className="text-slate-200 font-semibold">{models.filter}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#1E293B]">
                <span className="text-slate-400 block text-[11px] mb-1">Risk Ceiling Parameter</span>
                <span className="text-amber-400 font-bold">{models.drawdownMax}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#1E293B]">
                <span className="text-slate-400 block text-[11px] mb-1">Slicing &amp; Routing</span>
                <span className="text-slate-200 font-semibold">{models.executionStyle}</span>
              </div>
            </div>
          </div>

          {/* Risk Reminder */}
          <div className="mt-8 p-4 rounded-xl bg-[#0E1526] border border-amber-900/40 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-amber-400 font-semibold">Honesty Commitment:</strong> Model archetypes are subject to market conditions and slippage. No computational algorithm can predict macro black-swan events or guarantee profit margins.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onNavigate('/register')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm"
          >
            Get Started with Crestiqtrades
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
