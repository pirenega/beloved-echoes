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
