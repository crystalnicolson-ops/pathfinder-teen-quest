import { PersonalityType } from '@/types/quiz';

export interface DetailedQuestion {
  text: string;
  section: string;
  category: string;
}

export type AnswerType = 'Strongly Agree' | 'Agree' | 'Disagree' | 'Strongly Disagree';

// 50-Question MBTI Personality + Learning Style Test
export const detailedQuestions: DetailedQuestion[] = [
  // Questions 1-32: MBTI Personality Focus
  { text: "You get energy from being around other people rather than being alone.", section: "Personality", category: "E" },
  { text: "You focus more on facts and details than possibilities and meanings.", section: "Personality", category: "S" },
  { text: "You make decisions based on logic rather than personal values.", section: "Personality", category: "T" },
  { text: "You prefer to have things decided rather than keep options open.", section: "Personality", category: "J" },
  { text: "You feel comfortable being the center of attention.", section: "Personality", category: "E" },
  { text: "You trust your experience more than your imagination.", section: "Personality", category: "S" },
  { text: "You think it's worse to be too emotional than too cold.", section: "Personality", category: "T" },
  { text: "You like to plan your activities in advance.", section: "Personality", category: "J" },
  { text: "You start conversations easily with strangers.", section: "Personality", category: "E" },
  { text: "You are more interested in what is actual than what is possible.", section: "Personality", category: "S" },
  { text: "You believe being fair is more important than being compassionate.", section: "Personality", category: "T" },
  { text: "You prefer to finish one project before starting another.", section: "Personality", category: "J" },
  { text: "You feel drained after spending time in large groups.", section: "Personality", category: "I" },
  { text: "You like to think about future possibilities and innovations.", section: "Personality", category: "N" },
  { text: "You consider people's feelings when making important decisions.", section: "Personality", category: "F" },
  { text: "You enjoy having a flexible schedule that can change.", section: "Personality", category: "P" },
  { text: "You think out loud when processing information.", section: "Personality", category: "E" },
  { text: "You prefer concrete information over abstract theories.", section: "Personality", category: "S" },
  { text: "You value truth over diplomacy in difficult situations.", section: "Personality", category: "T" },
  { text: "You like to keep your options open as long as possible.", section: "Personality", category: "P" },
  { text: "You need quiet time to recharge after social activities.", section: "Personality", category: "I" },
  { text: "You enjoy exploring theoretical concepts and big ideas.", section: "Personality", category: "N" },
  { text: "You try to avoid hurting people's feelings when possible.", section: "Personality", category: "F" },
  { text: "You work better with deadlines and structure.", section: "Personality", category: "J" },
  { text: "You prefer working in teams rather than alone.", section: "Personality", category: "E" },
  { text: "You focus on practical applications rather than theoretical concepts.", section: "Personality", category: "S" },
  { text: "You make decisions quickly based on objective criteria.", section: "Personality", category: "T" },
  { text: "You adapt easily when plans change unexpectedly.", section: "Personality", category: "P" },
  { text: "You prefer small gatherings over large parties.", section: "Personality", category: "I" },
  { text: "You see patterns and connections others might miss.", section: "Personality", category: "N" },
  { text: "You consider how decisions will affect people emotionally.", section: "Personality", category: "F" },
  { text: "You like having things settled and decided.", section: "Personality", category: "J" },

  // Questions 33-50: Learning Style Focus
  { text: "You remember information better when you see it in charts, graphs, or diagrams.", section: "Learning Style", category: "V" },
  { text: "You learn best when someone explains concepts verbally to you.", section: "Learning Style", category: "A" },
  { text: "You prefer to read instructions carefully before starting a task.", section: "Learning Style", category: "R" },
  { text: "You understand concepts better when you can physically manipulate objects.", section: "Learning Style", category: "K" },
  { text: "You take notes using colors, symbols, and visual organization.", section: "Learning Style", category: "V" },
  { text: "You enjoy learning through discussions and verbal explanations.", section: "Learning Style", category: "A" },
  { text: "You prefer detailed written instructions over verbal directions.", section: "Learning Style", category: "R" },
  { text: "You learn better when you can move around while studying.", section: "Learning Style", category: "K" },
  { text: "You can easily visualize scenes when reading stories.", section: "Learning Style", category: "V" },
  { text: "You benefit from repeating information out loud to yourself.", section: "Learning Style", category: "A" },
  { text: "You like to write summaries and lists to organize information.", section: "Learning Style", category: "R" },
  { text: "You prefer hands-on activities over lectures or reading.", section: "Learning Style", category: "K" },
  { text: "You use visual aids like mind maps to organize your thoughts.", section: "Learning Style", category: "V" },
  { text: "You remember spoken instructions better than written ones.", section: "Learning Style", category: "A" },
  { text: "You enjoy expressing your ideas through writing.", section: "Learning Style", category: "R" },
  { text: "You learn best through trial and error and direct experience.", section: "Learning Style", category: "K" },
  { text: "You notice visual details that others often miss.", section: "Learning Style", category: "V" },
  { text: "You process information by talking through problems with others.", section: "Learning Style", category: "A" }
];

