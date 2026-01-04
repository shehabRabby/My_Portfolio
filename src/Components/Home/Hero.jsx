import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";

const Hero = () => {
  const orbitRef = useRef(null);

  useEffect(() => {
    // GSAP Animation for the rotating icons
    const icons = orbitRef.current.querySelectorAll(".orbit-icon");

    gsap.to(icons, {
      duration: 20,
      rotation: 360,
      repeat: -1,
      ease: "none",
      transformOrigin: "center 150px", // Adjust based on your circle size
    });
  }, []);

  return (
    <main className="mb-2 relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] px- pt-20 pb-10 text-white">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-0 z-0 h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,255,0.1),transparent_50%)]"></div>
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-purple-600/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 -left-10 h-48 w-48 rounded-full bg-pink-600/20 blur-[80px] pointer-events-none"></div>

      <div className="z-10 flex w-full max-w-7xl flex-col items-center text-center md:flex-row md:text-left md:justify-between">
        {/* Left Side: Text Content */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              Hi, I'm <br></br>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Shehab
              </span>
            </h1>
            <h2 className="mt-2 text-2xl md:text-3xl font-medium text-gray-400">
              Full Stack & MERN Specialist
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-sm text-gray-400 leading-relaxed"
          >
            I solve complex problems with elegant code. Specializing in
            high-performance web applications and seamless user experiences.
          </motion.p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-6 sm:flex-row md:justify-start">
            <a
              href="https://drive.google.com/uc?export=download&id=1MFjgM3taPDCTlZqzzax57t3DWzLlL6Xs"
              className="group relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-white transition-all hover:scale-105 active:scale-95"
              download="Shehab_Rabby_Resume.pdf"
            >
              <span>Download Resume</span>
              <FaDownload className="ml-2 transition-transform group-hover:translate-y-1" />
            </a>
            <div className="flex gap-4">
              {[FaGithub, FaLinkedinIn, FaEnvelope].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-white/20 hover:text-purple-400"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Animated Visual */}
        <div className="relative mt-16 flex h-80 w-80 items-center justify-center md:mt-0">
          {/* Main Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-4 border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.4)]"
          >
            <img
              alt="Meriem"
              className="h-full w-full object-cover"
              src="https://i.ibb.co.com/xS73k3xp/206878672.png" // Replace with your actual hosted image URL
            />
          </motion.div>

          {/* Rotating Orbit Icons (Using GSAP) */}
          <div ref={orbitRef} className="absolute inset-0 z-20">
            <div className="orbit-icon absolute left-1/2 top-0 -ml-6 h-12 w-12 rounded-full border border-white/20 bg-black flex items-center justify-center shadow-lg shadow-blue-500/40">
              <FaReact className="text-blue-400 text-2xl" />
            </div>
            {/* Add more icons here, GSAP will handle the math */}
          </div>

          {/* Background Decorative Rings */}
          <div className="absolute h-[350px] w-[350px] rounded-full border border-white/5 animate-pulse"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-20 flex flex-col items-center opacity-40"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">
          Scroll to Explore
        </span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </main>
  );
};

export default Hero;
