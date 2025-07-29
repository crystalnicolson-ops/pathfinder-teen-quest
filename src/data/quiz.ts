import { Question, PersonalityResult, PersonalityType } from '@/types/quiz';

export const questions: Question[] = [
  {
    text: "When the teacher assigns a group project, I secretly hope I can do it all myself.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "T", "J"] },
      B: { text: "Agree", traits: ["I", "N", "T", "J"] },
      C: { text: "Neutral", traits: ["I", "S", "F", "P"] },
      D: { text: "Disagree", traits: ["E", "S", "F", "J"] }
    }
  },
  {
    text: "I often get caught daydreaming about what my life could look like in 10 years.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "N", "F", "P"] },
      B: { text: "Agree", traits: ["I", "N", "T", "P"] },
      C: { text: "Neutral", traits: ["I", "S", "F", "J"] },
      D: { text: "Disagree", traits: ["E", "S", "T", "J"] }
    }
  },
  {
    text: "If someone asks for my opinion, I usually give the most practical or logical answer.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "T", "J"] },
      B: { text: "Agree", traits: ["E", "S", "T", "J"] },
      C: { text: "Neutral", traits: ["I", "N", "T", "P"] },
      D: { text: "Disagree", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "I like having my schedule figured out before the day starts.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "T", "J"] },
      B: { text: "Agree", traits: ["E", "S", "F", "J"] },
      C: { text: "Neutral", traits: ["I", "N", "F", "J"] },
      D: { text: "Disagree", traits: ["E", "N", "T", "P"] }
    }
  },
  {
    text: "I get a boost of energy from hanging out with a group of people after school.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "S", "F", "P"] },
      B: { text: "Agree", traits: ["E", "N", "F", "P"] },
      C: { text: "Neutral", traits: ["I", "S", "F", "J"] },
      D: { text: "Disagree", traits: ["I", "N", "T", "P"] }
    }
  },
  {
    text: "When solving a problem, I look for real-world facts instead of hunches or feelings.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "T", "J"] },
      B: { text: "Agree", traits: ["E", "S", "T", "J"] },
      C: { text: "Neutral", traits: ["I", "N", "T", "P"] },
      D: { text: "Disagree", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "I often think about how my decisions affect the people around me.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "F", "J"] },
      B: { text: "Agree", traits: ["E", "S", "F", "J"] },
      C: { text: "Neutral", traits: ["I", "N", "F", "P"] },
      D: { text: "Disagree", traits: ["E", "N", "T", "P"] }
    }
  },
  {
    text: "I feel overwhelmed when someone tries to pin me to a strict plan.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "N", "F", "P"] },
      B: { text: "Agree", traits: ["E", "N", "T", "P"] },
      C: { text: "Neutral", traits: ["I", "S", "F", "P"] },
      D: { text: "Disagree", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "At lunch, I'd rather sit with one close friend than a big group.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "F", "J"] },
      B: { text: "Agree", traits: ["I", "N", "F", "P"] },
      C: { text: "Neutral", traits: ["I", "S", "T", "J"] },
      D: { text: "Disagree", traits: ["E", "S", "F", "P"] }
    }
  },
  {
    text: "I enjoy figuring out how to fix broken tech or gadgets.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "T", "P"] },
      B: { text: "Agree", traits: ["I", "N", "T", "P"] },
      C: { text: "Neutral", traits: ["E", "S", "T", "J"] },
      D: { text: "Disagree", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "I feel most comfortable when I stick to the same morning routine every day.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "T", "J"] },
      B: { text: "Agree", traits: ["I", "S", "F", "J"] },
      C: { text: "Neutral", traits: ["E", "S", "T", "J"] },
      D: { text: "Disagree", traits: ["E", "N", "F", "P"] }
    }
  },
  {
    text: "I'd rather invent my own way to do an assignment than follow the instructions exactly.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "N", "F", "P"] },
      B: { text: "Agree", traits: ["E", "N", "T", "P"] },
      C: { text: "Neutral", traits: ["I", "N", "T", "P"] },
      D: { text: "Disagree", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "When someone's upset, I feel the urge to comfort or help them.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "F", "J"] },
      B: { text: "Agree", traits: ["E", "S", "F", "J"] },
      C: { text: "Neutral", traits: ["I", "N", "F", "P"] },
      D: { text: "Disagree", traits: ["I", "S", "T", "P"] }
    }
  },
  {
    text: "If no one takes the lead in a group, I'll usually step up and organize things.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "S", "T", "J"] },
      B: { text: "Agree", traits: ["E", "N", "T", "J"] },
      C: { text: "Neutral", traits: ["E", "S", "F", "J"] },
      D: { text: "Disagree", traits: ["I", "S", "F", "P"] }
    }
  },
  {
    text: "I'd rather talk about things that are real and current than imaginary or 'what if' stuff.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "S", "T", "J"] },
      B: { text: "Agree", traits: ["I", "S", "T", "J"] },
      C: { text: "Neutral", traits: ["E", "S", "F", "J"] },
      D: { text: "Disagree", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "I get stressed when plans change last minute.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "T", "J"] },
      B: { text: "Agree", traits: ["I", "S", "F", "J"] },
      C: { text: "Neutral", traits: ["E", "S", "T", "J"] },
      D: { text: "Disagree", traits: ["E", "N", "T", "P"] }
    }
  },
  {
    text: "I get bored if every day feels the same.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "N", "F", "P"] },
      B: { text: "Agree", traits: ["E", "S", "T", "P"] },
      C: { text: "Neutral", traits: ["I", "N", "F", "P"] },
      D: { text: "Disagree", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "I enjoy writing goals for myself and imagining what I'll do next.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "N", "T", "J"] },
      B: { text: "Agree", traits: ["I", "N", "F", "J"] },
      C: { text: "Neutral", traits: ["E", "N", "T", "P"] },
      D: { text: "Disagree", traits: ["E", "S", "T", "P"] }
    }
  },
  {
    text: "I like breaking tasks into steps instead of jumping in randomly.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "T", "J"] },
      B: { text: "Agree", traits: ["I", "N", "T", "J"] },
      C: { text: "Neutral", traits: ["E", "S", "F", "J"] },
      D: { text: "Disagree", traits: ["E", "N", "T", "P"] }
    }
  },
  {
    text: "When I need to choose something, I often trust my gut feeling.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "N", "F", "P"] },
      B: { text: "Agree", traits: ["E", "N", "F", "P"] },
      C: { text: "Neutral", traits: ["I", "S", "F", "J"] },
      D: { text: "Disagree", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "I'm the kind of person who color-codes notes and keeps things organized.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "T", "J"] },
      B: { text: "Agree", traits: ["I", "S", "F", "J"] },
      C: { text: "Neutral", traits: ["E", "S", "T", "J"] },
      D: { text: "Disagree", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "I come alive when I'm doing something artistic, like writing, drawing, or creating.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "N", "F", "P"] },
      B: { text: "Agree", traits: ["I", "S", "F", "P"] },
      C: { text: "Neutral", traits: ["E", "N", "F", "P"] },
      D: { text: "Disagree", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "When a friend is hurting, I want to help them feel better even if I don't know how.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "F", "J"] },
      B: { text: "Agree", traits: ["E", "S", "F", "J"] },
      C: { text: "Neutral", traits: ["I", "N", "F", "P"] },
      D: { text: "Disagree", traits: ["I", "S", "T", "P"] }
    }
  },
  {
    text: "If a group gets off track, I usually try to get everyone back on task.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "S", "T", "J"] },
      B: { text: "Agree", traits: ["I", "S", "T", "J"] },
      C: { text: "Neutral", traits: ["E", "S", "F", "J"] },
      D: { text: "Disagree", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "I notice little details that other people often miss.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "T", "J"] },
      B: { text: "Agree", traits: ["I", "S", "F", "J"] },
      C: { text: "Neutral", traits: ["I", "S", "T", "P"] },
      D: { text: "Disagree", traits: ["E", "N", "T", "P"] }
    }
  },
  {
    text: "If there's a chance to perform or be in the spotlight, I'll probably say yes.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "S", "F", "P"] },
      B: { text: "Agree", traits: ["E", "N", "F", "P"] },
      C: { text: "Neutral", traits: ["E", "S", "T", "J"] },
      D: { text: "Disagree", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Sometimes I imagine entire stories or scenes in my head just for fun.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "N", "F", "P"] },
      B: { text: "Agree", traits: ["I", "N", "T", "P"] },
      C: { text: "Neutral", traits: ["E", "N", "F", "P"] },
      D: { text: "Disagree", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "I like giving advice when friends ask about relationships or decisions.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "S", "F", "J"] },
      B: { text: "Agree", traits: ["I", "S", "F", "J"] },
      C: { text: "Neutral", traits: ["E", "N", "F", "J"] },
      D: { text: "Disagree", traits: ["I", "S", "T", "P"] }
    }
  },
  {
    text: "When doing schoolwork, I focus more on what's due now than long-term deadlines.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "S", "T", "P"] },
      B: { text: "Agree", traits: ["I", "S", "F", "P"] },
      C: { text: "Neutral", traits: ["E", "N", "F", "P"] },
      D: { text: "Disagree", traits: ["I", "N", "T", "J"] }
    }
  },
  {
    text: "I like hands-on work—like building, designing, or fixing things.",
    options: {
      A: { text: "Strongly Agree", traits: ["I", "S", "T", "P"] },
      B: { text: "Agree", traits: ["E", "S", "T", "P"] },
      C: { text: "Neutral", traits: ["I", "S", "F", "P"] },
      D: { text: "Disagree", traits: ["I", "N", "F", "J"] }
    }
  }
];

export function calculateMBTI(responses: { traits: string[] }[]): PersonalityType {
  const traitCounts = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  for (const response of responses) {
    for (const trait of response.traits) {
      traitCounts[trait as keyof typeof traitCounts]++;
    }
  }

  const mbtiCode = [
    traitCounts.E > traitCounts.I ? 'E' : 'I',
    traitCounts.S > traitCounts.N ? 'S' : 'N',
    traitCounts.T > traitCounts.F ? 'T' : 'F',
    traitCounts.J > traitCounts.P ? 'J' : 'P'
  ].join('');

  const mbtiToPersonality: Record<string, PersonalityType> = {
    'INTJ': 'The Strategist',
    'INTP': 'The Inventor',
    'ENTJ': 'The Boss',
    'ENTP': 'The Challenger',
    'INFJ': 'The Visionary',
    'INFP': 'The Creator',
    'ENFJ': 'The Coach',
    'ENFP': 'The Free Spirit',
    'ISTJ': 'The Organizer',
    'ISFJ': 'The Helper',
    'ESTJ': 'The Manager',
    'ESFJ': 'The Host',
    'ISTP': 'The Fixer',
    'ISFP': 'The Artist',
    'ESTP': 'The Adventurer',
    'ESFP': 'The Performer'
  };

  return mbtiToPersonality[mbtiCode] || 'The Strategist';
}

