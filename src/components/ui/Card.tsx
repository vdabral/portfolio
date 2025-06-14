import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => {
  const { theme } = useTheme();
  
  return (
    <div 
      className={`
        rounded-lg overflow-hidden 
        ${theme === 'dark' 
          ? 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50' 
          : 'bg-white border border-gray-200 shadow-sm'
        }
        ${hoverEffect 
          ? `transition-all duration-300 ease-in-out transform 
             ${theme === 'dark' 
               ? 'hover:shadow-teal-500/20 hover:shadow-lg hover:-translate-y-1 hover:border-teal-500/30' 
               : 'hover:shadow-lg hover:-translate-y-1 hover:border-teal-500/50'
             }`
          : ''
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;