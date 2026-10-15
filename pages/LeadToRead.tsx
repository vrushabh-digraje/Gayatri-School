
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM as any;
import { BookOpen, Sparkles, GraduationCap, Laptop, TrendingUp, Star } from 'lucide-react';

const LeadToRead: React.FC = () => {
  const benefits = [
    {
      title: "Leadership Development",
      description: "Reading about visionaries helps students develop critical thinking and the decision-making skills needed for their future journey as leaders.",
      icon: <TrendingUp className="w-10 h-10 text-[#f97316]" />,
      bgColor: "bg-orange-100/40"
    },
    {
      title: "Enhanced Knowledge and Skills",
      description: "Expanding vocabulary and understanding complex concepts through diverse reading materials fosters continuous intellectual growth.",
      icon: <Sparkles className="w-10 h-10 text-[#e11d48]" />,
      bgColor: "bg-rose-100/40"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with like-minded individuals through our reading circles and book discussions, creating a community of lifelong learners.",
      icon: <GraduationCap className="w-10 h-10 text-[#1e3a8a]" />,
      bgColor: "bg-blue-100/40"
    },
    {
      title: "Access to Exclusive Materials",
      description: "Gain access to curated digital libraries and expert-led discussion sessions specifically designed for our GEMS students.",
      icon: <Laptop className="w-10 h-10 text-emerald-500" />,
      bgColor: "bg-emerald-100/40"
    }
  ];

  const testimonials = [
    {
      name: "Kishore Pathe",
      initial: "K",
      color: "bg-[#1e3a8a]",
      rating: 5,
      content: "The school is lauded for providing opportunities in sports and other extracurricular activities. Overall development: Parents often highlight that Gayatri English Medium School focuses on the holistic development of students."
    },
    {
      name: "Sanjana Choudhary",
      initial: "S",
      color: "bg-[#f97316]",
      rating: 4,
      content: "Excellent School with a Holistic Approach! Gayatri English Medium School and Junior College provides a fantastic learning environment. The teachers are dedicated and supportive, ensuring both academic excellence and personal growth."
    },
    {
  name: "Amit Kulkarni",
  initial: "A",
  color: "bg-[#2563eb]",
  rating: 5,
  content:
    "We are very happy with the school's academic approach and discipline. The teachers are approachable and always supportive. My child enjoys going to school every day.",
},
{
  name: "Sneha Deshpande",
  initial: "S",
  color: "bg-[#16a34a]",
  rating: 5,
  content:
    "The focus on overall development is excellent. Along with studies, the school encourages participation in activities which has boosted my child's confidence a lot.",
},
{
  name: "Rohit Jadhav",
  initial: "R",
  color: "bg-[#f59e0b]",
  rating: 4,
  content:
    "Good infrastructure and a safe environment for children. The staff is caring and communication with parents is very transparent and regular.",
}
  ];

  return (
    <div className="bg-[#fffaf2] min-h-screen">
      <section className="pt-32 pb-24 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-orange-100 text-[#f97316] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-fade-in-up">
            Enjoy Learning!
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-[#1e3a8a] mb-8 leading-[1.1] animate-fade-in-up">
            Empowering Leaders Through <br />
            the <span className="bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#f97316] bg-clip-text text-transparent">Power of Reading</span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-delay-1">
            Join our mission to foster leadership, knowledge, and growth by cultivating a habit of reading.
          </p>
        </div>
      </section>
      
      <section className="py-24 px-4 md:px-8 lg:px-24 bg-orange-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:pr-12 pt-8">
              <h2 className="text-4xl font-black text-[#1e3a8a] mb-4 tracking-tight">
                Benefits of Read to Lead
              </h2>
              <p className="text-[#f97316] font-bold text-sm uppercase tracking-widest">
                Unlock Opportunities Through Reading
              </p>
            </div>
            {benefits.slice(0, 2).map((benefit, idx) => (
              <div key={idx} className={`${benefit.bgColor} p-10 rounded-[2.5rem] border border-white shadow-sm hover:shadow-xl transition-all duration-500 group min-h-[320px]`}>
                <div className="mb-8 bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-black text-[#1e3a8a] mb-4">{benefit.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details Section - Updated to match screenshot */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              About the Initiative
            </span>
            <h2 className="text-5xl font-black text-[#1e3a8a] mb-8 leading-tight">
              What is Read to Lead?
            </h2>
            <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
              <p>
                <span className="font-black text-slate-900">Read to Lead</span> is a transformative initiative aimed at nurturing future leaders by instilling a lifelong habit and love for reading. We believe that the power of books goes beyond words, it shapes perspectives, inspires innovation, and fosters growth.
              </p>
              <p>
                This initiative was born from a vision to bridge the gap between knowledge and leadership. Recognizing that every great leader is a reader, Read to Lead encourages individuals to explore diverse ideas and insights, empowering them to create positive change.
              </p>
              <p className="text-[#1e3a8a] font-black pt-4">
                To create a community of future leaders through the transformative power of reading.
              </p>
            </div>
          </div>
          
          {/* Right Side: Image/Video Container */}
          <Link 
            to="/read-to-lead/video" 
            className="order-1 lg:order-2 relative group cursor-pointer block"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video bg-[#0066b2] flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Background Wave Pattern (Simplified) */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <path d="M0 100 Q 100 50 200 100 T 400 100" fill="none" stroke="white" strokeWidth="2" />
                    <path d="M0 120 Q 100 70 200 120 T 400 120" fill="none" stroke="white" strokeWidth="2" />
                  </svg>
                </div>

                {/* Main Image (Sanjay Bhongale) */}
                <img 
                  src="Readtolead.jpg" 
                  alt="Hon'ble Sanjay Bhongale" 
                  className="h-full w-auto object-contain relative z-10"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <div className="w-20 h-14 bg-[#ff0000] rounded-xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-[#fffaf2]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-5 py-2 bg-orange-100 text-[#f97316] rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Testimonials and Success Stories
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Stories That Inspire</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="bg-orange-50/50 p-12 rounded-[2.5rem] relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-white"
              >
                <div className="flex items-center gap-6 mb-10 relative z-10">
                  <div className={`${t.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-lg border-2 border-white`}>
                    {t.initial}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">{t.name}</h3>
                </div>

                <p className="text-slate-600 font-medium leading-relaxed mb-10 relative z-10 min-h-[140px]">
                  {t.content}
                </p>

                <div className="flex gap-1 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={`${i < t.rating ? 'text-orange-400 fill-orange-400' : 'text-slate-200'} transition-colors duration-300`} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* 👇 PASTE VIDEO SECTION HERE */}

<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#1e3a8a]">
      Hear from Our Parents
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/6hO36BjVBXQ?si=Ww-iQ4rozO27Xidr"
          title="Parent Review 1"
          allowFullScreen
        ></iframe>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/d9kGtgS0-WY?si=ykx78OUXmN_N05QL"
          title="Parent Review 2"
          allowFullScreen
        ></iframe>
      </div>

    </div>

  </div>
</section>

    </div>
  );
};

export default LeadToRead;
