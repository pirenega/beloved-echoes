import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Quote, Volume2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageHeader from '@/components/shared/PageHeader';
import Ornament from '@/components/shared/Ornament';
import { Button } from '@/components/ui/button';

export default function Sayings() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  // Sayings with translation keys
  const sayings = [
    {
      id: 1,
      textKey: 'sayings.1.text',
      contextKey: 'sayings.1.context',
    },
    {
      id: 2,
      textKey: 'sayings.2.text',
      contextKey: 'sayings.2.context',
    },
    {
      id: 3,
      textKey: 'sayings.3.text',
      contextKey: 'sayings.3.context',
    }, 
	{
      id: 4,
      textKey: 'sayings.4.text',
      contextKey: 'sayings.4.context',
    },
  ];

  // Stories with translation keys
  const stories = [
    {
      id: 1,
      titleKey: 'story.1.title',
      contentKey: 'story.1.content',
    },
	{
      id: 2,
      titleKey: 'story.2.title',
      contentKey: 'story.2.content',
    },	
	{
      id: 3,
      titleKey: 'story.3.title',
      contentKey: 'story.3.content',
    },
  ];

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
                      "{saying.textKey ? t(saying.textKey) : saying.text}"
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {saying.contextKey ? t(saying.contextKey) : saying.context}
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
                <h3 className="font-serif text-xl text-primary mb-4">
                  {story.titleKey ? t(story.titleKey) : story.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.contentKey ? t(story.contentKey) : story.content}
                </p>
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
