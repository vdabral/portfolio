import React, { ButtonHTMLAttributes } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  ...props
}) => {
  const { theme } = useTheme();
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };
  
  const getVariantClasses = () => {
    if (theme === 'dark') {
      switch (variant) {
        case 'primary':
          return 'bg-teal-500 hover:bg-teal-600 text-gray-900 shadow-md hover:shadow-lg';
        case 'secondary':
          return 'bg-slate-700 hover:bg-slate-800 text-white shadow-md hover:shadow-lg';
        case 'outline':
          return 'bg-transparent border-2 border-teal-500 text-teal-500 hover:bg-teal-500/10';
        default:
          return 'bg-teal-500 hover:bg-teal-600 text-gray-900';
      }
    } else {
      switch (variant) {
        case 'primary':
          return 'bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-lg';
        case 'secondary':
          return 'bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-md hover:shadow-lg';
        case 'outline':
          return 'bg-transparent border-2 border-teal-600 text-teal-600 hover:bg-teal-600/10';
        default:
          return 'bg-teal-600 hover:bg-teal-700 text-white';
      }
    }
  };

  return (
    <button
      className={`
        ${sizeClasses[size]}
        ${getVariantClasses()}
        rounded-md font-medium transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
        flex items-center justify-center
        ${className}
      `}
      {...props}
    >
      {icon && <span className={`${children ? 'mr-2' : ''}`}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;