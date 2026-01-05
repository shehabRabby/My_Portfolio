import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import gsap from "gsap";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Hero = () => {
  const orbitRef = useRef(null);
  const containerRef = useRef(null);

  // Mouse Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  useEffect(() => {
    const icons = orbitRef.current.querySelectorAll(".orbit-icon");
    
    // Mathematically distribute icons in a circle and rotate them
    icons.forEach((icon, index) => {
      const angle = (index / icons.length) * (Math.PI * 2);
      const radius = 160; // Distance from center
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      gsap.set(icon, { x, y });

      // Infinite Rotation of the whole group
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      // Counter-rotate icons so they stay upright
      gsap.to(icon, {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    });
  }, []);

  return (
    <main 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] pt-20 pb-10 text-white"
    >
      {/* 1. ADVANCED BACKGROUND: Parallax Glows */}
      <motion.div 
        style={{ x: useTransform(mouseX, [-500, 500], [50, -50]), y: useTransform(mouseY, [-500, 500], [50, -50]) }}
        className="absolute top-0 left-0 z-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,255,0.08),transparent_60%)]"
      />
      
      <div className="z-10 flex w-full max-w-7xl flex-col items-center text-center md:flex-row md:text-left md:justify-between px-6">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-8 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-purple-500 font-mono tracking-[0.3em] text-sm uppercase mb-4 block"
            >
              Available for Projects
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Shehab
              </span>
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl font-light text-gray-400">
              Crafting <span className="text-white border-b border-purple-500/50">MERN</span> Masterpieces
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-gray-400 text-lg leading-relaxed"
          >
            I architect high-performance web applications where 
            <span className="text-purple-400"> speed </span> meets 
            <span className="text-pink-400"> aesthetic </span> perfection.
          </motion.p>

          {/* Action Buttons with Hover Effects */}
          <div className="flex flex-col items-center gap-6 sm:flex-row md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="group relative flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 text-black font-bold transition-all"
            >
              <span>Download Resume</span>
              <FaDownload className="ml-2 group-hover:translate-y-1 transition-transform" />
            </motion.a>
            
            <div className="flex gap-4">
              {[FaGithub, FaLinkedinIn, FaEnvelope].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.15)" }}
                  href="#"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all"
                >
                  <Icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: 3D Parallax Visual */}
        <motion.div 
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="relative mt-20 flex h-96 w-96 items-center justify-center md:mt-0"
        >
          {/* Main Profile Image with Glow */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.3 }}
            className="relative z-10 h-72 w-72 p-2 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-[0_0_60px_rgba(168,85,247,0.3)]"
          >
            <div className="h-full w-full rounded-full overflow-hidden border-4 border-[#050505]">
              <img
                alt="Shehab"
                className="h-full w-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                src="https://i.ibb.co.com/xS73k3xp/206878672.png" 
              />
            </div>
          </motion.div>

          {/* 2. ADVANCED ORBIT ICONS */}
          <div ref={orbitRef} className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="orbit-icon absolute h-14 w-14 rounded-full border border-white/20 bg-black/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <FaReact className="text-blue-400 text-2xl" />
            </div>
            <div className="orbit-icon absolute h-14 w-14 rounded-full border border-white/20 bg-black/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_rgba(247,223,30,0.5)]">
              <FaJs className="text-yellow-400 text-2xl" />
            </div>
            <div className="orbit-icon absolute h-14 w-14 rounded-full border border-white/20 bg-black/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_rgba(131,205,41,0.5)]">
              <FaNodeJs className="text-green-500 text-2xl" />
            </div>
            <div className="orbit-icon absolute h-14 w-14 rounded-full border border-white/20 bg-black/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
              <FaDatabase className="text-purple-400 text-2xl" />
            </div>
          </div>

          {/* Decorative rotating dashed ring */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute h-[420px] w-[420px] rounded-full border border-dashed border-white/10"
          />
        </motion.div>
      </div>

      {/* 3. ANIMATED SCROLL MOUSE */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40"
      >
        <div className="w-[26px] h-[45px] border-2 border-white rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;