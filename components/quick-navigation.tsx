'use client';

import { useState, useEffect, useRef } from 'react';
import { List, ChevronDown, ChevronUp } from 'lucide-react';
import type { Language } from '@/lib/translations';

interface Landmark {
  name: string;
  nameEnglish: string;
}

interface QuickNavigationProps {
  landmarks: Landmark[];
  language: Language;
}

export default function QuickNavigation({ landmarks, language }: QuickNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = landmarks.map((_, index) => {
        const element = document.getElementById(`landmark-${index}`);
        return element ? { index, element } : null;
      }).filter(Boolean) as { index: number; element: HTMLElement }[];

      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const { index, element } = sections[i];
        if (element.offsetTop <= scrollPosition) {
          setActiveIndex(index);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [landmarks]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const scrollToLandmark = (index: number) => {
    const element = document.getElementById(`landmark-${index}`);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 hidden md:block">
      <div className="relative" ref={menuRef}>
        {/* Dropdown Menu - Above button */}
        {isOpen && (
          <div className="absolute right-0 bottom-full mb-0 w-64 max-h-[280px] overflow-y-auto bg-popover border border-border rounded-lg rounded-b-none shadow-xl">
            <div className="p-2 space-y-1">
              {landmarks.map((landmark, index) => (
                <button
                  key={index}
                  onClick={() => scrollToLandmark(index)}
                  className={`
                    w-full text-left
                    px-4 py-3
                    rounded-md
                    transition-colors
                    hover:bg-accent hover:text-accent-foreground
                    ${activeIndex === index ? 'bg-accent/50 text-accent-foreground' : 'text-foreground'}
                  `}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-mono text-muted-foreground min-w-[2ch] mt-1">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">
                        {landmark.name}
                      </div>
                      <div className="text-xs text-muted-foreground truncate mt-0.5">
                        {landmark.nameEnglish}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            flex items-center gap-2
            px-4 py-3
            bg-accent text-accent-foreground
            rounded-lg
            shadow-lg hover:shadow-xl
            transition-all duration-200
            font-medium
            ${isOpen ? 'rounded-t-none' : ''}
          `}
          aria-label="Danh sách địa danh"
          title="Danh sách địa danh"
        >
          <List className="w-5 h-5" />
          <span className="hidden sm:inline">Danh sách</span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 transition-transform duration-200" />
          ) : (
            <ChevronDown className="w-4 h-4 transition-transform duration-200" />
          )}
        </button>
      </div>
    </div>
  );
}

