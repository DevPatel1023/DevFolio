import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const Experience = () => {
  return (
    <div className="w-full px-3 bg-background border border-zinc-900">
      <h1 className="shimmer mt-3 text-zinc-500 text-xl font-serif font-medium tracking-tight overflow-hidden shine">
        Professional Experience
      </h1>

      {/* adding companies */}
      <div>
        <Avatar className="w-[35px] h-[35px]">
          <AvatarImage src="/elecon.png" />
          <AvatarFallback className="text-2xl">DP</AvatarFallback>
          
        </Avatar>
      </div>
    </div>
  );
};

export default Experience;
