export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    personality: PersonalityType;
  }[];
}

export type PersonalityType = 
  | 'Creative Innovator'
  | 'Analytical Problem Solver'
  | 'People-Focused Helper'
  | 'Leadership Organizer'
  | 'Detail-Oriented Planner'
  | 'Hands-On Builder';

export interface Career {
  title: string;
  description: string;
  averageSalary: string;
  jobGrowth: string;
  indeedLink: string;
}

export interface College {
  name: string;
  location: string;
  programs: string[];
  ranking: string;
  website: string;
}

export interface PersonalityResult {
  type: PersonalityType;
  description: string;
  careers: Career[];
  colleges: College[];
}