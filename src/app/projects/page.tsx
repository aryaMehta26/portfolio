'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const projects = [
  {
    name: 'SJ HOPES',
    description: 'A full-stack platform addressing homelessness in San Jose. Real-time shelter visibility, client support, and micro-opportunities. Hackathon winner.',
    tech: ['Spring Boot', 'React/Next.js', 'MySQL', 'Google Maps API'],
    link: 'https://github.com/vatsalgandhi83/sj-hopes/tree/master',
    demo: 'https://devpost.com/software/sj-hopes',
    featured: true
  },
  {
    name: 'Forecast Blackout - Predicting California Power Outage',
    description: 'Data engineering project to predict power outages in California using weather and outage data. End-to-end pipeline with visualization.',
    tech: ['Apache Airflow', 'Snowflake', 'dbt', 'Python', 'Tableau'],
    link: 'https://github.com/aryaMehta26/Forecast-Blackout-',
    featured: true
  },
  {
    name: 'Netflix Content Popularity Prediction',
    description: 'ML model to forecast Netflix content popularity using pre-release metadata, advanced feature engineering, and Power BI dashboard.',
    tech: ['Python', 'Scikit-learn', 'NLP', 'Power BI'],
    link: 'https://github.com/Gangster26/Netflix_popularity_Predicition',
    featured: true
  },
  {
    name: 'Enterprise RAG System with LLM Integration',
    description: 'Production-grade RAG system using LangChain, PyTorch, FastAPI, PySpark, Pinecone, MLflow. Custom retrieval and semantic search.',
    tech: ['Python', 'LangChain', 'PyTorch', 'FastAPI', 'PySpark', 'Pinecone', 'MLflow'],
    link: 'https://github.com/aryaMehta26/Enterprise-RAG-System-with-LLM-Integration',
    featured: true
  },
  {
    name: 'Scalable Data Processing Platform',
    description: 'Scalable distributed platform using Airflow, PySpark, Docker, Kubernetes, AWS EKS. 5TB+ data, 100+ concurrent jobs, real-time monitoring.',
    tech: ['Python', 'Apache Airflow', 'PySpark', 'Docker', 'Kubernetes', 'AWS EKS'],
    link: 'https://github.com/aryaMehta26/Scalable-Data-Processing-Platform',
    featured: true
  }
];

const otherProjects = [
  {
    name: 'Personal Portfolio',
    description: 'Modern portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/aryaMehta26/portfolio/tree/main',
  }
  // Add more projects here
];

export default function Projects() {
  return (
    <section className="min-h-screen w-full py-20 px-4">
      <motion.div
        className="max-w-7xl mx-auto pt-24"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4"
        >
          Featured Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-white/60 mb-12"
        >
          Some of the projects I've worked on
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.filter(p => p.featured).map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              <div
                className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"
              />
              <div className="relative bg-gray-900 p-8 rounded-xl border border-white/10 h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl text-pink-400">
                    <FiFolder />
                  </div>
                  <div className="flex gap-4">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group p-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                        <div className="relative text-white/60 group-hover:text-white transition-colors">
                          <FiGithub size={20} />
                        </div>
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group p-2"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                        <div className="relative text-white/60 group-hover:text-white transition-colors">
                          <FiExternalLink size={20} />
                        </div>
                      </motion.a>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-white/70 mb-4 h-24">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white mb-8"
        >
          Other Noteworthy Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-lg hover:bg-gray-900/80 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-2xl text-pink-400">
                  <FiFolder />
                </div>
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-white/60 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-300/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 