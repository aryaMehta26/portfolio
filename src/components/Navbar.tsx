'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Work' },
  { href: '/education', label: 'Education' },
  { href: '/connections', label: 'Connections' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="w-full flex items-center h-16 relative">
          {/* Left: Logo only, flush to the left edge but with a small margin */}
          <div className="absolute left-0 top-0 h-full flex items-center ml-2">
            <Link href="/" className="flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center"
              >
                <span className="text-white text-2xl font-bold">A</span>
              </motion.div>
            </Link>
          </div>

          {/* Center: Navigation links */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group`}
              >
                <span className={`text-lg font-semibold transition-colors duration-300 ${
                  pathname === link.href ? 'text-pink-400' : 'text-white/80 hover:text-white'
                }`}>
                  {link.label}
                </span>
                {pathname === link.href && (
                  <div
                    className="absolute left-0 top-full h-0.5 w-full bg-pink-400 scale-x-100"
                  />
                )}
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* Right: Mobile menu */}
          <div className="absolute right-0 top-0 h-full flex items-center pr-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-4 p-2 rounded-lg text-white/70 hover:text-white focus:outline-none md:hidden"
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-x-0 top-16 z-40 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-black/95 backdrop-blur-lg shadow-lg border-t border-white/10 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 text-lg font-semibold transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-pink-400 bg-white/5'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
} 