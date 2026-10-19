
import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
// Fix: Use namespace import to bypass named export resolution issues
const { Link } = ReactRouterDOM as any;
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Headphones, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;
  const name = (form[0] as HTMLInputElement).value;
  const email = (form[1] as HTMLInputElement).value;
  const phone = (form[2] as HTMLInputElement).value;
  const standard = (form[3] as HTMLSelectElement).value;
  const message = (form[4] as HTMLTextAreaElement).value;

  const text = `New Admission Inquiry:%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
Class: ${standard}%0A
Message: ${message}`;

  const whatsappURL = `https://wa.me/919527764646?text=${text}`;

  window.open(whatsappURL, "_blank");

  setIsSubmitted(true);
};

  return (
    <div className="bg-[#fffaf2] min-h-screen">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-orange-100 text-[#f97316] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-fade-in-up">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight animate-fade-in-up stagger-delay-1">
            Get in Touch with GEMS
          </h1>
          <p className="text-slate-600 text-2xl font-black animate-fade-in-up stagger-delay-2">
            We'd Love to Hear from You!
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="pb-24 px-4 md:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Phone Card */}
            <div className="bg-white p-12 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-orange-50 hover:shadow-xl transition-all duration-500 animate-fade-in-up stagger-delay-1 group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 shadow-sm">
  <Phone size={24} />
</div>
              <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Contact Phone Number</h3>
              <p className="text-[#1e3a8a] font-bold text-lg">+91 95277 64646</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-12 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-orange-50 hover:shadow-xl transition-all duration-500 animate-fade-in-up stagger-delay-2 group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600 shadow-sm">
  <Mail size={24} />
</div>
              <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Our Email Address</h3>
              <p className="text-[#1e3a8a] font-bold text-lg">contact@gayatrischoolpune.com</p>
            </div>

            {/* Location Card */}
            <div className="bg-white p-12 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-orange-50 hover:shadow-xl transition-all duration-500 animate-fade-in-up stagger-delay-3 group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 text-green-600 shadow-sm">
  <MapPin size={24} />
</div>
              <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Our Location</h3>
              <p className="text-[#1e3a8a] font-bold text-lg leading-relaxed">
  Row House 05, NH60, Gandhar Nagari,<br/>
  Sector No. 5, Moshi,<br/>
  Pimpri-Chinchwad, Maharashtra 411070
</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 px-4 bg-orange-50/20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center items-center">
             <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-orange-100 rounded-full -z-10 opacity-60 animate-pulse"></div>
             <div className="relative z-10 w-full max-w-lg">
                <img 
                  src="/BhongaleSir7.jpeg" 
                  alt="Contact Person" 
                  className="w-full h-auto object-cover rounded-3xl"
                  style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                />
             </div>
          </div>

          <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.06)] border border-orange-50 relative min-h-[600px] flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center animate-scale-in">
                <div className="w-20 h-20 bg-orange-50 text-[#f97316] rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Message Sent!</h2>
                <p className="text-slate-500 font-medium mb-10">
                  Your message has been received by our helpdesk. We will get back to you within 24 hours.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="text-[#f97316] font-bold uppercase tracking-widest text-xs hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#1e3a8a] rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                    Education for Everyone
                  </span>
                  <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Contact Us for Inquiries</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                    <input type="text" required className="w-full border-b border-orange-200 py-3 focus:outline-none focus:border-[#f97316] font-medium transition-colors bg-transparent" placeholder="Full Name" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                      <input type="email" required className="w-full border-b border-orange-200 py-3 focus:outline-none focus:border-[#f97316] font-medium transition-colors bg-transparent" placeholder="Email Address" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                      <input type="tel" required className="w-full border-b border-orange-200 py-3 focus:outline-none focus:border-[#f97316] font-medium transition-colors bg-transparent" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Standard / Class</label>
                    <select required defaultValue="" className="w-full border-b border-orange-200 py-3 focus:outline-none focus:border-[#f97316] font-medium transition-colors bg-transparent appearance-none cursor-pointer">
                      <option value="" disabled>Select Standard / Class</option>
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
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea rows={3} required className="w-full border-b border-orange-200 py-3 focus:outline-none focus:border-[#f97316] font-medium transition-colors resize-none bg-transparent" placeholder="Message"></textarea>
                  </div>
                  <div className="pt-4">
                    <button 
                      disabled={isSending}
                      className="w-full bg-[#f97316] text-white py-5 rounded-lg font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-2xl transition-all transform hover:scale-[1.01] disabled:opacity-70"
                    >
                      {isSending ? <>SENDING... <Loader2 className="animate-spin" size={18} /></> : <>SUBMIT MESSAGE <ArrowRight size={18} /></>}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-12 px-4 md:px-8 lg:px-24 bg-[#fffaf2]">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[450px] md:h-[520px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-orange-100 relative">
            <iframe
              title="Gayatri English Medium School Moshi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2033626298586!2d73.8447814!3d18.6661448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7f465d6a2f7%3A0xe54e26eb2a853612!2sGayatri%20English%20Medium%20School!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
