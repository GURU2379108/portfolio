import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { FaSun, FaMoon } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-950/80 backdrop-blur-xl border-b border-primary-500/10 shadow-lg shadow-dark-950/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              to="hero"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-display font-bold text-white text-sm shadow-lg shadow-primary-500/25 group-hover:shadow-primary-500/50 transition-shadow duration-300">
                GK
              </div>
              <span className="font-display font-bold text-lg text-white hidden sm:block">
                Gurudas<span className="text-primary-400">.dev</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onSetActive={() => setActiveSection(link.to)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all duration-300 ${
                    activeSection === link.to
                      ? 'text-primary-300'
                      : 'text-dark-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.to && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary-500/10 rounded-lg border border-primary-500/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Resume Button (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-dark-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none preserve-color"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun size={20} className="text-yellow-400 preserve-color" /> : <FaMoon size={20} className="text-blue-400 preserve-color" />}
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm !py-2 !px-5"
              >
                Download CV
              </a>
            </div>

            {/* Mobile Menu & Theme Buttons */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-dark-300 hover:text-white hover:bg-white/5 transition-colors preserve-color"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FaSun size={20} className="text-yellow-400 preserve-color" /> : <FaMoon size={20} className="text-blue-400 preserve-color" />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-lg text-dark-300 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-dark-950/80 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-dark-900/95 backdrop-blur-xl border-l border-primary-500/10 lg:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display font-bold text-lg text-white">
                    Menu
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg text-dark-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <HiXMark size={24} />
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium rounded-xl cursor-pointer transition-all duration-300 ${
                          activeSection === link.to
                            ? 'text-primary-300 bg-primary-500/10 border border-primary-500/20'
                            : 'text-dark-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center justify-center text-sm"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
