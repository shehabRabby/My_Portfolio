import React from "react";
import ProjectCard from "./ProjectCard";

const FoundationProjects = ({ projects }) => {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-2xl font-bold text-white">Foundation Projects</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-500/50 to-transparent" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 opacity-90">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FoundationProjects;
