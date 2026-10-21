
import React, { useRef } from 'react';
import { ArrowRight, Calendar, User, MapPin, Phone, School, Users, ClipboardList } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Enquire: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Replace the placeholders with your EmailJS service/template/public key
    emailjs.sendForm('service_xb6srr8', 'template_siji7pm', formRef.current, 'YSncJxj3J3xDzgjTn')
      .then(() => {
        alert('Enquiry submitted — thank you!');
        formRef.current?.reset();
      }, (error) => {
        console.error('EmailJS error:', error);
        alert('Failed to send enquiry. Please try again later.');
      });
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto animate-fade-in-up">
        {/* Header Block */}
        <div className="bg-[#1e3a8a] text-white p-10 rounded-t-[3rem] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                <ClipboardList size={36} />
              </div>
              <div>
                <h1 className="text-3xl font-black uppercase tracking-[0.2em]">Enquiry Form</h1>
                <p className="text-blue-100 font-bold opacity-80 uppercase text-xs tracking-widest mt-1">Admission Registration Portal</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <span className="inline-block px-4 py-1.5 bg-blue-500/30 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-400/30">
                Gayatri English Medium School
              </span>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <div className="bg-white p-8 md:p-20 rounded-b-[3rem] shadow-2xl border-x border-b border-slate-100">
         <form
  className="space-y-16"
  action="https://formsubmit.co/contact@gayatrischoolpune.com"
  method="POST"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="New Admission Enquiry" />
  <input type="hidden" name="_template" value="table" />

  {/* 🔥 ADD THIS LINE */}
  <input type="hidden" name="_next" value="https://gayatrischoolpune.com/thank-you" />


            {/* Section 1: Academic Context */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <Calendar size={20} className="text-blue-600" />
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-widest">Academic Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Academic Year <span className="text-rose-500">*</span></label>
                  <select name="academicYear" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700 transition-all appearance-none cursor-pointer">
                    <option>2027-2028</option>
                    <option>2028-2029</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Admission Class <span className="text-rose-500">*</span></label>
                  <select name="admissionClass" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700 transition-all appearance-none cursor-pointer">
                    <option>Select One</option>
                    <option>Playgroup</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                    <option>UKG</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i}>{i + 1}th Standard</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Student Identity */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <User size={20} className="text-blue-600" />
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-widest">Student Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name <span className="text-rose-500">*</span></label>
                  <input name="firstName" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="First Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Middle Name</label>
                  <input name="middleName" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="Middle Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name <span className="text-rose-500">*</span></label>
                  <input name="lastName" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="Last Name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Student DOB <span className="text-rose-500">*</span></label>
                  <input name="dob" type="date" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Gender <span className="text-rose-500">*</span></label>
                  <div className="flex gap-8 pt-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" value="male" name="gender" className="w-5 h-5 text-blue-600 cursor-pointer" />
                      <span className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Male</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input type="radio" value="female" name="gender" className="w-5 h-5 text-blue-600 cursor-pointer" />
                      <span className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Female</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Category <span className="text-rose-500">*</span></label>
                  <select name="category" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700">
                    <option>Select One</option>
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Address Block */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <MapPin size={20} className="text-blue-600" />
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-widest">Address Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Address Line 1</label>
                    <input name="address1" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="Flat, House No, Street" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Address Line 2</label>
                    <input name="address2" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="Area, Locality" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">City / Tahsil</label>
                    <input name="city" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="City" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">District</label>
                    <input name="district" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="District" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">State</label>
                    <input name="state" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="State" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Country</label>
                    <input name="country" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" defaultValue="India" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pincode</label>
                    <input name="pincode" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="Pincode" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Caste</label>
                    <input name="caste" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="Caste" />
                </div>
              </div>
            </div>

            {/* Section 4: Contact & Background */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                <Phone size={20} className="text-blue-600" />
                <h3 className="text-lg font-black text-slate-800 uppercase tracking-widest">Contact & Background</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mobile No. <span className="text-rose-500">*</span></label>
                  <input name="mobile" type="tel" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="10 Digit Mobile No" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">WhatsApp No.</label>
                  <input name="whatsapp" type="tel" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="WhatsApp Mobile No" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Previous School Name <span className="text-rose-500">*</span></label>
                  <input name="previousSchool" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="School Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Referred By</label>
                  <input name="referredBy" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-600 font-bold text-slate-700" placeholder="Name" />
                </div>
              </div>
              <div className="space-y-4 pt-4">
                <label className="text-[11px] font-black text-slate-600 uppercase tracking-widest ml-1">Whether Brother/Sister studying in the school?</label>
                <div className="flex gap-10">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" value="Yes" name="sibling" className="w-5 h-5 text-blue-600 cursor-pointer" />
                    <span className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Yes</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" value="No" name="sibling" className="w-5 h-5 text-blue-600 cursor-pointer" />
                    <span className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">No</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Block */}
            <div className="pt-16 text-center">
              <button 
                type="submit"
                className="bg-[#1e3a8a] text-white px-20 py-6 rounded-3xl font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4 mx-auto hover:bg-blue-800 hover:shadow-2xl transition-all transform hover:scale-[1.02] shadow-[0_20px_60px_rgba(30,58,138,0.2)]"
              >
                SUBMIT <ArrowRight size={20} />
              </button>
              <p className="mt-8 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                Fields marked with <span className="text-rose-500">*</span> are mandatory for processing your application.
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquire;
