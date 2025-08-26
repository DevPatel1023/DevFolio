"use client"

import Image from "next/image";
import { useEffect, useState } from "react"

const images : string[] = [
  // './img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg'
]

const TopBanner = ({}) => {
  const [imgIndex,setImgIndex] = useState<number>(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setImgIndex((prev) => (prev+1) % images.length)
    },4000);

    return ()=> clearInterval(interval);
  },[]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
        {/* banner img */}
        {images.map((src, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            i === imgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Log to verify path */}
          {console.log('Rendering image:', src)}
          <Image
            src={src}
            alt={`Slide ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  )
}

export default TopBanner
