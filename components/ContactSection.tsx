import React from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE, EmailIcon, PhoneIcon } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-[#0A0A1A]">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-orbitron text-neon-purple mb-12">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-400 mb-10 font-vt323 max-w-xl mx-auto">
          Have a project in mind, a question, or just want to say hi? Feel free to reach out! I'm always excited to connect with fellow creators and tech enthusiasts.
        </p>
        
        <div className="space-y-8 md:space-y-0 md:flex md:justify-center md:items-center md:gap-16">
          <div className="flex flex-col items-center group">
            <EmailIcon className="w-12 h-12 text-neon-purple mb-3 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-orbitron text-pink-400 mb-1">Email</h3>
            <a 
              href={`mailto:${CONTACT_EMAIL}`} 
              className="text-lg text-gray-300 hover:text-neon-purple underline decoration-neon-purple/50 hover:decoration-neon-purple transition-colors font-vt323"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          
          <div className="flex flex-col items-center group">
            <PhoneIcon className="w-12 h-12 text-neon-purple mb-3 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-2xl font-orbitron text-pink-400 mb-1">Phone</h3>
            <a 
              href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} 
              className="text-lg text-gray-300 hover:text-neon-purple underline decoration-neon-purple/50 hover:decoration-neon-purple transition-colors font-vt323"
            >
              {CONTACT_PHONE}
            </a>
          </div>
        </div>

        <div className="mt-16">
          <p className="font-vt323 text-xl text-gray-500">
            Let's build something <span className="text-neon-purple animate-pulse">digital</span> and <span className="text-pink-400 animate-pulse">dreamy</span> together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;