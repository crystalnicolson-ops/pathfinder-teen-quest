import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage, languages } from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/90 border-gray-300 text-black hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 min-w-[120px]"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full mt-1 z-50 bg-white rounded-lg shadow-lg border border-gray-200 py-2 w-56 max-h-80 overflow-y-auto">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
              Select Language
            </div>
            
            <div className="py-1">
              {languages.map((language) => {
                const isSelected = currentLanguage.code === language.code;
                
                return (
                  <button
                    key={language.code}
                    onClick={() => {
                      setLanguage(language);
                      setIsOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                      isSelected ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{language.name}</div>
                      <div className="text-xs text-gray-500 uppercase">{language.code}</div>
                    </div>
                    {isSelected && (
                      <Badge variant="default" className="text-xs px-2 py-0.5">
                        Active
                      </Badge>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}