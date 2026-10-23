import React from 'react';
import { ShieldCheck, Compass, Target, Scale, Award, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 md:py-24 bg-[#0B0F19] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Top Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161F33] border border-[#1E293B] text-xs font-mono font-medium text-sky-400 mb-6">
          <span>Corporate Overview</span>
          <span>•</span>
          <span>Established 2022</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          About Crestiqtrades
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
          Founded in 2022, Crestiqtrades was established with a singular engineering commitment: to replace speculative emotional bias in trading with disciplined mathematical intelligence, verifiable execution rules, and rigorous risk containment.
        </p>

        {/* Content Section 1: Product Philosophy */}
        <div className="mt-14 space-y-12">
          
          <div className="p-8 rounded-2xl bg-[#111827] border border-[#1E293B]">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Target className="w-6 h-6 text-sky-400" />
              Our Core Product Philosophy
            </h2>
            <div className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Modern financial markets operate at extreme electronic velocities. Retail and professional market participants alike are frequently hindered by erratic emotional decision-making, unverified tips, and black-box marketing claims.
              </p>
              <p>
                At Crestiqtrades, our development philosophy revolves around transparency, data verification, and hard computational guardrails. We treat algorithmic models as risk-filtering lenses that evaluate probability corridors rather than mystical crystal balls.
              </p>
            </div>
          </div>

          {/* Section 2: Four Architectural Pillars */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Platform Engineering Principles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
                <div className="text-sky-400 font-mono text-xs font-semibold uppercase mb-2">Pillar 01</div>
                <h3 className="text-lg font-bold text-white">Non-Predictive Risk Architecture</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  We acknowledge market stochasticity. Rather than chasing impossible 100% win rate claims, our algorithms prioritize capital conservation, volatility filtering, and predefined drawdown ceilings.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
                <div className="text-teal-400 font-mono text-xs font-semibold uppercase mb-2">Pillar 02</div>
                <h3 className="text-lg font-bold text-white">Proportional Capital Replication</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Our copy trading protocol enforces lot-sizing math tailored directly to your balance, preventing the catastrophic leverage shocks common in naive copy services.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
                <div className="text-indigo-400 font-mono text-xs font-semibold uppercase mb-2">Pillar 03</div>
                <h3 className="text-lg font-bold text-white">Multi-Asset Execution Continuity</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Harmonized execution connectivity across global foreign exchange, sovereign equity indices, digital assets, and commodities within a single risk-governed terminal.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-[#111827] border border-[#1E293B]">
                <div className="text-emerald-400 font-mono text-xs font-semibold uppercase mb-2">Pillar 04</div>
                <h3 className="text-lg font-bold text-white">Cryptographic Ledger Integrity</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Every account state change, order trigger, and financial operation creates an immutable audit trail, ensuring complete institutional accountability.
                </p>
              </div>

            </div>
          </div>

          {/* Section 3: Company Details & Configuration Status */}
          <div className="p-8 rounded-2xl bg-[#0E1526] border border-[#1E293B] space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-sky-400" />
              Verified Company Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300 pt-2">
              <div>
                <span className="text-xs text-slate-400 block font-mono">Official Brand &amp; Product Name</span>
                <span className="font-bold text-white">Crestiqtrades</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">Establishment Year</span>
                <span className="font-bold text-white">2022</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">Platform Stage</span>
                <span className="font-medium text-slate-300">Phase 1 Foundation &amp; Marketing Launch</span>
              </div>
              <div>
                <span className="text-xs text-slate-400 block font-mono">Corporate Contact Details</span>
                <span className="text-slate-400">Available via the Official Support Desk</span>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/markets')}
              className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
            >
              Explore Supported Markets
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/support')}
              className="px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-[#111827] hover:bg-[#1E293B] rounded-lg border border-[#334155] transition-colors"
            >
              Contact Support Desk
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
