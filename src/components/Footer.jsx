import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className='relative bg-white dark:bg-[#111827] pt-16 pb-8 border-t border-gray-200 dark:border-[#33353F] overflow-hidden transition-colors duration-300'>
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16'>

          {/* Brand Info */}
          <div className='flex flex-col gap-4'>
            <div className='text-gray-900 dark:text-white text-3xl font-black cursor-pointer' onClick={scrollToTop}>
              Portfolio <span className='text-primary'>.</span>
            </div>
            <p className='text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm'>
              Building dynamic, beautiful, and user-friendly web applications. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-gray-900 dark:text-white text-lg font-semibold tracking-wide'>Quick Links</h3>
            <ul className='flex flex-col gap-3'>
              {['About Me', 'Education', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const id = item === 'About Me' ? '#about' : `#${item.toLowerCase()}`;
                      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className='text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm text-left w-fit'
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-gray-900 dark:text-white text-lg font-semibold tracking-wide'>Connect</h3>
            <div className='flex gap-4'>
              <a href="https://github.com/NITP23/" target="_blank" rel="noreferrer" className='w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1F2937] border border-gray-200 dark:border-transparent flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-primary transition-all duration-300 hover:-translate-y-1 shadow-lg'>
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/priya-kumari-742b8827b/" target="_blank" rel="noreferrer" className='w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1F2937] border border-gray-200 dark:border-transparent flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-primary transition-all duration-300 hover:-translate-y-1 shadow-lg'>
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/PriyaKu67648104" target="_blank" rel="noreferrer" className='w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1F2937] border border-gray-200 dark:border-transparent flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-primary transition-all duration-300 hover:-translate-y-1 shadow-lg'>
                <FaTwitter size={20} />
              </a>
              <a href="mailto:282004priyak@gmail.com" className='w-10 h-10 rounded-full bg-gray-100 dark:bg-[#1F2937] border border-gray-200 dark:border-transparent flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-white hover:bg-primary transition-all duration-300 hover:-translate-y-1 shadow-lg'>
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-12 pt-8 border-t border-gray-200 dark:border-[#33353F] flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-600 dark:text-gray-500 text-sm text-center md:text-left'>
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors group'
          >
            Back to Top
            <div className='w-8 h-8 rounded-full bg-gray-100 dark:bg-[#1F2937] border border-gray-200 dark:border-transparent flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-md'>
              <FaArrowUp size={14} className='group-hover:-translate-y-1 transition-transform' />
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer