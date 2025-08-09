import { Question, PersonalityResult, PersonalityType } from '@/types/quiz';

export const questions: Question[] = [
  {
    text: "When the teacher assigns a group project, I secretly hope I can do it all myself.",
    options: {
      A: { text: "Strongly Agree", traits: ["I"] },
      B: { text: "Agree", traits: ["I"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["E"] },
      E: { text: "Strongly Disagree", traits: ["E"] }
    }
  },
  {
    text: "I often get caught daydreaming about what my life could look like in 10 years.",
    options: {
      A: { text: "Strongly Agree", traits: ["N"] },
      B: { text: "Agree", traits: ["N"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["S"] },
      E: { text: "Strongly Disagree", traits: ["S"] }
    }
  },
  {
    text: "If someone asks for my opinion, I usually give the most practical or logical answer.",
    options: {
      A: { text: "Strongly Agree", traits: ["T"] },
      B: { text: "Agree", traits: ["T"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["F"] },
      E: { text: "Strongly Disagree", traits: ["F"] }
    }
  },
  {
    text: "I like having my schedule figured out before the day starts.",
    options: {
      A: { text: "Strongly Agree", traits: ["J"] },
      B: { text: "Agree", traits: ["J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["P"] },
      E: { text: "Strongly Disagree", traits: ["P"] }
    }
  },
  {
    text: "I get a boost of energy from hanging out with a group of people after school.",
    options: {
      A: { text: "Strongly Agree", traits: ["E"] },
      B: { text: "Agree", traits: ["E"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["I"] },
      E: { text: "Strongly Disagree", traits: ["I"] }
    }
  },
  {
    text: "When solving a problem, I look for real-world facts instead of hunches or feelings.",
    options: {
      A: { text: "Strongly Agree", traits: ["S"] },
      B: { text: "Agree", traits: ["S"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["N"] },
      E: { text: "Strongly Disagree", traits: ["N"] }
    }
  },
  {
    text: "I often think about how my decisions affect the people around me.",
    options: {
      A: { text: "Strongly Agree", traits: ["F"] },
      B: { text: "Agree", traits: ["F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["T"] },
      E: { text: "Strongly Disagree", traits: ["T"] }
    }
  },
  {
    text: "I feel overwhelmed when someone tries to pin me to a strict plan.",
    options: {
      A: { text: "Strongly Agree", traits: ["P"] },
      B: { text: "Agree", traits: ["P"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["J"] },
      E: { text: "Strongly Disagree", traits: ["J"] }
    }
  },
  {
    text: "At lunch, I'd rather sit with one close friend than a big group.",
    options: {
      A: { text: "Strongly Agree", traits: ["I"] },
      B: { text: "Agree", traits: ["I"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["E"] },
      E: { text: "Strongly Disagree", traits: ["E"] }
    }
  },
  {
    text: "I enjoy figuring out how to fix broken tech or gadgets.",
    options: {
      A: { text: "Strongly Agree", traits: ["T"] },
      B: { text: "Agree", traits: ["T"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["F"] },
      E: { text: "Strongly Disagree", traits: ["F"] }
    }
  },
  {
    text: "I feel most comfortable when I stick to the same morning routine every day.",
    options: {
      A: { text: "Strongly Agree", traits: ["J"] },
      B: { text: "Agree", traits: ["J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["P"] },
      E: { text: "Strongly Disagree", traits: ["P"] }
    }
  },
  {
    text: "I'd rather invent my own way to do an assignment than follow the instructions exactly.",
    options: {
      A: { text: "Strongly Agree", traits: ["N"] },
      B: { text: "Agree", traits: ["N"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["S"] },
      E: { text: "Strongly Disagree", traits: ["S"] }
    }
  },
  {
    text: "When someone's upset, I feel the urge to comfort or help them.",
    options: {
      A: { text: "Strongly Agree", traits: ["F"] },
      B: { text: "Agree", traits: ["F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["T"] },
      E: { text: "Strongly Disagree", traits: ["T"] }
    }
  },
  {
    text: "If no one takes the lead in a group, I'll usually step up and organize things.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "J"] },
      B: { text: "Agree", traits: ["E", "J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["I", "P"] },
      E: { text: "Strongly Disagree", traits: ["I", "P"] }
    }
  },
  {
    text: "I'd rather talk about things that are real and current than imaginary or 'what if' stuff.",
    options: {
      A: { text: "Strongly Agree", traits: ["S"] },
      B: { text: "Agree", traits: ["S"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["N"] },
      E: { text: "Strongly Disagree", traits: ["N"] }
    }
  },
  {
    text: "I get stressed when plans change last minute.",
    options: {
      A: { text: "Strongly Agree", traits: ["J"] },
      B: { text: "Agree", traits: ["J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["P"] },
      E: { text: "Strongly Disagree", traits: ["P"] }
    }
  },
  {
    text: "I get bored if every day feels the same.",
    options: {
      A: { text: "Strongly Agree", traits: ["P"] },
      B: { text: "Agree", traits: ["P"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["J"] },
      E: { text: "Strongly Disagree", traits: ["J"] }
    }
  },
  {
    text: "I enjoy writing goals for myself and imagining what I'll do next.",
    options: {
      A: { text: "Strongly Agree", traits: ["N"] },
      B: { text: "Agree", traits: ["N"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["S"] },
      E: { text: "Strongly Disagree", traits: ["S"] }
    }
  },
  {
    text: "I like breaking tasks into steps instead of jumping in randomly.",
    options: {
      A: { text: "Strongly Agree", traits: ["J"] },
      B: { text: "Agree", traits: ["J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["P"] },
      E: { text: "Strongly Disagree", traits: ["P"] }
    }
  },
  {
    text: "When I need to choose something, I often trust my gut feeling.",
    options: {
      A: { text: "Strongly Agree", traits: ["F"] },
      B: { text: "Agree", traits: ["F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["T"] },
      E: { text: "Strongly Disagree", traits: ["T"] }
    }
  },
  {
    text: "I'm the kind of person who color-codes notes and keeps things organized.",
    options: {
      A: { text: "Strongly Agree", traits: ["J"] },
      B: { text: "Agree", traits: ["J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["P"] },
      E: { text: "Strongly Disagree", traits: ["P"] }
    }
  },
  {
    text: "I come alive when I'm doing something artistic, like writing, drawing, or creating.",
    options: {
      A: { text: "Strongly Agree", traits: ["N", "F"] },
      B: { text: "Agree", traits: ["N", "F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["S", "T"] },
      E: { text: "Strongly Disagree", traits: ["S", "T"] }
    }
  },
  {
    text: "When a friend is hurting, I want to help them feel better even if I don't know how.",
    options: {
      A: { text: "Strongly Agree", traits: ["F"] },
      B: { text: "Agree", traits: ["F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["T"] },
      E: { text: "Strongly Disagree", traits: ["T"] }
    }
  },
  {
    text: "If a group gets off track, I usually try to get everyone back on task.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "J"] },
      B: { text: "Agree", traits: ["E", "J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["I", "P"] },
      E: { text: "Strongly Disagree", traits: ["I", "P"] }
    }
  },
  {
    text: "I notice little details that other people often miss.",
    options: {
      A: { text: "Strongly Agree", traits: ["S"] },
      B: { text: "Agree", traits: ["S"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["N"] },
      E: { text: "Strongly Disagree", traits: ["N"] }
    }
  },
  {
    text: "If there's a chance to perform or be in the spotlight, I'll probably say yes.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "N"] },
      B: { text: "Agree", traits: ["E", "N"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["I", "S"] },
      E: { text: "Strongly Disagree", traits: ["I", "S"] }
    }
  },
  {
    text: "Sometimes I imagine entire stories or scenes in my head just for fun.",
    options: {
      A: { text: "Strongly Agree", traits: ["N"] },
      B: { text: "Agree", traits: ["N"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["S"] },
      E: { text: "Strongly Disagree", traits: ["S"] }
    }
  },
  {
    text: "I like giving advice when friends ask about relationships or decisions.",
    options: {
      A: { text: "Strongly Agree", traits: ["F"] },
      B: { text: "Agree", traits: ["F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["T"] },
      E: { text: "Strongly Disagree", traits: ["T"] }
    }
  },
  {
    text: "When doing schoolwork, I focus more on what's due now than long-term deadlines.",
    options: {
      A: { text: "Strongly Agree", traits: ["S"] },
      B: { text: "Agree", traits: ["S"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["N"] },
      E: { text: "Strongly Disagree", traits: ["N"] }
    }
  },
  {
    text: "I like hands-on work—like building, designing, or fixing things.",
    options: {
      A: { text: "Strongly Agree", traits: ["S", "T"] },
      B: { text: "Agree", traits: ["S", "T"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["N", "F"] },
      E: { text: "Strongly Disagree", traits: ["N", "F"] }
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
      if (traitCounts.hasOwnProperty(trait)) {
        traitCounts[trait as keyof typeof traitCounts]++;
      }
    }
  }

  console.log('Trait counts:', traitCounts);

  const mbtiCode = [
    traitCounts.E > traitCounts.I ? 'E' : 'I',
    traitCounts.S > traitCounts.N ? 'S' : 'N',
    traitCounts.T > traitCounts.F ? 'T' : 'F',
    traitCounts.J > traitCounts.P ? 'J' : 'P'
  ].join('');

  console.log('MBTI Code:', mbtiCode);

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

  const result = mbtiToPersonality[mbtiCode] || 'The Strategist';
  console.log('Final personality result:', result);
  
  return result;
}

export const personalityResults: Record<string, PersonalityResult> = {
  "The Strategist": {
    type: "The Strategist",
    description: "🧠 The Strategist (INTJ) – \"Visionary • Independent • Analytical\" You love strategic thinking and long-term planning.",
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
        title: "Data Analyst",
        description: "Analyze data to help organizations make strategic decisions and identify patterns",
        averageSalary: "$45,000 - $65,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=data+analyst"
      },
      {
        title: "Junior Systems Analyst",
        description: "Study and improve computer systems to help organizations operate more efficiently",
        averageSalary: "$48,000 - $68,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=junior+systems+analyst"
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
        description: "Lead technology strategy and innovation for the entire organization",
        averageSalary: "$150,000 - $300,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+technology+officer"
      },
      {
        title: "Principal Data Scientist",
        description: "Lead data science initiatives and develop advanced analytics strategies",
        averageSalary: "$140,000 - $220,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=principal+data+scientist"
      }
    ],
    colleges: [
      // Tier 1: MIT, Stanford, Princeton
      {
        name: "Massachusetts Institute of Technology",
        location: "Cambridge, MA",
        programs: ["Computer Science", "Engineering", "Mathematics"],
        ranking: "#2 overall",
        website: "https://www.mit.edu/",
        whyGoodFit: "Perfect for Strategists who love systematic thinking and long-term planning. MIT's rigorous analytical environment and cutting-edge research opportunities align with the INTJ personality.",
        relevantMajors: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Architecture", "Systems Engineering"],
        tuition: "$59,750/year",
        acceptanceRate: "3.96%",
        averageGPA: "3.95",
        testScores: "SAT: 1520-1580, ACT: 35-36",
        applicationDeadline: "January 1",
        studentFacultyRatio: "3:1",
        classSize: "12 students",
        studentPopulation: "4,638 undergraduates"
      },
      {
        name: "Stanford University",
        location: "Stanford, CA",
        programs: ["Computer Science", "Engineering", "Applied Physics"],
        ranking: "#6 overall",
        website: "https://www.stanford.edu/",
        whyGoodFit: "Ideal for Strategists who want to combine technical excellence with entrepreneurial thinking. Stanford's innovation ecosystem matches the INTJ's strategic mindset.",
        relevantMajors: ["Computer Science", "Engineering", "Mathematical & Computational Science", "Management Science & Engineering"],
        tuition: "$61,731/year",
        acceptanceRate: "3.68%",
        averageGPA: "3.96",
        testScores: "SAT: 1500-1570, ACT: 33-35",
        applicationDeadline: "January 5",
        studentFacultyRatio: "5:1",
        classSize: "18 students",
        studentPopulation: "7,087 undergraduates"
      },
      {
        name: "Princeton University",
        location: "Princeton, NJ",
        programs: ["Computer Science", "Engineering", "Applied Mathematics"],
        ranking: "#1 overall",
        website: "https://www.princeton.edu/",
        whyGoodFit: "Perfect for Strategists who thrive in intellectually rigorous environments. Princeton's emphasis on undergraduate research aligns with INTJ preferences.",
        relevantMajors: ["Computer Science", "Operations Research & Financial Engineering", "Applied Mathematics", "Electrical Engineering"],
        tuition: "$59,710/year",
        acceptanceRate: "5.77%",
        averageGPA: "3.97",
        testScores: "SAT: 1500-1580, ACT: 34-36",
        applicationDeadline: "January 1",
        studentFacultyRatio: "5:1",
        classSize: "16 students",
        studentPopulation: "5,321 undergraduates"
      },
      // Tier 2: UChicago, Columbia, Johns Hopkins
      {
        name: "University of Chicago",
        location: "Chicago, IL",
        programs: ["Computer Science", "Economics", "Mathematics"],
        ranking: "#6 overall",
        website: "https://www.uchicago.edu/",
        whyGoodFit: "Ideal for Strategists who thrive on intellectual rigor and analytical thinking. UChicago's emphasis on critical inquiry matches the INTJ's strategic planning.",
        relevantMajors: ["Computer Science", "Economics", "Statistics", "Applied Mathematics", "Data Science"],
        tuition: "$64,965/year",
        acceptanceRate: "7.25%",
        averageGPA: "3.85-3.90",
        testScores: "SAT: 1520-1580, ACT: 34-36",
        applicationDeadline: "January 2",
        studentFacultyRatio: "5:1",
        classSize: "18 students",
        studentPopulation: "7,526 undergraduates"
      },
      {
        name: "Columbia University",
        location: "New York, NY",
        programs: ["Computer Science", "Engineering", "Applied Mathematics"],
        ranking: "#12 overall",
        website: "https://www.columbia.edu/",
        whyGoodFit: "Excellent for Strategists who want to combine technical expertise with real-world impact. Columbia's NYC location and research opportunities provide perfect environment for strategic innovation.",
        relevantMajors: ["Computer Science", "Industrial Engineering & Operations Research", "Applied Mathematics", "Financial Engineering"],
        tuition: "$65,524/year",
        acceptanceRate: "3.73%",
        averageGPA: "3.90",
        testScores: "SAT: 1510-1570, ACT: 34-36",
        applicationDeadline: "January 1",
        studentFacultyRatio: "6:1",
        classSize: "20 students",
        studentPopulation: "8,148 undergraduates"
      },
      {
        name: "Johns Hopkins University",
        location: "Baltimore, MD",
        programs: ["Computer Science", "Engineering", "Applied Mathematics"],
        ranking: "#9 overall",
        website: "https://www.jhu.edu/",
        whyGoodFit: "Perfect for Strategists interested in research and innovation. JHU's world-class research opportunities align with the INTJ's analytical and strategic nature.",
        relevantMajors: ["Computer Science", "Applied Mathematics & Statistics", "Electrical Engineering", "Biomedical Engineering"],
        tuition: "$63,340/year",
        acceptanceRate: "7.5%",
        averageGPA: "3.74",
        testScores: "SAT: 1520-1570, ACT: 34-36",
        applicationDeadline: "January 3",
        studentFacultyRatio: "7:1",
        classSize: "19 students",
        studentPopulation: "6,064 undergraduates"
      },
      // Tier 3: Carnegie Mellon, UC Berkeley, Rice
      {
        name: "Carnegie Mellon University",
        location: "Pittsburgh, PA",
        programs: ["Computer Science", "Information Systems", "Robotics"],
        ranking: "#25 overall",
        website: "https://www.cmu.edu/",
        whyGoodFit: "Perfect for Strategists who love the intersection of technology and human behavior. CMU's data-driven approach aligns with the INTJ's analytical nature.",
        relevantMajors: ["Computer Science", "Information Systems", "Robotics", "Human-Computer Interaction", "Electrical & Computer Engineering"],
        averageGPA: "3.69"
      },
      {
        name: "University of California, Berkeley",
        location: "Berkeley, CA",
        programs: ["Computer Science", "Engineering", "Data Science"],
        ranking: "#20 overall",
        website: "https://www.berkeley.edu/",
        whyGoodFit: "Excellent for Strategists who thrive in intellectually rigorous environments. UC Berkeley's world-renowned STEM programs provide perfect setting for strategic thinking.",
        relevantMajors: ["Computer Science", "Electrical Engineering & Computer Science", "Data Science", "Applied Mathematics"],
        averageGPA: "3.90"
      },
      {
        name: "Rice University",
        location: "Houston, TX",
        programs: ["Computer Science", "Engineering", "Applied Mathematics"],
        ranking: "#17 overall",
        website: "https://www.rice.edu/",
        whyGoodFit: "Excellent for Strategists who value close-knit academic communities with rigorous programs. Rice's collaborative environment provides ideal conditions for strategic development.",
        relevantMajors: ["Computer Science", "Electrical & Computer Engineering", "Applied Mathematics", "Statistics"],
        averageGPA: "3.89"
      },
      // Tier 4: Georgia Tech, UIUC, UCSD
      {
        name: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        programs: ["Engineering", "Computer Science", "Technology"],
        ranking: "#33 overall",
        website: "https://www.gatech.edu/",
        whyGoodFit: "Perfect for Strategists who want to bridge technology and business. Georgia Tech's strong engineering programs align with the INTJ's systematic approach.",
        relevantMajors: ["Computer Science", "Industrial Engineering", "Systems Engineering", "Business Administration"],
        averageGPA: "3.8-3.9"
      },
      {
        name: "University of Illinois Urbana-Champaign",
        location: "Urbana, IL",
        programs: ["Computer Science", "Engineering", "Mathematics"],
        ranking: "#41 overall",
        website: "https://www.illinois.edu/",
        whyGoodFit: "Great for Strategists who want world-class technical education. UIUC's top-ranked programs provide excellent preparation for strategic leadership.",
        relevantMajors: ["Computer Science", "Industrial Engineering", "Applied Mathematics", "Systems Engineering"],
        averageGPA: "3.8-3.9"
      },
      {
        name: "University of California, San Diego",
        location: "San Diego, CA",
        programs: ["Computer Science", "Engineering", "Data Science"],
        ranking: "#28 overall",
        website: "https://www.ucsd.edu/",
        whyGoodFit: "Excellent for Strategists interested in cutting-edge technology and research. UCSD's strong STEM programs provide ideal conditions for strategic innovation.",
        relevantMajors: ["Computer Science", "Data Science", "Electrical Engineering", "Applied Mathematics"],
        averageGPA: "3.8-3.9"
      }
    ],
    celebrities: [
      { name: "Zendaya", emoji: "👑", description: "Iconic, poised" },
      { name: "Tom Holland", emoji: "🕶️", description: "Smart but relatable hero" }
    ],
    traits: [
      { name: "Strategic Thinking", percentage: 84 },
      { name: "Independence", percentage: 78 },
      { name: "Analytical Skills", percentage: 82 },
      { name: "Long-term Planning", percentage: 86 },
      { name: "Problem Solving", percentage: 80 },
      { name: "Artistic", percentage: 45 }
    ]
  },

  "The Inventor": {
    type: "The Inventor",
    description: "🧪 The Inventor (INTP) – \"Curious • Unconventional • Logical\" You love exploring ideas and theoretical concepts.",
    careers: [
      {
        title: "Research Scientist",
        description: "Conduct research and experiments to develop new knowledge and innovations",
        averageSalary: "$70,000 - $120,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=research+scientist"
      }
    ],
    entryLevelCareers: [
      {
        title: "Research Assistant",
        description: "Support research projects and learn scientific methodology",
        averageSalary: "$35,000 - $50,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=research+assistant"
      },
      {
        title: "Junior Software Engineer",
        description: "Develop software solutions and work on innovative technology projects",
        averageSalary: "$50,000 - $70,000",
        jobGrowth: "25% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=junior+software+engineer"
      },
      {
        title: "Laboratory Technician",
        description: "Conduct experiments and tests in scientific laboratories",
        averageSalary: "$40,000 - $55,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=laboratory+technician"
      }
    ],
    advancedCareers: [
      {
        title: "Principal Research Scientist",
        description: "Lead major research initiatives and breakthrough discoveries",
        averageSalary: "$130,000 - $200,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=principal+research+scientist"
      },
      {
        title: "Research & Development Director",
        description: "Lead R&D strategy and manage innovation teams in cutting-edge research",
        averageSalary: "$140,000 - $220,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=research+development+director"
      },
      {
        title: "Chief Innovation Officer",
        description: "Drive organizational innovation and technology advancement strategies",
        averageSalary: "$160,000 - $280,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+innovation+officer"
      }
    ],
    colleges: [
      // Tier 1: Caltech, MIT, Harvard
      {
        name: "California Institute of Technology",
        location: "Pasadena, CA",
        programs: ["Physics", "Engineering", "Applied Mathematics"],
        ranking: "#7 overall",
        website: "https://www.caltech.edu/",
        whyGoodFit: "Perfect for Inventors who want to push scientific boundaries. Caltech's research focus and cutting-edge facilities provide ideal environment for theoretical exploration.",
        relevantMajors: ["Physics", "Applied Physics", "Engineering", "Applied Mathematics", "Computer Science"]
      },
      {
        name: "Massachusetts Institute of Technology",
        location: "Cambridge, MA",
        programs: ["Computer Science", "Engineering", "Mathematics"],
        ranking: "#2 overall",
        website: "https://www.mit.edu/",
        whyGoodFit: "Ideal for Inventors who love theoretical and practical innovation. MIT's research opportunities align with INTP curiosity and logical thinking.",
        relevantMajors: ["Computer Science", "Physics", "Mathematics", "Electrical Engineering", "Brain & Cognitive Sciences"]
      },
      {
        name: "Harvard University",
        location: "Cambridge, MA",
        programs: ["Computer Science", "Applied Mathematics", "Physics"],
        ranking: "#3 overall",
        website: "https://www.harvard.edu/",
        whyGoodFit: "Excellent for Inventors who want intellectual freedom and research opportunities. Harvard's academic rigor matches INTP's love for deep theoretical exploration.",
        relevantMajors: ["Computer Science", "Physics", "Applied Mathematics", "Philosophy", "Psychology"]
      },
      // Tier 2: Brown, Cornell, Northwestern
      {
        name: "Brown University",
        location: "Providence, RI",
        programs: ["Computer Science", "Applied Mathematics", "Physics"],
        ranking: "#13 overall",
        website: "https://www.brown.edu/",
        whyGoodFit: "Perfect for Inventors who value academic flexibility. Brown's open curriculum allows INTPs to explore diverse interests and unconventional combinations.",
        relevantMajors: ["Computer Science", "Applied Mathematics", "Physics", "Cognitive Science", "Philosophy"]
      },
      {
        name: "Cornell University",
        location: "Ithaca, NY",
        programs: ["Engineering", "Computer Science", "Mathematics"],
        ranking: "#17 overall",
        website: "https://www.cornell.edu/",
        whyGoodFit: "Great for Inventors who want strong research opportunities. Cornell's diverse programs and research focus align with INTP's intellectual curiosity.",
        relevantMajors: ["Computer Science", "Physics", "Mathematics", "Engineering Physics", "Information Science"]
      },
      {
        name: "Northwestern University",
        location: "Evanston, IL",
        programs: ["Computer Science", "Engineering", "Mathematics"],
        ranking: "#9 overall",
        website: "https://www.northwestern.edu/",
        whyGoodFit: "Excellent for Inventors who want interdisciplinary thinking. Northwestern's collaborative research culture matches INTP's innovative approach.",
        relevantMajors: ["Computer Science", "Applied Mathematics", "Physics", "Materials Science", "Cognitive Science"]
      },
      // Tier 3: University of Washington, University of Rochester, UC Irvine
      {
        name: "University of Washington",
        location: "Seattle, WA",
        programs: ["Computer Science", "Engineering", "Mathematics"],
        ranking: "#55 overall",
        website: "https://www.washington.edu/",
        whyGoodFit: "Great for Inventors interested in technology innovation. UW's location in tech hub and strong research programs provide excellent opportunities.",
        relevantMajors: ["Computer Science", "Applied Mathematics", "Physics", "Informatics", "Electrical Engineering"]
      },
      {
        name: "University of Rochester",
        location: "Rochester, NY",
        programs: ["Computer Science", "Engineering", "Physics"],
        ranking: "#34 overall",
        website: "https://www.rochester.edu/",
        whyGoodFit: "Perfect for Inventors who want strong research focus. Rochester's emphasis on innovation and research aligns with INTP's theoretical interests.",
        relevantMajors: ["Computer Science", "Physics", "Applied Mathematics", "Brain & Cognitive Sciences", "Engineering"]
      },
      {
        name: "University of California, Irvine",
        location: "Irvine, CA",
        programs: ["Computer Science", "Engineering", "Mathematics"],
        ranking: "#33 overall",
        website: "https://www.uci.edu/",
        whyGoodFit: "Excellent for Inventors interested in cutting-edge research. UCI's strong STEM programs and research opportunities provide ideal environment for exploration.",
        relevantMajors: ["Computer Science", "Physics", "Applied Mathematics", "Cognitive Sciences", "Informatics"]
      },
      // Tier 4: Purdue, UMass Amherst, University of Utah
      {
        name: "Purdue University",
        location: "West Lafayette, IN",
        programs: ["Engineering", "Computer Science", "Mathematics"],
        ranking: "#51 overall",
        website: "https://www.purdue.edu/",
        whyGoodFit: "Great for Inventors who want practical application of theories. Purdue's strong engineering programs provide solid foundation for innovative thinking.",
        relevantMajors: ["Computer Science", "Physics", "Applied Mathematics", "Engineering", "Statistics"]
      },
      {
        name: "University of Massachusetts Amherst",
        location: "Amherst, MA",
        programs: ["Computer Science", "Engineering", "Mathematics"],
        ranking: "#67 overall",
        website: "https://www.umass.edu/",
        whyGoodFit: "Perfect for Inventors seeking research opportunities. UMass Amherst's strong programs and research focus align with INTP's intellectual curiosity.",
        relevantMajors: ["Computer Science", "Physics", "Applied Mathematics", "Engineering", "Philosophy"]
      },
      {
        name: "University of Utah",
        location: "Salt Lake City, UT",
        programs: ["Computer Science", "Engineering", "Mathematics"],
        ranking: "#105 overall",
        website: "https://www.utah.edu/",
        whyGoodFit: "Excellent for Inventors interested in technology and innovation. Utah's growing tech scene and research programs provide great opportunities for exploration.",
        relevantMajors: ["Computer Science", "Physics", "Applied Mathematics", "Engineering", "Games"]
      }
    ],
    celebrities: [
      { name: "Billie Eilish", emoji: "🎧", description: "Musical innovator" },
      { name: "Timothée Chalamet", emoji: "🎭", description: "Abstract, thoughtful actor" }
    ],
    traits: [
      { name: "Complex Problem Solving", percentage: 89 },
      { name: "Independent Learning", percentage: 85 },
      { name: "Logical Analysis", percentage: 82 },
      { name: "Creative Innovation", percentage: 87 },
      { name: "Abstract Thinking", percentage: 84 },
      { name: "Future-Focused", percentage: 52 }
    ]
  },

  "The Boss": {
    type: "The Boss",
    description: "🧑‍💼 The Boss (ENTJ) – \"Decisive • Natural Leader • Strategic\" You thrive on leadership and turning visions into reality.",
    careers: [
      {
        title: "CEO/Executive",
        description: "Lead organizations and make strategic decisions that drive business success",
        averageSalary: "$150,000 - $500,000+",
        jobGrowth: "6% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=CEO+executive"
      },
      {
        title: "Investment Banker",
        description: "Advise clients on financial transactions and help companies raise capital",
        averageSalary: "$100,000 - $300,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=investment+banker"
      },
      {
        title: "Management Consultant",
        description: "Help organizations solve complex business problems and improve efficiency",
        averageSalary: "$90,000 - $200,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=management+consultant"
      }
    ],
    entryLevelCareers: [
      {
        title: "Business Analyst",
        description: "Analyze business processes and help organizations make data-driven decisions",
        averageSalary: "$60,000 - $85,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=business+analyst"
      },
      {
        title: "Sales Representative",
        description: "Build relationships with clients and drive revenue through strategic selling",
        averageSalary: "$45,000 - $75,000",
        jobGrowth: "4% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=sales+representative"
      },
      {
        title: "Project Coordinator",
        description: "Coordinate project activities and ensure deliverables are met on time",
        averageSalary: "$50,000 - $70,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=project+coordinator"
      }
    ],
    advancedCareers: [
      {
        title: "Chief Strategy Officer",
        description: "Lead corporate strategy development and oversee strategic initiatives",
        averageSalary: "$200,000 - $400,000",
        jobGrowth: "6% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+strategy+officer"
      },
      {
        title: "Private Equity Partner",
        description: "Lead investment decisions and manage portfolio companies for maximum returns",
        averageSalary: "$300,000 - $1,000,000+",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=private+equity+partner"
      },
      {
        title: "Venture Capital Partner",
        description: "Identify and invest in high-growth startups with strategic potential",
        averageSalary: "$250,000 - $2,000,000+",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=venture+capital+partner"
      }
    ],
    colleges: [
      {
        name: "University of Pennsylvania (Wharton)",
        location: "Philadelphia, PA",
        programs: ["Business", "Finance", "Management"],
        ranking: "#6 overall",
        website: "https://www.upenn.edu/",
        whyGoodFit: "Perfect for Bosses who want to master business strategy. Wharton's world-renowned business programs align with ENTJ leadership ambitions.",
        relevantMajors: ["Finance", "Management", "Economics", "Marketing", "Operations & Information Management"],
        averageGPA: "3.90"
      },
      {
        name: "Harvard University",
        location: "Cambridge, MA",
        programs: ["Business", "Economics", "Government"],
        ranking: "#3 overall",
        website: "https://www.harvard.edu/",
        whyGoodFit: "Ideal for Bosses who want prestige and networking opportunities. Harvard's alumni network and leadership programs match ENTJ ambitions.",
        relevantMajors: ["Economics", "Government", "Psychology", "Applied Mathematics", "Computer Science"],
        averageGPA: "4.18"
      },
      {
        name: "Yale University",
        location: "New Haven, CT",
        programs: ["Economics", "Political Science", "History"],
        ranking: "#5 overall",
        website: "https://www.yale.edu/",
        whyGoodFit: "Excellent for Bosses who want to combine leadership with intellectual rigor. Yale's strong liberal arts foundation develops well-rounded leaders.",
        relevantMajors: ["Economics", "Political Science", "History", "Psychology", "Global Affairs"],
        averageGPA: "3.95"
      }
    ],
    celebrities: [
      { name: "Zendaya", emoji: "👑", description: "Natural leader, strategic" },
      { name: "Noah Schnapp", emoji: "🎯", description: "Focused, ambitious" }
    ],
    traits: [
      { name: "Natural Leadership", percentage: 92 },
      { name: "Strategic Planning", percentage: 88 },
      { name: "Results-Driven", percentage: 90 },
      { name: "Confident Decision Making", percentage: 86 },
      { name: "Long-term Vision", percentage: 89 },
      { name: "Team Building", percentage: 38 }
    ]
  },

  "The Challenger": {
    type: "The Challenger",
    description: "💡 The Challenger (ENTP) – \"Innovative • Debate-Loving • Quick-Witted\" You love exploring possibilities and challenging the status quo.",
    careers: [
      {
        title: "Entrepreneur",
        description: "Start and grow innovative businesses by identifying market opportunities",
        averageSalary: "$50,000 - $500,000+",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=entrepreneur"
      },
      {
        title: "Marketing Director",
        description: "Develop creative marketing strategies and lead promotional campaigns",
        averageSalary: "$80,000 - $150,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=marketing+director"
      },
      {
        title: "Innovation Consultant",
        description: "Help organizations think creatively and implement innovative solutions",
        averageSalary: "$70,000 - $140,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=innovation+consultant"
      }
    ],
    entryLevelCareers: [
      {
        title: "Marketing Coordinator",
        description: "Support marketing campaigns and learn digital marketing strategies",
        averageSalary: "$40,000 - $60,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=marketing+coordinator"
      },
      {
        title: "Business Development Associate",
        description: "Identify new business opportunities and build client relationships",
        averageSalary: "$45,000 - $70,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=business+development+associate"
      },
      {
        title: "Social Media Specialist",
        description: "Create engaging content and manage social media presence for brands",
        averageSalary: "$40,000 - $65,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=social+media+specialist"
      }
    ],
    advancedCareers: [
      {
        title: "Chief Innovation Officer",
        description: "Lead organizational innovation strategy and drive disruptive thinking",
        averageSalary: "$180,000 - $350,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+innovation+officer"
      },
      {
        title: "Startup Founder",
        description: "Build revolutionary companies from the ground up and scale them globally",
        averageSalary: "$100,000 - $10,000,000+",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=startup+founder"
      },
      {
        title: "Creative Director",
        description: "Lead creative vision for agencies and develop breakthrough campaigns",
        averageSalary: "$100,000 - $250,000",
        jobGrowth: "3% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=creative+director"
      }
    ],
    colleges: [
      {
        name: "Stanford University",
        location: "Stanford, CA",
        programs: ["Computer Science", "Engineering", "Business"],
        ranking: "#6 overall",
        website: "https://www.stanford.edu/",
        whyGoodFit: "Perfect for Challengers who want to innovate and disrupt. Stanford's entrepreneurial culture and Silicon Valley connections align with ENTP creativity.",
        relevantMajors: ["Computer Science", "Product Design", "Economics", "Symbolic Systems", "Management Science & Engineering"],
        averageGPA: "3.96"
      },
      {
        name: "Yale University",
        location: "New Haven, CT",
        programs: ["Liberal Arts", "Economics", "Political Science"],
        ranking: "#5 overall",
        website: "https://www.yale.edu/",
        whyGoodFit: "Ideal for Challengers who love intellectual debate and diverse perspectives. Yale's liberal arts focus develops well-rounded innovative thinkers.",
        relevantMajors: ["Economics", "Political Science", "Philosophy", "Psychology", "Cognitive Science"],
        averageGPA: "3.95"
      },
      {
        name: "Brown University",
        location: "Providence, RI",
        programs: ["Liberal Arts", "Computer Science", "Business Economics"],
        ranking: "#13 overall",
        website: "https://www.brown.edu/",
        whyGoodFit: "Excellent for Challengers who want academic freedom. Brown's open curriculum allows ENTPs to explore diverse interests and create unique combinations.",
        relevantMajors: ["Computer Science", "Business Economics", "Philosophy", "Cognitive Science", "International Relations"],
        averageGPA: "3.94"
      }
    ],
    celebrities: [
      { name: "Sabrina Carpenter", emoji: "✨", description: "Creative, versatile innovator" },
      { name: "Finn Wolfhard", emoji: "🎭", description: "Multi-talented challenger" }
    ],
    traits: [
      { name: "Innovation & Ideas", percentage: 91 },
      { name: "Strategic Thinking", percentage: 87 },
      { name: "Debate Skills", percentage: 89 },
      { name: "Adaptability", percentage: 83 },
      { name: "Big Picture Vision", percentage: 85 },
      { name: "Social Confidence", percentage: 72 }
    ]
  },

  "The Visionary": {
    type: "The Visionary",
    description: "🔮 The Visionary (INFJ) – \"Insightful • Compassionate • Future-Focused\" You see possibilities others miss and care deeply about making a difference.",
    careers: [
      {
        title: "Counselor/Therapist",
        description: "Help people overcome challenges and achieve mental wellness through therapy",
        averageSalary: "$50,000 - $90,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=counselor+therapist"
      },
      {
        title: "Social Worker",
        description: "Advocate for individuals and communities to improve their quality of life",
        averageSalary: "$45,000 - $70,000",
        jobGrowth: "12% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=social+worker"
      },
      {
        title: "Nonprofit Director",
        description: "Lead organizations focused on social change and community impact",
        averageSalary: "$60,000 - $120,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=nonprofit+director"
      }
    ],
    entryLevelCareers: [
      {
        title: "Case Manager",
        description: "Coordinate services and support for individuals in need",
        averageSalary: "$35,000 - $50,000",
        jobGrowth: "12% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=case+manager"
      },
      {
        title: "Mental Health Assistant",
        description: "Support mental health professionals and help clients with daily activities",
        averageSalary: "$30,000 - $45,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=mental+health+assistant"
      },
      {
        title: "Program Coordinator",
        description: "Organize and manage community programs and services",
        averageSalary: "$40,000 - $60,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=program+coordinator"
      }
    ],
    advancedCareers: [
      {
        title: "Clinical Director",
        description: "Oversee clinical programs and lead teams of mental health professionals",
        averageSalary: "$80,000 - $150,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=clinical+director"
      },
      {
        title: "Chief Social Impact Officer",
        description: "Lead corporate social responsibility and create meaningful social change",
        averageSalary: "$150,000 - $300,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+social+impact+officer"
      },
      {
        title: "Executive Director",
        description: "Lead major nonprofit organizations and drive systemic social change",
        averageSalary: "$90,000 - $200,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=executive+director+nonprofit"
      }
    ],
    colleges: [
      {
        name: "Northwestern University",
        location: "Evanston, IL",
        programs: ["Psychology", "Social Policy", "Journalism"],
        ranking: "#9 overall",
        website: "https://www.northwestern.edu/",
        whyGoodFit: "Perfect for Visionaries who want to combine academic excellence with social impact. Northwestern's programs align with INFJ values of making a difference.",
        relevantMajors: ["Psychology", "Social Policy", "Journalism", "Human Development", "Philosophy"],
        averageGPA: "3.93"
      },
      {
        name: "Georgetown University",
        location: "Washington, DC",
        programs: ["International Affairs", "Public Policy", "Psychology"],
        ranking: "#22 overall",
        website: "https://www.georgetown.edu/",
        whyGoodFit: "Ideal for Visionaries interested in policy and social justice. Georgetown's emphasis on service aligns with INFJ desire to help others.",
        relevantMajors: ["International Affairs", "Public Policy", "Psychology", "Philosophy", "Sociology"],
        averageGPA: "3.89"
      },
      {
        name: "Vanderbilt University",
        location: "Nashville, TN",
        programs: ["Psychology", "Human Development", "Public Policy"],
        ranking: "#13 overall",
        website: "https://www.vanderbilt.edu/",
        whyGoodFit: "Excellent for Visionaries who want strong academic programs with a focus on human development and social change.",
        relevantMajors: ["Psychology", "Human & Organizational Development", "Public Policy", "Sociology", "Philosophy"],
        averageGPA: "3.91"
      }
    ],
    celebrities: [
      { name: "Taylor Hill", emoji: "🌟", description: "Thoughtful, inspiring visionary" },
      { name: "Maddie Ziegler", emoji: "🎨", description: "Creative, empathetic artist" }
    ],
    traits: [
      { name: "Intuitive Insight", percentage: 93 },
      { name: "Long-term Vision", percentage: 91 },
      { name: "Empathetic Understanding", percentage: 88 },
      { name: "Creative Problem Solving", percentage: 85 },
      { name: "Value-Based Decisions", percentage: 89 },
      { name: "Future Planning", percentage: 81 }
    ]
  },

  "The Creator": {
    type: "The Creator",
    description: "🎨 The Creator (INFP) – \"Authentic • Creative • Value-Driven\" You express yourself through creativity and stay true to your values.",
    careers: [
      {
        title: "Graphic Designer",
        description: "Create visual designs for digital and print media that communicate ideas effectively",
        averageSalary: "$45,000 - $75,000",
        jobGrowth: "3% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=graphic+designer"
      },
      {
        title: "Writer/Author",
        description: "Create compelling written content across various formats and genres",
        averageSalary: "$40,000 - $100,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=writer+author"
      },
      {
        title: "Art Therapist",
        description: "Use creative arts to help people heal and express themselves therapeutically",
        averageSalary: "$50,000 - $80,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=art+therapist"
      }
    ],
    entryLevelCareers: [
      {
        title: "Junior Graphic Designer",
        description: "Create visual designs under supervision and build your design portfolio",
        averageSalary: "$35,000 - $50,000",
        jobGrowth: "3% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=junior+graphic+designer"
      },
      {
        title: "Content Creator",
        description: "Develop engaging content for social media and digital platforms",
        averageSalary: "$35,000 - $55,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=content+creator"
      },
      {
        title: "Marketing Assistant",
        description: "Support creative marketing campaigns and learn brand storytelling",
        averageSalary: "$35,000 - $50,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=marketing+assistant"
      }
    ],
    advancedCareers: [
      {
        title: "Creative Director",
        description: "Lead creative teams and oversee artistic vision for major campaigns and projects",
        averageSalary: "$100,000 - $250,000",
        jobGrowth: "3% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=creative+director"
      },
      {
        title: "Art Director",
        description: "Guide the visual style and artistic elements of creative projects",
        averageSalary: "$80,000 - $150,000",
        jobGrowth: "3% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=art+director"
      },
      {
        title: "Creative Consultant",
        description: "Advise organizations on creative strategies and artistic innovation",
        averageSalary: "$70,000 - $140,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=creative+consultant"
      }
    ],
    colleges: [
      {
        name: "Rhode Island School of Design",
        location: "Providence, RI",
        programs: ["Fine Arts", "Design", "Liberal Arts"],
        ranking: "#4 Art School",
        website: "https://www.risd.edu/",
        whyGoodFit: "Perfect for Creators who want to immerse themselves in artistic excellence. RISD's creative environment aligns with INFP artistic expression and authenticity.",
        relevantMajors: ["Graphic Design", "Fine Arts", "Illustration", "Film/Animation", "Industrial Design"],
        averageGPA: "3.7"
      },
      {
        name: "California Institute of the Arts",
        location: "Valencia, CA",
        programs: ["Art", "Film", "Music", "Theater"],
        ranking: "#7 Art School",
        website: "https://www.calarts.edu/",
        whyGoodFit: "Ideal for Creators who want interdisciplinary artistic exploration. CalArts' experimental approach matches INFP desire for authentic expression.",
        relevantMajors: ["Art", "Film/Video", "Music", "Theater", "Writing"],
        averageGPA: "3.5"
      },
      {
        name: "Savannah College of Art and Design",
        location: "Savannah, GA",
        programs: ["Art", "Design", "Digital Media"],
        ranking: "#15 Art School",
        website: "https://www.scad.edu/",
        whyGoodFit: "Excellent for Creators who want practical artistic skills. SCAD's comprehensive programs prepare INFPs for creative careers while honoring their values.",
        relevantMajors: ["Graphic Design", "Illustration", "Film & Television", "Writing", "Art Therapy"],
        averageGPA: "3.4"
      }
    ],
    celebrities: [
      { name: "Sadie Sink", emoji: "🎭", description: "Authentic, passionate artist" },
      { name: "Billie Eilish", emoji: "🎵", description: "Creative, value-driven musician" }
    ],
    traits: [
      { name: "Creative Expression", percentage: 94 },
      { name: "Authentic Values", percentage: 92 },
      { name: "Empathetic Understanding", percentage: 88 },
      { name: "Flexible Thinking", percentage: 86 },
      { name: "Personal Growth", percentage: 90 },
      { name: "Artistic Vision", percentage: 96 }
    ]
  },

  "The Coach": {
    type: "The Coach",
    description: "🎯 The Coach (ENFJ) – \"Inspiring • People-Focused • Natural Teacher\" You love helping others reach their potential and creating positive change.",
    careers: [
      {
        title: "Teacher/Educator",
        description: "Inspire and educate students to help them reach their academic potential",
        averageSalary: "$45,000 - $75,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=teacher+educator"
      },
      {
        title: "Human Resources Manager",
        description: "Support employee development and create positive workplace cultures",
        averageSalary: "$65,000 - $120,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=human+resources+manager"
      },
      {
        title: "Corporate Trainer",
        description: "Design and deliver training programs to help employees develop new skills",
        averageSalary: "$55,000 - $95,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=corporate+trainer"
      }
    ],
    entryLevelCareers: [
      {
        title: "HR Assistant",
        description: "Support human resources functions and learn employee relations",
        averageSalary: "$35,000 - $50,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=hr+assistant"
      },
      {
        title: "Training Coordinator",
        description: "Organize training programs and support employee development initiatives",
        averageSalary: "$40,000 - $60,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=training+coordinator"
      },
      {
        title: "Youth Program Assistant",
        description: "Work with young people in educational or community settings",
        averageSalary: "$30,000 - $45,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=youth+program+assistant"
      }
    ],
    advancedCareers: [
      {
        title: "Chief People Officer",
        description: "Lead organizational culture and human capital strategy at the executive level",
        averageSalary: "$200,000 - $400,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+people+officer"
      },
      {
        title: "Executive Coach",
        description: "Help senior leaders and executives reach their leadership potential",
        averageSalary: "$100,000 - $300,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=executive+coach"
      },
      {
        title: "Organizational Development Director",
        description: "Lead large-scale change initiatives and organizational transformation",
        averageSalary: "$120,000 - $200,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=organizational+development+director"
      }
    ],
    colleges: [
      {
        name: "University of Michigan Ann Arbor",
        location: "Ann Arbor, MI",
        programs: ["Education", "Psychology", "Public Policy"],
        ranking: "#21 overall",
        website: "https://www.umich.edu/",
        whyGoodFit: "Perfect for Coaches who want to make a broad impact. Michigan's strong education and psychology programs align with ENFJ desire to help others grow.",
        relevantMajors: ["Education", "Psychology", "Organizational Psychology", "Public Policy", "Communications"],
        averageGPA: "3.82"
      },
      {
        name: "Teachers College, Columbia University",
        location: "New York, NY",
        programs: ["Education", "Psychology", "Human Development"],
        ranking: "#1 Education School",
        website: "https://www.tc.columbia.edu/",
        whyGoodFit: "Ideal for Coaches who want to be educational leaders. TC's focus on human development matches ENFJ passion for helping others reach their potential.",
        relevantMajors: ["Education", "Psychology", "Human Development", "Organizational Psychology", "Applied Statistics"],
        averageGPA: "3.75"
      },
      {
        name: "Vanderbilt University (Peabody)",
        location: "Nashville, TN",
        programs: ["Education", "Human Development", "Psychology"],
        ranking: "#5 Education School",
        website: "https://www.vanderbilt.edu/",
        whyGoodFit: "Excellent for Coaches who want to combine education with research. Peabody's focus on human development aligns with ENFJ values.",
        relevantMajors: ["Human & Organizational Development", "Education", "Psychology", "Child Studies", "Special Education"],
        averageGPA: "3.91"
      }
    ],
    celebrities: [
      { name: "Zendaya", emoji: "🌟", description: "Inspiring, empowering leader" },
      { name: "Tom Holland", emoji: "🎭", description: "Supportive, team-oriented" }
    ],
    traits: [
      { name: "Strategic Thinking", percentage: 91 },
      { name: "Independence", percentage: 89 },
      { name: "Analytical Skills", percentage: 87 },
      { name: "Long-term Planning", percentage: 85 },
      { name: "Problem Solving", percentage: 93 },
      { name: "Artistic", percentage: 65 }
    ]
  },

  "The Free Spirit": {
    type: "The Free Spirit",
    description: "🌈 The Free Spirit (ENFP) – \"Enthusiastic • Spontaneous • People-Loving\" You're energized by possibilities and connecting with others.",
    careers: [
      {
        title: "Event Planner",
        description: "Create memorable experiences by organizing and coordinating special events",
        averageSalary: "$45,000 - $80,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=event+planner"
      },
      {
        title: "Public Relations Specialist",
        description: "Build relationships and manage communication between organizations and the public",
        averageSalary: "$50,000 - $85,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=public+relations+specialist"
      },
      {
        title: "Social Media Manager",
        description: "Create engaging content and build online communities for brands",
        averageSalary: "$45,000 - $80,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=social+media+manager"
      }
    ],
    entryLevelCareers: [
      {
        title: "Event Coordinator",
        description: "Assist with event planning and gain experience in event management",
        averageSalary: "$35,000 - $50,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=event+coordinator"
      },
      {
        title: "Communications Assistant",
        description: "Support communications teams and learn public relations skills",
        averageSalary: "$35,000 - $50,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=communications+assistant"
      },
      {
        title: "Marketing Coordinator",
        description: "Support marketing campaigns and build experience in brand promotion",
        averageSalary: "$40,000 - $60,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=marketing+coordinator"
      }
    ],
    advancedCareers: [
      {
        title: "Chief Marketing Officer",
        description: "Lead marketing strategy and brand development at the executive level",
        averageSalary: "$180,000 - $400,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+marketing+officer"
      },
      {
        title: "Creative Agency Owner",
        description: "Build and lead creative agencies that develop innovative marketing solutions",
        averageSalary: "$80,000 - $500,000+",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=creative+agency+owner"
      },
      {
        title: "Brand Strategy Director",
        description: "Develop comprehensive brand strategies that connect with audiences emotionally",
        averageSalary: "$120,000 - $250,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=brand+strategy+director"
      }
    ],
    colleges: [
      {
        name: "New York University",
        location: "New York, NY",
        programs: ["Communications", "Marketing", "Liberal Arts"],
        ranking: "#25 overall",
        website: "https://www.nyu.edu/",
        whyGoodFit: "Perfect for Free Spirits who want to be in the heart of creativity and culture. NYU's diverse programs and NYC location align with ENFP energy and networking.",
        relevantMajors: ["Communications", "Marketing", "Media Studies", "Psychology", "Liberal Arts"],
        averageGPA: "3.69"
      },
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        programs: ["Communications", "Business", "Cinematic Arts"],
        ranking: "#25 overall",
        website: "https://www.usc.edu/",
        whyGoodFit: "Ideal for Free Spirits interested in media and entertainment. USC's strong programs and industry connections match ENFP creativity and people focus.",
        relevantMajors: ["Communications", "Business", "Cinematic Arts", "Public Relations", "Marketing"],
        averageGPA: "3.79"
      },
      {
        name: "Boston University",
        location: "Boston, MA",
        programs: ["Communications", "Business", "Liberal Arts"],
        ranking: "#43 overall",
        website: "https://www.bu.edu/",
        whyGoodFit: "Excellent for Free Spirits who want urban energy and diverse opportunities. BU's programs provide perfect foundation for ENFP career paths.",
        relevantMajors: ["Communications", "Business Administration", "Public Relations", "Psychology", "International Relations"],
        averageGPA: "3.7"
      }
    ],
    celebrities: [
      { name: "Sabrina Carpenter", emoji: "🎤", description: "Energetic, people-loving performer" },
      { name: "Finn Wolfhard", emoji: "✨", description: "Enthusiastic, spontaneous creator" }
    ],
    traits: [
      { name: "Creative Energy", percentage: 93 },
      { name: "People Connection", percentage: 88 },
      { name: "Inspirational Communication", percentage: 91 },
      { name: "Adaptable Thinking", percentage: 89 },
      { name: "Value-Driven Decisions", percentage: 86 },
      { name: "Enthusiastic Leadership", percentage: 79 }
    ]
  },

  "The Organizer": {
    type: "The Organizer",
    description: "📋 The Organizer (ISTJ) – \"Reliable • Detail-Oriented • Methodical\" You excel at creating order and ensuring things get done right.",
    careers: [
      {
        title: "Project Manager",
        description: "Plan, organize, and oversee projects from start to finish to ensure successful completion",
        averageSalary: "$70,000 - $120,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=project+manager"
      },
      {
        title: "Accountant",
        description: "Manage financial records and ensure accurate financial reporting for organizations",
        averageSalary: "$50,000 - $85,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=accountant"
      },
      {
        title: "Operations Manager",
        description: "Oversee daily operations and implement efficient processes for organizations",
        averageSalary: "$60,000 - $110,000",
        jobGrowth: "6% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=operations+manager"
      }
    ],
    entryLevelCareers: [
      {
        title: "Administrative Assistant",
        description: "Support office operations and learn organizational systems and procedures",
        averageSalary: "$30,000 - $45,000",
        jobGrowth: "-7% (declining)",
        indeedLink: "https://www.indeed.com/jobs?q=administrative+assistant"
      },
      {
        title: "Junior Accountant",
        description: "Assist with bookkeeping and financial record maintenance under supervision",
        averageSalary: "$40,000 - $55,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=junior+accountant"
      },
      {
        title: "Project Coordinator",
        description: "Support project planning and coordination while learning project management skills",
        averageSalary: "$45,000 - $65,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=project+coordinator"
      }
    ],
    advancedCareers: [
      {
        title: "Chief Financial Officer",
        description: "Lead financial strategy and oversee all financial operations for organizations",
        averageSalary: "$200,000 - $500,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+financial+officer"
      },
      {
        title: "Director of Operations",
        description: "Oversee all operational aspects of large organizations and drive efficiency",
        averageSalary: "$120,000 - $200,000",
        jobGrowth: "6% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=director+of+operations"
      },
      {
        title: "Senior Project Manager",
        description: "Lead complex, high-stakes projects and manage multiple project teams",
        averageSalary: "$100,000 - $160,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=senior+project+manager"
      }
    ],
    colleges: [
      {
        name: "Brigham Young University",
        location: "Provo, UT",
        programs: ["Business", "Accounting", "Information Systems"],
        ranking: "#89 overall",
        website: "https://www.byu.edu/",
        whyGoodFit: "Perfect for Organizers who value structure and strong ethics. BYU's emphasis on principles and systematic learning aligns with ISTJ values.",
        relevantMajors: ["Accounting", "Business Management", "Information Systems", "Supply Chain Management", "Finance"],
        averageGPA: "3.8"
      },
      {
        name: "Penn State University",
        location: "University Park, PA",
        programs: ["Business", "Engineering", "Information Sciences"],
        ranking: "#63 overall",
        website: "https://www.psu.edu/",
        whyGoodFit: "Ideal for Organizers who want practical, hands-on education. Penn State's comprehensive programs provide solid foundation for ISTJ careers.",
        relevantMajors: ["Accounting", "Supply Chain Management", "Information Sciences", "Industrial Engineering", "Business"],
        averageGPA: "3.6"
      },
      {
        name: "Texas A&M University",
        location: "College Station, TX",
        programs: ["Business", "Engineering", "Agriculture"],
        ranking: "#67 overall",
        website: "https://www.tamu.edu/",
        whyGoodFit: "Excellent for Organizers who value tradition and systematic approaches. Texas A&M's structured programs align with ISTJ preferences.",
        relevantMajors: ["Accounting", "Business Administration", "Industrial Engineering", "Supply Chain Management", "Information Systems"],
        averageGPA: "3.6"
      }
    ],
    celebrities: [
      { name: "Noah Schnapp", emoji: "📊", description: "Methodical, reliable organizer" },
      { name: "Maddie Ziegler", emoji: "📋", description: "Detail-oriented, structured" }
    ],
    traits: [
      { name: "Detailed Planning", percentage: 94 },
      { name: "Reliable Execution", percentage: 92 },
      { name: "Systematic Thinking", percentage: 89 },
      { name: "Practical Problem Solving", percentage: 87 },
      { name: "Quality Focus", percentage: 91 },
      { name: "Traditional Values", percentage: 32 }
    ]
  },

  "The Helper": {
    type: "The Helper",
    description: "🤝 The Helper (ISFJ) – \"Caring • Supportive • Service-Oriented\" You find fulfillment in helping others and creating harmony.",
    careers: [
      {
        title: "Nurse",
        description: "Provide medical care and emotional support to patients in healthcare settings",
        averageSalary: "$60,000 - $90,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=nurse"
      },
      {
        title: "Elementary School Teacher",
        description: "Educate and nurture young students in their formative learning years",
        averageSalary: "$45,000 - $70,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=elementary+teacher"
      },
      {
        title: "Social Worker",
        description: "Support individuals and families facing challenges and connect them with resources",
        averageSalary: "$45,000 - $70,000",
        jobGrowth: "12% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=social+worker"
      }
    ],
    entryLevelCareers: [
      {
        title: "Medical Assistant",
        description: "Support healthcare professionals and assist with patient care",
        averageSalary: "$30,000 - $45,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=medical+assistant"
      },
      {
        title: "Teaching Assistant",
        description: "Support classroom teachers and help students with their learning",
        averageSalary: "$25,000 - $40,000",
        jobGrowth: "4% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=teaching+assistant"
      },
      {
        title: "Case Worker",
        description: "Assist social workers in supporting clients and coordinating services",
        averageSalary: "$35,000 - $50,000",
        jobGrowth: "12% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=case+worker"
      }
    ],
    advancedCareers: [
      {
        title: "Nurse Practitioner",
        description: "Provide advanced nursing care and often work independently in specialized areas",
        averageSalary: "$100,000 - $150,000",
        jobGrowth: "40% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=nurse+practitioner"
      },
      {
        title: "School Principal",
        description: "Lead educational institutions and create positive learning environments",
        averageSalary: "$80,000 - $130,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=school+principal"
      },
      {
        title: "Director of Social Services",
        description: "Oversee social service programs and lead teams that help vulnerable populations",
        averageSalary: "$70,000 - $120,000",
        jobGrowth: "12% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=director+social+services"
      }
    ],
    colleges: [
      {
        name: "University of North Carolina Chapel Hill",
        location: "Chapel Hill, NC",
        programs: ["Nursing", "Education", "Social Work"],
        ranking: "#22 overall",
        website: "https://www.unc.edu/",
        whyGoodFit: "Perfect for Helpers who want strong programs in caring professions. UNC's emphasis on service aligns with ISFJ desire to help others.",
        relevantMajors: ["Nursing", "Education", "Social Work", "Psychology", "Public Health"],
        averageGPA: "3.8"
      },
      {
        name: "Villanova University",
        location: "Villanova, PA",
        programs: ["Nursing", "Education", "Liberal Arts"],
        ranking: "#25 overall",
        website: "https://www.villanova.edu/",
        whyGoodFit: "Ideal for Helpers who value community and service. Villanova's Catholic mission and strong nursing programs match ISFJ values.",
        relevantMajors: ["Nursing", "Education", "Psychology", "Social Work", "Human Services"],
        averageGPA: "3.9"
      },
      {
        name: "Baylor University",
        location: "Waco, TX",
        programs: ["Nursing", "Education", "Social Work"],
        ranking: "#93 overall",
        website: "https://www.baylor.edu/",
        whyGoodFit: "Excellent for Helpers who want faith-based education. Baylor's emphasis on service and caring professions aligns with ISFJ values.",
        relevantMajors: ["Nursing", "Education", "Social Work", "Psychology", "Child & Family Studies"],
        averageGPA: "3.7"
      }
    ],
    celebrities: [
      { name: "Taylor Hill", emoji: "💕", description: "Caring, supportive helper" },
      { name: "Sadie Sink", emoji: "🤗", description: "Nurturing, service-oriented" }
    ],
    traits: [
      { name: "Supportive Care", percentage: 95 },
      { name: "Detail-Oriented Planning", percentage: 91 },
      { name: "Loyal Dedication", percentage: 93 },
      { name: "Practical Service", percentage: 88 },
      { name: "Harmony Building", percentage: 86 },
      { name: "Reliable Support", percentage: 58 }
    ]
  },

  "The Manager": {
    type: "The Manager",
    description: "👔 The Manager (ESTJ) – \"Efficient • Results-Driven • Natural Leader\" You excel at organizing people and resources to achieve goals.",
    careers: [
      {
        title: "Business Manager",
        description: "Oversee business operations and lead teams to achieve organizational objectives",
        averageSalary: "$70,000 - $130,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=business+manager"
      },
      {
        title: "Sales Manager",
        description: "Lead sales teams and develop strategies to meet revenue targets",
        averageSalary: "$60,000 - $120,000",
        jobGrowth: "4% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=sales+manager"
      },
      {
        title: "Operations Director",
        description: "Oversee daily operations and implement efficient processes across departments",
        averageSalary: "$80,000 - $150,000",
        jobGrowth: "6% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=operations+director"
      }
    ],
    entryLevelCareers: [
      {
        title: "Management Trainee",
        description: "Learn management skills through structured programs and gain leadership experience",
        averageSalary: "$45,000 - $65,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=management+trainee"
      },
      {
        title: "Team Lead",
        description: "Supervise small teams and learn management fundamentals",
        averageSalary: "$50,000 - $70,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=team+lead"
      },
      {
        title: "Assistant Manager",
        description: "Support managers and gain experience in operational leadership",
        averageSalary: "$40,000 - $60,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=assistant+manager"
      }
    ],
    advancedCareers: [
      {
        title: "Chief Executive Officer",
        description: "Lead entire organizations and make strategic decisions that drive business success",
        averageSalary: "$200,000 - $1,000,000+",
        jobGrowth: "6% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+executive+officer"
      },
      {
        title: "Vice President of Operations",
        description: "Oversee major operational divisions and drive organizational efficiency",
        averageSalary: "$150,000 - $300,000",
        jobGrowth: "6% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=vice+president+operations"
      },
      {
        title: "General Manager",
        description: "Lead business units and have full P&L responsibility for major divisions",
        averageSalary: "$100,000 - $200,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=general+manager"
      }
    ],
    colleges: [
      {
        name: "University of Pennsylvania (Wharton)",
        location: "Philadelphia, PA",
        programs: ["Business", "Finance", "Management"],
        ranking: "#6 overall",
        website: "https://www.upenn.edu/",
        whyGoodFit: "Perfect for Managers who want elite business education. Wharton's focus on leadership and results aligns with ESTJ management strengths.",
        relevantMajors: ["Finance", "Management", "Marketing", "Operations", "Business Analytics"],
        averageGPA: "3.90"
      },
      {
        name: "University of Michigan (Ross)",
        location: "Ann Arbor, MI",
        programs: ["Business", "Engineering", "Economics"],
        ranking: "#21 overall",
        website: "https://www.umich.edu/",
        whyGoodFit: "Ideal for Managers who want strong analytical foundation. Ross Business School provides excellent preparation for ESTJ leadership roles.",
        relevantMajors: ["Business Administration", "Economics", "Industrial Engineering", "Organizational Studies", "Statistics"],
        averageGPA: "3.82"
      },
      {
        name: "Indiana University (Kelley)",
        location: "Bloomington, IN",
        programs: ["Business", "Economics", "Public Affairs"],
        ranking: "#72 overall",
        website: "https://www.iu.edu/",
        whyGoodFit: "Excellent for Managers who want practical business education. Kelley's strong business programs provide solid foundation for ESTJ careers.",
        relevantMajors: ["Business Administration", "Finance", "Marketing", "Operations Management", "Supply Chain Management"],
        averageGPA: "3.5-3.7"
      }
    ],
    celebrities: [
      { name: "Tom Holland", emoji: "🎯", description: "Results-driven, efficient leader" },
      { name: "Zendaya", emoji: "👑", description: "Natural manager, goal-oriented" }
    ],
    traits: [
      { name: "Leadership Skills", percentage: 91 },
      { name: "Organizational Planning", percentage: 89 },
      { name: "Results-Focused", percentage: 92 },
      { name: "Practical Decision Making", percentage: 87 },
      { name: "Team Coordination", percentage: 88 },
      { name: "Systematic Execution", percentage: 35 }
    ]
  },

  "The Host": {
    type: "The Host",
    description: "🎉 The Host (ESFJ) – \"Warm • People-Focused • Harmony-Creating\" You love bringing people together and creating positive experiences.",
    careers: [
      {
        title: "Event Coordinator",
        description: "Plan and execute events that bring people together for memorable experiences",
        averageSalary: "$40,000 - $70,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=event+coordinator"
      },
      {
        title: "Customer Service Manager",
        description: "Ensure excellent customer experiences and lead customer-facing teams",
        averageSalary: "$50,000 - $85,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=customer+service+manager"
      },
      {
        title: "Hospitality Manager",
        description: "Oversee guest services and create welcoming environments in hotels or restaurants",
        averageSalary: "$45,000 - $80,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=hospitality+manager"
      }
    ],
    entryLevelCareers: [
      {
        title: "Customer Service Representative",
        description: "Help customers and learn the fundamentals of customer experience",
        averageSalary: "$30,000 - $45,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=customer+service+representative"
      },
      {
        title: "Hotel Front Desk Associate",
        description: "Welcome guests and provide hospitality services in hotel environments",
        averageSalary: "$25,000 - $40,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=hotel+front+desk"
      },
      {
        title: "Event Assistant",
        description: "Support event planning and execution while learning the industry",
        averageSalary: "$30,000 - $45,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=event+assistant"
      }
    ],
    advancedCareers: [
      {
        title: "Director of Hospitality",
        description: "Oversee all guest experience operations for major hospitality organizations",
        averageSalary: "$80,000 - $150,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=director+hospitality"
      },
      {
        title: "Chief Customer Officer",
        description: "Lead customer experience strategy at the executive level for major companies",
        averageSalary: "$180,000 - $350,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+customer+officer"
      },
      {
        title: "Wedding Planning Business Owner",
        description: "Build and lead wedding planning companies that create perfect celebrations",
        averageSalary: "$60,000 - $200,000+",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=wedding+planner+business"
      }
    ],
    colleges: [
      {
        name: "Cornell University (Hotel School)",
        location: "Ithaca, NY",
        programs: ["Hospitality", "Business", "Hotel Administration"],
        ranking: "#17 overall",
        website: "https://www.cornell.edu/",
        whyGoodFit: "Perfect for Hosts who want elite hospitality education. Cornell's Hotel School is world-renowned and aligns with ESFJ people-focus.",
        relevantMajors: ["Hotel Administration", "Business", "Communications", "Applied Economics", "Human Development"],
        averageGPA: "3.90"
      },
      {
        name: "University of Nevada Las Vegas",
        location: "Las Vegas, NV",
        programs: ["Hospitality", "Business", "Tourism"],
        ranking: "#285 overall",
        website: "https://www.unlv.edu/",
        whyGoodFit: "Ideal for Hosts interested in hospitality industry. UNLV's location and programs provide excellent practical experience for ESFJ careers.",
        relevantMajors: ["Hospitality Management", "Tourism & Events", "Business", "Communications", "Marketing"],
        averageGPA: "3.4"
      },
      {
        name: "Florida International University",
        location: "Miami, FL",
        programs: ["Hospitality", "Business", "Tourism"],
        ranking: "#124 overall",
        website: "https://www.fiu.edu/",
        whyGoodFit: "Excellent for Hosts who want international hospitality experience. FIU's diverse environment and strong programs match ESFJ values.",
        relevantMajors: ["Hospitality & Tourism Management", "Business", "Public Relations", "Communications", "Event Management"],
        averageGPA: "3.6"
      }
    ],
    celebrities: [
      { name: "Maddie Ziegler", emoji: "✨", description: "Warm, harmony-creating host" },
      { name: "Sabrina Carpenter", emoji: "🎪", description: "People-focused, welcoming" }
    ],
    traits: [
      { name: "People-Centered Leadership", percentage: 94 },
      { name: "Emotional Support", percentage: 92 },
      { name: "Social Harmony", percentage: 89 },
      { name: "Practical Organization", percentage: 88 },
      { name: "Team Collaboration", percentage: 90 },
      { name: "Service-Oriented", percentage: 67 }
    ]
  },

  "The Fixer": {
    type: "The Fixer",
    description: "🔧 The Fixer (ISTP) – \"Practical • Independent • Problem-Solver\" You love working with your hands and solving real-world problems.",
    careers: [
      {
        title: "Mechanical Engineer",
        description: "Design and develop mechanical systems and solve engineering problems",
        averageSalary: "$70,000 - $110,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=mechanical+engineer"
      },
      {
        title: "Computer Systems Analyst",
        description: "Analyze computer systems and recommend improvements for efficiency",
        averageSalary: "$65,000 - $105,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=computer+systems+analyst"
      },
      {
        title: "Electronics Technician",
        description: "Repair and maintain electronic equipment and systems",
        averageSalary: "$45,000 - $75,000",
        jobGrowth: "2% (slower than average)",
        indeedLink: "https://www.indeed.com/jobs?q=electronics+technician"
      }
    ],
    entryLevelCareers: [
      {
        title: "Engineering Technician",
        description: "Support engineers and gain hands-on experience with technical systems",
        averageSalary: "$40,000 - $60,000",
        jobGrowth: "2% (slower than average)",
        indeedLink: "https://www.indeed.com/jobs?q=engineering+technician"
      },
      {
        title: "IT Support Specialist",
        description: "Fix computer problems and support technology users",
        averageSalary: "$40,000 - $60,000",
        jobGrowth: "9% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=it+support+specialist"
      },
      {
        title: "Maintenance Technician",
        description: "Repair and maintain equipment and mechanical systems",
        averageSalary: "$35,000 - $55,000",
        jobGrowth: "13% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=maintenance+technician"
      }
    ],
    advancedCareers: [
      {
        title: "Senior Systems Engineer",
        description: "Lead complex system design and architecture for major engineering projects",
        averageSalary: "$100,000 - $160,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=senior+systems+engineer"
      },
      {
        title: "Engineering Manager",
        description: "Lead engineering teams and oversee technical project development",
        averageSalary: "$120,000 - $180,000",
        jobGrowth: "7% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=engineering+manager"
      },
      {
        title: "Chief Technology Officer",
        description: "Lead technology strategy and innovation for organizations",
        averageSalary: "$200,000 - $400,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=chief+technology+officer"
      }
    ],
    colleges: [
      {
        name: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        programs: ["Engineering", "Computer Science", "Technology"],
        ranking: "#33 overall",
        website: "https://www.gatech.edu/",
        whyGoodFit: "Perfect for Fixers who want hands-on engineering education. Georgia Tech's strong technical programs align with ISTP practical problem-solving.",
        relevantMajors: ["Mechanical Engineering", "Computer Engineering", "Industrial Engineering", "Technology", "Computer Science"],
        averageGPA: "3.6-3.8"
      },
      {
        name: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        programs: ["Engineering", "Computer Science", "Technology"],
        ranking: "#33 overall",
        website: "https://www.gatech.edu/",
        whyGoodFit: "Ideal for Fixers who want top-tier technical education. Georgia Tech's engineering focus matches ISTP hands-on approach.",
        relevantMajors: ["Mechanical Engineering", "Computer Science", "Electrical Engineering", "Industrial Engineering", "Systems Engineering"],
        averageGPA: "3.8-3.9"
      },
      {
        name: "Virginia Tech",
        location: "Blacksburg, VA",
        programs: ["Engineering", "Computer Science", "Technology"],
        ranking: "#47 overall",
        website: "https://www.vt.edu/",
        whyGoodFit: "Excellent for Fixers who want practical engineering skills. Virginia Tech's hands-on programs provide perfect foundation for ISTP careers.",
        relevantMajors: ["Mechanical Engineering", "Computer Engineering", "Industrial Engineering", "Computer Science", "Technology"],
        averageGPA: "3.7"
      }
    ],
    celebrities: [
      { name: "Tom Holland", emoji: "🔧", description: "Practical, hands-on problem solver" },
      { name: "Noah Schnapp", emoji: "⚙️", description: "Independent, technical fixer" }
    ],
    traits: [
      { name: "Hands-On Problem Solving", percentage: 91 },
      { name: "Mechanical Skills", percentage: 89 },
      { name: "Independent Work Style", percentage: 94 },
      { name: "Practical Solutions", percentage: 87 },
      { name: "Adaptable Thinking", percentage: 85 },
      { name: "Tool Mastery", percentage: 41 }
    ]
  },

  "The Artist": {
    type: "The Artist",
    description: "🎨 The Artist (ISFP) – \"Creative • Gentle • Authentic\" You express yourself through art and value beauty and personal authenticity.",
    careers: [
      {
        title: "Graphic Designer",
        description: "Create visual designs that communicate messages and evoke emotions",
        averageSalary: "$45,000 - $75,000",
        jobGrowth: "3% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=graphic+designer"
      },
      {
        title: "Photographer",
        description: "Capture moments and create visual stories through photography",
        averageSalary: "$35,000 - $70,000",
        jobGrowth: "17% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=photographer"
      },
      {
        title: "Interior Designer",
        description: "Create beautiful and functional living and working spaces",
        averageSalary: "$50,000 - $85,000",
        jobGrowth: "4% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=interior+designer"
      }
    ],
    entryLevelCareers: [
      {
        title: "Junior Graphic Designer",
        description: "Create visual designs under supervision and build your artistic portfolio",
        averageSalary: "$35,000 - $50,000",
        jobGrowth: "3% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=junior+graphic+designer"
      },
      {
        title: "Photography Assistant",
        description: "Support photographers and learn professional photography techniques",
        averageSalary: "$25,000 - $40,000",
        jobGrowth: "17% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=photography+assistant"
      },
      {
        title: "Art Gallery Assistant",
        description: "Work in galleries and learn about art curation and exhibition",
        averageSalary: "$25,000 - $40,000",
        jobGrowth: "14% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=art+gallery+assistant"
      }
    ],
    advancedCareers: [
      {
        title: "Creative Director",
        description: "Lead creative teams and guide artistic vision for major projects",
        averageSalary: "$100,000 - $250,000",
        jobGrowth: "3% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=creative+director"
      },
      {
        title: "Art Director",
        description: "Oversee artistic elements of major campaigns and productions",
        averageSalary: "$80,000 - $150,000",
        jobGrowth: "3% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=art+director"
      },
      {
        title: "Museum Curator",
        description: "Develop and manage art collections for museums and cultural institutions",
        averageSalary: "$60,000 - $120,000",
        jobGrowth: "14% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=museum+curator"
      }
    ],
    colleges: [
      {
        name: "Rhode Island School of Design",
        location: "Providence, RI",
        programs: ["Fine Arts", "Design", "Liberal Arts"],
        ranking: "#4 Art School",
        website: "https://www.risd.edu/",
        whyGoodFit: "Perfect for Artists who want world-class creative education. RISD's artistic excellence and authentic expression align with ISFP values.",
        relevantMajors: ["Fine Arts", "Graphic Design", "Illustration", "Photography", "Textiles"],
        averageGPA: "3.7"
      },
      {
        name: "Art Center College of Design",
        location: "Pasadena, CA",
        programs: ["Design", "Fine Arts", "Media Arts"],
        ranking: "#9 Art School",
        website: "https://www.artcenter.edu/",
        whyGoodFit: "Ideal for Artists who want practical creative skills. Art Center's industry focus helps ISFPs turn passion into career.",
        relevantMajors: ["Graphic Design", "Photography", "Product Design", "Entertainment Design", "Fine Arts"],
        averageGPA: "3.5"
      },
      {
        name: "Parsons School of Design",
        location: "New York, NY",
        programs: ["Design", "Fine Arts", "Fashion"],
        ranking: "#3 Art School",
        website: "https://www.newschool.edu/parsons/",
        whyGoodFit: "Excellent for Artists who want to be in creative hub. Parsons' NYC location and diverse programs match ISFP artistic exploration.",
        relevantMajors: ["Fine Arts", "Graphic Design", "Photography", "Fashion Design", "Interior Design"],
        averageGPA: "3.6"
      }
    ],
    celebrities: [
      { name: "Billie Eilish", emoji: "🎨", description: "Authentic, gentle creative artist" },
      { name: "Sadie Sink", emoji: "🌙", description: "Expressive, artistic performer" }
    ],
    traits: [
      { name: "Creative Expression", percentage: 96 },
      { name: "Aesthetic Sensitivity", percentage: 93 },
      { name: "Value-Based Decisions", percentage: 88 },
      { name: "Flexible Approach", percentage: 91 },
      { name: "Empathetic Understanding", percentage: 89 },
      { name: "Artistic Skills", percentage: 97 }
    ]
  },

  "The Adventurer": {
    type: "The Adventurer",
    description: "🌟 The Adventurer (ESTP) – \"Energetic • Spontaneous • Action-Oriented\" You thrive on excitement and hands-on experiences.",
    careers: [
      {
        title: "Sales Representative",
        description: "Build relationships and drive revenue through dynamic sales interactions",
        averageSalary: "$45,000 - $85,000",
        jobGrowth: "4% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=sales+representative"
      },
      {
        title: "Emergency Medical Technician",
        description: "Provide critical medical care in fast-paced emergency situations",
        averageSalary: "$35,000 - $55,000",
        jobGrowth: "11% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=emergency+medical+technician"
      },
      {
        title: "Personal Trainer",
        description: "Help people achieve fitness goals through dynamic training programs",
        averageSalary: "$35,000 - $65,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=personal+trainer"
      }
    ],
    entryLevelCareers: [
      {
        title: "Fitness Instructor",
        description: "Lead exercise classes and help people stay active and healthy",
        averageSalary: "$25,000 - $45,000",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=fitness+instructor"
      },
      {
        title: "Restaurant Server",
        description: "Provide excellent customer service in fast-paced dining environments",
        averageSalary: "$20,000 - $40,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=restaurant+server"
      },
      {
        title: "Retail Sales Associate",
        description: "Help customers find products and build sales skills in dynamic retail environment",
        averageSalary: "$25,000 - $40,000",
        jobGrowth: "2% (slower than average)",
        indeedLink: "https://www.indeed.com/jobs?q=retail+sales+associate"
      }
    ],
    advancedCareers: [
      {
        title: "Sales Director",
        description: "Lead sales teams and develop strategies to drive major revenue growth",
        averageSalary: "$100,000 - $200,000",
        jobGrowth: "4% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=sales+director"
      },
      {
        title: "Emergency Services Director",
        description: "Oversee emergency response operations and lead crisis management teams",
        averageSalary: "$80,000 - $150,000",
        jobGrowth: "5% (average)",
        indeedLink: "https://www.indeed.com/jobs?q=emergency+services+director"
      },
      {
        title: "Fitness Business Owner",
        description: "Build and lead fitness businesses that help communities stay healthy",
        averageSalary: "$50,000 - $200,000+",
        jobGrowth: "15% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=fitness+business+owner"
      }
    ],
    colleges: [
      {
        name: "Arizona State University",
        location: "Tempe, AZ",
        programs: ["Business", "Communications", "Kinesiology"],
        ranking: "#121 overall",
        website: "https://www.asu.edu/",
        whyGoodFit: "Perfect for Adventurers who want dynamic college experience. ASU's active campus culture and diverse programs match ESTP energy.",
        relevantMajors: ["Business", "Communications", "Kinesiology", "Marketing", "Sports Business"],
        averageGPA: "3.5-3.7"
      },
      {
        name: "University of Florida",
        location: "Gainesville, FL",
        programs: ["Business", "Communications", "Recreation"],
        ranking: "#28 overall",
        website: "https://www.ufl.edu/",
        whyGoodFit: "Ideal for Adventurers who want strong academics with active lifestyle. UF's vibrant campus and programs align with ESTP preferences.",
        relevantMajors: ["Business Administration", "Sport Management", "Communications", "Tourism & Recreation", "Marketing"],
        averageGPA: "3.8"
      },
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        programs: ["Business", "Communications", "Cinematic Arts"],
        ranking: "#25 overall",
        website: "https://www.usc.edu/",
        whyGoodFit: "Excellent for Adventurers who want to be in exciting environment. USC's location and dynamic programs match ESTP love of action.",
        relevantMajors: ["Business", "Communications", "Cinematic Arts", "Public Relations", "Marketing"],
        averageGPA: "3.79"
      }
    ],
    celebrities: [
      { name: "Timothée Chalamet", emoji: "⚡", description: "Energetic, spontaneous adventurer" },
      { name: "Finn Wolfhard", emoji: "🌟", description: "Action-oriented, dynamic performer" }
    ],
    traits: [
      { name: "Action-Oriented", percentage: 94 },
      { name: "Quick Decision Making", percentage: 91 },
      { name: "Social Energy", percentage: 89 },
      { name: "Practical Problem Solving", percentage: 87 },
      { name: "Adaptable Skills", percentage: 85 },
      { name: "Risk-Taking", percentage: 56 }
    ]
  },

  "The Performer": {
    type: "The Performer",
    description: "🎭 The Performer (ESFP) – \"Enthusiastic • Fun-Loving • People-Centered\" You love entertaining others and bringing joy to every situation.",
    careers: [
      {
        title: "Actor/Actress",
        description: "Bring characters to life and entertain audiences through performance",
        averageSalary: "$40,000 - $120,000+",
        jobGrowth: "32% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=actor+actress"
      },
      {
        title: "Event Planner",
        description: "Create memorable experiences and celebrations for special occasions",
        averageSalary: "$45,000 - $80,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=event+planner"
      },
      {
        title: "Music Teacher",
        description: "Share musical passion and teach others to express themselves through music",
        averageSalary: "$40,000 - $70,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=music+teacher"
      }
    ],
    entryLevelCareers: [
      {
        title: "Entertainment Assistant",
        description: "Support entertainment professionals and learn the industry",
        averageSalary: "$30,000 - $45,000",
        jobGrowth: "32% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=entertainment+assistant"
      },
      {
        title: "Dance Instructor",
        description: "Teach dance and help others express themselves through movement",
        averageSalary: "$25,000 - $50,000",
        jobGrowth: "18% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=dance+instructor"
      },
      {
        title: "Recreation Leader",
        description: "Lead fun activities and programs in community or recreational settings",
        averageSalary: "$25,000 - $40,000",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=recreation+leader"
      }
    ],
    advancedCareers: [
      {
        title: "Entertainment Director",
        description: "Oversee entertainment programs and lead creative teams in major venues",
        averageSalary: "$70,000 - $150,000",
        jobGrowth: "32% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=entertainment+director"
      },
      {
        title: "Talent Agent",
        description: "Represent performers and help them build successful entertainment careers",
        averageSalary: "$60,000 - $200,000+",
        jobGrowth: "10% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=talent+agent"
      },
      {
        title: "Producer",
        description: "Develop and oversee entertainment projects from concept to completion",
        averageSalary: "$80,000 - $300,000+",
        jobGrowth: "24% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=producer+entertainment"
      }
    ],
    colleges: [
      {
        name: "Juilliard School",
        location: "New York, NY",
        programs: ["Music", "Dance", "Drama"],
        ranking: "#1 Performing Arts",
        website: "https://www.juilliard.edu/",
        whyGoodFit: "Perfect for Performers who want elite artistic training. Juilliard's world-class programs align with ESFP passion for performance excellence.",
        relevantMajors: ["Music", "Dance", "Drama", "Jazz Studies", "Pre-College"],
        averageGPA: "3.8"
      },
      {
        name: "Berklee College of Music",
        location: "Boston, MA",
        programs: ["Music", "Music Business", "Music Therapy"],
        ranking: "#1 Music School",
        website: "https://www.berklee.edu/",
        whyGoodFit: "Ideal for Performers who want comprehensive music education. Berklee's modern approach matches ESFP enthusiasm and creativity.",
        relevantMajors: ["Music Performance", "Music Business", "Music Production", "Music Therapy", "Songwriting"],
        averageGPA: "3.5"
      },
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        programs: ["Cinematic Arts", "Music", "Theater"],
        ranking: "#25 overall",
        website: "https://www.usc.edu/",
        whyGoodFit: "Excellent for Performers who want entertainment industry connections. USC's location and programs provide perfect foundation for ESFP careers.",
        relevantMajors: ["Cinematic Arts", "Music", "Theater", "Communications", "Public Relations"],
        averageGPA: "3.79"
      }
    ],
    celebrities: [
      { name: "Sabrina Carpenter", emoji: "🎤", description: "Enthusiastic, joy-bringing performer" },
      { name: "Maddie Ziegler", emoji: "💃", description: "Fun-loving, expressive artist" }
    ],
    traits: [
      { name: "Entertainment Skills", percentage: 95 },
      { name: "Social Connection", percentage: 92 },
      { name: "Creative Expression", percentage: 90 },
      { name: "Adaptable Energy", percentage: 88 },
      { name: "People-Focused", percentage: 91 },
      { name: "Spontaneous Leadership", percentage: 94 }
    ]
  }
};