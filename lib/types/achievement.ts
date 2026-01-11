export type PublicationType = 'journal' | 'conference' | 'preprint' | 'thesis';
export type AchievementCategory = 'publications' | 'awards' | 'education' | 'projects';

export interface Publication {
  id: string;
  type: PublicationType;
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  pdf?: string;
  abstract: string;
  tags: string[];
  featured: boolean;
  citationCount?: number;
  detailsPath?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
  featured: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string | null;
  thesis?: string;
  advisor?: string;
  gpa?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  role: string;
  technologies: string[];
  github?: string;
  website?: string;
  featured: boolean;
}

export interface AchievementsData {
  publications: Publication[];
  awards: Award[];
  education: Education[];
  projects: Project[];
}
