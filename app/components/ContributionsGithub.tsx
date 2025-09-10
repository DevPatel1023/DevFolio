"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";
import AnimatedShimmerText from "./AnimatedShimmerText";

interface GitHubContributionsProps {
  username: string;
  variant? : 'full' | 'compact' | 'minimal';
}

const ContributionsGithub: React.FC<GitHubContributionsProps> = ({
  username,
  variant = 'full'
}) => {

  const isCompact = variant === 'compact' ;

  return (
    <div className="w-full bg-background border border-zinc-900">
      <div className="px-3">
        <div className="flex gap-2 items-center">
          <AnimatedShimmerText text="Github Contributions" />
          <p className="text-zinc-500 font-medium">
            <span className="opacity-30">●</span>@DevPatel1023
          </p>
        </div>
      </div>
      <div className="p-3">
        <GitHubCalendar
          username={username}
          fontSize={10}
          blockSize={isCompact ? 10.9 :  10.5}
          blockMargin={isCompact ? 4.5 : 2}
        />
      </div>
    </div>
  );
};

export default ContributionsGithub;
