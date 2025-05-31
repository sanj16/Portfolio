import React, { useEffect, useRef, useState } from 'react';
import { PROJECTS_DATA, GitHubIcon } from '../constants';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
  
  const animationClass = isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90';

  return (
    <div 
      ref={cardRef}
      className={`bg-black/60 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ease-out group transform hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(160,32,240,0.5)] border-2 border-transparent hover:border-neon-purple ${animationClass}`}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-orbitron text-pink-400 group-hover:text-neon-purple transition-colors duration-300">{project.title}</h3>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub repository`}
            className="text-gray-400 hover:text-neon-purple transition-colors duration-300"
          >
            <GitHubIcon className="w-7 h-7" />
          </a>
        </div>
        <p className="text-xs text-purple-400 mb-3 font-vt323">{project.date}</p>
        <p className="text-gray-300 leading-relaxed font-vt323 text-sm h-16 overflow-y-auto custom-scrollbar"> {/* Fixed height and scroll for uniform card size */}
          {project.description}
        </p>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-10 bg-[#101020]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-orbitron text-neon-purple mb-16 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10"> {/* Max 2 columns for better readability */}
          {PROJECTS_DATA.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;