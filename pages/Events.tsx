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
      location: "School Auditorium",
      category: "Cultural",
      description: "Observing Guru Ram Das Birth Anniversary honoring his spiritual teachings of selfless service, humility, and equality.",
      image: "/cultural.JPG"
    },
    {
      id: 9,
      title: "Campus Shoot Visit – Charholi Branch",
      date: "Nov 03, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Charholi Campus",
      category: "Media",
      description: "Official campus photography, student learning documentation, and video coverage at the Charholi Branch.",
      image: "/School1.jpg"
    },
    {
      id: 10,
      title: "National Stress Awareness Day & Vasudeo Balwant Phadke Jayanti",
      date: "Nov 04, 2026",
      time: "During School Hours",
      location: "School Campus",
      category: "Academic",
      description: "Awareness sessions on student mental wellness and mindfulness, along with a historical tribute to revolutionary freedom fighter Vasudeo Balwant Phadke.",
      image: "/Lib.jpg"
    },
    {
      id: 11,
      title: "Diwali Celebrations (Vasubaras & Dhanteras)",
      date: "Nov 05 - 06, 2026",
      time: "During School Hours",
      location: "School Campus",
      category: "Cultural",
      description: "Festive celebrations welcoming Diwali with Vasubaras and Dhanteras, fostering Indian cultural heritage and traditions.",
      image: "/DiyaDecoration.png"
    },
    {
      id: 12,
      title: "C. V. Raman’s Birth Anniversary",
      date: "Nov 07, 2026",
      time: "During School Hours",
      location: "Science Labs",
      category: "Academic",
      description: "Celebrating the birth anniversary of Nobel Laureate Sir C. V. Raman with special science experiments and discovery discussions.",
      image: "/Pract1.jpg"
    },
    {
      id: 13,
      title: "Diwali Festivities (Lakshmi Pujan, Bali Pratipada & Bhaubeej)",
      date: "Nov 08 - 11, 2026",
      time: "Festival Schedule",
      location: "School Community",
      category: "Cultural",
      description: "Celebrating Lakshmi Pujan, Narak Chaturdashi, Bali Pratipada, Govardhan Puja, and Bhaubeej with festive blessings.",
      image: "/cultural.JPG"
    },
    {
      id: 14,
      title: "National Education Day",
      date: "Nov 11, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Commemorating the birth anniversary of Maulana Abul Kalam Azad, emphasizing literacy, innovative learning, and academic excellence.",
      image: "/Edu.jpg"
    },
    {
      id: 15,
      title: "Children’s Day, Jawaharlal Nehru Jayanti & Shoot Visit",
      date: "Nov 14, 2026",
      time: "8:30 AM - 11:30 AM",
      location: "Moshi Campus & Auditorium",
      category: "Celebration",
      description: "Special Children's Day celebration honoring Pandit Jawaharlal Nehru with student role-play, fun games, and official Moshi branch campus photoshoot (8:30 to 11:30 AM).",
      image: "/ChildrensDayQuiz.png"
    },
    {
      id: 16,
      title: "School Re-Opens After Diwali Vacation",
      date: "Nov 16, 2026",
      time: "Regular School Hours",
      location: "All School Campuses",
      category: "Academic",
      description: "School resumes after Diwali break for the second academic term with refreshed energy, curriculum milestones, and student projects.",
      image: "/School2.jpg"
    },
    {
      id: 17,
      title: "International Students’ Day & Lala Lajpat Rai Memorial",
      date: "Nov 17, 2026",
      time: "During School Hours",
      location: "School Assembly Hall",
      category: "Academic",
      description: "Celebrating student empowerment worldwide while paying patriotic homage to 'Punjab Kesari' Lala Lajpat Rai on his death anniversary.",
      image: "/cultural.JPG"
    },
    {
      id: 18,
      title: "National Naturopathy Day",
      date: "Nov 18, 2026",
      time: "During School Hours",
      location: "School Health Center",
      category: "Health",
      description: "Promoting natural wellness habits, balanced nutrition, nature cure, and yoga for holistic student well-being.",
      image: "/HealthCheckup.jpg"
    },
    {
      id: 19,
      title: "International Men’s Day",
      date: "Nov 19, 2026",
      time: "During School Hours",
      location: "School Campus",
      category: "Celebration",
      description: "Recognizing positive male role models, celebrating the dedication of male staff, teachers, and fathers in our school community.",
      image: "/BhongaleSir.jpg"
    },
    {
      id: 20,
      title: "Sant Namdev Maharaj Jayanti",
      date: "Nov 20, 2026",
      time: "Morning Assembly",
      location: "School Auditorium",
      category: "Cultural",
      description: "Paying devotional homage to the revered Bhakti saint-poet Sant Namdev Maharaj and reflecting on his timeless abhangas of unity and devotion.",
      image: "/cultural.JPG"
    },
    {
      id: 21,
      title: "World Television Day",
      date: "Nov 21, 2026",
      time: "During School Hours",
      location: "AV Room & Media Lab",
      category: "Academic",
      description: "Educational documentary screenings highlighting the role of television and broadcast media in global education and communication.",
      image: "/ComputerLab-Modern.png"
    },
    {
      id: 22,
      title: "Campus Shoot Visit – Dighi Branch",
      date: "Nov 23, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Dighi Campus",
      category: "Media",
      description: "Comprehensive photography and videography session covering classroom infrastructure, activities, and campus life at Dighi Branch.",
      image: "/School1.jpg"
    },
    {
      id: 23,
      title: "Guru Nanak Dev Jayanti",
      date: "Nov 24, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Cultural",
      description: "Commemorating the birth anniversary of Guru Nanak Dev Ji, celebrating his teachings of universal equality, selfless service, and compassion.",
      image: "/cultural.JPG"
    },
    {
      id: 24,
      title: "Constitution Day of India",
      date: "Nov 26, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Commemoration of Samvidhan Divas with collective preamble reading, civic awareness sessions, and student speeches on democratic values.",
      image: "/ConstitutionDay2026.png"
    },
    {
      id: 25,
      title: "Harivansh Rai Bachchan’s Birth Anniversary",
      date: "Nov 27, 2026",
      time: "During School Hours",
      location: "School Library",
      category: "Cultural",
      description: "Literary tribute and poetry recitation sessions celebrating the iconic works and inspirational verses of Dr. Harivansh Rai Bachchan.",
      image: "/Lib.jpg"
    },
    {
      id: 26,
      title: "Annual Sports Day & Shoot Visit – Moshi",
      date: "Nov 28, 2026",
      time: "8:30 AM - 3:00 PM",
      location: "School Sports Ground, Moshi",
      category: "Sports",
      description: "The premier athletic meet of the year featuring torch lighting, march past, sprint races, relays, and complete professional sports photoshoot at Moshi (8:30 AM to 3:00 PM).",
      image: "/Sports2.jpg"
    },
    {
      id: 27,
      title: "Dr. Babasaheb Ambedkar Mahaparinirvan Diwas",
      date: "Dec 06, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Observing Mahaparinirvan Diwas with floral tributes, commemorative speeches, and honoring Dr. B. R. Ambedkar's monumental contributions to equality and the Constitution.",
      image: "/AmbedkarDiwas.png"
    },
    {
      id: 28,
      title: "Inter-House Debate Competition",
      date: "Dec 12, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Academic",
      description: "Competitive debate championship for Classes 6 to 10 encouraging articulate arguments, critical thinking, and public speaking confidence.",
      image: "/DebateCompetition.png"
    },
    {
      id: 29,
      title: "Christmas Celebration",
      date: "Dec 23, 2026",
      time: "During School Hours",
      location: "School Auditorium",
      category: "Cultural",
      description: "Festive celebration featuring Christmas carols, Santa Claus visit, skits, exchange of greeting cards, and spreading joy.",
      image: "/ChristmasCelebration.png"
    },
    {
      id: 30,
      title: "Annual Day Celebration",
      date: "Dec 24, 2026",
      time: "As Per Event Schedule",
      location: "Main Open Air Theatre & Stage",
      category: "Cultural",
      description: "The grandest cultural milestone of the school year showcasing theatrical plays, classical and fusion dances, musical choir, and annual prize distribution.",
      image: "/AnnualDay.JPG"
    },
    {
      id: 31,
      title: "Swami Vivekananda Jayanti & Kite Activity",
      date: "Jan 09 - 12, 2027",
      time: "During School Hours",
      location: "School Campus",
      category: "Cultural",
      description: "Observance of National Youth Day and Rajmata Jijau Jayanti paired with a hands-on kite making activity on Bagless Day.",
      image: "/KiteActivity.png"
    },
    {
      id: 32,
      title: "Republic Day & Art Exhibition (3 Days)",
      date: "Jan 25 - 27, 2027",
      time: "9:00 AM - 1:00 PM",
      location: "School Ground & Art Gallery",
      category: "Exhibition",
      description: "Grand 3-day student fine arts and crafts exhibition paired with patriotic Republic Day parade, flag unfurling, and cultural performances.",
      image: "/Exi2.jpg"
    },
    {
      id: 33,
      title: "Science & Robotics Exhibition",
      date: "Feb 13, 2027",
      time: "During School Hours",
      location: "Robotics Lab & Quadrangle",
      category: "Exhibition",
      description: "Interactive showcase where students demonstrate working science models, IoT prototypes, robotics kits, and innovative technological solutions.",
      image: "/RoboticsLab1.JPG"
    },
    {
      id: 34,
      title: "Chhatrapati Shivaji Maharaj Jayanti",
      date: "Feb 19, 2027",
      time: "During School Hours",
      location: "School Campus Ground",
      category: "Cultural",
      description: "Honoring the legendary Maratha warrior king with traditional lezim performances, historical speeches, powadas, and inspiring student tributes.",
      image: "/ShivajiJayanti.png"
    },
    {
      id: 35,
      title: "Marathi Divas & National Science Day",
      date: "Feb 27 - 28, 2027",
      time: "During School Hours",
      location: "Science Labs & Auditorium",
      category: "Academic",
      description: "Tribute to Marathi language literature and heritage followed by National Science Day research experiments and live demonstrations.",
      image: "/Pract1.jpg"
    },
    {
      id: 36,
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
