
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
      url: '/ChemistryLab-Lesson.png',
      title: 'Interactive Chemistry Lab Session',
      category: 'Academics',
      prompt: 'Science teacher demonstrating Bunsen burner experiment with apparatus to high school students',
      alt: 'Chemistry laboratory experiment'
    },
    {
      url: '/ComputerLab-Modern.png',
      title: 'Modern Computer IT Laboratory',
      category: 'Academics',
      prompt: 'Students coding and working on computer workstations in high-tech lab',
      alt: 'School computer and IT lab'
    },
    {
      url: '/STEMClassroom-Geometry.png',
      title: 'STEM 3D Geometry Workshop',
      category: 'Academics',
      prompt: 'Teacher with school badge guiding students building 3D geometric polyhedrons',
      alt: 'STEM hands-on math and geometry activity'
    },
    {
      url: '/PhysicsClassroom-Resistors.png',
      title: 'Physics Interactive Lecture',
      category: 'Academics',
      prompt: 'Physics teacher lecturing on combination of resistors with classroom chalkboard diagrams',
      alt: 'Physics lesson on circuits and resistors'
    },
    {
      url: '/SanskritLanguageLab.png',
      title: 'Multimedia Sanskrit Language Lab',
      category: 'Academics',
      prompt: 'Interactive language lab with digital smart board, headsets, and language software',
      alt: 'Smart Sanskrit language lab'
    },
    {
      url: 'Sports3.jpg',
      title: 'Athletic Meet 2024',
      category: 'Sports',
      prompt: 'Running track',
      alt: 'Track events'
    },
    {
      url: '/OutdoorKarateTraining.png',
      title: 'Karate & Self-Defense Training',
      category: 'Sports',
      prompt: 'Students in white martial arts uniforms practicing karate punches and kicks on the school courtyard',
      alt: 'Outdoor karate and self-defense coaching'
    },
    {
      url: 'AnnualDay.JPG',
      title: 'Annual Day Celebrations',
      category: 'Cultural',
      prompt: 'Auditorium stage',
      alt: 'Stage performance'
    },
    {
      url: '/GaneshaWorkshop-Sculpting.jpg',
      title: 'Eco-Friendly Ganesha Sculpting',
      category: 'Cultural',
      prompt: 'Students sculpting eco-friendly Shadu Mati Ganesha idols',
      alt: 'Ganesha idol making workshop'
    },
    {
      url: '/GaneshaWorkshop-Assembly.jpg',
      title: 'Ganesha Workshop Mass Assembly',
      category: 'Cultural',
      prompt: 'Students gathered in school courtyard making idols',
      alt: 'Students gathering for eco-friendly idol making'
    },
    {
      url: '/GaneshaWorkshop-Demo.jpg',
      title: 'Sculpting Guidance & Campus Demo',
      category: 'Cultural',
      prompt: 'Art instructor demonstrating sculpting techniques with Gayatri school campus in background',
      alt: 'Faculty demonstration at Ganesha workshop'
    },
    {
      url: '/GaneshaWorkshop-Mentorship.jpg',
      title: 'Art Teacher Personal Mentorship',
      category: 'Cultural',
      prompt: 'Art teacher demonstrating clay modeling to student',
      alt: 'Art teacher mentoring student'
    },
    {
      url: '/Dandiya-CanopyArena.jpg',
      title: 'Grand Dandiya & Garba Mahotsav',
      category: 'Cultural',
      prompt: 'Spectacular colorful tent canopy arena with hundreds of students playing Dandiya',
      alt: 'Navratri Dandiya Raas celebration under canopy'
    },
    {
      url: '/Dandiya-StudentDance.jpg',
      title: 'Joyful Student Dandiya Raas',
      category: 'Cultural',
      prompt: 'Students in traditional festive attire dancing with dandiya sticks',
      alt: 'Students playing Dandiya'
    },
    {
      url: '/Dandiya-FacultyGarba.jpg',
      title: 'Faculty & Staff Garba Celebration',
      category: 'Cultural',
      prompt: 'Teachers and instructors dancing Garba together in traditional sarees',
      alt: 'Teachers celebrating Garba'
    },
    {
      url: '/Dandiya-StagePerformance.jpg',
      title: 'Navratri Stage & Senior Raas',
      category: 'Cultural',
      prompt: 'Senior students dancing in front of official Shivmudra Pratishthan Navratri banner',
      alt: 'Shivmudra Pratishthan Navratri celebration'
    },
    {
      url: '/Felicitation-StudentAward.jpg',
      title: 'Student Achievement Felicitation',
      category: 'Cultural',
      prompt: 'Primary student receiving school achievement certificate on festival stage',
      alt: 'Navratri student award ceremony'
    },
    {
      url: '/Felicitation-StaffEnsemble.jpg',
      title: 'Festival Committee & Staff Ensemble',
      category: 'Cultural',
      prompt: 'Teachers and organizers group photo on decorated festival stage',
      alt: 'School teachers and staff group photo'
    },
    {
      url: '/Felicitation-TeacherAppreciation.jpg',
      title: 'Faculty Appreciation Ceremony',
      category: 'Cultural',
      prompt: 'School leadership presenting certificate of recognition to teacher',
      alt: 'Teacher recognition award ceremony'
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
    },
    {
      url: '/Campus-AerialBuilding.png',
      title: 'Modern Campus Architecture',
      category: 'Campus',
      prompt: 'High-angle aerial photograph of multi-storey Gayatri English Medium School building and campus grounds',
      alt: 'Aerial view of school building and campus'
    },
    {
      url: '/Campus-AerialGrounds.png',
      title: 'Panoramic Grounds & Sports Arena',
      category: 'Campus',
      prompt: 'Wide drone shot of main school gate, sports ground, and surrounding Moshi campus',
      alt: 'School campus entrance and playground overview'
    }
  ];

  const allImages = [...GALLERY_IMAGES, ...extraImages];

  const filteredImages = filter === 'All' 
    ? allImages 
    : allImages.filter(img => img.category === filter);

  return (
    <div className="bg-[#fcfdff] pb-16">
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
              style={{ animationDelay: `${(idx % 6) * 60}ms` }}
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
