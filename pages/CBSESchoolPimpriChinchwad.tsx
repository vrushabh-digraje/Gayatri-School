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
  Info
} from 'lucide-react';

const CBSESchoolPimpriChinchwad: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "CBSE School in Pimpri Chinchwad | Gayatri School";
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Looking for a CBSE school in Pimpri Chinchwad? Explore Gayatri English Medium School in Moshi, PCMC, its CBSE affiliation, location and admissions.');
    }

    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const choiceFactors = [
    {
      title: "Understanding the CBSE Curriculum",
      description: "Parents should understand how the school implements the CBSE curriculum in everyday teaching rather than choosing a school only because it carries the CBSE label.",
      icon: <BookOpen className="w-6 h-6 text-[#f97316]" />
    },
    {
      title: "Academic Learning",
      description: "Look at how the school approaches concepts, assessment, classroom learning and student development.",
      icon: <GraduationCap className="w-6 h-6 text-[#1e3a8a]" />
    },
    {
      title: "Learning Beyond Textbooks",
      description: "A child's education also includes activities, physical development, communication, confidence, collaboration and responsible behaviour.",
      icon: <Users className="w-6 h-6 text-[#f97316]" />
    },
    {
      title: "Location and Daily Commute",
      description: "For younger students especially, the distance between home and school can affect the daily routine. A school located within the family's preferred part of PCMC may therefore be more practical.",
      icon: <Compass className="w-6 h-6 text-[#1e3a8a]" />
    },
    {
      title: "Parent-School Communication",
      description: "Parents should understand how the school communicates academic, admission and student-related information.",
      icon: <Phone className="w-6 h-6 text-[#f97316]" />
    }
  ];

  const checklistItems = [
    {
      number: "01",
      title: "Board and curriculum",
      detail: "Confirm which board the school follows and whether the curriculum matches your child's educational goals."
    },
    {
      number: "02",
      title: "School location",
      detail: "Check the actual school address and consider daily travel time. For Gayatri English Medium School, the physical location is Moshi, Pimpri-Chinchwad, rather than another PCMC locality."
    },
    {
      number: "03",
      title: "Classes offered",
      detail: "Parents should confirm the current class availability directly with the school, particularly when applying for a specific grade."
    },
    {
      number: "04",
      title: "Learning environment",
      detail: "Consider classroom learning, student participation, activities and the overall school environment."
    },
    {
      number: "05",
      title: "Facilities and activities",
      detail: "Ask the school which facilities and activities are currently available for the relevant age group rather than relying only on generic school descriptions."
    },
    {
      number: "06",
      title: "Admission process",
      detail: "Review the school's current admission information, required documents, availability and applicable process before submitting an application."
    },
    {
      number: "07",
      title: "Communication and support",
      detail: "Parents should know how to contact the school and where to obtain official information."
    }
  ];

  const comparisonPoints = [
    "Board and curriculum",
    "Actual school location",
    "Child's grade",
    "Daily commute",
    "Academic approach",
    "Activities and student development",
    "Available facilities",
    "Parent-school communication",
    "Admission requirements",
    "Overall suitability for the child"
  ];

  const faqs = [
    {
      q: "1. Which CBSE schools are available in Pimpri-Chinchwad?",
      a: "Pimpri-Chinchwad has CBSE schools across several neighbourhoods, including Moshi, Chinchwad, Pimpri, Nigdi, Akurdi, Wakad and other parts of PCMC. Current school directories show a large number of CBSE schools across the region."
    },
    {
      q: "2. Is Gayatri School in Pimpri-Chinchwad?",
      a: "Yes. Gayatri English Medium School is located in Moshi, Pimpri-Chinchwad, Pune, Maharashtra."
    },
    {
      q: "3. Is Gayatri English Medium School CBSE affiliated?",
      a: "Yes. The school's official information lists CBSE affiliation number 1130818 and school code 30740."
    },
    {
      q: "4. Where is Gayatri English Medium School located?",
      a: "The school is located at Row House 05, NH60, Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070."
    },
    {
      q: "5. What should parents consider when choosing a CBSE school?",
      a: "Parents should consider the curriculum, school location, classes offered, teaching approach, learning environment, activities, facilities, communication, admission process and daily commute."
    },
    {
      q: "6. What does CBSE mean?",
      a: "CBSE stands for the Central Board of Secondary Education, a national school education board in India."
    },
    {
      q: "7. Is Moshi part of Pimpri-Chinchwad?",
      a: "Yes. Moshi is within the Pimpri-Chinchwad urban area of Maharashtra, which is why a school physically located in Moshi can be relevant to searches for schools in Pimpri-Chinchwad."
    },
    {
      q: "8. What classes does Gayatri English Medium School offer?",
      a: "Government documentation published by the school records the CBSE affiliation application class range as Std. I to Std. XII. Parents should confirm the currently available grades for the specific academic year directly with the school."
    },
    {
      q: "9. How can parents contact Gayatri English Medium School?",
      a: "Parents can contact the school at +91 95277 64646 or contact@gayatrischoolpune.com."
    },
    {
      q: "10. Is Gayatri School suitable for families searching for a school in PCMC?",
      a: "Gayatri English Medium School is located in Moshi, Pimpri-Chinchwad, making it a relevant option for families specifically considering schools in Moshi and the wider PCMC area. Parents should evaluate the school according to their child's grade, commute and educational requirements."
    }
  ];

  const neighborhoods = [
    "Moshi", "Chinchwad", "Pimpri", "Nigdi", "Akurdi", "Wakad", "Bhosari", "Ravet", "Dighi", "Chikhali"
  ];

  return (
    <div className="bg-[#fff9f2] min-h-screen text-[#1e3a8a]">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-orange-100/50 via-[#fff9f2] to-[#fff9f2]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f97316]/10 text-[#f97316] rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-[#f97316]/20">
            <School size={14} /> CBSE Affiliated • Moshi, Pimpri-Chinchwad
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8 font-serif">
            CBSE School in Pimpri Chinchwad – <br className="hidden md:block" />
            <span className="text-[#f97316]">Gayatri English Medium School</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 font-medium">
            If you are looking for a CBSE school in Pimpri-Chinchwad, choosing the right school involves more than comparing names. Parents usually consider the school board, location, academic approach, learning environment, facilities, student development and admission process before making a decision.
          </p>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
            Gayatri English Medium School is a CBSE-affiliated school located in Moshi, Pimpri-Chinchwad, Pune, Maharashtra. The school is situated at Gandharv Nagari, Sector No. 5, and serves families looking for school education in the Moshi and wider Pimpri-Chinchwad area. The school's official website lists CBSE affiliation number <span className="font-bold text-[#1e3a8a]">1130818</span> and school code <span className="font-bold text-[#1e3a8a]">30740</span>.
          </p>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Affiliation</span>
              <span className="text-lg font-black text-[#1e3a8a]">1130818</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">School Code</span>
              <span className="text-lg font-black text-[#1e3a8a]">30740</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Board</span>
              <span className="text-lg font-black text-[#f97316]">CBSE</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Area</span>
              <span className="text-lg font-black text-[#1e3a8a]">Moshi, PCMC</span>
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
              Contact Us
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

      {/* Guide Note */}
      <section className="py-6 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto bg-blue-50/80 border border-blue-200/60 p-6 rounded-2xl flex items-start gap-4">
          <Info className="w-6 h-6 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            If your family is comparing schools across PCMC, this page explains what to look for in a CBSE school and provides verified information about <strong>Gayatri English Medium School</strong>.
          </p>
        </div>
      </section>

      {/* Looking for a CBSE School in PCMC Section */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-orange-50">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Regional Context
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              Looking for a CBSE School in Pimpri-Chinchwad?
            </h2>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
              Pimpri-Chinchwad is a large urban area with schools located across different neighbourhoods, including Moshi, Chinchwad, Pimpri, Nigdi, Akurdi, Wakad and other parts of PCMC.
            </p>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-medium">
              Because schools are spread across the region, parents should consider both the school's educational offering and its actual location.
            </p>

            <div className="mb-8">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-3">
                Key Neighborhoods across PCMC:
              </span>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((area, i) => (
                  <span key={i} className={`px-4 py-1.5 rounded-full text-xs font-bold ${area === 'Moshi' ? 'bg-[#f97316] text-white shadow-sm' : 'bg-slate-100 text-slate-600'}`}>
                    {area} {area === 'Moshi' && '★'}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-orange-50/60 rounded-2xl border-l-4 border-[#f97316]">
              <p className="text-slate-800 text-base md:text-lg font-medium leading-relaxed mb-2">
                For families specifically considering Moshi, <strong>Gayatri English Medium School</strong> provides a local CBSE school option within Pimpri-Chinchwad.
              </p>
              <p className="text-slate-600 text-sm">
                The school identifies its location as <strong>Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Location & Overview */}
      <section className="py-12 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Overview */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-orange-50 flex flex-col justify-between">
              <div>
                <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
                  Campus & Approach
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 font-serif">
                  Gayatri English Medium School in Moshi, Pimpri-Chinchwad
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-4 font-medium">
                  Gayatri English Medium School is located in Moshi, within the Pimpri-Chinchwad area of Pune.
                </p>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  The school website describes its educational approach around <strong>academic development</strong>, <strong>holistic growth</strong>, and <strong>character building</strong>. It also identifies the institution as a CBSE school serving students in Moshi and Pimpri-Chinchwad.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                <Link to="/about" className="text-[#f97316] font-bold text-sm uppercase tracking-wider hover:underline flex items-center gap-1">
                  Learn more About Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#1e3a8a] text-white p-8 md:p-12 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div>
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                  Verified Address
                </div>
                <h4 className="text-2xl font-black uppercase tracking-wider mb-6">
                  School Location
                </h4>

                <div className="space-y-4 text-blue-100 text-sm md:text-base leading-relaxed">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#f97316] shrink-0 mt-1" size={20} />
                    <span>
                      <strong className="text-white block">Gayatri English Medium School</strong>
                      Row House 05, NH60,<br />
                      Gandharv Nagari, Sector No. 5,<br />
                      Moshi, Pimpri-Chinchwad,<br />
                      Maharashtra – 411070
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Phone className="text-[#f97316] shrink-0" size={18} />
                    <a href="tel:+919527764646" className="text-white font-bold hover:text-orange-300 transition-colors">
                      +91 95277 64646
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="text-[#f97316] shrink-0" size={18} />
                    <a href="mailto:contact@gayatrischoolpune.com" className="text-white font-bold hover:text-orange-300 transition-colors break-all">
                      contact@gayatrischoolpune.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="https://www.google.com/maps?q=Gayatri+English+Medium+School+Moshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f97316] text-white px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-[#ea580c] transition"
                >
                  Open in Google Maps <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Is Gayatri English Medium School a CBSE School? */}
      <section className="py-12 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-orange-50">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-sm">
                ✓
              </span>
              <span className="text-emerald-700 font-black uppercase tracking-wider text-xs">
                Official Affiliation Status
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              Is Gayatri English Medium School a CBSE School?
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
              <strong className="text-slate-900">Yes.</strong> Gayatri English Medium School is identified on its official website as a CBSE school, with <strong>CBSE affiliation number 1130818</strong> and <strong>school code 30740</strong>.
            </p>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
              The school's published government documentation also records its CBSE affiliation process. A 2023 Maharashtra Government corrigendum clarified the school's applicable class range as Std. I to Std. XII for its CBSE affiliation application.
            </p>

            <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-sm leading-relaxed flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                Parents should always verify the latest admission and class information directly with the school before applying.
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/cbse"
                className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#1a337a] transition"
              >
                View Mandatory Public Disclosure (MPD) <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes a CBSE School a Good Choice */}
      <section className="py-16 px-6 lg:px-16 bg-orange-50/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Evaluation Guide
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              What Makes a CBSE School a Good Choice for Your Child?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base font-medium">
              CBSE is one of India's widely followed school education boards. However, the board alone should not be the only factor when selecting a school. Parents can evaluate a school based on several practical factors:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {choiceFactors.map((factor, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                  {factor.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">
                  {factor.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Should Consider When Choosing a School in PCMC (Checklist) */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Comparison Checklist
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              What Parents Should Consider When Choosing a School in PCMC
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base font-medium">
              Searching for the best CBSE school in Pimpri-Chinchwad can produce many results. Instead of relying only on rankings or advertisements, parents can compare schools using a consistent checklist:
            </p>
          </div>

          <div className="space-y-4">
            {checklistItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-orange-50 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-orange-200 transition-colors"
              >
                <span className="w-12 h-12 rounded-2xl bg-[#1e3a8a] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                  {item.number}
                </span>
                <div className="flex-grow">
                  <h3 className="text-lg font-black text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Moshi Matters */}
      <section className="py-16 px-6 lg:px-16 bg-[#1e3a8a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-orange-500/20 text-[#f97316] rounded-full text-xs font-black uppercase tracking-widest mb-4 border border-orange-500/30">
              Location & Relevance
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight font-serif mb-6">
              Why Moshi Matters When Searching for a School in Pimpri-Chinchwad
            </h2>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 mb-8 text-center max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-serif italic text-orange-200 leading-relaxed font-bold">
              "Gayatri English Medium School is located in Moshi, which is part of Pimpri-Chinchwad, Pune."
            </p>
          </div>

          <div className="space-y-6 text-blue-100 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
            <p>
              Moshi is part of the wider Pimpri-Chinchwad urban area, making it relevant to families specifically looking for schools in PCMC.
            </p>
            <p>
              Parents searching broadly for a CBSE school in Pimpri-Chinchwad may compare schools across several PCMC neighbourhoods. However, the practical choice often depends on where the family lives, the child's grade, daily travel requirements and the school's educational approach.
            </p>
            <p>
              This geographic relationship is important because it gives parents a clear understanding of where the school is actually located. The school's own website explicitly presents the institution as <strong>Gayatri English Medium School Moshi, Pimpri-Chinchwad | Pune</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* School Information Table */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Quick Reference
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-serif">
              Gayatri English Medium School: School Information
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-sm border border-slate-200 bg-white">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-5 font-bold text-slate-500 w-1/3 bg-slate-50/50">School Name</td>
                  <td className="p-5 font-black text-slate-900">Gayatri English Medium School</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-5 font-bold text-slate-500 bg-slate-50/50">Board</td>
                  <td className="p-5 font-black text-[#f97316]">CBSE</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-5 font-bold text-slate-500 bg-slate-50/50">CBSE Affiliation Number</td>
                  <td className="p-5 font-black text-[#1e3a8a]">1130818</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-5 font-bold text-slate-500 bg-slate-50/50">School Code</td>
                  <td className="p-5 font-black text-[#1e3a8a]">30740</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-5 font-bold text-slate-500 bg-slate-50/50">Location</td>
                  <td className="p-5 font-bold text-slate-800">
                    Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-5 font-bold text-slate-500 bg-slate-50/50">Contact</td>
                  <td className="p-5 font-bold text-slate-800">
                    <a href="tel:+919527764646" className="text-[#1e3a8a] hover:underline">+91 95277 64646</a>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-5 font-bold text-slate-500 bg-slate-50/50">Email</td>
                  <td className="p-5 font-bold text-slate-800">
                    <a href="mailto:contact@gayatrischoolpune.com" className="text-[#1e3a8a] hover:underline">contact@gayatrischoolpune.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-xs text-slate-400 font-medium">
            * These details are based on the school's published website and mandatory disclosure information.
          </p>
        </div>
      </section>

      {/* Admissions & Choosing Right School */}
      <section className="py-16 px-6 lg:px-16 bg-orange-50/30">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Admissions Box */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-orange-100 flex flex-col justify-between">
            <div>
              <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
                Enrollment
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 font-serif">
                Admissions at Gayatri English Medium School
              </h3>
              
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl font-black text-xs uppercase tracking-wider mb-6">
                Admissions Open 2026–27
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 font-medium">
                Parents considering admission should use the school's official admission information and contact the school directly for the latest details.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                Because admission requirements, available seats and grade-specific information can change, parents should confirm the latest details directly with the school before applying.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="bg-[#1e3a8a] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#1a337a] transition inline-flex items-center gap-2"
              >
                Visit Admissions Page <ArrowRight size={14} />
              </Link>
              <Link
                to="/enquire"
                className="bg-[#f97316] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#ea580c] transition"
              >
                Enquire Online
              </Link>
            </div>
          </div>

          {/* Choosing the Right School in PCMC */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-orange-100">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Decision Checklist
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 font-serif">
              Choosing the Right School in Pimpri-Chinchwad
            </h3>
            <p className="text-slate-500 text-xs md:text-sm font-medium mb-6">
              There is no single school that is automatically the right choice for every child. A useful comparison should consider:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {comparisonPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-700 font-semibold">
                  <CheckCircle2 size={16} className="text-[#f97316] flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-600 text-xs leading-relaxed font-medium">
              For families considering Moshi, Gayatri English Medium School can be evaluated as a CBSE school located within Pimpri-Chinchwad, alongside other schools parents may be considering across PCMC.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-[#f97316] rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <HelpCircle size={14} /> Quick Answers
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-serif mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base font-medium max-w-xl mx-auto">
              Clear answers to the most common questions parents ask when evaluating CBSE schools across Pimpri-Chinchwad.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-orange-50/50 transition-colors"
                  >
                    <span className="font-bold text-slate-900 text-base md:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown 
                      size={20} 
                      className={`text-[#f97316] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100 bg-orange-50/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="pb-24 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              Admissions Open 2026–27
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 font-serif">
              Begin Your Child's Journey at GEMS
            </h2>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-10 font-medium">
              Get in touch with our admissions team to explore campus facilities, curriculum details, and available seats.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/enquire"
                className="bg-[#f97316] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#ea580c] transition shadow-lg"
              >
                Submit Admission Enquiry
              </Link>
              <Link
                to="/contact"
                className="bg-white text-[#1e3a8a] px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition shadow-lg"
              >
                Contact Admissions Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CBSESchoolPimpriChinchwad;
