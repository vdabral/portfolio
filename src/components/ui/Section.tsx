import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  fullHeight = false,
}) => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`
        py-16 md:py-24 
        ${fullHeight ? 'min-h-screen flex flex-col justify-center' : ''}
        ${className}
      `}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div 
            className={`
              mb-12 md:mb-16 text-center
              transition-all duration-1000 ease-out transform
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            {title && (
              <h2 
                className={`
                  text-3xl md:text-4xl font-bold mb-4 
                  ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                `}
              >
                <span className={`relative inline-block ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {title}
                  <span 
                    className={`
                      absolute bottom-0 left-0 w-full h-1 transform origin-left
                      ${theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'}
                      ${isVisible ? 'scale-x-100' : 'scale-x-0'}
                      transition-transform duration-1000 ease-out delay-300
                    `}
                  ></span>
                </span>
              </h2>
            )}
            {subtitle && (
              <p 
                className={`
                  text-lg max-w-2xl mx-auto
                  ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
                `}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div 
          className={`
            transition-all duration-1000 ease-out transform delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;