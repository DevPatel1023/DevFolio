"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images: string[] = [
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
];

const TopBanner = () => {
  const [imgIndex, setImgIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* banner images */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            i === imgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${i + 1}`}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
            unoptimized
          />
        </div>
      ))}
      
      {/* Optional: Add navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIndex(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i === imgIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TopBanner;