"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const techStack = [
  // Languages
  {
    id: 1,
    name: "JavaScript",
    category: "language",
    icon: "/tech-icons/javascript.svg",
  },
  {
    id: 2,
    name: "TypeScript",
    category: "language",
    icon: "/tech-icons/typescript.svg",
  },
  {
    id: 3,
    name: "C",
    category: "language",
    icon: "/tech-icons/c.svg",
  },
  {
    id: 4,
    name: "C++",
    category: "language",
    icon: "/tech-icons/cpp.svg",
  },
  {
    id: 5,
    name: "Java",
    category: "language",
    icon: "/tech-icons/java.svg",
  },
  {
    id: 6,
    name: "Python",
    category: "language",
    icon: "/tech-icons/python.svg",
  },

  // Databases
  {
    id: 7,
    name: "MongoDB",
    category: "database",
    icon: "/tech-icons/mongodb.svg",
  },
  {
    id: 8,
    name: "PostgreSQL",
    category: "database",
    icon: "/tech-icons/postgresql.svg",
  },
  {
    id: 9,
    name: "SQL",
    category: "database",
    icon: "/tech-icons/sql.svg",
  },

  // Frameworks & Libraries
  {
    id: 10,
    name: "React",
    category: "framework",
    icon: "/tech-icons/react.svg",
  },
  {
    id: 11,
    name: "Next.js",
    category: "framework",
    icon: "/tech-icons/nextjs.svg",
  },
  {
    id: 12,
    name: "Node.js",
    category: "runtime",
    icon: "/tech-icons/nodejs.svg",
  },
  {
    id: 13,
    name: "Express",
    category: "framework",
    icon: "/tech-icons/express.svg",
  },
  {
    id: 14,
    name: "Tailwind CSS",
    category: "css-framework",
    icon: "/tech-icons/tailwindcss.svg",
  },

  // Tools
  {
    id: 15,
    name: "Git",
    category: "tool",
    icon: "/tech-icons/git.svg",
  },
];

const TechStack = () => {
  return (
    <div className="w-full bg-background">
      <div className=" px-3 flex justify-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2500, // Delay between slides (in ms)
              stopOnInteraction: false, // Keeps autoplay running after interaction
            }),
          ]}
          className="w-full max-w-xs py-10"
        >
          <CarouselContent>
            {techStack.map(({ name, id, icon }) => (
              <CarouselItem key={id} className="basis-1/6">
                <Image
                  src={icon}
                  alt={name}
                  width={48}
                  height={48}
                  className="object-contain"
                  unoptimized
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default TechStack;
