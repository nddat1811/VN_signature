'use client';

import { useState, useEffect, Suspense, useCallback } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/header';
import ImageModal from '@/components/image-modal';
import { getLandmarkById, getTranslations } from '@/lib/translations';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

type Language = 'vi' | 'en' | 'zh';

interface MainImageCarouselProps {
  images: string[];
  landmarkName: string;
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onImageClick: (index: number, url: string) => void;
}

function MainImageCarousel({ images, landmarkName, currentIndex, onIndexChange, onImageClick }: MainImageCarouselProps) {

  const goToPrevious = useCallback(() => {
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onIndexChange]);

  const goToNext = useCallback(() => {
    onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onIndexChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  return (
    <div className="relative group">
      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Main Image */}
      <button
        onClick={() => onImageClick(currentIndex, images[currentIndex])}
        className="w-full rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer relative"
      >
        <img
          key={currentIndex}
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${landmarkName} ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors rounded-xl" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center">
            <span className="text-xl sm:text-2xl">🔍</span>
          </div>
        </div>
      </button>

      {/* Image Counter */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-black/50 text-white text-xs sm:text-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

function LandmarkDetailContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [language, setLanguage] = useState<Language>('en');
  const [selectedImage, setSelectedImage] = useState<{id: number; url: string; name: string} | null>(null);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  
  const landmarkId = parseInt(params.id as string);
  const landmark = getLandmarkById(language, landmarkId);
  const t = getTranslations(language);

  useEffect(() => {
    const langParam = searchParams.get('lang') as Language;
    if (langParam && ['vi', 'en', 'zh'].includes(langParam)) {
      setLanguage(langParam);
    }
  }, [searchParams]);


  if (!landmark) {
    return (
      <main className="min-h-screen bg-background">
        <Header language={language} />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Không tìm thấy địa danh</h1>
          <Link href={`/?lang=${language}`} className="text-accent hover:underline">
            ← Quay lại trang chủ
          </Link>
        </div>
      </main>
    );
  }

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    router.push(`/landmarks/${landmarkId}?lang=${newLang}`);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Back Button */}
        <Link 
          href={`/?lang=${language}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm sm:text-base">{t.backToList}</span>
        </Link>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Image Section */}
          <div className="lg:sticky lg:top-20 space-y-4">
            {/* Main Image Carousel */}
            {landmark.images && landmark.images.length > 1 ? (
              <MainImageCarousel
                images={landmark.images}
                landmarkName={landmark.name}
                currentIndex={mainImageIndex}
                onIndexChange={setMainImageIndex}
                onImageClick={(index, url) => setSelectedImage({id: index, url, name: `${landmark.name} - ${index + 1}`})}
              />
            ) : (
              <button
                onClick={() => setSelectedImage({id: landmarkId, url: landmark.image, name: landmark.name})}
                className="w-full rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group cursor-pointer relative"
              >
                <img
                  src={landmark.image || "/placeholder.svg"}
                  alt={landmark.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-xl" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                </div>
              </button>
            )}

            {/* Image Gallery Thumbnails */}
            {landmark.images && landmark.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {landmark.images.slice(0, 4).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setMainImageIndex(index);
                      setSelectedImage({id: index, url: img, name: `${landmark.name} - ${index + 1}`});
                    }}
                    className={`relative aspect-square rounded-lg overflow-hidden group cursor-pointer border-2 transition-all ${
                      mainImageIndex === index ? 'border-accent' : 'border-transparent hover:border-accent'
                    }`}
                  >
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${landmark.name} ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {index === 3 && landmark.images && landmark.images.length > 4 && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">+{landmark.images.length - 4}</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm font-medium text-accent uppercase tracking-widest">
                {landmark.location}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground">
                {landmark.name}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground italic">
                {landmark.nameEnglish}
              </p>
            </div>
            
            <div className="pt-4 sm:pt-6 border-t border-border space-y-4 sm:space-y-6">
              {landmark.paragraphs && landmark.paragraphs.length > 0 ? (
                landmark.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  {landmark.description}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Full Image Gallery Section */}
        {landmark.images && landmark.images.length > 1 && (
          <div className="mt-8 sm:mt-16 pt-8 sm:pt-12 border-t border-border">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6 sm:mb-8">{t.imageGallery}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {landmark.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage({id: index, url: img, name: `${landmark.name} - ${index + 1}`})}
                  className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${landmark.name} ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <span className="text-xl">🔍</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <ImageModal 
        image={selectedImage} 
        images={landmark?.images}
        landmarkName={landmark?.name}
        onClose={() => setSelectedImage(null)}
      />
    </main>
  );
}

export default function LandmarkDetailPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <p>Loading...</p>
        </div>
      </main>
    }>
      <LandmarkDetailContent />
    </Suspense>
  );
}

