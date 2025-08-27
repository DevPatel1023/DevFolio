"use client";

import Image from "next/image";

const TopBanner = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[250px] overflow-hidden border border-zinc-900">
        <Image
          src="/img3.jpg"
          alt="banner-img"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          unoptimized
        />
      </div>
    </div>
  );
};
export default TopBanner;
