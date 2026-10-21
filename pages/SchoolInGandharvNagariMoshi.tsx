import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  BookOpen, 
  Award, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight, 
  GraduationCap, 
  School, 
  Building2, 
  Compass, 
  ShieldCheck, 
  Users, 
  Calendar,
  ExternalLink,
  Info,
  Clock,
  Sparkles,
  HeartHandshake,
  Navigation
} from 'lucide-react';

const SchoolInGandharvNagariMoshi: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "School in Gandharv Nagari Moshi | Gayatri School";
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content', 
        'Looking for a school in Gandharv Nagari Moshi? Explore Gayatri English Medium School, its location, CBSE curriculum and admission information.'
      );
    }

    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const shortlistFactors = [
    {
      title: "Location and Daily Commute",
      description: "Conveniently situated in Gandharv Nagari, Moshi, minimizing travel fatigue for students and simplifying daily morning and afternoon routines.",
      icon: <Compass className="w-6 h-6 text-[#f97316]" />
    },
    {
      title: "CBSE Curriculum & Education Board",
      description: "Recognized CBSE curriculum framework providing a national benchmark, conceptual depth, and structured assessment standards.",
      icon: <BookOpen className="w-6 h-6 text-[#1e3a8a]" />
    },
    {
      title: "Classes Currently Available",
      description: "Offering comprehensive pre-primary, primary, and secondary education. Parents should confirm specific grade availability with the admissions office.",
      icon: <School className="w-6 h-6 text-[#f97316]" />
    },
    {
      title: "Approach to Teaching and Learning",
      description: "Focus on academic excellence, hands-on practicals, conceptual understanding, and interactive classroom learning.",
      icon: <GraduationCap className="w-6 h-6 text-[#1e3a8a]" />
    },
    {
      title: "Admission Requirements and Availability",
      description: "Clear, transparent admission procedures for the 2027–28 session with dedicated counselling and guidance for incoming families.",
      icon: <Calendar className="w-6 h-6 text-[#f97316]" />
    },
    {
      title: "Communication and Enquiry Options",
      description: "Open channels for parent-school communication via direct phone (+91 95277 64646), campus visits, and digital enquiries.",
      icon: <Phone className="w-6 h-6 text-[#1e3a8a]" />
    },
    {
      title: "Overall Child Suitability & Values",
      description: "Emphasis on holistic development, character building, positive discipline, and values nurtured under Swami Vivekanand Shikshan Prasarak Mandal.",
      icon: <HeartHandshake className="w-6 h-6 text-[#f97316]" />
    }
  ];

  const faqs = [
    {
      question: "Which school is located in Gandharv Nagari Moshi?",
      answer: "Gayatri English Medium School is located at Row House 05, NH60, Gandhar Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070."
    },
    {
      question: "Where is Gayatri English Medium School located?",
      answer: "Gayatri English Medium School is located in Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Pune."
    },
    {
      question: "Is Gayatri English Medium School in Moshi?",
      answer: "Yes. Gayatri English Medium School is located in Moshi, within the Pimpri-Chinchwad area of Pune."
    },
    {
      question: "Is Gayatri English Medium School a CBSE school?",
      answer: "Yes. The school identifies itself as following the CBSE curriculum and publishes CBSE affiliation number 1130818 and school code 30740 in its official information."
    },
    {
      question: "Is there a CBSE school in Gandharv Nagari Moshi?",
      answer: "Gayatri English Medium School is located in Gandharv Nagari, Moshi and follows the CBSE curriculum. Parents should contact the school for the latest information about classes and admissions."
    },
    {
      question: "What is the address of Gayatri English Medium School?",
      answer: "The official address is Row House 05, NH60, Gandhar Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070."
    },
    {
      question: "How can parents enquire about admission?",
      answer: "Parents can use the admission enquiry option on the school's official website or contact the school directly for current admission information."
    },
    {
      question: "Is admission currently open at Gayatri English Medium School?",
      answer: "The school's official website currently displays an Admissions Open 2027-28 message. Parents should contact the school to confirm current availability and admission requirements."
    },
    {
      question: "What board does Gayatri English Medium School follow?",
      answer: "Gayatri English Medium School follows the CBSE curriculum. The school publishes affiliation number 1130818 and school code 30740 in its official information."
    },
    {
      question: "How can parents contact Gayatri English Medium School?",
      answer: "Parents can contact the school at +91 95277 64646 or email contact@gayatrischoolpune.com. The school is located at Row House 05, NH60, Gandhar Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070."
    },
    {
      question: "Is Gayatri English Medium School suitable for families in Moshi?",
      answer: "Families in Moshi can consider the school based on factors such as location, curriculum, admission requirements and their child's educational needs. Parents should review the current school information and contact the school before making an admission decision."
    }
  ];

  return (
    <div className="bg-[#fff9f2] min-h-screen text-[#1e3a8a]">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-orange-100/50 via-[#fff9f2] to-[#fff9f2]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f97316]/10 text-[#f97316] rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-[#f97316]/20">
            <MapPin size={14} /> Gandharv Nagari, Sector 5 • Moshi, PCMC
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 font-serif">
            School in Gandharv Nagari Moshi – <br className="hidden md:block" />
            <span className="text-[#f97316]">Gayatri English Medium School</span>
          </h1>

          <p className="text-sm md:text-base font-bold text-slate-500 uppercase tracking-wider mb-8">
            Row House 05, NH60, Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070
          </p>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 font-medium">
            If you are looking for a <strong>school in Gandharv Nagari Moshi</strong>, Gayatri English Medium School is located in Gandharv Nagari, Sector No. 5, Moshi, within Pimpri-Chinchwad, Pune. The school provides an English-medium education and follows the CBSE curriculum. Its official website lists the school at Row House 05, NH60, Gandhar Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070.
          </p>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
            For parents comparing schools in the Gandharv Nagari and Moshi area, the school's location, academic board and official admission information can help them decide whether it is suitable for their child.
          </p>

          {/* Quick Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Location</span>
              <span className="text-base sm:text-lg font-black text-[#1e3a8a]">Gandharv Nagari</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Sector</span>
              <span className="text-base sm:text-lg font-black text-[#f97316]">Sector No. 5, Moshi</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Board</span>
              <span className="text-base sm:text-lg font-black text-[#1e3a8a]">CBSE (1130818)</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">School Code</span>
              <span className="text-base sm:text-lg font-black text-[#1e3a8a]">30740</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/enquire"
              className="bg-[#f97316] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-orange-200 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Admission Enquiry <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#1a337a] transition-all shadow-lg inline-flex items-center gap-2"
            >
              Contact School
            </Link>
            <a
              href="tel:+919527764646"
              className="bg-white text-slate-700 border border-slate-200 px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-all inline-flex items-center gap-2"
            >
              <Phone size={14} className="text-[#f97316]" /> +91 95277 64646
            </a>
          </div>
        </div>
      </section>

      {/* Overview Context Card */}
      <section className="py-8 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-orange-50">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Neighborhood Schooling
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              School in Gandharv Nagari Moshi
            </h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Gayatri English Medium School is a school located in Gandharv Nagari, Moshi, Pimpri-Chinchwad, Pune. The school is identified on its official website as Gayatri English Medium School and publishes its CBSE affiliation number as <strong>1130818</strong>, along with school code <strong>30740</strong>.
              </p>
              <p>
                Its location places the school within the Gandharv Nagari area of Moshi, making the school relevant to families specifically searching for a school in Gandharv Nagari as well as parents exploring schooling options in Moshi and the wider Pimpri-Chinchwad area.
              </p>
              <p className="font-semibold text-[#1e3a8a]">
                Parents looking for a school should consider factors such as the school's location, curriculum, admission information, academic requirements and suitability for their child's needs before making a decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Gayatri English Medium School */}
      <section className="py-8 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0f2356] text-white p-8 md:p-12 rounded-3xl shadow-xl">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs block mb-3">
              Institutional Heritage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black mb-6">
              About Gayatri English Medium School
            </h2>
            
            <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-6">
              Gayatri English Medium School is part of the educational institution associated with <strong>Swami Vivekanand Shikshan Prasarak Mandal</strong>. Official school information identifies the school with Gandharv Nagari, Moshi, Pimpri-Chinchwad, Pune.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-orange-300 mb-2 flex items-center gap-2">
                  <Award size={20} /> Academic Development & Values
                </h3>
                <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                  The school website describes its educational focus around academic development, holistic growth and character building.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-orange-300 mb-2 flex items-center gap-2">
                  <ShieldCheck size={20} /> Recognition & Affiliation
                </h3>
                <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                  The school's official documents provide additional information about its recognition and affiliation status. Parents can refer to published documentation or contact the school directly.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-blue-800/80">
              <span className="text-xs uppercase tracking-widest text-blue-200">
                Managed under Swami Vivekanand Shikshan Prasarak Mandal
              </span>
              <Link 
                to="/about"
                className="text-orange-300 hover:text-white font-bold text-xs uppercase tracking-widest inline-flex items-center gap-1 transition-colors"
              >
                Learn More About Our Foundation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Consider a School in Gandharv Nagari, Moshi? */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Daily Convenience & Quality
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              Why Consider a School in Gandharv Nagari, Moshi?
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Choosing a school close to a family's home can make the daily school routine easier to manage. For families living in Gandharv Nagari and nearby parts of Moshi, the location of a school is therefore an important factor when comparing education options.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#f97316]" /> What Parents May Consider When Shortlisting a School:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shortlistFactors.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#fff9f2] p-6 rounded-2xl border border-orange-100 hover:shadow-sm transition-shadow flex items-start gap-4"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-orange-100 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base md:text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-slate-50 border border-slate-200 rounded-2xl text-center">
            <p className="text-slate-700 text-sm md:text-base font-medium">
              Gayatri English Medium School's official address places it in Gandharv Nagari, Sector No. 5, Moshi, within Pimpri-Chinchwad. Parents can contact the school directly to confirm current admission details and other information relevant to their child's application.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Approach and Learning Environment */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-orange-50">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Curriculum & Teaching
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              Academic Approach and Learning Environment
            </h2>

            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Gayatri English Medium School describes its educational approach around <strong>academic excellence, holistic development and character building</strong>.
              </p>
              <p>
                The school follows the <strong>CBSE curriculum</strong>, with its official affiliation information published on the school's website. The school's affiliation number is <span className="font-bold text-[#1e3a8a]">1130818</span>, and its school code is <span className="font-bold text-[#1e3a8a]">30740</span>.
              </p>
              
              <div className="p-6 bg-orange-50/70 rounded-2xl border border-orange-200/80 my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-black text-slate-900 text-base mb-1">
                    Looking for Broader CBSE Information?
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Explore detailed curriculum frameworks, evaluations, and school choices in our dedicated CBSE guide.
                  </p>
                </div>
                <Link
                  to="/cbse-school-in-pimpri-chinchwad"
                  className="bg-[#1e3a8a] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#152a65] transition-colors flex-shrink-0 inline-flex items-center gap-1.5"
                >
                  CBSE in PCMC Guide <ArrowRight size={14} />
                </Link>
              </div>

              <p>
                For the most accurate information about the classes currently accepting admissions, academic requirements and other programme-specific details, parents should confirm the latest information directly with the school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Location in Gandharv Nagari, Moshi (Map & Address) */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
                Direct Location Signal
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
                School Location in Gandharv Nagari, Moshi
              </h2>

              <div className="bg-[#fff9f2] p-6 rounded-2xl border border-orange-200 mb-6">
                <span className="text-xs uppercase font-black text-[#f97316] tracking-widest block mb-2">
                  Official Campus Address
                </span>
                <p className="text-slate-900 font-bold text-base md:text-lg leading-relaxed mb-3">
                  Row House 05, NH60, Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070
                </p>
                <p className="text-slate-600 text-xs md:text-sm">
                  The location is also described in the school's official documentation as <strong>Gandharv Nagari, Pune-Nashik Highway, Moshi</strong>.
                </p>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                This location information is particularly useful for parents searching online for a school in Gandharv Nagari Moshi and wanting to confirm whether Gayatri English Medium School is situated in the area.
              </p>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Parents should use the school's official contact details or map information when planning a school visit and confirm any current visiting requirements before travelling.
              </p>
            </div>

            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[380px] relative">
              <iframe
                title="Gayatri English Medium School Gandharv Nagari Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2033626298586!2d73.8447814!3d18.6661448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7f465d6a2f7%3A0xe54e26eb2a853612!2sGayatri%20English%20Medium%20School!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Information Card */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#ea580c] to-[#f97316] text-white p-8 md:p-14 rounded-3xl shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 text-white rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-white/30 backdrop-blur-sm">
              <Calendar size={14} /> Admissions Open 2027–28
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 font-serif">
              Admission Information
            </h2>

            <p className="text-orange-50 text-base md:text-lg leading-relaxed mb-6 font-medium">
              The school's official website currently displays an <strong>Admissions Open 2027-28</strong> message and provides an admission enquiry option.
            </p>

            <p className="text-orange-100 text-sm md:text-base leading-relaxed mb-8">
              Because admission requirements, available seats, class availability and application procedures can change, parents should confirm the latest information directly with Gayatri English Medium School before submitting an application. For parents researching the broader admission process, our <Link to="/admissions" className="underline font-bold hover:text-white">school admission in Moshi</Link> page can provide additional information.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/enquire"
                className="bg-white text-[#ea580c] px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-all shadow-md inline-flex items-center gap-2"
              >
                Enquire Online <ArrowRight size={16} />
              </Link>
              <Link
                to="/admissions"
                className="bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#152a65] transition-all shadow-md"
              >
                View Admissions Page
              </Link>
              <a
                href="tel:+919527764646"
                className="bg-white/10 text-white border border-white/30 px-6 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all inline-flex items-center gap-2"
              >
                <Phone size={14} /> Call +91 95277 64646
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How Parents Can Enquire About the School */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#fff9f2] p-8 md:p-12 rounded-3xl border border-orange-100">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Official Communication Channels
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              How Parents Can Enquire About the School
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-8">
              Parents who want to know more about Gayatri English Medium School can contact the school using the official contact information published on its website:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100/80">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">School</span>
                <p className="font-bold text-slate-900 text-base mb-4">Gayatri English Medium School</p>

                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">Campus Address</span>
                <p className="font-medium text-slate-700 text-sm leading-relaxed">
                  Row House 05, NH60, Gandhar Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100/80">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">Direct Phone</span>
                <a href="tel:+919527764646" className="font-bold text-[#f97316] text-lg block mb-4 hover:underline">
                  +91 95277 64646
                </a>

                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">Official Email</span>
                <a href="mailto:contact@gayatrischoolpune.com" className="font-bold text-[#1e3a8a] text-sm break-all hover:underline">
                  contact@gayatrischoolpune.com
                </a>
              </div>
            </div>

            <div className="p-4 bg-orange-50/70 border border-orange-200/60 rounded-xl text-center">
              <p className="text-slate-700 text-xs md:text-sm font-medium">
                For admission-related questions, parents should confirm the current class availability, application requirements, documents, dates and other admission conditions directly with the school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (All 11 FAQs) */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Everything you need to know about schooling at Gayatri English Medium School in Gandharv Nagari, Moshi.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 hover:bg-orange-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-black text-slate-900 text-base md:text-lg flex items-center gap-3">
                      <span className="text-xs font-serif text-[#f97316] bg-orange-100 px-2 py-0.5 rounded-md">
                        Q{index + 1}
                      </span>
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#f97316]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 text-sm md:text-base leading-relaxed border-t border-orange-100 bg-[#fff9f2]/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 px-6 lg:px-16 bg-gradient-to-br from-slate-900 via-[#1e3a8a] to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Start Your Child's Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif mb-6 leading-tight">
            Connect with Gayatri English Medium School
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Visit our campus at Gandharv Nagari, Sector No. 5, Moshi or speak directly with our admissions office to learn more about our curriculum and enrollment process.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/enquire"
              className="bg-[#f97316] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#ea580c] transition-all shadow-xl hover:shadow-orange-500/20 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Enquire About Admission <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-all shadow-xl"
            >
              Contact the School
            </Link>
            <Link
              to="/english-medium-school-in-moshi"
              className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              English Medium School in Moshi
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolInGandharvNagariMoshi;
