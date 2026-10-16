
import React, { useState } from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Book, 
  Monitor, 
  ArrowRight, 
  BookOpen, 
  Laptop, 
  Variable, 
  FlaskConical, 
  Smartphone, 
  ShieldCheck, 
  Trophy, 
  UserCheck, 
  Music, 
  Palette, 
  FileCheck,
  CheckCircle2,
  X,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import * as ReactRouterDOM from 'react-router-dom';
// Fix: Use namespace import to bypass named export resolution issues
const { Link } = ReactRouterDOM as any;

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const infrastructureItems = [
    { title: "Digital Classroom", icon: <Monitor className="w-12 h-12 text-orange-500" /> },
    { title: "Library & Reading Room", icon: <BookOpen className="w-12 h-12 text-orange-500" /> },
    { title: "Computer Lab (E-Learning)", icon: <Laptop className="w-12 h-12 text-orange-500" /> },
    { title: "Math's Lab", icon: <Variable className="w-12 h-12 text-orange-500" /> },
    { title: "Science Lab with Modern Equipment", icon: <FlaskConical className="w-12 h-12 text-orange-500" /> },
    { title: "Mobile Application for Parents", icon: <Smartphone className="w-12 h-12 text-orange-500" /> },
    { title: "Marshal Cadet Force", icon: <ShieldCheck className="w-12 h-12 text-orange-500" /> },
    { title: "Sports / Physical Education", icon: <Trophy className="w-12 h-12 text-orange-500" /> },
    { title: "Career Guidance / Counselling", icon: <UserCheck className="w-12 h-12 text-orange-500" /> },
    { title: "Music Sessions", icon: <Music className="w-12 h-12 text-orange-500" /> },
    { title: "Art & Craft Exhibitions", icon: <Palette className="w-12 h-12 text-orange-500" /> },
    { title: "School Portal for Homework", icon: <FileCheck className="w-12 h-12 text-orange-500" /> },
  ];

  const managementItems = [
    {
      name: "Hon'ble Sanjay Bhongale",
      role: "SVSPM Trust Secretary",
      image: "Sanjay.jpg",
      colorClass: "text-[#f97316]",
      location: "SVSPM Trust Office",
      bio: "Mr. Bhongale has been an integral part of the SVSPM Trust, leading various initiatives in educational development.",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
      name: "Hon'ble Kavita Kadu Patil",
      role: "Managing Director, SVSPM'S",
      image: "Kavita.jpg",
      colorClass: "text-[#f97316]",
      location: "GEMS Office",
      bio: "As the Director of GEMS, Hon'ble Kavita Aniket Kadu Patil has shown exemplary leadership in shaping the future of education.",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
      name: "Hon'ble Sarita Vikhe Patil",
      role: "Director, SVSPM'S",
      image: "Sarita.jpg",
      colorClass: "text-[#f97316]",
      location: "SVSPM's Gayatri Group of Schools",
      bio: "As the M Director of GEMS, Mrs. Sarita Vikhe Patil has shown exemplary leadership in shaping the future of education.",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
      name: "Hon'ble Anjali Bhagwat",
      role: "CEO, SVSPM'S",
      image: "Anjali.jpg",
      colorClass: "text-[#f97316]",
      location: "SVSPM's Gayatri Group of Schools",
      bio: "As the CEO of GEMS, Smt. Anjali Bhagwat has shown exemplary leadership in shaping the future of education.",
      socials: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" }
    },
  ];

  return (
    <div className="bg-[#fff9f2] min-h-screen overflow-hidden">
      {/* Page Header - Replaced Blue with Gold/Orange */}
      <section className="bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(at 0% 0%, hsla(30,100%,50%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(20,100%,50%,1) 0, transparent 50%)'
        }}></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-black mb-4 uppercase tracking-tighter">About GEMS</h1>
          <p className="text-orange-50 text-xl max-w-2xl mx-auto px-4 font-medium italic opacity-90">Cultivating curious minds and compassionate hearts since 2008.</p>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-[#fff9f2]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Overlapping Image Montage */}
            <div className="relative">
              <div className="absolute top-0 right-0 w-[45%] z-20 transform translate-x-6 -translate-y-8">
                <img 
                  src="Sports1.jpg" 
                  alt="Student Weightlifting" 
                  className="rounded-2xl shadow-2xl border-4 border-white object-cover aspect-square"
                />
              </div>

              <div className="relative z-10 w-[85%]">
                <img 
                  src="Sports2.jpg" 
                  alt="Students Outdoor Activity" 
                  className="rounded-3xl shadow-xl border-4 border-white object-cover aspect-[4/5]"
                />
              </div>

              <div className="absolute bottom-0 right-0 w-[55%] z-30 transform translate-y-12">
                <img 
                  src="Sports3.jpg" 
                  alt="Students playing board games" 
                  className="rounded-2xl shadow-2xl border-4 border-white object-cover aspect-square"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 bg-orange-100 text-[#f97316] rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                  About GEMS
                </span>
              </div>
              
              <h2 className="text-5xl font-black text-[#1e3a8a] mb-8 leading-tight">
                Learn About Our <br/> Specialties
              </h2>
              
              <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
                At GEMS, we shape the leaders of tomorrow by enriching their educational experience. We design our campus to foster academic and personal growth, providing well-equipped classrooms, labs, and extensive indoor and outdoor sports facilities. Recognized by CBSE, we offer classes for primary and secondary school, laying a strong foundation for lifelong learning.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-orange-50 text-[#f97316] rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[#1e3a8a] mb-2">Business-Focused Education</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">
                      We guide students to become future leaders by focusing on business knowledge and entrepreneurial skills.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 text-[#1e3a8a] rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                    <Book size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[#1e3a8a] mb-2">Personalized Learning</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">
                      Our experienced teachers offer tailored support, providing entrepreneurship books designed for each grade level.
                    </p>
                  </div>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-10 py-5 rounded-lg font-black text-xs uppercase tracking-[0.2em] flex items-center gap-3 transition-all transform hover:scale-[1.02] shadow-xl w-fit"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
{/* Why Choose GEMS Section */}
<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-8 lg:px-12">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left: Image */}
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-full opacity-50 blur-3xl animate-pulse"></div>

        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl animate-pulse"></div>

        <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-slate-50">
          <img
            src="President.png"
            alt="Founder"
            className="w-full h-auto object-cover rounded-[2rem]"
          />
          <div className="text-center pt-4 pb-2">
            <h3 className="text-xl font-black text-[#1e3a8a] tracking-tight">
              Hon. Mr. Vinayakrao Bhongale
            </h3>
            <p className="text-sm font-bold text-[#f97316] uppercase tracking-wider mt-1">
              Founder & Chairman
            </p>
          </div>
        </div>
      </div>

      {/* Right: Content */}
      <div>

        <div className="mb-5">
          <span className="inline-block px-5 py-2 bg-orange-100 text-[#f97316] rounded-full text-[11px] font-black uppercase tracking-[0.22em]">
            Founder & Chairman
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl xl:text-6xl font-black text-[#1e3a8a] mb-5 tracking-tight leading-[1.05]">
          Hon. Mr. Vinayakrao Bhongale
        </h2>

        <div className="flex items-center gap-3 text-slate-400 mb-8">
          <MapPin size={18} className="text-[#f97316]" />

          <span className="text-sm font-bold italic tracking-wide">
            SVSPM
          </span>
        </div>

        <p className="text-slate-600 text-lg leading-[2] font-medium mb-8">
          As a nation, we have a youth population with impeccable capabilities.
          This ever-enthusiastic force can lead our country to greater heights.
          Appropriate guidance is essential to empower young minds and cultivate
          new perspectives.
        </p>

        <p className="text-slate-600 text-lg leading-[2] font-medium mb-8">
          We aim to adopt educational methods that bring holistic change to
          students. We are bridging the gap between age-old cultural wisdom and
          modern scientific knowledge.
        </p>

        <p className="text-slate-600 text-lg leading-[2] font-medium">
          This unique blend fosters holistic development among students. Our aim
          is not only to create professionals but also to nurture visionary
          entrepreneurs.
        </p>

      </div>
    </div>
  </div>
</section>


      {/* Our Management Section */}
      <section className="py-16 bg-[#fff9f2]">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#1e3a8a] tracking-tight">Our Management</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementItems.map((member, idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="bg-white rounded-2xl p-4 shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-orange-100 mb-6 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                </div>
                <div className="text-left px-2">
                  <h3 className="text-xl font-black text-[#1e3a8a] mb-1 tracking-tight">{member.name}</h3>
                  <p className={`text-sm font-bold tracking-tight uppercase ${member.colorClass}`}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-[#1e3a8a]/40 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-slate-400 hover:text-[#f97316] transition-colors"
              >
                <X size={20} />
              </button>

              {/* Left: Image Section */}
              <div className="w-full md:w-[40%] bg-slate-50 p-10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] rounded-full border-[40px] border-[#1e3a8a]"></div>
                </div>
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full aspect-square object-cover rounded-3xl shadow-2xl relative z-10"
                />
              </div>

              {/* Right: Content Section */}
              <div className="w-full md:w-[60%] p-10 md:p-16 flex flex-col justify-center">
                <div className="mb-8">
                  <h2 className="text-4xl font-black text-[#1e3a8a] mb-2 tracking-tight leading-tight">
                    {selectedMember.name}
                  </h2>
                  <p className={`text-lg font-bold uppercase tracking-wider ${selectedMember.colorClass}`}>
                    {selectedMember.role}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-slate-400 mb-8">
                  <MapPin size={18} className="text-[#f97316]" />
                  <span className="text-sm font-bold italic">{selectedMember.location}</span>
                </div>

                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                  {selectedMember.bio}
                </p>

                <div className="flex items-center gap-4">
                  <a href={selectedMember.socials.facebook} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#1e3a8a] hover:text-white transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href={selectedMember.socials.twitter} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#1e3a8a] hover:text-white transition-all">
                    <Twitter size={20} />
                  </a>
                  <a href={selectedMember.socials.instagram} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#1e3a8a] hover:text-white transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href={selectedMember.socials.linkedin} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#1e3a8a] hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Facilities & Infrastructure Section */}
      <section className="py-16 bg-orange-50/20">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black text-[#1e3a8a] tracking-tight">Facilities & Infrastructure</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 border border-orange-50 group"
              >
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-slate-800 font-bold text-sm uppercase tracking-wider leading-relaxed">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
 </div>
  );
};
export default About;
