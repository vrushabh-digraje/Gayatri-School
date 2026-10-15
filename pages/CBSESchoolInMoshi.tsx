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
  Sparkles,
  Laptop,
  Palette,
  Lightbulb,
  Layers,
  FileCheck2,
  TrendingUp,
  Bookmark
} from 'lucide-react';

const CBSESchoolInMoshi: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "CBSE School in Moshi | Gayatri English Medium School";
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content', 
        'Looking for a CBSE school in Moshi, Pune? Explore Gayatri English Medium School, its CBSE curriculum, KG–12 education, location and admission enquiry.'
      );
    }

    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const studentDevelopmentInitiatives = [
    {
      title: "Read-to-Lead Initiative",
      description: "Focuses on developing a lasting interest in reading and connecting knowledge with leadership development. Structured reading complements regular academic study by encouraging students to engage with ideas beyond textbooks, enhancing vocabulary, comprehension, and independent thinking.",
      icon: <BookOpen className="w-6 h-6 text-[#f97316]" />,
      tag: "Leadership & Literacy"
    },
    {
      title: "STEM, AI, Robotics & Coding",
      description: "Integrated technology-related learning helping students build logical reasoning, computational problem-solving, and practical understanding of how contemporary technology is applied in real-world scenarios.",
      icon: <Laptop className="w-6 h-6 text-[#1e3a8a]" />,
      tag: "Future Tech"
    },
    {
      title: "Arts, Music, Dance & Theatre",
      description: "Fine arts, vocal/instrumental music, dance, and theatre programs that allow students to express themselves, build public confidence, and discover passions outside conventional academic subjects.",
      icon: <Palette className="w-6 h-6 text-[#f97316]" />,
      tag: "Creative Arts"
    },
    {
      title: "Entrepreneurship & Leadership",
      description: "Programs intended to encourage youth leadership, creative initiative, teamwork, and entrepreneurial problem-solving from an early age.",
      icon: <Lightbulb className="w-6 h-6 text-[#1e3a8a]" />,
      tag: "Life Skills"
    },
    {
      title: "E-Learning & Academic Practice",
      description: "Interactive e-learning platforms and structured regular academic test series designed to complement classroom teaching and give students diverse tools to master syllabus concepts.",
      icon: <Layers className="w-6 h-6 text-[#f97316]" />,
      tag: "Digital Learning"
    }
  ];

  const admissionSteps = [
    {
      step: "01",
      title: "Submit Online Enquiry",
      desc: "Submit an admission enquiry through the school's website or contact the admissions office directly."
    },
    {
      step: "02",
      title: "Select Relevant Standard",
      desc: "Select the intended grade from KG up to 12th Standard."
    },
    {
      step: "03",
      title: "Provide Contact Details",
      desc: "Share basic parent and student details to initiate the application profile."
    },
    {
      step: "04",
      title: "Application Review",
      desc: "The school team reviews the enquiry based on grade-level vacancies and seat availability."
    },
    {
      step: "05",
      title: "Next Steps & Discussion",
      desc: "Discuss admission formalities, document verification, and orientation with the admission counsellor."
    }
  ];

  const evaluationFactors = [
    "CBSE affiliation & valid credentials",
    "Academic levels available (KG to 12th Standard)",
    "Curriculum and learning approach beyond rote learning",
    "Student-development opportunities (STEM, Arts, Leadership)",
    "Location and daily commute accessibility in Moshi",
    "Admission process transparency and assistance",
    "Parent-school communication and regular updates",
    "Activities, sports, and holistic learning initiatives",
    "Current vacancy and availability for the required class"
  ];

  const galleryImages = [
    {
      src: "/School1.jpg",
      title: "School Exterior",
      alt: "Gayatri English Medium School campus in Moshi Pune",
      caption: "Gayatri English Medium School Moshi Campus"
    },
    {
      src: "/School2.jpg",
      title: "CBSE School in Moshi",
      alt: "CBSE school in Moshi Pune - Gayatri English Medium School",
      caption: "Campus Entrance & Academic Building"
    },
    {
      src: "/Pract1.jpg",
      title: "Students Learning",
      alt: "Students at Gayatri English Medium School Moshi Pune",
      caption: "Hands-on Practical & Lab Learning"
    },
    {
      src: "/Sports1.jpg",
      title: "Learning Activities",
      alt: "Student learning activities at Gayatri English Medium School",
      caption: "Sports, Co-curricular & Student Development"
    },
    {
      type: "map",
      title: "Campus Location",
      alt: "Gayatri English Medium School in Gandharv Nagari Moshi",
      caption: "Row House 05, NH60, Gandharv Nagari, Moshi"
    }
  ];

  const faqs = [
    {
      question: "Is Gayatri English Medium School a CBSE school in Moshi?",
      answer: "Yes. Gayatri English Medium School is affiliated with the Central Board of Secondary Education (CBSE). The school's CBSE affiliation number is 1130818, and its school code is 30740. The school is located in Moshi, Pimpri-Chinchwad, Pune."
    },
    {
      question: "Where is Gayatri English Medium School located?",
      answer: "The school's current website lists its location as Row House 05, NH60, Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070. Parents planning a visit should confirm the current address and directions with the school before travelling."
    },
    {
      question: "Which classes are available at Gayatri English Medium School?",
      answer: "The school's admission page lists the Moshi branch as KG to 12th Standard. Parents looking for admission to a particular class should contact the school to confirm current vacancies, eligibility and admission requirements."
    },
    {
      question: "Is Gayatri English Medium School an English-medium school?",
      answer: "Yes. The institution is identified as Gayatri English Medium School, and its school information describes it as an English-medium school. Parents can contact the school for details about the language of instruction and the languages offered at their child's specific academic level."
    },
    {
      question: "Is Gayatri English Medium School in Pimpri-Chinchwad?",
      answer: "Yes. Gayatri English Medium School is located in Moshi, Pimpri-Chinchwad, Pune. The school's current contact information identifies the school location within the Pimpri-Chinchwad region."
    },
    {
      question: "What academic approach does Gayatri English Medium School follow?",
      answer: "Gayatri English Medium School follows the CBSE curriculum and publishes information about competency-oriented learning, holistic development and learning beyond rote memorisation. The school's educational initiatives also include areas such as STEM, AI, robotics, coding, reading and creative activities."
    },
    {
      question: "Does Gayatri English Medium School offer education up to Class 12?",
      answer: "The school's admission information lists the Moshi branch as KG to 12th Standard. Parents should confirm the current availability and admission status of the specific standard they are interested in."
    },
    {
      question: "What is the admission process at Gayatri English Medium School?",
      answer: "Parents can submit an admission enquiry through the school's website. The published process includes application submission, review based on class vacancies, contact from an admission counsellor and completion of the admission process with guidance from the school team."
    },
    {
      question: "How can parents enquire about admission?",
      answer: "Parents can contact Gayatri English Medium School at +91 95277 64646 or use the admission enquiry option on the school's website. Parents should provide the child's required standard and confirm the latest admission information directly with the school."
    },
    {
      question: "Is Gayatri English Medium School suitable for families looking for a school in Moshi?",
      answer: "Families comparing schools in Moshi can consider Gayatri English Medium School based on factors including its CBSE affiliation, KG-to-12th educational pathway, Moshi location and published academic and student-development initiatives. Parents should visit or contact the school to evaluate whether it meets their child's specific educational requirements."
    }
  ];

  return (
    <div className="bg-[#fff9f2] min-h-screen text-[#1e3a8a]">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-orange-100/50 via-[#fff9f2] to-[#fff9f2]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f97316]/10 text-[#f97316] rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-[#f97316]/20">
            <School size={14} /> CBSE Affiliated (1130818) • KG to 12th Standard • Moshi, Pune
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 font-serif">
            CBSE School in Moshi, Pune
          </h1>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 font-medium">
            Looking for a <strong>CBSE school in Moshi, Pune</strong> that combines structured academics with opportunities for broader student development? Gayatri English Medium School is a CBSE-affiliated English-medium school located in Gandharv Nagari, Moshi, Pimpri-Chinchwad, Pune, Maharashtra.
          </p>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 font-medium">
            Gayatri English Medium School is affiliated with the Central Board of Secondary Education (CBSE) under <span className="font-bold text-[#1e3a8a]">Affiliation No. 1130818</span> and <span className="font-bold text-[#1e3a8a]">School Code 30740</span>. The school's admission information lists the Moshi branch from <strong>KG to 12th Standard</strong>.
          </p>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Board</span>
              <span className="text-lg font-black text-[#f97316]">CBSE</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Affiliation No.</span>
              <span className="text-lg font-black text-[#1e3a8a]">1130818</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Grades</span>
              <span className="text-lg font-black text-[#1e3a8a]">KG to 12th</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">School Code</span>
              <span className="text-lg font-black text-[#1e3a8a]">30740</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/enquire"
              className="bg-[#f97316] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#ea580c] transition-all shadow-lg hover:shadow-orange-200 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Enquire About Admission <ArrowRight size={16} />
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

      {/* Guide Note */}
      <section className="py-6 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto bg-blue-50/80 border border-blue-200/60 p-6 rounded-2xl flex items-start gap-4">
          <Info className="w-6 h-6 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
          <p className="text-slate-700 text-sm md:text-base leading-relaxed">
            For parents comparing CBSE schools in Moshi, the school provides information about its academic approach, student-development initiatives, admission process and location so families can make a more informed decision. <strong>Looking for admission information?</strong> Contact Gayatri English Medium School to enquire about the appropriate class, availability and next steps.
          </p>
        </div>
      </section>

      {/* School at a Glance Table */}
      <section className="py-12 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-orange-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#1e3a8a] to-[#0f2356] text-white px-8 py-6 flex items-center justify-between">
              <div>
                <span className="text-[#f97316] font-black uppercase tracking-widest text-xs block mb-1">
                  Verified Data
                </span>
                <h2 className="text-xl md:text-2xl font-serif font-black">
                  Gayatri English Medium School at a Glance
                </h2>
              </div>
              <ShieldCheck className="w-8 h-8 text-orange-400 opacity-90 hidden sm:block" />
            </div>

            <div className="divide-y divide-slate-100 text-sm md:text-base">
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 hover:bg-orange-50/30 transition-colors">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-xs sm:self-center">School</span>
                <span className="sm:col-span-2 font-black text-slate-900 mt-1 sm:mt-0">Gayatri English Medium School</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 hover:bg-orange-50/30 transition-colors">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-xs sm:self-center">Board</span>
                <span className="sm:col-span-2 font-black text-[#1e3a8a] mt-1 sm:mt-0">Central Board of Secondary Education (CBSE)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 hover:bg-orange-50/30 transition-colors">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-xs sm:self-center">CBSE Affiliation No.</span>
                <span className="sm:col-span-2 font-black text-[#f97316] mt-1 sm:mt-0">1130818</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 hover:bg-orange-50/30 transition-colors">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-xs sm:self-center">School Code</span>
                <span className="sm:col-span-2 font-bold text-slate-800 mt-1 sm:mt-0">30740</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 hover:bg-orange-50/30 transition-colors">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-xs sm:self-center">Medium</span>
                <span className="sm:col-span-2 font-bold text-slate-800 mt-1 sm:mt-0">English</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 hover:bg-orange-50/30 transition-colors">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-xs sm:self-center">Location</span>
                <span className="sm:col-span-2 font-medium text-slate-800 mt-1 sm:mt-0">Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Pune</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 hover:bg-orange-50/30 transition-colors">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-xs sm:self-center">Education Levels</span>
                <span className="sm:col-span-2 font-black text-[#1e3a8a] mt-1 sm:mt-0">KG to 12th Standard</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 hover:bg-orange-50/30 transition-colors">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-xs sm:self-center">School Type</span>
                <span className="sm:col-span-2 font-bold text-slate-800 mt-1 sm:mt-0">English-medium school</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 p-4 sm:px-8 hover:bg-orange-50/30 transition-colors">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-xs sm:self-center">Admission</span>
                <span className="sm:col-span-2 font-bold text-emerald-700 mt-1 sm:mt-0">Enquiry-based admission process</span>
              </div>
            </div>

            <div className="bg-slate-50 p-4 sm:px-8 text-center sm:text-left text-xs font-semibold text-slate-500 border-t border-slate-100">
              * Parents should confirm current class availability, vacancies and admission requirements directly with the school before applying.
            </div>
          </div>
        </div>
      </section>

      {/* Why Consider Gayatri English Medium School in Moshi? */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#fff9f2] p-8 md:p-14 rounded-3xl border border-orange-100">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Beyond Rankings & Labels
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              Why Consider Gayatri English Medium School in Moshi?
            </h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Choosing a school involves more than comparing names or searching for the phrase "best school in Moshi." Parents generally want to understand the board, academic structure, learning environment, activities, classes offered, location and admission process before making a decision.
              </p>
              <p>
                Gayatri English Medium School provides a CBSE-based educational pathway in Moshi and combines academic learning with initiatives designed to support wider student development.
              </p>
              <p>
                The school describes its approach around <strong>academic learning, reading, technology-enabled learning, creative activities, leadership development and skill-building</strong>. This gives parents several areas to consider when evaluating the school for their child.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CBSE Education at Gayatri English Medium School */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-orange-50 mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              National Benchmark
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              CBSE Education at Gayatri English Medium School
            </h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                Gayatri English Medium School is affiliated with the Central Board of Secondary Education. Its CBSE affiliation number is <span className="font-bold text-[#1e3a8a]">1130818</span>, and its school code is <span className="font-bold text-[#1e3a8a]">30740</span>.
              </p>
              <p>
                The CBSE curriculum provides a structured academic framework while supporting competency-based learning, conceptual understanding, application of knowledge and broader student development.
              </p>
              <p className="font-semibold text-[#1e3a8a]">
                For families searching for a CBSE school in Moshi Pune, the combination of CBSE affiliation and a local Moshi location makes the school relevant for parents who want their child's schooling within the Pimpri-Chinchwad region.
              </p>
            </div>
          </div>

          {/* Three Pillar Cards: Curriculum, KG to 12th, Beyond Textbooks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#f97316] mb-6">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">
                  CBSE Curriculum & Academic Learning
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  The school's published academic information refers to the CBSE curriculum and highlights learning beyond rote memorisation. Its curriculum material describes areas such as hands-on learning, competency development, real-life application, digital literacy, life skills and holistic development across academic stages.
                </p>
              </div>
              <span className="text-xs font-black uppercase text-[#f97316] tracking-wider block">
                Competency-Driven
              </span>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1e3a8a] mb-6">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">
                  Learning Across KG to 12th Standard
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  The school's admission page lists the Moshi branch as KG to 12th Standard. This gives families looking for a long-term school pathway an opportunity to enquire about education across different stages rather than treating primary, secondary and senior-secondary education as separate searches.
                </p>
              </div>
              <span className="text-xs font-black uppercase text-[#1e3a8a] tracking-wider block">
                Continuous K-12 Pathway
              </span>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-orange-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#f97316] mb-6">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">
                  Building Skills Beyond Textbooks
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  School education today involves more than completing a syllabus. Students also need opportunities to develop communication, creativity, problem-solving, confidence, collaboration and responsible decision-making through reading, STEM, technology, arts and leadership activities.
                </p>
              </div>
              <span className="text-xs font-black uppercase text-[#f97316] tracking-wider block">
                Holistic Readiness
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Learning and Student Development (5 Initiatives) */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Enrichment Programs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              Learning and Student Development Initiatives
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              A strong school experience should help students develop academically while also giving them opportunities to explore interests and build practical skills.
            </p>
          </div>

          <div className="space-y-6">
            {studentDevelopmentInitiatives.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#fff9f2] p-8 rounded-3xl border border-orange-100 hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-orange-100 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg md:text-xl font-black text-slate-900">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-100 text-[#ea580c]">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A CBSE School in Gandharv Nagari, Moshi & Location */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
                Campus Location & Proximity
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
                A CBSE School in Gandharv Nagari, Moshi
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Gayatri English Medium School is located in Gandharv Nagari, Moshi, within the Pimpri-Chinchwad region of Pune.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm mb-6">
                <span className="text-xs uppercase font-black text-[#f97316] tracking-widest block mb-2">
                  School Contact & Address
                </span>
                <p className="text-slate-900 font-bold text-base md:text-lg leading-relaxed mb-2">
                  Row House 05, NH60, Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070
                </p>
                <p className="text-slate-500 text-xs">
                  This location is particularly relevant for families searching for a CBSE school in Gandharv Nagari Moshi, an English medium school in Moshi, or a school within the wider PCMC area.
                </p>
              </div>

              <div className="p-4 bg-blue-50/70 border border-blue-200/60 rounded-xl text-xs sm:text-sm text-slate-700 font-medium">
                📍 <strong>Visitor Guidance:</strong> For parents visiting the school for an admission enquiry, it is recommended to use the school's current contact information and confirm the location before travelling.
              </div>
            </div>

            <div className="bg-slate-100 rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[380px] relative">
              <iframe
                title="Gayatri English Medium School Moshi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2033626298586!2d73.8447814!3d18.6661448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7f465d6a2f7%3A0xe54e26eb2a853612!2sGayatri%20English%20Medium%20School!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serving Families in Moshi and Pimpri-Chinchwad */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#fff9f2] p-8 md:p-12 rounded-3xl border border-orange-100 text-center max-w-3xl mx-auto">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Community Connection
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              Serving Families in Moshi and Pimpri-Chinchwad
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
              Moshi is part of the growing Pimpri-Chinchwad region of Pune, and parents in the area have access to multiple school options. When comparing schools, families can consider factors such as board affiliation, academic levels, teaching approach, student-development opportunities, location and admission requirements.
            </p>
            <p className="text-[#1e3a8a] font-bold text-base md:text-lg">
              Gayatri English Medium School's CBSE affiliation and Moshi location make it one of the schools parents can include in their local comparison.
            </p>
          </div>
        </div>
      </section>

      {/* School Admission Process (5-Step Walkthrough) */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Enrolment Walkthrough
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              School Admission at Gayatri English Medium School
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              The published admission process broadly involves submitting an application, review based on class vacancies, contact from an admission counsellor and completion of the admission process with guidance from the school team.
            </p>
          </div>

          {/* 5 Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {admissionSteps.map((st) => (
              <div 
                key={st.step}
                className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-[#f97316] font-serif block mb-2">
                    {st.step}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base mb-2">
                    {st.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Classes and Standards Box */}
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0f2356] text-white p-8 md:p-12 rounded-3xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-serif font-black mb-4">
              Classes and Standards (KG to 12th Standard)
            </h3>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed mb-6">
              The school's admission information lists the Moshi branch as KG to 12th Standard and provides enquiry options across different standards. If you are looking for admission to a specific class, contact the school to confirm:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {[
                "Current Availability",
                "Eligibility Criteria",
                "Required Documents",
                "Admission Procedure",
                "Applicable Fees",
                "Important Dates"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm border border-white/15">
                  <CheckCircle2 size={16} className="text-orange-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-between border-t border-blue-800/80 pt-6">
              <span className="text-blue-200 text-xs">
                Admission requirements, vacancies, documents, fees and timelines can change by academic year and class.
              </span>
              <Link 
                to="/enquire"
                className="bg-[#f97316] text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#ea580c] transition-all shadow-md inline-flex items-center gap-2"
              >
                Enquire Online <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Should Look Beyond Rankings */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Objective Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              Why Parents Searching for a School in Moshi Should Look Beyond Rankings
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Searches such as "best CBSE school in Moshi" are useful for discovering options, but a ranking alone should not determine a child's school choice. Parents can make a better decision by evaluating verified, tangible aspects:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {evaluationFactors.map((factor, idx) => (
              <div 
                key={idx}
                className="bg-[#fff9f2] p-5 rounded-2xl border border-orange-100 flex items-start gap-3"
              >
                <CheckCircle2 size={18} className="text-[#f97316] flex-shrink-0 mt-0.5" />
                <span className="text-slate-800 font-bold text-sm leading-snug">
                  {factor}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center">
            <p className="text-slate-700 text-sm md:text-base font-medium">
              Gayatri English Medium School provides official information about its CBSE affiliation, academic levels, admission process and educational initiatives so parents can evaluate the school using information rather than a ranking claim.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery Showcase (Page 7 Recommendations) */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Real Campus Life
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              Campus Environment & Facilities
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Authentic school photographs showcasing Gayatri English Medium School in Moshi, Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <figure 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-100 flex flex-col group hover:shadow-md transition-all"
              >
                {img.type === "map" ? (
                  <div className="h-56 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                    <iframe
                      title="Gayatri English Medium School Location Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2033626298586!2d73.8447814!3d18.6661448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7f465d6a2f7%3A0xe54e26eb2a853612!2sGayatri%20English%20Medium%20School!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="h-56 overflow-hidden bg-slate-100">
                    <img 
                      src={img.src} 
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <figcaption className="p-4 bg-white flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-black uppercase text-[#f97316] tracking-wider block mb-1">
                      {img.title}
                    </span>
                    <p className="text-slate-800 font-bold text-sm leading-snug">
                      {img.caption}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (All 10 FAQs) */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Frequently asked questions regarding CBSE affiliation, classes, curriculum and admissions at Gayatri English Medium School in Moshi, Pune.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-[#fff9f2]/40"
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
                    <div className="px-6 pb-6 pt-2 text-slate-600 text-sm md:text-base leading-relaxed border-t border-orange-100 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquire About Admission at Gayatri English Medium School (Page 6 CTA) */}
      <section className="py-20 px-6 lg:px-16 bg-gradient-to-br from-slate-900 via-[#1e3a8a] to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Admissions Assistance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif mb-6 leading-tight">
            Enquire About Admission at Gayatri English Medium School
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Choosing a school is an important decision for every family. If you are looking for a CBSE school in Moshi, Pune, contact Gayatri English Medium School to discuss your child's standard, admission availability and the next steps.
          </p>

          <div className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/15 backdrop-blur-sm max-w-xl mx-auto mb-10 text-left">
            <h4 className="font-bold text-white text-lg mb-2">Gayatri English Medium School</h4>
            <p className="text-blue-100 text-sm mb-4">
              Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Pune, Maharashtra
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-orange-400 flex-shrink-0" />
                <a href="tel:+919527764646" className="font-bold text-white hover:text-orange-300 transition-colors">
                  +91 95277 64646
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-orange-400 flex-shrink-0" />
                <a href="mailto:gayatriems@gmail.com" className="font-bold text-white hover:text-orange-300 transition-colors">
                  gayatriems@gmail.com
                </a>
              </div>
            </div>
          </div>

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
              to="/cbse-school-in-pimpri-chinchwad"
              className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              CBSE in PCMC Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CBSESchoolInMoshi;
