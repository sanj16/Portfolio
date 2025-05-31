import React from 'react';
import { Award, Experience, Project, SocialLink, Interest } from './types';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

// SVG Icons
export const StarIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const SparkleIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 7.5l.813-2.846a4.5 4.5 0 00-3.09-3.09L12.154 1l.001-.001.002 0L12 1.25l-2.846.813a4.5 4.5 0 00-3.09 3.09L5.25 7.5l2.846.813a4.5 4.5 0 003.09 3.09L12.75 15l.001.001.001-.002L13.5 12.75l2.846-.813a4.5 4.5 0 003.09-3.09L21.75 6l-.003-.004L21.75 6l-2.846.813a4.5 4.5 0 00-3.09 3.09L15 12.75l.001.001L15 12.75l-2.846-.813a4.5 4.5 0 00-3.09-3.09L7.5 5.25l.813-2.846a4.5 4.5 0 003.09-3.09L12.75 1l.001.001.002 0L13.5 1.25l2.846.813a4.5 4.5 0 003.09 3.09L21.75 7.5l-2.846.813a4.5 4.5 0 00-3.09 3.09L15 12.75l.001.001.001-.002L13.5 15l2.846.813a4.5 4.5 0 003.09 3.09L21.75 18l-.003-.004L21.75 18l-2.846.813a4.5 4.5 0 00-3.09 3.09L15 21.75l.001-.001L15 21.75l-2.846-.813a4.5 4.5 0 00-3.09-3.09L7.5 18.75l.813-2.846a4.5 4.5 0 003.09-3.09L12.75 15l.001.001.002 0L13.5 12.75l2.846-.813a4.5 4.5 0 003.09-3.09z" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const GitHubIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const CometIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.494 7.019a.997.997 0 00-.72-.72l-4.747-1.187a1 1 0 00-.928.205L12 9.429 7.901 5.332a1 1 0 00-.928-.205L2.227 6.299a.997.997 0 00-.72.72L.32 11.766a1.001 1.001 0 00.416 1.165l3.04 1.899.027 3.817a1 1 0 00.752.966l2.08.52a1 1 0 001.176-.69l1.588-3.971A.999.999 0 0110 15h4a.999.999 0 01.7-.288l1.588 3.971a1 1 0 001.176.69l2.08-.52a1 1 0 00.752-.966l.027-3.817 3.04-1.899a1.001 1.001 0 00.416-1.165l-1.187-4.747zM8 17H7v-2h1v2zm2-4h-2v-1c0-.472.126-.922.352-1.308l1.296-2.212.352-.6.352.6 1.296 2.212c.226.386.352.836.352 1.308v1h-2zm6 4h-1v-2h1v2z" />
  </svg>
);

export const ArrowDownIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
  </svg>
);

export const AiIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-3-7h6v-2H9v2zm0-4h6V7H9v2zm2 8h2v-2h-2v2z"/>
    <circle cx="12" cy="12" r="3" fillOpacity="0.5" />
  </svg>
);

export const PianoIcon: React.FC<IconProps> = ({ className, style }) => (
 <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 16H4V5h16v14z"/>
    <path d="M5 16h2v-6H5zm3 0h2v-8H8zm3 0h2V7h-2zm3 0h2v-6h-2zm3 0h2V9h-2z"/>
  </svg>
);

export const BookIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-.988H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.805.55-.988 1-1h13v12z"/>
    <path d="M7 5h2v10H7zm4 0h2v10h-2z"/>
  </svg>
);

export const DesignIcon: React.FC<IconProps> = ({ className, style }) => (
 <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="m21.447 6.348-2.795-2.795a1.002 1.002 0 0 0-1.414 0L5.932 14.859l-1.768 4.995a.998.998 0 0 0 1.252 1.252l4.995-1.768L21.447 7.762a.997.997 0 0 0 0-1.414zM8.359 16.068l-2.416.852.852-2.416L14.586 6.717l1.564 1.564-7.791 7.787zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c2.233 0 4.284-.744 5.988-2H16c-4.411 0-8-3.589-8-8s3.589-8 8-8c2.066 0 3.947.788 5.351 2.085A9.942 9.942 0 0 0 12 2z"/>
  </svg>
);