export const calculateDetailedMBTI = (answers: { question: DetailedQuestion; answer: AnswerType }[]) => {
  // MBTI trait scores
  const mbtiScores = {
    E: 0, I: 0,  // Extroversion vs Introversion
    S: 0, N: 0,  // Sensing vs Intuition  
    T: 0, F: 0,  // Thinking vs Feeling
    J: 0, P: 0   // Judging vs Perceiving
  };

  // Learning style scores
  const learningScores = {
    V: 0,  // Visual
    A: 0,  // Auditory
    R: 0,  // Reading/Writing
    K: 0   // Kinesthetic
  };

  // Calculate scores based on answers (0-3 points)
  answers.forEach(({ question, answer }, index) => {
    let points = 0;
    switch (answer) {
      case 'Strongly Agree': points = 3; break;
      case 'Agree': points = 2; break;
      case 'Disagree': points = 1; break;
      case 'Strongly Disagree': points = 0; break;
    }

    console.log(`Q${index + 1}: "${question.text}" - Answer: ${answer} (${points} points) - Category: ${question.category}`);

    // Questions 1-32: MBTI Personality traits
    if (index < 32) {
      if (question.category === 'E' || question.category === 'I') {
        mbtiScores[question.category as 'E' | 'I'] += points;
      } else if (question.category === 'S' || question.category === 'N') {
        mbtiScores[question.category as 'S' | 'N'] += points;
      } else if (question.category === 'T' || question.category === 'F') {
        mbtiScores[question.category as 'T' | 'F'] += points;
      } else if (question.category === 'J' || question.category === 'P') {
        mbtiScores[question.category as 'J' | 'P'] += points;
      }
    } 
    
    // Questions 33-50: Learning styles
    if (index >= 32) {
      if (question.category === 'V' || question.category === 'A' || 
          question.category === 'R' || question.category === 'K') {
        learningScores[question.category as 'V' | 'A' | 'R' | 'K'] += points;
      }
    }
  });

  console.log('MBTI Scores:', mbtiScores);
  console.log('Learning Style Scores:', learningScores);

  // Determine MBTI type
  const energyType = mbtiScores.E > mbtiScores.I ? 'E' : 'I';
  const perceptionType = mbtiScores.S > mbtiScores.N ? 'S' : 'N';
  const decisionType = mbtiScores.T > mbtiScores.F ? 'T' : 'F';
  const lifestyleType = mbtiScores.J > mbtiScores.P ? 'J' : 'P';

  const mbtiCode = energyType + perceptionType + decisionType + lifestyleType;

  // Determine dominant learning style
  const learningStyleEntries = Object.entries(learningScores) as [keyof typeof learningScores, number][];
  const dominantLearningStyleEntry = learningStyleEntries.reduce((a, b) => 
    learningScores[a[0]] > learningScores[b[0]] ? a : b
  );
  
  const learningStyleMap = {
    'V': 'Visual',
    'A': 'Auditory', 
    'R': 'Reading/Writing',
    'K': 'Kinesthetic'
  };
  
  const dominantLearningStyle = learningStyleMap[dominantLearningStyleEntry[0]];

  console.log('MBTI Code:', mbtiCode);
  console.log('Dominant Learning Style:', dominantLearningStyle);

  // Map MBTI code to PersonalityType
  const personalityMap: { [key: string]: PersonalityType } = {
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

  const finalPersonality = personalityMap[mbtiCode] || 'The Strategist';
  console.log('Final personality result:', finalPersonality);

  // Create personality traits for compatibility
  const personalityTraits = {
    energy: energyType === 'E' ? 'Extrovert' : 'Introvert',
    organization: lifestyleType === 'J' ? 'Planner' : 'Spontaneous',
    thinking: decisionType === 'T' ? 'Analytical' : 'Creative',
    social: decisionType === 'F' ? 'Helper' : 'Leader'
  };

  // Create combined scores object for compatibility
  const combinedScores = {
    // Learning styles
    visual: learningScores.V,
    auditory: learningScores.A,
    reading_writing: learningScores.R,
    kinesthetic: learningScores.K,
    // MBTI traits converted to old format for compatibility
    introvert: mbtiScores.I,
    extrovert: mbtiScores.E,
    planner: mbtiScores.J,
    spontaneous: mbtiScores.P,
    creative: mbtiScores.F,
    analytical: mbtiScores.T,
    helper: mbtiScores.F,
    leader: mbtiScores.T
  };

  return {
    learningStyle: dominantLearningStyle,
    personality: finalPersonality,
    personalityTraits,
    scores: combinedScores,
    mbtiCode,
    totalQuestions: answers.length
  };
};