import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, TrendingUp, MapPin, GraduationCap, Star, ArrowLeft, Home } from 'lucide-react';
import { personalityResults } from '@/data/quiz';
import { PersonalityType, College, CollegeTiers } from '@/types/quiz';

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
const getCollegesByTier = (colleges: College[] | CollegeTiers, tier: 'tier1' | 'tier2' | 'tier3' | 'tier4' | 'tier5'): College[] => {
  if (Array.isArray(colleges)) {
    // Legacy structure - filter by college names with no overlaps
    const tierCollege = {
      tier1: ['harvard', 'stanford', 'columbia', 'massachusetts institute of technology', 'mit', 'yale', 'princeton', 'california institute of technology', 'caltech', 'university of chicago'],
      tier2: ['brown', 'dartmouth', 'duke', 'university of pennsylvania', 'penn', 'johns hopkins', 'northwestern', 'cornell'],
      tier3: ['vanderbilt', 'university of notre dame', 'notre dame', 'rice', 'georgetown', 'washington university', 'berkeley', 'ucla'],
      tier4: ['university of michigan', 'michigan', 'georgia institute of technology', 'georgia tech', 'emory', 'new york university', 'nyu', 'boston university', 'university of virginia', 'michigan state', 'indiana university', 'university of pittsburgh', 'university of minnesota', 'university of connecticut', 'temple'],
      tier5: ['university of california davis', 'uc davis', 'university of california irvine', 'uc irvine', 'university of california santa barbara', 'ucsb', 'university of florida', 'university of illinois', 'illinois', 'university of washington', 'purdue', 'texas a&m', 'university of colorado', 'university of maryland', 'university of arizona', 'university of oregon', 'university of kansas', 'university of alabama', 'west virginia', 'louisiana state', 'lsu']
    };
    
    // Track which colleges have already been assigned to prevent duplicates
    const assignedColleges = new Set<string>();
    
    // First try keyword matching for current tier only
    const filtered = colleges.filter(college => {
      const name = college.name.toLowerCase();
      
      // Skip if already assigned to a higher priority tier
      if (assignedColleges.has(name)) {
        return false;
      }
      
      // Check if this college matches current tier
      const matches = tierCollege[tier].some(keyword => name.includes(keyword));
      
      if (matches) {
        assignedColleges.add(name);
        return true;
      }
      
      return false;
    });
    
    // If no colleges match keywords, distribute evenly across tiers (only unassigned ones)
    if (filtered.length === 0) {
      const unassignedColleges = colleges.filter(college => 
        !assignedColleges.has(college.name.toLowerCase())
      );
      const collegesPerTier = Math.ceil(unassignedColleges.length / 5);
      const tierIndex = { tier1: 0, tier2: 1, tier3: 2, tier4: 3, tier5: 4 }[tier];
      const startIndex = tierIndex * collegesPerTier;
      const endIndex = startIndex + collegesPerTier;
      return unassignedColleges.slice(startIndex, endIndex);
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
  const { personality, section } = location.state || {};

  if (!personality) {
    navigate('/');
    return null;
  }

  const result = personalityResults[personality as PersonalityType];

  return (
    <div className="min-h-screen bg-gradient-hero p-4">
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
          <div className="flex gap-2 justify-center mb-6">
            <Button 
              variant={section === 'personality' ? "default" : "outline"}
              onClick={() => navigate('/detailed-results', { state: { personality, section: 'personality' } })}
              className="text-sm"
            >
              Personality
            </Button>
            <Button 
              variant={section === 'careers' ? "default" : "outline"}
              onClick={() => navigate('/detailed-results', { state: { personality, section: 'careers' } })}
              className="text-sm"
            >
              Career Matches
            </Button>
            <Button 
              variant={section === 'colleges' ? "default" : "outline"}
              onClick={() => navigate('/detailed-results', { state: { personality, section: 'colleges' } })}
              className="text-sm"
            >
              College Options
            </Button>
          </div>

          <h1 className="text-4xl font-bold text-black mb-2">
            {(() => {
              console.log('Current section:', section);
              if (section === 'careers') return 'Your Career Matches';
              if (section === 'colleges') return 'Your College Options';
              if (section === 'personality') return 'Your Personality Profile';
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

        {/* Personality Section */}
        {section === 'personality' && (
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
            variant={section === 'personality' ? "default" : "outline"}
            size="lg"
            onClick={() => {
              console.log('=== PERSONALITY BUTTON CLICKED ===');
              navigate('/detailed-results', { state: { personality, section: 'personality' } });
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
      </div>
    </div>
  );
}