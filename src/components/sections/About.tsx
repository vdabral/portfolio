import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Download, Award, Calendar, Briefcase, Code, Sparkles } from 'lucide-react'; 
import { useTheme } from '../../context/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();

  const experienceItems = [
    
    {
      period: 'Jul 2021 - Oct 2023',
      role: 'Design Engineer',
      company: 'Congruex, Chandigarh',
      description: 'Designed detailed OSP layouts for FTTX, FTTH, and GPON networks. Coordinated with cross-functional teams and clients to achieve project milestones. Ensured compliance with industry standards and regulatory guidelines. Delivered accurate design documentation within tight deadlines.',
      icon: Briefcase,
    },
    
    
    
  ];
  const educationItems = [{
      period: '2024 - Present',
      role: 'Full Stack Developer',
      company: 'Masai, Bengaluru',
      description: 'Building and deploying scalable, production-ready web applications using React, Node.js, MongoDB, and Firebase. Skilled in responsive UI design, secure authentication, API integration, and real-time features.',
      icon: Award,
    },
  {
      period: '2016 - 2020',
      role: 'B.Tech (Civil Engineering)',
      company: 'Graphic Era Hill University, Dehradun',
      description: 'Completed Bachelor of Technology in Civil Engineering. Developed strong analytical and problem-solving skills.',
      icon: Calendar,
    },]
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know more about me and my background"
      className={theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">        {/* Left column: Image and brief intro */}
        <motion.div 
          className="flex flex-col items-center lg:items-start space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className={`
              relative w-72 h-72 md:w-96 md:h-96 group
            `}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background elements */}
            <div className={`
              absolute -inset-4 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300
              ${theme === 'dark' 
                ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20' 
                : 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20'
              }
            `} />
            <div className={`
              absolute -inset-2 rounded-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300
              ${theme === 'dark' 
                ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30' 
                : 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30'
              }
            `} />
            
            {/* Main image container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <img 
                src="/portfolio/images/Test.JPG" 
                alt="Profile" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating elements */}
           
            
          </motion.div>
          
          {/* Enhanced skill tags */}
          <motion.div 
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {['MERN Stack', 'Full Stack', 'React.js', 'Node.js'].map((skill, index) => (
              <motion.div
                key={skill}
                className={`
                  py-3 px-6 rounded-full text-sm font-semibold backdrop-blur-sm border transition-all duration-300 hover:scale-105 cursor-default
                  ${theme === 'dark' 
                    ? 'bg-gradient-to-r from-slate-800/80 to-slate-700/80 text-teal-400 border-slate-600/50 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/20' 
                    : 'bg-gradient-to-r from-white/80 to-gray-50/80 text-teal-700 border-gray-200/50 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/20'
                  }
                `}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              onClick={() => {
                  window.open('https://drive.google.com/file/d/17oObQYYvwlCjF4knKvxprpAyiNOZWoOY/view?usp=sharing', '_blank');
                }}
              variant="outline" 
              icon={<Download size={18} />}
              className={`
                mt-4 group relative overflow-hidden backdrop-blur-sm
                ${theme === 'dark'
                  ? 'bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border-teal-500/50 text-teal-400 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:text-white'
                  : 'bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border-teal-500/50 text-teal-700 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:text-white'
                }
              `}
            >
              <span className="relative z-10">Download Resume</span>
            </Button>
          </motion.div>
        </motion.div>        
        {/* Right column: Bio and experience */}
        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Bio section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 
              className={`
                text-3xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent
                ${theme === 'dark' 
                  ? 'from-white to-gray-300' 
                  : 'from-gray-900 to-gray-700'
                }
              `}
            >
              My Journey
              <motion.span
                className={`inline-block ml-2 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                ✨
              </motion.span>
            </h3>
            <div className="space-y-6">
              <motion.p 
                className={`
                  text-lg leading-relaxed
                  ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
                `}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                I'm a passionate <span className={`font-semibold ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`}>Full Stack Developer</span> with expertise in MERN stack development. 
                My journey in web development started with curiosity about creating dynamic web applications, 
                which led me to master modern web technologies including React.js, Node.js, Express.js, and MongoDB.
              </motion.p>
              <motion.p 
                className={`
                  text-lg leading-relaxed
                  ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}
                `}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I specialize in building <span className={`font-semibold ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}>scalable full-stack applications</span> with clean, maintainable code. 
                My approach combines technical expertise with problem-solving skills to deliver 
                high-quality solutions that meet user needs and business requirements.
              </motion.p>
            </div>
          </motion.div>
          
          {/* Experience section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h3 
              className={`
                text-3xl font-bold mb-8 flex items-center gap-3
                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
              `}
            >
              <Briefcase className={`w-8 h-8 ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}`} />
              Experience
            </h3>
            <div className="space-y-6">
              {experienceItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <Card 
                    className={`
                      p-8 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm
                      ${theme === 'dark'
                        ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/10'
                        : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200/50 hover:border-teal-500/30 hover:shadow-xl hover:shadow-teal-500/10'
                      }
                    `}
                  >
                    <div className="flex items-start">
                      <motion.div 
                        className={`
                          p-4 rounded-2xl mr-6 shrink-0 group-hover:scale-110 transition-transform duration-300
                          ${theme === 'dark' 
                            ? 'bg-gradient-to-br from-slate-700 to-slate-800 text-teal-400 border border-slate-600' 
                            : 'bg-gradient-to-br from-teal-50 to-teal-100 text-teal-600 border border-teal-200'
                          }
                        `}
                        whileHover={{ rotate: 5 }}
                      >
                        <item.icon size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <span 
                          className={`
                            text-sm font-semibold px-3 py-1 rounded-full
                            ${theme === 'dark' 
                              ? 'bg-teal-500/20 text-teal-400' 
                              : 'bg-teal-500/20 text-teal-700'
                            }
                          `}
                        >
                          {item.period}
                        </span>
                        <h4 
                          className={`
                            text-xl font-bold mt-3 mb-2
                            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                          `}
                        >
                          {item.role}
                        </h4>
                        <p 
                          className={`
                            font-medium mb-3
                            ${theme === 'dark' ? 'text-teal-400' : 'text-teal-600'}
                          `}
                        >
                          {item.company}
                        </p>
                        <p 
                          className={`
                            leading-relaxed
                            ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                          `}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    <div className={`
                      absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                      ${theme === 'dark'
                        ? 'bg-gradient-to-br from-teal-500/5 to-transparent'
                        : 'bg-gradient-to-br from-teal-500/5 to-transparent'
                      }
                    `} />
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>          
          {/* Education section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h3 
              className={`
                text-3xl font-bold mb-8 flex items-center gap-3
                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
              `}
            >
              <Award className={`w-8 h-8 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`} />
              Education
            </h3>
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <Card 
                    className={`
                      p-8 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm
                      ${theme === 'dark'
                        ? 'bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10'
                        : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200/50 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10'
                      }
                    `}
                  >
                    <div className="flex items-start">
                      <motion.div 
                        className={`
                          p-4 rounded-2xl mr-6 shrink-0 group-hover:scale-110 transition-transform duration-300
                          ${theme === 'dark' 
                            ? 'bg-gradient-to-br from-slate-700 to-slate-800 text-cyan-400 border border-slate-600' 
                            : 'bg-gradient-to-br from-cyan-50 to-cyan-100 text-cyan-600 border border-cyan-200'
                          }
                        `}
                        whileHover={{ rotate: -5 }}
                      >
                        <item.icon size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <span 
                          className={`
                            text-sm font-semibold px-3 py-1 rounded-full
                            ${theme === 'dark' 
                              ? 'bg-cyan-500/20 text-cyan-400' 
                              : 'bg-cyan-500/20 text-cyan-700'
                            }
                          `}
                        >
                          {item.period}
                        </span>
                        <h4 
                          className={`
                            text-xl font-bold mt-3 mb-2
                            ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                          `}
                        >
                          {item.role}
                        </h4>
                        <p 
                          className={`
                            font-medium mb-3
                            ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}
                          `}
                        >
                          {item.company}
                        </p>
                        <p 
                          className={`
                            leading-relaxed
                            ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                          `}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    <div className={`
                      absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                      ${theme === 'dark'
                        ? 'bg-gradient-to-br from-cyan-500/5 to-transparent'
                        : 'bg-gradient-to-br from-cyan-500/5 to-transparent'
                      }
                    `} />
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;