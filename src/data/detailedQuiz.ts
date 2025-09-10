import { Question, PersonalityResult, PersonalityType } from '@/types/quiz';

export interface DetailedQuestion {
  text: string;
  traits: string[];
  section: string;
}

// 50-Question Learning Style & Personality Quiz
export const detailedQuestions: DetailedQuestion[] = [
  { text: "I remember things better when I see pictures or diagrams.", traits: ["Visual"], section: "Learning Style Assessment" },
  { text: "I understand new ideas best when I hear them explained.", traits: ["Auditory"], section: "Learning Style Assessment" },
  { text: "I enjoy writing things down to help me remember.", traits: ["Reading/Writing"], section: "Learning Style Assessment" },
  { text: "I learn better when I can move around or use my hands.", traits: ["Kinesthetic"], section: "Learning Style Assessment" },
  { text: "I prefer working alone on a school project.", traits: ["Visual"], section: "Learning Style Assessment" },
  { text: "I enjoy group discussions and working with others.", traits: ["Auditory"], section: "Learning Style Assessment" },
  { text: "I like to plan ahead and follow a schedule.", traits: ["Reading/Writing"], section: "Learning Style Assessment" },
  { text: "I figure things out by trying them instead of reading instructions.", traits: ["Kinesthetic"], section: "Learning Style Assessment" },
  { text: "I often draw or doodle in class or while thinking.", traits: ["Visual"], section: "Learning Style Assessment" },
  { text: "I talk to myself when working through a problem.", traits: ["Auditory"], section: "Learning Style Assessment" },
  { text: "I remember things better when I see pictures or diagrams.", traits: ["Reading/Writing"], section: "Learning Style Assessment" },
  { text: "I understand new ideas best when I hear them explained.", traits: ["Kinesthetic"], section: "Learning Style Assessment" },
  { text: "I enjoy writing things down to help me remember.", traits: ["Visual"], section: "Learning Style Assessment" },
  { text: "I learn better when I can move around or use my hands.", traits: ["Auditory"], section: "Learning Style Assessment" },
  { text: "I prefer working alone on a school project.", traits: ["Reading/Writing"], section: "Learning Style Assessment" },
  { text: "I enjoy group discussions and working with others.", traits: ["Kinesthetic"], section: "Learning Style Assessment" },
  { text: "I like to plan ahead and follow a schedule.", traits: ["Visual"], section: "Learning Style Assessment" },
  { text: "I figure things out by trying them instead of reading instructions.", traits: ["Auditory"], section: "Learning Style Assessment" },
  { text: "I often draw or doodle in class or while thinking.", traits: ["Reading/Writing"], section: "Learning Style Assessment" },
  { text: "I talk to myself when working through a problem.", traits: ["Kinesthetic"], section: "Learning Style Assessment" },
  { text: "I remember things better when I see pictures or diagrams.", traits: ["Visual"], section: "Learning Style Assessment" },
  { text: "I understand new ideas best when I hear them explained.", traits: ["Auditory"], section: "Learning Style Assessment" },
  { text: "I enjoy writing things down to help me remember.", traits: ["Reading/Writing"], section: "Learning Style Assessment" },
  { text: "I learn better when I can move around or use my hands.", traits: ["Kinesthetic"], section: "Learning Style Assessment" },
  { text: "I prefer working alone on a school project.", traits: ["Visual"], section: "Learning Style Assessment" },
  { text: "I enjoy group discussions and working with others.", traits: ["Auditory"], section: "Learning Style Assessment" },
  { text: "I like to plan ahead and follow a schedule.", traits: ["Reading/Writing"], section: "Learning Style Assessment" },
  { text: "I figure things out by trying them instead of reading instructions.", traits: ["Kinesthetic"], section: "Learning Style Assessment" },
  { text: "I often draw or doodle in class or while thinking.", traits: ["Visual"], section: "Learning Style Assessment" },
  { text: "I talk to myself when working through a problem.", traits: ["Auditory"], section: "Learning Style Assessment" },
  { text: "I remember things better when I see pictures or diagrams.", traits: ["Reading/Writing"], section: "Learning Style Assessment" },
  { text: "I understand new ideas best when I hear them explained.", traits: ["Kinesthetic"], section: "Learning Style Assessment" },
  { text: "I enjoy writing things down to help me remember.", traits: ["Visual"], section: "Learning Style Assessment" },
  { text: "I learn better when I can move around or use my hands.", traits: ["Auditory"], section: "Learning Style Assessment" },
  { text: "I prefer working alone on a school project.", traits: ["Reading/Writing"], section: "Learning Style Assessment" },
  { text: "I enjoy group discussions and working with others.", traits: ["Kinesthetic"], section: "Learning Style Assessment" },
  { text: "I like to plan ahead and follow a schedule.", traits: ["Visual"], section: "Learning Style Assessment" },
  { text: "I figure things out by trying them instead of reading instructions.", traits: ["Auditory"], section: "Learning Style Assessment" },
  { text: "I often draw or doodle in class or while thinking.", traits: ["Reading/Writing"], section: "Learning Style Assessment" },
  { text: "I talk to myself when working through a problem.", traits: ["Kinesthetic"], section: "Learning Style Assessment" },
  { text: "I remember things better when I see pictures or diagrams.", traits: ["Learning Tendency"], section: "Learning Style Assessment" },
  { text: "I understand new ideas best when I hear them explained.", traits: ["Learning Tendency"], section: "Learning Style Assessment" },
  { text: "I enjoy writing things down to help me remember.", traits: ["Learning Tendency"], section: "Learning Style Assessment" },
  { text: "I learn better when I can move around or use my hands.", traits: ["Learning Tendency"], section: "Learning Style Assessment" },
  { text: "I prefer working alone on a school project.", traits: ["Learning Tendency"], section: "Learning Style Assessment" },
  { text: "I enjoy group discussions and working with others.", traits: ["Learning Tendency"], section: "Learning Style Assessment" },
  { text: "I like to plan ahead and follow a schedule.", traits: ["Learning Tendency"], section: "Learning Style Assessment" },
  { text: "I figure things out by trying them instead of reading instructions.", traits: ["Learning Tendency"], section: "Learning Style Assessment" },
  { text: "I often draw or doodle in class or while thinking.", traits: ["Learning Tendency"], section: "Learning Style Assessment" },
  { text: "I talk to myself when working through a problem.", traits: ["Learning Tendency"], section: "Learning Style Assessment" }
];

