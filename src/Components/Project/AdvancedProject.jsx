import React from 'react';
import ProjectCard from './ProjectCard';

const AdvancedProject = ({ projects }) => {
    return (
        <section className="mb-32">
            <div className="flex items-center gap-4 mb-10">
                <h2 className="text-2xl font-bold text-white">Advanced Web Apps</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default AdvancedProject;