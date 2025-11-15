'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/header';
import LandmarkListCard from '@/components/landmark-list-card';
import QuickNavigation from '@/components/quick-navigation';
import { getTranslations } from '@/lib/translations';

type Language = 'vi' | 'en' | 'zh';

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [language, setLanguage] = useState<Language>('en');
  const t = getTranslations(language);

  useEffect(() => {
    const langParam = searchParams.get('lang') as Language;
    if (langParam && ['vi', 'en', 'zh'].includes(langParam)) {
      setLanguage(langParam);
    }
  }, [searchParams]);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    router.push(`/?lang=${newLang}`);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-sans font-bold text-foreground mb-6 text-balance tracking-tight leading-tight">
            {t.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-20">
          {t.landmarks.map((landmark, index) => (
            <LandmarkListCard 
              key={index}
              landmark={landmark}
              language={language}
              id={index}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>

      <QuickNavigation 
        landmarks={t.landmarks.map(l => ({ name: l.name, nameEnglish: l.nameEnglish }))}
        language={language}
      />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p>Loading...</p>
        </div>
      </main>
    }>
      <HomeContent />
    </Suspense>
  );
}
