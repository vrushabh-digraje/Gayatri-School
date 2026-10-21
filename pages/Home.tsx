
import React, { useEffect, useRef, useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM as any;
import { ArrowRight, GraduationCap, Award, MonitorPlay, Users, BookMarked, CheckCircle2 } from 'lucide-react';
import { FACILITIES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import ContactFormModal from '../components/ContactFormModal';

const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const AnimatedCounter: React.FC<{ end: number; duration?: number; isVisible: boolean; suffix?: string }> = ({ end, duration = 2000, isVisible, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isVisible, end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
};

const HERO_IMAGES = [
  "/1.jpeg",
  "/2.webp",
  "/3.JPG",
  "/4.JPG",
  "/5.webp",
  "/6.JPG",
  "/7.jpeg",
  "/8.JPG",
  "/9.JPG",
  "/10.JPG"
];

const LEADERS_IMAGES = [
  "/BhongaleSir1.jpeg",
  "/BhongaleSir3.jpeg",
  "/BhongaleSir5.jpeg",
  "/BhongaleSir6.jpeg"
];

const Home: React.FC = () => {
  const leadersSection = useScrollReveal();
  const statsSection = useScrollReveal();
  const journeySection = useScrollReveal();
  const facilitiesSection = useScrollReveal();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLeaderSlide, setCurrentLeaderSlide] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLeaderSlide((prev) => (prev + 1) % LEADERS_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleCallRequest = () => {
    if (phoneNumber.trim() && /^\d+$/.test(phoneNumber.replace(/\s/g, '').replace('+', ''))) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert('Please enter a valid phone number');
    }
  };

  return (
    <div className="bg-[#fff9f2] overflow-hidden">
      {/* Hero Section - Using Orange/Navy Mix Overlay */}
      <section className="relative pt-24 min-h-[75vh] flex items-center justify-center overflow-hidden px-8 lg:px-24 text-center">
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`School Slide ${idx + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-[#ea580c]/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-white/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-[#f97316] rounded-[4px] text-[10px] font-black uppercase tracking-[0.2em] text-white mb-6 shadow-lg">
              Admissions Open 2027-28
            </span>
            
            <h1 className="text-white mb-6 leading-tight">
              <span className="text-2xl md:text-4xl font-serif italic block mb-1 opacity-95">Excellence in</span>
              <span className="text-4xl md:text-6xl font-bold relative inline-block">
                Education & Values.
                <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#1e3a8a] rounded-full"></div>
              </span>
            </h1>

            <div className="w-full overflow-hidden whitespace-nowrap mb-8 max-w-lg mx-auto py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30 shadow-sm">
              <div className="animate-marquee inline-block">
                <span className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-[0.2em] mr-16">School Affiliation Number: 1130818</span>
                <span className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-[0.2em] mr-16">School Code: 30740</span>
                <span className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-[0.2em] mr-16">School Affiliation Number: 1130818</span>
                <span className="text-[10px] md:text-[11px] font-black text-white uppercase tracking-[0.2em]">School Code: 30740</span>
              </div>
            </div>

            <p className="text-white text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed mb-10 opacity-95 drop-shadow-sm">
              Gayatri English Medium School Moshi PCMC offers a premier CBSE curriculum designed for the holistic growth of every child.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <a
  href="https://gemscbse.prisms.in/onlineenquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center whitespace-nowrap bg-[#f97316] text-white px-8 py-4 rounded-[8px] font-black text-xs uppercase tracking-widest hover:bg-[#ea580c] transition-all shadow-xl"
>
  Admission Enquiry
</a>
              <Link to="/about" className="bg-white text-[#1e3a8a] px-8 py-4 rounded-[8px] font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-all shadow-xl transform hover:-translate-y-1">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Leaders of Tomorrow Section */}
      <section ref={leadersSection.ref} className="py-16 bg-[#fff9f2] relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] -z-10 opacity-60"></div>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={leadersSection.isVisible ? "animate-fade-in-right" : "opacity-0"}>
            <span className="inline-block px-4 py-1.5 bg-orange-50 text-[#f97316] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-orange-100">
              Education for Everyone
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
              Building Confident,Capable & <br/>
              Compassionate <span className="text-[#f97316]">Leaders!</span>
            </h2>

            <div className="flex items-center gap-6 mb-12 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white w-fit shadow-sm">
              <div className="flex -space-x-4">
                <img src="/Sports6.jpg" className="w-14 h-14 rounded-full border-4 border-white shadow-xl object-cover" alt="Student 1" />
                <img src="/Sports4.jpg" className="w-14 h-14 rounded-full border-4 border-white shadow-xl object-cover" alt="Student 2" />
                <img src="/Feli2.jpg" className="w-14 h-14 rounded-full border-4 border-white shadow-xl object-cover" alt="Student 3" />
              </div>
              <div>
                <p className="text-lg font-bold text-[#1e3a8a]">Join Over 30,000+ Students</p>
                <p className="text-sm text-slate-500 font-medium tracking-tight">New Learning Adventure Everyday.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/enquire"
                className="bg-[#1e3a8a] text-white px-10 py-4 font-black text-xs uppercase tracking-widest rounded-lg hover:shadow-[0_10px_30px_rgba(30,58,138,0.3)] transition-all transform hover:-translate-y-1"
              >
                Admission 2027-28
              </Link>
              <Link to="/about" className="bg-[#f97316] text-white px-10 py-4 font-black text-xs uppercase tracking-widest rounded-lg hover:shadow-[0_10px_30px_rgba(249,115,22,0.3)] transition-all transform hover:-translate-y-1">
                About Us
              </Link>
            </div>
          </div>

          
  
  <div className="relative z-10 p-4 bg-white rounded-[2.5rem] shadow-2xl border border-orange-50">
    
    <div className="relative overflow-hidden rounded-[2rem] aspect-video">
      <AnimatePresence mode="wait">
        <motion.img 
          key={currentLeaderSlide}
          src={LEADERS_IMAGES[currentLeaderSlide]} 
          alt="GEMS Students Group"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>

    {/* ADD THIS BELOW IMAGE */}
    <div className="text-center mt-4">
      <p className="text-lg font-bold text-[#1e3a8a]">
        Hon. Mr. Vinayakrao Bhongale
      </p>
      <p className="text-sm font-bold text-[#f97316] uppercase tracking-wider mt-1">
        Founder & Chairman
      </p>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">
        SVSPM
      </p>
    </div>


            </div>
            <div className="absolute -top-8 -right-8 w-full h-full bg-orange-100/40 rounded-[2.5rem] -z-10 rotate-3"></div>
          </div>
      </section>

      {/* Stats Counter Section */}
      <section ref={statsSection.ref} className="py-12 bg-orange-50/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { end: 26, label: "Years of Excellence", icon: <Award className="text-[#f97316]" /> },
              { end: 37000, label: "Students Educated", icon: <MonitorPlay className="text-[#1e3a8a]" /> },
              { end: 1900, label: "Success Stories", icon: <GraduationCap className="text-[#f97316]" /> },
              { end: 100, label: "Expert Faculty", icon: <Users className="text-[#1e3a8a]" /> }
            ].map((stat, i) => (
              <div key={i} className={`bg-white p-6 rounded-2xl shadow-sm border border-orange-50 flex flex-col items-center text-center ${statsSection.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-[#1e3a8a] mb-2">
                  <AnimatedCounter end={stat.end} isVisible={statsSection.isVisible} suffix="+" />
                </div>
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Callback Section - Orange Background */}
      <section ref={journeySection.ref} className="py-12 relative overflow-hidden text-center bg-[#f97316]">
        <div className="absolute inset-0 bg-[#ea580c] opacity-50">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.2px, transparent 1.2px)', backgroundSize: '30px 30px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

  {/* LEFT CONTENT */}
  <div className={journeySection.isVisible ? "animate-fade-in-left" : "opacity-0"}>

    <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-4 border border-white/30 text-white">
      Get Latest GEMS Update
    </div>

    <h2 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
      Get Started On Your Journey!
    </h2>

    <p className="max-w-xl text-orange-50 text-sm mb-8 leading-relaxed opacity-90">
      We'll provide all the details about school infrastructure, the admission process, available seats, and everything else!
    </p>

    <div className="grid grid-cols-2 max-w-md border-t border-white/20 pt-8">
      <div className="text-center px-4 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20"></div>
        <div className="text-3xl font-black text-white mb-1">
          <AnimatedCounter end={100} isVisible={journeySection.isVisible} suffix="+" />
        </div>
        <p className="text-orange-50 font-black uppercase tracking-widest text-[8px]">
          Results Legacies
        </p>
      </div>

      <div className="text-center px-4">
        <div className="text-3xl font-black text-white mb-1">
          <AnimatedCounter end={2000} isVisible={journeySection.isVisible} suffix="+" />
        </div>
        <p className="text-orange-50 font-black uppercase tracking-widest text-[8px]">
          Students Transforming Lives
        </p>
      </div>
    </div>

  </div>

  {/* RIGHT VIDEO */}
  <div className={journeySection.isVisible ? "animate-fade-in-right" : "opacity-0"}>
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
      <iframe
        className="w-full h-[320px] md:h-[380px]"
        src="https://www.youtube.com/embed/3sEZfF6M8ps?si=kQ1U4hlUrMCZjvJZ"
        title="School Video"
        allowFullScreen
      />
    </div>
  </div>

</div>
 </section>
            <div className="max-w-xl mx-auto mb-8">
              <div className="bg-white p-1 rounded-full flex items-center shadow-xl border border-white/50">
                {/* <input 
                  type="text" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter Your Number" 
                  className="flex-grow px-5 py-2.5 bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none font-bold text-sm"
                /> */}
                {/* <button 
                  onClick={handleCallRequest}
                  className="bg-[#1e3a8a] hover:bg-[#1a337a] text-white px-5 py-3 rounded-full font-black text-[9px] uppercase tracking-[0.1em] flex items-center gap-2 transition-all shadow-md"
                >
                  Request Call Back <ArrowRight size={14} />
                </button> */}
              </div>
            </div>

            <div className="grid grid-cols-2 max-w-md mx-auto border-t border-white/20 pt-8">
              <div className="text-center px-4 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20"></div>
                <div className="text-3xl font-black text-white mb-1">
                  <AnimatedCounter end={100} isVisible={journeySection.isVisible} suffix="+" />
                </div>
                <p className="text-orange-50 font-black uppercase tracking-widest text-[8px]">Results Legacies</p>
              </div>
              <div className="text-center px-4">
                <div className="text-3xl font-black text-white mb-1">
                  <AnimatedCounter end={2000} isVisible={journeySection.isVisible} suffix="+" />
                </div>
                <p className="text-orange-50 font-black uppercase tracking-widest text-[8px]">Students Transforming Lives</p>
              </div>
            </div>
          </div>
         

);
      
          {/* World Class Facilities Section - THEME UPDATED TO LIGHT ORANGE/NAVY */}
<section ref={facilitiesSection.ref} className="py-16 bg-[#fff9f2]">
  <div className="max-w-7xl mx-auto px-8">

    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
      <div>
        <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-[10px] mb-2 block">
          Campus Life
        </span>
        <h2 className="text-4xl font-black text-[#1e3a8a] tracking-tight">
          World Class Facilities
        </h2>
      </div>

      <Link
        to="/gallery"
        className="text-slate-400 font-black uppercase tracking-widest text-[10px] hover:text-[#f97316] transition-colors flex items-center"
      >
        Explore Full Gallery
        <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {FACILITIES.map((f, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-xl border border-orange-50"
        >
          <img
            src={f.image}
            alt={f.title}
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a]/95 via-[#1e3a8a]/40 to-transparent flex flex-col justify-end p-6">
            <div className="bg-orange-100/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6">
              {f.icon}
            </div>

            <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
              {f.title}
            </h3>

            <p className="text-orange-100/80 text-sm font-medium">
              {f.description}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

};

export default Home;
