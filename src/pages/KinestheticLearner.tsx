import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Brain, Target, BookOpen, Lightbulb, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { resultsTranslations } from '@/i18n/results';
import Header from '@/components/Header';

const KinestheticLearner = () => {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const t = resultsTranslations[currentLanguage.code] || resultsTranslations.en;

  const studyStrategies = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Hands-On Activities",
      description: "Engage in physical manipulatives, experiments, and building projects to understand concepts through touch and movement."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Movement While Learning", 
      description: "Walk while reviewing notes, use fidget tools, or change positions frequently to maintain focus and engagement."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Real-World Applications",
      description: "Connect abstract concepts to practical, real-life situations and seek opportunities for internships or field experiences."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Interactive Learning",
      description: "Use simulations, role-playing, labs, and interactive software that allow you to actively participate in learning."
    }
  ];

  const careerPaths = [
    {
      category: "Healthcare & Science",
      careers: ["Physical Therapist", "Surgeon", "Laboratory Technician", "Athletic Trainer", "Nurse", "Veterinarian"]
    },
    {
      category: "Engineering & Technology", 
      careers: ["Mechanical Engineer", "Systems Engineer", "Software Developer", "Robotics Engineer", "Architect"]
    },
    {
      category: "Skilled Trades",
      careers: ["Carpenter", "Electrician", "Chef", "Mechanic", "Pilot", "Photographer"]
    },
    {
      category: "Creative & Arts",
      careers: ["Sculptor", "Dancer", "Craft Artist", "Art Therapist", "Interior Designer", "Fashion Designer"]
    }
  ];

  const academicTips = [
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      tip: "Take frequent study breaks and incorporate physical activity"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      tip: "Use flashcards and manipulate them while studying"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      tip: "Seek out lab courses, workshops, and hands-on learning opportunities"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      tip: "Join study groups where you can act out concepts or work together on projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <Header onHome={() => navigate('/')} />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Navigation */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-secondary/20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.back}
        </Button>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-lg">
            🏃‍♂️ Kinesthetic Learner
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary to-primary-glow bg-clip-text text-transparent mb-6">
            The Hands-On Learner
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.kinesthetic_description || "You learn most effectively through physical movement, hands-on experiences, and real-world application - you need to \"do\" in order to truly understand."}
          </p>
        </div>

        {/* Learning Profile */}
        <Card className="mb-12 border-2 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Brain className="w-8 h-8 text-primary" />
              Your Learning Profile
            </CardTitle>
            <CardDescription>
              Understanding your kinesthetic learning style and how to maximize it
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">🎯 {t.strengths}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Excel in hands-on activities and practical applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Strong spatial awareness and coordination skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Learn through trial and error and direct experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Comfortable with physical tools and technology</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">⚠️ {t.areas_to_watch}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>May struggle with long lectures or purely theoretical content</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Need movement and activity to maintain focus</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>May appear restless in traditional classroom settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span>Prefer learning through doing rather than reading about it</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Study Strategies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            🎯 {t.personalized_study_methods || "Personalized Study Methods"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {studyStrategies.map((strategy, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-primary">
                    {strategy.icon}
                    {strategy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Alignment */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            💼 {t.career_alignment_learning || "Career Alignment"}
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.career_alignment_desc || "These career paths naturally fit how you learn and work best."}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {careerPaths.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.careers.map((career, careerIndex) => (
                      <Badge key={careerIndex} variant="outline" className="hover:bg-primary/10">
                        {career}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Success Tips */}
        <Card className="border-2 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">
              🎓 {t.academic_success_tips || "Academic Success Tips"}
            </CardTitle>
            <CardDescription className="text-center">
              Practical strategies to excel in your academic journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {academicTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/20">
                  {tip.icon}
                  <p className="text-sm">{tip.tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate('/detailed-quiz')}
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300"
          >
            Take Full Assessment
          </Button>
        </div>
      </main>
    </div>
  );
};

export default KinestheticLearner;