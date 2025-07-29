import { Question, PersonalityResult, PersonalityType } from '@/types/quiz';

export const questions: Question[] = [
  {
    text: "When the teacher assigns a group project, I secretly hope I can do it all myself.",
    options: {
      A: { text: "Strongly Agree", traits: ["I"] },
      B: { text: "Agree", traits: ["I"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["E"] }
    }
  },
  {
    text: "I often get caught daydreaming about what my life could look like in 10 years.",
    options: {
      A: { text: "Strongly Agree", traits: ["N"] },
      B: { text: "Agree", traits: ["N"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["S"] }
    }
  },
  {
    text: "If someone asks for my opinion, I usually give the most practical or logical answer.",
    options: {
      A: { text: "Strongly Agree", traits: ["T"] },
      B: { text: "Agree", traits: ["T"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["F"] }
    }
  },
  {
    text: "I like having my schedule figured out before the day starts.",
    options: {
      A: { text: "Strongly Agree", traits: ["J"] },
      B: { text: "Agree", traits: ["J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["P"] }
    }
  },
  {
    text: "I get a boost of energy from hanging out with a group of people after school.",
    options: {
      A: { text: "Strongly Agree", traits: ["E"] },
      B: { text: "Agree", traits: ["E"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["I"] }
    }
  },
  {
    text: "When solving a problem, I look for real-world facts instead of hunches or feelings.",
    options: {
      A: { text: "Strongly Agree", traits: ["S"] },
      B: { text: "Agree", traits: ["S"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["N"] }
    }
  },
  {
    text: "I often think about how my decisions affect the people around me.",
    options: {
      A: { text: "Strongly Agree", traits: ["F"] },
      B: { text: "Agree", traits: ["F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["T"] }
    }
  },
  {
    text: "I feel overwhelmed when someone tries to pin me to a strict plan.",
    options: {
      A: { text: "Strongly Agree", traits: ["P"] },
      B: { text: "Agree", traits: ["P"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["J"] }
    }
  },
  {
    text: "At lunch, I'd rather sit with one close friend than a big group.",
    options: {
      A: { text: "Strongly Agree", traits: ["I"] },
      B: { text: "Agree", traits: ["I"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["E"] }
    }
  },
  {
    text: "I enjoy figuring out how to fix broken tech or gadgets.",
    options: {
      A: { text: "Strongly Agree", traits: ["T"] },
      B: { text: "Agree", traits: ["T"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["F"] }
    }
  },
  {
    text: "I feel most comfortable when I stick to the same morning routine every day.",
    options: {
      A: { text: "Strongly Agree", traits: ["J"] },
      B: { text: "Agree", traits: ["J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["P"] }
    }
  },
  {
    text: "I'd rather invent my own way to do an assignment than follow the instructions exactly.",
    options: {
      A: { text: "Strongly Agree", traits: ["N"] },
      B: { text: "Agree", traits: ["N"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["S"] }
    }
  },
  {
    text: "When someone's upset, I feel the urge to comfort or help them.",
    options: {
      A: { text: "Strongly Agree", traits: ["F"] },
      B: { text: "Agree", traits: ["F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["T"] }
    }
  },
  {
    text: "If no one takes the lead in a group, I'll usually step up and organize things.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "J"] },
      B: { text: "Agree", traits: ["E", "J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["I", "P"] }
    }
  },
  {
    text: "I'd rather talk about things that are real and current than imaginary or 'what if' stuff.",
    options: {
      A: { text: "Strongly Agree", traits: ["S"] },
      B: { text: "Agree", traits: ["S"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["N"] }
    }
  },
  {
    text: "I get stressed when plans change last minute.",
    options: {
      A: { text: "Strongly Agree", traits: ["J"] },
      B: { text: "Agree", traits: ["J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["P"] }
    }
  },
  {
    text: "I get bored if every day feels the same.",
    options: {
      A: { text: "Strongly Agree", traits: ["P"] },
      B: { text: "Agree", traits: ["P"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["J"] }
    }
  },
  {
    text: "I enjoy writing goals for myself and imagining what I'll do next.",
    options: {
      A: { text: "Strongly Agree", traits: ["N"] },
      B: { text: "Agree", traits: ["N"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["S"] }
    }
  },
  {
    text: "I like breaking tasks into steps instead of jumping in randomly.",
    options: {
      A: { text: "Strongly Agree", traits: ["J"] },
      B: { text: "Agree", traits: ["J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["P"] }
    }
  },
  {
    text: "When I need to choose something, I often trust my gut feeling.",
    options: {
      A: { text: "Strongly Agree", traits: ["F"] },
      B: { text: "Agree", traits: ["F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["T"] }
    }
  },
  {
    text: "I'm the kind of person who color-codes notes and keeps things organized.",
    options: {
      A: { text: "Strongly Agree", traits: ["J"] },
      B: { text: "Agree", traits: ["J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["P"] }
    }
  },
  {
    text: "I come alive when I'm doing something artistic, like writing, drawing, or creating.",
    options: {
      A: { text: "Strongly Agree", traits: ["N", "F"] },
      B: { text: "Agree", traits: ["N", "F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["S", "T"] }
    }
  },
  {
    text: "When a friend is hurting, I want to help them feel better even if I don't know how.",
    options: {
      A: { text: "Strongly Agree", traits: ["F"] },
      B: { text: "Agree", traits: ["F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["T"] }
    }
  },
  {
    text: "If a group gets off track, I usually try to get everyone back on task.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "J"] },
      B: { text: "Agree", traits: ["E", "J"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["I", "P"] }
    }
  },
  {
    text: "I notice little details that other people often miss.",
    options: {
      A: { text: "Strongly Agree", traits: ["S"] },
      B: { text: "Agree", traits: ["S"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["N"] }
    }
  },
  {
    text: "If there's a chance to perform or be in the spotlight, I'll probably say yes.",
    options: {
      A: { text: "Strongly Agree", traits: ["E", "N"] },
      B: { text: "Agree", traits: ["E", "N"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["I", "S"] }
    }
  },
  {
    text: "Sometimes I imagine entire stories or scenes in my head just for fun.",
    options: {
      A: { text: "Strongly Agree", traits: ["N"] },
      B: { text: "Agree", traits: ["N"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["S"] }
    }
  },
  {
    text: "I like giving advice when friends ask about relationships or decisions.",
    options: {
      A: { text: "Strongly Agree", traits: ["F"] },
      B: { text: "Agree", traits: ["F"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["T"] }
    }
  },
  {
    text: "When doing schoolwork, I focus more on what's due now than long-term deadlines.",
    options: {
      A: { text: "Strongly Agree", traits: ["S"] },
      B: { text: "Agree", traits: ["S"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["N"] }
    }
  },
  {
    text: "I like hands-on work—like building, designing, or fixing things.",
    options: {
      A: { text: "Strongly Agree", traits: ["S", "T"] },
      B: { text: "Agree", traits: ["S", "T"] },
      C: { text: "Neutral", traits: [] },
      D: { text: "Disagree", traits: ["N", "F"] }
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
      }
    ],
    advancedCareers: [
      {
        title: "Senior Software Architect",
        description: "Lead complex software design decisions and guide development teams",
        averageSalary: "$120,000 - $180,000",
        jobGrowth: "25% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=senior+software+architect"
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
        relevantMajors: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Architecture", "Systems Engineering"]
      },
      {
        name: "Stanford University",
        location: "Stanford, CA",
        programs: ["Computer Science", "Engineering", "Applied Physics"],
        ranking: "#6 overall",
        website: "https://www.stanford.edu/",
        whyGoodFit: "Ideal for Strategists who want to combine technical excellence with entrepreneurial thinking. Stanford's innovation ecosystem matches the INTJ's strategic mindset.",
        relevantMajors: ["Computer Science", "Engineering", "Mathematical & Computational Science", "Management Science & Engineering"]
      },
      {
        name: "Princeton University",
        location: "Princeton, NJ",
        programs: ["Computer Science", "Engineering", "Applied Mathematics"],
        ranking: "#1 overall",
        website: "https://www.princeton.edu/",
        whyGoodFit: "Perfect for Strategists who thrive in intellectually rigorous environments. Princeton's emphasis on undergraduate research aligns with INTJ preferences.",
        relevantMajors: ["Computer Science", "Operations Research & Financial Engineering", "Applied Mathematics", "Electrical Engineering"]
      },
      // Tier 2: UChicago, Columbia, Johns Hopkins
      {
        name: "University of Chicago",
        location: "Chicago, IL",
        programs: ["Computer Science", "Economics", "Mathematics"],
        ranking: "#6 overall",
        website: "https://www.uchicago.edu/",
        whyGoodFit: "Ideal for Strategists who thrive on intellectual rigor and analytical thinking. UChicago's emphasis on critical inquiry matches the INTJ's strategic planning.",
        relevantMajors: ["Computer Science", "Economics", "Statistics", "Applied Mathematics", "Data Science"]
      },
      {
        name: "Columbia University",
        location: "New York, NY",
        programs: ["Computer Science", "Engineering", "Applied Mathematics"],
        ranking: "#12 overall",
        website: "https://www.columbia.edu/",
        whyGoodFit: "Excellent for Strategists who want to combine technical expertise with real-world impact. Columbia's NYC location and research opportunities provide perfect environment for strategic innovation.",
        relevantMajors: ["Computer Science", "Industrial Engineering & Operations Research", "Applied Mathematics", "Financial Engineering"]
      },
      {
        name: "Johns Hopkins University",
        location: "Baltimore, MD",
        programs: ["Computer Science", "Engineering", "Applied Mathematics"],
        ranking: "#9 overall",
        website: "https://www.jhu.edu/",
        whyGoodFit: "Perfect for Strategists interested in research and innovation. JHU's world-class research opportunities align with the INTJ's analytical and strategic nature.",
        relevantMajors: ["Computer Science", "Applied Mathematics & Statistics", "Electrical Engineering", "Biomedical Engineering"]
      },
      // Tier 3: Carnegie Mellon, UC Berkeley, Rice
      {
        name: "Carnegie Mellon University",
        location: "Pittsburgh, PA",
        programs: ["Computer Science", "Information Systems", "Robotics"],
        ranking: "#25 overall",
        website: "https://www.cmu.edu/",
        whyGoodFit: "Perfect for Strategists who love the intersection of technology and human behavior. CMU's data-driven approach aligns with the INTJ's analytical nature.",
        relevantMajors: ["Computer Science", "Information Systems", "Robotics", "Human-Computer Interaction", "Electrical & Computer Engineering"]
      },
      {
        name: "University of California, Berkeley",
        location: "Berkeley, CA",
        programs: ["Computer Science", "Engineering", "Data Science"],
        ranking: "#20 overall",
        website: "https://www.berkeley.edu/",
        whyGoodFit: "Excellent for Strategists who thrive in intellectually rigorous environments. UC Berkeley's world-renowned STEM programs provide perfect setting for strategic thinking.",
        relevantMajors: ["Computer Science", "Electrical Engineering & Computer Science", "Data Science", "Applied Mathematics"]
      },
      {
        name: "Rice University",
        location: "Houston, TX",
        programs: ["Computer Science", "Engineering", "Applied Mathematics"],
        ranking: "#17 overall",
        website: "https://www.rice.edu/",
        whyGoodFit: "Excellent for Strategists who value close-knit academic communities with rigorous programs. Rice's collaborative environment provides ideal conditions for strategic development.",
        relevantMajors: ["Computer Science", "Electrical & Computer Engineering", "Applied Mathematics", "Statistics"]
      },
      // Tier 4: Georgia Tech, UIUC, UCSD
      {
        name: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        programs: ["Engineering", "Computer Science", "Technology"],
        ranking: "#33 overall",
        website: "https://www.gatech.edu/",
        whyGoodFit: "Perfect for Strategists who want to bridge technology and business. Georgia Tech's strong engineering programs align with the INTJ's systematic approach.",
        relevantMajors: ["Computer Science", "Industrial Engineering", "Systems Engineering", "Business Administration"]
      },
      {
        name: "University of Illinois Urbana-Champaign",
        location: "Urbana, IL",
        programs: ["Computer Science", "Engineering", "Mathematics"],
        ranking: "#41 overall",
        website: "https://www.illinois.edu/",
        whyGoodFit: "Great for Strategists who want world-class technical education. UIUC's top-ranked programs provide excellent preparation for strategic leadership.",
        relevantMajors: ["Computer Science", "Industrial Engineering", "Applied Mathematics", "Systems Engineering"]
      },
      {
        name: "University of California, San Diego",
        location: "San Diego, CA",
        programs: ["Computer Science", "Engineering", "Data Science"],
        ranking: "#28 overall",
        website: "https://www.ucsd.edu/",
        whyGoodFit: "Excellent for Strategists interested in cutting-edge technology and research. UCSD's strong STEM programs provide ideal conditions for strategic innovation.",
        relevantMajors: ["Computer Science", "Data Science", "Electrical Engineering", "Applied Mathematics"]
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
      }
    ],
    advancedCareers: [
      {
        title: "Principal Research Scientist",
        description: "Lead major research initiatives and breakthrough discoveries",
        averageSalary: "$130,000 - $200,000",
        jobGrowth: "8% (faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=principal+research+scientist"
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
      { name: "Curiosity", percentage: 89 },
      { name: "Logical Thinking", percentage: 85 },
      { name: "Independence", percentage: 82 },
      { name: "Innovation", percentage: 87 },
      { name: "Theoretical Understanding", percentage: 84 },
      { name: "Artistic", percentage: 52 }
    ]
  }

  // ... Continue with all other personality types following the same pattern
};