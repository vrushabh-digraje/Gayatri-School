
import React, { useState } from 'react';
import { ClipboardList, UserCheck, CreditCard, CheckCircle2, ArrowRight, Star, Loader2 } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM as any;

const Admissions: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="bg-[#fffaf2] min-h-screen">
      {/* Hero Section */}
      <section className="bg-orange-50/30 py-32 px-4 text-center overflow-hidden">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-orange-100 text-[#1e3a8a] rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-sm">
              Hello!
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-[#1e3a8a] to-[#f97316] bg-clip-text text-transparent">
              Admissions Open for <br className="hidden md:block" /> 2026-2027
            </span>
          </h1>

          <p className="text-slate-500 text-xl md:text-2xl font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
            Providing Quality Education, Shaping Tomorrow’s <br className="hidden md:block" /> Leaders.
          </p>

          <div className="flex justify-center">
            <a 
  href="https://gemscbse.prisms.in/onlineenquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#1e3a8a] text-white px-10 py-5 rounded-lg font-black text-sm uppercase tracking-widest flex items-center gap-3 transition-all transform hover:scale-[1.05] shadow-xl"
>
  Enquire Now <ArrowRight size={18} />
</a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24">
            <span className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">The Journey Begins</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Simple Admission Process</h2>
            <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {[
              { id: 1, title: "Registration", desc: "Obtain and submit the registration form from the school office or website." },
              { id: 2, title: "Interaction", desc: "Interaction assessment of the child and meeting with parents." },
              { id: 3, title: "Document Check", desc: "Submission of mandatory documents and verification." },
              { id: 4, title: "Confirmation", desc: "Payment of fees and final enrollment confirmation." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 text-center group">
                <div className="w-24 h-24 bg-white border-2 border-indigo-100 text-indigo-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl text-3xl font-black group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  {step.id}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
            
            {/* Connector Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-indigo-50 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Eligibility */}
          <div className="bg-white p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100">
            <h3 className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center">
                <ClipboardList size={24} />
              </div>
              Age Criteria
            </h3>
            <div className="space-y-6">
              {[
                { label: "Playgroup", val: "2.5 Years+" },
                { label: "Nursery", val: "3 Years+" },
                { label: "L.K.G", val: "4 Years+" },
                { label: "U.K.G", val: "5 Years+" },
                { label: "Grade 1", val: "6 Years+" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-50 pb-4">
                  <span className="font-bold text-slate-700 text-lg">{item.label}</span>
                  <span className="text-slate-400 font-black uppercase text-xs tracking-widest bg-slate-50 px-4 py-2 rounded-lg">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Required Docs */}
          <div className="bg-white p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100">
            <h3 className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>
              Required Documents
            </h3>
            <ul className="space-y-6">
              {[
                "Original Birth Certificate",
                "Aadhar Card Copy of Child & Parents",
                "4 Passport Size Photographs",
                "Previous School's Leaving Certificate (TC)",
                "Report Card of the last attended class"
              ].map((doc, idx) => (
                <li key={idx} className="flex items-center gap-5 text-slate-600 font-medium text-lg">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Form Section - RE-ADDED AS REQUESTED */}
      <section id="quick-enquiry" className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Person Image with Background Circle */}
          <div className="relative flex justify-center items-center">
             {/* Large Soft Blue Circle Backdrop */}
             <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#dbeafe] rounded-full -z-10 opacity-60 animate-pulse"></div>
             
             <div className="relative z-10 w-full max-w-lg">
                <img 
                  src="/BhongaleSirAdmission.png" 
                  alt="Hon. Mr. Vinayakrao Bhongale" 
                  className="w-full h-auto object-cover rounded-3xl"
                  style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                />
             </div>
          </div>

          {/* Right Side: Professional Form */}
          <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.06)] border border-slate-50 relative">
            <div className="mb-10">
              {/* Scrolling Affiliation Bar */}
              <div className="w-full overflow-hidden whitespace-nowrap mb-2 max-w-xs">
                <div className="animate-marquee inline-block">
                  <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em] mr-12">Affiliation: 1130818</span>
                  <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em]">Code: 30740</span>
                </div>
              </div>

              <span className="inline-block px-4 py-1.5 bg-[#e0e7ff] text-[#4338ca] rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                Education for Everyone
              </span>
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Contact Us for Inquiries</h2>
              
            </div>

            <form className="space-y-8">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                <input type="text" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-indigo-600 font-medium transition-colors" placeholder="Full Name" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                  <input type="email" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-indigo-600 font-medium transition-colors" placeholder="Email Address" />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                  <input type="tel" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-indigo-600 font-medium transition-colors" placeholder="Phone Number" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Select Standard</label>
                <select className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-indigo-600 font-medium transition-colors bg-transparent appearance-none cursor-pointer">
                  <option value="">Choose Standard</option>
                  <option value="playgroup">Playgroup</option>
                  <option value="nursery">Nursery</option>
                  <option value="lkg">LKG</option>
                  <option value="ukg">UKG</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i + 1}>{i + 1}th Standard</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Your Subject</label>
                <input type="text" className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-indigo-600 font-medium transition-colors" placeholder="Subject" />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea rows={3} className="w-full border-b border-slate-200 py-3 focus:outline-none focus:border-indigo-600 font-medium transition-colors resize-none" placeholder="Message"></textarea>
              </div>

              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-[#4d69e7] to-[#a855f7] text-white py-5 rounded-lg font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-2xl transition-all transform hover:scale-[1.01]">
                  Get It Now <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
