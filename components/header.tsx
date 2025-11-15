'use client';

type Language = 'vi' | 'en' | 'zh';

interface HeaderProps {
  language: Language;
  onLanguageChange?: (lang: Language) => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const headerContent = {
    vi: { title: 'Việt Nam', subtitle: 'Heritage & Culture' },
    en: { title: 'Vietnam', subtitle: 'Heritage & Culture' },
    zh: { title: '越南', subtitle: '遗产与文化' }
  };

  const content = headerContent[language];

  const languages = [
    { code: 'vi' as Language,  flag: 'VN' },
    { code: 'en' as Language,  flag: 'US' },
    { code: 'zh' as Language,  flag: 'CN' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <span className="text-accent-foreground font-serif text-lg sm:text-xl font-bold">VN</span>
            </div>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-2xl font-serif font-bold text-foreground truncate">{content.title}</h2>
              <p className="text-xs text-muted-foreground hidden sm:block">{content.subtitle}</p>
            </div>
          </div>
          {onLanguageChange && (
            <div className="flex gap-1 sm:gap-2 flex-shrink-0">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onLanguageChange(lang.code)}
                  className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                    language === lang.code
                      ? 'bg-accent text-accent-foreground shadow-md'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <span className="mr-1 sm:mr-2">{lang.flag}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
