import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, FaExternalLinkAlt, FaArrowLeft, FaTools, 
  FaLightbulb, FaExclamationTriangle, FaTerminal 
} from "react-icons/fa";
import { allProjects } from "../../Data/ProjectsData.jsx";

const Details = () => {
  const { id } = useParams();
  const project = allProjects.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white font-mono">
        <motion.h2 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-2xl font-bold mb-4"
        >
          404_PROJECT_NOT_FOUND
        </motion.h2>
        <Link to="/projects" className="text-purple-500 hover:text-white transition-colors">
          {">"} Return to Archive
        </Link>
      </div>
    );
  }

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 pb-20 px-6 overflow-hidden">
      
      {/* 1. DYNAMIC BACKGROUND ENGINE */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />
      </div>

      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto relative z-10"
      >
        
        {/* HEADER SECTION */}
        <motion.div variants={itemVars} className="mb-12">
          <Link to="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-400 transition-all group font-mono text-xs uppercase tracking-widest">
            <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            Back to Data Stream
          </Link>
        </motion.div>

        {/* HERO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* IMAGE PREVIEW WITH GLOW */}
          <motion.div 
            variants={itemVars}
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-7 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-video">
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover" 
              />
            </div>
          </motion.div>

          {/* PROJECT IDENTITY */}
          <motion.div variants={itemVars} className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-tighter">
                {project.type} System
              </span>
              <span className="h-px w-8 bg-white/20" />
              <span className="text-white/30 font-mono text-[10px]">ID: 00{project.id}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
              {project.name.split(" ").map((word, i) => (
                <span key={i} className={i === 1 ? "text-purple-500" : "text-white"}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ y: -5, backgroundColor: "#7e22ce" }}
                whileTap={{ scale: 0.95 }}
                href={project.live} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 bg-purple-600 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-colors shadow-lg shadow-purple-500/20"
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all"
              >
                <FaGithub /> Source Code
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* DATA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tech Stack Card */}
          <motion.div 
            variants={itemVars}
            className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 text-purple-500/20 text-4xl group-hover:rotate-12 transition-transform">
              <FaTools />
            </div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-purple-500 mb-8 flex items-center gap-2">
              <FaTerminal /> Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Experience Card (Challenges) */}
          <motion.div 
            variants={itemVars}
            className="md:col-span-2 bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-orange-500/10 text-6xl group-hover:scale-110 transition-transform">
              <FaExclamationTriangle />
            </div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-6">
              Development Challenges
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg max-w-2xl">
              {project.challenges || "Implemented complex state management patterns and optimized database queries to maintain sub-second latency during peak user traffic."}
            </p>
          </motion.div>

          {/* Evolution Card (Improvements) */}
          <motion.div 
            variants={itemVars}
            className="md:col-span-3 bg-gradient-to-br from-purple-900/10 to-transparent border border-white/5 p-10 rounded-[2.5rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-green-500/10 text-6xl">
              <FaLightbulb />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-green-500 mb-6">
                  Future Roadmap
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg max-w-3xl">
                  {project.improvements || "Upcoming sprints focus on implementing Redis caching layers and expanding the microservices architecture to support global scaling."}
                </p>
              </div>
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex-shrink-0 w-24 h-24 rounded-full border border-green-500/20 flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 font-mono text-xs">
                  V2.0
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};

export default Details;