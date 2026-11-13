import React, { useState } from 'react';
import { Database, BarChart3, ShieldCheck, Mic, Copy, Check, Send } from 'lucide-react';

export default function EmbeddedAgentSection() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `<!-- Simple Iframe Embedding -->
<iframe
  src="https://app.kanta.com/serve/v2/chat?token=xxx"
  width="400"
  height="600">
</iframe>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="embed-agent" className="py-16 bg-slate-50/50 border-t border-slate-200/80 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER BLOCK --- */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#B92025] uppercase font-['Outfit']">
            Embedded AI Agent
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-['Outfit'] tracking-tight">
            Add AI to your product <span className="text-[#B92025]">in one line</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            For example, you can embed a fully-featured AI chatbot into any web application. The chatbot can access your database, generate visualizations, and respect user-specific data permissions.
          </p>
        </div>

        {/* --- MAIN STAGE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* LEFT SIDE: AI Chat Window Stage */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            {/* Header Bar */}
            <div className="bg-[#0F172A] px-5 py-3 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo/Iconic-Color@2x.png"
                  alt="Kanta Robot"
                  className="w-6 h-6 object-contain"
                />
                <div>
                  <strong className="text-xs font-bold text-white block font-['Outfit']">AI Support Assistant</strong>
                  <span className="text-[10px] text-slate-400">Powered by Kanta.AI</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Online</span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-5 space-y-4 bg-slate-50/70 text-xs min-h-[300px] flex flex-col justify-between">
              <div className="space-y-3">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-[#B92025] text-white font-medium px-4 py-2.5 rounded-2xl rounded-tr-xs max-w-[85%] shadow-2xs">
                    What's my current order status?
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex items-start gap-2.5">
                  <img
                    src="/assets/logo/Iconic-Color@2x.png"
                    alt="Bot Avatar"
                    className="w-6 h-6 object-contain shrink-0 mt-1"
                  />
                  <div className="bg-white border border-slate-200 text-slate-800 p-4 rounded-2xl rounded-tl-xs max-w-[92%] space-y-2.5 shadow-2xs">
                    <p className="text-xs">
                      Your order <strong className="text-slate-900 font-bold">#ORD-2024-1234</strong> is currently{' '}
                      <span className="text-emerald-600 font-bold underline underline-offset-2">in transit.</span>
                    </p>

                    <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px]">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Expected delivery:</span>
                        <strong className="text-slate-800 font-bold">Feb 15, 2024</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Carrier:</span>
                        <strong className="text-slate-800 font-bold">FedEx</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typing Row */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono pt-1">
                  <span className="w-2 h-2 rounded-full bg-[#B92025] animate-ping"></span>
                  <span>AI is querying database...</span>
                </div>
              </div>

              {/* Chat Input Field */}
              <div className="pt-3 border-t border-slate-200 flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value="Ask about your orders, invoices, analytics..."
                  className="flex-1 bg-white border border-slate-200 text-slate-500 text-xs px-4 py-2 rounded-full outline-none"
                />
                <button type="button" className="w-7 h-7 rounded-full bg-[#B92025] text-white flex items-center justify-center shrink-0 shadow-2xs">
                  <Send size={12} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: 4 Capabilities + Code Box */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* 4 Capabilities Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white border border-slate-200/90 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 shrink-0">
                  <Database size={16} />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-900 block font-['Outfit']">Database Access</strong>
                  <span className="text-[10px] text-slate-500 font-medium">Query SQL tables</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 shrink-0">
                  <BarChart3 size={16} />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-900 block font-['Outfit']">Visualizations</strong>
                  <span className="text-[10px] text-slate-500 font-medium">Generate data charts</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-900 block font-['Outfit']">Row Security</strong>
                  <span className="text-[10px] text-slate-500 font-medium">User-specific data</span>
                </div>
              </div>

              <div className="bg-white border border-slate-200/90 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200 shrink-0">
                  <Mic size={16} />
                </div>
                <div>
                  <strong className="text-xs font-bold text-slate-900 block font-['Outfit']">Voice Input</strong>
                  <span className="text-[10px] text-slate-500 font-medium">Speech queries</span>
                </div>
              </div>
            </div>

            {/* Glass Code Box */}
            <div className="bg-[#0F172A] text-white rounded-2xl border border-slate-800 shadow-md overflow-hidden">
              <div className="bg-slate-950 px-4 py-2 flex items-center justify-between border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">embed.html</span>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-0.5 rounded-full border border-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                  <span>{copied ? 'Copied!' : 'Copy snippet'}</span>
                </button>
              </div>

              <div className="p-3.5 font-mono text-xs text-red-300 leading-relaxed overflow-x-auto">
                <pre>{codeSnippet}</pre>
              </div>
            </div>

            {/* Security Banner */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-4 flex items-start gap-3 text-slate-900 shadow-2xs">
              <div className="w-8 h-8 rounded-full bg-[#B92025] text-white flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck size={16} />
              </div>
              <div>
                <strong className="text-xs font-bold block text-slate-900 font-['Outfit']">Row-Level Security Built-In</strong>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed mt-0.5">
                  Use constraint sessions to ensure each user only sees their own data. Zero risk of data leakage between customers.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
