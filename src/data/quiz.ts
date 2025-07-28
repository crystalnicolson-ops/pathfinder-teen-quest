import { Question, PersonalityResult, PersonalityType } from '@/types/quiz';

export const questions: Question[] = [
  {
    text: "How do you feel about group projects?",
    options: {
      A: { text: "Love organizing them", traits: ["I", "S", "T", "J"] },
      B: { text: "Prefer working alone or with someone creative", traits: ["I", "N", "F", "P"] },
      C: { text: "They're fun if we don't take it too seriously", traits: ["E", "N", "T", "P"] },
      D: { text: "I make sure everyone feels heard and included", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You forgot your homework! You…",
    options: {
      A: { text: "Stress — you never forget stuff", traits: ["I", "S", "T", "J"] },
      B: { text: "Make up a creative excuse", traits: ["I", "N", "F", "P"] },
      C: { text: "Laugh it off and talk your way out", traits: ["E", "N", "T", "P"] },
      D: { text: "Apologize and try to fix it", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "What's your note-taking style?",
    options: {
      A: { text: "Bullet points, highlights, organized folders", traits: ["I", "S", "T", "J"] },
      B: { text: "Doodles in the margins, colorful", traits: ["I", "N", "F", "P"] },
      C: { text: "Barely any — you remember most of it", traits: ["E", "N", "T", "P"] },
      D: { text: "Neat notes with reminders to help others too", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You're at a party. What are you doing?",
    options: {
      A: { text: "Talking to a few close friends", traits: ["I", "S", "T", "J"] },
      B: { text: "Taking artsy pics and vibing", traits: ["I", "N", "F", "P"] },
      C: { text: "Dancing, laughing, being loud", traits: ["E", "N", "T", "P"] },
      D: { text: "Helping clean up or check on people", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your friend is upset. You…",
    options: {
      A: { text: "Offer advice to fix the problem", traits: ["I", "S", "T", "J"] },
      B: { text: "Write them a heartfelt note or draw something", traits: ["I", "N", "F", "P"] },
      C: { text: "Distract them with fun", traits: ["E", "N", "T", "P"] },
      D: { text: "Sit quietly with them and listen", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You get a big school assignment. You…",
    options: {
      A: { text: "Make a checklist and start early", traits: ["I", "S", "T", "J"] },
      B: { text: "Sketch or brainstorm ideas first", traits: ["I", "N", "F", "P"] },
      C: { text: "Wait until you're in the mood to do it", traits: ["E", "N", "T", "P"] },
      D: { text: "Ask others for help and get to work", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your ideal weekend activity is…",
    options: {
      A: { text: "Reading, organizing, or working on goals", traits: ["I", "S", "T", "J"] },
      B: { text: "Painting, writing, or imagining new stories", traits: ["I", "N", "F", "P"] },
      C: { text: "Hanging out, going places, trying something new", traits: ["E", "N", "T", "P"] },
      D: { text: "Helping someone, baking, or relaxing with others", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When someone disagrees with you, you…",
    options: {
      A: { text: "Explain your logic and stay calm", traits: ["I", "S", "T", "J"] },
      B: { text: "Try to find middle ground and keep peace", traits: ["I", "N", "F", "P"] },
      C: { text: "Debate! You're not afraid to speak up", traits: ["E", "N", "T", "P"] },
      D: { text: "Let it go and avoid conflict", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When making decisions, you usually…",
    options: {
      A: { text: "Think through all the facts first", traits: ["I", "S", "T", "J"] },
      B: { text: "Go with what feels right in your heart", traits: ["I", "N", "F", "P"] },
      C: { text: "Consider all possibilities and wing it", traits: ["E", "N", "T", "P"] },
      D: { text: "Ask trusted people for their advice", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your room is usually…",
    options: {
      A: { text: "Clean and organized with everything in place", traits: ["I", "S", "T", "J"] },
      B: { text: "Messy but you know where everything is", traits: ["I", "N", "F", "P"] },
      C: { text: "Whatever — you're barely there anyway", traits: ["E", "N", "T", "P"] },
      D: { text: "Cozy and welcoming for friends to hang out", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "You're planning a vacation. You…",
    options: {
      A: { text: "Research everything and make detailed itineraries", traits: ["I", "S", "T", "J"] },
      B: { text: "Dream about magical places you'd love to see", traits: ["I", "N", "F", "P"] },
      C: { text: "Book last minute and figure it out as you go", traits: ["E", "N", "T", "P"] },
      D: { text: "Ask friends where they want to go together", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When you're learning something new, you…",
    options: {
      A: { text: "Follow step-by-step instructions carefully", traits: ["I", "S", "T", "J"] },
      B: { text: "Connect it to things you already love", traits: ["I", "N", "F", "P"] },
      C: { text: "Jump in and learn by doing", traits: ["E", "N", "T", "P"] },
      D: { text: "Find someone to learn with you", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your favorite way to spend money is on…",
    options: {
      A: { text: "Practical things you actually need", traits: ["I", "S", "T", "J"] },
      B: { text: "Art supplies, books, or creative experiences", traits: ["I", "N", "F", "P"] },
      C: { text: "Adventures, concerts, or spontaneous fun", traits: ["E", "N", "T", "P"] },
      D: { text: "Gifts for people you care about", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When you're feeling overwhelmed, you…",
    options: {
      A: { text: "Make a to-do list and tackle it systematically", traits: ["I", "S", "T", "J"] },
      B: { text: "Take a break and do something creative", traits: ["I", "N", "F", "P"] },
      C: { text: "Call a friend and talk it out", traits: ["E", "N", "T", "P"] },
      D: { text: "Take care of your basic needs first", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your ideal job would involve…",
    options: {
      A: { text: "Clear goals, good pay, and job security", traits: ["I", "S", "T", "J"] },
      B: { text: "Expressing yourself and helping others grow", traits: ["I", "N", "F", "P"] },
      C: { text: "Variety, challenge, and meeting new people", traits: ["E", "N", "T", "P"] },
      D: { text: "Working with a close team you really care about", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When you meet new people, you…",
    options: {
      A: { text: "Are polite but take time to open up", traits: ["I", "S", "T", "J"] },
      B: { text: "Look for deeper connections and shared interests", traits: ["I", "N", "F", "P"] },
      C: { text: "Jump right into conversation and have fun", traits: ["E", "N", "T", "P"] },
      D: { text: "Try to make them feel comfortable and included", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your approach to deadlines is…",
    options: {
      A: { text: "Finish early so you don't have to stress", traits: ["I", "S", "T", "J"] },
      B: { text: "Work best under a little pressure", traits: ["I", "N", "F", "P"] },
      C: { text: "Usually last minute but you always pull through", traits: ["E", "N", "T", "P"] },
      D: { text: "Get it done on time, especially if others depend on you", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When choosing classes, you pick…",
    options: {
      A: { text: "Ones that will help your future career goals", traits: ["I", "S", "T", "J"] },
      B: { text: "Whatever sounds interesting and inspiring", traits: ["I", "N", "F", "P"] },
      C: { text: "Fun ones with teachers you've heard are cool", traits: ["E", "N", "T", "P"] },
      D: { text: "Classes your friends are taking too", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your biggest fear is probably…",
    options: {
      A: { text: "Failing at something important", traits: ["I", "S", "T", "J"] },
      B: { text: "Losing your creativity or authenticity", traits: ["I", "N", "F", "P"] },
      C: { text: "Being stuck in a boring routine", traits: ["E", "N", "T", "P"] },
      D: { text: "Letting down people who count on you", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When it comes to rules, you…",
    options: {
      A: { text: "Follow them — they exist for good reasons", traits: ["I", "S", "T", "J"] },
      B: { text: "Follow most of them but question the unfair ones", traits: ["I", "N", "F", "P"] },
      C: { text: "Bend them when they don't make sense", traits: ["E", "N", "T", "P"] },
      D: { text: "Follow them to keep peace and avoid trouble", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your phone is mostly used for…",
    options: {
      A: { text: "Productive apps, calendars, and staying organized", traits: ["I", "S", "T", "J"] },
      B: { text: "Creative apps, music, and inspiration", traits: ["I", "N", "F", "P"] },
      C: { text: "Social media, games, and staying connected", traits: ["E", "N", "T", "P"] },
      D: { text: "Texting close friends and family", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When you're in a bad mood, you…",
    options: {
      A: { text: "Figure out what's wrong and fix it", traits: ["I", "S", "T", "J"] },
      B: { text: "Need space to feel your feelings", traits: ["I", "N", "F", "P"] },
      C: { text: "Do something fun to distract yourself", traits: ["E", "N", "T", "P"] },
      D: { text: "Talk to someone who cares about you", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your biggest strength is probably…",
    options: {
      A: { text: "Being reliable and getting things done", traits: ["I", "S", "T", "J"] },
      B: { text: "Understanding people and being creative", traits: ["I", "N", "F", "P"] },
      C: { text: "Being adaptable and seeing possibilities", traits: ["E", "N", "T", "P"] },
      D: { text: "Caring for others and creating harmony", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "At lunch, you usually…",
    options: {
      A: { text: "Sit with the same group of friends", traits: ["I", "S", "T", "J"] },
      B: { text: "Find a quiet spot to recharge", traits: ["I", "N", "F", "P"] },
      C: { text: "Float between different friend groups", traits: ["E", "N", "T", "P"] },
      D: { text: "Make sure no one is sitting alone", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your dream house would be…",
    options: {
      A: { text: "Practical, well-designed, and efficient", traits: ["I", "S", "T", "J"] },
      B: { text: "Unique, artistic, and full of personality", traits: ["I", "N", "F", "P"] },
      C: { text: "Open, modern, and great for entertaining", traits: ["E", "N", "T", "P"] },
      D: { text: "Cozy, welcoming, and perfect for family", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When working on a team project, you naturally…",
    options: {
      A: { text: "Take charge and keep everyone on track", traits: ["I", "S", "T", "J"] },
      B: { text: "Contribute creative ideas and support others", traits: ["I", "N", "F", "P"] },
      C: { text: "Generate energy and help solve problems", traits: ["E", "N", "T", "P"] },
      D: { text: "Make sure everyone feels included and valued", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your perfect day off would involve…",
    options: {
      A: { text: "Accomplishing personal goals and feeling productive", traits: ["I", "S", "T", "J"] },
      B: { text: "Creating something beautiful or meaningful", traits: ["I", "N", "F", "P"] },
      C: { text: "Trying something new and exciting", traits: ["E", "N", "T", "P"] },
      D: { text: "Spending quality time with people you love", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When facing a big decision, you…",
    options: {
      A: { text: "Research thoroughly and weigh pros and cons", traits: ["I", "S", "T", "J"] },
      B: { text: "Imagine different scenarios and trust your intuition", traits: ["I", "N", "F", "P"] },
      C: { text: "Talk it through with lots of people", traits: ["E", "N", "T", "P"] },
      D: { text: "Consider how it will affect everyone involved", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "Your approach to social media is…",
    options: {
      A: { text: "Minimal posting, mostly for staying informed", traits: ["I", "S", "T", "J"] },
      B: { text: "Sharing art, quotes, and meaningful moments", traits: ["I", "N", "F", "P"] },
      C: { text: "Active posting and engaging with everyone", traits: ["E", "N", "T", "P"] },
      D: { text: "Keeping up with friends and celebrating others", traits: ["I", "S", "F", "J"] }
    }
  },
  {
    text: "When you disagree with a teacher, you…",
    options: {
      A: { text: "Research the topic and present logical arguments", traits: ["I", "S", "T", "J"] },
      B: { text: "Respectfully share your perspective", traits: ["I", "N", "F", "P"] },
      C: { text: "Speak up and debate your point confidently", traits: ["E", "N", "T", "P"] },
      D: { text: "Keep quiet to avoid conflict", traits: ["I", "S", "F", "J"] }
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