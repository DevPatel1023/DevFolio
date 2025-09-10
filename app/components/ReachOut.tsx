"use client";
import React from "react";
import AnimatedShimmerText from "./AnimatedShimmerText";
import { FaLinkedin, FaXTwitter, FaGithub, FaPaperclip } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ReachOutProps {
  title?: string;
  subtitle?: string;
  socialLinks?: {
    twitter?: string;
    resume?: string;
    github?: string;
    linkedin?: string;
    mail?: string;
  };
}

const ReachOut = ({
  title = "Let's connect",
  subtitle = "Find me on these platforms",
  socialLinks = {
    twitter: "https://x.com/PatelDev1023",
    github: "https://github.com/DevPatel1023",
    linkedin: "https://www.linkedin.com/in/patel-dev-02513b26a/",
    resume:
      "https://docs.google.com/document/d/1hx0PxTsSoS16UsImJnPCAu6sWmaTdo1W/edit?usp=drive_link",
    mail: "mailto:work.devpatel19046@gmail.com",
  },
}: ReachOutProps) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("Link clicked:", e.currentTarget.href);
  };

  const links = [
    { icon: <FaGithub />, name: "GitHub", url: socialLinks.github },
    { icon: <FaXTwitter />, name: "Twitter", url: socialLinks.twitter },
    { icon: <FaLinkedin />, name: "LinkedIn", url: socialLinks.linkedin },
    { icon: <IoMdMail />, name: "Email", url: socialLinks.mail },
    { icon: <FaPaperclip />, name: "Resume", url: socialLinks.resume },
  ].filter((link) => link.url);

  return (
    <div className="w-full bg-background border border-zinc-200 dark:border-zinc-800 rounded-lg">
      <div className="px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <AnimatedShimmerText text={title} />
          <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="group"
            >
              <Card className="flex items-center justify-center  h-12 p-4 transition-all duration-400 hover:shadow-md hover:border-zinc-200 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
                <div className="flex flex-row items-center justify-center gap-3">
                  <div className="text-xl text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors">
                    {link.icon}
                  </div>
                  <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {link.name}
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Dev Patel. All rights reserved.</span>
            <span>
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;