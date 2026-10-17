import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

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
      image: "/MaharashtraD2026.webp"
    },
    {
      id: 2,
      title: "Independence Day Celebration",
      date: "Aug 15, 2026",
      time: "7:00 AM - 10:00 AM",
      location: "School Ground",
      category: "Cultural",
      description: "Patriotic celebrations including parade, speeches, and performances by students.",
      image: "/IndependenceDay2026.png"
    },
    {
      id: 3,
      title: "Teachers' Day",
      date: "Sep 05, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "School Auditorium",
      category: "Cultural",
      description: "Honoring teachers with performances and appreciation programs by students.",
      image: "/TeachersDay2026.png"
    },
    {
      id: 4,
      title: "Gandhi Jayanti",
      date: "Oct 02, 2026",
      time: "9:00 AM - 12:00 PM",
      location: "School Campus",
      category: "Cultural",
      description: "Remembering Mahatma Gandhi through activities promoting peace and cleanliness.",
      image: "/GandhiJayanti2026.png"
    },
    {
      id: 5,
      title: "Dandiya Celebration",
      date: "Oct 16, 2026",
      time: "School Hours / Celebrated",
      location: "School Campus Ground",
      category: "Cultural",
      description: "A vibrant festive celebration featuring traditional folk dance, music, ethnic attire, and cultural bonding among students and teachers.",
      image: "/cultural.JPG"
    },
    {
      id: 6,
      title: "Diya Decoration & Bagless Day",
      date: "Oct 21 - 30, 2026",
      time: "During School Hours",
      location: "School Art Rooms & Quadrangle",
      category: "Cultural",
      description: "Diwali creative preparations including diya colouring, eco-friendly handicrafts, and a student-managed diya exhibition and sale.",
      image: "/Exi2.jpg"
    },
    {
      id: 7,
      title: "Children's Day & Quiz Competition",
      date: "Nov 14 - 18, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Special celebratory assembly, historical character role-play (Classes 1–4), and an inter-house general knowledge quiz (Classes 6–9).",
      image: "/sa1.JPG"
    },
    {
      id: 8,
      title: "Constitution Day",
      date: "Nov 26, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Commemoration of Samvidhan Divas with collective preamble reading, civic awareness sessions, and student speeches on democratic values.",
      image: "/ConstitutionDay2026.png"
    },
    {
      id: 9,
      title: "Annual Sports Day",
      date: "Nov 28, 2026",
      time: "Sports Day Schedule",
      location: "School Sports Ground",
      category: "Sports",
      description: "The premier athletic meet of the year featuring torch lighting, march past, sprint races, relays, team championships, and medal awards.",
      image: "/SportsDay.jpg"
    },
    {
      id: 10,
      title: "Dr. Babasaheb Ambedkar Mahaparinirvan Diwas",
      date: "Dec 06, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Observing Mahaparinirvan Diwas with floral tributes, commemorative speeches, and honoring Dr. B. R. Ambedkar's monumental contributions to equality and the Constitution.",
      image: "/ConstitutionDay2026.png"
    },
    {
      id: 11,
      title: "Inter-House Debate Competition",
      date: "Dec 12, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Competitive debate championship for Classes 6 to 10 encouraging articulate arguments, critical thinking, and public speaking confidence.",
      image: "/Lib.jpg"
    },
    {
      id: 12,
      title: "Christmas Celebration",
      date: "Dec 23, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Cultural",
      description: "Festive celebration featuring Christmas carols, Santa Claus visit, skits, exchange of greeting cards, and spreading joy.",
      image: "/cultural.JPG"
    },
    {
      id: 13,
      title: "Annual Day Celebration",
      date: "Dec 24, 2026",
      time: "As Per Event Schedule",
      location: "Main Open Air Theatre & Stage",
      category: "Cultural",
      description: "The grandest cultural milestone of the school year showcasing theatrical plays, classical and fusion dances, musical choir, and annual prize distribution.",
      image: "/AnnualDay.JPG"
    },
    {
      id: 14,
      title: "Swami Vivekananda Jayanti & Kite Activity",
      date: "Jan 09 - 12, 2027",
      time: "During School Hours",
      location: "School Campus",
      category: "Cultural",
      description: "Observance of National Youth Day and Rajmata Jijau Jayanti paired with a hands-on kite making activity on Bagless Day.",
      image: "/sa.JPG"
    },
    {
      id: 15,
      title: "Republic Day & Art Exhibition (3 Days)",
      date: "Jan 25 - 27, 2027",
      time: "9:00 AM - 1:00 PM",
      location: "School Ground & Art Gallery",
      category: "Exhibition",
      description: "Grand 3-day student fine arts and crafts exhibition paired with patriotic Republic Day parade, flag unfurling, and cultural performances.",
      image: "/Exi.jpg"
    },
    {
      id: 16,
      title: "Science & Robotics Exhibition",
      date: "Feb 13, 2027",
      time: "During School Hours",
      location: "Robotics Lab & Quadrangle",
      category: "Exhibition",
      description: "Interactive showcase where students demonstrate working science models, IoT prototypes, robotics kits, and innovative technological solutions.",
      image: "/RoboticsLab1.JPG"
    },
    {
      id: 17,
      title: "Chhatrapati Shivaji Maharaj Jayanti",
      date: "Feb 19, 2027",
      time: "During School Hours",
      location: "School Campus Ground",
      category: "Cultural",
      description: "Honoring the legendary Maratha warrior king with traditional lezim performances, historical speeches, powadas, and inspiring student tributes.",
      image: "/sa.JPG"
    },
    {
      id: 18,
      title: "Marathi Divas & National Science Day",
      date: "Feb 27 - 28, 2027",
      time: "During School Hours",
      location: "Science Labs & Auditorium",
      category: "Academic",
      description: "Tribute to Marathi language literature and heritage followed by National Science Day research experiments and live demonstrations.",
      image: "/Pract1.jpg"
    },
    {
      id: 19,
      title: "International Women’s Day",
      date: "Mar 08, 2027",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Celebration",
      description: "Felicitation of women faculty, guest talks on women empowerment, inspiring leadership presentations, and student appreciation sessions.",
      image: "/Feli2.jpg"
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
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/School1.jpg';
                  }}
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
      </div>
    </div>
  );
};

export default Events;
