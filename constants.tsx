
import React from 'react';
import { NavItem, Facility, GalleryImage } from './types';
import { BookOpen, Bus, Laptop, Award, Users, Target, BookMarked, Camera, ShieldCheck } from 'lucide-react';

export const COLORS = {
  primary: '#1e3a8a', // Deep Navy from Logo book
  secondary: '#f97316', // Vibrant Orange from Logo petals
  accent: '#e11d48', // Red from Logo center
  light: '#fff9f2', // Warm Light Orange
  text: '#1e3a8a'
};

const STANDARDS = Array.from({ length: 12 }, (_, i) => ({
  label: `${i + 1}${i === 0 ? 'st' : i === 1 ? 'nd' : i === 2 ? 'rd' : 'th'} Standard`,
  path: `/std-${i + 1}.pdf`
}));

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Admissions', path: '/admissions' },
  { 
    label: 'Academics', 
    path: '/academics',
    children: [
      { label: 'Pre Primary', path: '/academics/pre-primary' },
      { label: 'Primary', path: '/academics/primary' },
      { label: 'Secondary', path: '/academics/secondary' },
    ]
  },
  { 
    label: 'CBSE', 
    path: '/cbse',
    children: [
      { label: 'CBSE School in PCMC', path: '/cbse-school-in-pimpri-chinchwad' },
      { label: 'CBSE School in Moshi', path: '/cbse-school-in-moshi' },
      { label: 'English Medium School Moshi', path: '/english-medium-school-in-moshi' },
      { label: 'School in Gandharv Nagari', path: '/school-in-gandharv-nagari-moshi' },
      { 
        label: 'Curriculum', 
        path: '/',
        children: STANDARDS
      },
      { label: 'Affiliation Letter', path: '/CBSE-GRANT-LETTER.pdf' },
      { label: 'Transfer Certificates', path: '/cbse/tc' },
      { label: 'Pay Fees', path: 'https://gemscbse.prisms.in/pay' },
      { label: 'Enquire Now', path: 'https://gemscbse.prisms.in/onlineenquiry' },
    ]
  },
  { label: 'Read to Lead', path: '/read-to-lead' },
  { label: 'Blogs', path: '/blog' },
  { 
    label: 'Media', 
    path: '/media',
    children: [
      { label: 'Events', path: '/media/events' },
      { label: 'Gallery', path: '/gallery' },
      { label: 'Achievements', path: '/media/achievements' },
    ]
  },
  { label: 'Contact Us', path: '/contact' },
];

export const FACILITIES: Facility[] = [
  {
    title: 'Digital Classrooms',
    description: 'Immersive learning environments equipped with smart-board technology.',
    image: "/class.jpg",
    icon: <Laptop className="w-6 h-6" />
  },
  {
    title: 'Scientific Research',
    description: 'Comprehensive laboratories fostering a spirit of inquiry and discovery.',
    image: "/scientific.jpg",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: 'Curated Library',
    description: 'A sanctuary for literature and modern digital resources.',
    image: "/Lib.jpg",
    icon: <BookOpen className="w-6 h-6" />
  },
  {
    title: 'Fleet Services',
    description: 'Safe transport services prioritizing student safety and punctuality.',
    image: "/bus.jpg",
    icon: <Bus className="w-6 h-6" />
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200',
    title: 'Academic Pursuit',
    category: 'Academics',
    prompt: 'Classroom environment with students',
    alt: 'Students studying'
  },
  {
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200',
    title: 'Championship Spirit',
    category: 'Sports',
    prompt: 'High school sports day athletics',
    alt: 'Sports Day'
  }
];
