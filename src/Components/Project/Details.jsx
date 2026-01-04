import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaTools, FaLightbulb, FaExclamationTriangle } from "react-icons/fa";
import { allProjects } from "../../Data/ProjectsData.jsx";

const Details = () => {
  const { id } = useParams();
  
  // Find the project that matches the ID in the URL
  const project = allProjects.find((p) => p.id === parseInt(id));

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <Link to="/projects" className="ml-4 text-purple-500 underline">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Button */}
        <Link to="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors mb-8 group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Archive
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10"
          >
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              {project.name}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-bold transition-all">
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-xl font-bold transition-all">
                <FaGithub /> Client Repo
              </a>
            </div>
          </motion.div>
        </div>

        {/* Detailed Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tech Stack */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6 text-purple-500">
              <FaTools className="text-xl" />
              <h3 className="text-xl font-bold text-white">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl md:col-span-2">
            <div className="flex items-center gap-3 mb-4 text-orange-500">
              <FaExclamationTriangle className="text-xl" />
              <h3 className="text-xl font-bold text-white">Challenges Faced</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {project.challenges || "The main challenge was ensuring high performance while scaling features."}
            </p>
          </div>

          {/* Future Plans */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl md:col-span-3">
            <div className="flex items-center gap-3 mb-4 text-green-500">
              <FaLightbulb className="text-xl" />
              <h3 className="text-xl font-bold text-white">Future Improvements</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {project.improvements || "Planned updates include dark mode optimization and PWA support."}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Details;