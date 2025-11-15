'use client';

import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  image: { id: number; url: string; name: string } | null;
  images?: string[];
  landmarkName?: string;
  onClose: () => void;
}

export default function ImageModal({ image, images, landmarkName, onClose }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const allImages = image ? (images && images.length > 0 ? images : [image.url]) : [];
  
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  }, [allImages.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  }, [allImages.length]);

  useEffect(() => {
    if (image && images) {
      const index = images.findIndex(img => img === image.url);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [image, images]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (allImages.length > 1) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          goToPrevious();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          goToNext();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [allImages.length, onClose, goToPrevious, goToNext]);

  if (!image) return null;

  const currentImage = allImages[currentIndex];
  const currentName = images && images.length > 1 
    ? `${landmarkName || image.name} - ${currentIndex + 1}`
    : image.name;

  const canNavigate = allImages.length > 1;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="max-w-5xl w-full max-h-[90vh] bg-background rounded-2xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            ✕
          </button>

          {/* Previous Button */}
          {canNavigate && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {canNavigate && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
          
          {/* Image */}
          <img
            key={currentIndex}
            src={currentImage || "/placeholder.svg"}
            alt={currentName}
            className="w-full h-full object-contain max-h-[80vh]"
          />

          {/* Image Counter */}
          {canNavigate && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
              {currentIndex + 1} / {allImages.length}
            </div>
          )}
        </div>
        
        <div className="p-6 border-t border-border">
          <h3 className="text-2xl font-serif font-bold text-foreground">
            {currentName}
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            {canNavigate 
              ? 'Nhấn ESC để đóng • Mũi tên trái/phải để chuyển ảnh'
              : 'Nhấn ESC hoặc click ngoài để đóng'
            }
          </p>
        </div>
      </div>
    </div>
  );
}
