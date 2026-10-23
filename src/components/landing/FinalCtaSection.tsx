import React from 'react';
import { ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface FinalCtaSectionProps {
  onNavigate: (path: string) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-[#0E1526] border-t border-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Solid Architectural Card - No glassmorphism */}
        <div className="bg-[#111827] border border-[#1E293B] rounded-2xl p-8 sm:p-14 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161F33] border border-[#1E293B] text-xs font-mono font-medium text-sky-400 mb-6">
            <Cpu className="w-3.5 h-3.5" />
            Crestiqtrades Foundation Phase
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to experience quantitative discipline?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join the new standard of algorithmic trading. Explore our multi-asset analytical terminal, inspect risk limits, and prepare for synchronized execution.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/register')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Get Started with Crestiqtrades
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/about')}
              className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-slate-200 bg-[#161F33] hover:bg-[#1E293B] hover:text-white rounded-lg border border-[#334155] transition-colors"
            >
              Read About Our Company
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1E293B] flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Full Ledger Auditing</span>
            </div>
            <span>•</span>
            <div>Zero Unregulated Dark Pools</div>
            <span>•</span>
            <div>Established 2022</div>
          </div>

        </div>

      </div>
    </section>
  );
};
