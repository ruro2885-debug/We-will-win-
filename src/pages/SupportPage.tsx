import React, { useState } from 'react';
import { Headphones, Send, CheckCircle2, AlertCircle, Clock, ShieldCheck, Mail } from 'lucide-react';

export const SupportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedTicketId, setSubmittedTicketId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/support/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit assistance inquiry.');
      }

      setSubmittedTicketId(data.ticketId);
      setFormData({
        name: '',
        email: '',
        category: 'General Inquiry',
        subject: '',
        message: '',
      });
    } catch (err: any) {
      setErrorMsg(err.message || 'Unable to connect to the support desk. Please verify your network.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 md:py-24 bg-[#0B0F19] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161F33] border border-[#1E293B] text-xs font-mono font-medium text-sky-400 mb-6">
            <Headphones className="w-3.5 h-3.5" />
            <span>Assistance Desk</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Client Support &amp; Technical Assistance
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Submit your technical questions, account queries, or algorithmic integration inquiries. Every request receives a trackable assistance ticket.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left: Support Form */}
          <div className="md:col-span-8 bg-[#111827] border border-[#1E293B] rounded-2xl p-6 sm:p-8 shadow-xl">
            
            {submittedTicketId ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your assistance request has been logged in our centralized ledger. Your reference identifier is:
                </p>
                <div className="inline-block px-4 py-2 rounded-lg bg-[#0B0F19] border border-[#1E293B] font-mono text-base font-bold text-sky-400">
                  {submittedTicketId}
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmittedTicketId(null)}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-[#1E293B] rounded-lg border border-[#334155] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {errorMsg && (
                  <div className="p-3.5 rounded-lg bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      <option value="General Inquiry">General Platform Inquiry</option>
                      <option value="AI Trading">AI Models &amp; Algorithms</option>
                      <option value="Copy Trading">Copy Trading &amp; Replication</option>
                      <option value="Account & KYC">Account &amp; KYC Verification</option>
                      <option value="Technical & API">Technical / API Access</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Subject <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief topic summary"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Detailed Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry with relevant context..."
                    className="w-full px-3.5 py-2.5 text-sm bg-[#0B0F19] border border-[#1E293B] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {loading ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Assistance Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right: Operational Details & Standards */}
          <div className="md:col-span-4 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#111827] border border-[#1E293B] space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-sky-400" />
                Desk Schedule
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our technical support and operational desk reviews inquiries Monday through Friday during standard financial market sessions. Priority is afforded to execution-critical and security issues.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#111827] border border-[#1E293B] space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Configurable Corporate Details
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct phone routing, physical correspondence hubs, and specialized institutional desks will be configured upon production licensing finalization.
              </p>
              <div className="pt-2 border-t border-[#1E293B] text-[11px] font-mono text-slate-400">
                Official Entity: Crestiqtrades
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
