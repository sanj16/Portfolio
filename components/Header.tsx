import React, { useState, useEffect } from 'react';
import { YOUR_NAME, NAV_LINKS, MenuIcon, CloseIcon } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-vt323
                  ${isScrolled || isMenuOpen ? 'bg-deep-space/90 backdrop-blur-md shadow-lg border-b border-neon-purple/30' : 'bg-transparent border-b border-transparent'}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-3">
        <a href="#home" className="text-3xl font-orbitron text-neon-purple hover:text-pink-400 transition-colors">
          {YOUR_NAME}
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {NAV_LINKS.map(link => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-lg text-gray-300 hover:text-neon-purple transition-colors duration-300 px-2 py-1 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            aria-label="Toggle menu" 
            className="text-gray-300 hover:text-neon-purple focus:outline-none"
          >
            {isMenuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-deep-space/95 backdrop-blur-md shadow-xl border-t border-neon-purple/20">
          <nav className="flex flex-col items-center py-4">
            {NAV_LINKS.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                className="text-xl text-gray-300 hover:text-neon-purple py-3 w-full text-center transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;