import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'it' | 'bg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.bio': 'Biography',
    'nav.research': 'Scientific Research',
    'nav.spiritual': 'Spiritual Life & Research',
    'nav.sayings': 'Sayings & Stories',
    
    // Spiritual submenu
    'spiritual.osho': 'Osho',
    'spiritual.petarDanov': 'Petar Danov',
    'spiritual.silva': 'Silva Method',
    'spiritual.deir': 'DEIR',
    'spiritual.donJuan': 'Teachings of Don Juan',
    'spiritual.assemblage': 'Assemblage Point',
    'spiritual.radiesthesy': 'Radiesthesy',
    'spiritual.homeopathy': 'Homeopathy',
    'spiritual.freedom': 'Freedom Teachings',
    
    // Home
    'home.inMemory': 'In Loving Memory',
    'home.subtitle': 'A life dedicated to science, spirituality, and love',
    'home.exploreBio': 'Explore Her Story',
    'home.quote': '"The journey of a thousand miles begins with a single step"',
    
    // Bio
    'bio.title': 'Biography',
    'bio.subtitle': 'A life of discovery and wisdom',
    'bio.photoPlaceholder': 'Photo placeholder',
    'bio.intro': 'This section will contain the biography. You can add your mother\'s life story, her achievements, the places she lived, and the impact she had on everyone around her.',
    'bio.earlyLife.heading': 'Early Life',
    'bio.earlyLife.body': 'Elena was born on 3 October 1952 in the village of Lokorsko, near Sofia. She studied at the Radio and TV School in Sofia and later earned her PhD in Theoretical Physics from Sofia University St. Kliment Ohridski. Her doctoral thesis focused on quantum field theory. She later became a full professor of Physics at the Department of Language Teaching at Sofia University St. Kliment Ohridski.',
    'bio.education.heading': 'Education & Career',
    'bio.education.body1': 'In 1984, she married a mathematician, Vladimir, and that same year, their daughter, Irena Vladimirova Gueorguieva, was born. Shortly after, in 1986, the Chernobyl disaster occurred, leading to Elena developing thyroid carcinoma. She underwent a thyroidectomy but refused chemotherapy, believing that while it could extend life, its side effects were too severe to allow for a normal existence—especially as a mother of a young child. In 1993, she and Vladimir divorced. Later, Vladimir also developed cancer, which he survived after undergoing aggressive chemotherapy in Germany. His approach was in stark contrast to Elena\'s, shaped in part by her own convictions and the limited medical options available in Bulgaria at the time.',
    'bio.education.body2': 'Following the emotionally exhausting divorce, Elena developed a deep interest in occult sciences, seeking answers beyond traditional physics to explain inexplicable coincidences and human behavior. She had always believed in a greater good and absolute love but encountered many people with opposing worldviews. Seeing the limitations of oncology and other medical fields in Bulgaria, she devoted the rest of her life to exploring both physical and spiritual healing. She successfully healed herself and later helped others navigate struggles similar to her own. She intuitively practiced the Silva Method, one of the first techniques she used to restore balance in her life. Her philosophical influences included Helena Petrovna Blavatsky, Rudolf Steiner, Osho, and Petar Danov. She later became a certified practitioner and instructor of the DEIR System developed by Dmitry Wereszczagin.',
    'bio.books.heading': 'Books',
    'bio.books.body': 'After 2000, she co-authored works with John Whale. With her background in Quantum Field Theory, she explored ways to apply the concept of the human aura as a structural energy-information pattern. She co-wrote an article on the human assemblage point in collaboration with John Whale, titled Vibration-Oscillation Diagnosing and Healing Therapy.',
    'bio.legacy.heading': 'Legacy',
    'bio.legacy.body': 'Elena\'s life ended unexpectedly in 2024 under unclear circumstances. Officially, it was stated that she suffered a stroke. The night before, she had spoken for the last time, and by the following day, she was unresponsive. I, Irena, her daughter was in Italy working, and called two of her friends. However, they delayed calling an ambulance for too long. When they finally took her to the hospital, it was declared that she had suffered a stroke.',
    
    
    // Research
    'research.title': 'Scientific Research & Articles',
    'research.subtitle': 'Academic contributions and publications',
    'research.download': 'Download PDF',
    
    // Spiritual
    'spiritual.title': 'Spiritual Life & Research',
    'spiritual.subtitle': 'Exploring the depths of consciousness and healing',
    'spiritual.books': 'Books Co-authored',
    
    // Sayings
    'sayings.title': 'Her Words & Stories',
    'sayings.subtitle': 'The wisdom and humor she shared with us',
    'sayings.listen': 'Listen',
    
    // Footer
    'footer.memory': 'Forever in our hearts',
  },
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.bio': 'Biografia',
    'nav.research': 'Ricerca Scientifica',
    'nav.spiritual': 'Vita Spirituale & Ricerca',
    'nav.sayings': 'Detti & Storie',
    
    // Spiritual submenu
    'spiritual.osho': 'Osho',
    'spiritual.petarDanov': 'Petar Danov',
    'spiritual.silva': 'Metodo Silva',
    'spiritual.deir': 'DEIR',
    'spiritual.donJuan': 'Insegnamenti di Don Juan',
    'spiritual.assemblage': 'Punto di Assemblaggio',
    'spiritual.radiesthesy': 'Radiestesia',
    'spiritual.homeopathy': 'Omeopatia',
    'spiritual.freedom': 'Insegnamenti della Libertà',
    
    // Home
    'home.inMemory': 'In Amorevole Memoria',
    'home.subtitle': 'Una vita dedicata alla scienza, alla spiritualità e all\'amore',
    'home.exploreBio': 'Scopri la Sua Storia',
    'home.quote': '"Il viaggio di mille miglia inizia con un singolo passo"',
    
    // Bio
    'bio.title': 'Biografia',
    'bio.subtitle': 'Una vita di scoperta e saggezza',
    'bio.photoPlaceholder': 'Spazio per la foto',
    'bio.intro': 'Questa sezione conterrà la biografia. Puoi aggiungere la storia della vita di tua madre, i suoi successi, i luoghi in cui ha vissuto e l\'impatto che ha avuto su tutti coloro che l\'hanno conosciuta.',
    'bio.earlyLife.heading': 'Prima Infanzia',
    'bio.earlyLife.body': 'Elena nacque il 3 ottobre 1952 nel villaggio di Lokorsko, vicino a Sofia. Studiò alla Scuola di Radio e Televisione di Sofia e successivamente conseguì il dottorato in Fisica Teorica presso l\'Università di Sofia "San Clemente di Ocrida". La sua tesi di dottorato si concentrava sulla teoria dei campi quantistici. In seguito divenne professore ordinario di Fisica presso il Dipartimento di Insegnamento delle Lingue dell\'Università di Sofia "San Clemente di Ocrida".',
    'bio.education.heading': 'Istruzione e Carriera',
    'bio.education.body1': 'Nel 1984 sposò un matematico, Vladimir, e nello stesso anno nacque la loro figlia, Irena Vladimirova Gueorguieva. Poco dopo, nel 1986, avvenne il disastro di Chernobyl, che portò Elena a sviluppare un carcinoma alla tiroide. Si sottopose a una tiroidectomia ma rifiutò la chemioterapia, convinta che, pur potendo prolungare la vita, i suoi effetti collaterali fossero troppo gravi per permetterle un\'esistenza normale, soprattutto come madre di una bambina piccola. Nel 1993, lei e Vladimir divorziarono. Più tardi, anche Vladimir sviluppò un cancro, al quale sopravvisse dopo aver affrontato una chemioterapia aggressiva in Germania. Il suo approccio era in netto contrasto con quello di Elena, plasmato in parte dalle sue convinzioni e dalle limitate possibilità mediche disponibili in Bulgaria all\'epoca.',
    'bio.education.body2': 'Dopo il divorzio emotivamente estenuante, Elena sviluppò un profondo interesse per le scienze occulte, cercando risposte oltre la fisica tradizionale per spiegare coincidenze inspiegabili e il comportamento umano. Aveva sempre creduto in un bene superiore e nell\'amore assoluto, ma incontrò molte persone con visioni opposte. Vedendo i limiti dell\'oncologia e di altri campi medici in Bulgaria, dedicò il resto della sua vita a esplorare la guarigione fisica e spirituale. Riuscì a guarire se stessa e in seguito aiutò altri ad affrontare difficoltà simili alle sue. Praticò intuitivamente il Metodo Silva, una delle prime tecniche che utilizzò per ristabilire l\'equilibrio nella sua vita. Tra le sue influenze filosofiche figurano Helena Petrovna Blavatsky, Rudolf Steiner, Osho e Petar Danov. In seguito divenne praticante e istruttrice certificata del Sistema DEIR sviluppato da Dmitry Wereszczagin.',
    'bio.books.heading': 'Libri',
    'bio.books.body': 'Dopo il 2000, ha collaborato come coautrice con John Whale. Forte della sua formazione in Teoria dei Campi Quantistici, ha esplorato modi per applicare il concetto dell\'aura umana come schema strutturale di energia e informazione. Ha scritto in collaborazione con John Whale un articolo sul punto di assemblaggio umano, intitolato Vibration-Oscillation Diagnosing and Healing Therapy.',
    'bio.legacy.heading': 'Eredità',
    'bio.legacy.body': 'La vita di Elena si è conclusa inaspettatamente nel 2024 in circostanze poco chiare. Ufficialmente fu dichiarato che aveva avuto un ictus. La sera prima aveva parlato per l\'ultima volta, e il giorno seguente non rispondeva più. Io, Irena, sua figlia, ero in Italia per lavoro e chiamai due delle sue amiche. Loro però tardarono troppo a chiamare un\'ambulanza. Quando finalmente la portarono in ospedale, fu dichiarato che aveva subito un ictus.',
    
    
    // Research
    'research.title': 'Ricerca Scientifica & Articoli',
    'research.subtitle': 'Contributi accademici e pubblicazioni',
    'research.download': 'Scarica PDF',
    
    // Spiritual
    'spiritual.title': 'Vita Spirituale & Ricerca',
    'spiritual.subtitle': 'Esplorando le profondità della coscienza e della guarigione',
    'spiritual.books': 'Libri Co-scritti',
    
    // Sayings
    'sayings.title': 'Le Sue Parole & Storie',
    'sayings.subtitle': 'La saggezza e l\'umorismo che ha condiviso con noi',
    'sayings.listen': 'Ascolta',
    
    // Footer
    'footer.memory': 'Per sempre nei nostri cuori',
  },
  bg: {
    // Navigation
    'nav.home': 'Начало',
    'nav.bio': 'Биография',
    'nav.research': 'Научни изследвания',
    'nav.spiritual': 'Духовен живот и изследвания',
    'nav.sayings': 'Изрази и истории',
    
    // Spiritual submenu
    'spiritual.osho': 'Ошо',
    'spiritual.petarDanov': 'Петър Дънов',
    'spiritual.silva': 'Метод Силва',
    'spiritual.deir': 'ДЕИР',
    'spiritual.donJuan': 'Ученията на Дон Хуан',
    'spiritual.assemblage': 'Точка на сглобяване',
    'spiritual.radiesthesy': 'Радиестезия',
    'spiritual.homeopathy': 'Хомеопатия',
    'spiritual.freedom': 'Ученията за свободата',
    
    // Home
    'home.inMemory': 'В любяща памет',
    'home.subtitle': 'Живот, посветен на науката, духовността и любовта',
    'home.exploreBio': 'Разгледай нейната история',
    'home.quote': '"Пътешествието от хиляда мили започва с една стъпка"',
    
    // Bio
    'bio.title': 'Биография',
    'bio.subtitle': 'Живот на откритие и мъдрост',
    
    // Research
    'research.title': 'Научни изследвания и статии',
    'research.subtitle': 'Академични приноси и публикации',
    'research.download': 'Изтегли PDF',
    
    // Spiritual
    'spiritual.title': 'Духовен живот и изследвания',
    'spiritual.subtitle': 'Изследване на дълбините на съзнанието и изцелението',
    'spiritual.books': 'Съавторски книги',
    
    // Sayings
    'sayings.title': 'Нейните думи и истории',
    'sayings.subtitle': 'Мъдростта и хумора, които споделяше с нас',
    'sayings.listen': 'Слушай',
    
    // Footer
    'footer.memory': 'Завинаги в сърцата ни',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
