// Image.tsx
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, fill, className = '' }) => (
  <img
    src={src}
    alt={alt}
    className={`${fill ? 'absolute inset-0 w-full object-contain h-full' : ''} ${className}`}
  />
);

export default Image;