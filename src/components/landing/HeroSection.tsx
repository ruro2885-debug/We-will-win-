import React, { useState } from 'react';
import { ArrowRight, Activity, ShieldCheck, Zap, Sliders, ChevronRight, BarChart3 } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [selectedAsset, setSelectedAsset] = useState<'EURUSD' | 'BTCUSD' | 'SPX500'>('BTCUSD');

  const assetDetails = {
    BTCUSD: {
      pair: 'BTC / USD',
      rate: '68,420.50',
      change: '+2.41%',
      volatility: 'Moderate (1.8%)',
      signal: 'Momentum Accumulation',
      confidence: '84.6%',
      guardrail: 'Max Drawdown 2.5%',
    },
    EURUSD: {
      pair: 'EUR / USD',
      rate: '1.0842',
      change: '+0.18%',
      volatility: 'Low (0.4%)',
      signal: 'Range Mean Reversion',
      confidence: '79.2%',
      guardrail: 'Max Drawdown 1.0%',
    },
    SPX500: {
      pair: 'S&P 500 Index',
      rate: '5,864.20',
      change: '+0.65%',
      volatility: 'Low-Moderate (0.9%)',
      signal: 'Macro Trend Following',
      confidence: '82.1%',
      guardrail: 'Max Drawdown 1.5%',
    },
  }[selectedAsset];

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111827] border border-[#1E293B] text-xs font-semibold text-sky-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Algorithmic Market Intelligence Platform
          </div>
          <span className="text-xs text-slate-400 font-medium">
            Architected &amp; Established 2022
          </span>
        </div>

        {/* Main Headline & Value Proposition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Algorithmic precision for disciplined market execution.
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Crestiqtrades bridges institutional quantitative analysis and modern execution. Our platform combines machine-learning pattern detection, strict risk parameters, and transparent strategy replication across global financial markets.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={() => onNavigate('/register')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0B0F19]"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/ai-trading')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-200 bg-[#111827] hover:bg-[#1E293B] hover:text-white rounded-lg border border-[#334155] transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                Discover AI Trading
              </button>
            </div>

            {/* Honest Architectural Guarantees (No fake stats!) */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#1E293B] max-w-xl">
              <div>
                <div className="text-xs text-slate-400 font-medium">Model Evaluation</div>
                <div className="mt-1 text-sm font-bold text-slate-200">Non-Predictive Risk</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Statistical guardrails</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Asset Reach</div>
                <div className="mt-1 text-sm font-bold text-slate-200">Multi-Asset</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Forex, Crypto, Indices</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">System Ledger</div>
                <div className="mt-1 text-sm font-bold text-slate-200">Audit Verifiable</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Immutable records</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Point (Institutional Analytical Terminal Preview - NO GLASSMORPHISM!) */}
          <div className="lg:col-span-5">
            <div className="bg-[#111827] border border-[#1E293B] rounded-xl shadow-2xl overflow-hidden">
              
              {/* Terminal Window Header Bar */}
              <div className="bg-[#0D1322] px-4 py-3 border-b border-[#1E293B] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  <span className="ml-2 font-mono text-xs font-semibold text-slate-300">
                    CRESTIQ-ANALYTICS // TERMINAL
                  </span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-900">
                  Illustrative Simulation
                </div>
              </div>

              {/* Asset Selector Tabs */}
              <div className="px-4 pt-3 pb-2 bg-[#0E1626] border-b border-[#1E293B] flex items-center gap-2">
                {(['BTCUSD', 'EURUSD', 'SPX500'] as const).map((sym) => (
                  <button
                    key={sym}
                    type="button"
                    onClick={() => setSelectedAsset(sym)}
                    className={`px-3 py-1 text-xs font-mono font-medium rounded transition-colors ${
                      selectedAsset === sym
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-[#161F33]'
                    }`}
                  >
                    {sym}
                  </button>
                ))}
              </div>

              {/* Price & Signal Overview */}
              <div className="p-5 space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">{assetDetails.pair}</div>
                    <div className="text-2xl font-mono font-bold text-white mt-0.5">
                      {assetDetails.rate}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-900">
                      {assetDetails.change}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">24h Benchmark</div>
                  </div>
                </div>

                {/* SVG Procedural Candlestick / Volatility Ribbon (Pure SVG, solid vectors) */}
                <div className="bg-[#0A0E1A] p-3 rounded-lg border border-[#1E293B]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                    <span>Algorithm Signal Ribbon</span>
                    <span className="text-sky-400">Confidence: {assetDetails.confidence}</span>
                  </div>
                  <svg viewBox="0 0 320 80" className="w-full h-20 overflow-visible" fill="none">
                    {/* Grid lines */}
                    <line x1="0" y1="20" x2="320" y2="20" stroke="#1E293B" strokeDasharray="3 3" />
                    <line x1="0" y1="40" x2="320" y2="40" stroke="#1E293B" strokeDasharray="3 3" />
                    <line x1="0" y1="60" x2="320" y2="60" stroke="#1E293B" strokeDasharray="3 3" />
                    
                    {/* Confidence corridor */}
                    <polygon
                      points="0,55 30,50 70,45 110,48 150,38 190,30 230,34 270,22 320,18 320,38 270,42 230,50 190,48 150,56 110,64 70,60 30,68 0,72"
                      fill="#0284C7"
                      fillOpacity="0.12"
                    />

                    {/* Trend Line */}
                    <polyline
                      points="0,62 30,58 70,52 110,56 150,46 190,38 230,42 270,30 320,24"
                      stroke="#0284C7"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Signal marker points */}
                    <circle cx="150" cy="46" r="3.5" fill="#38BDF8" />
                    <circle cx="270" cy="30" r="3.5" fill="#10B981" />
                    <circle cx="320" cy="24" r="4" fill="#10B981" stroke="#FFFFFF" strokeWidth="1.5" />
                  </svg>
                  <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                    <span>T-4h</span>
                    <span>T-2h</span>
                    <span>Current</span>
                  </div>
                </div>

                {/* Algorithmic Parameter Matrix */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded bg-[#0E1626] border border-[#1E293B]">
                    <div className="text-[11px] text-slate-400">Current Strategy Model</div>
                    <div className="font-semibold text-slate-200 mt-0.5">{assetDetails.signal}</div>
                  </div>
                  <div className="p-2.5 rounded bg-[#0E1626] border border-[#1E293B]">
                    <div className="text-[11px] text-slate-400">Active Risk Guardrail</div>
                    <div className="font-semibold text-amber-400 mt-0.5">{assetDetails.guardrail}</div>
                  </div>
                </div>

                {/* Notice tag */}
                <p className="text-[11px] text-slate-400 text-center leading-normal">
                  Interactive model representation. Verified exchange data feeds integrate during live connection stage.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
