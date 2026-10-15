
import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Filter, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Academics', 'Sports', 'Cultural', 'Campus'];

  const extraImages = [
    {
      url: '/Pract2.jpg',
      title: 'Classroom Innovation',
      category: 'Academics',
      prompt: 'Teachers and students',
      alt: 'Smart classroom'
    },
    {
      url: 'Pract3.jpg',
      title: 'Science Lab Sessions',
      category: 'Academics',
      prompt: 'Students in lab',
      alt: 'Chemistry lab'
    },
    {
      url: 'Sports3.jpg',
      title: 'Athletic Meet 2024',
      category: 'Sports',
      prompt: 'Running track',
      alt: 'Track events'
    },
    {
      url: 'AnnualDay.JPG',
      title: 'Annual Day Celebrations',
      category: 'Cultural',
      prompt: 'Auditorium stage',
      alt: 'Stage performance'
    },
    {
      url: 'School2.jpg',
      title: 'Our Lush Campus',
      category: 'Campus',
      prompt: 'School building',
      alt: 'Building view'
    },
    {
      url: 'RoboticsLab3.JPG',
      title: 'Robotics Lab',
      category: 'Campus',
      prompt: 'Robotics interior',
      alt: 'Robotics Lab GEMS'
    },
    {
      url: 'HealthCheckup GEMS.png',
      title: 'Health Checkup',
      category: 'Campus',
      prompt: 'Health Facility',
      alt: 'Health Checkup GEMS'
    }
  ];

  const allImages = [...GALLERY_IMAGES, ...extraImages];

  const filteredImages = filter === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  return (
    <div className="bg-[#fcfdff] min-h-screen pb-32">
      {/* Decorative Header */}
      <section className="bg-slate-900 text-white py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-white/10">
            <Camera size={14} className="text-indigo-400" /> Snapshot GEMS
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Our Visual Journey</h1>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">
            A window into the vibrant life, achievements, and infrastructure that define Gayatri English Medium School.
          </p>
        </div>
      </section>

      {/* Filter & Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 mt-6 relative z-30">
        <div className="bg-white px-4 py-3 rounded-full shadow-xl border border-slate-100 mb-16 flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${
                filter === cat 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105' 
                : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid matching Achievements/Events style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-white hover:shadow-2xl transition-all duration-700 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-3 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {img.category}
                  </span>
                  <h3 className="text-white text-2xl font-black tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {img.title}
                  </h3>
                </div>
                
                {/* Floating Icon Badge */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                    <ImageIcon size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-32">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-200">
              <ImageIcon size={40} />
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              This gallery is currently being curated. Check back soon!
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
