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
  const { t } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3"></div>
          
          <div className="flex items-center gap-3">
            <LanguageSelector />
            {showHomeButton && (
              <Button
                variant="outline" 
                onClick={onHome}
                size="sm"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300"
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