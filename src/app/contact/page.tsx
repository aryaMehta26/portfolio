'use client';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiFeather } from 'react-icons/fi';
import { useState } from 'react';

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
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      // Simulate success (change to 'error' to test error state)
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className="min-h-screen w-full py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl mx-auto mt-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-8 text-center">
          Get In Touch
        </h1>
        <p className="text-lg text-white/70 mb-12 text-center">
          I&apos;m always open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
          {/* Contact Form */}
          <form className="w-full md:w-1/2 flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="bg-gray-900/80 border border-white/10 rounded-lg px-5 py-3 text-white focus:outline-none focus:border-pink-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="bg-gray-900/80 border border-white/10 rounded-lg px-5 py-3 text-white focus:outline-none focus:border-pink-500 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="bg-gray-900/80 border border-white/10 rounded-lg px-5 py-3 text-white focus:outline-none focus:border-pink-500 transition"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-3 rounded-lg mt-2 transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-60"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : <>Send Message <span className="ml-2">✈️</span></>}
            </button>
            {status === 'success' && (
              <div className="text-green-400 text-center font-semibold mt-2">Message sent successfully!</div>
            )}
            {status === 'error' && (
              <div className="text-red-400 text-center font-semibold mt-2">Failed to send message. Please try again.</div>
            )}
          </form>
          {/* Contact Sidebar */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-8 border border-white/10 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
            <div className="flex flex-col gap-5 mb-6">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/90 hover:text-pink-400 transition-colors text-base sm:text-lg"
                >
                  <span className="flex-shrink-0">{contact.icon}</span>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-x-4">
                    <span className="font-semibold w-16">{contact.label}</span>
                    <span className="font-mono text-sm sm:text-base">{contact.value}</span>
                  </div>
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