export const NailArtIcon: React.FC<IconProps> = ({ className, style }) => (
 <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.47,2.37A1,1,0,0,0,17.05,2.1L12,5.2,6.95,2.1a1,1,0,0,0-1.42,0,1,1,0,0,0-.27,1.11L7.57,9.45a15.72,15.72,0,0,0-1.26,3.4A4.3,4.3,0,0,0,10.62,18a4.18,4.18,0,0,0,2.73.95,4.31,4.31,0,0,0,4.31-4.31A4.24,4.24,0,0,0,17.1,13a16.14,16.14,0,0,0-1.3-3.66l2.25-6.15A1,1,0,0,0,18.47,2.37ZM12,17.3a2.31,2.31,0,0,1-2.31-2.31,2.26,2.26,0,0,1,.57-1.52,14.1,14.1,0,0,1,1.13-2.78l.58,1.6a.93.93,0,0,0,1.73,0l.58-1.6A13.73,13.73,0,0,1,15.41,13a2.31,2.31,0,0,1-1.1,4.29A2.23,2.23,0,0,1,12,17.3Z"/>
    <path d="M13.5,8.5a1,1,0,1,0-1-1A1,1,0,0,0,13.5,8.5Z"/>
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const EmailIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className, style }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79a15.253 15.253 0 006.59 6.59l2.2-2.2a.999.999 0 011.05-.21 11.31 11.31 0 003.48.55c.58 0 1.07.49 1.07 1.07v3.43c0 .58-.49 1.07-1.07 1.07C11.05 21 3 12.95 3 4.07c0-.58.49-1.07 1.07-1.07h3.43c.58 0 1.07.49 1.07 1.07 0 1.25.2 2.45.55 3.48a.999.999 0 01-.22 1.05l-2.2 2.2z"/>
  </svg>
);


// Sample Data
export const YOUR_NAME = "Alex Nova";
export const CONTACT_EMAIL = "alex.nova.digital@example.com";
export const CONTACT_PHONE = "+1 (555) 123-4567";


export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#awards', label: 'Awards' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'linkedin', name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: <LinkedInIcon /> },
  { id: 'github', name: 'GitHub', url: 'https://github.com/yourusername', icon: <GitHubIcon /> },
  { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/yourusername', icon: <InstagramIcon /> },
];

export const INTERESTS: Interest[] = [
  { id: 'ai', name: 'AI', icon: <AiIcon className="w-8 h-8 text-neon-purple" /> },
  { id: 'piano', name: 'Piano', icon: <PianoIcon className="w-8 h-8 text-neon-purple" /> },
  { id: 'books', name: 'Books', icon: <BookIcon className="w-8 h-8 text-neon-purple" /> },
  { id: 'design', name: 'Design', icon: <DesignIcon className="w-8 h-8 text-neon-purple" /> },
  { id: 'nailart', name: 'Nail Art', icon: <NailArtIcon className="w-8 h-8 text-neon-purple" /> },
];

export const AWARDS_DATA: Award[] = [
  {
    id: 'award1',
    title: 'Y2K Design Innovator',
    description: 'Recognized for outstanding contributions to retro-futuristic web design.',
    date: 'Dec 2023',
    imageUrl: 'https://picsum.photos/seed/award1/400/300',
  },
  {
    id: 'award2',
    title: 'Pixel Art Champion',
    description: 'First place in the annual pixel art competition for digital artists.',
    date: 'Jun 2023',
    imageUrl: 'https://picsum.photos/seed/award2/400/300',
  },
  {
    id: 'award3',
    title: 'Future Creative Award',
    description: 'Awarded for a forward-thinking project in interactive media.',
    date: 'Jan 2022',
    imageUrl: 'https://picsum.photos/seed/award3/400/300',
  },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp1',
    title: 'Lead Digital Artist',
    company: 'RetroWave Studios',
    duration: 'Jan 2023 - Present',
    summary: 'Spearheading Y2K-inspired visual projects and mentoring junior designers. Driving innovation in retro aesthetics.',
    isCurrent: true,
  },
  {
    id: 'exp2',
    title: 'UX/UI Designer',
    company: 'CyberFunk Inc.',
    duration: 'Jun 2021 - Dec 2022',
    summary: 'Designed intuitive and engaging user interfaces for various digital products with a focus on futuristic themes.',
  },
  {
    id: 'exp3',
    title: 'Graphic Design Intern',
    company: 'Neon Dreams Co.',
    duration: 'Jan 2021 - May 2021',
    summary: 'Assisted senior designers in creating vibrant marketing materials and digital assets.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    title: 'Project Starlight',
    date: 'Oct 2023',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    description: 'An interactive web experience exploring cosmic phenomena with Y2K visuals.',
    githubUrl: 'https://github.com/yourusername/project-starlight',
  },
  {
    id: 'proj2',
    title: 'GlitchBeat Sequencer',
    date: 'Jul 2023',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    description: 'A web-based music sequencer that generates glitchy, retro-inspired beats.',
    githubUrl: 'https://github.com/yourusername/glitchbeat-sequencer',
  },
  {
    id: 'proj3',
    title: 'PixelVerse Explorer',
    date: 'Mar 2023',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    description: 'A 2D pixel art game prototype set in a sprawling digital universe.',
    githubUrl: 'https://github.com/yourusername/pixelverse-explorer',
  },
  {
    id: 'proj4',
    title: 'CyberRead Platform',
    date: 'Dec 2022',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    description: 'A futuristic e-reading platform with customizable themes and dynamic text effects.',
    githubUrl: 'https://github.com/yourusername/cyberread',
  },
];

export const RESUME_URL = "/alex_nova_resume.pdf"; // Placeholder resume URL