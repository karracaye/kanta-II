import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles } from 'lucide-react';

export default function AIChatWidget() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'user',
      text: "What's my current order status?",
      timestamp: '10:42 AM',
    },
    {
      id: 2,
      sender: 'bot',
      type: 'order_status',
      orderId: '#2024-554',
      status: 'in transit',
      expectedDelivery: 'Feb 18, 2026',
      carrier: 'FedEx',
      timestamp: '10:42 AM',
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef(null);

  // Scroll ONLY internal chat box container without affecting window page scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim() || isTyping) return;

    const userQuery = inputText.trim();
    setInputText('');

    const newUserMsg = {
      id: Date.now(),
      sender: 'user',
      text: userQuery,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        type: 'text',
        text: `Processed "${userQuery}". All metrics updated in real-time.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      if (userQuery.toLowerCase().includes('invoice') || userQuery.toLowerCase().includes('q3')) {
        botResponse.text = "Q3 Invoice #8849: $42,500 total, Status: Approved & Synced.";
      } else if (userQuery.toLowerCase().includes('analytics')) {
        botResponse.text = "Analytics loaded: Customer retention up +18.4% this month!";
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden font-sans">
      {/* Top Header Bar */}
      <div className="bg-[#0F172A] text-white px-3.5 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/assets/logo/Iconic-Color@2x.png"
            alt="Kanta Icon"
            className="w-5 h-5 object-contain"
          />
          <div>
            <h3 className="text-[11px] font-bold tracking-tight text-white leading-tight">
              AI Support Assistant
            </h3>
            <p className="text-[9px] text-slate-400">Powered by Kanta AI</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full text-[9px] font-medium text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Online</span>
        </div>
      </div>

      {/* Internal Chat Messages Container (Container Scroll Only) */}
      <div ref={containerRef} className="p-2.5 h-[110px] overflow-y-auto space-y-1.5 bg-slate-50/60 text-[10px]">
        {messages.map((msg) => (
          <div key={msg.id} className="space-y-1">
            {msg.sender === 'user' ? (
              <div className="flex justify-end">
                <div className="bg-[#B92025] text-white font-medium px-3.5 py-2 rounded-2xl rounded-tr-xs max-w-[85%] shadow-sm">
                  {msg.text}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-1 items-start">
                {msg.type === 'order_status' ? (
                  <div className="bg-white border border-slate-200 rounded-xl p-3 max-w-[95%] shadow-sm w-full space-y-2 text-left">
                    <p className="text-slate-700 text-[11px]">
                      Your order <strong className="text-slate-900 font-semibold">{msg.orderId}</strong> is currently{' '}
                      <span className="text-emerald-600 font-semibold underline underline-offset-2">
                        {msg.status}
                      </span>
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-[10px] bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div>
                        <span className="text-slate-400 block">Expected delivery</span>
                        <span className="text-slate-800 font-semibold">{msg.expectedDelivery}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block">Carrier</span>
                        <span className="text-slate-800 font-semibold">{msg.carrier}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white border border-slate-200/90 text-slate-800 font-medium px-3.5 py-2.5 rounded-2xl rounded-tl-xs max-w-[90%] shadow-sm flex items-start gap-2 text-left">
                    <Sparkles size={14} className="text-[#B92025] shrink-0 mt-0.5" />
                    <span>{msg.text}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Live typing status indicator */}
        {isTyping && (
          <div className="flex items-center gap-2 text-[10px] text-slate-400 italic py-1 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#B92025] animate-ping"></span>
            <span>AI is generating a response...</span>
          </div>
        )}
      </div>

      {/* Input Form Bar */}
      <form onSubmit={handleSend} className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask about your orders, invoices, analytics..."
          className="flex-1 bg-slate-100 hover:bg-slate-100/80 focus:bg-white text-xs px-3.5 py-2 rounded-full border border-transparent focus:border-[#B92025] focus:ring-1 focus:ring-red-500/20 outline-none text-slate-800 placeholder-slate-400 transition-all"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="w-8 h-8 rounded-full bg-[#B92025] hover:bg-[#9B191D] disabled:opacity-40 text-white flex items-center justify-center transition-all duration-200 shadow-md shadow-red-900/15 shrink-0 active:scale-90 cursor-pointer"
        >
          <Send size={13} className="transform translate-x-[0.5px]" />
        </button>
      </form>
    </div>
  );
}
