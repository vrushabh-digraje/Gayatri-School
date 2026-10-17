import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Tag, Sparkles } from 'lucide-react';

interface SchoolEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'Upcoming' | 'Cultural' | 'Academic' | 'Sports' | 'Exhibition';
  status: 'Upcoming' | 'Completed';
}

const Events: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Upcoming');

  const events: SchoolEvent[] = [
    // UPCOMING EVENTS (Academic Calendar 2026-27)
    {
      id: 101,
      title: "Dandiya Celebration",
      date: "Oct 16, 2026",
      time: "School Hours / Celebrated",
      location: "School Campus Ground",
      category: "Cultural",
      status: "Completed",
      description: "A vibrant festive celebration featuring traditional folk dance, music, ethnic attire, and cultural bonding among students and teachers.",
      image: "/cultural.JPG"
    },
    {
      id: 102,
      title: "Diya Decoration & Bagless Day",
      date: "Oct 21 - 30, 2026",
      time: "During School Hours",
      location: "School Art Rooms & Quadrangle",
      category: "Cultural",
      status: "Upcoming",
      description: "Diwali creative preparations including diya colouring, eco-friendly handicrafts, and a student-managed diya exhibition and sale.",
      image: "/Exi2.jpg"
    },
    {
      id: 103,
      title: "Children's Day & Quiz Competition",
      date: "Nov 14 - 18, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      status: "Upcoming",
      description: "Special celebratory assembly, historical character role-play (Classes 1–4), and an inter-house general knowledge quiz (Classes 6–9).",
      image: "/sa1.JPG"
    },
    {
      id: 104,
      title: "Indian Constitution Day",
      date: "Nov 26, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      status: "Upcoming",
      description: "Commemoration of Samvidhan Divas with collective preamble reading, civic awareness sessions, and student speeches on democratic values.",
      image: "/ConstitutionDay2026.png"
    },
    {
      id: 105,
      title: "Annual Sports Day",
      date: "Nov 28, 2026",
      time: "Sports Day Schedule",
      location: "School Sports Ground",
      category: "Sports",
      status: "Upcoming",
      description: "The premier athletic meet of the year featuring torch lighting, march past, sprint races, relays, team championships, and medal awards.",
      image: "/SportsDay.jpg"
    },
    {
      id: 106,
      title: "Inter-House Debate Competition",
      date: "Dec 12, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      status: "Upcoming",
      description: "Competitive debate championship for Classes 6 to 10 encouraging articulate arguments, critical thinking, and public speaking confidence.",
      image: "/Lib.jpg"
    },
    {
      id: 107,
      title: "Annual Day Celebration",
      date: "Dec 24, 2026",
      time: "As Per Event Schedule",
      location: "Main Open Air Theatre & Stage",
      category: "Cultural",
      status: "Upcoming",
      description: "The grandest cultural milestone of the school year showcasing theatrical plays, classical and fusion dances, musical choir, and annual prize distribution.",
      image: "/AnnualDay.JPG"
    },
    {
      id: 108,
      title: "Swami Vivekananda Jayanti & Kite Activity",
      date: "Jan 09 - 12, 2027",
      time: "During School Hours",
      location: "School Campus",
      category: "Cultural",
      status: "Upcoming",
      description: "Observance of National Youth Day and Rajmata Jijau Jayanti paired with a hands-on kite making activity on Bagless Day.",
      image: "/sa.JPG"
    },
    {
      id: 109,
      title: "Science & Robotics Exhibition",
      date: "Feb 13, 2027",
      time: "During School Hours",
      location: "Robotics Lab & Quadrangle",
      category: "Exhibition",
      status: "Upcoming",
      description: "Interactive showcase where students demonstrate working science models, IoT prototypes, robotics kits, and innovative technological solutions.",
      image: "/RoboticsLab1.JPG"
    },
    {
      id: 110,
      title: "Marathi Divas & National Science Day",
      date: "Feb 27 - 28, 2027",
      time: "During School Hours",
      location: "Science Labs & Auditorium",
      category: "Academic",
      status: "Upcoming",
      description: "Tribute to Marathi language literature and heritage followed by National Science Day research experiments and live demonstrations.",
      image: "/Pract1.jpg"
    },

    // PAST CELEBRATIONS
    {
      id: 1,
      title: "Gandhi Jayanti",
      date: "Oct 02, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "School Campus",
      category: "Cultural",
      status: "Completed",
      description: "Remembering Mahatma Gandhi and Lal Bahadur Shastri through cleanliness drives, peace pledges, and essay tributes.",
      image: "/GandhiJayanti2026.png"
    },
    {
      id: 2,
      title: "Teachers' Day Celebration",
      date: "Sep 05, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "School Auditorium",
      category: "Cultural",
      status: "Completed",
      description: "Students leading classroom activities, cultural skits, and heartfelt appreciation ceremonies to honor teaching faculty.",
      image: "/TeachersDay2026.png"
    },
    {
      id: 3,
      title: "Independence Day Celebration",
      date: "Aug 15, 2026",
      time: "7:00 AM - 10:00 AM",
      location: "School Ground",
      category: "Cultural",
      status: "Completed",
      description: "Patriotic tricolor flag hoisting, student parade, patriotic choir singing, and speeches on national unity.",
      image: "/IndependenceDay2026.png"
    },
    {
      id: 4,
      title: "Maharashtra Day Celebration",
      date: "May 01, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "School Auditorium",
      category: "Cultural",
      status: "Completed",
      description: "Commemoration of Maharashtra statehood with regional dance performances, traditional music, and poetry recitation.",
      image: "/MaharashtraD2026.webp"
    }
  ];

  const filterOptions = ['Upcoming', 'All', 'Cultural', 'Academic', 'Sports', 'Exhibition'];

  const filteredEvents = events.filter((ev) => {
    if (selectedFilter === 'Upcoming') return ev.status === 'Upcoming';
    if (selectedFilter === 'All') return true;
    return ev.category === selectedFilter;
  });

  return (
    <div className="bg-[#fff9f2] min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f97316]/10 text-[#f97316] rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-[#f97316]/20">
            <Calendar size={14} /> Academic Year 2026–27
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6 font-serif">
            School Events & Activities
          </h1>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto text-base md:text-lg">
            Stay updated with the latest celebrations, academic competitions, sports championships, and cultural milestones at Gayatri English Medium School.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-sm ${
                selectedFilter === f
                  ? 'bg-[#1e3a8a] text-white shadow-blue-900/20 shadow-md scale-105'
                  : 'bg-white text-slate-600 border border-orange-100 hover:border-orange-300 hover:bg-orange-50/50'
              }`}
            >
              {f === 'Upcoming' ? '🔥 Upcoming Events' : f}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredEvents.map((event, idx) => (
            <div 
              key={event.id}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-orange-100/80 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group hover:-translate-y-1"
            >
              {/* Image Side */}
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto min-h-[220px] bg-slate-100">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to Sports or Campus photo if not loaded
                    (e.target as HTMLImageElement).src = '/School1.jpg';
                  }}
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-white/95 backdrop-blur-sm text-[#1e3a8a] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm border border-slate-100">
                    {event.category}
                  </span>
                  {event.status === 'Upcoming' && (
                    <span className="bg-[#f97316] text-white px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm flex items-center gap-1">
                      <Sparkles size={10} /> Next Up
                    </span>
                  )}
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 text-[#f97316] mb-3">
                    <div className="bg-orange-50 p-1.5 rounded-lg border border-orange-100">
                      <Calendar size={16} />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider">{event.date}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight font-serif group-hover:text-[#f97316] transition-colors leading-snug">
                    {event.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                    {event.description}
                  </p>
                </div>

                <div>
                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-4 text-xs font-bold text-slate-500">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#f97316] shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#1e3a8a] shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Section for Calendar Reference */}
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-[#1e3a8a] to-[#0f2356] rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-black uppercase text-orange-400 tracking-widest block mb-1">
              Official CBSE Calendar
            </span>
            <h4 className="text-2xl font-serif font-black mb-2">Want to view the full Academic Calendar?</h4>
            <p className="text-blue-100 text-sm max-w-xl">
              Parents can check periodic assessment dates, term examinations, and vacation schedules in our comprehensive academic schedule.
            </p>
          </div>
          <a
            href="tel:+919527764646"
            className="bg-[#f97316] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#ea580c] transition-all shadow-lg shrink-0 inline-flex items-center gap-2"
          >
            Contact School Office <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
