
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
// Fix: Use namespace import to bypass named export resolution issues
const { Link } = ReactRouterDOM as any;
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const FooterLogo: React.FC = () => (
  <div className="flex items-center gap-5 group mb-10">
    <div className="relative w-20 h-20 xl:w-24 xl:h-24 flex-shrink-0">
      <img 
        src="/Logo.png" 
        alt="GEMS Logo" 
        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="flex flex-col">
      <span className="text-2xl xl:text-3xl font-black tracking-tighter uppercase leading-none block text-white">
        Gayatri English Medium School
      </span>
      <span className="text-[12px] xl:text-[14px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-2">
        Moshi, Pimpri-Chinchwad | Pune
      </span>
    </div>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <FooterLogo />
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md font-medium">
            Empowering students in Moshi and Pimpri-Chinchwad through excellence in education, holistic development, and character building since 2008.
          </p>
          <div className="flex space-x-6">

  <a href="https://www.facebook.com/GayatriSchoolPune" target="_blank" rel="noopener noreferrer">
    <Facebook size={24} className="hover:text-yellow-400 cursor-pointer transition-colors" />
  </a>

  <a href="https://www.instagram.com/gayatri_group_of_schools_pune/" target="_blank" rel="noopener noreferrer">
    <Instagram size={24} className="hover:text-yellow-400 cursor-pointer transition-colors" />
  </a>

  <a href="#" target="_blank" rel="noopener noreferrer">
    <Twitter size={24} className="hover:text-yellow-400 cursor-pointer transition-colors" />
  </a>

  {/* NEW LINKEDIN */}
  <a href="https://in.linkedin.com/company/gayatri-group-of-schools-pune" target="_blank" rel="noopener noreferrer">
    <Linkedin size={24} className="hover:text-yellow-400 cursor-pointer transition-colors" />
  </a>

  {/* NEW YOUTUBE */}
  <a href="https://www.youtube.com/@GayatriGroupOfSchools" target="_blank" rel="noopener noreferrer">
    <Youtube size={24} className="hover:text-yellow-400 cursor-pointer transition-colors" />
  </a>

</div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-black uppercase tracking-[0.2em] mb-10 text-[#0056b3]">Quick Navigation</h3>
          <ul className="space-y-4 text-slate-400 font-bold uppercase text-[11px] tracking-widest">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-white hover:translate-x-1 transition-all inline-block">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-black uppercase tracking-[0.2em] mb-10 text-[#0056b3]">Contact Details</h3>
          <ul className="space-y-8 text-slate-400 text-sm font-medium">
            <li className="flex items-start space-x-5">
              <MapPin size={24} className="text-[#0056b3] shrink-0" />
              <span>Row House 05, NH60, Gandhar Nagari, Sector No. 5, Moshi, Pimpri-Chinchwad, Maharashtra 411070</span>
            </li>
            <li className="flex items-center space-x-5">
              <Phone size={24} className="text-[#0056b3] shrink-0" />
              <span>+91 95277 64646</span>
            </li>
            <li className="flex items-center space-x-5">
              <Mail size={24} className="text-[#0056b3] shrink-0" />
              <span>contact@gayatrischoolpune.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">
        <p>&copy; {new Date().getFullYear()} Gayatri English Medium School, Moshi. Crafted for Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
