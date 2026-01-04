import React from "react";
import { motion } from "framer-motion";
// Importing from /fa and /fa6 which are the most stable icon sets in react-icons
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaGitAlt, FaGithub, FaFigma, FaServer, FaCode 
} from "react-icons/fa";
import { 
  SiMongodb, SiTailwindcss, SiFirebase, SiVercel 
} from "react-icons/si";

const SkillCategory = ({ title, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 hover:border-purple-500/30 transition-all duration-500 group"
  >
    <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
      <span className="w-8 h-[2px] bg-purple-500"></span>
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center gap-3 group/item">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl text-gray-400 group-hover/item:text-purple-500 group-hover/item:bg-purple-500/10 transition-all duration-300">
            {skill.icon}
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover/item:text-white transition-colors text-center">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const frontendSkills = [
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "Hooks", icon: <FaReact className="scale-75" /> },
    { name: "ES6+", icon: <FaJs className="opacity-60" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaServer /> }, // Switched to FaServer to avoid SiExpress errors
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "REST APIs", icon: <FaCode /> },
  ];

  const toolsSkills = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "VS Code", icon: <FaCode /> }, // Switched to FaCode to avoid SiVisualstudiocode errors
  ];

  return (
    <section className="min-h-screen bg-[#050505] py-32 px-6 relative overflow-hidden">
      {/* Visual background decor */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter"
          >
            TECH <span className="text-purple-600">STACK.</span>
          </motion.h2>
          <p className="text-gray-500 mt-8 max-w-2xl text-lg font-medium leading-relaxed">
            I build modern, scalable web applications using the MERN stack. My focus is on writing clean, maintainable code and creating seamless user experiences.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="lg:col-span-2">
            <SkillCategory title="Frontend Expertise" skills={frontendSkills} delay={0.1} />
          </div>
          <SkillCategory title="Backend Systems" skills={backendSkills} delay={0.2} />
          <SkillCategory title="Workflow & Tools" skills={toolsSkills} delay={0.3} />
        </div>

        {/* Professional summary footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-white/5 text-center"
        >
          <p className="text-gray-600 italic text-sm tracking-wide max-w-3xl mx-auto uppercase">
            Built 25+ responsive projects using React.js, Tailwind CSS, and Node.js
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;