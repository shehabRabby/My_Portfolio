import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router"; // Use useLocation to detect current path
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Hook to get current route

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1MFjgM3taPDCTlZqzzax57t3DWzLlL6Xs";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black tracking-tighter text-white cursor-pointer"
        >
          <Link to="/">
            SHEHAB<span className="text-purple-500">.</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          <ul className="flex space-x-8 text-[11px] uppercase tracking-[0.2em] font-black">
            {navLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.li key={idx} className="relative group">
                  <Link
                    to={link.path}
                    className={`transition-colors duration-300 ${
                      isActive ? "text-purple-500" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                  
                  {/* Active Indicator Dot/Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-purple-500 shadow-[0_0_10px_#a855f7]"
                    />
                  )}
                </motion.li>
              );
            })}
          </ul>

          <motion.a
            href={resumeLink}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-[10px] font-black text-white uppercase tracking-widest"
          >
            RESUME <FaDownload />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white text-2xl z-[60]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-[80%] bg-[#080808] z-50 flex flex-col p-12 lg:hidden border-l border-white/10"
          >
            <ul className="flex flex-col space-y-6 mt-10">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-black tracking-tighter transition-all ${
                        isActive 
                          ? "text-purple-500 translate-x-2" 
                          : "text-white/40 hover:text-white"
                      } flex items-center gap-4`}
                    >
                      {isActive && <div className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />}
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-auto">
              <a
                href={resumeLink}
                className="w-full flex justify-center items-center gap-3 py-5 bg-white text-black rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-purple-500 hover:text-white transition-all"
              >
                Download CV <FaDownload />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;