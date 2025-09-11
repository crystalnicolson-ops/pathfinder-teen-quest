import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, TrendingUp, MapPin, GraduationCap, Star, ArrowLeft, Home, Lock } from 'lucide-react';
import { personalityResults } from '@/data/quiz';
import { PersonalityType, College, CollegeTiers } from '@/types/quiz';

import { useToast } from '@/components/ui/use-toast';
import { PAYMENT_LINK_URL, PAYMENT_SUCCESS_PARAM, PAYMENT_SUCCESS_VALUE } from '@/config/payments';

// Import all personality avatars
import avatarStrategist from '@/assets/avatar-strategist.jpg';
import avatarInventor from '@/assets/avatar-inventor.jpg';
import avatarBoss from '@/assets/avatar-boss.jpg';
import avatarChallenger from '@/assets/avatar-challenger.jpg';
import avatarVisionary from '@/assets/avatar-visionary.jpg';
import avatarCreator from '@/assets/avatar-creator.jpg';
import avatarCoach from '@/assets/avatar-coach.jpg';
import avatarFreeSpirit from '@/assets/avatar-free-spirit.jpg';
import avatarOrganizer from '@/assets/avatar-organizer.jpg';
import avatarHelper from '@/assets/avatar-helper.jpg';
import avatarManager from '@/assets/avatar-manager.jpg';
import avatarHost from '@/assets/avatar-host.jpg';
import avatarFixer from '@/assets/avatar-fixer.jpg';
import avatarArtist from '@/assets/avatar-artist.jpg';
import avatarAdventurer from '@/assets/avatar-adventurer.jpg';
import avatarPerformer from '@/assets/avatar-performer.jpg';

// Avatar mapping
const personalityAvatars: Record<PersonalityType, string> = {
  'The Strategist': avatarStrategist,
  'The Inventor': avatarInventor,
  'The Boss': avatarBoss,
  'The Challenger': avatarChallenger,
  'The Visionary': avatarVisionary,
  'The Creator': avatarCreator,
  'The Coach': avatarCoach,
  'The Free Spirit': avatarFreeSpirit,
  'The Organizer': avatarOrganizer,
  'The Helper': avatarHelper,
  'The Manager': avatarManager,
  'The Host': avatarHost,
  'The Fixer': avatarFixer,
  'The Artist': avatarArtist,
  'The Adventurer': avatarAdventurer,
  'The Performer': avatarPerformer,
};

// Helper function to get colleges by tier
// Global variable to track assigned colleges across all tier calls
let globalAssignedColleges = new Set<string>();

const getCollegesByTier = (colleges: College[] | CollegeTiers, tier: 'tier1' | 'tier2' | 'tier3' | 'tier4' | 'tier5'): College[] => {
  if (Array.isArray(colleges)) {
    // Reset global tracking for the first tier
    if (tier === 'tier1') {
      globalAssignedColleges.clear();
    }
    
    // Legacy structure - filter by college names with no overlaps
    const tierCollege = {
      tier1: ['harvard', 'stanford', 'columbia', 'massachusetts institute of technology', 'mit', 'yale', 'princeton', 'california institute of technology', 'caltech', 'university of chicago'],
      tier2: ['brown', 'dartmouth', 'duke', 'university of pennsylvania', 'penn', 'johns hopkins', 'northwestern', 'cornell'],
      tier3: ['vanderbilt', 'university of notre dame', 'notre dame', 'rice', 'georgetown', 'washington university', 'berkeley', 'ucla'],
      tier4: ['university of michigan', 'michigan', 'georgia institute of technology', 'georgia tech', 'emory', 'new york university', 'nyu', 'boston university', 'university of virginia', 'michigan state', 'indiana university', 'university of pittsburgh', 'university of minnesota', 'university of connecticut', 'temple'],
      tier5: ['university of california davis', 'uc davis', 'university of california irvine', 'uc irvine', 'university of california santa barbara', 'ucsb', 'university of florida', 'university of illinois', 'illinois', 'university of washington', 'purdue', 'texas a&m', 'university of colorado', 'university of maryland', 'university of arizona', 'university of oregon', 'university of kansas', 'university of alabama', 'west virginia', 'louisiana state', 'lsu']
    };
    
    // First try keyword matching for current tier only
    const filtered = colleges.filter(college => {
      const name = college.name.toLowerCase();
      
      // Skip if already assigned to a previous tier
      if (globalAssignedColleges.has(name)) {
        return false;
      }
      
      // Check if this college matches current tier
      const matches = tierCollege[tier].some(keyword => name.includes(keyword));
      
      if (matches) {
        globalAssignedColleges.add(name);
        return true;
      }
      
      return false;
    });
    
    // If no colleges match keywords, distribute evenly across tiers (only unassigned ones)
    if (filtered.length === 0) {
      const unassignedColleges = colleges.filter(college => 
        !globalAssignedColleges.has(college.name.toLowerCase())
      );
      const collegesPerTier = Math.ceil(unassignedColleges.length / 5);
      const tierIndex = { tier1: 0, tier2: 1, tier3: 2, tier4: 3, tier5: 4 }[tier];
      const startIndex = tierIndex * collegesPerTier;
      const endIndex = startIndex + collegesPerTier;
      const tierColleges = unassignedColleges.slice(startIndex, endIndex);
      
      // Mark these as assigned
      tierColleges.forEach(college => {
        globalAssignedColleges.add(college.name.toLowerCase());
      });
      
      return tierColleges;
    }
    
    return filtered;
  } else {
    // New tiered structure
    return colleges[tier] || [];
  }
};



