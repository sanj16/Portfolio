import React from 'react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import AboutSection from './components/AboutSection';
import AwardsSection from './components/AwardsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Helper component for consistent section styling and fade-in
interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 } // Adjust threshold for earlier/later fade-in
    );

    const currentRef = sectionRef.current; // Capture ref value
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount.

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
    >
      {children}
    </section>
  );
};


const App: React.FC = () => {
  return (
    <div className="bg-[#0d0d1a] text-gray-200 font-vt323 selection:bg-pink-500 selection:text-white">
      <Header />
      <LandingSection /> {/* Landing has its own entrance animation, not wrapped in Section */}
      <main>
        <Section id="about"><AboutSection /></Section>
        <Section id="awards"><AwardsSection /></Section>
        <Section id="experience"><ExperienceSection /></Section>
        <Section id="projects"><ProjectsSection /></Section>
        <Section id="contact"><ContactSection /></Section>
      </main>
      <Footer />
    </div>
  );
};

export default App;