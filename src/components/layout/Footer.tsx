import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp, Code2, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vdabral', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vaibhav-dabral-9bb344192/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/melody_of_the_mountains_?igsh=NHJ6NjBweWVvemQ5', label: 'Instagram' },
    { icon: Mail, href: 'mailto:vdabral21007@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className={`
        relative overflow-hidden py-16
        ${theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }
      `}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className={`absolute top-10 left-10 w-32 h-32 rounded-full ${
            theme === 'dark' ? 'bg-teal-400/10' : 'bg-teal-600/10'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-10 right-10 w-24 h-24 rounded-full ${
            theme === 'dark' ? 'bg-cyan-400/10' : 'bg-cyan-600/10'
          }`}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.05, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Gradient line at top */}
      <div className={`h-0.5 bg-gradient-to-r ${
        theme === 'dark' 
          ? 'from-transparent via-teal-400 to-transparent' 
          : 'from-transparent via-teal-600 to-transparent'
      }`} />

      <div className="container mx-auto px-4 relative z-10 pt-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand section */}
          <motion.div 
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                className={`
                  p-2 rounded-xl
                  ${theme === 'dark' 
                    ? 'bg-slate-800/50 border border-slate-700/50' 
                    : 'bg-gray-100/50 border border-gray-200/50'
                  }
                `}
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Code2 className={`
                  ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}
                `} size={24} />
              </motion.div>
              <div>
                <h2 className={`
                  text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent
                  ${theme === 'dark' 
                    ? 'from-teal-400 via-cyan-400 to-blue-400' 
                    : 'from-teal-600 via-cyan-600 to-blue-600'
                  }
                `}>
                  Vaibhav Dabral
                </h2>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className={`
              text-lg leading-relaxed mb-6 max-w-md
              ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
            `}>
              Passionate about creating exceptional web experiences with modern technologies. 
              Let's build something amazing together!
            </p>
            
            {/* Location and availability */}
            <div className="flex items-center space-x-4 text-sm">
              <div className={`flex items-center space-x-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <MapPin size={16} />
                <span>India</span>
              </div>
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  Available for work
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className={`
              text-lg font-semibold mb-4
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
            `}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link.label}>
                  <a
                    href={link.href}
                    className={`
                      text-sm transition-all duration-300 hover:translate-x-1 flex items-center group
                      ${theme === 'dark' 
                        ? 'text-gray-400 hover:text-teal-400' 
                        : 'text-gray-600 hover:text-teal-600'
                      }
                    `}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`
              text-lg font-semibold mb-6
              ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
            `}>
              Connect
            </h3>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 group w-full
                    ${theme === 'dark' 
                      ? 'text-gray-400 hover:text-white bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700/50 hover:border-teal-500/50' 
                      : 'text-gray-600 hover:text-gray-900 bg-gray-100/30 hover:bg-gray-200/50 border border-gray-200/50 hover:border-teal-500/50'
                    }
                  `}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <link.icon size={20} />
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className={`
          pt-8 border-t flex justify-center
          ${theme === 'dark' ? 'border-slate-800/50' : 'border-gray-200/50'}
        `}>
          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            className={`
              flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 group
              ${theme === 'dark' 
                ? 'text-gray-400 hover:text-white bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50 hover:border-teal-500/50' 
                : 'text-gray-600 hover:text-gray-900 bg-gray-100/50 hover:bg-gray-200/70 border border-gray-200/50 hover:border-teal-500/50'
              }
            `}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium">Back to top</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp size={16} />
            </motion.div>
          </motion.button>
        </div>

        {/* Sparkle effects */}
        <motion.div
          className={`absolute top-20 right-20 ${theme === 'dark' ? 'text-teal-400/20' : 'text-teal-600/20'}`}
          animate={{ 
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          <Sparkles size={20} />
        </motion.div>
        
        <motion.div
          className={`absolute bottom-20 left-20 ${theme === 'dark' ? 'text-cyan-400/20' : 'text-cyan-600/20'}`}
          animate={{ 
            rotate: [360, 180, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          <Sparkles size={16} />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;