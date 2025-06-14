import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children, className = '' }) => {
  const { theme } = useTheme();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated gradient orbs */}
      <motion.div
        className={`absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl ${
          theme === 'dark' ? 'bg-gradient-to-r from-teal-500 to-blue-500' : 'bg-gradient-to-r from-teal-400 to-blue-400'
        }`}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className={`absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl ${
          theme === 'dark' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-purple-400 to-pink-400'
        }`}
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl ${
          theme === 'dark' ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-orange-400 to-red-400'
        }`}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full opacity-30 ${
            theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'
          }`}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
