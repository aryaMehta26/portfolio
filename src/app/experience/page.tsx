'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const experience = [
  {
    title: 'Back End Developer',
    company: 'METEOCONTROL',
    period: 'Jan 2024 - Dec 2024',
    location: 'Ahmedabad, Gujarat, India',
    companyUrl: 'https://www.meteocontrol.com',
    logo: '/metecontrol.png',
    skills: ['AWS', 'SQL', 'Python', 'CI/CD', 'Apache Airflow', 'GitLab'],
    details: [
      'Architected and implemented high-performance database solutions on AWS cloud infrastructure, leveraging RDS and EC2 instances to optimize data processing workflows.',
      'Implemented advanced SQL partitioning strategies and index optimization techniques, resulting in 40% improvement in query performance and 25% reduction in operational costs.',
      'Spearheaded the development of automated CI/CD pipelines by integrating Liquibase, GitLab CI, and Apache Airflow.',
      'Designed robust database transaction systems adhering to ACID principles and RBAC policies.',
      'Collaborated with cross-functional teams to implement best practices in database design, security, and performance monitoring.'
    ],
  },
  {
    title: 'Data Engineer (Intern)',
    company: 'DUPAT INFOTRONICX PVT. LTD.',
    period: 'Aug 2022 - May 2023',
    location: 'Ahmedabad, India',
    companyUrl: 'https://www.dupatinfotech.com',
    logo: '/dupat.jpeg',
    skills: ['Python', 'SQL', 'Apache Spark', 'Power BI', 'ETL', 'Data Pipeline'],
    details: [
      'Designed and implemented scalable data pipelines using Python, SQL, and Apache Spark, processing over 1M+ records daily.',
      'Developed and maintained real-time analytics dashboards using Power BI, integrating REST APIs for live data visualization.',
      'Implemented data quality monitoring frameworks and validation checks throughout the ETL pipeline.',
      'Optimized database queries and implemented efficient indexing strategies.',
      'Collaborated with cross-functional teams to gather requirements and implement data governance practices.'
    ],
  },
];

export default function Experience() {
  const [selectedCompany, setSelectedCompany] = useState(0);

  return (
    <section className="min-h-screen w-full flex flex-col items-center py-20 px-4 pt-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-2"
        >
          Work Experience
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/60 mb-12"
        >
          Building scalable systems and solving complex problems
        </motion.p>

        <div className="grid grid-cols-12 gap-4 relative">
          {/* Left sidebar with company selection */}
          <div className="col-span-12 lg:col-span-3">
            <div className="sticky top-24 space-y-2">
              {experience.map((exp, idx) => (
                <motion.button
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedCompany(idx)}
                  className="relative group w-full text-left"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur transition-all duration-300 ${
                    selectedCompany === idx ? 'opacity-50' : ''
                  }`} />
                  <div className={`relative p-4 rounded-lg backdrop-blur-sm border border-white/5 transition-all duration-300 ${
                    selectedCompany === idx ? 'bg-white/5 border-pink-500/20' : 'hover:border-white/10'
                  }`}>
                    <h3 className={`font-semibold ${
                      selectedCompany === idx ? 'text-pink-400' : 'text-white/70 group-hover:text-white/90'
                    }`}>
                      {exp.company}
                    </h3>
                    <p className="text-sm text-white/50 group-hover:text-white/60">{exp.title}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right side content */}
          <div className="col-span-12 lg:col-span-9">
            <motion.div
              key={selectedCompany}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-white/10 hover:border-pink-500/30 shadow transition-all duration-300 backdrop-blur-md"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4 mb-2">
                  {experience[selectedCompany].logo && (
                    <div className="w-16 h-16 relative rounded-xl overflow-hidden border border-white/10 bg-white/10">
                      <Image
                        src={experience[selectedCompany].logo}
                        alt={experience[selectedCompany].company + ' logo'}
                        fill
                        style={{ objectFit: 'contain' }}
                        sizes="64px"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {experience[selectedCompany].title}
                    </h2>
                    <div className="flex items-center gap-2 mb-4">
                      <a
                        href={experience[selectedCompany].companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 hover:text-pink-300 flex items-center gap-2"
                      >
                        {experience[selectedCompany].company}
                        <FiExternalLink className="inline" />
                      </a>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60">{experience[selectedCompany].period}</span>
                    </div>
                    <p className="text-white/60 mb-6">{experience[selectedCompany].location}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {experience[selectedCompany].skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <ul className="space-y-4">
                  {experience[selectedCompany].details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <span className="text-pink-400 mt-1.5">▹</span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 