import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download, Sparkles, Code, Coffee, Instagram } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedBackground from '../ui/AnimatedBackground';
import { useTheme } from '../../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [typedText, setTypedText] = useState('');
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const phrases = ['Full Stack Developer', 'MERN Stack Developer', 'React Developer', 'Problem Solver'];

  // Use refs to persist variables between renders
  const isDeleting = useRef(false);
  const charIndex = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentPhraseText = phrases[currentPhrase];

    const handleType = () => {
      if (!isDeleting.current) {
        // Typing forward
        charIndex.current++;
        setTypedText(currentPhraseText.substring(0, charIndex.current));
        setIsTypingComplete(false);

        if (charIndex.current === currentPhraseText.length) {
          // Pause before deleting
          timeoutRef.current = setTimeout(() => {
            isDeleting.current = true;
            handleType();
          }, 2000);
          return;
        }
      } else {
        // Deleting
        charIndex.current--;
        setTypedText(currentPhraseText.substring(0, charIndex.current));
        setIsTypingComplete(false);

        if (charIndex.current === 0) {
          isDeleting.current = false;
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          setIsTypingComplete(true); // pause after deleting all
          return;
        }
      }

      timeoutRef.current = setTimeout(handleType, isDeleting.current ? 50 : 100);
    };

    timeoutRef.current = setTimeout(handleType, 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentPhrase, phrases]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vdabral', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vaibhav-dabral-9bb344192/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/melody_of_the_mountains_?igsh=NHJ6NjBweWVvemQ5', label: 'Instagram' },
  ];

  return (
    <AnimatedBackground>
      <section 
        id="home" 
        className={`
          min-h-screen flex items-center justify-center relative overflow-hidden pt-20
          ${theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}
        `}
      >
        {/* Floating elements */}
        <motion.div
          className={`absolute top-32 left-10 w-6 h-6 ${theme === 'dark' ? 'text-teal-400/30' : 'text-teal-600/30'}`}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Code className="w-full h-full" />
        </motion.div>
        
        <motion.div
          className={`absolute top-52 right-16 w-5 h-5 ${theme === 'dark' ? 'text-cyan-400/30' : 'text-cyan-600/30'}`}
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Sparkles className="w-full h-full" />
        </motion.div>
        
        <motion.div
          className={`absolute bottom-40 left-20 w-4 h-4 ${theme === 'dark' ? 'text-blue-400/30' : 'text-blue-600/30'}`}
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <Coffee className="w-full h-full" />
        </motion.div>

        {/* Main content container */}
        <div className="container mx-auto px-4 py-8 z-10 max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Profile image section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-4"
            >
              <motion.div
                className="relative w-48 h-48 md:w-52 md:h-52 mx-auto group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated rings */}
                <motion.div
                  className={`absolute inset-0 rounded-full border-2 ${
                    theme === 'dark' ? 'border-teal-400/30' : 'border-teal-600/30'
                  }`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className={`absolute inset-2 rounded-full border border-dashed ${
                    theme === 'dark' ? 'border-cyan-400/20' : 'border-cyan-600/20'
                  }`}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Main image container */}
                <div className={`
                  relative w-full h-full rounded-full overflow-hidden border-4 shadow-2xl
                  ${theme === 'dark' 
                    ? 'border-slate-700 shadow-teal-500/20' 
                    : 'border-white shadow-teal-600/20'
                  }
                `}>
                  <img 
                    src="/portfolio/images/Test.JPG" 
                    alt="Vaibhav Dabral" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Status indicator */}
                <motion.div
                  className={`
                    absolute bottom-4 right-4 w-6 h-6 rounded-full border-4 
                    ${theme === 'dark' 
                      ? 'bg-green-400 border-slate-900' 
                      : 'bg-green-500 border-white'
                    }
                  `}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
              
            {/* Name heading section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
            >
              <motion.h1 
                className={`
                  text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight
                  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                `}
              >
                Hi, I'm{' '}
                <motion.span
                  className={`
                    relative inline-block bg-gradient-to-r bg-clip-text text-transparent
                    ${theme === 'dark' 
                      ? 'from-teal-400 via-cyan-400 to-blue-400' 
                      : 'from-teal-600 via-cyan-600 to-blue-600'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                >
                  Vaibhav Dabral
                  <motion.span
                    className={`absolute bottom-0 left-0 w-full h-1 md:h-2 rounded-full ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-r from-teal-400 to-cyan-400' 
                        : 'bg-gradient-to-r from-teal-600 to-cyan-600'
                    }`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Typing animation section */}
            <motion.div
              className="h-12 md:h-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2
                className={`
                  text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium
                  ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
                `}
              >
                I'm a{' '}
                <motion.span 
                  className={`
                    font-bold ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}
                  `}
                  whileHover={{ scale: 1.05 }}
                >
                  {typedText}
                  <motion.span
                    className={`
                      inline-block w-0.5 md:w-1 h-6 md:h-8 ml-1 align-middle
                      ${theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'}
                      ${typedText.length === 0 && isTypingComplete ? 'opacity-0' : 'opacity-100'}
                    `}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.span>
              </h2>
            </motion.div>
            
            {/* Description section */}
            <motion.div
              className="max-w-3xl mx-auto space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p 
                className={`
                  text-lg md:text-xl lg:text-2xl leading-relaxed
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                `}
              >
                Passionate <span className={`font-semibold ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>Full Stack Developer</span> specializing in 
                <span className={`font-semibold ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}> MERN stack</span> development.
              </p>
              <p 
                className={`
                  text-base md:text-lg lg:text-xl
                  ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}
                `}
              >
                Creating scalable web applications with modern technologies and best practices.
              </p>
            </motion.div>

            {/* Buttons section */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  className={`
                    group relative overflow-hidden backdrop-blur-sm shadow-2xl
                    ${theme === 'dark'
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 shadow-teal-500/25'
                      : 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 shadow-teal-600/25'
                    }
                  `}
                >
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-200">
                    View My Work
                  </span>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => {
                    window.open('https://drive.google.com/file/d/17oObQYYvwlCjF4knKvxprpAyiNOZWoOY/view?usp=sharing', '_blank');
                  }}
                  variant="outline"
                  size="lg"
                  icon={<Download size={18} />}
                  className={`
                    backdrop-blur-sm border-2 transition-all duration-300
                    ${theme === 'dark'
                      ? 'border-teal-400/50 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400'
                      : 'border-teal-600/50 text-teal-600 hover:bg-teal-600/10 hover:border-teal-600'
                    }
                  `}
                >
                  Download Resume
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  variant="outline"
                  size="lg"
                  className={`
                    backdrop-blur-sm border-2 transition-all duration-300
                    ${theme === 'dark'
                      ? 'border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400'
                      : 'border-cyan-600/50 text-cyan-600 hover:bg-cyan-600/10 hover:border-cyan-600'
                    }
                  `}
                >
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            {/* Social links section */}
            <motion.div 
              className="flex gap-6 md:gap-8 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    relative p-3 md:p-4 rounded-2xl transition-all duration-300 group backdrop-blur-sm
                    ${theme === 'dark' 
                      ? 'text-gray-400 hover:text-white bg-slate-800/50 hover:bg-slate-700/80 border border-slate-700/50 hover:border-teal-500/50' 
                      : 'text-gray-600 hover:text-gray-900 bg-white/50 hover:bg-white/80 border border-gray-200/50 hover:border-teal-500/50'
                    }
                  `}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <link.icon size={24} className="md:w-7 md:h-7" />
                  <motion.div
                    className={`
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      ${theme === 'dark'
                        ? 'bg-gradient-to-br from-teal-500/10 to-cyan-500/10'
                        : 'bg-gradient-to-br from-teal-500/10 to-cyan-500/10'
                      }
                    `}
                  />
                </motion.a>
              ))}            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Hero;