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
      category: "Academic",
      image: "/CBSE 2025-26 Toppers.png" 
    },
    {
      id: 2,
      title: "Sport Achievement",
      category: "Sports",
      image: "/Sports1.jpg"
    },
    {
      id: 3,
      title: "National Champions",
      category: "National Level",
      image: "/sa.JPG"
    },
    {
      id: 4,
      title: "National Champions 5th Rank",
      category: "National Level",
      image: "/sa1.JPG"
    },
    {
      id: 5,
      title: "Annual Function 2025",
      category: "Cultural",
      image: "/cultural.JPG"
    },
    {
      id: 6,
      title: "State Weightlifting Silver – Ruturaj Ambre",
      category: "National Level",
      image: "/achievements/state-weightlifting-ruturaj-ambre.jpg"
    },
    {
      id: 7,
      title: "Divisional Weightlifting Champions",
      category: "National Level",
      image: "/achievements/divisional-weightlifting-champions.jpg"
    },
    {
      id: 8,
      title: "Zonal Boxing Silver – Tejal Mandhare",
      category: "Sports",
      image: "/achievements/zonal-boxing-tejal-mandhare.jpg"
    },
    {
      id: 9,
      title: "Zonal Boxing Bronze – Sanket Karke",
      category: "Sports",
      image: "/achievements/zonal-boxing-sanket-karke.jpg"
    },
    {
      id: 10,
      title: "Zonal Boxing Bronze – Aahat Khan",
      category: "Sports",
      image: "/achievements/zonal-boxing-aahat-khan.jpg"
    },
    {
      id: 11,
      title: "District Taekwondo – Yash Jadhav",
      category: "Sports",
      image: "/achievements/taekwondo-yash-jadhav.jpg"
    },
    {
      id: 12,
      title: "District Wrestling – Harshad Kadam",
      category: "Sports",
      image: "/achievements/wrestling-harshad-kadam.jpg"
    },
    {
      id: 13,
      title: "District Shooting – Tanmay Badhe",
      category: "Sports",
      image: "/achievements/rifle-shooting-tanmay-badhe.jpg"
    },
    {
      id: 14,
      title: "District Taekwondo – Harshada Chavan",
      category: "Sports",
      image: "/achievements/taekwondo-harshada-chavan.jpg"
    },
    {
      id: 15,
      title: "District Boxing – Ahad Khan",
      category: "Sports",
      image: "/achievements/boxing-ahad-khan.jpg"
    },
    {
      id: 16,
      title: "District Boxing – Sanket Karke",
      category: "Sports",
      image: "/achievements/boxing-sanket-karke.jpg"
    },
    {
      id: 17,
      title: "ZP Boxing Gold – Tejal Mandhare",
      category: "Sports",
      image: "/achievements/boxing-gold-tejal-mandhare.jpg"
    },
    {
      id: 18,
      title: "ZP Boxing Silver – Pragati Kad",
      category: "Sports",
      image: "/achievements/boxing-silver-pragati-kad.jpg"
    },
    {
      id: 19,
      title: "ZP Boxing Bronze – Anamika Vishwakarma",
      category: "Sports",
      image: "/achievements/boxing-anamika-vishwakarma.jpg"
    },
    {
      id: 20,
      title: "District Mallakhamb – Aryan Palande",
      category: "Sports",
      image: "/achievements/mallakhamb-aryan-palande.jpg"
    },
    {
      id: 21,
      title: "Chinmaya Bhagavad Gita Winners",
      category: "Cultural",
      image: "/achievements/chinmaya-gita-competition.jpg"
    }
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
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-white hover:shadow-2xl transition-all duration-500 group animate-fade-in-up"
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
                    {item.category === 'Sports' ? (
                      <Medal size={24} />
                    ) : item.category.includes('National') ? (
                      <Award size={24} />
                    ) : (
                      <Star size={24} />
                    )}
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
      </div>
    </div>
  );
};

export default Achievements;
