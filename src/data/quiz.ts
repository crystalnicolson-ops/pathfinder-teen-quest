import { Question, PersonalityResult, PersonalityType } from '@/types/quiz';

export const questions: Question[] = [
  {
    text: "How do you feel about group projects?",
    options: {
      A: { text: "Love organizing them and keeping everyone on task", traits: ["I", "S", "T", "J"] },
      B: { text: "Prefer working alone or with someone creative", traits: ["I", "N", "F", "P"] },
      C: { text: "They're fun if we don't take it too seriously", traits: ["E", "N", "T", "P"] },
      D: { text: "I make sure everyone feels heard and included", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You forgot your homework! You…",
    options: {
      A: { text: "Stress — you never forget things like that", traits: ["I", "S", "T", "J"] },
      B: { text: "Make up an excuse", traits: ["I", "N", "F", "P"] },
      C: { text: "Laugh it off and talk your way out", traits: ["E", "N", "T", "P"] },
      D: { text: "Apologize and try to fix it", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "What's your note-taking style?",
    options: {
      A: { text: "Bullet points, highlights, organized folders", traits: ["I", "S", "T", "J"] },
      B: { text: "Doodles in the margins, colorful notes", traits: ["I", "N", "F", "P"] },
      C: { text: "Barely any — you remember most of it anyway", traits: ["E", "N", "T", "P"] },
      D: { text: "Neat notes with reminders to help others", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You're at a party. What are you doing?",
    options: {
      A: { text: "Talking to a few close friends", traits: ["I", "S", "T", "J"] },
      B: { text: "Taking selfies and vibing with music", traits: ["I", "N", "F", "P"] },
      C: { text: "Dancing, laughing, being loud", traits: ["E", "N", "T", "P"] },
      D: { text: "Helping clean up or check on people", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your friend is upset. You…",
    options: {
      A: { text: "Offer advice to fix the problem", traits: ["I", "S", "T", "J"] },
      B: { text: "Write them a note", traits: ["I", "N", "F", "P"] },
      C: { text: "Distract them with fun", traits: ["E", "N", "T", "P"] },
      D: { text: "Sit quietly with them and listen", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You get a big school assignment. You…",
    options: {
      A: { text: "Make a checklist and start early", traits: ["I", "S", "T", "J"] },
      B: { text: "Brainstorm creative ideas first", traits: ["I", "N", "F", "P"] },
      C: { text: "Wait until you're in the mood to do it", traits: ["E", "N", "T", "P"] },
      D: { text: "Ask others for help and get to work", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your ideal weekend activity is…",
    options: {
      A: { text: "Reading, organizing, or setting goals", traits: ["I", "S", "T", "J"] },
      B: { text: "Drawing, writing, or creating", traits: ["I", "N", "F", "P"] },
      C: { text: "Hanging out, trying something new", traits: ["E", "N", "T", "P"] },
      D: { text: "Helping someone or baking with friends", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When someone disagrees with you, you…",
    options: {
      A: { text: "Explain your logic calmly", traits: ["I", "S", "T", "J"] },
      B: { text: "Try to find middle ground", traits: ["I", "N", "F", "P"] },
      C: { text: "Debate! You love a good challenge", traits: ["E", "N", "T", "P"] },
      D: { text: "Let it go — conflict is uncomfortable", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your dream job involves…",
    options: {
      A: { text: "Planning, researching, analyzing", traits: ["I", "S", "T", "J"] },
      B: { text: "Creating, inspiring, expressing", traits: ["I", "N", "F", "P"] },
      C: { text: "Leading, performing, influencing", traits: ["E", "N", "T", "P"] },
      D: { text: "Helping, teaching, healing", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You're happiest when…",
    options: {
      A: { text: "Everything goes according to plan", traits: ["I", "S", "T", "J"] },
      B: { text: "You're creating something meaningful", traits: ["I", "N", "F", "P"] },
      C: { text: "You're in the middle of the action", traits: ["E", "N", "T", "P"] },
      D: { text: "The people around you are doing well", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You're asked to give a presentation. You…",
    options: {
      A: { text: "Prepare slides, notes, and rehearse", traits: ["I", "S", "T", "J"] },
      B: { text: "Add creativity and personality to it", traits: ["I", "N", "F", "P"] },
      C: { text: "Wing it with confidence and energy", traits: ["E", "N", "T", "P"] },
      D: { text: "Focus on helping the audience understand", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You find out your plans suddenly changed. You…",
    options: {
      A: { text: "Get annoyed — you prefer structure", traits: ["I", "S", "T", "J"] },
      B: { text: "Roll with it and get creative", traits: ["I", "N", "F", "P"] },
      C: { text: "Love it — you enjoy spontaneity", traits: ["E", "N", "T", "P"] },
      D: { text: "Ask what others want to do instead", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You get lost somewhere new. What do you do?",
    options: {
      A: { text: "Use your phone or retrace your steps logically", traits: ["I", "S", "T", "J"] },
      B: { text: "Stay calm and look around for inspiration", traits: ["I", "N", "F", "P"] },
      C: { text: "Ask someone right away — adventure!", traits: ["E", "N", "T", "P"] },
      D: { text: "Try to stay safe and text someone for help", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your favorite way to relax is…",
    options: {
      A: { text: "Reading, planning, or puzzles", traits: ["I", "S", "T", "J"] },
      B: { text: "Drawing, journaling, or music", traits: ["I", "N", "F", "P"] },
      C: { text: "Watching something fun or being active", traits: ["E", "N", "T", "P"] },
      D: { text: "Spending time with someone you care about", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "People usually describe you as…",
    options: {
      A: { text: "Focused and responsible", traits: ["I", "S", "T", "J"] },
      B: { text: "Creative and thoughtful", traits: ["I", "N", "F", "P"] },
      C: { text: "Energetic and outgoing", traits: ["E", "N", "T", "P"] },
      D: { text: "Kind and dependable", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You're shopping for clothes. You pick…",
    options: {
      A: { text: "Classic, functional styles", traits: ["I", "S", "T", "J"] },
      B: { text: "Something artistic or original", traits: ["I", "N", "F", "P"] },
      C: { text: "Trendy and bold looks", traits: ["E", "N", "T", "P"] },
      D: { text: "Comfy, coordinated outfits", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You get a new app. First thing you do?",
    options: {
      A: { text: "Read about it and explore the features", traits: ["I", "S", "T", "J"] },
      B: { text: "Customize it and make it your own", traits: ["I", "N", "F", "P"] },
      C: { text: "Jump in and figure it out while using it", traits: ["E", "N", "T", "P"] },
      D: { text: "Ask someone how it works and try it together", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You're best at…",
    options: {
      A: { text: "Solving problems and making plans", traits: ["I", "S", "T", "J"] },
      B: { text: "Expressing feelings and creativity", traits: ["I", "N", "F", "P"] },
      C: { text: "Taking charge and energizing others", traits: ["E", "N", "T", "P"] },
      D: { text: "Supporting people and noticing needs", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You care most about…",
    options: {
      A: { text: "Achieving goals", traits: ["I", "S", "T", "J"] },
      B: { text: "Being authentic", traits: ["I", "N", "F", "P"] },
      C: { text: "Enjoying life", traits: ["E", "N", "T", "P"] },
      D: { text: "Helping others", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You love when school lets you…",
    options: {
      A: { text: "Do a research project", traits: ["I", "S", "T", "J"] },
      B: { text: "Create a video or artwork", traits: ["I", "N", "F", "P"] },
      C: { text: "Present or debate", traits: ["E", "N", "T", "P"] },
      D: { text: "Work in a group or mentor someone", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your dream would be to…",
    options: {
      A: { text: "Invent something useful", traits: ["I", "S", "T", "J"] },
      B: { text: "Publish a book or album", traits: ["I", "N", "F", "P"] },
      C: { text: "Be famous or run a business", traits: ["E", "N", "T", "P"] },
      D: { text: "Make a real difference in others' lives", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When solving a problem, you…",
    options: {
      A: { text: "Look at the facts and break it down", traits: ["I", "S", "T", "J"] },
      B: { text: "Think about how people feel", traits: ["I", "N", "F", "P"] },
      C: { text: "Act fast and adjust along the way", traits: ["E", "N", "T", "P"] },
      D: { text: "Ask for ideas and build a solution together", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You're planning your weekend. You…",
    options: {
      A: { text: "Schedule everything ahead", traits: ["I", "S", "T", "J"] },
      B: { text: "Go with the flow", traits: ["I", "N", "F", "P"] },
      C: { text: "Wait and see what pops up", traits: ["E", "N", "T", "P"] },
      D: { text: "Ask friends and fit around them", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "In a group chat, you're the one who…",
    options: {
      A: { text: "Shares reminders and plans", traits: ["I", "S", "T", "J"] },
      B: { text: "Sends memes or thoughtful messages", traits: ["I", "N", "F", "P"] },
      C: { text: "Starts convos or keeps it lively", traits: ["E", "N", "T", "P"] },
      D: { text: "Makes sure no one's being left out", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You're building a school club. You focus on…",
    options: {
      A: { text: "The rules and structure", traits: ["I", "S", "T", "J"] },
      B: { text: "The logo, theme, or creative angle", traits: ["I", "N", "F", "P"] },
      C: { text: "Promotion and exciting events", traits: ["E", "N", "T", "P"] },
      D: { text: "Teamwork and making it welcoming", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your biggest fear is…",
    options: {
      A: { text: "Failing or being unprepared", traits: ["I", "S", "T", "J"] },
      B: { text: "Being misunderstood or ignored", traits: ["I", "N", "F", "P"] },
      C: { text: "Missing out or being bored", traits: ["E", "N", "T", "P"] },
      D: { text: "Hurting someone's feelings", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "What's your morning routine like?",
    options: {
      A: { text: "Consistent and timely", traits: ["I", "S", "T", "J"] },
      B: { text: "Calm and slow", traits: ["I", "N", "F", "P"] },
      C: { text: "Rushed but fun", traits: ["E", "N", "T", "P"] },
      D: { text: "Focused on others (like helping family)", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your ideal workspace looks like…",
    options: {
      A: { text: "Clean and organized", traits: ["I", "S", "T", "J"] },
      B: { text: "Personalized and cozy", traits: ["I", "N", "F", "P"] },
      C: { text: "Active and stimulating", traits: ["E", "N", "T", "P"] },
      D: { text: "Calm and supportive", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You tend to learn best by…",
    options: {
      A: { text: "Reading and studying", traits: ["I", "S", "T", "J"] },
      B: { text: "Visuals and hands-on creativity", traits: ["I", "N", "F", "P"] },
      C: { text: "Doing it while moving or trying", traits: ["E", "N", "T", "P"] },
      D: { text: "Talking it out or helping someone else", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You want to be remembered as…",
    options: {
      A: { text: "Smart and reliable", traits: ["I", "S", "T", "J"] },
      B: { text: "Unique and imaginative", traits: ["I", "N", "F", "P"] },
      C: { text: "Fun and inspiring", traits: ["E", "N", "T", "P"] },
      D: { text: "Caring and loyal", traits: ["I", "S", "F", "J"] }
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
    description: "🧠 The Strategist (INTJ) – \"I plan things 10 steps ahead.\" You love long-term goals and deep thinking. You're excellent at STEM and leadership.",
    careers: [
      {
        title: "Software Architect",
        description: "Design complex software systems and plan technical strategies",
        averageSalary: "$120,000 - $180,000",
        jobGrowth: "22% (much faster than average)",
        indeedLink: "https://www.indeed.com/jobs?q=software+architect"
      },
      {
        title: "Systems Engineer",
        description: "Design and manage complex engineering systems",
        averageSalary: "$85,000 - $130,000",
        jobGrowth: "7% (as fast as average)",
        indeedLink: "https://www.indeed.com/jobs?q=systems+engineer"
      }
    ],
    colleges: [
      {
        name: "Massachusetts Institute of Technology",
        location: "Cambridge, MA",
        programs: ["Computer Science", "Engineering", "Mathematics"],
        ranking: "#2 overall",
        website: "https://www.mit.edu/"
      },
      {
        name: "Stanford University",
        location: "Stanford, CA", 
        programs: ["Computer Science", "Engineering", "Applied Physics"],
        ranking: "#6 overall",
        website: "https://www.stanford.edu/"
      },
      {
        name: "Carnegie Mellon University",
        location: "Pittsburgh, PA",
        programs: ["Computer Science", "Information Systems", "Robotics"],
        ranking: "#25 overall",
        website: "https://www.cmu.edu/"
      }
    ]
  },
  "The Inventor": {
    type: "The Inventor",
    description: "🧪 The Inventor (INTP) – \"I like figuring out how things work.\" You love curiosity, experiments, and building. You're great at puzzles and logic.",
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
      }
    ],
    colleges: [
      {
        name: "California Institute of Technology",
        location: "Pasadena, CA",
        programs: ["Computer Science", "Engineering", "Applied Physics"],
        ranking: "#9 overall",
        website: "https://www.caltech.edu/"
      },
      {
        name: "University of California, Berkeley",
        location: "Berkeley, CA",
        programs: ["Computer Science", "Engineering", "Physics"],
        ranking: "#22 overall", 
        website: "https://www.berkeley.edu/"
      },
      {
        name: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        programs: ["Computer Science", "Engineering", "Research"],
        ranking: "#38 overall",
        website: "https://www.gatech.edu/"
      }
    ]
  },
  "The Boss": {
    type: "The Boss",
    description: "🧑‍💼 The Boss (ENTJ) – \"I take charge and get things done.\" You love leading and making plans. You're great at debating and organizing.",
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
      }
    ],
    colleges: [
      {
        name: "University of Pennsylvania (Wharton)",
        location: "Philadelphia, PA",
        programs: ["Business Administration", "Management", "Economics"],
        ranking: "#1 in Business",
        website: "https://www.wharton.upenn.edu/"
      },
      {
        name: "Harvard University",
        location: "Cambridge, MA",
        programs: ["Business", "Economics", "Government"],
        ranking: "#3 overall",
        website: "https://www.harvard.edu/"
      },
      {
        name: "Northwestern University",
        location: "Evanston, IL", 
        programs: ["Business", "Economics", "Political Science"],
        ranking: "#9 overall",
        website: "https://www.northwestern.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        programs: ["Business", "Communications", "Innovation"],
        ranking: "#27 overall",
        website: "https://www.usc.edu/"
      },
      {
        name: "New York University",
        location: "New York, NY",
        programs: ["Business", "Media Studies", "Entrepreneurship"],
        ranking: "#30 overall",
        website: "https://www.nyu.edu/"
      },
      {
        name: "University of Texas at Austin",
        location: "Austin, TX",
        programs: ["Business", "Communications", "Technology"],
        ranking: "#38 overall",
        website: "https://www.utexas.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "Yale University",
        location: "New Haven, CT",
        programs: ["Psychology", "Social Work", "Public Health"],
        ranking: "#5 overall",
        website: "https://www.yale.edu/"
      },
      {
        name: "University of Chicago",
        location: "Chicago, IL",
        programs: ["Psychology", "Social Work", "Public Policy"],
        ranking: "#6 overall",
        website: "https://www.uchicago.edu/"
      },
      {
        name: "Vanderbilt University",
        location: "Nashville, TN",
        programs: ["Psychology", "Human Development", "Social Work"],
        ranking: "#13 overall",
        website: "https://www.vanderbilt.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "Rhode Island School of Design",
        location: "Providence, RI",
        programs: ["Graphic Design", "Game Design", "Digital Media"],
        ranking: "#1 in Art & Design",
        website: "https://www.risd.edu/"
      },
      {
        name: "California Institute of the Arts",
        location: "Valencia, CA",
        programs: ["Animation", "Art", "Creative Writing"],
        ranking: "#6 in Art & Design",
        website: "https://calarts.edu/"
      },
      {
        name: "Parsons School of Design",
        location: "New York, NY",
        programs: ["Design & Technology", "Illustration", "Fine Arts"],
        ranking: "#3 in Art & Design",
        website: "https://www.newschool.edu/parsons/"
      }
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
      }
    ],
    colleges: [
      {
        name: "Teachers College, Columbia University",
        location: "New York, NY",
        programs: ["Education", "Psychology", "Human Development"],
        ranking: "#1 in Education",
        website: "https://www.tc.columbia.edu/"
      },
      {
        name: "Harvard Graduate School of Education",
        location: "Cambridge, MA",
        programs: ["Education Policy", "Human Development", "Teaching"],
        ranking: "#2 in Education",
        website: "https://www.gse.harvard.edu/"
      },
      {
        name: "University of California, Los Angeles",
        location: "Los Angeles, CA",
        programs: ["Education", "Psychology", "Social Welfare"],
        ranking: "#20 overall",
        website: "https://www.ucla.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        programs: ["Film & Media", "Communications", "Journalism"],
        ranking: "#27 overall",
        website: "https://www.usc.edu/"
      },
      {
        name: "New York University",
        location: "New York, NY",
        programs: ["Media Studies", "Film", "Creative Writing"],
        ranking: "#30 overall",
        website: "https://www.nyu.edu/"
      },
      {
        name: "University of California, Berkeley",
        location: "Berkeley, CA",
        programs: ["Media Studies", "English", "Anthropology"],
        ranking: "#22 overall",
        website: "https://www.berkeley.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "University of Pennsylvania",
        location: "Philadelphia, PA",
        programs: ["Business", "Accounting", "Finance"],
        ranking: "#8 overall",
        website: "https://www.upenn.edu/"
      },
      {
        name: "University of Michigan",
        location: "Ann Arbor, MI",
        programs: ["Business", "Engineering", "Information"],
        ranking: "#21 overall",
        website: "https://umich.edu/"
      },
      {
        name: "University of Virginia",
        location: "Charlottesville, VA",
        programs: ["Business", "Commerce", "Engineering"],
        ranking: "#24 overall",
        website: "https://www.virginia.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "Johns Hopkins University",
        location: "Baltimore, MD",
        programs: ["Nursing", "Public Health", "Education"],
        ranking: "#9 overall",
        website: "https://www.jhu.edu/"
      },
      {
        name: "University of Pennsylvania",
        location: "Philadelphia, PA",
        programs: ["Nursing", "Education", "Social Work"],
        ranking: "#8 overall",
        website: "https://www.upenn.edu/"
      },
      {
        name: "Vanderbilt University",
        location: "Nashville, TN",
        programs: ["Nursing", "Education", "Human Development"],
        ranking: "#13 overall",
        website: "https://www.vanderbilt.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "University of Pennsylvania (Wharton)",
        location: "Philadelphia, PA",
        programs: ["Business Administration", "Management", "Operations"],
        ranking: "#1 in Business",
        website: "https://www.wharton.upenn.edu/"
      },
      {
        name: "Northwestern University (Kellogg)",
        location: "Evanston, IL",
        programs: ["Business", "Management", "Operations"],
        ranking: "#3 in Business",
        website: "https://www.northwestern.edu/"
      },
      {
        name: "University of Chicago (Booth)",
        location: "Chicago, IL",
        programs: ["Business", "Economics", "Management"],
        ranking: "#6 overall",
        website: "https://www.uchicago.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "Cornell University",
        location: "Ithaca, NY",
        programs: ["Hotel Administration", "Human Relations", "Communications"],
        ranking: "#17 overall",
        website: "https://www.cornell.edu/"
      },
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        programs: ["Public Relations", "Communications", "Business"],
        ranking: "#27 overall",
        website: "https://www.usc.edu/"
      },
      {
        name: "Boston University",
        location: "Boston, MA",
        programs: ["Communications", "Hospitality", "Public Relations"],
        ranking: "#43 overall",
        website: "https://www.bu.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "Purdue University",
        location: "West Lafayette, IN",
        programs: ["Engineering Technology", "Aviation", "Computer Graphics"],
        ranking: "#49 overall",
        website: "https://www.purdue.edu/"
      },
      {
        name: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        programs: ["Mechanical Engineering", "Aerospace Engineering", "Industrial Design"],
        ranking: "#38 overall",
        website: "https://www.gatech.edu/"
      },
      {
        name: "Virginia Tech",
        location: "Blacksburg, VA",
        programs: ["Engineering", "Technology", "Construction"],
        ranking: "#75 overall",
        website: "https://www.vt.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "Art Center College of Design",
        location: "Pasadena, CA",
        programs: ["Photography", "Fine Arts", "Illustration"],
        ranking: "Top Art School",
        website: "https://www.artcenter.edu/"
      },
      {
        name: "Rhode Island School of Design",
        location: "Providence, RI",
        programs: ["Photography", "Interior Architecture", "Fine Arts"],
        ranking: "#1 in Art & Design",
        website: "https://www.risd.edu/"
      },
      {
        name: "Savannah College of Art and Design",
        location: "Savannah, GA",
        programs: ["Photography", "Interior Design", "Fine Arts"],
        ranking: "Top Creative School",
        website: "https://www.scad.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "University of Florida",
        location: "Gainesville, FL",
        programs: ["Exercise Science", "Sports Management", "Emergency Management"],
        ranking: "#28 overall",
        website: "https://www.ufl.edu/"
      },
      {
        name: "Arizona State University",
        location: "Tempe, AZ",
        programs: ["Exercise Science", "Kinesiology", "Emergency Management"],
        ranking: "#103 overall",
        website: "https://www.asu.edu/"
      },
      {
        name: "Penn State University",
        location: "University Park, PA",
        programs: ["Kinesiology", "Recreation & Sports Management", "Health Sciences"],
        ranking: "#63 overall",
        website: "https://www.psu.edu/"
      }
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
      }
    ],
    colleges: [
      {
        name: "Juilliard School",
        location: "New York, NY",
        programs: ["Dance", "Drama", "Music"],
        ranking: "Top Performing Arts School",
        website: "https://www.juilliard.edu/"
      },
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        programs: ["Theatre", "Dance", "Cinematic Arts"],
        ranking: "#27 overall",
        website: "https://www.usc.edu/"
      },
      {
        name: "New York University (Tisch)",
        location: "New York, NY",
        programs: ["Drama", "Dance", "Film & TV"],
        ranking: "#30 overall",
        website: "https://www.nyu.edu/"
      }
    ]
  }
};