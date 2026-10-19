
import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
// Fix: Use namespace import to bypass named export resolution issues in this environment
const { HashRouter, Routes, Route, useLocation } = ReactRouterDOM as any;
const Router = HashRouter;

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import MPD from './pages/MPD';
import LeadToRead from './pages/LeadToRead';
import ReadToLeadVideo from './pages/ReadToLeadVideo';
import PrePrimary from './pages/PrePrimary';
import Primary from './pages/Primary';
import Secondary from './pages/Secondary';
import Enquire from './pages/Enquire';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import Achievements from './pages/Achievements';
import Events from './pages/Events';
import CBSESchoolPimpriChinchwad from './pages/CBSESchoolPimpriChinchwad';
import EnglishMediumSchoolMoshi from './pages/EnglishMediumSchoolMoshi';
import SchoolInGandharvNagariMoshi from './pages/SchoolInGandharvNagariMoshi';
import CBSESchoolInMoshi from './pages/CBSESchoolInMoshi';
import FloatingContactButton from './components/FloatingContactButton';
import WhatsAppButton from './components/WhatsAppButton';
import ContactFormModal from './components/ContactFormModal';
import { useState } from 'react';
import { Navigate } from "react-router-dom";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Simple placeholder for new pages
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="py-24 text-center bg-white min-h-[60vh] flex flex-col justify-center">
    <h1 className="text-4xl font-serif text-[#1e3a8a] italic uppercase tracking-widest">{title}</h1>
    <p className="mt-4 text-gray-500 font-bold">This section is being updated with the latest information. Check back soon!</p>
  </div>
);

const App: React.FC = () => {
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoModalOpen(true);
    }, 1000); // Show after 1 second
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full overflow-x-clip">
        <Navbar />
        <FloatingContactButton />
        <WhatsAppButton />
        <ContactFormModal isOpen={isAutoModalOpen} onClose={() => setIsAutoModalOpen(false)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/enquire" element={<Enquire />} />
            
            {/* Academics Sub-routes */}
            <Route path="/academics" element={<Navigate to="/" replace />} />
            <Route path="/academics/pre-primary" element={<PrePrimary />} />
            <Route path="/academics/primary" element={<Primary />} />
            <Route path="/academics/secondary" element={<Secondary />} />
            
            {/* CBSE Sub-routes */}
            <Route path="/cbse" element={<MPD />} />
            <Route path="/cbse-school-in-pimpri-chinchwad" element={<CBSESchoolPimpriChinchwad />} />
            <Route path="/english-medium-school-in-moshi" element={<EnglishMediumSchoolMoshi />} />
            <Route path="/school-in-gandharv-nagari-moshi" element={<SchoolInGandharvNagariMoshi />} />
            <Route path="/cbse-school-in-moshi" element={<CBSESchoolInMoshi />} />
            <Route path="/cbse/curriculum" element={<PlaceholderPage title="CBSE Curriculum" />} />
            <Route path="/cbse/affiliation" element={<PlaceholderPage title="Affiliation Letter" />} />
            <Route path="/cbse/tc" element={<PlaceholderPage title="Transfer Certificates" />} />
            
            <Route path="/pay-fees" element={<PlaceholderPage title="Online Fee Payment" />} />
            <Route path="/read-to-lead" element={<LeadToRead />} />
            <Route path="/read-to-lead/video" element={<ReadToLeadVideo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            
            {/* Gallery / Media */}
            <Route path="/events" element={<Events />} />
            <Route path="/media/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/media/achievements" element={<Achievements />} />
            
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
