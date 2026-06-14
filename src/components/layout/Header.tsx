import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const spiritualSubmenu = [
  { key: 'spiritual.osho', path: '/spiritual/osho' },
  { key: 'spiritual.petarDanov', path: '/spiritual/petar-danov' },
  { key: 'spiritual.silva', path: '/spiritual/silva-method' },
  { key: 'spiritual.deir', path: '/spiritual/deir' },
  { key: 'spiritual.donJuan', path: '/spiritual/don-juan' },
  { key: 'spiritual.sclarWaves', path: '/spiritual/scalar-waves' },
  { key: 'spiritual.assemblage', path: '/spiritual/assemblage-point' },
  { key: 'spiritual.radiesthesy', path: '/spiritual/radiesthesy' },
  { key: 'spiritual.homeopathy', path: '/spiritual/homeopathy' },
  { key: 'spiritual.freedom', path: '/spiritual/freedom-teachings' },
];

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'bg', label: 'Български', flag: '🇧🇬' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [spiritualOpen, setSpiritualOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isSpiritualActive = location.pathname.startsWith('/spiritual');

  const navItems = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.bio', path: '/bio' },
    { key: 'nav.research', path: '/research' },
    { key: 'nav.sayings', path: '/sayings' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="memorial-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-serif text-xl text-primary font-medium">Memorial</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                }`}
              >
                {t(item.key)}
              </Link>
            ))}

            {/* Spiritual Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isSpiritualActive
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                }`}
              >
                {t('nav.spiritual')}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/spiritual" className="w-full font-medium">
                    {t('nav.spiritual')}
                  </Link>
                </DropdownMenuItem>
                <div className="h-px bg-border my-1" />
                {spiritualSubmenu.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="w-full">
                      {t(item.key)}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors ml-2">
                <Globe className="h-4 w-4" />
                <span>{languages.find((l) => l.code === language)?.flag}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? 'bg-secondary' : ''}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-secondary/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-secondary text-primary'
                        : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                ))}

                {/* Spiritual Mobile Dropdown */}
                <div>
                  <button
                    onClick={() => setSpiritualOpen(!spiritualOpen)}
                    className={`flex items-center justify-between w-full px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      isSpiritualActive
                        ? 'bg-secondary text-primary'
                        : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                    }`}
                  >
                    {t('nav.spiritual')}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${spiritualOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {spiritualOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 mt-1 space-y-1 overflow-hidden"
                      >
                        <Link
                          to="/spiritual"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50"
                        >
                          {t('nav.spiritual')}
                        </Link>
                        {spiritualSubmenu.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 rounded-md text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50"
                          >
                            {t(item.key)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Language Switcher Mobile */}
                <div className="flex gap-2 px-4 pt-4 border-t border-border mt-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm transition-colors ${
                        language === lang.code
                          ? 'bg-secondary text-primary'
                          : 'text-muted-foreground hover:bg-secondary/50'
                      }`}
                    >
                      <span>{lang.flag}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
