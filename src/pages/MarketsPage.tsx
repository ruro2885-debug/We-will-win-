import React, { useState } from 'react';
import { Globe, ArrowRight, Shield, Layers, HelpCircle, Info } from 'lucide-react';

interface MarketsPageProps {
  onNavigate: (path: string) => void;
}

export const MarketsPage: React.FC<MarketsPageProps> = ({ onNavigate }) => {
  const [categoryFilter, setCategoryFilter] = useState<'ALL' | 'FOREX' | 'CRYPTO' | 'INDICES' | 'COMMODITIES'>('ALL');

  const assets = [
    {
      category: 'FOREX',
      pair: 'EUR / USD',
      name: 'Euro / US Dollar',
      typicalSpread: '0.6 pips',
      margin: '1:30 Max',
      hours: 'Sun 21:00 – Fri 21:00 UTC',
      execution: 'Market Order / Limit Bracket',
    },
    {
      category: 'FOREX',
      pair: 'GBP / USD',
      name: 'British Pound / US Dollar',
      typicalSpread: '0.8 pips',
      margin: '1:30 Max',
      hours: 'Sun 21:00 – Fri 21:00 UTC',
      execution: 'Market Order / Limit Bracket',
    },
    {
      category: 'FOREX',
      pair: 'USD / JPY',
      name: 'US Dollar / Japanese Yen',
      typicalSpread: '0.7 pips',
      margin: '1:30 Max',
      hours: 'Sun 21:00 – Fri 21:00 UTC',
      execution: 'Market Order / Limit Bracket',
    },
    {
      category: 'CRYPTO',
      pair: 'BTC / USD',
      name: 'Bitcoin / US Dollar',
      typicalSpread: '0.01%',
      margin: '1:5 Max (Risk-Capped)',
      hours: '24/7/365 Non-stop',
      execution: 'Continuous Orderbook',
    },
    {
      category: 'CRYPTO',
      pair: 'ETH / USD',
      name: 'Ethereum / US Dollar',
      typicalSpread: '0.02%',
      margin: '1:5 Max (Risk-Capped)',
      hours: '24/7/365 Non-stop',
      execution: 'Continuous Orderbook',
    },
    {
      category: 'CRYPTO',
      pair: 'SOL / USD',
      name: 'Solana / US Dollar',
      typicalSpread: '0.04%',
      margin: '1:5 Max (Risk-Capped)',
      hours: '24/7/365 Non-stop',
      execution: 'Continuous Orderbook',
    },
    {
      category: 'INDICES',
      pair: 'US500 (SPX)',
      name: 'Standard & Poor’s 500 Benchmark',
      typicalSpread: '0.4 pts',
      margin: '1:20 Max',
      hours: 'Mon 00:00 – Fri 20:15 UTC',
      execution: 'Electronic Session Bracket',
    },
    {
      category: 'INDICES',
      pair: 'NAS100',
      name: 'Nasdaq 100 Technology Index',
      typicalSpread: '0.9 pts',
      margin: '1:20 Max',
      hours: 'Mon 00:00 – Fri 20:15 UTC',
      execution: 'Electronic Session Bracket',
    },
    {
      category: 'INDICES',
      pair: 'GER40 (DAX)',
      name: 'Frankfurt German 40 Index',
      typicalSpread: '1.1 pts',
      margin: '1:20 Max',
      hours: 'Mon–Fri European Cash',
      execution: 'Electronic Session Bracket',
    },
    {
      category: 'COMMODITIES',
      pair: 'XAU / USD',
      name: 'Spot Gold / US Dollar',
      typicalSpread: '0.18 pts',
      margin: '1:20 Max',
      hours: 'Sun 22:00 – Fri 20:45 UTC',
      execution: 'Bullion Spot Execution',
    },
    {
      category: 'COMMODITIES',
      pair: 'BRENT',
      name: 'Brent Crude Oil Futures',
      typicalSpread: '0.03 pts',
      margin: '1:10 Max',
      hours: 'Sun 22:00 – Fri 20:45 UTC',
      execution: 'Energy Futures Contract',
    },
  ];

  const filtered = categoryFilter === 'ALL'
    ? assets
    : assets.filter(a => a.category === categoryFilter);

  return (
    <div className="py-16 md:py-24 bg-[#0B0F19] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161F33] border border-[#1E293B] text-xs font-mono font-medium text-sky-400 mb-6">
            <Globe className="w-3.5 h-3.5" />
            <span>Market Specifications</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Supported Markets &amp; Asset Classes
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Detailed asset specifications, benchmark spreads, margin ceilings, and trading schedules for instruments supported on the Crestiqtrades execution network.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#1E293B] pb-4">
          {(['ALL', 'FOREX', 'CRYPTO', 'INDICES', 'COMMODITIES'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                categoryFilter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#111827] text-slate-400 hover:text-white hover:bg-[#1E293B] border border-[#1E293B]'
              }`}
            >
              {cat === 'ALL' ? 'All Asset Classes' : cat}
            </button>
          ))}
        </div>

        {/* Detailed Table */}
        <div className="mt-8 bg-[#111827] border border-[#1E293B] rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#0E1626] border-b border-[#1E293B] text-slate-400 text-xs font-mono uppercase tracking-wider">
                  <th className="py-4 px-6">Instrument</th>
                  <th className="py-4 px-6">Class</th>
                  <th className="py-4 px-6">Benchmark Spread</th>
                  <th className="py-4 px-6">Margin Ceiling</th>
                  <th className="py-4 px-6">Market Session (UTC)</th>
                  <th className="py-4 px-6">Order Handling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]">
                {filtered.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#161F33] transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-white font-mono text-base">{item.pair}</div>
                      <div className="text-xs text-slate-400">{item.name}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-0.5 rounded text-xs font-mono bg-[#1E293B] text-slate-300 border border-[#334155]">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-slate-200">
                      {item.typicalSpread}
                    </td>
                    <td className="py-4 px-6 font-mono text-amber-400 text-xs">
                      {item.margin}
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-300">
                      {item.hours}
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-400">
                      {item.execution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#0A0E1A] border-t border-[#1E293B] flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                Benchmark specifications reflect institutional target spreads during standard liquid hours.
              </span>
            </div>
            <span className="font-mono text-[11px] text-slate-400">Established 2022</span>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-8 rounded-xl bg-[#0E1526] border border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Ready to trade with algorithmic discipline?</h3>
            <p className="mt-1 text-sm text-slate-400">Create your client profile and access our market intelligence models.</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/register')}
            className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm shrink-0"
          >
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};
