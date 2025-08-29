"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";

interface GitHubContributionsProps {
  username: string;
}

const ContributionsGithub: React.FC<GitHubContributionsProps> = ({
  username,
}) => {
  return (
    <div className="w-full bg-background border border-zinc-900  pt-3 pb-4">
      <div className="px-3">
        <div className="flex items-start gap-2">
          <h1 className="pb-2 shimmer text-zinc-500 text-xl font-serif font-medium tracking-tight overflow-hidden">
            Github Contributions
          </h1>
          <p className="text-zinc-500 font-medium">
            <span className="opacity-30">●</span>@DevPatel1023
          </p>
        </div>
      </div>
        <GitHubCalendar
          username={username}
          fontSize={10}
          blockSize={10.8}
          blockMargin={2}
        />
    </div>
  );
};

export default ContributionsGithub;
