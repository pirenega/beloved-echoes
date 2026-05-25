import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/shared/PageHeader';
import Ornament from '@/components/shared/Ornament';

export default function Bio() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader title={t('bio.title')} subtitle={t('bio.subtitle')} />

      <section className="py-16">
        <div className="memorial-container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Placeholder for photo */}
            <div className="float-right ml-8 mb-6 w-64">
              <div className="bg-sage rounded-lg aspect-[3/4] flex items-center justify-center border-4 border-cream shadow-lg">
                <span className="text-muted-foreground text-sm">{t('bio.photoPlaceholder')}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t('bio.intro')}
            </p>

            <Ornament className="clear-both" />

            <h2 className="font-serif text-2xl text-primary mt-8 mb-4">{t('bio.earlyLife.heading')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('bio.earlyLife.body')}
            </p>
            <h2 className="font-serif text-2xl text-primary mt-8 mb-4">{t('bio.education.heading')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('bio.education.body1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('bio.education.body2')}
            </p>

            <h2 className="font-serif text-2xl text-primary mt-8 mb-4">{t('bio.books.heading')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('bio.books.body')}
            </p>

            <h2 className="font-serif text-2xl text-primary mt-8 mb-4">{t('bio.legacy.heading')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('bio.legacy.body')}
            </p>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
