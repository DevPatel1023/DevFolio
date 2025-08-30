import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import AnimatedShimmerText from "./AnimatedShimmerText";

const Experience = () => {
  return (
    <div className="w-full bg-background border border-zinc-900">
      <h1 className="px-3 shimmer mt-3 text-zinc-500 text-xl font-serif font-medium tracking-tight overflow-hidden shine">
        Professional Experience
      </h1>

      {/* adding companies details */}
      <div className="flex flex-col mt-3 px-3">
        {/* company-1 */}
        <div className="flex justify-between py-2 items-center">
          <div className="flex flex-row gap-3">
            <Avatar className="w-[35px] h-[35px]">
              <AvatarImage src="/elecon.png" />
              <AvatarFallback className="text-2xl">Tech.Elecon</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="hover:text-blue-400 cursor-pointer">Tech. Elecon Pvt.Ltd</h1>
              <p className="text-sm text-zinc-500">
                Full stack developer Intern
              </p>
            </div>
          </div>
          <p className="text-sm text-zinc-500">Jan 2025 - April 2025</p>
        </div>
        {/* company-2 */}
        <div className="flex justify-between py-2 items-center">
          <div className="flex flex-row gap-3">
            <Avatar className="w-[35px] h-[35px]">
              <AvatarImage src="/elecon.png" />
              <AvatarFallback className="text-2xl">Tech.Elecon</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="hover:text-blue-400 cursor-pointer">Tech. Elecon Pvt.Ltd</h1>
              <p className="text-sm text-zinc-500">Frontend developer Intern</p>
            </div>
          </div>
          <p className="text-sm text-zinc-500">May 2024 - June 2024</p>
        </div>
      </div>

      {/* details about contributions */}
      <div className="bg-zinc-900 px-3 text-zinc-500">
        <AnimatedShimmerText text="Technical Contributions" />
        <p className="text-sm py-2">
          <span className="text-white">At Elecon</span>, I contributed to the
          Quoteflow project, <span className="text-white">working across the frontend, backend, and database
          layers</span>. On the frontend, I implemented responsive UI components and
          improved user experience using modern frameworks. On the backend, I
          helped develop scalable APIs and integrated business logic with
          database operations. I also optimized NO-SQL queries and ensured data
          integrity across workflows.
        </p>
        <p className="text-sm py-2">
          <span className="text-white">At Elecon</span>, I worked as a Summer Intern, leading a small team while
          also contributing as a <span className="text-white">frontend developer</span>. I was responsible for
          building responsive components and pages for a social media-style UI
          platform. My work focused on clean UI/UX, mobile responsiveness, and
          component reusability. I also coordinated team efforts and ensured
          smooth collaboration throughout the internship.
        </p>
      </div>
    </div>
  );
};

export default Experience;
