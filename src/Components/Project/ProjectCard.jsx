import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router"; // Import for navigation

const ProjectCard = ({ project }) => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleDetailsClick = () => {
    // Navigates to the details route using the specific project ID
    navigate(`/projects-details/${project.id}`);
    // Optional: Scroll to top of the next page
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 h-full flex flex-col"
    >
      {/* Image Wrapper */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

        {/* Floating Tech Stack */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-black/50 backdrop-blur-md text-[10px] text-white rounded-full border border-white/10 uppercase tracking-widest"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          {/* Detailed View Button - Fixed with Navigation */}
          <button 
            onClick={handleDetailsClick}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-white bg-purple-600 px-5 py-2.5 rounded-xl hover:bg-purple-700 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-purple-900/20"
          >
            <FaInfoCircle /> Details
          </button>

          {/* Quick Links */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-xl"
              title="View Source Code"
            >
              <FaGithub />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-xl"
              title="View Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;