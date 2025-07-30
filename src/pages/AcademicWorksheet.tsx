import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, CheckCircle, ArrowLeft, Home } from 'lucide-react';

export default function AcademicWorksheet() {
  const navigate = useNavigate();
  const location = useLocation();
  const { personality } = location.state || {};
  
  // Academic worksheet state
  const [academicData, setAcademicData] = useState({
    unweightedGPA: '',
    weightedGPA: '',
    testScore: '',
    apCourses: '',
    apTests: '',
    ap5s: '',
    ap4s: '',
    ap3s: ''
  });
  const [showResults, setShowResults] = useState(false);
  
  // Calculate tier recommendations based on academic profile
  const calculateTierFit = () => {
    const gpa = parseFloat(academicData.unweightedGPA);
    const satScore = parseInt(academicData.testScore);
    const actScore = parseInt(academicData.testScore);
    const apCourses = parseInt(academicData.apCourses);
    const ap5s = parseInt(academicData.ap5s) || 0;
    const ap4s = parseInt(academicData.ap4s) || 0;
    
    const recommendations = [];
    
    // Tier 1 (Elite)
    if (gpa >= 3.9 && ((satScore >= 1500 && satScore <= 1600) || (actScore >= 34 && actScore <= 36)) && apCourses >= 8 && ap5s >= 4) {
      recommendations.push({
        tier: 'Tier 1 - Elite Universities',
        fit: 'Strong Match',
        description: '🎉 Incredible work! You have an outstanding academic profile that makes you competitive for the most prestigious universities like Ivies, MIT, and Stanford. Your dedication to excellence shows, and these top-tier schools would be lucky to have someone with your achievements!',
        color: 'purple'
      });
    }
    
    // Tier 2 (Highly Selective)
    if (gpa >= 3.7 && ((satScore >= 1400 && satScore <= 1550) || (actScore >= 31 && actScore <= 35)) && apCourses >= 6 && (ap4s + ap5s) >= 4) {
      recommendations.push({
        tier: 'Tier 2 - Highly Selective',
        fit: gpa >= 3.8 ? 'Strong Match' : 'Good Match',
        description: '🌟 Fantastic achievement! Your academic record demonstrates real strength and you\'re well-positioned for highly selective universities like NYU, Emory, and USC. You\'ve clearly worked hard and it shows - these excellent schools would value your commitment to academic success!',
        color: 'blue'
      });
    }
    
    // Tier 3 (Competitive)
    if (gpa >= 3.5 && ((satScore >= 1300 && satScore <= 1500) || (actScore >= 28 && actScore <= 33)) && apCourses >= 4) {
      recommendations.push({
        tier: 'Tier 3 - Competitive',
        fit: gpa >= 3.7 ? 'Strong Match' : 'Good Match',
        description: '💪 Great job on building a solid academic foundation! You\'re competitive for excellent schools like UC Davis, Boston University, and University of Michigan. These are amazing institutions that will provide incredible opportunities for your future success!',
        color: 'green'
      });
    }
    
    // Tier 4 (Broad Admission)
    if (gpa >= 3.2 && ((satScore >= 1100) || (actScore >= 22)) && apCourses >= 2) {
      recommendations.push({
        tier: 'Tier 4 - Broad Admission',
        fit: 'Good Match',
        description: '🚀 You\'re on a great path! Your academic record shows dedication and growth, making you a strong candidate for quality universities like ASU and University of Oregon. These schools offer fantastic programs and will give you the platform to achieve your dreams!',
        color: 'orange'
      });
    }
    
    return recommendations;
  };
  
  const handleSubmit = () => {
    if (academicData.unweightedGPA && academicData.testScore) {
      setShowResults(true);
    }
  };
  
  const isFormComplete = academicData.unweightedGPA && academicData.testScore;

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
              Back to College Results
            </Button>
          </div>
          
          <h1 className="text-4xl font-bold text-black mb-2">Where Should I Apply?</h1>
          <p className="text-black/80 text-lg">
            Use this academic worksheet to assess if your profile matches college admission standards
          </p>
        </div>

        {/* Academic Worksheet */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              College Fit – Academic Metrics Worksheet
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Focus on grades, test scores, and AP course performance to find your best college matches.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Your Academic Profile */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Your Academic Profile</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">1. What is your unweighted GPA (0.0 – 4.0)?</label>
                  <input 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    max="4" 
                    placeholder="e.g., 3.85"
                    value={academicData.unweightedGPA}
                    onChange={(e) => setAcademicData({...academicData, unweightedGPA: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">2. What is your weighted GPA (if available)?</label>
                  <input 
                    type="number" 
                    step="0.01" 
                    min="0" 
                    max="5" 
                    placeholder="e.g., 4.25"
                    value={academicData.weightedGPA}
                    onChange={(e) => setAcademicData({...academicData, weightedGPA: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">3. What is your SAT or ACT score?</label>
                  <input 
                    type="text" 
                    placeholder="e.g., 1450 (SAT) or 32 (ACT)"
                    value={academicData.testScore}
                    onChange={(e) => setAcademicData({...academicData, testScore: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">4. How many AP or IB classes have you taken?</label>
                  <input 
                    type="number" 
                    min="0" 
                    placeholder="e.g., 6"
                    value={academicData.apCourses}
                    onChange={(e) => setAcademicData({...academicData, apCourses: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">5. How many AP test scores do you have?</label>
                  <input 
                    type="number" 
                    min="0" 
                    placeholder="e.g., 5"
                    value={academicData.apTests}
                    onChange={(e) => setAcademicData({...academicData, apTests: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">6. How many of those scores were 5s?</label>
                  <input 
                    type="number" 
                    min="0" 
                    placeholder="e.g., 2"
                    value={academicData.ap5s}
                    onChange={(e) => setAcademicData({...academicData, ap5s: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">7. How many were 4s?</label>
                  <input 
                    type="number" 
                    min="0" 
                    placeholder="e.g., 2"
                    value={academicData.ap4s}
                    onChange={(e) => setAcademicData({...academicData, ap4s: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">8. How many were 3s?</label>
                  <input 
                    type="number" 
                    min="0" 
                    placeholder="e.g., 1"
                    value={academicData.ap3s}
                    onChange={(e) => setAcademicData({...academicData, ap3s: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Submit Button */}
              <div className="mt-6 text-center">
                <Button 
                  onClick={handleSubmit}
                  disabled={!isFormComplete}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold"
                >
                  Get My College Recommendations
                </Button>
              </div>
            </div>

            {/* Results */}
            {showResults && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Your College Tier Recommendations
                </h3>
                
                {calculateTierFit().length > 0 ? (
                  <div className="grid gap-4">
                    {calculateTierFit().map((rec, index) => (
                      <div key={index} className={`
                        ${rec.color === 'purple' ? 'bg-gradient-to-r from-purple-200 via-pink-200 to-indigo-200 text-purple-800' : ''}
                        ${rec.color === 'blue' ? 'bg-gradient-to-r from-blue-200 via-cyan-200 to-sky-200 text-blue-800' : ''}
                        ${rec.color === 'green' ? 'bg-gradient-to-r from-emerald-200 via-green-200 to-teal-200 text-green-800' : ''}
                        ${rec.color === 'orange' ? 'bg-gradient-to-r from-orange-200 via-peach-200 to-yellow-200 text-orange-800' : ''}
                        p-6 rounded-lg shadow-lg border border-white/50 backdrop-blur-sm
                      `}>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className={`text-lg font-bold ${
                            rec.color === 'purple' ? 'text-purple-800' : 
                            rec.color === 'blue' ? 'text-blue-800' : 
                            rec.color === 'green' ? 'text-green-800' : 
                            'text-orange-800'
                          }`}>{rec.tier}</h4>
                          <Badge variant="secondary" className={`${
                            rec.color === 'purple' ? 'bg-purple-300/50 text-purple-800 border-purple-300' : 
                            rec.color === 'blue' ? 'bg-blue-300/50 text-blue-800 border-blue-300' : 
                            rec.color === 'green' ? 'bg-green-300/50 text-green-800 border-green-300' : 
                            'bg-orange-300/50 text-orange-800 border-orange-300'
                          }`}>
                            {rec.fit}
                          </Badge>
                        </div>
                        <p className={`text-sm leading-relaxed ${
                          rec.color === 'purple' ? 'text-purple-700' : 
                          rec.color === 'blue' ? 'text-blue-700' : 
                          rec.color === 'green' ? 'text-green-700' : 
                          'text-orange-700'
                        }`}>{rec.description}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <p className="text-gray-700">
                      🌟 Every student has unique strengths! While your current academic metrics might suggest exploring a broader range of universities, 
                      remember that colleges value diverse experiences, leadership, creativity, and personal growth. Focus on schools that align with 
                      your passions and goals - there are amazing opportunities waiting for you to discover!
                    </p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}