import { Suspense, lazy } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load components for better performance
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;