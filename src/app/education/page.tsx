'use client';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const education = [
  {
    degree: 'Master of Science',
    major: 'Applied Data Science',
    school: 'San José State University',
    location: 'San José, CA, USA',
    period: 'Jan 2025 - Dec 2026',
    logo: '/sjsu.png',
    description: 'I am gaining expertise in advanced techniques such as machine learning, deep learning, big data technologies, and business intelligence. The program covers key areas like data visualization, mathematical methods for analytics, and large-scale data systems. I am specializing in Data Engineering and Analytics Technologies, which equips me with the skills to design and optimize complex data architectures. Through a graduate project, I am applying these skills to real-world challenges in the data field.',
    skills: ['Data Engineering', 'Big Data', 'Machine Learning', 'Deep Learning', 'Business Intelligence']
  },
  {
    degree: 'Bachelor of Technology',
    major: 'Computer Engineering',
    school: 'Silver Oak University',
    location: 'Ahmedabad, India',
    period: '2020 - 2024',
    logo: '/silveroak.jpg',
    description: 'Focused on core computer engineering concepts including Database Management Systems (DBMS), Object-Oriented Programming (OOP), Operating Systems (OS), and Computer Networks (CN). Developed strong foundations in data structures, algorithms, and software development. Actively participated in technical events and hackathons.',
    skills: ['Software Development', 'Algorithms', 'Data Structures', 'DBMS', 'OOP', 'Operating Systems', 'Computer Networks']
  }
];

const certifications = [
  {
    title: 'Google Advanced Data Analytics',
    issuer: 'Google',
    date: '2024',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/CV4XP3B555DD',
    description: 'Comprehensive program covering advanced data analytics techniques, machine learning, and data visualization using Google Cloud Platform tools.',
    icon: <FiAward className="w-6 h-6" />
  }
];

export default function Education() {
  return (
    <section className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-2 text-center sm:text-left">
            Education
          </h1>
          <p className="text-lg text-white/60 mb-12 text-center sm:text-left">
            My academic journey and professional certifications
          </p>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center sm:text-left">Academic Background</h2>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree + edu.school}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 sm:p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    {edu.logo && (
                      <div className="w-16 h-16 relative rounded-xl overflow-hidden border border-white/10 bg-white/10 flex-shrink-0">
                        <Image
                          src={edu.logo}
                          alt={edu.school + ' logo'}
                          fill
                          style={{ objectFit: 'contain' }}
                          sizes="64px"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{edu.school}</h3>
                      <h4 className="text-lg text-pink-400 mb-2">{edu.degree}</h4>
                      <h5 className="text-md text-white/80 mb-2">{edu.major}</h5>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-2 text-white/60 mb-4">
                        <span>{edu.location}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-white/80 mb-4">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill) => (
                          <span key={skill} className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center sm:text-left">Professional Certifications</h2>
            <div className="space-y-8">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 sm:p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="p-4 bg-pink-500/20 rounded-xl self-start">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{cert.title}</h3>
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-400 hover:text-pink-300 flex items-center gap-2 text-sm sm:text-base flex-shrink-0"
                        >
                          View Credential
                          <FiExternalLink className="inline" />
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-white/60 mb-4">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-white/80">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 