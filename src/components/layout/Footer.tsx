import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-cream border-t border-border py-12 mt-auto">
      <div className="memorial-container text-center">
        <div className="divider-ornament mb-6">
          <Heart className="h-5 w-5 text-gold" fill="currentColor" />
        </div>
        <p className="font-serif text-lg text-muted-foreground italic">
          {t('footer.memory')}
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
