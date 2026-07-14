import React from 'react'
import about from '../assets/about.png'
const AboutSection = () => {

  return (
    <section className='text-gray-900 dark:text-white mt-16 relative overflow-hidden' id='about'>
      <div className='max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 realative z-10'>
        <div data-aos='fade-right'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6'>
            More <span className='text-primary'>About</span> Me
          </h2>
          <p className='text-gray-600 dark:text-gray-400 text-base lg:text-lg mb-10 leading-relaxed'>
            Hi! I'm a passionate Software Developer with a deep love for problem-solving. Over the past 3 years, I've honed my analytical thinking by solving over 1,000 Data Structures and Algorithms (DSA) problems.
            <br /><br /> 
            Beyond algorithms, I love bringing ideas to life through development. I have built multiple hands-on projects, focusing on writing clean code and creating intuitive user experiences. I'm always eager to learn new technologies and take on complex challenges!
          </p>
          <div className='grid grid-cols-3 gap-6 max-w-xl'>
            <div className='text-center rounded-2xl bg-white dark:bg-[#111a3e] border border-gray-200 dark:border-[#1f1641] shadow-sm dark:shadow-none p-5 transition-all duration-300 hover:border-primary/50 '>
              <h3 className='text-primary font-bold text-2xl md:text-3xl'>+1k</h3>
              <p className='text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5'>DSA</p>
            </div>
            <div className='text-center rounded-2xl bg-white dark:bg-[#111a3e] border border-gray-200 dark:border-[#1f1641] shadow-sm dark:shadow-none p-5 transition-all duration-300 hover:border-primary/50 '>
              <h3 className='text-primary font-bold text-2xl md:text-3xl'>+5</h3>
              <p className='text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5'>Projects</p>
            </div>
            <div className='text-center rounded-2xl bg-white dark:bg-[#111a3e] border border-gray-200 dark:border-[#1f1641] shadow-sm dark:shadow-none p-5 transition-all duration-300 hover:border-primary/50 '>
              <h3 className='text-primary font-bold text-2xl md:text-3xl'>+3</h3>
              <p className='text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-0.5'>Years</p>
            </div>
          </div>
        </div>

        <div className='mt-16 md:mt-0 flex justify-center lg:justify-end relative' data-aos='fade-left'>
          <div className='relative w-64 h-64 md:w-96 md:h-120'>
            <div className='absolute inset-0 z-0 rounded-full shadow-lg border border-primary translate-x-4 translate-y-4'></div>
            <div className='relative z-10 w-full h-full bg-white dark:bg-[#111a3e] rounded-full overflow-hidden border border-gray-200 dark:border-[#1f1641]'>
              <img src={about} alt="About" className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
