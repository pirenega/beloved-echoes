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
                <span className="text-muted-foreground text-sm">Photo placeholder</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This section will contain the biography. You can add your mother's life story, 
              her achievements, the places she lived, and the impact she had on everyone around her.
            </p>

            <Ornament className="clear-both" />

            <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Early Life</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Add details about her early life, childhood, and formative years here...
            </p>

            <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Education & Career</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Her educational journey and professional accomplishments...
            </p>

            <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Family</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Details about her family life, her role as a mother, and her loved ones...
            </p>

            <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Legacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              The lasting impact she has left on all who knew her...
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
