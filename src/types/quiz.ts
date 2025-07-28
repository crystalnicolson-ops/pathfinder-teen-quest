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
  | 'The Thinker'
  | 'The Commander'
  | 'The Visionary'
  // The Dreamers
  | 'The Advocate'
  | 'The Creator'
  | 'The Guide'
  | 'The Explorer'
  // The Planners
  | 'The Inspector'
  | 'The Helper'
  | 'The Executive'
  | 'The Host'
  // The Explorers
  | 'The Tinkerer'
  | 'The Artist'
  | 'The Dynamo'
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
  
  // Academic Information
  tuition?: string;
  acceptanceRate?: string;
  averageGPA?: string;
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

export interface PersonalityResult {
  type: PersonalityType;
  description: string;
  careers: Career[];
  colleges: College[];
}