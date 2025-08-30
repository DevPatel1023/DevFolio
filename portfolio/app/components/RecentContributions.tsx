"use client";

import React from "react";
import AnimatedShimmerText from "./AnimatedShimmerText";

const RecentContributions = () => {
  return (
    <div className="w-full bg-background border border-zinc-900 px-3"> 
      <div className="flex flex-row gap-3 items-center">
        <AnimatedShimmerText text="Recent Contributions till" />
        <p className="text-zinc-500 text-medium">
          <span>●</span>Aug 30 2025
        </p>
      </div>
      <div className="text-zinc-500 text-sm">
        <p className="pb-3">
          <span className="text-white">Co-founded Fixkar</span>, a startup initiative focused on “offering transparent, tech-enabled home service solutions”. Contributed to system architecture, technical research,designed user flows and development.
        </p>
        <p className="pb-3">
          Participated in the <span className="text-white">Bolt.New Hackathon (2025)</span> — collaborated on a
          full-stack project <span className="text-white">
            solomate</span> with a focus on technical design, architecture
          planning, and product research.
        </p>
        <p className="pb-3">
          Currently focused on improving my development skills and expanding
          into open-source contributions and personal projects.
        </p>
      </div>
    </div>
  );
};

export default RecentContributions;
