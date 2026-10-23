import React from 'react';
import { Copy, Shield, Sliders, ArrowRight, CheckCircle2, Lock, HelpCircle, Layers } from 'lucide-react';

interface CopyTradingPageProps {
  onNavigate: (path: string) => void;
}

export const CopyTradingPage: React.FC<CopyTradingPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 md:py-24 bg-[#0B0F19] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161F33] border border-[#1E293B] text-xs font-mono font-medium text-teal-400 mb-6">
            <Copy className="w-3.5 h-3.5" />
            <span>Strategy Mirroring Framework</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Copy Trading Infrastructure &amp; Safeguards
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Replicate institutional quantitative strategies with mathematical lot proportionality and independent drawdown limits.
          </p>
        </div>

        {/* Technical Architecture Overview */}
        <div className="mt-12 space-y-8">
          
          <div className="p-8 rounded-2xl bg-[#111827] border border-[#1E293B]">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Shield className="w-6 h-6 text-teal-400" />
              The Crestiqtrades Proportional Replication Protocol
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Traditional social trading platforms suffer from severe margin mismatch: when a signal provider with $200,000 equity opens 2.0 lots, a subscriber with $5,000 copying with a fixed ratio faces immediate catastrophic liquidation.
            </p>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Crestiqtrades solves this with our dynamic proportionality formula: orders are scaled as a fraction of subscriber free margin relative to the provider’s adjusted capital base, enforcing identical percentage risk across both portfolios.
            </p>
          </div>

          {/* Three Key Safety Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
              <div className="w-10 h-10 rounded-lg bg-teal-950 border border-teal-900 text-teal-400 flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-white">Personal Stop Thresholds</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                You establish your own maximum portfolio drawdown gate. If the copied provider encounters a sudden drawdown reaching your pre-configured tolerance (e.g. 3%), replication uncouples automatically.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
              <div className="w-10 h-10 rounded-lg bg-teal-950 border border-teal-900 text-teal-400 flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-white">Non-Custodial Integrity</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Strategy providers never receive access or custody of your funds. All capital stays strictly inside your personal brokerage sub-account.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
              <div className="w-10 h-10 rounded-lg bg-teal-950 border border-teal-900 text-teal-400 flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-white">Real-Time Slippage Audit</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Every synchronized execution calculates exact entry delta compared to master order price, flagging any latency slippage exceeding preset benchmark tolerance.
              </p>
            </div>

          </div>

          {/* Transparent Notice */}
          <div className="p-6 rounded-xl bg-[#0E1526] border border-[#1E293B] text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-slate-200 block mb-1">Provider Onboarding Transparency</span>
            In accordance with our platform integrity standards, public trader leaderboards and live signal feeds will be displayed only after participating providers complete audited verification periods. We do not display fabricated ranking histories or simulated leaderboards.
          </div>

          {/* CTA */}
          <div className="pt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/register')}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg shadow-sm"
            >
              Register for Strategy Replication
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/markets')}
              className="px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-[#111827] hover:bg-[#1E293B] rounded-lg border border-[#334155]"
            >
              View Asset Classes
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
