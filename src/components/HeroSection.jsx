import { Download } from 'lucide-react'
import React from 'react'
import hero from '../assets/hero.png'


const HeroSection = () => {
    return (
        <section className='relative w-full' data-aos='zoom-in-up'>
            <div className='absolute top-0 inset-0 h-64 flex items-start'>
                <div className='h-24 w-2/3 bg-linear-to-br from-[#0c7fac] blur-2xl invisible opacity-40'></div>
                <div className='h-20 w-3/4 bg-linear-to-r from-[#289eff] opacity-40 blur-2xl'></div>
            </div>
            <div className='w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative'>
                <div className='grid lg:grid-cols-2 gap-10 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto '>
                    <div className='lg:py-6'>
                        <div className='text-center lg:text-left'>
                            <h1 className='pt-4 text-gray-900 dark:text-white font-bold text-4xl md:text-5xl lg:text-6xl'>
                                Hi, I'm{' '}
                                <span className='text-transparent bg-clip-text bg-linear-to-r from-primary to-cyan-200'>Priya</span>👋🏻
                            </h1>
                        </div>
                        <p className='text-gray-600 dark:text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl leading-relaxed md:text-lg'>
                            I am a pre-final year Computer Science student at NIT Patna with a strong passion for full-stack development and algorithm design. I love transforming complex problems into elegant, user-centric software solutions.
                        </p>
                        <div className='flex items-center gap-4 pt-9 flex-col sm:flex-row'>
                            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className='px-8 py-3.5 rounded-full relative group w-full sm:w-auto flex justify-center transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer overflow-hidden'>
                                <span className='absolute inset-0 bg-primary opacity-90 group-hover:opacity-100 transition-opacity'></span>
                                <span className='relative flex items-center justify-center text-white font-semibold'>Hire Me</span>
                            </button>

                            <a href="https://drive.google.com/uc?export=download&id=1XTbcU0S_GIwoCfyUad0jh1B9OoOxO4t6" target="_blank" rel="noopener noreferrer" className='px-8 py-3.5 rounded-full relative group w-full sm:w-auto flex justify-center items-center gap-3 transition-all duration-300 ease-in-out hover:-translate-y-1 cursor-pointer overflow-hidden border border-primary/50 hover:border-primary bg-transparent shadow-[0_0_15px_rgba(6,162,194,0.1)] hover:shadow-[0_0_25px_rgba(6,162,194,0.3)]'>
                                <div className='absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                <Download size={20} className='text-primary group-hover:-translate-y-1 group-hover:animate-pulse relative z-10 transition-transform duration-300' />
                                <span className='relative z-10 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white font-semibold transition-colors duration-300'>Download Resume</span>
                            </a>
                        </div>
                    </div>

                    <div className='lg:h-full md:flex'>
                        <div className='flex w-full h-96 min-h-96 lg:min-h-[520px] lg:w-full lg:h-full items-center justify-center relative'>
                            <div className='absolute z-0 top-1/2 -translate-y-1/2 w-5/6 h-[calc(80%-20px)] right-0 bg-linear-to-r opacity-25 from-[#0c64ac] to-primary blur-2xl'>
                            </div>
                            <div className='relative z-10 h-80 w-80 sm:h-96 sm:w-96 lg:h-[440px] lg:w-[440px] p-2 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-lg border-2 border-primary/20 dark:border-cyan-500'>
                                <img src={hero}
                                    alt="Hero pic"
                                    width="500"
                                    height="500"
                                    loading='lazy'
                                    className='w-full h-full rounded-[30%_70%_70%_30%/30%_30%_70%_70%] object-cover'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
