import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Book, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/shared/PageHeader';

const teachingDetails: Record<string, { emoji: string; books?: { title: string; link: string }[] }> = {
  'osho': { emoji: '🧘', books: [] },
  'petar-danov': { emoji: '☀️', books: [] },
  'silva-method': { emoji: '🧠', books: [] },
  'deir': { emoji: '⚡', books: [] },
  'don-juan': { emoji: '🦅', books: [] },
  'scalar-waves': { emoji: '🌊', books: [] },
  'assemblage-point': { emoji: '🎯', books: [] },
  'radiesthesy': { emoji: '🔮', books: [] },
  'homeopathy': { emoji: '🌿', books: [] },
  'freedom-teachings': { emoji: '✨', books: [] },
};

const keyMap: Record<string, string> = {
  'osho': 'spiritual.osho',
  'petar-danov': 'spiritual.petarDanov',
  'silva-method': 'spiritual.silva',
  'deir': 'spiritual.deir',
  'don-juan': 'spiritual.donJuan',
  'scalar-waves': 'scalar.waves',
  'assemblage-point': 'spiritual.assemblage',
  'radiesthesy': 'spiritual.radiesthesy',
  'homeopathy': 'spiritual.homeopathy',
  'freedom-teachings': 'spiritual.freedom',
};

export default function SpiritualDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const teaching = slug ? teachingDetails[slug] : null;
  const titleKey = slug ? keyMap[slug] : '';

  if (!teaching) {
    return (
      <div className="memorial-container py-16 text-center">
        <p className="text-muted-foreground">Teaching not found</p>
        <Link to="/spiritual" className="text-primary hover:underline mt-4 inline-block">
          Back to Spiritual Life
        </Link>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={t(titleKey)}
        subtitle={t('spiritual.subtitle')}
      />

      <section className="py-16">
        <div className="memorial-container max-w-4xl">
          {/* Back link */}
          <Link
            to="/spiritual"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Spiritual Life
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="w-24 h-24 rounded-full bg-sage flex items-center justify-center text-5xl mx-auto mb-6">
                {teaching.emoji}
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center italic">
                Content about {t(titleKey)} and how it influenced her spiritual journey will be added here.
                You can include her personal experiences, insights, and the teachings she valued.
              </p>
            </div>

            {/* Books section placeholder */}
            {teaching.books && teaching.books.length > 0 && (
              <div className="mt-12">
                <h3 className="font-serif text-2xl text-primary mb-6">Related Books</h3>
                <div className="space-y-4">
                  {teaching.books.map((book, index) => (
                    <a
                      key={index}
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="memorial-card flex items-center gap-4 group"
                    >
                      <Book className="w-6 h-6 text-primary" />
                      <span className="flex-1 font-serif text-lg group-hover:text-gold transition-colors">
                        {book.title}
                      </span>
                      <ExternalLink className="w-5 h-5 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
