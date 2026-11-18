import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link, useNavigate } = ReactRouterDOM as any;
import { 
  Check, 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  BookOpen, 
  Compass,
  CheckCircle2
} from 'lucide-react';
import { handleEmailClick } from '../constants';

const ThankYou: React.FC = () => {
  const navigate = useNavigate ? useNavigate() : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thank You for Reaching Out | Gayatri English Medium School, Moshi";
  }, []);

  return (
    <div className="bg-[#fffaf5] min-h-[85vh] flex items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-28 w-[30rem] h-[30rem] bg-blue-200/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full mx-auto relative z-10">
        
        {/* Main Success Container */}
        <div className="bg-white rounded-[2.25rem] shadow-[0_25px_70px_rgba(30,58,138,0.12)] border border-orange-100/80 overflow-hidden relative">
          
          {/* Top Brand Accent Bar */}
          <div className="h-2.5 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#1e3a8a]" />

          <div className="p-8 sm:p-12 text-center">

            {/* School Logo Mini Header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <img src="/Logo.png" alt="GEMS Logo" className="w-12 h-12 object-contain" />
              <div className="text-left">
                <p className="text-sm font-black text-[#1e3a8a] uppercase tracking-tight leading-tight">
                  Gayatri English Medium School
                </p>
                <p className="text-[10px] font-bold text-[#f97316] uppercase tracking-wider mt-0.5">
                  Moshi PCMC • CBSE Affiliation No. 1130818
                </p>
              </div>
            </div>

            {/* Success Checkmark Badge */}
            <div className="relative w-24 h-24 mx-auto mb-5 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-40" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-green-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 border-4 border-white">
                <Check size={38} strokeWidth={3} />
              </div>
            </div>

            {/* Pill Status */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Submission Successful
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
              Thank You for Reaching Out!
            </h1>

            {/* Description */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              Your enquiry has been received successfully for Gayatri English Medium School.
            </p>

            {/* Next Step Info Card (Same as approved popup) */}
            <div className="bg-[#fff9f2] border border-orange-100 rounded-2xl p-4 sm:p-5 text-left mb-6 space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f97316] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-sm">
                  📞
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm block leading-snug">
                    Our counsellor team will reach out within 24 hours
                  </span>
                  <span className="text-slate-500 text-[11px] mt-0.5 block">
                    We will connect with you to guide the next admission steps.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-orange-100">
                <div className="w-8 h-8 rounded-lg bg-[#1e3a8a] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-sm">
                  🏫
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 text-xs sm:text-sm block leading-snug">
                    Campus Visit Welcome
                  </span>
                  <span className="text-slate-500 text-[11px] mt-0.5 block">
                    Row House 05, NH60, Gandhar Nagari, Moshi, Pune
                  </span>
                </div>
              </div>
            </div>

            {/* Need Assistance Quick Links */}
            <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3.5 sm:p-4 mb-6 flex flex-wrap items-center justify-between gap-3 text-left">
              <div className="text-xs">
                <span className="font-bold text-[#1e3a8a] block">Need Immediate Assistance?</span>
                <span className="text-slate-500 text-[11px]">Direct helpline for admission queries</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:+919527764646"
                  className="inline-flex items-center gap-1.5 bg-white text-[#1e3a8a] hover:bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
                >
                  <Phone size={13} className="text-[#f97316]" />
                  Call Helpline
                </a>
                <a
                  href="mailto:contact@gayatrischoolpune.com"
                  onClick={handleEmailClick}
                  className="inline-flex items-center gap-1.5 bg-white text-[#1e3a8a] hover:bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-sm"
                >
                  <Mail size={13} className="text-[#f97316]" />
                  Email
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white py-3.5 px-6 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all transform hover:scale-[1.02] active:scale-95"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#1e3a8a] py-3.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
              >
                <BookOpen size={16} />
                Explore School
              </Link>
            </div>

          </div>

        </div>

        {/* Trust Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs font-bold">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            CBSE Affiliation: 1130818
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            Holistic Growth
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#1e3a8a]" />
            Admissions Open 2027–28
          </span>
        </div>

      </div>
    </div>
  );
};

export default ThankYou;
