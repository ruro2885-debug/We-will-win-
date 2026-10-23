import React, { useState } from 'react';
import { Globe, ArrowRight, Layers, TrendingUp, Info } from 'lucide-react';

interface MarketsSectionProps {
  onNavigate: (path: string) => void;
}

export const MarketsSection: React.FC<MarketsSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'forex' | 'crypto' | 'indices' | 'commodities'>('all');

  const marketAssets = [
    {
      category: 'forex',
      symbol: 'EUR/USD',
      name: 'Euro / US Dollar',
      typicalSpread: '0.6 pips',
      liquidity: 'Deep Global',
      schedule: '24/5 Trading Hours',
      type: 'Major Forex Pair',
    },
    {
      category: 'forex',
      symbol: 'GBP/USD',
      name: 'British Pound / US Dollar',
      typicalSpread: '0.8 pips',
      liquidity: 'High Volatility',
      schedule: '24/5 Trading Hours',
      type: 'Major Forex Pair',
    },
    {
      category: 'crypto',
      symbol: 'BTC/USD',
      name: 'Bitcoin / US Dollar',
      typicalSpread: '0.01%',
      liquidity: '24/7 Global Orderbook',
      schedule: '24/7/365 Continuous',
      type: 'Digital Asset',
    },
    {
      category: 'crypto',
      symbol: 'ETH/USD',
      name: 'Ethereum / US Dollar',
      typicalSpread: '0.02%',
      liquidity: 'High Smart Contract Velocity',
      schedule: '24/7/365 Continuous',
      type: 'Digital Asset',
    },
    {
      category: 'indices',
      symbol: 'US500 (SPX)',
      name: 'Standard & Poor’s 500 Benchmark',
      typicalSpread: '0.4 pts',
      liquidity: 'Institutional Index Basket',
      schedule: 'Mon–Fri Cash Session',
      type: 'Global Equity Index',
    },
    {
      category: 'indices',
      symbol: 'NAS100',
      name: 'Nasdaq 100 Technology Index',
      typicalSpread: '0.9 pts',
      liquidity: 'High Volatility Benchmark',
      schedule: 'Mon–Fri Cash Session',
      type: 'Global Equity Index',
    },
    {
      category: 'commodities',
      symbol: 'XAU/USD',
      name: 'Spot Gold / US Dollar',
      typicalSpread: '0.18 pts',
      liquidity: 'Macro Sovereign Store of Value',
      schedule: '23/5 Electronic Hours',
      type: 'Precious Metal',
    },
    {
      category: 'commodities',
      symbol: 'BRENT',
      name: 'Brent Crude Oil Futures',
      typicalSpread: '0.03 pts',
      liquidity: 'Global Energy Benchmark',
      schedule: 'Sun–Fri Global Session',
      type: 'Energy Commodity',
    },
  ];

  const filteredAssets =
    activeTab === 'all'
      ? marketAssets
      : marketAssets.filter((item) => item.category === activeTab);

  return (
    <section className="py-24 bg-[#0B0F19] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161F33] border border-[#1E293B] text-xs font-mono font-medium text-sky-400">
              <Globe className="w-3.5 h-3.5" />
              Multi-Asset Ecosystem
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Supported markets and asset classes.
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl text-base sm:text-lg">
              Execute cross-market algorithmic models across currencies, digital assets, sovereign indices, and energy commodities with unified margin reporting.
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => onNavigate('/markets')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
            >
              View Full Market Specs
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#1E293B] pb-4">
          {[
            { id: 'all', label: 'All Instruments' },
            { id: 'forex', label: 'Forex' },
            { id: 'crypto', label: 'Digital Assets' },
            { id: 'indices', label: 'Indices' },
            { id: 'commodities', label: 'Commodities' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-[#111827] text-slate-400 hover:text-white hover:bg-[#1E293B] border border-[#1E293B]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Market Data Table (Solid surface, no random numbers, clearly identified benchmark specifications) */}
        <div className="mt-6 bg-[#111827] border border-[#1E293B] rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#0E1626] border-b border-[#1E293B] text-slate-400 text-xs font-mono uppercase tracking-wider">
                  <th className="py-3.5 px-6">Instrument</th>
                  <th className="py-3.5 px-6">Asset Category</th>
                  <th className="py-3.5 px-6">Standard Benchmark Spread</th>
                  <th className="py-3.5 px-6">Market Schedule</th>
                  <th className="py-3.5 px-6">Liquidity Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E293B]">
                {filteredAssets.map((asset, idx) => (
                  <tr key={idx} className="hover:bg-[#161F33] transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-white font-mono text-base">{asset.symbol}</div>
                      <div className="text-xs text-slate-400">{asset.name}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-2.5 py-0.5 rounded text-xs font-medium bg-[#1E293B] text-slate-300 border border-[#334155]">
                        {asset.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-slate-200">
                      {asset.typicalSpread}
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-300">
                      {asset.schedule}
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-400">
                      {asset.liquidity}
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
                Benchmark specifications displayed. Live real-time market quotes stream once exchange connector credentials are bound.
              </span>
            </div>
            <span className="font-mono text-[11px] text-slate-400">Status: Ready for Feed Integration</span>
          </div>
        </div>

      </div>
    </section>
  );
};
