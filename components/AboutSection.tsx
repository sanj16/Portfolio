import React from 'react';
import { YOUR_NAME, SOCIAL_LINKS, INTERESTS, DownloadIcon, RESUME_URL } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-10 bg-[#101020]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-orbitron text-neon-purple mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://picsum.photos/seed/mypic/400/400"
              alt={YOUR_NAME}
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-neon-purple bg-neon-purple-glow filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed font-vt323">
              Hey there! I'm <span className="text-pink-400 font-bold">{YOUR_NAME}</span>, a passionate creator navigating the digital cosmos.
              I thrive on blending nostalgic Y2K vibes with modern technology to build unique and engaging experiences.
              My journey is fueled by a love for all things creative, from crafting pixel-perfect designs to exploring the frontiers of AI.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-vt323">
              When I'm not coding or designing, you might find me lost in a good book, composing tunes on the piano, or experimenting with the latest nail art trends. Let's create something awesome together!
            </p>
            
            <h3 className="text-2xl font-orbitron text-neon-purple mb-4">My Interests:</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              {INTERESTS.map(interest => (
                <div key={interest.id} className="flex flex-col items-center p-3 bg-black/30 rounded-lg hover:bg-neon-purple/20 transition-colors duration-300" title={interest.name}>
                  {interest.icon}
                  <span className="text-xs mt-1 text-gray-400">{interest.name}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-6">
              <a
                href={RESUME_URL}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="button-neon font-orbitron py-3 px-6 rounded-md text-lg flex items-center gap-2 transform hover:scale-105"
              >
                <DownloadIcon className="w-5 h-5" />
                Download Resume
              </a>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map(link => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-gray-400 hover:text-neon-purple transform hover:scale-110 transition-all duration-300"
                  >
                    {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;