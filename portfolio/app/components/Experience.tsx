import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const Experience = () => {
  return (
    <div className="w-full px-3 bg-background border border-zinc-900">
      <h1 className="shimmer mt-3 text-zinc-500 text-xl font-serif font-medium tracking-tight overflow-hidden shine">
        Professional Experience
      </h1>

      {/* adding companies details */}
      <div className="flex flex-col mt-3">
        {/* company-1 */}
        <div className="flex justify-between py-2 items-center">
          <div className="flex flex-row gap-3">
          <Avatar className="w-[35px] h-[35px]">
            <AvatarImage src="/elecon.png" />
            <AvatarFallback className="text-2xl">Tech.Elecon</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h1>Tech. Elecon Pvt.Ltd</h1>
            <p className="text-sm text-zinc-500">Full stack developer Intern</p>
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
            <h1>Tech. Elecon Pvt.Ltd</h1>
            <p className="text-sm text-zinc-500">Frontend developer Intern</p>
          </div>
          </div>
          <p className="text-sm text-zinc-500">May 2024 - June 2024</p>
        </div>
      </div>

      {/* details about contributions */}
      <div>
        
      </div>
    </div>
  );
};

export default Experience;
