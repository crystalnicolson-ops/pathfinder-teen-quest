import { Question, PersonalityResult, PersonalityType } from '@/types/quiz';

export const questions: Question[] = [
  {
    text: "How do you feel about group projects?",
    options: {
      A: { text: "They're fun if we don't take it too seriously", traits: ["E", "N", "T", "P"] },
      B: { text: "Love organizing them and keeping everyone on task", traits: ["I", "S", "T", "J"] },
      C: { text: "I make sure everyone feels heard and included", traits: ["I", "S", "F", "J"] },
      D: { text: "Prefer working alone or with someone creative", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "You forgot your homework! You…",
    options: {
      A: { text: "Apologize and try to fix it", traits: ["I", "S", "F", "J"] },
      B: { text: "Laugh it off and talk your way out", traits: ["E", "N", "T", "P"] },
      C: { text: "Stress — you never forget things like that", traits: ["I", "S", "T", "J"] },
      D: { text: "Make up an excuse", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "What's your note-taking style?",
    options: {
      A: { text: "Doodles in the margins, colorful notes", traits: ["I", "N", "F", "P"] },
      B: { text: "Neat notes with reminders to help others", traits: ["I", "S", "F", "J"] },
      C: { text: "Barely any — you remember most of it anyway", traits: ["E", "N", "T", "P"] },
      D: { text: "Bullet points, highlights, organized folders", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "You're at a party. What are you doing?",
    options: {
      A: { text: "Helping clean up or check on people", traits: ["I", "S", "F", "J"] },
      B: { text: "Dancing, laughing, being loud", traits: ["E", "N", "T", "P"] },
      C: { text: "Taking selfies and vibing with music", traits: ["I", "N", "F", "P"] },
      D: { text: "Talking to a few close friends", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "Your friend is upset. You…",
    options: {
      A: { text: "Write them a note", traits: ["I", "N", "F", "P"] },
      B: { text: "Sit quietly with them and listen", traits: ["I", "S", "F", "J"] },
      C: { text: "Offer advice to fix the problem", traits: ["I", "S", "T", "J"] },
      D: { text: "Distract them with fun", traits: ["E", "N", "T", "P"] }
    }
  },
  {
    text: "You get a big school assignment. You…",
    options: {
      A: { text: "Wait until you're in the mood to do it", traits: ["E", "N", "T", "P"] },
      B: { text: "Brainstorm creative ideas first", traits: ["I", "N", "F", "P"] },
      C: { text: "Ask others for help and get to work", traits: ["I", "S", "F", "J"] },
      D: { text: "Make a checklist and start early", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "Your ideal weekend activity is…",
    options: {
      A: { text: "Drawing, writing, or creating", traits: ["I", "N", "F", "P"] },
      B: { text: "Reading, organizing, or setting goals", traits: ["I", "S", "T", "J"] },
      C: { text: "Helping someone or baking with friends", traits: ["I", "S", "F", "J"] },
      D: { text: "Hanging out, trying something new", traits: ["E", "N", "T", "P"] }
    }
  },
  {
    text: "When someone disagrees with you, you…",
    options: {
      A: { text: "Let it go — conflict is uncomfortable", traits: ["I", "S", "F", "J"] },
      B: { text: "Explain your logic calmly", traits: ["I", "S", "T", "J"] },
      C: { text: "Debate! You love a good challenge", traits: ["E", "N", "T", "P"] },
      D: { text: "Try to find middle ground", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "Your dream job involves…",
    options: {
      A: { text: "Leading, performing, influencing", traits: ["E", "N", "T", "P"] },
      B: { text: "Helping, teaching, healing", traits: ["I", "S", "F", "J"] },
      C: { text: "Creating, inspiring, expressing", traits: ["I", "N", "F", "P"] },
      D: { text: "Planning, researching, analyzing", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "You're happiest when…",
    options: {
      A: { text: "You're creating something meaningful", traits: ["I", "N", "F", "P"] },
      B: { text: "You're in the middle of the action", traits: ["E", "N", "T", "P"] },
      C: { text: "Everything goes according to plan", traits: ["I", "S", "T", "J"] },
      D: { text: "The people around you are doing well", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You're asked to give a presentation. You…",
    options: {
      A: { text: "Focus on helping the audience understand", traits: ["I", "S", "F", "J"] },
      B: { text: "Wing it with confidence and energy", traits: ["E", "N", "T", "P"] },
      C: { text: "Prepare slides, notes, and rehearse", traits: ["I", "S", "T", "J"] },
      D: { text: "Add creativity and personality to it", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "You find out your plans suddenly changed. You…",
    options: {
      A: { text: "Roll with it and get creative", traits: ["I", "N", "F", "P"] },
      B: { text: "Ask what others want to do instead", traits: ["I", "S", "F", "J"] },
      C: { text: "Love it — you enjoy spontaneity", traits: ["E", "N", "T", "P"] },
      D: { text: "Get annoyed — you prefer structure", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "You get lost somewhere new. What do you do?",
    options: {
      A: { text: "Ask someone right away — adventure!", traits: ["E", "N", "T", "P"] },
      B: { text: "Use your phone or retrace your steps logically", traits: ["I", "S", "T", "J"] },
      C: { text: "Try to stay safe and text someone for help", traits: ["I", "S", "F", "J"] },
      D: { text: "Stay calm and look around for inspiration", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "Your favorite way to relax is…",
    options: {
      A: { text: "Spending time with someone you care about", traits: ["I", "S", "F", "J"] },
      B: { text: "Drawing, journaling, or music", traits: ["I", "N", "F", "P"] },
      C: { text: "Reading, planning, or puzzles", traits: ["I", "S", "T", "J"] },
      D: { text: "Watching something fun or being active", traits: ["E", "N", "T", "P"] }
    }
  },
  {
    text: "People usually describe you as…",
    options: {
      A: { text: "Energetic and outgoing", traits: ["E", "N", "T", "P"] },
      B: { text: "Kind and dependable", traits: ["I", "S", "F", "J"] },
      C: { text: "Focused and responsible", traits: ["I", "S", "T", "J"] },
      D: { text: "Creative and thoughtful", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "You're shopping for clothes. You pick…",
    options: {
      A: { text: "Comfy, coordinated outfits", traits: ["I", "S", "F", "J"] },
      B: { text: "Trendy and bold looks", traits: ["E", "N", "T", "P"] },
      C: { text: "Something artistic or original", traits: ["I", "N", "F", "P"] },
      D: { text: "Classic, functional styles", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "You get a new app. First thing you do?",
    options: {
      A: { text: "Customize it and make it your own", traits: ["I", "N", "F", "P"] },
      B: { text: "Ask someone how it works and try it together", traits: ["I", "S", "F", "J"] },
      C: { text: "Jump in and figure it out while using it", traits: ["E", "N", "T", "P"] },
      D: { text: "Read about it and explore the features", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "You're best at…",
    options: {
      A: { text: "Taking charge and energizing others", traits: ["E", "N", "T", "P"] },
      B: { text: "Solving problems and making plans", traits: ["I", "S", "T", "J"] },
      C: { text: "Supporting people and noticing needs", traits: ["I", "S", "F", "J"] },
      D: { text: "Expressing feelings and creativity", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "You care most about…",
    options: {
      A: { text: "Being authentic", traits: ["I", "N", "F", "P"] },
      B: { text: "Enjoying life", traits: ["E", "N", "T", "P"] },
      C: { text: "Helping others", traits: ["I", "S", "F", "J"] },
      D: { text: "Achieving goals", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "You love when school lets you…",
    options: {
      A: { text: "Work in a group or mentor someone", traits: ["I", "S", "F", "J"] },
      B: { text: "Do a research project", traits: ["I", "S", "T", "J"] },
      C: { text: "Present or debate", traits: ["E", "N", "T", "P"] },
      D: { text: "Create a video or artwork", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "Your dream would be to…",
    options: {
      A: { text: "Be famous or run a business", traits: ["E", "N", "T", "P"] },
      B: { text: "Make a real difference in others' lives", traits: ["I", "S", "F", "J"] },
      C: { text: "Invent something useful", traits: ["I", "S", "T", "J"] },
      D: { text: "Publish a book or album", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "When solving a problem, you…",
    options: {
      A: { text: "Think about how people feel", traits: ["I", "N", "F", "P"] },
      B: { text: "Act fast and adjust along the way", traits: ["E", "N", "T", "P"] },
      C: { text: "Ask for ideas and build a solution together", traits: ["I", "S", "F", "J"] },
      D: { text: "Look at the facts and break it down", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "You're planning your weekend. You…",
    options: {
      A: { text: "Ask friends and fit around them", traits: ["I", "S", "F", "J"] },
      B: { text: "Schedule everything ahead", traits: ["I", "S", "T", "J"] },
      C: { text: "Wait and see what pops up", traits: ["E", "N", "T", "P"] },
      D: { text: "Go with the flow", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "In a group chat, you're the one who…",
    options: {
      A: { text: "Starts convos or keeps it lively", traits: ["E", "N", "T", "P"] },
      B: { text: "Makes sure no one's being left out", traits: ["I", "S", "F", "J"] },
      C: { text: "Sends memes or thoughtful messages", traits: ["I", "N", "F", "P"] },
      D: { text: "Shares reminders and plans", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "You're building a school club. You focus on…",
    options: {
      A: { text: "Promotion and exciting events", traits: ["E", "N", "T", "P"] },
      B: { text: "The logo, theme, or creative angle", traits: ["I", "N", "F", "P"] },
      C: { text: "The rules and structure", traits: ["I", "S", "T", "J"] },
      D: { text: "Teamwork and making it welcoming", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your biggest fear is…",
    options: {
      A: { text: "Hurting someone's feelings", traits: ["I", "S", "F", "J"] },
      B: { text: "Being misunderstood or ignored", traits: ["I", "N", "F", "P"] },
      C: { text: "Missing out or being bored", traits: ["E", "N", "T", "P"] },
      D: { text: "Failing or being unprepared", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "What's your morning routine like?",
    options: {
      A: { text: "Rushed but fun", traits: ["E", "N", "T", "P"] },
      B: { text: "Focused on others (like helping family)", traits: ["I", "S", "F", "J"] },
      C: { text: "Calm and slow", traits: ["I", "N", "F", "P"] },
      D: { text: "Consistent and timely", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "Your ideal workspace looks like…",
    options: {
      A: { text: "Active and stimulating", traits: ["E", "N", "T", "P"] },
      B: { text: "Clean and organized", traits: ["I", "S", "T", "J"] },
      C: { text: "Calm and supportive", traits: ["I", "S", "F", "J"] },
      D: { text: "Personalized and cozy", traits: ["I", "N", "F", "P"] }
    }
  },
  {
    text: "You tend to learn best by…",
    options: {
      A: { text: "Visuals and hands-on creativity", traits: ["I", "N", "F", "P"] },
      B: { text: "Talking it out or helping someone else", traits: ["I", "S", "F", "J"] },
      C: { text: "Doing it while moving or trying", traits: ["E", "N", "T", "P"] },
      D: { text: "Reading and studying", traits: ["I", "S", "T", "J"] }
    }
  },
  {
    text: "You want to be remembered as…",
    options: {
      A: { text: "Caring and loyal", traits: ["I", "S", "F", "J"] },
      B: { text: "Fun and inspiring", traits: ["E", "N", "T", "P"] },
      C: { text: "Smart and reliable", traits: ["I", "S", "T", "J"] },
      D: { text: "Unique and imaginative", traits: ["I", "N", "F", "P"] }
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
      }
    ],
    celebrities: [
      { name: "Zendaya", image: "/src/assets/celebrity-zendaya.jpg" },
      { name: "Tom Holland", image: "/src/assets/celebrity-tom-holland.jpg" },
      { name: "Taylor Hill", image: "/src/assets/celebrity-taylor-hill.jpg" },
      { name: "Noah Schnapp", image: "/src/assets/celebrity-noah-schnapp.jpg" },
      { name: "Sabrina Carpenter", image: "/src/assets/celebrity-sabrina-carpenter.jpg" }
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
      { name: "Billie Eilish", image: "/src/assets/celebrity-billie-eilish.jpg" },
      { name: "Timothée Chalamet", image: "/src/assets/celebrity-timothee-chalamet.jpg" },
      { name: "Sadie Sink", image: "/src/assets/celebrity-sadie-sink.jpg" },
      { name: "Finn Wolfhard", image: "/src/assets/celebrity-finn-wolfhard.jpg" },
      { name: "Maddie Ziegler", image: "/src/assets/celebrity-maddie-ziegler.jpg" }
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
      { name: "Olivia Rodrigo", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Millie Bobby Brown", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Dove Cameron", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "IShowSpeed", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Halle Bailey", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" }
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
      { name: "Ryan Trahan", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Emma Chamberlain", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "KSI", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Charli D'Amelio", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Kai Cenat", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" }
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
      { name: "Taylor Swift", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Shawn Mendes", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Gaten Matarazzo", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Florence Pugh", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Joshua Bassett", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" }
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
      { name: "Conan Gray", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Lana Del Rey", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Gracie Abrams", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Dylan Minnette", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Amandla Stenberg", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" }
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
      { name: "Selena Gomez", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Jack Wright", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Joey King", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Caleb McLaughlin", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Coco Gauff", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" }
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
      { name: "Jenna Ortega", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Doja Cat", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Bella Poarch", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Jaden Hossler", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Avani Gregg", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" }
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
      { name: "JoJo Siwa", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Joshua Rush", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Marcus Scribner", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Maitreyi Ramakrishnan", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Skai Jackson", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" }
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
      { name: "Elle Fanning", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Niall Horan", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Lizzy Greene", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Asher Angel", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Sadie Sink", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" }
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
      { name: "Dixie D'Amelio", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Peyton Elizabeth Lee", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Noah Beck", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Sofia Wylie", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Gavin Casalegno", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" }
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
      { name: "Addison Rae", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Madison Beer", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Ross Lynch", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Peyton List", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Chloe Bailey", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" }
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
      { name: "Jacob Elordi", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Lili Reinhart", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "KJ Apa", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Sabrina Carpenter", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Bryce Hall", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" }
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
      { name: "Tate McRae", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Olivia Rodrigo", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Lil Huddy", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Beabadoobee", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "King Princess", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" }
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
      { name: "JoJo Siwa", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Chloe Kim", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "Jake Paul", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Millie Bobby Brown", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Logan Paul", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" }
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
      { name: "Megan Thee Stallion", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" },
      { name: "IShowSpeed", image: "https://images.unsplash.com/photo-1501286353178-1ec881214838" },
      { name: "Cardi B", image: "https://images.unsplash.com/photo-1441057206919-63d19fac2369" },
      { name: "Lil Nas X", image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901" },
      { name: "Sabrina Carpenter", image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" }
    ]
  }
};