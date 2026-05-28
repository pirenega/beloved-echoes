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
    'bio.earlyLife.body': 'Elena was born on 3 October 1952 in the village of Lokorsko, near Sofia. She studied at the Radio and TV School in Sofia and later earned her PhD in Theoretical Physics [...]',
    'bio.education.heading': 'Education & Career',
    'bio.education.body1': 'In 1984, she married a mathematician, Vladimir, and that same year, their daughter, Irena Vladimirova Gueorguieva, was born. Shortly after, in 1986, the Chernobyl disaster occurred [...]',
    'bio.education.body2': 'Following the emotionally exhausting divorce, Elena developed a deep interest in occult sciences, seeking answers beyond traditional physics to explain inexplicable coincidences [...]',
    'bio.books.heading': 'Books',
    'bio.books.body': 'After 2000, she co-authored works with John Whale. With her background in Quantum Field Theory, she explored ways to apply the concept of the human aura as a structural energy [...]',
    'bio.legacy.heading': 'Legacy',
    'bio.legacy.body': 'Elena\'s life ended unexpectedly in 2024 under unclear circumstances. Officially, it was stated that she suffered a stroke. The night before, she had spoken for the last time [...]',
    
    
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
    'sayings.1.text': 'God blind them all!',
    'sayings.1.context': 'She would say this when light bulbs unexpectedly blew. When my father did not pay the child support. When the cat managed to open the fridge and steal the last piece of salam [...]',
    'sayings.2.text': 'Yank it!',
    'sayings.2.context': 'She would say this when Windows was taking to long to start. When a program did not load, when the file explorer was taking too long to load the file list.',
	'sayings.3.text': '... And I will pull the plug...',
    'sayings.3.context': 'She would say this that whenever someone was acting up in the Facebook chat and she used to unplug the internet router.',
    'sayings.4.text': 'Well, just you wait, Hare! (from Nu Pogodi!)',
    'sayings.4.context': 'She would say this that when someone got bad luck after making someting bad.',

    // Stories
    'story.1.title': 'Chiki the Cat Went Hunting Mice...',
    'story.1.content': 'Chiki the cat lived with Eli in Lokorsko, before her university years. He was a large black cat, very intelligent. One night Eli had a terrible nightmare — the devil attacked her and grabbed her by the throat, as if trying to strangle her. Terrified, she woke up screaming and instinctively grabbed her neck. That was when she realized that something was truly squeezing her. It turned out that Chiki had wrapped himself around her neck and was purring contentedly. Eli often told this story. Years later, in 1986, it turned out that she needed throat surgery. Who knows — perhaps, if it had been discovered earlier, it could have been prevented. Chiki was also a great hunter. One summer he disappeared. They searched for him far and wide, but he did not return. About a week later they noticed a huge, fattened cat making his way toward Eli. It was Chiki — apparently he had gone hunting mice in the fields and was returning triumphantly. The following year he disappeared again, but this time he never returned from his hunt.',
    
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
    'bio.intro': 'Questa sezione conterrà la biografia. Puoi aggiungere la storia della vita di tua madre, i suoi successi, i luoghi in cui ha vissuto e l\'impatto che ha avuto su tutti coloro che la circondavano [...]',
    'bio.earlyLife.heading': 'Prima Infanzia',
    'bio.earlyLife.body': 'Elena nacque il 3 ottobre 1952 nel villaggio di Lokorsko, vicino a Sofia. Studiò alla Scuola di Radio e Televisione di Sofia e successivamente conseguì il dottorato in Fisica Teorica [...]',
    'bio.education.heading': 'Istruzione e Carriera',
    'bio.education.body1': 'Nel 1984 sposò un matematico, Vladimir, e nello stesso anno nacque la loro figlia, Irena Vladimirova Gueorguieva. Poco dopo, nel 1986, avvenne il disastro di Chernobyl [...]',
    'bio.education.body2': 'Dopo il divorzio emotivamente estenuante, Elena sviluppò un profondo interesse per le scienze occulte, cercando risposte oltre la fisica tradizionale per spiegare coincidenze inspiegabili [...]',
    'bio.books.heading': 'Libri',
    'bio.books.body': 'Dopo il 2000, ha collaborato come coautrice con John Whale. Forte della sua formazione in Teoria dei Campi Quantistici, ha esplorato modi per applicare il concetto dell\'aura umana come energia strutturale [...]',
    'bio.legacy.heading': 'Eredità',
    'bio.legacy.body': 'La vita di Elena si è conclusa inaspettatamente nel 2024 in circostanze poco chiare. Ufficialmente fu dichiarato che aveva avuto un ictus. La sera prima aveva parlato per l\'ultima volta [...]',
    
    
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
    'sayings.1.text': 'Che Dio li accecasse!',
    'sayings.1.context': "Lo diceva quando le lampadine si fulminavano inaspettatamente. Quando mio padre non pagava l'assegno di mantenimento. Quando il gatto riusciva ad aprire il frigo rubando l'ultimo pezzo di salame [...]",
    'sayings.2.text': 'Daje, sgancia!',
    'sayings.2.context': "Lo diceva quando Windows ci metteva troppo ad avviarsi. Quando i programmi non partivano. Quando il file explorer  non caricava la lista dei file.",
    'sayings.3.text': '...E gli stacco la spina!',
    'sayings.3.context': "Lo diceva quando qualcuno rompeva le scatole su Facebook e staccava il router e quindi il Wi-Fi..",
    'sayings.4.text': 'Beh, lepre, beh, aspetta!...e la pagherai (from Nu Pogodi!)',
    'sayings.4.context': "Lo diceva quando qualcuno gli capitava quel che si merita dopo che aveva fatto del male.",

    // Stories
    'story.1.title': 'Il gatto Chiki andò a caccia di topi...',
    'story.1.content': 'Il gatto Chiki viveva con Eli a Lokorsko, ancora prima degli anni universitari. Era un grande gatto nero, molto intelligente. Una notte Eli fece un terribile incubo: il diavolo l\'aveva assalita e afferrata alla gola, come per soffocarla. Terrorizzata, si svegliò gridando e istintivamente si portò le mani al collo. Fu allora che si accorse che qualcosa la stava davvero stringendo. Si scoprì che Chiki si era avvolto attorno al suo collo e faceva le fusa soddisfatto. Eli raccontava spesso questa storia. Anni dopo, nel 1986, si scoprì che doveva essere operata alla gola. Chissà — forse, se si fosse saputo prima, si sarebbe potuto prevenire. Chiki era anche un grande cacciatore. Un\'estate scomparve. Lo cercarono ovunque, ma non si faceva vedere. Dopo circa una settimana notarono un enorme gatto ingrassato che avanzava verso Eli. Era Chiki — evidentemente era andato a caccia di topi nei campi e stava tornando vittorioso. L\'anno successivo scomparve di nuovo, ma questa volta non fece più ritorno dalla sua caccia.',
    
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
    'bio.photoPlaceholder': 'Място за снимка',
    'bio.intro': 'Този раздел ще съдържа биографията. Можете да добавите житейската история на майка си, нейните постижения, местата, където е живяла, и въздействието, което е имала на всички около нея [...]',
    'bio.earlyLife.heading': 'Ранни години',
    'bio.earlyLife.body': 'Елена е родена на 3 октомври 1952 г. в село Локорско, близо до София. Учи в Радио- и телевизионното училище в София и впоследствие защити докторат в областта на теоретичната физика [...]',
    'bio.education.heading': 'Образование и кариера',
    'bio.education.body1': 'През 1984 г. се омъжва за математика Владимир и същата година се ражда дъщеря им Ирена Владимирова Георгиева. Скоро след това, през 1986 г., се случва катастрофата в Чернобил [...]',
    'bio.education.body2': 'След емоционално изтощителния развод Елена развива дълбок интерес към окултните науки, търсейки отговори извън традиционната физика, за да обясни необяснимите съвпадения [...]',
    'bio.books.heading': 'Книги',
    'bio.books.body': 'След 2000 г. е съавтор на трудове с Джон Уейл. С опита си в квантовата теория на полето тя изследва начини за прилагане на концепцията на човешката аура като структурна енергия [...]',
    'bio.legacy.heading': 'Наследство',
    'bio.legacy.body': 'Животът на Елена приключи неочаквано през 2024 г. при неясни обстоятелства. Официално беше обявено, че е претърпяла инсулт. Вечерта преди това тя е говорила за последния път [...]',
    
    
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
    'sayings.1.text': 'Да му се не види!',
    'sayings.1.context': 'Тя го казваше когато лампите неочаквано гърмяха. Когато баща ми не плащаше издръжката за детето. Когато котето успяваше да отвори хладилника и украдне последния парче салам [...]',
    'sayings.2.text': 'Аре бе!',
    'sayings.2.context': 'Обикновено го казваше когато Windows стартираше бавно. Когато програмите не стартираха, когато файловия мениджър не зарежда списъка на файловете.',
    'sayings.3.text': 'И като му дръпна шалтгера ...',
    'sayings.3.context': 'Казваше го когато някой нахалстваше в чата на фейсбук и изключваше рутера за интернет.',
    'sayings.4.text': 'Ну заец ну погоди!',
    'sayings.4.context': 'Казваше го когато някой му се случваше това което си заслужава след като бе правил зло.',

    // Stories
    'story.1.title': 'Котаракът Чики отиде да лови мишки...',
    'story.1.content': 'Котаракът Чики живял с Ели в Локорско, още преди студентските години. Бил голям, черен и много интелигентен котарак. Една нощ Ели сънувала страшен кошмар — нападнал я дявол и я хванал за гушата, сякаш ще я души. В ужас тя се събудила, викайки, и инстинктивно се хванала за гърлото. И тогава усетила, че наистина нещо я стиска. Оказало се, че Чики се бил увил около шията ѝ и доволно мъркал. Ели често разказвала тази история. Години по-късно, през 1986 г., се оказало, че трябва да се оперира от гуша. Кой знае — може би, ако се било разбрало по-рано, е можело да се предотврати. Чики бил и голям ловец. Едно лято изчезнал. Търсили го надлъж и нашир, но не се появявал. След около седмица забелязали един огромен, надебелял котарак да се носи към Ели. Оказал се Чики — явно бил ходил да лови мишки по полето и се връщал победоносно. На следващата година пак изчезнал, но този път вече не се върнал от своя лов.',
    
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
