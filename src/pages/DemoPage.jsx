import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, Sparkles, FileSpreadsheet, Lock } from 'lucide-react';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    industry: '',
    processDescription: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Book a demo | Kanta AI';
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider text-[#D83025] uppercase font-['Outfit']">
            Working Session
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Outfit']">
            Bring a real process <br />
            <span className="text-[#D83025]">to your demo.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-medium leading-relaxed pt-1 font-['Plus_Jakarta_Sans']">
            Tell us one process your team runs today. We'll show Kanta's AI designing it live, with your rules in place from the first screen.
          </p>
        </div>

        {/* Content Grid: Form on Left, "What to expect" on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Container */}
          <div className="lg:col-span-7 kanta-glass-card rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">
                  Thanks. We'll be in touch to schedule your session.
                </h3>
                <p className="text-sm text-slate-500 font-medium max-w-md mx-auto font-['Plus_Jakarta_Sans']">
                  We look forward to building your workflow live with your team. Check your inbox for confirmation details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      First name <span className="text-[#D83025]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-hidden focus:border-[#D83025] focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Last name <span className="text-[#D83025]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-hidden focus:border-[#D83025] focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Work email <span className="text-[#D83025]">*</span>
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    required
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="jane.doe@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-hidden focus:border-[#D83025] focus:ring-2 focus:ring-red-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Company <span className="text-[#D83025]">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Financial Group"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-hidden focus:border-[#D83025] focus:ring-2 focus:ring-red-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Industry <span className="text-[#D83025]">*</span>
                  </label>
                  <select
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-hidden focus:border-[#D83025] focus:ring-2 focus:ring-red-500/20"
                  >
                    <option value="" disabled>Select your industry</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Banking and finance">Banking and finance</option>
                    <option value="Government">Government</option>
                    <option value="Finance operations">Finance operations</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    The process you'd like to bring <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="processDescription"
                    rows={4}
                    value={formData.processDescription}
                    onChange={handleChange}
                    placeholder="e.g. Inward health insurance claims with approval rules above S$5,000, or invoice three-way matching..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-hidden focus:border-[#D83025] focus:ring-2 focus:ring-red-500/20"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#D83025] hover:bg-[#C0261D] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    Book a demo
                  </button>
                </div>

                <p className="text-xs text-slate-400 font-medium text-center pt-2">
                  We use your details only to arrange your demo. See our{' '}
                  <a href="#privacy" className="underline hover:text-[#D83025]">
                    privacy policy
                  </a>.
                </p>
              </form>
            )}
          </div>

          {/* Beside the form: "What to expect" */}
          <div className="lg:col-span-5 space-y-6">
            <div className="kanta-glass-card rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-4">
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D83025] flex items-center justify-center">
                  <Clock size={18} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-['Outfit']">
                  What to expect
                </h3>
              </div>
              
              <p className="text-sm text-slate-600 font-medium leading-relaxed font-['Plus_Jakarta_Sans']">
                <strong className="text-slate-900">About 40 minutes.</strong> We design one of your processes live in Kanta. Bring sample documents with personal details removed.
              </p>

              <div className="space-y-3 pt-2 text-xs text-slate-700 font-medium">
                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-orange-50/50 border border-orange-100">
                  <Sparkles size={16} className="text-[#D83025] shrink-0 mt-0.5" />
                  <span>Interactive walkthrough of Imagine AI building schema and logic live</span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-orange-50/50 border border-orange-100">
                  <Lock size={16} className="text-[#D83025] shrink-0 mt-0.5" />
                  <span>Review how business rules and role permissions remain enforced in data</span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-orange-50/50 border border-orange-100">
                  <FileSpreadsheet size={16} className="text-[#D83025] shrink-0 mt-0.5" />
                  <span>Test with your own sample documents or use our synthetic datasets</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-red-50/50 to-orange-50/50 border border-red-100 text-xs text-slate-600 font-medium leading-relaxed shadow-2xs">
              <span className="font-bold text-slate-900 block mb-1 font-['Outfit']">Deployment Readiness</span>
              Hosted on AWS in Singapore or deployable directly in your own AWS/Azure environment with your private models.
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
