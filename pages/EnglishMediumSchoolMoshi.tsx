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
  HeartHandshake,
  MessageSquare
} from 'lucide-react';

const EnglishMediumSchoolMoshi: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "English Medium School in Moshi | Gayatri School";
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content', 
        'Looking for an English Medium School in Moshi? Explore Gayatri English Medium School in Gandharv Nagari, Moshi, Pimpri-Chinchwad and enquire about admission.'
      );
    }

        // Inject Schema Markup (JSON-LD)
    const scriptId = "schema-english-medium-school-in-moshi";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "School",
      "@id": "https://gayatrischoolpune.com/#school",
      "name": "Gayatri English Medium School",
      "url": "https://gayatrischoolpune.com/",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Moshi",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://gayatrischoolpune.com/english-medium-school-in-moshi/#webpage",
      "url": "https://gayatrischoolpune.com/english-medium-school-in-moshi",
      "name": "English Medium School in Moshi | Gayatri English Medium School",
      "description": "Explore Gayatri English Medium School in Moshi, Pune. Find school information, learning environment, facilities and admission details.",
      "about": {
        "@id": "https://gayatrischoolpune.com/#school"
      },
      "breadcrumb": {
        "@id": "https://gayatrischoolpune.com/english-medium-school-in-moshi/#breadcrumb"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://gayatrischoolpune.com/english-medium-school-in-moshi/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://gayatrischoolpune.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "English Medium School in Moshi",
          "item": "https://gayatrischoolpune.com/english-medium-school-in-moshi"
        }
      ]
    }
  ]
});
      document.head.appendChild(script);
    }

    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const choiceFactors = [
    {
      number: "01",
      title: "Local Moshi location",
      description: "Gayatri English Medium School is located in Gandharv Nagari, Sector No. 5, Moshi, within Pimpri-Chinchwad. This makes its location particularly relevant for families searching for a school in Moshi or an English Medium School in Gandharv Nagari.",
      icon: <MapPin className="w-6 h-6 text-[#f97316]" />
    },
    {
      number: "02",
      title: "English-medium education",
      description: "The school is identified as Gayatri English Medium School and provides English-medium education. Parents who specifically want an English-medium learning environment can therefore include the school in their local shortlist.",
      icon: <BookOpen className="w-6 h-6 text-[#1e3a8a]" />
    },
    {
      number: "03",
      title: "CBSE curriculum",
      description: "Gayatri English Medium School follows the CBSE curriculum. Parents who are comparing English medium schools and CBSE schools in Moshi can consider the school's curriculum alongside other factors such as location, academic environment and admission requirements.",
      icon: <GraduationCap className="w-6 h-6 text-[#f97316]" />
    },
    {
      number: "04",
      title: "School values and development",
      description: "The school's website highlights education, values, holistic development and character building. For parents, this provides useful context when evaluating the school's broader educational philosophy rather than looking only at the curriculum.",
      icon: <HeartHandshake className="w-6 h-6 text-[#1e3a8a]" />
    },
    {
      number: "05",
      title: "Direct school enquiry",
      description: "School information can change from one academic session to another. Admission availability, classes, requirements and other details should therefore be confirmed directly with the school. Gayatri's official website provides an admission enquiry route and contact information for parents.",
      icon: <Phone className="w-6 h-6 text-[#f97316]" />
    }
  ];

  const parentConsiderations = [
    {
      title: "Curriculum",
      question: "Which curriculum does the school follow, and does it match your child's educational needs?",
      icon: <BookOpen className="w-5 h-5 text-[#f97316]" />
    },
    {
      title: "Location",
      question: "How convenient is the school from your home and daily travel route?",
      icon: <Compass className="w-5 h-5 text-[#1e3a8a]" />
    },
    {
      title: "Learning Environment",
      question: "What is the school's approach to classroom learning, academic development and student growth?",
      icon: <GraduationCap className="w-5 h-5 text-[#f97316]" />
    },
    {
      title: "School Values",
      question: "What values and principles does the school communicate as part of its educational approach?",
      icon: <ShieldCheck className="w-5 h-5 text-[#1e3a8a]" />
    },
    {
      title: "Student Development",
      question: "Does the school provide opportunities that support learning beyond regular academic work?",
      icon: <Users className="w-5 h-5 text-[#f97316]" />
    },
    {
      title: "Admission Information",
      question: "Are the current admission requirements, available classes and enquiry process clearly communicated?",
      icon: <Calendar className="w-5 h-5 text-[#1e3a8a]" />
    },
    {
      title: "Parent-School Communication",
      question: "How can parents contact the school when they need information about admissions or school-related matters?",
      icon: <MessageSquare className="w-5 h-5 text-[#f97316]" />
    }
  ];

  const searchKeywords = [
    "English Medium School in Moshi",
    "English Medium School in Moshi Pune",
    "School in Moshi Pune",
    "English Medium School in Pimpri Chinchwad",
    "English Medium School in PCMC",
    "English Medium School Near Bhosari",
    "School Near Bhosari"
  ];

  const galleryImages = [
    {
      src: "/School1.jpg",
      title: "School Exterior",
      alt: "Gayatri English Medium School campus in Moshi",
      caption: "Gayatri English Medium School, Moshi"
    },
    {
      src: "/School2.jpg",
      title: "School Entrance",
      alt: "Gayatri English Medium School entrance in Gandharv Nagari",
      caption: "School campus in Gandharv Nagari, Moshi"
    },
    {
      src: "/Pract1.jpg",
      title: "Students Learning",
      alt: "Students learning at Gayatri English Medium School in Moshi",
      caption: "Learning environment at Gayatri English Medium School"
    },
    {
      src: "/class.jpg",
      title: "Classroom",
      alt: "Classroom at Gayatri English Medium School in Moshi",
      caption: "Classroom learning at the school"
    },
    {
      src: "/Sports1.jpg",
      title: "Activities & Sports",
      alt: "Student activities at Gayatri English Medium School",
      caption: "Student learning beyond the classroom"
    },
    {
      type: "map",
      title: "School Location",
      alt: "Gayatri English Medium School location in Moshi",
      caption: "School location in Gandharv Nagari, Moshi"
    }
  ];

  const faqs = [
    {
      question: "What is an English medium school in Moshi?",
      answer: "An English medium school in Moshi is a school located in the Moshi area where English is used as the primary medium of classroom instruction. Parents generally compare curriculum, academic environment, school values, location and admission information when choosing a school."
    },
    {
      question: "Where is Gayatri English Medium School located?",
      answer: "Gayatri English Medium School is located at Row House 05, NH60, Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070."
    },
    {
      question: "Is Gayatri English Medium School in Gandharv Nagari, Moshi?",
      answer: "Yes. Gayatri English Medium School's official address identifies the school as being in Gandharv Nagari, Sector No. 5, Moshi, within Pimpri-Chinchwad, Pune."
    },
    {
      question: "What curriculum does Gayatri English Medium School follow?",
      answer: "Gayatri English Medium School follows the CBSE curriculum. The school's official information lists CBSE affiliation number 1130818 and school code 30740."
    },
    {
      question: "Is Gayatri English Medium School suitable for parents looking for an English medium school in Moshi?",
      answer: "Gayatri English Medium School is an English-medium school located in Gandharv Nagari, Moshi. Parents considering the school should review its curriculum, educational approach, location and current admission information and contact the school directly for details relevant to their child's class."
    },
    {
      question: "How can parents enquire about admission?",
      answer: "Parents can contact Gayatri English Medium School directly through the admission enquiry option on the official website or by calling +91 95277 64646."
    },
    {
      question: "Which areas can parents consider when looking for an English medium school near Moshi?",
      answer: "Parents may search across Moshi, Gandharv Nagari and nearby parts of Pimpri-Chinchwad and PCMC. Families near Bhosari may also compare schools based on actual travel convenience and the educational requirements of their child."
    },
    {
      question: "What should parents consider when choosing an English medium school in Moshi?",
      answer: "Parents can consider the curriculum, learning environment, school values, student development, location, admission process and communication with the school. Visiting the school and asking current admission-related questions can also help with the decision."
    },
    {
      question: "Where can parents get the latest admission information?",
      answer: "The latest admission information should be confirmed directly with Gayatri English Medium School because requirements and availability can vary by academic session."
    },
    {
      question: "How can I contact Gayatri English Medium School?",
      answer: "Parents can contact the school at +91 95277 64646. The official website also provides the school's contact email and admission enquiry option."
    }
  ];

  return (
    <div className="bg-[#fff9f2] min-h-screen text-[#1e3a8a]">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-6 lg:px-16 overflow-hidden bg-gradient-to-b from-orange-100/50 via-[#fff9f2] to-[#fff9f2]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f97316]/10 text-[#f97316] rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-[#f97316]/20">
            <School size={14} /> English Medium • CBSE Curriculum • Moshi, PCMC
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 font-serif">
            English Medium School in Moshi – <br className="hidden md:block" />
            <span className="text-[#f97316]">Gayatri English Medium School</span>
          </h1>

          <p className="text-sm md:text-base font-bold text-slate-500 uppercase tracking-wider mb-8">
            Gayatri English Medium School, Gandharv Nagari, Moshi, Pimpri-Chinchwad, Pune
          </p>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 font-medium">
            Choosing the right school is an important decision for every parent. Families looking for an <strong>English Medium School in Moshi</strong> usually want more than a convenient location. They want to understand the school's educational approach, curriculum, learning environment, location, admission process and whether the school is suitable for their child's needs.
          </p>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
            <strong>Gayatri English Medium School</strong> is located in Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Pune. The school provides English-medium education and follows the CBSE curriculum, with the school's official documents listing CBSE affiliation number <span className="font-bold text-[#1e3a8a]">1130818</span> and school code <span className="font-bold text-[#1e3a8a]">30740</span>. For parents searching for an English medium school in Moshi, the school's location in Gandharv Nagari makes it a relevant option to explore within the Moshi and Pimpri-Chinchwad area.
          </p>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Medium</span>
              <span className="text-lg font-black text-[#1e3a8a]">English Medium</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Curriculum</span>
              <span className="text-lg font-black text-[#f97316]">CBSE</span>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-orange-100">
              <span className="text-xs uppercase font-black text-slate-400 block tracking-widest">Affiliation No.</span>
              <span className="text-lg font-black text-[#1e3a8a]">1130818</span>
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
              Contact the School
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
            The school's official mandatory disclosure identifies <strong>Gayatri English Medium School</strong> and provides its CBSE affiliation and school code. For parents, these details provide a straightforward starting point when comparing an English medium school in Moshi with other schools in the surrounding area.
          </p>
        </div>
      </section>

      {/* Strong Educational Foundation Section */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-orange-50">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              English Medium School in Moshi for a Strong Educational Foundation
            </h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                An English medium school uses English as the primary language of teaching and classroom learning. For parents comparing schools, however, the medium of instruction is only one part of the decision.
              </p>
              <p>
                Parents may also want to consider the curriculum, academic environment, school values, opportunities for student development, location, communication with the school and the admission process.
              </p>
              <p>
                At Gayatri English Medium School, the school's stated focus includes education, values, holistic development and character building. The school website describes its educational approach around developing confident, capable and compassionate learners.
              </p>
              <p className="font-semibold text-[#1e3a8a]">
                This makes the school relevant for families searching for an English Medium School in Moshi Pune and looking for a school within the local community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Gayatri English Medium School Card */}
      <section className="py-8 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#1e3a8a] to-[#0f2356] text-white p-8 md:p-12 rounded-3xl shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-blue-800/80 pb-6">
              <div>
                <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs block mb-2">
                  Official School Information
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-black">
                  About Gayatri English Medium School in Moshi
                </h3>
                <p className="text-blue-200 text-sm mt-1">
                  Situated in Gandharv Nagari, Moshi, within Pimpri-Chinchwad, Pune
                </p>
              </div>
              <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm self-start md:self-auto border border-white/15">
                <span className="text-xs uppercase tracking-widest text-orange-300 font-bold block">Status</span>
                <span className="text-white font-black text-sm">CBSE Affiliated</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-blue-200 uppercase tracking-wider block mb-1">School</span>
                <p className="font-bold text-white text-sm">Gayatri English Medium School</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-blue-200 uppercase tracking-wider block mb-1">Location</span>
                <p className="font-bold text-white text-sm">Gandharv Nagari, Sector No. 5, Moshi</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-blue-200 uppercase tracking-wider block mb-1">Area</span>
                <p className="font-bold text-white text-sm">Pimpri-Chinchwad, Pune</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-blue-200 uppercase tracking-wider block mb-1">Curriculum</span>
                <p className="font-bold text-[#f97316] text-sm">CBSE</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-blue-200 uppercase tracking-wider block mb-1">CBSE Affiliation No.</span>
                <p className="font-bold text-white text-sm">1130818</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-blue-200 uppercase tracking-wider block mb-1">School Code</span>
                <p className="font-bold text-white text-sm">30740</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-blue-200 uppercase tracking-wider block mb-1">Contact</span>
                <a href="tel:+919527764646" className="font-bold text-white text-sm hover:text-orange-300 transition-colors">
                  +91 95277 64646
                </a>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-xs text-blue-200 uppercase tracking-wider block mb-1">Email</span>
                <a href="mailto:contact@gayatrischoolpune.com" className="font-bold text-white text-sm hover:text-orange-300 transition-colors break-all">
                  contact@gayatrischoolpune.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Environment Section */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Everyday Learning Experience
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              Learning Environment at Gayatri English Medium School
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              A school environment plays an important role in a child's everyday learning experience. For parents evaluating schools, key questions help clarify the match with family expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#fff9f2] p-8 rounded-2xl border border-orange-100">
              <h3 className="text-lg font-black text-[#1e3a8a] mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#f97316]" /> Useful Questions for Parents:
              </h3>
              <ul className="space-y-4 text-slate-700 text-sm md:text-base font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#f97316] flex-shrink-0 mt-1" />
                  <span>How does the school approach academic learning?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#f97316] flex-shrink-0 mt-1" />
                  <span>What curriculum does it follow?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#f97316] flex-shrink-0 mt-1" />
                  <span>How does it support student development?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#f97316] flex-shrink-0 mt-1" />
                  <span>What values does the school emphasize?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#f97316] flex-shrink-0 mt-1" />
                  <span>How does the school communicate important information to parents?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#f97316] flex-shrink-0 mt-1" />
                  <span>Is the school's location convenient for the family?</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[#f97316] font-black uppercase tracking-widest text-xs block mb-3">
                  Our Educational Vision
                </span>
                <h4 className="text-xl md:text-2xl font-serif font-black mb-4 leading-snug">
                  "Excellence in Education and Values, with an Emphasis on Holistic Growth and Character Building."
                </h4>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-4">
                  The school's website presents education as a broader learning journey rather than focusing only on classroom academics.
                </p>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  Parents can use this information together with a school visit and direct enquiry to understand whether the learning environment matches their expectations.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Campus Visits Welcome</span>
                <Link to="/contact" className="text-orange-400 text-xs font-black uppercase tracking-widest hover:text-orange-300 inline-flex items-center gap-1">
                  Schedule a Visit <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* English Medium Education & Academic Learning */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-orange-50">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Academic Framework
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              English Medium Education and Academic Learning
            </h2>
            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                English-medium education means that English is used as the primary medium for classroom instruction. At Gayatri English Medium School, English-medium education is combined with the school's CBSE curriculum.
              </p>
              <p>
                The school's published curriculum documentation refers to CBSE's learning and assessment framework, including learning outcomes and assessment practices.
              </p>
              <div className="bg-orange-50/70 p-6 rounded-2xl border border-orange-200/60 my-6">
                <p className="text-slate-800 font-semibold text-base md:text-lg">
                  For parents, the important point is that choosing an English medium school should not be based only on the language used in classrooms. It is also useful to understand the curriculum, academic expectations, learning environment and the overall educational approach.
                </p>
              </div>
              <p>
                Parents considering Gayatri can contact the school directly for the latest information about classes, academic programmes and admission requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents in Moshi May Consider Gayatri (5 Factors) */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Decision Factors
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              Why Parents Looking for a School in Moshi May Consider Gayatri
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Parents searching for a school in Moshi often compare schools based on several practical factors:
            </p>
          </div>

          <div className="space-y-6">
            {choiceFactors.map((factor) => (
              <div 
                key={factor.number}
                className="bg-[#fff9f2] p-6 md:p-8 rounded-2xl border border-orange-100/80 hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-orange-100">
                    {factor.icon}
                  </div>
                  <span className="text-2xl font-black text-[#f97316] font-serif">
                    {factor.number}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Location in Gandharv Nagari */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-orange-50">
            <div className="flex items-center gap-3 text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3">
              <MapPin size={16} /> Campus Address
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              Gayatri English Medium School Location in Gandharv Nagari
            </h2>

            <div className="bg-slate-50 border-2 border-dashed border-slate-200 p-6 md:p-8 rounded-2xl mb-8">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-2">Verified Postal Address</span>
              <p className="text-slate-900 font-bold text-lg md:text-xl leading-relaxed">
                Row House 05, NH60, Gandharv Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070
              </p>
            </div>

            <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                The school is therefore strongly associated with the <strong>Gandharv Nagari–Moshi</strong> area.
              </p>
              <p>
                Its official documentation also identifies the school with Gandharv Nagari and Moshi, providing an additional first-party location signal.
              </p>
              <p>
                For parents searching for an <strong>English Medium School Near Gandharv Nagari</strong>, checking the school's exact location and travel convenience from home is recommended before making a final decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* English Medium School for Families in Moshi and Pimpri-Chinchwad (Search Terms) */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Regional Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              English Medium School for Families in Moshi and Pimpri-Chinchwad
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
              Moshi is part of the wider Pimpri-Chinchwad area of Pune, and parents searching for schools may use different location terms depending on where they live. These searches represent similar local school-selection needs:
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 mb-8">
              {searchKeywords.map((keyword, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-orange-50 text-[#1e3a8a] text-xs md:text-sm font-bold rounded-xl border border-orange-200/80 shadow-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Gayatri English Medium School's official location connects the school with Gandharv Nagari, Moshi and Pimpri-Chinchwad, while Pune provides the broader geographic context. Parents should consider the actual travel route from their home rather than relying only on a broad area name when choosing a school.
            </p>
          </div>
        </div>
      </section>

      {/* School Admissions in Moshi */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-[#ea580c] text-white p-8 md:p-14 rounded-3xl shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 text-white rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-white/30 backdrop-blur-sm">
              <Calendar size={14} /> Admissions Open 2027–28
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 font-serif">
              School Admissions in Moshi
            </h2>

            <p className="text-orange-50 text-base md:text-lg leading-relaxed mb-6 font-medium">
              Parents interested in admission should use the school's official admission information and contact the school directly for the latest requirements. The school's website currently displays <strong>Admissions Open 2027–28</strong> and provides an admission enquiry option.
            </p>

            <p className="text-orange-100 text-sm md:text-base leading-relaxed mb-8">
              Admission-related information can change according to the academic session, class availability and school requirements. For this reason, parents should confirm current details directly with Gayatri English Medium School before submitting any documents or making decisions.
            </p>

            <div className="bg-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm border border-white/20 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-orange-200 block mb-1">
                  Direct Admission Helpline
                </span>
                <a href="tel:+919527764646" className="text-2xl md:text-3xl font-black text-white hover:text-orange-200 transition-colors">
                  +91 95277 64646
                </a>
              </div>
              <div className="flex gap-4">
                <Link
                  to="/enquire"
                  className="bg-white text-[#ea580c] px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-orange-50 transition-all shadow-md inline-flex items-center gap-2"
                >
                  Enquire Online <ArrowRight size={14} />
                </Link>
                <Link
                  to="/admissions"
                  className="bg-[#1e3a8a] text-white px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#1a337a] transition-all shadow-md"
                >
                  Admissions Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Parents Should Consider When Choosing an English Medium School */}
      <section className="py-16 px-6 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Evaluation Guide
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-6 font-serif">
              What Parents Should Consider When Choosing an English Medium School
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Finding an English Medium School in Moshi is not only about finding a school that uses English for instruction. Parents can compare schools using the following questions:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {parentConsiderations.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#fff9f2] p-6 rounded-2xl border border-orange-100 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-orange-100">
                    {item.icon}
                  </div>
                  <h3 className="font-black text-slate-900 text-lg">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed pl-1">
                  {item.question}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50/70 border border-blue-200/60 p-6 rounded-2xl text-center">
            <p className="text-slate-700 text-sm md:text-base font-medium">
              💡 <strong>School Visit Recommendation:</strong> A school visit and direct conversation with the school can help parents answer questions that cannot be fully understood from a search result alone.
            </p>
          </div>
        </div>
      </section>

      {/* Image SEO Gallery Section (Page 7 Recommendations) */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-3 block">
              Campus Gallery & Facilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">
              Explore Our Campus & Learning Environment
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Authentic photographs of Gayatri English Medium School in Gandharv Nagari, Moshi.
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
                      title="Gayatri English Medium School Location"
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

      {/* Frequently Asked Questions (10 FAQs) */}
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
              Find answers to common questions about Gayatri English Medium School in Moshi, PCMC.
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

      {/* Explore Gayatri English Medium School CTA (Page 6) */}
      <section className="py-20 px-6 lg:px-16 bg-gradient-to-br from-slate-900 via-[#1e3a8a] to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#f97316] font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Next Steps
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif mb-6 leading-tight">
            Explore Gayatri English Medium School
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            If you are looking for an <strong>English Medium School in Moshi</strong>, you can explore Gayatri English Medium School's official information and contact the school directly for current academic and admission details.
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
              to="/"
              className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Explore the School
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnglishMediumSchoolMoshi;
