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
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'no', name: 'Norsk', flag: '🇳🇴' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'gr', name: 'Ελληνικά', flag: '🇬🇷' },
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
        'premium.section.cta': 'Get Premium Assessment',
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
      },
    };

    return translations[currentLanguage.code]?.[key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}