export const personalityResults: Record<string, PersonalityResult> = {
  "The Strategist": {
    type: "The Strategist",
    description: "🧠 The Strategist (INTJ) – \"Logical • Independent • Planner\" Professional with glasses and blueprints. You love strategic thinking and long-term planning.",
    careers: [
      {
        title: "Architect",
        description: "Design buildings and spaces that are functional and aesthetically pleasing",
        averageSalary: "$75,000 - $120,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=architect"
      },
      {
        title: "Software Engineer",
        description: "Create software applications and systems for various platforms",
        averageSalary: "$75,000 - $130,000",
        jobGrowth: "25% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=software+engineer"
      },
      {
        title: "Urban Planner",
        description: "Design land use plans and programs for cities and communities",
        averageSalary: "$65,000 - $95,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=urban+planner"
      },
      {
        title: "Systems Analyst",
        description: "Study business processes and design information technology solutions",
        averageSalary: "$70,000 - $110,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=systems+analyst"
      },
      {
        title: "Robotics Designer",
        description: "Design and develop robotic systems for various applications",
        averageSalary: "$80,000 - $130,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=robotics+designer"
      }
    ],
    entryLevelCareers: [
      {
        title: "Junior Software Developer",
        description: "Start your tech career by writing code and learning software development fundamentals",
        averageSalary: "$50,000 - $70,000",
        jobGrowth: "25% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=junior+software+developer"
      },
      {
        title: "Business Analyst Trainee",
        description: "Analyze business processes and learn to recommend technology solutions",
        averageSalary: "$45,000 - $65,000",
        jobGrowth: "11% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=entry+level+business+analyst"
      },
      {
        title: "Architecture Intern",
        description: "Support architectural teams with drafting, research, and design assistance",
        averageSalary: "$35,000 - $45,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=architecture+intern"
      }
    ],
    advancedCareers: [
      {
        title: "Senior Software Architect",
        description: "Lead complex software design decisions and guide development teams",
        averageSalary: "$120,000 - $180,000",
        jobGrowth: "25% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=senior+software+architect"
      },
      {
        title: "Chief Technology Officer",
        description: "Lead technology strategy and innovation for entire organizations",
        averageSalary: "$150,000 - $300,000",
        jobGrowth: "11% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+technology+officer"
      },
      {
        title: "Principal Systems Designer",
        description: "Design and oversee large-scale system architectures and strategic technology initiatives",
        averageSalary: "$130,000 - $200,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=principal+systems+designer"
      }
    ],
    colleges: [
      {
        name: "Massachusetts Institute of Technology",
        location: "Cambridge, MA",
        programs: ["Computer Science", "Engineering", "Mathematics"],
        ranking: "#2 overall",
        website: "https://www.mit.edu/",
        phone: "(617) 253-3400",
        email: "admissions@mit.edu",
        regionalCounselors: ["Stuart Schmill (Dean)", "Michael Yang", "Molly Thompson‑Vander Heyden", "Trinidad Carney", "Yi Tso"],
        
        // Why Good Fit & Relevant Majors
        whyGoodFit: "Perfect for Strategists who love systematic thinking and long-term planning. MIT's rigorous analytical environment, cutting-edge research opportunities, and focus on innovation align with the INTJ personality. The collaborative problem-solving culture and emphasis on practical applications of theory appeal to strategic minds.",
        relevantMajors: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Architecture", "Urban Studies & Planning", "Management Science", "Applied Mathematics", "Systems Engineering"],
        
        // Academic Information
        tuition: "$59,750/year (2024-25)",
        acceptanceRate: "3.96%",
        averageGPA: "4.17",
        testScores: "SAT: 1520-1580, ACT: 35-36",
        applicationDeadline: "January 1 (Regular Decision)",
        studentFacultyRatio: "3:1",
        classSize: "Average class size: 12 students",
        
        // Campus Life
        studentPopulation: "4,638 undergraduates",
        campusCulture: "Collaborative, innovation-focused, academically rigorous environment with strong emphasis on hands-on learning and research",
        housingOptions: ["Residence Halls", "Fraternities/Sororities", "Graduate Housing", "Co-ops"],
        activities: ["Robotics Competitions", "Hackathons", "Research Groups", "Student Government", "Music Groups", "Sports Clubs"],
        athletics: "NCAA Division III, 33 varsity sports",
        
        // Career Support
        jobPlacementRate: "94% employed or in graduate school within 6 months",
        alumniNetwork: "Strong global network of 140,000+ alumni in tech, finance, research, and entrepreneurship",
        internshipPrograms: ["UROP (Undergraduate Research)", "Industry Internships", "Co-op Programs", "International Internships"],
        careerServices: ["Career Advising", "Job Placement", "Interview Prep", "Resume Review", "Networking Events"],
        
        // Special Features
        notableAlumni: ["Buzz Aldrin", "Tim Berners-Lee", "Drew Houston (Dropbox)", "Robert Noyce (Intel)", "Katherine Johnson"],
        researchOpportunities: ["AI/Machine Learning", "Bioengineering", "Climate Science", "Quantum Computing", "Space Technology"],
        studyAbroad: "MIT International Science and Technology Initiatives (MISTI) in 25+ countries",
        honorsPrograms: ["Honors Programs in all majors", "Research Opportunities", "Advanced Placement"],
        scholarships: ["Need-based Aid", "Merit Scholarships", "Work-Study Programs", "External Scholarships"],
        campusFacilities: ["State-of-art Labs", "Maker Spaces", "Libraries", "Recreation Center", "Innovation Labs"]
      },
      {
        name: "Stanford University",
        location: "Stanford, CA", 
        programs: ["Computer Science", "Engineering", "Applied Physics"],
        ranking: "#6 overall",
        website: "https://www.stanford.edu/",
        phone: "(650) 723-2091",
        email: "admission@stanford.edu",
        regionalCounselors: ["Bob Patterson (Director)", "Katie Phillips", "Laura Selznick", "Melissa Stevenson", "Gabriel Wolfenstein"],
        whyGoodFit: "Ideal for Strategists who want to combine technical excellence with entrepreneurial thinking. Stanford's innovation ecosystem, strong industry connections, and emphasis on interdisciplinary problem-solving match the INTJ's strategic mindset and desire for long-term impact.",
        relevantMajors: ["Computer Science", "Engineering (all disciplines)", "Mathematical & Computational Science", "Management Science & Engineering", "Symbolic Systems", "Product Design"]
      },
      {
        name: "Harvard University",
        location: "Cambridge, MA",
        programs: ["Computer Science", "Applied Mathematics", "Engineering"],
        ranking: "#3 overall",
        website: "https://www.harvard.edu/",
        phone: "(617) 495-1551",
        email: "college@fas.harvard.edu",
        regionalCounselors: ["General Admissions Staff"],
        whyGoodFit: "Perfect for Strategists who want to combine analytical thinking with leadership development. Harvard's rigorous academic environment, extensive alumni network, and emphasis on critical thinking align perfectly with the INTJ's strategic mindset and long-term planning abilities.",
        relevantMajors: ["Computer Science", "Applied Mathematics", "Engineering Sciences", "Economics", "Statistics", "Applied Physics"]
      },
      {
        name: "University of Chicago",
        location: "Chicago, IL",
        programs: ["Computer Science", "Economics", "Mathematics"],
        ranking: "#6 overall",
        website: "https://www.uchicago.edu/",
        phone: "(773) 702-8650",
        email: "collegeadmissions@uchicago.edu",
        regionalCounselors: ["General Admissions Staff"],
        whyGoodFit: "Ideal for Strategists who thrive on intellectual rigor and analytical thinking. UChicago's emphasis on critical inquiry, quantitative methods, and systematic problem-solving perfectly matches the INTJ's preference for deep analysis and strategic planning.",
        relevantMajors: ["Computer Science", "Economics", "Statistics", "Applied Mathematics", "Computational & Applied Mathematics", "Data Science"]
      },
      {
        name: "Columbia University",
        location: "New York, NY",
        programs: ["Computer Science", "Engineering", "Applied Mathematics"],
        ranking: "#12 overall",
        website: "https://www.columbia.edu/",
        phone: "(212) 854-2522",
        email: "ugrad-admiss@columbia.edu",
        regionalCounselors: ["General Admissions Staff"],
        whyGoodFit: "Excellent for Strategists who want to combine technical expertise with real-world impact. Columbia's location in NYC, strong engineering programs, and research opportunities provide the perfect environment for strategic thinkers to develop innovative solutions.",
        relevantMajors: ["Computer Science", "Industrial Engineering & Operations Research", "Applied Mathematics", "Financial Engineering", "Data Science", "Systems Engineering"]
      },
      {
        name: "Northwestern University",
        location: "Evanston, IL",
        programs: ["Computer Science", "Engineering", "Industrial Engineering"],
        ranking: "#9 overall",
        website: "https://www.northwestern.edu/",
        phone: "(847) 491-7271",
        email: "ug-admission@northwestern.edu",
        regionalCounselors: ["General Admissions Staff"],
        whyGoodFit: "Great for Strategists who value interdisciplinary thinking and practical application. Northwestern's strong engineering programs, collaborative culture, and emphasis on innovation provide excellent preparation for strategic leadership roles.",
        relevantMajors: ["Computer Science", "Industrial Engineering", "Systems Engineering", "Applied Mathematics", "Data Science", "Technology & Social Behavior"]
      },
      {
        name: "Carnegie Mellon University",
        location: "Pittsburgh, PA",
        programs: ["Computer Science", "Information Systems", "Robotics"],
        ranking: "#25 overall",
        website: "https://www.cmu.edu/",
        phone: "(412) 268-2082",
        email: "admission@andrew.cmu.edu",
        regionalCounselors: ["Miguel Alvarez", "Keith Gehres"],
        whyGoodFit: "Perfect for Strategists who love the intersection of technology and human behavior. CMU's data-driven approach, world-class computer science programs, and research opportunities in AI/robotics align with the INTJ's analytical nature and future-focused thinking.",
        relevantMajors: ["Computer Science", "Information Systems", "Robotics", "Human-Computer Interaction", "Electrical & Computer Engineering", "Statistics & Data Science"]
      },
      {
        name: "University of California, Berkeley",
        location: "Berkeley, CA",
        programs: ["Computer Science", "Engineering", "Data Science"],
        ranking: "#20 overall",
        website: "https://www.berkeley.edu/",
        phone: "(510) 642-3175",
        email: "admissions@berkeley.edu",
        regionalCounselors: ["General Admissions Staff"],
        whyGoodFit: "Excellent for Strategists who thrive in intellectually rigorous environments. UC Berkeley's world-renowned STEM programs, research opportunities, and innovation culture provide the perfect setting for strategic thinkers to develop cutting-edge solutions.",
        relevantMajors: ["Computer Science", "Electrical Engineering & Computer Science", "Data Science", "Applied Mathematics", "Operations Research", "Industrial Engineering"]
      },
      {
        name: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        programs: ["Engineering", "Computer Science", "Technology"],
        ranking: "#33 overall",
        website: "https://www.gatech.edu/",
        phone: "(404) 894-4154",
        email: "admission@gatech.edu",
        regionalCounselors: ["General Admissions Staff"],
        whyGoodFit: "Perfect for Strategists who want to bridge technology and business. Georgia Tech's strong engineering programs, emphasis on practical application, and connections to industry align with the INTJ's systematic approach to problem-solving.",
        relevantMajors: ["Computer Science", "Industrial Engineering", "Systems Engineering", "Business Administration", "Electrical Engineering", "Cybersecurity"]
      },
      {
        name: "University of Michigan",
        location: "Ann Arbor, MI",
        programs: ["Engineering", "Business", "Computer Science"],
        ranking: "#21 overall",
        website: "https://www.umich.edu/",
        phone: "(734) 764-7433",
        email: "admissions@umich.edu",
        regionalCounselors: ["General Admissions Staff"],
        whyGoodFit: "Great for Strategists who value both academic excellence and practical application. Michigan's top-ranked programs, research opportunities, and strong alumni network provide excellent preparation for leadership roles in technology and business.",
        relevantMajors: ["Computer Science & Engineering", "Industrial & Operations Engineering", "Business Administration", "Information Systems", "Data Science", "Aerospace Engineering"]
      },
      {
        name: "Purdue University",
        location: "West Lafayette, IN",
        programs: ["Engineering", "Computer Science", "Technology"],
        ranking: "#51 overall",
        website: "https://www.purdue.edu/",
        phone: "(765) 494-1776",
        email: "admissions@purdue.edu",
        regionalCounselors: ["General Admissions Staff"],
        whyGoodFit: "Ideal for Strategists who want strong technical training with practical focus. Purdue's excellent engineering programs, cooperative education opportunities, and industry connections provide solid preparation for strategic leadership in technical fields.",
        relevantMajors: ["Computer Science", "Industrial Engineering", "Electrical Engineering", "Systems Engineering", "Data Science", "Management"]
      },
      {
        name: "University of Washington",
        location: "Seattle, WA",
        programs: ["Computer Science", "Engineering", "Information"],
        ranking: "#55 overall",
        website: "https://www.washington.edu/",
        phone: "(206) 543-9686",
        email: "admissions@uw.edu",
        regionalCounselors: ["General Admissions Staff"],
        whyGoodFit: "Excellent for Strategists interested in technology and innovation. Located in a major tech hub, UW offers strong STEM programs, research opportunities, and connections to leading tech companies, perfect for strategic career development.",
        relevantMajors: ["Computer Science", "Informatics", "Industrial & Systems Engineering", "Applied Mathematics", "Business Administration", "Human Centered Design & Engineering"]
      },
      {
        name: "Virginia Tech",
        location: "Blacksburg, VA",
        programs: ["Engineering", "Computer Science", "Architecture"],
        ranking: "#75 overall",
        website: "https://www.vt.edu/",
        phone: "(540) 231-6267",
        email: "admissions@vt.edu",
        regionalCounselors: ["General Admissions Staff"],
        whyGoodFit: "Great for Strategists who value hands-on learning and practical application. Virginia Tech's strong engineering programs, collaborative environment, and emphasis on innovation provide excellent preparation for strategic roles in technology and design.",
        relevantMajors: ["Computer Science", "Industrial & Systems Engineering", "Architecture", "Business Information Technology", "Computer Engineering", "Statistics"]
      },
      {
        name: "Arizona State University",
        location: "Tempe, AZ",
        programs: ["Engineering", "Business", "Computing"],
        ranking: "#103 overall",
        website: "https://www.asu.edu/",
        phone: "(480) 965-7788",
        email: "admissions@asu.edu",
        regionalCounselors: ["General Admissions Staff"],
        whyGoodFit: "Perfect for Strategists who want flexibility and innovation in their education. ASU's cutting-edge programs, online options, and entrepreneurial culture provide diverse pathways for strategic thinking and career development.",
        relevantMajors: ["Computer Science", "Industrial Engineering", "Business Analytics", "Information Systems", "Software Engineering", "Project Management"]
      }
    ],
    celebrities: [
      { name: "Zendaya", emoji: "👑", description: "Iconic, poised" },
      { name: "Tom Holland", emoji: "🕶️", description: "Smart but relatable hero" },
      { name: "Taylor Hill", emoji: "📸", description: "Model & fashion" },
      { name: "Noah Schnapp", emoji: "🧠", description: "Analytical actor" },
      { name: "Sabrina Carpenter", emoji: "🧭", description: "Strategic and sharp" }
    ],
    traits: [
      { name: "Good listener", percentage: 72 },
      { name: "Judgmental", percentage: 45 },
      { name: "Outgoing", percentage: 38 },
      { name: "Artistic", percentage: 61 },
      { name: "Strong leader", percentage: 84 }
    ]
  },
  "The Inventor": {
    type: "The Inventor",
    description: "🧪 The Thinker (INTP) – \"Curious • Analytical • Inventive\" You love figuring out how things work and exploring ideas. You're great at puzzles and logical thinking.",
    careers: [
      {
        title: "Research Scientist",
        description: "Conduct experiments and develop new technologies",
        averageSalary: "$80,000 - $140,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=research+scientist"
      },
      {
        title: "App Developer",
        description: "Create mobile and web applications",
        averageSalary: "$70,000 - $120,000",
        jobGrowth: "25% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=app+developer"
      },
      {
        title: "Patent Analyst",
        description: "Research and analyze patents for intellectual property protection",
        averageSalary: "$65,000 - $110,000",
        jobGrowth: "6% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=patent+analyst"
      },
      {
        title: "Technical Writer",
        description: "Create technical documentation and user manuals",
        averageSalary: "$55,000 - $90,000",
        jobGrowth: "12% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=technical+writer"
      },
      {
        title: "Laboratory Technician",
        description: "Perform scientific tests and experiments in laboratory settings",
        averageSalary: "$40,000 - $65,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=laboratory+technician"
      }
    ],
    colleges: [
      {
        name: "California Institute of Technology",
        location: "Pasadena, CA",
        programs: ["Computer Science", "Engineering", "Applied Physics"],
        ranking: "#9 overall",
        website: "https://www.caltech.edu/",
        phone: "626-395-6341",
        email: "ugadmissions@caltech.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "University of California, Berkeley",
        location: "Berkeley, CA",
        programs: ["Computer Science", "Engineering", "Physics"],
        ranking: "#22 overall", 
        website: "https://www.berkeley.edu/",
        phone: "(510) 642-3175",
        email: "berkeleyinfo@berkeley.edu",
        regionalCounselors: ["Handled by department emails"]
      },
      {
        name: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        programs: ["Computer Science", "Engineering", "Research"],
        ranking: "#38 overall",
        website: "https://www.gatech.edu/",
        phone: "(404) 894-4154",
        email: "admission@gatech.edu",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "Billie Eilish", emoji: "🎧", description: "Musical innovator" },
      { name: "Timothée Chalamet", emoji: "🎭", description: "Abstract, thoughtful actor" },
      { name: "Sadie Sink", emoji: "🔬", description: "Quiet intensity & depth" },
      { name: "Finn Wolfhard", emoji: "🎸", description: "Creative and unpredictable" },
      { name: "Maddie Ziegler", emoji: "💃", description: "Experimental dance" }
    ],
    entryLevelCareers: [
      {
        title: "Junior Data Analyst",
        description: "Learn to analyze data and create reports to support business decisions",
        averageSalary: "$45,000 - $65,000",
        jobGrowth: "31% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=junior+data+analyst"
      },
      {
        title: "Research Assistant",
        description: "Support scientific research projects and learn laboratory techniques",
        averageSalary: "$35,000 - $50,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=research+assistant"
      }
    ],
    advancedCareers: [
      {
        title: "Lead AI Researcher",
        description: "Direct artificial intelligence research teams and breakthrough innovations",
        averageSalary: "$150,000 - $250,000",
        jobGrowth: "31% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=lead+ai+researcher"
      },
      {
        title: "Chief Data Officer",
        description: "Lead organization-wide data strategy and analytics initiatives",
        averageSalary: "$180,000 - $300,000",
        jobGrowth: "31% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+data+officer"
      }
    ],
    traits: [
      { name: "Good listener", percentage: 89 },
      { name: "Judgmental", percentage: 23 },
      { name: "Outgoing", percentage: 42 },
      { name: "Artistic", percentage: 95 },
      { name: "Strong leader", percentage: 31 }
    ]
  },
  "The Boss": {
    type: "The Boss",
    description: "👑 The Commander (ENTJ) – \"Leader • Strategic • Goal-driven\" You love taking charge and making strategic plans. You're great at leading and organizing.",
    careers: [
      {
        title: "Business Development Manager",
        description: "Lead strategic partnerships and business growth initiatives",
        averageSalary: "$85,000 - $140,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=business+development+manager"
      },
      {
        title: "Corporate Lawyer",
        description: "Provide legal counsel for business operations and strategy",
        averageSalary: "$120,000 - $200,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=corporate+lawyer"
      },
      {
        title: "Management Consultant",
        description: "Advise organizations on strategic business improvements",
        averageSalary: "$90,000 - $160,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=management+consultant"
      },
      {
        title: "Investment Banking Analyst",
        description: "Analyze financial markets and investment opportunities",
        averageSalary: "$85,000 - $150,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=investment+banking+analyst"
      },
      {
        title: "Executive Director",
        description: "Lead organizational strategy and executive decision-making",
        averageSalary: "$100,000 - $180,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=executive+director"
      }
    ],
    colleges: [
      {
        name: "University of Pennsylvania (Wharton)",
        location: "Philadelphia, PA",
        programs: ["Business Administration", "Management", "Economics"],
        ranking: "#1 in Business",
        website: "https://www.wharton.upenn.edu/",
        phone: "(215) 898-7507",
        email: "info@admissions.ugao.upenn.edu",
        regionalCounselors: ["Juan Román", "Betsy Barba", "Theodore Ny"]
      },
      {
        name: "Harvard University",
        location: "Cambridge, MA",
        programs: ["Business", "Economics", "Government"],
        ranking: "#3 overall",
        website: "https://www.harvard.edu/",
        phone: "(617) 495-1551",
        email: "college@fas.harvard.edu",
        regionalCounselors: ["General Advising Office"]
      },
      {
        name: "Northwestern University",
        location: "Evanston, IL", 
        programs: ["Business", "Economics", "Political Science"],
        ranking: "#9 overall",
        website: "https://www.northwestern.edu/",
        phone: "(847) 491-7271",
        email: "ug-admission@northwestern.edu",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "Olivia Rodrigo", emoji: "🎤", description: "Commanding pop star" },
      { name: "Millie Bobby Brown", emoji: "👑", description: "Young mogul vibes" },
      { name: "Dove Cameron", emoji: "💼", description: "Polished and driven" },
      { name: "IShowSpeed", emoji: "🔥", description: "Bold and aggressive persona" },
      { name: "Halle Bailey", emoji: "🧜‍♀️", description: "Leading with grace and strength" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 56 },
      { name: "Judgmental", percentage: 67 },
      { name: "Outgoing", percentage: 91 },
      { name: "Artistic", percentage: 48 },
      { name: "Strong leader", percentage: 96 }
    ]
  },
  "The Challenger": {
    type: "The Challenger",
    description: "💡 The Challenger (ENTP) – \"I love new ideas and pushing limits.\" You love debates, creativity, and risk. You're great at brainstorms and quick thinking.",
    careers: [
      {
        title: "Social Media Strategist",
        description: "Develop innovative digital marketing campaigns",
        averageSalary: "$50,000 - $85,000",
        jobGrowth: "19% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=social+media+strategist"
      },
      {
        title: "Startup Founder",
        description: "Launch and grow innovative business ventures",
        averageSalary: "$60,000 - $200,000+",
        jobGrowth: "Variable",
        indeedLink: "https://www.indeed.com/jobs?q=entrepreneur+startup"
      },
      {
        title: "Innovation Manager",
        description: "Lead creative problem-solving and new product development",
        averageSalary: "$75,000 - $120,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=innovation+manager"
      },
      {
        title: "Market Research Analyst",
        description: "Study market conditions and consumer behavior trends",
        averageSalary: "$55,000 - $85,000",
        jobGrowth: "22% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=market+research+analyst"
      },
      {
        title: "Creative Director",
        description: "Lead creative teams and develop brand strategies",
        averageSalary: "$70,000 - $130,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=creative+director"
      }
    ],
    colleges: [
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        programs: ["Business", "Communications", "Innovation"],
        ranking: "#27 overall",
        website: "https://www.usc.edu/",
        phone: "(213) 740-1111",
        email: "askUSC (portal)",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "New York University",
        location: "New York, NY",
        programs: ["Business", "Media Studies", "Entrepreneurship"],
        ranking: "#30 overall",
        website: "https://www.nyu.edu/",
        phone: "(212) 998-4500",
        email: "admissions@nyu.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "University of Texas at Austin",
        location: "Austin, TX",
        programs: ["Business", "Communications", "Technology"],
        ranking: "#38 overall",
        website: "https://www.utexas.edu/",
        phone: "512-475-7399",
        email: "admissions@austin.utexas.edu",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "Ryan Trahan", emoji: "🎥", description: "Creative YouTuber" },
      { name: "Emma Chamberlain", emoji: "☕", description: "Trendy and talkative" },
      { name: "KSI", emoji: "🥊", description: "Fighter and provocateur" },
      { name: "Charli D'Amelio", emoji: "🩰", description: "Trend-setting creator" },
      { name: "Kai Cenat", emoji: "🎮", description: "Loud, fun streamer" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 78 },
      { name: "Judgmental", percentage: 34 },
      { name: "Outgoing", percentage: 88 },
      { name: "Artistic", percentage: 72 },
      { name: "Strong leader", percentage: 81 }
    ]
  },
  "The Visionary": {
    type: "The Visionary",
    description: "🌌 The Visionary (INFJ) – \"I want to make a difference quietly.\" You love helping others and making meaning. You're great at listening and writing.",
    careers: [
      {
        title: "Mental Health Counselor",
        description: "Provide therapy and support for mental health challenges",
        averageSalary: "$50,000 - $80,000",
        jobGrowth: "22% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=mental+health+counselor"
      },
      {
        title: "Nonprofit Program Director",
        description: "Lead social impact programs and initiatives",
        averageSalary: "$55,000 - $90,000",
        jobGrowth: "12% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=nonprofit+program+director"
      },
      {
        title: "Social Worker",
        description: "Help individuals and families navigate life challenges",
        averageSalary: "$45,000 - $70,000",
        jobGrowth: "12% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=social+worker"
      },
      {
        title: "Life Coach",
        description: "Guide individuals toward personal and professional goals",
        averageSalary: "$40,000 - $75,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=life+coach"
      },
      {
        title: "Community Organizer",
        description: "Mobilize communities for social change and advocacy",
        averageSalary: "$35,000 - $60,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=community+organizer"
      }
    ],
    colleges: [
      {
        name: "Yale University",
        location: "New Haven, CT",
        programs: ["Psychology", "Social Work", "Public Health"],
        ranking: "#5 overall",
        website: "https://www.yale.edu/",
        phone: "(203) 432-9316",
        email: "student.questions@yale.edu",
        regionalCounselors: ["Jeremiah Quinlan (Dean)"]
      },
      {
        name: "University of Chicago",
        location: "Chicago, IL",
        programs: ["Psychology", "Social Work", "Public Policy"],
        ranking: "#6 overall",
        website: "https://www.uchicago.edu/",
        phone: "(773) 702-8650",
        email: "collegeadmissions@uchicago.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "Vanderbilt University",
        location: "Nashville, TN",
        programs: ["Psychology", "Human Development", "Social Work"],
        ranking: "#13 overall",
        website: "https://www.vanderbilt.edu/",
        phone: "(615) 322-2561",
        email: "admissions@vanderbilt.edu",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "Taylor Swift", emoji: "🦋", description: "Symbolic lyricist" },
      { name: "Shawn Mendes", emoji: "🎸", description: "Sensitive storyteller" },
      { name: "Gaten Matarazzo", emoji: "🧠", description: "Underrated thinker" },
      { name: "Florence Pugh", emoji: "🎭", description: "Visionary actress" },
      { name: "Joshua Bassett", emoji: "💔", description: "Emotional depth" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 94 },
      { name: "Judgmental", percentage: 28 },
      { name: "Outgoing", percentage: 35 },
      { name: "Artistic", percentage: 86 },
      { name: "Strong leader", percentage: 67 }
    ]
  },
  "The Creator": {
    type: "The Creator",
    description: "🎨 The Creator (INFP) – \"I express myself through art and ideas.\" You love self-expression and imagination. You're great at drawing, writing, and deep thinking.",
    careers: [
      {
        title: "Graphic Designer",
        description: "Create visual designs for digital and print media",
        averageSalary: "$45,000 - $75,000",
        jobGrowth: "3% (as fast as average)",
        indeedLink: "https://www.indeed.com/jobs?q=graphic+designer"
      },
      {
        title: "Game Designer",
        description: "Design gameplay mechanics and narrative for video games",
        averageSalary: "$60,000 - $100,000",
        jobGrowth: "16% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=game+designer"
      },
      {
        title: "UX/UI Designer",
        description: "Design user-friendly interfaces for websites and applications",
        averageSalary: "$55,000 - $95,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=ux+ui+designer"
      },
      {
        title: "Creative Writer",
        description: "Write original content for books, scripts, and digital media",
        averageSalary: "$35,000 - $70,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=creative+writer"
      },
      {
        title: "Art Therapist",
        description: "Use art as therapy to help people express emotions and heal",
        averageSalary: "$40,000 - $70,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=art+therapist"
      }
    ],
    colleges: [
      {
        name: "Rhode Island School of Design",
        location: "Providence, RI",
        programs: ["Graphic Design", "Game Design", "Digital Media"],
        ranking: "#1 in Art & Design",
        website: "https://www.risd.edu/",
        phone: "401-454-6300",
        email: "admissions@risd.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "California Institute of the Arts",
        location: "Valencia, CA",
        programs: ["Animation", "Art", "Creative Writing"],
        ranking: "#6 in Art & Design",
        website: "https://calarts.edu/",
        phone: "661-255-1050",
        email: "admissions@calarts.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "Parsons School of Design",
        location: "New York, NY",
        programs: ["Design & Technology", "Illustration", "Fine Arts"],
        ranking: "#3 in Art & Design",
        website: "https://www.newschool.edu/parsons/",
        phone: "(212) 229-5150",
        email: "thinkparsons@newschool.edu",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "Conan Gray", emoji: "✏️", description: "Emo-pop poet" },
      { name: "Lana Del Rey", emoji: "🕊️", description: "Ethereal and artistic" },
      { name: "Gracie Abrams", emoji: "📓", description: "Diary-core songwriting" },
      { name: "Dylan Minnette", emoji: "🎧", description: "Moody music & acting" },
      { name: "Amandla Stenberg", emoji: "🧿", description: "Culturally conscious artist" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 91 },
      { name: "Judgmental", percentage: 19 },
      { name: "Outgoing", percentage: 44 },
      { name: "Artistic", percentage: 98 },
      { name: "Strong leader", percentage: 29 }
    ]
  },
  "The Coach": {
    type: "The Coach",
    description: "🌟 The Coach (ENFJ) – \"I lift others up and help them grow.\" You love encouraging others. You're great at speaking and leading groups.",
    careers: [
      {
        title: "High School Teacher",
        description: "Educate and mentor students in academic subjects",
        averageSalary: "$45,000 - $70,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=high+school+teacher"
      },
      {
        title: "Training and Development Specialist",
        description: "Design and deliver employee training programs",
        averageSalary: "$55,000 - $85,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=training+development+specialist"
      },
      {
        title: "School Counselor",
        description: "Provide academic and emotional support to students",
        averageSalary: "$45,000 - $70,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=school+counselor"
      },
      {
        title: "Corporate Trainer",
        description: "Develop and deliver training programs for employees",
        averageSalary: "$50,000 - $80,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=corporate+trainer"
      },
      {
        title: "Youth Program Coordinator",
        description: "Organize and oversee programs for young people",
        averageSalary: "$35,000 - $55,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=youth+program+coordinator"
      }
    ],
    colleges: [
      {
        name: "Teachers College, Columbia University",
        location: "New York, NY",
        programs: ["Education", "Psychology", "Human Development"],
        ranking: "#1 in Education",
        website: "https://www.tc.columbia.edu/",
        phone: "(212) 678-3710",
        email: "admission@tc.columbia.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "Harvard Graduate School of Education",
        location: "Cambridge, MA",
        programs: ["Education Policy", "Human Development", "Teaching"],
        ranking: "#2 in Education",
        website: "https://www.gse.harvard.edu/",
        phone: "(617) 495-3414",
        email: "admissions@gse.harvard.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "University of California, Los Angeles",
        location: "Los Angeles, CA",
        programs: ["Education", "Psychology", "Social Welfare"],
        ranking: "#20 overall",
        website: "https://www.ucla.edu/",
        phone: "(310) 825-3101",
        email: "ugadm@saonet.ucla.edu",
        regionalCounselors: ["Emily Gray", "Jonah Magill", "Zion Smith", "Melissa Rodriguez", "Lucas Demetriades", "Andres Diaz"]
      }
    ],
    celebrities: [
      { name: "Selena Gomez", emoji: "❤️", description: "Kind leader" },
      { name: "Jack Wright", emoji: "☀️", description: "Positive presence" },
      { name: "Joey King", emoji: "🎬", description: "Supportive performer" },
      { name: "Caleb McLaughlin", emoji: "🏀", description: "Motivational energy" },
      { name: "Coco Gauff", emoji: "🎾", description: "Young leader in sports" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 88 },
      { name: "Judgmental", percentage: 22 },
      { name: "Outgoing", percentage: 85 },
      { name: "Artistic", percentage: 64 },
      { name: "Strong leader", percentage: 92 }
    ]
  },
  "The Free Spirit": {
    type: "The Free Spirit",
    description: "🎉 The Free Spirit (ENFP) – \"I want to explore everything and inspire others.\" You love adventures, people, and stories. You're great at being enthusiastic and creative.",
    careers: [
      {
        title: "Content Creator",
        description: "Create engaging content for social media and digital platforms",
        averageSalary: "$40,000 - $80,000",
        jobGrowth: "14% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=content+creator"
      },
      {
        title: "Travel Blogger",
        description: "Create travel content and build audience through storytelling",
        averageSalary: "$35,000 - $75,000",
        jobGrowth: "Variable",
        indeedLink: "https://www.indeed.com/jobs?q=travel+blogger"
      },
      {
        title: "Video Content Creator",
        description: "Produce engaging video content for various platforms",
        averageSalary: "$40,000 - $80,000",
        jobGrowth: "14% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=video+content+creator"
      },
      {
        title: "Public Relations Specialist",
        description: "Manage public image and communications for organizations",
        averageSalary: "$45,000 - $75,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=public+relations+specialist"
      },
      {
        title: "Marketing Coordinator",
        description: "Support marketing campaigns and promotional activities",
        averageSalary: "$40,000 - $65,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=marketing+coordinator"
      }
    ],
    colleges: [
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        programs: ["Film & Media", "Communications", "Journalism"],
        ranking: "#27 overall",
        website: "https://www.usc.edu/",
        phone: "(213) 740-1111",
        email: "askUSC (portal)",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "New York University",
        location: "New York, NY",
        programs: ["Media Studies", "Film", "Creative Writing"],
        ranking: "#30 overall",
        website: "https://www.nyu.edu/",
        phone: "(212) 998-4500",
        email: "admissions@nyu.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "University of California, Berkeley",
        location: "Berkeley, CA",
        programs: ["Media Studies", "English", "Anthropology"],
        ranking: "#22 overall",
        website: "https://www.berkeley.edu/",
        phone: "(510) 642-3175",
        email: "berkeleyinfo@berkeley.edu",
        regionalCounselors: ["Handled by department emails"]
      }
    ],
    celebrities: [
      { name: "Jenna Ortega", emoji: "🕸️", description: "Quirky and bold" },
      { name: "Doja Cat", emoji: "🎭", description: "Surreal and fearless" },
      { name: "Bella Poarch", emoji: "🎶", description: "Visual storyteller" },
      { name: "Jaden Hossler", emoji: "🖤", description: "Emo-energy free thinker" },
      { name: "Avani Gregg", emoji: "💄", description: "Creative and expressive" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 82 },
      { name: "Judgmental", percentage: 15 },
      { name: "Outgoing", percentage: 94 },
      { name: "Artistic", percentage: 89 },
      { name: "Strong leader", percentage: 58 }
    ]
  },
  "The Organizer": {
    type: "The Organizer",
    description: "📋 The Organizer (ISTJ) – \"I follow the rules and stay on track.\" You love order and getting things done. You're great at schedules and remembering details.",
    careers: [
      {
        title: "Project Coordinator",
        description: "Organize and track project timelines and deliverables",
        averageSalary: "$50,000 - $75,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=project+coordinator"
      },
      {
        title: "Financial Analyst",
        description: "Analyze financial data and create detailed reports",
        averageSalary: "$65,000 - $100,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=financial+analyst"
      },
      {
        title: "Quality Assurance Manager",
        description: "Ensure products and services meet established standards",
        averageSalary: "$60,000 - $95,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=quality+assurance+manager"
      },
      {
        title: "Database Administrator",
        description: "Manage and maintain database systems for organizations",
        averageSalary: "$70,000 - $110,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=database+administrator"
      },
      {
        title: "Budget Analyst",
        description: "Review budget proposals and monitor organizational spending",
        averageSalary: "$55,000 - $85,000",
        jobGrowth: "3% (as fast as average)",
        indeedLink: "https://www.indeed.com/jobs?q=budget+analyst"
      }
    ],
    colleges: [
      {
        name: "University of Pennsylvania",
        location: "Philadelphia, PA",
        programs: ["Business", "Accounting", "Finance"],
        ranking: "#8 overall",
        website: "https://www.upenn.edu/",
        phone: "(215) 898-7507",
        email: "info@admissions.ugao.upenn.edu",
        regionalCounselors: ["Eric Furda (Dean)", "northeastteam@admissions.upenn.edu"]
      },
      {
        name: "University of Michigan",
        location: "Ann Arbor, MI",
        programs: ["Business", "Engineering", "Information"],
        ranking: "#21 overall",
        website: "https://umich.edu/",
        phone: "734-764-7433",
        email: "admissions.umich.edu (via contact form)",
        regionalCounselors: ["Miguel Alvarez", "Keith Gehres"]
      },
      {
        name: "University of Virginia",
        location: "Charlottesville, VA",
        programs: ["Business", "Commerce", "Engineering"],
        ranking: "#24 overall",
        website: "https://www.virginia.edu/",
        phone: "434-982-3200",
        email: "undergradadmission@virginia.edu",
        regionalCounselors: ["General admissions advisors"]
      }
    ],
    celebrities: [
      { name: "JoJo Siwa", emoji: "🎀", description: "Routine and work ethic" },
      { name: "Joshua Rush", emoji: "🗂️", description: "Disciplined and serious" },
      { name: "Marcus Scribner", emoji: "📊", description: "Detail-oriented" },
      { name: "Maitreyi Ramakrishnan", emoji: "📝", description: "Organized actor" },
      { name: "Skai Jackson", emoji: "🧹", description: "Polished and tidy" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 76 },
      { name: "Judgmental", percentage: 52 },
      { name: "Outgoing", percentage: 41 },
      { name: "Artistic", percentage: 33 },
      { name: "Strong leader", percentage: 79 }
    ]
  },
  "The Helper": {
    type: "The Helper",
    description: "🧸 The Helper (ISFJ) – \"I take care of people and make them feel safe.\" You love loyalty and kindness. You're great at empathy and support.",
    careers: [
      {
        title: "Registered Nurse",
        description: "Provide patient care and support in healthcare settings",
        averageSalary: "$60,000 - $85,000",
        jobGrowth: "6% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=registered+nurse"
      },
      {
        title: "Elementary School Teacher",
        description: "Teach and nurture young students in their early education",
        averageSalary: "$40,000 - $65,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=elementary+school+teacher"
      },
      {
        title: "Medical Assistant",
        description: "Support healthcare professionals in clinical settings",
        averageSalary: "$30,000 - $45,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=medical+assistant"
      },
      {
        title: "Child Care Worker",
        description: "Care for and supervise children in various settings",
        averageSalary: "$25,000 - $35,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=child+care+worker"
      },
      {
        title: "Administrative Assistant",
        description: "Provide administrative support to keep offices running smoothly",
        averageSalary: "$30,000 - $50,000",
        jobGrowth: "-7% (declining)",
        indeedLink: "https://www.indeed.com/jobs?q=administrative+assistant"
      }
    ],
    colleges: [
      {
        name: "Johns Hopkins University",
        location: "Baltimore, MD",
        programs: ["Nursing", "Public Health", "Education"],
        ranking: "#9 overall",
        website: "https://www.jhu.edu/",
        phone: "(410) 516-8171",
        email: "gotojhu@jhu.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "University of Pennsylvania",
        location: "Philadelphia, PA",
        programs: ["Nursing", "Education", "Social Work"],
        ranking: "#8 overall",
        website: "https://www.upenn.edu/",
        phone: "(215) 898-7507",
        email: "info@admissions.ugao.upenn.edu",
        regionalCounselors: ["Eric Furda (Dean)", "northeastteam@admissions.upenn.edu"]
      },
      {
        name: "Vanderbilt University",
        location: "Nashville, TN",
        programs: ["Nursing", "Education", "Human Development"],
        ranking: "#13 overall",
        website: "https://www.vanderbilt.edu/",
        phone: "(615) 322-2561",
        email: "admissions@vanderbilt.edu",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "Elle Fanning", emoji: "🧸", description: "Gentle and kind" },
      { name: "Niall Horan", emoji: "🫂", description: "Loyal and warm" },
      { name: "Lizzy Greene", emoji: "👩‍⚕️", description: "Soft-spoken and nurturing" },
      { name: "Asher Angel", emoji: "🐶", description: "Loving and wholesome" },
      { name: "Sadie Sink", emoji: "🎀", description: "Compassionate energy" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 96 },
      { name: "Judgmental", percentage: 18 },
      { name: "Outgoing", percentage: 47 },
      { name: "Artistic", percentage: 55 },
      { name: "Strong leader", percentage: 34 }
    ]
  },
  "The Manager": {
    type: "The Manager",
    description: "👔 The Manager (ESTJ) – \"I like being in charge and fixing problems.\" You love responsibility and organizing. You're great at managing events and making decisions.",
    careers: [
      {
        title: "Operations Manager",
        description: "Oversee daily business operations and team management",
        averageSalary: "$70,000 - $115,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=operations+manager"
      },
      {
        title: "Business Analyst",
        description: "Analyze business processes and recommend improvements",
        averageSalary: "$70,000 - $110,000",
        jobGrowth: "14% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=business+analyst"
      },
      {
        title: "Supply Chain Manager",
        description: "Oversee and optimize supply chain operations",
        averageSalary: "$75,000 - $120,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=supply+chain+manager"
      },
      {
        title: "Project Manager",
        description: "Plan, execute, and oversee projects from start to finish",
        averageSalary: "$70,000 - $115,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=project+manager"
      },
      {
        title: "Compliance Officer",
        description: "Ensure organizations follow laws and regulations",
        averageSalary: "$60,000 - $95,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=compliance+officer"
      }
    ],
    colleges: [
      {
        name: "University of Pennsylvania (Wharton)",
        location: "Philadelphia, PA",
        programs: ["Business Administration", "Management", "Operations"],
        ranking: "#1 in Business",
        website: "https://www.wharton.upenn.edu/",
        phone: "(215) 898-7507",
        email: "info@admissions.ugao.upenn.edu",
        regionalCounselors: ["Juan Román", "Betsy Barba", "Theodore Ny"]
      },
      {
        name: "Northwestern University (Kellogg)",
        location: "Evanston, IL",
        programs: ["Business", "Management", "Operations"],
        ranking: "#3 in Business",
        website: "https://www.northwestern.edu/",
        phone: "(847) 491-3300",
        email: "kellogg-ug@northwestern.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "University of Chicago (Booth)",
        location: "Chicago, IL",
        programs: ["Business", "Economics", "Management"],
        ranking: "#6 overall",
        website: "https://www.uchicago.edu/",
        phone: "(773) 702-7743",
        email: "admissions@chicagobooth.edu",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "Dixie D'Amelio", emoji: "📅", description: "Structured personality" },
      { name: "Peyton Elizabeth Lee", emoji: "🎓", description: "High-achiever" },
      { name: "Noah Beck", emoji: "💼", description: "Ambitious & brand-savvy" },
      { name: "Sofia Wylie", emoji: "🎤", description: "Driven and polished" },
      { name: "Gavin Casalegno", emoji: "📈", description: "Professional presence" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 68 },
      { name: "Judgmental", percentage: 71 },
      { name: "Outgoing", percentage: 76 },
      { name: "Artistic", percentage: 42 },
      { name: "Strong leader", percentage: 93 }
    ]
  },
  "The Host": {
    type: "The Host",
    description: "🎀 The Host (ESFJ) – \"I bring people together and keep things running.\" You love helping and being around people. You're great at hospitality and remembering birthdays.",
    careers: [
      {
        title: "Event Planner",
        description: "Organize and coordinate special events and celebrations",
        averageSalary: "$45,000 - $75,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=event+planner"
      },
      {
        title: "Human Resources Coordinator",
        description: "Support employee relations and workplace culture",
        averageSalary: "$45,000 - $70,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=human+resources+coordinator"
      },
      {
        title: "Wedding Planner",
        description: "Coordinate and plan wedding ceremonies and receptions",
        averageSalary: "$40,000 - $70,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=wedding+planner"
      },
      {
        title: "Customer Success Manager",
        description: "Ensure customer satisfaction and retention",
        averageSalary: "$55,000 - $85,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=customer+success+manager"
      },
      {
        title: "Community Relations Manager",
        description: "Build relationships between organizations and communities",
        averageSalary: "$50,000 - $75,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=community+relations+manager"
      }
    ],
    colleges: [
      {
        name: "Cornell University",
        location: "Ithaca, NY",
        programs: ["Hotel Administration", "Human Relations", "Communications"],
        ranking: "#17 overall",
        website: "https://www.cornell.edu/",
        phone: "General Admissions",
        email: "General Admissions",
        regionalCounselors: ["Sabrina Williams", "Elena Montoya", "Nathan Fish", "Maggie Cazares (engineering)", "Flannery Weiss (engineering)"]
      },
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        programs: ["Public Relations", "Communications", "Business"],
        ranking: "#27 overall",
        website: "https://www.usc.edu/",
        phone: "(213) 740-1111",
        email: "askUSC (portal)",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "Boston University",
        location: "Boston, MA",
        programs: ["Communications", "Hospitality", "Public Relations"],
        ranking: "#43 overall",
        website: "https://www.bu.edu/",
        phone: "(617) 353-2300",
        email: "admissions@bu.edu",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "Addison Rae", emoji: "💋", description: "Glam and outgoing" },
      { name: "Madison Beer", emoji: "🎶", description: "Charming presence" },
      { name: "Ross Lynch", emoji: "🎸", description: "Friendly & fun" },
      { name: "Peyton List", emoji: "💐", description: "Social & stylish" },
      { name: "Chloe Bailey", emoji: "🌹", description: "Bold but welcoming" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 84 },
      { name: "Judgmental", percentage: 25 },
      { name: "Outgoing", percentage: 95 },
      { name: "Artistic", percentage: 67 },
      { name: "Strong leader", percentage: 73 }
    ]
  },
  "The Fixer": {
    type: "The Fixer",
    description: "🛠️ The Fixer (ISTP) – \"I tinker, fix, and figure things out with my hands.\" You love tools and working solo. You're great at building and mechanics.",
    careers: [
      {
        title: "Automotive Technician",
        description: "Diagnose and repair vehicle mechanical issues",
        averageSalary: "$40,000 - $65,000",
        jobGrowth: "1% (stable)",
        indeedLink: "https://www.indeed.com/jobs?q=automotive+technician"
      },
      {
        title: "Drone Pilot",
        description: "Operate drones for various commercial applications",
        averageSalary: "$50,000 - $80,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=drone+pilot"
      },
      {
        title: "HVAC Technician",
        description: "Install and repair heating, ventilation, and air conditioning systems",
        averageSalary: "$45,000 - $70,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=hvac+technician"
      },
      {
        title: "Electrician",
        description: "Install and maintain electrical systems and equipment",
        averageSalary: "$50,000 - $80,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=electrician"
      },
      {
        title: "Computer Repair Technician",
        description: "Diagnose and fix computer hardware and software issues",
        averageSalary: "$35,000 - $55,000",
        jobGrowth: "5% (as fast as average)",
        indeedLink: "https://www.indeed.com/jobs?q=computer+repair+technician"
      }
    ],
    colleges: [
      {
        name: "Purdue University",
        location: "West Lafayette, IN",
        programs: ["Engineering Technology", "Aviation", "Computer Graphics"],
        ranking: "#49 overall",
        website: "https://www.purdue.edu/",
        phone: "765-494-1776",
        email: "admissions@purdue.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        programs: ["Mechanical Engineering", "Aerospace Engineering", "Industrial Design"],
        ranking: "#38 overall",
        website: "https://www.gatech.edu/",
        phone: "(404) 894-4154",
        email: "admission@gatech.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "Virginia Tech",
        location: "Blacksburg, VA",
        programs: ["Engineering", "Technology", "Construction"],
        ranking: "#75 overall",
        website: "https://www.vt.edu/",
        phone: "(540) 231-6267",
        email: "admissions@vt.edu",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "Jacob Elordi", emoji: "🛠️", description: "Quiet, technical vibe" },
      { name: "Lili Reinhart", emoji: "🌫️", description: "Calm, capable" },
      { name: "KJ Apa", emoji: "🪓", description: "Strong, action-based" },
      { name: "Sabrina Carpenter", emoji: "🛎️", description: "Versatile and practical" },
      { name: "Bryce Hall", emoji: "🪛", description: "Direct and reactive" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 71 },
      { name: "Judgmental", percentage: 38 },
      { name: "Outgoing", percentage: 29 },
      { name: "Artistic", percentage: 74 },
      { name: "Strong leader", percentage: 46 }
    ]
  },
  "The Artist": {
    type: "The Artist",
    description: "🎵 The Artist (ISFP) – \"I create beauty in quiet ways.\" You love colors, feelings, and animals. You're great at art, music, and nature.",
    careers: [
      {
        title: "Photographer",
        description: "Capture moments and create visual stories through photography",
        averageSalary: "$35,000 - $65,000",
        jobGrowth: "17% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=photographer"
      },
      {
        title: "Interior Designer",
        description: "Design functional and aesthetically pleasing interior spaces",
        averageSalary: "$50,000 - $80,000",
        jobGrowth: "5% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=interior+designer"
      },
      {
        title: "Music Therapist",
        description: "Use music to help people improve their physical and mental health",
        averageSalary: "$40,000 - $65,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=music+therapist"
      },
      {
        title: "Florist",
        description: "Create floral arrangements and manage flower shop operations",
        averageSalary: "$25,000 - $40,000",
        jobGrowth: "-20% (declining)",
        indeedLink: "https://www.indeed.com/jobs?q=florist"
      },
      {
        title: "Fashion Designer",
        description: "Create original clothing, accessories, and footwear designs",
        averageSalary: "$40,000 - $85,000",
        jobGrowth: "0% (stable)",
        indeedLink: "https://www.indeed.com/jobs?q=fashion+designer"
      }
    ],
    colleges: [
      {
        name: "Art Center College of Design",
        location: "Pasadena, CA",
        programs: ["Photography", "Fine Arts", "Illustration"],
        ranking: "Top Art School",
        website: "https://www.artcenter.edu/",
        phone: "626-396-2200",
        email: "General Admissions",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "Rhode Island School of Design",
        location: "Providence, RI",
        programs: ["Photography", "Interior Architecture", "Fine Arts"],
        ranking: "#1 in Art & Design",
        website: "https://www.risd.edu/",
        phone: "401-454-6300",
        email: "admissions@risd.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "Savannah College of Art and Design",
        location: "Savannah, GA",
        programs: ["Photography", "Interior Design", "Fine Arts"],
        ranking: "Top Creative School",
        website: "https://www.scad.edu/",
        phone: "912-525-5100",
        email: "General Admissions",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "Tate McRae", emoji: "🎤", description: "Emotive performer" },
      { name: "Olivia Rodrigo", emoji: "🎼", description: "Soft, emotional artistry" },
      { name: "Lil Huddy", emoji: "🖋️", description: "Aesthetic-driven" },
      { name: "Beabadoobee", emoji: "🌸", description: "Alt-indie, dreamy style" },
      { name: "King Princess", emoji: "🌈", description: "Bold and expressive" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 79 },
      { name: "Judgmental", percentage: 31 },
      { name: "Outgoing", percentage: 52 },
      { name: "Artistic", percentage: 93 },
      { name: "Strong leader", percentage: 41 }
    ]
  },
  "The Adventurer": {
    type: "The Adventurer",
    description: "🔥 The Adventurer (ESTP) – \"I like action and excitement.\" You love thrills and movement. You're great at sports and selling.",
    careers: [
      {
        title: "Personal Trainer",
        description: "Help clients achieve fitness goals through exercise programs",
        averageSalary: "$35,000 - $60,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=personal+trainer"
      },
      {
        title: "Emergency Medical Technician",
        description: "Provide emergency medical care and transportation",
        averageSalary: "$35,000 - $50,000",
        jobGrowth: "11% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=emergency+medical+technician"
      },
      {
        title: "Firefighter",
        description: "Respond to emergency situations and fire incidents",
        averageSalary: "$45,000 - $75,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=firefighter"
      },
      {
        title: "Sales Representative",
        description: "Sell products or services to businesses and consumers",
        averageSalary: "$40,000 - $70,000",
        jobGrowth: "4% (as fast as average)",
        indeedLink: "https://www.indeed.com/jobs?q=sales+representative"
      },
      {
        title: "Real Estate Agent",
        description: "Help clients buy, sell, and rent properties",
        averageSalary: "$40,000 - $100,000+",
        jobGrowth: "5% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=real+estate+agent"
      }
    ],
    colleges: [
      {
        name: "University of Florida",
        location: "Gainesville, FL",
        programs: ["Exercise Science", "Sports Management", "Emergency Management"],
        ranking: "#28 overall",
        website: "https://www.ufl.edu/",
        phone: "(352) 392-1365",
        email: "freshman@ufl.edu",
        regionalCounselors: ["Grayson Shultz (New England)", "Steve Milley (Richmond area)"]
      },
      {
        name: "Arizona State University",
        location: "Tempe, AZ",
        programs: ["Exercise Science", "Kinesiology", "Emergency Management"],
        ranking: "#103 overall",
        website: "https://www.asu.edu/",
        phone: "480-965-7788",
        email: "enrollmentonline@asu.edu",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "Penn State University",
        location: "University Park, PA",
        programs: ["Kinesiology", "Recreation & Sports Management", "Health Sciences"],
        ranking: "#63 overall",
        website: "https://www.psu.edu/",
        phone: "1-814-865-5471",
        email: "admissions@psu.edu",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "JoJo Siwa", emoji: "🚀", description: "Go-getter energy" },
      { name: "Chloe Kim", emoji: "🏂", description: "Olympic-level courage" },
      { name: "Jake Paul", emoji: "🥊", description: "Controversial but bold" },
      { name: "Millie Bobby Brown", emoji: "🐉", description: "Multi-talented adventurer" },
      { name: "Logan Paul", emoji: "🎥", description: "Risk-taking content creator" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 62 },
      { name: "Judgmental", percentage: 43 },
      { name: "Outgoing", percentage: 97 },
      { name: "Artistic", percentage: 56 },
      { name: "Strong leader", percentage: 78 }
    ]
  },
  "The Performer": {
    type: "The Performer",
    description: "💃 The Performer (ESFP) – \"I love to shine and have fun with others.\" You love parties, attention, and making people smile. You're great at performing and entertaining.",
    careers: [
      {
        title: "Social Media Influencer",
        description: "Create entertaining content and build online audiences",
        averageSalary: "$30,000 - $100,000+",
        jobGrowth: "Variable",
        indeedLink: "https://www.indeed.com/jobs?q=social+media+influencer"
      },
      {
        title: "Dance Instructor",
        description: "Teach dance techniques and choreography to students",
        averageSalary: "$30,000 - $55,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=dance+instructor"
      },
      {
        title: "Radio DJ",
        description: "Host radio shows and entertain audiences with music and talk",
        averageSalary: "$25,000 - $60,000",
        jobGrowth: "-12% (declining)",
        indeedLink: "https://www.indeed.com/jobs?q=radio+dj"
      },
      {
        title: "Actor/Actress",
        description: "Perform in theater, film, television, and other media",
        averageSalary: "$20,000 - $100,000+",
        jobGrowth: "32% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=actor+actress"
      },
      {
        title: "Event Host/MC",
        description: "Lead and entertain audiences at various events and functions",
        averageSalary: "$30,000 - $65,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=event+host+mc"
      }
    ],
    colleges: [
      {
        name: "Juilliard School",
        location: "New York, NY",
        programs: ["Dance", "Drama", "Music"],
        ranking: "Top Performing Arts School",
        website: "https://www.juilliard.edu/",
        phone: "212-799-5000",
        email: "General Admissions",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        programs: ["Theatre", "Dance", "Cinematic Arts"],
        ranking: "#27 overall",
        website: "https://www.usc.edu/",
        phone: "(213) 740-1111",
        email: "askUSC (portal)",
        regionalCounselors: ["General Admissions Staff"]
      },
      {
        name: "New York University (Tisch)",
        location: "New York, NY",
        programs: ["Drama", "Dance", "Film & TV"],
        ranking: "#30 overall",
        website: "https://www.nyu.edu/",
        phone: "(212) 998-1900",
        email: "tisch.ug.admissions@nyu.edu",
        regionalCounselors: ["General Admissions Staff"]
      }
    ],
    celebrities: [
      { name: "Megan Thee Stallion", emoji: "🔥", description: "Bold and confident" },
      { name: "IShowSpeed", emoji: "📣", description: "Loud and viral" },
      { name: "Cardi B", emoji: "💃", description: "Unapologetic star power" },
      { name: "Lil Nas X", emoji: "🌈", description: "Show-stopping performer" },
      { name: "Sabrina Carpenter", emoji: "✨", description: "Spotlight-ready" }
    ],
    entryLevelCareers: [],
    advancedCareers: [],
    traits: [
      { name: "Good listener", percentage: 74 },
      { name: "Judgmental", percentage: 36 },
      { name: "Outgoing", percentage: 98 },
      { name: "Artistic", percentage: 81 },
      { name: "Strong leader", percentage: 69 }
    ]
  }
};