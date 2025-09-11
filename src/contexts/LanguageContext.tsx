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
      },
      fr: {
        'personality.quiz': 'Quiz de Personnalité',
        'start.quiz': 'Commencer le Quiz',
        'take.assessment': 'Passer l\'Évaluation',
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