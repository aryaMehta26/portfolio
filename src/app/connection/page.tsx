'use client';
import { motion } from 'framer-motion';
import { FiMail, FiExternalLink, FiFeather } from 'react-icons/fi';

const connections = [
  {
    label: 'Email',
    value: 'aryamehta456@gmail.com',
    href: 'mailto:aryamehta456@gmail.com',
    icon: <FiMail className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-pink-500 to-purple-500'
  },
  {
    label: 'Medium',
    value: '@aryaMehta26',
    href: 'https://medium.com/@aryaMehta26',
    icon: <FiFeather className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-gray-800 to-gray-900'
  }
];

export default function Connection() {
  return (
    <section className="min-h-screen w-full py-20 px-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl mx-auto pt-24"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-8 text-center">
          Connect with Me
        </h1>
        <p className="text-lg text-white/70 mb-12 text-center">
          Feel free to reach out for collaboration, questions, or just to say hi!
        </p>
        <div className="flex flex-col gap-6 items-center">
          {connections.map((conn) => (
            <a
              key={conn.label}
              href={conn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-8 py-5 rounded-xl shadow-lg text-white text-lg font-semibold transition-transform duration-300 hover:scale-105 border border-white/10 ${conn.color}`}
            >
              <span>{conn.icon}</span>
              <span>{conn.label}:</span>
              <span className="font-mono text-base">{conn.value}</span>
              <FiExternalLink className="w-5 h-5 ml-2 opacity-70" />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 