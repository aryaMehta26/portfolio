'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { useRef, useEffect, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import { FaPython, FaAws, FaReact, FaNodeJs, FaDocker, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiApacheairflow, SiKubernetes, SiTensorflow, SiPytorch, SiFastapi, SiTypescript, SiGraphql, SiRedis, SiApachespark, SiMysql, SiTableau, SiDjango, SiNextdotjs } from 'react-icons/si';

const technologies = [
  'Data Engineering', 'Machine Learning', 'AWS', 'Python',
  'React', 'Next.js', 'SQL', 'NoSQL', 'Apache Spark',
  'Airflow', 'Docker', 'Kubernetes', 'ETL', 'Data Pipeline',
  'TensorFlow', 'PyTorch', 'FastAPI', 'MongoDB', 'PostgreSQL',
  'Redis', 'GraphQL', 'TypeScript', 'Node.js', 'Git', 'LangChain', 'LLM',
  'CI/CD', 'REST API', 'Microservices', 'Cloud Native', 'DevOps'
];

const techIcons: Record<string, React.ReactNode> = {
  Python: <FaPython className="inline-block" />,
  'React/Next.js': <FaReact className="inline-block" />,
  'Next.js': <SiNextdotjs className="inline-block" />,
  AWS: <FaAws className="inline-block" />,
  Docker: <FaDocker className="inline-block" />,
  Kubernetes: <SiKubernetes className="inline-block" />,
  SQL: <FaDatabase className="inline-block" />,
  NoSQL: <FaDatabase className="inline-block" />,
  MongoDB: <SiMongodb className="inline-block" />,
  PostgreSQL: <SiPostgresql className="inline-block" />,
  MySQL: <SiMysql className="inline-block" />,
  'Apache Airflow': <SiApacheairflow className="inline-block" />,
  Airflow: <SiApacheairflow className="inline-block" />,
  'Apache Spark': <SiApachespark className="inline-block" />,
  Spark: <SiApachespark className="inline-block" />,
  TensorFlow: <SiTensorflow className="inline-block" />,
  PyTorch: <SiPytorch className="inline-block" />,
  FastAPI: <SiFastapi className="inline-block" />,
  TypeScript: <SiTypescript className="inline-block" />,
  Nodejs: <FaNodeJs className="inline-block" />,
  'Node.js': <FaNodeJs className="inline-block" />,
  Redis: <SiRedis className="inline-block" />,
  GraphQL: <SiGraphql className="inline-block" />,
  Git: <FaGitAlt className="inline-block" />,
  PowerBI: <FaDatabase className="inline-block" />,
  Tableau: <SiTableau className="inline-block" />,
  Django: <SiDjango className="inline-block" />,
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Array<{ left: number; top: number }>>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    // Calculate initial positions
    const newPositions = technologies.map(() => ({
      left: 10 + Math.random() * 80,
      top: 10 + Math.random() * 80
    }));
    setPositions(newPositions);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="fixed inset-0 w-full min-h-screen">
      {/* Floating tech stack background with icon and name, time-based only */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech + i}
            className="absolute text-white/30 font-bold pointer-events-none text-xl md:text-2xl tracking-wider flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.3, 0.2],
              x: [0, Math.sin(i) * 400, 0],
              y: [0, Math.cos(i) * 400, 0],
              scale: [1, 1.2, 1],
              rotate: [0, i * 10, 0],
            }}
            transition={{
              duration: 30 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear"
            }}
            style={{
              left: positions[i]?.left ? `${positions[i].left}%` : "50%",
              top: positions[i]?.top ? `${positions[i].top}%` : "50%",
              textShadow: '0 0 20px rgba(168,85,247,0.3)'
            }}
          >
            {techIcons[tech as string] && (
              <span className="text-2xl md:text-3xl text-purple-400">{techIcons[tech as string]}</span>
            )}
            <span>{tech}</span>
          </motion.div>
        ))}
      </div>

      {/* Cursor-following gradient (static) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at 50% 50%, rgba(168,85,247,0.15), rgba(236,72,153,0.15), transparent 70%)`
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Main content */}
      <motion.div 
        ref={containerRef}
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 pb-32 px-4"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
              <motion.div
                className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-3xl -z-10"
                animate={{
                  scale: [1, 1.1],
                  opacity: [0.3, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent relative z-10">
                Arya Mehta
              </span>
            </h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/80 font-light"
            >
              Data Engineer & Full Stack Developer
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base md:text-lg text-white/60 mb-8 max-w-2xl mx-auto"
          >
            Crafting robust data solutions and building scalable applications.
            Passionate about transforming complex data challenges into elegant solutions.
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex gap-6 justify-center mb-12"
          >
            {[
              { href: "https://github.com/aryaMehta26", icon: <FaGithub className="w-7 h-7" /> },
              { href: "https://www.linkedin.com/in/arya-mehta-/", icon: <FaLinkedin className="w-7 h-7" /> },
              { href: "https://medium.com/@aryaMehta26", icon: <FaMedium className="w-7 h-7" /> }
            ].map((social) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                <div className="relative p-2 rounded-full backdrop-blur-sm border border-white/5 transition-all duration-300 group-hover:border-pink-500/20">
                  <span className="text-white/60 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-white/50 cursor-pointer hover:text-white/80 transition-colors"
          >
            <FiArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
