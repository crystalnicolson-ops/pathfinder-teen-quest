import { Question, PersonalityResult, PersonalityType } from '@/types/quiz';

export interface DetailedQuestion {
  text: string;
  traits: string[];
  section: string;
}

export const detailedQuestions: DetailedQuestion[] = [
  // Section 1: Social Energy & Communication Style (Q1-10)
  {
    text: "I feel recharged when I'm around other people.",
    traits: ["E"],
    section: "Social Energy & Communication Style"
  },
  {
    text: "I prefer texting or journaling over phone calls.",
    traits: ["I"],
    section: "Social Energy & Communication Style"
  },
  {
    text: "I like being the one to lead group chats or projects.",
    traits: ["E", "J"],
    section: "Social Energy & Communication Style"
  },
  {
    text: "I often need alone time after being social.",
    traits: ["I"],
    section: "Social Energy & Communication Style"
  },
  {
    text: "People say I'm a good listener.",
    traits: ["I", "F"],
    section: "Social Energy & Communication Style"
  },
  {
    text: "I often come up with ideas while talking out loud.",
    traits: ["E", "N"],
    section: "Social Energy & Communication Style"
  },
  {
    text: "I'm more comfortable observing before jumping in.",
    traits: ["I", "S"],
    section: "Social Energy & Communication Style"
  },
  {
    text: "I like getting feedback on my ideas quickly.",
    traits: ["E", "J"],
    section: "Social Energy & Communication Style"
  },
  {
    text: "I enjoy helping others feel included.",
    traits: ["E", "F"],
    section: "Social Energy & Communication Style"
  },
  {
    text: "I'd rather hang with a few close friends than a big group.",
    traits: ["I"],
    section: "Social Energy & Communication Style"
  },

  // Section 2: Decision-Making & Emotional Style (Q11-20)
  {
    text: "I usually go with my gut when deciding.",
    traits: ["F", "P"],
    section: "Decision-Making & Emotional Style"
  },
  {
    text: "I like to analyze all the options before acting.",
    traits: ["T", "J"],
    section: "Decision-Making & Emotional Style"
  },
  {
    text: "I think people's feelings are more important than rules.",
    traits: ["F"],
    section: "Decision-Making & Emotional Style"
  },
  {
    text: "I try to do what makes sense even if it's unpopular.",
    traits: ["T"],
    section: "Decision-Making & Emotional Style"
  },
  {
    text: "I avoid conflict whenever I can.",
    traits: ["F", "I"],
    section: "Decision-Making & Emotional Style"
  },
  {
    text: "I'm good at staying calm under pressure.",
    traits: ["T", "J"],
    section: "Decision-Making & Emotional Style"
  },
  {
    text: "I ask others what they think before I decide.",
    traits: ["F", "E"],
    section: "Decision-Making & Emotional Style"
  },
  {
    text: "I like debating and challenging ideas.",
    traits: ["T", "N"],
    section: "Decision-Making & Emotional Style"
  },
  {
    text: "I tend to second-guess myself.",
    traits: ["F", "P"],
    section: "Decision-Making & Emotional Style"
  },
  {
    text: "I believe honesty is better than sugar-coating.",
    traits: ["T"],
    section: "Decision-Making & Emotional Style"
  },

  // Section 3: Learning Style & Study Habits (Q21-30)
  {
    text: "I remember things best when I draw, color-code, or watch videos.",
    traits: ["Visual", "N"],
    section: "Learning Style & Study Habits"
  },
  {
    text: "I like hands-on experiments more than lectures.",
    traits: ["Hands-on", "S"],
    section: "Learning Style & Study Habits"
  },
  {
    text: "I work better when I have a checklist.",
    traits: ["J", "S"],
    section: "Learning Style & Study Habits"
  },
  {
    text: "I like background music or movement when I study.",
    traits: ["P", "E"],
    section: "Learning Style & Study Habits"
  },
  {
    text: "I prefer projects over tests.",
    traits: ["P", "N"],
    section: "Learning Style & Study Habits"
  },
  {
    text: "I'm organized with my notebooks and folders.",
    traits: ["J", "T"],
    section: "Learning Style & Study Habits"
  },
  {
    text: "I like studying with others.",
    traits: ["E", "Social"],
    section: "Learning Style & Study Habits"
  },
  {
    text: "I learn better when I take breaks or switch things up.",
    traits: ["P", "Kinetic"],
    section: "Learning Style & Study Habits"
  },
  {
    text: "I re-read or rewrite notes to memorize.",
    traits: ["Visual", "J"],
    section: "Learning Style & Study Habits"
  },
  {
    text: "I like using stories or metaphors to understand things.",
    traits: ["N", "F"],
    section: "Learning Style & Study Habits"
  },

  // Section 4: Work Habits & Time Management (Q31-40)
  {
    text: "I usually finish things way before the deadline.",
    traits: ["J", "T"],
    section: "Work Habits & Time Management"
  },
  {
    text: "I need pressure to actually start things.",
    traits: ["P"],
    section: "Work Habits & Time Management"
  },
  {
    text: "I often start multiple projects at once.",
    traits: ["N", "P"],
    section: "Work Habits & Time Management"
  },
  {
    text: "I like detailed instructions.",
    traits: ["S", "J"],
    section: "Work Habits & Time Management"
  },
  {
    text: "I lose track of time when working on something fun.",
    traits: ["N", "P"],
    section: "Work Habits & Time Management"
  },
  {
    text: "I keep track of my goals with reminders or apps.",
    traits: ["J"],
    section: "Work Habits & Time Management"
  },
  {
    text: "I like doing one thing really well, not multitasking.",
    traits: ["S", "I"],
    section: "Work Habits & Time Management"
  },
  {
    text: "I enjoy fast-paced environments.",
    traits: ["E", "T"],
    section: "Work Habits & Time Management"
  },
  {
    text: "I often fix or improve things around me.",
    traits: ["T", "Hands-on"],
    section: "Work Habits & Time Management"
  },
  {
    text: "I like variety and flexibility in my schedule.",
    traits: ["P", "E"],
    section: "Work Habits & Time Management"
  },

  // Section 5: Creative vs Practical Thinking (Q41-50)
  {
    text: "I come up with big ideas easily.",
    traits: ["N", "Creative"],
    section: "Creative vs Practical Thinking"
  },
  {
    text: "I like sticking to what already works.",
    traits: ["S", "Practical"],
    section: "Creative vs Practical Thinking"
  },
  {
    text: "I'd rather invent a new way than follow instructions.",
    traits: ["N", "P"],
    section: "Creative vs Practical Thinking"
  },
  {
    text: "I ask 'what if' questions a lot.",
    traits: ["N"],
    section: "Creative vs Practical Thinking"
  },
  {
    text: "I enjoy organizing things to run smoothly.",
    traits: ["J", "T"],
    section: "Creative vs Practical Thinking"
  },
  {
    text: "I'd love to design something totally new.",
    traits: ["Creative", "N"],
    section: "Creative vs Practical Thinking"
  },
  {
    text: "I prefer helping people in real life over solving puzzles.",
    traits: ["F", "S"],
    section: "Creative vs Practical Thinking"
  },
  {
    text: "I notice patterns and connections quickly.",
    traits: ["N", "T"],
    section: "Creative vs Practical Thinking"
  },
  {
    text: "I'd rather be behind the scenes than in the spotlight.",
    traits: ["I", "Practical"],
    section: "Creative vs Practical Thinking"
  },
  {
    text: "I enjoy solving problems creatively, even if it's messy.",
    traits: ["P", "N", "Creative"],
    section: "Creative vs Practical Thinking"
  }
];

