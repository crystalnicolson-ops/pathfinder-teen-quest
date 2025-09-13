export interface Question {
  text: string;
  options: {
    A: { text: string; traits: string[] };
    B: { text: string; traits: string[] };
    C: { text: string; traits: string[] };
    D: { text: string; traits: string[] };
    E: { text: string; traits: string[] };
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
  
  // Why Good Fit & Relevant Majors
  whyGoodFit?: string;
  relevantMajors?: string[];
  
  // Academic Information
  tuition?: string;
  acceptanceRate?: string;
  averageGPA?: string;
  unweightedGPA?: string;
  testScores?: string;
  applicationDeadline?: string;
  studentFacultyRatio?: string;
  classSize?: string;
  
  // Campus Life
  studentPopulation?: string;
  campusCulture?: string;
  housingOptions?: string[];
  activities?: string[];
  athletics?: string;
  
  // Career Support
  jobPlacementRate?: string;
  alumniNetwork?: string;
  internshipPrograms?: string[];
  careerServices?: string[];
  
  // Special Features
  notableAlumni?: string[];
  researchOpportunities?: string[];
  studyAbroad?: string;
  honorsPrograms?: string[];
  scholarships?: string[];
  campusFacilities?: string[];
}

export interface Celebrity {
  name: string;
  emoji: string;
  description: string;
}

export interface PersonalityTrait {
  name: string;
  percentage: number;
}

export interface PersonalityResult {
  type: PersonalityType;
  description: string;
  careers: Career[];
  entryLevelCareers: Career[];
  advancedCareers: Career[];
  colleges: College[];
  celebrities: Celebrity[];
  traits: PersonalityTrait[];
}