import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaGithub,
  FaFigma,
  FaCode,
  FaDatabase,
  FaLock,
  FaCreditCard,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiDaisyui,
  SiCplusplus,
} from "react-icons/si";

const SkillCategory = ({ title, skills, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-8">
      <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
      <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
        {title}
      </h3>
    </div>

    <div className="grid grid-cols-2 gap-y-8 gap-x-4">
      {skills.map((skill, idx) => (
        <div key={idx} className="flex items-center gap-3 group cursor-default">
          <div
            className="text-2xl transition-transform duration-300 group-hover:scale-110"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </div>
          <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const categories = [
    {
      title: "Frontend Core",
      skills: [
        { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
        { name: "JS (ES6+)", icon: <FaJs />, color: "#F7DF1E" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "DaisyUI", icon: <SiDaisyui />, color: "#FF9903" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "Axios", icon: <FaCode />, color: "#5A29E4" },
      ],
    },
    {
      title: "Backend & DB",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Express", icon: <SiExpress />, color: "#FFFFFF" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
        { name: "REST APIs", icon: <FaDatabase />, color: "#3178C6" },
        { name: "Auth/JWT", icon: <FaLock />, color: "#FF5733" },
      ],
    },
    {
      title: "Tools & Languages",
      skills: [
        { name: "GitHub", icon: <FaGithub />, color: "#FFFFFF" },
        { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
        { name: "Vercel", icon: <SiVercel />, color: "#FFFFFF" },
        { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
        { name: "Stripe", icon: <FaCreditCard />, color: "#635BFF" },
        { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
      ],
    },
  ];

  return (
    <section className="bg-[#050505] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
            TECH <span className="text-purple-500">STACK.</span>
          </h2>
          <p className="text-white/40 max-w-md uppercase text-[10px] tracking-[0.2em] font-bold">
            Optimized for performance and clean architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <SkillCategory
              key={i}
              title={cat.title}
              skills={cat.skills}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
