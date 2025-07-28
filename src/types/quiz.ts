export interface Question {
  text: string;
  options: {
    A: { text: string; traits: string[] };
    B: { text: string; traits: string[] };
    C: { text: string; traits: string[] };
    D: { text: string; traits: string[] };
  };
}

export type PersonalityType = 
  // The Thinkers
  | 'The Strategist'
  | 'The Inventor'
  | 'The Boss'
  | 'The Challenger'
  // The Dreamers
  | 'The Visionary'
  | 'The Creator'
  | 'The Coach'
  | 'The Free Spirit'
  // The Planners
  | 'The Organizer'
  | 'The Helper'
  | 'The Manager'
  | 'The Host'
  // The Explorers
  | 'The Fixer'
  | 'The Artist'
  | 'The Adventurer'
  | 'The Performer';

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
  phone?: string;
  email?: string;
  regionalCounselors?: string[];
}

export interface PersonalityResult {
  type: PersonalityType;
  description: string;
  careers: Career[];
  colleges: College[];
}