export function calculateDetailedMBTI(responses: { question: DetailedQuestion; answer: string }[]): {
  personality: PersonalityType;
  learningStyle: string;
  strengths: string[];
} {
  const traitCounts = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0,
    Visual: 0,
    'Hands-on': 0,
    Social: 0,
    Independent: 0,
    Creative: 0,
    Practical: 0,
    Kinetic: 0
  };

  // Count traits based on answers
  for (const response of responses) {
    const { question, answer } = response;
    let multiplier = 0;
    
    switch (answer) {
      case 'Strongly Agree':
        multiplier = 2;
        break;
      case 'Agree':
        multiplier = 1;
        break;
      case 'Neutral':
        multiplier = 0;
        break;
      case 'Disagree':
        multiplier = -1;
        break;
      case 'Strongly Disagree':
        multiplier = -2;
        break;
    }

    if (multiplier > 0) {
      for (const trait of question.traits) {
        if (traitCounts.hasOwnProperty(trait)) {
          traitCounts[trait as keyof typeof traitCounts] += multiplier;
        }
      }
    }
  }

  // Calculate MBTI type
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

  // Determine dominant learning style
  const learningStyles = {
    Visual: traitCounts.Visual,
    'Hands-on': traitCounts['Hands-on'],
    Social: traitCounts.Social,
    Creative: traitCounts.Creative,
    Practical: traitCounts.Practical
  };

  const dominantLearningStyle = Object.entries(learningStyles)
    .sort(([,a], [,b]) => b - a)[0][0];

  // Generate strengths based on top traits
  const strengths: string[] = [];
  if (traitCounts.Creative > 3) strengths.push("Creative thinking");
  if (traitCounts.Practical > 3) strengths.push("Practical problem-solving");
  if (traitCounts.Social > 3) strengths.push("Social interaction");
  if (traitCounts.Visual > 3) strengths.push("Visual learning");
  if (traitCounts['Hands-on'] > 3) strengths.push("Hands-on learning");
  if (traitCounts.E > traitCounts.I) strengths.push("Leadership");
  if (traitCounts.N > traitCounts.S) strengths.push("Big picture thinking");
  if (traitCounts.F > traitCounts.T) strengths.push("Empathy");
  if (traitCounts.J > traitCounts.P) strengths.push("Organization");

  return {
    personality: mbtiToPersonality[mbtiCode] || 'The Strategist',
    learningStyle: dominantLearningStyle,
    strengths: strengths.slice(0, 5) // Top 5 strengths
  };
}