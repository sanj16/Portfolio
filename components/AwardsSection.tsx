import React, { useEffect, useRef, useState } from 'react';
import { AWARDS_DATA } from '../constants';
import { Award } from '../types';

interface AnimatedAwardProps {
  award: Award;
  index: number;
}

const AnimatedAwardCard: React.FC<AnimatedAwardProps> = ({ award, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const isEven = index % 2 === 0;
  
  // Use Tailwind animation classes defined in index.html via tailwind.config
  const animationClass = isVisible
    ? isEven
      ? 'animate-slideInLeft'
      : 'animate-slideInRight'
    : 'opacity-0';

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row items-center gap-8 mb-16 p-6 bg-black/40 rounded-xl shadow-xl transition-opacity duration-1000 ${animationClass} border-2 border-transparent hover:border-neon-purple hover:bg-neon-purple-glow`}
    >
      <div className={`w-full md:w-1/3 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={award.imageUrl}
          alt={award.title}
          className="rounded-lg object-cover w-full h-64 md:h-auto shadow-lg border-2 border-purple-700"
        />
      </div>
      <div className={`w-full md:w-2/3 ${isEven ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}>
        <h3 className="text-2xl md:text-3xl font-orbitron text-pink-400 mb-2">{award.title}</h3>
        <p className="text-sm text-gray-400 mb-3 font-vt323">{award.date}</p>
        <p className="text-gray-300 leading-relaxed font-vt323">{award.description}</p>
      </div>
    </div>
  );
};

const AwardsSection: React.FC = () => {
  return (
    <section id="awards" className="py-20 px-4 md:px-10 bg-[#0A0A1A]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-orbitron text-neon-purple mb-16 text-center">Awards & Recognition</h2>
        <div>
          {AWARDS_DATA.map((award, index) => (
            <AnimatedAwardCard key={award.id} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;