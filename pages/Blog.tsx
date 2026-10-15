
import React, { useState } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
// Fix: Use namespace import to bypass named export resolution issues
const { Link } = ReactRouterDOM as any;
import { User, Calendar, Clock, ArrowRight, MessageSquare } from 'lucide-react';

interface BlogPost {
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

const Blog: React.FC = () => {
  const blogs: BlogPost[] = [
     {
      id: 1,
      slug: "best-cbse-school-in-moshi-academic-excellence",
      title: "Why GEMS CBSE School Is the Best CBSE School in Moshi for Academic Excellence",
      author: "GEMS Moshi",
      date: "April 20, 2026",
      readTime: "5min",
      excerpt: "Discover why GEMS CBSE School is a top choice for academic excellence with experienced teachers, modern classrooms, robotics learning, and holistic student development.",
      image: "/Blogs/blog44.png"
    },
    {
      id: 2,
      slug: "best-school-in-pune-for-holistic-development",
      title: "Best School in Pune for Holistic Development",
      author: "GEMS Moshi",
      date: "April 19, 2026",
      readTime: "5min",
      excerpt: "Discover why GEMS CBSE School Moshi is among the best schools in Pune for holistic development through academics, sports, arts, leadership, and future-ready learning.",
      image: "/Blogs/blog43.png"
    },
    {
      id: 3,
      slug: "robotics-school-in-pcmc-for-future-innovators",
      title: "Robotics School in PCMC for Future Innovators",
      author: "GEMS Moshi",
      date: "April 18, 2026",
      readTime: "5min",
      excerpt: "Discover how GEMS CBSE School Moshi is shaping future innovators through robotics education, coding skills, STEM learning, and hands-on practical experiences in PCMC.",
      image: "/Blogs/blog42.png"
    },
    {
      id: 4,
      slug: "coding-and-ai-learning-for-students",
      title: "Coding and AI Learning for Students",
      author: "GEMS Moshi",
      date: "April 16, 2026",
      readTime: "5min",
      excerpt: "Explore how GEMS CBSE School Moshi empowers students with coding, AI learning, robotics, and future-ready digital skills through practical education.",
      image: "/Blogs/blog41.png"
    },
    {
      id: 5,
      slug: "best-school-near-chikhali-and-spine-road",
      title: "Best School Near Chikhali and Spine Road",
      author: "GEMS Moshi",
      date: "April 14, 2026",
      readTime: "5min",
      excerpt: "GEMS CBSE School Moshi is the best school near Chikhali and Spine Road, offering quality CBSE education, modern facilities, and holistic student development.",
      image: "/Blogs/blog40.png"
    },
    {
      id: 6,
      slug: "why-robotics-education-gives-students-a-competitive-edge",
      title: "Why Robotics Education Gives Students a Competitive Edge",
      author: "GEMS Moshi",
      date: "April 12, 2026",
      readTime: "5min",
      excerpt: "Robotics education helps students build creativity, coding skills, problem-solving abilities, and confidence, giving them a strong competitive edge for future success.",
      image: "/Blogs/blog39.png"
    },
    {
      id: 7,
      slug: "read-to-lead-program-for-students",
      title: "Read to Lead Program for Students",
      author: "GEMS Moshi",
      date: "April 10, 2026",
      readTime: "5min",
      excerpt: "The Read to Lead program at GEMS CBSE School Moshi builds strong reading habits, communication skills, and confidence to help students become future leaders.",
      image: "/Blogs/blog38.png"
    },
    {
      id: 8,
      slug: "why-ai-awareness-is-important-for-students-2026",
      title: "Why AI Awareness Is Important for Students in 2026",
      author: "GEMS Moshi",
      date: "April 08, 2026",
      readTime: "5min",
      excerpt: "AI awareness helps students understand future technologies, build critical thinking, and prepare for careers in a digital world driven by artificial intelligence.",
      image: "/Blogs/blog37.png"
    },
    {
      id: 9,
      slug: "best-school-in-moshi-nursery-to-secondary",
      title: "Best School in Moshi for Nursery to Secondary Education",
      author: "GEMS Moshi",
      date: "April 05, 2026",
      readTime: "5min",
      excerpt: "GEMS CBSE School Moshi offers quality education from nursery to secondary level with modern learning, strong academics, and holistic student development.",
      image: "/Blogs/blog36.png"
    },
    {
      id: 10,
      slug: "best-cbse-school-in-pcmc-holistic-development",
      title: "Best CBSE School in PCMC with Holistic Development",
      author: "GEMS Moshi",
      date: "April 02, 2026",
      readTime: "5min",
      excerpt: "GEMS CBSE School Moshi is among the best CBSE schools in PCMC, offering holistic development through academics, sports, technology, and personality growth.",
      image: "/Blogs/blog35.png"
    },
    {
    id: 11,
    slug: "coding-and-ai-learning-for-students-2026",
    title: "Coding and AI Learning for Students: Why It Matters in 2026",
    author: "GEMS Moshi",
    date: "March 01, 2026",
    readTime: "6min",
    excerpt: "In 2026, coding and AI are essential skills for students. Discover why early exposure to technology prepares children for future success.",
    image: "/Blogs/blog34.png"
    },
    {
    id: 12,
    slug: "modern-education-trends-india-2026",
    title: "Top Education Trends in India 2026: What Parents Should Know",
    author: "GEMS Moshi",
    date: "March 03, 2026",
    readTime: "6min",
    excerpt: "Education in India is evolving rapidly. Discover the top trends in 2026 including NEP, digital learning, and skill-based education.",
    image: "/Blogs/blog33.png"
    },
    {
    id: 13,
    slug: "best-cbse-school-near-me-pcmc-2026",
    title: "How to Find the Best CBSE School Near You in PCMC (2026 Guide)",
    author: "GEMS Moshi",
    date: "March 06, 2026",
    readTime: "6min",
    excerpt: "Searching for the best CBSE school near you in PCMC? Learn how to evaluate schools based on academics, facilities, faculty, and overall development.",
    image: "/Blogs/blog32.png"
    },
    {
    id: 14,
    slug: "importance-of-pre-primary-education-2026",
    title: "Why Pre-Primary Education is Important for Your Child in 2026",
    author: "GEMS Moshi",
    date: "March 09, 2026",
    readTime: "5min",
    excerpt: "Early education builds the foundation for lifelong learning. Discover why pre-primary education is crucial for your child’s development in 2026.",
    image: "/Blogs/blog31.png"
    },
    {
    id: 15,
    slug: "why-skill-based-learning-is-important-2026",
    title: "Why Skill-Based Learning is More Important Than Marks in 2026",
    author: "GEMS Moshi",
    date: "March 10, 2026",
    readTime: "6min",
    excerpt: "In 2026, skills matter more than marks. Discover why skill-based education is essential for students’ future success and career growth.",
    image: "/Blogs/blog30.png"
    },

    {
    id: 16,
    slug: "how-parents-can-support-children-during-exams",
    title: "How Parents Can Support Children During Exams (2026 Guide)",
    author: "GEMS Moshi",
    date: "March 13, 2026",
    readTime: "5min",
    excerpt: "Exams can be stressful for children. Learn how parents can provide the right support, reduce pressure, and help children perform their best.",
    image: "/Blogs/blog29.png"
    },
    {
    id: 17,
    slug: "best-summer-vacation-activities-for-students-2026",
    title: "Best Summer Vacation Activities for Students (2026 Guide)",
    author: "GEMS Moshi",
    date: "March 16, 2026",
    readTime: "5min",
    excerpt: "Looking for productive ways to engage your child this summer? Discover the best summer vacation activities that boost learning, creativity, and skills.",
    image: "/Blogs/blog28.png"
    },
    {
    id: 18,
    slug: "mental-health-tips-for-students-during-exams",
    title: "Mental Health Tips for Students During Exams (2026 Guide)",
    author: "GEMS Moshi",
    date: "March 20, 2026",
    readTime: "5min",
    excerpt: "Exams can be stressful for students. Discover practical mental health tips to reduce anxiety, stay focused, and perform your best during exams.",
    image: "/Blogs/blog27.png"
    },
    {
    id: 19,
    slug: "cbse-board-exam-tips-2026",
    title: "CBSE Board Exam Tips 2026: Smart Strategies to Score 90%+",
    author: "GEMS Moshi",
    date: "March 22, 2026",
    readTime: "5min",
    excerpt: "Preparing for CBSE board exams? Discover smart strategies, time management tips, and answer-writing techniques to score 90%+ in 2026.",
    image: "/Blogs/blog26.png"
    },
    {
      id: 20,
      slug: "how-to-choose-best-school-in-2026",
      title: "How to Choose the Best School for Your Child in 2026 (Parent Guide)",
      author: "GEMS Moshi",
      date: "March 25, 2026",
      readTime: "6min",
      excerpt: "Choosing the right school in 2026 goes beyond academics. Discover how to evaluate curriculum, faculty, infrastructure, and future-ready learning for your child’s success.",
      image: "/Blogs/blog25.png"
    },
  
    {
      id: 41,
      slug: "sports-achievements-india",
      title: "Sports Achievements in India & The Road to Improvement",
      author: "GEMS Moshi",
      date: "December 8, 2025",
      readTime: "5min",
      excerpt: "India's journey in global sports has been remarkable. From the Olympic grounds to local championships, we explore the milestones...",
      image: "Sports4.jpg"
    },
    {
      id: 42,
      slug: "ai-in-image-generation",
      title: "AI in Image Generation",
      author: "AI",
      date: "April 7, 2025",
  
      excerpt: "A blog images generator is a tool powered by artificial intelligence (AI) that helps creators visualize their ideas instantly...",
      image: "/AI.jpg"
    },
    {
      id: 43,
      slug: "top-10-things-about-google",
      title: "Top 10 things about google",
      author: "Gayatri",
      date: "February 10, 2025",
      comments: 3,
      excerpt: "Every year, we look back at the moments and trends that sparked curiosity. Google continues to be at the forefront of innovation...",
      image: "/Google.jpg"
    },
    {
        id: 44,
        slug: "study-habits-secondary",
        title: "Effective Study Habits for Secondary Students",
        author: "Academic Dept",
        date: "January 15, 2025",
        readTime: "8min",
        excerpt: "Success in secondary school requires more than just intelligence; it requires disciplined habits and time management strategies...",
        image: "/Edu.jpg"
    }
  ];

const blogsPerPage = 9;
const [currentPage, setCurrentPage] = useState(1);

const indexOfLastBlog = currentPage * blogsPerPage;
const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="bg-[#fff9f2] min-h-screen">
      {/* Decorative Header - Replaced Blue/Purple with Orange/Gold */}
      <div className="w-full h-64 bg-gradient-to-r from-[#f97316] via-[#f59e0b] to-[#ea580c] relative">
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight opacity-20 select-none">OUR BLOGS</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-32 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
         {currentBlogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-orange-50 flex flex-col group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {blog.category && (
                    <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-[#1e3a8a] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                            {blog.category}
                        </span>
                    </div>
                )}
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-black text-[#1e3a8a] mb-6 leading-tight group-hover:text-[#f97316] transition-colors">
                  {blog.title}
                </h2>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">
                  <div className="flex items-center gap-2">
                    <User size={14} className="text-[#f97316]" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#f97316]" />
                    <span>{blog.date}</span>
                  </div>
                </div>

                <p className="text-slate-500 font-medium leading-relaxed mb-8 flex-grow line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto">
                    <Link 
                      to={`/blog/${blog.slug}`}
                      className="flex items-center gap-2 text-[#1e3a8a] font-black text-xs uppercase tracking-widest hover:text-[#f97316] transition-all group/btn"
                    >
                        Read the Blog 
                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-14 flex-wrap">
    {Array.from({ length: totalPages }, (_, index) => (
       <button
        key={index}
         onClick={() => setCurrentPage(index + 1)}
         className={`px-4 py-2 rounded-lg font-bold transition ${
          currentPage === index + 1
           ? "bg-[#f97316] text-white"
            : "bg-white text-[#1e3a8a] border"
       }`}
      >
         {index + 1}
       </button>
    ))}
   </div>
      </div>
    </div>
  );
};

export default Blog;
