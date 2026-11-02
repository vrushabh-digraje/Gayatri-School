import React, { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Camera, Sparkles, CheckCircle2, Video, X, Tag } from 'lucide-react';

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

interface NovemberDailyEvent {
  dateNumber: string;
  dayName?: string;
  events: string[];
  category: string;
  badgeColor: string;
  shootVisit?: {
    branch: string;
    time: string;
  };
}

interface ShootVisitItem {
  date: string;
  branch: string;
  time: string;
  description: string;
  badge: string;
}

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'november' | 'shoots' | 'featured'>('all');
  const [selectedEvent, setSelectedEvent] = useState<SchoolEvent | null>(null);

  // Shoot Visits Schedule
  const shootVisits: ShootVisitItem[] = [
    {
      date: "3rd November 2026",
      branch: "Charholi Branch",
      time: "10:00 AM to 4:00 PM",
      description: "Full day campus photography, classroom media, and student activity coverage.",
      badge: "Charholi Campus"
    },
    {
      date: "14th November 2026",
      branch: "Moshi Branch",
      time: "8:30 AM to 11:30 AM",
      description: "Children’s Day & Jawaharlal Nehru Jayanti special celebration shoot.",
      badge: "Moshi Campus"
    },
    {
      date: "23rd November 2026",
      branch: "Dighi Branch",
      time: "10:00 AM to 4:00 PM",
      description: "Full day campus facilities, interactive learning, and campus environment shoot.",
      badge: "Dighi Campus"
    },
    {
      date: "28th November 2026",
      branch: "Moshi Branch",
      time: "8:30 AM to 3:00 PM",
      description: "Annual Sports Day athletic events, march past, and prize distribution coverage.",
      badge: "Moshi Sports Ground"
    }
  ];

  // November Day-by-Day Calendar
  const novemberSchedule: NovemberDailyEvent[] = [
    {
      dateNumber: "2nd Nov",
      events: ["Guru Ram Das Birth Anniversary"],
      category: "Jayanti & Observance",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      dateNumber: "4th Nov",
      events: [
        "National Stress Awareness Day",
        "Vasudeo Balwant Phadke’s Birth Anniversary"
      ],
      category: "National Day & Memorial",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      dateNumber: "5th Nov",
      events: [
        "Vasubaras (Start of Diwali)",
        "World Tsunami Awareness Day"
      ],
      category: "Festival & Global Observance",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200"
    },
    {
      dateNumber: "6th Nov",
      events: ["Dhanteras"],
      category: "Festival Celebration",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      dateNumber: "7th Nov",
      events: ["C. V. Raman’s Birth Anniversary"],
      category: "Science & Academic Tribute",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      dateNumber: "8th Nov",
      events: [
        "Lakshmi Pujan",
        "Narak Chaturdashi"
      ],
      category: "Diwali Festival",
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200"
    },
    {
      dateNumber: "10th Nov",
      events: [
        "Bali Pratipada",
        "Govardhan Puja"
      ],
      category: "Festival Celebration",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      dateNumber: "11th Nov",
      events: [
        "National Education Day",
        "Bhaubeej"
      ],
      category: "National Day & Festival",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      dateNumber: "14th Nov",
      events: [
        "Children’s Day",
        "Jawaharlal Nehru Jayanti"
      ],
      category: "Celebration & Media Shoot",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      shootVisit: {
        branch: "Moshi Branch",
        time: "8:30 AM to 11:30 AM"
      }
    },
    {
      dateNumber: "16th Nov",
      events: ["School Re-Opens (Post-Diwali Session)"],
      category: "Academic Schedule",
      badgeColor: "bg-green-50 text-green-700 border-green-200"
    },
    {
      dateNumber: "17th Nov",
      events: [
        "International Students’ Day",
        "Lala Lajpat Rai’s Death Anniversary"
      ],
      category: "International Observance & Memorial",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      dateNumber: "18th Nov",
      events: ["National Naturopathy Day"],
      category: "Health & Wellness",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      dateNumber: "19th Nov",
      events: ["International Men’s Day"],
      category: "International Observance",
      badgeColor: "bg-slate-50 text-slate-700 border-slate-200"
    },
    {
      dateNumber: "20th Nov",
      events: ["Sant Namdev Maharaj Jayanti"],
      category: "Cultural & Devotional Jayanti",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      dateNumber: "21st Nov",
      events: ["World Television Day"],
      category: "Global Media Observance",
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200"
    },
    {
      dateNumber: "24th Nov",
      events: ["Guru Nanak Dev Jayanti"],
      category: "Religious & Jayanti Celebration",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      dateNumber: "26th Nov",
      events: ["Constitution Day of India (Samvidhan Divas)"],
      category: "National Academic Observance",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      dateNumber: "27th Nov",
      events: ["Harivansh Rai Bachchan’s Birth Anniversary"],
      category: "Literary Tribute",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      dateNumber: "28th Nov",
      events: ["Annual Sports Day"],
      category: "Athletics, Competitions & Shoot",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      shootVisit: {
        branch: "Moshi Branch",
        time: "8:30 AM to 3:00 PM"
      }
    }
  ];

  // Full Events Cards List
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
      title: "Lal Bahadur Shastri Jayanti",
      date: "Oct 02, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Commemorating the birth anniversary of Bharat Ratna Lal Bahadur Shastri, reflecting on his inspiring slogan 'Jai Jawan, Jai Kisan', simplicity, and patriotic leadership.",
      image: "/LalBahadurShastriJayanti.png"
    },
    {
      id: 6,
      title: "Dandiya Celebration",
      date: "Oct 16, 2026",
      time: "School Hours / Celebrated",
      location: "School Campus Ground",
      category: "Cultural",
      description: "A vibrant festive celebration featuring traditional folk dance, music, ethnic attire, and cultural bonding among students and teachers.",
      image: "/DandiyaCelebration.png"
    },
    {
      id: 7,
      title: "Diya Decoration & Bagless Day",
      date: "Oct 21 - 30, 2026",
      time: "During School Hours",
      location: "School Art Rooms & Quadrangle",
      category: "Cultural",
      description: "Diwali creative preparations including diya colouring, eco-friendly handicrafts, and a student-managed diya exhibition and sale.",
      image: "/DiyaDecoration.png"
    },
    {
      id: 8,
      title: "Guru Ram Das Birth Anniversary",
      date: "Nov 02, 2026",
      time: "Morning Assembly",
      location: "School Assembly Hall",
      category: "Celebration",
      description: "Observance honoring the fourth Sikh Guru, his spiritual teachings on humility, selfless service, and contribution to society.",
      image: "/cultural.JPG"
    },
    {
      id: 9,
      title: "Vasubaras, Dhanteras & Diwali Festivities",
      date: "Nov 05 - 11, 2026",
      time: "Festival Schedule",
      location: "School Campus",
      category: "Cultural",
      description: "A festive series of celebrations embracing Vasubaras, Dhanteras, Lakshmi Pujan, Bali Pratipada, and Bhaubeej fostering Indian cultural heritage.",
      image: "/DiyaDecoration.png"
    },
    {
      id: 10,
      title: "Children’s Day & Jawaharlal Nehru Jayanti",
      date: "Nov 14, 2026",
      time: "8:30 AM - 11:30 AM",
      location: "School Auditorium & Campus",
      category: "Celebration",
      description: "Joyful celebration honoring Pandit Jawaharlal Nehru's love for children, featuring student role-play, fun games, and special Moshi branch campus media shoot.",
      image: "/ChildrensDayQuiz.png"
    },
    {
      id: 11,
      title: "School Re-Opens After Diwali Vacation",
      date: "Nov 16, 2026",
      time: "Regular School Hours",
      location: "All School Campuses",
      category: "Academic",
      description: "Resumption of regular classes, academic activities, curriculum progression, and Term 2 goals following the Diwali vacation break.",
      image: "/School1.jpg"
    },
    {
      id: 12,
      title: "Guru Nanak Dev Jayanti",
      date: "Nov 24, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Cultural",
      description: "Commemorating Guru Nanak Dev Ji’s inspiring preachings of universal brotherhood, peace, equality, and righteousness.",
      image: "/cultural.JPG"
    },
    {
      id: 13,
      title: "Constitution Day of India (Samvidhan Divas)",
      date: "Nov 26, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Commemoration of Samvidhan Divas with collective preamble reading, civic awareness sessions, and student speeches on democratic values.",
      image: "/ConstitutionDay2026.png"
    },
    {
      id: 14,
      title: "Annual Sports Day",
      date: "Nov 28, 2026",
      time: "8:30 AM - 3:00 PM",
      location: "School Sports Ground, Moshi",
      category: "Sports",
      description: "The premier athletic meet of the year featuring torch lighting, march past, track & field events, relays, awards ceremony, and full campus video coverage.",
      image: "/Sports2.jpg"
    },
    {
      id: 15,
      title: "Dr. Babasaheb Ambedkar Mahaparinirvan Diwas",
      date: "Dec 06, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Observing Mahaparinirvan Diwas with floral tributes, commemorative speeches, and honoring Dr. B. R. Ambedkar's monumental contributions to equality and the Constitution.",
      image: "/AmbedkarDiwas.png"
    },
    {
      id: 16,
      title: "Inter-House Debate Competition",
      date: "Dec 12, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Competitive debate championship for Classes 6 to 10 encouraging articulate arguments, critical thinking, and public speaking confidence.",
      image: "/DebateCompetition.png"
    },
    {
      id: 17,
      title: "Christmas Celebration",
      date: "Dec 23, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Cultural",
      description: "Festive celebration featuring Christmas carols, Santa Claus visit, skits, exchange of greeting cards, and spreading joy.",
      image: "/ChristmasCelebration.png"
    },
    {
      id: 18,
      title: "Annual Day Celebration",
      date: "Dec 24, 2026",
      time: "As Per Event Schedule",
      location: "Main Open Air Theatre & Stage",
      category: "Cultural",
      description: "The grandest cultural milestone of the school year showcasing theatrical plays, classical and fusion dances, musical choir, and annual prize distribution.",
      image: "/AnnualDay.JPG"
    },
    {
      id: 19,
      title: "Swami Vivekananda Jayanti & Kite Activity",
      date: "Jan 09 - 12, 2027",
      time: "During School Hours",
      location: "School Campus",
      category: "Cultural",
      description: "Observance of National Youth Day and Rajmata Jijau Jayanti paired with a hands-on kite making activity on Bagless Day.",
      image: "/KiteActivity.png"
    },
    {
      id: 20,
      title: "Republic Day & Art Exhibition (3 Days)",
      date: "Jan 25 - 27, 2027",
      time: "9:00 AM - 1:00 PM",
      location: "School Ground & Art Gallery",
      category: "Exhibition",
      description: "Grand 3-day student fine arts and crafts exhibition paired with patriotic Republic Day parade, flag unfurling, and cultural performances.",
      image: "/Exi2.jpg"
    },
    {
      id: 21,
      title: "Science & Robotics Exhibition",
      date: "Feb 13, 2027",
      time: "During School Hours",
      location: "Robotics Lab & Quadrangle",
      category: "Exhibition",
      description: "Interactive showcase where students demonstrate working science models, IoT prototypes, robotics kits, and innovative technological solutions.",
      image: "/RoboticsLab1.JPG"
    },
    {
      id: 22,
      title: "Chhatrapati Shivaji Maharaj Jayanti",
      date: "Feb 19, 2027",
      time: "During School Hours",
      location: "School Campus Ground",
      category: "Cultural",
      description: "Honoring the legendary Maratha warrior king with traditional lezim performances, historical speeches, powadas, and inspiring student tributes.",
      image: "/ShivajiJayanti.png"
    },
    {
      id: 23,
      title: "Marathi Divas & National Science Day",
      date: "Feb 27 - 28, 2027",
      time: "During School Hours",
      location: "Science Labs & Auditorium",
      category: "Academic",
      description: "Tribute to Marathi language literature and heritage followed by National Science Day research experiments and live demonstrations.",
      image: "/Pract1.jpg"
    },
    {
      id: 24,
      title: "International Women’s Day",
      date: "Mar 08, 2027",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Celebration",
      description: "Felicitation of women faculty, guest talks on women empowerment, inspiring leadership presentations, and student appreciation sessions.",
      image: "/WomensDay.png"
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm text-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Calendar size={14} /> Mark Your Calendar
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
            Upcoming Events
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto text-base md:text-lg">
            Stay updated with the latest happenings, academic milestones, November celebration days, and campus shoot visits at Gayatri English Medium School.
          </p>

          {/* Quick Filter Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Overview
            </button>
            <button
              onClick={() => setActiveTab('november')}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'november'
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-200 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Sparkles size={14} /> November 2026 Schedule
            </button>
            <button
              onClick={() => setActiveTab('shoots')}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'shoots'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Camera size={14} /> Campus Shoot Visits
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'featured'
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-200 scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Featured Events
            </button>
          </div>
        </div>

        {/* SECTION 1: Campus Shoot Visits Schedule */}
        {(activeTab === 'all' || activeTab === 'shoots') && (
          <div className="mb-20 animate-fade-in-up">
            <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                      <Camera size={13} /> Official Media Schedule
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                      Campus Shoot Visits (November 2026)
                    </h2>
                    <p className="text-slate-300 text-sm md:text-base mt-2 max-w-2xl font-medium">
                      Photography and documentary video production sessions scheduled across our campuses for student activities and school events.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold text-slate-200 flex items-center gap-2">
                      <Video size={14} className="text-emerald-400" /> 4 Scheduled Visits
                    </span>
                  </div>
                </div>

                {/* Shoot Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {shootVisits.map((shoot, idx) => (
                    <div 
                      key={idx}
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-emerald-400/50 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase tracking-wider rounded-full border border-emerald-500/30">
                            {shoot.badge}
                          </span>
                          <Camera size={16} className="text-slate-400 group-hover:text-emerald-300 transition-colors" />
                        </div>

                        <h3 className="text-xl font-black text-white mb-2 group-hover:text-emerald-300 transition-colors">
                          {shoot.branch}
                        </h3>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-slate-300 text-xs font-semibold">
                            <Calendar size={13} className="text-indigo-400" />
                            <span>{shoot.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold">
                            <Clock size={13} className="text-emerald-400" />
                            <span>{shoot.time}</span>
                          </div>
                        </div>

                        <p className="text-slate-300 text-xs leading-relaxed font-normal">
                          {shoot.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-slate-400">
                        <span>Status</span>
                        <span className="text-emerald-400 flex items-center gap-1 font-black">
                          <CheckCircle2 size={12} /> Scheduled
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: November 2026 Day-by-Day Event Calendar */}
        {(activeTab === 'all' || activeTab === 'november') && (
          <div className="mb-20 animate-fade-in-up">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                    <Sparkles size={13} /> Monthly Planner
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    November 2026 Day-by-Day Events
                  </h2>
                  <p className="text-slate-500 text-sm md:text-base mt-2 font-medium">
                    Detailed calendar including Jayantis, national awareness days, festivals, school re-opening, and sports events.
                  </p>
                </div>
                <div className="text-xs font-bold text-slate-500 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200">
                  Total <span className="text-indigo-600 font-black">{novemberSchedule.length}</span> Active Dates in November
                </div>
              </div>

              {/* Day-by-Day Schedule Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {novemberSchedule.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-indigo-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Date Badge & Category */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-black tracking-wide shadow-sm">
                          {item.dateNumber}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${item.badgeColor}`}>
                          {item.category}
                        </span>
                      </div>

                      {/* Event Items */}
                      <div className="space-y-1.5 mt-2">
                        {item.events.map((ev, evIdx) => (
                          <div key={evIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0 group-hover:scale-125 transition-transform"></span>
                            <span className="text-slate-800 text-sm font-bold leading-snug group-hover:text-indigo-900 transition-colors">
                              {ev}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Shoot Notice if applicable */}
                    {item.shootVisit && (
                      <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] bg-emerald-50/70 text-emerald-800 px-3 py-2 rounded-xl border border-emerald-200">
                        <span className="font-bold flex items-center gap-1.5">
                          <Camera size={13} className="text-emerald-600" /> Shoot: {item.shootVisit.branch}
                        </span>
                        <span className="font-semibold text-[10px]">{item.shootVisit.time}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: Featured Upcoming Events Cards */}
        {(activeTab === 'all' || activeTab === 'featured') && (
          <div className="animate-fade-in-up">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100 text-slate-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                  <Calendar size={13} /> Annual Milestone Highlights
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                  Featured Events & Celebrations
                </h2>
                <p className="text-slate-500 text-sm md:text-base mt-1 font-medium">
                  Detailed photo showcases of major cultural, academic, and sporting milestones throughout the academic year.
                </p>
              </div>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {events.map((event, idx) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-white hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row group animate-fade-in-up"
                  style={{ animationDelay: `${(idx % 6) * 100}ms` }}
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
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-indigo-600 mb-4">
                        <div className="bg-indigo-50 p-2 rounded-lg">
                          <Calendar size={18} />
                        </div>
                        <span className="text-sm font-black uppercase tracking-widest">{event.date}</span>
                      </div>
                      
                      <h3 className="text-2xl font-black text-slate-800 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors leading-snug">
                        {event.title}
                      </h3>
                      
                      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">
                        {event.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-wider">
                          <Clock size={14} className="text-indigo-400" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-wider">
                          <MapPin size={14} className="text-indigo-400" />
                          {event.location}
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="inline-flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] hover:text-indigo-600 transition-all group/btn pt-2"
                    >
                      View Details <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal for Event Details */}
        {selectedEvent && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedEvent(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-slate-100 animate-scale-up"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-wider mb-4">
                <Tag size={12} /> {selectedEvent.category}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                {selectedEvent.title}
              </h3>

              <div className="space-y-2 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 text-slate-700 text-xs font-bold">
                  <Calendar size={15} className="text-indigo-600" /> {selectedEvent.date}
                </div>
                <div className="flex items-center gap-3 text-slate-700 text-xs font-bold">
                  <Clock size={15} className="text-indigo-600" /> {selectedEvent.time}
                </div>
                <div className="flex items-center gap-3 text-slate-700 text-xs font-bold">
                  <MapPin size={15} className="text-indigo-600" /> {selectedEvent.location}
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {selectedEvent.description}
              </p>

              <button 
                onClick={() => setSelectedEvent(null)}
                className="w-full py-3 bg-indigo-600 text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-indigo-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
