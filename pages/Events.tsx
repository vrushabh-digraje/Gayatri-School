
import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

interface SchoolEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
}

const Events: React.FC = () => {
  const events: SchoolEvent[] = [
    {
      id: 1,
      title: "Maharashtra Day Celebration",
      date: "May 01, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "School Auditorium",
      category: "Cultural",
      description: "Celebrating Maharashtra Day with patriotic performances, speeches, and cultural activities by students.",
      image: "MaharashtraD2026.webp"
    },
    {
      id: 2,
      title: "Independence Day Celebration",
      date: "Aug 15, 2026",
      time: "7:00 AM - 10:00 AM",
      location: "School Ground",
      category: "Cultural",
      description: "Patriotic celebrations including parade, speeches, and performances by students.",
      image: "IndependenceDay2026.png"
    },
    {
      id: 3,
      title: "Teachers' Day",
      date: "Sep 05, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "School Auditorium",
      category: "Cultural",
      description: "Honoring teachers with performances and appreciation programs by students.",
      image: "TeachersDay2026.png"
    },
    {
      id: 4,
      title: "Gandhi Jayanti",
      date: "Oct 02, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "School Campus",
      category: "Cultural",
      description: "Remembering Mahatma Gandhi through activities promoting peace and cleanliness.",
      image: "GandhiJayanti2026.png"
    },
    {
      id: 5,
      title: "Constitution Day",
      date: "Nov 26, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "School Auditorium",
      category: "Academic",
      description: "Awareness programs about the Indian Constitution and its importance.",
      image: "ConstitutionDay2026.png"
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Calendar size={14} /> Mark Your Calendar
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Upcoming Events
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
            Stay updated with the latest happenings, academic milestones, and celebration days at Gayatri English Medium School.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event, idx) => (
            <div 
              key={event.id}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-white hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row group animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Image Side */}
              <div className="md:w-2/5 relative overflow-hidden h-64 md:h-auto">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-3/5 p-8 md:p-10 flex flex-col">
                <div className="flex items-center gap-3 text-indigo-600 mb-4">
                  <div className="bg-indigo-50 p-2 rounded-lg">
                    <Calendar size={18} />
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest">{event.date}</span>
                </div>
                
                <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 flex-grow">
                  {event.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <Clock size={14} className="text-indigo-400" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin size={14} className="text-indigo-400" />
                    {event.location}
                  </div>
                </div>

                <button className="flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] hover:text-indigo-600 transition-all group/btn">
                  View Details <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Footer
        <div className="mt-24 p-12 bg-white rounded-[3rem] shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl">
              <Users size={32} />
            </div>
            <div>
              <h4 className="text-xl font-black text-slate-900 tracking-tight">Community Participation</h4>
              <p className="text-slate-500 text-sm font-medium">Parents and alumni are invited to join our public events.</p>
            </div>
          </div>
          <button className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg">
            Download Yearly Calendar
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Events;
