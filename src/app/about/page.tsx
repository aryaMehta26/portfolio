'use client';
import { motion } from 'framer-motion';
import { FiAward, FiCode, FiDatabase, FiCloud, FiCpu, FiLayers } from 'react-icons/fi';
import Image from 'next/image';

const skills = [
  {
    category: 'Data Engineering',
    icon: <FiDatabase className="w-6 h-6" />,
    items: ['ETL/ELT Pipeline Design', 'Apache Airflow', 'Apache Kafka', 'Data Modeling', 'Data Quality', 'dbt']
  },
  {
    category: 'Big Data & Cloud',
    icon: <FiCloud className="w-6 h-6" />,
    items: ['AWS Services', 'Apache Spark', 'Hadoop', 'Snowflake', 'Docker', 'Kubernetes']
  },
  {
    category: 'Machine Learning & AI',
    icon: <FiCpu className="w-6 h-6" />,
    items: ['TensorFlow', 'Keras', 'scikit-learn', 'Feature Engineering', 'MLOps', 'Model Deployment']
  },
  {
    category: 'Programming',
    icon: <FiCode className="w-6 h-6" />,
    items: ['Python', 'Java (Spring Boot)', 'JavaScript', 'TypeScript', 'React/Next.js', 'System Design']
  },
  {
    category: 'Databases',
    icon: <FiDatabase className="w-6 h-6" />,
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Query Optimization', 'Database Design']
  },
  {
    category: 'DevOps & Tools',
    icon: <FiLayers className="w-6 h-6" />,
    items: ['CI/CD', 'Git', 'Docker', 'APIs', 'Testing', 'Monitoring']
  }
];

const achievements = [
  {
    title: 'SJ Hacks 2025 Champion',
    event: 'San Jose City Hackathon',
    description: 'Developed an innovative solution for city safety and urban development, winning first place among 100+ participants'
  },
  {
    title: 'Kaggle Competition Winner',
    event: 'Data Science Competition',
    description: 'Secured top 1% position in a machine learning competition focused on predictive analytics'
  },
  {
    title: 'Open Source Contributor',
    event: 'Apache Airflow & dbt',
    description: 'Active contributor to Apache Airflow and dbt projects, with multiple merged pull requests'
  },
  {
    title: 'Technical Excellence Award',
    event: 'University Tech Fest',
    description: 'Recognized for outstanding contributions in developing innovative data engineering solutions'
  }
];

export default function About() {
  return (
    <section className="min-h-screen w-full py-20 px-4">
      <div className="max-w-6xl mx-auto pt-24">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform -rotate-6 opacity-20"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-white/10 p-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/image.png"
                  alt="Arya Mehta"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <p className="text-lg text-white/80 mb-6">
              Hi! I'm Arya Mehta, a <span className="text-pink-400 font-semibold">Data Engineering Specialist</span> and <span className="text-purple-400 font-semibold">Full Stack Developer</span> who transforms complex data challenges into powerful business solutions. With a proven track record of <span className="text-blue-400">optimizing database performance by 40%</span> and architecting systems that process <span className="text-green-400">millions of records daily</span>, I bring both technical expertise and business impact to the table.
            </p>

            <p className="text-lg text-white/80 mb-6">
              My technical arsenal includes <span className="text-yellow-400">AWS cloud infrastructure</span>, where I've designed high-performance database solutions and automated pipelines. I've revolutionized data processing workflows using <span className="text-purple-400">Apache Spark, Airflow, and advanced SQL optimization</span> techniques, resulting in <span className="text-pink-400">25% cost reduction</span> while maintaining robust ACID compliance. Beyond the code, I'm passionate about building <span className="text-blue-400">scalable, secure, and efficient systems</span> that drive business growth through data-driven insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="/SDE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                <div className="relative px-6 py-3 rounded-lg backdrop-blur-sm border border-white/10 text-white font-semibold transition-colors duration-300">
                  <span className="mr-2">👀</span> View Resume
                </div>
              </motion.a>
              <motion.a
                href="/SDE.pdf"
                download="Arya_Mehta_Resume.pdf"
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                <div className="relative px-6 py-3 rounded-lg backdrop-blur-sm border border-white/10 text-white font-semibold transition-colors duration-300">
                  <span className="mr-2">📥</span> Download Resume
                </div>
              </motion.a>
            </div>

            <p className="text-lg text-white/80 mb-6">
              <span className="text-pink-400 font-semibold">Fun Fact:</span> 🌃 When the city sleeps, I code—nighttime is when I'm most productive!
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">My Toolbox</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[600px] overflow-y-auto pr-4 styled-scrollbar">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-500/20 rounded-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-white/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[500px] overflow-y-auto pr-4 styled-scrollbar">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-pink-500/20 rounded-lg">
                    <FiAward className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-pink-400 font-medium mb-2">{achievement.event}</p>
                    <p className="text-white/60">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 