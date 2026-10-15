import React, { useState } from 'react';
import { MessageSquareText, X } from 'lucide-react';

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbWU7PRitFynQcoTYlsDD64sX7Qyak-g7s3oPCHLVft8MRT1ijdXKKad6ZO0B5oamwfSLQ/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          standard: "Floating Contact Button",
          message
        }),
      }
    );

    alert("Submitted Successfully!");

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setIsOpen(false);

  } catch (error) {
  console.error("Submit error:", error);
  alert("Error submitting form");
}
};

  return (
    <>
      {/* Vertical Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center bg-[#ea580c] text-white py-4 px-2 rounded-l-xl shadow-2xl hover:bg-[#c2410c] transition-all duration-300 group cursor-pointer"
        style={{ writingMode: 'vertical-rl' }}
      >
        <div className="flex items-center gap-2 rotate-180">
          <span className="font-bold tracking-widest uppercase text-sm">
            Contact Us
          </span>
          <MessageSquareText
            size={20}
            className="rotate-90 group-hover:scale-110 transition-transform"
          />
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">

          <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 relative animate-in zoom-in-95 duration-300">

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-slate-300 hover:text-slate-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-8">
              Contact Form
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-6 py-4 bg-white border border-slate-100 rounded-full text-slate-700 placeholder-slate-400 focus:outline-none"
              />

              {/* Phone */}
              <div className="flex gap-0">

                <div className="relative">
                  <select className="h-full pl-6 pr-8 py-4 bg-white border border-slate-100 border-r-0 rounded-l-full text-slate-700 focus:outline-none appearance-none">
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
                  className="w-full px-4 py-4 bg-white border border-slate-100 rounded-r-full text-slate-700 placeholder-slate-400 focus:outline-none"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-6 py-4 bg-white border border-slate-100 rounded-full text-slate-700 placeholder-slate-400 focus:outline-none"
              />

              {/* Message */}
              <textarea
                placeholder="Hello, i need more details"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-6 py-5 bg-white border border-slate-100 rounded-[2rem] text-slate-700 placeholder-slate-400 focus:outline-none resize-none"
              ></textarea>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#1e3a8a] hover:bg-[#1a337a] text-white py-4 rounded-full font-bold text-lg transition-all shadow-lg"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContactButton;