import React, { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const Header = ({ theme, toggleTheme }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {name : "Education", href: "#education"},
    {name : "Certificates", href: "#certificates"},
    {name : "About Me", href: "#about"},
    {name : "Skills", href: "#skills"},
    {name : "Projects", href:      "#projects"},
    
  ]

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior : 'smooth'
    })
  }
  return (
    <header className='relative z-50 px-6 py-7'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        
        {/* Logo */}
        <div className='text-gray-900 dark:text-white text-3xl font-black cursor-pointer' onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          Portfolio<span className='text-primary'>.</span>
        </div>


      {/* Navigation */}

      <nav className='hidden md:flex items-center gap-10'>
        <ul className='flex gap-8'>
          {menuItems.map((item) => (
            <li key={item.name}>
              <button onClick={() => scrollToSection(item.href)} className='text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white text-base font-medium transition-colors'>{item.name}</button>
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-4'>
          <button onClick={toggleTheme} className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors'>
            {theme === 'dark' ? <Sun size={20} className='text-primary' /> : <Moon size={20} className='text-gray-700' />}
          </button>
          <button onClick={() => scrollToSection(`#contact`)} className='bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-base font-semibold transition-all'>Contact Me</button>
        </div>
      </nav>

      {/* Mobile Menu  */}

      <div className='flex items-center gap-4 md:hidden'>
        <button onClick={toggleTheme} className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors'>
          {theme === 'dark' ? <Sun size={24} className='text-primary' /> : <Moon size={24} className='text-gray-700' />}
        </button>
        <button className='text-gray-900 dark:text-white' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {
          isMenuOpen ? <X size={32}/> : <Menu size= {32}/>
        }</button>
      </div>
    </div>


    {
      isMenuOpen &&
      (<div className='fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden' onClick={() => setIsMenuOpen(false)}>
      </div>)
    }

    <div className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-[#111827] z-50 transition-transform duration-300 md:hidden shadow-2xl dark:shadow-none ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
    } p-8 flex flex-col`}>
      <button className='self-end text-gray-900 dark:text-white mb-10' onClick={() => setIsMenuOpen(false)}><X size ={32}/></button>
      <ul className='flex flex-col gap-8'>
        {
          menuItems.map((item) => (
            <li key={item.name}>
              <button
              onClick={() => scrollToSection(item.href)} className='text-gray-900 dark:text-white text-xl font-semibold hover:text-primary dark:hover:text-primary transition-colors'
              >
                {item.name}
              </button>
            </li>
          ))
        }
        <li className='pt-6'>
          <button onClick={() => scrollToSection('#contact')} className='w-full bg-primary text-white py-4 rounded-xl text-lg font-bold'>Contact Me</button>
        </li>
      </ul>
    </div>
    </header>
  )
}

export default Header
