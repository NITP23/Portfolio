import React from 'react'
import { FaEnvelope, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const ContactSection = () => {
  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: 'Email',
      value: '282004priyak@gmail.com',
      link: 'mailto:282004priyak@gmail.com'
    },
    {
      id: 2,
      icon: FaLinkedin,
      title: 'Linkedin',
      value: 'linkedin.com',
      link: 'https://www.linkedin.com/in/priya-kumari-742b8827b/'
    },
    {
      id: 3,
      icon: FaPhoneAlt,
      title: 'Phone',
      value: '8756647866',
      link: 'tel:+8756647866'
    },
    {
      id: 4,
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Lucknow, India',
      link: null
    },

  ]
  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300' id='contact'>
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2'>Lets Connect.</h2>
          <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'></div>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <p className='text-gray-600 dark:text-gray-400 mb-8 leading-relaxed'>
              I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
            </p>
            <div className='space-y-6'>
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.id} className='flex items-center gap-4 group'>
                    <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                      <Icon size={18} className='text-primary' />
                    </div>
                    <div>
                      <h4 className='text-gray-900 dark:text-white font-medium text-sm'>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className='text-gray-600 dark:text-gray-400 text-sm hover:text-primary transition-colors' target={info.title == 'Location' ? '_self' : '_blank'} rel={info.title === 'Location' ? '' : 'noopener noreferrer'}>{info.value}</a>
                      ) :
                        (
                          <p className='text-gray-600 dark:text-gray-400 text-sm'>{info.value}</p>
                        )
                      }
                    </div>
                  </div>
                )
              }

              )}
            </div>
          </div>

          {/* Contact form */}

          <div className='bg-white dark:bg-gray-800 shadow-lg dark:shadow-none border border-gray-200 dark:border-transparent rounded-lg p-6'>
            <form>
              <div className='mb-4'>
                <label htmlFor="email" className='text-gray-900 dark:text-white block mb-2 text-sm font-medium'>Email</label>
                <input type="email" id='email' className='w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm focus:border-primary transition-colors' placeholder='your@email.com' required />
              </div>

              <div className='mb-6'>
                <label htmlFor="email" className='text-gray-900 dark:text-white block mb-2 text-sm font-medium'>Message</label>
                <textarea id='message' className='w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm focus:border-primary transition-colors' placeholder='your message...' rows="4" required />
              </div>

              <button type='submit' className='w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80'>Send Message</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
