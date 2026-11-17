import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link, useNavigate } = ReactRouterDOM as any;
import { 
  Check, 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Award, 
  Compass, 
  BookOpen, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { handleEmailClick } from '../constants';

const ThankYou: React.FC = () => {
  const navigate = useNavigate ? useNavigate() : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thank You for Reaching Out | Gayatri English Medium School, Moshi";
  }, []);

  return (
    <div className="bg-[#fffaf5] min-h-screen flex flex-col relative overflow-hidden py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-28 w-96 h-96 bg-orange-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-28 w-[30rem] h-[30rem] bg-blue-200/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto relative z-10">
        
        {/* Main Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_25px_70px_rgba(30,58,138,0.08)] border border-orange-100/80 overflow-hidden relative">
          
          {/* Top Brand Accent Bar */}
          <div className="h-3 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#1e3a8a]" />

          <div className="p-8 sm:p-14 text-center">

            {/* School Logo Mini Header */}
            <div className="inline-flex items-center justify-center gap-3.5 mb-6 px-4 py-2 rounded-2xl bg-orange-50/60 border border-orange-100/70 shadow-sm">
              <img src="/Logo.png" alt="Gayatri English Medium School" className="w-11 h-11 object-contain" />
              <div className="text-left">
                <span className="text-xs sm:text-sm font-black text-[#1e3a8a] uppercase tracking-tight block leading-tight">
                  Gayatri English Medium School
                </span>
                <span className="text-[10px] font-bold text-[#f97316] uppercase tracking-wider block mt-0.5">
                  Moshi, PCMC • CBSE Affiliation No. 1130818
                </span>
              </div>
            </div>

            {/* Glowing Success Badge */}
            <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-35" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 to-green-500 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 border-4 border-white">
                <Check size={40} strokeWidth={3} />
              </div>
            </div>

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Enquiry Successfully Submitted
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Thank You for <span className="bg-gradient-to-r from-[#1e3a8a] to-[#f97316] bg-clip-text text-transparent">Reaching Out!</span>
            </h1>

            {/* Subheading */}
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
              We have received your enquiry for <strong className="text-[#1e3a8a]">Gayatri English Medium School</strong>. Our admissions and counselling team will review your details and connect with you shortly.
            </p>

            {/* 3 Steps Process Timeline Grid */}
            <div className="mb-10 text-left">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                  What Happens Next?
                </h3>
                <span className="text-[11px] font-bold text-[#f97316] uppercase tracking-wider">
                  3 Simple Steps
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Step 1 */}
                <div className="bg-[#fffaf5] border border-orange-100/90 rounded-2xl p-5 hover:shadow-md transition-shadow relative">
                  <div className="w-9 h-9 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center font-black text-sm mb-3 shadow-sm">
                    1
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
                    Inquiry Review
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Our admissions desk evaluates seat availability and standard-wise guidelines.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-[#fffaf5] border border-orange-100/90 rounded-2xl p-5 hover:shadow-md transition-shadow relative">
                  <div className="w-9 h-9 rounded-xl bg-[#f97316] text-white flex items-center justify-center font-black text-sm mb-3 shadow-sm">
                    2
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
                    Counsellor Call
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Our counsellor team will reach out within 24 hours to guide you on the admission procedure.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-[#fffaf5] border border-orange-100/90 rounded-2xl p-5 hover:shadow-md transition-shadow relative">
                  <div className="w-9 h-9 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center font-black text-sm mb-3 shadow-sm">
                    3
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
                    Campus Visit
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Experience our modern classrooms, labs, sports facilities, and school environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Immediate Assistance Box */}
            <div className="bg-gradient-to-r from-blue-50/90 to-orange-50/70 border border-blue-100/80 rounded-2xl p-5 sm:p-6 mb-10 text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center text-lg shrink-0 shadow-md">
                  📞
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#1e3a8a] uppercase tracking-wide">
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Speak directly with our Moshi campus admissions counsellor.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <a 
                  href="tel:+919527764646"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#1e3a8a] border border-blue-200 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-sm"
                >
                  <Phone size={14} className="text-[#f97316]" />
                  +91 95277 64646
                </a>
                <a 
                  href="mailto:contact@gayatrischoolpune.com"
                  onClick={handleEmailClick}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#1e3a8a] border border-blue-200 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-sm"
                >
                  <Mail size={14} className="text-[#f97316]" />
                  Email Admissions
                </a>
              </div>
            </div>

            {/* Campus Address Snippet */}
            <div className="bg-[#fff9f2] border border-orange-100 rounded-2xl p-4 text-left mb-10 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#f97316] text-white flex items-center justify-center text-sm font-black shrink-0 mt-0.5 shadow-sm">
                <MapPin size={16} />
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 block text-xs sm:text-sm">
                  Campus Location & Visiting Hours
                </span>
                <span className="text-slate-600 mt-0.5 block leading-relaxed">
                  Row House 05, NH60, Gandhar Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070
                  <br />
                  <span className="text-slate-500 font-semibold">Office Hours: Monday – Saturday: 8:00 AM – 4:00 PM</span>
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-orange-500/25 transition-all transform hover:scale-[1.02] active:scale-95"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Link>

              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#1e3a8a] border-2 border-[#1e3a8a] px-8 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all transform hover:scale-[1.02] shadow-sm"
              >
                <BookOpen size={16} />
                Explore School
              </Link>

              <Link
                to="/gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all"
              >
                <Compass size={16} />
                Campus Gallery
              </Link>
            </div>

          </div>

        </div>

        {/* Trust Badges Underneath */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-500 text-xs font-bold">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            CBSE Curriculum Excellence (1130818)
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            Holistic Student Growth
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1e3a8a]" />
            Admissions Open 2027–28
          </span>
        </div>

      </div>
    </div>
  );
};

export default ThankYou;
