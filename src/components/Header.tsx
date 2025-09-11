import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderProps {
  onHome: () => void;
  showHomeButton?: boolean;
}

export default function Header({ onHome, showHomeButton = true }: HeaderProps) {
  const hasPremium = typeof window !== 'undefined' && localStorage.getItem('hasPaidPremium') === 'true';
  const { t } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            {hasPremium && (
              <Badge variant="default" className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 text-xs">
                ✨ Premium
              </Badge>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <LanguageSelector />
            {showHomeButton && (
              <Button
                variant="outline" 
                onClick={onHome}
                size="sm"
                className="bg-white/90 border-gray-300 text-black hover:bg-white hover:text-black transition-all duration-300"
              >
              <Home className="h-4 w-4 mr-2" />
              {t('home')}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}