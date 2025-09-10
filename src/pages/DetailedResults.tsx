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
  
  // Bypass payment verification for preview
  useEffect(() => {
    const init = () => {
      const paidParam = searchParams.get(PAYMENT_SUCCESS_PARAM);
      if (paidParam === PAYMENT_SUCCESS_VALUE) {
        localStorage.setItem('hasPaidPremium', 'true');
      }

      // Always show premium preview with sample data
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
      localStorage.setItem('pendingQuizResults', JSON.stringify({ 
        results: sampleResults, 
        answers: Array(50).fill({ question: 'Sample question', answer: 'Agree' })
      }));
      setPersonality(sampleResults.personality);
      setHasAccess(true);
    };

    init();
    window.scrollTo(0, 0);
  }, [searchParams, navigate, toast]);

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

  // Learning Style Details
  const learningStyleDetails = {
    Visual: {
      description: "Prefers charts, graphs, and visual instructions. Learns best through diagrams, colors, mind maps, and videos.",
      studyMethods: ["Flashcards", "Color-coded notes", "Watching demonstrations", "Mind maps", "Diagrams and charts"],
      careers: ["Graphic Designer", "Architect", "Filmmaker", "UI/UX Designer"],
      icon: "👁️"
    },
    Auditory: {
      description: "Remembers information from discussions, lectures, and music. Learns best by listening, reading aloud, or using mnemonic songs.",
      studyMethods: ["Podcasts", "Group study", "Verbal repetition", "Recording lectures", "Discussion groups"],
      careers: ["Musician", "Therapist", "Broadcaster", "Teacher"],
      icon: "👂"
    },
    "Reading/Writing": {
      description: "Prefers words, both written and spoken. Learns best through books, journaling, note-taking, and lists.",
      studyMethods: ["Rewriting notes", "Creating summaries", "Textbooks", "Written lists", "Journaling"],
      careers: ["Author", "Researcher", "Lawyer", "Editor"],
      icon: "📝"
    },
    Kinesthetic: {
      description: "Prefers hands-on experiences and real-world application. Learns best through movement, touch, and practice.",
      studyMethods: ["Lab work", "Building projects", "Acting things out", "Physical models", "Field trips"],
      careers: ["Engineer", "Athlete", "Surgeon", "Chef", "Mechanic"],
      icon: "🤲"
    }
  };

  // Personality Factor Insights
  const personalityFactors = [
    {
      name: "Strategic Thinking",
      description: "Strong long-term planning, logical organization, and seeing the big picture.",
      icon: "🎯"
    },
    {
      name: "Independence", 
      description: "Self-direction, preference for working solo, and initiating tasks without help.",
      icon: "🚀"
    },
    {
      name: "Analytical Skills",
      description: "Enjoying solving problems and using logic or research to find answers.",
      icon: "🔍"
    },
    {
      name: "Creativity",
      description: "Originality, artistic interests, and openness to new ideas or aesthetics.",
      icon: "🎨"
    },
    {
      name: "Judgment",
      description: "Decisiveness, forming opinions quickly, and having a clear internal compass.", 
      icon: "⚖️"
    },
    {
      name: "Adaptability",
      description: "Flexibility in routine, openness to change, and comfort with the unexpected.",
      icon: "🔄"
    }
  ];

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
          
          {/* Section Navigation Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
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
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    How You Learn Best
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Your learning style indicates you absorb information most effectively through:
                  </p>
                  <ul className="space-y-2">
                    {learningStyle === 'Visual' && (
                      <>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Charts, graphs, and diagrams</li>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Visual instructions and demonstrations</li>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Colors, mind maps, and videos</li>
                      </>
                    )}
                    {learningStyle === 'Auditory' && (
                      <>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Discussions and lectures</li>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Reading aloud and verbal repetition</li>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Music and mnemonic songs</li>
                      </>
                    )}
                    {learningStyle === 'Reading/Writing' && (
                      <>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Books and written materials</li>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Note-taking and journaling</li>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Lists and written summaries</li>
                      </>
                    )}
                    {learningStyle === 'Kinesthetic' && (
                      <>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Hands-on experiences</li>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Movement and physical practice</li>
                        <li className="flex items-center gap-2"><span className="text-primary">•</span> Real-world application</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" />
                    Career Alignment
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Your learning style naturally aligns with these career paths:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {learningStyleDetails[learningStyle as keyof typeof learningStyleDetails]?.careers.map((career, index) => (
                      <Badge key={index} variant="secondary" className="justify-center py-2">
                        {career}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
                {learningStyleDetails[learningStyle as keyof typeof learningStyleDetails]?.studyMethods.map((method, index) => (
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
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-foreground flex items-center gap-3">
                <Star className="h-8 w-8 text-primary" />
                Personality Factor Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg text-muted-foreground mb-6">
                Your assessment reveals key personality factors that influence how you work, learn, and interact with others.
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {personalityFactors.map((factor, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/20 hover:shadow-md transition-all">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{factor.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{factor.name}</h3>
                        <p className="text-muted-foreground leading-relaxed">{factor.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {strengths.length > 0 && (
                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Your Key Strengths
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {strengths.map((strength: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span className="text-muted-foreground">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
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
              setTimeout(() => window.scrollTo(0, 0), 50);
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
              setTimeout(() => window.scrollTo(0, 0), 50);
            }}
            className="px-6 py-3"
          >
            College Options
          </Button>
        </div>
      </div>
    </div>
  );
}