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
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
              mb-14 md:mb-20 text-center
              transition-all duration-1000 ease-out transform
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            {title && (
              <div className="flex flex-col items-center gap-4">
                {/* Pill label above title */}
                <div className={`
                  inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border
                  ${theme === 'dark'
                    ? 'bg-teal-500/10 text-teal-400 border-teal-500/20'
                    : 'bg-teal-500/10 text-teal-700 border-teal-500/20'
                  }
                `}>
                  <span className={`w-1.5 h-1.5 rounded-full ${theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'}`} />
                  {title}
                </div>

                {/* Main title with gradient highlight on last word */}
                <h2
                  className={`
                    text-4xl md:text-5xl font-extrabold leading-tight
                    ${theme === 'dark' ? 'text-white' : 'text-gray-900'}
                  `}
                >
                  {(() => {
                    const words = title.split(' ');
                    const lastWord = words.pop();
                    return (
                      <>
                        {words.join(' ')}{words.length > 0 ? ' ' : ''}
                        <span className={`
                          relative inline-block bg-gradient-to-r bg-clip-text text-transparent
                          ${theme === 'dark' ? 'from-teal-400 via-cyan-400 to-blue-400' : 'from-teal-600 via-cyan-600 to-blue-600'}
                        `}>
                          {lastWord}
                          <span
                            className={`
                              absolute bottom-0 left-0 h-1 rounded-full w-full origin-left
                              bg-gradient-to-r
                              ${theme === 'dark' ? 'from-teal-400 to-cyan-400' : 'from-teal-600 to-cyan-600'}
                              ${isVisible ? 'scale-x-100' : 'scale-x-0'}
                              transition-transform duration-1000 ease-out delay-500
                            `}
                          />
                        </span>
                      </>
                    );
                  })()}
                </h2>

                {/* Decorative divider */}
                <div className="flex items-center gap-3">
                  <div className={`h-px w-12 ${theme === 'dark' ? 'bg-teal-500/40' : 'bg-teal-500/30'}`} />
                  <div className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-teal-400' : 'bg-teal-600'}`} />
                  <div className={`h-px w-12 ${theme === 'dark' ? 'bg-teal-500/40' : 'bg-teal-500/30'}`} />
                </div>
              </div>
            )}

            {subtitle && (
              <p
                className={`
                  mt-4 text-lg max-w-2xl mx-auto
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