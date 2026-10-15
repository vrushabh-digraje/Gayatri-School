
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Target, Sparkles, Brain, Pencil, Calculator, FlaskConical, Globe, Award } from 'lucide-react';

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

const Primary: React.FC = () => {
  const section1 = useScrollReveal();
  const section2 = useScrollReveal();
  const section3 = useScrollReveal();

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Dynamic Header Section */}
      <section className="pt-40 pb-20 px-4 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-100 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-6 py-2 bg-blue-50 text-blue-600 rounded-full text-[11px] font-black uppercase tracking-[0.3em] mb-10 animate-fade-in-up border border-blue-100">
            Primary Education
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none animate-fade-in-up stagger-delay-1">
            Building Strong <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Foundations</span>
          </h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto animate-fade-in-up stagger-delay-2">
            Nurturing young learners into confident, curious, and capable individuals through our comprehensive Primary program.
          </p>
        </div>
      </section>

      {/* Main Content: About Us (Requested Layout) */}
      <section ref={section1.ref} className="py-24 px-4 md:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Interactive Image Composition */}
          <div className={`relative ${section1.isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative z-10">
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[4rem] -z-10 animate-pulse"></div>
              <img 
                src="/Sports5.jpg" 
                alt="Primary Students in Classroom" 
                className="rounded-[3.5rem] shadow-2xl w-full aspect-[4/3] object-cover border-8 border-white transform hover:scale-[1.03] transition-transform duration-700"
              />
              
              {/* Floating Achievement Card */}
              <div className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl animate-float hidden xl:block">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
                    <Award size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Excellence</p>
                    <p className="text-xl font-black text-slate-900">100% Growth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Dot Matrix */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 grid grid-cols-5 gap-4 opacity-20 -z-10">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-indigo-600 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Right: Content Block */}
          <div className={`lg:pl-10 ${section1.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl flex items-center justify-center text-white shadow-xl mb-10 transform -rotate-6">
              <BookOpen size={40} />
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tight">About Us</h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-10">
              At GEMS, our Primary program (Grades 1-5) is meticulously designed to bridge the gap between early childhood and advanced secondary studies. We focus on academic rigor while ensuring that every child's creative and emotional needs are met. 
              <br /><br />
              Our curriculum encourages students to question, explore, and connect concepts across disciplines. In a warm and supportive atmosphere, we empower each child to find their voice, develop essential life skills, and cultivate a lifelong passion for discovery and learning.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-5 bg-slate-900 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500 transform hover:translate-x-3 hover:shadow-2xl shadow-indigo-200"
            >
              Contact Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Curriculum Pillars Section */}
      <section ref={section2.ref} className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className={`text-center mb-20 ${section2.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="text-indigo-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Core Pillars</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Academic Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Literacy & Language", icon: <Pencil />, color: "text-blue-500", desc: "Mastering communication through reading, writing, and speaking." },
              { title: "Numerical Literacy", icon: <Calculator />, color: "text-emerald-500", desc: "Developing strong logical reasoning and mathematical concepts." },
              { title: "Scientific Inquiry", icon: <FlaskConical />, color: "text-purple-500", desc: "Exploring natural phenomena through experiments and observation." },
              { title: "Global Awareness", icon: <Globe />, color: "text-orange-500", desc: "Understanding our place in the world and diverse cultures." }
            ].map((pillar, i) => (
              <div 
                key={i} 
                className={`bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 group border border-slate-100 relative ${section2.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 ${pillar.color}`}>
                  {React.cloneElement(pillar.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{pillar.desc}</p>
                <div className="absolute bottom-8 right-10 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 text-slate-300">
                  <ArrowRight size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Growth Section */}
      <section ref={section3.ref} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className={`${section3.isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h2 className="text-5xl font-black text-slate-900 mb-10 leading-tight tracking-tight">Focusing on <br/> Holistic Growth</h2>
            <div className="space-y-10">
              {[
                { title: "Critical Thinking", icon: <Brain className="text-indigo-500" />, desc: "Teaching students 'how' to think, not just 'what' to think, through problem-solving." },
                { title: "Personalised Attention", icon: <Sparkles className="text-pink-500" />, desc: "Small class sizes ensure every child gets the support they need to flourish." },
                { title: "Value Education", icon: <Target className="text-emerald-500" />, desc: "Integrating ethics and social responsibility into everyday learning." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-3">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative ${section3.isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="absolute -top-10 -right-10 w-full h-full bg-blue-50/50 rounded-[4rem] -z-10 rotate-3 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200" 
              alt="Engaged Students" 
              className="rounded-[4rem] shadow-2xl border-4 border-white object-cover aspect-square"
            />
            
            {/* Overlay Gradient for Aesthetics */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-[4rem] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Call to Action: Admissions Link */}
      <section className="py-24 px-4 bg-indigo-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-none">
            Ready to Begin Their Journey?
          </h2>
          <Link 
            to="/admissions" 
            className="inline-flex items-center gap-4 bg-white text-indigo-600 px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all transform hover:scale-105 hover:shadow-2xl"
          >
            Admission 2026-27 <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Primary;
