import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';

// Placeholder data - replace with actual articles
const articles = [
  {
    id: 1,
    title: 'Research Paper Title 1',
    description: 'Brief description of the research paper and its findings...',
    year: '2010',
    type: 'pdf',
  },
  {
    id: 2,
    title: 'Research Paper Title 2',
    description: 'Brief description of the research paper and its findings...',
    year: '2008',
    type: 'pdf',
  },
  {
    id: 3,
    title: 'Scientific Article Title',
    description: 'Brief description of the article and its contributions...',
    year: '2005',
    type: 'link',
  },
];

export default function Research() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader title={t('research.title')} subtitle={t('research.subtitle')} />

      <section className="py-16">
        <div className="memorial-container max-w-4xl">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="memorial-card flex flex-col sm:flex-row gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-sage flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl text-primary mb-1">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gold mb-2">{article.year}</p>
                      <p className="text-muted-foreground text-sm">
                        {article.description}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-shrink-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {article.type === 'pdf' ? (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          {t('research.download')}
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-muted-foreground mt-12 italic"
          >
            More publications will be added soon...
          </motion.p>
        </div>
      </section>
    </div>
  );
}
