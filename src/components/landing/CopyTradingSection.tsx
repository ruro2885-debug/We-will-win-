import React from 'react';
import { Copy, Users, Shield, Sliders, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

interface CopyTradingSectionProps {
  onNavigate: (path: string) => void;
}

export const CopyTradingSection: React.FC<CopyTradingSectionProps> = ({ onNavigate }) => {
  const architecturalFeatures = [
    {
      title: 'Proportional Lot Sizing',
      desc: 'Position volumes are automatically calculated in direct proportion to your personal equity balance, eliminating margin blowout risks caused by fixed-size cloning.',
    },
    {
      title: 'Individual Stop-Loss Hardstops',
      desc: 'Maintain independent capital controls. If an allocated strategy breaches your pre-set maximum loss threshold, replication halts immediately.',
    },
    {
      title: 'Sub-Millisecond Synchronization',
      desc: 'Executed orders from authorized strategy providers are mirrored to subscriber accounts via low-latency messaging queues to minimize slippage.',
    },
    {
      title: 'Zero Custodial Handover',
      desc: 'You never transfer your funds to individual traders. All assets remain secured in your private account balance at all times.',
    },
  ];

  return (
    <section className="py-24 bg-[#0E1526] border-y border-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with distinct horizontal architectural composition */}
        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161F33] border border-[#1E293B] text-xs font-mono font-medium text-teal-400">
                <Copy className="w-3.5 h-3.5" />
                Strategy Replication Protocol
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Disciplined strategy synchronization. Your rules, your capital.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Copy trading on Crestiqtrades is engineered as a precision allocation protocol rather than social media chatter. Once integrated with verified trading providers, you can mirror quantitative strategies while retaining full control over your risk thresholds.
              </p>

              {/* Four Core Architectural Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {architecturalFeatures.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#0B0F19] border border-[#1E293B]">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                      {item.title}
                    </div>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/copy-trading')}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  Explore Copy Trading Framework
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Architectural Workflow Blueprint (No fake trader leaderboards or fake returns!) */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl p-6 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
                  <span className="font-mono text-xs font-semibold text-slate-300">
                    REPLICATION FLOW // PROTOCOL
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#161F33] text-teal-300 border border-[#1E293B]">
                    Architecture Specs
                  </span>
                </div>

                {/* Step 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-950 border border-teal-800 text-teal-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-200">Strategy Provider Audit</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Signal providers undergo historical volatility verification and risk parameter validation before platform publication.
                    </p>
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="pl-4">
                  <div className="w-0.5 h-4 bg-teal-800/60 ml-3"></div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-950 border border-teal-800 text-teal-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    B
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-200">Subscriber Risk Boundary Config</div>
                    <p className="text-xs text-slate-400 mt-1">
                      You establish personal allocation limits (e.g., maximum 10% portfolio capital, 2.0% drawdown auto-disconnect).
                    </p>
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="pl-4">
                  <div className="w-0.5 h-4 bg-teal-800/60 ml-3"></div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-950 border border-teal-800 text-teal-400 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    C
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-200">Continuous Audited Execution</div>
                    <p className="text-xs text-slate-400 mt-1">
                      Orders execute concurrently with real-time slippage monitoring and immediate ledger recording.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#1E293B] text-[11px] text-slate-400 text-center">
                  Live trader performance tables activate once verified brokerage connectivity is linked.
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
