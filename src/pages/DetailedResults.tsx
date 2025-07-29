import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, TrendingUp, MapPin, GraduationCap, Star, ArrowLeft } from 'lucide-react';
import { personalityResults } from '@/data/quiz';
import { PersonalityType } from '@/types/quiz';

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
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="mb-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Results
          </Button>
          
          {/* Navigation Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant={!section || section === 'careers' ? "default" : "outline"}
              onClick={() => navigate('/detailed-results', { state: { personality, section: 'careers' } })}
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 shadow-lg font-semibold px-6"
            >
              Career Matches
            </Button>
            <Button 
              variant={section === 'colleges' ? "default" : "outline"}
              onClick={() => navigate('/detailed-results', { state: { personality, section: 'colleges' } })}
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 shadow-lg font-semibold px-6"
            >
              College Options
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/', { state: { showResults: true } })}
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 shadow-lg font-semibold px-6"
            >
              Personality Results
            </Button>
          </div>

          <h1 className="text-4xl font-bold text-white mb-2">
            {section === 'careers' ? 'Your Career Matches' : 
             section === 'colleges' ? 'Your College Options' : 
             'Career & College Details'}
          </h1>
          <p className="text-white/80 text-lg">For {result.type}</p>
        </div>

        {/* Career Recommendations */}
        {(!section || section === 'careers') && (
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
                {result.careers.slice(0, 2).map((career, index) => (
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

                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(career.indeedLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Entry Jobs on Indeed
                    </Button>
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
                {result.careers.slice(2).map((career, index) => (
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

                    <Button 
                      variant="default" 
                      size="sm" 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => window.open(career.indeedLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Senior Roles on Indeed
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* College Recommendations */}
        {(!section || section === 'colleges') && (
        <Card className="bg-white/95 backdrop-blur-sm shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Top College Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-1 gap-8">
            {result.colleges.map((college, index) => (
              <div key={index} className="border rounded-lg p-6 bg-gradient-card">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{college.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">{college.location}</span>
                  </div>
                  <Badge variant="secondary" className="mb-4">{college.ranking}</Badge>
                </div>

                {/* Contact Information */}
                {(college.phone || college.email || (college.regionalCounselors && college.regionalCounselors.length > 0)) && (
                  <div className="bg-primary/5 p-4 rounded-md mb-6">
                    <h4 className="font-semibold text-primary mb-3">📞 Admissions Contact</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      {college.phone && (
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Phone:</span>
                          <a href={`tel:${college.phone}`} className="text-primary hover:underline">
                            {college.phone}
                          </a>
                        </div>
                      )}
                      {college.email && (
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Email:</span>
                          <a href={`mailto:${college.email}`} className="text-primary hover:underline break-all">
                            {college.email}
                          </a>
                        </div>
                      )}
                      {college.regionalCounselors && college.regionalCounselors.length > 0 && (
                        <div className="md:col-span-2">
                          <span className="font-medium">Regional Counselors:</span>
                          <div className="mt-1 text-muted-foreground text-xs">
                            {college.regionalCounselors.join(', ')}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                 )}

                 {/* Why Good Fit & Relevant Majors */}
                 {(college.whyGoodFit || college.relevantMajors) && (
                   <div className="mb-6">
                     <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                       <Star className="h-4 w-4 text-primary" />
                       Perfect Match for {result.type}
                     </h4>
                     <div className="space-y-4">
                       {college.whyGoodFit && (
                         <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20">
                           <h5 className="font-medium text-primary mb-2">Why This Is A Great Fit:</h5>
                           <p className="text-sm text-muted-foreground leading-relaxed">{college.whyGoodFit}</p>
                         </div>
                       )}
                       {college.relevantMajors && college.relevantMajors.length > 0 && (
                         <div className="bg-secondary/30 p-4 rounded-lg">
                           <h5 className="font-medium text-foreground mb-3">🎓 Recommended Majors:</h5>
                           <div className="flex flex-wrap gap-2">
                             {college.relevantMajors.map((major, index) => (
                               <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium border border-primary/20">
                                 {major}
                               </span>
                             ))}
                           </div>
                         </div>
                       )}
                     </div>
                   </div>
                 )}

                {/* Academic Information */}
                {college.tuition && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      Academic Information
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Tuition:</span>
                        <div className="text-muted-foreground">{college.tuition}</div>
                      </div>
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Acceptance Rate:</span>
                        <div className="text-muted-foreground">{college.acceptanceRate}</div>
                      </div>
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Average GPA:</span>
                        <div className="text-muted-foreground">{college.averageGPA}</div>
                      </div>
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Test Scores:</span>
                        <div className="text-muted-foreground">{college.testScores}</div>
                      </div>
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Application Deadline:</span>
                        <div className="text-muted-foreground">{college.applicationDeadline}</div>
                      </div>
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Student-Faculty Ratio:</span>
                        <div className="text-muted-foreground">{college.studentFacultyRatio}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Campus Life */}
                {college.studentPopulation && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Campus Life
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Student Population:</span>
                        <div className="text-muted-foreground">{college.studentPopulation}</div>
                      </div>
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Athletics:</span>
                        <div className="text-muted-foreground">{college.athletics}</div>
                      </div>
                      <div className="md:col-span-2 bg-white/50 p-3 rounded">
                        <span className="font-medium">Campus Culture:</span>
                        <div className="text-muted-foreground mt-1">{college.campusCulture}</div>
                      </div>
                      {college.housingOptions && college.housingOptions.length > 0 && (
                        <div className="md:col-span-2">
                          <span className="font-medium">Housing Options:</span>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {college.housingOptions.map((option, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">{option}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {college.activities && college.activities.length > 0 && (
                        <div className="md:col-span-2">
                          <span className="font-medium">Popular Activities:</span>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {college.activities.map((activity, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">{activity}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Career Support */}
                {college.jobPlacementRate && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Career Support
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Job Placement Rate:</span>
                        <div className="text-muted-foreground">{college.jobPlacementRate}</div>
                      </div>
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Alumni Network:</span>
                        <div className="text-muted-foreground">{college.alumniNetwork || 'Strong alumni connections'}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Website Link */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(college.website, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit College Website
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
        )}
      </div>
    </div>
  );
}