export default function DetailedResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [personality, setPersonality] = useState(null);
  const [section, setSection] = useState('personality');
  const [freeAssessmentAccess, setFreeAssessmentAccess] = useState(false);
  
  // Check payment status and provide appropriate access
  useEffect(() => {
    const init = () => {
      const paidParam = searchParams.get(PAYMENT_SUCCESS_PARAM);
      if (paidParam === PAYMENT_SUCCESS_VALUE) {
        localStorage.setItem('hasPaidPremium', 'true');
      }

      const navState = (location.state || {}) as any;
      const incomingSection = navState.section;
      const incomingPersonality = navState.personality;
      const fromFreeAssessment = navState.fromFreeAssessment;

      // Check if user has already paid for premium access
      const hasPaid = localStorage.getItem('hasPaidPremium') === 'true';
      
      if (hasPaid) {
        // Premium user - show their actual results or sample data if no quiz taken
        const pending = localStorage.getItem('pendingQuizResults');
        if (pending) {
          try {
            const { results } = JSON.parse(pending);
            setPersonality(results.personality);
            setHasAccess(true);
          } catch (e) {
            console.error('Error parsing quiz results', e);
            // If parsing fails, show sample premium data
            showSamplePremiumData();
          }
        } else {
          // No quiz results but user has paid - show sample premium data
          showSamplePremiumData();
        }
        // Respect incoming section selection for paid users
        if (incomingSection) {
          setSection(incomingSection);
        }
        setFreeAssessmentAccess(false);
        return;
      }

      // Allow free access to careers and colleges when coming from quick assessment
      if (fromFreeAssessment && incomingPersonality && (incomingSection === 'careers' || incomingSection === 'colleges')) {
        setPersonality(incomingPersonality);
        setSection(incomingSection);
        setFreeAssessmentAccess(true);
        setHasAccess(true);
        return;
      }

      // Free user - lock premium content until payment is completed
      setFreeAssessmentAccess(false);
      setHasAccess(false);
      setPersonality(null as any);
    };

    const showSamplePremiumData = () => {
      const sampleResults = {
        learningStyle: 'Visual',
        personality: 'The Strategist',
        personalityTraits: { energy: 'Introvert', organization: 'Planner', thinking: 'Analytical', social: 'Helper' },
        scores: {
          visual: 15,
          auditory: 8,
          reading_writing: 12,
          kinesthetic: 10,
          introvert: 18,
          extrovert: 7,
          planner: 16,
          spontaneous: 9,
          creative: 11,
          analytical: 17,
          helper: 14,
          leader: 11
        },
        totalQuestions: 50,
      } as any;
      setPersonality(sampleResults.personality);
      setHasAccess(true);
    };

    init();
  }, [searchParams, navigate, toast, location.state]);

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Verifying payment...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!hasAccess || !personality) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center py-8">
            <Lock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Premium Content</h2>
            <p className="text-muted-foreground mb-4">
              Complete payment to access your detailed personality results.
            </p>
            <Button onClick={() => navigate('/detailed-quiz')}>
              Take Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const result = personalityResults[personality as PersonalityType];

  // Get quiz results from localStorage for detailed analysis
  const getDetailedResults = () => {
    const pendingResults = localStorage.getItem('pendingQuizResults');
    if (pendingResults) {
      const { results } = JSON.parse(pendingResults);
      return results;
    }
    return null;
  };

  const detailedResults = getDetailedResults();
  const learningStyle = detailedResults?.learningStyle || 'Visual';
  const strengths = detailedResults?.strengths || [];

  // Comprehensive Learning Style Details
  const learningStyleDetails = {
    Visual: {
      description: "You process information most effectively through visual channels - seeing patterns, spatial relationships, and graphic representations helps you understand and remember concepts.",
      detailedDescription: "Visual learners like you have a strong preference for information presented in charts, graphs, maps, diagrams, and other visual formats. You likely think in pictures and mental images, making connections through visual patterns and spatial relationships.",
      strengths: [
        "Excellent spatial awareness and ability to visualize concepts",
        "Strong pattern recognition and design sense", 
        "Ability to quickly grasp complex relationships through diagrams",
        "Good at organizing information visually",
        "Strong memory for faces, places, and visual details"
      ],
      challenges: [
        "May struggle with purely verbal instructions",
        "Difficulty following long lectures without visual aids",
        "Can be distracted by visual clutter or competing images",
        "May need extra time to process written information without visuals"
      ],
      studyStrategies: [
        "Create colorful mind maps and concept webs for complex topics",
        "Use highlighters and color-coding systems for notes and textbooks",
        "Draw diagrams, flowcharts, and timelines to organize information",
        "Watch educational videos and visual demonstrations",
        "Use flashcards with images, symbols, and visual cues",
        "Sit where you can see the board/screen clearly in class",
        "Create visual study guides with charts and graphics"
      ],
      careerAlignment: ["Graphic Designer", "Architect", "Interior Designer", "Photographer", "Filmmaker", "UI/UX Designer", "Art Director", "Web Developer"],
      icon: "👁️",
      academicTips: [
        "Request visual materials from professors when available",
        "Take courses that include labs, demonstrations, or visual components",
        "Form study groups where you can draw concepts on whiteboards",
        "Use online resources with infographics and visual explanations"
      ]
    },
    Auditory: {
      description: "You learn most effectively through listening, discussion, and verbal processing - hearing information helps you understand and retain concepts better than reading alone.",
      detailedDescription: "As an auditory learner, you excel at processing information through your ears. You likely remember conversations well, enjoy discussions, and may find yourself talking through problems to understand them better.",
      strengths: [
        "Excellent listening skills and verbal communication",
        "Strong ability to learn from lectures and discussions",
        "Good at remembering spoken instructions and conversations",
        "Natural talent for languages and verbal expression",
        "Ability to pick up on tone, inflection, and verbal nuances"
      ],
      challenges: [
        "May struggle with silent reading comprehension",
        "Difficulty learning from purely visual materials",
        "Can be distracted by background noise",
        "May have trouble organizing thoughts without talking them through"
      ],
      studyStrategies: [
        "Read textbooks and notes aloud to yourself",
        "Join or form study groups for discussion-based learning",
        "Record lectures and listen to them multiple times",
        "Use podcasts and audiobooks to supplement reading",
        "Explain concepts out loud to solidify understanding",
        "Use mnemonic devices and verbal repetition",
        "Study in a quiet environment or with background music you find helpful"
      ],
      careerAlignment: ["Teacher", "Therapist", "Radio/TV Host", "Musician", "Sales Representative", "Lawyer", "Counselor", "Public Speaker"],
      icon: "👂",
      academicTips: [
        "Participate actively in class discussions",
        "Attend office hours to discuss concepts verbally with professors",
        "Use speech-to-text software for note-taking if helpful",
        "Form verbal study partnerships with classmates"
      ]
    },
    "Reading/Writing": {
      description: "You learn best through written language - reading, writing, and text-based activities are your primary channels for processing and retaining information.",
      detailedDescription: "Reading/Writing learners like you have a strong affinity for the written word. You likely excel at taking detailed notes, enjoy reading for pleasure, and find that writing helps clarify your thoughts and deepen understanding.",
      strengths: [
        "Excellent written communication and note-taking skills",
        "Strong reading comprehension and vocabulary",
        "Ability to organize thoughts clearly in writing",
        "Good at research and working with text-based materials",
        "Natural inclination toward detailed documentation"
      ],
      challenges: [
        "May struggle with purely visual or hands-on learning",
        "Difficulty processing information from lectures without good notes",
        "Can become overwhelmed by too much verbal information at once",
        "May prefer working alone over group discussions"
      ],
      studyStrategies: [
        "Take comprehensive, organized notes in your own words",
        "Rewrite and reorganize notes after class to reinforce learning",
        "Create detailed outlines and bullet-point summaries",
        "Use lists, definitions, and written exercises extensively",
        "Keep a learning journal to reflect on concepts in writing",
        "Seek out textbooks and written supplementary materials",
        "Write practice essays and responses to test understanding"
      ],
      careerAlignment: ["Writer", "Editor", "Researcher", "Lawyer", "Journalist", "Librarian", "Technical Writer", "Academic"],
      icon: "📝",
      academicTips: [
        "Develop a consistent note-taking system that works for you",
        "Use campus writing centers for feedback and support",
        "Choose courses with substantial reading and writing components",
        "Engage with course materials by annotating and highlighting text"
      ]
    },
    Kinesthetic: {
      description: "You learn most effectively through physical movement, hands-on experiences, and real-world application - you need to 'do' in order to truly understand.",
      detailedDescription: "Kinesthetic learners like you process information best through physical engagement and practical application. You likely prefer active learning environments, learn by trying things yourself, and may find it difficult to sit still for long periods.",
      strengths: [
        "Excellent hands-on problem-solving abilities",
        "Strong physical coordination and motor skills",
        "Ability to learn through trial and error effectively",
        "Good at applying theoretical knowledge to real situations",
        "Natural inclination toward building and creating"
      ],
      challenges: [
        "Difficulty sitting still for long lectures or study sessions",
        "May struggle with abstract concepts without practical application",
        "Can find traditional classroom settings restrictive",
        "May need more time to process purely theoretical information"
      ],
      studyStrategies: [
        "Incorporate movement into study sessions - walk while reviewing notes",
        "Use manipulatives, models, and hands-on materials when possible",
        "Take frequent breaks during study sessions to move around",
        "Act out concepts or use role-playing to understand material",
        "Seek out lab courses, internships, and experiential learning opportunities",
        "Use gesture and movement while memorizing information",
        "Create physical study spaces with room to move and work with materials"
      ],
      careerAlignment: ["Engineer", "Surgeon", "Chef", "Mechanic", "Athletic Trainer", "Physical Therapist", "Carpenter", "Laboratory Technician"],
      icon: "🤲",
      academicTips: [
        "Prioritize courses with lab components and practical applications",
        "Seek internships and co-op opportunities in your field",
        "Use study techniques that involve physical activity",
        "Consider trade schools or technical programs alongside traditional academics"
      ]
    }
  };

  // Comprehensive Personality Factor Insights with detailed trait dimensions
  const personalityTraitDetails = detailedResults?.personalityTraits || { energy: 'Introvert', organization: 'Planner', thinking: 'Analytical', social: 'Helper' };
  
  const traitDimensions = {
    energy: {
      Introvert: {
        title: "Introverted Energy Style",
        description: "You tend to direct your energy inward and gain energy from solitude and reflection.",
        characteristics: [
          "Prefer working independently or in small groups",
          "Need quiet time to recharge and process information",
          "Think before speaking and prefer deeper conversations",
          "Focus intensely on tasks and projects",
          "Value privacy and personal space"
        ],
        workStyle: "You likely excel in roles that allow for independent work, deep focus, and minimal interruptions.",
        studyTips: ["Schedule regular quiet study time", "Choose less crowded study spaces", "Take breaks for solitary reflection"],
        icon: "🧘"
      },
      Extrovert: {
        title: "Extroverted Energy Style", 
        description: "You tend to direct your energy outward and gain energy from social interaction.",
        characteristics: [
          "Enjoy collaborating and working with others",
          "Energized by social interactions and group activities",
          "Think out loud and process ideas through discussion",
          "Comfortable being the center of attention",
          "Seek variety and external stimulation"
        ],
        workStyle: "You likely thrive in collaborative environments with plenty of social interaction and teamwork.",
        studyTips: ["Form study groups", "Discuss concepts with classmates", "Study in social environments"],
        icon: "🎯"
      }
    },
    organization: {
      Planner: {
        title: "Structured Planning Style",
        description: "You prefer structure, schedules, and organized approaches to tasks and life.",
        characteristics: [
          "Create detailed plans and follow schedules",
          "Prefer clear deadlines and expectations",
          "Organize information systematically",
          "Feel comfortable with routines and predictability",
          "Value punctuality and reliability"
        ],
        workStyle: "You excel in structured environments with clear processes and defined timelines.",
        studyTips: ["Create detailed study schedules", "Use planners and organizational tools", "Break large projects into smaller tasks"],
        icon: "📅"
      },
      Spontaneous: {
        title: "Flexible Spontaneous Style",
        description: "You prefer flexibility, adaptability, and keeping options open.",
        characteristics: [
          "Adapt easily to changing circumstances",
          "Prefer to keep options open and decide in the moment",
          "Work well under pressure and tight deadlines",
          "Enjoy variety and new experiences",
          "Value freedom and flexibility over rigid structure"
        ],
        workStyle: "You thrive in dynamic environments that allow for flexibility and creative problem-solving.",
        studyTips: ["Use flexible study methods", "Study in different locations", "Allow for spontaneous learning opportunities"],
        icon: "🌀"
      }
    },
    thinking: {
      Analytical: {
        title: "Analytical thinking Style",
        description: "You approach problems systematically using logic, data, and structured analysis.",
        characteristics: [
          "Break down complex problems into components",
          "Rely on facts, data, and logical reasoning",
          "Prefer systematic, step-by-step approaches",
          "Value accuracy and precision",
          "Enjoy research and detailed analysis"
        ],
        workStyle: "You excel in roles requiring problem-solving, research, and data-driven decision making.",
        studyTips: ["Use logical frameworks", "Create detailed notes and outlines", "Focus on understanding underlying principles"],
        icon: "🔍"
      },
      Creative: {
        title: "Creative Thinking Style",
        description: "You approach problems with imagination, innovation, and original thinking.",
        characteristics: [
          "Generate novel ideas and creative solutions",
          "Think outside conventional boundaries",
          "Enjoy brainstorming and exploring possibilities",
          "Value originality and artistic expression",
          "Comfortable with ambiguity and open-ended problems"
        ],
        workStyle: "You thrive in innovative environments that encourage creative problem-solving and original thinking.",
        studyTips: ["Use visual and creative study methods", "Connect concepts to personal interests", "Allow time for creative exploration"],
        icon: "🎨"
      }
    },
    social: {
      Helper: {
        title: "Collaborative Helper Style",
        description: "You are motivated by helping others and working collaboratively toward shared goals.",
        characteristics: [
          "Naturally supportive and encouraging to others",
          "Motivated by making a positive impact",
          "Excellent at building relationships and trust",
          "Value harmony and cooperation",
          "Skilled at understanding others' perspectives"
        ],
        workStyle: "You excel in service-oriented roles and collaborative team environments.",
        studyTips: ["Study with others to help reinforce learning", "Connect learning to how it helps others", "Use peer tutoring"],
        icon: "🤝"
      },
      Leader: {
        title: "Natural Leader Style",
        description: "You are motivated by taking charge, making decisions, and guiding others toward goals.",
        characteristics: [
          "Comfortable taking initiative and making decisions",
          "Naturally take charge in group situations",
          "Motivated by achievement and results",
          "Good at organizing and directing others",
          "Value efficiency and goal accomplishment"
        ],
        workStyle: "You thrive in leadership roles with responsibility for directing projects and teams.",
        studyTips: ["Take leadership roles in group projects", "Set ambitious learning goals", "Organize study groups"],
        icon: "👑"
      }
    }
  };

  return (
    <div className="min-h-screen p-4" style={{ background: 'radial-gradient(circle at 20% 30%, #DDA0DD 0%, #D8BFD8 15%, #87CEEB 40%, #4682B4 100%)' }}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center pt-8 pb-4">
          <div className="flex gap-3 justify-center mb-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="bg-white/90 border-gray-300 text-black hover:bg-white hover:text-black"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="bg-white/90 border-gray-300 text-black hover:bg-white hover:text-black"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Results
            </Button>
          </div>

          {/* Premium Status Indicator */}
          {localStorage.getItem('hasPaidPremium') === 'true' && (
            <div className="mb-4">
              <Badge variant="default" className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1">
                ✨ Premium Access Activated
              </Badge>
            </div>
          )}
          
          {/* Section Navigation Tabs (Sticky) */}
          {!freeAssessmentAccess && (
          <div className="sticky top-0 z-30 -mx-4 px-4 py-3 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button 
                variant={section === 'learning-style' ? "default" : "outline"}
                onClick={() => setSection('learning-style')}
                className="text-sm"
              >
                Learning Style
              </Button>
              <Button 
                variant={section === 'personality' ? "default" : "outline"}
                onClick={() => setSection('personality')}
                className="text-sm"
              >
                Personality Insights
              </Button>
              <Button 
                variant={section === 'careers' ? "default" : "outline"}
                onClick={() => setSection('careers')}
                className="text-sm"
              >
                Career Matches
              </Button>
              <Button 
                variant={section === 'study-methods' ? "default" : "outline"}
                onClick={() => setSection('study-methods')}
                className="text-sm"
              >
                Study Methods
              </Button>
            </div>
          </div>
          )}


          <h1 className="text-4xl font-bold text-black mb-2">
            {(() => {
              if (section === 'learning-style') return 'Your Learning Style';
              if (section === 'personality') return 'Personality Insights';
              if (section === 'careers') return 'Career Matches';
              if (section === 'study-methods') return 'Recommended Study Methods';
              return 'Your Complete Profile';
            })()}
          </h1>
          
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden shadow border-2 border-primary/20">
              <img 
                src={personalityAvatars[personality as PersonalityType]} 
                alt={`${result.type} avatar`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-black/80 text-lg">For {result.type}</p>
          </div>
        </div>

        {/* Learning Style Section */}
        {section === 'learning-style' && (
          <div className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <span className="text-4xl">{learningStyleDetails[learningStyle as keyof typeof learningStyleDetails]?.icon}</span>
                  {learningStyle} Learner
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-lg text-muted-foreground leading-relaxed">
                  {learningStyleDetails[learningStyle as keyof typeof learningStyleDetails]?.description}
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Deep Dive: What This Means for You</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {learningStyleDetails[learningStyle as keyof typeof learningStyleDetails]?.detailedDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center gap-2">
                      <Star className="h-5 w-5 text-green-600" />
                      Your Learning Strengths
                    </h3>
                    <ul className="space-y-2">
                      {learningStyleDetails[learningStyle as keyof typeof learningStyleDetails]?.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span className="text-green-700">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                    <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-amber-600" />
                      Areas to Watch
                    </h3>
                    <ul className="space-y-2">
                      {learningStyleDetails[learningStyle as keyof typeof learningStyleDetails]?.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-amber-600 mt-1">⚠</span>
                          <span className="text-amber-700">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Study Strategies Card */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <GraduationCap className="h-7 w-7 text-primary" />
                  Your Personalized Study Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {learningStyleDetails[learningStyle as keyof typeof learningStyleDetails]?.studyStrategies.map((strategy, index) => (
                    <div key={index} className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-lg border border-primary/10">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-foreground font-medium">{strategy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Academic Success Tips */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Users className="h-7 w-7 text-primary" />
                  Academic Success Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {learningStyleDetails[learningStyle as keyof typeof learningStyleDetails]?.academicTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        💡
                      </div>
                      <p className="text-blue-800">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Study Methods Section */}
        {section === 'study-methods' && (
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-foreground flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                Personalized Study Methods
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg text-muted-foreground">
                Based on your {learningStyle} learning style, these study methods will help you learn most effectively:
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {learningStyleDetails[learningStyle as keyof typeof learningStyleDetails]?.studyStrategies.map((method, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-lg border border-primary/20 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <span className="font-medium text-foreground">{method}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">💡 Pro Tips for {learningStyle} Learners</h3>
                <div className="space-y-3 text-muted-foreground">
                  {learningStyle === 'Visual' && (
                    <>
                      <p>• Use different colors for different subjects or topics</p>
                      <p>• Create visual summaries at the end of each study session</p>
                      <p>• Find or create diagrams to represent complex concepts</p>
                    </>
                  )}
                  {learningStyle === 'Auditory' && (
                    <>
                      <p>• Record yourself reading notes and listen back while commuting</p>
                      <p>• Form study groups to discuss and debate topics</p>
                      <p>• Use rhythm and rhymes to memorize important information</p>
                    </>
                  )}
                  {learningStyle === 'Reading/Writing' && (
                    <>
                      <p>• Rewrite your notes in your own words after each class</p>
                      <p>• Create detailed outlines before writing essays or reports</p>
                      <p>• Use flashcards with written questions and answers</p>
                    </>
                  )}
                  {learningStyle === 'Kinesthetic' && (
                    <>
                      <p>• Take frequent breaks to move around during study sessions</p>
                      <p>• Use physical objects or models to understand abstract concepts</p>
                      <p>• Study in different locations to create physical memory associations</p>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Personality Insights Section */}
        {section === 'personality' && (
          <div className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <Star className="h-8 w-8 text-primary" />
                  Your Personality Profile: {result.type}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-primary/20">
                    <img 
                      src={personalityAvatars[personality as PersonalityType]} 
                      alt={`${result.type} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-muted-foreground leading-relaxed">{result.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Personality Trait Analysis */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <span className="text-3xl">{personalityTraitDetails.energy === 'Introvert' ? '🧘' : '🎯'}</span>
                  {personalityTraitDetails.energy === 'Introvert' ? 'Introverted Energy Style' : 'Extroverted Energy Style'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-lg text-muted-foreground leading-relaxed">
                  {personalityTraitDetails.energy === 'Introvert' 
                    ? 'You tend to direct your energy inward and gain energy from solitude and reflection.'
                    : 'You tend to direct your energy outward and gain energy from social interaction.'
                  }
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Key Characteristics</h3>
                    <ul className="space-y-2">
                      {personalityTraitDetails.energy === 'Introvert' ? (
                        <>
                          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span className="text-blue-700">Prefer working independently or in small groups</span></li>
                          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span className="text-blue-700">Need quiet time to recharge and process information</span></li>
                          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span className="text-blue-700">Think before speaking and prefer deeper conversations</span></li>
                          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span className="text-blue-700">Focus intensely on tasks and projects</span></li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span className="text-blue-700">Enjoy collaborating and working with others</span></li>
                          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span className="text-blue-700">Energized by social interactions and group activities</span></li>
                          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span className="text-blue-700">Think out loud and process ideas through discussion</span></li>
                          <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">•</span><span className="text-blue-700">Comfortable being the center of attention</span></li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Work Style</h4>
                      <p className="text-purple-700 text-sm">
                        {personalityTraitDetails.energy === 'Introvert'
                          ? 'You likely excel in roles that allow for independent work, deep focus, and minimal interruptions.'
                          : 'You likely thrive in collaborative environments with plenty of social interaction and teamwork.'
                        }
                      </p>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                      <h4 className="font-semibold text-emerald-800 mb-2">Study Tips</h4>
                      <ul className="space-y-1">
                        {personalityTraitDetails.energy === 'Introvert' ? (
                          <>
                            <li className="text-emerald-700 text-sm">• Schedule regular quiet study time</li>
                            <li className="text-emerald-700 text-sm">• Choose less crowded study spaces</li>
                            <li className="text-emerald-700 text-sm">• Take breaks for solitary reflection</li>
                          </>
                        ) : (
                          <>
                            <li className="text-emerald-700 text-sm">• Form study groups</li>
                            <li className="text-emerald-700 text-sm">• Discuss concepts with classmates</li>
                            <li className="text-emerald-700 text-sm">• Study in social environments</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Organization Style */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <span className="text-3xl">{personalityTraitDetails.organization === 'Planner' ? '📅' : '🌀'}</span>
                  {personalityTraitDetails.organization === 'Planner' ? 'Structured Planning Style' : 'Flexible Spontaneous Style'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-lg text-muted-foreground leading-relaxed">
                  {personalityTraitDetails.organization === 'Planner'
                    ? 'You prefer structure, schedules, and organized approaches to tasks and life.'
                    : 'You prefer flexibility, adaptability, and keeping options open.'
                  }
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">Key Characteristics</h3>
                    <ul className="space-y-2">
                      {personalityTraitDetails.organization === 'Planner' ? (
                        <>
                          <li className="flex items-start gap-2"><span className="text-green-600 mt-1">•</span><span className="text-green-700">Create detailed plans and follow schedules</span></li>
                          <li className="flex items-start gap-2"><span className="text-green-600 mt-1">•</span><span className="text-green-700">Prefer clear deadlines and expectations</span></li>
                          <li className="flex items-start gap-2"><span className="text-green-600 mt-1">•</span><span className="text-green-700">Organize information systematically</span></li>
                          <li className="flex items-start gap-2"><span className="text-green-600 mt-1">•</span><span className="text-green-700">Value punctuality and reliability</span></li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start gap-2"><span className="text-green-600 mt-1">•</span><span className="text-green-700">Adapt easily to changing circumstances</span></li>
                          <li className="flex items-start gap-2"><span className="text-green-600 mt-1">•</span><span className="text-green-700">Prefer to keep options open</span></li>
                          <li className="flex items-start gap-2"><span className="text-green-600 mt-1">•</span><span className="text-green-700">Work well under pressure</span></li>
                          <li className="flex items-start gap-2"><span className="text-green-600 mt-1">•</span><span className="text-green-700">Value freedom and flexibility</span></li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Study Approach</h4>
                      <p className="text-purple-700 text-sm">
                        {personalityTraitDetails.organization === 'Planner'
                          ? 'Create detailed study schedules and break large projects into smaller, manageable tasks.'
                          : 'Use flexible study methods and allow for spontaneous learning opportunities.'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Thinking Style */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <span className="text-3xl">{personalityTraitDetails.thinking === 'Analytical' ? '🔍' : '🎨'}</span>
                  {personalityTraitDetails.thinking === 'Analytical' ? 'Analytical Thinking Style' : 'Creative Thinking Style'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-lg text-muted-foreground leading-relaxed">
                  {personalityTraitDetails.thinking === 'Analytical'
                    ? 'You approach problems systematically using logic, data, and structured analysis.'
                    : 'You approach problems with imagination, innovation, and original thinking.'
                  }
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                    <h3 className="text-xl font-semibold text-indigo-800 mb-4">Key Strengths</h3>
                    <ul className="space-y-2">
                      {personalityTraitDetails.thinking === 'Analytical' ? (
                        <>
                          <li className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span className="text-indigo-700">Break down complex problems systematically</span></li>
                          <li className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span className="text-indigo-700">Excel at research and data analysis</span></li>
                          <li className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span className="text-indigo-700">Value accuracy and logical reasoning</span></li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span className="text-indigo-700">Generate innovative and original solutions</span></li>
                          <li className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span className="text-indigo-700">Think outside conventional boundaries</span></li>
                          <li className="flex items-start gap-2"><span className="text-indigo-600 mt-1">•</span><span className="text-indigo-700">Excel at brainstorming and exploring possibilities</span></li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">Learning Approach</h4>
                    <p className="text-orange-700 text-sm">
                      {personalityTraitDetails.thinking === 'Analytical'
                        ? 'Use logical frameworks, detailed notes, and focus on understanding underlying principles.'
                        : 'Connect concepts to personal interests, use visual methods, and allow time for creative exploration.'
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Personality Section */}
        {section === 'personality-old' && (
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                {result.type}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-primary/20">
                  <img 
                    src={personalityAvatars[personality as PersonalityType]} 
                    alt={`${result.type} avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-2">{result.type}</h2>
                  <p className="text-muted-foreground leading-relaxed">{result.description}</p>
                </div>
              </div>
              
              {/* Personality Traits */}
              {result.traits && result.traits.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Your Key Traits</h3>
                  <div className="grid gap-4">
                    {result.traits.map((trait) => (
                      <div key={trait.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-foreground">{trait.name}</span>
                          <span className="text-sm text-muted-foreground">{trait.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${trait.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Career Recommendations */}
        {section === 'careers' && (
        <div className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm shadow-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-bold text-foreground">
                  Career Alignment (Based on your learning style)
                </CardTitle>
                <p className="text-muted-foreground text-xs">These paths naturally fit how you learn.</p>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <ul className="grid md:grid-cols-2 gap-0">
                  {learningStyleDetails[learningStyle as keyof typeof learningStyleDetails]?.careerAlignment.map((career, index) => (
                    <li key={index} className="text-sm flex items-start gap-1">
                      <span className="text-primary mt-[2px]">•</span>
                      <span className="text-gray-600 font-inter font-medium">{career}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            {/* Entry Level Careers */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Entry Level Career Matches
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Start your career journey with these entry-level positions that match your personality and provide 
                  a strong foundation for future growth.
                </p>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                {result.entryLevelCareers.map((career, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gradient-card">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{career.title}</h3>
                      <Badge variant="secondary" className="ml-2">Entry Level</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{career.description}</p>
                    
                    {/* Why it's perfect section */}
                    <div className="bg-primary/5 p-3 rounded-md mb-4">
                      <h4 className="text-sm font-semibold text-primary mb-2">🎯 Why Start Here:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Perfect introduction to your field of interest</li>
                        <li>• Builds foundational skills and experience</li>
                        <li>• Provides mentorship and learning opportunities</li>
                        <li>• Clear progression path to advanced roles</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-secondary" />
                        <span className="text-sm">
                          <strong>Starting Salary:</strong> {career.averageSalary}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-secondary" />
                        <span className="text-sm">
                          <strong>Job Growth:</strong> {career.jobGrowth}
                        </span>
                      </div>
                    </div>

                    <div 
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-lg cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                      onClick={() => window.open(career.indeedLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Entry Jobs on Indeed
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Advanced Level Careers */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Star className="h-6 w-6 text-primary" />
                  Advanced Career Opportunities
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  With experience and expertise, you can advance to these leadership and specialized roles that 
                  maximize your strategic thinking abilities.
                </p>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                {result.advancedCareers.map((career, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-gradient-card border-primary/20">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{career.title}</h3>
                      <Badge variant="default" className="ml-2 bg-primary">Advanced</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{career.description}</p>
                    
                    {/* Why it's perfect section */}
                    <div className="bg-primary/10 p-3 rounded-md mb-4 border border-primary/20">
                      <h4 className="text-sm font-semibold text-primary mb-2">🚀 Advanced Impact:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Lead strategic initiatives and complex projects</li>
                        <li>• Utilize advanced analytical and planning skills</li>
                        <li>• Mentor others and shape organizational direction</li>
                        <li>• Maximum autonomy and intellectual challenge</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-secondary" />
                        <span className="text-sm">
                          <strong>Senior Salary:</strong> {career.averageSalary}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-secondary" />
                        <span className="text-sm">
                          <strong>Job Growth:</strong> {career.jobGrowth}
                        </span>
                      </div>
                    </div>

                    <div 
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-lg cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                      onClick={() => window.open(career.indeedLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Senior Roles on Indeed
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* College Recommendations */}
        {section === 'colleges' && (
        <div className="space-y-6">
          {/* Tier 1 Colleges */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                 Tier 1
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Super competitive, for the bold and brilliant. Acceptance rates ≤5%.
              </p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              {getCollegesByTier(result.colleges, 'tier1').map((college, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gradient-card">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-1 text-foreground">{college.name}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-3 w-3 text-secondary" />
                    <span className="text-sm text-muted-foreground">{college.location}</span>
                  </div>
                  <Badge variant="secondary" className="mb-3 text-xs">{college.ranking}</Badge>
                </div>

                  {/* Why Good Fit & Relevant Majors */}
                  {(college.whyGoodFit || college.relevantMajors) && (
                    <div className="mb-4">
                      <h4 className="font-medium text-sm text-foreground mb-2 flex items-center gap-1">
                        <Star className="h-3 w-3 text-primary" />
                        Perfect Match for {result.type}
                      </h4>
                      <div className="space-y-2">
                        {college.whyGoodFit && (
                          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-3 rounded-lg border border-primary/20">
                            <h5 className="font-medium text-primary mb-1 text-xs">Why This Is A Great Fit:</h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">{college.whyGoodFit}</p>
                         </div>
                       )}
                        {college.relevantMajors && college.relevantMajors.length > 0 && (
                          <div className="bg-secondary/30 p-3 rounded-lg">
                            <h5 className="font-medium text-foreground mb-2 text-xs">🎓 Recommended Majors:</h5>
                            <div className="flex flex-wrap gap-1">
                              {college.relevantMajors.map((major, index) => (
                                <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium border border-primary/20">
                                  {major}
                               </span>
                             ))}
                           </div>
                         </div>
                       )}
                     </div>
                   </div>
                 )}


                {/* Website Link */}
                <div 
                  className="inline-flex bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-md cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md items-center gap-1 text-xs"
                  onClick={() => window.open(college.website, '_blank')}
                >
                  <ExternalLink className="h-3 w-3" />
                  Visit Website
                </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tier 2 Colleges */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-secondary" />
                 Tier 2
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Competitive but possible with standout stats. Acceptance rates 5%–8%.
              </p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              {getCollegesByTier(result.colleges, 'tier2').map((college, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gradient-card border-secondary/20">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-1 text-foreground">{college.name}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-3 w-3 text-secondary" />
                      <span className="text-sm text-muted-foreground">{college.location}</span>
                    </div>
                    <Badge variant="outline" className="mb-3 text-xs border-secondary text-secondary">{college.ranking}</Badge>
                  </div>

                  {/* Why Good Fit & Relevant Majors */}
                  {(college.whyGoodFit || college.relevantMajors) && (
                    <div className="mb-4">
                      <h4 className="font-medium text-sm text-foreground mb-2 flex items-center gap-1">
                        <Star className="h-3 w-3 text-secondary" />
                        Great Match for {result.type}
                      </h4>
                      <div className="space-y-2">
                        {college.whyGoodFit && (
                          <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-3 rounded-lg border border-secondary/20">
                            <h5 className="font-medium text-secondary mb-1 text-xs">Why This Is A Great Fit:</h5>
                            <p className="text-xs text-muted-foreground leading-relaxed">{college.whyGoodFit}</p>
                          </div>
                        )}
                        {college.relevantMajors && college.relevantMajors.length > 0 && (
                          <div className="bg-secondary/30 p-3 rounded-lg">
                            <h5 className="font-medium text-foreground mb-2 text-xs">🎓 Recommended Majors:</h5>
                            <div className="flex flex-wrap gap-1">
                              {college.relevantMajors.map((major, index) => (
                                <span key={index} className="bg-secondary/10 text-secondary px-2 py-1 rounded-full text-xs font-medium border border-secondary/20">
                                  {major}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}


                  {/* Website Link */}
                  <div 
                    className="inline-flex bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-md cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md items-center gap-1 text-xs"
                    onClick={() => window.open(college.website, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3" />
                    Visit Website
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tier 3 Colleges */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                 Tier 3
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                High-quality, realistic choices for many students. Acceptance rates 8%–20%.
              </p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              {getCollegesByTier(result.colleges, 'tier3').map((college, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gradient-card border-blue-600/20">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-1 text-foreground">{college.name}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-3 w-3 text-blue-600" />
                      <span className="text-sm text-muted-foreground">{college.location}</span>
                    </div>
                    <Badge variant="outline" className="mb-3 text-xs border-blue-600 text-blue-600">{college.ranking}</Badge>
                  </div>

                  {/* Why Good Fit & Relevant Majors */}
                   {(college.whyGoodFit || college.relevantMajors) && (
                     <div className="mb-4">
                       <h4 className="font-medium text-sm text-foreground mb-2 flex items-center gap-1">
                         <Star className="h-3 w-3 text-blue-600" />
                         Great Match for {result.type}
                       </h4>
                       <div className="space-y-2">
                         {college.whyGoodFit && (
                           <div className="bg-gradient-to-r from-blue-600/10 to-blue-600/5 p-3 rounded-lg border border-blue-600/20">
                             <h5 className="font-medium text-blue-600 mb-1 text-xs">Why This Is A Great Fit:</h5>
                             <p className="text-xs text-muted-foreground leading-relaxed">{college.whyGoodFit}</p>
                           </div>
                         )}
                         {college.relevantMajors && college.relevantMajors.length > 0 && (
                           <div className="bg-blue-600/30 p-3 rounded-lg">
                             <h5 className="font-medium text-foreground mb-2 text-xs">🎓 Recommended Majors:</h5>
                             <div className="flex flex-wrap gap-1">
                               {college.relevantMajors.map((major, index) => (
                                 <span key={index} className="bg-blue-600/10 text-blue-600 px-2 py-1 rounded-full text-xs font-medium border border-blue-600/20">
                                   {major}
                                 </span>
                               ))}
                             </div>
                           </div>
                         )}
                       </div>
                     </div>
                   )}


                  {/* Website Link */}
                  <div 
                    className="inline-flex bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-md cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md items-center gap-1 text-xs"
                    onClick={() => window.open(college.website, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3" />
                    Visit Website
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tier 4 Colleges */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-purple-600" />
                 Tier 4
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Great schools with solid chances of admission. Acceptance rates 20%–40%.
              </p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              {getCollegesByTier(result.colleges, 'tier4').map((college, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gradient-card border-purple-600/20">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-1 text-foreground">{college.name}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-3 w-3 text-purple-600" />
                      <span className="text-sm text-muted-foreground">{college.location}</span>
                    </div>
                    <Badge variant="outline" className="mb-3 text-xs border-purple-600 text-purple-600">{college.ranking}</Badge>
                  </div>

                  {/* Why Good Fit & Relevant Majors */}
                   {(college.whyGoodFit || college.relevantMajors) && (
                     <div className="mb-4">
                       <h4 className="font-medium text-sm text-foreground mb-2 flex items-center gap-1">
                         <Star className="h-3 w-3 text-purple-600" />
                         Solid Match for {result.type}
                       </h4>
                       <div className="space-y-2">
                         {college.whyGoodFit && (
                            <div className="bg-gradient-to-r from-purple-600/10 to-purple-600/5 p-3 rounded-lg border border-purple-600/20">
                              <h5 className="font-medium text-purple-600 mb-1 text-xs">Why This Is A Great Fit:</h5>
                             <p className="text-xs text-muted-foreground leading-relaxed">{college.whyGoodFit}</p>
                           </div>
                         )}
                         {college.relevantMajors && college.relevantMajors.length > 0 && (
                           <div className="bg-purple-600/30 p-3 rounded-lg">
                             <h5 className="font-medium text-foreground mb-2 text-xs">🎓 Recommended Majors:</h5>
                             <div className="flex flex-wrap gap-1">
                               {college.relevantMajors.map((major, index) => (
                                 <span key={index} className="bg-purple-600/10 text-purple-600 px-2 py-1 rounded-full text-xs font-medium border border-purple-600/20">
                                   {major}
                                 </span>
                               ))}
                             </div>
                           </div>
                         )}
                       </div>
                     </div>
                   )}


                  {/* Website Link */}
                  <div 
                    className="inline-flex bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-md cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md items-center gap-1 text-xs"
                    onClick={() => window.open(college.website, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3" />
                    Visit Website
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tier 5 Colleges */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-green-600" />
                 Tier 5
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Schools you're likely to get into and thrive at. Acceptance rates 40%–85%+.
              </p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              {getCollegesByTier(result.colleges, 'tier5').map((college, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gradient-card border-green-600/20">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-1 text-foreground">{college.name}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="h-3 w-3 text-green-600" />
                      <span className="text-sm text-muted-foreground">{college.location}</span>
                    </div>
                    <Badge variant="outline" className="mb-3 text-xs border-green-600 text-green-600">{college.ranking}</Badge>
                  </div>

                  {/* Why Good Fit & Relevant Majors */}
                   {(college.whyGoodFit || college.relevantMajors) && (
                     <div className="mb-4">
                       <h4 className="font-medium text-sm text-foreground mb-2 flex items-center gap-1">
                         <Star className="h-3 w-3 text-green-600" />
                         Good Match for {result.type}
                       </h4>
                       <div className="space-y-2">
                         {college.whyGoodFit && (
                            <div className="bg-gradient-to-r from-green-600/10 to-green-600/5 p-3 rounded-lg border border-green-600/20">
                              <h5 className="font-medium text-green-600 mb-1 text-xs">Why This Is A Great Fit:</h5>
                             <p className="text-xs text-muted-foreground leading-relaxed">{college.whyGoodFit}</p>
                           </div>
                         )}
                         {college.relevantMajors && college.relevantMajors.length > 0 && (
                           <div className="bg-green-600/30 p-3 rounded-lg">
                             <h5 className="font-medium text-foreground mb-2 text-xs">🎓 Recommended Majors:</h5>
                             <div className="flex flex-wrap gap-1">
                               {college.relevantMajors.map((major, index) => (
                                 <span key={index} className="bg-green-600/10 text-green-600 px-2 py-1 rounded-full text-xs font-medium border border-green-600/20">
                                   {major}
                                 </span>
                               ))}
                             </div>
                           </div>
                         )}
                       </div>
                     </div>
                   )}


                  {/* Website Link */}
                  <div 
                    className="inline-flex bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-md cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md items-center gap-1 text-xs"
                    onClick={() => window.open(college.website, '_blank')}
                  >
                    <ExternalLink className="h-3 w-3" />
                    Visit Website
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Where Should I Apply Button */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Academic Fit Assessment
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Take our academic worksheet to see which college tiers match your profile.
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                onClick={() => navigate('/academic-worksheet', { state: { personality } })}
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700 px-8 py-4 text-lg font-semibold"
              >
                Where Should I Apply?
              </Button>
            </CardContent>
          </Card>
        </div>
        )}

        {/* Navigation Tabs at Bottom */}
        {!freeAssessmentAccess && (
        <div className="flex justify-center gap-4 mt-8 pb-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              console.log('=== PERSONALITY BUTTON CLICKED ===');
              navigate('/', { state: { showResults: true, personality } });
            }}
            className="px-6 py-3"
          >
            Personality Profile
          </Button>
          <Button
            variant={section === 'careers' ? "default" : "outline"}
            size="lg"
            onClick={() => {
              console.log('Clicking Career Matches button');
              navigate('/detailed-results', { state: { personality, section: 'careers' } });
            }}
            className="px-6 py-3"
          >
            Career Matches
          </Button>
          <Button
            variant={section === 'colleges' ? "default" : "outline"}
            size="lg"
            onClick={() => {
              console.log('Clicking College Options button');
              navigate('/detailed-results', { state: { personality, section: 'colleges' } });
            }}
            className="px-6 py-3"
          >
            College Options
          </Button>
        </div>
        )}

      </div>
    </div>
  );
}