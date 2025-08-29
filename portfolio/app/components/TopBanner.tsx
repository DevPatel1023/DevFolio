"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useEffect, useState } from "react";

const TopBanner = () => {
  // states for staggered animation
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Stagger each element's visibility
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full bg-background border border-zinc-900">
      {/* img banner - full width */}
      <div
        className={`relative w-full h-[250px] overflow-hidden border-zinc-800
          transition-all duration-700 ease-out 
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
      >
        <Image
          src="/img4.jpg"
          alt="banner-img"
          fill
          sizes="100vw"
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Content with padding */}
      <div className="px-4">
        {/* avtar */}
        <Avatar
          className={`
            transition-all duration-700 ease-out delay-200 h-[150px] w-[150px] border border-zinc-800
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
        >
          <AvatarImage src="/profile.png" />
          <AvatarFallback className="text-2xl">DP</AvatarFallback>
        </Avatar>

        {/* name and info and socials */}
        <div className="flex md:flex-row flex-col md:justify-between w-full items-start">
          {/* LEFT side: name, info */}
          <div
            className={`transition-all duration-700 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            <h1 className="text-2xl pt-2">Patel Dev</h1>
            <p className="text-zinc-500">
              <span>22 • </span>
              <span>CSE • </span>
              <span>Developer • </span>
              <span>India</span>
            </p>
          </div>

          {/* RIGHT side: socials */}
          <div
            className={`flex md:gap-4 gap-6 items-center pt-4 transition-all duration-700 ease-out
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }
            `}
          >
            {/* GitHub */}
            <a
              href="https://github.com/DevPatel1023"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white"
            >
              <svg
                height="32"
                width="32"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="block"
              >
                <path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522 0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014 1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186 1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43 3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743 2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z" />
              </svg>
            </a>
            <a
              href="https://x.com/PatelDev1023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                height="32"
                width="32"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="block"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            {/* gmail */}
            <a
              href="mailto:devp4143@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/gmail.png"
                alt="gmail-logo"
                width={40}
                height={40}
                unoptimized
              />
            </a>
            <a
              href="https://www.linkedin.com/in/patel-dev-02513b26a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 34 34"
                className="h-10 w-auto"
                fill="none"
              >
                <rect width="34" height="34" rx="4" fill="#0077B5" />
                <path
                  fill="white"
                  d="M10.2 14h3.1v10.9h-3.1V14zm1.6-5.3c1 0 1.6.7 1.6 1.6 0 .9-.6 1.6-1.6 1.6h-.1c-1 0-1.6-.7-1.6-1.6s.6-1.6 1.6-1.6zm4.3 5.3h3v1.5h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5.1v6h-3.1v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.3h-3.1V14z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* designation and headline */}
        <div
          className={`
            pb-6 mt-6 border-b border-zinc-800/20 transition-all duration-800 ease-out delay-200 
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
        >
          <p className="text-zinc-500 pb-3">
            Full Stack Developer | AI Enthusiast
          </p>
          <p>
            Building digital products with a problem-first mindset —{" "}
            <span className="text-zinc-500">
              using structured thinking and modern tools to craft clean,
              scalable solutions
            </span>
          </p>
        </div>
      </div>

      {/* about section with padding */}
      <div className="px-4 bg-[#141414]">
        {/* Subtle separator above Introduction */}
        <div className="w-full mt-6 mb-4">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent"></div>
        </div>
        <div
          className={`mt-3 pb-4 transition-all duration-900 ease-out delay-200 
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }
          `}
        >
          <h1 className="pb-2 shimmer text-zinc-500 text-xl font-serif font-medium tracking-tight overflow-hidden">
            Introduction
          </h1>
          <p className="text-zinc-500 text-sm">
            I'm an average developer who writes code —
            <span className="text-white">
              {" "}
              but what sets me apart is how I approach problems
            </span>
            . I dive deep to understand the root issues and craft solutions that
            truly move the product forward.{" "}
            <span className="text-red-400">Lately </span>, my focus has been on
            <span className="text-blue-400"> AI-integrated systems</span>. I'm
            actively learning and applying AI to build smarter, more adaptive
            features that enhance both user experience and functionality. I work
            across the entire development lifecycle —{" "}
            <span className="text-white">from design to deployment </span>— and
            I don't stop there. I believe in continuously monitoring, refining,
            and evolving products to keep them aligned with real-world needs.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TopBanner;
