import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const orbitRef = useRef(null);
  const imageFrameRef = useRef(null);

  // --- Framer Motion Mouse Physics ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  const rotateX = useTransform(springY, [-400, 400], [12, -12]);
  const rotateY = useTransform(springX, [-400, 400], [-12, 12]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance Animation for Text (Staggered Split)
      gsap.from(".char-animate", {
        y: 100,
        opacity: 0,
        rotationX: -90,
        stagger: 0.05,
        duration: 1.2,
        ease: "expo.out",
      });

      // 2. Orbiting Tech Stack Logic
      const icons = orbitRef.current.querySelectorAll(".orbit-icon");
      icons.forEach((icon, i) => {
        const angle = (i / icons.length) * (Math.PI * 2);
        const radius = 200;
        gsap.set(icon, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
        });
      });

      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      // Counter-rotate icons to stay upright
      gsap.to(".orbit-icon", {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      // 3. Floating Effect for Image Frame
      gsap.to(imageFrameRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX - innerWidth / 2);
    mouseY.set(clientY - innerHeight / 2);
  };

  return (
    <main
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-[#020202] overflow-hidden text-white pt-20"
    >
      {/* --- ADVANCED UI BACKGROUND --- */}
      {/* Reactive Dot Grid */}
      <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]">
        <div className="absolute inset-0 bg-[grid-size:40px_40px] bg-[radial-gradient(circle_1px_at_1px_1px,#333_1px,transparent_0)]" />
      </div>

      {/* Dynamic Glow following mouse */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10"
      />

      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* --- LEFT CONTENT: TEXT REFINEMENT --- */}
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-purple-400">
                Available for 2026 Opportunities
              </span>
            </motion.div>

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none flex flex-col">
              <span className="char-animate overflow-hidden">HI, I'M</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-500 char-animate">
                SHEHAB
              </span>
            </h1>
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
            Architecting{" "}
            <span className="text-white">Full-Stack Ecosystems</span> where raw
            performance meets high-fidelity digital art.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <motion.a
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.98 }}
              href="https://drive.google.com/file/d/1bSzSiFJQ8LlTwnbteF6PBFh1NmHE2S6B/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-black px-10 py-5 rounded-2xl font-black text-sm tracking-widest flex items-center gap-3 transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              SEE RESUME{" "}
              <FaDownload className="group-hover:translate-y-1 transition-transform" />
            </motion.a>

            <div className="flex gap-4">
              {[
                { icon: FaGithub, link: "https://github.com/shehabRabby" },
                {
                  icon: FaLinkedinIn,
                  link: "https://www.linkedin.com/in/shehabalrabby/",
                },
                { icon: FaEnvelope, link: "mailto:shehabrabby764@gmail.com" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  className="w-14 h-14 border border-white/10 rounded-2xl flex items-center justify-center text-xl transition-all"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT CONTENT: HOLOGRAPHIC IMAGE --- */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1200 }}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          {/* Animated UI Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[450px] h-[450px] border border-white/5 rounded-full border-dashed"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-[520px] h-[520px] border border-purple-500/10 rounded-full"
          />

          <div ref={imageFrameRef} className="relative z-10">
            {/* The Main "Hologram" Container */}
            <div className="relative w-80 h-[420px] rounded-[4rem] p-1 bg-gradient-to-b from-purple-500/40 to-transparent backdrop-blur-sm overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://i.ibb.co.com/xS73k3xp/206878672.png"
                alt="Shehab"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              {/* Overlay Glass Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-white/5 pointer-events-none" />
            </div>

            {/* Floating Tech Badges */}
            <div
              ref={orbitRef}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {[
                { icon: FaReact, color: "text-blue-400", bg: "bg-blue-400/10" },
                {
                  icon: FaJs,
                  color: "text-yellow-400",
                  bg: "bg-yellow-400/10",
                },
                {
                  icon: FaNodeJs,
                  color: "text-green-500",
                  bg: "bg-green-500/10",
                },
                {
                  icon: FaDatabase,
                  color: "text-purple-400",
                  bg: "bg-purple-400/10",
                },
              ].map((tech, i) => (
                <div key={i} className="orbit-icon absolute">
                  <div
                    className={`w-16 h-16 ${tech.bg} backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl transform-gpu`}
                  >
                    <tech.icon className={`${tech.color} text-2xl`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Label Decorative */}
          <div className="absolute -bottom-10 right-0 md:right-10 bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl transform rotate-6">
            <span className="text-[10px] font-mono text-purple-400 block mb-1">
              CURRENT LOCATION
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              Dhaka, Bangladesh
            </span>
          </div>
        </motion.div>
      </div>

      {/* Infinite Scroll Mouse UI */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <span className="text-[8px] tracking-[0.5em] uppercase text-white font-black">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
      </div>
    </main>
  );
};

export default Hero;
