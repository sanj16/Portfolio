
import React, { useState, useEffect } from 'react';
import { YOUR_NAME, StarIcon, SparkleIcon, ArrowDownIcon } from '../constants';

const LandingSection: React.FC = () => {
  const [visibleName, setVisibleName] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const name = YOUR_NAME;
  const subtitle = "Digital Dreamweaver & Code Sorcerer";

  useEffect(() => {
    let charIndex = 0;
    const intervalId = setInterval(() => {
      setVisibleName(name.substring(0, charIndex + 1));
      charIndex++;
      if (charIndex === name.length) {
        clearInterval(intervalId);
        setTimeout(() => setShowSubtitle(true), 500);
      }
    }, 100); // Adjust speed of typing animation

    return () => clearInterval(intervalId);
  }, [name]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-4 text-center bg-gradient-to-br from-black via-gray-900 to-neutral-900"
    >
      {/* Background Stars and Sparkles */}
      {[...Array(20)].map((_, i) => (
        <StarIcon
          key={`star-${i}`}
          className="absolute text-neon-purple opacity-30 animate-pulse"
          style={{
            width: `${Math.random() * 15 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
       {[...Array(10)].map((_, i) => (
        <SparkleIcon
          key={`sparkle-${i}`}
          className="absolute text-pink-400 opacity-50 animate-ping"
          style={{
            width: `${Math.random() * 10 + 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 2 + 1}s`,
            animationDelay: `${Math.random() * 1}s`,
          }}
        />
      ))}

      <div className="z-10 relative">
        <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            {visibleName}
          </span>
        </h1>
        {showSubtitle && (
          <p className={`text-xl md:text-3xl text-gray-300 font-vt323 mb-10 opacity-0 animate-fadeInUp delay-500`}>
            {subtitle}
          </p>
        )}
      </div>

      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-neon-purple animate-bounce"
      >
        <ArrowDownIcon className="w-10 h-10 md:w-12 md:h-12" />
      </button>
    </section>
  );
};

export default LandingSection;