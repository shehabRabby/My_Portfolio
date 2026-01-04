import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCircle } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-[#050505] py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Identity & Status */}
          <div className="flex items-center gap-4">
            <div className="text-lg font-black tracking-tighter text-white">
              SHEHAB<span className="text-purple-500">.</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
              <FaCircle className="text-[6px] text-green-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                Available for projects
              </span>
            </div>
          </div>

          {/* Center: MERN Stack (Compact Icons) */}
          <div className="flex items-center gap-5 text-gray-500">
            {[SiMongodb, SiExpress, SiReact, SiNodedotjs].map((Icon, idx) => (
              <Icon key={idx} className="hover:text-purple-500 transition-colors cursor-pointer text-lg" />
            ))}
          </div>

          {/* Right: Socials & Copyright */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {[
                { icon: <FaGithub />, link: "#" },
                { icon: <FaLinkedinIn />, link: "#" },
                { icon: <FaEnvelope />, link: "mailto:your@email.com" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-[11px] font-medium tracking-widest text-gray-600 uppercase border-l border-white/10 pl-6 hidden sm:block">
              © {currentYear}
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;