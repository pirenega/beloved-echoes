import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Book, ExternalLink, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/shared/PageHeader';
import Ornament from '@/components/shared/Ornament';

const teachings = [
  { key: 'spiritual.osho', path: '/spiritual/osho', emoji: '🧘' },
  { key: 'spiritual.petarDanov', path: '/spiritual/petar-danov', emoji: '☀️' },
  { key: 'spiritual.silva', path: '/spiritual/silva-method', emoji: '🧠' },
  { key: 'spiritual.deir', path: '/spiritual/deir', emoji: '⚡' },
  { key: 'spiritual.donJuan', path: '/spiritual/don-juan', emoji: '🦅' },
  { key: 'spiritual.scalarWaves', path: '/spiritual/scalar-waves', emoji: '🌊' },
  { key: 'spiritual.assemblage', path: '/spiritual/assemblage-point', emoji: '🎯' },
  { key: 'spiritual.radiesthesy', path: '/spiritual/radiesthesy', emoji: '🔮' },
  { key: 'spiritual.homeopathy', path: '/spiritual/homeopathy', emoji: '🌿' },
  { key: 'spiritual.freedom', path: '/spiritual/freedom-teachings', emoji: '✨' },
];

// Placeholder books - replace with actual data
const books = [
  { title: 'Book Title 1', link: '#', year: '2012' },
  { title: 'Book Title 2', link: '#', year: '2015' },
  { title: 'Book Title 3', link: '#', year: '2018' },
];

export default function Spiritual() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHeader title={t('spiritual.title')} subtitle={t('spiritual.subtitle')} />

      <section className="py-16">
        <div className="memorial-container">
          {/* Teachings Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {teachings.map((teaching, index) => (
              <motion.div
                key={teaching.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  to={teaching.path}
                  className="memorial-card flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-sage flex items-center justify-center text-2xl flex-shrink-0">
                    {teaching.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-primary group-hover:text-gold transition-colors">
                      {t(teaching.key)}
                    </h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </div>

          <Ornament />

          {/* Books Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl text-primary text-center mb-8">
              {t('spiritual.books')}
            </h2>

            <div className="space-y-4">
              {books.map((book, index) => (
                <a
                  key={index}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="memorial-card flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-sage flex items-center justify-center flex-shrink-0">
                    <Book className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-primary group-hover:text-gold transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{book.year}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
