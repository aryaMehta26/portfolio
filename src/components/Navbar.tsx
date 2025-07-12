'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
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
  const [hasMounted, setHasMounted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsScrolled(currentScrollY > 20);
        lastScrollY.current = currentScrollY;
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [hasMounted]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 h-16 flex items-center transition-all duration-300 ${isScrolled ? 'bg-black/40 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}
      >
        <div className="w-full h-16 flex items-center">
          {/* Logo: always flush left */}
          <div className="flex-shrink-0 flex items-center h-full ml-4">
            <Link href="/" className="flex items-center h-full">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-2xl font-extrabold">A</span>
              </motion.div>
            </Link>
          </div>
          {/* Nav/Menu: fills rest of space, with padding */}
          <div className="flex-1 h-full relative flex items-center px-4 sm:px-6 lg:px-8">
            {/* Centered nav links (desktop) */}
            <div className="hidden md:flex absolute left-1/2 top-0 h-full -translate-x-1/2 items-center justify-center">
              <div className="flex items-center space-x-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-lg font-bold text-white/80 transition-colors duration-300 hover:text-pink-400 ${pathname === link.href ? 'text-pink-400' : ''}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            {/* Mobile menu button (right) */}
            <div className="-mr-2 flex md:hidden ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
              </button>
            </div>
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-lg shadow-lg border-t border-white/10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
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