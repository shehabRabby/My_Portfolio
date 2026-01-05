import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
  FaTerminal,
  FaUserAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const Aboutme = () => {
  const stats = [
    { icon: <FaCode />, label: "Frontend", value: "React / Next.js / Tailwind" },
    { icon: <FaServer />, label: "Backend", value: "Node / Express / Firebase" },
    { icon: <FaDatabase />, label: "Database", value: "MongoDB / PostgreSQL" },
    { icon: <FaRocket />, label: "Projects", value: "35+ Scalable Apps" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#050505]" id="about">
      {/* 1. ANIMATED BACKGROUND ELEMENTS */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: Enhanced Image Interaction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 space-y-8"
          >
            <motion.div 
              whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
              className="relative group perspective-1000"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 border border-dashed border-purple-500/30 rounded-[2rem] opacity-50"
              />

              <div className="relative z-10 bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group-hover:border-purple-500/50 transition-colors duration-500">
                <img
                  src="https://i.ibb.co.com/Fqd5VkY0/20251226-164824-2.jpg"
                  alt="Md. Shehab Al Rabby"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 object-cover"
                />
                
                {/* System Status Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-2 w-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"
                    />
                    <p className="text-[10px] font-mono tracking-widest text-gray-300 uppercase">
                      Core System: Online
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Badge with Hover Lift */}
              <motion.div 
                whileHover={{ y: -10, scale: 1.1 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-20 hidden md:block border border-white/20"
              >
                <p className="text-4xl font-black text-white">35+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/90 font-bold">MERN Stack</p>
              </motion.div>
            </motion.div>

            {/* Info Cards with Staggered Fade */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 gap-3"
            >
              {[
                { icon: <FaUserAlt className="text-purple-500" />, text: "Md. Shehab Al Rabby" },
                { icon: <FaMapMarkerAlt className="text-pink-500" />, text: "Dhaka, Bangladesh" },
                { icon: <FaTerminal className="text-blue-500" />, text: "Full-Stack Enthusiast" }
              ].map((info, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-colors"
                >
                  {info.icon}
                  <span className="text-sm text-gray-400 font-medium">{info.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Text & Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-purple-500"></div>
                <h2 className="text-purple-500 font-bold tracking-[0.4em] uppercase text-xs">
                  The Architect
                </h2>
              </div>
              <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6">
                I am{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-[length:200%_auto] animate-gradient">
                  Shehab.
                </span>
              </h3>
              
              <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
                Transforming complex ideas into <span className="text-purple-400 font-medium italic">high-performance</span> digital realities.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                My journey isn't just about syntax and semicolons; it's about engineering 
                <span className="text-white"> meaningful solutions</span>. I specialize in building 
                scalable MERN ecosystems that balance technical complexity with elegant UI.
              </p>

              {/* Floating Skill Badges */}
              <div className="flex flex-wrap gap-3">
                {["UI/UX Design", "REST API", "State Management", "Firebase", "JWT Auth"].map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ y: -5, scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.2)" }}
                    className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-purple-500/5 border border-purple-500/20 text-purple-400 rounded-xl cursor-default transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tech Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 overflow-hidden"
                >
                  {/* Subtle Card Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="text-purple-500 mb-4 text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-1">
                      {stat.label}
                    </p>
                    <p className="text-sm text-gray-200 font-semibold group-hover:text-white transition-colors">
                      {stat.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <Link to="/readmy-story" className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black rounded-2xl overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-all">
                <span className="relative z-10 uppercase tracking-tighter">Read My Story</span>
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;