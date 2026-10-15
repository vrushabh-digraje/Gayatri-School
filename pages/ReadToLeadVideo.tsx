
import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
const { Link } = ReactRouterDOM as any;
import { ArrowLeft } from 'lucide-react';

const ReadToLeadVideo: React.FC = () => {
  return (
    <div className="bg-[#1e3a8a] min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full">
        <div className="mb-8 flex items-center justify-between">
          <Link 
            to="/read-to-lead" 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm"
          >
            <ArrowLeft size={20} /> Back to Initiative
          </Link>
          <h1 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter">Read to Lead Initiative</h1>
        </div>

        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video bg-black border-4 border-white/10">
          <iframe
            src="https://www.youtube.com/embed/D_I2hjv-1IE?autoplay=1"
            title="Read to Lead Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm font-medium italic">
            "Every great leader is a reader. Join us in our mission to empower the next generation."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReadToLeadVideo;
