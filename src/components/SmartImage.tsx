import React, { useState } from 'react';
import { Scissors } from 'lucide-react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
  containerClassName?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  fallbackLabel,
  className = '',
  containerClassName = '',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#171717] via-[#101010] to-[#080808] p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A45C]/30 bg-[#C9A45C]/10 text-[#C9A45C]">
          <Scissors className="h-5 w-5" />
        </div>
        <span className="font-display text-sm tracking-wider text-white/90 uppercase">
          {fallbackLabel || 'Salão Masculino Mateus'}
        </span>
        <span className="mt-1 max-w-xs text-xs text-neutral-400">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
