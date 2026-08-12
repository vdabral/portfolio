import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { projectsData, Project } from '../../data/projects';
import { ExternalLink, Github, Search, X, Sparkles, Code2, Layers, Zap, Lock, Briefcase, Code, CheckCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const domainColors: Record<string, { dark: string; light: string; badge: string }> = {
  'B2B E-commerce': { dark: 'from-blue-500/80 to-indigo-500/80', light: 'from-blue-600/80 to-indigo-600/80', badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  'EdTech / Content': { dark: 'from-purple-500/80 to-violet-500/80', light: 'from-purple-600/80 to-violet-600/80', badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  'D2C E-commerce': { dark: 'from-pink-500/80 to-rose-500/80', light: 'from-pink-600/80 to-rose-600/80', badge: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
  'Real Estate': { dark: 'from-green-500/80 to-emerald-500/80', light: 'from-green-600/80 to-emerald-600/80', badge: 'bg-green-500/20 text-green-400 border-green-500/30' },
  'CRM / SaaS': { dark: 'from-teal-500/80 to-cyan-500/80', light: 'from-teal-600/80 to-cyan-600/80', badge: 'bg-teal-500/20 text-teal-400 border-teal-500/30' },
  'B2B SaaS': { dark: 'from-amber-500/80 to-orange-500/80', light: 'from-amber-600/80 to-orange-600/80', badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  'Social / AI': { dark: 'from-fuchsia-500/80 to-pink-500/80', light: 'from-fuchsia-600/80 to-pink-600/80', badge: 'bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30' },
  'FinTech / EdTech': { dark: 'from-lime-500/80 to-green-500/80', light: 'from-lime-600/80 to-green-600/80', badge: 'bg-lime-500/20 text-lime-400 border-lime-500/30' },
  'FinTech': { dark: 'from-emerald-500/80 to-teal-500/80', light: 'from-emerald-600/80 to-teal-600/80', badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  'Travel': { dark: 'from-sky-500/80 to-blue-500/80', light: 'from-sky-600/80 to-blue-600/80', badge: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
  'Community / Social': { dark: 'from-violet-500/80 to-purple-500/80', light: 'from-violet-600/80 to-purple-600/80', badge: 'bg-violet-500/20 text-violet-400 border-violet-500/30' },
  'Portfolio': { dark: 'from-gray-500/80 to-slate-500/80', light: 'from-gray-600/80 to-slate-600/80', badge: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
};

const getDomainStyle = (domain: string) =>
  domainColors[domain] || { dark: 'from-teal-500/80 to-cyan-500/80', light: 'from-teal-600/80 to-cyan-600/80', badge: 'bg-teal-500/20 text-teal-400 border-teal-500/30' };

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'professional' | 'personal'>('all');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showScrollIndicator, setShowScrollIndicator] = useState(false); // Reserved for future scroll indicator feature
  const modalRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.type === activeFilter);

  const professionalCount = projectsData.filter(p => p.type === 'professional').length;
  const personalCount = projectsData.filter(p => p.type === 'personal').length;

  const openProjectModal = (project: Project) => {
    setActiveProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setShowScrollIndicator(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    if (isModalOpen) {
      const checkScrollable = () => {
        const windowHeight = window.innerHeight;
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
          const modalHeight = modalContent.scrollHeight;
          const isScrollable = modalHeight > windowHeight - 100;
          setShowScrollIndicator(isScrollable);
        }
      };
      setTimeout(checkScrollable, 100);
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const isNearBottom = scrollTop + windowHeight >= documentHeight - 100;
        if (isNearBottom) setShowScrollIndicator(false);
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
  const FloatingIcon = ({ icon: Icon, className, delay = 0 }: { icon: React.ElementType; className: string; delay?: number }) => (
    <motion.div
      className={`absolute ${className} opacity-20`}
      animate={{ y: [0, -20, 0], rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <Icon size={24} />
    </motion.div>
  );

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Production applications & personal open-source projects"
      className={`
        relative overflow-hidden
        ${theme === 'dark'
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }
      `}
    >
      {/* Floating background decorations */}
      <FloatingIcon icon={Code2} className={`top-20 left-10   ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} delay={0} />
      <FloatingIcon icon={Layers} className={`top-40 right-16  ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} delay={2} />
      <FloatingIcon icon={Zap} className={`bottom-32 left-20 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} delay={4} />
      <FloatingIcon icon={Sparkles} className={`bottom-48 right-12 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} delay={6} />

      {/* Stats bar */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${theme === 'dark' ? 'bg-slate-800/60 border-slate-700/50 text-teal-400' : 'bg-white/80 border-gray-200/50 text-teal-600'
          }`}>
          <Briefcase size={14} />
          <span>{professionalCount} Professional Apps</span>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${theme === 'dark' ? 'bg-slate-800/60 border-slate-700/50 text-cyan-400' : 'bg-white/80 border-gray-200/50 text-cyan-600'
          }`}>
          <Code size={14} />
          <span>{personalCount} Personal Projects</span>
        </div>
      </motion.div>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10">
        {([
          { id: 'all', label: `All (${projectsData.length})` },
          { id: 'professional', label: `Professional (${professionalCount})` },
          { id: 'personal', label: `Personal / Open Source (${personalCount})` },
        ] as const).map((tab, index) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`
              relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-sm
              ${activeFilter === tab.id
                ? theme === 'dark'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25 border border-teal-400/30'
                  : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-600/25 border border-teal-500/30'
                : theme === 'dark'
                  ? 'bg-slate-800/60 text-gray-300 hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-600/50'
                  : 'bg-white/80 text-gray-700 hover:bg-white/90 border border-gray-200/50 hover:border-gray-300/50 shadow-sm'
              }
            `}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          layout
        >
          {filteredProjects.map((project, index) => {
            const domainStyle = getDomainStyle(project.domain);
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 100 }}
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
                    ${hoveredCard === project.id ? 'transform scale-[1.02]' : ''}
                  `}
                  hoverEffect
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-56 rounded-t-lg">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                    />

                    {/* Domain colour overlay on hover */}
                    <div className={`
                      absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      ${theme === 'dark' ? 'from-slate-900/90 via-slate-900/30 to-transparent' : 'from-gray-900/80 via-gray-900/20 to-transparent'}
                    `} />

                    {/* Hover action buttons */}
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
                          animate={{ y: hoveredCard === project.id ? 0 : 30, opacity: hoveredCard === project.id ? 1 : 0 }}
                          transition={{ delay: 0.1 }}
                          aria-label="View project details"
                        >
                          <Search size={22} />
                        </motion.button>

                        {project.liveUrl && project.liveUrl !== '#' && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
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
                            animate={{ y: hoveredCard === project.id ? 0 : 30, opacity: hoveredCard === project.id ? 1 : 0 }}
                            transition={{ delay: 0.2 }}
                            aria-label="View live project"
                          >
                            <ExternalLink size={22} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Domain badge */}
                    <motion.div
                      className={`
                        absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border
                        ${domainStyle.badge}
                      `}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.08 + 0.4, type: 'spring' }}
                    >
                      {project.domain}
                    </motion.div>

                    {/* Professional badge */}
                    {project.type === 'professional' && (
                      <motion.div
                        className={`
                          absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md
                          ${theme === 'dark'
                            ? 'bg-gradient-to-r from-teal-500/80 to-cyan-500/80 text-gray-900'
                            : 'bg-gradient-to-r from-teal-600/80 to-cyan-600/80 text-white'
                          }
                        `}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.08 + 0.5, type: 'spring' }}
                      >
                        Production
                      </motion.div>
                    )}
                  </div>

                  {/* Card content */}
                  <div className="p-6 space-y-3">
                    <div>
                      <motion.h3
                        className={`
                          text-lg font-bold transition-colors duration-300
                          ${theme === 'dark' ? 'text-white group-hover:text-teal-400' : 'text-gray-900 group-hover:text-teal-600'}
                        `}
                        whileHover={{ x: 4 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className={`text-xs font-medium mt-0.5 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                        {project.subtitle}
                      </p>
                    </div>

                    <p className={`text-sm leading-relaxed line-clamp-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className={`
                            px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-300
                            ${theme === 'dark'
                              ? 'bg-slate-700/50 border-slate-600/50 text-teal-400 hover:bg-teal-500/20 hover:border-teal-500/50'
                              : 'bg-teal-50 border-teal-200/50 text-teal-700 hover:bg-teal-100 hover:border-teal-300'
                            }
                          `}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-slate-600 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 pt-1">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl font-semibold text-xs whitespace-nowrap
                            transition-all duration-300 shadow-md
                            ${theme === 'dark'
                              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900 hover:from-teal-400 hover:to-cyan-400'
                              : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-500 hover:to-cyan-500'
                            }
                          `}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={14} className="shrink-0" />
                          <span>Live Link</span>
                        </motion.a>
                      )}

                      <motion.button
                        onClick={() => openProjectModal(project)}
                        className={`
                          flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl font-medium text-xs whitespace-nowrap
                          transition-all duration-300 border-2
                          ${theme === 'dark'
                            ? 'border-slate-600 text-gray-300 hover:border-teal-500 hover:text-teal-400 hover:bg-teal-500/10'
                            : 'border-gray-300 text-gray-600 hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50'
                          }
                        `}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Search size={14} className="shrink-0" />
                        <span>Details</span>
                      </motion.button>

                      {/* Code / Private Repo button */}
                      {project.isPrivateRepo ? (
                        <div className={`
                          flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl font-medium text-xs whitespace-nowrap
                          border-2 cursor-not-allowed opacity-60
                          ${theme === 'dark' ? 'border-slate-600 text-gray-500' : 'border-gray-300 text-gray-400'}
                        `}>
                          <Lock size={13} className="shrink-0" />
                          <span>Private</span>
                        </div>
                      ) : (
                        <motion.a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl font-medium text-xs whitespace-nowrap
                            transition-all duration-300 border-2
                            ${theme === 'dark'
                              ? 'border-slate-600 text-gray-300 hover:border-teal-500 hover:text-teal-400 hover:bg-teal-500/10'
                              : 'border-gray-300 text-gray-600 hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50'
                            }
                          `}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={14} className="shrink-0" />
                          <span>Code</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Card glow */}
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
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Project Modal — portal ensures it renders outside any transformed parent */}
      {ReactDOM.createPortal(
        <AnimatePresence>
          {isModalOpen && activeProject && (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={closeProjectModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={modalRef}
            >
              <motion.div
                className={`
                  w-full max-w-4xl rounded-2xl relative shadow-2xl modal-content
                  overflow-y-auto max-h-[90vh]
                  ${theme === 'dark'
                    ? 'bg-slate-800 border border-slate-700/50'
                    : 'bg-white border border-gray-200/50'
                  }
                `}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 40 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 140, damping: 22 }}
              >
                {/* Image Header */}
                <div className="relative h-52 sm:h-64 md:h-72 overflow-hidden rounded-t-2xl">
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
                    ${theme === 'dark' ? 'from-slate-800/80 via-transparent to-transparent' : 'from-white/80 via-transparent to-transparent'}
                  `} />

                  {/* Domain badge in modal */}
                  <div className={`
                    absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border
                    ${getDomainStyle(activeProject.domain).badge}
                  `}>
                    {activeProject.domain}
                  </div>

                  {/* Close Button */}
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

                {/* Modal Content */}
                <div className="p-6 md:p-8 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Title row */}
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-2">
                      <div className="flex-1">
                        <motion.h3
                          className={`text-2xl md:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {activeProject.title}
                        </motion.h3>
                        <p className={`text-sm font-medium mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          {activeProject.subtitle}
                        </p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        {activeProject.type === 'professional' && (
                          <motion.div
                            className={`
                              px-3 py-1 rounded-full text-xs font-bold w-fit h-fit
                              ${theme === 'dark'
                                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900'
                                : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white'
                              }
                            `}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4, type: 'spring' }}
                          >
                            Production
                          </motion.div>
                        )}
                        {activeProject.isPrivateRepo && (
                          <motion.div
                            className={`
                              flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold w-fit h-fit border
                              ${theme === 'dark' ? 'bg-slate-700/50 border-slate-600/50 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-500'}
                            `}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.45, type: 'spring' }}
                          >
                            <Lock size={10} />
                            Private Repo
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
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
                          transition={{ delay: 0.5 + index * 0.04 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      className={`text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {activeProject.description}
                    </motion.p>

                    {/* Highlights */}
                    {activeProject.highlights && activeProject.highlights.length > 0 && (
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                      >
                        <h4 className={`text-sm font-bold uppercase tracking-widest mb-3 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>
                          Key Contributions
                        </h4>
                        <ul className="space-y-2">
                          {activeProject.highlights.map((point, i) => (
                            <motion.li
                              key={i}
                              className={`flex items-start gap-2.5 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + i * 0.07 }}
                            >
                              <CheckCircle size={16} className={`shrink-0 mt-0.5 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />
                              {point}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-col sm:flex-row gap-3"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65 }}
                    >
                      {activeProject.liveUrl && activeProject.liveUrl !== '#' && (
                        <motion.a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl
                            transition-all duration-300 shadow-lg hover:shadow-xl
                            ${theme === 'dark'
                              ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900 hover:from-teal-400 hover:to-cyan-400'
                              : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-500 hover:to-cyan-500'
                            }
                          `}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={18} />
                          View Live
                        </motion.a>
                      )}

                      {!activeProject.isPrivateRepo ? (
                        <motion.a
                          href={activeProject.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl
                            transition-all duration-300 border-2 hover:shadow-lg
                            ${theme === 'dark'
                              ? 'bg-transparent border-teal-500 text-teal-400 hover:bg-teal-500/10'
                              : 'bg-transparent border-teal-600 text-teal-600 hover:bg-teal-600/10'
                            }
                          `}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={18} />
                          View Code
                        </motion.a>
                      ) : (
                        <div className={`
                          flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl
                          border-2 cursor-not-allowed opacity-50
                          ${theme === 'dark' ? 'border-slate-600 text-gray-500' : 'border-gray-300 text-gray-400'}
                        `}>
                          <Lock size={18} />
                          Private Repository
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Scroll Indicator */}
                {/* <AnimatePresence>
                  {showScrollIndicator && (
                    <motion.div
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
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
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <ChevronDown size={16} />
                        <span className="text-xs font-medium">Scroll for more</span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </Section>
  );
};

export default Projects;