import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { projectsData } from '../../data/projects';
import { ExternalLink, Github, Search, X, Sparkles, Code2, Layers, Zap, ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
}

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openProjectModal = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
    // Don't prevent body scroll, let the modal handle its own scrolling
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setShowScrollIndicator(false);
  };

  // Check if modal content is scrollable
  useEffect(() => {
    if (isModalOpen) {
      const checkScrollable = () => {
        const windowHeight = window.innerHeight;
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
          const modalHeight = modalContent.scrollHeight;
          const isScrollable = modalHeight > windowHeight - 100; // Account for padding
          setShowScrollIndicator(isScrollable);
        }
      };
      
      // Check after a short delay to ensure content is rendered
      setTimeout(checkScrollable, 100);
      
      // Listen for window scroll events to hide indicator when user scrolls
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const isNearBottom = scrollTop + windowHeight >= documentHeight - 100;
        
        if (isNearBottom) {
          setShowScrollIndicator(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', checkScrollable);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', checkScrollable);
      };
    }
  }, [isModalOpen, activeProject]);

  // Floating decoration icons
  const FloatingIcon = ({ icon: Icon, className, delay = 0 }: { icon: any, className: string, delay?: number }) => (
    <motion.div
      className={`absolute ${className} opacity-20`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <Icon size={24} />
    </motion.div>
  );

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="A collection of my featured work showcasing modern web development"
      className={`
        relative overflow-hidden
        ${theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }
      `}
    >
      {/* Floating background decorations */}
      <FloatingIcon 
        icon={Code2} 
        className={`top-20 left-10 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}
        delay={0}
      />
      <FloatingIcon 
        icon={Layers} 
        className={`top-40 right-16 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
        delay={2}
      />
      <FloatingIcon 
        icon={Zap} 
        className={`bottom-32 left-20 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
        delay={4}
      />
      <FloatingIcon 
        icon={Sparkles} 
        className={`bottom-48 right-12 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}
        delay={6}
      />

      {/* Enhanced Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        layout
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              type: "spring",
              stiffness: 100
            }}
            onHoverStart={() => setHoveredCard(project.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="group"
          >
            <Card
              className={`
                overflow-hidden h-full relative backdrop-blur-sm border-2 transition-all duration-500
                ${theme === 'dark'
                  ? 'bg-slate-800/60 border-slate-700/50 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/20'
                  : 'bg-white/60 border-gray-200/50 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/20'
                }
                ${hoveredCard === project.id ? 'transform scale-105' : ''}
              `}
              hoverEffect
            >
              {/* Enhanced Image Container */}
              <div className="relative overflow-hidden h-60 rounded-t-lg">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                
                {/* Gradient Overlay */}
                <div className={`
                  absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  ${theme === 'dark' 
                    ? 'from-slate-900/90 via-slate-900/50 to-transparent' 
                    : 'from-gray-900/90 via-gray-900/40 to-transparent'
                  }
                `} />
                
                {/* Enhanced Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => openProjectModal(project)}
                      className={`
                        p-4 rounded-2xl backdrop-blur-md border-2 shadow-lg
                        ${theme === 'dark' 
                          ? 'bg-teal-500/20 border-teal-400/50 text-teal-400 hover:bg-teal-400/30' 
                          : 'bg-teal-600/20 border-teal-500/50 text-teal-600 hover:bg-teal-500/30'
                        }
                      `}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ 
                        y: hoveredCard === project.id ? 0 : 30, 
                        opacity: hoveredCard === project.id ? 1 : 0 
                      }}
                      transition={{ delay: 0.1 }}
                      aria-label="View project details"
                    >
                      <Search size={22} />
                    </motion.button>
                    
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!project.liveUrl || project.liveUrl === '#' || project.liveUrl === '') {
                          e.preventDefault();
                          alert('Live URL not available');
                        }
                      }}
                      className={`
                        p-4 rounded-2xl backdrop-blur-md border-2 shadow-lg
                        ${theme === 'dark' 
                          ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/30' 
                          : 'bg-cyan-600/20 border-cyan-500/50 text-cyan-600 hover:bg-cyan-500/30'
                        }
                      `}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ 
                        y: hoveredCard === project.id ? 0 : 30, 
                        opacity: hoveredCard === project.id ? 1 : 0 
                      }}
                      transition={{ delay: 0.2 }}
                      aria-label="View live project"
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                  </div>
                </div>

                {/* Premium Badge */}
                <motion.div
                  className={`
                    absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md
                    ${theme === 'dark'
                      ? 'bg-gradient-to-r from-teal-500/80 to-cyan-500/80 text-gray-900'
                      : 'bg-gradient-to-r from-teal-600/80 to-cyan-600/80 text-white'
                    }
                  `}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                >
                  Featured
                </motion.div>
              </div>

              {/* Enhanced Content */}
              <div className="p-6 space-y-4">
                <motion.h3 
                  className={`
                    text-xl font-bold transition-colors duration-300 flex items-center gap-2
                    ${theme === 'dark' ? 'text-white group-hover:text-teal-400' : 'text-gray-900 group-hover:text-teal-600'}
                  `}
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                  <motion.div
                    animate={{ rotate: hoveredCard === project.id ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink size={16} className="opacity-50" />
                  </motion.div>
                </motion.h3>
                
                <p 
                  className={`
                    text-sm leading-relaxed line-clamp-3
                    ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                  `}
                >
                  {project.description}
                </p>
                
                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className={`
                        px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300
                        ${theme === 'dark' 
                          ? 'bg-slate-700/50 border-slate-600/50 text-teal-400 hover:bg-teal-500/20 hover:border-teal-500/50' 
                          : 'bg-teal-50 border-teal-200/50 text-teal-700 hover:bg-teal-100 hover:border-teal-300'
                        }
                      `}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className={`
                      px-3 py-1.5 rounded-full text-xs font-medium
                      ${theme === 'dark' ? 'bg-slate-600 text-gray-300' : 'bg-gray-200 text-gray-600'}
                    `}>
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <motion.a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!project.repoUrl || project.repoUrl === '#' || project.repoUrl === '') {
                        e.preventDefault();
                        alert('Repository URL not available');
                      }
                    }}
                    className={`
                      flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium text-sm
                      transition-all duration-300 border-2
                      ${theme === 'dark' 
                        ? 'border-slate-600 text-gray-300 hover:border-teal-500 hover:text-teal-400 hover:bg-teal-500/10' 
                        : 'border-gray-300 text-gray-600 hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50'
                      }
                    `}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  
                  <motion.button
                    onClick={() => openProjectModal(project)}
                    className={`
                      flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium text-sm
                      transition-all duration-300 shadow-lg
                      ${theme === 'dark' 
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900 hover:from-teal-400 hover:to-cyan-400 hover:shadow-teal-500/30' 
                        : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-500 hover:to-cyan-500 hover:shadow-teal-600/30'
                      }
                    `}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Search size={16} />
                    Details
                  </motion.button>
                </div>
              </div>

              {/* Subtle Border Glow Effect */}
              <motion.div
                className={`
                  absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                  ${theme === 'dark'
                    ? 'bg-gradient-to-r from-teal-500/10 via-cyan-500/5 to-blue-500/10'
                    : 'bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-blue-500/5'
                  }
                `}
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {isModalOpen && activeProject && (
          <motion.div 
            className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md"
            onClick={closeProjectModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={modalRef}
          >
            <div className="min-h-screen flex items-center justify-center p-4">
              <motion.div 
                className={`
                  w-full max-w-4xl rounded-2xl relative z-10 shadow-2xl my-8 modal-content
                  ${theme === 'dark' 
                    ? 'bg-slate-800 border border-slate-700/50' 
                    : 'bg-white border border-gray-200/50'
                  }
                `}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.8, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 100 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
              >                {/* Enhanced Image Header */}
                <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden rounded-t-2xl">
                  <motion.img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                <div className={`
                  absolute inset-0 bg-gradient-to-t 
                  ${theme === 'dark' 
                    ? 'from-slate-800/80 via-transparent to-transparent' 
                    : 'from-white/80 via-transparent to-transparent'
                  }
                `} />
                
                {/* Enhanced Close Button */}
                <motion.button
                  onClick={closeProjectModal}
                  className={`
                    absolute top-4 right-4 p-2 rounded-xl backdrop-blur-md border shadow-lg
                    ${theme === 'dark' 
                      ? 'bg-slate-900/80 border-slate-700/50 text-white hover:bg-slate-900 hover:border-red-500/50' 
                      : 'bg-white/80 border-gray-300/50 text-gray-900 hover:bg-white hover:border-red-500/50'
                    }
                  `}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Enhanced Content */}
              <div className="p-6 md:p-8 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <motion.h3 
                      className={`
                        text-2xl md:text-3xl font-bold
                        ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                      `}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {activeProject.title}
                    </motion.h3>
                    <motion.div
                      className={`
                        px-3 py-1 rounded-full text-xs font-bold w-fit
                        ${theme === 'dark'
                          ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900'
                          : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white'
                        }
                      `}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4, type: "spring" }}
                    >
                      Featured
                    </motion.div>
                  </div>
                  
                  {/* Enhanced Tags Section */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {activeProject.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium border
                          ${theme === 'dark' 
                            ? 'bg-slate-700/50 border-slate-600/50 text-teal-400' 
                            : 'bg-teal-50 border-teal-200 text-teal-700'
                          }
                        `}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  
                  <motion.p 
                    className={`
                      text-base leading-relaxed mb-6
                      ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
                    `}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {activeProject.description}
                  </motion.p>
                  
                  {/* Enhanced Action Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!activeProject.liveUrl || activeProject.liveUrl === '#' || activeProject.liveUrl === '') {
                          e.preventDefault();
                          alert('Live URL not available');
                        }
                      }}
                      className={`
                        flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl 
                        transition-all duration-300 shadow-lg hover:shadow-xl
                        ${theme === 'dark' 
                          ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900 hover:from-teal-400 hover:to-cyan-400 hover:shadow-teal-500/30' 
                          : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-500 hover:to-cyan-500 hover:shadow-teal-600/30'
                        }
                      `}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={18} />
                      View Live
                    </motion.a>
                    
                    <motion.a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!activeProject.repoUrl || activeProject.repoUrl === '#' || activeProject.repoUrl === '') {
                          e.preventDefault();
                          alert('Repository URL not available');
                        }
                      }}
                      className={`
                        flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl 
                        transition-all duration-300 border-2 hover:shadow-lg
                        ${theme === 'dark' 
                          ? 'bg-transparent border-teal-500 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400' 
                          : 'bg-transparent border-teal-600 text-teal-600 hover:bg-teal-600/10 hover:border-teal-500'
                        }
                      `}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github size={18} />
                      View Code
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Scroll Indicator */}
              <AnimatePresence>
                {showScrollIndicator && (
                  <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`
                        flex flex-col items-center gap-2 px-4 py-3 rounded-2xl backdrop-blur-md border shadow-lg
                        ${theme === 'dark' 
                          ? 'bg-slate-800/90 border-slate-700/50 text-gray-300' 
                          : 'bg-white/90 border-gray-300/50 text-gray-600'
                        }
                      `}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronDown size={16} />
                      <span className="text-xs font-medium">Scroll for more</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;