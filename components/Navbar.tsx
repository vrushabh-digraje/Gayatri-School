
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import ContactFormModal from './ContactFormModal';

const Logo: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <div className="flex items-center gap-2 lg:gap-3 group">
    <div className="relative w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 flex-shrink-0">
      <img 
        src="https://i.ibb.co/Tx2pGqrD/Moshi-Charholi-removebg-preview.png" 
        alt="GEMS Logo" 
        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    <div className="flex flex-col justify-center">
      <span className={`text-sm sm:text-base lg:text-lg xl:text-xl font-black tracking-tight leading-none ${light ? 'text-white' : 'text-[#1e3a8a]'}`}>
        Gayatri English Medium School
      </span>
      <span className={`text-[8px] sm:text-[9px] lg:text-[10px] font-bold tracking-widest mt-0.5 ${light ? 'text-white/80' : 'text-slate-500'}`}>
        Moshi, Pimpri-Chinchwad
      </span>
    </div>
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent, path: string, hasChildren: boolean) => {
    if (path.startsWith('http')) {
      setIsOpen(false);
      setActiveDropdown(null);
      setActiveSubDropdown(null);
      return;
    }
    
    if (path.endsWith('.pdf')) {
      e.preventDefault();
      window.open(path, '_blank');
      setIsOpen(false);
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    } else if (!hasChildren) {
      setIsOpen(false);
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }
  };

  return (
    <header className="w-full relative z-[100] bg-white overflow-x-clip">
      {/* Top Utility Bar - Navy Background */}
      <div className="bg-[#1e3a8a] text-white py-2 hidden lg:block">
        <div className="max-w-[1440px] mx-auto px-8 flex justify-between items-center text-[11px] font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center space-x-8">
            <a href="tel:+919527764646" className="flex items-center hover:text-orange-400 transition-colors">
              <Phone size={12} className="mr-2" /> +91 95277 64646
            </a>
            <a href="mailto:contact@gayatrischoolpune.com" className="flex items-center hover:text-orange-400 transition-colors">
              <Mail size={12} className="mr-2" /> contact@gayatrischoolpune.com
            </a>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-4">
               <a href="https://www.facebook.com/GayatriSchoolPune" target="_blank" rel="noopener noreferrer">
                 <Facebook size={12} className="cursor-pointer hover:text-orange-400" />
               </a>
               <a href="https://www.instagram.com/gayatri_group_of_schools_pune/" target="_blank" rel="noopener noreferrer">
                 <Instagram size={12} className="cursor-pointer hover:text-orange-400" />
               </a>
               <a href="#" target="_blank" rel="noopener noreferrer">
                 <Twitter size={12} className="cursor-pointer hover:text-orange-400" />
               </a>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <nav className="bg-white border-b border-slate-100 shadow-sm relative">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-6 2xl:px-8">
          <div className="flex justify-start items-center h-16 lg:h-20 gap-3 xl:gap-5 2xl:gap-12">
            <Link to="/" className="flex items-center flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center space-x-0.5 2xl:space-x-1 flex-grow justify-start">
              {NAV_LINKS.map((link) => (
                <div 
                  key={link.path} 
                  className="relative group h-full flex items-center whitespace-nowrap"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    setActiveSubDropdown(null);
                  }}
                >
                  <Link
                    to={link.path}
                    className={`px-1 2xl:px-2 py-2 text-[11px] 2xl:text-[13px] font-bold uppercase tracking-wider 2xl:tracking-widest flex items-center gap-0.5 transition-all ${
                      location.pathname.startsWith(link.path) && link.path !== '/' ? 'text-[#f97316]' : 'text-[#1e3a8a] hover:text-[#f97316]'
                    }`}
                  >
                    {link.label}
                    {link.children && <ChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />}
                  </Link>

                  {/* Dropdowns */}
                  {link.children && (
                    <div className={`absolute top-full left-0 w-64 bg-white border border-slate-100 shadow-2xl py-2 transition-all duration-300 origin-top z-[110] ${activeDropdown === link.label ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                      {link.children.map((sub) => (
                        <div 
                          key={sub.path} 
                          className="relative"
                          onMouseEnter={() => sub.children && setActiveSubDropdown(sub.label)}
                          onMouseLeave={() => sub.children && setActiveSubDropdown(null)}
                        >
                          <Link
                            to={sub.path}
                            onClick={(e) => {
                              if (sub.children) e.preventDefault();
                              handleLinkClick(e, sub.path, !!sub.children);
                            }}
                            className={`flex justify-between items-center px-6 py-4 text-[13px] font-bold uppercase tracking-wider transition-colors ${
                              activeSubDropdown === sub.label ? 'text-[#f97316] bg-orange-50' : 'text-[#1e3a8a] hover:text-[#f97316] hover:bg-orange-50'
                            }`}
                          >
                            {sub.label}
                            {sub.children && <ChevronRight size={14} />}
                          </Link>

                          {sub.children && (
                            <div className={`absolute top-0 left-full w-64 bg-white border border-slate-100 shadow-2xl py-2 transition-all duration-300 origin-left ${activeSubDropdown === sub.label ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'}`}>
                               <div className="max-h-[70vh] overflow-y-auto">
                                {sub.children.map((standard) => (
                                  <Link
                                    key={standard.path}
                                    to={standard.path}
                                    onClick={(e) => handleLinkClick(e, standard.path, false)}
                                    className="block px-6 py-4 text-[12px] font-bold text-[#1e3a8a] hover:text-[#f97316] hover:bg-orange-50 uppercase tracking-widest"
                                  >
                                    {standard.label}
                                  </Link>
                                ))}
                               </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a
  href="#/cbse"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-2 inline-flex items-center justify-center whitespace-nowrap bg-[#f97316] text-white px-3 2xl:px-4 py-2 rounded-md text-[10px] 2xl:text-[11px] font-bold uppercase tracking-wide hover:bg-[#ea580c] transition-all duration-300"
>
  MPD
</a>

              <a
  href="https://gemscbse.prisms.in/onlineadmission"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-auto inline-flex items-center justify-center whitespace-nowrap bg-[#f97316] text-white px-3 2xl:px-4 py-2 rounded-md text-[10px] 2xl:text-[11px] font-bold uppercase tracking-wider 2xl:tracking-widest hover:bg-[#ea580c] transition"
>
  APPLY ONLINE
</a>



            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#1e3a8a] p-2">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 h-[calc(100vh-6rem)] overflow-y-auto pb-20">
            <div className="px-6 pt-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.path}>
                  <div className="flex justify-between items-center border-b border-slate-50">
                    <Link
                      to={link.path}
                      onClick={(e) => {
                        if (link.children) e.preventDefault();
                        handleLinkClick(e, link.path, !!link.children);
                      }}
                      className="block flex-grow py-4 text-base font-bold text-[#1e3a8a] uppercase tracking-widest"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className="p-4 text-[#f97316]"
                      >
                        <ChevronDown size={20} className={activeDropdown === link.label ? 'rotate-180' : ''} />
                      </button>
                    )}
                  </div>
                  {link.children && activeDropdown === link.label && (
                    <div className="bg-orange-50/50 px-4 py-2 border-l-4 border-[#f97316] animate-in slide-in-from-left duration-200">
                      {link.children.map((sub) => (
                        <div key={sub.path}>
                          <div className="flex justify-between items-center border-b border-orange-100/30">
                            <Link
                              to={sub.path}
                              onClick={(e) => {
                                if (sub.children) e.preventDefault();
                                handleLinkClick(e, sub.path, !!sub.children);
                              }}
                              className="block py-4 text-sm font-bold text-slate-500 hover:text-[#f97316] uppercase tracking-widest"
                            >
                              {sub.label}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-8">
                <button
                  onClick={() => {
                    setIsFormOpen(true);
                    setIsOpen(false);
                  }}
                  className="block w-full bg-[#f97316] text-white text-center py-5 font-bold uppercase tracking-widest rounded-md shadow-lg"
                >
                  Enquire Now
                </button>
<a
  href="#/cbse"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 block w-full bg-[#1e3a8a] text-white text-center py-5 font-bold uppercase tracking-widest rounded-md shadow-lg"
>
  MPD
</a>
</div>
              </div>
            </div>
        
        )}
        <ContactFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </nav>
    </header>
  );
};

export default Navbar;
