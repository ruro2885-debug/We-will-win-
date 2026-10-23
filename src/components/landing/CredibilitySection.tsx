import React from 'react';
import { Cpu, ShieldCheck, Scale, FileText, CheckCircle2 } from 'lucide-react';

export const CredibilitySection: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Quantitative Intelligence Architecture',
      description:
        'Advanced algorithmic pipelines process real-time order flow and historical volatility matrices, transforming raw data into disciplined execution signals.',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Capital Protection Guardrails',
      description:
        'Configurable hard-stop parameters, automated margin threshold buffers, and maximum drawdown limits enforce risk discipline prior to order placement.',
    },
    {
      icon: Scale,
      title: 'Synchronized Strategy Replication',
      description:
        'Direct mathematical replication of vetted strategies across multiple asset classes with proportional position sizing tailored to your portfolio scope.',
    },
    {
      icon: FileText,
      title: 'Verifiable Ledger & Full Transparency',
      description:
        'Complete chronological audit trail for every signal calculation, execution trigger, and administrative lifecycle adjustment without black-box opacity.',
    },
  ];

  return (
    <section className="py-20 bg-[#0E1526] border-y border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Company Foundation &amp; Architecture
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered from first principles in 2022 for algorithmic consistency.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Crestiqtrades was founded in 2022 to replace subjective emotional bias with structured quantitative workflows. We do not promise effortless windfalls or guaranteed returns; we build reliable technical infrastructure that empowers disciplined market participation.
          </p>
        </div>

        {/* Pillars Grid - Solid surfaces, crisp borders, no glassmorphism */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-blue-950/80 border border-blue-900 text-sky-400 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Platform Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
