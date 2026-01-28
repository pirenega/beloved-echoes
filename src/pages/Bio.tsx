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
              Elena was born on 3 October 1952 in the village of Lokorsko, near Sofia. She studied at the Radio and TV School in Sofia and later earned her PhD in Theoretical Physics from Sofia University St. Kliment Ohridski. Her doctoral thesis focused on quantum field theory. She later became a full professor of Physics at the Department of Language Teaching at Sofia University St. Kliment Ohridski.
            </p>
            <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Education & Career</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In 1984, she married a mathematician, Vladimir, and that same year, their daughter, Irena Vladimirova Gueorguieva, was born. Shortly after, in 1986, the Chernobyl disaster occurred, leading to Elena developing thyroid carcinoma. She underwent a thyroidectomy but refused chemotherapy, believing that while it could extend life, its side effects were too severe to allow for a normal existence—especially as a mother of a young child. In 1993, she and Vladimir divorced. Later, Vladimir also developed cancer, which he survived after undergoing aggressive chemotherapy in Germany. His approach was in stark contrast to Elena’s, shaped in part by her own convictions and the limited medical options available in Bulgaria at the time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
            Following the emotionally exhausting divorce, Elena developed a deep interest in occult sciences, seeking answers beyond traditional physics to explain inexplicable coincidences and human behavior. She had always believed in a greater good and absolute love but encountered many people with opposing worldviews. Seeing the limitations of oncology and other medical fields in Bulgaria, she devoted the rest of her life to exploring both physical and spiritual healing. She successfully healed herself and later helped others navigate struggles similar to her own. She intuitively practiced the Silva Method, one of the first techniques she used to restore balance in her life. Her philosophical influences included Helena Petrovna Blavatsky, Rudolf Steiner, Osho, and Petar Danov. She later became a certified practitioner and instructor of the DEIR System developed by Dmitry Wereszczagin. 
            </p>
    
            <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Books</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
After 2000, she co-authored works with John Whale. With her background in Quantum Field Theory, she explored ways to apply the concept of the human aura as a structural energy-information pattern. She co-wrote an article on the human assemblage point in collaboration with John Whale, titled Vibration-Oscillation Diagnosing and Healing Therapy.             </p>

            <h2 className="font-serif text-2xl text-primary mt-8 mb-4">Legacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Elena's life ended unexpectedly in 2024 under unclear circumstances. Officially, it was stated that she suffered a stroke. The night before, she had spoken for the last time, and by the following day, she was unresponsive. I, Irena, her daughter was in Italy working, and called two of her friends. However, they delayed calling an ambulance for too long. When they finally took her to the hospital, it was declared that she had suffered a stroke. 
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
