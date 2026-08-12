import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Download, Award, Calendar, Briefcase, FolderGit2, Sparkles, TrendingUp, Globe, Star } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const AnimatedCounter: React.FC<{ target: number; suffix?: string; prefix?: string }> = ({ target, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1500;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const experienceItems = [
    {
      period: 'June 2025 – May 2026',
      role: 'Junior Software Engineer / Full Stack Developer',
      company: 'Mindrops Solutions Pvt. Ltd.',
      description: 'Building production-grade web applications across E-commerce, B2B SaaS, Real Estate, CRM and EdTech domains. Working with Next.js, React, Node.js, TypeScript, PostgreSQL and Prisma. Integrated Razorpay and Shiprocket, implemented JWT auth, RBAC and API performance optimization.',
      icon: Briefcase,
      badge: 'Current Role',
    },
    {
      period: 'Jul 2021 – Oct 2023',
      role: 'Design Engineer',
      company: 'Congruex, Chandigarh',
      description: 'Designed detailed OSP layouts for FTTX, FTTH, and GPON networks. Coordinated with cross-functional teams and clients to achieve project milestones. Ensured compliance with industry standards and regulatory guidelines. Delivered accurate design documentation within tight deadlines.',
      icon: Briefcase,
      badge: null,
    },
  ];

  const educationItems = [
    {
      period: '2024 - 2025',
      role: 'Full Stack Development',
      company: 'Masai School, Bengaluru',
      description: 'Building and deploying scalable, production-ready web applications using React, Node.js, MongoDB, and Firebase. Skilled in responsive UI design, secure authentication, API integration, and real-time features.',
      icon: Award,
    },
    {
      period: '2016 - 2020',
      role: 'B.Tech (Civil Engineering)',
      company: 'Graphic Era Hill University, Dehradun',
      description: 'Completed Bachelor of Technology in Civil Engineering. Developed strong analytical and problem-solving skills.',
      icon: Calendar,
    },
  ];

  const stats = [
    { label: 'Production Apps', value: 5, suffix: '+', icon: Globe },
    { label: 'Business Domains', value: 6, suffix: '', icon: TrendingUp },
    { label: 'Years Experience', value: 1, suffix: '+', icon: Star },
  ];

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know more about me, my background and what I've built"
      className={isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}
    >
      {/* Animated Stats Row */}
      <motion.div
        className="grid grid-cols-3 gap-3 md:gap-5 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={`
              relative p-4 md:p-6 rounded-2xl text-center border overflow-hidden group
              ${isDark
                ? 'bg-slate-800/60 border-slate-700/60 hover:border-teal-500/50'
                : 'bg-white border-gray-200 hover:border-teal-500/50 shadow-sm'
              }
              transition-colors duration-300
            `}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className={`
              absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
              bg-gradient-to-br from-teal-500/10 to-cyan-500/0
            `} />
            <div className={`
              relative mx-auto mb-3 w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center
              ${isDark ? 'bg-teal-500/10 text-teal-400' : 'bg-teal-50 text-teal-600'}
            `}>
              <stat.icon className="w-5 h-5" strokeWidth={2} />
            </div>
            <div className={`relative text-2xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent
              ${isDark ? 'from-teal-400 to-cyan-400' : 'from-teal-600 to-cyan-600'}
            `}>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <div className={`relative text-[11px] md:text-xs font-medium mt-1 uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">
        {/* Left column: Image and brief intro */}
        <motion.div
          className="flex flex-col items-center space-y-8 lg:sticky lg:top-28"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 group mx-auto"
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
          >
            {/* Single soft glow ring, no double-inset clutter */}
            <div className={`
              absolute -inset-3 rounded-[28px] blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500
              bg-gradient-to-br from-teal-500/30 via-cyan-500/20 to-transparent
            `} />

            {/* Main image container */}
            <div className={`
              relative w-full h-full rounded-[24px] overflow-hidden border shadow-2xl
              ${isDark ? 'border-white/10' : 'border-white'}
            `}>
              <img
                src="/portfolio/images/Test.JPG"
                alt="Vaibhav Dabral"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Currently at badge — inline, not overlapping neighboring content */}
            {/* <div
              className={`
                absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-lg border backdrop-blur-md
                flex items-center gap-2
                ${isDark
                  ? 'bg-slate-900/80 text-teal-300 border-teal-500/30'
                  : 'bg-white/90 text-teal-700 border-teal-500/30'
                }
              `}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
              {/* <span className="truncate">Currently @ Mindrops Solutions</span> */}
            {/* </div> */}
          </motion.div>

          {/* Skill tags */}
          <motion.div
            className="flex flex-wrap gap-2.5 justify-center max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['Next.js', 'React.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma'].map((skill, index) => (
              <motion.div
                key={skill}
                className={`
                  py-2 px-4 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 hover:scale-105 cursor-default
                  ${isDark
                    ? 'bg-slate-800/70 text-teal-400 border-slate-700 hover:border-teal-500/50 hover:bg-slate-800'
                    : 'bg-white text-teal-700 border-gray-200 hover:border-teal-500/50 shadow-sm'
                  }
                `}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 * index }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* Action buttons — Download Resume + View Projects side by side */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              onClick={() => {
                window.open('https://drive.google.com/file/d/1XKJvep5MuimcMNJ66Wn94HxIlpYnwelG/view?usp=sharing', '_blank');
              }}
              variant="outline"
              icon={<Download size={18} />}
              className={`
                group relative overflow-hidden
                ${isDark
                  ? 'border-teal-500/50 text-teal-400 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:text-white hover:border-transparent'
                  : 'border-teal-500/50 text-teal-700 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 hover:text-white hover:border-transparent'
                }
              `}
            >
              <span className="relative z-10">Download Resume</span>
            </Button>

            <Button
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              variant="outline"
              icon={<FolderGit2 size={18} />}
              className={`
                group relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-transparent
                hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5
              `}
            >
              <span className="relative z-10">View Projects</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right column: Bio and experience */}
        <motion.div
          className="space-y-14"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Bio section */}
          <div>
            <span className={`
              inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4
              ${isDark ? 'bg-teal-500/10 text-teal-400' : 'bg-teal-50 text-teal-700'}
            `}>
              <Sparkles size={12} />
              My Journey
            </span>
            <h3
              className={`
                text-2xl md:text-3xl font-bold mb-6 leading-snug
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}
            >
              Full stack developer, one production feature at a time.
            </h3>
            <div className="space-y-5">
              <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                I'm a <span className={`font-semibold ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>Full Stack Developer</span> at <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>Mindrops Solutions Pvt. Ltd.</span>, building production web applications across E-commerce, B2B SaaS, Real Estate, CRM and EdTech domains.
              </p>
              <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                I specialize in <span className={`font-semibold ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>Next.js, React, Node.js, TypeScript and PostgreSQL</span> — developing responsive interfaces, REST APIs, authentication systems and third-party integrations like Razorpay and Shiprocket.
              </p>
              <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                My approach combines technical depth with clean, maintainable code — focused on performance, scalability and real business impact across every project I contribute to.
              </p>
            </div>
          </div>

          {/* Experience section */}
          <div>
            <h3
              className={`text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              <Briefcase className={`w-6 h-6 md:w-7 md:h-7 ${isDark ? 'text-teal-400' : 'text-teal-600'}`} />
              Experience
            </h3>

            {/* Modern Card List without vertical timeline line */}
            <div className="space-y-6">
              {experienceItems.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <Card
                      className={`
                        p-6 md:p-7 transition-all duration-300 group relative overflow-hidden
                        ${isDark
                          ? 'bg-slate-800/60 border-slate-700/60 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10'
                          : 'bg-white border-gray-200 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-500/10'
                        }
                      `}
                    >
                      <div className="flex items-start gap-4 md:gap-5">
                        <div
                          className={`
                            p-3 md:p-3.5 rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-300
                            ${isDark
                              ? 'bg-teal-500/15 text-teal-400 border border-teal-500/30 shadow-lg shadow-teal-500/10'
                              : 'bg-teal-50 text-teal-600 border border-teal-100 shadow-md shadow-teal-500/10'
                            }
                          `}
                        >
                          <ItemIcon size={22} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                            <span
                              className={`
                                text-xs font-semibold px-3 py-1 rounded-full
                                ${isDark ? 'bg-teal-500/15 text-teal-400' : 'bg-teal-50 text-teal-700'}
                              `}
                            >
                              {item.period}
                            </span>
                            {item.badge && (
                              <span className={`
                                text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5
                                ${isDark ? 'bg-green-500/15 text-green-400 border border-green-500/30' : 'bg-green-50 text-green-700 border border-green-200'}
                              `}>
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <h4 className={`text-base md:text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {item.role}
                          </h4>
                          <p className={`font-semibold mb-3 text-sm ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                            {item.company}
                          </p>
                          <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Education section */}
          <div>
            <h3
              className={`text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              <Award className={`w-6 h-6 md:w-7 md:h-7 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
              Education
            </h3>
            <div className="space-y-5">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Card
                    className={`
                      p-6 md:p-7 transition-all duration-300 group relative overflow-hidden
                      ${isDark
                        ? 'bg-slate-800/60 border-slate-700/60 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5'
                        : 'bg-white border-gray-200 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5'
                      }
                    `}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`
                          p-3.5 rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-300
                          ${isDark
                            ? 'bg-slate-700/60 text-cyan-400 border border-slate-600'
                            : 'bg-cyan-50 text-cyan-600 border border-cyan-100'
                          }
                        `}
                      >
                        <item.icon size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className={`
                            text-xs font-semibold px-3 py-1 rounded-full
                            ${isDark ? 'bg-cyan-500/15 text-cyan-400' : 'bg-cyan-50 text-cyan-700'}
                          `}
                        >
                          {item.period}
                        </span>
                        <h4 className={`text-lg font-bold mt-3 mb-1.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {item.role}
                        </h4>
                        <p className={`font-medium mb-2.5 text-sm ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                          {item.company}
                        </p>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;