'use client';

type Language = 'vi' | 'en' | 'zh';

interface Landmark {
  name: string;
  nameEnglish: string;
  location: string;
  description: string;
  image: string;
}

interface LandmarkCardProps {
  landmark: Landmark;
  language: Language;
  reversed?: boolean;
  onImageClick: () => void;
}

export default function LandmarkCard({ landmark, language, reversed = false, onImageClick }: LandmarkCardProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${reversed ? 'md:grid-flow-dense' : ''}`}>
      {/* Text Content - Left or Right based on reversed */}
      <div className={`space-y-4 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
        <div className="space-y-2">
          <p className="text-sm font-medium text-accent uppercase tracking-widest">
            {landmark.location}
          </p>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            {landmark.name}
          </h3>
          <p className="text-lg text-muted-foreground italic">
            {landmark.nameEnglish}
          </p>
        </div>
        
        <p className="text-base text-foreground/80 leading-relaxed mt-6">
          {landmark.description}
        </p>

        <div className="pt-6">
          <button 
            onClick={onImageClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Xem Chi Tiết
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Image - Right or Left based on reversed */}
      <div className={`${reversed ? 'md:order-1' : 'md:order-2'}`}>
        <button
          onClick={onImageClick}
          className="w-full h-auto rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group cursor-pointer"
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
      </div>
    </div>
  );
}
