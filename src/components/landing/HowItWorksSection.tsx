import React from 'react';
import { UserPlus, Compass, Terminal, LineChart, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onNavigate: (path: string) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onNavigate }) => {
  const steps = [
    {
      number: '01',
      icon: UserPlus,
      title: 'Create Your Client Profile',
      description:
        'Complete our secure registration with standard credential verification and baseline security setup.',
      status: 'Available on platform launch',
    },
    {
      number: '02',
      icon: Compass,
      title: 'Explore Markets & Analytics',
      description:
        'Survey multi-asset instruments, historical volatility bands, and benchmark spreads in our interactive terminal.',
      status: 'Interactive Exploration Ready',
    },
    {
      number: '03',
      icon: Terminal,
      title: 'Select AI & Strategy Models',
      description:
        'Review model methodologies, define personal drawdown limits, and inspect strategy replication parameters.',
      status: 'Configurable Parameters',
    },
    {
      number: '04',
      icon: LineChart,
      title: 'Monitor Activity & Ledgers',
      description:
        'Track positions, manage margin exposure, and audit transparent execution records with real-time portfolio telemetry.',
      status: 'Auditable Reporting',
    },
  ];

  return (
    <section className="py-24 bg-[#0B0F19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-400">
            Client Journey
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            How Crestiqtrades works.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A structured, step-by-step path designed for complete clarity and strict risk governance.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#111827] border border-[#1E293B] rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-extrabold text-slate-400">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-900 text-sky-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E293B]">
                  <span className="text-[11px] font-mono text-sky-400">
                    {step.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
