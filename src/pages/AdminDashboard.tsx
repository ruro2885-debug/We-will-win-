import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Users,
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  ShieldCheck,
  LifeBuoy,
  Megaphone,
  TrendingUp,
  LogOut,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  AlertCircle,
  RefreshCw,
  Plus,
} from 'lucide-react';
import { CrestiqLogo } from '../components/brand/CrestiqLogo';

interface AdminDashboardProps {
  token: string;
  onLogout: () => void;
  onNavigate: (path: string) => void;
}

type AdminSection =
  | 'Dashboard'
  | 'Users'
  | 'Linked Wallets'
  | 'Deposits'
  | 'Withdrawals'
  | 'KYC Verification'
  | 'Support Tickets'
  | 'Campaigns & Events'
  | 'Trades';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ token, onLogout, onNavigate }) => {
  const [activeSection, setActiveSection] = useState<AdminSection>('Dashboard');
  const [serverStats, setServerStats] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch admin stats and live tickets from server
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/stats', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setServerStats(data);
        }
      } catch (err) {
        console.error('Failed to fetch admin stats:', err);
      }
    };
    fetchStats();
  }, [token]);

  // Section 2: Mock persistent Users data
  const [usersList, setUsersList] = useState([
    { id: 'USR-101', name: 'Alexander Wright', email: 'a.wright@firm.com', kyc: 'APPROVED', tier: 'Institutional', status: 'ACTIVE', created: '2023-01-14' },
    { id: 'USR-102', name: 'Elena Rostova', email: 'elena@rostova.io', kyc: 'PENDING', tier: 'Standard', status: 'ACTIVE', created: '2023-04-20' },
    { id: 'USR-103', name: 'Marcus Chen', email: 'mchen@quantcap.org', kyc: 'APPROVED', tier: 'Pro Trader', status: 'ACTIVE', created: '2023-08-11' },
    { id: 'USR-104', name: 'Sarah Al-Mansoor', email: 'sarah.m@apex.ae', kyc: 'RESUBMISSION', tier: 'Standard', status: 'PENDING_DOCS', created: '2024-02-01' },
  ]);

  // Section 3: Linked Wallets
  const [walletsList] = useState([
    { id: 'WAL-01', userId: 'USR-101', network: 'Ethereum Mainnet', address: '0x71C...4e82', verified: true, linkedAt: '2023-01-15' },
    { id: 'WAL-02', userId: 'USR-103', network: 'Arbitrum One', address: '0x32A...88b1', verified: true, linkedAt: '2023-08-12' },
    { id: 'WAL-03', userId: 'USR-102', network: 'Solana', address: '4k3D...z9Wq', verified: false, linkedAt: '2024-03-02' },
  ]);

  // Section 4: Deposits
  const [depositsList, setDepositsList] = useState([
    { id: 'DEP-901', userId: 'USR-101', asset: 'USDC (ERC20)', amount: '50,000.00', txHash: '0x9fa...11c', status: 'APPROVED', date: '2024-10-21 14:20' },
    { id: 'DEP-902', userId: 'USR-103', asset: 'USD (Fedwire)', amount: '25,000.00', txHash: 'WIRE-891024', status: 'PENDING', date: '2024-10-23 09:15' },
  ]);

  // Section 5: Withdrawals
  const [withdrawalsList, setWithdrawalsList] = useState([
    { id: 'WTH-401', userId: 'USR-101', asset: 'USDC', amount: '12,500.00', destination: '0x71C...4e82', status: 'COMPLETED', date: '2024-10-18 11:00' },
    { id: 'WTH-402', userId: 'USR-103', asset: 'USD', amount: '8,000.00', destination: 'JPMorgan Chase ****4910', status: 'PENDING_REVIEW', date: '2024-10-23 10:45' },
  ]);

  // Section 6: KYC Submissions
  const [kycList, setKycList] = useState([
    { id: 'KYC-501', userId: 'USR-102', name: 'Elena Rostova', docType: 'Passport + Proof of Address', submitted: '2024-10-22', status: 'PENDING' },
    { id: 'KYC-502', userId: 'USR-104', name: 'Sarah Al-Mansoor', docType: 'National ID (Blurry upload)', submitted: '2024-10-20', status: 'RESUBMISSION' },
  ]);

  // Section 7: Support Tickets
  const [ticketsList, setTicketsList] = useState<any[]>(() => {
    return serverStats?.tickets || [
      { id: 'TICK-8021', name: 'Institutional Client', email: 'client@example.com', category: 'API Integration', subject: 'FIX API Latency parameters', status: 'OPEN', createdAt: '2024-10-22T10:00:00Z' }
    ];
  });

  // Section 8: Campaigns & Events
  const [campaignsList, setCampaignsList] = useState([
    { id: 'CMP-01', title: 'Q4 2026 Algorithmic Liquidity Incentive', target: 'Pro Traders', rebate: 'Zero Maker Fee', active: true, start: '2026-10-01', end: '2026-12-31' },
    { id: 'CMP-02', title: 'Quantitative Strategy Allocator Showcase', target: 'Strategy Providers', rebate: 'Seed Allocation Grant', active: true, start: '2026-10-15', end: '2026-11-30' },
  ]);

  // Section 9: Trades
  const [tradesList] = useState([
    { id: 'TRD-7701', symbol: 'BTC/USD', type: 'BUY (LONG)', size: '1.25 BTC', price: '68,410.00', mode: 'PAPER_SIMULATION', timestamp: '2024-10-23 13:42:10' },
    { id: 'TRD-7702', symbol: 'EUR/USD', type: 'SELL (SHORT)', size: '250,000 EUR', price: '1.0844', mode: 'PAPER_SIMULATION', timestamp: '2024-10-23 13:45:00' },
    { id: 'TRD-7703', symbol: 'SPX500', type: 'BUY (LONG)', size: '10 Contracts', price: '5,862.50', mode: 'PAPER_SIMULATION', timestamp: '2024-10-23 14:02:19' },
  ]);

  const navSections: { id: AdminSection; label: string; icon: any }[] = [
    { id: 'Dashboard', label: '1. Dashboard', icon: LayoutDashboard },
    { id: 'Users', label: '2. Users', icon: Users },
    { id: 'Linked Wallets', label: '3. Linked Wallets', icon: Wallet },
    { id: 'Deposits', label: '4. Deposits', icon: ArrowDownCircle },
    { id: 'Withdrawals', label: '5. Withdrawals', icon: ArrowUpCircle },
    { id: 'KYC Verification', label: '6. KYC Verification', icon: ShieldCheck },
    { id: 'Support Tickets', label: '7. Support Tickets', icon: LifeBuoy },
    { id: 'Campaigns & Events', label: '8. Campaigns & Events', icon: Megaphone },
    { id: 'Trades', label: '9. Trades', icon: TrendingUp },
  ];

  const handleUpdateTicketStatus = async (ticketId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/admin/tickets/${ticketId}/status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setTicketsList((prev) =>
          prev.map((t) => (t.id === ticketId ? { ...t, status: newStatus } : t))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A11] text-white flex flex-col">
      
      {/* Top Navbar */}
      <header className="h-16 bg-[#0B0F19] border-b border-[#1E293B] px-4 sm:px-8 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <CrestiqLogo variant="horizontal" theme="dark" size="sm" />
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-blue-950 text-sky-400 font-mono text-[11px] border border-blue-900">
            INTERNAL ADMIN ENVIRONMENT
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="text-xs text-slate-400 hover:text-white transition-colors"
          >
            Public Site
          </button>
          <div className="h-4 w-px bg-slate-800"></div>
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-950/40 hover:bg-rose-950/80 rounded-lg border border-rose-900 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Body with Sidebar + Workspace */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        
        {/* Sidebar with the 9 mandatory sections */}
        <aside className="w-full md:w-64 bg-[#0B0F19] border-r border-[#1E293B] p-4 flex flex-col justify-between shrink-0">
          <div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-3 mb-2">
              Primary Modules (9)
            </div>
            <nav className="space-y-1">
              {navSections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setActiveSection(sec.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-xs font-semibold rounded-lg text-left transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-[#111827]'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{sec.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="pt-4 border-t border-[#1E293B] text-[11px] font-mono text-slate-400 px-3">
            <div>Auth: Server Verified</div>
            <div className="mt-0.5 text-slate-400">Established: 2022</div>
          </div>
        </aside>

        {/* Content Workspace */}
        <main className="flex-1 bg-[#070A11] p-6 sm:p-8 overflow-y-auto">
          
          {/* Header of Active Section */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                {activeSection}
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Audited records and administrative management for {activeSection.toLowerCase()}.
              </p>
            </div>
          </div>

          {/* Section 1: DASHBOARD */}
          {activeSection === 'Dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl bg-[#0B0F19] border border-[#1E293B]">
                  <div className="text-xs text-slate-400 font-mono">Registered Accounts</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">142</div>
                  <div className="text-[11px] text-slate-400 mt-1">Baseline user ledger</div>
                </div>

                <div className="p-5 rounded-xl bg-[#0B0F19] border border-[#1E293B]">
                  <div className="text-xs text-slate-400 font-mono">Pending KYC Inspec.</div>
                  <div className="text-2xl font-bold font-mono text-amber-400 mt-1">4</div>
                  <div className="text-[11px] text-slate-400 mt-1">Requires compliance review</div>
                </div>

                <div className="p-5 rounded-xl bg-[#0B0F19] border border-[#1E293B]">
                  <div className="text-xs text-slate-400 font-mono">Pending Deposit Req.</div>
                  <div className="text-2xl font-bold font-mono text-sky-400 mt-1">2</div>
                  <div className="text-[11px] text-slate-400 mt-1">Verification queue</div>
                </div>

                <div className="p-5 rounded-xl bg-[#0B0F19] border border-[#1E293B]">
                  <div className="text-xs text-slate-400 font-mono">Support Queue</div>
                  <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">
                    {serverStats?.counts?.openTickets || 1}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Open assistance tickets</div>
                </div>
              </div>

              {/* System Integration Status Banner */}
              <div className="p-6 rounded-xl bg-[#0B0F19] border border-[#1E293B] space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white text-sm">Database &amp; Firebase Readiness</h3>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-blue-950 text-sky-400 border border-blue-900">
                    AWAITING CONFIGURATION
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The application architecture has preserved all customer and administrative routes. When Firebase project credentials and Firestore schemas are provisioned in the forthcoming integration phase, persistent production listeners will bind directly to these 9 modules.
                </p>
              </div>
            </div>
          )}

          {/* Section 2: USERS */}
          {activeSection === 'Users' && (
            <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl overflow-hidden">
              <div className="p-4 border-b border-[#1E293B] flex items-center justify-between gap-4">
                <input
                  type="text"
                  placeholder="Search accounts by ID or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3 py-1.5 text-xs bg-[#111827] border border-[#1E293B] rounded-lg text-white placeholder-slate-400 w-72 focus:outline-none focus:ring-1 focus:ring-sky-500"
                />
                <span className="text-xs font-mono text-slate-400">Total: {usersList.length} Accounts</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0E1626] border-b border-[#1E293B] text-slate-400 font-mono uppercase">
                    <tr>
                      <th className="py-3 px-4">User ID</th>
                      <th className="py-3 px-4">Client Name</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">KYC State</th>
                      <th className="py-3 px-4">Tier</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {usersList.map((u) => (
                      <tr key={u.id} className="hover:bg-[#111827]">
                        <td className="py-3 px-4 font-mono text-sky-400">{u.id}</td>
                        <td className="py-3 px-4 font-semibold text-white">{u.name}</td>
                        <td className="py-3 px-4 text-slate-400">{u.email}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${
                            u.kyc === 'APPROVED' ? 'bg-emerald-950 text-emerald-300' : 'bg-amber-950 text-amber-300'
                          }`}>
                            {u.kyc}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-300">{u.tier}</td>
                        <td className="py-3 px-4 text-slate-400">{u.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section 3: LINKED WALLETS */}
          {activeSection === 'Linked Wallets' && (
            <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl overflow-hidden">
              <div className="p-4 border-b border-[#1E293B] text-xs text-slate-400">
                Non-custodial user wallet registry. Private keys and seeds are never handled by the platform.
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0E1626] border-b border-[#1E293B] text-slate-400 font-mono uppercase">
                    <tr>
                      <th className="py-3 px-4">Wallet ID</th>
                      <th className="py-3 px-4">Account ID</th>
                      <th className="py-3 px-4">Network</th>
                      <th className="py-3 px-4">Public Address</th>
                      <th className="py-3 px-4">Signature Verified</th>
                      <th className="py-3 px-4">Registered Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {walletsList.map((w) => (
                      <tr key={w.id} className="hover:bg-[#111827]">
                        <td className="py-3 px-4 font-mono text-sky-400">{w.id}</td>
                        <td className="py-3 px-4 font-mono text-slate-300">{w.userId}</td>
                        <td className="py-3 px-4 font-semibold text-white">{w.network}</td>
                        <td className="py-3 px-4 font-mono text-slate-400">{w.address}</td>
                        <td className="py-3 px-4">
                          {w.verified ? (
                            <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                              <CheckCircle className="w-3.5 h-3.5" /> Verified
                            </span>
                          ) : (
                            <span className="text-amber-400 font-mono text-[11px]">Pending Sig</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-slate-400">{w.linkedAt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section 4: DEPOSITS */}
          {activeSection === 'Deposits' && (
            <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl overflow-hidden">
              <div className="p-4 border-b border-[#1E293B] flex items-center justify-between text-xs text-slate-400">
                <span>Inbound deposit verification and ledger records.</span>
                <span className="font-mono text-amber-400">1 Pending Review</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0E1626] border-b border-[#1E293B] text-slate-400 font-mono uppercase">
                    <tr>
                      <th className="py-3 px-4">Deposit ID</th>
                      <th className="py-3 px-4">User</th>
                      <th className="py-3 px-4">Asset</th>
                      <th className="py-3 px-4">Amount</th>
                      <th className="py-3 px-4">Tx Reference</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {depositsList.map((d) => (
                      <tr key={d.id} className="hover:bg-[#111827]">
                        <td className="py-3 px-4 font-mono text-sky-400">{d.id}</td>
                        <td className="py-3 px-4 font-mono text-slate-300">{d.userId}</td>
                        <td className="py-3 px-4 font-semibold text-white">{d.asset}</td>
                        <td className="py-3 px-4 font-mono font-bold text-white">{d.amount}</td>
                        <td className="py-3 px-4 font-mono text-slate-400">{d.txHash}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${
                            d.status === 'APPROVED' ? 'bg-emerald-950 text-emerald-300' : 'bg-amber-950 text-amber-300'
                          }`}>
                            {d.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-400">{d.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section 5: WITHDRAWALS */}
          {activeSection === 'Withdrawals' && (
            <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl overflow-hidden">
              <div className="p-4 border-b border-[#1E293B] text-xs text-slate-400">
                Outbound capital transfers with multi-step authorization verification.
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0E1626] border-b border-[#1E293B] text-slate-400 font-mono uppercase">
                    <tr>
                      <th className="py-3 px-4">Withdrawal ID</th>
                      <th className="py-3 px-4">User</th>
                      <th className="py-3 px-4">Asset</th>
                      <th className="py-3 px-4">Amount</th>
                      <th className="py-3 px-4">Destination Address</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {withdrawalsList.map((w) => (
                      <tr key={w.id} className="hover:bg-[#111827]">
                        <td className="py-3 px-4 font-mono text-sky-400">{w.id}</td>
                        <td className="py-3 px-4 font-mono text-slate-300">{w.userId}</td>
                        <td className="py-3 px-4 font-semibold text-white">{w.asset}</td>
                        <td className="py-3 px-4 font-mono font-bold text-white">{w.amount}</td>
                        <td className="py-3 px-4 font-mono text-slate-400">{w.destination}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${
                            w.status === 'COMPLETED' ? 'bg-emerald-950 text-emerald-300' : 'bg-blue-950 text-sky-300'
                          }`}>
                            {w.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section 6: KYC VERIFICATION */}
          {activeSection === 'KYC Verification' && (
            <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl overflow-hidden">
              <div className="p-4 border-b border-[#1E293B] text-xs text-slate-400">
                Identity review console. Restricted to authorized compliance personnel.
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0E1626] border-b border-[#1E293B] text-slate-400 font-mono uppercase">
                    <tr>
                      <th className="py-3 px-4">KYC ID</th>
                      <th className="py-3 px-4">Applicant</th>
                      <th className="py-3 px-4">Document Package</th>
                      <th className="py-3 px-4">Submission Date</th>
                      <th className="py-3 px-4">Review State</th>
                      <th className="py-3 px-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {kycList.map((k) => (
                      <tr key={k.id} className="hover:bg-[#111827]">
                        <td className="py-3 px-4 font-mono text-sky-400">{k.id}</td>
                        <td className="py-3 px-4 font-semibold text-white">{k.name}</td>
                        <td className="py-3 px-4 text-slate-300">{k.docType}</td>
                        <td className="py-3 px-4 text-slate-400">{k.submitted}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded font-mono text-[10px] bg-amber-950 text-amber-300">
                            {k.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button
                            type="button"
                            className="px-2.5 py-1 text-[11px] font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded"
                          >
                            Inspect Dossier
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section 7: SUPPORT TICKETS */}
          {activeSection === 'Support Tickets' && (
            <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl overflow-hidden">
              <div className="p-4 border-b border-[#1E293B] flex items-center justify-between text-xs text-slate-400">
                <span>Centralized assistance ledger and client inquiry threads.</span>
                <span className="font-mono text-sky-400">{ticketsList.length} Inquiries Logged</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0E1626] border-b border-[#1E293B] text-slate-400 font-mono uppercase">
                    <tr>
                      <th className="py-3 px-4">Ticket ID</th>
                      <th className="py-3 px-4">Client</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Subject</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4">Quick Update</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {ticketsList.map((t) => (
                      <tr key={t.id} className="hover:bg-[#111827]">
                        <td className="py-3 px-4 font-mono text-sky-400">{t.id}</td>
                        <td className="py-3 px-4">
                          <div className="font-semibold text-white">{t.name}</div>
                          <div className="text-[11px] text-slate-400">{t.email}</div>
                        </td>
                        <td className="py-3 px-4 text-slate-300">{t.category}</td>
                        <td className="py-3 px-4 text-slate-200">{t.subject}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${
                            t.status === 'RESOLVED' ? 'bg-emerald-950 text-emerald-300' : 'bg-blue-950 text-sky-300'
                          }`}>
                            {t.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleUpdateTicketStatus(t.id, 'IN_PROGRESS')}
                            className="px-2 py-1 text-[10px] rounded bg-[#161F33] text-slate-300 hover:text-white"
                          >
                            In Progress
                          </button>
                          <button
                            type="button"
                            onClick={() => handleUpdateTicketStatus(t.id, 'RESOLVED')}
                            className="px-2 py-1 text-[10px] rounded bg-emerald-950 text-emerald-300 hover:bg-emerald-900"
                          >
                            Resolve
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section 8: CAMPAIGNS & EVENTS */}
          {activeSection === 'Campaigns & Events' && (
            <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl overflow-hidden">
              <div className="p-4 border-b border-[#1E293B] flex items-center justify-between text-xs text-slate-400">
                <span>Active promotional events, volume rebate schedules, and liquidity campaigns.</span>
                <button
                  type="button"
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
                >
                  <Plus className="w-3.5 h-3.5" />
                  New Campaign
                </button>
              </div>
              <div className="p-6 space-y-4">
                {campaignsList.map((c) => (
                  <div key={c.id} className="p-4 rounded-xl bg-[#111827] border border-[#1E293B] flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-sky-400">{c.id}</span>
                        <h4 className="font-bold text-white text-sm">{c.title}</h4>
                      </div>
                      <div className="text-xs text-slate-400 mt-1 flex items-center gap-4">
                        <span>Target: {c.target}</span>
                        <span>•</span>
                        <span>Rebate: {c.rebate}</span>
                        <span>•</span>
                        <span>Duration: {c.start} to {c.end}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-900">
                      ACTIVE
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 9: TRADES */}
          {activeSection === 'Trades' && (
            <div className="bg-[#0B0F19] border border-[#1E293B] rounded-xl overflow-hidden">
              <div className="p-4 border-b border-[#1E293B] flex items-center justify-between text-xs text-slate-400">
                <span>Platform order execution ledger and position management.</span>
                <span className="font-mono text-emerald-400">All Trades Chronologically Signed</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0E1626] border-b border-[#1E293B] text-slate-400 font-mono uppercase">
                    <tr>
                      <th className="py-3 px-4">Trade ID</th>
                      <th className="py-3 px-4">Instrument</th>
                      <th className="py-3 px-4">Side</th>
                      <th className="py-3 px-4">Execution Volume</th>
                      <th className="py-3 px-4">Fill Price</th>
                      <th className="py-3 px-4">Execution Mode</th>
                      <th className="py-3 px-4">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1E293B]">
                    {tradesList.map((tr) => (
                      <tr key={tr.id} className="hover:bg-[#111827]">
                        <td className="py-3 px-4 font-mono text-sky-400">{tr.id}</td>
                        <td className="py-3 px-4 font-bold text-white font-mono">{tr.symbol}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${
                            tr.type.includes('BUY') ? 'bg-emerald-950 text-emerald-300' : 'bg-rose-950 text-rose-300'
                          }`}>
                            {tr.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-300">{tr.size}</td>
                        <td className="py-3 px-4 font-mono font-semibold text-white">{tr.price}</td>
                        <td className="py-3 px-4 font-mono text-slate-400 text-[11px]">{tr.mode}</td>
                        <td className="py-3 px-4 text-slate-400">{tr.timestamp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};
