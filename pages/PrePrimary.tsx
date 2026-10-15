
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, School, Star, Heart, Palette, Music, Baby, BookOpen } from 'lucide-react';

const PrePrimary: React.FC = () => {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-5 py-2 bg-purple-50 text-purple-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-fade-in-up">
            Pre Primary
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight animate-fade-in-up stagger-delay-1">
            A Home For Little Minds
          </h1>
        </div>
      </section>

      {/* Main Content Section (Requested Layout) */}
      <section className="pb-32 px-4 md:px-8 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Container with Animation */}
          <div className="relative group animate-fade-in-right stagger-delay-2">
            <div className="absolute -inset-4 bg-indigo-50 rounded-[3.5rem] -z-10 group-hover:rotate-2 transition-transform duration-700"></div>
            <img 
              src="/Sports4.jpg" 
              alt="Gayatri School Building" 
              className="rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover border-4 border-white transform group-hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Floating badge over image */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-500">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">Rating</p>
                  <p className="text-lg font-black text-slate-900">Top Choice</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Block with Animation */}
          <div className="lg:pl-8 animate-fade-in-left stagger-delay-3">
            <div className="mb-8">
               <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg mb-8 animate-float">
                  <School size={40} />
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">About Us</h2>
               <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12">
                At GEMS, our Pre-Primary program creates a warm, safe, and engaging environment where young learners 
                can thrive. Designed to foster curiosity, creativity, and emotional development, our curriculum lays 
                a strong foundation for lifelong learning. Through a mix of structured learning and play-based activities, 
                children develop essential skills in a fun, supportive atmosphere. Our dedicated educators inspire a 
                love for learning, ensuring each child feels valued and confident as they begin their educational journey.
               </p>
               <Link 
                to="/contact" 
                className="inline-flex items-center gap-4 bg-indigo-100 hover:bg-indigo-600 hover:text-white text-indigo-600 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500 transform hover:translate-x-2"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Pillars Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="text-indigo-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">How We Grow</span>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Our Learning Pillars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Creative Arts", icon: <Palette className="text-pink-500" />, desc: "Unlocking imagination through colors and craft." },
              { title: "Music & Rhythm", icon: <Music className="text-blue-500" />, desc: "Developing coordination and joyful expression." },
              { title: "Sensory Play", icon: <Baby className="text-emerald-500" />, desc: "Exploring the world through touch, sight, and sound." },
              { title: "Early Literacy", icon: <BookOpen className="text-purple-500" />, desc: "Building the foundations of reading and stories." }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-fade-in-right">
            <h2 className="text-4xl font-black text-slate-900 mb-8 leading-tight">Specifically Tailored For <br/> The Little Ones</h2>
            <div className="space-y-8">
              {[
                { title: "Child-Safe Environment", icon: <Heart className="text-rose-500" />, desc: "Our campus is designed with non-toxic materials and round-the-clock supervision." },
                { title: "Expert Educators", icon: <Star className="text-amber-500" />, desc: "Teachers specialized in early childhood development and child psychology." },
                { title: "Nutritional Guidance", icon: <Baby className="text-sky-500" />, desc: "We focus on healthy eating habits and physical wellness from the start." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900 mb-2">{feature.title}</h4>
                    <p className="text-slate-500 text-sm font-medium">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in-left">
             <img 
               src="/childrenp.png"
               alt="Children playing" 
               className="rounded-[3rem] shadow-2xl border-4 border-white"
             />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-600/10 rounded-[3rem] -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrePrimary;
