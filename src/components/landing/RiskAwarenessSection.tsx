import React from 'react';
import { AlertOctagon, ArrowRight, ShieldCheck, Scale } from 'lucide-react';

interface RiskAwarenessSectionProps {
  onNavigate: (path: string) => void;
}

export const RiskAwarenessSection: React.FC<RiskAwarenessSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-[#0E1526] border-y border-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#111827] border border-amber-900/40 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-950/80 border border-amber-800 text-amber-400 shrink-0 mt-1">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    Important Financial Risk Notice
                  </span>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                    Essential Reading
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Trading involves high financial risk and potential loss of capital.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
                  Trading financial derivatives, currencies, and cryptocurrencies carries significant market risks. Crestiqtrades utilizes quantitative models and artificial intelligence tools for pattern detection and risk limit enforcement; however, these technical algorithms do NOT guarantee profits, cannot eliminate volatile market swings, and do not provide risk-free trading. Past performance metrics are not indicative of future results.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => onNavigate('/risk-disclosure')}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                Read Full Risk Disclosure
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
