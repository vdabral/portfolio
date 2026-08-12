import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { useTheme } from '../../context/ThemeContext';
import { skillsData } from '../../data/skills';

const categoryConfig: Record<string, { color: string; darkColor: string; glow: string }> = {
  frontend:     { color: 'teal',   darkColor: 'teal-400',   glow: 'shadow-teal-500/20'   },
  backend:      { color: 'blue',   darkColor: 'blue-400',   glow: 'shadow-blue-500/20'   },
  database:     { color: 'purple', darkColor: 'purple-400', glow: 'shadow-purple-500/20' },
  integrations: { color: 'orange', darkColor: 'orange-400', glow: 'shadow-orange-500/20' },
  tools:        { color: 'gray',   darkColor: 'gray-400',   glow: 'shadow-gray-500/20'   },
  design:       { color: 'pink',   darkColor: 'pink-400',   glow: 'shadow-pink-500/20'   },
};

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all',          label: 'All Skills'    },
    { id: 'frontend',     label: 'Frontend'      },
    { id: 'backend',      label: 'Backend'       },
    { id: 'database',     label: 'Database'      },
    { id: 'integrations', label: 'Integrations'  },
    { id: 'tools',        label: 'Tools'         },
    { id: 'design',       label: 'Design'        },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const getActiveCategoryGradient = (catId: string) => {
    const map: Record<string, string> = {
      all:          'from-teal-500 to-cyan-500',
      frontend:     'from-teal-500 to-cyan-500',
      backend:      'from-blue-500 to-indigo-500',
      database:     'from-purple-500 to-violet-500',
      integrations: 'from-orange-500 to-amber-500',
      tools:        'from-gray-500 to-slate-500',
      design:       'from-pink-500 to-rose-500',
    };
    return map[catId] || 'from-teal-500 to-cyan-500';
  };

  const getSkillBarColor = (category: string) => {
    const map: Record<string, string> = {
      frontend:     'from-teal-400 to-cyan-400',
      backend:      'from-blue-400 to-indigo-400',
      database:     'from-purple-400 to-violet-400',
      integrations: 'from-orange-400 to-amber-400',
      tools:        'from-gray-400 to-slate-400',
      design:       'from-pink-400 to-rose-400',
    };
    return map[category] || 'from-teal-400 to-cyan-400';
  };

  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="Technologies, tools and integrations I work with across the full stack"
      className={theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}
    >
      {/* Categories Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`
              relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-sm
              ${activeCategory === category.id
                ? `bg-gradient-to-r ${getActiveCategoryGradient(category.id)} text-white shadow-lg border border-white/10`
                : theme === 'dark'
                  ? 'bg-slate-800/60 text-gray-300 hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-600/50 hover:shadow-md'
                  : 'bg-white/80 text-gray-700 hover:bg-white/90 border border-gray-200/50 hover:border-gray-300/50 shadow-sm hover:shadow-md'
              }
            `}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.07 }}
          >
            {category.label}
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
          {filteredSkills.map((skill, index) => {
            const barColor = getSkillBarColor(skill.category);
            return (
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
                      ? `bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-slate-700/30 hover:border-teal-500/40 hover:shadow-xl hover:${categoryConfig[skill.category]?.glow || 'shadow-teal-500/20'}`
                      : `bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-sm border-gray-200/30 hover:border-teal-500/40 hover:shadow-xl hover:${categoryConfig[skill.category]?.glow || 'shadow-teal-500/20'}`
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
                        onError={(e) => {
                          // Fallback if icon fails to load
                          (e.target as HTMLImageElement).src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
                        }}
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
                      w-full rounded-full h-2 mb-2 relative overflow-hidden
                      ${theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'}
                    `}>
                      <motion.div
                        className={`h-full rounded-full relative bg-gradient-to-r ${barColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: index * 0.05, ease: 'easeOut' }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </motion.div>
                    </div>

                    <span
                      className={`
                        text-xs font-semibold transition-colors duration-300
                        ${theme === 'dark' ? 'text-teal-400 group-hover:text-teal-300' : 'text-teal-600 group-hover:text-teal-700'}
                      `}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Hover glow effect */}
                  <div className={`
                    absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none
                    ${theme === 'dark'
                      ? 'bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-blue-500/5'
                      : 'bg-gradient-to-br from-teal-500/5 via-cyan-500/5 to-blue-500/5'
                    }
                  `} />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default Skills;