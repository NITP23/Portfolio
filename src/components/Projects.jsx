import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import proj1 from '../assets/work1.png'
import proj2 from '../assets/work2.png'
import proj3 from '../assets/work3.png'
import proj4 from '../assets/work4.png'

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      image: proj1,
      title: "Project Management System",
      desc: "Dashboard maintaing assigning student proffesor projects",
      tech: ['React.js', 'Node.js', 'Mongodb']
    },
    {
      id: 2,
      image: proj2,
      title: "BookHive Manager",
      desc: "E-Library Management System with secure Admin/User roles, modular APIs, and cron jobs.",
      tech: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
      id: 3,
      image: proj3,
      title: "Fake Job Detection System",
      desc: "AI-Powered Scam Job Link Analyzer, Detect fake or scam job postings instantly using AI + NLP + URL Intelligence.",
      tech: ['React.js', 'Python', 'Machine Learning', 'NLP']
    },
    {
      id: 4,
      image: proj4,
      title: "Portfolio Website",
      desc: "Personal portfolio built with React and Tailwind CSS featuring smooth scroll and dynamic animations.",
      tech: ['React.js', 'Tailwind CSS', 'Vite']
    }
  ]
  return (
    <section className='py-16 bg-white dark:bg-gray-900 transition-colors duration-300' id='projects'>
      <div className='container mx-auto px-4 max-w-7xl'>
        <div className='relative flex items-center justify-center mb-10'>
          <div className='text-center'>
            <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white'>Projects</h2>
            <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'></div>
          </div>
          <div className='absolute right-0 flex gap-2 md:gap-3'>
            <button onClick={() => scroll('left')} className='p-2 md:p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:text-primary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer'>
              <ChevronLeft size={20} className='md:w-6 md:h-6' />
            </button>
            <button onClick={() => scroll('right')} className='p-2 md:p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:text-primary hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer'>
              <ChevronRight size={20} className='md:w-6 md:h-6' />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className='flex overflow-x-auto gap-6 pb-8 pt-4 px-2 snap-x snap-mandatory scrollbar-hide'>
          {
            projects.map((project) => (
              <div key={project.id} className='bg-white dark:bg-gray-800 border border-gray-200 dark:border-transparent rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex-none w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start'>
                <img src={project.image} alt={project.title} className='w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300' />
                <div className='p-5'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors'>{project.title}</h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-4'>
                    {project.desc}
                  </p>
                  <div className='flex flex-wrap gap-2 mt-4'>
                    {project.tech.map((tec, idx) => (
                      <span key={idx} className='text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-transparent rounded-md hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-colors duration-300'>{tec}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects