import React, { useState } from 'react';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Copy, 
  Check, 
  AlertCircle, 
  ShieldCheck, 
  Clock, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface WalletPageProps {
  onNavigate: (path: string) => void;
}

type TabType = 'deposit' | 'withdraw' | 'history';

export const WalletPage: React.FC<WalletPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabType>('deposit');
  const [selectedCurrency, setSelectedCurrency] = useState<'USDT' | 'USDC' | 'BTC' | 'USD'>('USDT');
  const [copied, setCopied] = useState(false);
  const [withdrawAddress, setWithdrawAddress] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawStatus, setWithdrawStatus] = useState<string | null>(null);

  const depositAddresses: Record<string, { address: string; network: string; min: string; confs: string }> = {
    USDT: {
      address: '0x71C...49b2E (TRC20 / ERC20 Auto-routed)',
      network: 'Ethereum (ERC-20) / Tron (TRC-20)',
      min: '50 USDT',
      confs: '12 Network Confirmations',
    },
    USDC: {
      address: '0x38F...8821A (Native Circle Protocol)',
      network: 'Ethereum (ERC-20) / Arbitrum One',
      min: '50 USDC',
      confs: '15 Network Confirmations',
    },
    BTC: {
      address: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
      network: 'Bitcoin Native SegWit',
      min: '0.001 BTC',
      confs: '3 Confirmations',
    },
    USD: {
      address: 'Crestiq Institutional Clearing Corp / Routing: 021000021',
      network: 'Fedwire / SEPA Instant Bank Transfer',
      min: '$500 USD',
      confs: '1-2 Business Days Settlement',
    },
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWithdrawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!withdrawAddress || !withdrawAmount) {
      setWithdrawStatus('Please provide both destination address and withdrawal amount.');
      return;
    }
    const num = parseFloat(withdrawAmount);
    if (isNaN(num) || num <= 0) {
      setWithdrawStatus('Invalid amount specified.');
      return;
    }
    if (num > 30470.45) {
      setWithdrawStatus('Requested amount exceeds available unencumbered margin ($30,470.45).');
      return;
    }
    setWithdrawStatus('Withdrawal Request Queued: Two-factor verification authorization token dispatched to registered security device.');
  };

  return (
    <div className="py-8 sm:py-12 bg-[#0B0D10] text-[#F5F7FA] min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-[#1C2430]">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#12234A] text-[#4A8DFF] text-xs font-mono font-bold uppercase tracking-wider border border-[#246BFD]/30 mb-2">
              <Wallet className="w-3.5 h-3.5" />
              <span>Institutional Settlement Gateway</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Treasury &amp; Funding Gateway
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-[#A7B0BD]">
              Deposit capital, request segregated disbursements, and review cryptographically signed transaction audits.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1.5 rounded-lg bg-[#11151B] border border-[#1C2430] text-[#00E599] font-mono font-bold">
              Multi-Sig Vault Protected
            </span>
          </div>
        </div>

        {/* Balances Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <span className="text-xs text-[#A7B0BD] block">Settled Liquid Capital</span>
            <span className="mt-1 text-2xl font-mono font-extrabold text-white">$30,470.45</span>
            <span className="text-[11px] text-[#00E599] block mt-0.5">Available for transfer / orders</span>
          </div>

          <div className="p-5 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <span className="text-xs text-[#A7B0BD] block">Allocated in Active Algos</span>
            <span className="mt-1 text-2xl font-mono font-extrabold text-white">$18,450.00</span>
            <span className="text-[11px] text-[#4A8DFF] block mt-0.5">Encumbered position margin</span>
          </div>

          <div className="p-5 rounded-xl bg-[#11151B] border border-[#1C2430]">
            <span className="text-xs text-[#A7B0BD] block">Total Account Valuation</span>
            <span className="mt-1 text-2xl font-mono font-extrabold text-[#00E599]">$48,920.45</span>
            <span className="text-[11px] text-[#A7B0BD] block mt-0.5">Mark-to-market total</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#1C2430] gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('deposit')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'deposit'
                ? 'border-[#246BFD] text-white'
                : 'border-transparent text-[#A7B0BD] hover:text-white'
            }`}
          >
            Deposit Capital
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('withdraw')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'withdraw'
                ? 'border-[#246BFD] text-white'
                : 'border-transparent text-[#A7B0BD] hover:text-white'
            }`}
          >
            Disbursement &amp; Withdrawal
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('history')}
            className={`pb-3 text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'history'
                ? 'border-[#246BFD] text-white'
                : 'border-transparent text-[#A7B0BD] hover:text-white'
            }`}
          >
            Transaction Audit Ledger
          </button>
        </div>

        {/* Tab 1: Deposit */}
        {activeTab === 'deposit' && (
          <div className="p-6 rounded-xl bg-[#11151B] border border-[#1C2430] space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Select Deposit Instrument</h2>
              <p className="text-xs text-[#A7B0BD] mt-1">Select the asset and settlement rail to generate your allocated receiver address.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(['USDT', 'USDC', 'BTC', 'USD'] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setSelectedCurrency(curr)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    selectedCurrency === curr
                      ? 'bg-[#181E27] border-[#246BFD] text-white ring-1 ring-[#246BFD]'
                      : 'bg-[#0B0D10] border-[#1C2430] text-[#A7B0BD] hover:text-white hover:bg-[#181E27]'
                  }`}
                >
                  <span className="text-xs font-bold block">{curr}</span>
                  <span className="text-[10px] text-[#677284] block mt-0.5">
                    {curr === 'USD' ? 'Bank Wire (USD)' : `${curr} Digital Asset`}
                  </span>
                </button>
              ))}
            </div>

            {/* Generated Address & Parameters */}
            <div className="p-5 rounded-xl bg-[#0B0D10] border border-[#1C2430] space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#A7B0BD] uppercase tracking-wider mb-1.5">
                  Deposit Destination Address ({depositAddresses[selectedCurrency].network})
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 p-3 bg-[#11151B] border border-[#1C2430] rounded-lg font-mono text-xs text-white break-all">
                    {depositAddresses[selectedCurrency].address}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(depositAddresses[selectedCurrency].address)}
                    className="px-4 py-3 bg-[#246BFD] hover:bg-[#1D58D8] text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#00E599]" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono pt-2 border-t border-[#1C2430]">
                <div>
                  <span className="text-[#677284] block">Minimum Inflow:</span>
                  <span className="text-white font-bold">{depositAddresses[selectedCurrency].min}</span>
                </div>
                <div>
                  <span className="text-[#677284] block">Required Finality:</span>
                  <span className="text-white font-bold">{depositAddresses[selectedCurrency].confs}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#181E27] border border-[#2A3648] text-xs text-[#A7B0BD] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#00E599] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                All deposits are scanned against OFAC sanctions lists and AML heuristics before credit allocation. Never send non-{selectedCurrency} assets to this address.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Withdraw */}
        {activeTab === 'withdraw' && (
          <div className="p-6 rounded-xl bg-[#11151B] border border-[#1C2430] space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Disbursement Authorization Request</h2>
              <p className="text-xs text-[#A7B0BD] mt-1">Submit a withdrawal request to external verified settlement accounts.</p>
            </div>

            {withdrawStatus && (
              <div className="p-4 rounded-lg bg-[#181E27] border border-[#2A3648] text-xs text-white flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#4A8DFF] shrink-0 mt-0.5" />
                <span>{withdrawStatus}</span>
              </div>
            )}

            <form onSubmit={handleWithdrawSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#A7B0BD] uppercase tracking-wider mb-1">
                  Destination Address or Wire Beneficiary <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={withdrawAddress}
                  onChange={(e) => setWithdrawAddress(e.target.value)}
                  placeholder="e.g. 0x..., bc1..., or IBAN"
                  className="w-full p-3 text-xs bg-[#0B0D10] border border-[#1C2430] rounded-lg text-white font-mono placeholder-[#677284] focus:outline-none focus:border-[#246BFD]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-[#A7B0BD] uppercase tracking-wider">
                    Amount (USD Equivalent) <span className="text-rose-400">*</span>
                  </label>
                  <span className="text-xs text-[#4A8DFF] font-mono">
                    Max: $30,470.45
                  </span>
                </div>
                <input
                  type="number"
                  step="any"
                  required
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full p-3 text-xs bg-[#0B0D10] border border-[#1C2430] rounded-lg text-white font-mono placeholder-[#677284] focus:outline-none focus:border-[#246BFD]"
                />
              </div>

              <div className="p-3.5 rounded-lg bg-[#0B0D10] border border-[#1C2430] flex items-center justify-between text-xs font-mono">
                <span className="text-[#A7B0BD]">Network / Gas Clearing Fee:</span>
                <span className="text-white font-bold">$12.50 USD</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-[#246BFD] hover:bg-[#1D58D8] rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>Authorize Disbursement</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* Tab 3: History */}
        {activeTab === 'history' && (
          <div className="rounded-xl bg-[#11151B] border border-[#1C2430] overflow-hidden">
            <div className="p-4 border-b border-[#1C2430] flex items-center justify-between">
              <h2 className="text-sm font-bold text-white">Recent Capital Transactions</h2>
              <span className="text-xs font-mono text-[#A7B0BD]">Showing 4 recent ledger events</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#181E27] text-[#A7B0BD] font-mono uppercase text-[11px]">
                  <tr>
                    <th className="py-3 px-4 font-bold">Type</th>
                    <th className="py-3 px-4 font-bold">Asset</th>
                    <th className="py-3 px-4 font-bold">Amount</th>
                    <th className="py-3 px-4 font-bold">Tx Hash / Ref</th>
                    <th className="py-3 px-4 font-bold">Timestamp</th>
                    <th className="py-3 px-4 font-bold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1C2430] font-mono">
                  <tr className="hover:bg-[#181E27]/50">
                    <td className="py-3.5 px-4 font-bold text-[#00E599] flex items-center gap-1.5">
                      <ArrowDownLeft className="w-3.5 h-3.5" /> Deposit
                    </td>
                    <td className="py-3.5 px-4 text-white">USDC (ERC-20)</td>
                    <td className="py-3.5 px-4 text-white font-bold">+10,000.00</td>
                    <td className="py-3.5 px-4 text-[#A7B0BD]">0x9f1a...48c2</td>
                    <td className="py-3.5 px-4 text-[#677284]">2025-02-18 14:22</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="px-2 py-0.5 rounded bg-[#072E20] text-[#00E599] text-[10px] font-bold">
                        SETTLED
                      </span>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#181E27]/50">
                    <td className="py-3.5 px-4 font-bold text-[#00E599] flex items-center gap-1.5">
                      <ArrowDownLeft className="w-3.5 h-3.5" /> Deposit
                    </td>
                    <td className="py-3.5 px-4 text-white">USD Wire</td>
                    <td className="py-3.5 px-4 text-white font-bold">+25,000.00</td>
                    <td className="py-3.5 px-4 text-[#A7B0BD]">FED-WIRE-8841</td>
                    <td className="py-3.5 px-4 text-[#677284]">2025-02-14 09:10</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="px-2 py-0.5 rounded bg-[#072E20] text-[#00E599] text-[10px] font-bold">
                        SETTLED
                      </span>
                    </td>
                  </tr>

                  <tr className="hover:bg-[#181E27]/50">
                    <td className="py-3.5 px-4 font-bold text-[#FF4D4D] flex items-center gap-1.5">
                      <ArrowUpRight className="w-3.5 h-3.5" /> Withdrawal
                    </td>
                    <td className="py-3.5 px-4 text-white">USDT (TRC-20)</td>
                    <td className="py-3.5 px-4 text-white font-bold">-2,500.00</td>
                    <td className="py-3.5 px-4 text-[#A7B0BD]">TX-991204-TRX</td>
                    <td className="py-3.5 px-4 text-[#677284]">2025-02-10 16:45</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="px-2 py-0.5 rounded bg-[#072E20] text-[#00E599] text-[10px] font-bold">
                        SETTLED
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
