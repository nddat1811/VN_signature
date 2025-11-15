'use client';

type Language = 'vi' | 'en' | 'zh';

interface LanguageSwitcherProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  const languages = [
    { code: 'vi' as Language, label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en' as Language, label: 'English', flag: '🇬🇧' },
    { code: 'zh' as Language, label: '中文', flag: '🇨🇳' },
  ];

  return (
    <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-end gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              language === lang.code
                ? 'bg-accent text-accent-foreground shadow-md'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
