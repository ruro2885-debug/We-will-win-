import React, { useState } from 'react';
import { Globe, ArrowRight, Shield, Layers, HelpCircle, Info, Search } from 'lucide-react';

interface MarketsPageProps {
  onNavigate: (path: string) => void;
}

export const MarketsPage: React.FC<MarketsPageProps> = ({ onNavigate }) => {
  const [categoryFilter, setCategoryFilter] = useState<'ALL' | 'FOREX' | 'CRYPTO' | 'INDICES' | 'COMMODITIES'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filtered = assets.filter((a) => {
    const matchesCat = categoryFilter === 'ALL' || a.category === categoryFilter;
    const matchesSearch =
      a.pair.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-20 bg-[#0B0D10] text-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#12234A] border border-[#246BFD]/30 text-xs font-mono font-bold text-[#4A8DFF] mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Multi-Asset Execution Specs</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Supported Markets &amp; Asset Classes
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#A7B0BD] leading-relaxed">
            Detailed asset specifications, benchmark spreads, margin ceilings, and trading schedules for instruments supported on the Crestiqtrades execution network.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-xl bg-[#11151B] border border-[#1C2430]">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {(['ALL', 'FOREX', 'CRYPTO', 'INDICES', 'COMMODITIES'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                  categoryFilter === cat
                    ? 'bg-[#246BFD] text-white'
                    : 'text-[#A7B0BD] hover:text-white hover:bg-[#181E27]'
                }`}
              >
                {cat === 'ALL' ? 'All Asset Classes' : cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#677284] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search instrument..."
              className="w-full sm:w-56 pl-8 pr-3 py-1.5 text-xs bg-[#0B0D10] border border-[#1C2430] rounded-lg text-white placeholder-[#677284] focus:outline-none focus:border-[#246BFD]"
            />
          </div>
        </div>

        {/* Detailed Table */}
        <div className="bg-[#11151B] border border-[#1C2430] rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#181E27] border-b border-[#1C2430] text-[#A7B0BD] font-mono uppercase text-[11px]">
                  <th className="py-3.5 px-5 font-bold">Instrument</th>
                  <th className="py-3.5 px-5 font-bold">Class</th>
                  <th className="py-3.5 px-5 font-bold">Benchmark Spread</th>
                  <th className="py-3.5 px-5 font-bold">Margin Ceiling</th>
                  <th className="py-3.5 px-5 font-bold">Market Session (UTC)</th>
                  <th className="py-3.5 px-5 font-bold">Order Handling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C2430]">
                {filtered.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#181E27]/50 transition-colors">
                    <td className="py-3.5 px-5">
                      <div className="font-bold text-white font-mono text-sm">{item.pair}</div>
                      <div className="text-[11px] text-[#A7B0BD]">{item.name}</div>
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#181E27] text-[#4A8DFF] border border-[#2A3648] font-bold">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-white font-semibold">
                      {item.typicalSpread}
                    </td>
                    <td className="py-3.5 px-5 font-mono text-[#F5A623] font-bold">
                      {item.margin}
                    </td>
                    <td className="py-3.5 px-5 text-[#A7B0BD]">
                      {item.hours}
                    </td>
                    <td className="py-3.5 px-5 text-[#677284]">
                      {item.execution}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-[#0B0D10] border-t border-[#1C2430] flex items-center justify-between text-xs text-[#A7B0BD]">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#4A8DFF] shrink-0" />
              <span>
                Benchmark specifications reflect institutional target spreads during standard liquid hours.
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#677284]">Established 2022</span>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-xl bg-[#11151B] border border-[#1C2430] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Ready to trade with algorithmic discipline?</h3>
            <p className="mt-1 text-xs sm:text-sm text-[#A7B0BD]">Create your client profile and access our market intelligence models.</p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/register')}
            className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#246BFD] hover:bg-[#1D58D8] rounded-lg transition-colors shrink-0"
          >
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};
