import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router"; 
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  // UPDATED: Modified Google Drive link structure to trigger direct download
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1bSzSiFJQ8LlTwnbteF6PBFh1NmHE2S6B";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about-me" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Academic", path: "/academic" },
    { name: "Achievement", path: "/achievement" },
    { name: "Contact", path: "/contact-me" },
  ];

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-purple-600 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo with Tech-Brutalist Style */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="text-xl font-black tracking-[0.3em] text-white cursor-pointer"
          >
            <Link to="/" className="flex items-center gap-2">
              <span className="bg-purple-600 px-1.5 py-0.5 rounded-sm">S</span>
              <span className="hidden sm:inline">HEHAB</span>
              <span className="text-purple-500">.</span>
            </Link>
          </motion.div>

          {/* Desktop Menu - High End Refinement */}
          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center space-x-10 text-[10px] uppercase tracking-[0.25em] font-bold">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={idx} className="relative py-2">
                    <Link
                      to={link.path}
                      className={`transition-all duration-300 relative z-10 ${
                        isActive ? "text-white" : "text-gray-500 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                    
                    {isActive && (
                      <motion.div 
                        layoutId="nav-glow"
                        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <motion.a
              href={resumeLink}
              download="Shehab_Rabby_Resume.pdf" // UPDATED: Added download attribute
              whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 border border-white/20 rounded-xl text-[9px] font-black text-white uppercase tracking-[0.2em] transition-all"
            >
              RESUME <FaDownload className="text-[10px]" />
            </motion.a>
          </div>

          {/* Mobile Toggle with Pulse Effect */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-white text-xl z-[60] bg-white/5 backdrop-blur-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* Mobile Sidebar - Ultra Modern Glass Reveal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-black/90 backdrop-blur-2xl z-50 flex flex-col p-10 lg:hidden border-l border-white/5"
            >
              <div className="mt-20 flex flex-col h-full">
                <p className="text-[10px] font-black text-purple-500 tracking-[0.5em] uppercase mb-10 border-b border-white/5 pb-4">
                  Navigation Menu
                </p>
                
                <ul className="flex flex-col space-y-8">
                  {navLinks.map((link, idx) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-4xl font-black tracking-tighter transition-all flex items-center gap-6 ${
                            isActive 
                              ? "text-white" 
                              : "text-white/20 hover:text-white/60"
                          }`}
                        >
                          <span className="text-xs font-mono text-purple-600">0{idx + 1}</span>
                          {link.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mt-auto pb-10">
                  <a
                    href={resumeLink}
                    download="Shehab_Rabby_Resume.pdf" // UPDATED: Added download attribute
                    className="w-full flex justify-center items-center gap-4 py-6 bg-white text-black rounded-3xl font-black uppercase text-xs tracking-widest hover:bg-purple-600 hover:text-white transition-all shadow-2xl"
                  >
                    Get My CV <FaDownload />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;