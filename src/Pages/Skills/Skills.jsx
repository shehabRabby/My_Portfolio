import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaJs, FaHtml5, FaGitAlt, FaGithub, FaFigma, FaServer, FaCode 
} from "react-icons/fa";
import { 
  SiMongodb, SiTailwindcss, SiFirebase, SiVercel, SiPostman, SiFramer 
} from "react-icons/si";

// Using HEX/RGBA constants to prevent oklch animation warnings
const THEME = {
  purple: "#a855f7",
  purpleGlow: "rgba(168, 85, 247, 0.15)",
  border: "rgba(255, 255, 255, 0.08)",
  cardBg: "rgba(255, 255, 255, 0.01)"
};

const SkillCategory = ({ title, skills, delay, span = "lg:col-span-1" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    whileHover={{ 
      borderColor: "rgba(168, 85, 247, 0.4)",
      backgroundColor: "rgba(255, 255, 255, 0.03)" 
    }}
    className={`${span} relative bg-[${THEME.cardBg}] backdrop-blur-3xl border border-[${THEME.border}] rounded-[2.5rem] p-10 overflow-hidden group transition-colors duration-500`}
  >
    {/* Noise Texture Overlay */}
    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_12px_#a855f7]" />
          <h3 className="text-[11px] font-black text-white/40 uppercase tracking-[0.5em]">
            {title}
          </h3>
        </div>
        <div className="text-[10px] font-mono text-purple-500/50">0x0{delay * 10}</div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-8">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center gap-4 group/item"
          >
            <div className="relative">
               {/* Fixed RGBA Glow to avoid Framer Motion errors */}
               <div className="absolute inset-0 bg-purple-500/20 blur-2xl opacity-0 group-hover/item:opacity-100 transition-opacity rounded-full" />
               <motion.div 
                 whileTap={{ scale: 0.9 }}
                 className="relative w-16 h-16 flex items-center justify-center text-4xl text-white/20 group-hover/item:text-white transition-all duration-500"
               >
                {skill.icon}
              </motion.div>
            </div>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/20 group-hover/item:text-purple-400 transition-colors text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  const frontendSkills = [
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiVercel /> },
    { name: "Animations", icon: <SiFramer /> },
    { name: "UI Design", icon: <FaFigma /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <FaServer /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Auth", icon: <FaCode /> },
  ];

  const toolset = [
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Git Flow", icon: <FaGitAlt /> },
    { name: "Vercel", icon: <SiVercel /> },
  ];

  return (
    <section className="min-h-screen bg-[#050505] py-32 px-6 relative overflow-hidden">
      
      {/* 1. ADVANCED BACKGROUND: The "Neural" Hub */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08)_0%,transparent_70%)]" />
        
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-30"
        >
          <div className="w-full h-full border border-purple-500/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-dashed border-purple-500/10 rounded-full" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-px w-12 bg-purple-500/50" />
            <span className="text-purple-500 font-mono text-[10px] uppercase tracking-[0.5em]">System Capabilities</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.8]"
            >
              CORE<br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-purple-500 animate-gradient">ENGINE.</span>
            </motion.h2>

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="max-w-xs space-y-6"
            >
              <p className="text-white/40 text-sm font-medium leading-relaxed uppercase tracking-wider">
                Expertise in architecting high-frequency MERN ecosystems with a focus on performance and atomic design.
              </p>
              <div className="h-1 w-full bg-white/5 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileInView={{ x: "0%" }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="h-full w-full bg-purple-500" 
                />
              </div>
            </motion.div>
          </div>
        </header>

        {/* 2. ENHANCED BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SkillCategory title="Frontend Architecture" skills={frontendSkills} delay={0.1} span="lg:col-span-2" />
          <SkillCategory title="Server Logic" skills={backendSkills} delay={0.2} />
          <SkillCategory title="Vitals & Tools" skills={toolset} delay={0.3} />
          
          {/* Custom Specialty Card */}
          <motion.div
            whileHover={{ scale: 0.99 }}
            className="lg:col-span-2 relative p-1 bg-gradient-to-r from-purple-500/20 via-transparent to-white/5 rounded-[2.5rem] overflow-hidden"
          >
            <div className="bg-[#0a0a0a] rounded-[2.4rem] p-12 h-full flex flex-col md:flex-row items-center justify-between gap-8 group">
               <div className="space-y-4 text-center md:text-left">
                  <h4 className="text-2xl font-bold text-white tracking-tight">MERN Specialization</h4>
                  <p className="text-white/40 max-w-sm text-sm leading-relaxed">
                    Advanced integration of MongoDB aggregation pipelines with React Context and optimized Node.js streams.
                  </p>
               </div>
               <div className="flex -space-x-4">
                  {[FaReact, FaNodeJs, SiMongodb].map((Icon, i) => (
                    <div key={i} className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl text-purple-500 backdrop-blur-xl group-hover:translate-y-[-10px] transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                      <Icon />
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Analytics Footer */}
        <div className="mt-32 pt-16 border-t border-white/5 flex flex-wrap justify-between gap-12">
           {[
            { val: "25+", label: "Integrated Systems" },
            { val: "99.9%", label: "Code Reliability" },
            { val: "MERN", label: "Primary Stack" },
            { val: "V4.0", label: "Engine Version" }
           ].map((stat, i) => (
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: i * 0.1 }}
               key={i} 
               className="space-y-2"
             >
               <div className="text-3xl font-black text-white tabular-nums tracking-tighter">{stat.val}</div>
               <div className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">{stat.label}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;