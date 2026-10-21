
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Target, Zap, Cpu, Microscope, BookMarked, Users, Award, ShieldCheck, MapPin } from 'lucide-react';

const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const Secondary: React.FC = () => {
  const mainRef = useScrollReveal();
  const featuresRef = useScrollReveal();
  const mapRef = useScrollReveal();
  const ctaRef = useScrollReveal();

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Dynamic Header Section */}
      <section className="pt-40 pb-20 px-4 text-center relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] animate-pulse opacity-60"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] animate-pulse opacity-60" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-6 py-2 bg-indigo-100 text-indigo-700 rounded-full text-[11px] font-black uppercase tracking-[0.3em] mb-10 animate-fade-in-up">
            Secondary
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none animate-fade-in-up stagger-delay-1">
            Nurturing <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Future Leaders</span>
          </h1>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto animate-fade-in-up stagger-delay-2">
            Preparing students for global challenges through academic rigor, critical thinking, and character building.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={mainRef.ref} className="py-24 px-4 md:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: Image with Creative Framing */}
          <div className={`relative ${mainRef.isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-10 bg-indigo-600/5 rounded-full -z-10 animate-scale-in"></div>
              
              <img 
                src="/Pract4.jpg" 
                alt="Secondary Students" 
                className="rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover border-8 border-white transition-all duration-700 group-hover:scale-[1.02]"
              />

              <div className="absolute -bottom-10 -right-6 bg-white p-10 rounded-[2.5rem] shadow-2xl animate-float hidden xl:block border border-slate-100">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-black text-indigo-600 mb-1">100%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Board Results</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Block */}
          <div className={`lg:pl-12 ${mainRef.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
             <div className="relative mb-12">
               <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-2xl mb-10 transform rotate-12 animate-float">
                  <GraduationCap size={44} />
               </div>
               <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tight">About Us</h2>
               <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12">
                At GEMS, our Secondary program (Grades 6-10/12) focuses on developing deep conceptual understanding 
                and analytical skills. We provide a stimulating environment where adolescents are encouraged to explore 
                their interests and take ownership of their learning journey. 
                <br /><br />
                Our curriculum aligns with CBSE standards, enriched with modern pedagogical approaches that bridge 
                the gap between classroom theories and real-world applications. We believe in empowering every 
                student to become a resilient, responsible, and ethical citizen.
               </p>

               <div className="relative inline-block">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-4 bg-indigo-600 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500 hover:bg-indigo-700 hover:shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:translate-y-[-2px]"
                >
                  Contact Us <ArrowRight size={20} />
                </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Advanced Learning Pillars */}
      <section ref={featuresRef.ref} className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className={`text-center mb-24 ${featuresRef.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Preparation for Life</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Advanced Curriculum Pillars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                title: "STEM Excellence", 
                icon: <Cpu />, 
                color: "text-blue-600", 
                desc: "Integrated approach to Science, Technology, Engineering, and Math with high-tech labs." 
              },
              { 
                title: "Career Pathway", 
                icon: <Target />, 
                color: "text-rose-600", 
                desc: "Dedicated counseling to help students identify and pursue their future career goals." 
              },
              { 
                title: "Critical Research", 
                icon: <Microscope />, 
                color: "text-emerald-600", 
                desc: "Encouraging a spirit of inquiry through project-based learning and scientific discovery." 
              },
              { 
                title: "Social Leadership", 
                icon: <Users />, 
                color: "text-amber-600", 
                desc: "Developing empathy and leadership through community service and peer mentorship." 
              },
              { 
                title: "Digital Literacies", 
                icon: <Zap />, 
                color: "text-purple-600", 
                desc: "Mastering the digital tools necessary for the 21st-century workforce and global connectivity." 
              },
              { 
                title: "Value Synthesis", 
                icon: <ShieldCheck />, 
                color: "text-indigo-600", 
                desc: "Integrating strong ethical foundations into complex decision-making scenarios." 
              }
            ].map((pillar, i) => (
              <div 
                key={i} 
                className={`bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 group border border-slate-100 ${featuresRef.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 ${pillar.color}`}>
                  {React.cloneElement(pillar.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section ref={mapRef.ref} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-5 gap-16 items-center ${mapRef.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="lg:col-span-2">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                <MapPin size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Locate Our Secondary Campus</h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Visit us to experience our state-of-the-art labs and academic facilities firsthand. We are conveniently located in the heart of Moshi, Pimpri-Chinchwad.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-700 font-bold">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span>Central Accessibility</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700 font-bold">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span>Safe Learning Zone</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700 font-bold">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span>Visitor Parking Available</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-slate-100 relative">

  {/* Optional: Open in Maps Button */}
  <a
    href="https://www.google.com/maps?q=Gayatri+English+Medium+School+Moshi"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
  >
    Open in Maps
  </a>

  {/* Google Map */}
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2655924670125!2d73.85009219999999!3d18.6520741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7f1c66e20df%3A0x76b172ee85cf9271!2sGayatri%20Group%20of%20School%2C%20Pune%20(Gayatri%20English%20Medium%20School%20%2C%20Moshi)!5e0!3m2!1sen!2sin!4v1776940946075!5m2!1sen!2sin"
    className="w-full h-full border-0 grayscale hover:grayscale-0 transition duration-500"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen
    title="School Location Map"
  ></iframe>

</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef.ref} className="py-32 px-4">
        <div className={`max-w-6xl mx-auto bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden ${ctaRef.isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tight leading-none">
              Start The Final Chapter <br className="hidden md:block" /> Of Their School Journey.
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/admissions" 
                className="bg-white text-slate-900 px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-2xl"
              >
                Admission Open 2027-28
              </Link>
              <Link 
                to="/gallery" 
                className="bg-transparent border-2 border-white/20 text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:bg-white/10 hover:border-white/40"
              >
                Explore Campus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal icon for the map list
const CheckCircle2 = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);

export default Secondary;
