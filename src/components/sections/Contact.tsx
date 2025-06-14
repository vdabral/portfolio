import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Send, Mail, MapPin, Phone, Clock, User, MessageCircle, Star, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'vdabral21007@gmail.com',
      link: 'mailto:vdabral21007@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 7017370629',
      link: 'tel:+917017370629',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Dehradun, India',
      link: 'https://maps.google.com/?q=Dehradun,+India',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message is too short (minimum 10 characters)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <Section
      id="contact"
      title="Contact Me"
      subtitle="Let's work together to bring your ideas to life"
      className="relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-20 left-20 ${theme === 'dark' ? 'text-purple-400/20' : 'text-purple-500/20'}`}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MessageCircle size={24} />
        </motion.div>
        <motion.div
          className={`absolute top-40 right-32 ${theme === 'dark' ? 'text-cyan-400/20' : 'text-cyan-500/20'}`}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Star size={20} />
        </motion.div>
        <motion.div
          className={`absolute bottom-32 right-20 ${theme === 'dark' ? 'text-pink-400/20' : 'text-pink-500/20'}`}
          animate={{
            y: [0, -12, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Sparkles size={22} />
        </motion.div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Form Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Send Me a Message
            </h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              I'd love to hear from you. Let's discuss your next project!
            </p>
          </motion.div>

          <motion.div 
            className={`
              relative p-6 md:p-8 rounded-2xl backdrop-blur-sm
              ${theme === 'dark' 
                ? 'bg-slate-800/80 border border-slate-700/50 shadow-2xl shadow-slate-900/20' 
                : 'bg-white/80 border border-gray-200/50 shadow-2xl shadow-gray-900/10'
              }
            `}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: theme === 'dark' 
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
                : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            {/* Gradient Border Effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-sm ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`} />
            
            <div className="relative">
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    className={`
                      p-4 mb-6 rounded-xl border
                      ${theme === 'dark' 
                        ? 'bg-emerald-900/30 border-emerald-700/50 text-emerald-300' 
                        : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                      }
                    `}
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                        ✓
                      </div>
                      <span className="font-medium">
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {submitStatus === 'error' && (
                  <motion.div 
                    className={`
                      p-4 mb-6 rounded-xl border
                      ${theme === 'dark' 
                        ? 'bg-red-900/30 border-red-700/50 text-red-300' 
                        : 'bg-red-50 border-red-200 text-red-700'
                      }
                    `}
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-sm">
                        !
                      </div>
                      <span className="font-medium">
                        Something went wrong. Please try again later.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label 
                      htmlFor="name" 
                      className={`
                        flex items-center gap-2 text-sm font-medium mb-3
                        ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}
                      `}
                    >
                      <User size={16} />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`
                        w-full px-4 py-3 rounded-xl border transition-all duration-300
                        ${theme === 'dark' 
                          ? 'bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:bg-slate-900/70' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:bg-white'
                        }
                        ${errors.name ? 'border-red-500' : ''}
                        focus:outline-none focus:ring-2 focus:ring-purple-500/20
                      `}
                      placeholder="John Doe"
                    />
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p 
                          className="mt-2 text-sm text-red-500 flex items-center gap-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <span className="w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">!</span>
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <label 
                      htmlFor="email" 
                      className={`
                        flex items-center gap-2 text-sm font-medium mb-3
                        ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}
                      `}
                    >
                      <Mail size={16} />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`
                        w-full px-4 py-3 rounded-xl border transition-all duration-300
                        ${theme === 'dark' 
                          ? 'bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:bg-slate-900/70' 
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:bg-white'
                        }
                        ${errors.email ? 'border-red-500' : ''}
                        focus:outline-none focus:ring-2 focus:ring-purple-500/20
                      `}
                      placeholder="john.doe@example.com"
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p 
                          className="mt-2 text-sm text-red-500 flex items-center gap-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <span className="w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">!</span>
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <label 
                    htmlFor="subject" 
                    className={`
                      flex items-center gap-2 text-sm font-medium mb-3
                      ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}
                    `}
                  >
                    <Star size={16} />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`
                      w-full px-4 py-3 rounded-xl border transition-all duration-300
                      ${theme === 'dark' 
                        ? 'bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:bg-slate-900/70' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:bg-white'
                      }
                      ${errors.subject ? 'border-red-500' : ''}
                      focus:outline-none focus:ring-2 focus:ring-purple-500/20
                    `}
                    placeholder="Project Inquiry"
                  />
                  <AnimatePresence>
                    {errors.subject && (                        <motion.p 
                          className="mt-2 text-sm text-red-500 flex items-center gap-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <span className="w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">!</span>
                          {errors.subject}
                        </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <label 
                    htmlFor="message" 
                    className={`
                      flex items-center gap-2 text-sm font-medium mb-3
                      ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}
                    `}
                  >
                    <MessageCircle size={16} />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`
                      w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none
                      ${theme === 'dark' 
                        ? 'bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500 focus:bg-slate-900/70' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:bg-white'
                      }
                      ${errors.message ? 'border-red-500' : ''}
                      focus:outline-none focus:ring-2 focus:ring-purple-500/20
                    `}
                    placeholder="Tell me about your project or just say hello..."
                  />
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p 
                        className="mt-2 text-sm text-red-500 flex items-center gap-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <span className="w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">!</span>
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  <Button
                    type="submit"
                    icon={<Send size={18} />}
                    className="w-full group relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    {!isSubmitting && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Contact Info & Additional Information */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Contact Information Card */}
          <motion.div 
            className={`
              relative p-6 md:p-8 rounded-2xl backdrop-blur-sm
              ${theme === 'dark' 
                ? 'bg-slate-800/80 border border-slate-700/50 shadow-2xl shadow-slate-900/20' 
                : 'bg-white/80 border border-gray-200/50 shadow-2xl shadow-gray-900/10'
              }
            `}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: theme === 'dark' 
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
                : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            {/* Gradient Border Effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-sm ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`} />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-cyan-500 to-purple-500' : 'bg-gradient-to-r from-cyan-600 to-purple-600'} flex items-center justify-center`}>
                  <Mail size={16} className="text-white" />
                </div>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Get In Touch
                </h3>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`
                      flex items-center p-4 rounded-xl transition-all duration-300
                      ${theme === 'dark' 
                        ? 'hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600' 
                        : 'hover:bg-gray-50 border border-gray-200/50 hover:border-gray-300'
                      }
                    `}>
                      <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300
                        ${theme === 'dark' 
                          ? 'bg-slate-700 text-cyan-400 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-purple-500 group-hover:text-white' 
                          : 'bg-gray-100 text-cyan-600 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-purple-600 group-hover:text-white'
                        }
                      `}>
                        <item.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {item.title}
                        </h4>
                        <p className={`font-semibold group-hover:text-cyan-500 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {item.content}
                        </p>
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${theme === 'dark' ? 'text-gray-400 group-hover:text-cyan-400' : 'text-gray-400 group-hover:text-cyan-500'}`}>
                        →
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Availability Card */}
          <motion.div 
            className={`
              relative p-6 md:p-8 rounded-2xl backdrop-blur-sm
              ${theme === 'dark' 
                ? 'bg-slate-800/80 border border-slate-700/50 shadow-2xl shadow-slate-900/20' 
                : 'bg-white/80 border border-gray-200/50 shadow-2xl shadow-gray-900/10'
              }
            `}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: theme === 'dark' 
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
                : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            {/* Gradient Border Effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 blur-sm ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`} />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-gradient-to-r from-emerald-600 to-teal-600'} flex items-center justify-center`}>
                  <Clock size={16} className="text-white" />
                </div>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Availability
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-emerald-900/20 border border-emerald-700/30' : 'bg-emerald-50 border border-emerald-200/50'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className={`font-semibold ${theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'}`}>
                      Available for new projects
                    </span>
                  </div>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Currently open for freelance work and exciting opportunities
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-slate-700/30' : 'bg-gray-50'}`}>
                    <h4 className={`font-medium mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                      Response Time
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Usually within 24 hours
                    </p>
                  </div>
                  
                  <div className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-slate-700/30' : 'bg-gray-50'}`}>
                    <h4 className={`font-medium mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                      Working Hours
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Mon-Fri: 9 AM - 6 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Connect Card */}
          <motion.div 
            className={`
              relative p-6 rounded-2xl backdrop-blur-sm
              ${theme === 'dark' 
                ? 'bg-gradient-to-br from-slate-800/80 to-slate-700/80 border border-slate-600/50' 
                : 'bg-gradient-to-br from-slate-50/80 to-white/80 border border-slate-200/50'
              }
            `}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: theme === 'dark' 
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
                : '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
            }}
          >
            {/* Subtle gradient border effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-500/10 via-teal-500/10 to-cyan-500/10 blur-sm ${theme === 'dark' ? 'opacity-30' : 'opacity-20'}`} />
            
            <div className="relative text-center">
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-slate-600 to-teal-500' : 'bg-gradient-to-r from-slate-500 to-teal-600'} flex items-center justify-center`}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={24} className="text-white" />
              </motion.div>
              <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Let's Create Something Amazing
              </h4>
              <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Ready to turn your ideas into reality? Let's discuss your next project!
              </p>
              <motion.div
                className="flex justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.a
                  href="mailto:vdabral21007@gmail.com"
                  className={`
                    px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                    ${theme === 'dark' 
                      ? 'bg-slate-700 hover:bg-teal-600 text-gray-200 hover:text-white border border-slate-600/50 hover:border-teal-500' 
                      : 'bg-slate-100 hover:bg-teal-600 text-slate-700 hover:text-white border border-slate-200 hover:border-teal-600'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Quick Email
                </motion.a>
                <motion.a
                  href="tel:+917017370629"
                  className={`
                    px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300
                    ${theme === 'dark' 
                      ? 'border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white hover:border-slate-500' 
                      : 'border-slate-300 text-slate-600 hover:bg-slate-600 hover:text-white hover:border-slate-600'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Quick Call
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;