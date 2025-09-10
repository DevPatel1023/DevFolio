import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { ProjectCardProps } from "../types/Projectcardprops";

const ProjectCard = ({
  title,
  image,
  imageAlt,
  githubUrl,
  technologies,
  date,
}: ProjectCardProps) => {
  return (
    <Card className="max-w-90 md:max-w-120 group rounded-xl overflow-hidden transition-all duration-300 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md">
      {/* Project Image */}
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Image
            src={
              image ||
              "/placeholder.svg?height=192&width=500&query=project%20image"
            }
            alt={imageAlt || "Project Image"}
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />
          {/* title */}
          <div className="absolute left-3 right-3 bottom-3">
            <div className="flex items-center justify-between gap-2">
              <span className="px-2 py-1 rounded-md bg-zinc-100/90 dark:bg-zinc-900/70 text-zinc-900 dark:text-zinc-100 text-sm font-semibold shadow-sm">
                {title}
              </span>
              <span className="flex items-center text-xs text-zinc-700 dark:text-zinc-300 px-1.5 py-1 rounded bg-zinc-100/80 dark:bg-zinc-800/60">
                <Calendar className="w-3 h-3 mr-1" />
                {date}
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-zinc-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardContent>

      {/* Technologies */}
      <div className="px-6 py-3">
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer with Actions */}
      <CardFooter className="bg-transparent px-6 py-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-3 py-2 text-sm font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-700"
            aria-label="View source code on GitHub"
          >
            <FaGithub className="w-4 h-4" />
            <span>View Code</span>
          </a>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
