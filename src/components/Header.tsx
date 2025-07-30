import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

interface HeaderProps {
  onHome: () => void;
  showHomeButton?: boolean;
}

export default function Header({ onHome, showHomeButton = true }: HeaderProps) {
  if (!showHomeButton) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-end items-center">
          <Button
            variant="outline" 
            onClick={onHome}
            size="sm"
            className="bg-white/90 border-gray-300 text-black hover:bg-white hover:text-black transition-all duration-300"
          >
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}