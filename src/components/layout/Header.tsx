import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Code2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleIntersection = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentActive = 'home';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 3) {
          currentActive = section.id;
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleIntersection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleIntersection);
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? `${theme === 'dark' 
              ? 'bg-slate-900/90 backdrop-blur-xl border-b border-slate-800/50 shadow-xl shadow-slate-900/20' 
              : 'bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-xl shadow-gray-900/10'
            }` 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Gradient line at top */}
      <div className={`h-0.5 bg-gradient-to-r ${
        theme === 'dark' 
          ? 'from-transparent via-teal-400 to-transparent' 
          : 'from-transparent via-teal-600 to-transparent'
      }`} />
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Enhanced Logo */}
        <motion.a 
          href="#home" 
          className="flex items-center space-x-3 text-2xl font-bold relative group"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className={`
              relative p-2 rounded-xl transition-all duration-300
              ${theme === 'dark' 
                ? 'bg-slate-800/50 group-hover:bg-slate-700/70 border border-slate-700/50 group-hover:border-teal-500/50' 
                : 'bg-gray-100/50 group-hover:bg-gray-200/70 border border-gray-200/50 group-hover:border-teal-500/50'
              }
            `}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Code2 className={`
              ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}
            `} size={28} />
            
            {/* Sparkle effect */}
            <motion.div
              className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${
                theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'
              }`}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <div className="flex flex-col">
            <span className={`
              relative z-10 bg-gradient-to-r bg-clip-text text-transparent font-extrabold
              ${theme === 'dark' 
                ? 'from-teal-400 via-cyan-400 to-blue-400' 
                : 'from-teal-600 via-cyan-600 to-blue-600'
              }
            `}>
              Vaibhav
            </span>
            <span className={`
              text-xs font-medium -mt-1
              ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}
            `}>
              Developer
            </span>
          </div>
        </motion.a>

        {/* Enhanced Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={`
                relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group
                ${activeSection === link.id 
                  ? `${theme === 'dark' 
                      ? 'text-teal-400 bg-slate-800/50 border border-slate-700/50' 
                      : 'text-teal-600 bg-teal-50/50 border border-teal-200/50'
                    }`
                  : `${theme === 'dark' 
                      ? 'text-gray-300 hover:text-white hover:bg-slate-800/30' 
                      : 'text-gray-700 hover:text-black hover:bg-gray-100/50'
                    }`
                }
              `}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
              
              {/* Active indicator dot */}
              <motion.div
                className={`
                  absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full
                  ${theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'}
                `}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: activeSection === link.id ? 1 : 0,
                  opacity: activeSection === link.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Hover glow effect */}
              <motion.div 
                className={`
                  absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  ${theme === 'dark'
                    ? 'bg-gradient-to-r from-teal-500/5 to-cyan-500/5'
                    : 'bg-gradient-to-r from-teal-500/5 to-cyan-500/5'
                  }
                `}
              />
            </motion.a>
          ))}

          {/* Enhanced Theme Toggle */}
          <motion.button 
            onClick={toggleTheme} 
            className={`
              ml-4 p-3 rounded-xl transition-all duration-300 relative group
              ${theme === 'dark' 
                ? 'text-gray-300 hover:text-white bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50 hover:border-teal-500/50' 
                : 'text-gray-700 hover:text-black bg-gray-100/50 hover:bg-gray-200/70 border border-gray-200/50 hover:border-teal-500/50'
              }
            `}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.div
              key={theme} // Key change triggers re-mount for smooth icon transition
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
            
            {/* Background glow */}
            <motion.div
              className={`
                absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${theme === 'dark'
                  ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10'
                  : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
                }
              `}
            />
          </motion.button>
        </nav>

        {/* Enhanced Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <motion.button 
            onClick={toggleTheme} 
            className={`
              p-2.5 rounded-xl transition-all duration-300 relative group
              ${theme === 'dark' 
                ? 'text-gray-300 hover:text-white bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50' 
                : 'text-gray-700 hover:text-black bg-gray-100/50 hover:bg-gray-200/70 border border-gray-200/50'
              }
            `}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              key={theme}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </motion.button>
          
          <motion.button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`
              p-2.5 rounded-xl transition-all duration-300 relative group
              ${theme === 'dark' 
                ? 'text-gray-300 hover:text-white bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50' 
                : 'text-gray-700 hover:text-black bg-gray-100/50 hover:bg-gray-200/70 border border-gray-200/50'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className={`
              md:hidden backdrop-blur-xl border-t
              ${theme === 'dark' 
                ? 'bg-slate-900/95 border-slate-800/50' 
                : 'bg-white/95 border-gray-200/50'
              }
            `}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`
                    flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 group
                    ${activeSection === link.id 
                      ? `${theme === 'dark' 
                          ? 'bg-slate-800/70 text-teal-400 border border-slate-700/50' 
                          : 'bg-teal-50/70 text-teal-600 border border-teal-200/50'
                        }`
                      : `${theme === 'dark' 
                          ? 'text-gray-300 hover:bg-slate-800/50 hover:text-white' 
                          : 'text-gray-700 hover:bg-gray-100/50 hover:text-black'
                        }`
                    }
                  `}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium">{link.label}</span>
                  <motion.div
                    className={`
                      w-2 h-2 rounded-full
                      ${activeSection === link.id 
                        ? `${theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'}`
                        : 'bg-transparent'
                      }
                    `}
                    animate={{ 
                      scale: activeSection === link.id ? 1 : 0,
                      opacity: activeSection === link.id ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;