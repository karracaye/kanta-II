import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, ArrowRight, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function BlogPostPage() {
  useEffect(() => {
    document.title = 'We asked AI to build a claims app | Kanta AI';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-28 pb-20 bg-white min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link */}
        <div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#D83025] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Insights</span>
          </Link>
        </div>

        {/* Post Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <Calendar size={14} className="text-[#D83025]" />
            <span>October 2026</span>
            <span>•</span>
            <span className="text-[#D83025] uppercase font-bold text-[11px]">Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-['Outfit']">
            We asked AI to build a claims app. <br />
            <span className="text-[#D83025]">It stopped and asked for permission.</span>
          </h1>
        </header>

        {/* The Brief Section */}
        <section className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-['Plus_Jakarta_Sans'] font-medium">
          <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
            The brief
          </h2>
          <p>
            AI can now build a working business app from a few sentences. For a bank, an insurer or a government agency, that raises an awkward question: who checks what the AI decided along the way?
          </p>
          <p>
            We put that question to our own platform in October 2026. We gave Kanta's AI app builder, Imagine, a four-sentence brief:
          </p>

          <blockquote className="my-6 border-l-4 border-[#D83025] bg-red-50/50 p-5 rounded-r-2xl italic text-sm sm:text-base text-slate-900 leading-relaxed">
            "Build a claims intake tracker where staff log the policy number, claimant, amount and incident date. Claims over 5,000 Singapore dollars need a supervisor's approval. Statuses run Submitted, Under review, Approved, Rejected. Use fictional sample data only."
          </blockquote>

          <p>
            Then we watched what it did.
          </p>
        </section>

        {/* What the AI Did Section */}
        <section className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-8 font-['Plus_Jakarta_Sans'] font-medium">
          <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
            What the AI did
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <h3 className="font-bold text-base text-slate-900 font-['Outfit']">
                It asked before it built.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                After reading the empty project, Imagine asked one question: who may approve a claim under S$5,000? It recommended that supervisors approve everything, enforced in the data so that no staff member could approve anything.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <h3 className="font-bold text-base text-slate-900 font-['Outfit']">
                It wrote down the rules that must always hold.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Its plan listed the screens and the data, plus a short set of rules: the S$5,000 threshold applies on the server, every claim starts as Submitted, and every status change records who decided and when.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <h3 className="font-bold text-base text-slate-900 font-['Outfit']">
                It built, then checked its own work.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Imagine created the claims table with fictional data, the intake workflow and three screens. It validated the wiring, repaired six warnings, and fixed two problems its final check found.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/50 border-2 border-red-200 space-y-1.5">
              <h3 className="font-bold text-base text-[#D83025] font-['Outfit']">
                Then it stopped.
              </h3>
              <p className="text-xs sm:text-sm text-slate-800">
                Before finishing, it raised a plain-language note for the app's owner: the intake workflow saves new claims with the system's own permissions, outside the table's normal rules. Only the owner could allow that. We read it, saw why it was there (staff must be able to log claims even though only supervisors can change them), and allowed it.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Matters for Regulated Teams Section */}
        <section className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-8 font-['Plus_Jakarta_Sans'] font-medium">
          <h2 className="text-2xl font-bold text-slate-900 font-['Outfit']">
            Why it matters for regulated teams
          </h2>

          <p>
            Most talk about AI governance is about reviewing what AI produced after the fact. This build showed a different pattern: governance built into how the AI works.
          </p>

          <ul className="space-y-4 pt-2">
            <li className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-7 h-7 rounded-xl bg-red-50 text-[#D83025] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={16} />
              </div>
              <div className="text-sm">
                <strong className="text-slate-900 block font-['Outfit']">Ask the questions a risk team would ask.</strong>
                <span className="text-slate-500 font-normal">Decision rights came up before a single screen existed.</span>
              </div>
            </li>

            <li className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-7 h-7 rounded-xl bg-red-50 text-[#D83025] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={16} />
              </div>
              <div className="text-sm">
                <strong className="text-slate-900 block font-['Outfit']">Put rules where they can't be bypassed.</strong>
                <span className="text-slate-500 font-normal">On the server and in the data, not in the browser.</span>
              </div>
            </li>

            <li className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-7 h-7 rounded-xl bg-red-50 text-[#D83025] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={16} />
              </div>
              <div className="text-sm">
                <strong className="text-slate-900 block font-['Outfit']">Keep a person in charge of access.</strong>
                <span className="text-slate-500 font-normal">The AI could build everything except the decision about who may change data.</span>
              </div>
            </li>
          </ul>

          <p className="pt-2">
            That is what we mean by AI that plays by your rules. If you run a process with documents, approvals and auditors, bring one to a working session and watch Kanta design it with your rules in place from the first screen.
          </p>
        </section>

        {/* End of Post CTA Button per brief */}
        <div className="pt-8 border-t border-slate-100 text-center space-y-4">
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#D83025] hover:bg-[#C0261D] text-white font-bold text-sm sm:text-base transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Book a demo</span>
            <ArrowRight size={18} />
          </Link>
        </div>

      </article>
    </main>
  );
}
