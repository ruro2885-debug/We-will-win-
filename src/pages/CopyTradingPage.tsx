import React, { useState } from 'react';
import { 
  Copy, 
  ShieldCheck, 
  Sliders, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Calculator, 
  Layers, 
  AlertCircle,
  TrendingUp,
  Activity,
  Users
} from 'lucide-react';

interface CopyTradingPageProps {
  onNavigate: (path: string) => void;
}

export const CopyTradingPage: React.FC<CopyTradingPageProps> = ({ onNavigate }) => {
  const [subscriberBalance, setSubscriberBalance] = useState<number>(5000);
  const [masterBalance] = useState<number>(100000);
  const [masterLot] = useState<number>(2.0);

  // Proportional lot size = (subscriber / master) * masterLot
  const scaledSubscriberLot = ((subscriberBalance / masterBalance) * masterLot).toFixed(3);
  const subscriberRiskUSD = ((subscriberBalance * 0.015)).toFixed(2); // 1.5% fixed risk

  return (
    <div className="py-12 sm:py-20 bg-[#0B0D10] text-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#12234A] border border-[#246BFD]/30 text-xs font-mono font-bold text-[#4A8DFF] mb-4">
            <Copy className="w-3.5 h-3.5" />
            <span>Mathematical Strategy Replication Protocol</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Institutional Copy Trading &amp; Proportional Sizing
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#A7B0BD] leading-relaxed">
            Eliminate margin mismatches and catastrophic liquidation. Crestiqtrades dynamically calculates equity ratios to ensure your account mirrors audited strategies with mathematical precision and independent risk gates.
          </p>
        </div>

        {/* The Fundamental Problem & Mathematical Solution */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#11151B] border border-[#1C2430] space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#181E27] text-[#00E599]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                The Proportional Replication Protocol
              </h2>
              <p className="text-xs sm:text-sm text-[#A7B0BD] mt-0.5">
                Dynamic equity-ratio lot adjustment vs legacy fixed-lot hazards
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm leading-relaxed text-[#A7B0BD]">
            <div className="p-5 rounded-xl bg-[#0B0D10] border border-[#380E0E]">
              <span className="font-bold text-[#FF4D4D] block uppercase tracking-wider text-xs mb-2">
                Legacy Social Trading Hazard
              </span>
              <p>
                When a signal provider managing $200,000 executes a 2.0-lot position, copying with fixed or linear multipliers forces a smaller subscriber account (e.g. $5,000) into extreme margin strain. A standard 1.5% adverse tick can instantly trigger forced broker liquidation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0B0D10] border border-[#072E20]">
              <span className="font-bold text-[#00E599] block uppercase tracking-wider text-xs mb-2">
                Crestiqtrades Mathematical Solution
              </span>
              <p>
                Every synchronized execution calculates exact equity proportion: <span className="font-mono text-white">Lot = (Sub_Equity / Master_Equity) &times; Master_Lot</span>. Your capital incurs identical percentage exposure to the master trader, never risking disproportionate liquidation.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Proportional Sizing Calculator */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#11151B] border border-[#1C2430] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1C2430]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#4A8DFF] uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Live Interactive Lot Scaling Calculator</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Test Your Proportional Account Scaling
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <label className="block text-xs font-mono font-bold text-[#A7B0BD] uppercase tracking-wider mb-2">
                  Subscriber Account Capital: <span className="text-white">${subscriberBalance.toLocaleString()} USD</span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={subscriberBalance}
                  onChange={(e) => setSubscriberBalance(Number(e.target.value))}
                  className="w-full accent-[#246BFD] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-[#677284] mt-1">
                  <span>$1,000 Entry</span>
                  <span>$50,000 Allocation</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0D10] border border-[#1C2430] space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-[#A7B0BD]">Master Account Equity:</span>
                  <span className="text-white font-bold">$100,000.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A7B0BD]">Master Order Volume:</span>
                  <span className="text-white font-bold">2.00 Standard Lots</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A7B0BD]">Master Max Stop-Loss:</span>
                  <span className="text-[#F5A623] font-bold">1.5% Portfolio Risk</span>
                </div>
              </div>
            </div>

            {/* Calculated Result Card (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-6 rounded-xl bg-[#0B0D10] border border-[#246BFD]/50 shadow-xl space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-[#4A8DFF] block">
                  Proportionally Scaled Subscriber Execution
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-mono font-extrabold text-white">
                    {scaledSubscriberLot}
                  </span>
                  <span className="text-sm font-mono text-[#A7B0BD]">Lots Executed</span>
                </div>
                <p className="text-xs text-[#A7B0BD] leading-relaxed">
                  Your order is automatically sliced to {scaledSubscriberLot} lots. Even on a maximum 1.5% adverse excursion, your account risk is strictly capped at <span className="font-mono text-white font-bold">${subscriberRiskUSD} USD</span>.
                </p>
                <div className="pt-3 border-t border-[#1C2430] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#00E599] font-bold">&check; Perfect Risk Synchronization</span>
                  <span className="text-[#A7B0BD]">Zero Margin Overload</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Core Independent Safety Gates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <div className="w-9 h-9 rounded-lg bg-[#181E27] text-[#4A8DFF] flex items-center justify-center font-bold text-sm mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-white">Personal Drawdown Cut-Off</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B0BD] leading-relaxed">
              Configure your personal circuit breaker (e.g. 3.0%). If the copied provider encounters a sudden drawdown reaching your limit, replication disconnects automatically.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <div className="w-9 h-9 rounded-lg bg-[#181E27] text-[#00E599] flex items-center justify-center font-bold text-sm mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-white">Non-Custodial Account Isolation</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B0BD] leading-relaxed">
              Signal providers never hold or manage your capital. All equity resides securely in your personal segregated account protected by Firebase Auth session tokens.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <div className="w-9 h-9 rounded-lg bg-[#181E27] text-[#F5A623] flex items-center justify-center font-bold text-sm mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-white">Sub-Millisecond Execution Delta</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#A7B0BD] leading-relaxed">
              Real-time cross-connect architecture audits fill latency against the master signal, automatically pausing synchronization if execution slippage breaches threshold.
            </p>
          </div>
        </div>

        {/* Allocator Transparency Box */}
        <div className="p-5 rounded-xl bg-[#11151B] border border-[#1C2430] text-xs text-[#A7B0BD] leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-white text-sm">
            <Lock className="w-4 h-4 text-[#4A8DFF]" />
            <span>Audited Allocator Onboarding Standards</span>
          </div>
          <p>
            In accordance with our platform integrity mandate, public strategy rankings and allocator leaderboards will be unveiled exclusively following completion of 90-day audited track records. We do not display fabricated trader performance, fake testimonials, or simulated user reviews.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={() => onNavigate('/register')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#246BFD] hover:bg-[#1D58D8] rounded-lg transition-colors shadow-sm"
          >
            <span>Register for Strategy Replication</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
