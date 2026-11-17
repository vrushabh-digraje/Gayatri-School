import React from 'react';
import { X, Check } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';
const { useNavigate } = ReactRouterDOM as any;

interface SubmissionSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmissionSuccessModal: React.FC<SubmissionSuccessModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate ? useNavigate() : null;

  if (!isOpen) return null;

  const handleExplore = () => {
    onClose();
    if (navigate) {
      navigate('/about');
    } else {
      window.location.href = '/about';
    }
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div 
        className="relative z-10 w-full max-w-lg bg-white rounded-[2.25rem] shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-orange-100/80 overflow-hidden animate-in zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Brand Accent Bar */}
        <div className="h-2.5 bg-gradient-to-r from-[#1e3a8a] via-[#f97316] to-[#1e3a8a]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-700 flex items-center justify-center text-lg font-bold transition-all shadow-sm cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="p-8 sm:p-10 text-center">
          
          {/* School Logo Mini Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/Logo.png" alt="GEMS Logo" className="w-10 h-10 object-contain" />
            <div className="text-left">
              <p className="text-xs font-black text-[#1e3a8a] uppercase tracking-tight leading-none">
                Gayatri English Medium School
              </p>
              <p className="text-[9px] font-bold text-[#f97316] uppercase tracking-wider mt-0.5">
                Moshi PCMC • CBSE 1130818
              </p>
            </div>
          </div>

          {/* Success Checkmark Badge */}
          <div className="relative w-20 h-20 mx-auto mb-5 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-40" />
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-green-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 border-4 border-white">
              <Check size={32} strokeWidth={3} />
            </div>
          </div>

          {/* Pill Status */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Submission Successful
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-2">
            Thank You for Reaching Out!
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
            Your enquiry has been received successfully for Gayatri English Medium School.
          </p>

          {/* Next Step Info Card */}
          <div className="bg-[#fff9f2] border border-orange-100 rounded-2xl p-4 text-left mb-6 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#f97316] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-sm">
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
            <div className="flex items-start gap-3 pt-2.5 border-t border-orange-100">
              <div className="w-7 h-7 rounded-lg bg-[#1e3a8a] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-sm">
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              type="button"
              className="flex-1 bg-[#f97316] hover:bg-[#ea580c] text-white py-3.5 px-6 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              OK
            </button>
            <button
              onClick={handleExplore}
              type="button"
              className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#1e3a8a] py-3.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Explore School
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SubmissionSuccessModal;
