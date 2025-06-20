'use client';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiFeather } from 'react-icons/fi';

const contacts = [
  {
    label: 'Email',
    value: 'aryamehta456@gmail.com',
    href: 'mailto:aryamehta456@gmail.com',
    icon: <FiMail className="w-6 h-6" />,
  },
  {
    label: 'GitHub',
    value: '@aryaMehta26',
    href: 'https://github.com/aryaMehta26',
    icon: <FiGithub className="w-6 h-6" />,
  },
  {
    label: 'LinkedIn',
    value: 'Arya Mehta',
    href: 'https://www.linkedin.com/in/arya-mehta-',
    icon: <FiLinkedin className="w-6 h-6" />,
  },
  {
    label: 'Medium',
    value: '@aryaMehta26',
    href: 'https://medium.com/@aryaMehta26',
    icon: <FiFeather className="w-6 h-6" />,
  },
];

export default function Contact() {
  return (
    <section className="min-h-screen w-full py-20 px-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto pt-24"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-8 text-center">
          Get In Touch
        </h1>
        <p className="text-lg text-white/70 mb-12 text-center">
          I&apos;m always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
          {/* Contact Form */}
          <form className="flex-1 flex flex-col gap-6">
            <input type="text" placeholder="Your Name" className="bg-gray-900/80 border border-white/10 rounded-lg px-5 py-3 text-white focus:outline-none focus:border-pink-500 transition" />
            <input type="email" placeholder="Your Email" className="bg-gray-900/80 border border-white/10 rounded-lg px-5 py-3 text-white focus:outline-none focus:border-pink-500 transition" />
            <textarea placeholder="Your Message" rows={5} className="bg-gray-900/80 border border-white/10 rounded-lg px-5 py-3 text-white focus:outline-none focus:border-pink-500 transition" />
            <button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 rounded-lg mt-2 transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Send Message <span className="ml-2">✈️</span>
            </button>
          </form>
          {/* Contact Sidebar */}
          <div className="flex-1 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
            <div className="flex flex-col gap-5 mb-6">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/90 hover:text-pink-400 transition-colors text-lg"
                >
                  <span>{contact.icon}</span>
                  <span className="font-semibold">{contact.label}</span>
                  <span className="font-mono text-base">{contact.value}</span>
                </a>
              ))}
            </div>
            <div className="bg-gray-900/60 rounded-lg p-4 text-white/70 text-sm">
              Currently open to full-time opportunities in Data Engineering and Full Stack Development roles. Let&apos;s connect and explore how we can work together!
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 