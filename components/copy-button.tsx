'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

interface CopyButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CopyButton({ text, className = '', size = 'md' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('Đã sao chép!', {
        description: `Đã sao chép "${text}" vào clipboard`,
        duration: 2000,
      });
      
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      toast.error('Không thể sao chép', {
        description: 'Vui lòng thử lại',
        duration: 2000,
      });
    }
  };

  const sizeClasses = {
    sm: 'w-6 h-6 p-1',
    md: 'w-8 h-8 p-1.5',
    lg: 'w-10 h-10 p-2',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center justify-center
        rounded-md
        text-muted-foreground hover:text-foreground
        hover:bg-accent
        transition-colors
        focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
        ${sizeClasses[size]}
        ${className}
      `}
      aria-label="Sao chép tên"
      title="Sao chép tên"
    >
      {copied ? (
        <Check className={`${iconSizes[size]} text-green-500`} />
      ) : (
        <Copy className={iconSizes[size]} />
      )}
    </button>
  );
}

