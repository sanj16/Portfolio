import React from 'react';
import { YOUR_NAME, SOCIAL_LINKS, CometIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-4 bg-black text-center border-t-2 border-neon-purple">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-6">
          <CometIcon className="w-8 h-8 text-neon-purple mr-2 animate-pulse" />
          <p className="text-lg font-orbitron text-neon-purple">
            Made with <span className="text-pink-400">&lt;code&gt;</span> &amp; ☄ by {YOUR_NAME}
          </p>
        </div>
        <div className="flex justify-center gap-6 mb-4">
          {SOCIAL_LINKS.map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-gray-500 hover:text-neon-purple transition-colors duration-300 transform hover:scale-110"
            >
              {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7" })}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-600 font-vt323">
          &copy; {new Date().getFullYear()} {YOUR_NAME}. All rights reserved.
        </p>
        <p className="text-xs text-gray-700 mt-2 font-vt323">
          Y2K Dreams in a Digital Stream.
        </p>
      </div>
    </footer>
  );
};

export default Footer;