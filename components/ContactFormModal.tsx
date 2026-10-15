
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [standard, setStandard] = useState("");
const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbwU7PRitFynQcoTYlsDD64sX7Qyak-g7s3oPCHLVft8MRT1ijdXKKad6ZQOB5oamwfSLQ/exec", {
      method: "POST",
      body: JSON.stringify({
        name,
        phone,
        email,
        standard,
        message
      }),
    });

    alert("Submitted Successfully!");
    onClose();

  } catch (error) {
    alert("Error submitting form");
    console.log(error);
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      {/* Modal Content */}
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 relative animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-300 hover:text-slate-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-8">Contact Form</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input
  type="text"
  placeholder="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  required
  className="w-full px-6 py-4 bg-white border border-slate-100 rounded-full text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
/>
          </div>

          {/* Phone */}
          <div className="flex gap-0">
            <div className="relative">
              <select className="h-full pl-6 pr-8 py-4 bg-white border border-slate-100 border-r-0 rounded-l-full text-slate-700 focus:outline-none appearance-none cursor-pointer">
                <option>🇮🇳</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <div className="border-l border-slate-200 h-4 ml-1"></div>
              </div>
            </div>
           <input
  type="tel"
  placeholder="+91*"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  required
  className="w-full px-4 py-4 bg-white border border-slate-100 rounded-r-full text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
/>
          </div>

          {/* Email */}
          <div>
            <input
  type="email"
  placeholder="Email*"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  className="w-full px-6 py-4 bg-white border border-slate-100 rounded-full text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
/>
          </div>

          {/* Standard / Class Dropdown */}
          <div className="relative">
            <select
  value={standard}
  onChange={(e) => setStandard(e.target.value)}
  required
  className="w-full px-6 pr-8 py-4 bg-white border border-slate-100 rounded-[2rem] text-slate-700 focus:outline-none appearance-none cursor-pointer"
>
              <option value="" disabled>Standard / Class</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="1st">1st Standard</option>
              <option value="2nd">2nd Standard</option>
              <option value="3rd">3rd Standard</option>
              <option value="4th">4th Standard</option>
              <option value="5th">5th Standard</option>
              <option value="6th">6th Standard</option>
              <option value="7th">7th Standard</option>
              <option value="8th">8th Standard</option>
              <option value="9th">9th Standard</option>
              <option value="10th">10th Standard</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>

          {/* Message */}
          <div>
            <textarea
  placeholder="Hello, i need more details"
  rows={4}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full px-6 py-5 bg-white border border-slate-100 rounded-[2rem] text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#1e3a8a] hover:bg-[#1a337a] text-white py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-200 transform hover:-translate-y-0.5 active:scale-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
