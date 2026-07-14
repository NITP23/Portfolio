import { Award, Calendar, ExternalLink, ShieldCheck } from 'lucide-react'
import React from 'react'
import infosysCert from '../assets/1-c1a68dd4-a1ea-4cb9-b63d-e670855e2546.pdf'

const Certificates = () => {
  const certifications = [

    {
      id: 1,
      title: 'ByteVerse\'24',
      issuer: 'Hackslash',
      date: 'Apr 2024',
      link: 'https://certificate.givemycertificate.com/c/93d8fe19-0e59-44d0-a221-61e6b89143dd',
      desc: 'ByteVerse is a 24-hour online hackathon organized by Hackslash, where participants come together to brainstorm innovative ideas and create impactful solutions.',
    },
    {
      id: 2,
      title: 'Deloitte Australia Technology Job Simulation',
      issuer: 'Deloitte Australia',
      date: 'Dec 2024',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_ARBaENuKjRWPhSS7r_1750072526506_completion_certificate.pdf',
      desc: 'Earned the Deloitte Australia Technology Job Simulation certificate by successfully completing practical consulting tasks focused on technology solutions, business analysis, critical thinking, and delivering client-oriented recommendations.',
    },
    {
      id: 3,
      title: 'Infosys SpringBord',
      issuer: 'Infosys SpringBord',
      date: 'Jun 2025',
      link: infosysCert,
      desc: 'Successfully completed the Multidimensional Data Modeling course, gaining knowledge of designing dimensional data models, including fact and dimension tables, star and snowflake schemas, and data warehouse concepts for efficient business intelligence and analytics.',
    },

  ]
  return (
    <section className='text-gray-900 dark:text-white py-20' id='certificates'>
      <div className='max-w-7xl mx-auto px-6 lg:px-16'>
        <div className='mb-16'>
          <p className='text-primary text-sm uppercase tracking-widest mb-2 font-semibold'>Achievments</p>
          <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white'>Certifications</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            certifications.map((cert) => (
              <div key={cert.id} data-aos='zoom-in' className='group relative bg-white dark:bg-[#111a3e] border border-gray-200 dark:border-transparent shadow-sm dark:shadow-none p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)] flex flex-col justify-between h-full'>
                <div className='absolute -top-4 -right-4 bg-primary p-3 rounded-2xl shadow-lg transform group-hover:rotate-12 transition-transform'>
                  <Award className='text-white' size={24} />
                </div>
                <div className='flex items-center gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400'>
                  <span className='flex items-center gap-1'>
                    <ShieldCheck className='text-primary' size={14} />{cert.issuer}
                  </span>
                  <span className='flex items-center gap-1'>
                    <Calendar size={14} />{cert.date}
                  </span>
                </div>
                <h3 className='text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors'>
                  {cert.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2'>
                  {cert.desc}
                </p>
                <a href={cert.link} target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-gray-900 dark:hover:text-white transition-colors border-b border-transparent hover:border-gray-900 dark:hover:border-white pb-1 self-end'>
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Certificates
