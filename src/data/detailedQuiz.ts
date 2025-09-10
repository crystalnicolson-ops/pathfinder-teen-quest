import { PersonalityType } from '@/types/quiz';

export interface DetailedQuestion {
  text: string;
  section: string;
  category: string;
}

export type AnswerType = 'Strongly Agree' | 'Agree' | 'Disagree' | 'Strongly Disagree';

// 50-Question Personality + Learning Style Test
export const detailedQuestions: DetailedQuestion[] = [
  { text: "You prefer working alone over working in groups.", section: "Personality + Learning Style", category: "introvert" },
  { text: "You like imagining future possibilities more than focusing on details.", section: "Personality + Learning Style", category: "intuitive" },
  { text: "You plan your day carefully and stick to the schedule.", section: "Personality + Learning Style", category: "planner" },
  { text: "You like helping others and giving emotional support.", section: "Personality + Learning Style", category: "helper" },
  { text: "You enjoy brainstorming new ideas without worrying about rules.", section: "Personality + Learning Style", category: "creative" },
  { text: "You notice patterns quickly in things like numbers, shapes, or puzzles.", section: "Personality + Learning Style", category: "analytical" },
  { text: "You often take charge when others aren't sure what to do.", section: "Personality + Learning Style", category: "leader" },
  { text: "You need quiet time to recharge after hanging out with friends.", section: "Personality + Learning Style", category: "introvert" },
  { text: "You like debating and challenging people's opinions.", section: "Personality + Learning Style", category: "challenger" },
  { text: "You often feel more comfortable following instructions than creating your own.", section: "Personality + Learning Style", category: "follower" },
  { text: "You enjoy turning your thoughts into art, poetry, or music.", section: "Personality + Learning Style", category: "creative" },
  { text: "You prefer learning by doing rather than listening or reading.", section: "Personality + Learning Style", category: "kinesthetic" },
  { text: "You often double-check your work to make sure it's right.", section: "Personality + Learning Style", category: "careful" },
  { text: "You are curious about how things work behind the scenes.", section: "Personality + Learning Style", category: "analytical" },
  { text: "You like helping organize school events or team projects.", section: "Personality + Learning Style", category: "organizer" },
  { text: "You'd rather watch a documentary than a reality show.", section: "Personality + Learning Style", category: "analytical" },
  { text: "You express your feelings through creative writing or journaling.", section: "Personality + Learning Style", category: "reading_writing" },
  { text: "You enjoy solving riddles or logic puzzles.", section: "Personality + Learning Style", category: "analytical" },
  { text: "You're known as the 'responsible' friend.", section: "Personality + Learning Style", category: "planner" },
  { text: "You sometimes act before thinking things through.", section: "Personality + Learning Style", category: "spontaneous" },
  { text: "You love giving advice and helping others work through problems.", section: "Personality + Learning Style", category: "helper" },
  { text: "You focus more on the 'big picture' than tiny details.", section: "Personality + Learning Style", category: "intuitive" },
  { text: "You keep your room, folders, and digital files organized.", section: "Personality + Learning Style", category: "planner" },
  { text: "You like spontaneous plans over structured ones.", section: "Personality + Learning Style", category: "spontaneous" },
  { text: "You're energized by spending time with lots of people.", section: "Personality + Learning Style", category: "extrovert" },
  { text: "You prefer using charts, graphs, or pictures to understand things.", section: "Personality + Learning Style", category: "visual" },
  { text: "You enjoy listening to audiobooks or podcasts more than reading.", section: "Personality + Learning Style", category: "auditory" },
  { text: "You like writing summaries or lists to study for a test.", section: "Personality + Learning Style", category: "reading_writing" },
  { text: "You learn best when you can move around or act things out.", section: "Personality + Learning Style", category: "kinesthetic" },
  { text: "You can picture stories vividly when reading.", section: "Personality + Learning Style", category: "visual" },
  { text: "You enjoy explaining things to others when they don't get it.", section: "Personality + Learning Style", category: "auditory" },
  { text: "You like rereading instructions before starting something new.", section: "Personality + Learning Style", category: "reading_writing" },
  { text: "You'd rather figure things out by tinkering than reading a manual.", section: "Personality + Learning Style", category: "kinesthetic" },
  { text: "You take notes using drawings, colors, or symbols.", section: "Personality + Learning Style", category: "visual" },
  { text: "You'd rather listen to someone explain than read the directions.", section: "Personality + Learning Style", category: "auditory" },
  { text: "You prefer quiet time with a book over a loud party.", section: "Personality + Learning Style", category: "introvert" },
  { text: "You feel proud when solving a hard math or logic problem.", section: "Personality + Learning Style", category: "analytical" },
  { text: "You enjoy playing music, painting, or designing things.", section: "Personality + Learning Style", category: "creative" },
  { text: "You imagine how you'd handle situations before they happen.", section: "Personality + Learning Style", category: "planner" },
  { text: "You get bored easily if you have to follow strict routines.", section: "Personality + Learning Style", category: "spontaneous" },
  { text: "You often see multiple patterns, faces, or objects in a complex image before anyone else does.", section: "Personality + Learning Style", category: "visual" },
  { text: "When shown a picture or diagram, you naturally imagine how you would interact with it physically.", section: "Personality + Learning Style", category: "kinesthetic" },
  { text: "You like reflecting on your thoughts or emotions before reacting.", section: "Personality + Learning Style", category: "introvert" },
  { text: "You enjoy being in leadership roles even in casual settings.", section: "Personality + Learning Style", category: "leader" },
  { text: "You get excited thinking about changing the world someday.", section: "Personality + Learning Style", category: "visionary" },
  { text: "You'd rather fix things than replace them.", section: "Personality + Learning Style", category: "practical" },
  { text: "You are motivated by rewards like grades or recognition.", section: "Personality + Learning Style", category: "achiever" },
  { text: "You love trying new things even if they seem weird at first.", section: "Personality + Learning Style", category: "adventurous" },
  { text: "You often act as the peacekeeper among your friends.", section: "Personality + Learning Style", category: "helper" },
  { text: "You like creating plans and checking things off when done.", section: "Personality + Learning Style", category: "planner" }
];

