import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../Components/Project/ProjectCard";
import AdvancedProject from "../../Components/Project/AdvancedProject";
import FoundationProjects from "../../Components/Project/FoundationProjects";

const Projects = () => {
  // 1. Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Adjust this number as needed

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

  // 2. Pagination Logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  
  // We slice the total list to get projects for current page
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Re-filter the sliced list for sections
  const eliteProjects = currentProjects.filter(p => p.type === "elite");
  const advancedProjects = currentProjects.filter(p => p.type === "advanced"); 
  const foundationProjects = currentProjects.filter(p => p.type === "beginner");

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to top of project section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            Project <span className="text-purple-500">Archive.</span>
          </motion.h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Showcasing my evolution as a MERN specialist—from foundational logic to elite full-stack ecosystems.
          </p>
        </header>

        {/* SECTION 1: ELITE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage} // Ensures animation triggers on page change
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {eliteProjects.length > 0 && (
              <section className="mb-32">
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-2xl font-bold text-white">Elite Full-Stack Systems</h2>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
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
              <AdvancedProject projects={advancedProjects} />
            )}

            {/* SECTION 3: FOUNDATION */}
            {foundationProjects.length > 0 && (
              <FoundationProjects projects={foundationProjects} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* PAGINATION CONTROLS */}
        <div className="mt-20 flex flex-col items-center gap-6">
            <div className="flex gap-4">
                {[...Array(totalPages)].map((_, index) => (
                  <button 
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`h-12 w-12 flex items-center justify-center border rounded-xl transition-all font-bold ${
                      currentPage === index + 1 
                      ? "bg-purple-500 border-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]" 
                      : "border-white/10 text-gray-400 hover:border-purple-500 hover:text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
            </div>
            <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
              Showing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, allProjects.length)} of {allProjects.length} Projects
            </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;