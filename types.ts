
import React from 'react';

export interface Award {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  summary: string;
  isCurrent?: boolean;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  githubUrl: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface Interest {
  id: string;
  name: string;
  icon: React.ReactNode;
}