export const calculateDetailedMBTI = (answers: { question: DetailedQuestion; answer: AnswerType }[]) => {
  const scores = {
    visual: 0,
    auditory: 0,
    reading_writing: 0,
    kinesthetic: 0,
    introvert: 0,
    extrovert: 0,
    planner: 0,
    spontaneous: 0,
    creative: 0,
    analytical: 0,
    helper: 0,
    leader: 0,
    intuitive: 0,
    practical: 0,
    challenger: 0,
    follower: 0,
    careful: 0,
    organizer: 0,
    visionary: 0,
    achiever: 0,
    adventurous: 0
  };

  // Calculate scores based on answers (0-3 points)
  answers.forEach(({ question, answer }) => {
    let points = 0;
    switch (answer) {
      case 'Strongly Agree': points = 3; break;
      case 'Agree': points = 2; break;
      case 'Disagree': points = 1; break;
      case 'Strongly Disagree': points = 0; break;
    }

    if (scores.hasOwnProperty(question.category)) {
      scores[question.category as keyof typeof scores] += points;
    }
  });

  // Determine dominant learning style based on specific questions
  const learningStyles = {
    visual: scores.visual,
    auditory: scores.auditory,
    reading_writing: scores.reading_writing,
    kinesthetic: scores.kinesthetic
  };

  const dominantLearningStyle = Object.entries(learningStyles).reduce((a, b) => 
    learningStyles[a[0] as keyof typeof learningStyles] > learningStyles[b[0] as keyof typeof learningStyles] ? a : b
  )[0];

  // Determine personality traits
  const personalityType = {
    energy: scores.extrovert > scores.introvert ? 'Extrovert' : 'Introvert',
    organization: scores.planner > scores.spontaneous ? 'Planner' : 'Spontaneous',
    thinking: scores.analytical > scores.creative ? 'Analytical' : 'Creative',
    social: scores.helper > scores.leader ? 'Helper' : 'Leader'
  };

  // Map to PersonalityType for compatibility
  const personalityMap: { [key: string]: PersonalityType } = {
    visual: "The Strategist",
    auditory: "The Coach",
    reading_writing: "The Organizer", 
    kinesthetic: "The Adventurer"
  };

  return {
    learningStyle: dominantLearningStyle,
    personality: personalityMap[dominantLearningStyle] || "The Strategist",
    personalityTraits: personalityType,
    scores,
    totalQuestions: answers.length
  };
};