import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Quote, Volume2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/shared/PageHeader';
import Ornament from '@/components/shared/Ornament';
import { Button } from '@/components/ui/button';

// Placeholder sayings - replace with actual content
const sayings = [
  {
    id: 1,
    text: 'Add her favorite saying or expression here...',
    context: 'She would say this when...',
  },
  {
    id: 2,
    text: 'Another memorable phrase...',
    context: 'Usually said during...',
  },
  {
    id: 3,
    text: 'A piece of wisdom she shared...',
    context: 'Her advice about...',
  },
];

// Placeholder stories
const stories = [
  {
    id: 1,
    title: 'Story Title 1',
    content: 'A story she used to tell... Add the full story here.',
  },
  {
    id: 2,
    title: 'Story Title 2',
    content: 'Another memorable story... Add the details here.',
  },
];

export default function Sayings() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <PageHeader title={t('sayings.title')} subtitle={t('sayings.subtitle')} />

      <section className="py-16">
        <div className="memorial-container max-w-4xl">
          {/* Sayings Section */}
          <h2 className="font-serif text-3xl text-primary text-center mb-12">
            Common Expressions
          </h2>

          <div className="space-y-8 mb-16">
            {sayings.map((saying, index) => (
              <motion.div
                key={saying.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="memorial-card"
              >
                <div className="flex gap-4">
                  <Quote className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-serif text-xl text-primary italic mb-2">
                      "{saying.text}"
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {saying.context}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <Ornament />

          {/* Stories Section */}
          <h2 className="font-serif text-3xl text-primary text-center my-12">
            Stories She Told
          </h2>

          <div className="space-y-8 mb-16">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="memorial-card"
              >
                <h3 className="font-serif text-xl text-primary mb-4">{story.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{story.content}</p>
              </motion.div>
            ))}
          </div>

          <Ornament />

          {/* Audio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="font-serif text-3xl text-primary mb-8">
              Her Famous Sneeze 🤧
            </h2>

            <div className="memorial-card inline-flex items-center gap-6 px-8 py-6">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full w-16 h-16 border-2 border-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 ml-1" />
                )}
              </Button>
              <div className="text-left">
                <p className="font-serif text-lg text-primary">{t('sayings.listen')}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  Audio coming soon
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm mt-6 italic">
              Upload an audio file to add her memorable sneeze here!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
