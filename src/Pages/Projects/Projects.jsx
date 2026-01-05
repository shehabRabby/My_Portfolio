import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../Components/Project/ProjectCard";
import AdvancedProject from "../../Components/Project/AdvancedProject";
import FoundationProjects from "../../Components/Project/FoundationProjects";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const allProjects = [
    { id: 1, type: "elite", name: "Book Haven", description: "A full-stack digital library application featuring secure Firebase authentication and comprehensive book management.", image: "https://i.ibb.co.com/Fqd5VkY0/book-haven.jpg", stack: ["React", "Node.js", "Express.js", "MongoDB Atlas"], github: "https://github.com/shehabRabby/Final-Project-Client", live: "https://bookhaven1001.netlify.app/" },
    { id: 2, type: "elite", name: "GameZone", description: "A modern platform for game discovery with interactive UI and real-time data exploration.", image: "https://i.ibb.co/example2.jpg", stack: ["React", "Firebase", "TailwindCSS", "Framer Motion"], github: "https://github.com/shehabRabby/Final-Project-Client", live: "https://bookhaven1001.netlify.app/" },
    { id: 3, type: "elite", name: "Find Apps", description: "Interactive dashboard for app discovery using visualization libraries.", image: "https://i.ibb.co/example3.jpg", stack: ["React.js", "Tailwind CSS", "RESTful APIs", "Recharts"], github: "https://github.com/shehabRabby/Final-Project-Client", live: "https://bookhaven1001.netlify.app/" },
    { id: 4, type: "advanced", name: "GameZone", description: "A modern platform for game discovery with interactive UI and real-time data exploration.", image: "https://i.ibb.co/example2.jpg", stack: ["React", "Firebase", "TailwindCSS", "Framer Motion"], github: "https://github.com/shehabRabby/Final-Project-Client", live: "https://bookhaven1001.netlify.app/" },
    { id: 5, type: "advanced", name: "Find Apps", description: "Interactive dashboard for app discovery using visualization libraries.", image: "https://i.ibb.co/example3.jpg", stack: ["React.js", "Tailwind CSS", "RESTful APIs", "Recharts"], github: "https://github.com/shehabRabby/Final-Project-Client", live: "https://bookhaven1001.netlify.app/" },
    { id: 6, type: "advanced", name: "MediCare", description: "Advanced doctor-patient portal with scheduling features.", image: "https://i.ibb.co/example4.jpg", stack: ["React", "Express", "Stripe"], github: "https://github.com/shehabRabby/Final-Project-Client", live: "https://bookhaven1001.netlify.app/" },
    { id: 7, type: "advanced", name: "Weather App", description: "Dynamic weather forecasting application using public APIs.", image: "https://i.ibb.co.com/Fqd5VkY0/book-haven.jpg", stack: ["JavaScript", "HTML5", "CSS3"], github: "https://github.com/shehabRabby/Final-Project-Client", live: "https://bookhaven1001.netlify.app/" },
    { id: 8, type: "beginner", name: "Weather App", description: "Dynamic weather forecasting application using public APIs.", image: "https://i.ibb.co.com/Fqd5VkY0/book-haven.jpg", stack: ["JavaScript", "HTML5", "CSS3"], github: "https://github.com/shehabRabby/Final-Project-Client", live: "https://bookhaven1001.netlify.app/" },
    { id: 9, type: "beginner", name: "Weather App", description: "Dynamic weather forecasting application using public APIs.", image: "https://i.ibb.co.com/Fqd5VkY0/book-haven.jpg", stack: ["JavaScript", "HTML5", "CSS3"], github: "https://github.com/shehabRabby/Final-Project-Client", live: "https://bookhaven1001.netlify.app/" },
    { id: 10, type: "beginner", name: "Weather App", description: "Dynamic weather forecasting application using public APIs.", image: "https://i.ibb.co.com/Fqd5VkY0/book-haven.jpg", stack: ["JavaScript", "HTML5", "CSS3"], github: "https://github.com/shehabRabby/Final-Project-Client", live: "https://bookhaven1001.netlify.app/" },
    { id: 11, type: "beginner", name: "Weather App", description: "Dynamic weather forecasting application using public APIs.", image: "https://i.ibb.co.com/Fqd5VkY0/book-haven.jpg", stack: ["JavaScript", "HTML5", "CSS3"], github: "https://github.com/shehabRabby/Final-Project-Client", live: "https://bookhaven1001.netlify.app/" }
  ];

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  const eliteProjects = currentProjects.filter(p => p.type === "elite");
  const advancedProjects = currentProjects.filter(p => p.type === "advanced"); 
  const foundationProjects = currentProjects.filter(p => p.type === "beginner");

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#050505] pt-24 pb-20 overflow-hidden">
      
      {/* 1. ADVANCED BACKGROUND LAYER */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Dynamic Light Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, -50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"
        />

        {/* Floating Binary/Code Particles */}
        <div className="absolute inset-0 opacity-[0.03] text-[10px] font-mono text-white select-none overflow-hidden leading-relaxed">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "100%" }}
              animate={{ y: "-100%" }}
              transition={{ duration: Math.random() * 20 + 20, repeat: Infinity, ease: "linear", delay: i * 2 }}
              style={{ left: `${i * 10}%` }}
              className="absolute whitespace-nowrap"
            >
              {"<section /> { opacity: 0 } .map(p => p.id) console.log('Deploy') 010101101 export default const Projects = () => { return <div>"}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center relative">
          {/* Header Glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-10 bg-purple-500/20 blur-2xl" />
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter"
          >
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">Archive.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 mt-6 max-w-xl mx-auto text-lg"
          >
            Showcasing my evolution as a MERN specialist—from foundational logic to elite full-stack ecosystems.
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* SECTION 1: ELITE */}
            {eliteProjects.length > 0 && (
              <section className="mb-32">
                <div className="flex items-center gap-6 mb-12">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-purple-500 font-bold mb-1">Tier 01</span>
                    <h2 className="text-3xl font-black text-white">Elite Full-Stack Systems</h2>
                  </div>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {eliteProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            )}

            {/* SECTION 2: ADVANCED */}
            {advancedProjects.length > 0 && (
              <div className="mb-32">
                <AdvancedProject projects={advancedProjects} />
              </div>
            )}

            {/* SECTION 3: FOUNDATION */}
            {foundationProjects.length > 0 && (
              <FoundationProjects projects={foundationProjects} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* PAGINATION CONTROLS */}
        <motion.div 
          layout
          className="mt-32 flex flex-col items-center gap-8 py-10 border-t border-white/5"
        >
          <div className="flex gap-3">
            {[...Array(totalPages)].map((_, index) => (
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`h-14 w-14 flex items-center justify-center rounded-2xl transition-all text-sm font-black tracking-widest ${
                  currentPage === index + 1 
                  ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)]" 
                  : "bg-white/5 border border-white/10 text-gray-500 hover:border-purple-500/50 hover:text-white"
                }`}
              >
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </motion.button>
            ))}
          </div>
          <div className="flex items-center gap-4">
             <div className="w-12 h-[1px] bg-white/10" />
             <p className="text-gray-600 text-[10px] uppercase tracking-[0.5em] font-black">
               Discovery Progress: {Math.round((currentPage / totalPages) * 100)}%
             </p>
             <div className="w-12 h-[1px] bg-white/10" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;