export function calculateDetailedMBTI(responses: { question: DetailedQuestion; answer: string }[]): {
  personality: PersonalityType;
  learningStyle: string;
  strengths: string[];
} {
  // Learning style scoring (4-point Likert scale)
  const scores = {
    Visual: 0,
    Auditory: 0,
    "Reading/Writing": 0,
    Kinesthetic: 0,
    "Learning Tendency": 0
  };

  // Score mapping for 4-point Likert scale
  const scoreMap: { [key: string]: number } = {
    "Strongly Agree": 4,
    "Agree": 3, 
    "Disagree": 2,
    "Strongly Disagree": 1
  };

  responses.forEach((response) => {
    const score = scoreMap[response.answer] || 0;
    response.question.traits.forEach((trait) => {
      if (scores.hasOwnProperty(trait)) {
        scores[trait as keyof typeof scores] += score;
      }
    });
  });

  // Determine dominant learning style
  let dominantStyle = "Visual";
  let highestScore = scores.Visual;
  
  Object.entries(scores).forEach(([style, score]) => {
    if (style !== "Learning Tendency" && score > highestScore) {
      dominantStyle = style;
      highestScore = score;
    }
  });

  // Map learning style to personality type
  const personalityMap: { [key: string]: PersonalityType } = {
    "Visual": "The Strategist",
    "Auditory": "The Coach", 
    "Reading/Writing": "The Organizer",
    "Kinesthetic": "The Adventurer"
  };

  const personality = personalityMap[dominantStyle] || "The Strategist";

  // Generate strengths based on scores
  const strengths: string[] = [];
  if (scores.Visual >= 30) strengths.push("Visual processing and spatial thinking");
  if (scores.Auditory >= 30) strengths.push("Verbal communication and listening skills");
  if (scores["Reading/Writing"] >= 30) strengths.push("Written communication and analysis");
  if (scores.Kinesthetic >= 30) strengths.push("Hands-on learning and physical coordination");
  
  // Add default strengths if none meet threshold
  if (strengths.length === 0) {
    strengths.push("Adaptable learning approach", "Problem-solving abilities");
  }

  return {
    personality,
    learningStyle: dominantStyle,
    strengths
  };
}