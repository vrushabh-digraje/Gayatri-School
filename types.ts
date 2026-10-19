
// Import React to resolve the "Cannot find namespace 'React'" error for React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface Facility {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GalleryImage {
  url: string;
  title: string;
  category: string;
  prompt: string;
  alt: string;
}

export interface SchoolEvent {
  date: string;
  month: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime?: string;
  comments?: number;
  excerpt: string;
  category?: string;
  image: string;
}
