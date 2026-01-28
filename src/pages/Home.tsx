import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import Ornament from '@/components/shared/Ornament';
import heroImage from '@/assets/hero-memorial.jpg';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Memorial"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center memorial-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl text-primary mb-4 font-medium">
              {t('home.inMemory')}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-xl md:text-2xl text-muted-foreground italic mb-8"
          >
            {t('home.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-8"
            >
              <Link to="/bio">
                {t('home.exploreBio')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-cream">
        <div className="memorial-container text-center">
          <Ornament className="mb-8" />
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-2xl md:text-3xl text-primary italic max-w-3xl mx-auto"
          >
            {t('home.quote')}
          </motion.blockquote>
          <Ornament className="mt-8" />
        </div>
      </section>

      {/* Sections Preview */}
      <section className="py-20">
        <div className="memorial-container">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="memorial-card text-center"
            >
              <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">{t('nav.bio')}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t('bio.subtitle')}
              </p>
              <Link to="/bio" className="text-primary hover:text-gold transition-colors font-medium text-sm">
                Read more →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="memorial-card text-center"
            >
              <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">{t('nav.research')}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t('research.subtitle')}
              </p>
              <Link to="/research" className="text-primary hover:text-gold transition-colors font-medium text-sm">
                Explore →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="memorial-card text-center"
            >
              <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">{t('nav.spiritual')}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {t('spiritual.subtitle')}
              </p>
              <Link to="/spiritual" className="text-primary hover:text-gold transition-colors font-medium text-sm">
                Discover →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
