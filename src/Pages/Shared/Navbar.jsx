import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

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
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-purple-600 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
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

          <div className="hidden lg:flex items-center gap-12">
            <ul className="flex items-center space-x-10 text-[10px] uppercase tracking-[0.25em] font-bold">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={idx} className="relative py-2">
                    <Link
                      to={link.path}
                      className={`transition-all duration-300 relative z-10 ${
                        isActive
                          ? "text-white"
                          : "text-gray-500 hover:text-white"
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
              download="Shehab_Rabby_Resume.pdf"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff",
                color: "#000",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 border border-white/20 rounded-xl text-[9px] font-black text-white uppercase tracking-[0.2em] transition-all"
            >
              RESUME <FaDownload className="text-[10px]" />
            </motion.a>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-10 h-10 flex items-center justify-center border border-white/10 rounded-full text-white text-xl z-[60] bg-white/5 backdrop-blur-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>

        {/* --- ADJUSTED MOBILE SIDEBAR --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 w-full h-screen bg-[#0a0a0a] z-50 flex flex-col p-8 lg:hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-sm font-black tracking-widest text-purple-500 uppercase">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="flex flex-col h-full overflow-y-auto pb-20">
                <ul className="flex flex-col space-y-4">
                  {navLinks.map((link, idx) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-2xl font-bold tracking-tight transition-all flex items-center gap-4 py-2 ${
                            isActive ? "text-white" : "text-white/40"
                          }`}
                        >
                          <span className="text-[10px] font-mono text-purple-600">
                            0{idx + 1}
                          </span>
                          {link.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mt-10">
                  <a
                    href={resumeLink}
                    download="Shehab_Rabby_Resume.pdf"
                    className="w-full flex justify-center items-center gap-4 py-4 bg-purple-600 text-white rounded-2xl font-black uppercase text-[11px] tracking-widest shadow-2xl"
                  >
                    Download CV <FaDownload />
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
