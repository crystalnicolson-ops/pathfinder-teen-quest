import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = {
  code: string;
  name: string;
  flag: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

type LanguageProviderProps = {
  children: React.ReactNode;
};

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const saved = localStorage.getItem('selectedLanguage');
    if (saved) {
      const language = languages.find(lang => lang.code === saved);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', language.code);
  };

  // Basic translation function - in a real app, you'd load translations from files
  const t = (key: string): string => {
    const translations: Record<string, Record<string, string>> = {
      en: {
        'personality.quiz': 'Personality Quiz',
        'start.quiz': 'Start Quiz',
        'take.assessment': 'Take Assessment',
        'premium.assessment': 'Premium Assessment',
        'career.matches': 'Career Matches',
        'college.options': 'College Options',
        'home': 'Home',
        'retake.quiz': 'Retake Quiz',
        'results.ready': 'Your Results Are In!',
        'personality.type': 'Personality Type',
        'what.means': 'What Does This Mean?',
        'your.strengths': 'Your Strengths',
        'work.style': 'Work Style',
        'best.environments': 'Best Environments',
        'personality.traits': 'Your Personality Traits',

        // Options
        'option.strongly_agree': 'Strongly Agree',
        'option.agree': 'Agree',
        'option.neutral': 'Neutral',
        'option.disagree': 'Disagree',
        'option.strongly_disagree': 'Strongly Disagree',

        // Common
        'common.previous': 'Previous',

        // Sections
        'detailed_quiz.section.learning_style': 'Learning Style Assessment',
        'detailed_quiz.select_to_continue': 'Select an answer to continue',

        'home.hero.title': "What's Your Personality Type?",
        'home.hero.subtitle': 'Take our quick personality quiz and discover careers that match your unique strengths, plus colleges that can get you there!',
        'home.hero.quick': 'Quick Assessment (Free)',

        'home.section.types.title': 'Find Your Match',
        'home.section.types.subtitle': 'Discover which of these personality types matches your unique strengths and preferences',

        'home.section.features.title': "What You'll Discover",
        'feature.personality.title': 'Your Personality Type',
        'feature.personality.desc': 'Understand your unique strengths, preferences, and working style through our scientifically-based assessment.',
        'feature.careers.title': 'Perfect Career Matches',
        'feature.careers.desc': 'Get personalized career recommendations with salary information and real job listings from Indeed.',
        'feature.colleges.title': 'Top College Options',
        'feature.colleges.desc': 'Discover the best colleges and universities for your chosen career path, with relevant program details.',
        'cta.colleges.start_quiz': 'Start Quiz to See Colleges',

        'cta.ready.title': 'Ready to Shape Your Future?',
        'cta.ready.subtitle': 'Join thousands of teens who have discovered their perfect career path. It only takes 5 minutes!',
        'cta.begin': 'Begin Assessment',

        'premium.section.subtitle': 'Unlock deeper insights with our comprehensive 50-question assessment',
        'premium.section.what_you_get': 'What You Get:',
        'premium.section.plus': 'Plus:',
        // Add personality type translations to context
        'personality.the_strategist': 'The Strategist',
        'personality.the_inventor': 'The Inventor', 
        'personality.the_boss': 'The Boss',
        'personality.the_challenger': 'The Challenger',
        'personality.the_visionary': 'The Visionary',
        'personality.the_creator': 'The Creator',
        'personality.the_coach': 'The Coach',
        'personality.the_free_spirit': 'The Free Spirit',
        'personality.the_organizer': 'The Organizer',
        'personality.the_helper': 'The Helper',
        'personality.the_manager': 'The Manager',
        'personality.the_host': 'The Host',
        'personality.the_fixer': 'The Fixer',
        'personality.the_artist': 'The Artist',
        'personality.the_adventurer': 'The Adventurer',
        'personality.the_performer': 'The Performer',

        // Quiz interface translations
        'quiz.question_counter': 'Question {{current}} of {{total}}',
        'quiz.percent_complete': '{{percent}}% Complete',
        'quiz.processing': 'Processing...',
        'quiz.verifying_payment': 'Verifying payment...',
        'quiz.payment_error': 'Payment Error',
        'quiz.payment_opened': 'Payment Opened',
        'quiz.payment_opened_desc': 'Complete the payment, then return to view your results.',
        'quiz.error_payment_link': 'Payment link not set. Please add your Stripe Payment Link.',

        // Payment screen translations
        'payment.congratulations': 'Congratulations! 🎉',
        'payment.quiz_complete': 'Your comprehensive assessment is complete!',
        'payment.unlock_results': 'Unlock your detailed personality analysis with career recommendations and college matches.',
        'payment.one_time': 'One-time payment',
        'payment.get_results': 'Get My Results',
        'payment.back_to_quiz': 'Back to Quiz',
        
        // Detailed quiz translations
        'detailed_quiz.title': 'Comprehensive Personality Assessment',
        'detailed_quiz.subtitle': 'Discover your complete personality profile',
      },
      es: {
        'personality.quiz': 'Quiz de Personalidad',
        'start.quiz': 'Comenzar Quiz',
        'take.assessment': 'Tomar Evaluación',
        'premium.assessment': 'Evaluación Premium',
        'career.matches': 'Carreras Compatibles',
        'college.options': 'Opciones Universitarias',
        'home': 'Inicio',
        'retake.quiz': 'Repetir Quiz',
        'results.ready': '¡Tus Resultados Están Listos!',
        'personality.type': 'Tipo de Personalidad',
        'what.means': '¿Qué Significa Esto?',
        'your.strengths': 'Tus Fortalezas',
        'work.style': 'Estilo de Trabajo',
        'best.environments': 'Mejores Ambientes',
        'personality.traits': 'Tus Rasgos de Personalidad',

        'home.hero.title': '¿Cuál es tu tipo de personalidad?',
        'home.hero.subtitle': 'Realiza nuestro test rápido y descubre carreras que coinciden con tus fortalezas únicas, además de universidades que te llevarán allí.',
        'home.hero.quick': 'Evaluación rápida (Gratis)',

        'home.section.types.title': 'Encuentra tu coincidencia',
        'home.section.types.subtitle': 'Descubre cuál de estos tipos de personalidad coincide con tus fortalezas y preferencias',

        'home.section.features.title': 'Lo que descubrirás',
        'feature.personality.title': 'Tu tipo de personalidad',
        'feature.personality.desc': 'Comprende tus fortalezas, preferencias y estilo de trabajo mediante nuestra evaluación basada en ciencia.',
        'feature.careers.title': 'Carreras perfectas',
        'feature.careers.desc': 'Obtén recomendaciones de carreras con información salarial y ofertas reales en Indeed.',
        'feature.colleges.title': 'Opciones universitarias principales',
        'feature.colleges.desc': 'Descubre las mejores universidades para tu camino profesional, con programas relevantes.',
        'cta.colleges.start_quiz': 'Comienza el quiz para ver universidades',

        'cta.ready.title': '¿Listo para construir tu futuro?',
        'cta.ready.subtitle': 'Únete a miles de jóvenes que han descubierto su carrera ideal. ¡Solo toma 5 minutos!',
        'cta.begin': 'Comenzar evaluación',

        'premium.section.subtitle': 'Desbloquea perspectivas más profundas con nuestra evaluación integral de 50 preguntas',
        'premium.section.what_you_get': 'Lo que obtienes:',
        'premium.section.plus': 'Además:',
        'premium.section.cta': 'Obtener Evaluación Premium',

        // Add personality type translations to context
        'personality.the_strategist': 'El Estratega',
        'personality.the_inventor': 'El Inventor', 
        'personality.the_boss': 'El Jefe',
        'personality.the_challenger': 'El Desafiante',
        'personality.the_visionary': 'El Visionario',
        'personality.the_creator': 'El Creador',
        'personality.the_coach': 'El Entrenador',
        'personality.the_free_spirit': 'El Espíritu Libre',
        'personality.the_organizer': 'El Organizador',
        'personality.the_helper': 'El Ayudante',
        'personality.the_manager': 'El Gerente',
        'personality.the_host': 'El Anfitrión',
        'personality.the_fixer': 'El Solucionador',
        'personality.the_artist': 'El Artista',
        'personality.the_adventurer': 'El Aventurero',
        'personality.the_performer': 'El Artista',

        // Quiz interface translations
        'quiz.question_counter': 'Pregunta {{current}} de {{total}}',
        'quiz.percent_complete': '{{percent}}% Completo',
        'quiz.processing': 'Procesando...',
        'quiz.verifying_payment': 'Verificando pago...',
        'quiz.payment_error': 'Error de Pago',
        'quiz.payment_opened': 'Pago Abierto',
        'quiz.payment_opened_desc': 'Completa el pago, luego regresa para ver tus resultados.',
        'quiz.error_payment_link': 'Enlace de pago no configurado. Por favor añade tu enlace de pago de Stripe.',

        // Payment screen translations
        'payment.congratulations': '¡Felicitaciones! 🎉',
        'payment.quiz_complete': '¡Tu evaluación integral está completa!',
        'payment.unlock_results': 'Desbloquea tu análisis detallado de personalidad con recomendaciones de carrera y opciones universitarias.',
        'payment.one_time': 'Pago único',
        'payment.get_results': 'Obtener Mis Resultados',
        'payment.back_to_quiz': 'Volver al Quiz',
        
        // Detailed quiz translations
        'detailed_quiz.title': 'Evaluación Integral de Personalidad',
        'detailed_quiz.subtitle': 'Descubre tu perfil completo de personalidad',

        // Options
        'option.strongly_agree': 'Totalmente de acuerdo',
        'option.agree': 'De acuerdo',
        'option.neutral': 'Neutral',
        'option.disagree': 'En desacuerdo',
        'option.strongly_disagree': 'Totalmente en desacuerdo',

        // Common
        'common.previous': 'Anterior',

        // Sections
        'detailed_quiz.section.learning_style': 'Evaluación de estilo de aprendizaje',
        'detailed_quiz.select_to_continue': 'Selecciona una respuesta para continuar',
      },
      fr: {
        'personality.quiz': 'Quiz de Personnalité',
        'start.quiz': 'Commencer le Quiz',
        'take.assessment': "Passer l'Évaluation",
        'premium.assessment': 'Évaluation Premium',
        'career.matches': 'Carrières Compatibles',
        'college.options': 'Options Universitaires',
        'home': 'Accueil',
        'retake.quiz': 'Refaire le Quiz',
        'results.ready': 'Vos Résultats Sont Prêts !',
        'personality.type': 'Type de Personnalité',
        'what.means': 'Que Signifie Ceci ?',
        'your.strengths': 'Vos Forces',
        'work.style': 'Style de Travail',
        'best.environments': 'Meilleurs Environnements',
        'personality.traits': 'Vos Traits de Personnalité',

        'home.hero.title': 'Quel est votre type de personnalité ?',
        'home.hero.subtitle': 'Faites notre test rapide et découvrez des carrières adaptées à vos forces uniques, ainsi que des universités pour y parvenir.',
        'home.hero.quick': 'Évaluation rapide (Gratuite)',

        'home.section.types.title': 'Trouvez votre correspondance',
        'home.section.types.subtitle': 'Découvrez lequel de ces types de personnalité correspond à vos forces et préférences',

        'home.section.features.title': 'Ce que vous allez découvrir',
        'feature.personality.title': 'Votre type de personnalité',
        'feature.personality.desc': 'Comprenez vos forces, vos préférences et votre style de travail grâce à notre évaluation scientifique.',
        'feature.careers.title': 'Carrières idéales',
        'feature.careers.desc': 'Obtenez des recommandations de carrière avec salaires et offres réelles sur Indeed.',
        'feature.colleges.title': 'Meilleures options universitaires',
        'feature.colleges.desc': 'Découvrez les meilleures universités pour votre parcours, avec des programmes pertinents.',
        'cta.colleges.start_quiz': 'Commencer le quiz pour voir les universités',

        'cta.ready.title': 'Prêt à façonner votre avenir ?',
        'cta.ready.subtitle': "Rejoignez des milliers d'ados qui ont découvert leur voie. Cela ne prend que 5 minutes !",
        'cta.begin': "Commencer l'évaluation",

        'premium.section.subtitle': 'Débloquez des insights plus profonds avec notre évaluation de 50 questions',
        'premium.section.what_you_get': 'Ce que vous obtenez :',
        'premium.section.plus': 'En plus :',
        'premium.section.cta': "Obtenir l'évaluation Premium",

        // Add personality type translations to context
        'personality.the_strategist': 'Le Stratège',
        'personality.the_inventor': 'L\'Inventeur', 
        'personality.the_boss': 'Le Chef',
        'personality.the_challenger': 'Le Challenger',
        'personality.the_visionary': 'Le Visionnaire',
        'personality.the_creator': 'Le Créateur',
        'personality.the_coach': 'L\'Entraîneur',
        'personality.the_free_spirit': 'L\'Esprit Libre',
        'personality.the_organizer': 'L\'Organisateur',
        'personality.the_helper': 'L\'Assistant',
        'personality.the_manager': 'Le Manager',
        'personality.the_host': 'L\'Hôte',
        'personality.the_fixer': 'Le Réparateur',
        'personality.the_artist': 'L\'Artiste',
        'personality.the_adventurer': 'L\'Aventurier',
        'personality.the_performer': 'L\'Artiste',

        // Quiz interface translations
        'quiz.question_counter': 'Question {{current}} sur {{total}}',
        'quiz.percent_complete': '{{percent}}% Terminé',
        'quiz.processing': 'Traitement...',
        'quiz.verifying_payment': 'Vérification du paiement...',
        'quiz.payment_error': 'Erreur de Paiement',
        'quiz.payment_opened': 'Paiement Ouvert',
        'quiz.payment_opened_desc': 'Complétez le paiement, puis revenez pour voir vos résultats.',
        'quiz.error_payment_link': 'Lien de paiement non configuré. Veuillez ajouter votre lien de paiement Stripe.',

        // Payment screen translations
        'payment.congratulations': 'Félicitations ! 🎉',
        'payment.quiz_complete': 'Votre évaluation complète est terminée !',
        'payment.unlock_results': 'Débloquez votre analyse détaillée de personnalité avec des recommandations de carrière et d\'universités.',
        'payment.one_time': 'Paiement unique',
        'payment.get_results': 'Obtenir Mes Résultats',
        'payment.back_to_quiz': 'Retour au Quiz',
        
        // Detailed quiz translations
        'detailed_quiz.title': 'Évaluation Complète de Personnalité',
        'detailed_quiz.subtitle': 'Découvrez votre profil de personnalité complet',

        // Options
        'option.strongly_agree': 'Tout à fait d\'accord',
        'option.agree': 'D\'accord',
        'option.neutral': 'Neutre',
        'option.disagree': 'Pas d\'accord',
        'option.strongly_disagree': 'Pas du tout d\'accord',

        // Common
        'common.previous': 'Précédent',

        // Sections
        'detailed_quiz.section.learning_style': 'Évaluation du style d’apprentissage',
        'detailed_quiz.select_to_continue': 'Sélectionnez une réponse pour continuer',
      },
      de: {
        'personality.quiz': 'Persönlichkeitstest',
        'start.quiz': 'Quiz Starten',
        'take.assessment': 'Test Durchführen',
        'premium.assessment': 'Premium-Bewertung',
        'career.matches': 'Karriere-Matches',
        'college.options': 'College-Optionen',
        'home': 'Startseite',
        'retake.quiz': 'Quiz Wiederholen',
        'results.ready': 'Ihre Ergebnisse Sind Da!',
        'personality.type': 'Persönlichkeitstyp',
        'what.means': 'Was Bedeutet Das?',
        'your.strengths': 'Ihre Stärken',
        'work.style': 'Arbeitsstil',
        'best.environments': 'Beste Umgebungen',
        'personality.traits': 'Ihre Persönlichkeitsmerkmale',

        'home.hero.title': 'Was ist dein Persönlichkeitstyp?',
        'home.hero.subtitle': 'Mache unseren schnellen Test und entdecke Karrieren, die zu deinen Stärken passen, plus Hochschulen, die dich dorthin bringen.',
        'home.hero.quick': 'Schnelltest (Kostenlos)',

        'home.section.types.title': 'Finde dein Match',
        'home.section.types.subtitle': 'Finde heraus, welcher Persönlichkeitstyp zu deinen Stärken und Vorlieben passt',

        'home.section.features.title': 'Das wirst du entdecken',
        'feature.personality.title': 'Dein Persönlichkeitstyp',
        'feature.personality.desc': 'Verstehe deine Stärken, Vorlieben und Arbeitsweise mit unserer wissenschaftlich fundierten Bewertung.',
        'feature.careers.title': 'Perfekte Karriereoptionen',
        'feature.careers.desc': 'Erhalte Karriereempfehlungen mit Gehaltsinfos und echten Stellenanzeigen von Indeed.',
        'feature.colleges.title': 'Top Hochschuloptionen',
        'feature.colleges.desc': 'Entdecke die besten Hochschulen für deinen Karriereweg mit relevanten Programmen.',
        'cta.colleges.start_quiz': 'Quiz starten, um Hochschulen zu sehen',

        'cta.ready.title': 'Bereit, deine Zukunft zu gestalten?',
        'cta.ready.subtitle': 'Schließe dich tausenden Jugendlichen an, die ihren Karriereweg gefunden haben. Es dauert nur 5 Minuten!',
        'cta.begin': 'Bewertung starten',

        'premium.section.subtitle': 'Erhalte tiefere Einblicke mit unserer umfassenden 50-Fragen-Bewertung',
        'premium.section.what_you_get': 'Das bekommst du:',
        'premium.section.plus': 'Außerdem:',
        'premium.section.cta': 'Premium-Bewertung erhalten',

        // Add personality type translations to context
        'personality.the_strategist': 'Der Stratege',
        'personality.the_inventor': 'Der Erfinder', 
        'personality.the_boss': 'Der Chef',
        'personality.the_challenger': 'Der Herausforderer',
        'personality.the_visionary': 'Der Visionär',
        'personality.the_creator': 'Der Schöpfer',
        'personality.the_coach': 'Der Coach',
        'personality.the_free_spirit': 'Der Freigeist',
        'personality.the_organizer': 'Der Organisator',
        'personality.the_helper': 'Der Helfer',
        'personality.the_manager': 'Der Manager',
        'personality.the_host': 'Der Gastgeber',
        'personality.the_fixer': 'Der Problemlöser',
        'personality.the_artist': 'Der Künstler',
        'personality.the_adventurer': 'Der Abenteurer',
        'personality.the_performer': 'Der Darsteller',

        // Quiz interface translations
        'quiz.question_counter': 'Frage {{current}} von {{total}}',
        'quiz.percent_complete': '{{percent}}% Abgeschlossen',
        'quiz.processing': 'Verarbeitung...',
        'quiz.verifying_payment': 'Zahlung verifizieren...',
        'quiz.payment_error': 'Zahlungsfehler',
        'quiz.payment_opened': 'Zahlung Geöffnet',
        'quiz.payment_opened_desc': 'Schließen Sie die Zahlung ab, dann kehren Sie zurück, um Ihre Ergebnisse zu sehen.',
        'quiz.error_payment_link': 'Zahlungslink nicht gesetzt. Bitte fügen Sie Ihren Stripe-Zahlungslink hinzu.',

        // Payment screen translations
        'payment.congratulations': 'Herzlichen Glückwunsch! 🎉',
        'payment.quiz_complete': 'Ihre umfassende Bewertung ist abgeschlossen!',
        'payment.unlock_results': 'Schalten Sie Ihre detaillierte Persönlichkeitsanalyse mit Karriereempfehlungen und Hochschuloptionen frei.',
        'payment.one_time': 'Einmalige Zahlung',
        'payment.get_results': 'Meine Ergebnisse Erhalten',
        'payment.back_to_quiz': 'Zurück zum Quiz',
        
        // Detailed quiz translations
        'detailed_quiz.title': 'Umfassende Persönlichkeitsbewertung',
        'detailed_quiz.subtitle': 'Entdecken Sie Ihr komplettes Persönlichkeitsprofil',

        // Options
        'option.strongly_agree': 'Stimme voll zu',
        'option.agree': 'Stimme zu',
        'option.neutral': 'Neutral',
        'option.disagree': 'Stimme nicht zu',
        'option.strongly_disagree': 'Stimme überhaupt nicht zu',

        // Common
        'common.previous': 'Zurück',

        // Sections
        'detailed_quiz.section.learning_style': 'Bewertung des Lernstils',
        'detailed_quiz.select_to_continue': 'Wählen Sie eine Antwort, um fortzufahren',
      },
      zh: {
        'personality.quiz': '性格测试',
        'start.quiz': '开始测试',
        'take.assessment': '参加评估',
        'premium.assessment': '高级评估',
        'career.matches': '职业匹配',
        'college.options': '大学选择',
        'home': '首页',
        'retake.quiz': '重新测试',
        'results.ready': '您的结果出来了！',
        'personality.type': '性格类型',
        'what.means': '这意味着什么？',
        'your.strengths': '您的优势',
        'work.style': '工作风格',
        'best.environments': '最佳环境',
        'personality.traits': '您的性格特征',

        'home.hero.title': '你的性格类型是什么？',
        'home.hero.subtitle': '参加我们的快速测试，发现与你优势相匹配的职业，并找到帮助你实现目标的大学。',
        'home.hero.quick': '快速测评（免费）',

        'home.section.types.title': '找到你的匹配',
        'home.section.types.subtitle': '了解这些性格类型中哪一种最符合你的优势与偏好',

        'home.section.features.title': '你将收获',
        'feature.personality.title': '你的性格类型',
        'feature.personality.desc': '通过科学评估了解你的优势、偏好和工作风格。',
        'feature.careers.title': '理想职业匹配',
        'feature.careers.desc': '获得带薪资信息的职业推荐，并查看 Indeed 上的真实职位。',
        'feature.colleges.title': '顶尖院校选择',
        'feature.colleges.desc': '发现与你职业方向匹配的最佳大学及相关专业。',
        'cta.colleges.start_quiz': '开始测评以查看院校',

        'cta.ready.title': '准备好规划你的未来了吗？',
        'cta.ready.subtitle': '加入成千上万已找到理想职业的青少年，只需5分钟！',
        'cta.begin': '开始评估',

        'premium.section.subtitle': '通过我们的 50 道题综合评估，获取更深入的洞察',
        'premium.section.what_you_get': '你将获得：',
        'premium.section.plus': '另外：',
        'premium.section.cta': '获取高级评估',

        // Add personality type translations to context
        'personality.the_strategist': '战略家',
        'personality.the_inventor': '发明家', 
        'personality.the_boss': '老板',
        'personality.the_challenger': '挑战者',
        'personality.the_visionary': '远见者',
        'personality.the_creator': '创造者',
        'personality.the_coach': '教练',
        'personality.the_free_spirit': '自由精神',
        'personality.the_organizer': '组织者',
        'personality.the_helper': '助人者',
        'personality.the_manager': '管理者',
        'personality.the_host': '主持人',
        'personality.the_fixer': '解决者',
        'personality.the_artist': '艺术家',
        'personality.the_adventurer': '冒险家',
        'personality.the_performer': '表演者',

        // Quiz interface translations
        'quiz.question_counter': '第{{current}}题，共{{total}}题',
        'quiz.percent_complete': '已完成{{percent}}%',
        'quiz.processing': '处理中...',
        'quiz.verifying_payment': '验证支付...',
        'quiz.payment_error': '支付错误',
        'quiz.payment_opened': '支付已打开',
        'quiz.payment_opened_desc': '完成支付，然后返回查看结果。',
        'quiz.error_payment_link': '未设置支付链接。请添加您的Stripe支付链接。',

        // Payment screen translations
        'payment.congratulations': '恭喜！🎉',
        'payment.quiz_complete': '您的综合评估已完成！',
        'payment.unlock_results': '解锁您的详细性格分析，包括职业推荐和大学匹配。',
        'payment.one_time': '一次性付款',
        'payment.get_results': '获取我的结果',
        'payment.back_to_quiz': '返回测试',
        
        // Detailed quiz translations
        'detailed_quiz.title': '综合性格评估',
        'detailed_quiz.subtitle': '发现你完整的性格档案',

        // Options
        'option.strongly_agree': '非常同意',
        'option.agree': '同意',
        'option.neutral': '中立',
        'option.disagree': '不同意',
        'option.strongly_disagree': '非常不同意',

        // Common
        'common.previous': '上一题',

        // Sections
        'detailed_quiz.section.learning_style': '学习风格评估',
        'detailed_quiz.select_to_continue': '选择一个答案以继续',
      },
      ja: {
        'personality.quiz': '性格診断',
        'start.quiz': 'クイズを始める',
        'take.assessment': '診断を受ける',
        'premium.assessment': 'プレミアム診断',
        'career.matches': 'キャリアマッチ',
        'college.options': '大学の選択肢',
        'home': 'ホーム',
        'retake.quiz': 'クイズをやり直す',
        'results.ready': '結果が出ました！',
        'personality.type': '性格タイプ',
        'what.means': 'これは何を意味しますか？',
        'your.strengths': 'あなたの強み',
        'work.style': '働き方',
        'best.environments': '最適な環境',
        'personality.traits': 'あなたの性格特性',

        'home.hero.title': 'あなたの性格タイプは？',
        'home.hero.subtitle': '短時間のテストであなたの強みに合ったキャリアを発見し、それを実現できる大学も見つけましょう。',
        'home.hero.quick': 'クイック診断（無料）',

        'home.section.types.title': 'あなたに合うタイプを見つけよう',
        'home.section.types.subtitle': 'これらの性格タイプの中で、あなたの強みと好みに合うものを見つけましょう',

        'home.section.features.title': 'わかること',
        'feature.personality.title': 'あなたの性格タイプ',
        'feature.personality.desc': '科学的な評価で、強み・好み・働き方を理解しましょう。',
        'feature.careers.title': '最適なキャリア候補',
        'feature.careers.desc': '給与情報と Indeed の実際の求人付きでおすすめのキャリアを提示します。',
        'feature.colleges.title': 'おすすめ大学',
        'feature.colleges.desc': 'あなたの進路に合う最適な大学とプログラムを紹介します。',
        'cta.colleges.start_quiz': '大学を見るには診断を開始',

        'cta.ready.title': '未来をつくる準備はできた？',
        'cta.ready.subtitle': '5分で理想の進路を見つけた多くのティーンに続こう！',
        'cta.begin': '診断を始める',

        'premium.section.subtitle': '50問の包括的な診断で、より深い洞察を得ましょう',
        'premium.section.what_you_get': '含まれる内容:',
        'premium.section.plus': 'さらに:',
        'premium.section.cta': 'プレミアム診断を入手',

        // Add personality type translations to context
        'personality.the_strategist': 'ストラテジスト',
        'personality.the_inventor': '発明家', 
        'personality.the_boss': 'ボス',
        'personality.the_challenger': 'チャレンジャー',
        'personality.the_visionary': 'ビジョナリー',
        'personality.the_creator': 'クリエイター',
        'personality.the_coach': 'コーチ',
        'personality.the_free_spirit': 'フリースピリット',
        'personality.the_organizer': 'オーガナイザー',
        'personality.the_helper': 'ヘルパー',
        'personality.the_manager': 'マネージャー',
        'personality.the_host': 'ホスト',
        'personality.the_fixer': '問題解決者',
        'personality.the_artist': 'アーティスト',
        'personality.the_adventurer': '冒険家',
        'personality.the_performer': 'パフォーマー',

        // Quiz interface translations
        'quiz.question_counter': '{{current}}/{{total}}問目',
        'quiz.percent_complete': '{{percent}}%完了',
        'quiz.processing': '処理中...',
        'quiz.verifying_payment': '支払いを確認中...',
        'quiz.payment_error': '支払いエラー',
        'quiz.payment_opened': '支払いが開かれました',
        'quiz.payment_opened_desc': '支払いを完了してから、結果を見るために戻ってください。',
        'quiz.error_payment_link': '支払いリンクが設定されていません。Stripe支払いリンクを追加してください。',

        // Payment screen translations
        'payment.congratulations': 'おめでとうございます！🎉',
        'payment.quiz_complete': '包括的な診断が完了しました！',
        'payment.unlock_results': 'キャリア推薦と大学マッチングを含む詳細な性格分析をアンロックしましょう。',
        'payment.one_time': '一回限りの支払い',
        'payment.get_results': '結果を取得',
        'payment.back_to_quiz': 'クイズに戻る',
        
        // Detailed quiz translations
        'detailed_quiz.title': '包括的性格診断',
        'detailed_quiz.subtitle': '完全な性格プロフィールを発見',
      },
    };

    return translations[currentLanguage.code]?.[key] || translations['en'][key] || key.replace(/\{\{(\w+)\}\}/g, (match, param) => `{${param}}`);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}