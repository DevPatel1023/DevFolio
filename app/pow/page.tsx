import React from "react";
import ProjectCard from "../components/ProjectCard";
import { dataProjects } from "../data/projects";

const page = () => {
  return (
    <div className="w-screen space-y-2  text-center ">
      <div className="py-6">
        <h1 className="font-normal text-2xl text-white">Proof of Work</h1>
        <p className="text-zinc-400 text-lg">
          A showcase of my work and side projects.
        </p>
      </div>
      <div className="flex items-center px-3">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-3">
          {dataProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
