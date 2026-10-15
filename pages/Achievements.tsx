
import React from 'react';
import { Trophy, Award, Star, Medal } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  image: string;
  category: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "CBSE 2025-26 Toppers",
      category: "Aademic",
      image: "CBSE 2025-26 Toppers.png" 
    },
    {
      id: 2,
      title: "Sport Achievement",
      category: "Sports",
      image: "/Sports1.jpg" // Placeholder for blue sports poster
    },
    {
      id: 3,
      title: "National Champions",
      category: "National Level",
      image: "/sa.JPG" // Placeholder for Anshuman Dhawade poster
    },
    {
      id: 4,
      title: "National Champions 5th Rank",
      category: "Weightlifting",
      image: "/sa1.JPG" // Placeholder for student with trophy
    },
    {
      id: 5,
      title: "Annual Function 2025",
      category: "Cultural",
      image: "/cultural.JPG" // Placeholder for group photo
    }
    // {
    //   id: 5,
    //   title: "Excellence in Academics",
    //   category: "CBSE Boards",
    //   image: "https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=800"
    // },
    // {
    //   id: 6,
    //   title: "Zonal Level Yoga Champions",
    //   category: "Yoga",
    //   image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800"
    // }
  ];

  return (
    <div className="bg-[#f5f7fb] min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Trophy size={14} /> Our Pride & Glory
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Wall of Achievements
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            Celebrating the dedication, talent, and hard-earned victories of our students across sports, academics, and cultural excellence.
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievements.map((item, idx) => (
            <div 
              key={item.id}
              className={`bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-white hover:shadow-2xl transition-all duration-500 group animate-fade-in-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-indigo-600 shadow-lg">
                        {item.category === 'Sports' ? <Medal size={24} /> : item.category.includes('National') ? <Award size={24} /> : <Star size={24} />}
                    </div>
                </div>
              </div>

              {/* Title Section matching reference exactly */}
              <div className="p-8 text-center bg-white">
                <h3 className="text-xl xl:text-2xl font-black text-slate-800 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div className="mt-32 p-16 bg-slate-900 rounded-[4rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Success is a Habit at GEMS</h2>
            <div className="flex flex-wrap justify-center gap-12">
                <div className="text-center">
                    <div className="text-5xl font-black text-indigo-400 mb-2">500+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Medals Won</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-black text-indigo-400 mb-2">50+</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">National Level Athletes</div>
                </div>
                <div className="text-center">
                    <div className="text-5xl font-black text-indigo-400 mb-2">100%</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Academic Excellence</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
