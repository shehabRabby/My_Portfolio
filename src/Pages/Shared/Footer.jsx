import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCircle } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/shehabRabby" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/shehabalrabby/" },
    { icon: <FaEnvelope />, link: "mailto:shehabrabby764@gmail.com" },
  ];

  const mernStack = [
    { Icon: SiMongodb, color: "hover:text-green-500" },
    { Icon: SiExpress, color: "hover:text-white" },
    { Icon: SiReact, color: "hover:text-blue-400" },
    { Icon: SiNodedotjs, color: "hover:text-green-400" },
  ];

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#030303] pt-12 pb-8 overflow-hidden">
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-10">
          
          {/* Top Row: Brand & MERN */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="text-2xl font-black tracking-tighter text-white">
                SHEHAB<span className="text-purple-600">.</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
                <FaCircle className="text-[6px] text-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                  System Active / 2026
                </span>
              </div>
            </div>

            {/* MERN Icons with specialized hover */}
            <div className="flex items-center gap-8 bg-white/[0.02] border border-white/5 px-8 py-4 rounded-2xl backdrop-blur-md">
              {mernStack.map((tech, idx) => (
                <tech.Icon 
                  key={idx} 
                  className={`text-xl text-gray-600 transition-all duration-300 cursor-help ${tech.color} transform hover:scale-125`} 
                />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom Row: Socials & Context */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Social Group */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, backgroundColor: "rgba(168,85,247,0.1)", borderColor: "rgba(168,85,247,0.3)" }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 text-gray-400 hover:text-white transition-all transform-gpu"
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>

            {/* Copyright & Location */}
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">
                Designed & Built by Shehab
              </p>
              <div className="flex items-center gap-4 text-[9px] text-gray-600 font-mono">
                <span>© {currentYear} ALL RIGHTS RESERVED</span>
                <span className="hidden sm:block text-white/10">|</span>
                <span className="hidden sm:block">DHAKA, BD (GMT+6)</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Ambient Bottom Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;