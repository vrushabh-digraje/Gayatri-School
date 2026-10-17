import React, { useState } from 'react';
import { Trophy, Award, Star, Medal, X, ZoomIn, Sparkles } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  studentName?: string;
  category: 'Sports' | 'Academic' | 'Cultural' | 'National / State Level';
  level: string;
  image: string;
  description: string;
}

const Achievements: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalImage, setActiveModalImage] = useState<{ src: string; title: string } | null>(null);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "State-Level Weightlifting Silver Medal",
      studentName: "Ruturaj Santosh Ambre",
      category: "National / State Level",
      level: "State Level Championship",
      image: "/achievements/state-weightlifting-ruturaj-ambre.jpg",
      description: "Ruturaj Santosh Ambre won the prestigious Silver Medal at the Maharashtra State-Level Weightlifting Competition."
    },
    {
      id: 2,
      title: "Divisional Weightlifting Championship 2026–27",
      studentName: "Ruturaj, Pragati, Anamika & Kushal",
      category: "National / State Level",
      level: "Divisional & State Qualifier",
      image: "/achievements/divisional-weightlifting-champions.jpg",
      description: "Ruturaj Ambre won Gold Medal & State Selection. Pragati Kad secured Silver. Anamika Vishwakarma & Kushal Chaudhari won Bronze Medals."
    },
    {
      id: 3,
      title: "Zonal Boxing Silver Medal (2nd Place)",
      studentName: "Tejal Mandhare (CBSE)",
      category: "Sports",
      level: "Zonal Level Championship",
      image: "/achievements/zonal-boxing-tejal-mandhare.jpg",
      description: "Tejal Mandhare of CBSE section won the Silver Medal (2nd Place) at the Zonal Boxing Competition in Pravaranagar."
    },
    {
      id: 4,
      title: "Zonal Boxing Bronze Medal (3rd Place)",
      studentName: "Sanket Karke (SSC)",
      category: "Sports",
      level: "Zonal Level Championship",
      image: "/achievements/zonal-boxing-sanket-karke.jpg",
      description: "Sanket Karke of SSC section won 3rd Place Bronze Medal at the Zonal Boxing Competition in Pravaranagar."
    },
    {
      id: 5,
      title: "Zonal Boxing Bronze Medal (3rd Place)",
      studentName: "Aahat Khan (CBSE)",
      category: "Sports",
      level: "Zonal Level Championship",
      image: "/achievements/zonal-boxing-aahat-khan.jpg",
      description: "Aahat Khan of CBSE section clinched 3rd Place Bronze Medal at the Zonal Boxing Championship in Pravaranagar."
    },
    {
      id: 6,
      title: "District Taekwondo Champion (1st Place)",
      studentName: "Yash Prashant Jadhav",
      category: "Sports",
      level: "District Champion • Zonal Qualifier",
      image: "/achievements/taekwondo-yash-jadhav.jpg",
      description: "Secured 1st Place in Under-14 Boys District-Level Taekwondo Competition and qualified for Zonal Level."
    },
    {
      id: 7,
      title: "District Freestyle Wrestling Champion (1st Place)",
      studentName: "Harshad Santosh Kadam",
      category: "Sports",
      level: "District Champion • Zonal Qualifier",
      image: "/achievements/wrestling-harshad-kadam.jpg",
      description: "Secured 1st Place in Under-19 Boys District Freestyle Wrestling Competition and qualified for Zonal Level."
    },
    {
      id: 8,
      title: "District Rifle Shooting Champion (1st Place)",
      studentName: "Tanmay Jayprakash Badhe",
      category: "Sports",
      level: "District Champion • Zonal Qualifier",
      image: "/achievements/rifle-shooting-tanmay-badhe.jpg",
      description: "Secured 1st Place in Under-19 District Rifle Shooting Competition and qualified for Zonal Level."
    },
    {
      id: 9,
      title: "Girls District Taekwondo Champion (1st Place)",
      studentName: "Harshada Eknath Chavan",
      category: "Sports",
      level: "District Champion • Zonal Qualifier",
      image: "/achievements/taekwondo-harshada-chavan.jpg",
      description: "Secured 1st Place in Under-17 Girls District-Level Taekwondo Competition and qualified for Zonal Level."
    },
    {
      id: 10,
      title: "Boys District Boxing Champion (1st Place)",
      studentName: "Ahad Ayyaj Khan (CBSE)",
      category: "Sports",
      level: "District Champion • Zonal Qualifier",
      image: "/achievements/boxing-ahad-khan.jpg",
      description: "Secured 1st Place in Under-17 Boys District Boxing Competition and qualified for Zonal Level."
    },
    {
      id: 11,
      title: "District Boxing Champion (1st Place)",
      studentName: "Sanket Santosh Karke (SSC)",
      category: "Sports",
      level: "District Champion • Zonal Qualifier",
      image: "/achievements/boxing-sanket-karke.jpg",
      description: "Secured 1st Place in Under-17 Boys District Boxing Competition and qualified for Zonal Level."
    },
    {
      id: 12,
      title: "ZP District Boxing Gold Medal (1st Place)",
      studentName: "Tejal Mandhare (CBSE)",
      category: "Sports",
      level: "ZP District Champion • Zonal Qualifier",
      image: "/achievements/boxing-gold-tejal-mandhare.jpg",
      description: "Secured 1st Place Gold Medal in ZP District Boxing Competition 2026–27 and qualified for Zonal Championship."
    },
    {
      id: 13,
      title: "ZP District Boxing Silver Medal (2nd Place)",
      studentName: "Pragati Kad (SSC)",
      category: "Sports",
      level: "ZP District Level",
      image: "/achievements/boxing-silver-pragati-kad.jpg",
      description: "Secured 2nd Place Silver Medal in ZP District Boxing Competition 2026–27."
    },
    {
      id: 14,
      title: "ZP District Boxing Bronze Medal (3rd Place)",
      studentName: "Anamika Vishwakarma (CBSE)",
      category: "Sports",
      level: "ZP District Level",
      image: "/achievements/boxing-anamika-vishwakarma.jpg",
      description: "Secured 3rd Place Bronze Medal in ZP District Boxing Competition 2026–27."
    },
    {
      id: 15,
      title: "District Mallakhamb Silver Medal (2nd Place)",
      studentName: "Aryan Palande",
      category: "Sports",
      level: "District Level • Divisional Qualifier",
      image: "/achievements/mallakhamb-aryan-palande.jpg",
      description: "Secured 2nd Place in Under-17 District Mallakhamb Competition and qualified for Divisional Level."
    },
    {
      id: 16,
      title: "Chinmaya Bhagavad Gita Competition Winners",
      studentName: "Gayatri Students (Groups A to E)",
      category: "Cultural",
      level: "Inter-School State Level",
      image: "/achievements/chinmaya-gita-competition.jpg",
      description: "Honoring students who secured 1st, 2nd, 3rd, and 4th prizes in the prestigious Chinmaya Bhagavad Gita Chanting Competition."
    },
    {
      id: 17,
      title: "CBSE Board Examination Toppers",
      studentName: "Class 10 CBSE Meritorious Students",
      category: "Academic",
      level: "CBSE Boards",
      image: "/CBSE 2025-26 Toppers.png",
      description: "Celebrating 100% pass result and exceptional top percentiles in the CBSE Class 10 Board Examinations."
    },
    {
      id: 18,
      title: "National Weightlifting Championship – 5th Rank",
      studentName: "GEMS National Competitors",
      category: "National / State Level",
      level: "National Level",
      image: "/sa1.JPG",
      description: "Distinguished athletic performance securing All-India 5th Rank at the National Weightlifting Championship."
    },
    {
      id: 19,
      title: "National Taekwondo & Martial Arts Champions",
      studentName: "Anshuman Dhawade & Team",
      category: "National / State Level",
      level: "National Level",
      image: "/sa.JPG",
      description: "National championship medals celebrating martial arts and combat sports excellence."
    },
    {
      id: 20,
      title: "Inter-House Sports Champions Trophy",
      studentName: "GEMS Athletic Squad",
      category: "Sports",
      level: "Inter-School Champions",
      image: "/Sports1.jpg",
      description: "Overall school champions trophy across athletics, track championships, and team sports."
    },
    {
      id: 21,
      title: "Annual Cultural Milestone & Drama Excellence",
      studentName: "Gayatri Performing Arts Troupe",
      category: "Cultural",
      level: "Cultural Excellence",
      image: "/cultural.JPG",
      description: "Showcasing student talents in classical music choir, theatrical productions, and cultural awards."
    }
  ];

  const categories = ['All', 'Sports', 'National / State Level', 'Academic', 'Cultural'];

  const filteredAchievements = selectedCategory === 'All'
    ? achievements
    : achievements.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[#f5f7fb] min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm text-[#f97316] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Trophy size={14} /> Our Pride & Glory
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Wall of Achievements
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg mb-10">
            Celebrating the dedication, discipline, and hard-earned championship victories of our students across sports, state tournaments, board academics, and cultural excellence.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#1e3a8a] text-white shadow-lg shadow-blue-900/20 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                {cat === 'All' ? `All (${achievements.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredAchievements.map((item, idx) => (
            <div 
              key={item.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-2xl transition-all duration-500 group flex flex-col cursor-pointer"
              style={{ animationDelay: `${idx * 50}ms` }}
              onClick={() => setActiveModalImage({ src: item.image, title: item.title })}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Level / Category Badge Top Left */}
                <div className="absolute top-5 left-5">
                  <span className="bg-[#1e3a8a]/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                    {item.level}
                  </span>
                </div>

                {/* Icon Badge Top Right */}
                <div className="absolute top-5 right-5">
                  <div className="w-10 h-10 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#f97316] shadow-lg">
                    {item.category === 'Sports' ? (
                      <Medal size={20} />
                    ) : item.category.includes('National') ? (
                      <Award size={20} />
                    ) : item.category === 'Academic' ? (
                      <Trophy size={20} />
                    ) : (
                      <Star size={20} />
                    )}
                  </div>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn size={14} className="text-[#f97316]" /> Click to Enlarge
                  </div>
                </div>
              </div>

              {/* Title & Info Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#f97316] bg-orange-50 px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  {item.studentName && (
                    <span className="text-[11px] font-bold text-slate-400 truncate">
                      • {item.studentName}
                    </span>
                  )}
                </div>

                <h3 className="text-lg xl:text-xl font-black text-slate-900 tracking-tight group-hover:text-[#1e3a8a] transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed mt-auto line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Poster Preview */}
        {activeModalImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
            onClick={() => setActiveModalImage(null)}
          >
            <div 
              className="relative max-w-2xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
                <h4 className="font-black text-sm sm:text-base text-slate-800 truncate pr-4">
                  {activeModalImage.title}
                </h4>
                <button 
                  onClick={() => setActiveModalImage(null)}
                  className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="overflow-auto p-2 bg-slate-900 flex items-center justify-center">
                <img 
                  src={activeModalImage.src} 
                  alt={activeModalImage.title} 
                  className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Summary Footer */}
        <div className="mt-28 p-12 md:p-16 bg-gradient-to-br from-[#1e3a8a] via-blue-900 to-indigo-950 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-orange-300 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Sparkles size={14} /> Champions in the Making
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Excellence is a Habit at GEMS
          </h2>
          <p className="text-blue-100/80 font-medium max-w-2xl mx-auto text-base md:text-lg mb-12">
            From district boxing rings and state weightlifting platforms to martial arts tatami and board exam merits, Gayatri students consistently demonstrate courage, discipline, and glory.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">500+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-200">Medals Won</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">16+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-200">Zonal & State Medals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">50+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-200">National Athletes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-3xl md:text-4xl font-black text-orange-400 mb-1">100%</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-blue-200">CBSE Pass Record</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
