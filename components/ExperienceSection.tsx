import React, { useState, useEffect, useRef } from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { Experience } from '../types';

interface ExperienceItemProps {
  item: Experience;
  isLast: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ item, isLast }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  const animationClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    <div ref={itemRef} className={`relative pl-12 pb-10 transition-all duration-700 ease-out ${animationClass}`}>
      {/* Dot on timeline */}
      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-neon-purple bg-[#101020] flex items-center justify-center transform -translate-x-[calc(50%-2px)] ${item.isCurrent ? 'animate-pulseNeon' : ''}`}>
        <div className={`w-3 h-3 rounded-full ${item.isCurrent ? 'bg-pink-400' : 'bg-neon-purple'}`}></div>
      </div>
      {/* Line */}
      {!isLast && <div className="absolute left-[11px] top-7 bottom-0 w-0.5 bg-purple-700/50"></div>}
      
      <div className="p-6 bg-black/50 rounded-lg shadow-lg border border-purple-800/50 hover:border-neon-purple transition-colors duration-300 group">
        <h3 className="text-xl md:text-2xl font-orbitron text-pink-400 mb-1 group-hover:text-neon-purple">{item.title}</h3>
        <p className="text-md text-gray-400 mb-1 font-vt323">{item.company}</p>
        <p className="text-sm text-purple-400 mb-3 font-vt323">{item.duration}</p>
        <p className="text-gray-300 leading-relaxed font-vt323 text-sm md:text-base">{item.summary}</p>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-10 bg-[#181828]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-orbitron text-neon-purple mb-16 text-center">Experience</h2>
        <div className="relative">
          {/* Main timeline line if all elements are part of it (alternative to individual lines) */}
          {/* <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-purple-700/50 z-0"></div> */}
          {EXPERIENCE_DATA.map((item, index) => (
            <ExperienceItem key={item.id} item={item} isLast={index === EXPERIENCE_DATA.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;