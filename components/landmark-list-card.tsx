'use client';

import Link from 'next/link';
import { getTranslations } from '@/lib/translations';
import type { Language } from '@/lib/translations';

interface Landmark {
  name: string;
  nameEnglish: string;
  location: string;
  description: string;
  image: string;
}

interface LandmarkListCardProps {
  landmark: Landmark;
  language: Language;
  id: number;
  reversed?: boolean;
}

export default function LandmarkListCard({ landmark, language, id, reversed = false }: LandmarkListCardProps) {
  const t = getTranslations(language);
  // Truncate description for list view
  const shortDescription = landmark.description.length > 200 
    ? landmark.description.substring(0, 200) + '...' 
    : landmark.description;

  return (
    <Link href={`/landmarks/${id}?lang=${language}`} className="block group">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${reversed ? 'md:grid-flow-dense' : ''} hover:opacity-90 transition-opacity`}>
        {/* Text Content */}
        <div className={`space-y-4 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
          <div className="space-y-2">
            <p className="text-sm font-medium text-accent uppercase tracking-widest">
              {landmark.location}
            </p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
              {landmark.name}
            </h3>
            <p className="text-lg text-muted-foreground italic">
              {landmark.nameEnglish}
            </p>
          </div>
          
          <p className="text-base text-foreground/80 leading-relaxed mt-6">
            {shortDescription}
          </p>

          <div className="pt-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium group-hover:bg-accent/90 transition-colors">
              {t.viewDetail}
              <span>→</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className={`${reversed ? 'md:order-1' : 'md:order-2'} relative`}>
          <div className="w-full h-auto rounded-xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
            <img
              src={landmark.image || "/placeholder.svg"}
              alt={landmark.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-xl" />
          </div>
        </div>
      </div>
    </Link>
  );
}

