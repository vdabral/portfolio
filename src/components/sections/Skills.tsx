import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { useTheme } from '../../context/ThemeContext';
import { skillsData } from '../../data/skills';

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="Technologies and tools I work with"
      className={theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}
    >
      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              relative px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-sm
              ${activeCategory === category.id
                ? theme === 'dark'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25 border border-teal-400/30'
                  : 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-600/25 border border-teal-500/30'
                : theme === 'dark'
                  ? 'bg-slate-800/60 text-gray-300 hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-600/50 hover:shadow-md'
                  : 'bg-white/80 text-gray-700 hover:bg-white/90 border border-gray-200/50 hover:border-gray-300/50 shadow-sm hover:shadow-md'
              }
            `}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {category.label}
            {activeCategory === category.id && (
              <motion.div
                className={`absolute inset-0 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-teal-400/10 to-cyan-400/10' 
                    : 'bg-gradient-to-r from-teal-500/10 to-cyan-500/10'
                }`}
                layoutId="activeCategory"
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, staggerChildren: 0.05 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={`${activeCategory}-${skill.name}`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group"
            >
              <Card
                className={`
                  p-6 text-center transition-all duration-300 group relative overflow-hidden h-full
                  ${theme === 'dark' 
                    ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-slate-700/30 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/10' 
                    : 'bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm border-gray-200/30 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/10'
                  }
                `}
                hoverEffect
              >
                <div className="flex flex-col items-center justify-center h-full relative z-10">
                  <motion.div 
                    className={`
                      w-16 h-16 flex items-center justify-center rounded-2xl mb-4 relative group-hover:scale-110 transition-all duration-300
                      ${theme === 'dark' 
                        ? 'bg-gradient-to-br from-slate-700/50 to-slate-800/50 group-hover:from-teal-500/20 group-hover:to-cyan-500/20' 
                        : 'bg-gradient-to-br from-gray-100/50 to-gray-200/50 group-hover:from-teal-500/20 group-hover:to-cyan-500/20'
                      }
                    `}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110" 
                    />
                    <div className={`
                      absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      ${theme === 'dark' 
                        ? 'bg-gradient-to-br from-teal-400/10 to-cyan-400/10' 
                        : 'bg-gradient-to-br from-teal-500/10 to-cyan-500/10'
                      }
                    `} />
                  </motion.div>
                  
                  <h3 
                    className={`
                      text-sm font-semibold mb-3 transition-all duration-300 group-hover:scale-105
                      ${theme === 'dark' 
                        ? 'text-white group-hover:text-teal-400' 
                        : 'text-gray-900 group-hover:text-teal-600'
                      }
                    `}
                  >
                    {skill.name}
                  </h3>
                  
                  <div className={`
                    w-full rounded-full h-2.5 mb-2 relative overflow-hidden
                    ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'}
                  `}>
                    <motion.div 
                      className={`
                        h-full rounded-full relative
                        ${theme === 'dark' 
                          ? 'bg-gradient-to-r from-teal-400 to-cyan-400' 
                          : 'bg-gradient-to-r from-teal-500 to-cyan-500'
                        }
                      `}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                  
                  <span 
                    className={`
                      text-xs font-semibold transition-colors duration-300
                      ${theme === 'dark' 
                        ? 'text-teal-400 group-hover:text-teal-300' 
                        : 'text-teal-600 group-hover:text-teal-700'
                      }
                    `}
                  >
                    {skill.level}%
                  </span>
                </div>
                
                {/* Enhanced hover glow effect */}
                <div className={`
                  absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
                  ${theme === 'dark' 
                    ? 'bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-blue-500/5' 
                    : 'bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-blue-500/5'
                  }
                `} />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default Skills;