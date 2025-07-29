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
            <div 
              className={`px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold ${
                !section || section === 'careers' 
                  ? 'bg-gradient-to-r from-purple-700 to-purple-800 text-white' 
                  : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-purple-600 hover:to-purple-700'
              }`}
              onClick={() => navigate('/detailed-results', { state: { personality, section: 'careers' } })}
            >
              Career Matches
            </div>
            <div 
              className={`px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold ${
                section === 'colleges' 
                  ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white' 
                  : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-teal-400 hover:to-teal-500'
              }`}
              onClick={() => navigate('/detailed-results', { state: { personality, section: 'colleges' } })}
            >
              College Options
            </div>
            <div 
              className="px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 text-white hover:from-indigo-600 hover:to-indigo-700"
              onClick={() => navigate('/', { state: { showResults: true } })}
            >
              Personality Results
            </div>
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
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-lg cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
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
        {(!section || section === 'colleges') && (
        <div className="space-y-6">
          {/* Tier 1 Colleges */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Tier 1 - Top Elite Universities
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Extremely selective, world-renowned academic and research reputations. Acceptance rates ~3-5%.
              </p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-1 gap-8">
              {result.colleges.filter(college => {
                const name = college.name.toLowerCase();
                return name.includes('harvard') || name.includes('massachusetts institute of technology') || 
                       name.includes('stanford') || name.includes('yale') || name.includes('princeton') ||
                       name.includes('california institute of technology') || name.includes('caltech');
              }).map((college, index) => (
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
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    Academic Information
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    {college.tuition && (
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Tuition:</span>
                        <div className="text-muted-foreground">{college.tuition}</div>
                      </div>
                    )}
                    {college.acceptanceRate && (
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Acceptance Rate:</span>
                        <div className="text-muted-foreground">{college.acceptanceRate}</div>
                      </div>
                    )}
                    {college.averageGPA && (
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Average GPA:</span>
                        <div className="text-muted-foreground">{college.averageGPA}</div>
                      </div>
                    )}
                    {college.testScores && (
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Test Scores:</span>
                        <div className="text-muted-foreground">{college.testScores}</div>
                      </div>
                    )}
                    {college.applicationDeadline && (
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Application Deadline:</span>
                        <div className="text-muted-foreground">{college.applicationDeadline}</div>
                      </div>
                    )}
                    {college.studentFacultyRatio && (
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Student-Faculty Ratio:</span>
                        <div className="text-muted-foreground">{college.studentFacultyRatio}</div>
                      </div>
                    )}
                    {college.classSize && (
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Average Class Size:</span>
                        <div className="text-muted-foreground">{college.classSize}</div>
                      </div>
                    )}
                    {college.studentPopulation && (
                      <div className="bg-white/50 p-3 rounded">
                        <span className="font-medium">Student Population:</span>
                        <div className="text-muted-foreground">{college.studentPopulation}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Website Link */}
                <div 
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-lg cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  onClick={() => window.open(college.website, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit College Website
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
                Tier 2 - Highly Prestigious Universities
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Still extremely selective, broad outcomes across STEM, humanities, business. Acceptance rates ~5-10%.
              </p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-1 gap-8">
              {result.colleges.filter(college => {
                const name = college.name.toLowerCase();
                return name.includes('university of chicago') || name.includes('columbia university') ||
                       name.includes('northwestern university') || name.includes('duke university') ||
                       name.includes('johns hopkins') || name.includes('brown university') ||
                       name.includes('dartmouth') || name.includes('cornell university') ||
                       name.includes('university of pennsylvania');
              }).map((college, index) => (
                <div key={index} className="border rounded-lg p-6 bg-gradient-card border-secondary/20">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{college.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">{college.location}</span>
                    </div>
                    <Badge variant="outline" className="mb-4 border-secondary text-secondary">{college.ranking}</Badge>
                  </div>

                  {/* Why Good Fit & Relevant Majors */}
                  {(college.whyGoodFit || college.relevantMajors) && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Star className="h-4 w-4 text-secondary" />
                        Great Match for {result.type}
                      </h4>
                      <div className="space-y-4">
                        {college.whyGoodFit && (
                          <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-4 rounded-lg border border-secondary/20">
                            <h5 className="font-medium text-secondary mb-2">Why This Is A Great Fit:</h5>
                            <p className="text-sm text-muted-foreground leading-relaxed">{college.whyGoodFit}</p>
                          </div>
                        )}
                        {college.relevantMajors && college.relevantMajors.length > 0 && (
                          <div className="bg-secondary/30 p-4 rounded-lg">
                            <h5 className="font-medium text-foreground mb-3">🎓 Recommended Majors:</h5>
                            <div className="flex flex-wrap gap-2">
                              {college.relevantMajors.map((major, index) => (
                                <span key={index} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium border border-secondary/20">
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
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-secondary" />
                      Academic Information
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                      {college.tuition && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Tuition:</span>
                          <div className="text-muted-foreground">{college.tuition}</div>
                        </div>
                      )}
                      {college.acceptanceRate && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Acceptance Rate:</span>
                          <div className="text-muted-foreground">{college.acceptanceRate}</div>
                        </div>
                      )}
                      {college.averageGPA && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Average GPA:</span>
                          <div className="text-muted-foreground">{college.averageGPA}</div>
                        </div>
                      )}
                      {college.testScores && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Test Scores:</span>
                          <div className="text-muted-foreground">{college.testScores}</div>
                        </div>
                      )}
                      {college.applicationDeadline && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Application Deadline:</span>
                          <div className="text-muted-foreground">{college.applicationDeadline}</div>
                        </div>
                      )}
                      {college.studentFacultyRatio && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Student-Faculty Ratio:</span>
                          <div className="text-muted-foreground">{college.studentFacultyRatio}</div>
                        </div>
                      )}
                      {college.classSize && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Average Class Size:</span>
                          <div className="text-muted-foreground">{college.classSize}</div>
                        </div>
                      )}
                      {college.studentPopulation && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Student Population:</span>
                          <div className="text-muted-foreground">{college.studentPopulation}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Website Link */}
                  <div 
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-lg cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    onClick={() => window.open(college.website, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit College Website
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tier 3 Colleges */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-purple-500" />
                Tier 3 - High-Status Research Institutions
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Competitive, strong across multiple fields, widely respected. Acceptance rates ~10-20%.
              </p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-1 gap-8">
              {result.colleges.filter(college => {
                const name = college.name.toLowerCase();
                return name.includes('university of california, berkeley') || name.includes('ucla') ||
                       name.includes('university of michigan') || name.includes('carnegie mellon') ||
                       name.includes('rice university') || name.includes('vanderbilt') ||
                       name.includes('university of virginia') || name.includes('georgetown') ||
                       name.includes('notre dame') || name.includes('washington university');
              }).map((college, index) => (
                <div key={index} className="border rounded-lg p-6 bg-gradient-card border-secondary/20">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{college.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-secondary" />
                      <span className="text-muted-foreground">{college.location}</span>
                    </div>
                    <Badge variant="outline" className="mb-4 border-secondary text-secondary">{college.ranking}</Badge>
                  </div>

                  {/* Why Good Fit & Relevant Majors */}
                   {(college.whyGoodFit || college.relevantMajors) && (
                     <div className="mb-6">
                       <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                         <Star className="h-4 w-4 text-secondary" />
                         Great Match for {result.type}
                       </h4>
                       <div className="space-y-4">
                         {college.whyGoodFit && (
                           <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-4 rounded-lg border border-secondary/20">
                             <h5 className="font-medium text-secondary mb-2">Why This Is A Great Fit:</h5>
                             <p className="text-sm text-muted-foreground leading-relaxed">{college.whyGoodFit}</p>
                           </div>
                         )}
                         {college.relevantMajors && college.relevantMajors.length > 0 && (
                           <div className="bg-secondary/30 p-4 rounded-lg">
                             <h5 className="font-medium text-foreground mb-3">🎓 Recommended Majors:</h5>
                             <div className="flex flex-wrap gap-2">
                               {college.relevantMajors.map((major, index) => (
                                 <span key={index} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium border border-secondary/20">
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
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-secondary" />
                      Academic Information
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                      {college.tuition && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Tuition:</span>
                          <div className="text-muted-foreground">{college.tuition}</div>
                        </div>
                      )}
                      {college.acceptanceRate && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Acceptance Rate:</span>
                          <div className="text-muted-foreground">{college.acceptanceRate}</div>
                        </div>
                      )}
                      {college.averageGPA && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Average GPA:</span>
                          <div className="text-muted-foreground">{college.averageGPA}</div>
                        </div>
                      )}
                      {college.testScores && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Test Scores:</span>
                          <div className="text-muted-foreground">{college.testScores}</div>
                        </div>
                      )}
                      {college.applicationDeadline && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Application Deadline:</span>
                          <div className="text-muted-foreground">{college.applicationDeadline}</div>
                        </div>
                      )}
                      {college.studentFacultyRatio && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Student-Faculty Ratio:</span>
                          <div className="text-muted-foreground">{college.studentFacultyRatio}</div>
                        </div>
                      )}
                      {college.classSize && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Average Class Size:</span>
                          <div className="text-muted-foreground">{college.classSize}</div>
                        </div>
                      )}
                      {college.studentPopulation && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Student Population:</span>
                          <div className="text-muted-foreground">{college.studentPopulation}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Website Link */}
                  <div 
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-lg cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    onClick={() => window.open(college.website, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit College Website
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tier 3 Colleges */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-purple-600" />
                Tier 4 - Solid Universities
              </CardTitle>
              <p className="text-muted-foreground mt-2">
                Good academic reputations, broader admissions, quality programs. Acceptance rates ~20-40%+.
              </p>
            </CardHeader>
            <CardContent className="grid md:grid-cols-1 gap-8">
              {result.colleges.filter(college => {
                const name = college.name.toLowerCase();
                // Tier 1 schools
                const isTier1 = name.includes('harvard') || name.includes('massachusetts institute of technology') || 
                               name.includes('stanford') || name.includes('yale') || name.includes('princeton') ||
                               name.includes('california institute of technology') || name.includes('caltech');
                
                // Tier 2 schools
                const isTier2 = name.includes('university of chicago') || name.includes('columbia university') ||
                               name.includes('northwestern university') || name.includes('duke university') ||
                               name.includes('johns hopkins') || name.includes('brown university') ||
                               name.includes('dartmouth') || name.includes('cornell university') ||
                               name.includes('university of pennsylvania');
                
                // Tier 3 schools
                const isTier3 = name.includes('university of california, berkeley') || name.includes('ucla') ||
                               name.includes('university of michigan') || name.includes('carnegie mellon') ||
                               name.includes('rice university') || name.includes('vanderbilt') ||
                               name.includes('university of virginia') || name.includes('georgetown') ||
                               name.includes('notre dame') || name.includes('washington university');
                
                // Tier 4: Everything else (Georgia Tech, Purdue, UW, Virginia Tech, ASU, etc.)
                return !isTier1 && !isTier2 && !isTier3;
              }).map((college, index) => (
                <div key={index} className="border rounded-lg p-6 bg-gradient-card border-purple-600/20">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{college.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-purple-600" />
                      <span className="text-muted-foreground">{college.location}</span>
                    </div>
                    <Badge variant="outline" className="mb-4 border-purple-600 text-purple-600">{college.ranking}</Badge>
                  </div>

                  {/* Why Good Fit & Relevant Majors */}
                   {(college.whyGoodFit || college.relevantMajors) && (
                     <div className="mb-6">
                       <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                         <Star className="h-4 w-4 text-purple-600" />
                         Solid Match for {result.type}
                       </h4>
                       <div className="space-y-4">
                         {college.whyGoodFit && (
                            <div className="bg-gradient-to-r from-purple-600/10 to-purple-600/5 p-4 rounded-lg border border-purple-600/20">
                              <h5 className="font-medium text-purple-600 mb-2">Why This Is A Great Fit:</h5>
                             <p className="text-sm text-muted-foreground leading-relaxed">{college.whyGoodFit}</p>
                           </div>
                         )}
                         {college.relevantMajors && college.relevantMajors.length > 0 && (
                           <div className="bg-purple-600/30 p-4 rounded-lg">
                             <h5 className="font-medium text-foreground mb-3">🎓 Recommended Majors:</h5>
                             <div className="flex flex-wrap gap-2">
                               {college.relevantMajors.map((major, index) => (
                                 <span key={index} className="bg-purple-600/10 text-purple-600 px-3 py-1 rounded-full text-xs font-medium border border-purple-600/20">
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
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-purple-600" />
                      Academic Information
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                      {college.tuition && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Tuition:</span>
                          <div className="text-muted-foreground">{college.tuition}</div>
                        </div>
                      )}
                      {college.acceptanceRate && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Acceptance Rate:</span>
                          <div className="text-muted-foreground">{college.acceptanceRate}</div>
                        </div>
                      )}
                      {college.averageGPA && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Average GPA:</span>
                          <div className="text-muted-foreground">{college.averageGPA}</div>
                        </div>
                      )}
                      {college.testScores && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Test Scores:</span>
                          <div className="text-muted-foreground">{college.testScores}</div>
                        </div>
                      )}
                      {college.applicationDeadline && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Application Deadline:</span>
                          <div className="text-muted-foreground">{college.applicationDeadline}</div>
                        </div>
                      )}
                      {college.studentFacultyRatio && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Student-Faculty Ratio:</span>
                          <div className="text-muted-foreground">{college.studentFacultyRatio}</div>
                        </div>
                      )}
                      {college.classSize && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Average Class Size:</span>
                          <div className="text-muted-foreground">{college.classSize}</div>
                        </div>
                      )}
                      {college.studentPopulation && (
                        <div className="bg-white/50 p-3 rounded">
                          <span className="font-medium">Student Population:</span>
                          <div className="text-muted-foreground">{college.studentPopulation}</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Website Link */}
                  <div 
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-lg cursor-pointer hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    onClick={() => window.open(college.website, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit College Website
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
        )}
      </div>
    </div>
  );
}